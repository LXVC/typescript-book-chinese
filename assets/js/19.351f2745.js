(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{209:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("动态导入表达式是 ECMASript 的一个新功能，它允许你在你程序的任意地方异步加载一个模块，TC39 JavaScript 委员会有这样一个处于 stage 3 的一个提案，它被称为 "),n("a",{attrs:{href:"https://github.com/tc39/proposal-dynamic-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("import() proposal for JavaScript"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[t._v("此外，"),n("strong",[t._v("webpack")]),t._v(" bunder 有一个被称为 "),n("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("Code \bSplitting")]),n("OutboundLink")],1),t._v(" 的功能，它能允许你将代码拆分为许多块，这些块在将来可被异步下载。这意味着，你可以在程序中首先提供一个最小的程序启动包，并在将来异步加载其他模块。")]),t._v(" "),n("p",[t._v("这很自然的想到（如果我们工作在 dev 的工作流程）"),n("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#dynamic-import-expressions",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript 2.4 dynamic import expressions"),n("OutboundLink")],1),t._v(" 将会把你最终生成的 JS 代码自动分割成很多代码块。但是这似乎并不容易实现，因为它依赖于我们正在使用的 "),n("code",[t._v("tsconfig.json")]),t._v(" 配置文件。")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("让我们来看一个例子，在这个例子中，我们演示了如何配置 webpack 和 TypeScript 2.4 +。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),n("div",{staticClass:"danger custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("重要的提示")]),t._v(" "),n("ul",[t._m(6),t._v(" "),n("li",[t._v("进一步了解有关信息，推荐阅读这篇文章："),n("a",{attrs:{href:"https://blog.josequinto.com/2017/06/29/dynamic-import-expressions-and-webpack-code-splitting-integration-with-typescript-2-4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dynamic Import Expressions and webpack 2 Code Splitting integration with TypeScript 2.4."),n("OutboundLink")],1)])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"动态导入表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态导入表达式","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态导入表达式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("webpack 实现代码分割的方式有两种：使用 "),s("code",[this._v("import()")]),this._v(" （首选，ECMAScript 的提案）和 "),s("code",[this._v("require.ensure()")]),this._v(" （最后考虑，webpack 具体实现）。因此，我们期望 TypeScript 的输出是保留 "),s("code",[this._v("import()")]),this._v(" 语句，而不是将其转化为其他任何代码。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在下面的代码，我希望懒加载 "),s("code",[this._v("moment")]),this._v(" 库，但是我也对代码分割感兴趣，这意味 "),s("code",[this._v("moment")]),this._v(" 会被分割到一个单独的 JavaScript 文件，当它被使用时，会被异步加载。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "momentjs" */')]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'moment'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moment "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 懒加载的模块拥有所有的类型，并且能够按期工作")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 类型检查会工作，代码引用也会工作  :100:")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" time "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("moment")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token builtin"}},[t._v("console")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'TypeScript >= 2.4.0 Dynamic Import Expression:'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token builtin"}},[t._v("console")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token builtin"}},[t._v("console")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Failed to load moment'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这是 "),s("code",[this._v("tsconfig.json")]),this._v(" 的配置文件：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"compilerOptions"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"target"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"es5"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"module"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"esnext"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"lib"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"dom"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"es5"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"scripthost"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"es2015.promise"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"jsx"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"react"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"declaration"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"sourceMap"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"outDir"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"./dist/js"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"strict"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"moduleResolution"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"node"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"typeRoots"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"./node_modules/@types"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"types"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"node"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"react"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v('"react-dom"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v('使用 "module": "esnext" 选项：TypeScript 为 Webpack Code Splitting 生成 '),s("code",[this._v("import()")]),this._v(" 语句。")])}],!1,null,null,null);o.options.__file="dynamicImportExpressions.md";s.default=o.exports}}]);