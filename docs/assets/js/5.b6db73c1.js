(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#指南"}},[t._v("#")]),t._v(" 指南")]),t._v(" "),n("p",[t._v("vue-module-loader 是基于 Vue 生态的微前端模块加载器，本质上是"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 插件"),n("OutboundLink")],1),t._v("。\n使用了 vue-module-loader 的工程可以构建成独立的应用程序包部署运行，也可以加载其他"),n("a",{attrs:{href:"#%E7%BC%96%E5%86%99%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%A8%A1%E5%9D%97"}},[t._v("符合规范的微前端模块")]),t._v("，让你的工程秒变微前端架构。")]),t._v(" "),n("h2",{attrs:{id:"进群交流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进群交流"}},[t._v("#")]),t._v(" 进群交流")]),t._v(" "),n("p",[n("img",{attrs:{src:a(72),alt:"qq群"}})]),t._v(" "),n("h2",{attrs:{id:"快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),n("h3",{attrs:{id:"模板工程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模板工程"}},[t._v("#")]),t._v(" 模板工程")]),t._v(" "),n("p",[t._v("推荐使用"),n("code",[t._v("vue-module-creator")]),t._v("创建模板工程，已为您做好配置，可构建独立应用，也可构建微前端模块包。")]),t._v(" "),n("p",[t._v("基于"),n("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/cli"),n("OutboundLink")],1),t._v(" 工程，使用了以下特性：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93",target:"_blank",rel:"noopener noreferrer"}},[t._v("构建目标-库"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("环境变量和模式"),n("OutboundLink")],1)])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("安装命令行工具")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vue-module-creator\n")])])])]),t._v(" "),n("li",[n("p",[t._v("创建工程")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("vmc create\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"自由工程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自由工程"}},[t._v("#")]),t._v(" 自由工程")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("安装插件")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vue-module-loader\n")])])])]),t._v(" "),n("li",[n("p",[t._v("使用插件")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入插件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vueModuleLoader "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-module-loader'")]),t._v("\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vueModuleLoader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载模块")]),t._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$moduleLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//domain.com/module-a.js'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),n("p",[t._v("应用实例化后的任何时候可以通过插件方法"),n("router-link",{attrs:{to:"/api/#app-moduleloader"}},[t._v("$moduleLoader")]),t._v("进行加载。")],1),t._v(" "),n("h3",{attrs:{id:"构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[t._v("#")]),t._v(" 构建")]),t._v(" "),n("ul",[n("li",[t._v("作为独立应用程序构建略过，请参考"),n("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/cli 官方文档"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("作为微前端模块构建"),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build:module\n")])])]),t._v("配置参考："),n("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/build-targets.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("构建目标-库"),n("OutboundLink")],1),t._v("\n微前端模块构建完成以后会得到一个 js 文件和静态资源，部署在服务器上即可引用加载。")])]),t._v(" "),n("h2",{attrs:{id:"编写微前端模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写微前端模块"}},[t._v("#")]),t._v(" 编写微前端模块")]),t._v(" "),n("p",[t._v("下面介绍能够被"),n("code",[t._v("vue-module-loader")]),t._v("加载摸微前端模块规范。")]),t._v(" "),n("h3",{attrs:{id:"模块详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块详解"}},[t._v("#")]),t._v(" 模块详解")]),t._v(" "),n("p",[t._v("模块目录结构和官方@vue/cli 项目基本相同，只在入口文件和构建方面有些许差别，下面一一介绍：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("入口文件")])])]),t._v(" "),n("p",[n("strong",[t._v("module.js")])]),t._v(" "),n("p",[t._v("微前端模块新增了"),n("code",[t._v("/src/module.js")]),t._v("文件作为模块业务代码的入口文件，此文件导出一个匿名函数，函数内部调用"),n("code",[t._v("this")]),t._v("（指向 Vue 实例）中安装的生态工具 API 进行数据合并。另外函数还接收"),n("code",[t._v("Vue构造对象")]),t._v("作为唯一参数，用户可以拿"),n("code",[t._v("Vue")]),t._v("做自由发挥。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块的路由配置数组")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" routes "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./routes.js'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store是以vuex module的形式进行导入使用")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" storeModule "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./store'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他的导入内容")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块信息")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moduleInfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../package.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出模块函数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参数Vue: vue构造对象")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本函数中的this指向vue实例的引用")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合并路由")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$addRoutes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合并状态")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用模块名当做vuex store模块的命名空间")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$registerModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moduleInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" storeModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他逻辑")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("main.js")])]),t._v(" "),n("p",[t._v("原有的"),n("code",[t._v("src/main.js")]),t._v("依然是构建独立应用程序和本地开发服务的入口文件，要想程序正常运行，需要把上面的业务代码入口文件"),n("code",[t._v("src/module.js")]),t._v("导入进来。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" router "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./router'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./store'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vueModuleLoader "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-module-loader'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入模块函数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" aModule "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./module'")]),t._v("\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vueModuleLoader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载模块")]),t._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$moduleLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("再次提醒："),n("code",[t._v("src/main.js")]),t._v("文件只在构建为应用程序和本地开发时有效，构建成微前端模块时无效，所以当你的业务代码需要包含在微前端模块中时，应该导入"),n("code",[t._v("src/module.js")]),t._v("文件")])]),t._v(" "),n("h3",{attrs:{id:"模块部署（延展）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块部署（延展）"}},[t._v("#")]),t._v(" 模块部署（延展）")]),t._v(" "),n("p",[t._v("模块资源文件的部署没有统一标准，方式多种多样，一个使用 nginx+jenkins 的模块部署过程如下：")]),t._v(" "),n("h4",{attrs:{id:"_1-新建模块虚拟机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建模块虚拟机"}},[t._v("#")]),t._v(" 1. 新建模块虚拟机")]),t._v(" "),n("p",[t._v("在部署服务器中找到 nginx 虚拟机配置目录"),n("code",[t._v("*/**/nginx/conf/vhost")]),t._v("。")]),t._v(" "),n("p",[t._v("创建模块的"),n("code",[t._v("vhost")]),t._v("配置文件。")]),t._v(" "),n("p",[t._v("着重以下配置：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模块资源服务。")]),t._v("\n  listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 虚拟机根目录，以模块名命名，用以存放构建生成的文件。")]),t._v("\n    root /app_modules/"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("moduleName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h4",{attrs:{id:"_2-配置构建脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置构建脚本"}},[t._v("#")]),t._v(" 2. 配置构建脚本")]),t._v(" "),n("p",[t._v("登录 jenkins 构建工具创建新任务。")]),t._v(" "),n("h5",{attrs:{id:"_1-执行-shell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-执行-shell"}},[t._v("#")]),t._v(" 1. 执行 shell")]),t._v(" "),n("p",[t._v("本段 shell 主要是模块打包命令，打包过程根据自己模块"),n("code",[t._v("package.json")]),t._v("中实际的脚本进行配置。")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印node版本")]),t._v("\nnode -v\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印yarn版本")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" -v\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行构建脚本")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n")])])]),n("h5",{attrs:{id:"_2-执行-shell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行-shell"}},[t._v("#")]),t._v(" 2. 执行 shell")]),t._v(" "),n("p",[t._v("把第一步打包完成的代码转移到部署服务器模块的虚拟机中。")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" user@xxx.xxx.xxx.xxx "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cd /app_modules/\nrm -rf <module_name>\nmkdir <module_name>"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${WORKSPACE}")]),t._v("/dist/* user@xxx.xxx.xxx.xxx:/app_modules/"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("h4",{attrs:{id:"_3-验证模块地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证模块地址"}},[t._v("#")]),t._v(" 3. 验证模块地址")]),t._v(" "),n("p",[t._v("等待 jenkins 任务执行完毕，尝试访问")]),t._v(" "),n("p",[n("code",[t._v("http://xxx.xxx.xxx.xxx:8080/<app_modules>/<module_name>.umd.js")])]),t._v(" "),n("p",[t._v("如果能访问成功，既模块部署成功。")]),t._v(" "),n("h2",{attrs:{id:"事件总线"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件总线"}},[t._v("#")]),t._v(" 事件总线")]),t._v(" "),n("p",[t._v("为了提高模块与模块，模块与框架之间通信的灵活性，vue-module-loader 特别引入了事件总线。")]),t._v(" "),n("p",[t._v("事件总线本质上是 Vue 原型对象上的一个对象 "),n("code",[t._v("eventBus")]),t._v("，我们可以用来监听和触发一些事件。")]),t._v(" "),n("p",[t._v("每个模块需要提供自己的"),n("router-link",{attrs:{to:"/appendix/#事件列表"}},[t._v("事件列表")]),t._v("以供其他模块监听。反之，也可根据其他模块提供的事件列表按需监听。")],1),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("为表明事件的不变性，vue-module-loader 约定使用常量标识事件名称，事件名称多个单词通过下划线"),n("code",[t._v("_")]),t._v("连接。")])]),t._v(" "),n("h3",{attrs:{id:"触发事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#触发事件"}},[t._v("#")]),t._v(" 触发事件")]),t._v(" "),n("p",[t._v("我们使用$eventBus.emit()方法可以触发一个自定义事件。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$eventBus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EVENT_NAME'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payloadData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"监听事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#监听事件"}},[t._v("#")]),t._v(" 监听事件")]),t._v(" "),n("p",[t._v("我们使用$eventBus.on()方法可以监听一个自定义事件，同一个事件可以重复监听多次。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$eventBus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EVENT_NAME'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("payloadData")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"取消监听"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#取消监听"}},[t._v("#")]),t._v(" 取消监听")]),t._v(" "),n("p",[t._v("我们使用$eventBus.off()方法可以监听一个自定义事件。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$eventBus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("off")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EVENT_NAME'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"发起异步请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发起异步请求"}},[t._v("#")]),t._v(" 发起异步请求")]),t._v(" "),n("p",[t._v("根据业务接口发起异步请求获取数据，是前后端分离的系统最重要的功能之一。vue-module-loader 内部封装了强大易用的 http 网络请求库"),n("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),n("OutboundLink")],1),t._v("，并在实例化时赋化身为"),n("code",[t._v("$http")]),t._v("对象，我们使用"),n("code",[t._v("$http")]),t._v("发起请求就像使用 axios 一样，例如：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$http\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api/path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("除了在 vue-module-loader 实例化时可以传入 http 配置，我们在使用实例方法"),n("code",[t._v("$http")]),t._v("时也可以随时修改请求配置，发起请求时传入的配置优先级大于实例化配置。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$http\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api/path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    timeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前接口的超时时间就会延长至5000ms")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports},72:function(t,s,a){t.exports=a.p+"assets/img/group.7387bf92.png"}}]);