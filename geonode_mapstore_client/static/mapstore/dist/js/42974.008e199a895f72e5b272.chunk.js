(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[42974],{504333:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var r=n(124852),o=n.n(r),i=n(2212),a=n(747037),l=n.n(a),c=n(281763),u=n.n(c),s=n(315817),d=n(629521),f=n(477854),m=n(270052),p=n(166037),v=n(762694),y=n(917047),b=n(340879),g=n(55035),h=n(173155);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||j(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){var r;return r=function(e,t){if("object"!=w(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==w(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(){var e=(0,d.S)().progress;return o().createElement(f.V,{center:!0},o().createElement("div",{className:"gn-media-scene-3d-progress"},o().createElement("div",{style:{width:"".concat(e,"%")}}),"".concat(Math.round(e),"%")))}var I=new i.MeshLambertMaterial({transparent:!0,opacity:.6,color:16711680,depthTest:!1}),D={gltf:function(e){var t=e.src,n=e.onChange,a=(0,s.U2)(y.E,(0,g.zL)(t)),l=function(e){if(null!=e&&e.scene){e.scene.updateMatrixWorld(!0);var t=(new i.Box3).setFromObject(e.scene);return{radius:t.getSize(new i.Vector3).length(),center:t.getCenter(new i.Vector3)}}return{radius:10,center:{x:0,y:0,z:0}}}(a),c=l.radius,u=l.center;return(0,r.useEffect)((function(){u&&n({center:[u.x||0,u.y||0,u.z||0],radius:c})}),[c,null==u?void 0:u.x,null==u?void 0:u.y,null==u?void 0:u.z]),null!=a&&a.scene?o().createElement("primitive",{object:a.scene}):null},pcd:function(e){var t,n=e.src,a=e.onChange,l=(0,s.U2)(b.w,(0,g.zL)(n));l&&(l.geometry.computeBoundingSphere(),l.material&&(l.material.color=new i.Color(3766955)));var c=(null==l||null===(t=l.geometry)||void 0===t?void 0:t.boundingSphere)||{},u=c.radius,d=c.center;return(0,r.useEffect)((function(){d&&a({center:[d.x||0,d.y||0,d.z||0],radius:u})}),[u,null==d?void 0:d.x,null==d?void 0:d.y,null==d?void 0:d.z]),l?o().createElement("primitive",{object:l}):null},ifc:function(e){var t,n=e.src,i=e.sessionId,a=e.onChange,c=e.onUpdateInfo,d=void 0===c?function(){}:c,f=(0,s.U2)(h.F,(0,g.zL)("".concat(n,"?_v_=").concat(i)),(function(e){e.ifcManager.setWasmPath((0,g.PX)("geoNodeSettings.staticPath","/static/")+"mapstore/dist/js/web-ifc/"),e.ifcManager.state.api.isWasmPathAbsolute=!0}));(0,r.useEffect)((function(){return function(){var e;null!=f&&null!==(e=f.ifcManager)&&void 0!==e&&e.dispose&&f.ifcManager.dispose()}}),[]);var m=(null==f||null===(t=f.geometry)||void 0===t?void 0:t.boundingSphere)||{},p=m.radius,v=m.center;return(0,r.useEffect)((function(){v&&a({center:[v.x||0,v.y||0,v.z||0],radius:p})}),[p,null==v?void 0:v.x,null==v?void 0:v.y,null==v?void 0:v.z]),f?o().createElement("primitive",{object:f,onPointerLeave:function(){f.ifcManager.removeSubset(f.modelID,I),d({})},onPointerMove:function(e){var t,n,r=(e||{}).intersections,o=(void 0===r?[]:r)[0],i=null==o||null===(t=o.object)||void 0===t?void 0:t.ifcManager;if(i&&null!=o&&null!==(n=o.object)&&void 0!==n&&n.geometry){var a,c=o.faceIndex,s=o.object.geometry,f=o.object.modelID,m=i.getExpressId(s,c);i.createSubset({modelID:f,ids:[m],material:I,scene:null==o||null===(a=o.object)||void 0===a?void 0:a.parent,removePrevious:!0}),i.getItemProperties(f,m).then((function(t){d({x:e.x,y:e.y,properties:Object.keys(t).reduce((function(e,n){var r,o=l()(t[n])||u()(t[n])?t[n]:null===(r=t[n])||void 0===r?void 0:r.value;return null==o?e:x(x({},e),{},P({},n,o))}),{})})}))}}}):null}};const z=function(e){var t,n,i=e.src,a=e.mediaType,l=e.environmentFiles,c=void 0===l?"/static/mapstore/img/studio_small_03_1k.hdr":l,u=E((0,r.useState)(Date.now()),1)[0],d=(0,r.useRef)(),f=E((0,r.useState)({radius:10,center:[0,0,0]}),2),y=f[0],b=f[1],g=E((0,r.useState)({}),2),h=g[0],w=g[1],O=D[a],P=null==d||null===(t=d.current)||void 0===t?void 0:t.getBoundingClientRect();return o().createElement("div",{ref:d,className:"gn-media-scene-3d"},o().createElement(r.Suspense,{fallback:null},o().createElement(s.Xz,null,o().createElement("ambientLight",{intensity:.5}),o().createElement("directionalLight",{color:"white",intensity:.5,position:[10,10,10]}),o().createElement(r.Suspense,{fallback:null},o().createElement(m.qA,{files:c})),o().createElement(r.Suspense,{fallback:o().createElement(k,null)},o().createElement(O,{sessionId:u,src:i,onChange:b,onUpdateInfo:function(e){return w(e)}})),o().createElement(p.z,{makeDefault:!0,enableDamping:!0,minDistance:0,maxDistance:8*y.radius,target:(n=y.center,function(e){if(Array.isArray(e))return S(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||j(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}),o().createElement(v.c,{makeDefault:!0,fov:65,far:12*y.radius,position:[y.center[0],y.center[1],2*y.radius]}))),(null==h?void 0:h.properties)&&o().createElement("div",{className:"shadow gn-media-scene-3d-info gn-details-info-fields",style:x({position:"absolute",zIndex:10,padding:"0.25rem",pointerEvents:"none",maxWidth:3*P.width/2,wordBreak:"break-word",transition:"0.3s all",minWidth:300,userSelect:"none"},function(){if(P.width<768||P.height<768)return{left:0,top:0,transform:"translateX(1rem) translateY(1rem)"};var e=null!=h&&h.x?h.x-P.left:0,t=null!=h&&h.y?h.y-P.top:0,n=e>P.width/2?"translateX(calc(-100% - 1rem))":"translateX(1rem)",r=t>P.height/2?"translateY(calc(-100% - 1rem))":"translateY(1rem)";return{left:e,top:t,transform:"".concat(n," ").concat(r)}}())},o().createElement("div",{className:"gn-media-scene-3d-info-bg",style:{opacity:.85,position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),Object.keys(h.properties).map((function(e){return o().createElement("div",{key:e,className:"gn-details-info-row"},o().createElement("div",{className:"gn-details-info-label",style:{width:(t=Object.keys(h.properties||{}).reduce((function(e,t){return e.length>t.length?e:t})),t.length?"".concat(.5*t.length,"rem"):"auto")}},e),o().createElement("div",{className:"gn-details-info-value",style:{maxWidth:"none"}},h.properties[e]));var t}))))}},825671:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=825671,e.exports=t}}]);