(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[202],{23279:(t,e,i)=>{var n=i(13218),o=i(7771),r=i(14841),s=Math.max,a=Math.min;t.exports=function(t,e,i){var h,p,u,d,m,l,f=0,c=!1,g=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function T(e){var i=h,n=p;return h=p=void 0,f=e,d=t.apply(n,i)}function E(t){return f=t,m=setTimeout(P,e),c?T(t):d}function y(t){var i=t-l;return void 0===l||i>=e||i<0||g&&t-f>=u}function P(){var t=o();if(y(t))return _(t);m=setTimeout(P,function(t){var i=e-(t-l);return g?a(i,u-(t-f)):i}(t))}function _(t){return m=void 0,v&&h?T(t):(h=p=void 0,d)}function x(){var t=o(),i=y(t);if(h=arguments,p=this,l=t,i){if(void 0===m)return E(l);if(g)return clearTimeout(m),m=setTimeout(P,e),T(l)}return void 0===m&&(m=setTimeout(P,e)),d}return e=r(e)||0,n(i)&&(c=!!i.leading,u=(g="maxWait"in i)?s(r(i.maxWait)||0,e):u,v="trailing"in i?!!i.trailing:v),x.cancel=function(){void 0!==m&&clearTimeout(m),f=0,h=l=p=m=void 0},x.flush=function(){return void 0===m?d:_(o())},x}},7771:(t,e,i)=>{var n=i(55639);t.exports=function(){return n.Date.now()}},31351:t=>{var e=Array.prototype.reverse;t.exports=function(t){return null==t?t:e.call(t)}},10240:(t,e,i)=>{var n=i(29750),o=i(80531),r=i(40554),s=i(79833);t.exports=function(t,e,i){return t=s(t),i=null==i?0:n(r(i),0,t.length),e=o(e),t.slice(i,i+e.length)==e}},23493:(t,e,i)=>{var n=i(23279),o=i(13218);t.exports=function(t,e,i){var r=!0,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),n(t,e,{leading:r,maxWait:e,trailing:s})}},93409:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var n=i(40188),o=i(58493),r=i(12868),s=i(67644),a=i(85386),h=i(13002),p=i(21915),u="element",d="map",m="offset",l="position",f="positioning";const c=function(t){function e(e){t.call(this),this.options=e,this.id=e.id,this.insertFirst=void 0===e.insertFirst||e.insertFirst,this.stopEvent=void 0===e.stopEvent||e.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==e.className?e.className:"ol-overlay-container "+s.$A,this.element.style.position="absolute",this.autoPan=void 0!==e.autoPan&&e.autoPan,this.autoPanAnimation=e.autoPanAnimation||{},this.autoPanMargin=void 0!==e.autoPanMargin?e.autoPanMargin:20,this.rendered={bottom_:"",left_:"",right_:"",top_:"",visible:!0},this.mapPostrenderListenerKey=null,(0,h.oL)(this,(0,o.v_)(u),this.handleElementChanged,this),(0,h.oL)(this,(0,o.v_)(d),this.handleMapChanged,this),(0,h.oL)(this,(0,o.v_)(m),this.handleOffsetChanged,this),(0,h.oL)(this,(0,o.v_)(l),this.handlePositionChanged,this),(0,h.oL)(this,(0,o.v_)(f),this.handlePositioningChanged,this),void 0!==e.element&&this.setElement(e.element),this.setOffset(void 0!==e.offset?e.offset:[0,0]),this.setPositioning(void 0!==e.positioning?e.positioning:r.Z.TOP_LEFT),void 0!==e.position&&this.setPosition(e.position)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(){return this.get(u)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(d)},e.prototype.getOffset=function(){return this.get(m)},e.prototype.getPosition=function(){return this.get(l)},e.prototype.getPositioning=function(){return this.get(f)},e.prototype.handleElementChanged=function(){(0,a.ep)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&((0,a.ZF)(this.element),(0,h.bN)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,h.oL)(t,n.Z.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element)}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.get(l)&&this.autoPan&&this.panIntoView()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(u,t)},e.prototype.setMap=function(t){this.set(d,t)},e.prototype.setOffset=function(t){this.set(m,t)},e.prototype.setPosition=function(t){this.set(l,t)},e.prototype.panIntoView=function(){var t=this.getMap();if(t&&t.getTargetElement()){var e=this.getRect(t.getTargetElement(),t.getSize()),i=this.getElement(),n=this.getRect(i,[(0,a.iO)(i),(0,a.Pb)(i)]),o=this.autoPanMargin;if(!(0,p.r4)(e,n)){var r=n[0]-e[0],s=e[2]-n[2],h=n[1]-e[1],u=e[3]-n[3],d=[0,0];if(r<0?d[0]=r-o:s<0&&(d[0]=Math.abs(s)+o),h<0?d[1]=h-o:u<0&&(d[1]=Math.abs(u)+o),0!==d[0]||0!==d[1]){var m=t.getView().getCenter(),l=t.getPixelFromCoordinate(m),f=[l[0]+d[0],l[1]+d[1]];t.getView().animate({center:t.getCoordinateFromPixel(f),duration:this.autoPanAnimation.duration,easing:this.autoPanAnimation.easing})}}}},e.prototype.getRect=function(t,e){var i=t.getBoundingClientRect(),n=i.left+window.pageXOffset,o=i.top+window.pageYOffset;return[n,o,n+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(f,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var i=t.getPixelFromCoordinate(e),n=t.getSize();this.updateRenderedPosition(i,n)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var i=this.element.style,n=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var s=n[0],a=n[1];if(o==r.Z.BOTTOM_RIGHT||o==r.Z.CENTER_RIGHT||o==r.Z.TOP_RIGHT){""!==this.rendered.left_&&(this.rendered.left_=i.left="");var h=Math.round(e[0]-t[0]-s)+"px";this.rendered.right_!=h&&(this.rendered.right_=i.right=h)}else{""!==this.rendered.right_&&(this.rendered.right_=i.right=""),o!=r.Z.BOTTOM_CENTER&&o!=r.Z.CENTER_CENTER&&o!=r.Z.TOP_CENTER||(s-=this.element.offsetWidth/2);var p=Math.round(t[0]+s)+"px";this.rendered.left_!=p&&(this.rendered.left_=i.left=p)}if(o==r.Z.BOTTOM_LEFT||o==r.Z.BOTTOM_CENTER||o==r.Z.BOTTOM_RIGHT){""!==this.rendered.top_&&(this.rendered.top_=i.top="");var u=Math.round(e[1]-t[1]-a)+"px";this.rendered.bottom_!=u&&(this.rendered.bottom_=i.bottom=u)}else{""!==this.rendered.bottom_&&(this.rendered.bottom_=i.bottom=""),o!=r.Z.CENTER_LEFT&&o!=r.Z.CENTER_CENTER&&o!=r.Z.CENTER_RIGHT||(a-=this.element.offsetHeight/2);var d=Math.round(t[1]+a)+"px";this.rendered.top_!=d&&(this.rendered.top_=i.top=d)}},e.prototype.getOptions=function(){return this.options},e}(o.ZP)},12868:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},19473:(t,e,i)=>{"use strict";i.d(e,{T:()=>o,Z:()=>r});var n=function(t,e,i,n){this.minX=t,this.maxX=e,this.minY=i,this.maxY=n};function o(t,e,i,o,r){return void 0!==r?(r.minX=t,r.maxX=e,r.minY=i,r.maxY=o,r):new n(t,e,i,o)}n.prototype.contains=function(t){return this.containsXY(t[1],t[2])},n.prototype.containsTileRange=function(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY},n.prototype.containsXY=function(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY},n.prototype.equals=function(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY},n.prototype.extend=function(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)},n.prototype.getHeight=function(){return this.maxY-this.minY+1},n.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},n.prototype.getWidth=function(){return this.maxX-this.minX+1},n.prototype.intersects=function(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY};const r=n},59900:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4,ABORT:5}},35211:(t,e,i)=>{"use strict";i.d(e,{m:()=>n,j:()=>o});var n=.5,o=!0},50596:(t,e,i)=>{"use strict";function n(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]+2*e,i[1]=t[1]+2*e,i}function o(t){return t[0]>0&&t[1]>0}function r(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]*e+.5|0,i[1]=t[1]*e+.5|0,i}function s(t,e){return Array.isArray(t)?t:(void 0===e?e=[t,t]:e[0]=e[1]=t,e)}i.d(e,{f3:()=>n,py:()=>o,bA:()=>r,Pq:()=>s})},10508:(t,e,i)=>{"use strict";i.d(e,{e:()=>n,S:()=>o});var n=42,o=256}}]);