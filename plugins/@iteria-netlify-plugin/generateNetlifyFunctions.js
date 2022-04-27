const fs = require('fs');

const executeCommitAddition2 = `
import NetlifyGraph, { CommitAdditionInput } from './netlifyGraph';

export const handler = async function (event, context) {
  const headOid = event.headers.headoid;
  const commitMessage = event.headers.commitmessage;
  const accessToken = event.authlifyToken;
  const branchName = ${process.env.BRANCH}  
  const repositoryNameWithOwner = ${process.env.REPOSITORY_URL.toString().replace(
    'https://github.com/',
    ''
  )} 
  const content = event.headers.content;
  const path = event.headers.filepath.substring(1);

  const input: CommitAdditionInput = {
    branchName: branchName,
    repositoryNameWithOwner: repositoryNameWithOwner,
    expectedHeadOid: headOid,
    contents1: content,
    path: path,
    headline: commitMessage
  };

  // @ts-ignore
  const { errors: ExecuteCommitErrors, data: ExecuteCommitData } =
    await NetlifyGraph.executeCommitAddition(input, { accessToken });

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      ExecuteCommitErrors: ExecuteCommitErrors,
      ExecuteCommitData: ExecuteCommitData
    }),
    headers: {
      'content-type': 'application/json'
    }
  };
};`;

const executeCommitAddition = `
import { executeCommit } from "../../netlifyFunctions/functions/ExecuteCommitAddition"

export const handler = async function (event, context) {
  
  console.log("tryin' to execute commit")

  let response = await executeteCommit(event)
  console.log("response")
  console.log(response)

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      ExecuteCommitErrors: response.errors,
      ExecuteCommitData: response.data
    }),
    headers: {
      'content-type': 'application/json'
    }
  }
}
`

const getFetchHeadOid = `import NetlifyGraph from './netlifyGraph'

export const handler = async function(event, context) {

  console.log(event.netlifyGraphToken)
  
  const {errors, data} = await NetlifyGraph.fetchFetchHeadOid({/* variables */}, {accessToken: event.netlifyGraphToken})

  return {
    statusCode: errors ? 500 : 200,
    body: JSON.stringify(errors || data),
    headers: {"Content-Type": "application/json"}
  }
}`;

const indexJs = `// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!
const buffer = require("buffer")
const crypto = require("crypto")
const https = require("https")
const process = require("process")

exports.verifySignature = (input) => {
const secret = input.secret
const body = input.body
const signature = input.signature

if (!signature) {
  console.error('Missing signature')
  return false
}

const sig = {}
for (const pair of signature.split(',')) {
  const [key, value] = pair.split('=')
  sig[key] = value
}

if (!sig.t || !sig.hmac_sha256) {
  console.error('Invalid signature header')
  return false
}

const hash = crypto
  .createHmac('sha256', secret)
  .update(sig.t)
  .update('.')
  .update(body)
  .digest('hex')

if (
  !crypto.timingSafeEqual(
    Buffer.from(hash, 'hex'),
    Buffer.from(sig.hmac_sha256, 'hex')
  )
) {
  console.error('Invalid signature')
  return false
}

if (parseInt(sig.t, 10) < Date.now() / 1000 - 300 /* 5 minutes */) {
  console.error('Request is too old')
  return false
}

return true
}

const operationsDoc = \`
mutation CommitAddition($contents: GitHubBase64String = "", $clientMutationId: String = "", $headline: String = "", $contents1: GitHubBase64String = "", $path: String = "", $expectedHeadOid: GitHubGitObjectID = null) @netlify(id: """2c9d16fa-b843-48a6-85df-8c3aca9d1882""", doc: """An empty mutation to start from""") {
gitHub {
  createCommitOnBranch(
    input: {
      branch: {
        branchName: ${process.env.BRANCH}, 
        repositoryNameWithOwner: ${process.env.REPOSITORY_URL.toString().replace(
          'https://github.com/',
          ''
        )}
      }, 
      fileChanges: {
        additions: {
          contents: $contents1, path: $path
        }
      }, 
      message: {
        headline: $headline
      }, 
      expectedHeadOid: $expectedHeadOid
    }
  ) {
    clientMutationId
  }
}
}

query fetchHeadOid @netlify() {
gitHub {
  repository(name: "example-material-ui", owner: "misosviso") {
    refs(refPrefix: "refs/heads/", first: 10) {
      edges {
        node {
          name
          target {
            oid
          }
        }
      }
    }
  }
}
}
\`

const httpFetch = (siteId, options) => {
    const reqBody = options.body || null
    const userHeaders = options.headers || {}
    const headers = {
      ...userHeaders,
      'Content-Type': 'application/json',
      'Content-Length': reqBody.length,
    }

    const timeoutMs = 30_000

    const reqOptions = {
      method: 'POST',
      headers: headers,
      timeout: timeoutMs,
    }

const url = 'https://serve.onegraph.com/graphql?app_id=' + siteId

const respBody = []

return new Promise((resolve, reject) => {
  const req = https.request(url, reqOptions, (res) => {
    if (res.statusCode && (res.statusCode < 200 || res.statusCode > 299)) {
      return reject(
        new Error(
          "Netlify Graph return non-OK HTTP status code" + res.statusCode,
        ),
      )
    }

    res.on('data', (chunk) => respBody.push(chunk))

    res.on('end', () => {
      const resString = buffer.Buffer.concat(respBody).toString()
      resolve(resString)
    })
  })

  req.on('error', (error) => {
    console.error('Error making request to Netlify Graph:', error)
  })

  req.on('timeout', () => {
    req.destroy()
    reject(new Error('Request to Netlify Graph timed out'))
  })

  req.write(reqBody)
  req.end()
})
}


const fetchNetlifyGraph = async function fetchNetlifyGraph(input) {
const query = input.query
const operationName = input.operationName
const variables = input.variables

const options = input.options || {}
const accessToken = options.accessToken
const siteId = options.siteId || process.env.SITE_ID

const payload = {
  query: query,
  variables: variables,
  operationName: operationName,
}

const result = await httpFetch(
  siteId,
  {
    method: 'POST',
    headers: {
      Authorization: accessToken ? "Bearer " + accessToken : '',
    },
    body: JSON.stringify(payload),
  },
)

return JSON.parse(result)
}


exports.verifyRequestSignature = (request, options) => {
const event = request.event
const secret = options.webhookSecret || process.env.NETLIFY_GRAPH_WEBHOOK_SECRET
const signature = event.headers['x-netlify-graph-signature']
const body = event.body

if (!secret) {
  console.error(
    'NETLIFY_GRAPH_WEBHOOK_SECRET is not set, cannot verify incoming webhook request'
  )
  return false
}

return verifySignature({ secret, signature, body: body || '' })
}

exports.executeCommitAddition  = (
    variables,
    options
  ) => {
    return fetchNetlifyGraph({
      query: operationsDoc,
      operationName: "CommitAddition",
      variables: variables,
      options: options || {},
    });
}


exports.fetchFetchHeadOid = (
    variables,
    options
  ) => {
    return fetchNetlifyGraph({
      query: operationsDoc,
      operationName: "fetchHeadOid",
      variables: variables,
      options: options || {},
    });
}


/**
* The generated NetlifyGraph library with your operations
*/
const functions = {
/**
* An empty mutation to start from
*/
executeCommitAddition : exports.executeCommitAddition ,
/**
* An empty query to start from
*/
fetchFetchHeadOid: exports.fetchFetchHeadOid
}

exports.default = functions

exports.handler = () => {
    // return a 401 json response
    return {
      statusCode: 401,
      body: JSON.stringify({
        message: 'Unauthorized',
      }),
    }
}`;

