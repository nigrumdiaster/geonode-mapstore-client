(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7579],{23279:(t,e,i)=>{var o=i(13218),n=i(7771),r=i(14841),s=Math.max,a=Math.min;t.exports=function(t,e,i){var h,p,d,c,u,l,g=0,f=!1,y=!1,_=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var i=h,o=p;return h=p=void 0,g=e,c=t.apply(o,i)}function v(t){return g=t,u=setTimeout(T,e),f?m(t):c}function C(t){var i=t-l;return void 0===l||i>=e||i<0||y&&t-g>=d}function T(){var t=n();if(C(t))return E(t);u=setTimeout(T,function(t){var i=e-(t-l);return y?a(i,d-(t-g)):i}(t))}function E(t){return u=void 0,_&&h?m(t):(h=p=void 0,c)}function P(){var t=n(),i=C(t);if(h=arguments,p=this,l=t,i){if(void 0===u)return v(l);if(y)return clearTimeout(u),u=setTimeout(T,e),m(l)}return void 0===u&&(u=setTimeout(T,e)),c}return e=r(e)||0,o(i)&&(f=!!i.leading,d=(y="maxWait"in i)?s(r(i.maxWait)||0,e):d,_="trailing"in i?!!i.trailing:_),P.cancel=function(){void 0!==u&&clearTimeout(u),g=0,h=l=p=u=void 0},P.flush=function(){return void 0===u?c:E(n())},P}},7771:(t,e,i)=>{var o=i(55639);t.exports=function(){return o.Date.now()}},23493:(t,e,i)=>{var o=i(23279),n=i(13218);t.exports=function(t,e,i){var r=!0,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return n(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),o(t,e,{leading:r,maxWait:e,trailing:s})}},23068:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var o=i(38906),n=i(13002),r=i(73381),s=i(58493);const a=function(t){function e(e){if(t.call(this),this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,(0,n.oL)(this,(0,s.v_)(this.geometryName_),this.handleGeometryChanged_,this),e)if("function"==typeof e.getSimplifiedGeometry){var i=e;this.setGeometry(i)}else{var o=e;this.setProperties(o)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){var t=new e(this.getProperties());t.setGeometryName(this.getGeometryName());var i=this.getGeometry();i&&t.setGeometry(i.clone());var o=this.getStyle();return o&&t.setStyle(o),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&((0,n.bN)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=(0,n.oL)(t,r.Z.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){var e,i;this.style_=t,this.styleFunction_=t?"function"==typeof(e=t)?e:(Array.isArray(e)?i=e:((0,o.h)("function"==typeof e.getZIndex,41),i=[e]),function(){return i}):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){(0,n.Ev)(this,(0,s.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.geometryName_=t,(0,n.oL)(this,(0,s.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.handleGeometryChanged_()},e}(s.ZP)},16892:(t,e,i)=>{"use strict";i.d(e,{Z:()=>E});var o=i(58493),n=i(13002),r=i(9520),s=i(73381),a=i(40353),h=i(91358),p=i(21882),d=i(18672),c="accuracy",u="accuracyGeometry",l="altitude",g="altitudeAccuracy",f="heading",y="position",_="projection",m="speed",v="tracking",C="trackingOptions",T=function(t){function e(e){t.call(this,s.Z.ERROR),this.code=e.code,this.message=e.message}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(r.ZP);const E=function(t){function e(e){t.call(this);var i=e||{};this.position_=null,this.transform_=d.gD,this.watchId_=void 0,(0,n.oL)(this,(0,o.v_)(_),this.handleProjectionChanged_,this),(0,n.oL)(this,(0,o.v_)(v),this.handleTrackingChanged_,this),void 0!==i.projection&&this.setProjection(i.projection),void 0!==i.trackingOptions&&this.setTrackingOptions(i.trackingOptions),this.setTracking(void 0!==i.tracking&&i.tracking)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.disposeInternal=function(){this.setTracking(!1),t.prototype.disposeInternal.call(this)},e.prototype.handleProjectionChanged_=function(){var t=this.getProjection();t&&(this.transform_=(0,d.WO)((0,d.U2)("EPSG:4326"),t),this.position_&&this.set(y,this.transform_(this.position_)))},e.prototype.handleTrackingChanged_=function(){if(h.De){var t=this.getTracking();t&&void 0===this.watchId_?this.watchId_=navigator.geolocation.watchPosition(this.positionChange_.bind(this),this.positionError_.bind(this),this.getTrackingOptions()):t||void 0===this.watchId_||(navigator.geolocation.clearWatch(this.watchId_),this.watchId_=void 0)}},e.prototype.positionChange_=function(t){var e=t.coords;this.set(c,e.accuracy),this.set(l,null===e.altitude?void 0:e.altitude),this.set(g,null===e.altitudeAccuracy?void 0:e.altitudeAccuracy),this.set(f,null===e.heading?void 0:(0,p.Yr)(e.heading)),this.position_?(this.position_[0]=e.longitude,this.position_[1]=e.latitude):this.position_=[e.longitude,e.latitude];var i=this.transform_(this.position_);this.set(y,i),this.set(m,null===e.speed?void 0:e.speed);var o=(0,a.iu)(this.position_,e.accuracy);o.applyTransform(this.transform_),this.set(u,o),this.changed()},e.prototype.positionError_=function(t){this.setTracking(!1),this.dispatchEvent(new T(t))},e.prototype.getAccuracy=function(){return this.get(c)},e.prototype.getAccuracyGeometry=function(){return this.get(u)||null},e.prototype.getAltitude=function(){return this.get(l)},e.prototype.getAltitudeAccuracy=function(){return this.get(g)},e.prototype.getHeading=function(){return this.get(f)},e.prototype.getPosition=function(){return this.get(y)},e.prototype.getProjection=function(){return this.get(_)},e.prototype.getSpeed=function(){return this.get(m)},e.prototype.getTracking=function(){return this.get(v)},e.prototype.getTrackingOptions=function(){return this.get(C)},e.prototype.setProjection=function(t){this.set(_,(0,d.U2)(t))},e.prototype.setTracking=function(t){this.set(v,t)},e.prototype.setTrackingOptions=function(t){this.set(C,t)},e}(o.ZP)},40188:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend"}},93409:(t,e,i)=>{"use strict";i.d(e,{Z:()=>f});var o=i(40188),n=i(58493),r=i(12868),s=i(67644),a=i(85386),h=i(13002),p=i(21915),d="element",c="map",u="offset",l="position",g="positioning";const f=function(t){function e(e){t.call(this),this.options=e,this.id=e.id,this.insertFirst=void 0===e.insertFirst||e.insertFirst,this.stopEvent=void 0===e.stopEvent||e.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==e.className?e.className:"ol-overlay-container "+s.$A,this.element.style.position="absolute",this.autoPan=void 0!==e.autoPan&&e.autoPan,this.autoPanAnimation=e.autoPanAnimation||{},this.autoPanMargin=void 0!==e.autoPanMargin?e.autoPanMargin:20,this.rendered={bottom_:"",left_:"",right_:"",top_:"",visible:!0},this.mapPostrenderListenerKey=null,(0,h.oL)(this,(0,n.v_)(d),this.handleElementChanged,this),(0,h.oL)(this,(0,n.v_)(c),this.handleMapChanged,this),(0,h.oL)(this,(0,n.v_)(u),this.handleOffsetChanged,this),(0,h.oL)(this,(0,n.v_)(l),this.handlePositionChanged,this),(0,h.oL)(this,(0,n.v_)(g),this.handlePositioningChanged,this),void 0!==e.element&&this.setElement(e.element),this.setOffset(void 0!==e.offset?e.offset:[0,0]),this.setPositioning(void 0!==e.positioning?e.positioning:r.Z.TOP_LEFT),void 0!==e.position&&this.setPosition(e.position)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(){return this.get(d)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(c)},e.prototype.getOffset=function(){return this.get(u)},e.prototype.getPosition=function(){return this.get(l)},e.prototype.getPositioning=function(){return this.get(g)},e.prototype.handleElementChanged=function(){(0,a.ep)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&((0,a.ZF)(this.element),(0,h.bN)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,h.oL)(t,o.Z.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element)}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.get(l)&&this.autoPan&&this.panIntoView()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(d,t)},e.prototype.setMap=function(t){this.set(c,t)},e.prototype.setOffset=function(t){this.set(u,t)},e.prototype.setPosition=function(t){this.set(l,t)},e.prototype.panIntoView=function(){var t=this.getMap();if(t&&t.getTargetElement()){var e=this.getRect(t.getTargetElement(),t.getSize()),i=this.getElement(),o=this.getRect(i,[(0,a.iO)(i),(0,a.Pb)(i)]),n=this.autoPanMargin;if(!(0,p.r4)(e,o)){var r=o[0]-e[0],s=e[2]-o[2],h=o[1]-e[1],d=e[3]-o[3],c=[0,0];if(r<0?c[0]=r-n:s<0&&(c[0]=Math.abs(s)+n),h<0?c[1]=h-n:d<0&&(c[1]=Math.abs(d)+n),0!==c[0]||0!==c[1]){var u=t.getView().getCenter(),l=t.getPixelFromCoordinate(u),g=[l[0]+c[0],l[1]+c[1]];t.getView().animate({center:t.getCoordinateFromPixel(g),duration:this.autoPanAnimation.duration,easing:this.autoPanAnimation.easing})}}}},e.prototype.getRect=function(t,e){var i=t.getBoundingClientRect(),o=i.left+window.pageXOffset,n=i.top+window.pageYOffset;return[o,n,o+e[0],n+e[1]]},e.prototype.setPositioning=function(t){this.set(g,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var i=t.getPixelFromCoordinate(e),o=t.getSize();this.updateRenderedPosition(i,o)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var i=this.element.style,o=this.getOffset(),n=this.getPositioning();this.setVisible(!0);var s=o[0],a=o[1];if(n==r.Z.BOTTOM_RIGHT||n==r.Z.CENTER_RIGHT||n==r.Z.TOP_RIGHT){""!==this.rendered.left_&&(this.rendered.left_=i.left="");var h=Math.round(e[0]-t[0]-s)+"px";this.rendered.right_!=h&&(this.rendered.right_=i.right=h)}else{""!==this.rendered.right_&&(this.rendered.right_=i.right=""),n!=r.Z.BOTTOM_CENTER&&n!=r.Z.CENTER_CENTER&&n!=r.Z.TOP_CENTER||(s-=this.element.offsetWidth/2);var p=Math.round(t[0]+s)+"px";this.rendered.left_!=p&&(this.rendered.left_=i.left=p)}if(n==r.Z.BOTTOM_LEFT||n==r.Z.BOTTOM_CENTER||n==r.Z.BOTTOM_RIGHT){""!==this.rendered.top_&&(this.rendered.top_=i.top="");var d=Math.round(e[1]-t[1]-a)+"px";this.rendered.bottom_!=d&&(this.rendered.bottom_=i.bottom=d)}else{""!==this.rendered.bottom_&&(this.rendered.bottom_=i.bottom=""),n!=r.Z.CENTER_LEFT&&n!=r.Z.CENTER_CENTER&&n!=r.Z.CENTER_RIGHT||(a-=this.element.offsetHeight/2);var c=Math.round(t[1]+a)+"px";this.rendered.top_!=c&&(this.rendered.top_=i.top=c)}},e.prototype.getOptions=function(){return this.options},e}(n.ZP)},12868:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},34007:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"}},69669:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var o=i(21915),n=i(28795),r=i(32538),s=i(38667),a=function(t){function e(e,i,o){if(t.call(this),void 0!==o&&void 0===i)this.setFlatCoordinates(o,e);else{var n=i||0;this.setCenterAndRadius(e,n,o)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),void 0,this.layout)},e.prototype.closestPointXY=function(t,e,i,o){var n=this.flatCoordinates,r=t-n[0],s=e-n[1],a=r*r+s*s;if(a<o){if(0===a)for(var h=0;h<this.stride;++h)i[h]=n[h];else{var p=this.getRadius()/Math.sqrt(a);i[0]=n[0]+p*r,i[1]=n[1]+p*s;for(var d=2;d<this.stride;++d)i[d]=n[d]}return i.length=this.stride,a}return o},e.prototype.containsXY=function(t,e){var i=this.flatCoordinates,o=t-i[0],n=e-i[1];return o*o+n*n<=this.getRadiusSquared_()},e.prototype.getCenter=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.computeExtent=function(t){var e=this.flatCoordinates,i=e[this.stride]-e[0];return(0,o.T9)(e[0]-i,e[1]-i,e[0]+i,e[1]+i,t)},e.prototype.getRadius=function(){return Math.sqrt(this.getRadiusSquared_())},e.prototype.getRadiusSquared_=function(){var t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e},e.prototype.getType=function(){return n.Z.CIRCLE},e.prototype.intersectsExtent=function(t){var e=this.getExtent();if((0,o.kK)(t,e)){var i=this.getCenter();return t[0]<=i[0]&&t[2]>=i[0]||t[1]<=i[1]&&t[3]>=i[1]||(0,o.H6)(t,this.intersectsCoordinate,this)}return!1},e.prototype.setCenter=function(t){var e=this.stride,i=this.flatCoordinates[e]-this.flatCoordinates[0],o=t.slice();o[e]=o[0]+i;for(var n=1;n<e;++n)o[e+n]=t[n];this.setFlatCoordinates(this.layout,o),this.changed()},e.prototype.setCenterAndRadius=function(t,e,i){this.setLayout(i,t,0),this.flatCoordinates||(this.flatCoordinates=[]);var o=this.flatCoordinates,n=(0,s.IG)(o,0,t,this.stride);o[n++]=o[0]+e;for(var r=1,a=this.stride;r<a;++r)o[n++]=o[r];o.length=n,this.changed()},e.prototype.getCoordinates=function(){return null},e.prototype.setCoordinates=function(t,e){},e.prototype.setRadius=function(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()},e}(r.ZP);a.prototype.transform;const h=a}}]);