declare module 'react-native-dotenv' {
  interface Env {
    [name: string]: string;
  }

  declare const env: Env;
  export = env;
}
