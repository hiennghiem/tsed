---
meta:
 - name: description
   content: Guide to deploy your Ts.ED application on AWS.
 - name: keywords
   content: ts.ed express typescript aws node.js javascript decorators
projects:   
 - title: Kit AWS
   href: https://github.com/TypedProject/tsed-example-aws
   src: /aws.png   
---
# AWS

Amazon Web Services is one possible way to host your Node.js application.

This tutorial shows you how to configure the Express application written with Ts.ED, to be executed as an AWS Lambda Function.

More information here: [Official AWS Docs](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

<Projects type="examples"/>

#### Installation

First, install the `aws-serverless-express` module:

```bash
npm install --save aws-serverless-express
```

#### Configuration

You need to create three files:

 - One for the `Server` configuration,
 - One for AWS, named `lambda.ts` (the entry point on AWS Lambda, which contains the function handler),
 - One for the local development, for example "index.js" (that you can use to run the app locally with `ts-node local.ts`)

Create the server and add the AWS middleware: 

<<< @/docs/tutorials/snippets/aws/server-configuration.ts

Then create the lambda.ts:

<<< @/docs/tutorials/snippets/aws/lambda.ts

And finally create an index.ts to run your server in development mode:
```typescript
import {$log} from "@tsed/common";
import {PlatformExpress} from "@tsed/platform-express";
import {Server} from "./Server";

async function bootstrap() {
  try {
    $log.debug("Start server...");
    const server = await PlatformExpress.bootstrap(Server);

    await server.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();
```
::: tip
You can find a project example with [AWS configuration here](https://github.com/TypedProject/tsed-example-aws).
:::

::: tip Example
You can see an example provided by the AWS Team on this [github repository](https://github.com/awslabs/aws-serverless-express/tree/master/examples/basic-starter).
:::

## Author 

<GithubContributors users="['vetras']"/>
