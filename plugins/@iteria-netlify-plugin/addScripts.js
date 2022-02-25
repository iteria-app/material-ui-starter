const fs = require('fs');

const linksString = `
<head>
<link
  rel="stylesheet"
  href="https://unpkg.com/@iteria-app/wysiwyg@1.3.4/public/export/index.css"
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/@iteria-app/wysiwyg@1.3.4/public/global.css"
/>
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
`;

const scriptsString = `
<script>
  if (!window.$RefreshSig$) {
    window.$RefreshSig$ = () => type => type;
  }
  if (!window.$RefreshReg$) {
    window.$RefreshReg$ = () => {};
  }
</script>
<script
src="https://kit.fontawesome.com/90ec8eceb4.js"
crossorigin="anonymous"
></script>
<script src="https://unpkg.com/@iteria-app/wysiwyg@1.3.4/public/export/index.umd.js"></script>
<script src="https://wonderful-mclean-d8b4cd.netlify.app/vite-ide.umd.js"></script>
<script>iteriaApp();</script>
</body>
`;

const findIndexPath = () => {
  const possibleIndexes = ['./public/index.html', './index.html'];

  const indexFile = possibleIndexes.find((i) => fs.existsSync(i));
  return indexFile;
};

const addScripts = (html) => html.replace('</body>', scriptsString);
const addLinks = (html) => html.replace('<head>', linksString);

exports.addScriptsToIndex = () => {
  const indexPath = findIndexPath();
  let htmlString = fs.readFileSync(indexPath, 'utf-8');
  htmlString = addScripts(htmlString);
  htmlString = addLinks(htmlString);

  fs.writeFileSync(indexPath, htmlString);
};