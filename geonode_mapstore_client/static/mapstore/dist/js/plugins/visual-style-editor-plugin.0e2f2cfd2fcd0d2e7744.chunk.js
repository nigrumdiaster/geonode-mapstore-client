(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9010],{55105:(e,t,n)=>{"use strict";n.d(t,{Nr:()=>d,ic:()=>y,Jz:()=>v,VM:()=>m,CF:()=>p});var r=n(91175),o=n.n(r),l=n(827),a=n(52259);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e.maplayout&&e.maplayout.layout||{}},d=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){return u(u({},e),{},c({},t,n[t]))}),{})||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=s(e),r=!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})));return r},v=function(e){return f(e,[{key:"right",value:658}])},m=function(e){return f(e,[{key:"bottom",value:30,type:"not"}])},p=function(e){var t=(0,l.Od)(e),n=d(e);return n&&t&&t.size&&{left:(0,a.parseLayoutValue)(n.left,t.size.width),bottom:(0,a.parseLayoutValue)(n.bottom,t.size.height),right:(0,a.parseLayoutValue)(n.right,t.size.width),top:(0,a.parseLayoutValue)(n.top,t.size.height)}}},32247:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const l=function(e,t){var n,l,a=function(){if("undefined"==typeof window)return t;try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log("Error to get item key “".concat(e,"”:"),n),t}},i=(n=(0,r.useState)(a),l=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return l}}(n,l)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(n,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],c=i[1];return(0,r.useEffect)((function(){c(a())}),[]),(0,r.useEffect)((function(){var e=function(){c(a())};return window.addEventListener("localStorage",e),function(){window.removeEventListener("localStorage",e)}}),[]),[u,function(t){try{var n=t instanceof Function?t(u):t;c(n),window.localStorage.setItem(e,JSON.stringify(n)),window.dispatchEvent(new Event("localStorage"))}catch(t){console.log("Error “".concat(e,"”:"),t)}}]}},33096:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ie});var r=n(67294),o=n.n(r),l=n(22843),a=n(33664),i=n(22222),u=n(57588),c=n(92222),s=n(32244),d=n(94943),y=n(89255),f=n(23570),v=n.n(f),m=n(80416),p=n(96909),b=n(82904),g=n(60604),h=n(99009),S=n(9082),O=n(93222),E="GEONODE:REQUEST_DATASET_AVAILABLE_STYLES",w=n(17621),j=n.n(w),P=n(35721);function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){var t=e.type,n=e.title,r=j()("hsl(".concat(Math.floor(270*Math.random()),", 90%, 70%)")).toHexString();switch(t){case"raster":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\traster-channels: auto;\n\traster-opacity: 1;\n}\n";case"point":default:return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tmark: symbol('square');\n\t:mark {\n\t\tfill: "+r+";\n\t\tsize: 4;\n\t}\n}\n";case"linestring":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tstroke: "+r+";\n}\n";case"polygon":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tfill: "+r+";\n}\n"}}const A={gnRequestDatasetAvailableStyles:function(e,t){return e.ofType(E).switchMap((function(e){var n,r=t.getState(),o=(null==e||null===(n=e.options)||void 0===n?void 0:n.styleService)||(0,O.Z0)(r);return y.Observable.concat(y.Observable.of((0,b.Xg)("visualStyleEditor","enabled",!0)),y.Observable.defer((function(){return function(e){var t,n,r,o,l,a,i=e.layer,u=e.styleService,c=null==i||null===(t=i.extendedParams)||void 0===t||null===(n=t.mapLayer)||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.subtype,s=(null==i?void 0:i.availableStyles)||[];return 0===s.length?function(e,t){var n,r="visual";return e?S.ZP.getStyleCodeByName({baseUrl:null==t?void 0:t.baseUrl,styleName:(0,P.UH)(e)}).then((function(e){var t=e||{},n=t.metadata,r=void 0===n?{}:n,o=t.code,l=t.format,a=t.languageVersion;return{msEditorType:null==r?void 0:r.msEditorType,msStyleJSON:null==r?void 0:r.msStyleJSON,code:o,format:l,languageVersion:a}})).catch((function(){return{msEditorType:r,msStyleJSON:null,code:n}})):new Promise((function(e){return e({msStyleJSON:null,msEditorType:r,code:n})}))}(null==i||null===(o=i.extendedParams)||void 0===o||null===(l=o.mapLayer)||void 0===l||null===(a=l.dataset)||void 0===a?void 0:a.default_style,u).then((function(e){var t,n,r,o,l=e||{},a=l.msEditorType,s=l.msStyleJSON,d=l.code,y=l.format,f=l.languageVersion,m=i.name.split(":"),p=1===m.length?m[0]:m[m.length-1],b=(o=p,"geonode:".concat(v()(),"_ms_").concat(o)),g={title:p,description:"",msStyleJSON:s,msEditorType:a,gnDatasetPk:null==i||null===(t=i.extendedParams)||void 0===t||null===(n=t.mapLayer)||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.pk};return S.ZP.createStyle(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({baseUrl:null==u?void 0:u.baseUrl,code:d||I({type:c,title:p}),format:d&&y?y:"css",styleName:b,metadata:g,options:{params:{raw:!0}}},d&&y&&{languageVersion:f})).then((function(){return[[{name:b,title:p,metadata:g,format:y}],!0]}))})):new Promise((function(e){return e([s])}))}({layer:e.layer,styleService:o})})).switchMap((function(t){var n,r,l,a,i=(l=t,a=1,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return l}}(l,a)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(l,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],u=(null==e||null===(n=e.options)||void 0===n?void 0:n.style)||(null==i||null===(r=i[0])||void 0===r?void 0:r.name);return y.Observable.concat(y.Observable.defer((function(){return S.ZP.getStylesInfo({baseUrl:null==o?void 0:o.baseUrl,styles:i})})).switchMap((function(t){return y.Observable.of((0,m.tV)(e.layer.id,"layer",{availableStyles:t}),(0,m.Xy)({style:u},!0),(0,g.W)(e.layer.id,h.s1,"override",{}),(0,p.Nf)("edit"))})))})))}))},gnUpdateStyleInfoOnSave:function(e,t){return e.ofType(p.ch).switchMap((function(){var e=t.getState(),n=(0,O.Vf)(e);return y.Observable.of((0,m.tV)(n.id,"layers",{style:n.style}))}))}};var T=n(5346),Z=n(93473),D=n(99534),L=n(94745),U=n(3828),V=n(55105),x=n(15135),M=n(75110),z=n(32247),_=n(83958),J=n(90702),F=n(66287),R=n(86300);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=(0,x.Z)(Z.Z);function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=(0,x.Z)(Z.Z),re=(0,a.connect)((0,i.P1)([O.QW,O.gB,O.aN,O.p,M.l2],(function(e,t,n,r,o){var l;return{isStyleChanged:void 0!==e&&void 0!==t&&e!==t,loading:n,error:!(null==r||null===(l=r.edit)||void 0===l||!l.status),layerLoading:o&&o.some((function(e){return e.loading}))}})),{onClick:p.Lc})((function(e){var t=e.variant,n=e.onClick,r=e.size,l=e.isStyleChanged,a=e.error,i=e.loading,u=e.layerLoading,c=e.msgId,s=void 0===c?"gnviewer.applyStyle":c,d=!!(i||u||a);return l?o().createElement(ne,{variant:t||"primary",className:l?"gn-pending-changes-icon":"",size:r,disabled:d,onClick:d?function(){}:function(){return n()}},o().createElement(T.Z,{msgId:s})):null})),oe=(0,a.connect)((0,i.P1)([O.Vf,O.lC,O.Ed,O.gB,O.i7,function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.visualStyleEditor)||void 0===n?void 0:n.tmpCode}],(function(e,t,n,r,o,l){var a;return{geometryType:t,format:n,selectedStyle:null==e||null===(a=e.availableStyles)||void 0===a?void 0:a.find((function(e){return e.name===o})),code:r,tmpCode:l}})),{onSelect:p.p2,onUpdateMetadata:p.bB,onStoreTmpCode:b.Xg.bind(null,"visualStyleEditor","tmpCode")})((function(e){var t=e.code,n=e.format,l=e.geometryType,a=e.onSelect,i=e.selectedStyle,u=e.onUpdateMetadata,c=e.tmpCode,s=e.onStoreTmpCode,d=(0,r.useRef)(),y=$((0,r.useState)([]),2),f=y[0],v=y[1],m=$((0,r.useState)(),2),p=m[0],b=m[1],g=$((0,r.useState)(!1),2),h=g[0],S=g[1];(0,r.useEffect)((function(){return d.current=!0,(0,R.YD)().then((function(e){d.current&&v(e)})),function(){d.current=!1}}),[]);var O=(0,r.useRef)();O.current=function(e){e?s(t):(b(void 0),c&&a(c))},(0,r.useEffect)((function(){return function(){s("")}}),[]);var E=f.filter((function(e){return e.types.includes(l)}));return(null==E?void 0:E.length)>0?o().createElement(J.Z,{key:h,placement:"right",open:h,onOpen:function(e){S(e),O.current(e)},content:o().createElement("div",{className:"gn-visual-style-editor-templates"},o().createElement("ul",null,E.map((function(e,t){var r;return o().createElement("li",{key:t,className:"gn-visual-style-editor-template".concat(p===t?" selected":""),onClick:function(){return function(e,t){var r,o=e.code;b(t);var l=(null==i||null===(r=i.metadata)||void 0===r?void 0:r.title)||(null==i?void 0:i.label)||(null==i?void 0:i.title)||(null==i?void 0:i.name)||"";(0,F.getStyleParser)(n).then((function(e){e.writeStyle(G(G({},o),{},{name:l})).then((function(e){d.current&&a(e)}))}))}(e,t)}},o().createElement("div",{className:"gn-visual-style-editor-template-preview"},null!=e&&null!==(r=e.preview)&&void 0!==r&&r.config?o().createElement(_.Z,e.preview.config):null==e?void 0:e.preview),o().createElement("div",{className:"gn-visual-style-editor-template-title"},e.title))}))),o().createElement("div",{className:"gn-visual-style-editor-templates-footer"},o().createElement(W,{size:"xs",disabled:void 0===p,variant:"primary",onClick:function(){s(t),u({styleJSON:null,editorType:"visual"}),S(!1)}},o().createElement(T.Z,{msgId:"gnviewer.copy"}))))},o().createElement(W,{size:"xs"},o().createElement(T.Z,{msgId:"gnviewer.copyFrom"}))):null})),le=(0,a.connect)((0,i.P1)([O.Vf,O.gc,O.Z0,O.QW,function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.visualStyleEditor)||void 0===n?void 0:n.enabled},function(e){return(0,V.ic)(e,{height:!0})},M.Iz,O.gB],(function(e,t,n,r,o,l,a,i){return{layer:e,temporaryStyleId:t,styleService:n,initialCode:r,enabled:o,style:l,originalStyle:null==a?void 0:a.style,isStyleChanged:void 0!==r&&void 0!==i&&r!==i}})),{onUpdateStatus:p.Nf,onUpdateParams:m.Xy,onInit:p.E0,onReset:p.Wv.bind(null,void 0,!1),onSave:p.Lc,onClose:b.Xg.bind(null,"visualStyleEditor","enabled",!1),onUpdateNode:m.tV},(function(e,t,n){var r,o,l,a=(null===(r=n.styleService)||void 0===r?void 0:r.baseUrl)===(null===(o=e.styleService)||void 0===o?void 0:o.baseUrl)&&(null===(l=e.styleService)||void 0===l?void 0:l.isStatic),i=n.styleService&&!a?Y(Y({},n.styleService),{},{isStatic:!0}):Y({},e.styleService);return Y(Y(Y(Y({},n),e),t),{},{styleService:i})}))((function(e){var t=e.layer,n=e.editorConfig,l=e.styleService,a=e.onInit,i=e.onReset,s=e.temporaryStyleId,d=e.showLayerProperties,y=e.initialCode,f=e.enabled,v=e.onClose,m=e.style,p=e.isStyleChanged,b=ee((0,r.useState)(!1),2),g=b[0],h=b[1],O=ee((0,z.Z)("style-notifcation",!1),2),E=O[0],w=O[1],j=ee((0,r.useState)(!1),2),P=j[0],C=j[1],k=(0,r.useRef)();function N(e){e?(i(),v()):h(!0)}return k.current=function(){s&&S.ZP.deleteStyle({baseUrl:l.baseUrl,styleName:s})},(0,r.useEffect)((function(){function e(){k.current()}return a(l),window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e),i()}}),[]),f&&t.id?o().createElement("div",{className:"gn-visual-style-editor",style:m},d&&o().createElement("div",{className:"gn-visual-style-editor-layer-info"},o().createElement("div",{className:"gn-visual-style-editor-layer-title"},t.title),o().createElement(ne,{onClick:N.bind(null,!p),className:"square-button"},o().createElement(u.Glyphicon,{glyph:"1-close"}))),!P&&!E&&o().createElement("div",{className:"gn-visual-style-editor-alert alert-info"},o().createElement("div",{className:"gn-visual-style-editor-alert-message"},o().createElement(T.Z,{msgId:"gnviewer.stylesFirstClone"}),o().createElement(ne,{size:"xs",variant:"transparent",onClick:function(){w(!0)}},o().createElement("p",null,o().createElement(T.Z,{msgId:"gnviewer.dismissMessage"})))),o().createElement(ne,{size:"xs",variant:"transparent",onClick:function(){C(!0)}},o().createElement(u.Glyphicon,{glyph:"remove"}))),o().createElement("div",{className:"gn-visual-style-editor-body"},o().createElement("div",null,o().createElement(c.m2,{key:y,config:n,header:o().createElement(o().Fragment,null,o().createElement(oe,null),o().createElement(re,{variant:"primary",size:"xs"}))}))),o().createElement(D.Z,null,o().createElement(L.Z,{title:o().createElement(T.Z,{msgId:"gnviewer.styleEditorCloseTitle"}),fitContent:!0,clickOutEnabled:!1,show:g,onClose:function(){h(!1)},buttons:[{text:o().createElement(T.Z,{msgId:"gnviewer.styleEditorCloseCancel"}),onClick:function(){h(!1)}},{text:o().createElement(T.Z,{msgId:"gnviewer.styleEditorCloseConfirm"}),bsStyle:"primary",onClick:function(){h(!1),N(!0)}}]},o().createElement("div",{style:{padding:"1rem"}},o().createElement(T.Z,{msgId:"gnviewer.styleEditorCloseMessage"}))))):null})),ae=(0,a.connect)((0,i.P1)([O.Vf,U.HG,U.V$],(function(e,t,n){return{layer:e,enabled:!(null==t||!t.includes("change_resourcebase")),isNew:n}})),{onClick:function(e,t){return{type:E,layer:e,options:t}}})((function(e){var t,n=e.layer,r=e.status,l=e.onClick,a=void 0===l?function(){}:l,i=e.enabled,c=e.isNew,s=e.btnProps,d=void 0===s?{}:s,y=e.hide,f=e.selectedStyle;return y||"LAYER"!==r||null==n||null===(t=n.extendedParams)||void 0===t||!t.mapLayer||!i&&!c?null:o().createElement(ne,H({variant:"primary",className:"square-button-md"},d,{onClick:function(e){e.stopPropagation(),e.preventDefault(),a(n,{style:f})},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()}}),o().createElement(u.Glyphicon,{glyph:"dropper"}))}));const ie=(0,l.rx)("VisualStyleEditor",{component:le,containers:{TOC:{target:"toolbar",Component:ae},LayerSettings:{target:"style-button",Component:ae}},reducers:{styleeditor:s.Z},epics:Y(Y({},d.ZP),A)})}}]);