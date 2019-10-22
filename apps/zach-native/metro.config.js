/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
// const path = require('path');
// const blacklist = require('metro-config/src/defaults/blacklist');

// const packagesDir = path.join(__dirname, '../../packages');

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
//   resetCache: true,
//   watchFolders: [
//     path.join(packagesDir, 'core'),
//     // path.join(__dirname, '../../node_modules'),
//   ],
//   resolver: {
//     blacklistRE: blacklist([/dist\/.*/, /@mim\/core\/.*node_modules\/react-native\/.*/])
//   },
// };

// const path = require('path')

// const extraNodeModules =
//   new Proxy(
//     {
//       // If we would have an actual package with "package.json" it would go here.
//       // e.g. if @local/core would be a package:
//       // '@local/core': path.resolve(__dirname, '../../local-packages/core/'),
//       '@zach/core': path.resolve(__dirname, '../../packages/core/'),
//     },
//     {
//       get: (target, name) => {
//         if (target.hasOwnProperty(name)) {
//           return target[name]
//         }
//         // Redirect dependencies referenced from shared folders to mobile package node_modules
//         return path.join(process.cwd(), `node_modules/${name}`)
//       },
//     },
//   )

// const watchFolders = [
//   // Watch directory where shared folders are located
//   path.resolve(__dirname, '../../packages'),
//   // Watch root package node_modules to follow symlinks of yarn hoisted packages
//   path.resolve(__dirname, '../../node_modules')
// ]

// module.exports = {
//   projectRoot: path.resolve(__dirname),
//   transformer: {
//     // babelTransformerPath: require.resolve('react-native-typescript-transformer'),
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
//   resolver: {
//     extraNodeModules,
//     // Allow to process TS files
//     sourceExts: ['ts', 'tsx', 'js', 'jsx'],
//   },
//   watchFolders,
// }


const path = require('path');

const getWorkspaces = require('get-yarn-workspaces');
const blacklist = require('metro-config/src/defaults/blacklist');

const rootPath = path.resolve(__dirname, '../../');
const workspaces = getWorkspaces(rootPath);

module.exports = {
  projectRoot: path.resolve(rootPath, 'apps/zach-native'),

  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
    ...workspaces,
  ],

  resolver: {
    blacklistRE: blacklist(
      workspaces.map(
        workspacePath =>
          `/${workspacePath.replace(
            /\//g,
            '[/\\\\]'
          )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`
      ),
    ),
    extraNodeModules: {
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      'react': path.resolve(__dirname, 'node_modules/react'),
      'react-native-paper': path.resolve(__dirname, 'node_modules/react-native-paper'),
    },
  },
  resetCache: true,
};
