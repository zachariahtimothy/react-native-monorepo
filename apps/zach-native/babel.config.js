module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // 'react': '../../node_modules/react',
          // 'react-native-paper': '../../node_modules/react-native-paper',
          '@zach/core': '../../packages/core/src/index.ts',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
