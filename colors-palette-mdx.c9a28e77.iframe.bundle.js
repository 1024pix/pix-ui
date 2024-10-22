/*! For license information please see colors-palette-mdx.c9a28e77.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_1024pix_pix_ui=self.webpackChunk_1024pix_pix_ui||[]).push([[467],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./docs/colors-palette.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_pix_ui_pix_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",p:"p",...(0,_home_runner_work_pix_ui_pix_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"Utiliser Pix UI/Design Tokens/Palette de couleurs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"palette-de-couleurs",children:"Palette de couleurs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Pour infos :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Cette page permet de connaitre les couleurs qui sont disponibles dans ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Pix-UI"}),". ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.figma.com/file/8RJ3aCSfdeQ8AZZVBBYKS8/Design-System-Pix?node-id=16%3A2",rel:"nofollow",children:"Figma"})," reste la source de vérité des couleurs du design system de ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Pix"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Les variables css présentes dans le fichier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"_colors.scss"})," reprennent les noms des symboles utilisés sur les maquettes dans Figma,\non préconise d'utiliser ses noms de variables plutôt que le code hexa."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"solid",children:"SOLID"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.rE,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Primary",subtitle:"--pix-primary-",colors:{10:"#f7f5ff",100:"#cec3f4",300:"#957ee8",500:"#613fdd",700:"#452d9d",900:"#291a5d"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Secondary",subtitle:"--pix-secondary-",colors:{50:"#fffaeb",100:"#ffefc0",300:"#ffdc76",500:"#ffcb33",700:"#a16206",900:"#5b3808"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Tertiary",subtitle:"--pix-tertiary-",colors:{100:"#c3d0ff",500:"#3d68ff",900:"#1a2c6b"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Neutral",subtitle:"--pix-neutral-",colors:{0:"#ffffff",20:"#f4f5f7",100:"#cdd1d9",500:"#5e6c84",800:"#253858",900:"#122647"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Informations",subtitle:"--pix-info-",colors:{50:"#e6f2fe",100:"#b0d3f4",500:"#3b82f6",700:"#1d4ed8",900:"#1e3a8a"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Success",subtitle:"--pix-success-",colors:{50:"#e8f3ef",100:"#b9d8cd",300:"#67ab92",500:"#1c825d",700:"#145c42",900:"#0c3727"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Warning",subtitle:"--pix-warning-",colors:{50:"#fff7eb",100:"#ffe5c0",300:"#ffc676",500:"#f59e0b",700:"#b45309",900:"#78350f"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Error",subtitle:"--pix-error-",colors:{50:"#fbecec",100:"#f1c4c4",500:"#d24140",700:"#952e2e",900:"#581b1b"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Certif",subtitle:"--pix-certif-",colors:{50:"#e8f2f2",500:"#187f7d"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Orga",subtitle:"--pix-orga-",colors:{50:"#ebf1f9",500:"#3674bf"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Shades",subtitle:"--pix-shadow",colors:{100:"#07142E"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Domain Information",subtitle:"--pix-information-",colors:{Dark:"#f24645",Light:"#f1a141"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Domain Content",subtitle:"--pix-content-",colors:{Dark:"#1a8c89",Light:"#52d987"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Domain Communication",subtitle:"--pix-communication-",colors:{Dark:"#3d68ff",Light:"#12a3ff"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Domain Security",subtitle:"--pix-security-",colors:{Dark:"#ac008d",Light:"#ff3f94"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Pix Domain Environment",subtitle:"--pix-environment-",colors:{Dark:"#5e2563",Light:"#564da6"}})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"gradient",children:"GRADIENT"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.rE,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Primary Pix App",subtitle:"$pix-primary-app-gradient",colors:{PrimaryPixApp:"linear-gradient(91.59deg, #3d68ff 0%, #8845ff 100%)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Secondary Pix App",subtitle:"$pix-secondary-app-gradient",colors:{SecondaryPixAppGradient:"linear-gradient(91.59deg, #fedc41 0%, #ff9f00 100%)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Primary Certif",subtitle:"$pix-primary-certif-gradient",colors:{PrimaryCertif:"linear-gradient(91.59deg, #52d987 0%, #1a8c89 100%)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Primary Orga",subtitle:"$pix-primary-orga-gradient",colors:{PrimaryOrga:"linear-gradient(91.59deg, #00ddff 0%, #0095c0 100%)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Secondary Orga",subtitle:"$pix-primary-secondary-gradient",colors:{SecondaryOrga:"linear-gradient(91.59deg, #0d7dc4 0%, #213371 100%)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Domain Information",subtitle:"$pix-information-gradient",colors:{DomainInformation:"linear-gradient(180deg, #f24645 0%, #f1a141 100%)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Domain Content",subtitle:"$pix-content-gradient",colors:{DomainContent:"linear-gradient(180deg, #1a8c89 0%, #52d987 100%)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Domain Communication",subtitle:"$pix-communication-gradient",colors:{DomainCommunication:"linear-gradient(180deg, #3d68ff 0%, #12a3ff 100%)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Domain Security",subtitle:"$pix-security-gradient",colors:{DomainSecurity:"linear-gradient(180deg, #ac008d 0%, #ff3f94 100%)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Jl,{title:"Domain Environment",subtitle:"$pix-environment-gradient",colors:{DomainEnvironment:"linear-gradient(180deg, #5e2563 0%, #564da6 100%)"}})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_pix_ui_pix_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);