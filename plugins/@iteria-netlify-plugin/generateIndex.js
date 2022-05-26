const fs = require('fs');

const getDependencies = () => {
  const dependencyBlacklist = ['react-scripts'];
  const file = fs.readFileSync('./package.json');
  const packageJson = JSON.parse(file);

  const dependencies = [];
  Object.keys(packageJson.dependencies).forEach((k) => dependencies.push(k));

  return dependencies.filter((d) => !dependencyBlacklist.includes(d));
};

const removeSpecialChars = (str) => str.toLowerCase().replace(/[^\w\s]/g, '');

const generateIndexFile = (dependencies) => {
  let indexFile = '';

  dependencies.forEach((d) => {
    const importName = removeSpecialChars(d);
    indexFile += `import * as ${importName} from "${d}";\n`;
  });

  indexFile += `
  export default () => {
    window.__deps = {};
    window.__deps_default = {};
  \n\n`;

  dependencies.forEach((d) => {

    const importName = removeSpecialChars(d);
    const slashedLength = d.split('/').length;
    let dependency = '';
    const slashedDependency = d
      .split('/')
      .map((d, i) => {
        dependency += `['${d}']`;
        return `['${d}'] ${i !== slashedLength - 1
            ? ` ?? (window.__deps${dependency} = {}))`
            : ''
          }`;
      })
      .join('');

      let dependencyDefault = '';
      const slashedDependencyDefault = d
        .split('/')
        .map((d, i) => {
          dependencyDefault += `['${d}']`;
          return `${i !== slashedLength - 1
              ? `window.__deps_default${dependencyDefault} = {}`
              : ''
            }`;
      })
      .join('');

    // add opening brackets
    const openingBrackets = '('.repeat(slashedLength - 1);
    
    indexFile += `
    ${openingBrackets}window.__deps${slashedDependency} = ${importName};
    ${slashedDependencyDefault};
    if ((window.__deps${dependency}).default) {
      window.__deps_default${dependency} = window.__deps${dependency}.default;
    };\n
    `;
  });

  indexFile += '}\n';

  return indexFile;
};

const findProjectEntry = () => {
  const possibleIndexes = [
    './src/main.js',
    './src/main.jsx',
    './src/main.ts',
    './src/main.tsx'
  ];

  const indexFile = possibleIndexes.find((i) => fs.existsSync(i));
  return indexFile;
};

exports.generateIndex = () => {

  const dependencies = getDependencies();
  const generatedIndex = generateIndexFile(dependencies);

  fs.writeFileSync('./src/iteriaIndex.js', generatedIndex);
  fs.writeFileSync('./src/runtime.d.ts', `declare module 'react-refresh/runtime';`)
  // const projectEntry =  findProjectEntry();
  // const currIndexFile = fs.readFileSync(projectEntry, 'utf-8');

  // const newIndexFile =
  //   `//@ts-ignore
  //   import * as runtime from 'react-refresh/runtime';\n
  //   //@ts-ignore
  //   import iteriaIndex from './iteriaIndex';\n` +
  //   currIndexFile +
  //   `//@ts-ignore
  //   window.$RefreshRegGlobal$ = runtime.register;
  //   //@ts-ignore
  //   window.$RefreshRuntime$ = runtime;
  //   iteriaIndex();`;
  
  // console.log(newIndexFile)
  // fs.writeFileSync(projectEntry, newIndexFile);
};