(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[61633],{807472:(e,n,t)=>{"use strict";t.d(n,{Z:()=>j});var r=t(727418),o=t.n(r),i=t(675263),a=t.n(i),p=t(124852),l=t.n(p),s=t(485294),c=t.n(s),u=t(472986),d=t.n(u),f=t(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){P(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function h(e,n){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},h(e,n)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function P(e,n,t){return(n=O(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){var n=function(e,n){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(n)?n:String(n)}var x=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&h(e,n)}(p,e);var n,t,r,i,a=(r=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=w(r);if(i){var t=w(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return function(e,n){if(n&&("object"===m(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,e)});function p(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return P(v(e=a.call.apply(a,[this].concat(t))),"renderLoading",(function(){return e.props.maskLoading?l().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},l().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},l().createElement(f.Z,{msgId:"loading"}),l().createElement(d(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),P(v(e),"renderRole",(function(n){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===n}))})),P(v(e),"hasRole",(function(n){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===n})).length>0})),P(v(e),"onClickOut",(function(n){e.props.onClickOut&&e.mask===n.target&&e.props.onClickOut(n)})),e}return n=p,(t=[{key:"render",value:function(){var e=this,n=l().createElement("div",{id:this.props.id,style:b({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},l().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),l().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?l().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):l().createElement("span",null)),t=this.props.draggable?l().createElement(c(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},n):n,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?l().createElement("div",{ref:function(n){e.mask=n},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},t):t}}])&&y(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),p}(l().Component);P(x,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),P(x,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const j=x},451978:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>oe});var r=t(893379),o=t.n(r),i=t(72954);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=t(91175),p=t.n(a),l=t(984596),s=t.n(l),c=t(727418),u=t.n(c),d=t(675263),f=t.n(d),m=t(124852),g=t.n(m),b=t(480681),y=t(322843),h=t(22222),v=t(782904),w=t(986069),P=t(805346),O=t(807472),x=t(145959),j=t(650148),S=t(675110),E=t(308316),C=t(800827),k=t(93152),N=t(986267),A=t(86638),L=t(552259),I=t(624262),R=t(218721),Z=t.n(R),B=t(264721),z=t.n(B),T=t(227361),_=t.n(T),M=function(e){return _()(e,"additionallayers")||[]},D=["validations"],U=["style"];function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W.apply(this,arguments)}function G(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function X(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||V(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ne(r.key),r)}}function $(e,n){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},$(e,n)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}function V(e,n){if(e){if("string"==typeof e)return Y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Y(e,n):void 0}}function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?J(Object(t),!0).forEach((function(n){ee(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ee(e,n,t){return(n=ne(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){var n=function(e,n){if("object"!=F(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==F(n)?n:String(n)}var te=function(){return null};function re(e){return e.plugin?e:Q(Q({},e),{},{plugin:te})}const oe={PrintPlugin:u()({loadPlugin:function(e){Promise.all([Promise.all([t.e(18672),t.e(49232),t.e(38238),t.e(94192),t.e(36882),t.e(13581),t.e(34049),t.e(47316)]).then(t.bind(t,174884)),Promise.all([t.e(18672),t.e(49232),t.e(36882),t.e(13581),t.e(34049),t.e(39040)]).then(t.bind(t,134049))]).then((function(n){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,p=[],l=!0,s=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw o}}return p}}(t,r)||V(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1],l=i.default.standardItems,c=a.getDefaultPrintingService,u=a.getLayoutName,d=a.getPrintScales,m=a.getNearestZoom,x=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&$(e,n)}(a,e);var n,t,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=K(r);if(o){var t=K(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return function(e,n){if(n&&("object"===F(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return q(e)}(this,e)});function a(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return ee(q(e=i.call.apply(i,[this].concat(t))),"state",{activeAccordionPanel:0}),ee(q(e),"getAlternativeBackground",(function(n,t,r){var o=p()(s()(t).map((function(e){return{type:e}})).filter((function(n){return e.isAllowed(n,r)})));return o?p()(n.filter((function(e){return e.type===o.type}))):null})),ee(q(e),"getItems",(function(n){var t,r,o=e.props.items.filter((function(e){return!n||e.target===n})),i=(t=l[n],r=e.props.items,t.map((function(e){return function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).find((function(n){return n.target===e.id}));return null!=n?n:e}(e,r)})).map(re)).map((function(e){return Q(Q({},e),{},{target:n})}));return[].concat(X(i),X(o)).sort((function(e,n){var t,r;return(null!==(t=e.position)&&void 0!==t?t:0)-(null!==(r=n.position)&&void 0!==r?r:0)}))})),ee(q(e),"getMapConfiguration",(function(){var n=e.props.printingService.getMapConfiguration();return Q(Q({},n),{},{layers:e.filterLayers(n.layers,n.zoom,n.projection)})})),ee(q(e),"getMapSize",(function(n){var t=n||e.getLayout();return{width:e.props.mapWidth,height:t&&t.map.height/t.map.width*e.props.mapWidth||270}})),ee(q(e),"getPreviewZoom",(function(n){if(e.props.useFixedScales){var t=d(e.props.capabilities);return m(n,t)}return n})),ee(q(e),"getPreviewResolution",(function(n,t){var r=(0,L.dpi2dpu)(L.DEFAULT_SCREEN_DPI,t);return e.props.scales[e.getPreviewZoom(n)]/r})),ee(q(e),"getLayout",(function(n){var t=n||e.props,r=t.getLayoutName,o=t.printSpec,i=t.capabilities,a=r(o);return p()(i.layouts.filter((function(e){return e.name===a})))})),ee(q(e),"renderWarning",(function(e){return e?null:g().createElement(b.Row,null,g().createElement(b.Col,{xs:12},g().createElement("div",{className:"print-warning"},g().createElement("span",null,g().createElement(P.Z,{msgId:"print.layoutWarning"})))))})),ee(q(e),"renderItem",(function(n,t){var r,o,i=t.validations,a=G(t,D),p=null!==(r=n.component)&&void 0!==r?r:n.plugin,l=e.props,s=(l.style,G(l,U)),c=e.props[n.id+"Options"];return g().createElement(p,W({role:"body"},s,n.cfg,a,c,{validation:null==i?void 0:i[null!==(o=n.id)&&void 0!==o?o:n.name]}))})),ee(q(e),"renderItems",(function(n,t){return e.getItems(n).map((function(n){return e.renderItem(n,t)}))})),ee(q(e),"renderAccordion",(function(n,t){var r=e.getItems(n);return g().createElement(b.PanelGroup,{accordion:!0,activeKey:e.state.activeAccordionPanel,onSelect:function(n){e.setState({activeAccordionPanel:n})}},r.map((function(n,r){var o,i,a;return g().createElement(b.Panel,{header:(0,A.S$)(e.context.messages,null!==(o=null!==(i=null===(a=n.cfg)||void 0===a?void 0:a.title)&&void 0!==i?i:n.title)&&void 0!==o?o:""),eventKey:r,collapsible:!0},e.renderItem(n,t))})))})),ee(q(e),"renderPrintPanel",(function(){var n=e.getLayout(),t=e.getMapConfiguration(),r={layout:n,map:t,layoutName:e.props.getLayoutName(e.props.printSpec),mapSize:e.getMapSize(n),resolutions:(0,L.getResolutions)(null==t?void 0:t.projection),onRefresh:function(){return e.configurePrintMap()},notAllowedLayers:e.isBackgroundIgnored(e.props.layers,null==t?void 0:t.projection),actionConfig:e.props.submitConfig,validations:e.props.printingService.validate(),actions:{print:e.print,addParameter:e.addParameter}};return g().createElement(b.Grid,{fluid:!0,role:"body"},e.renderError(),e.renderWarning(n),g().createElement(b.Row,null,g().createElement(b.Col,{xs:12,md:6},e.renderItems("left-panel",r),e.renderAccordion("left-panel-accordion",r)),g().createElement(b.Col,{xs:12,md:6,style:{textAlign:"center"}},e.renderItems("right-panel",r),e.renderItems("buttons",r),e.renderDownload())))})),ee(q(e),"renderDownload",(function(){return e.props.pdfUrl&&!e.props.usePreview?g().createElement("iframe",{src:e.props.pdfUrl,style:{visibility:"hidden",display:"none"}}):null})),ee(q(e),"renderError",(function(){return e.props.error?g().createElement(b.Row,null,g().createElement(b.Col,{xs:12},g().createElement("div",{className:"print-error"},g().createElement("span",null,e.props.error)))):null})),ee(q(e),"renderPreviewPanel",(function(){return e.renderItems("preview-panel",e.props.previewOptions)})),ee(q(e),"renderBody",(function(){return e.props.pdfUrl&&e.props.usePreview?e.renderPreviewPanel():e.renderPrintPanel()})),ee(q(e),"addParameter",(function(n,t){e.props.addPrintParameter("params."+n,t)})),ee(q(e),"isCompatibleWithSRS",(function(e,n){return"EPSG:3857"===e||z()(["wms","wfs","vector","graticule","empty"],n.type)||"wmts"===n.type&&Z()(n.allowedSRS,e)})),ee(q(e),"isAllowed",(function(n,t){return-1===e.props.ignoreLayers.indexOf(n.type)&&e.isCompatibleWithSRS((0,N.normalizeSRS)(t),n)})),ee(q(e),"isBackgroundIgnored",(function(n,t){return!p()((n||e.props.layers).filter((function(n){return"background"===n.group&&n.visibility&&e.isAllowed(n,t)})))})),ee(q(e),"filterLayers",(function(n,t,r){var o=e.getPreviewResolution(t,r),i=n.filter((function(n){return n.visibility&&(0,I.T4)(n,o)&&e.isAllowed(n,r)}));if(e.isBackgroundIgnored(n,r)&&e.props.defaultBackground&&e.props.printSpec.defaultBackground){var a=e.getAlternativeBackground(n,e.props.defaultBackground);return a?[Q(Q({},a),{},{visibility:!0})].concat(X(i)):i}return i})),ee(q(e),"configurePrintMap",(function(n){var t=n||e.props,r=t.map,o=t.capabilities,i=t.minZoom,a=t.configurePrintMap,p=t.useFixedScales,l=t.getZoomForExtent,s=t.maxZoom,c=t.currentLocale,u=t.scales,f=t.layers;if(r&&r.bbox&&o){var g=(0,N.reprojectBbox)([r.bbox.bounds.minx,r.bbox.bounds.miny,r.bbox.bounds.maxx,r.bbox.bounds.maxy],r.bbox.crs,r.projection),b=e.getMapSize();if(p){var y=l(g,b,i,s),h=d(o),v=m(r.zoom,h),w=h[v];a(r.center,y,v,w,f,r.projection,c)}else{var P=u[r.zoom];a(r.center,r.zoom,r.zoom,P,f,r.projection,c)}}})),ee(q(e),"print",(function(){var n;e.props.setPage(0),e.props.onBeforePrint(),e.props.printingService.print({layers:null===(n=e.getMapConfiguration())||void 0===n?void 0:n.layers,scales:e.props.useFixedScales?d(e.props.capabilities):void 0}).then((function(n){return e.props.onPrint(e.props.capabilities.createURL,Q(Q({},n),e.props.overrideOptions))})).catch((function(n){e.props.printError("Error in printing:"+n.message)}))})),e}return n=a,(t=[{key:"UNSAFE_componentWillMount",value:function(){this.configurePrintMap()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var n=e.open&&!this.props.open,t=this.props.open&&this.props.syncMapPreview&&(0,L.mapUpdated)(this.props.map,e.map),r=e.printSpec.defaultBackground!==this.props.printSpec.defaultBackground||e.printSpec.additionalLayers!==this.props.printSpec.additionalLayers;(n||t||r)&&this.configurePrintMap(e)}},{key:"render",value:function(){return(this.props.capabilities||this.props.error)&&this.props.open?this.props.withContainer?this.props.withPanelAsContainer?g().createElement(b.Panel,{className:"mapstore-print-panel",header:g().createElement("span",null,g().createElement("span",{className:"print-panel-title"},g().createElement(P.Z,{msgId:"print.paneltitle"})),g().createElement("span",{className:"print-panel-close panel-close",onClick:this.props.toggleControl})),style:this.props.style},this.renderBody()):g().createElement(O.Z,{start:{x:0,y:80},id:"mapstore-print-panel",style:Q({zIndex:1990},this.props.style)},g().createElement("span",{role:"header"},g().createElement("span",{className:"print-panel-title"},g().createElement(P.Z,{msgId:"print.paneltitle"})),g().createElement("button",{onClick:this.props.toggleControl,className:"print-panel-close close"},this.props.closeGlyph?g().createElement(b.Glyphicon,{glyph:this.props.closeGlyph}):g().createElement("span",null,"×"))),this.renderBody()):this.renderBody():null}}])&&H(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),a}(g().Component);ee(x,"propTypes",{map:f().object,layers:f().array,capabilities:f().object,printSpec:f().object,printSpecTemplate:f().object,withContainer:f().bool,withPanelAsContainer:f().bool,open:f().bool,pdfUrl:f().string,title:f().string,style:f().object,mapWidth:f().number,mapType:f().string,alternatives:f().array,toggleControl:f().func,onBeforePrint:f().func,setPage:f().func,onPrint:f().func,printError:f().func,configurePrintMap:f().func,getLayoutName:f().func,error:f().string,getZoomForExtent:f().func,minZoom:f().number,maxZoom:f().number,usePreview:f().bool,mapPreviewOptions:f().object,syncMapPreview:f().bool,useFixedScales:f().bool,scales:f().array,ignoreLayers:f().array,defaultBackground:f().oneOfType([f().string,f().arrayOf(f().string)]),closeGlyph:f().string,submitConfig:f().object,previewOptions:f().object,currentLocale:f().string,overrideOptions:f().object,items:f().array,addPrintParameter:f().func,printingService:f().object}),ee(x,"contextTypes",{messages:f().object,plugins:f().object,loadedPlugins:f().object}),ee(x,"defaultProps",{withContainer:!0,withPanelAsContainer:!1,title:"print.paneltitle",toggleControl:function(){},onBeforePrint:function(){},setPage:function(){},onPrint:function(){},configurePrintMap:function(){},printSpecTemplate:{},getLayoutName:u,getZoomForExtent:L.defaultGetZoomForExtent,pdfUrl:null,mapWidth:370,mapType:"leaflet",minZoom:1,maxZoom:23,usePreview:!0,mapPreviewOptions:{enableScalebox:!1,enableRefresh:!1},syncMapPreview:!0,useFixedScales:!1,scales:[],ignoreLayers:["google","bing"],defaultBackground:["osm","wms","empty"],closeGlyph:"1-close",submitConfig:{buttonConfig:{bsSize:"small",bsStyle:"primary"},glyph:""},previewOptions:{buttonStyle:"primary"},style:{},currentLocale:"en-US",overrideOptions:{},items:[],printingService:c()});var R=(0,h.P1)([function(e){return e.controls.print&&e.controls.print.enabled||e.controls.toolbar&&"print"===e.controls.toolbar.active},function(e){return e.print&&e.print.capabilities},j.DX,function(e){return e.print&&e.print.pdfUrl},function(e){return e.print&&e.print.error},C.Od,S.l2,M,C.up,function(e){return e.browser&&(!e.browser.ie||e.browser.ie11)},E.Pz,k.$v],(function(e,n,t,r,o,i,a,p,l,s,c,u){return{open:e,capabilities:n,printSpec:t,pdfUrl:r,error:o,map:i,layers:[].concat(X(a.filter((function(e){return!e.loadingError}))),X(null!=t&&t.additionalLayers?p.map((function(e){return e.options})).filter((function(e){var n="vector"===e.type,t=Array.isArray(e.features)&&e.features.length>0;return!e.loadingError&&(!n||n&&t)})):[])),scales:l,usePreview:s,currentLocale:c,mapType:u}})),B=(0,y.$j)(R,{toggleControl:v.Xi.bind(null,"print",null),onPrint:w.gV,printError:w.OS,onBeforePrint:w.MW,setPage:v.Xg.bind(null,"print","currentPage"),configurePrintMap:w.h9,addPrintParameter:w.eT})(x);e(B)}))},enabler:function(e){return e.print&&e.print.enabled||e.toolbar&&"print"===e.toolbar.active}},{disablePluginIf:"{state('mapType') === 'cesium' || !state('printEnabled')}",Toolbar:{name:"print",position:7,help:g().createElement(P.Z,{msgId:"helptexts.print"}),tooltip:"printbutton",icon:g().createElement(b.Glyphicon,{glyph:"print"}),exclusive:!0,panel:!0,priority:1},BurgerMenu:{name:"print",position:2,tooltip:"printToolTip",text:g().createElement(P.Z,{msgId:"printbutton"}),icon:g().createElement(b.Glyphicon,{glyph:"print"}),action:v.Xi.bind(null,"print",null),priority:3,doNotHide:!0},SidebarMenu:{name:"print",position:3,tooltip:"printbutton",text:g().createElement(P.Z,{msgId:"printbutton"}),icon:g().createElement(b.Glyphicon,{glyph:"print"}),action:v.Xi.bind(null,"print",null),doNotHide:!0,toggle:!0,priority:2}}),reducers:{print:x.Z}}},145959:(e,n,t)=>{"use strict";t.d(n,{Z:()=>h});var r=t(986069),o=t(782904),i=t(513218),a=t.n(i),p=t(227361),l=t.n(p),s=t(727418),c=t.n(s),u=t(436968),d=t.n(u);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){var r,o,i,a;r=e,o=n,i=t[n],a=function(e,n){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==f(a)?a:String(a))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b={antiAliasing:!0,iconSize:24,legendDpi:96,fontFamily:"Verdana",fontSize:8,bold:!1,italic:!1,resolution:96,name:"",description:"",outputFormat:"pdf"},y=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("_")[0]};const h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{spec:b,capabilities:null,map:null,isLoading:!1,pdfUrl:null},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o.kM:return"print"===n.control?c()({},e,{pdfUrl:null,isLoading:!1,error:null}):e;case r.qp:var t=l()(n,"capabilities.layouts",[{name:"A4"}]),i=t.filter((function(n){return y(n.name)===e.spec.sheet})).length?e.spec.sheet:y(t[0].name);return c()({},e,{capabilities:n.capabilities,spec:c()({},e.spec||{},{sheet:i,resolution:n.capabilities&&n.capabilities.dpis&&n.capabilities.dpis.length&&n.capabilities.dpis[0].value})});case r.U6:return g(g({},e),{},{spec:d()(g({},e.spec),n.name,n.value)});case r.rd:return l()(e.spec,n.name)?e:g(g({},e),{},{spec:d()(g({},e.spec),n.name,n.value)});case r.PB:var p,s,u=n.layers.map((function(e){return e.title?c()({},e,{title:a()(e.title)&&n.currentLocale&&e.title[n.currentLocale]||a()(e.title)&&e.title.default||e.title}):e}));return c()({},e,{map:{center:n.center,zoom:n.zoom,scaleZoom:n.scaleZoom,scale:n.scale,layers:u,size:null!==(p=n.size)&&void 0!==p?p:null===(s=e.map)||void 0===s?void 0:s.size,projection:n.projection},error:null});case r.HA:var f=n.zoom-e.map.scaleZoom;return c()({},e,{map:c()({},e.map,{scaleZoom:n.zoom,zoom:e.map.zoom+f,scale:n.scale})});case r.Yk:return c()({},e,{map:c()({},e.map,{size:n.size})});case r.Fp:return c()({},e,{isLoading:!0,pdfUrl:null,error:null});case r.EZ:return c()({},e,{isLoading:!1,pdfUrl:n.url,error:null});case r.WB:case r.aN:return c()({},e,{isLoading:!1,pdfUrl:null,error:n.error});case r.qH:return c()({},e,{isLoading:!1,pdfUrl:null,error:null});default:return e}}},650148:(e,n,t)=>{"use strict";t.d(n,{DX:()=>i,p6:()=>a,LI:()=>p});var r=t(727418),o=t.n(r),i=function(e){return e.print&&e.print.spec&&o()({},e.print.spec,e.print.map||{})},a=function(e){return e.print&&e.print.capabilities&&e.print.capabilities.layouts.filter((function(n){return 0===n.name.indexOf(e.print.spec.sheet)}))||[]},p=function(e){return e.print&&e.print.spec&&e.print.spec.includeLegend}},72954:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(923645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #mappreview-scalebox {\n    position: relative;\n    top: -36px;\n    width: 150px;\n    left: 10px;\n}\n\n.msgapi .print-error {\n    height: 100px;\n    color: #600;\n    background-color: #E8BABA;\n    border: solid #600 1px;\n    border-radius: 10px;\n    padding: 10px;\n}\n.msgapi .print-error span, .msgapi .print-warning span {\n    display: inline-block;\n    max-height: 80px;\n    overflow: auto;\n    width: 100%;\n}\n.msgapi .print-warning {\n    height: 50px;\n    color: #660;\n    background-color: #E6E8BA;\n    border: solid #660 1px;\n    border-radius: 10px;\n    padding: 10px;\n}\n.msgapi .print-preview-panel .spinner {\n    display: inline-block;\n}\n\n.msgapi .print-mappreview-refresh {\n    position: relative;\n    top: -83px;\n    right: -155px;\n    z-index: 1000;\n}\n.msgapi #mapstore-print-panel.modal-dialog {\n    z-index: 2000;\n}\n\n.msgapi #mapstore-print-panel .modal-body {\n    max-height: calc(100vh - 190px);\n    overflow-y: auto;\n}\n\n.msgapi .mapstore-print-panel {\n    width: 850px;\n    position: absolute;\n    top: 50px;\n    right: 60px;\n    zIndex: 100;\n}\n\n.msgapi .mapstore-print-preview-img-wrapper {\n    position: relative;\n    top: 0;\n    height: 500px;\n    width: 100%;\n    overflow: auto;\n}\n\n.msgapi .mapstore-print-preview-img-wrapper img {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.msgapi .mapstore-print-panel .form-inline label {\n    margin-right: 20px;\n}\n\n.msgapi .mapstore-print-panel .print-download {\n    margin-right: 10px;\n    display: inline-block;\n    width: 30px;\n    height: 34px;\n    border: solid 1px #CCC;\n    padding: 7px;\n    border-radius: 4px;\n    padding-right: 25px;\n    padding-left: 11px;\n    top: 2px;\n    position: relative;\n}\n\n.msgapi .print-layout .panel-title {\n    padding-left: 10px;\n}\n\n.msgapi .print-layout .panel-title a{\n    text-decoration: none;\n}\n\n.msgapi .print-layout .panel-title a:hover{\n    color: #d6d6d6;\n}\n\n.msgapi .print-legend-options .panel-title {\n    padding-left: 10px;\n}\n\n.msgapi .print-legend-options .panel-title a{\n    text-decoration: none;\n}\n\n.msgapi .print-legend-options .panel-title a:hover{\n    color: #d6d6d6;\n}\n\n\n@media (min-width: 992px) {\n    .msgapi #mapstore-print-panel {\n        width: 825px;\n    }\n}\n\n@media (max-width: 991px) {\n    .msgapi #mapstore-print-panel {\n        width: 700px;\n    }\n}\n\n@media (max-width: 767px) {\n    .msgapi #mapstore-print-panel {\n        width: 98%;\n    }\n}\n\n.msgapi #mapstore-print-panel .modal-body .print-mappreview-refresh {\n    top: -96px;\n}\n\n.msgapi #mapstore-print-panel .print-submit {\n    float: right;\n}\n\n@media (min-width: 768px) {\n    .msgapi #mapstore-print-panel input[type=radio] {\n        margin: 0 8px 0 20px;\n    }\n}\n\n.msgapi #mapstore-print-panel .print-map-preview {\n    margin-bottom: 15px;\n}\n\n.msgapi #mapstore-print-panel .panel-default {\n    border: none;\n}\n\n.msgapi #mapstore-print-panel .panel-heading .panel-title {\n    font-weight: bold;\n}\n\n.msgapi #mapstore-print-panel .panel-heading {\n    padding-left: 0;\n    background-color: transparent;\n}\n\n.msgapi #mapstore-print-panel .panel-body {\n    padding: 10px;\n}\n\n.msgapi #mapstore-print-panel .form-control {\n    padding: 0 10px;\n    height: 25px;\n}\n\n.msgapi #mapstore-print-panel .print-download {\n    margin-right: 10px;\n}\n\n.msgapi #mapstore-print-panel .print-legend-options .container-fluid {\n    padding-left: 0;\n    padding-right: 0;\n}\n",""]);const i=o}}]);