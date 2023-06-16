module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@app': './src/app',
          '@entities': './src/entities',
          '@features': './src/features',
          '@processes': './src/processes',
          '@shared': './src/shared',
          '@styles': './src/styles',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