const indexTs = `// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
}

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  "path": Array<string | number>,
  "message": string,
  "extensions": Record<string, unknown>
};


// Add commit
export type CommitAdditionInput = {
 "contents"?: unknown;  
 /**
 * The unqualified name of the branch to append the commit to.
 */
 "branchName"?: string;  
 /**
 * The nameWithOwner of the repository to commit to.
 */
 "repositoryNameWithOwner"?: string;  
"clientMutationId"?: string;  
 /**
 * The headline of the message.
 */
 "headline"?: string;  
 /**
 * The base64 encoded contents of the file
 */
 "contents1"?: unknown;  
 /**
 * The path in the repository where the file will be located
 */
 "path"?: string;  
 /**
 * The git commit oid expected at the head of the branch prior to the commit
 */
 "expectedHeadOid"?: unknown
};

export type CommitAddition = {
  data: {
    gitHub: {
      createCommitOnBranch: {
      clientMutationId: string;
      };
    };
  };
  errors: Array<GraphQLError>;
};

export function executeCommitAddition (
  variables: CommitAdditionInput,
  options?: NetlifyGraphFunctionOptions
): Promise<CommitAddition>;

// Fetch last commit ID
export type FetchHeadOid = {
  /**
  * Any data from the function will be returned here
  */
data: {
  gitHub: {
  /**
  * Lookup a given repository by the owner and repository name.
  */
repository: {
  id: string;
  /**
  * The Ref associated with the repository's default branch.
  */
defaultBranchRef: {
  /**
  * The object the ref points to. Returns null when object does not exist.
  */
target: ;
};
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors: Array<GraphQLError>;
};

export function fetchFetchHeadOid(
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<FetchHeadOid>;
`;

exports.generateNetlifyFunctions = () => {
  fs.mkdir('./netlify', (err) => {
    if (err) {
      return console.error(err);
    }

    fs.mkdir('./netlify/functions', (err) => {

      console.log('Directory created netlify/functions successfully!');
      fs.writeFileSync(
        './netlify/functions/ExecuteCommitAddition.ts',
        executeCommitAddition
      );
      fs.writeFileSync(
        './netlify/functions/GetFetchHeadOid.ts',
        getFetchHeadOid
      );

      fs.mkdir('./netlify/functions/netlifyGraph', (err) => {
        if (err) {
          return console.error(err);
        }
        console.log(
          'Directory netlify/functions/netlifyGraph created successfully!'
        );
        fs.writeFileSync('./netlify/functions/netlifyGraph/index.js', indexJs);
      });
    });
  });
};
