---
prev: /docs/configuration.md
next: /docs/controllers.html
otherTopics: true
projects:
 - title: Kit basic
   href: https://github.com/TypedProject/tsed-getting-started
   src: /tsed.png
 - title: Kit React
   href: https://github.com/TypedProject/tsed-example-react
   src: /react.png
 - title: Kit Vue.js
   href: https://github.com/TypedProject/tsed-example-vuejs
   src: /vuejs.png    
 - title: Kit TypeORM
   href: https://github.com/TypedProject/tsed-example-typeorm
   src: /typeorm.png
 - title: Kit Mongoose
   href: https://github.com/TypedProject/tsed-example-mongoose
   src: /mongoose.png
 - title: Kit Socket.io
   href: https://github.com/TypedProject/tsed-example-socketio
   src: /socketio.png 
 - title: Kit Passport.js
   href: https://github.com/TypedProject/tsed-example-passportjs
   src: /passportjs.png
 - title: Kit AWS
   href: https://github.com/TypedProject/tsed-example-aws
   src: /aws.png
 - title: Kit Azure AD
   href: https://github.com/TypedProject/tsed-example-passport-azure-ad
   src: /azure.png
meta:
 - name: description
   content: Start a new REST application with Ts.ED framework. Ts.ED is built on top of Express and uses TypeScript language.
 - name: keywords
   content: getting started ts.ed express typescript node.js javascript decorators mvc class models
---

# Introduction

Ts.ED is a framework for building server-side and scalable applications for Node.js environment. It's built with [TypeScript](http://www.typescriptlang.org/) and uses classes (OOP), decorators and Functional programming 
to develop your application. 

It uses [Express.js](https://expressjs.com/) HTTP server frameworks by default, but it's also possible to use [Koa.js](https://koajs.com) as well.

Ts.ED provides a level of abstraction above theses common Node.js framework (Express/Koa) with the [Platform API](/docs/platform-api.md)
but also exposes their APIs directly for the developer. This gives developers the freedom to use the myriad of third-party 
node modules which are available for the underlying platform.

## Philosophy

Node.js opened the possibility of making server applications with Javascript, allowing to pool front-end and back-end skills.

With this we have seen the birth of extraordinary projects like [React.js](https://reactjs.org/), [Vue.js](https://vuejs.org/), [Angular](https://angular.io). 
Each of these projects bring their vision of a web application, but we have the same wish, to make the developer's life easier by providing 
all the right tools to developers so that they are quickly productive.

Ts.ED tends towards the same objective which is to achieve better productivity while remaining easy to understand.
To achieve this, Ts.ED provides out-of-the-box an application architecture, highly testable, scalable and maintainable.

## Platform features support

Here the features list provided by Ts.ED and the compatibility with the target platform.

Features | Express.js  | Koa.js
--- | --- | ---
[Controllers](/docs/controllers.md) <br /> <small>([routing](/docs/controllers.md), [nested](/docs/controllers.html#nested-controllers), [inheritance](/docs/controllers.html#inheritance))</small> | yes | yes
[Providers](/docs/providers.html) | yes | yes
[Model & JsonSchema](/docs/model.html) | yes | yes
[JsonMapper](/docs/converters.html) | yes | yes
[Middlewares](/docs/middlewares.html) | yes | yes
[Pipes](/docs/pipes.html) | yes | yes
[Interceptors](/docs/providers.html) | yes | yes
[Authentification](/docs/authentication.html) | yes | yes
[Hooks](/docs/hooks.html) | yes | yes
[Exceptions](/docs/exceptions.html) | yes | yes
[Upload files](/docs/upload-files.html) | yes | yes
[Serve files](/docs/serve-files.html) | yes | yes
[Templating](/docs/templating.html) | yes | yes
[Validation](/docs/validation.html) | yes | yes
[Passport.js](/tutorials/passport.html) | yes | no
[TypeORM](/tutorials/typeorm.html) | yes | yes
[Mongoose](/tutorials/mongoose.html) | yes | yes
[GraphQL](/tutorials/graphql.html) | yes | no
[Socket.io](/tutorials/socket-io.html) | yes | yes
[Socket.io](/tutorials/socket-io.html) | yes | yes


## Installation

To get started, you can either scaffold the project with the Ts.ED CLI, or clone a starter project (see.

To scaffold the project with the CLI, run the following commands. This will create a new project directory, 
and populate the directory with the initial core Ts.ED files and supporting modules, creating a conventional base structure for your project. 
Creating a new project with the CLI is recommended for first-time users.

```bash
npm install -g @tsed/cli
tsed init .
```

::: tip
See our [CLI website](https://cli.tsed.io) for more details.
:::

Alternatively, you can checkout one of these projects:

<Projects type="getting-started" />

If none of previous solutions aren't satisfying maybe you are in these cases:

- [I want to migrate my application from Ts.ED v5](/getting-started/migration-from-v5.md)
- [I want to migrate my application from Express.js](/getting-started/migrate-from-express.md)
- [I want to migrate my application from Koa.js](/getting-started/migrate-from-koa.md)
- [I want to create application from scratch](/getting-started/from-scratch.md)

## What's next?

Now we can follow one of these links to develop your new application:

- [Create your first controller](/getting-started/create-your-first-controller.md)
- [Change server configuration](/docs/configuration.md)
- [Load configuration from files](/getting-started/configuration.md#load-configuration-from-file)
- [What is the Platform API](/docs/platform-api.md)
