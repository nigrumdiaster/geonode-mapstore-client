(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2514],{881808:(t,e,r)=>{"use strict";r.d(e,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>u,nT:()=>c,TL:()=>a,KS:()=>l,EB:()=>s,DZ:()=>f,Aw:()=>p,V_:()=>y,H0:()=>d,jW:()=>b,JZ:()=>m,fQ:()=>v,HK:()=>g,YO:()=>O,I6:()=>h});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",c="MAP_LOAD_INFO",a="MAP_INFO_LOAD_START",l="MAP_INFO_LOADED",s="MAP_INFO_LOAD_ERROR",f="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",y="MAP:RESET_MAP_SAVE_ERROR";function d(t,e,r){return{type:i,config:t,legacy:!!e,mapId:e,zoomToExtent:r}}function b(t,e){return{type:u,error:t,mapId:e}}function m(t,e,r,n,i){return{type:o,configName:t,mapId:e,config:r,mapInfo:n,overrideConfig:i}}function v(t,e){return{type:l,mapId:e,info:t}}function g(t,e){return{type:s,mapId:t,error:e}}function O(t){return{type:a,mapId:t}}function h(t){return{type:c,mapId:t}}},580416:(t,e,r)=>{"use strict";r.d(e,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>a,sb:()=>l,K$:()=>s,k7:()=>f,cX:()=>p,x9:()=>y,vs:()=>d,oE:()=>b,Po:()=>m,qv:()=>v,cI:()=>g,g6:()=>O,I4:()=>h,l$:()=>P,Xv:()=>S,k3:()=>E,CQ:()=>w,R8:()=>j,HN:()=>A,sH:()=>_,c7:()=>R,_7:()=>D,eF:()=>T,O6:()=>L,ED:()=>I,RP:()=>N,sF:()=>M,VP:()=>k,He:()=>x,vO:()=>C,WO:()=>Y,bh:()=>G,pV:()=>F,MK:()=>W,ZF:()=>V,tV:()=>H,Dv:()=>Z,Yz:()=>z,kI:()=>U,XG:()=>J,A4:()=>X,Rp:()=>$,$o:()=>B,ct:()=>K,oh:()=>q,$h:()=>Q,ud:()=>tt,Qr:()=>et,LR:()=>rt,nN:()=>nt,UG:()=>ot,F5:()=>it,c9:()=>ut,Jh:()=>ct,Xy:()=>at});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",c="CONTEXT_NODE",a="SORT_NODE",l="REMOVE_NODE",s="UPDATE_NODE",f="MOVE_NODE",p="LAYER_LOADING",y="LAYER_LOAD",d="LAYER_ERROR",b="ADD_LAYER",m="ADD_GROUP",v="REMOVE_LAYER",g="SHOW_SETTINGS",O="HIDE_SETTINGS",h="UPDATE_SETTINGS",P="REFRESH_LAYERS",S="LAYERS:UPDATE_LAYERS_DIMENSION",E="LAYERS_REFRESHED",w="LAYERS_REFRESH_ERROR",j="LAYERS:BROWSE_DATA",A="LAYERS:DOWNLOAD",_="LAYERS:CLEAR_LAYERS",R="LAYERS:SELECT_NODE",D="LAYERS:FILTER_LAYERS",T="LAYERS:SHOW_LAYER_METADATA",L="LAYERS:HIDE_LAYER_METADATA",I="LAYERS:UPDATE_SETTINGS_PARAMS";function N(t,e,r){return{type:g,node:t,nodeType:e,options:r}}function M(){return{type:O}}function k(t){return{type:h,options:t}}function x(t,e){return{type:n,newProperties:e,layer:t}}function C(t,e){return{type:o,layer:t,params:e}}function Y(t,e){return{type:i,newProperties:e,group:t}}function G(t,e,r){return{type:u,node:t,nodeType:e,status:!r}}function F(t){return{type:c,node:t}}function W(t,e){return{type:a,node:t,order:e,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function V(t,e){return{type:l,node:t,nodeType:e,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function H(t,e,r){return{type:s,node:t,nodeType:e,options:r}}function Z(t,e,r){return{type:f,node:t,groupId:e,index:r}}function z(t){return{type:p,layerId:t}}function U(t,e){return{type:y,layerId:t,error:e}}function J(t,e,r){return{type:d,layerId:t,tilesCount:e,tilesErrorCount:r}}function X(t){return{type:b,layer:t,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function $(t,e,r){return{type:m,group:t,parent:e,options:r}}function B(t){return{type:v,layerId:t}}function K(t,e){return{type:n,layer:t,newProperties:{_v_:e||(new Date).getTime()}}}function q(t){return{type:E,layers:t}}function Q(t,e){return{type:w,layers:t,error:e}}function tt(t,e,r,n){return{type:S,dimension:t,value:e,options:r,layers:n}}function et(t){return{type:j,layer:t}}function rt(t){return{type:A,layer:t}}function nt(){return{type:_}}function ot(t,e,r){return{type:R,id:t,nodeType:e,ctrlKey:r}}function it(t){return{type:D,text:t}}function ut(t,e){return{type:T,metadataRecord:t,maskLoading:e}}function ct(){return{type:L}}function at(t,e){return{type:I,newParams:t,update:e}}},965539:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(124852),o=r.n(n);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){var n,o,u,c;n=t,o=e,u=r[e],c=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==i(c)?c:String(c))in n?Object.defineProperty(n,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[o]=u})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const a=function(t){var e=t.id,r=t.children,n=t.header,i=t.footer,u=t.columns,a=t.height,l=t.style,s=void 0===l?{}:l,f=t.className,p=t.bodyClassName,y=void 0===p?"ms2-border-layout-body":p;return o().createElement("div",{id:e,className:f,style:c({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},n,o().createElement("div",{className:y,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},a?o().createElement("div",{style:{height:a}},r):r),a?o().createElement("div",{style:{height:a}},u):u),i)}},72839:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>vt});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),c=r(171703),a=r(867076),l=r(22222),s=r(815135),f=r(480681),p=r(401757),y=r(557579),d=r(313311),b=r.n(d),m=r(630998),v=r.n(m),g=r(189734),O=r.n(g);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){var n,o,i,u;n=t,o=e,i=r[e],u=function(t,e){if("object"!=h(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==h(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var E=function(t){return!t.dataGrid||!t.dataGrid.static},w=(0,l.P1)(p.zm,p.YR,p.yZ,p.lF,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return O()(t.filter(E).map((function(t){return v()(e,(function(e){return e===t.id}))>=0?S(S({},t),{},{collapsed:!0}):t})),(function(t){var e=n[t.id]&&n[t.id].layout,o=b()(r,{i:t.id})||e||{},i=o.x,u=void 0===i?0:i,c=o.y;return 100*(void 0===c?0:c)+u}))})),j=r(10473),A=(0,a.compose)((0,a.defaultProps)({toolsOptions:{seeHidden:"user.role===ADMIN"}}),(0,j.Z)("toolsOptions",{asObject:!0}),(0,a.withProps)((function(t){var e=t.widgets,r=t.toolsOptions;return{widgets:(void 0===r?{seeHidden:!1}:r).seeHidden?e:e.filter((function(t){return!t.hide}))}}))),_=r(965539),R=r(80717);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){var n,o,i,u;n=t,o=e,i=r[e],u=function(t,e){if("object"!=D(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==D(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.widgetType,r=t.type;switch(e&&"chart"!==e?e:r){case"text":return"sheet";case"table":return"features-grid";case"pie":return"pie-chart";case"line":return"1-line";case"map":return"1-map";case"counter":return"counter";default:return"stats"}};const N=(0,a.compose)((0,a.withPropsOnChange)(["btnGroupProps"],(function(t){var e=t.btnGroupProps;return{btnGroupProps:L(L({},e),{},{className:"widgets-bar"+(e&&e.className?" ".concat(e.className):"")})}})),(0,a.withPropsOnChange)(["widgets","onClick"],(function(t){var e=t.widgets,r=void 0===e?[]:e,n=t.onClick,o=void 0===n?function(){}:n;return{buttons:r.map((function(t){return{glyph:I(t),tooltip:t.title,className:t.collapsed?"btn-tray":"btn-tray active",onClick:function(){return o(t)}}}))}})))(R.Z);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){var n,o,i,u;n=t,o=e,i=r[e],u=function(t,e){if("object"!=M(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==M(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const C=(0,a.compose)((0,c.connect)((0,l.P1)(w,(function(t){return{widgets:t}})),{onClick:y.f}),(0,a.defaultProps)({btnGroupProps:{className:"widgets-toolbar",style:{marginLeft:2,marginRight:2}}}),A,(0,a.withProps)((function(t){var e=t.btnGroupProps,r=void 0===e?{}:e,n=t.btnDefaultProps,o=void 0===n?{}:n;return{btnGroupProps:x({bsSize:"xsmall"},r),btnDefaultProps:x({bsSize:"xsmall"},o||{})}})))(N);var Y=r(38560),G=r(55105),F=r(496259);function W(){return W=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},W.apply(this,arguments)}function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function H(t){return function(t){if(Array.isArray(t))return Z(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,$(n.key),n)}}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}function X(t,e,r){return(e=$(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $(t){var e=function(t,e){if("object"!=V(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==V(e)?e:String(e)}var B=(0,s.Z)(Y.Z),K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expanded,r=t.onClick,n=void 0===r?function(){}:r;return o().createElement(B,{tooltipId:e?"widgets.tray.collapseTray":"widgets.tray.expandTray",bsSize:"xsmall",bsStyle:"default",style:{borderColor:"transparent"},onClick:n},o().createElement(f.Glyphicon,{glyph:e?"chevron-right":"chevron-left"}))},q=(0,a.compose)((0,c.connect)((0,l.P1)(p.E5,(function(){return{widgets:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}})),{onClick:function(){return(0,y.Ff)()}}),A,(0,a.withProps)((function(t){var e=t.widgets;return{shouldExpand:0===(void 0===e?[]:e).length}})))((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.onClick,r=void 0===e?function(){}:e,n=t.shouldExpand,i=void 0!==n&&n;return o().createElement(B,{tooltipId:i?"widgets.tray.expandAll":"widgets.tray.collapseAll",bsStyle:i?"primary":"success active",bsSize:"xsmall",onClick:r},o().createElement(f.Glyphicon,{glyph:"list"}))})),Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(c,t);var e,r,n,i,u=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(n);if(i){var r=J(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),u.apply(this,arguments)}return e=c,(r=[{key:"render",value:function(){var t,e,r=this;return this.props.enabled?o().createElement("div",{className:"widgets-tray",style:{marginBottom:32,marginRight:(null!==(t=null===(e=this.props.layout)||void 0===e?void 0:e.right)&&void 0!==t?t:0)+65,bottom:0,right:0,position:"absolute"}},o().createElement(_.Z,{columns:[].concat(H(this.props.isSingleWidgetLayout?[]:[o().createElement(K,{key:"collapse-tray",toolsOptions:this.props.toolsOptions,expanded:this.props.expanded,onClick:function(){return r.props.setExpanded(!r.props.expanded)}})]),[o().createElement(q,{key:"collapse-all",toolsOptions:this.props.toolsOptions})],H(this.props.items.map((function(t){return t.tool}))||[]))},this.props.expanded&&!this.props.isSingleWidgetLayout?o().createElement(C,{toolsOptions:this.props.toolsOptions}):null)):null}}])&&z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(o().Component);X(Q,"propTypes",{enabled:u().bool,toolsOptions:u().object,items:u().array,expanded:u().bool,setExpanded:u().func,layout:u().object,isSingleWidgetLayout:u().bool}),X(Q,"defaultProps",{enabled:!0,items:[],expanded:!1,setExpanded:function(){},layout:{}});const tt=(0,a.compose)((function(t){return function(e){return o().createElement(F.Z,{handleWidth:!0},(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.width,i=r.height;return o().createElement(t,W({},e,{width:n,height:i}))}))}}),(0,a.withState)("expanded","setExpanded",!1),(0,c.connect)((0,l.P1)(w,(function(t){return t.browser&&t.browser.mobile}),(function(t){return(0,G.ic)(t,{right:!0})}),(function(t,e){return{widgets:t,layout:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],isMobileAgent:e}})),{toggleTray:y.ep}),A,(0,a.withProps)((function(t){var e=t.widgets,r=void 0===e?[]:e;return{hasCollapsedWidgets:r.filter((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).collapsed})).length>0,hasTrayWidgets:r.length>0}})),(0,a.withProps)((function(t){var e=t.isMobileAgent,r=t.width,n=t.singleWidgetLayoutBreakpoint;return{isSingleWidgetLayout:e||r<=(void 0===n?1024:n)}})),(0,a.lifecycle)({componentDidMount:function(){this.props.toggleTray&&this.props.toggleTray(!0)},componentWillUnmount:function(){this.props.toggleTray&&this.props.toggleTray(!1)}}),(0,a.mapPropsStream)((function(t){return t.merge(t.distinctUntilKeyChanged("hasCollapsedWidgets").do((function(t){var e=t.setExpanded;return(void 0===e?function(){}:e)(t.hasCollapsedWidgets)})).ignoreElements())})),(0,a.withProps)((function(t){var e=t.enabled,r=t.hasTrayWidgets;return{enabled:e&&r}})))(Q);var et=r(154414),rt=r(49977),nt=r.n(rt),ot=r(227361),it=r.n(ot),ut=r(757676),ct=r(881808),at=r(197395),lt=r(580416),st=r(997291);function ft(t){return ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft(t)}function pt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function yt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(r),!0).forEach((function(e){var n,o,i,u;n=t,o=e,i=r[e],u=function(t,e){if("object"!=ft(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=ft(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==ft(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):pt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var dt=function(t){return((0,p.E5)(t)||[]).filter((function(t){return!it()(t,"dataGrid.static")})).length>0},bt=function(t){return function(e){return e.take(1).switchMap((function(){return nt().Observable.of((0,at.um)(yt(yt({},t),{},{autoDismiss:8,position:"tr",uid:"timeline-collapsed"})))})).merge(e)}};const mt={collapseTimelineOnWidgetsEvents:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===e?function(){}:e;return nt().Observable.merge(t.ofType(y.Ym,y.uU,ct.ok,y.$A,y.Jm).filter((function(){return dt(r())&&(0,st.pn)(r())}))).switchMap((function(){return nt().Observable.of((0,ut.w2)(!0))})).let(bt({title:"widgets.tray.notifications.collapsed.timelineTitle",message:"widgets.tray.notifications.collapsed.message"}))},collapseWidgetsOnTimelineEvents:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===e?function(){}:e;return nt().Observable.merge(t.ofType(ut.M5).filter((function(t){return!t.collapsed})),t.ofType(lt.yS).filter((function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).newProperties;return(void 0===t?{}:t).dimensions}))).filter((function(){return dt(r())&&(0,st.qJ)(r())&&(0,st.pn)(r())})).switchMap((function(){return nt().Observable.of((0,y.Ff)())})).let(bt({title:"widgets.tray.notifications.collapsed.widgetsTitle",message:"widgets.tray.notifications.collapsed.message"}))},expandTimelineIfCollapsedOnTrayUnmount:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===e?function(){}:e;return t.ofType(y.yY,y.$A,ct.ok).filter((function(){return!(0,st.pn)(r())&&(0,st.qJ)(r())})).filter((function(){return!dt(r())})).switchMap((function(){return nt().Observable.of((0,ut.w2)(!1))}))}},vt={WidgetsTrayPlugin:(0,et.Z)(tt),epics:mt}},154414:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n=r(22222),o=r(171703),i=r(55105),u=r(93152);const c=(0,o.connect)((0,n.P1)(i.Jz,i.VM,u.c0,(function(t,e,r){return{enabled:!t&&!e&&!r}})))},10473:(t,e,r)=>{"use strict";r.d(e,{Z:()=>P});var n=r(867076),o=r(171703),i=r(22222),u=r(800827),c=r(274621),a=r(227361),l=r.n(a),s=r(984596),f=r.n(s),p=r(66604),y=r.n(p),d=r(747037),b=r.n(d),m=r(701469),v=r.n(m);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}var O=function t(e){var r=e.accessInfo,n=e.postProcessValue,o=e.reduceFun;return function(e){var i=f()(e),u=o;return i.length>1&&"__OR__"===i[0]&&(u=function(t,e){return t||e},i=i.slice(1)),i.map((function(e){var i=e;if(v()(i))return t({accessInfo:r,postProcessValue:n,reduceFun:o})(i);var u=!1;i&&b()(i)&&i.startsWith("!")&&(u=!0,i=i.substr(1));var c=function(t){return u?!t:t},a=b()(i)&&i.split(":");if(a&&a[0]){var s=a[0].split(/\!\=\=?/),f=a[0].split(/\=\=?\=?/);return s.length>1?c(n(l()(r,s[0]),i)!==s[1]):f.length>1?c(n(l()(r,f[0]),i)===f[1]):c(n(l()(r,a[0]),i))}return i})).reduce(u||function(t,e){return t&&e})}};const h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.asObject,o=void 0!==r&&r,i=e.postProcessValue,u=void 0===i?function(t){return t}:i,c=e.reduceFun,a=e.accessInfo,l=void 0===a?"accessInfo":a;return(0,n.withPropsOnChange)([t,l],(function(){var e,r,n,i,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e={},r=t,n=o?y()(a[t],O({accessInfo:a[l],postProcessValue:u,reduceFun:c})):O({accessInfo:a[l],postProcessValue:u,reduceFun:c})(a[t]),i=function(t,e){if("object"!=g(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),(r="symbol"==g(i)?i:String(i))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}))},P=function(){return(0,n.compose)((0,o.connect)((0,i.P1)(u.J9,u._H,c.np,(function(t,e,r){return{accessInfo:{mapId:t,mapInfo:e,user:r}}}))),h.apply(void 0,arguments))}},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>d,Nr:()=>b,ic:()=>v,Jz:()=>g,VM:()=>O,CF:()=>h,Ju:()=>P});var n=r(91175),o=r.n(n),i=r(288306),u=r.n(i),c=r(800827),a=r(552259),l=r(737275);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){var n;return n=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==s(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return t.maplayout&&t.maplayout.layout||{}},b=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},m=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},v=u()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=d(t),o=m(t);return n&&Object.keys(n).filter((function(t){return e[t]})).reduce((function(t,e){var i;return p(p({},t),{},y({},e,r&&null!==(i=o[e])&&void 0!==i?i:n[e]))}),{})||{}}),(function(t,e,r){return JSON.stringify(d(t))+JSON.stringify(m(t))+JSON.stringify(e)+(r?"_isDock":"")})),g=function(t){var e;return!(null===(e=d(t))||void 0===e||!e.rightPanel)},O=function(t){var e,r=l.ZP.getConfigProp("mapLayout")||a.DEFAULT_MAP_LAYOUT;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=d(t);return!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==r?void 0:r.bottom.sm)&&void 0!==e?e:0,type:"not"}])},h=function(t){var e=(0,c.Od)(t),r=b(t);return r&&e&&e.size&&{left:(0,a.parseLayoutValue)(r.left,e.size.width),bottom:(0,a.parseLayoutValue)(r.bottom,e.size.height),right:(0,a.parseLayoutValue)(r.right,e.size.width),top:(0,a.parseLayoutValue)(r.top,e.size.height)}},P=function(t){var e,r;return null!==(e=null==t||null===(r=t.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==e?e:{left:[],right:[]}}},324684:(t,e,r)=>{"use strict";r.d(e,{F:()=>i,y:()=>u});var n=r(227361),o=r.n(n),i=function(t){return o()(t,"router.location.pathname")||"/"},u=function(t){return o()(t,"router.location.search")||""}},274621:(t,e,r)=>{"use strict";r.d(e,{np:()=>n,L3:()=>o,jl:()=>i,y8:()=>u,qg:()=>c}),r(727418),r(227361);var n=function(t){return t&&t.security&&t.security.user},o=function(t){return n(t)&&n(t).role},i=function(t){return t&&t.security&&t.security.user},u=function(t){return t.security&&t.security.token},c=function(t){return"ADMIN"===o(t)}},887157:(t,e,r)=>{var n=r(640554),o=r(588958);t.exports=function(t,e,r,i){var u=t.length;for((r=n(r))<0&&(r=-r>u?0:u+r),(i=void 0===i||i>u?u:n(i))<0&&(i+=u),i=r>i?0:o(i);r<i;)t[r++]=e;return t}},389179:(t,e,r)=>{var n=r(555639),o=r(640554),i=r(14841),u=r(479833),c=n.isFinite,a=Math.min;t.exports=function(t){var e=Math[t];return function(t,r){if(t=i(t),(r=null==r?0:a(o(r),292))&&c(t)){var n=(u(t)+"e").split("e"),l=e(n[0]+"e"+(+n[1]+r));return+((n=(u(l)+"e").split("e"))[0]+"e"+(+n[1]-r))}return e(t)}}},819873:(t,e,r)=>{var n=r(887157),o=r(816612);t.exports=function(t,e,r,i){var u=null==t?0:t.length;return u?(r&&"number"!=typeof r&&o(t,e,r)&&(r=0,i=u),n(t,e,r,i)):[]}},59854:(t,e,r)=>{var n=r(389179)("round");t.exports=n},588958:(t,e,r)=>{var n=r(829750),o=r(640554);t.exports=function(t){return t?n(o(t),0,4294967295):0}},819081:(t,e,r)=>{"use strict";t.exports=r(1174)}}]);