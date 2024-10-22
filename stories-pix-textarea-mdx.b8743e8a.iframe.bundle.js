/*! For license information please see stories-pix-textarea-mdx.b8743e8a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_1024pix_pix_ui=self.webpackChunk_1024pix_pix_ui||[]).push([[7303,5025],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./app/stories/pix-textarea.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_pix_ui_pix_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_pix_textarea_stories_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/stories/pix-textarea.stories.js");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_home_runner_work_pix_ui_pix_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_pix_textarea_stories_js__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"pixtextarea",children:"PixTextarea"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Un textarea permettant d'avoir un champ de saisie libre."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Optionellement, il peut afficher le nombre de caractères tapés ainsi que le nombre de caractères maximum."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_textarea_stories_js__WEBPACK_IMPORTED_MODULE_2__.textarea,height:150}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"dimensions",children:"Dimensions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Le PixTextarea prend tout l'espace à sa disposition."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_textarea_stories_js__WEBPACK_IMPORTED_MODULE_2__.FullWidth,height:290}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"accessibilité",children:"Accessibilité"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"La propriété label est optionnelle pour le composant."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Mais au niveau de l'accessibilité, il est quand même nécessaire que le champ soit rattaché à un label."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Il y a alors plusieurs possibilités :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Vous pouvez cacher le label visuellement mais le rendre disponible pour les lecteurs d'écran via la propriété ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"screenReaderOnly"})," à ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Les attributs ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-label"})," et ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-labelledby"})," sont utilisables."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Un attribut ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@for"})," pointant vers l'id du textarea peut être ajouté à un composant ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<PixLabel />"})," extérieur."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_textarea_stories_js__WEBPACK_IMPORTED_MODULE_2__.textareaWithoutLabel,height:100}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<PixTextarea\n  @id="{{id}}"\n  @value="{{value}}"\n  @maxlength="{{maxlength}}"\n  @errorMessage="{{errorMessage}}"\n  @requiredLabel="{{requiredLabel}}"\n>\n  <:label>{{label}}</:label>\n</PixTextarea>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ov,{of:_pix_textarea_stories_js__WEBPACK_IMPORTED_MODULE_2__})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_pix_ui_pix_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./app/stories/pix-textarea.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullWidth:()=>FullWidth,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,textarea:()=>textarea,textareaWithoutLabel:()=>textareaWithoutLabel});const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Textarea",argTypes:{id:{name:"id",description:"id généré automatiquement, peut être définit manuellement si besoin",type:{name:"string",required:!1}},value:{name:"value",description:"Valeur du champ",type:{name:"string",required:!1}},maxlength:{name:"maxlength",description:"Nombre de caractères maximal à taper dans le champ",type:{name:"number",required:!1}},errorMessage:{name:"errorMessage",description:"Affiche une erreur en dessous du champ.",type:{name:"string",required:!1}},label:{name:"label",description:"Donne un label au champ.",type:{name:"string",required:!1}},subLabel:{name:"subLabel",description:"Un descriptif complétant le label",type:{name:"string",required:!1}},requiredLabel:{name:"requiredLabel",description:"Label indiquant que le champ est requis.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},screenReaderOnly:{name:"screenReaderOnly",description:"Permet de rendre le label lisible uniquement par les lecteurs d'écran",control:{type:"boolean"},type:{name:"boolean",required:!1},table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},size:{name:"size",description:"Correspond à la taille de la police du label.",type:{name:"string",required:!1},table:{defaultValue:{summary:"default"}},control:{type:"select"},options:["small","large","default"]},inlineLabel:{name:"inlineLabel",description:"Permet de ne pas afficher la marge pour les éléments de formulaire inline",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}},control:{type:"boolean"}}}},textarea=(args=>({template:Ember.HTMLBars.template({id:"UbCOtJab",block:'[[[8,[39,0],null,[["@id","@value","@maxlength","@errorMessage","@size","@subLabel","@requiredLabel","@inlineLabel"],[[30,0,["id"]],[30,0,["value"]],[30,0,["maxlength"]],[30,0,["errorMessage"]],[30,0,["size"]],[30,0,["subLabel"]],[30,0,["requiredLabel"]],[30,0,["inlineLabel"]]]],[["label"],[[[[1,[30,0,["label"]]]],[]]]]]],[],false,["pix-textarea"]]',moduleName:"(unknown template module)",isStrictMode:!1}),context:args})).bind({});textarea.args={id:"textarea",label:"Label du textarea",subLabel:"Sous-label",value:"Contenu du textarea"};const FullWidth=(args=>({template:Ember.HTMLBars.template({id:"gZ1FZpGA",block:'[[[10,0],[14,5,"border: 1px solid var(--pix-neutral-500); background: var(--pix-neutral-20); padding: var(--pix-spacing-4x); width: 500px; height: 250px;"],[12],[1,"\\n  "],[8,[39,0],null,[["@id","@value","@subLabel","@maxlength"],[[30,0,["id"]],[30,0,["value"]],[30,0,["subLabel"]],[30,0,["maxlength"]]]],[["label"],[[[[1,[30,0,["label"]]]],[]]]]],[1,"\\n"],[13]],[],false,["pix-textarea"]]',moduleName:"(unknown template module)",isStrictMode:!1}),context:args})).bind({});FullWidth.args={id:"textarea",label:"Label du textarea",subLabel:"Sous-label",value:"Contenu du textarea",maxlength:120};const textareaWithoutLabel=(args=>({template:Ember.HTMLBars.template({id:"6vaAYZiD",block:'[[[8,[39,0],null,[["@id","@value","@maxlength","@errorMessage","@size","@subLabel","@requiredLabel","@inlineLabel"],[[30,0,["id"]],[30,0,["value"]],[30,0,["maxlength"]],[30,0,["errorMessage"]],[30,0,["size"]],[30,0,["subLabel"]],[30,0,["requiredLabel"]],[30,0,["inlineLabel"]]]],null]],[],false,["pix-textarea"]]',moduleName:"(unknown template module)",isStrictMode:!1}),context:args})).bind({});textareaWithoutLabel.args={id:"textarea-without-label",value:"Contenu du textarea sans label affiché"};const __namedExportsOrder=["textarea","FullWidth","textareaWithoutLabel"];textarea.parameters={...textarea.parameters,docs:{...textarea.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTextarea\n  @id={{this.id}}\n  @value={{this.value}}\n  @maxlength={{this.maxlength}}\n  @errorMessage={{this.errorMessage}}\n  @size={{this.size}}\n  @subLabel={{this.subLabel}}\n  @requiredLabel={{this.requiredLabel}}\n  @inlineLabel={{this.inlineLabel}}\n><:label>{{this.label}}</:label></PixTextarea>`,\n    context: args\n  };\n}",...textarea.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`{{! template-lint-disable no-inline-styles }}\n<div\n  style='border: 1px solid var(--pix-neutral-500); background: var(--pix-neutral-20); padding: var(--pix-spacing-4x); width: 500px; height: 250px;'\n>\n  <PixTextarea\n    @id={{this.id}}\n    @value={{this.value}}\n    @subLabel={{this.subLabel}}\n    @maxlength={{this.maxlength}}\n  ><:label>{{this.label}}</:label></PixTextarea>\n</div>`,\n    context: args\n  };\n}",...FullWidth.parameters?.docs?.source}}},textareaWithoutLabel.parameters={...textareaWithoutLabel.parameters,docs:{...textareaWithoutLabel.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTextarea\n  @id={{this.id}}\n  @value={{this.value}}\n  @maxlength={{this.maxlength}}\n  @errorMessage={{this.errorMessage}}\n  @size={{this.size}}\n  @subLabel={{this.subLabel}}\n  @requiredLabel={{this.requiredLabel}}\n  @inlineLabel={{this.inlineLabel}}\n/>`,\n    context: args\n  };\n}",...textareaWithoutLabel.parameters?.docs?.source}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);