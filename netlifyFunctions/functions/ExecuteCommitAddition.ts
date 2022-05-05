import NetlifyGraph, { CommitAdditionInput } from './graph';

export const executeCommit = async function (event) {
  const headOid = event.headers.headoid;
  const commitMessage = event.headers.commitmessage;
  const accessToken = event.authlifyToken;
  const contents = JSON.parse(event.headers.contents);
  const paths = JSON.parse(event.headers.filepaths); // event.headers.filepath.substring(1);
  const branchName = event.headers.branchname;
  const repositoryNameWithOwner = event.headers.repositorynamewithowner;

  console.log(contents);
  console.log(paths);

  const input: CommitAdditionInput = {
    branchName: branchName,
    repositoryNameWithOwner: repositoryNameWithOwner,
    expectedHeadOid: headOid,
    additions: [{ contents: contents[0], path: paths[0].substring(1) }],
    headline: commitMessage
  };

  console.log('Execute commit!');

  // @ts-ignore
  const { errors: ExecuteCommitErrors, data: ExecuteCommitData } =
    await NetlifyGraph.executeCommitAddition(input, { accessToken });

  console.log({ errors: ExecuteCommitErrors, data: ExecuteCommitData });

  return { errors: ExecuteCommitErrors, data: ExecuteCommitData };
};
