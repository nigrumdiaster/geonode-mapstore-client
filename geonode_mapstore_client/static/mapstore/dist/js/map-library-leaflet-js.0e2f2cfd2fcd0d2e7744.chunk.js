(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7161,7654],{21914:(t,e,n)=>{"use strict";n.d(e,{XL:()=>i,km:()=>o,Ih:()=>a,Xw:()=>s,Pn:()=>u,DZ:()=>c,e8:()=>l,E0:()=>f,F9:()=>d,X_:()=>p,pb:()=>h,qb:()=>m,Re:()=>v,ih:()=>y,xy:()=>E,jL:()=>g,oz:()=>_,ph:()=>I,lF:()=>O,gG:()=>b,cb:()=>T,GI:()=>N,B1:()=>R,fv:()=>q,gc:()=>L,zX:()=>F,ZF:()=>S,Zb:()=>w,DW:()=>A,Xp:()=>P,Fm:()=>k,sV:()=>C,Mn:()=>M,LU:()=>D,XP:()=>U,WU:()=>j,JB:()=>G,g:()=>Y,ws:()=>x,HP:()=>H,aN:()=>Z,Pg:()=>B,u0:()=>X,TM:()=>K,PM:()=>V,lK:()=>Q,sv:()=>z,MO:()=>J,oO:()=>$,Mc:()=>tt,Zw:()=>et,RA:()=>nt,am:()=>rt,ZM:()=>it,wm:()=>ot,Y$:()=>at,Qu:()=>st,kT:()=>ut});var r=n(47310),i="LOAD_FEATURE_INFO",o="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",s="CHANGE_MAPINFO_STATE",u="NEW_MAPINFO_REQUEST",c="PURGE_MAPINFO_RESULTS",l="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",d="HIDE_MAPINFO_MARKER",p="SHOW_REVERSE_GEOCODE",h="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",v="NO_QUERYABLE_LAYERS",y="CLEAR_WARNING",E="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",_="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",I="TOGGLE_MAPINFO_STATE",O="UPDATE_CENTER_TO_MARKER",b="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",N="IDENTIFY:CHANGE_FORMAT",R="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",q="IDENTIFY:EDIT_LAYER_FEATURES",L="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",F="IDENTIFY:SET_MAP_TRIGGER",S="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",w="IDENTIFY:SET_SHOW_IN_MAP_POPUP",A="IDENTIFY:IDENTIFY_IS_MOUNTED",P="IDENTIFY:INIT_PLUGIN";function k(t,e,n,r,o){return{type:i,data:e,reqId:t,requestParams:n,layerMetadata:r,layer:o}}function C(t,e,n,r){return{type:o,error:e,reqId:t,requestParams:n,layerMetadata:r}}function M(t,e,n,r){return{type:a,reqId:t,exceptions:e,requestParams:n,layerMetadata:r}}function D(){return{type:v}}function U(){return{type:y}}function j(t,e){return{type:u,reqId:t,request:e}}function G(t,e,n,r){return{type:m,layer:t,request:e,metadata:n,queryableLayers:r}}function Y(){return{type:c}}function x(t){return{type:l,infoFormat:t}}function H(){return{type:f}}function Z(){return{type:d}}function W(t){return{type:p,reverseGeocodeData:t.data}}function B(t){return function(e){r.Z.reverseGeocode(t).then((function(t){e(W(t))})).catch((function(t){e(W(t))}))}}function X(){return{type:h}}function K(){return{type:I}}function V(t){return{type:O,status:t}}function Q(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:E,point:t,layer:e,filterNameList:n,overrideParams:r,itemId:i}}function z(t){return{type:g,point:t}}function J(t){return{type:_,enabled:t}}function $(t){return{type:b,index:t}}var tt=function(){return{type:T}},et=function(t){return{type:N,format:t}},nt=function(t){return{type:R,showCoordinateEditor:t}},rt=function(t){return{type:q,layer:t}},it=function(t){return{type:L,query:t}},ot=function(t){return{type:F,trigger:t}},at=function(t){return{type:w,value:t}},st=function(t){return{type:A,isMounted:t}},ut=function(t){return{type:P,cfg:t}}},47310:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(75875),i=n.n(r),o=n(8575),a=n(27418),s=n.n(a),u={format:"json",bounded:0,polygon_geojson:1,priority:5};const c={geocode:function(t,e){var n=s()({q:t},u,e||{}),r=o.format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return i().get(r)},reverseGeocode:function(t,e){var n=s()({lat:t.lat,lon:t.lng},e||{},u),r=o.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return i().get(r)}}},48507:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=function(){return n(35701),{Map:n(39726).Z,Layer:n(52792).Z,Feature:n(44948).Z,MeasurementSupport:n(42047).Z,Overview:n(21975),ScaleBar:n(20564),DrawSupport:n(91753).Z,PopupSupport:n(67465).Z}}},3901:(t,e,n)=>{"use strict";n.d(e,{qR:()=>l,yQ:()=>f});var r=n(75875),i=n.n(r),o=n(81399),a=n.n(o),s=n(82702),u=new(a())(100),c=function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-9999,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=r*t+n;try{var s=e.dataView.getInt16(2*a,o);if(s!==i&&32767!==s&&-32768!==s)return s}catch(t){}return null},l=function(t,e,n){return u.has(n)?null:new s.Promise((function(r,o){i().get(t,{responseType:"arraybuffer"}).then((function(t){!function(t,e,n){u.set(n,{data:t,dataView:new DataView(t),coords:e,current:!0,status:"success"})}(t.data,e,n),r()})).catch((function(t){!function(t,e,n){u.set(n,{coords:e,current:!0,status:"error: "+t})}(t.message,e,n),o(t)}))}))},f=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-9999,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=u.get(t);return o&&"success"===o.status?{available:!0,value:c(n,o,e.x,e.y,r,i)}:o&&"loading"===o.status?{available:!1,message:"elevationLoading"}:o&&"error"===o.status?{available:!1,message:"elevationLoadingError"}:{available:!1,message:"elevationNotAvailable"}}},8797:(t,e,n)=>{"use strict";n.d(e,{rp:()=>u,Ov:()=>l,wd:()=>f,L0:()=>d}),n(1469);var r=n(91175),i=n.n(r),o=n(7654),a=n.n(o);function s(t){var e=Math.floor(t),n=60*(t-e),r=Math.floor(n),i=60*(n-r);return e+"° "+r+"' "+Math.floor(i)+"'' "}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.measureTrueBearing,r=void 0!==n&&n,i=e.fractionDigits,o=void 0===i?0:i,a="";if(r){var u="";t>=0&&t<10?u="00":t>10&&t<100&&(u="0");var c=o>0?t.toFixed(o):Math.floor(t);a=u+c+"°"}else t>=0&&t<90?a="N "+s(t)+"E":t>90&&t<=180?a="S "+s(180-t)+"E":t>180&&t<270?a="S "+s(t-180)+"W":t>=270&&t<=360&&(a="N "+s(360-t)+"W");return a}var c={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return c[e]&&c[e][n]?t*c[e][n]:t}var f=function(t){return!a()(parseFloat(t[0]))&&!a()(parseFloat(t[1]))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coordinates,n=t.type,r=e;if("LineString"===n){if((r=e.filter(f)).length<2)return[]}else if("Polygon"===n){if((r=i()(e).filter(f)).length<3)return[[]];r=[r.concat([i()(r)])]}return r}},45992:(t,e,n)=>{"use strict";n.d(e,{h:()=>l,Z:()=>f});var r=n(35937),i=n.n(r),o=n(36882),a=n(63202);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(t,e){var n,r,s,c,l=o.Z;if("custom"===t)n=e;else if(s=(c=t.split("."))[0],r=c[1],!(n=l[s]))throw new Error("No such provider ("+s+")");var f={url:n.url,options:n.options||{}};if(r&&"variants"in n){if(!(r in n.variants))throw new Error("No such variant of "+(s||n.url)+" ("+r+")");var d,p=n.variants[r];d="string"==typeof p?{variant:p}:p.options,f={url:p.url||f.url,options:u(u({},f.options||{}),d)}}else"function"==typeof f.url&&(f.url=f.url(c.splice(1,c.length-1).join(".")));var h="file:"===window.location.protocol||f.options.forceHTTP;0===f.url.indexOf("//")&&h&&(f.url="http:"+f.url),f.options.retina&&(e.detectRetina&&a.ZP.getBrowserProperties().retina?e.detectRetina=!1:f.options.retina=""),f.options.attribution&&(f.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,n){return t(l[n].options.attribution)}))}(f.options.attribution));var m=u(u({},f.options),i()(e,(function(t){return void 0!==t})));return[f.url,m]};const f={getLayerConfig:l}},33358:(t,e,n)=>{"use strict";n.d(e,{z:()=>i});var r=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],i=function(t){return-1!==r.indexOf(t)}},23645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},7654:(t,e,n)=>{var r=n(81763);t.exports=function(t){return r(t)&&t!=+t}},81399:function(t,e){var n,r,i;!function(o,a){"use strict";"object"==typeof t.exports?t.exports=a():(r=[],void 0===(i="function"==typeof(n=a)?n.apply(e,r):n)||(t.exports=i))}("object"==typeof window&&window,(function(){"use strict";function t(e){if(!(this instanceof t))return new t(e);this._LRUCacheState=new n(e)}var e=t.prototype;function n(t){this.capacity=t>0?+t:Number.MAX_SAFE_INTEGER||Number.MAX_VALUE,this.data=Object.create?Object.create(null):{},this.hash=Object.create?Object.create(null):{},this.linkedList=new r}function r(){this.length=0,this.head=null,this.end=null}function i(t){this.key=t,this.p=null,this.n=null}function o(t,e){e!==t.head&&(t.end?t.end===e&&(t.end=e.n):t.end=e,a(e.n,e.p),a(e,t.head),t.head=e,t.head.n=null)}function a(t,e){t!==e&&(t&&(t.p=e),e&&(e.n=t))}return e.get=function(t){var e=this._LRUCacheState,n=e.hash[t];if(n)return o(e.linkedList,n),e.data[t]},e.set=function(t,e){var n=this._LRUCacheState,r=n.hash[t];return void 0===e||(r||(n.hash[t]=new i(t),n.linkedList.length+=1,r=n.hash[t]),o(n.linkedList,r),n.data[t]=e,n.linkedList.length>n.capacity&&this.remove(n.linkedList.end.key)),this},e.update=function(t,e){return this.has(t)&&this.set(t,e(this.get(t))),this},e.remove=function(t){var e=this._LRUCacheState,n=e.hash[t];return n?(n===e.linkedList.head&&(e.linkedList.head=n.p),n===e.linkedList.end&&(e.linkedList.end=n.n),a(n.n,n.p),delete e.hash[t],delete e.data[t],e.linkedList.length-=1,this):this},e.removeAll=function(){return this._LRUCacheState=new n(this._LRUCacheState.capacity),this},e.info=function(){var t=this._LRUCacheState;return{capacity:t.capacity,length:t.linkedList.length}},e.keys=function(){for(var t=[],e=this._LRUCacheState.linkedList.head;e;)t.push(e.key),e=e.p;return t},e.has=function(t){return!!this._LRUCacheState.hash[t]},e.staleKey=function(){return this._LRUCacheState.linkedList.end&&this._LRUCacheState.linkedList.end.key},e.popStale=function(){var t=this.staleKey();if(!t)return null;var e=[t,this._LRUCacheState.data[t]];return this.remove(t),e},t}))},93379:(t,e,n)=>{"use strict";var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],i=0;i<t.length;i++){var s=t[i],u=e.base?s[0]+e.base:s[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var f=a(l),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(o[f].references++,o[f].updater(d)):o.push({identifier:l,updater:m(d,e),references:1}),r.push(l)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,l=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function d(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(t,e){var n,r,i;if(e.singleton){var o=h++;n=p||(p=u(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(e),r=d.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var u=s(t,e),c=0;c<n.length;c++){var l=a(n[c]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=u}}}}}]);