import NetlifyGraph, { CommitAdditionInput } from './netlifyGraph';

export const handler = async function (event, context) {
  const headOid = event.headers.headoid;
  const commitMessage = event.headers.commitmessage;
  const accessToken = event.authlifyToken;
  const branchName = 'build-brach'; //event.headers.branchname
  const repositoryNameWithOwner = 'misosviso/example-material-ui'; //event.headers.repositorynamewithowner
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
};