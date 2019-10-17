declare module '*.svg' {
  const content: any;
  export default content;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    RAZZLE_ASSETS_MANIFEST: string;
    RAZZLE_PUBLIC_DIR: string;
  }
}
