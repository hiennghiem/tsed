---
meta:
 - name: description
   content: Use Socket.io with Express, TypeScript and Ts.ED. Socket.io enable real-time bidirectional event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed.
 - name: keywords
   content: ts.ed express typescript socket.io websocket node.js javascript decorators
projects:
 - title: Kit Socket.io
   href: https://github.com/TypedProject/tsed-example-socketio
   src: /socketio.png    
---
# Socket.io

<Banner src="https://socket.io/css/images/logo.svg" href="https://socket.io" height="90" style="margin-left:-40px" />

Socket.io enables real-time bidirectional event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed.

<Projects type="examples"/>

## Installation

Before using Socket.io, we need to install the [Socket.io](https://www.npmjs.com/package/socket.io) module.

```bash
npm install --save socket.io @types/socket.io
```

Then add the following configuration in your server [Configuration](/docs/configuration.md):

<<< @/docs/tutorials/snippets/socketio/configuration.ts


## Configuration

- `path` &lt;string&gt;: name of the path to capture (/socket.io).
- `serveClient` &lt;boolean&gt;: whether to serve the client files (true).
- `adapter` &lt;Adapter&gt;: the adapter to use. Defaults to an instance of the Adapter that ships with Socket.io which is memory based. See [socket.io-adapter](https://github.com/socketio/socket.io-adapter).
- `origins` &lt;string&gt;: the allowed origins (*).
- `parser` &lt;Parser&gt;: the parser to use. Defaults to an instance of the Parser that ships with Socket.io. See [socket.io-parser](https://github.com/socketio/socket.io-parser).

For more information see [Socket.io documentation](https://socket.io/docs/server-api/#)

## Socket Service

> Socket.io allows you to “namespace” your sockets, which essentially means assigning different endpoints or paths.
This is a useful feature to minimize the number of resources (TCP connections) and at the same time separate concerns within your application
 by introducing separation between communication channels. See [namespace documentation](https://socket.io/docs/rooms-and-namespaces/#).

All Socket service work under a namespace and you can create one Socket service per namespace.

Example:

<<< @/docs/tutorials/snippets/socketio/socket-service.ts

> @@SocketService@@ inherits from @@Service@@ decorator, meaning a SocketService can be injected to another Service, Controller or Middleware.

Example:

<<< @/docs/tutorials/snippets/socketio/socket-service-nsp.ts

Then, you can inject your socket service into another Service, Controller, etc. as following:

<<< @/docs/tutorials/snippets/socketio/socket-service-di.ts

### Declaring an Input Event

@@Input@@ decorator declares a method as a new handler for a specific `event`.

<<< @/docs/tutorials/snippets/socketio/socket-input-event.ts

- @@Args@@ &lt;any|any[]&gt;: List of the parameters sent by the input event.
- @@Socket@@ &lt;SocketIO.Socket&gt;: Socket instance.
- @@Namespace@@ &lt;[SocketIO.Namespace](https://socket.io/docs/rooms-and-namespaces/#)&gt;: Namespace instance.
- @@Nps@@ &lt;[SocketIO.Namespace](https://socket.io/docs/rooms-and-namespaces/#)&gt;: Namespace instance.

### Send a response

You have many choices to send a response to your client. Ts.ED offers some decorators to send a response:

<img alt="socketio" src="./../assets/socketio.png" style="max-width: 100%" />

Example:

<<< @/docs/tutorials/snippets/socketio/socket-send-response.ts

::: tip
All methods accepts a promise as returned value. Ts.ED handle promise before returning a response to your consumer.
:::

::: warning
Return value is only possible when the method is decorated by @@Emit@@, @@Broadcast@@ and @@BroadcastOthers@@.
:::

### Socket Session

Ts.ED creates a new session for each socket.

<<< @/docs/tutorials/snippets/socketio/socket-session.ts

### Middlewares

A middleware can also be used on a @@SocketService@@ either on a class or on a method.

Here is an example of a middleware:

<<< @/docs/tutorials/snippets/socketio/socket-use-middleware.ts

::: tip 
The user instance will be forwarded to the next middleware and to your decorated method.
:::

You can also declare a middleware to handle an error with @@SocketMiddlewareError@@.
Here is an example:

<<< @/docs/tutorials/snippets/socketio/socket-middleware.ts

Two decorators are provided to attach your middleware on the right place:

- @@SocketUseBefore@@ will call your middleware before the class method,
- @@SocketUseAfter@@ will call your middleware after the class method.

Both decorators can be used as a class decorator or as a method decorator.
The call sequence is the following for each event request:

- Middlewares attached with @@SocketUseBefore@@ on class,
- Middlewares attached with @@SocketUseBefore@@ on method,
- The method,
- Send response if the method is decorated with @@Emit@@, @@Broadcast@@ or @@BroadcastOthers@@,
- Middlewares attached with @@SocketUseAfter@@ on method, 
- Middlewares attached with @@SocketUseAfter@@ on class.

Middlewares chain uses the `Promise` to run it. If one of this middlewares/method emits an error, the first middleware error will be called.

<<< @/docs/tutorials/snippets/socketio/socket-use-middleware2.ts

## Decorators

<ApiList query="module.match('@tsed/socketio') && symbolType === 'decorator'" />

## Author 

<GithubContributors users="['Romakita']"/>

## Maintainers <Badge text="Help wanted" />

<GithubContributors users="['Romakita']"/>