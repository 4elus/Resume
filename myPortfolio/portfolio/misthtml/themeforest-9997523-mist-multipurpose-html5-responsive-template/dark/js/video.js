/*! Video.js v4.6.4 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,j=null,l=!1;function m(){return function(){}}function q(a){return function(){return this[a]}}function r(a){return function(){return a}}var t;document.createElement("video");document.createElement("audio");document.createElement("track");function u(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(u.Aa[a])return u.Aa[a];a=u.w(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new u.Player(a,c,d)}
var videojs=u;window.je=window.ke=u;u.Ub="4.6";u.Pc="https:"==document.location.protocol?"https://":"http://";u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{},errorDisplay:{}},notSupportedMessage:"No compatible source was found for this video."};"GENERATED_CDN_VSN"!==u.Ub&&(videojs.options.flash.swf=u.Pc+"vjs.zencdn.net/"+u.Ub+"/video-js.swf");
u.Aa={};"function"===typeof define&&define.amd?define([],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);u.pa=u.CoreObject=m();u.pa.extend=function(a){var c,d;a=a||{};c=a.init||a.h||this.prototype.init||this.prototype.h||m();d=function(){c.apply(this,arguments)};d.prototype=u.l.create(this.prototype);d.prototype.constructor=d;d.extend=u.pa.extend;d.create=u.pa.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};
u.pa.create=function(){var a=u.l.create(this.prototype);this.apply(a,arguments);return a};u.d=function(a,c,d){var e=u.getData(a);e.D||(e.D={});e.D[c]||(e.D[c]=[]);d.v||(d.v=u.v++);e.D[c].push(d);e.X||(e.disabled=l,e.X=function(c){if(!e.disabled){c=u.oc(c);var d=e.D[c.type];if(d)for(var d=d.slice(0),k=0,p=d.length;k<p&&!c.wc();k++)d[k].call(a,c)}});1==e.D[c].length&&(document.addEventListener?a.addEventListener(c,e.X,l):document.attachEvent&&a.attachEvent("on"+c,e.X))};
u.p=function(a,c,d){if(u.sc(a)){var e=u.getData(a);if(e.D)if(c){var g=e.D[c];if(g){if(d){if(d.v)for(e=0;e<g.length;e++)g[e].v===d.v&&g.splice(e--,1)}else e.D[c]=[];u.jc(a,c)}}else for(g in e.D)c=g,e.D[c]=[],u.jc(a,c)}};u.jc=function(a,c){var d=u.getData(a);0===d.D[c].length&&(delete d.D[c],document.removeEventListener?a.removeEventListener(c,d.X,l):document.detachEvent&&a.detachEvent("on"+c,d.X));u.Eb(d.D)&&(delete d.D,delete d.X,delete d.disabled);u.Eb(d)&&u.Dc(a)};
u.oc=function(a){function c(){return f}function d(){return l}if(!a||!a.Fb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyboardEvent.keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.rd=c;a.defaultPrevented=f};a.rd=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Fb=c};a.Fb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.wc=c;a.stopPropagation()};a.wc=d;if(a.clientX!=j){g=document.documentElement;var h=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=j&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};u.k=function(a,c){var d=u.sc(a)?u.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=u.oc(c);d.X&&d.X.call(a,c);if(e&&!c.Fb()&&c.bubbles!==l)u.k(e,c);else if(!e&&!c.defaultPrevented&&(d=u.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
u.W=function(a,c,d){function e(){u.p(a,c,e);d.apply(this,arguments)}e.v=d.v=d.v||u.v++;u.d(a,c,e)};var v=Object.prototype.hasOwnProperty;u.e=function(a,c){var d,e;d=document.createElement(a||"div");for(e in c)v.call(c,e)&&(-1!==e.indexOf("aria-")||"role"==e?d.setAttribute(e,c[e]):d[e]=c[e]);return d};u.$=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};u.l={};u.l.create=Object.create||function(a){function c(){}c.prototype=a;return new c};
u.l.wa=function(a,c,d){for(var e in a)v.call(a,e)&&c.call(d||this,e,a[e])};u.l.B=function(a,c){if(!c)return a;for(var d in c)v.call(c,d)&&(a[d]=c[d]);return a};u.l.fd=function(a,c){var d,e,g;a=u.l.copy(a);for(d in c)v.call(c,d)&&(e=a[d],g=c[d],a[d]=u.l.Sa(e)&&u.l.Sa(g)?u.l.fd(e,g):c[d]);return a};u.l.copy=function(a){return u.l.B({},a)};u.l.Sa=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};
u.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.v||(c.v=u.v++);e.v=d?d+"_"+c.v:c.v;return e};u.ta={};u.v=1;u.expando="vdata"+(new Date).getTime();u.getData=function(a){var c=a[u.expando];c||(c=a[u.expando]=u.v++,u.ta[c]={});return u.ta[c]};u.sc=function(a){a=a[u.expando];return!(!a||u.Eb(u.ta[a]))};u.Dc=function(a){var c=a[u.expando];if(c){delete u.ta[c];try{delete a[u.expando]}catch(d){a.removeAttribute?a.removeAttribute(u.expando):a[u.expando]=j}}};
u.Eb=function(a){for(var c in a)if(a[c]!==j)return l;return f};u.o=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};u.r=function(a,c){var d,e;if(-1!=a.className.indexOf(c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};u.A=u.e("video");u.M=navigator.userAgent;u.Uc=/iPhone/i.test(u.M);u.Tc=/iPad/i.test(u.M);u.Vc=/iPod/i.test(u.M);u.Sc=u.Uc||u.Tc||u.Vc;var aa=u,w;var x=u.M.match(/OS (\d+)_/i);
w=x&&x[1]?x[1]:b;aa.Zd=w;u.Rc=/Android/i.test(u.M);var ba=u,y;var z=u.M.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),A,B;z?(A=z[1]&&parseFloat(z[1]),B=z[2]&&parseFloat(z[2]),y=A&&B?parseFloat(z[1]+"."+z[2]):A?A:j):y=j;ba.Tb=y;u.Wc=u.Rc&&/webkit/i.test(u.M)&&2.3>u.Tb;u.Xb=/Firefox/i.test(u.M);u.$d=/Chrome/i.test(u.M);u.ec=!!("ontouchstart"in window||window.Qc&&document instanceof window.Qc);
u.Bb=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var h=d.length-1;0<=h;h--){e=d[h].name;g=d[h].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==j?f:l;c[e]=g}}return c};
u.ce=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};u.Db=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};u.Na={};u.w=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
u.ya=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};u.bd=function(){document.body.focus();document.onselectstart=r(l)};u.Td=function(){document.onselectstart=r(f)};u.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};u.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
u.yb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};
u.get=function(a,c,d,e){var g,h,k,p;d=d||m();"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});h=new XMLHttpRequest;k=u.Fd(a);p=window.location;k.protocol+k.host!==p.protocol+p.host&&window.XDomainRequest&&!("withCredentials"in
h)?(h=new window.XDomainRequest,h.onload=function(){c(h.responseText)},h.onerror=d,h.onprogress=m(),h.ontimeout=d):(g="file:"==k.protocol||"file:"==p.protocol,h.onreadystatechange=function(){4===h.readyState&&(200===h.status||g&&0===h.status?c(h.responseText):d(h.responseText))});try{h.open("GET",a,f),e&&(h.withCredentials=f)}catch(n){d(n);return}try{h.send()}catch(s){d(s)}};
u.Kd=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?u.log("LocalStorage Full (VideoJS)",d):18==d.code?u.log("LocalStorage not allowed (VideoJS)",d):u.log("LocalStorage Error (VideoJS)",d)}};u.qc=function(a){a.match(/^https?:\/\//)||(a=u.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
u.Fd=function(a){var c,d,e,g;g="protocol hostname port pathname search hash host".split(" ");d=u.e("a",{href:a});if(e=""===d.host&&"file:"!==d.protocol)c=u.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c);a={};for(var h=0;h<g.length;h++)a[g[h]]=d[g[h]];e&&document.body.removeChild(c);return a};function D(){}var E=window.console||{log:D,warn:D,error:D};
function F(a,c){var d=Array.prototype.slice.call(c);a?d.unshift(a.toUpperCase()+":"):a="log";u.log.history.push(d);d.unshift("VIDEOJS:");if(E[a].apply)E[a].apply(E,d);else E[a](d.join(" "))}u.log=function(){F(j,arguments)};u.log.history=[];u.log.error=function(){F("error",arguments)};u.log.warn=function(){F("warn",arguments)};
u.od=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:u.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:u.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};u.oa={};u.oa.Jb=function(a,c){var d,e,g;a=u.l.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=u.l.Sa(e)&&u.l.Sa(g)?u.oa.Jb(e,g):c[d]);return a};
u.a=u.pa.extend({h:function(a,c,d){this.c=a;this.j=u.l.copy(this.j);c=this.options(c);this.T=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+u.v++);this.wd=c.name||j;this.b=c.el||this.e();this.N=[];this.Oa={};this.Pa={};this.uc();this.J(d);if(c.Ec!==l){var e,g;e=u.bind(this.m(),this.m().reportUserActivity);this.d("touchstart",function(){e();clearInterval(g);g=setInterval(e,250)});a=function(){e();clearInterval(g)};this.d("touchmove",e);this.d("touchend",a);this.d("touchcancel",a)}}});t=u.a.prototype;
t.dispose=function(){this.k({type:"dispose",bubbles:l});if(this.N)for(var a=this.N.length-1;0<=a;a--)this.N[a].dispose&&this.N[a].dispose();this.Pa=this.Oa=this.N=j;this.p();this.b.parentNode&&this.b.parentNode.removeChild(this.b);u.Dc(this.b);this.b=j};t.c=f;t.m=q("c");t.options=function(a){return a===b?this.j:this.j=u.oa.Jb(this.j,a)};t.e=function(a,c){return u.e(a,c)};t.w=q("b");t.ia=function(){return this.u||this.b};t.id=q("T");t.name=q("wd");t.children=q("N");t.qd=function(a){return this.Oa[a]};
t.ja=function(a){return this.Pa[a]};t.V=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||u.$(e),c.name=e,d=new window.videojs[d](this.c||this,c)):d=a;this.N.push(d);"function"===typeof d.id&&(this.Oa[d.id()]=d);(e=e||d.name&&d.name())&&(this.Pa[e]=d);"function"===typeof d.el&&d.el()&&this.ia().appendChild(d.el());return d};
t.removeChild=function(a){"string"===typeof a&&(a=this.ja(a));if(a&&this.N){for(var c=l,d=this.N.length-1;0<=d;d--)if(this.N[d]===a){c=f;this.N.splice(d,1);break}c&&(this.Oa[a.id]=j,this.Pa[a.name]=j,(c=a.w())&&c.parentNode===this.ia()&&this.ia().removeChild(a.w()))}};t.uc=function(){var a,c,d,e;a=this;if(c=this.options().children)if(c instanceof Array)for(var g=0;g<c.length;g++)d=c[g],"string"==typeof d?(e=d,d={}):e=d.name,a[e]=a.V(e,d);else u.l.wa(c,function(c,d){d!==l&&(a[c]=a.V(c,d))})};t.S=r("");
t.d=function(a,c){u.d(this.b,a,u.bind(this,c));return this};t.p=function(a,c){u.p(this.b,a,c);return this};t.W=function(a,c){u.W(this.b,a,u.bind(this,c));return this};t.k=function(a,c){u.k(this.b,a,c);return this};t.J=function(a){a&&(this.ca?a.call(this):(this.Za===b&&(this.Za=[]),this.Za.push(a)));return this};t.Ea=function(){this.ca=f;var a=this.Za;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.Za=[];this.k("ready")}};t.o=function(a){u.o(this.b,a);return this};
t.r=function(a){u.r(this.b,a);return this};t.show=function(){this.b.style.display="block";return this};t.G=function(){this.b.style.display="none";return this};function G(a){a.r("vjs-lock-showing")}t.disable=function(){this.G();this.show=m()};t.width=function(a,c){return H(this,"width",a,c)};t.height=function(a,c){return H(this,"height",a,c)};t.jd=function(a,c){return this.width(a,f).height(c)};
function H(a,c,d,e){if(d!==b)return a.b.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px",e||a.k("resize"),a;if(!a.b)return 0;d=a.b.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.b["offset"+u.$(c)],10)}
function I(a){var c,d,e,g,h,k,p,n;c=0;d=j;a.d("touchstart",function(a){1===a.touches.length&&(d=a.touches[0],c=(new Date).getTime(),g=f)});a.d("touchmove",function(a){1<a.touches.length?g=l:d&&(k=a.touches[0].pageX-d.pageX,p=a.touches[0].pageY-d.pageY,n=Math.sqrt(k*k+p*p),22<n&&(g=l))});h=function(){g=l};a.d("touchleave",h);a.d("touchcancel",h);a.d("touchend",function(a){d=j;g===f&&(e=(new Date).getTime()-c,250>e&&(a.preventDefault(),this.k("tap")))})}
u.s=u.a.extend({h:function(a,c){u.a.call(this,a,c);I(this);this.d("tap",this.q);this.d("click",this.q);this.d("focus",this.Va);this.d("blur",this.Ua)}});t=u.s.prototype;
t.e=function(a,c){var d;c=u.l.B({className:this.S(),role:"button","aria-live":"polite",tabIndex:0},c);d=u.a.prototype.e.call(this,a,c);c.innerHTML||(this.u=u.e("div",{className:"vjs-control-content"}),this.wb=u.e("span",{className:"vjs-control-text",innerHTML:this.sa||"Need Text"}),this.u.appendChild(this.wb),d.appendChild(this.u));return d};t.S=function(){return"vjs-control "+u.a.prototype.S.call(this)};t.q=m();t.Va=function(){u.d(document,"keyup",u.bind(this,this.da))};
t.da=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.q()};t.Ua=function(){u.p(document,"keyup",u.bind(this,this.da))};u.Q=u.a.extend({h:function(a,c){u.a.call(this,a,c);this.ad=this.ja(this.j.barName);this.handle=this.ja(this.j.handleName);this.d("mousedown",this.Wa);this.d("touchstart",this.Wa);this.d("focus",this.Va);this.d("blur",this.Ua);this.d("click",this.q);this.c.d("controlsvisible",u.bind(this,this.update));a.d(this.Ac,u.bind(this,this.update));this.R={}}});t=u.Q.prototype;
t.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=u.l.B({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return u.a.prototype.e.call(this,a,c)};t.Wa=function(a){a.preventDefault();u.bd();this.R.move=u.bind(this,this.Kb);this.R.end=u.bind(this,this.Lb);u.d(document,"mousemove",this.R.move);u.d(document,"mouseup",this.R.end);u.d(document,"touchmove",this.R.move);u.d(document,"touchend",this.R.end);this.Kb(a)};
t.Lb=function(){u.Td();u.p(document,"mousemove",this.R.move,l);u.p(document,"mouseup",this.R.end,l);u.p(document,"touchmove",this.R.move,l);u.p(document,"touchend",this.R.end,l);this.update()};t.update=function(){if(this.b){var a,c=this.Cb(),d=this.handle,e=this.ad;isNaN(c)&&(c=0);a=c;if(d){a=this.b.offsetWidth;var g=d.w().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.w().style.left=u.round(100*c,2)+"%"}e.w().style.width=u.round(100*a,2)+"%"}};
function J(a,c){var d,e,g,h;d=a.b;e=u.od(d);h=g=d.offsetWidth;d=a.handle;if(a.j.Vd)return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.w().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.w().offsetWidth,g+=d/2,h-=d);return Math.max(0,Math.min(1,(e-g)/h))}t.Va=function(){u.d(document,"keyup",u.bind(this,this.da))};
t.da=function(a){37==a.which?(a.preventDefault(),this.Gc()):39==a.which&&(a.preventDefault(),this.Hc())};t.Ua=function(){u.p(document,"keyup",u.bind(this,this.da))};t.q=function(a){a.stopImmediatePropagation();a.preventDefault()};u.Y=u.a.extend();u.Y.prototype.defaultValue=0;u.Y.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=u.l.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return u.a.prototype.e.call(this,"div",c)};u.ga=u.a.extend();
function ca(a,c){a.V(c);c.d("click",u.bind(a,function(){G(this)}))}u.ga.prototype.e=function(){var a=this.options().kc||"ul";this.u=u.e(a,{className:"vjs-menu-content"});a=u.a.prototype.e.call(this,"div",{append:this.u,className:"vjs-menu"});a.appendChild(this.u);u.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};u.I=u.s.extend({h:function(a,c){u.s.call(this,a,c);this.selected(c.selected)}});
u.I.prototype.e=function(a,c){return u.s.prototype.e.call(this,"li",u.l.B({className:"vjs-menu-item",innerHTML:this.j.label},c))};u.I.prototype.q=function(){this.selected(f)};u.I.prototype.selected=function(a){a?(this.o("vjs-selected"),this.b.setAttribute("aria-selected",f)):(this.r("vjs-selected"),this.b.setAttribute("aria-selected",l))};
u.L=u.s.extend({h:function(a,c){u.s.call(this,a,c);this.za=this.va();this.V(this.za);this.O&&0===this.O.length&&this.G();this.d("keyup",this.da);this.b.setAttribute("aria-haspopup",f);this.b.setAttribute("role","button")}});t=u.L.prototype;t.ra=l;t.va=function(){var a=new u.ga(this.c);this.options().title&&a.ia().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.$(this.options().title),Rd:-1}));if(this.O=this.createItems())for(var c=0;c<this.O.length;c++)ca(a,this.O[c]);return a};
t.ua=m();t.S=function(){return this.className+" vjs-menu-button "+u.s.prototype.S.call(this)};t.Va=m();t.Ua=m();t.q=function(){this.W("mouseout",u.bind(this,function(){G(this.za);this.b.blur()}));this.ra?K(this):L(this)};t.da=function(a){a.preventDefault();32==a.which||13==a.which?this.ra?K(this):L(this):27==a.which&&this.ra&&K(this)};function L(a){a.ra=f;a.za.o("vjs-lock-showing");a.b.setAttribute("aria-pressed",f);a.O&&0<a.O.length&&a.O[0].w().focus()}
function K(a){a.ra=l;G(a.za);a.b.setAttribute("aria-pressed",l)}u.F=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&u.l.B(this,a);this.message||(this.message=u.F.gd[this.code]||"")};u.F.prototype.code=0;u.F.prototype.message="";u.F.prototype.status=j;u.F.Ra="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
u.F.gd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};for(var M=0;M<u.F.Ra.length;M++)u.F[u.F.Ra[M]]=M,u.F.prototype[u.F.Ra[M]]=M;
var N,O,P,Q;
N=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
O=N[0];for(Q=0;Q<N.length;Q++)if(N[Q][1]in document){P=N[Q];break}if(P){u.Na.Ab={};for(Q=0;Q<P.length;Q++)u.Na.Ab[O[Q]]=P[Q]}
u.Player=u.a.extend({h:function(a,c,d){this.P=a;a.id=a.id||"vjs_video_"+u.v++;c=u.l.B(da(a),c);this.z={};this.Bc=c.poster;this.xb=c.controls;a.controls=l;c.Ec=l;u.a.call(this,this,c,d);this.controls()?this.o("vjs-controls-enabled"):this.o("vjs-controls-disabled");u.Aa[this.T]=this;c.plugins&&u.l.wa(c.plugins,function(a,c){this[a](c)},this);var e,g,h,k,p,n;e=u.bind(this,this.reportUserActivity);this.d("mousedown",function(){e();clearInterval(g);g=setInterval(e,250)});this.d("mousemove",function(a){if(a.screenX!=
p||a.screenY!=n)p=a.screenX,n=a.screenY,e()});this.d("mouseup",function(){e();clearInterval(g)});this.d("keydown",e);this.d("keyup",e);h=setInterval(u.bind(this,function(){this.na&&(this.na=l,this.userActive(f),clearTimeout(k),k=setTimeout(u.bind(this,function(){this.na||this.userActive(l)}),2E3))}),250);this.d("dispose",function(){clearInterval(h);clearTimeout(k)})}});t=u.Player.prototype;t.j=u.options;
t.dispose=function(){this.k("dispose");this.p("dispose");u.Aa[this.T]=j;this.P&&this.P.player&&(this.P.player=j);this.b&&this.b.player&&(this.b.player=j);clearInterval(this.Ya);this.Ba();this.g&&this.g.dispose();u.a.prototype.dispose.call(this)};function da(a){var c={sources:[],tracks:[]};u.l.B(c,u.Bb(a));if(a.hasChildNodes()){var d,e,g,h;a=a.childNodes;g=0;for(h=a.length;g<h;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(u.Bb(d)):"track"===e&&c.tracks.push(u.Bb(d))}return c}
t.e=function(){var a=this.b=u.a.prototype.e.call(this,"div"),c=this.P;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var d,e,g,h,k;d=c.childNodes;e=d.length;for(k=[];e--;)g=d[e],h=g.nodeName.toLowerCase(),"track"===h&&k.push(g);for(d=0;d<k.length;d++)c.removeChild(k[d])}a.id=c.id;a.className=c.className;c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.o("vjs-paused");this.width(this.j.width,f);this.height(this.j.height,f);c.parentNode&&c.parentNode.insertBefore(a,
c);u.Db(c,a);this.b=a;this.d("loadstart",this.Bd);this.d("ended",this.xd);this.d("play",this.Nb);this.d("firstplay",this.zd);this.d("pause",this.Mb);this.d("progress",this.Cd);this.d("durationchange",this.yc);this.d("fullscreenchange",this.Ad);return a};
function R(a,c,d){a.g&&(a.ca=l,a.g.dispose(),a.Hb&&(a.Hb=l,clearInterval(a.Ya)),a.Ib&&S(a),a.g=l);"Html5"!==c&&a.P&&(u.f.mc(a.P),a.P=j);a.Ca=c;a.ca=l;var e=u.l.B({source:d,parentEl:a.b},a.j[c.toLowerCase()]);d&&(d.src==a.z.src&&0<a.z.currentTime&&(e.startTime=a.z.currentTime),a.z.src=d.src);a.g=new window.videojs[c](a,e);a.g.J(function(){this.c.Ea();if(!this.n.progressEvents){var a=this.c;a.Hb=f;a.Ya=setInterval(u.bind(a,function(){this.z.sb<this.buffered().end(0)?this.k("progress"):1==this.bufferedPercent()&&
(clearInterval(this.Ya),this.k("progress"))}),500);a.g&&a.g.W("progress",function(){this.n.progressEvents=f;var a=this.c;a.Hb=l;clearInterval(a.Ya)})}this.n.timeupdateEvents||(a=this.c,a.Ib=f,a.d("play",a.Kc),a.d("pause",a.Ba),a.g&&a.g.W("timeupdate",function(){this.n.timeupdateEvents=f;S(this.c)}))})}function S(a){a.Ib=l;a.Ba();a.p("play",a.Kc);a.p("pause",a.Ba)}t.Kc=function(){this.lc&&this.Ba();this.lc=setInterval(u.bind(this,function(){this.k("timeupdate")}),250)};
t.Ba=function(){clearInterval(this.lc);this.k("timeupdate")};t.Bd=function(){this.error(j);this.paused()?(T(this,l),this.W("play",function(){T(this,f)})):this.k("firstplay")};t.tc=l;function T(a,c){c!==b&&a.tc!==c&&((a.tc=c)?(a.o("vjs-has-started"),a.k("firstplay")):a.r("vjs-has-started"))}t.Nb=function(){u.r(this.b,"vjs-paused");u.o(this.b,"vjs-playing")};t.zd=function(){this.j.starttime&&this.currentTime(this.j.starttime);this.o("vjs-has-started")};
t.Mb=function(){u.r(this.b,"vjs-playing");u.o(this.b,"vjs-paused")};t.Cd=function(){1==this.bufferedPercent()&&this.k("loadedalldata")};t.xd=function(){this.j.loop&&(this.currentTime(0),this.play())};t.yc=function(){var a=U(this,"duration");a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.o("vjs-live"):this.r("vjs-live"))};t.Ad=function(){this.isFullscreen()?this.o("vjs-fullscreen"):this.r("vjs-fullscreen")};
function V(a,c,d){if(a.g&&!a.g.ca)a.g.J(function(){this[c](d)});else try{a.g[c](d)}catch(e){throw u.log(e),e;}}function U(a,c){if(a.g&&a.g.ca)try{return a.g[c]()}catch(d){throw a.g[c]===b?u.log("Video.js: "+c+" method not defined for "+a.Ca+" playback technology.",d):"TypeError"==d.name?(u.log("Video.js: "+c+" unavailable on "+a.Ca+" playback technology element.",d),a.g.ca=l):u.log(d),d;}}t.play=function(){V(this,"play");return this};t.pause=function(){V(this,"pause");return this};
t.paused=function(){return U(this,"paused")===l?l:f};t.currentTime=function(a){return a!==b?(V(this,"setCurrentTime",a),this.Ib&&this.k("timeupdate"),this):this.z.currentTime=U(this,"currentTime")||0};t.duration=function(a){if(a!==b)return this.z.duration=parseFloat(a),this;this.z.duration===b&&this.yc();return this.z.duration||0};t.buffered=function(){var a=U(this,"buffered"),c=a.length-1,d=this.z.sb=this.z.sb||0;a&&(0<=c&&a.end(c)!==d)&&(d=a.end(c),this.z.sb=d);return u.yb(0,d)};
t.bufferedPercent=function(){return this.duration()?this.buffered().end(0)/this.duration():0};t.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.z.volume=a,V(this,"setVolume",a),u.Kd(a),this;a=parseFloat(U(this,"volume"));return isNaN(a)?1:a};t.muted=function(a){return a!==b?(V(this,"setMuted",a),this):U(this,"muted")||l};t.ab=function(){return U(this,"supportsFullScreen")||l};t.vc=l;t.isFullscreen=function(a){return a!==b?(this.vc=!!a,this):this.vc};
t.isFullScreen=function(a){u.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');return this.isFullscreen(a)};
t.requestFullscreen=function(){var a=u.Na.Ab;this.isFullscreen(f);a?(u.d(document,a.fullscreenchange,u.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);this.isFullscreen()===l&&u.p(document,a.fullscreenchange,arguments.callee);this.k("fullscreenchange")})),this.b[a.requestFullscreen]()):this.g.ab()?V(this,"enterFullScreen"):(this.sd=f,this.kd=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.pc)),document.documentElement.style.overflow="hidden",
u.o(document.body,"vjs-full-window"),this.k("enterFullWindow"),this.k("fullscreenchange"));return this};t.exitFullscreen=function(){var a=u.Na.Ab;this.isFullscreen(l);if(a)document[a.exitFullscreen]();else this.g.ab()?V(this,"exitFullScreen"):(ea(this),this.k("fullscreenchange"));return this};t.pc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():ea(this))};
function ea(a){a.sd=l;u.p(document,"keydown",a.pc);document.documentElement.style.overflow=a.kd;u.r(document.body,"vjs-full-window");a.k("exitFullWindow")}
t.src=function(a){if(a===b)return U(this,"src");if(a instanceof Array){var c;a:{c=a;for(var d=0,e=this.j.techOrder;d<e.length;d++){var g=u.$(e[d]),h=window.videojs[g];if(h){if(h.isSupported())for(var k=0,p=c;k<p.length;k++){var n=p[k];if(h.canPlaySource(n)){c={source:n,g:g};break a}}}else u.log.error('The "'+g+'" tech is undefined. Skipped browser support check for that tech.')}c=l}c?(a=c.source,c=c.g,c==this.Ca?this.src(a):R(this,c,a)):(this.error({code:4,message:this.options().notSupportedMessage}),
this.Ea())}else a instanceof Object?window.videojs[this.Ca].canPlaySource(a)?this.src(a.src):this.src([a]):(this.z.src=a,this.ca?(V(this,"src",a),"auto"==this.j.preload&&this.load(),this.j.autoplay&&this.play()):this.J(function(){this.src(a)}));return this};t.load=function(){V(this,"load");return this};t.currentSrc=function(){return U(this,"currentSrc")||this.z.src||""};t.Xa=function(a){return a!==b?(V(this,"setPreload",a),this.j.preload=a,this):U(this,"preload")};
t.autoplay=function(a){return a!==b?(V(this,"setAutoplay",a),this.j.autoplay=a,this):U(this,"autoplay")};t.loop=function(a){return a!==b?(V(this,"setLoop",a),this.j.loop=a,this):U(this,"loop")};t.poster=function(a){if(a===b)return this.Bc;this.Bc=a;V(this,"setPoster",a);this.k("posterchange")};
t.controls=function(a){return a!==b?(a=!!a,this.xb!==a&&((this.xb=a)?(this.r("vjs-controls-disabled"),this.o("vjs-controls-enabled"),this.k("controlsenabled")):(this.r("vjs-controls-enabled"),this.o("vjs-controls-disabled"),this.k("controlsdisabled"))),this):this.xb};u.Player.prototype.Sb;t=u.Player.prototype;
t.usingNativeControls=function(a){return a!==b?(a=!!a,this.Sb!==a&&((this.Sb=a)?(this.o("vjs-using-native-controls"),this.k("usingnativecontrols")):(this.r("vjs-using-native-controls"),this.k("usingcustomcontrols"))),this):this.Sb};t.ba=j;t.error=function(a){if(a===b)return this.ba;if(a===j)return this.ba=a,this.r("vjs-error"),this;this.ba=a instanceof u.F?a:new u.F(a);this.k("error");this.o("vjs-error");u.log.error("(CODE:"+this.ba.code+" "+u.F.Ra[this.ba.code]+")",this.ba.message,this.ba);return this};
t.ended=function(){return U(this,"ended")};t.seeking=function(){return U(this,"seeking")};t.na=f;t.reportUserActivity=function(){this.na=f};t.Rb=f;t.userActive=function(a){return a!==b?(a=!!a,a!==this.Rb&&((this.Rb=a)?(this.na=f,this.r("vjs-user-inactive"),this.o("vjs-user-active"),this.k("useractive")):(this.na=l,this.g&&this.g.W("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.r("vjs-user-active"),this.o("vjs-user-inactive"),this.k("userinactive"))),this):this.Rb};
t.playbackRate=function(a){return a!==b?(V(this,"setPlaybackRate",a),this):this.g&&this.g.n&&this.g.n.playbackRate?U(this,"playbackRate"):1};u.Ha=u.a.extend();u.Ha.prototype.j={ee:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{}}};u.Ha.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})};
u.Yb=u.a.extend({h:function(a,c){u.a.call(this,a,c)}});u.Yb.prototype.e=function(){var a=u.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});this.u=u.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">Stream Type </span>LIVE',"aria-live":"off"});a.appendChild(this.u);return a};u.ac=u.s.extend({h:function(a,c){u.s.call(this,a,c);a.d("play",u.bind(this,this.Nb));a.d("pause",u.bind(this,this.Mb))}});t=u.ac.prototype;t.sa="Play";
t.S=function(){return"vjs-play-control "+u.s.prototype.S.call(this)};t.q=function(){this.c.paused()?this.c.play():this.c.pause()};t.Nb=function(){u.r(this.b,"vjs-paused");u.o(this.b,"vjs-playing");this.b.children[0].children[0].innerHTML="Pause"};t.Mb=function(){u.r(this.b,"vjs-playing");u.o(this.b,"vjs-paused");this.b.children[0].children[0].innerHTML="Play"};u.eb=u.a.extend({h:function(a,c){u.a.call(this,a,c);a.d("timeupdate",u.bind(this,this.fa))}});
u.eb.prototype.e=function(){var a=u.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.u=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.u);return a};u.eb.prototype.fa=function(){var a=this.c.$a?this.c.z.currentTime:this.c.currentTime();this.u.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.ya(a,this.c.duration())};
u.fb=u.a.extend({h:function(a,c){u.a.call(this,a,c);a.d("timeupdate",u.bind(this,this.fa))}});u.fb.prototype.e=function(){var a=u.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.u=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});a.appendChild(this.u);return a};
u.fb.prototype.fa=function(){var a=this.c.duration();a&&(this.u.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.ya(a))};u.gc=u.a.extend({h:function(a,c){u.a.call(this,a,c)}});u.gc.prototype.e=function(){return u.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};u.mb=u.a.extend({h:function(a,c){u.a.call(this,a,c);a.d("timeupdate",u.bind(this,this.fa))}});
u.mb.prototype.e=function(){var a=u.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.u=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});a.appendChild(this.u);return a};u.mb.prototype.fa=function(){this.c.duration()&&(this.u.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.ya(this.c.duration()-this.c.currentTime()))};
u.Ia=u.s.extend({h:function(a,c){u.s.call(this,a,c)}});u.Ia.prototype.sa="Fullscreen";u.Ia.prototype.S=function(){return"vjs-fullscreen-control "+u.s.prototype.S.call(this)};u.Ia.prototype.q=function(){this.c.isFullscreen()?(this.c.exitFullscreen(),this.wb.innerHTML="Fullscreen"):(this.c.requestFullscreen(),this.wb.innerHTML="Non-Fullscreen")};u.lb=u.a.extend({h:function(a,c){u.a.call(this,a,c)}});u.lb.prototype.j={children:{seekBar:{}}};
u.lb.prototype.e=function(){return u.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};u.cc=u.Q.extend({h:function(a,c){u.Q.call(this,a,c);a.d("timeupdate",u.bind(this,this.ma));a.J(u.bind(this,this.ma))}});t=u.cc.prototype;t.j={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};t.Ac="timeupdate";t.e=function(){return u.Q.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
t.ma=function(){var a=this.c.$a?this.c.z.currentTime:this.c.currentTime();this.b.setAttribute("aria-valuenow",u.round(100*this.Cb(),2));this.b.setAttribute("aria-valuetext",u.ya(a,this.c.duration()))};t.Cb=function(){return this.c.currentTime()/this.c.duration()};t.Wa=function(a){u.Q.prototype.Wa.call(this,a);this.c.$a=f;this.Wd=!this.c.paused();this.c.pause()};t.Kb=function(a){a=J(this,a)*this.c.duration();a==this.c.duration()&&(a-=0.1);this.c.currentTime(a)};
t.Lb=function(a){u.Q.prototype.Lb.call(this,a);this.c.$a=l;this.Wd&&this.c.play()};t.Hc=function(){this.c.currentTime(this.c.currentTime()+5)};t.Gc=function(){this.c.currentTime(this.c.currentTime()-5)};u.ib=u.a.extend({h:function(a,c){u.a.call(this,a,c);a.d("progress",u.bind(this,this.update))}});u.ib.prototype.e=function(){return u.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})};
u.ib.prototype.update=function(){this.b.style&&(this.b.style.width=u.round(100*this.c.bufferedPercent(),2)+"%")};u.$b=u.a.extend({h:function(a,c){u.a.call(this,a,c)}});u.$b.prototype.e=function(){return u.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})};u.Ka=u.Y.extend({h:function(a,c){u.Y.call(this,a,c);a.d("timeupdate",u.bind(this,this.fa))}});u.Ka.prototype.defaultValue="00:00";
u.Ka.prototype.e=function(){return u.Y.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};u.Ka.prototype.fa=function(){var a=this.c.$a?this.c.z.currentTime:this.c.currentTime();this.b.innerHTML='<span class="vjs-control-text">'+u.ya(a,this.c.duration())+"</span>"};u.ob=u.a.extend({h:function(a,c){u.a.call(this,a,c);a.g&&(a.g.n&&a.g.n.volumeControl===l)&&this.o("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.g.n&&a.g.n.volumeControl===l?this.o("vjs-hidden"):this.r("vjs-hidden")}))}});
u.ob.prototype.j={children:{volumeBar:{}}};u.ob.prototype.e=function(){return u.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};u.nb=u.Q.extend({h:function(a,c){u.Q.call(this,a,c);a.d("volumechange",u.bind(this,this.ma));a.J(u.bind(this,this.ma))}});t=u.nb.prototype;t.ma=function(){this.b.setAttribute("aria-valuenow",u.round(100*this.c.volume(),2));this.b.setAttribute("aria-valuetext",u.round(100*this.c.volume(),2)+"%")};
t.j={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};t.Ac="volumechange";t.e=function(){return u.Q.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};t.Kb=function(a){this.c.muted()&&this.c.muted(l);this.c.volume(J(this,a))};t.Cb=function(){return this.c.muted()?0:this.c.volume()};t.Hc=function(){this.c.volume(this.c.volume()+0.1)};t.Gc=function(){this.c.volume(this.c.volume()-0.1)};
u.hc=u.a.extend({h:function(a,c){u.a.call(this,a,c)}});u.hc.prototype.e=function(){return u.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};u.pb=u.Y.extend();u.pb.prototype.defaultValue="00:00";u.pb.prototype.e=function(){return u.Y.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
u.ha=u.s.extend({h:function(a,c){u.s.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.g&&(a.g.n&&a.g.n.volumeControl===l)&&this.o("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.g.n&&a.g.n.volumeControl===l?this.o("vjs-hidden"):this.r("vjs-hidden")}))}});u.ha.prototype.e=function(){return u.s.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};
u.ha.prototype.q=function(){this.c.muted(this.c.muted()?l:f)};u.ha.prototype.update=function(){var a=this.c.volume(),c=3;0===a||this.c.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.c.muted()?"Unmute"!=this.b.children[0].children[0].innerHTML&&(this.b.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.b.children[0].children[0].innerHTML&&(this.b.children[0].children[0].innerHTML="Mute");for(a=0;4>a;a++)u.r(this.b,"vjs-vol-"+a);u.o(this.b,"vjs-vol-"+c)};
u.qa=u.L.extend({h:function(a,c){u.L.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.g&&(a.g.n&&a.g.n.Nc===l)&&this.o("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.g.n&&a.g.n.Nc===l?this.o("vjs-hidden"):this.r("vjs-hidden")}));this.o("vjs-menu-button")}});u.qa.prototype.va=function(){var a=new u.ga(this.c,{kc:"div"}),c=new u.nb(this.c,u.l.B({Vd:f},this.j.le));a.V(c);return a};u.qa.prototype.q=function(){u.ha.prototype.q.call(this);u.L.prototype.q.call(this)};
u.qa.prototype.e=function(){return u.s.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.qa.prototype.update=u.ha.prototype.update;u.bc=u.L.extend({h:function(a,c){u.L.call(this,a,c);this.Mc();this.Lc();a.d("loadstart",u.bind(this,this.Mc));a.d("ratechange",u.bind(this,this.Lc))}});t=u.bc.prototype;
t.e=function(){var a=u.a.prototype.e.call(this,"div",{className:"vjs-playback-rate vjs-menu-button vjs-control",innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">Playback Rate</span></div>'});this.xc=u.e("div",{className:"vjs-playback-rate-value",innerHTML:1});a.appendChild(this.xc);return a};t.va=function(){var a=new u.ga(this.m()),c=this.m().options().playbackRates;if(c)for(var d=c.length-1;0<=d;d--)a.V(new u.kb(this.m(),{rate:c[d]+"x"}));return a};
t.ma=function(){this.w().setAttribute("aria-valuenow",this.m().playbackRate())};t.q=function(){for(var a=this.m().playbackRate(),c=this.m().options().playbackRates,d=c[0],e=0;e<c.length;e++)if(c[e]>a){d=c[e];break}this.m().playbackRate(d)};function fa(a){return a.m().g&&a.m().g.n.playbackRate&&a.m().options().playbackRates&&0<a.m().options().playbackRates.length}t.Mc=function(){fa(this)?this.r("vjs-hidden"):this.o("vjs-hidden")};
t.Lc=function(){fa(this)&&(this.xc.innerHTML=this.m().playbackRate()+"x")};u.kb=u.I.extend({kc:"button",h:function(a,c){var d=this.label=c.rate,e=this.Cc=parseFloat(d,10);c.label=d;c.selected=1===e;u.I.call(this,a,c);this.m().d("ratechange",u.bind(this,this.update))}});u.kb.prototype.q=function(){u.I.prototype.q.call(this);this.m().playbackRate(this.Cc)};u.kb.prototype.update=function(){this.selected(this.m().playbackRate()==this.Cc)};
u.Ja=u.s.extend({h:function(a,c){u.s.call(this,a,c);a.poster()&&this.src(a.poster());(!a.poster()||!a.controls())&&this.G();a.d("posterchange",u.bind(this,function(){this.src(a.poster())}));a.d("play",u.bind(this,this.G))}});var ga="backgroundSize"in u.A.style;u.Ja.prototype.e=function(){var a=u.e("div",{className:"vjs-poster",tabIndex:-1});ga||a.appendChild(u.e("img"));return a};u.Ja.prototype.src=function(a){var c=this.w();a!==b&&(ga?c.style.backgroundImage='url("'+a+'")':c.firstChild.src=a)};
u.Ja.prototype.q=function(){this.m().controls()&&this.c.play()};u.Zb=u.a.extend({h:function(a,c){u.a.call(this,a,c);a.d("canplay",u.bind(this,this.G));a.d("canplaythrough",u.bind(this,this.G));a.d("playing",u.bind(this,this.G));a.d("seeking",u.bind(this,this.show));a.d("seeked",u.bind(this,this.G));a.d("ended",u.bind(this,this.G));a.d("waiting",u.bind(this,this.show))}});u.Zb.prototype.e=function(){return u.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};u.bb=u.s.extend();
u.bb.prototype.e=function(){return u.s.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};u.bb.prototype.q=function(){this.c.play()};u.gb=u.a.extend({h:function(a,c){u.a.call(this,a,c);this.update();a.d("error",u.bind(this,this.update))}});u.gb.prototype.e=function(){var a=u.a.prototype.e.call(this,"div",{className:"vjs-error-display"});this.u=u.e("div");a.appendChild(this.u);return a};
u.gb.prototype.update=function(){this.m().error()&&(this.u.innerHTML=this.m().error().message)};
u.t=u.a.extend({h:function(a,c,d){c=c||{};c.Ec=l;u.a.call(this,a,c,d);var e,g;g=this;e=this.m();a=function(){if(e.controls()&&!e.usingNativeControls()){var a;g.d("mousedown",g.q);g.d("touchstart",function(c){c.preventDefault();a=this.c.userActive()});g.d("touchmove",function(){a&&this.m().reportUserActivity()});I(g);g.d("tap",g.Dd)}};c=u.bind(g,g.Hd);this.J(a);e.d("controlsenabled",a);e.d("controlsdisabled",c);this.J(function(){this.networkState&&0<this.networkState()&&this.m().k("loadstart")})}});
t=u.t.prototype;t.Hd=function(){this.p("tap");this.p("touchstart");this.p("touchmove");this.p("touchleave");this.p("touchcancel");this.p("touchend");this.p("click");this.p("mousedown")};t.q=function(a){0===a.button&&this.m().controls()&&(this.m().paused()?this.m().play():this.m().pause())};t.Dd=function(){this.m().userActive(!this.m().userActive())};t.Pb=m();t.n={volumeControl:f,fullscreenResize:l,playbackRate:l,progressEvents:l,timeupdateEvents:l};u.media={};
u.f=u.t.extend({h:function(a,c,d){this.n.volumeControl=u.f.dd();this.n.playbackRate=u.f.cd();this.n.movingMediaElementInDOM=!u.Sc;this.n.fullscreenResize=f;u.t.call(this,a,c,d);for(d=u.f.hb.length-1;0<=d;d--)u.d(this.b,u.f.hb[d],u.bind(this,this.md));if((c=c.source)&&this.b.currentSrc!==c.src)this.b.src=c.src;if(u.ec&&a.options().nativeControlsForTouch!==l){var e,g,h,k;e=this;g=this.m();c=g.controls();e.b.controls=!!c;h=function(){e.b.controls=f};k=function(){e.b.controls=l};g.d("controlsenabled",
h);g.d("controlsdisabled",k);c=function(){g.p("controlsenabled",h);g.p("controlsdisabled",k)};e.d("dispose",c);g.d("usingcustomcontrols",c);g.usingNativeControls(f)}a.J(function(){this.P&&(this.j.autoplay&&this.paused())&&(delete this.P.poster,this.play())});this.Ea()}});t=u.f.prototype;t.dispose=function(){u.t.prototype.dispose.call(this)};
t.e=function(){var a=this.c,c=a.P,d;if(!c||this.n.movingMediaElementInDOM===l)c?(d=c.cloneNode(l),u.f.mc(c),c=d,a.P=j):c=u.e("video",{id:a.id()+"_html5_api",className:"vjs-tech"}),c.player=a,u.Db(c,a.w());d=["autoplay","preload","loop","muted"];for(var e=d.length-1;0<=e;e--){var g=d[e];a.j[g]!==j&&(c[g]=a.j[g])}return c};t.md=function(a){"error"==a.type?this.m().error(this.error().code):(a.bubbles=l,this.m().k(a))};t.play=function(){this.b.play()};t.pause=function(){this.b.pause()};t.paused=function(){return this.b.paused};
t.currentTime=function(){return this.b.currentTime};t.Jd=function(a){try{this.b.currentTime=a}catch(c){u.log(c,"Video is not ready. (Video.js)")}};t.duration=function(){return this.b.duration||0};t.buffered=function(){return this.b.buffered};t.volume=function(){return this.b.volume};t.Pd=function(a){this.b.volume=a};t.muted=function(){return this.b.muted};t.Md=function(a){this.b.muted=a};t.width=function(){return this.b.offsetWidth};t.height=function(){return this.b.offsetHeight};
t.ab=function(){return"function"==typeof this.b.webkitEnterFullScreen&&(/Android/.test(u.M)||!/Chrome|Mac OS X 10.5/.test(u.M))?f:l};t.nc=function(){var a=this.b;a.paused&&a.networkState<=a.Yd?(this.b.play(),setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};t.nd=function(){this.b.webkitExitFullScreen()};t.src=function(a){this.b.src=a};t.load=function(){this.b.load()};t.currentSrc=function(){return this.b.currentSrc};t.poster=function(){return this.b.poster};
t.Pb=function(a){this.b.poster=a};t.Xa=function(){return this.b.Xa};t.Od=function(a){this.b.Xa=a};t.autoplay=function(){return this.b.autoplay};t.Id=function(a){this.b.autoplay=a};t.controls=function(){return this.b.controls};t.loop=function(){return this.b.loop};t.Ld=function(a){this.b.loop=a};t.error=function(){return this.b.error};t.seeking=function(){return this.b.seeking};t.ended=function(){return this.b.ended};t.playbackRate=function(){return this.b.playbackRate};
t.Nd=function(a){this.b.playbackRate=a};t.networkState=function(){return this.b.networkState};u.f.isSupported=function(){try{u.A.volume=0.5}catch(a){return l}return!!u.A.canPlayType};u.f.tb=function(a){try{return!!u.A.canPlayType(a.type)}catch(c){return""}};u.f.dd=function(){var a=u.A.volume;u.A.volume=a/2+0.1;return a!==u.A.volume};u.f.cd=function(){var a=u.A.playbackRate;u.A.playbackRate=a/2+0.1;return a!==u.A.playbackRate};var W,ha=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,ia=/^video\/mp4/i;
u.f.zc=function(){4<=u.Tb&&(W||(W=u.A.constructor.prototype.canPlayType),u.A.constructor.prototype.canPlayType=function(a){return a&&ha.test(a)?"maybe":W.call(this,a)});u.Wc&&(W||(W=u.A.constructor.prototype.canPlayType),u.A.constructor.prototype.canPlayType=function(a){return a&&ia.test(a)?"maybe":W.call(this,a)})};u.f.Ud=function(){var a=u.A.constructor.prototype.canPlayType;u.A.constructor.prototype.canPlayType=W;W=j;return a};u.f.zc();u.f.hb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
u.f.mc=function(a){if(a){a.player=j;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
u.i=u.t.extend({h:function(a,c,d){u.t.call(this,a,c,d);var e=c.source;d=c.parentEl;var g=this.b=u.e("div",{id:a.id()+"_temp_flash"}),h=a.id()+"_flash_api";a=a.j;var k=u.l.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.Xa,loop:a.loop,muted:a.muted},c.flashVars),p=u.l.B({wmode:"opaque",bgcolor:"#000000"},c.params),n=u.l.B({id:h,name:h,"class":"vjs-tech"},c.attributes),s;e&&(e.type&&u.i.ud(e.type)?
(a=u.i.Ic(e.src),k.rtmpConnection=encodeURIComponent(a.vb),k.rtmpStream=encodeURIComponent(a.Qb)):k.src=encodeURIComponent(u.qc(e.src)));this.setCurrentTime=function(a){s=a;this.b.vjs_setProperty("currentTime",a)};this.currentTime=function(){return this.seeking()?s:this.b.vjs_getProperty("currentTime")};u.Db(g,d);c.startTime&&this.J(function(){this.load();this.play();this.currentTime(c.startTime)});u.Xb&&this.J(function(){u.d(this.w(),"mousemove",u.bind(this,function(){this.m().k({type:"mousemove",
bubbles:l})}))});if(c.iFrameMode===f&&!u.Xb){var C=u.e("iframe",{id:h+"_iframe",name:h+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});k.readyFunction="ready";k.eventProxyFunction="events";k.errorEventProxyFunction="errors";u.d(C,"load",u.bind(this,function(){var a,d=C.contentWindow;a=C.contentDocument?C.contentDocument:C.contentWindow.document;a.write(u.i.rc(c.swf,k,p,n));d.player=this.c;d.ready=u.bind(this.c,function(c){var d=this.g;d.b=a.getElementById(c);
u.i.ub(d)});d.events=u.bind(this.c,function(a,c){this&&"flash"===this.Ca&&this.k(c)});d.errors=u.bind(this.c,function(a,c){u.log("Flash Error",c)})}));g.parentNode.replaceChild(C,g)}else u.i.ld(c.swf,g,k,p,n)}});t=u.i.prototype;t.dispose=function(){u.t.prototype.dispose.call(this)};t.play=function(){this.b.vjs_play()};t.pause=function(){this.b.vjs_pause()};
t.src=function(a){if(a===b)return this.currentSrc();u.i.td(a)?(a=u.i.Ic(a),this.ge(a.vb),this.he(a.Qb)):(a=u.qc(a),this.b.vjs_src(a));if(this.c.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.currentSrc=function(){var a=this.b.vjs_getProperty("currentSrc");if(a==j){var c=this.rtmpConnection(),d=this.rtmpStream();c&&d&&(a=u.i.Qd(c,d))}return a};t.load=function(){this.b.vjs_load()};t.poster=function(){this.b.vjs_getProperty("poster")};t.Pb=m();t.buffered=function(){return u.yb(0,this.b.vjs_getProperty("buffered"))};
t.ab=r(l);t.nc=r(l);var ja=u.i.prototype,X="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),ka="error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");function la(){var a=X[Y],c=a.charAt(0).toUpperCase()+a.slice(1);ja["set"+c]=function(c){return this.b.vjs_setProperty(a,c)}}
function ma(a){ja[a]=function(){return this.b.vjs_getProperty(a)}}var Y;for(Y=0;Y<X.length;Y++)ma(X[Y]),la();for(Y=0;Y<ka.length;Y++)ma(ka[Y]);u.i.isSupported=function(){return 10<=u.i.version()[0]};u.i.tb=function(a){if(!a.type)return"";a=a.type.replace(/;.*/,"").toLowerCase();if(a in u.i.pd||a in u.i.Jc)return"maybe"};u.i.pd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};u.i.Jc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};
u.i.onReady=function(a){a=u.w(a);var c=a.player||a.parentNode.player,d=c.g;a.player=c;d.b=a;u.i.ub(d)};u.i.ub=function(a){a.w().vjs_getProperty?a.Ea():setTimeout(function(){u.i.ub(a)},50)};u.i.onEvent=function(a,c){u.w(a).player.k(c)};u.i.onError=function(a,c){var d=u.w(a).player,e="FLASH: "+c;"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)};
u.i.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
u.i.ld=function(a,c,d,e,g){a=u.i.rc(a,d,e,g);a=u.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var h=d.childNodes[0];setTimeout(function(){h.style.display="block"},1E3)};
u.i.rc=function(a,c,d,e){var g="",h="",k="";c&&u.l.wa(c,function(a,c){g+=a+"="+c+"&amp;"});d=u.l.B({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);u.l.wa(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'});e=u.l.B({data:a,width:"100%",height:"100%"},e);u.l.wa(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+k+">"+h+"</object>"};u.i.Qd=function(a,c){return a+"&"+c};
u.i.Ic=function(a){var c={vb:"",Qb:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.vb=a.substring(0,d);c.Qb=a.substring(e,a.length);return c};u.i.ud=function(a){return a in u.i.Jc};u.i.Yc=/^rtmp[set]?:\/\//i;u.i.td=function(a){return u.i.Yc.test(a)};
u.Xc=u.a.extend({h:function(a,c,d){u.a.call(this,a,c,d);if(!a.j.sources||0===a.j.sources.length){c=0;for(d=a.j.techOrder;c<d.length;c++){var e=u.$(d[c]),g=window.videojs[e];if(g&&g.isSupported()){R(a,e);break}}}else a.src(a.j.sources)}});u.Player.prototype.textTracks=function(){return this.Da=this.Da||[]};
function na(a,c,d,e,g){var h=a.Da=a.Da||[];g=g||{};g.kind=c;g.label=d;g.language=e;c=u.$(c||"subtitles");var k=new window.videojs[c+"Track"](a,g);h.push(k);k.Qa()&&a.J(function(){setTimeout(function(){k.show()},0)})}function oa(a,c,d){for(var e=a.Da,g=0,h=e.length,k,p;g<h;g++)k=e[g],k.id()===c?(k.show(),p=k):d&&(k.K()==d&&0<k.mode())&&k.disable();(c=p?p.K():d?d:l)&&a.k(c+"trackchange")}
u.C=u.a.extend({h:function(a,c){u.a.call(this,a,c);this.T=c.id||"vjs_"+c.kind+"_"+c.language+"_"+u.v++;this.Fc=c.src;this.hd=c["default"]||c.dflt;this.Sd=c.title;this.de=c.srclang;this.vd=c.label;this.aa=[];this.qb=[];this.ka=this.la=0;this.c.d("fullscreenchange",u.bind(this,this.$c))}});t=u.C.prototype;t.K=q("H");t.src=q("Fc");t.Qa=q("hd");t.title=q("Sd");t.label=q("vd");t.ed=q("aa");t.Zc=q("qb");t.readyState=q("la");t.mode=q("ka");
t.$c=function(){this.b.style.fontSize=this.c.isFullScreen()?140*(screen.width/this.c.width())+"%":""};t.e=function(){return u.a.prototype.e.call(this,"div",{className:"vjs-"+this.H+" vjs-text-track"})};t.show=function(){pa(this);this.ka=2;u.a.prototype.show.call(this)};t.G=function(){pa(this);this.ka=1;u.a.prototype.G.call(this)};
t.disable=function(){2==this.ka&&this.G();this.c.p("timeupdate",u.bind(this,this.update,this.T));this.c.p("ended",u.bind(this,this.reset,this.T));this.reset();this.c.ja("textTrackDisplay").removeChild(this);this.ka=0};function pa(a){0===a.la&&a.load();0===a.ka&&(a.c.d("timeupdate",u.bind(a,a.update,a.T)),a.c.d("ended",u.bind(a,a.reset,a.T)),("captions"===a.H||"subtitles"===a.H)&&a.c.ja("textTrackDisplay").V(a))}
t.load=function(){0===this.la&&(this.la=1,u.get(this.Fc,u.bind(this,this.Ed),u.bind(this,this.yd)))};t.yd=function(a){this.error=a;this.la=3;this.k("error")};t.Ed=function(a){var c,d;a=a.split("\n");for(var e="",g=1,h=a.length;g<h;g++)if(e=u.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=u.trim(a[++g])):c=this.aa.length;c={id:c,index:this.aa.length};d=e.split(" --\x3e ");c.startTime=qa(d[0]);c.xa=qa(d[1]);for(d=[];a[++g]&&(e=u.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.aa.push(c)}this.la=2;this.k("loaded")};
function qa(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}
t.update=function(){if(0<this.aa.length){var a=this.c.options().trackTimeOffset||0,a=this.c.currentTime()+a;if(this.Ob===b||a<this.Ob||this.Ta<=a){var c=this.aa,d=this.c.duration(),e=0,g=l,h=[],k,p,n,s;a>=this.Ta||this.Ta===b?s=this.zb!==b?this.zb:0:(g=f,s=this.Gb!==b?this.Gb:c.length-1);for(;;){n=c[s];if(n.xa<=a)e=Math.max(e,n.xa),n.Ma&&(n.Ma=l);else if(a<n.startTime){if(d=Math.min(d,n.startTime),n.Ma&&(n.Ma=l),!g)break}else g?(h.splice(0,0,n),p===b&&(p=s),k=s):(h.push(n),k===b&&(k=s),p=s),d=Math.min(d,
n.xa),e=Math.max(e,n.startTime),n.Ma=f;if(g)if(0===s)break;else s--;else if(s===c.length-1)break;else s++}this.qb=h;this.Ta=d;this.Ob=e;this.zb=k;this.Gb=p;k=this.qb;p="";a=0;for(c=k.length;a<c;a++)p+='<span class="vjs-tt-cue">'+k[a].text+"</span>";this.b.innerHTML=p;this.k("cuechange")}}};t.reset=function(){this.Ta=0;this.Ob=this.c.duration();this.Gb=this.zb=0};u.Vb=u.C.extend();u.Vb.prototype.H="captions";u.dc=u.C.extend();u.dc.prototype.H="subtitles";u.Wb=u.C.extend();u.Wb.prototype.H="chapters";
u.fc=u.a.extend({h:function(a,c,d){u.a.call(this,a,c,d);if(a.j.tracks&&0<a.j.tracks.length){c=this.c;a=a.j.tracks;for(var e=0;e<a.length;e++)d=a[e],na(c,d.kind,d.label,d.language,d)}}});u.fc.prototype.e=function(){return u.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};u.Z=u.I.extend({h:function(a,c){var d=this.ea=c.track;c.label=d.label();c.selected=d.Qa();u.I.call(this,a,c);this.c.d(d.K()+"trackchange",u.bind(this,this.update))}});
u.Z.prototype.q=function(){u.I.prototype.q.call(this);oa(this.c,this.ea.T,this.ea.K())};u.Z.prototype.update=function(){this.selected(2==this.ea.mode())};u.jb=u.Z.extend({h:function(a,c){c.track={K:function(){return c.kind},m:a,label:function(){return c.kind+" off"},Qa:r(l),mode:r(l)};u.Z.call(this,a,c);this.selected(f)}});u.jb.prototype.q=function(){u.Z.prototype.q.call(this);oa(this.c,this.ea.T,this.ea.K())};
u.jb.prototype.update=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.K()==this.ea.K()&&2==e.mode()&&(g=l);this.selected(g)};u.U=u.L.extend({h:function(a,c){u.L.call(this,a,c);1>=this.O.length&&this.G()}});u.U.prototype.ua=function(){var a=[],c;a.push(new u.jb(this.c,{kind:this.H}));for(var d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.K()===this.H&&a.push(new u.Z(this.c,{track:c}));return a};
u.Fa=u.U.extend({h:function(a,c,d){u.U.call(this,a,c,d);this.b.setAttribute("aria-label","Captions Menu")}});u.Fa.prototype.H="captions";u.Fa.prototype.sa="Captions";u.Fa.prototype.className="vjs-captions-button";u.La=u.U.extend({h:function(a,c,d){u.U.call(this,a,c,d);this.b.setAttribute("aria-label","Subtitles Menu")}});u.La.prototype.H="subtitles";u.La.prototype.sa="Subtitles";u.La.prototype.className="vjs-subtitles-button";
u.Ga=u.U.extend({h:function(a,c,d){u.U.call(this,a,c,d);this.b.setAttribute("aria-label","Chapters Menu")}});t=u.Ga.prototype;t.H="chapters";t.sa="Chapters";t.className="vjs-chapters-button";t.ua=function(){for(var a=[],c,d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.K()===this.H&&a.push(new u.Z(this.c,{track:c}));return a};
t.va=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g,h=this.O=[];c<d;c++)if(e=a[c],e.K()==this.H&&e.Qa()){if(2>e.readyState()){this.ae=e;e.d("loaded",u.bind(this,this.va));return}g=e;break}a=this.za=new u.ga(this.c);a.ia().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.$(this.H),Rd:-1}));if(g){e=g.aa;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new u.cb(this.c,{track:g,cue:k}),h.push(k),a.V(k)}0<this.O.length&&this.show();return a};
u.cb=u.I.extend({h:function(a,c){var d=this.ea=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.xa;u.I.call(this,a,c);d.d("cuechange",u.bind(this,this.update))}});u.cb.prototype.q=function(){u.I.prototype.q.call(this);this.c.currentTime(this.cue.startTime);this.update(this.cue.startTime)};u.cb.prototype.update=function(){var a=this.cue,c=this.c.currentTime();this.selected(a.startTime<=c&&c<a.xa)};
u.l.B(u.Ha.prototype.j.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)u.JSON=window.JSON;else{u.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;u.JSON.parse=function(a,c){function d(a,e){var k,p,n=a[e];if(n&&"object"===typeof n)for(k in n)Object.prototype.hasOwnProperty.call(n,k)&&(p=d(n,k),p!==b?n[k]=p:delete n[k]);return c.call(a,e,n)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
u.ic=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==j&&(a=u.JSON.parse(a||"{}"),videojs(c,a)));else{u.rb();break}else u.Oc||u.rb()};u.rb=function(){setTimeout(u.ic,1)};"complete"===document.readyState?u.Oc=f:u.W(window,"load",function(){u.Oc=f});u.rb();u.Gd=function(a,c){u.Player.prototype[a]=c};var ra=this;ra.Xd=f;function $(a,c){var d=a.split("."),e=ra;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",u);$("_V_",u);$("videojs.options",u.options);$("videojs.players",u.Aa);$("videojs.TOUCH_ENABLED",u.ec);$("videojs.cache",u.ta);$("videojs.Component",u.a);u.a.prototype.player=u.a.prototype.m;u.a.prototype.options=u.a.prototype.options;u.a.prototype.init=u.a.prototype.h;u.a.prototype.dispose=u.a.prototype.dispose;u.a.prototype.createEl=u.a.prototype.e;u.a.prototype.contentEl=u.a.prototype.ia;u.a.prototype.el=u.a.prototype.w;u.a.prototype.addChild=u.a.prototype.V;
u.a.prototype.getChild=u.a.prototype.ja;u.a.prototype.getChildById=u.a.prototype.qd;u.a.prototype.children=u.a.prototype.children;u.a.prototype.initChildren=u.a.prototype.uc;u.a.prototype.removeChild=u.a.prototype.removeChild;u.a.prototype.on=u.a.prototype.d;u.a.prototype.off=u.a.prototype.p;u.a.prototype.one=u.a.prototype.W;u.a.prototype.trigger=u.a.prototype.k;u.a.prototype.triggerReady=u.a.prototype.Ea;u.a.prototype.show=u.a.prototype.show;u.a.prototype.hide=u.a.prototype.G;
u.a.prototype.width=u.a.prototype.width;u.a.prototype.height=u.a.prototype.height;u.a.prototype.dimensions=u.a.prototype.jd;u.a.prototype.ready=u.a.prototype.J;u.a.prototype.addClass=u.a.prototype.o;u.a.prototype.removeClass=u.a.prototype.r;u.a.prototype.buildCSSClass=u.a.prototype.S;u.Player.prototype.ended=u.Player.prototype.ended;$("videojs.MediaLoader",u.Xc);$("videojs.TextTrackDisplay",u.fc);$("videojs.ControlBar",u.Ha);$("videojs.Button",u.s);$("videojs.PlayToggle",u.ac);
$("videojs.FullscreenToggle",u.Ia);$("videojs.BigPlayButton",u.bb);$("videojs.LoadingSpinner",u.Zb);$("videojs.CurrentTimeDisplay",u.eb);$("videojs.DurationDisplay",u.fb);$("videojs.TimeDivider",u.gc);$("videojs.RemainingTimeDisplay",u.mb);$("videojs.LiveDisplay",u.Yb);$("videojs.ErrorDisplay",u.gb);$("videojs.Slider",u.Q);$("videojs.ProgressControl",u.lb);$("videojs.SeekBar",u.cc);$("videojs.LoadProgressBar",u.ib);$("videojs.PlayProgressBar",u.$b);$("videojs.SeekHandle",u.Ka);
$("videojs.VolumeControl",u.ob);$("videojs.VolumeBar",u.nb);$("videojs.VolumeLevel",u.hc);$("videojs.VolumeMenuButton",u.qa);$("videojs.VolumeHandle",u.pb);$("videojs.MuteToggle",u.ha);$("videojs.PosterImage",u.Ja);$("videojs.Menu",u.ga);$("videojs.MenuItem",u.I);$("videojs.MenuButton",u.L);$("videojs.PlaybackRateMenuButton",u.bc);u.L.prototype.createItems=u.L.prototype.ua;u.U.prototype.createItems=u.U.prototype.ua;u.Ga.prototype.createItems=u.Ga.prototype.ua;$("videojs.SubtitlesButton",u.La);
$("videojs.CaptionsButton",u.Fa);$("videojs.ChaptersButton",u.Ga);$("videojs.MediaTechController",u.t);u.t.prototype.features=u.t.prototype.n;u.t.prototype.n.volumeControl=u.t.prototype.n.Nc;u.t.prototype.n.fullscreenResize=u.t.prototype.n.be;u.t.prototype.n.progressEvents=u.t.prototype.n.fe;u.t.prototype.n.timeupdateEvents=u.t.prototype.n.ie;u.t.prototype.setPoster=u.t.prototype.Pb;$("videojs.Html5",u.f);u.f.Events=u.f.hb;u.f.isSupported=u.f.isSupported;u.f.canPlaySource=u.f.tb;
u.f.patchCanPlayType=u.f.zc;u.f.unpatchCanPlayType=u.f.Ud;u.f.prototype.setCurrentTime=u.f.prototype.Jd;u.f.prototype.setVolume=u.f.prototype.Pd;u.f.prototype.setMuted=u.f.prototype.Md;u.f.prototype.setPreload=u.f.prototype.Od;u.f.prototype.setAutoplay=u.f.prototype.Id;u.f.prototype.setLoop=u.f.prototype.Ld;u.f.prototype.enterFullScreen=u.f.prototype.nc;u.f.prototype.exitFullScreen=u.f.prototype.nd;u.f.prototype.playbackRate=u.f.prototype.playbackRate;u.f.prototype.setPlaybackRate=u.f.prototype.Nd;
$("videojs.Flash",u.i);u.i.isSupported=u.i.isSupported;u.i.canPlaySource=u.i.tb;u.i.onReady=u.i.onReady;$("videojs.TextTrack",u.C);u.C.prototype.label=u.C.prototype.label;u.C.prototype.kind=u.C.prototype.K;u.C.prototype.mode=u.C.prototype.mode;u.C.prototype.cues=u.C.prototype.ed;u.C.prototype.activeCues=u.C.prototype.Zc;$("videojs.CaptionsTrack",u.Vb);$("videojs.SubtitlesTrack",u.dc);$("videojs.ChaptersTrack",u.Wb);$("videojs.autoSetup",u.ic);$("videojs.plugin",u.Gd);$("videojs.createTimeRange",u.yb);
$("videojs.util",u.oa);u.oa.mergeOptions=u.oa.Jb;})();




/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.YTPlayer.js
 *
 *  Copyright (c) 2001-2013. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 23/11/13 21.05
 *  *****************************************************************************
 */

if(typeof ytp != "object")
	ytp ={};

function onYouTubePlayerAPIReady() {

	if(ytp.YTAPIReady)
		return;

	ytp.YTAPIReady=true;
	jQuery(document).trigger("YTAPIReady");
}

(function (jQuery, ytp) {

	ytp.isDevice = 'ontouchstart' in window;

	/*Browser detection patch*/
	if (!jQuery.browser) {
		jQuery.browser = {};
		jQuery.browser.mozilla = !1;
		jQuery.browser.webkit = !1;
		jQuery.browser.opera = !1;
		jQuery.browser.msie = !1;
		var nAgt = navigator.userAgent;
		jQuery.browser.ua = nAgt;
		jQuery.browser.name = navigator.appName;
		jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
		var nameOffset, verOffset, ix;
		if (-1 != (verOffset = nAgt.indexOf("Opera")))jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("MSIE")))jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
			jQuery.browser.msie = !0;
			jQuery.browser.name = "Microsoft Internet Explorer";
			var start = nAgt.indexOf("rv:") + 3, end = start + 4;
			jQuery.browser.fullVersion = nAgt.substring(start, end)
		} else-1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
		-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
		-1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
		jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
		isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
		jQuery.browser.version = jQuery.browser.majorVersion
	}

	/*******************************************************************************
	 * jQuery.mb.components: jquery.mb.CSSAnimate
	 ******************************************************************************/

	jQuery.fn.CSSAnimate=function(a,b,k,l,f){return this.each(function(){var c=jQuery(this);if(0!==c.length&&a){"function"==typeof b&&(f=b,b=jQuery.fx.speeds._default);"function"==typeof k&&(f=k,k=0);"function"==typeof l&&(f=l,l="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof b)for(var j in jQuery.fx.speeds)if(b==j){b=jQuery.fx.speeds[j];break}else b=null;if(jQuery.support.transition){var e="",h="transitionEnd";jQuery.browser.webkit?(e="-webkit-",h="webkitTransitionEnd"):jQuery.browser.mozilla? (e="-moz-",h="transitionend"):jQuery.browser.opera?(e="-o-",h="otransitionend"):jQuery.browser.msie&&(e="-ms-",h="msTransitionEnd");j=[];for(d in a){var g=d;"transform"===g&&(g=e+"transform",a[g]=a[d],delete a[d]);"transform-origin"===g&&(g=e+"transform-origin",a[g]=a[d],delete a[d]);j.push(g);c.css(g)||c.css(g,0)}d=j.join(",");c.css(e+"transition-property",d);c.css(e+"transition-duration",b+"ms");c.css(e+"transition-delay",k+"ms");c.css(e+"transition-timing-function",l);c.css(e+"backface-visibility", "hidden");setTimeout(function(){c.css(a)},0);setTimeout(function(){c.called||!f?c.called=!1:f()},b+20);c.on(h,function(a){c.off(h);c.css(e+"transition","");a.stopPropagation();"function"==typeof f&&(c.called=!0,f());return!1})}else{for(var d in a)"transform"===d&&delete a[d],"transform-origin"===d&&delete a[d],"auto"===a[d]&&delete a[d];if(!f||"string"===typeof f)f="linear";c.animate(a,b,f)}}})}; jQuery.fn.CSSAnimateStop=function(){var a="",b="transitionEnd";jQuery.browser.webkit?(a="-webkit-",b="webkitTransitionEnd"):jQuery.browser.mozilla?(a="-moz-",b="transitionend"):jQuery.browser.opera?(a="-o-",b="otransitionend"):jQuery.browser.msie&&(a="-ms-",b="msTransitionEnd");jQuery(this).css(a+"transition","");jQuery(this).off(b)}; jQuery.support.transition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}();

	/*
	 * Metadata - jQuery plugin for parsing metadata from elements
	 * Copyright (c) 2006 John Resig, Yehuda Katz, JÃƒÂ¶rn Zaefferer, Paul McLanahan
	 * Dual licensed under the MIT and GPL licenses:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *   http://www.gnu.org/licenses/gpl.html
	 */

	(function(c){c.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(b,c){this.defaults.type=b;this.defaults.name=c},get:function(b,f){var d=c.extend({},this.defaults,f);d.single.length||(d.single="metadata");var a=c.data(b,d.single);if(a)return a;a="{}";if("class"==d.type){var e=d.cre.exec(b.className);e&&(a=e[1])}else if("elem"==d.type){if(!b.getElementsByTagName)return;e=b.getElementsByTagName(d.name);e.length&&(a=c.trim(e[0].innerHTML))}else void 0!= b.getAttribute&&(e=b.getAttribute(d.name))&&(a=e);0>a.indexOf("{")&&(a="{"+a+"}");a=eval("("+a+")");c.data(b,d.single,a);return a}}});c.fn.metadata=function(b){return c.metadata.get(this[0],b)}})(jQuery);


	String.prototype.getVideoID=function(){
		var movieURL;
		if(this.substr(0,16)=="http://youtu.be/"){
			movieURL= this.replace("http://youtu.be/","");
		}else if(this.indexOf("http")>-1){
			movieURL = this.match(/[\\?&]v=([^&#]*)/)[1];
		}else{
			movieURL = this
		}
		return movieURL;
	};


	jQuery.mbYTPlayer = {
		name           : "jquery.mb.YTPlayer",
		version        : "2.6.0",
		author         : "Matteo Bicocchi",
		defaults       : {
			containment            : "body",
			ratio                  : "16/9",
			showYTLogo             : false,
			videoURL               : null,
			startAt                : 0,
			autoPlay               : true,
			vol                    :100,
			addRaster              : false,
			opacity                : 1,
			quality                : "default", //or "small", "medium", "large", "hd720", "hd1080", "highres"
			mute                   : false,
			loop                   : true,
			showControls           : true,
			showAnnotations        : false,
			printUrl               : true,
			stopMovieOnClick       :false,
			realfullscreen         :true,
			onReady                : function (player) {},
			onStateChange          : function (player) {},
			onPlaybackQualityChange: function (player) {},
			onError                : function (player) {}
		},
		controls       : {
			play  : "P",
			pause : "p",
			mute  : "M",
			unmute: "A",
			onlyYT: "O",
			showSite: "R",
			ytLogo: "Y"
		},
		rasterImg      : "images/raster.png",
		rasterImgRetina: "images/raster@2x.png",

		locationProtocol: location.protocol != "file:" ? location.protocol : "http:",

		buildPlayer: function (options) {

			return this.each(function () {
				var YTPlayer = this;
				var $YTPlayer = jQuery(YTPlayer);

				YTPlayer.loop = 0;
				YTPlayer.opt = {};
				var property = {};

				$YTPlayer.addClass("mb_YTVPlayer");

				if (jQuery.metadata) {
					jQuery.metadata.setType("class");
					property = $YTPlayer.metadata();
				}

				if (jQuery.isEmptyObject(property))
					property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval('(' + $YTPlayer.data("property") + ')') : $YTPlayer.data("property");

				jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);

				var canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href);

				if(!canGoFullscreen)
					YTPlayer.opt.realfullscreen = false;

				if (!$YTPlayer.attr("id"))
					$YTPlayer.attr("id", "id_" + new Date().getTime());

				YTPlayer.opt.id = YTPlayer.id;
				YTPlayer.isAlone = false;

				/*to maintain back compatibility
				 * ***********************************************************/
				if (YTPlayer.opt.isBgndMovie)
					YTPlayer.opt.containment = "body";

				if (YTPlayer.opt.isBgndMovie && YTPlayer.opt.isBgndMovie.mute != undefined)
					YTPlayer.opt.mute = YTPlayer.opt.isBgndMovie.mute;

				if (!YTPlayer.opt.videoURL)
					YTPlayer.opt.videoURL = $YTPlayer.attr("href");

				/************************************************************/

				var playerID = "mbYTP_" + YTPlayer.id;
				var videoID = this.opt.videoURL ? this.opt.videoURL.getVideoID() : $YTPlayer.attr("href") ? $YTPlayer.attr("href").getVideoID() : false;
				YTPlayer.videoID = videoID;


				YTPlayer.opt.showAnnotations = (YTPlayer.opt.showAnnotations) ? '0' : '3';
				var playerVars = { 'autoplay': 0, 'modestbranding': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'enablejsapi': 1, 'version': 3, 'playerapiid': playerID, 'origin': '*', 'allowfullscreen': true, 'wmode': "transparent", 'iv_load_policy': YTPlayer.opt.showAnnotations};

				var canPlayHTML5 = false;
				var v = document.createElement('video');
				if (v.canPlayType ) { // && !jQuery.browser.msie
					canPlayHTML5 = true;
				}

				if (canPlayHTML5) //  && !(YTPlayer.isPlayList && jQuery.browser.msie)
					jQuery.extend(playerVars, {'html5': 1});

				if(jQuery.browser.msie && jQuery.browser.version < 9 ){
					this.opt.opacity = 1;
				}

				var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
				var overlay = jQuery("<div/>").css({position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}).addClass("YTPOverlay"); //YTPlayer.isBackground ? "fixed" :

				YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery(this) : jQuery(YTPlayer.opt.containment);

				YTPlayer.isBackground = YTPlayer.opt.containment.get(0).tagName.toLowerCase() == "body";

				if (ytp.isDevice && YTPlayer.isBackground){
					$YTPlayer.hide();
					return;
				}

				if (YTPlayer.opt.addRaster) {
					var retina = (window.retina || window.devicePixelRatio > 1);
					overlay.addClass(retina ? "raster retina" : "raster");
				}else{
					overlay.removeClass("raster retina");
				}

				var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
				wrapper.css({position: "absolute", zIndex: 0, minWidth: "100%", minHeight: "100%",left:0, top:0, overflow: "hidden", opacity: 0});
				playerBox.css({position: "absolute", zIndex: 0, width: "100%", height: "100%", top: 0, left: 0, overflow: "hidden", opacity: this.opt.opacity});
				wrapper.append(playerBox);

				if (YTPlayer.isBackground && ytp.isInit)
					return;

				YTPlayer.opt.containment.children().each(function () {
					if (jQuery(this).css("position") == "static")
						jQuery(this).css("position", "relative");
				});

				if (YTPlayer.isBackground) {
					jQuery("body").css({position: "relative", minWidth: "100%", minHeight: "100%", zIndex: 1, boxSizing: "border-box"});
					wrapper.css({position: "fixed", top: 0, left: 0, zIndex: 0});
					$YTPlayer.hide();
					YTPlayer.opt.containment.prepend(wrapper);
				} else
					YTPlayer.opt.containment.prepend(wrapper);

				YTPlayer.wrapper = wrapper;

				playerBox.css({opacity: 1});

				if (!ytp.isDevice){
					playerBox.after(overlay);
					YTPlayer.overlay = overlay;
				}


				if(!YTPlayer.isBackground){
					overlay.on("mouseenter",function(){
						$YTPlayer.find(".mb_YTVPBar").addClass("visible");
					}).on("mouseleave",function(){
								$YTPlayer.find(".mb_YTVPBar").removeClass("visible");
							})
				}

				// add YT API to the header
				//jQuery("#YTAPI").remove();

				if(!ytp.YTAPIReady){
					var tag = document.createElement('script');
					tag.src = jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/player_api";
					tag.id = "YTAPI";
					var firstScriptTag = document.getElementsByTagName('script')[0];
					firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
				}else{
					setTimeout(function(){
						jQuery(document).trigger("YTAPIReady");
					}, 200)
				}

				jQuery(document).on("YTAPIReady", function () {

					if ((YTPlayer.isBackground && ytp.isInit) || YTPlayer.opt.isInit)
						return;

					if(YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick)
						jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer",function(e){
							var target = jQuery(e.target);
							if(target.is("a") || target.parents().is("a")){
								$YTPlayer.pauseYTP();
							}
						});

					if (YTPlayer.isBackground)
						ytp.isInit = true;

					YTPlayer.opt.isInit = true;

					YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;

					jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer);

					jQuery(document).on("getVideoInfo_" + YTPlayer.opt.id, function () {

						if(ytp.isDevice && !YTPlayer.isBackground){
							new YT.Player(playerID, {
								height: '100%',
								width: '100%',
								videoId: YTPlayer.videoID,
								events: {
									'onReady': function(){
										$YTPlayer.optimizeDisplay();
										playerBox.css({opacity: 1});
										YTPlayer.wrapper.css({opacity: 1});
										$YTPlayer.optimizeDisplay();
									},
									'onStateChange': function(){}
								}
							});
							return;
						}

						new YT.Player(playerID, {
							videoId   : YTPlayer.videoID.toString(),
							playerVars: playerVars,
							events    : {
								'onReady': function (event) {

									YTPlayer.player = event.target;

									if(YTPlayer.isReady)
										return;

									YTPlayer.isReady = true;

									YTPlayer.playerEl = YTPlayer.player.getIframe();
									$YTPlayer.optimizeDisplay();

									YTPlayer.videoID = videoID;

									jQuery(window).on("resize.YTP",function () {
										$YTPlayer.optimizeDisplay();
									});

									if (YTPlayer.opt.showControls)
										jQuery(YTPlayer).buildYTPControls();

									YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);

									if (YTPlayer.opt.startAt > 0)
										YTPlayer.player.seekTo(parseFloat(YTPlayer.opt.startAt), true);

									if (!YTPlayer.opt.autoPlay) {
										//	$YTPlayer.stopYTP();
										YTPlayer.player.pauseVideo();
										YTPlayer.checkForStartAt = setInterval(function () {
											if (YTPlayer.player.getCurrentTime() >= YTPlayer.opt.startAt) {
												clearInterval(YTPlayer.checkForStartAt);

												//YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 2000);

												if (YTPlayer.opt.mute) {
													jQuery(YTPlayer).muteYTPVolume();
												}else{
													jQuery(YTPlayer).unmuteYTPVolume();
												}
											}
										}, 1);

									} else {
										$YTPlayer.playYTP();
										YTPlayer.player.setVolume(YTPlayer.opt.vol);

										if (YTPlayer.opt.mute) {
											jQuery(YTPlayer).muteYTPVolume();
										}else{
											jQuery(YTPlayer).unmuteYTPVolume();
										}
									}

									if (typeof YTPlayer.opt.onReady == "function")
										YTPlayer.opt.onReady($YTPlayer);

									jQuery.mbYTPlayer.checkForState(YTPlayer);

								},

								'onStateChange'          : function (event) {

									/*
									 -1 (unstarted)
									 0 (ended)
									 1 (playing)
									 2 (paused)
									 3 (buffering)
									 5 (video cued).
									 */

									if (typeof event.target.getPlayerState != "function")
										return;
									var state = event.target.getPlayerState();

									if (typeof YTPlayer.opt.onStateChange == "function")
										YTPlayer.opt.onStateChange($YTPlayer, state);

									var playerBox = jQuery(YTPlayer.playerEl);
									var controls = jQuery("#controlBar_" + YTPlayer.id);

									var data = YTPlayer.opt;

									if (state == 0) { // end
										if (YTPlayer.state == state)
											return;

										YTPlayer.state = state;
										YTPlayer.player.pauseVideo();
										var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;

										if (data.loop) {
											YTPlayer.wrapper.css({opacity: 0});
											$YTPlayer.playYTP();
											YTPlayer.player.seekTo(startAt,true);

										} else if (!YTPlayer.isBackground) {
											YTPlayer.player.seekTo(startAt, true);
											$YTPlayer.playYTP();
											setTimeout(function () {
												$YTPlayer.pauseYTP();
											}, 10);
										}

										if (!data.loop && YTPlayer.isBackground)
											YTPlayer.wrapper.CSSAnimate({opacity: 0}, 2000);
										else if (data.loop) {
											YTPlayer.wrapper.css({opacity: 0});
											YTPlayer.loop++;
										}

										controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
										jQuery(YTPlayer).trigger("YTPEnd");
									}

									if (state == 3) { // buffering
										if (YTPlayer.state == state)
											return;
										YTPlayer.state = state;
										controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
										jQuery(YTPlayer).trigger("YTPBuffering");
									}

									if (state == -1) { // unstarted
										if (YTPlayer.state == state)
											return;
										YTPlayer.state = state;

										YTPlayer.wrapper.css({opacity:0});

										jQuery(YTPlayer).trigger("YTPUnstarted");
									}

									if (state == 1) { // play
										if (YTPlayer.state == state)
											return;
										YTPlayer.state = state;
										YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);

										if(YTPlayer.opt.mute){
											$YTPlayer.muteYTPVolume();
											YTPlayer.opt.mute = false;
										}

										if (YTPlayer.opt.autoPlay && YTPlayer.loop == 0) {
											YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 2000);
										} else if(!YTPlayer.isBackground) {
											YTPlayer.wrapper.css({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity});
											$YTPlayer.css({background: "rgba(0,0,0,0.5)"});
										}else{
											setTimeout(function () {
												jQuery(YTPlayer.playerEl).CSSAnimate({opacity: 1}, 2000);
												YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 2000);
											}, 1000);
										}

										controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause);

										jQuery(YTPlayer).trigger("YTPStart");

										if (typeof _gaq != "undefined")
											_gaq.push(['_trackEvent', 'YTPlayer', 'Play', (YTPlayer.title || YTPlayer.videoID.toString())]);

									}

									if (state == 2) { // pause
										if (YTPlayer.state == state)
											return;
										YTPlayer.state = state;
										controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
										jQuery(YTPlayer).trigger("YTPPause");
									}
								},
								'onPlaybackQualityChange': function (e) {
									if (typeof YTPlayer.opt.onPlaybackQualityChange == "function")
										YTPlayer.opt.onPlaybackQualityChange($YTPlayer);
								},
								'onError'                : function (err) {

									if(err.data == 2 && YTPlayer.isPlayList)
										jQuery(YTPlayer).playNext();

									if (typeof YTPlayer.opt.onError == "function")
										YTPlayer.opt.onError($YTPlayer, err);
								}
							}
						});
					});
				})
			});
		},

		getDataFromFeed: function (videoID, YTPlayer) {
			//Get video info from FEEDS API

			YTPlayer.videoID = videoID;
			if (!jQuery.browser.msie) { //!(jQuery.browser.msie && jQuery.browser.version<9)

				jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+'//gdata.youtube.com/feeds/api/videos/' + videoID + '?v=2&alt=jsonc', function (data, status, xhr) {

					YTPlayer.dataReceived = true;

					var videoData = data.data;

					YTPlayer.title = videoData.title;
					YTPlayer.videoData = videoData;

					if (YTPlayer.opt.ratio == "auto")
						if (videoData.aspectRatio && videoData.aspectRatio === "widescreen")
							YTPlayer.opt.ratio = "16/9";
						else
							YTPlayer.opt.ratio = "4/3";

					if(!YTPlayer.isInit){

						YTPlayer.isInit = true;

						if (!YTPlayer.isBackground) {
							var bgndURL = YTPlayer.videoData.thumbnail.hqDefault;
							jQuery(YTPlayer).css({background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center", backgroundSize: "cover"});
						}

						jQuery(document).trigger("getVideoInfo_" + YTPlayer.opt.id);
					}
					jQuery(YTPlayer).trigger("YTPChanged");
				});

				setTimeout(function(){
					if(!YTPlayer.dataReceived && !YTPlayer.isInit){
						YTPlayer.isInit = true;
						jQuery(document).trigger("getVideoInfo_" + YTPlayer.opt.id);
					}
				},2500)

			} else {
				YTPlayer.opt.ratio == "auto" ? YTPlayer.opt.ratio = "16/9" : YTPlayer.opt.ratio;

				if(!YTPlayer.isInit){
					YTPlayer.isInit = true;
					setTimeout(function(){
						jQuery(document).trigger("getVideoInfo_" + YTPlayer.opt.id);
					},100)

				}
				jQuery(YTPlayer).trigger("YTPChanged");
			}
		},

		getVideoID: function(){
			var YTPlayer = this.get(0);
			return YTPlayer.videoID || false ;
		},

		setVideoQuality: function(quality){
			var YTPlayer = this.get(0);
			YTPlayer.player.setPlaybackQuality(quality);
		},

		YTPlaylist : function(videos, shuffle, callback){
			var YTPlayer = this.get(0);

			YTPlayer.isPlayList = true;

			if(shuffle)
				videos = jQuery.shuffle(videos);

			if(!YTPlayer.videoID){
				YTPlayer.videos = videos;
				YTPlayer.videoCounter = 0;
				YTPlayer.videoLength = videos.length;

				jQuery(YTPlayer).data("property", videos[0]);
				jQuery(YTPlayer).mb_YTPlayer();
			}

			if(typeof callback == "function")
				jQuery(YTPlayer).on("YTPChanged",function(){
					callback(YTPlayer);
				});

			jQuery(YTPlayer).on("YTPEnd", function(){
				jQuery(YTPlayer).playNext();
			});
		},

		playNext: function(){
			var YTPlayer = this.get(0);
			YTPlayer.videoCounter++;
			if(YTPlayer.videoCounter>=YTPlayer.videoLength)
				YTPlayer.videoCounter = 0;
			jQuery(YTPlayer.playerEl).css({opacity:0});
			jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
		},

		playPrev: function(){
			var YTPlayer = this.get(0);
			YTPlayer.videoCounter--;
			if(YTPlayer.videoCounter<=0)
				YTPlayer.videoCounter = YTPlayer.videoLength;
			jQuery(YTPlayer.playerEl).css({opacity:0});
			jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
		},

		changeMovie: function (opt) {
			var YTPlayer = this.get(0);
			var data = YTPlayer.opt;
			if (opt) {
				jQuery.extend(data, opt);
			}

			YTPlayer.videoID = data.videoURL.getVideoID();

			jQuery(YTPlayer).pauseYTP();
			var timer = jQuery.browser.msie ? 1000 : 0;
			jQuery(YTPlayer).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/" + YTPlayer.videoID) , 5 , YTPlayer.opt.quality);

			setTimeout(function(){
				jQuery(YTPlayer).playYTP();
				jQuery(YTPlayer).one("YTPStart", function(){
					jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},2000);
				});

			},timer)

			if (YTPlayer.opt.mute) {
				jQuery(YTPlayer).muteYTPVolume();
			}else{
				jQuery(YTPlayer).unmuteYTPVolume();
			}

			if (YTPlayer.opt.addRaster) {
				var retina = (window.retina || window.devicePixelRatio > 1);
				YTPlayer.overlay.addClass(retina ? "raster retina" : "raster");
			}else{
				YTPlayer.overlay.removeClass("raster");
				YTPlayer.overlay.removeClass("retina");
			}

			jQuery("#controlBar_" + YTPlayer.id).remove();

			if (YTPlayer.opt.showControls)
				jQuery(YTPlayer).buildYTPControls();

			jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer);
			jQuery(YTPlayer).optimizeDisplay();
			jQuery.mbYTPlayer.checkForState(YTPlayer);

		},

		getPlayer: function () {
			return jQuery(this).get(0).player;
		},

		playerDestroy: function () {
			var YTPlayer = this.get(0);
			ytp.YTAPIReady = false;
			ytp.isInit = false;
			YTPlayer.opt.isInit = false;
			YTPlayer.videoID = null;

			var playerBox = YTPlayer.wrapper;
			playerBox.remove();
			jQuery("#controlBar_" + YTPlayer.id).remove();
		},

		fullscreen: function(real) {

			var YTPlayer = this.get(0);

			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var fullScreenBtn = controls.find(".mb_OnlyYT");
			var videoWrapper = jQuery(YTPlayer.wrapper);
			if(real){
				var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
				jQuery(document).off(fullscreenchange);
				jQuery(document).on(fullscreenchange, function() {
					var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");

					if (!isFullScreen) {
						jQuery(YTPlayer).removeClass("fullscreen");
						YTPlayer.isAlone = false;
						fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT)
						jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality);

						if (YTPlayer.isBackground){
							jQuery("body").after(controls);
						}else{
							YTPlayer.wrapper.before(controls);
						}

						jQuery(window).resize();

					}else{
						jQuery(YTPlayer).setVideoQuality("default");
					}
				});
			}

			if (!YTPlayer.isAlone) {


					if(YTPlayer.player.getPlayerState() != 1 && YTPlayer.player.getPlayerState() != 2)
						jQuery(YTPlayer).playYTP();

					if(real){
						YTPlayer.wrapper.append(controls);
						jQuery(YTPlayer).addClass("fullscreen");
						launchFullscreen(videoWrapper.get(0));
					} else
						videoWrapper.css({zIndex: 10000}).CSSAnimate({opacity: 1}, 1000, 0);

					jQuery(YTPlayer).trigger("YTPFullScreenStart");

					fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite)
					YTPlayer.isAlone = true;

			} else {

				if(real){
					cancelFullscreen();
				} else{
					videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500);
				}

				jQuery(YTPlayer).trigger("YTPFullScreenEnd");

				videoWrapper.css({zIndex: -1});
				fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT)
				YTPlayer.isAlone = false;
			}

			function RunPrefixMethod(obj, method) {
				var pfx = ["webkit", "moz", "ms", "o", ""];
				var p = 0, m, t;
				while (p < pfx.length && !obj[m]) {
					m = method;
					if (pfx[p] == "") {
						m = m.substr(0,1).toLowerCase() + m.substr(1);
					}
					m = pfx[p] + m;
					t = typeof obj[m];
					if (t != "undefined") {
						pfx = [pfx[p]];
						return (t == "function" ? obj[m]() : obj[m]);
					}
					p++;
				}
			}

			function launchFullscreen(element) {
				RunPrefixMethod(element, "RequestFullScreen");
			}

			function cancelFullscreen() {
				if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
					RunPrefixMethod(document, "CancelFullScreen");
				}
			}
		},

		playYTP: function () {
			var YTPlayer = this.get(0);
			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var playBtn = controls.find(".mb_YTVPPlaypause");
			playBtn.html(jQuery.mbYTPlayer.controls.pause);
			YTPlayer.player.playVideo();

			YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 2000);
			jQuery(YTPlayer).on("YTPStart", function(){
				jQuery(YTPlayer).css("background", "none");
			})
		},

		toggleLoops: function () {
			var YTPlayer = this.get(0);
			var data = YTPlayer.opt;
			if (data.loop == 1) {
				data.loop = 0;
			} else {
				if(data.startAt) {
					YTPlayer.player.seekTo(data.startAt);
				} else {
					YTPlayer.player.playVideo();
				}
				data.loop = 1;
			}
		},

		stopYTP: function () {
			var YTPlayer = this.get(0);
			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var playBtn = controls.find(".mb_YTVPPlaypause");
			playBtn.html(jQuery.mbYTPlayer.controls.play);
			YTPlayer.player.stopVideo();
		},

		pauseYTP: function () {
			var YTPlayer = this.get(0);
			var data = YTPlayer.opt;
			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var playBtn = controls.find(".mb_YTVPPlaypause");
			playBtn.html(jQuery.mbYTPlayer.controls.play);
			YTPlayer.player.pauseVideo();
		},

		seekToYTP: function(val) {
			var YTPlayer = this.get(0);
			YTPlayer.player.seekTo(val,true);
		},

		setYTPVolume: function (val) {
			var YTPlayer = this.get(0);
			if (!val && !YTPlayer.opt.vol && player.getVolume() == 0)
				jQuery(YTPlayer).unmuteYTPVolume();
			else if ((!val && YTPlayer.player.getVolume() > 0) || (val && YTPlayer.player.getVolume() == val))
				jQuery(YTPlayer).muteYTPVolume();
			else
				YTPlayer.opt.vol = val;
			YTPlayer.player.setVolume(YTPlayer.opt.vol);
		},

		muteYTPVolume: function () {
			var YTPlayer = this.get(0);
			YTPlayer.opt.vol = YTPlayer.player.getVolume() || 50;
			YTPlayer.player.mute();
			YTPlayer.player.setVolume(0);
			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var muteBtn = controls.find(".mb_YTVPMuteUnmute");
			muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
		},

		unmuteYTPVolume: function () {
			var YTPlayer = this.get(0);

			YTPlayer.player.unMute();
			YTPlayer.player.setVolume(YTPlayer.opt.vol);

			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var muteBtn = controls.find(".mb_YTVPMuteUnmute");
			muteBtn.html(jQuery.mbYTPlayer.controls.mute);
		},

		manageYTPProgress: function () {
			var YTPlayer = this.get(0);
			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var progressBar = controls.find(".mb_YTVPProgress");
			var loadedBar = controls.find(".mb_YTVPLoaded");
			var timeBar = controls.find(".mb_YTVTime");
			var totW = progressBar.outerWidth();

			var currentTime = Math.floor(YTPlayer.player.getCurrentTime());
			var totalTime = Math.floor(YTPlayer.player.getDuration());
			var timeW = (currentTime * totW) / totalTime;
			var startLeft = 0;

			var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;

			loadedBar.css({left: startLeft, width: loadedW + "%"});
			timeBar.css({left: 0, width: timeW});
			return {totalTime: totalTime, currentTime: currentTime};
		},

		buildYTPControls: function () {
			var YTPlayer = this.get(0);
			var data = YTPlayer.opt;

			if(jQuery("#controlBar_"+ YTPlayer.id).length)
				return;

			var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTVPBar").css({whiteSpace: "noWrap", position: YTPlayer.isBackground ? "fixed" : "absolute", zIndex: YTPlayer.isBackground ? 10000 : 1000}).hide();
			var buttonBar = jQuery("<div/>").addClass("buttonBar");
			var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause ytpicon").click(function () {
				if (YTPlayer.player.getPlayerState() == 1)
					jQuery(YTPlayer).pauseYTP();
				else
					jQuery(YTPlayer).playYTP();
			});

			var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function () {
				if (YTPlayer.player.getVolume()==0) {
					jQuery(YTPlayer).unmuteYTPVolume();
				} else {
					jQuery(YTPlayer).muteYTPVolume();
				}
			});

			var idx = jQuery("<span/>").addClass("mb_YTVPTime");

			var vURL = data.videoURL;
			if(vURL.indexOf("http") < 0)
				vURL = jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL;
			var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {window.open(vURL, "viewOnYT")});
			var onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function () {jQuery(YTPlayer).fullscreen(data.realfullscreen);});

			var progressBar = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function (e) {
				timeBar.css({width: (e.clientX - timeBar.offset().left)});
				YTPlayer.timeW = e.clientX - timeBar.offset().left;
				controlBar.find(".mb_YTVPLoaded").css({width: 0});
				var totalTime = Math.floor(YTPlayer.player.getDuration());
				YTPlayer.goto = (timeBar.outerWidth() * totalTime) / progressBar.outerWidth();

				YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
				controlBar.find(".mb_YTVPLoaded").css({width: 0});
			});

			var loadedBar = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute");
			var timeBar = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");

			progressBar.append(loadedBar).append(timeBar);
			buttonBar.append(playpause).append(MuteUnmute).append(idx);

			if (data.printUrl){
				buttonBar.append(movieUrl);
			}

			if (YTPlayer.isBackground || (YTPlayer.opt.realfullscreen && !YTPlayer.isBackground))
				buttonBar.append(onlyVideo);

			controlBar.append(buttonBar).append(progressBar);

			if (!YTPlayer.isBackground) {
				controlBar.addClass("inlinePlayer");
				YTPlayer.wrapper.before(controlBar);
			} else {
				jQuery("body").after(controlBar);
			}
			controlBar.fadeIn();

		},

		checkForState:function(YTPlayer){

			var controlBar = jQuery("#controlBar_" + YTPlayer.id);
			var data = YTPlayer.opt;
			var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;

			YTPlayer.getState = setInterval(function () {
				var prog = jQuery(YTPlayer).manageYTPProgress();

				controlBar.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
				if (parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() && YTPlayer.player.getPlayerState() == 1 && !YTPlayer.isPlayList) {
					if(!data.loop){
						YTPlayer.player.pauseVideo();
						YTPlayer.wrapper.CSSAnimate({opacity: 0}, 2000,function(){
							YTPlayer.player.seekTo(startAt, true);

							if (!YTPlayer.isBackground) {
								var bgndURL = YTPlayer.videoData.thumbnail.hqDefault;
								jQuery(YTPlayer).css({background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center", backgroundSize: "cover"});
							}
						});
					}else
						YTPlayer.player.seekTo(startAt);
					jQuery(YTPlayer).trigger("YTPEnd");
				}
			}, 1);

		},

		formatTime      : function (s) {
			var min = Math.floor(s / 60);
			var sec = Math.floor(s - (60 * min));
			return (min < 9 ? "0" + min : min) + " : " + (sec < 9 ? "0" + sec : sec);
		}
	};

	jQuery.fn.toggleVolume = function () {
		var YTPlayer = this.get(0);
		if (!YTPlayer)
			return;

		if (YTPlayer.player.isMuted()) {
			jQuery(YTPlayer).unmuteYTPVolume();
			return true;
		} else {
			jQuery(YTPlayer).muteYTPVolume();
			return false;
		}
	};

	jQuery.fn.optimizeDisplay = function () {
		var YTPlayer = this.get(0);
		var data = YTPlayer.opt;
		var playerBox = jQuery(YTPlayer.playerEl);
		var win = {};
		var el = !YTPlayer.isBackground ? data.containment : jQuery(window);

		win.width = el.width();
		win.height = el.height();

		var margin = 24;
		var vid = {};
		vid.width = win.width + ((win.width * margin) / 100);
		vid.height = data.ratio == "16/9" ? Math.ceil((9 * win.width) / 16) : Math.ceil((3 * win.width) / 4);
		vid.marginTop = -((vid.height - win.height) / 2);
		vid.marginLeft = -((win.width * (margin / 2)) / 100);

		if (vid.height < win.height) {
			vid.height = win.height + ((win.height * margin) / 100);
			vid.width = data.ratio == "16/9" ? Math.floor((16 * win.height) / 9) : Math.floor((4 * win.height) / 3);
			vid.marginTop = -((win.height * (margin / 2)) / 100);
			vid.marginLeft = -((vid.width - win.width) / 2);
		}
		playerBox.css({width: vid.width, height: vid.height, marginTop: vid.marginTop, marginLeft: vid.marginLeft});
	};

	jQuery.shuffle = function(arr) {
		var newArray = arr.slice();
		var len = newArray.length;
		var i = len;
		while (i--) {
			var p = parseInt(Math.random()*len);
			var t = newArray[i];
			newArray[i] = newArray[p];
			newArray[p] = t;
		}
		return newArray;
	};

	jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
	jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist;
	jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
	jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
	jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
	jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
	jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
	jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
	jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
	jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls;
	jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP;
	jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
	jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP;
	jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP;
	jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP;
	jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTPVolume;
	jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTPVolume;
	jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume;
	jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
	jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress;

})(jQuery, ytp);
