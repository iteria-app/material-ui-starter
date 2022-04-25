const { generateIndex } = require('./generateIndex');
const { addScriptsToIndex } = require('./addScripts');
const { modifyPlugins } = require('./modifyPlugins');

module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command('mkdir ./temp_archive');
    await run.command(
      'tar --exclude node_modules --exclude dist --exclude public --exclude netlify --exclude plugins --exclude vite-plugin   -cvzf ./public/Sources.tar.gz ./src'
    );

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
