import { getSecrets, NetlifySecrets } from '@netlify/functions'
import NetlifyGraph, { CommitAdditionInput, NetlifyGraphFunctionOptions } from './netlifyGraph'


export const handler = async function(event, context) {

  const headOid = event.headers.headoid
  const commitMessage = event.headers.commitmessage
  const accessToken = event.authlifyToken
  ///////////////////////////////////////////
  const branchName = "build-branch"//event.headers.branchname
  const repositoryNameWithOwner = "misosviso/example-material-ui"//event.headers.repositorynamewithowner
  ///////////////////////////////////
  const content = event.headers.content
  const path = event.header.path

  const input: CommitAdditionInput = {
    branchName: branchName,
    repositoryNameWithOwner: repositoryNameWithOwner,
    expectedHeadOid: headOid,
    contents1: "YWJlY2VkYSB6amVkbGEgZGVkYQpwb3ZlZGFsYSBuYSBtZWR2ZWRhCmEgbWVkdmVkIGJvbCBvcGl0eQoKTmFrb3BhbCB0dSBiYWJrdSBqYWsgc2EgdnJhdmkuLi4gZG9yaWNpICg6ICg6",
    path: "bordel/bordel.txt",
    headline: commitMessage
  }

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