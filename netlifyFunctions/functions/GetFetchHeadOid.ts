import NetlifyGraph from './graph'

export const fetchHeadOid = async function(accessToken) {

  const {errors, data} = await NetlifyGraph.fetchFetchHeadOid({/* variables */}, {accessToken: accessToken})

  return {
    statusCode: errors ? 500 : 200,
    body: JSON.stringify(errors || data),
    headers: {"Content-Type": "application/json"}
  }
}