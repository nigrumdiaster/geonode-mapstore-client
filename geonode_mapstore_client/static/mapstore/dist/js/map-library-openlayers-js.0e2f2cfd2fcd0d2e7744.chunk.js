(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6037,7654],{21914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>u,Pn:()=>c,DZ:()=>s,e8:()=>p,E0:()=>f,F9:()=>l,X_:()=>d,pb:()=>m,qb:()=>v,Re:()=>y,ih:()=>E,xy:()=>h,jL:()=>b,oz:()=>g,ph:()=>O,lF:()=>P,gG:()=>_,cb:()=>T,GI:()=>I,B1:()=>w,fv:()=>N,gc:()=>q,zX:()=>S,ZF:()=>F,Zb:()=>M,DW:()=>R,Xp:()=>j,Fm:()=>A,sV:()=>C,Mn:()=>D,LU:()=>x,XP:()=>k,WU:()=>L,JB:()=>G,g:()=>U,ws:()=>Z,HP:()=>H,aN:()=>Y,Pg:()=>B,u0:()=>K,TM:()=>X,PM:()=>z,lK:()=>V,sv:()=>Q,MO:()=>J,oO:()=>$,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ie,Y$:()=>ae,Qu:()=>ue,kT:()=>ce});var r=n(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",p="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",l="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",m="HIDE_REVERSE_GEOCODE",v="GET_VECTOR_INFO",y="NO_QUERYABLE_LAYERS",E="CLEAR_WARNING",h="FEATURE_INFO_CLICK",b="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",g="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",O="TOGGLE_MAPINFO_STATE",P="UPDATE_CENTER_TO_MARKER",_="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",I="IDENTIFY:CHANGE_FORMAT",w="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",N="IDENTIFY:EDIT_LAYER_FEATURES",q="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",S="IDENTIFY:SET_MAP_TRIGGER",F="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",M="IDENTIFY:SET_SHOW_IN_MAP_POPUP",R="IDENTIFY:IDENTIFY_IS_MOUNTED",j="IDENTIFY:INIT_PLUGIN";function A(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function C(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function D(e,t,n,r){return{type:a,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function x(){return{type:y}}function k(){return{type:E}}function L(e,t){return{type:c,reqId:e,request:t}}function G(e,t,n,r){return{type:v,layer:e,request:t,metadata:n,queryableLayers:r}}function U(){return{type:s}}function Z(e){return{type:p,infoFormat:e}}function H(){return{type:f}}function Y(){return{type:l}}function W(e){return{type:d,reverseGeocodeData:e.data}}function B(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(W(e))})).catch((function(e){t(W(e))}))}}function K(){return{type:m}}function X(){return{type:O}}function z(e){return{type:P,status:e}}function V(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:h,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function Q(e){return{type:b,point:e}}function J(e){return{type:g,enabled:e}}function $(e){return{type:_,index:e}}var ee=function(){return{type:T}},te=function(e){return{type:I,format:e}},ne=function(e){return{type:w,showCoordinateEditor:e}},re=function(e){return{type:N,layer:e}},oe=function(e){return{type:q,query:e}},ie=function(e){return{type:S,trigger:e}},ae=function(e){return{type:M,value:e}},ue=function(e){return{type:R,isMounted:e}},ce=function(e){return{type:j,cfg:e}}},47310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(75875),o=n.n(r),i=n(8575),a=n(27418),u=n.n(a),c={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var n=u()({q:e},c,t||{}),r=i.format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=u()({lat:e.lat,lon:e.lng},t||{},c),r=i.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},89912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r,o=n(67294),i=n(43033);const a=function(e){var t=e.map,n=e.onBoxEnd,a=e.status;return(0,o.useEffect)((function(){"start"===a?(r=new i.Z({condition:function(e){return e.originalEvent.altKey}}),t.addInteraction(r)):"end"===a&&t.removeInteraction(r)}),[a]),(0,o.useEffect)((function(){r&&r.on("boxend",(function(e){n({boxExtent:r.getGeometry().getExtent(),modifiers:{ctrl:e.mapBrowserEvent.pointerEvent.ctrlKey,metaKey:e.mapBrowserEvent.pointerEvent.metaKey}})}))}),[a]),null}},26105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(67294),o=n.n(r),i=n(73935),a=n.n(i),u=n(45697),c=n.n(u),s=n(93409),p=n(47037),f=n.n(p),l=n(25064),d=n(21751);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function g(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new MutationObserver((function(){e.getMap().getSize()&&(e.setPosition(void 0),e.setPosition(n.coordinates))}));return r.observe(t,{attributes:!0,childList:!0,subtree:!0}),r},I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(c,e);var t,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(i){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function c(){var e;E(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _(O(e=u.call.apply(u,[this].concat(n))),"onPopupClose",(function(t){e.props.onPopupClose(t)})),_(O(e),"renderPopups",(function(){return e.preparePopups().map((function(t){var n,r=t.popup,i=t.id,u=t.component,c=t.content,s=t.props,p=t.containerStyle,m=r.getElement(),v=f()(u)&&d.default[u]||u;return v?n=o().isValidElement(v)&&v||o().createElement(v,s):c&&(n=l.FP(c)?o().createElement("div",{dangerouslySetInnerHTML:{__html:c}}):c),m&&a().createPortal(o().createElement("div",{className:"map-popup-ol",key:i,onMouseUp:e.convertToClick},o().createElement("div",{className:"ol-popup-content-wrapper"},o().createElement("div",{className:"ol-popup-content",style:p},n)),o().createElement("div",{className:"ol-popup-closer",onClick:function(){return e.onPopupClose(i)}},"x")),m)}))})),_(O(e),"update",(function(){(e._popups||[]).map((function(e){var t=e.popup;t.setElement(t.getElement())}))})),_(O(e),"convertToClick",(function(e){var t=new MouseEvent("click",{bubbles:!0});t.stopPropagation=function(){},e.target.dispatchEvent(t)})),_(O(e),"preparePopups",(function(){var t=e.props,n=t.popups,r=void 0===n?[]:n,o=t.map,i=o.getSize();return(e._popups||[]).forEach((function(e){var t=e.popup,n=e.observer;n&&n.disconnect(),t&&o.removeOverlay(t)})),e._popups=r.map((function(e){var t=Math.round(.9*i[0])-40,n=Math.round(.9*i[1])-40,r=e.id,a=e.position.coordinates,u=e.className,c=e.maxWidth,p=void 0===c?t:c,f=e.maxHeight,d=void 0===f?n:f,m=e.autoPan,v=void 0!==m&&m,E=e.autoPanMargin,h=void 0===E?20:E,b=e.offset,g=void 0===b?[0,0]:b,O=e.autoPanAnimation,P=void 0===O?{duration:200}:O,_=p>t?t:p,I=d>n?n:d,w=l.fH(r,u),N=new s.Z({id:r,element:w,autoPan:v,offset:g,autoPanMargin:h,autoPanAnimation:P,positioning:"bottom-center",className:"ol-overlay-container ol-unselectable",position:a});return o.addOverlay(N),y({popup:N,observer:T(N,w,{coordinates:a}),containerStyle:{maxWidth:_,maxHeight:I}},e)})),e._popups})),_(O(e),"stopPropagationOnPointerMove",(function(e){e.stopPropagation()})),e}return t=c,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().addEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().removeEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"render",value:function(){return o().createElement("div",null,this.renderPopups())}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);_(I,"propTypes",{map:c().object,popups:c().arrayOf(c().object),onPopupClose:c().func}),_(I,"defaultProps",{popups:[],onPopupClose:function(){}})},34637:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(){return n(3498).default,{Map:n(90596).Z,Layer:n(44054).Z,Feature:n(30072).Z,MeasurementSupport:n(5904).Z,Overview:n(22404).Z,ScaleBar:n(9056).Z,DrawSupport:n(6909).Z,PopupSupport:n(26105).Z,BoxSelectionSupport:n(89912).Z}}},8797:(e,t,n)=>{"use strict";n.d(t,{rp:()=>c,Ov:()=>p,wd:()=>f,L0:()=>l}),n(1469);var r=n(91175),o=n.n(r),i=n(7654),a=n.n(i);function u(e){var t=Math.floor(e),n=60*(e-t),r=Math.floor(n),o=60*(n-r);return t+"° "+r+"' "+Math.floor(o)+"'' "}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.measureTrueBearing,r=void 0!==n&&n,o=t.fractionDigits,i=void 0===o?0:o,a="";if(r){var c="";e>=0&&e<10?c="00":e>10&&e<100&&(c="0");var s=i>0?e.toFixed(i):Math.floor(e);a=c+s+"°"}else e>=0&&e<90?a="N "+u(e)+"E":e>90&&e<=180?a="S "+u(180-e)+"E":e>180&&e<270?a="S "+u(e-180)+"W":e>=270&&e<=360&&(a="N "+u(360-e)+"W");return a}var s={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return s[t]&&s[t][n]?e*s[t][n]:e}var f=function(e){return!a()(parseFloat(e[0]))&&!a()(parseFloat(e[1]))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.coordinates,n=e.type,r=t;if("LineString"===n){if((r=t.filter(f)).length<2)return[]}else if("Polygon"===n){if((r=o()(t).filter(f)).length<3)return[[]];r=[r.concat([o()(r)])]}return r}},25064:(e,t,n)=>{"use strict";n.d(t,{fH:()=>i,FP:()=>a,R3:()=>u});var r=n(55877),o=n.n(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",e+"-map-popup"),n.setAttribute("class",t),n},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("<")},u=function(e,t){if(!t)return e;if(t instanceof Node){var n=document.createDocumentFragment();n.appendChild(t),e.appendChild(n)}else a(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}},23502:(e,t,n)=>{"use strict";n.d(t,{$:()=>c,b:()=>s});var r=n(63202),o=n(1469),i=n.n(o),a=n(13218),u=n.n(a),c=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i()(t))return t.reduce((function(t,n){return e(n)&&t}),!0);var o=!1,a=!(0===t.indexOf("http")),c=!a&&t.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(c){var s=window.location;a=c[1]===s.protocol&&c[3]===s.hostname;var p=c[4],f=s.port;(80!==p&&""!==p||"80"!==f&&""!==f)&&(a=a&&p===f)}if(!a){var l=r.ZP.getProxyUrl(n);if(l){var d=[];u()(l)&&(d=l.useCORS||[],l=l.url);var m=d.reduce((function(e,n){return e||0===t.indexOf(n)}),!1);m||(o=!0)}}return o},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.ZP.getProxyUrl(e);return t&&u()(t)&&(t=t.url),t}},45992:(e,t,n)=>{"use strict";n.d(t,{h:()=>p,Z:()=>f});var r=n(35937),o=n.n(r),i=n(36882),a=n(63202);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e,t){var n,r,u,s,p=i.Z;if("custom"===e)n=t;else if(u=(s=e.split("."))[0],r=s[1],!(n=p[u]))throw new Error("No such provider ("+u+")");var f={url:n.url,options:n.options||{}};if(r&&"variants"in n){if(!(r in n.variants))throw new Error("No such variant of "+(u||n.url)+" ("+r+")");var l,d=n.variants[r];l="string"==typeof d?{variant:d}:d.options,f={url:d.url||f.url,options:c(c({},f.options||{}),l)}}else"function"==typeof f.url&&(f.url=f.url(s.splice(1,s.length-1).join(".")));var m="file:"===window.location.protocol||f.options.forceHTTP;0===f.url.indexOf("//")&&m&&(f.url="http:"+f.url),f.options.retina&&(t.detectRetina&&a.ZP.getBrowserProperties().retina?t.detectRetina=!1:f.options.retina=""),f.options.attribution&&(f.options.attribution=function e(t){return-1===t.indexOf("{attribution.")?t:t.replace(/\{attribution.(\w*)\}/,(function(t,n){return e(p[n].options.attribution)}))}(f.options.attribution));var v=c(c({},f.options),o()(t,(function(e){return void 0!==e})));return[f.url,v]};const f={getLayerConfig:p}},33358:(e,t,n)=>{"use strict";n.d(t,{z:()=>o});var r=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],o=function(e){return-1!==r.indexOf(e)}},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},7654:(e,t,n)=>{var r=n(81763);e.exports=function(e){return r(e)&&e!=+e}},31351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},10240:(e,t,n)=>{var r=n(29750),o=n(80531),i=n(40554),a=n(79833);e.exports=function(e,t,n){return e=a(e),n=null==n?0:r(i(n),0,e.length),t=o(t),e.slice(n,n+t.length)==t}},23493:(e,t,n)=>{var r=n(23279),o=n(13218);e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:i,maxWait:t,trailing:a})}},93379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var u=e[o],c=t.base?u[0]+t.base:u[0],s=n[c]||0,p="".concat(c," ").concat(s);n[c]=s+1;var f=a(p),l={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(i[f].references++,i[f].updater(l)):i.push({identifier:p,updater:v(l,t),references:1}),r.push(p)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,p=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=d||(d=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=l.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=u(e,t),s=0;s<n.length;s++){var p=a(n[s]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}n=c}}}}}]);