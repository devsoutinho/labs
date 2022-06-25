#  DevSoutinho Labs 🔬
![](https://img.shields.io/badge/Clojure-5981d8?style=flat&logo=clojure&logoColor=64b132) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=000000) ![](https://img.shields.io/badge/Dart-29aee9?style=flat&logo=dart&logoColor=000000)
>  It's my personal monorepo where you can find a codebase related to the current stacks that I'm working with.

- [Documentation](https://www.notion.so/omariosouto/DevSoutinho-Labs-c426fd348ab24651afb11a7e911f6a0f)


## Installation guide

- [NodeJS LTS](https://nodejs.org/)
- [Flutter](https://docs.flutter.dev/get-started/install)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) 

```sh
yarn install && yarn setup
```

## How to run locally?

### Server
```sh
yarn dev:server
```

### App 
```sh
yarn dev:web:app
```
> Give preference to run through Play with Debug inside VSCode for a better development experience

## How to use `dscli`?
> `dscli` is a command line tool that help you to work with automations inside the monorepo


## Projects

| Project Name | Code | Preview |
| --- | --- | --- |
| DevSoutinho App | [Code](https://github.com/devsoutinho/labs/tree/main/_apps/app_devsoutinho_labs) | [app.mariosouto.com](https://app.mariosouto.com) |
| DevSoutinho WebProxy (API) | [Code](https://github.com/devsoutinho/labs/tree/main/_servers/webproxy) | [webproxy.mariosouto.com/graphql](https://webproxy.mariosouto.com/graphql) |

## Stack

- **Server**: 
   - Host: [Heroku](https://www.heroku.com/)
   - Database: [Supabase](https://supabase.com/)
   - Runtime: [Node](https://nodejs.org/)
   - Framework: Express and GraphQL
   - Language: ClojureScript (with [nbbjs](https://github.com/babashka/nbb)) and JavaScript
- **Web App & App**:
   - Web Host: [Vercel](https://vercel.com/)
   - Framework: [Flutter](https://flutter.dev/)
