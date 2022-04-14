import { getSecrets, NetlifySecrets } from '@netlify/functions'
import NetlifyGraph, { CommitAdditionInput, NetlifyGraphFunctionOptions } from './netlifyGraph'


export const handler = async function(event, context) {

  console.log("Executing commit addition")

  const headOid = event.headers.headoid
  const commitMessage = event.headers.commitmessage
  const accessToken = event.authlifyToken

  console.log("headOid: " + headOid)
  console.log("commit message: " + commitMessage)

  const input: CommitAdditionInput = {
    branchName: "main",
    repositoryNameWithOwner: "misosviso/example-material-ui",
    expectedHeadOid: headOid,
    contents1: "YWJlY2VkYSB6amVkbGEgZGVkYQpwb3ZlZGFsYSBuYSBtZWR2ZWRhCmEgbWVkdmVkIGJvbCBvcGl0eQoKTmFrb3BhbCB0dSBiYWJrdSBqYWsgc2EgdnJhdmkuLi4gZG9yaWNpICg6ICg6",
    path: "bordel/bordel.txt",
    headline: commitMessage
  }

  console.log(input);

  // @ts-ignore
  const { errors: ExecuteCommitErrors, data: ExecuteCommitData } = await NetlifyGraph.executeCommitAddition(input, { accessToken })

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      ExecuteCommitErrors: ExecuteCommitErrors,
      ExecuteCommitData: ExecuteCommitData,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }
}