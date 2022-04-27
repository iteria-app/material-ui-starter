import NetlifyGraph, { CommitAdditionInput } from './graph';

export const executeCommit = async function(event){

  console.log("Execute commit 1")

  const headOid = event.headers.headoid;
  const commitMessage = event.headers.commitmessage;
  const accessToken = event.authlifyToken;
  const content = event.headers.content;
  const path = event.headers.filepath.substring(1);
  const branchName = 'build-brach';
  const repositoryNameWithOwner = 'misosviso/example-material-ui'; //event.headers.repositorynamewithowner

  console.log("Execute commit 2")

  const input: CommitAdditionInput = {
    branchName: branchName,
    repositoryNameWithOwner: repositoryNameWithOwner,
    expectedHeadOid: headOid,
    contents1: content,
    path: path,
    headline: commitMessage
  };

  console.log("Execute commit 3")

  // @ts-ignore
  const { errors: ExecuteCommitErrors, data: ExecuteCommitData } =
    await NetlifyGraph.executeCommitAddition(input, { accessToken });

  console.log({ errors: ExecuteCommitErrors, data: ExecuteCommitData })

  return { errors: ExecuteCommitErrors, data: ExecuteCommitData } 
};