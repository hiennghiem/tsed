(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{653:function(t,s,a){"use strict";a.r(s);var e=a(43),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"httpsserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpsserver"}},[t._v("#")]),t._v(" HttpsServer "),a("Badge",{attrs:{text:"Type alias",type:"type"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { HttpsServer } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.4/packages/common/src/platform-builder/decorators/httpsServer.ts#L0-L0"}},[t._v("/packages/common/src/platform-builder/decorators/httpsServer.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("type HttpsServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),t._v("Https.Server & "),a("a",{pre:!0,attrs:{href:"/api/common/platform-builder/decorators/IHttpsFactory.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IHttpsFactory")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n/**\n * "),a("a",{pre:!0,attrs:{href:"/api/di/decorators/Inject.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Inject")])]),t._v(" the Https.Server instance.\n *\n * ### "),a("a",{pre:!0,attrs:{href:"/api/swagger/decorators/Example.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Example")])]),t._v("\n *\n * ```typescript\n * "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HttpsServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/decorators/Service.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Service")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(' "@tsed/common"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n *\n * @"),a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/di/decorators/Service.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Service")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n * "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" default "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" OtherService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n *    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@HttpsServer httpServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform-builder/decorators/HttpServer.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("HttpServer")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n * ```\n *\n * > Note"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypeScript transform and store `HttpsServer` "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" `Function` type in the metadata. So to inject a factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" you must use the `@"),a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/di/decorators/Inject.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Inject")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("` decorator.\n *\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" target\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" targetKey\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("TypedPropertyDescriptor<Function> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" descriptor\n * @returns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n * @decorator\n */\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" function "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpsServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypedPropertyDescriptor<Function> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);