import NetlifyGraph, { CommitAdditionInput } from './graph';

export const executeCommit = async function (event) {
  const headOid = event.headers.headoid;
  const commitMessage = event.headers.commitmessage;
  const accessToken = event.authlifyToken;
  const contents = JSON.parse(event.headers.contents);
  const paths = JSON.parse(event.headers.filepaths);
  const deletedFiles = JSON.parse(event.headers.deletedfilepaths);
  const branchName = event.headers.branchname;
  const repositoryNameWithOwner = event.headers.repositorynamewithowner;

  let changedFiles = [];
  for (let i = 0; i < contents.length; i++) {
    changedFiles.push({ contents: contents[i], path: paths[i].substring(1) });
  }

  console.log(deletedFiles);

  const input: CommitAdditionInput = {
    branchName: branchName,
    repositoryNameWithOwner: repositoryNameWithOwner,
    expectedHeadOid: headOid,
    additions: changedFiles,
    headline: commitMessage
  };

  if (deletedFiles !== null || deletedFiles.length > 0) {
    input.deletions = deletedFiles.map((element) => {
      return element.substring(1);
    });
  }

  console.log('Execute commit!');

  // @ts-ignore
  const { errors: ExecuteCommitErrors, data: ExecuteCommitData } =
    await NetlifyGraph.executeCommitAddition(input, { accessToken });

  console.log({ errors: ExecuteCommitErrors, data: ExecuteCommitData });

  return { errors: ExecuteCommitErrors, data: ExecuteCommitData };
};
