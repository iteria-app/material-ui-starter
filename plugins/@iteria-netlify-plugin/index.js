const { generateIndex } = require('./generateIndex');
const { addScriptsToIndex } = require('./addScripts');
const { modifyPlugins } = require('./modifyPlugins');

module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command('mkdir ./temp_archive');
    await run.command(
      'tar --exclude node_modules --exclude dist --exclude public --exclude netlify --exclude plugins --exclude vite-plugin --exclude .git --exclude .prettierignore --exclude .vscode  -cvzf ./public/Sources.tar.gz ./'
    );

    const repository = import.meta.env.VITE_REPOSITORY_URL;
    const branch = import.meta.env.VITE_BRANCH;
    const head = import.meta.env.VITE_HEAD;

    console.log('Repo', repository);
    console.log(
      'RepositoryNameWithOwner',
      repository.toString().replace('https://github.com/', '')
    );
    console.log('Branch', branch);
    generateIndex();

    //addScriptsToIndex()
    //modifyPlugins()
  }
  // onBuild: async ({ utils: { run } }) => {

  //   await run.command('tar -rf ./temp_archive/Sources.tar '); //./src/generated")
  //   await run.command('gzip -9 ./temp_archive/Sources.tar');
  //   await run.command('mv ./temp_archive/Sources.tar.gz ./build');
  //   await run.command('rm -rf ./temp_archive');
  // }
};
