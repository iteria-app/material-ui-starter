const { generateIndex } = require('./generateIndex');
const { addScriptsToIndex } = require('./addScripts');
const { modifyPlugins } = require('./modifyPlugins');

module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command('mkdir ./temp_archive');
    await run.command(
      'tar --exclude temp_archive --exclude node_modules --exclude .git --exclude public --exclude plugins --exclude .vscode --exclude .idea --exclude .prettierignore -cf ./temp_archive/Sources.tar ./'
    );

    generateIndex()
    //addScriptsToIndex()
    //modifyPlugins()
  },
  onBuild: async({utils: {run}}) => {
    await run.command("tar -rf ./temp_archive/Sources.tar")
    await run.command("gzip -9 ./temp_archive/Sources.tar")
    await run.command('mv ./temp_archive/Sources.tar.gz ./dist');
    await run.command('rm -rf ./temp_archive');
  }
};
