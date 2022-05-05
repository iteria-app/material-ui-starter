import NetlifyGraph, { CommitAdditionInput } from './graph';

export const executeCommit = async function (event) {
  const headOid = event.headers.headoid;
  const commitMessage = event.headers.commitmessage;
  const accessToken = event.authlifyToken;
  const contents = JSON.parse(event.headers.contents);
  const paths = JSON.parse(event.headers.filepaths); // event.headers.filepath.substring(1);
  const branchName = event.headers.branchname;
  const repositoryNameWithOwner = event.headers.repositorynamewithowner;

  let changes = [];
  for (let i = 0; i < contents.length; i++) {
    changes.push({ contents: contents[i], path: paths[i].substring(1) });
  }

  console.log('Changes to commit: ', changes);

  const input: CommitAdditionInput = {
    branchName: branchName,
    repositoryNameWithOwner: repositoryNameWithOwner,
    expectedHeadOid: headOid,
    additions: changes,
    headline: commitMessage
  };

  console.log('Execute commit!');

  // @ts-ignore
  const { errors: ExecuteCommitErrors, data: ExecuteCommitData } =
    await NetlifyGraph.executeCommitAddition(input, { accessToken });

  console.log({ errors: ExecuteCommitErrors, data: ExecuteCommitData });

  return { errors: ExecuteCommitErrors, data: ExecuteCommitData };
};
