// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!
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

const operationsDoc = `
mutation CommitAddition($contents: GitHubBase64String = "", $branchName: String = "", $repositoryNameWithOwner: String = "", $clientMutationId: String = "", $headline: String = "", $contents1: GitHubBase64String = "", $path: String = "", $expectedHeadOid: GitHubGitObjectID = null) @netlify(id: """2c9d16fa-b843-48a6-85df-8c3aca9d1882""", doc: """An empty mutation to start from""") {
  gitHub {
    createCommitOnBranch(
      input: {
        branch: {
          branchName: $branchName, 
          repositoryNameWithOwner: $repositoryNameWithOwner
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

mutation CommitDeletion($contents: GitHubBase64String = "", $branchName: String = "", $repositoryNameWithOwner: String = "", $clientMutationId: String = "", $headline: String = "", $expectedHeadOid: GitHubGitObjectID = null, $path: String = "") @netlify(id: """4c994897-cbb1-4d09-b1d1-ed41d60de031""", doc: """An empty mutation to start from""") {
  gitHub {
    createCommitOnBranch(
      input: {branch: {branchName: $branchName, repositoryNameWithOwner: $repositoryNameWithOwner}, fileChanges: {deletions: {path: $path}}, message: {headline: $headline}, expectedHeadOid: $expectedHeadOid}
    ) {
      clientMutationId
    }
  }
}

query ExampleQuery @netlify(id: """bc06d036-531a-4152-b883-7ecfff0d27df""", doc: """An example query to start with.""") {
  __typename
}

query fetchHeadOid @netlify(id: """b1476e35-b0d7-4065-a3b5-5db836263ed8""", doc: """An empty query to start from""") {
  gitHub {
    repository(name: "example-material-ui", owner: "misosviso") {
      id
      defaultBranchRef {
        target {
          ... on GitHubCommit {
            oid
          }
        }
      }
    }
  }
}
`

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


exports.executeCommitDeletion  = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: operationsDoc,
        operationName: "CommitDeletion",
        variables: variables,
        options: options || {},
      });
    }


exports.fetchExampleQuery = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: operationsDoc,
        operationName: "ExampleQuery",
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
  * An empty mutation to start from
  */
  executeCommitDeletion : exports.executeCommitDeletion ,
  /**
  * An example query to start with.
  */
  fetchExampleQuery: exports.fetchExampleQuery,
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
    }