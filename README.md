# React Native Typescript Monorepo

This is a WIP but currently working. It is a yarn only monorepo for building applications built on react-native and compiled to web.
I was able to accomplish the same thing with lerna, but for a monorepo who's libs will not be published (this has an enterprise focus)
, lerna was fussy and added a layer of unneccesary compliation. Also yarn's hoisting is a dream come true and deps install extremely quickly, however hoisting is a big challenge with React Native as well as symlinks.

## Features

- Hot-module Reload for both Web and Native app
- Yarn monorepo
- Typescript Based
- Abstracted component libraries / modules split into "packages"
- Multiple applications (Web, Native so far) consuming packages in "apps"

## Tips

- Published libs: If you wanted to publish the libs in /packages to NPM you can take a similar approach but I would highly recommend converting those libs to use [TSDX](https://github.com/jaredpalmer/tsdx). Note that in doing so you will run into additional complications however, and may want to pull those out of workspaces then use lerna with npm for symbolic linking
- React native must not be hoisted for react-native-web to work. Even with webpack aliasing the internal libs want to pull from react-native first and it breaks web.

## Known Issues

- Native Startup is a little wonky but it works. We should just be able to run the native ```ios``` command but that is not auto-launching the bundler so we launch it separately. It is wrapped in one yarn command but the simulator has to be refreshed once loaded.
- Sometimes the web app launches before the package libs are done transpiling. Simple fix is refresh the browser windown after launch (if it is blank).

## Roadmap

- ~~Add CRA Web Application~~
- Add in unit tests
- Add React Router with code splitting
- Convert Native app to Expo
- Add lib for Apollo Client
- Add lib for Layouts
- Abstract App into package
- Add desktop application demo
