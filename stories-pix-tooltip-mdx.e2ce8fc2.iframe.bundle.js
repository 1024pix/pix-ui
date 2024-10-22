/*! For license information please see stories-pix-tooltip-mdx.e2ce8fc2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_1024pix_pix_ui=self.webpackChunk_1024pix_pix_ui||[]).push([[2418,8932],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./app/stories/pix-tooltip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_pix_ui_pix_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/stories/pix-tooltip.stories.js");function _createMdxContent(props){const _components={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_home_runner_work_pix_ui_pix_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"pix-tooltip",children:"Pix Tooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Une infobulle qui s'affiche au survol d'un élément."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Ce composant est utilisé comme wrapper, c'est à dire qu'il encadre l'élément sur lequel on souhaite ajouter une infobulle. L'utilisation de ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Named Block"})," permet d'utiliser des composants HTML facilement dans la tooltip."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["⚠️ A noter que le wrapper PixTooltip est en ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"display: flex;"}),", il s'adaptera donc à la taille de ses enfants. Ainsi si votre élément ne s'affiche plus comme avant après l'ajout de la PixTooltip, veillez à rajouter les dimensions voulues à l'enfant."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"⚠️ L'infobulle ne s'affichera pas si le texte est vide."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"accessibilité",children:"Accessibilité"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Les tooltips doivent être appliquées de préférences sur des éléments nativement focusable comme ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<button>"})," ou ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<input>"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Si vous utilisez un élément ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<div>"})," ou ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<span>"}),", il faut ajouter ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'tabindex="0"'})," pour qu'il prenne le focus."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<PixTooltip>\n  <:triggerElement>\n    <span tabindex="0">Mon span</span>\n  </:triggerElement>\n\n  <:tooltip>\n    My tooltip\n  </:tooltip>\n</PixTooltip>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Les tooltips doivent prendre un ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@id"})," et être référencées par leur élément déclencheur"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["soit via ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-describedby"})," si l'élément possèdent déjà un label, car le tooltip agit alors comme une description supplémentaire."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<PixTooltip @id="tooltip-1">\n  <:triggerElement>\n    <PixButton aria-describedby="tooltip-1">Mon bouton</PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    My tooltip\n  </:tooltip>\n</PixTooltip>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["soit via ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-labelledby"})," si l'élément ne possède pas de label et que le tooltip fait office de libellé."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<PixTooltip @id="tooltip-2" @text="Cette information apparaît uniquement au survol de l\'icone">\n  <span class="icon icon-info" aria-labelledby="tooltip-2"></span>\n</PixTooltip>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Infobulle en position ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"top"}),", fond sombre (par défaut)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.Default,height:200}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.WithIcon,height:200}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.WithInput,height:200}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"is-light",children:"Is Light"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Infobulle en mode clair."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'⚠️ le tooltip "light" est à utiliser de préférence sur fond coloré ! Mais ce n\'est pas obligatoire.'}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.isLight,height:200}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Différentes positions de l'infobulle.\nExiste aussi ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"top-left"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"top-right"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"bottom-left"})," et ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"bottom-right"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.left,height:100}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.right,height:100}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.bottom,height:150}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"is-wide",children:"Is Wide"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Infobulle en plus large."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.isWide,height:200}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"is-inline",children:"Is Inline"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Infobulle dont le contenu reste sur une ligne."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.isInline,height:200}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-html",children:"With HTML"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Infobulle contenant des éléments HTML"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.WithHTML,height:200}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"hide",children:"Hide"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Cache la tooltip (par exemple si le contenu est vide)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.hide,height:200}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:"<PixTooltip>\n  <:triggerElement>\n    <button>Tooltip par défaut</button>\n  </:triggerElement>\n  <:tooltip>\n    <PixIcon @name=\"openNew\" /> Avec des <strong>éléments</strong> HTML/Ember\n  </:tooltip>\n</PixTooltip>\n\n<PixTooltip\n  @isLight={{true}}\n>\n  <:triggerElement>\n    <button>Tooltip en mode clair</button>\n  </:triggerElement>\n\n  <:tooltip>\n    Hey\n  </:tooltip>\n</PixTooltip>\n\n<PixTooltip\n  @isLight={{true}}\n>\n  <:triggerElement>\n    <button>Tooltip sur une ligne</button>\n  </:triggerElement>\n\n  <:tooltip>\n    Hey\n  </:tooltip>\n</PixTooltip>\n\n<PixTooltip\n  @position='bottom'\n  @isLight={{true}}\n  >\n  <:triggerElement>\n    <button>Tooltip apparaissant en bas</button>\n  </:triggerElement>\n\n  <:tooltip>\n    Hey\n  </:tooltip>\n</PixTooltip>\n\n<PixTooltip\n  @hide={{true}}\n  >\n  <:triggerElement>\n    <button>Tooltip n'apparaissant pas</button>\n  </:triggerElement>\n\n  <:tooltip>\n    Hey\n  </:tooltip>\n</PixTooltip>\n\n<PixTooltip\n  @isWide={{true}}\n  >\n  <:triggerElement>\n    <button>Tooltip en mode large</button>\n  </:triggerElement>\n\n  <:tooltip>\n    Hey\n  </:tooltip>\n</PixTooltip>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ov,{of:_pix_tooltip_stories__WEBPACK_IMPORTED_MODULE_2__})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_pix_ui_pix_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./app/stories/pix-tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithHTML:()=>WithHTML,WithIcon:()=>WithIcon,WithInput:()=>WithInput,__namedExportsOrder:()=>__namedExportsOrder,bottom:()=>bottom,default:()=>__WEBPACK_DEFAULT_EXPORT__,hide:()=>hide,isInline:()=>isInline,isLight:()=>isLight,isWide:()=>isWide,left:()=>left,right:()=>right});const __WEBPACK_DEFAULT_EXPORT__={title:"Basics/Tooltip",argTypes:{id:{name:"id",description:"Identifiant permettant de référencer le déclencheur via aria-describedby",type:{name:"string",required:!0}},text:{name:"text",description:"Texte à afficher",type:{name:"string",required:!1}},position:{name:"position",description:"Position de la tooltip",type:{name:"string",required:!1},table:{defaultValue:{summary:"top"}},control:{type:"select"},options:["top","top-left","top-right","right","bottom","bottom-left","bottom-right","left"]},isLight:{name:"isLight",description:"Affichage en mode clair",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},isInline:{name:"isInline",description:"Affichage en une seule ligne",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},isWide:{name:"isWide",description:"Affichage large",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},hide:{name:"hide",description:"Masquer la tooltip",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}}},Template=args=>({template:Ember.HTMLBars.template({id:"DzJf20eB",block:'[[[8,[39,0],null,[["@id","@position","@isLight","@isInline","@isWide","@hide"],[[30,0,["id"]],[30,0,["position"]],[30,0,["isLight"]],[30,0,["isInline"]],[30,0,["isWide"]],[30,0,["hide"]]]],[["triggerElement","tooltip"],[[[[1,"\\n    "],[8,[39,1],[[16,"aria-describedby",[30,0,["id"]]]],null,[["default"],[[[[1,"\\n      "],[1,[30,0,["label"]]],[1,"\\n    "]],[]]]]],[1,"\\n  "]],[]],[[[1,"\\n    "],[1,[30,0,["text"]]],[1,"\\n  "]],[]]]]]],[],false,["pix-tooltip","pix-button"]]',moduleName:"(unknown template module)",isStrictMode:!1}),context:args}),Default=Template.bind({});Default.args={text:"Hello World",label:"À survoler pour voir la tooltip"};const isLight=Template.bind({});isLight.args={...Default.args,id:"tooltip-light",isLight:!0};const isWide=Template.bind({});isWide.args={...Default.args,id:"tooltip-wide",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas molestie mauris vel viverra.",isWide:!0};const isInline=Template.bind({});isInline.args={...Default.args,id:"tooltip-large",text:"Je suis une trèèèèèèèès longue information",isInline:!0};const left=Template.bind({});left.args={...Default.args,id:"tooltip-left",label:"Mon infobulle apparaît à gauche",position:"left",isInline:!0};const right=Template.bind({});right.args={...Default.args,id:"tooltip-right",label:"Mon infobulle apparaît à droite",position:"right",isInline:!0};const bottom=Template.bind({});bottom.args={...Default.args,id:"tooltip-bottom",label:"Mon infobulle apparaît en bas",position:"bottom"};const WithHTML=(args=>({template:Ember.HTMLBars.template({id:"O0Q2v36H",block:'[[[8,[39,0],null,[["@id","@isInline"],[[30,0,["id"]],"true"]],[["triggerElement","tooltip"],[[[[1,"\\n    "],[8,[39,1],[[16,"aria-describedby",[30,0,["id"]]]],null,[["default"],[[[[1,"\\n      "],[1,[30,0,["label"]]],[1,"\\n    "]],[]]]]],[1,"\\n  "]],[]],[[[1,"\\n    "],[8,[39,2],null,[["@name"],["openNew"]],null],[1,"\\n    "],[10,"strong"],[12],[1,"HTML/Ember"],[13],[1,"\\n  "]],[]]]]]],[],false,["pix-tooltip","pix-button","pix-icon"]]',moduleName:"(unknown template module)",isStrictMode:!1}),context:args})).bind({});WithHTML.args={label:"À survoler pour voir la tooltip"};const WithIcon=(args=>({template:Ember.HTMLBars.template({id:"X2c0mfHe",block:'[[[8,[39,0],null,[["@id","@isInline"],[[30,0,["id"]],"true"]],[["triggerElement","tooltip"],[[[[1,"\\n"],[1,"    "],[8,[39,1],[[24,0,"external-link"],[24,5,"widh:2.5rem;height:2.5rem"]],[["@name"],["openNew"]],null],[1,"\\n  "]],[]],[[[1,"\\n    "],[1,[30,0,["text"]]],[1,"\\n  "]],[]]]]]],[],false,["pix-tooltip","pix-icon"]]',moduleName:"(unknown template module)",isStrictMode:!1}),context:args})).bind({});WithIcon.args={text:"Hello World",label:"À survoler pour voir la tooltip"};const WithInput=(args=>({template:Ember.HTMLBars.template({id:"SRPt5wdm",block:'[[[8,[39,0],null,[["@id","@isInline"],[[30,0,["id"]],"true"]],[["triggerElement","tooltip"],[[[[1,"\\n    "],[8,[39,1],null,[["@id"],["some-id"]],[["label"],[[[[1,[30,0,["label"]]]],[]]]]],[1,"\\n  "]],[]],[[[1,"\\n    "],[1,[30,0,["text"]]],[1,"\\n  "]],[]]]]]],[],false,["pix-tooltip","pix-input"]]',moduleName:"(unknown template module)",isStrictMode:!1}),context:args})).bind({});WithInput.args={text:"Hello World",label:"À survoler pour voir la tooltip"};const hide=Template.bind({});hide.args={label:"Survoler ici n'affiche pas tooltip",text:"Ne devrait pas s'afficher",hide:!0};const __namedExportsOrder=["Default","isLight","isWide","isInline","left","right","bottom","WithHTML","WithIcon","WithInput","hide"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip\n  @id={{this.id}}\n  @position={{this.position}}\n  @isLight={{this.isLight}}\n  @isInline={{this.isInline}}\n  @isWide={{this.isWide}}\n  @hide={{this.hide}}\n>\n  <:triggerElement>\n    <PixButton aria-describedby={{this.id}}>\n      {{this.label}}\n    </PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...Default.parameters?.docs?.source}}},isLight.parameters={...isLight.parameters,docs:{...isLight.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip\n  @id={{this.id}}\n  @position={{this.position}}\n  @isLight={{this.isLight}}\n  @isInline={{this.isInline}}\n  @isWide={{this.isWide}}\n  @hide={{this.hide}}\n>\n  <:triggerElement>\n    <PixButton aria-describedby={{this.id}}>\n      {{this.label}}\n    </PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...isLight.parameters?.docs?.source}}},isWide.parameters={...isWide.parameters,docs:{...isWide.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip\n  @id={{this.id}}\n  @position={{this.position}}\n  @isLight={{this.isLight}}\n  @isInline={{this.isInline}}\n  @isWide={{this.isWide}}\n  @hide={{this.hide}}\n>\n  <:triggerElement>\n    <PixButton aria-describedby={{this.id}}>\n      {{this.label}}\n    </PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...isWide.parameters?.docs?.source}}},isInline.parameters={...isInline.parameters,docs:{...isInline.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip\n  @id={{this.id}}\n  @position={{this.position}}\n  @isLight={{this.isLight}}\n  @isInline={{this.isInline}}\n  @isWide={{this.isWide}}\n  @hide={{this.hide}}\n>\n  <:triggerElement>\n    <PixButton aria-describedby={{this.id}}>\n      {{this.label}}\n    </PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...isInline.parameters?.docs?.source}}},left.parameters={...left.parameters,docs:{...left.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip\n  @id={{this.id}}\n  @position={{this.position}}\n  @isLight={{this.isLight}}\n  @isInline={{this.isInline}}\n  @isWide={{this.isWide}}\n  @hide={{this.hide}}\n>\n  <:triggerElement>\n    <PixButton aria-describedby={{this.id}}>\n      {{this.label}}\n    </PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...left.parameters?.docs?.source}}},right.parameters={...right.parameters,docs:{...right.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip\n  @id={{this.id}}\n  @position={{this.position}}\n  @isLight={{this.isLight}}\n  @isInline={{this.isInline}}\n  @isWide={{this.isWide}}\n  @hide={{this.hide}}\n>\n  <:triggerElement>\n    <PixButton aria-describedby={{this.id}}>\n      {{this.label}}\n    </PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...right.parameters?.docs?.source}}},bottom.parameters={...bottom.parameters,docs:{...bottom.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip\n  @id={{this.id}}\n  @position={{this.position}}\n  @isLight={{this.isLight}}\n  @isInline={{this.isInline}}\n  @isWide={{this.isWide}}\n  @hide={{this.hide}}\n>\n  <:triggerElement>\n    <PixButton aria-describedby={{this.id}}>\n      {{this.label}}\n    </PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...bottom.parameters?.docs?.source}}},WithHTML.parameters={...WithHTML.parameters,docs:{...WithHTML.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip @id={{this.id}} @isInline='true'>\n  <:triggerElement>\n    <PixButton aria-describedby={{this.id}}>\n      {{this.label}}\n    </PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    <PixIcon @name='openNew' />\n    <strong>HTML/Ember</strong>\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...WithHTML.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip @id={{this.id}} @isInline='true'>\n  <:triggerElement>\n    {{! template-lint-disable no-inline-styles }}\n    <PixIcon class='external-link' @name='openNew' style='widh:2.5rem;height:2.5rem' />\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...WithIcon.parameters?.docs?.source}}},WithInput.parameters={...WithInput.parameters,docs:{...WithInput.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip @id={{this.id}} @isInline='true'>\n  <:triggerElement>\n    <PixInput @id='some-id'>\n      <:label>{{this.label}}</:label>\n    </PixInput>\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...WithInput.parameters?.docs?.source}}},hide.parameters={...hide.parameters,docs:{...hide.parameters?.docs,source:{originalSource:"args => {\n  return {\n    template: hbs`<PixTooltip\n  @id={{this.id}}\n  @position={{this.position}}\n  @isLight={{this.isLight}}\n  @isInline={{this.isInline}}\n  @isWide={{this.isWide}}\n  @hide={{this.hide}}\n>\n  <:triggerElement>\n    <PixButton aria-describedby={{this.id}}>\n      {{this.label}}\n    </PixButton>\n  </:triggerElement>\n\n  <:tooltip>\n    {{this.text}}\n  </:tooltip>\n</PixTooltip>`,\n    context: args\n  };\n}",...hide.parameters?.docs?.source}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);