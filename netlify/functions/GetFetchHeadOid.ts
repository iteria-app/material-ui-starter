import { getSecrets, NetlifySecrets } from '@netlify/functions'
import NetlifyGraph from './netlifyGraph'

export const handler = async function(event, context) {
  const {errors, data} = await NetlifyGraph.fetchFetchHeadOid({/* variables */}, {accessToken: event.netlifyGraphToken})

  return {
    statusCode: errors ? 500 : 200,
    body: JSON.stringify(errors || data),
    headers: {"Content-Type": "application/json"}
  }
}