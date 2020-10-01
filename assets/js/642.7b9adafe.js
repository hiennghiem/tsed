(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{1078:function(s,a,t){"use strict";t.r(a);var n=t(43),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"socketioservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#socketioservice"}},[s._v("#")]),s._v(" SocketIOService "),t("Badge",{attrs:{text:"Class",type:"class"}})],1),s._v(" "),t("section",{staticClass:"symbol-info"},[t("table",{staticClass:"is-full-width"},[t("tbody",[t("tr",[t("th",[s._v("Module")]),t("td",[t("div",{staticClass:"lang-typescript"},[t("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { SocketIOService } "),t("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"token string"},[s._v('"@tsed/socketio"')])])])]),t("tr",[t("th",[s._v("Source")]),t("td",[t("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.4/packages/socketio/src/services/SocketIOService.ts#L0-L0"}},[s._v("/packages/socketio/src/services/SocketIOService.ts")])])])])])]),s._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),t("div",{staticClass:"language-typescript"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" SocketIOService "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("div",{pre:!0,attrs:{class:"language- extra-class"}},[t("pre",[t("code",[s._v('/**\n *\n * @type <span class="token punctuation">{</span>Map&lt;<span class="token keyword">any</span><span class="token punctuation">,</span> <span class="token keyword">any</span>&gt;<span class="token punctuation">}</span>\n */\n\n<span class="token keyword">constructor</span><span class="token punctuation">(</span>injector<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">,</span> io<span class="token punctuation">:</span> SocketIO.Server<span class="token punctuation">,</span> converterService<span class="token punctuation">:</span> <a href="/api/common/converters/services/ConverterService.html"><span class="token">ConverterService</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> namespace\n * @returns <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">}</span>\n */\n<span class="token function">getNsp</span><span class="token punctuation">(</span>namespace?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    nsp<span class="token punctuation">:</span> SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">;</span>\n    instances<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">}</span> provider\n */\n<span class="token function">addSocketProvider</span><span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n')])])]),t("p",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getNsp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("namespace?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     nsp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" SocketIO."),t("a",{pre:!0,attrs:{href:"/api/socketio/decorators/Namespace.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Namespace")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     instances"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addSocketProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("provider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/di/class/Provider.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Provider")])]),s._v("<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);