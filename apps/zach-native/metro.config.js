/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const packagesDir = path.join(__dirname, '../../packages');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resetCache: true,
  watchFolders: [path.join(packagesDir, 'core'), path.join(__dirname, '../../node_modules')],
  // resolver: {
  //   extraNodeModules: {
  //     '@zach/core': path.resolve(packagesDir, 'core'),
  //   }
  // },
};
