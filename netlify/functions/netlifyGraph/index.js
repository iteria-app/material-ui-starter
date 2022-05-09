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

const operationsDoc = `mutation ExampleMutation @netlify(id: """b84e0aeb-e2a9-46c3-85fe-381933c8ee76""", doc: """An empty mutation to start from""") {
  gitHub(auths: {})
}

mutation executeCommitAddition @netlify(id: """79e47abc-cf64-4f4c-a66a-d7ecb7f3f167""", doc: """An example query to start with.""") {
  gitHub(auths: {})
}

query HeadOid @netlify(id: """d8ca26ea-df92-4d60-8065-e76b4b1ec10d""", doc: """An empty query to start from""") {
  gitHub {
    repository(name: "example-material-ui", owner: "PatrikOndrus") {
      ref(qualifiedName: "build-brach") {
        target {
          oid
        }
        name
      }
    }
  }
}

query HeadOids @netlify(id: """db064e81-e645-4469-bbb4-d18064cef33c""", doc: """An empty query to start from""") {
  gitHub {
    repository(name: "example-material-ui", owner: "PatrikOndrus") {
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

exports.executeExampleMutation  = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: operationsDoc,
        operationName: "ExampleMutation",
        variables: variables,
        options: options || {},
      });
    }


exports.executeExecuteCommitAddition  = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: operationsDoc,
        operationName: "executeCommitAddition",
        variables: variables,
        options: options || {},
      });
    }


exports.fetchHeadOid = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: operationsDoc,
        operationName: "HeadOid",
        variables: variables,
        options: options || {},
      });
    }


exports.fetchHeadOids = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: operationsDoc,
        operationName: "HeadOids",
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
  executeExampleMutation : exports.executeExampleMutation ,
  /**
  * An example query to start with.
  */
  executeExecuteCommitAddition : exports.executeExecuteCommitAddition ,
  /**
  * An empty query to start from
  */
  fetchHeadOid: exports.fetchHeadOid,
  /**
  * An empty query to start from
  */
  fetchHeadOids: exports.fetchHeadOids
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