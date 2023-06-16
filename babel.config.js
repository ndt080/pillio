module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
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
