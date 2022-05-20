import NetlifyGraph, { CommitAdditionInput } from './graph'

export const executeCommit = async function (event) {
  const headOid = event.headers.headoid
  const commitMessage = event.headers.commitmessage
  const accessToken = event.authlifyToken
  const additions = JSON.parse(event.headers.additions)
  const deletions = JSON.parse(event.headers.deletions)
  const branchName = event.headers.branchname
  const repositoryNameWithOwner = event.headers.repositorynamewithowner

  console.log(accessToken)

  const input: CommitAdditionInput = {
    branchName: branchName,
    repositoryNameWithOwner: repositoryNameWithOwner,
    expectedHeadOid: headOid,
    additions: additions,
    deletions: deletions,
    headline: commitMessage
  }

  console.log('Execute commit!')

  // @ts-ignore
  const { errors: ExecuteCommitErrors, data: ExecuteCommitData } =
    await NetlifyGraph.executeCommitAddition(input, { accessToken })

  console.log({ errors: ExecuteCommitErrors, data: ExecuteCommitData })

  return { errors: ExecuteCommitErrors, data: ExecuteCommitData }
}
