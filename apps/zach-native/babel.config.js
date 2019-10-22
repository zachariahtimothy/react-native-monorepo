// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'module-resolver',
//       {
//         alias: {
//           // 'react': '../../node_modules/react',
//           // 'react-native-paper': '../../node_modules/react-native-paper',
//           '@zach/core': '../../packages/core/src/index.ts',
//         },
//       },
//     ],
//   ],
//   env: {
//     production: {
//       plugins: ['react-native-paper/babel'],
//     },
//   },
// };
const path = require('path');

module.exports = function(api) {
  console.log('babel!!!!!', api)
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
          alias: {
            '@zach/core': path.resolve(
              __dirname,
              '../../packages/core/src/',
            ),
          },
        },
      ],
    ],
  }
}
