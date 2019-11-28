/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const blacklist = require('metro-config/src/defaults/blacklist');
const appJson = require('./package.json');

const rootPath = path.resolve(__dirname, '../../');
const workspaces = getWorkspaces(rootPath);
const installedDependencies = appJson.dependencies;

const extraNodeModules = {};
Object.keys(installedDependencies).forEach(dep => {
  extraNodeModules[dep] = path.resolve(__dirname, "node_modules", dep);
});
Object.keys(appJson.devDependencies).forEach(dep => {
  extraNodeModules[dep] = path.resolve(__dirname, "node_modules", dep);
});

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
    extraNodeModules,
    // extraNodeModules: {
    //   'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    //   'react': path.resolve(__dirname, 'node_modules/react'),
    //   'react-native-paper': path.resolve(__dirname, 'node_modules/react-native-paper'),
    // },
  },
  resetCache: true,
};
