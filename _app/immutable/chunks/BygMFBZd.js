/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=globalThis,Qu=jo.ShadowRoot&&(jo.ShadyCSS===void 0||jo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lm=Symbol(),wd=new WeakMap;let Ib=class{constructor(s,t,e){if(this._$cssResult$=!0,e!==Lm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=t}get styleSheet(){let s=this.o;const t=this.t;if(Qu&&s===void 0){const e=t!==void 0&&t.length===1;e&&(s=wd.get(t)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),e&&wd.set(t,s))}return s}toString(){return this.cssText}};const Id=Qu?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(i=>new Ib(typeof i=="string"?i:i+"",void 0,Lm))(e)})(s):s,{is:Mb,defineProperty:Tb,getOwnPropertyDescriptor:Bb,getOwnPropertyNames:Rb,getOwnPropertySymbols:Db,getPrototypeOf:Lb}=Object,Ul=globalThis,Md=Ul.trustedTypes,Ub=Md?Md.emptyScript:"",Pb=Ul.reactiveElementPolyfillSupport,ma=(s,t)=>s,cl={toAttribute(s,t){switch(t){case Boolean:s=s?Ub:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ku=(s,t)=>!Mb(s,t),Td={attribute:!0,type:String,converter:cl,reflect:!1,hasChanged:ku};Symbol.metadata??=Symbol("metadata"),Ul.litPropertyMetadata??=new WeakMap;let or=class extends HTMLElement{static addInitializer(s){this._$Ei(),(this.l??=[]).push(s)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(s,t=Td){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(s,t),!t.noAccessor){const e=Symbol(),i=this.getPropertyDescriptor(s,e,t);i!==void 0&&Tb(this.prototype,s,i)}}static getPropertyDescriptor(s,t,e){const{get:i,set:n}=Bb(this.prototype,s)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return i?.call(this)},set(r){const a=i?.call(this);n.call(this,r),this.requestUpdate(s,a,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(s){return this.elementProperties.get(s)??Td}static _$Ei(){if(this.hasOwnProperty(ma("elementProperties")))return;const s=Lb(this);s.finalize(),s.l!==void 0&&(this.l=[...s.l]),this.elementProperties=new Map(s.elementProperties)}static finalize(){if(this.hasOwnProperty(ma("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ma("properties"))){const t=this.properties,e=[...Rb(t),...Db(t)];for(const i of e)this.createProperty(i,t[i])}const s=this[Symbol.metadata];if(s!==null){const t=litPropertyMetadata.get(s);if(t!==void 0)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const t=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const i of e)t.unshift(Id(i))}else s!==void 0&&t.push(Id(s));return t}static _$Eu(s,t){const e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof s=="string"?s.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((s=>this.enableUpdating=s)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((s=>s(this)))}addController(s){(this._$EO??=new Set).add(s),this.renderRoot!==void 0&&this.isConnected&&s.hostConnected?.()}removeController(s){this._$EO?.delete(s)}_$E_(){const s=new Map,t=this.constructor.elementProperties;for(const e of t.keys())this.hasOwnProperty(e)&&(s.set(e,this[e]),delete this[e]);s.size>0&&(this._$Ep=s)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Qu)t.adoptedStyleSheets=e.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of e){const n=document.createElement("style"),r=jo.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=i.cssText,t.appendChild(n)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((s=>s.hostConnected?.()))}enableUpdating(s){}disconnectedCallback(){this._$EO?.forEach((s=>s.hostDisconnected?.()))}attributeChangedCallback(s,t,e){this._$AK(s,e)}_$EC(s,t){const e=this.constructor.elementProperties.get(s),i=this.constructor._$Eu(s,e);if(i!==void 0&&e.reflect===!0){const n=(e.converter?.toAttribute!==void 0?e.converter:cl).toAttribute(t,e.type);this._$Em=s,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(s,t){const e=this.constructor,i=e._$Eh.get(s);if(i!==void 0&&this._$Em!==i){const n=e.getPropertyOptions(i),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:cl;this._$Em=i,this[i]=r.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(s,t,e){if(s!==void 0){if(e??=this.constructor.getPropertyOptions(s),!(e.hasChanged??ku)(this[s],t))return;this.P(s,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(s,t,e){this._$AL.has(s)||this._$AL.set(s,t),e.reflect===!0&&this._$Em!==s&&(this._$Ej??=new Set).add(s)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const s=this.scheduleUpdate();return s!=null&&await s,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[i,n]of e)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let s=!1;const t=this._$AL;try{s=this.shouldUpdate(t),s?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(e){throw s=!1,this._$EU(),e}s&&this._$AE(t)}willUpdate(s){}_$AE(s){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(s)),this.updated(s)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(s){return!0}update(s){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(s){}firstUpdated(s){}};or.elementStyles=[],or.shadowRootOptions={mode:"open"},or[ma("elementProperties")]=new Map,or[ma("finalized")]=new Map,Pb?.({ReactiveElement:or}),(Ul.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fb={attribute:!0,type:String,converter:cl,reflect:!1,hasChanged:ku},Nb=(s=Fb,t,e)=>{const{kind:i,metadata:n}=e;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(e.name,s),i==="accessor"){const{name:a}=e;return{set(o){const l=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,l,s)},init(o){return o!==void 0&&this.P(a,void 0,s),o}}}if(i==="setter"){const{name:a}=e;return function(o){const l=this[a];t.call(this,o),this.requestUpdate(a,l,s)}}throw Error("Unsupported decorator location: "+i)};function Et(s){return(t,e)=>typeof e=="object"?Nb(s,t,e):((i,n,r)=>{const a=n.hasOwnProperty(r);return n.constructor.createProperty(r,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(n,r):void 0})(s,t,e);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */}const hl="174",Qb=0,kb=1,Ob=2,lr=100,Gb=101,Hb=102,zb=200,Vb=201,Wb=202,qb=203,jb=204,Xb=205,Yb=206,Kb=207,Jb=208,$b=209,Zb=210,tv=211,ev=212,iv=213,nv=214,rv=0,sv=1,av=2,ov=3,lv=4,cv=5,hv=6,uv=7,Bd="attached",ps=300,fr=301,As=302,ul=303,Pl=306,Gi=1e3,Ce=1001,fs=1002,Fe=1003,Fl=1004,ur=1005,zt=1006,ls=1007,ri=1008,xe=1009,Ou=1010,Gu=1011,Sa=1012,Nl=1013,Ln=1014,ye=1015,Se=1016,Hu=1017,zu=1018,ms=1020,Um=35902,Ae=1023,Ca=1026,gs=1027,Mn=1028,Vu=1029,dr=1030,Wu=1031,qu=1033,Xo=33776,ga=33777,Yo=33778,ba=33779,dl=35840,Jh=35841,pl=35842,$h=35843,Al=36196,fl=37492,ml=37496,wa=37808,Zh=37809,tu=37810,eu=37811,Ia=37812,iu=37813,nu=37814,ru=37815,su=37816,au=37817,ou=37818,lu=37819,cu=37820,hu=37821,va=36492,uu=36494,gl=36495,du=36284,pu=36285,Au=36286,Ma=2200,fu=2201,bl=2202,bs=2300,vs=2301,Kl=2302,es=2400,is=2401,vl=2402,dv=2500,ln="",ae="srgb",oe="srgb-linear",yl="linear",$t="srgb",Er=7680,pv=512,Av=513,fv=514,mv=515,gv=516,bv=517,vv=518,yv=519,mu=35044,Rd="300 es",ys=2e3,_l=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i!==void 0&&i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dd=1234567;const ya=Math.PI/180,_s=180/Math.PI;function Ii(){const s=4294967295*Math.random()|0,t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ne[255&s]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[255&t]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[63&e|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[255&i]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Ut(s,t,e){return Math.max(t,Math.min(e,s))}function gu(s,t){return(s%t+t)%t}function _a(s,t,e){return(1-e)*s+e*t}function Ci(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}const Ko={DEG2RAD:ya,RAD2DEG:_s,generateUUID:Ii,clamp:Ut,euclideanModulo:gu,mapLinear:function(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)},inverseLerp:function(s,t,e){return s!==t?(e-s)/(t-s):0},lerp:_a,damp:function(s,t,e,i){return _a(s,t,1-Math.exp(-e*i))},pingpong:function(s,t=1){return t-Math.abs(gu(s,2*t)-t)},smoothstep:function(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t))*s*(3-2*s)},smootherstep:function(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t))*s*s*(s*(6*s-15)+10)},randInt:function(s,t){return s+Math.floor(Math.random()*(t-s+1))},randFloat:function(s,t){return s+Math.random()*(t-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){s!==void 0&&(Dd=s);let t=Dd+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296},degToRad:function(s){return s*ya},radToDeg:function(s){return s*_s},isPowerOfTwo:function(s){return!(s&s-1)&&s!==0},ceilPowerOfTwo:function(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))},floorPowerOfTwo:function(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))},setQuaternionFromProperEuler:function(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),f=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*f,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*f,o*c);break;case"ZYZ":s.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Jt,denormalize:Ci};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ut(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ut(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(t,e,i,n,r,a,o,l,c){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],m=n[0],A=n[3],g=n[6],b=n[1],v=n[4],y=n[7],_=n[2],E=n[5],x=n[8];return r[0]=a*m+o*b+l*_,r[3]=a*A+o*v+l*E,r[6]=a*g+o*y+l*x,r[1]=c*m+h*b+u*_,r[4]=c*A+h*v+u*E,r[7]=c*g+h*y+u*x,r[2]=d*m+p*b+f*_,r[5]=d*A+p*v+f*E,r[8]=d*g+p*y+f*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,f=e*u+i*d+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return t[0]=u*m,t[1]=(n*c-h*i)*m,t[2]=(o*i-n*a)*m,t[3]=d*m,t[4]=(h*e-n*l)*m,t[5]=(n*r-o*e)*m,t[6]=p*m,t[7]=(i*l-c*e)*m,t[8]=(a*e-i*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jl=new Ct;function Pm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _v(){const s=Ta("canvas");return s.style.display="block",s}const Ld={};function Zn(s){s in Ld||(Ld[s]=!0,console.warn(s))}const Ud=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ev(){const s={enabled:!0,workingColorSpace:oe,spaces:{},convert:function(n,r,a){return this.enabled!==!1&&r!==a&&r&&a&&(this.spaces[r].transfer===$t&&(n.r=hn(n.r),n.g=hn(n.g),n.b=hn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ln?yl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[oe]:{primaries:t,whitePoint:i,transfer:yl,toXYZ:Ud,fromXYZ:Pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ae},outputColorSpaceConfig:{drawingBufferColorSpace:ae}},[ae]:{primaries:t,whitePoint:i,transfer:$t,toXYZ:Ud,fromXYZ:Pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ae}}}),s}const Ot=Ev();function hn(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function cs(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}let xr;class xv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xr===void 0&&(xr=Ta("canvas")),xr.width=t.width,xr.height=t.height;const i=xr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xr}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ta("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=255*hn(r[a]/255);return i.putImageData(n,0,0),e}if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(255*hn(e[i]/255)):e[i]=hn(e[i]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sv=0;class Ql{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push($l(n[a].image)):r.push($l(n[a]))}else r=$l(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function $l(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cv=0,he=class Jo extends Ti{constructor(t=Jo.DEFAULT_IMAGE,e=Jo.DEFAULT_MAPPING,i=1001,n=1001,r=1006,a=1008,o=1023,l=1009,c=Jo.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Ii(),this.name="",this.source=new Ql(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ps)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gi:t.x=t.x-Math.floor(t.x);break;case Ce:t.x=t.x<0?0:1;break;case fs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case Gi:t.y=t.y-Math.floor(t.y);break;case Ce:t.y=t.y<0?0:1;break;case fs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};he.DEFAULT_IMAGE=null,he.DEFAULT_MAPPING=ps,he.DEFAULT_ANISOTROPY=1;class qt{constructor(t=0,e=0,i=0,n=1){qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],A=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-A)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+A)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(p+1)/2,_=(g+1)/2,E=(h+d)/4,x=(u+m)/4,I=(f+A)/4;return v>y&&v>_?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=E/i,r=x/i):y>_?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=E/n,r=I/n):_<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(_),i=x/r,n=I/r),this.set(i,n,r,e),this}let b=Math.sqrt((A-f)*(A-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(A-f)/b,this.y=(u-m)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this.w=Ut(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this.w=Ut(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ut(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wv extends Ti{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qt(0,0,t,e),this.scissorTest=!1,this.viewport=new qt(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new he(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ql(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends wv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Fm extends he{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nm extends he{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[a+0],p=r[a+1],f=r[a+2],m=r[a+3];if(o===0)return t[e+0]=l,t[e+1]=c,t[e+2]=h,void(t[e+3]=u);if(o===1)return t[e+0]=d,t[e+1]=p,t[e+2]=f,void(t[e+3]=m);if(u!==m||l!==d||c!==p||h!==f){let A=1-o;const g=l*d+c*p+h*f+u*m,b=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const _=Math.sqrt(v),E=Math.atan2(_,g*b);A=Math.sin(A*E)/_,o=Math.sin(o*E)/_}const y=o*b;if(l=l*A+d*y,c=c*A+p*y,h=h*A+f*y,u=u*A+m*y,A===1-o){const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],p=r[a+2],f=r[a+3];return t[e]=o*f+h*u+l*p-c*d,t[e+1]=l*f+h*d+c*u-o*p,t[e+2]=c*f+h*p+o*d-l*u,t[e+3]=h*f-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),p=l(n/2),f=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ut(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ut(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=2*Math.random()-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new B,Fd=new Ke;class Ye{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Va.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(t.matrixWorld),this.union(Va)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Wa.subVectors(this.max,Ls),Sr.subVectors(t.a,Ls),Cr.subVectors(t.b,Ls),wr.subVectors(t.c,Ls),mn.subVectors(Cr,Sr),gn.subVectors(wr,Cr),kn.subVectors(Sr,wr);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-kn.z,kn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,kn.z,0,-kn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-kn.y,kn.x,0];return!!tc(e,Sr,Cr,wr,Wa)&&(e=[1,0,0,0,1,0,0,0,1],!!tc(e,Sr,Cr,wr,Wa)&&(qa.crossVectors(mn,gn),e=[qa.x,qa.y,qa.z],tc(e,Sr,Cr,wr,Wa)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(yi).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wi=[new B,new B,new B,new B,new B,new B,new B,new B],yi=new B,Va=new Ye,Sr=new B,Cr=new B,wr=new B,mn=new B,gn=new B,kn=new B,Ls=new B,Wa=new B,qa=new B,On=new B;function tc(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){On.fromArray(s,r);const o=n.x*Math.abs(On.x)+n.y*Math.abs(On.y)+n.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=i.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Iv=new Ye,Us=new B,ec=new B;class fi{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Iv.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=.5*(i-this.radius);this.center.addScaledVector(Us,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(ec)),this.expandByPoint(Us.copy(t.center).sub(ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new B,ic=new B,ja=new B,bn=new B,nc=new B,Xa=new B,rc=new B;class Fa{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ic.copy(t).add(e).multiplyScalar(.5),ja.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(ic);const r=.5*t.distanceTo(e),a=-this.direction.dot(ja),o=bn.dot(this.direction),l=-bn.dot(ja),c=bn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=r*h,u>=0)if(d>=-f)if(d<=f){const m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ic).addScaledVector(ja,d),p}intersectSphere(t,e){qi.subVectors(t.center,this.origin);const i=qi.dot(this.direction),n=qi.dot(qi)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0?!0:t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n?null:((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,e)))}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,i,n,r){nc.subVectors(e,t),Xa.subVectors(i,t),rc.crossVectors(nc,Xa);let a,o=this.direction.dot(rc);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}bn.subVectors(this.origin,t);const l=a*this.direction.dot(Xa.crossVectors(bn,Xa));if(l<0)return null;const c=a*this.direction.dot(nc.cross(bn));if(c<0||l+c>o)return null;const h=-a*bn.dot(rc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(t,e,i,n,r,a,o,l,c,h,u,d,p,f,m,A){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,p,f,m,A)}set(t,e,i,n,r,a,o,l,c,h,u,d,p,f,m,A){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=m,g[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Ir.setFromMatrixColumn(t,0).length(),r=1/Ir.setFromMatrixColumn(t,1).length(),a=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,f=o*h,m=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+f*c,e[5]=d-m*c,e[9]=-o*l,e[2]=m-d*c,e[6]=f+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,f=c*h,m=c*u;e[0]=d+m*o,e[4]=f*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-f,e[6]=m+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,f=c*h,m=c*u;e[0]=d-m*o,e[4]=-a*u,e[8]=f+p*o,e[1]=p+f*o,e[5]=a*h,e[9]=m-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,f=o*h,m=o*u;e[0]=l*h,e[4]=f*c-p,e[8]=d*c+m,e[1]=l*u,e[5]=m*c+d,e[9]=p*c-f,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,f=o*l,m=o*c;e[0]=l*h,e[4]=m-d*u,e[8]=f*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+f,e[10]=d-m*u}else if(t.order==="XZY"){const d=a*l,p=a*c,f=o*l,m=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+m,e[5]=a*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=o*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mv,t,Tv)}lookAt(t,e,i){const n=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),vn.crossVectors(i,Ze),vn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),vn.crossVectors(i,Ze)),vn.normalize(),Ya.crossVectors(Ze,vn),n[0]=vn.x,n[4]=Ya.x,n[8]=Ze.x,n[1]=vn.y,n[5]=Ya.y,n[9]=Ze.y,n[2]=vn.z,n[6]=Ya.z,n[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],m=i[6],A=i[10],g=i[14],b=i[3],v=i[7],y=i[11],_=i[15],E=n[0],x=n[4],I=n[8],T=n[12],L=n[1],H=n[5],U=n[9],O=n[13],F=n[2],q=n[6],N=n[10],K=n[14],$=n[3],lt=n[7],ft=n[11],Y=n[15];return r[0]=a*E+o*L+l*F+c*$,r[4]=a*x+o*H+l*q+c*lt,r[8]=a*I+o*U+l*N+c*ft,r[12]=a*T+o*O+l*K+c*Y,r[1]=h*E+u*L+d*F+p*$,r[5]=h*x+u*H+d*q+p*lt,r[9]=h*I+u*U+d*N+p*ft,r[13]=h*T+u*O+d*K+p*Y,r[2]=f*E+m*L+A*F+g*$,r[6]=f*x+m*H+A*q+g*lt,r[10]=f*I+m*U+A*N+g*ft,r[14]=f*T+m*O+A*K+g*Y,r[3]=b*E+v*L+y*F+_*$,r[7]=b*x+v*H+y*q+_*lt,r[11]=b*I+v*U+y*N+_*ft,r[15]=b*T+v*O+y*K+_*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14];return t[3]*(+r*l*u-n*c*u-r*o*d+i*c*d+n*o*p-i*l*p)+t[7]*(+e*l*p-e*c*d+r*a*d-n*a*p+n*c*h-r*l*h)+t[11]*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+t[15]*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],m=t[13],A=t[14],g=t[15],b=u*A*c-m*d*c+m*l*p-o*A*p-u*l*g+o*d*g,v=f*d*c-h*A*c-f*l*p+a*A*p+h*l*g-a*d*g,y=h*m*c-f*u*c+f*o*p-a*m*p-h*o*g+a*u*g,_=f*u*l-h*m*l-f*o*d+a*m*d+h*o*A-a*u*A,E=e*b+i*v+n*y+r*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/E;return t[0]=b*x,t[1]=(m*d*r-u*A*r-m*n*p+i*A*p+u*n*g-i*d*g)*x,t[2]=(o*A*r-m*l*r+m*n*c-i*A*c-o*n*g+i*l*g)*x,t[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*p-i*l*p)*x,t[4]=v*x,t[5]=(h*A*r-f*d*r+f*n*p-e*A*p-h*n*g+e*d*g)*x,t[6]=(f*l*r-a*A*r-f*n*c+e*A*c+a*n*g-e*l*g)*x,t[7]=(a*d*r-h*l*r+h*n*c-e*d*c-a*n*p+e*l*p)*x,t[8]=y*x,t[9]=(f*u*r-h*m*r-f*i*p+e*m*p+h*i*g-e*u*g)*x,t[10]=(a*m*r-f*o*r+f*i*c-e*m*c-a*i*g+e*o*g)*x,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*x,t[12]=_*x,t[13]=(h*m*n-f*u*n+f*i*d-e*m*d-h*i*A+e*u*A)*x,t[14]=(f*o*n-a*m*n-f*i*l+e*m*l+a*i*A-e*o*A)*x,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*x,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,f=r*u,m=a*h,A=a*u,g=o*u,b=l*c,v=l*h,y=l*u,_=i.x,E=i.y,x=i.z;return n[0]=(1-(m+g))*_,n[1]=(p+y)*_,n[2]=(f-v)*_,n[3]=0,n[4]=(p-y)*E,n[5]=(1-(d+g))*E,n[6]=(A+b)*E,n[7]=0,n[8]=(f+v)*x,n[9]=(A-b)*x,n[10]=(1-(d+m))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Ir.set(n[0],n[1],n[2]).length();const a=Ir.set(n[4],n[5],n[6]).length(),o=Ir.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],_i.copy(this);const l=1/r,c=1/a,h=1/o;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=c,_i.elements[5]*=c,_i.elements[6]*=c,_i.elements[8]*=h,_i.elements[9]*=h,_i.elements[10]*=h,e.setFromRotationMatrix(_i),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=2e3){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let p,f;if(o===ys)p=-(a+r)/(a-r),f=-2*a*r/(a-r);else{if(o!==_l)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-r),f=-a*r/(a-r)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=2e3){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-r),d=(e+t)*c,p=(i+n)*h;let f,m;if(o===ys)f=(a+r)*u,m=-2*u;else{if(o!==_l)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=r*u,m=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ir=new B,_i=new St,Mv=new B(0,0,0),Tv=new B(1,1,1),vn=new B,Ya=new B,Ze=new B,Nd=new St,Qd=new Ke;class Ai{constructor(t=0,e=0,i=0,n=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class ju{constructor(){this.mask=1}set(t){this.mask=1<<t>>>0}enable(t){this.mask|=1<<t}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t}disable(t){this.mask&=~(1<<t)}disableAll(){this.mask=0}test(t){return!!(this.mask&t.mask)}isEnabled(t){return!!(this.mask&1<<t)}}let Bv=0;const kd=new B,Mr=new Ke,ji=new St,Ka=new B,Ps=new B,Rv=new B,Dv=new Ke,Od=new B(1,0,0),Gd=new B(0,1,0),Hd=new B(0,0,1),zd={type:"added"},Lv={type:"removed"},Tr={type:"childadded",child:null},sc={type:"childremoved",child:null};class ne extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ne.DEFAULT_UP.clone();const t=new B,e=new Ai,i=new Ke,n=new B(1,1,1);e._onChange((function(){i.setFromEuler(e,!1)})),i._onChange((function(){e.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new St},normalMatrix:{value:new Ct}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(Od,t)}rotateY(t){return this.rotateOnAxis(Gd,t)}rotateZ(t){return this.rotateOnAxis(Hd,t)}translateOnAxis(t,e){return kd.copy(t).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Od,t)}translateY(t){return this.translateOnAxis(Gd,t)}translateZ(t){return this.translateOnAxis(Hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ka.copy(t):Ka.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Ps,Ka,this.up):ji.lookAt(Ka,Ps,this.up),this.quaternion.setFromRotationMatrix(ji),n&&(ji.extractRotation(n.matrixWorld),Mr.setFromRotationMatrix(ji),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zd),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lv),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zd),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Dv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),f=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ne.DEFAULT_UP=new B(0,1,0),ne.DEFAULT_MATRIX_AUTO_UPDATE=!0,ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new B,Xi=new B,ac=new B,Yi=new B,Br=new B,Rr=new B,Vd=new B,oc=new B,lc=new B,cc=new B,hc=new qt,uc=new qt,dc=new qt;class ni{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ei.subVectors(t,e),n.cross(Ei);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ei.subVectors(n,e),Xi.subVectors(i,e),ac.subVectors(t,e);const a=Ei.dot(Ei),o=Ei.dot(Xi),l=Ei.dot(ac),c=Xi.dot(Xi),h=Xi.dot(ac),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Yi)!==null&&Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return hc.setScalar(0),uc.setScalar(0),dc.setScalar(0),hc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,i),dc.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(hc,r.x),a.addScaledVector(uc,r.y),a.addScaledVector(dc,r.z),a}static isFrontFacing(t,e,i,n){return Ei.subVectors(i,e),Xi.subVectors(t,e),Ei.cross(Xi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),.5*Ei.cross(Xi).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return ni.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;Br.subVectors(n,i),Rr.subVectors(r,i),oc.subVectors(t,i);const l=Br.dot(oc),c=Rr.dot(oc);if(l<=0&&c<=0)return e.copy(i);lc.subVectors(t,n);const h=Br.dot(lc),u=Rr.dot(lc);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Br,a);cc.subVectors(t,r);const p=Br.dot(cc),f=Rr.dot(cc);if(f>=0&&p<=f)return e.copy(r);const m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(i).addScaledVector(Rr,o);const A=h*f-p*u;if(A<=0&&u-h>=0&&p-f>=0)return Vd.subVectors(r,n),o=(u-h)/(u-h+(p-f)),e.copy(n).addScaledVector(Vd,o);const g=1/(A+m+d);return a=m*g,o=d*g,e.copy(i).addScaledVector(Br,a).addScaledVector(Rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function pc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+6*(t-s)*e:e<.5?t:e<2/3?s+6*(t-s)*(2/3-e):s}class bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Ot.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Ot.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ot.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Ot.workingColorSpace){if(t=gu(t,1),e=Ut(e,0,1),i=Ut(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=pc(a,r,t+1/3),this.g=pc(a,r,t),this.b=pc(a,r,t-1/3)}return Ot.toWorkingColorSpace(this,n),this}setStyle(t,e=ae){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){const i=Qm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return Ot.fromWorkingColorSpace(Qe.copy(this),t),65536*Math.round(Ut(255*Qe.r,0,255))+256*Math.round(Ut(255*Qe.g,0,255))+Math.round(Ut(255*Qe.b,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Qe.copy(this),e);const i=Qe.r,n=Qe.g,r=Qe.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=ae){Ot.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,i=Qe.g,n=Qe.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(t,e,i){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(Ja);const i=_a(yn.h,Ja.h,e),n=_a(yn.s,Ja.s,e),r=_a(yn.l,Ja.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new bt;bt.NAMES=Qm;let Uv=0,Mi=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(s){this._alphaTest>0!=s>0&&this.version++,this._alphaTest=s}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(s){if(s!==void 0)for(const t in s){const e=s[t];if(e===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];i!==void 0?i&&i.isColor?i.set(e):i&&i.isVector3&&e&&e.isVector3?i.copy(e):this[t]=e:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(s){const t=s===void 0||typeof s=="string";t&&(s={textures:{},images:{}});const e={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(n){const r=[];for(const a in n){const o=n[a];delete o.metadata,r.push(o)}return r}if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(e.dispersion=this.dispersion),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(s).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(s).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(s).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(s).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(s).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(s).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(s).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(s).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(s).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(s).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapRotation!==void 0&&(e.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(s).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(s).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(s).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(e.blending=this.blending),this.side!==0&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==204&&(e.blendSrc=this.blendSrc),this.blendDst!==205&&(e.blendDst=this.blendDst),this.blendEquation!==lr&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(e.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData),t){const n=i(s.textures),r=i(s.images);n.length>0&&(e.textures=n),r.length>0&&(e.images=r)}return e}clone(){return new this.constructor().copy(this)}copy(s){this.name=s.name,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.blendColor.copy(s.blendColor),this.blendAlpha=s.blendAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;const t=s.clippingPlanes;let e=null;if(t!==null){const i=t.length;e=new Array(i);for(let n=0;n!==i;++n)e[n]=t[n].clone()}return this.clippingPlanes=e,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaHash=s.alphaHash,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.forceSinglePass=s.forceSinglePass,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(s){s===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class ui extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ki=Pv();function Pv(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}class $a{static toHalfFloat(t){return(function(e){Math.abs(e)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=Ut(e,-65504,65504),Ki.floatView[0]=e;const i=Ki.uint32View[0],n=i>>23&511;return Ki.baseTable[n]+((8388607&i)>>Ki.shiftTable[n])})(t)}static fromHalfFloat(t){return(function(e){const i=e>>10;return Ki.uint32View[0]=Ki.mantissaTable[Ki.offsetTable[i]+(1023&e)]+Ki.exponentTable[i],Ki.floatView[0]})(t)}}const _e=new B,Za=new Mt;let Fv=0;class ue{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mu,this.updateRanges=[],this.gpuType=ye,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Za.fromBufferAttribute(this,e),Za.applyMatrix3(t),this.setXY(e,Za.x,Za.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mu&&(t.usage=this.usage),t}}class km extends ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Om extends ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class si extends ue{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Nv=0;const li=new St,Ac=new ne,Dr=new B,ti=new Ye,Fs=new Ye,Te=new B;class $e extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pm(t)?Om:km)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ct().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,e,i){return li.makeTranslation(t,e,i),this.applyMatrix4(li),this}scale(t,e,i){return li.makeScale(t,e,i),this.applyMatrix4(li),this}lookAt(t){return Ac.lookAt(t),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new si(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new B,1/0);if(t){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(ti.min,Fs.min),ti.expandByPoint(Te),Te.addVectors(ti.max,Fs.max),ti.expandByPoint(Te)):(ti.expandByPoint(Fs.min),ti.expandByPoint(Fs.max))}ti.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(Dr.fromBufferAttribute(t,c),Te.add(Dr)),n=Math.max(n,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new B,l[I]=new B;const c=new B,h=new B,u=new B,d=new Mt,p=new Mt,f=new Mt,m=new B,A=new B;function g(I,T,L){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,L),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,T),f.fromBufferAttribute(r,L),h.sub(c),u.sub(c),p.sub(d),f.sub(d);const H=1/(p.x*f.y-f.x*p.y);isFinite(H)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(H),A.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(H),o[I].add(m),o[T].add(m),o[L].add(m),l[I].add(A),l[T].add(A),l[L].add(A))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,T=b.length;I<T;++I){const L=b[I],H=L.start;for(let U=H,O=H+L.count;U<O;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new B,y=new B,_=new B,E=new B;function x(I){_.fromBufferAttribute(n,I),E.copy(_);const T=o[I];v.copy(T),v.sub(_.multiplyScalar(_.dot(T))).normalize(),y.crossVectors(E,T);const L=y.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,L)}for(let I=0,T=b.length;I<T;++I){const L=b[I],H=L.start;for(let U=H,O=H+L.count;U<O;U+=3)x(t.getX(U+0)),x(t.getX(U+1)),x(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ue(new Float32Array(3*e.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let d=0,p=t.count;d<p;d+=3){const f=t.getX(d+0),m=t.getX(d+1),A=t.getX(d+2);n.fromBufferAttribute(e,f),r.fromBufferAttribute(e,m),a.fromBufferAttribute(e,A),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,A),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(A,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,f=0;for(let m=0,A=l.length;m<A;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $e,i=this.index.array,n=this.attributes;for(const o in n){const l=t(n[o],i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=t(c[h],i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wd=new St,Gn=new Fa,to=new fi,qd=new B,eo=new B,io=new B,no=new B,fc=new B,ro=new B,jd=new B,so=new B;class Zt extends ne{constructor(t=new $e,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(fc.fromBufferAttribute(u,t),a?ro.addScaledVector(fc,h):ro.addScaledVector(fc.sub(e),h))}e.add(ro)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),to.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(to,qd)===null||Gn.origin.distanceToSquared(qd)>(t.far-t.near)**2))return;Wd.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Wd),i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(t,e,Gn)}}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){const A=d[f],g=a[A.materialIndex];for(let b=Math.max(A.start,p.start),v=Math.min(o.count,Math.min(A.start+A.count,p.start+p.count));b<v;b+=3)n=ao(this,g,t,i,c,h,u,o.getX(b),o.getX(b+1),o.getX(b+2)),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=A.materialIndex,e.push(n))}else for(let f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);f<m;f+=3)n=ao(this,a,t,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),e.push(n));else if(l!==void 0)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){const A=d[f],g=a[A.materialIndex];for(let b=Math.max(A.start,p.start),v=Math.min(l.count,Math.min(A.start+A.count,p.start+p.count));b<v;b+=3)n=ao(this,g,t,i,c,h,u,b,b+1,b+2),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=A.materialIndex,e.push(n))}else for(let f=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);f<m;f+=3)n=ao(this,a,t,i,c,h,u,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),e.push(n))}}function ao(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,eo),s.getVertexPosition(l,io),s.getVertexPosition(c,no);const h=(function(u,d,p,f,m,A,g,b){let v;if(v=d.side===1?f.intersectTriangle(g,A,m,!0,b):f.intersectTriangle(m,A,g,d.side===0,b),v===null)return null;so.copy(b),so.applyMatrix4(u.matrixWorld);const y=p.ray.origin.distanceTo(so);return y<p.near||y>p.far?null:{distance:y,point:so.clone(),object:u}})(s,t,e,i,eo,io,no,jd);if(h){const u=new B;ni.getBarycoord(jd,eo,io,no,u),n&&(h.uv=ni.getInterpolatedAttribute(n,o,l,c,u,new Mt)),r&&(h.uv1=ni.getInterpolatedAttribute(r,o,l,c,u,new Mt)),a&&(h.normal=ni.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};ni.getNormal(eo,io,no,d.normal),h.face=d,h.barycoord=u}return h}class pn extends $e{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;function f(m,A,g,b,v,y,_,E,x,I,T){const L=y/x,H=_/I,U=y/2,O=_/2,F=E/2,q=x+1,N=I+1;let K=0,$=0;const lt=new B;for(let ft=0;ft<N;ft++){const Y=ft*H-O;for(let J=0;J<q;J++){const ct=J*L-U;lt[m]=ct*b,lt[A]=Y*v,lt[g]=F,c.push(lt.x,lt.y,lt.z),lt[m]=0,lt[A]=0,lt[g]=E>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(J/x),u.push(1-ft/I),K+=1}}for(let ft=0;ft<I;ft++)for(let Y=0;Y<x;Y++){const J=d+Y+q*ft,ct=d+Y+q*(ft+1),at=d+(Y+1)+q*(ft+1),rt=d+(Y+1)+q*ft;l.push(J,ct,rt),l.push(ct,at,rt),$+=6}o.addGroup(p,$,T),p+=$,d+=K}f("z","y","x",-1,-1,i,e,t,a,r,0),f("z","y","x",1,-1,i,e,-t,a,r,1),f("x","z","y",1,1,t,i,e,n,a,2),f("x","z","y",1,-1,t,i,-e,n,a,3),f("x","y","z",1,-1,t,e,i,n,r,4),f("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(h,3)),this.setAttribute("uv",new si(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function We(s){const t={};for(let e=0;e<s.length;e++){const i=Es(s[e]);for(const n in i)t[n]=i[n]}return t}function Gm(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ot.workingColorSpace}const Qv={clone:Es,merge:We};class ai extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=(function(e){const i=[];for(let n=0;n<e.length;n++)i.push(e[n].clone());return i})(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Hm extends ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ys}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new B,Xd=new Mt,Yd=new Mt;class Pe extends Hm{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*_s*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*ya*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*_s*Math.atan(Math.tan(.5*ya*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,Xd,Yd),e.subVectors(Yd,Xd)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*ya*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Lr=-90;class bu extends ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Pe(Lr,1,t,e);n.layers=this.layers,this.add(n);const r=new Pe(Lr,1,t,e);r.layers=this.layers,this.add(r);const a=new Pe(Lr,1,t,e);a.layers=this.layers,this.add(a);const o=new Pe(Lr,1,t,e);o.layers=this.layers,this.add(o);const l=new Pe(Lr,1,t,e);l.layers=this.layers,this.add(l);const c=new Pe(Lr,1,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ys)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(t!==_l)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=m,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class zm extends he{constructor(t,e,i,n,r,a,o,l,c,h){super(t=t!==void 0?t:[],e=e!==void 0?e:fr,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xu extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new zm(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0&&e.generateMipmaps,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zt}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new pn(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const a=new Zt(n,r),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=zt),new bu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}class Tn extends ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kv={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const m of t.hand.values()){const A=e.getJointPose(m,i),g=this._getHandJoint(c,m);A!==null&&(g.matrix.fromArray(A.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=A.radius),g.visible=A!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class mr extends ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ov{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mu,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new B;class Yu{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ci(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kd=new B,Jd=new qt,$d=new qt,Gv=new B,Zd=new St,oo=new B,gc=new fi,tp=new St,bc=new Fa;class Hv extends Zt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bd,this.bindMatrix=new St,this.bindMatrixInverse=new St,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ye),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,oo),this.boundingSphere.expandByPoint(oo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gc.copy(this.boundingSphere),gc.applyMatrix4(n),t.ray.intersectsSphere(gc)!==!1&&(tp.copy(n).invert(),bc.copy(t.ray).applyMatrix4(tp),this.boundingBox!==null&&bc.intersectsBox(this.boundingBox)===!1||this._computeIntersections(t,e,bc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new qt,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Bd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;Jd.fromBufferAttribute(n.attributes.skinIndex,t),$d.fromBufferAttribute(n.attributes.skinWeight,t),Kd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=$d.getComponent(r);if(a!==0){const o=Jd.getComponent(r);Zd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Gv.copy(Kd).applyMatrix4(Zd),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Vm extends ne{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Na extends he{constructor(t=null,e=1,i=1,n,r,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ep=new St,zv=new St;class Ku{constructor(t=[],e=[]){this.uuid=Ii(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new St)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new St;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:zv;ep.multiplyMatrices(o,e[r]),ep.toArray(i,16*r)}n!==null&&(n.needsUpdate=!0)}clone(){return new Ku(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=4*Math.ceil(t/4),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Na(e,t,t,Ae,ye);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const r=t.bones[i];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Vm),this.bones.push(a),this.boneInverses.push(new St().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,r=e.length;n<r;n++){const a=e[n];t.bones.push(a.uuid);const o=i[n];t.boneInverses.push(o.toArray())}return t}}class vu extends ue{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ur=new St,ip=new St,lo=[],np=new Ye,Vv=new St,Ns=new Zt,Qs=new fi;class Wv extends Zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vu(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Vv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ye),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ur),np.copy(t.boundingBox).applyMatrix4(Ur),this.boundingBox.union(np)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ur),Qs.copy(t.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=t*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=n[r+a]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(i),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ur),ip.multiplyMatrices(i,Ur),Ns.matrixWorld=ip,Ns.raycast(t,lo);for(let a=0,o=lo.length;a<o;a++){const l=lo[a];l.instanceId=r,l.object=this,e.push(l)}lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vu(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Na(new Float32Array(n*this.count),n,this.count,Mn,ye));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vc=new B,qv=new B,jv=new Ct;class tr{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=vc.subVectors(i,e).cross(qv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(vc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jv.getNormalMatrix(t),n=this.coplanarPoint(vc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new fi,co=new B;class Ju{constructor(t=new tr,e=new tr,i=new tr,n=new tr,r=new tr,a=new tr){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=2e3){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],f=n[9],m=n[10],A=n[11],g=n[12],b=n[13],v=n[14],y=n[15];if(i[0].setComponents(l-r,d-c,A-p,y-g).normalize(),i[1].setComponents(l+r,d+c,A+p,y+g).normalize(),i[2].setComponents(l+a,d+h,A+f,y+b).normalize(),i[3].setComponents(l-a,d-h,A-f,y-b).normalize(),i[4].setComponents(l-o,d-u,A-m,y-v).normalize(),e===ys)i[5].setComponents(l+o,d+u,A+m,y+v).normalize();else{if(e!==_l)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);i[5].setComponents(o,u,m,v).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(co.x=n.normal.x>0?t.max.x:t.min.x,co.y=n.normal.y>0?t.max.y:t.min.y,co.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wm extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const El=new B,xl=new B,rp=new St,ks=new Fa,ho=new fi,yc=new B,sp=new B;class Ba extends ne{constructor(t=new $e,e=new Wm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)El.fromBufferAttribute(e,n-1),xl.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=El.distanceTo(xl);t.setAttribute("lineDistance",new si(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(n),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;rp.copy(n).invert(),ks.copy(t.ray).applyMatrix4(rp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){const A=h.getX(f),g=h.getX(f+1),b=uo(this,t,ks,l,A,g,f);b&&e.push(b)}if(this.isLineLoop){const f=h.getX(p-1),m=h.getX(d),A=uo(this,t,ks,l,f,m,p-1);A&&e.push(A)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){const A=uo(this,t,ks,l,f,f+1,f);A&&e.push(A)}if(this.isLineLoop){const f=uo(this,t,ks,l,p-1,d,p-1);f&&e.push(f)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function uo(s,t,e,i,n,r,a){const o=s.geometry.attributes.position;if(El.fromBufferAttribute(o,n),xl.fromBufferAttribute(o,r),e.distanceSqToSegment(El,xl,yc,sp)>i)return;yc.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(yc);return l<t.near||l>t.far?void 0:{distance:l,point:sp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const ap=new B,op=new B;class Xv extends Ba{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)ap.fromBufferAttribute(e,n),op.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ap.distanceTo(op);t.setAttribute("lineDistance",new si(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yv extends Ba{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class qm extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lp=new St,yu=new Fa,po=new fi,Ao=new B;class Kv extends ne{constructor(t=new $e,e=new qm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(n),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;lp.copy(n).invert(),yu.copy(t.ray).applyMatrix4(lp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){const p=c.getX(u);Ao.fromBufferAttribute(h,p),cp(Ao,p,l,n,t,e,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Ao.fromBufferAttribute(h,u),cp(Ao,u,l,n,t,e,this)}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function cp(s,t,e,i,n,r,a){const o=yu.distanceSqToPoint(s);if(o<e){const l=new B;yu.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Jv extends he{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:zt,this.magFilter=r!==void 0?r:zt,this.generateMipmaps=!1;const h=this;"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback((function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;!("requestVideoFrameCallback"in t)&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Ar extends he{constructor(t,e,i,n,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:i},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class $v extends Ar{constructor(t,e,i,n,r,a){super(t,e,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=Ce,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zv extends Ar{constructor(t,e,i){super(void 0,t[0].width,t[0].height,e,i,fr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class t0 extends he{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jm extends he{constructor(t,e,i,n,r,a,o,l,c,h=1026){if(h!==Ca&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ca&&(i=Ln),i===void 0&&h===gs&&(i=ms),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ql(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class dn extends $e{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,p=[],f=[],m=[],A=[];for(let g=0;g<h;g++){const b=g*d-a;for(let v=0;v<c;v++){const y=v*u-r;f.push(y,-b,0),m.push(0,0,1),A.push(v/o),A.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){const v=b+c*g,y=b+c*(g+1),_=b+1+c*(g+1),E=b+1+c*g;p.push(v,y,E),p.push(y,_,E)}this.setIndex(p),this.setAttribute("position",new si(f,3)),this.setAttribute("normal",new si(m,3)),this.setAttribute("uv",new si(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}class $u extends $e{constructor(t=1,e=32,i=16,n=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new B,d=new B,p=[],f=[],m=[],A=[];for(let g=0;g<=i;g++){const b=[],v=g/i;let y=0;g===0&&a===0?y=.5/e:g===i&&l===Math.PI&&(y=-.5/e);for(let _=0;_<=e;_++){const E=_/e;u.x=-t*Math.cos(n+E*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(n+E*r)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),A.push(E+y,1-v),b.push(c++)}h.push(b)}for(let g=0;g<i;g++)for(let b=0;b<e;b++){const v=h[g][b+1],y=h[g][b],_=h[g+1][b],E=h[g+1][b+1];(g!==0||a>0)&&p.push(v,y,E),(g!==i-1||l<Math.PI)&&p.push(y,_,E)}this.setIndex(p),this.setAttribute("position",new si(f,3)),this.setAttribute("normal",new si(m,3)),this.setAttribute("uv",new si(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $u(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ra extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hi extends Ra{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xm extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class e0 extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function fo(s,t,e){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function i0(s){const t=s.length,e=new Array(t);for(let i=0;i!==t;++i)e[i]=i;return e.sort((function(i,n){return s[i]-s[n]})),e}function hp(s,t,e){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=e[r]*t;for(let l=0;l!==t;++l)n[a++]=s[o+l]}return n}function Ym(s,t,e,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(t.push(r.time),e.push(a)),r=s[n++];while(r!==void 0)}class Qa{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],r=e[i-1];t:{e:{let a;i:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break e}a=e.length;break i}if(t>=r)break t;{const o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break e}a=i,i=0}}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class n0 extends Qa{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:es,endingEnd:es}}intervalChanged_(t,e,i){const n=this.parameterPositions;let r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case is:r=t,o=2*e-i;break;case vl:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case is:a=t,l=2*i-e;break;case vl:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const c=.5*(i-e),h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-e)/(n-e),m=f*f,A=m*f,g=-d*A+2*d*m-d*f,b=(1+d)*A+(-1.5-2*d)*m+(-.5+d)*f+1,v=(-1-p)*A+(1.5+p)*m+.5*f,y=p*A-p*m;for(let _=0;_!==o;++_)r[_]=g*a[h+_]+b*a[c+_]+v*a[l+_]+y*a[u+_];return r}}class Km extends Qa{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class r0 extends Qa{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class Oi{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fo(e,this.TimeBufferType),this.values=fo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:fo(t.times,Array),values:fo(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new r0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Km(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new n0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case bs:e=this.InterpolantFactoryMethodDiscrete;break;case vs:e=this.InterpolantFactoryMethodLinear;break;case Kl:e=this.InterpolantFactoryMethodSmooth}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(t===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return vs;case this.InterpolantFactoryMethodSmooth:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){const c=i[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(n!==void 0&&(o=n,ArrayBuffer.isView(o)&&!(o instanceof DataView)))for(let l=0,c=n.length;l!==c;++l){const h=n[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}var o;return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Kl,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o];if(c!==t[o+1]&&(o!==1||c!==t[0]))if(n)l=!0;else{const h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){const f=e[h+p];if(f!==e[u+p]||f!==e[d+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[h+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Oi.prototype.TimeBufferType=Float32Array,Oi.prototype.ValueBufferType=Float32Array,Oi.prototype.DefaultInterpolation=vs;class $r extends Oi{constructor(t,e,i){super(t,e,i)}}$r.prototype.ValueTypeName="bool",$r.prototype.ValueBufferType=Array,$r.prototype.DefaultInterpolation=bs,$r.prototype.InterpolantFactoryMethodLinear=void 0,$r.prototype.InterpolantFactoryMethodSmooth=void 0;class Jm extends Oi{}Jm.prototype.ValueTypeName="color";class xs extends Oi{}xs.prototype.ValueTypeName="number";class s0 extends Qa{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e);let c=t*o;for(let h=c+o;c!==h;c+=4)Ke.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ss extends Oi{InterpolantFactoryMethodLinear(t){return new s0(this.times,this.values,this.getValueSize(),t)}}Ss.prototype.ValueTypeName="quaternion",Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends Oi{constructor(t,e,i){super(t,e,i)}}Zr.prototype.ValueTypeName="string",Zr.prototype.ValueBufferType=Array,Zr.prototype.DefaultInterpolation=bs,Zr.prototype.InterpolantFactoryMethodLinear=void 0,Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Oi{}Cs.prototype.ValueTypeName="vector";class _u{constructor(t="",e=-1,i=[],n=2500){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Ii(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(a0(i[a]).scale(n));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=i.length;r!==a;++r)e.push(Oi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=i0(l);l=hp(l,1,h),c=hp(c,1,h),n||l[0]!==0||(l.push(r),c.push(c[0])),a.push(new xs(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,p,f){if(d.length!==0){const m=[],A=[];Ym(d,m,A,p),m.length!==0&&f.push(new h(u,m,A))}},n=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(const f in d){const m=[],A=[];for(let g=0;g!==u[p].morphTargets.length;++g){const b=u[p];m.push(b.time),A.push(b.morphTarget===f?1:0)}n.push(new xs(".morphTargetInfluence["+f+"]",m,A))}l=d.length*a}else{const d=".bones["+e[h].name+"]";i(Cs,d+".position",u,"pos",n),i(Ss,d+".quaternion",u,"rot",n),i(Cs,d+".scale",u,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){let t=0;for(let e=0,i=this.tracks.length;e!==i;++e){const n=this.tracks[e];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function a0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=(function(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return Jm;case"quaternion":return Ss;case"bool":case"boolean":return $r;case"string":return Zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)})(s.type);if(s.times===void 0){const e=[],i=[];Ym(s.keys,e,i,"value"),s.times=e,s.values=i}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Bn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $m{constructor(t,e,i){const n=this;let r,a=!1,o=0,l=0;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}}const o0=new $m;class zi{constructor(t){this.manager=t!==void 0?t:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise((function(n,r){i.load(t,n,e,r)}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}zi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji={};class l0 extends Error{constructor(t,e){super(t),this.response=e}}class un extends zi{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Bn.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout((()=>{e&&e(r),this.manager.itemEnd(t)}),0),r;if(Ji[t]!==void 0)return void Ji[t].push({onLoad:e,onProgress:i,onError:n});Ji[t]=[],Ji[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then((c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ji[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0;let m=0;const A=new ReadableStream({start(g){(function b(){u.read().then((({done:v,value:y})=>{if(v)g.close();else{m+=y.byteLength;const _=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:p});for(let E=0,x=h.length;E<x;E++){const I=h[E];I.onProgress&&I.onProgress(_)}g.enqueue(y),b()}}),(v=>{g.error(v)}))})()}});return new Response(A)}throw new l0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)})).then((c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then((p=>d.decode(p)))}}})).then((c=>{Bn.add(t,c);const h=Ji[t];delete Ji[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}})).catch((c=>{const h=Ji[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ji[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)})).finally((()=>{this.manager.itemEnd(t)})),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class c0 extends zi{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Bn.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout((function(){e&&e(a),r.manager.itemEnd(t)}),0),a;const o=Ta("img");function l(){h(),Bn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),n&&n(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class h0 extends zi{constructor(t){super(t)}load(t,e,i,n){const r=this,a=new Na,o=new un(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,(function(l){let c;try{c=r.parse(l)}catch(h){if(n===void 0)return void console.error(h);n(h)}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ce,a.wrapT=c.wrapT!==void 0?c.wrapT:Ce,a.magFilter=c.magFilter!==void 0?c.magFilter:zt,a.minFilter=c.minFilter!==void 0?c.minFilter:zt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ri),c.mipmapCount===1&&(a.minFilter=zt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)}),i,n),a}}class Zm extends zi{constructor(t){super(t)}load(t,e,i,n){const r=new he,a=new c0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,(function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)}),i,n),r}}class kl extends ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const _c=new St,up=new B,dp=new B;class Zu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ju,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;up.setFromMatrixPosition(t.matrixWorld),e.position.copy(up),dp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dp),e.updateMatrixWorld(),_c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class u0 extends Zu{constructor(){super(new Pe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=2*_s*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;i===e.fov&&n===e.aspect&&r===e.far||(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class d0 extends kl{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.target=new ne,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new u0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const pp=new St,Os=new B,Ec=new B;class p0 extends Zu{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Os.setFromMatrixPosition(t.matrixWorld),i.position.copy(Os),Ec.copy(i.position),Ec.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ec),i.updateMatrixWorld(),n.makeTranslation(-Os.x,-Os.y,-Os.z),pp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pp)}}class tg extends kl{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new p0}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ms extends Hm{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class A0 extends Zu{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eg extends kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.target=new ne,this.shadow=new A0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class f0{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new B)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const i=t.x,n=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*n),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*i),e.addScaledVector(a[4],i*n*1.092548),e.addScaledVector(a[5],n*r*1.092548),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],i*r*1.092548),e.addScaledVector(a[8],.546274*(i*i-n*n)),e}getIrradianceAt(t,e){const i=t.x,n=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],1.023328*n),e.addScaledVector(a[2],1.023328*r),e.addScaledVector(a[3],1.023328*i),e.addScaledVector(a[4],.858086*i*n),e.addScaledVector(a[5],.858086*n*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],.858086*i*r),e.addScaledVector(a[8],.429043*(i*i-n*n)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(t.coefficients[i],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let i=0;i<9;i++)this.coefficients[i].lerp(t.coefficients[i],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(t,e+3*n);return this}toArray(t=[],e=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(t,e+3*n);return t}static getBasisAt(t,e){const i=t.x,n=t.y,r=t.z;e[0]=.282095,e[1]=.488603*n,e[2]=.488603*r,e[3]=.488603*i,e[4]=1.092548*i*n,e[5]=1.092548*n*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*i*r,e[8]=.546274*(i*i-n*n)}}class m0 extends kl{constructor(t=new f0,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Ea{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class g0 extends zi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Bn.get(t);if(a!==void 0)return r.manager.itemStart(t),a.then?void a.then((c=>{e&&e(c),r.manager.itemEnd(t)})).catch((c=>{n&&n(c)})):(setTimeout((function(){e&&e(a),r.manager.itemEnd(t)}),0),a);const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then((function(c){return c.blob()})).then((function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))})).then((function(c){return Bn.add(t,c),e&&e(c),r.manager.itemEnd(t),c})).catch((function(c){n&&n(c),Bn.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)}));Bn.add(t,l),r.manager.itemStart(t)}}class b0 extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class v0{constructor(t,e,i){let n,r,a;switch(this.binding=t,this.valueSize=i,e){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,r=t*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[r+o]=i[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(i,n,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(i[l]!==i[l+e]){o.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let r=i,a=n;r!==a;++r)e[r]=e[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=3*this.valueSize;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,r){if(n>=.5)for(let a=0;a!==r;++a)t[e+a]=t[i+a]}_slerp(t,e,i,n){Ke.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,r){const a=this._workIndex*r;Ke.multiplyQuaternionsFlat(t,a,t,e,t,i),Ke.slerpFlat(t,e,t,e,t,a,n)}_lerp(t,e,i,n,r){const a=1-n;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[i+o]*n}}_lerpAdditive(t,e,i,n,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[i+a]*n}}}const td="\\[\\]\\.:\\/",y0=new RegExp("["+td+"]","g"),xc="[^"+td+"]",_0="[^"+td.replace("\\.","")+"]",E0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",xc)+/(WCOD+)?/.source.replace("WCOD",_0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc)+"$"),x0=["material","materials","bones","map"];class Ht{constructor(t,e,i){this.path=e,this.parsedPath=i||Ht.parseTrackName(e),this.node=Ht.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Ht.Composite(t,e,i):new Ht(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(y0,"")}static parseTrackName(t){const e=E0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);x0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let r=e.propertyIndex;if(t||(t=Ht.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(t[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[i]}if(c!==void 0){if(t[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[c]}}const a=t[n];if(a===void 0){const c=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t)}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=class{constructor(s,t,e){const i=e||Ht.parseTrackName(t);this._targetGroup=s,this._bindings=s.subscribe_(t,i)}getValue(s,t){this.bind();const e=this._targetGroup.nCachedObjects_,i=this._bindings[e];i!==void 0&&i.getValue(s,t)}setValue(s,t){const e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=e.length;i!==n;++i)e[i].setValue(s,t)}bind(){const s=this._bindings;for(let t=this._targetGroup.nCachedObjects_,e=s.length;t!==e;++t)s[t].bind()}unbind(){const s=this._bindings;for(let t=this._targetGroup.nCachedObjects_,e=s.length;t!==e;++t)s[t].unbind()}},Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray],Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class S0{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:es,endingEnd:es};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=fu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){const n=this._clip.duration,r=t._clip.duration,a=r/n,o=n/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,r=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled)return void this._updateWeight(t);const r=this._startTime;if(r!==null){const l=(t-r)*i;l<0||i===0?e=0:(this._startTime=null,e=i*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;if(this.blendMode===2501)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(e*=i.evaluate(t)[0],t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,r=this._loopCount;const a=i===bl;if(t===0)return r===-1||!a||1&~r?n:e-n;if(i===Ma){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else{if(!(n<0)){this.time=n;break t}n=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=e||n<0){const o=Math.floor(n/e);n-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&!(1&~r))return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=is,n.endingEnd=is):(n.endingStart=t?this.zeroSlopeAtStart?is:es:vl,n.endingEnd=e?this.zeroSlopeAtEnd?is:es:vl)}_scheduleFading(t,e,i){const n=this._mixer,r=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=i,this}}const C0=new Float32Array(1);class w0 extends Ti{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,r=n.length,a=t._propertyBindings,o=t._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=n[u],p=d.name;let f=h[p];if(f!==void 0)++f.referenceCount,a[u]=f;else{if(f=a[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}const m=e&&e._propertyBindings[u].binding.parsedPath;f=new v0(Ht.create(i,p,m),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),a[u]=f}o[u].resultBuffer=f.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,r=this._actionsByClip[n];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const r=e[i];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const r=e[i];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=n.length,n.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null,delete o.actionByRoot[(t._localRoot||this._root).uuid],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const r=e[i];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,r=e[n];t._cacheIndex=n,e[n]=t,r._cacheIndex=i,e[i]=r}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,r=e[n];t._cacheIndex=n,e[n]=t,r._cacheIndex=i,e[i]=r}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,r=this._bindings;let a=n[e];a===void 0&&(a={},n[e]=a),a[i]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[n],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,r=e[n];t._cacheIndex=n,e[n]=t,r._cacheIndex=i,e[i]=r}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,r=e[n];t._cacheIndex=n,e[n]=t,r._cacheIndex=i,e[i]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new Km(new Float32Array(2),new Float32Array(2),1,C0),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,r=e[n];t.__cacheIndex=n,e[n]=t,r.__cacheIndex=i,e[i]=r}clipAction(t,e,i){const n=e||this._root,r=n.uuid;let a=typeof t=="string"?_u.findByName(n,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(i===void 0&&(i=a!==null?a.blendMode:dv),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new S0(this,a,e,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){const i=e||this._root,n=i.uuid,r=typeof t=="string"?_u.findByName(i,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==i;++c)e[c]._update(n,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const r in i){const a=i[r].actionByRoot[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const n=this._bindingsByRootAndName[e];if(n!==void 0)for(const r in n){const a=n[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Ap=new St;function fp(s,t){return s.distance-t.distance}function Eu(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Eu(r[a],t,e,!0)}}class $o{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ut(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function mp(s,t,e,i){const n=(function(r){switch(r){case xe:case Ou:return{byteLength:1,components:1};case Sa:case Gu:case Se:return{byteLength:2,components:1};case Hu:case zu:return{byteLength:2,components:4};case Ln:case Nl:case ye:return{byteLength:4,components:1};case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)})(i);switch(e){case 1021:case 1024:return s*t;case 1025:return s*t*2;case Mn:case Vu:return s*t/n.components*n.byteLength;case dr:case Wu:return s*t*2/n.components*n.byteLength;case 1022:return s*t*3/n.components*n.byteLength;case Ae:case qu:return s*t*4/n.components*n.byteLength;case Xo:case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yo:case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jh:case $h:return Math.max(s,16)*Math.max(t,8)/4;case dl:case pl:return Math.max(s,8)*Math.max(t,8)/2;case Al:case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ml:case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case tu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case eu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case iu:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case nu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ru:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case su:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case au:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ou:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case lu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case hu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case va:case uu:case gl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case 36283:case du:return Math.ceil(s/4)*Math.ceil(t/4)*8;case pu:case Au:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ig(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function I0(s){const t=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);const i=t.get(e);i&&(s.deleteBuffer(i.buffer),t.delete(e))},update:function(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){const r=t.get(e);return void((!r||r.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}const n=t.get(e);if(n===void 0)t.set(e,(function(r,a){const o=r.array,l=r.usage,c=o.byteLength,h=s.createBuffer();let u;if(s.bindBuffer(a,h),s.bufferData(a,o,l),r.onUploadCallback(),o instanceof Float32Array)u=s.FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?s.HALF_FLOAT:s.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=s.SHORT;else if(o instanceof Uint32Array)u=s.UNSIGNED_INT;else if(o instanceof Int32Array)u=s.INT;else if(o instanceof Int8Array)u=s.BYTE;else if(o instanceof Uint8Array)u=s.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=s.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:c}})(e,i));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){const l=a.array,c=a.updateRanges;if(s.bindBuffer(o,r),c.length===0)s.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){const d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){const p=c[u];s.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,e,i),n.version=e.version}}}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);const Dt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ht={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Ni={basic:{uniforms:We([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:We([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new bt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:We([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:We([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:We([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new bt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:We([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:We([ht.points,ht.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:We([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:We([ht.common,ht.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:We([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:We([ht.sprite,ht.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:We([ht.common,ht.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:We([ht.lights,ht.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Ni.physical={uniforms:We([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const mo={r:0,b:0,g:0},zn=new Ai,M0=new St;function T0(s,t,e,i,n,r,a){const o=new bt(0);let l,c,h=r===!0?0:1,u=null,d=0,p=null;function f(A){let g=A.isScene===!0?A.background:null;return g&&g.isTexture&&(g=(A.backgroundBlurriness>0?e:t).get(g)),g}function m(A,g){A.getRGB(mo,Gm(s)),i.buffers.color.setClear(mo.r,mo.g,mo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(A,g=1){o.set(A),h=g,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,m(o,h)},render:function(A){let g=!1;const b=f(A);b===null?m(o,h):b&&b.isColor&&(m(b,1),g=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))},addToRenderList:function(A,g){const b=f(g);b&&(b.isCubeTexture||b.mapping===Pl)?(c===void 0&&(c=new Zt(new pn(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Es(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,y,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),zn.copy(g.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(M0.makeRotationFromEuler(zn)),c.material.toneMapped=Ot.getTransfer(b.colorSpace)!==$t,u===b&&d===b.version&&p===s.toneMapping||(c.material.needsUpdate=!0,u=b,d=b.version,p=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Zt(new dn(2,2),new ai({name:"BackgroundMaterial",uniforms:Es(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Ot.getTransfer(b.colorSpace)!==$t,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),u===b&&d===b.version&&p===s.toneMapping||(l.material.needsUpdate=!0,u=b,d=b.version,p=s.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function B0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=c(null);let r=n,a=!1;function o(g){return s.bindVertexArray(g)}function l(g){return s.deleteVertexArray(g)}function c(g){const b=[],v=[],y=[];for(let _=0;_<e;_++)b[_]=0,v[_]=0,y[_]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:v,attributeDivisors:y,object:g,attributes:{},index:null}}function h(){const g=r.newAttributes;for(let b=0,v=g.length;b<v;b++)g[b]=0}function u(g){d(g,0)}function d(g,b){const v=r.newAttributes,y=r.enabledAttributes,_=r.attributeDivisors;v[g]=1,y[g]===0&&(s.enableVertexAttribArray(g),y[g]=1),_[g]!==b&&(s.vertexAttribDivisor(g,b),_[g]=b)}function p(){const g=r.newAttributes,b=r.enabledAttributes;for(let v=0,y=b.length;v<y;v++)b[v]!==g[v]&&(s.disableVertexAttribArray(v),b[v]=0)}function f(g,b,v,y,_,E,x){x===!0?s.vertexAttribIPointer(g,b,v,_,E):s.vertexAttribPointer(g,b,v,y,_,E)}function m(){A(),a=!0,r!==n&&(r=n,o(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(g,b,v,y,_){let E=!1;const x=(function(I,T,L){const H=L.wireframe===!0;let U=i[I.id];U===void 0&&(U={},i[I.id]=U);let O=U[T.id];O===void 0&&(O={},U[T.id]=O);let F=O[H];return F===void 0&&(F=c(s.createVertexArray()),O[H]=F),F})(y,v,b);r!==x&&(r=x,o(r.object)),E=(function(I,T,L,H){const U=r.attributes,O=T.attributes;let F=0;const q=L.getAttributes();for(const N in q)if(q[N].location>=0){const K=U[N];let $=O[N];if($===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),K===void 0||K.attribute!==$||$&&K.data!==$.data)return!0;F++}return r.attributesNum!==F||r.index!==H})(g,y,v,_),E&&(function(I,T,L,H){const U={},O=T.attributes;let F=0;const q=L.getAttributes();for(const N in q)if(q[N].location>=0){let K=O[N];K===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const $={};$.attribute=K,K&&K.data&&($.data=K.data),U[N]=$,F++}r.attributes=U,r.attributesNum=F,r.index=H})(g,y,v,_),_!==null&&t.update(_,s.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(I,T,L,H){h();const U=H.attributes,O=L.getAttributes(),F=T.defaultAttributeValues;for(const q in O){const N=O[q];if(N.location>=0){let K=U[q];if(K===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const $=K.normalized,lt=K.itemSize,ft=t.get(K);if(ft===void 0)continue;const Y=ft.buffer,J=ft.type,ct=ft.bytesPerElement,at=J===s.INT||J===s.UNSIGNED_INT||K.gpuType===Nl;if(K.isInterleavedBufferAttribute){const rt=K.data,C=rt.stride,w=K.offset;if(rt.isInstancedInterleavedBuffer){for(let R=0;R<N.locationSize;R++)d(N.location+R,rt.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let R=0;R<N.locationSize;R++)u(N.location+R);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let R=0;R<N.locationSize;R++)f(N.location+R,lt/N.locationSize,J,$,C*ct,(w+lt/N.locationSize*R)*ct,at)}else{if(K.isInstancedBufferAttribute){for(let rt=0;rt<N.locationSize;rt++)d(N.location+rt,K.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let rt=0;rt<N.locationSize;rt++)u(N.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let rt=0;rt<N.locationSize;rt++)f(N.location+rt,lt/N.locationSize,J,$,lt*ct,lt/N.locationSize*rt*ct,at)}}else if(F!==void 0){const $=F[q];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(N.location,$);break;case 3:s.vertexAttrib3fv(N.location,$);break;case 4:s.vertexAttrib4fv(N.location,$);break;default:s.vertexAttrib1fv(N.location,$)}}}}p()})(g,b,v,y),_!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(_).buffer))},reset:m,resetDefaultState:A,dispose:function(){m();for(const g in i){const b=i[g];for(const v in b){const y=b[v];for(const _ in y)l(y[_].object),delete y[_];delete b[v]}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;const b=i[g.id];for(const v in b){const y=b[v];for(const _ in y)l(y[_].object),delete y[_];delete b[v]}delete i[g.id]},releaseStatesOfProgram:function(g){for(const b in i){const v=i[b];if(v[g.id]===void 0)continue;const y=v[g.id];for(const _ in y)l(y[_].object),delete y[_];delete v[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function R0(s,t,e){let i;function n(r,a,o){o!==0&&(s.drawArraysInstanced(i,r,a,o),e.update(a,i,o))}this.setMode=function(r){i=r},this.render=function(r,a){s.drawArrays(i,r,a),e.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(r,a,o){if(o===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,r,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];e.update(l,i,1)},this.renderMultiDrawInstances=function(r,a,o,l){if(o===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<r.length;h++)n(r[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,r,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];e.update(h,i,1)}}}function D0(s,t,e,i){let n;function r(d){if(d==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const d=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,textureFormatReadable:function(d){return d===Ae||i.convert(d)===s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){const p=d===Se&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(d!==xe&&i.convert(d)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==ye&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:s.getParameter(s.MAX_TEXTURE_SIZE),maxCubemapSize:s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:s.getParameter(s.MAX_VERTEX_ATTRIBS),maxVertexUniforms:s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:s.getParameter(s.MAX_VARYING_VECTORS),maxFragmentUniforms:s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:s.getParameter(s.MAX_SAMPLES)}}function L0(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new tr,o=new Ct,l={value:null,needsUpdate:!1};function c(h,u,d,p){const f=h!==null?h.length:0;let m=null;if(f!==0){if(m=l.value,p!==!0||m===null){const A=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<A)&&(m=new Float32Array(A));for(let b=0,v=d;b!==f;++b,v+=4)a.copy(h[b]).applyMatrix4(g,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||i!==0||n;return n=u,i=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=c(h,u,0)},this.setState=function(h,u,d){const p=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,A=s.get(h);if(!n||p===null||p.length===0||r&&!m)r?c(null):(function(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0})();else{const g=r?0:i,b=4*g;let v=A.clippingState||null;l.value=v,v=c(p,u,b,d);for(let y=0;y!==b;++y)v[y]=e[y];A.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function U0(s){let t=new WeakMap;function e(n,r){return r===ul?n.mapping=fr:r===304&&(n.mapping=As),n}function i(n){const r=n.target;r.removeEventListener("dispose",i);const a=t.get(r);a!==void 0&&(t.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){const r=n.mapping;if(r===ul||r===304){if(t.has(n))return e(t.get(n).texture,n.mapping);{const a=n.image;if(a&&a.height>0){const o=new Xu(a.height);return o.fromEquirectangularTexture(s,n),t.set(n,o),n.addEventListener("dispose",i),e(o.texture,n.mapping)}return null}}}return n},dispose:function(){t=new WeakMap}}}const gp=[.125,.215,.35,.446,.526,.582],Gs=20,Sc=new Ms,bp=new bt;let Cc=null,wc=0,Ic=0,Mc=!1;const er=(1+Math.sqrt(5))/2,Pr=1/er,vp=[new B(-er,Pr,0),new B(er,Pr,0),new B(-Pr,0,er),new B(Pr,0,er),new B(0,er,-Pr),new B(0,er,Pr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],P0=new B;class yp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=P0}=r;Cc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cc,wc,Ic),this._renderer.xr.enabled=Mc,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Se,format:Ae,colorSpace:oe,depthBuffer:!1},n=_p(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){const o=[],l=[],c=[];let h=a;const u=a-4+1+gp.length;for(let d=0;d<u;d++){const p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=gp[d-a+4-1]:d===0&&(f=0),c.push(f);const m=1/(p-2),A=-m,g=1+m,b=[A,A,g,A,g,g,A,A,g,g,A,g],v=6,y=6,_=3,E=2,x=1,I=new Float32Array(_*y*v),T=new Float32Array(E*y*v),L=new Float32Array(x*y*v);for(let U=0;U<v;U++){const O=U%3*2/3-1,F=U>2?0:-1,q=[O,F,0,O+2/3,F,0,O+2/3,F+1,0,O,F,0,O+2/3,F+1,0,O,F+1,0];I.set(q,_*y*U),T.set(b,E*y*U);const N=[U,U,U,U,U,U];L.set(N,x*y*U)}const H=new $e;H.setAttribute("position",new ue(I,_)),H.setAttribute("uv",new ue(T,E)),H.setAttribute("faceIndex",new ue(L,x)),o.push(H),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(r)),this._blurMaterial=(function(a,o,l){const c=new Float32Array(Gs),h=new B(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(r,t,e)}return n}_compileMaterial(t){const e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,Sc)}_sceneToCubeUV(t,e,i,n,r){const a=new Pe(90,1,e,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(bp),c.toneMapping=0,c.autoClear=!1;const d=new ui({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new Zt(new pn,d);let f=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,f=!0):(d.color.copy(bp),f=!0);for(let A=0;A<6;A++){const g=A%3;g===0?(a.up.set(0,o[A],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+l[A],r.y,r.z)):g===1?(a.up.set(0,0,o[A]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+l[A],r.z)):(a.up.set(0,o[A],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+l[A]));const b=this._cubeSize;go(n,g*b,A>2?b:0,b,b),c.setRenderTarget(n),f&&c.render(p,a),c.render(t,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=u,c.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===fr||t.mapping===As;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new Zt(this._lodPlanes[0],r);r.uniforms.envMap.value=t;const o=this._cubeSize;go(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(a,Sc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vp[(n-r-1)%vp.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=new Zt(this._lodPlanes[n],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,f=r/p,m=isFinite(r)?1+Math.floor(3*f):Gs;m>Gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const A=[];let g=0;for(let y=0;y<Gs;++y){const _=y/f,E=Math.exp(-_*_/2);A.push(E),y===0?g+=E:y<m&&(g+=2*E)}for(let y=0;y<A.length;y++)A[y]=A[y]/g;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=A,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=p,u.mipInt.value=b-i;const v=this._sizeLods[n];go(e,3*v*(n>b-4?n-b+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(e),l.render(h,Sc)}}function _p(s,t,e){const i=new pi(s,t,e);return i.texture.mapping=Pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function go(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Ep(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xp(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function F0(s){let t=new WeakMap,e=null;function i(n){const r=n.target;r.removeEventListener("dispose",i);const a=t.get(r);a!==void 0&&(t.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){const r=n.mapping,a=r===ul||r===304,o=r===fr||r===As;if(a||o){let l=t.get(n);const c=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return e===null&&(e=new yp(s)),l=a?e.fromEquirectangular(n,l):e.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,t.set(n,l),l.texture;if(l!==void 0)return l.texture;{const h=n.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0;const p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(e===null&&(e=new yp(s)),l=a?e.fromEquirectangular(n):e.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,t.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}}}function N0(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Zn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Q0(s,t,e,i){const n={},r=new WeakMap;function a(l){const c=l.target;c.index!==null&&t.remove(c.index);for(const u in c.attributes)t.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete n[c.id];const h=r.get(c);h&&(t.remove(h),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(l){const c=[],h=l.index,u=l.attributes.position;let d=0;if(h!==null){const m=h.array;d=h.version;for(let A=0,g=m.length;A<g;A+=3){const b=m[A+0],v=m[A+1],y=m[A+2];c.push(b,v,v,y,y,b)}}else{if(u===void 0)return;{const m=u.array;d=u.version;for(let A=0,g=m.length/3-1;A<g;A+=3){const b=A+0,v=A+1,y=A+2;c.push(b,v,v,y,y,b)}}}const p=new(Pm(c)?Om:km)(c,1);p.version=d;const f=r.get(l);f&&t.remove(f),r.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,e.memory.geometries++),c},update:function(l){const c=l.attributes;for(const h in c)t.update(c[h],s.ARRAY_BUFFER)},getWireframeAttribute:function(l){const c=r.get(l);if(c){const h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function k0(s,t,e){let i,n,r;function a(o,l,c){c!==0&&(s.drawElementsInstanced(i,l,n,o*r,c),e.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,r=o.bytesPerElement},this.render=function(o,l){s.drawElements(i,l,n,o*r),e.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];e.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/r,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];e.update(d,i,1)}}}function O0(s){const t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(e,i,n){switch(t.calls++,i){case s.TRIANGLES:t.triangles+=n*(e/3);break;case s.LINES:t.lines+=n*(e/2);break;case s.LINE_STRIP:t.lines+=n*(e-1);break;case s.LINE_LOOP:t.lines+=n*e;break;case s.POINTS:t.points+=n*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function G0(s,t,e){const i=new WeakMap,n=new qt;return{update:function(r,a,o){const l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let I=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let b=0;d===!0&&(b=1),p===!0&&(b=2),f===!0&&(b=3);let v=a.attributes.position.count*b,y=1;v>t.maxTextureSize&&(y=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const _=new Float32Array(v*y*4*h),E=new Fm(_,v,y,h);E.type=ye,E.needsUpdate=!0;const x=4*b;for(let T=0;T<h;T++){const L=m[T],H=A[T],U=g[T],O=v*y*4*T;for(let F=0;F<L.count;F++){const q=F*x;d===!0&&(n.fromBufferAttribute(L,F),_[O+q+0]=n.x,_[O+q+1]=n.y,_[O+q+2]=n.z,_[O+q+3]=0),p===!0&&(n.fromBufferAttribute(H,F),_[O+q+4]=n.x,_[O+q+5]=n.y,_[O+q+6]=n.z,_[O+q+7]=0),f===!0&&(n.fromBufferAttribute(U,F),_[O+q+8]=n.x,_[O+q+9]=n.y,_[O+q+10]=n.z,_[O+q+11]=U.itemSize===4?n.w:1)}}u={count:h,texture:E,size:new Mt(v,y)},i.set(a,u),a.addEventListener("dispose",I)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];const p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(s,"morphTargetBaseInfluence",p),o.getUniforms().setValue(s,"morphTargetInfluences",l)}o.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),o.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}}}function H0(s,t,e,i){let n=new WeakMap;function r(a){const o=a.target;o.removeEventListener("dispose",r),e.remove(o.instanceMatrix),o.instanceColor!==null&&e.remove(o.instanceColor)}return{update:function(a){const o=i.render.frame,l=a.geometry,c=t.get(a,l);if(n.get(c)!==o&&(t.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),n.get(a)!==o&&(e.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,s.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){const h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}const ng=new he,Sp=new jm(1,1),rg=new Fm,sg=new Nm,ag=new zm,Cp=[],wp=[],Ip=new Float32Array(16),Mp=new Float32Array(9),Tp=new Float32Array(4);function Ts(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Cp[n];if(r===void 0&&(r=new Float32Array(n),Cp[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ie(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ol(s,t){let e=wp[t];e===void 0&&(e=new Int32Array(t),wp[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function z0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function V0(s,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Ie(e,t)}}function W0(s,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)e[0]===t.r&&e[1]===t.g&&e[2]===t.b||(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Ie(e,t)}}function q0(s,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Ie(e,t)}}function j0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(we(e,i))return;Tp.set(i),s.uniformMatrix2fv(this.addr,!1,Tp),Ie(e,i)}}function X0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(we(e,i))return;Mp.set(i),s.uniformMatrix3fv(this.addr,!1,Mp),Ie(e,i)}}function Y0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(we(e,i))return;Ip.set(i),s.uniformMatrix4fv(this.addr,!1,Ip),Ie(e,i)}}function K0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function J0(s,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Ie(e,t)}}function $0(s,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Ie(e,t)}}function Z0(s,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Ie(e,t)}}function ty(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ey(s,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Ie(e,t)}}function iy(s,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Ie(e,t)}}function ny(s,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Ie(e,t)}}function ry(s,t,e){const i=this.cache,n=e.allocateTextureUnit();let r;i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),this.type===s.SAMPLER_2D_SHADOW?(Sp.compareFunction=515,r=Sp):r=ng,e.setTexture2D(t||r,n)}function sy(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||sg,n)}function ay(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ag,n)}function oy(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||rg,n)}function ly(s,t){s.uniform1fv(this.addr,t)}function cy(s,t){const e=Ts(t,this.size,2);s.uniform2fv(this.addr,e)}function hy(s,t){const e=Ts(t,this.size,3);s.uniform3fv(this.addr,e)}function uy(s,t){const e=Ts(t,this.size,4);s.uniform4fv(this.addr,e)}function dy(s,t){const e=Ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function py(s,t){const e=Ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ay(s,t){const e=Ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function fy(s,t){s.uniform1iv(this.addr,t)}function my(s,t){s.uniform2iv(this.addr,t)}function gy(s,t){s.uniform3iv(this.addr,t)}function by(s,t){s.uniform4iv(this.addr,t)}function vy(s,t){s.uniform1uiv(this.addr,t)}function yy(s,t){s.uniform2uiv(this.addr,t)}function _y(s,t){s.uniform3uiv(this.addr,t)}function Ey(s,t){s.uniform4uiv(this.addr,t)}function xy(s,t,e){const i=this.cache,n=t.length,r=Ol(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||ng,r[a])}function Sy(s,t,e){const i=this.cache,n=t.length,r=Ol(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||sg,r[a])}function Cy(s,t,e){const i=this.cache,n=t.length,r=Ol(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||ag,r[a])}function wy(s,t,e){const i=this.cache,n=t.length,r=Ol(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||rg,r[a])}class Iy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=(function(n){switch(n){case 5126:return z0;case 35664:return V0;case 35665:return W0;case 35666:return q0;case 35674:return j0;case 35675:return X0;case 35676:return Y0;case 5124:case 35670:return K0;case 35667:case 35671:return J0;case 35668:case 35672:return $0;case 35669:case 35673:return Z0;case 5125:return ty;case 36294:return ey;case 36295:return iy;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}})(e.type)}}class My{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=(function(n){switch(n){case 5126:return ly;case 35664:return cy;case 35665:return hy;case 35666:return uy;case 35674:return dy;case 35675:return py;case 35676:return Ay;case 5124:case 35670:return fy;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return by;case 5125:return vy;case 36294:return yy;case 36295:return _y;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return wy}})(e.type)}}class Ty{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function Bp(s,t){s.seq.push(t),s.map[t.id]=t}function By(s,t,e){const i=s.name,n=i.length;for(Tc.lastIndex=0;;){const r=Tc.exec(i),a=Tc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){Bp(e,c===void 0?new Iy(o,s,t):new My(o,s,t));break}{let h=e.map[o];h===void 0&&(h=new Ty(o),Bp(e,h)),e=h}}}class Zo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n);By(r,t.getUniformLocation(e,r.name),this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Rp(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}let Ry=0;const Dp=new Ct;function Lp(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+(function(o,l){const c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){const f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(s.getShaderSource(t),a)}return n}function Dy(s,t){const e=(function(i){Ot._getMatrix(Dp,Ot.workingColorSpace,i);const n=`mat3( ${Dp.elements.map((r=>r.toFixed(4)))} )`;switch(Ot.getTransfer(i)){case yl:return[n,"LinearTransferOETF"];case $t:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ly(s,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bo=new B;function Uy(){return Ot.getLuminanceCoefficients(bo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${bo.x.toFixed(4)}, ${bo.y.toFixed(4)}, ${bo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hs(s){return s!==""}function Up(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(s){return s.replace(Py,Ny)}const Fy=new Map;function Ny(s,t){let e=Dt[t];if(e===void 0){const i=Fy.get(t);if(i===void 0)throw new Error("Can not resolve #include <"+t+">");e=Dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i)}return xu(e)}const Qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(s){return s.replace(Qy,ky)}function ky(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Np(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Oy(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=(function(H){let U="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===1?U="SHADOWMAP_TYPE_PCF":H.shadowMapType===2?U="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===3&&(U="SHADOWMAP_TYPE_VSM"),U})(e),c=(function(H){let U="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case fr:case As:U="ENVMAP_TYPE_CUBE";break;case Pl:U="ENVMAP_TYPE_CUBE_UV"}return U})(e),h=(function(H){let U="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===As&&(U="ENVMAP_MODE_REFRACTION"),U})(e),u=(function(H){let U="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case 0:U="ENVMAP_BLENDING_MULTIPLY";break;case 1:U="ENVMAP_BLENDING_MIX";break;case 2:U="ENVMAP_BLENDING_ADD"}return U})(e),d=(function(H){const U=H.envMapCubeUVHeight;if(U===null)return null;const O=Math.log2(U)-2,F=1/U;return{texelWidth:1/(3*Math.max(Math.pow(2,O),112)),texelHeight:F,maxMip:O}})(e),p=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)})(e),f=(function(H){const U=[];for(const O in H){const F=H[O];F!==!1&&U.push("#define "+O+" "+F)}return U.join(`
`)})(r),m=n.createProgram();let A,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Hs).join(`
`),A.length>0&&(A+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Hs).join(`
`),g.length>0&&(g+=`
`)):(A=[Np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),g=[Np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Dt.tonemapping_pars_fragment:"",e.toneMapping!==0?Ly("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Dy("linearToOutputTexel",e.outputColorSpace),Uy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=xu(a),a=Up(a,e),a=Pp(a,e),o=xu(o),o=Up(o,e),o=Pp(o,e),a=Fp(a),o=Fp(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,A=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,g=["#define varying in",e.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=b+A+a,y=b+g+o,_=Rp(n,n.VERTEX_SHADER,v),E=Rp(n,n.FRAGMENT_SHADER,y);function x(H){if(s.debug.checkShaderErrors){const U=n.getProgramInfoLog(m).trim(),O=n.getShaderInfoLog(_).trim(),F=n.getShaderInfoLog(E).trim();let q=!0,N=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,m,_,E);else{const K=Lp(n,_,"vertex"),$=Lp(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+U+`
`+K+`
`+$)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):O!==""&&F!==""||(N=!1);N&&(H.diagnostics={runnable:q,programLog:U,vertexShader:{log:O,prefix:A},fragmentShader:{log:F,prefix:g}})}n.deleteShader(_),n.deleteShader(E),I=new Zo(n,m),T=(function(U,O){const F={},q=U.getProgramParameter(O,U.ACTIVE_ATTRIBUTES);for(let N=0;N<q;N++){const K=U.getActiveAttrib(O,N),$=K.name;let lt=1;K.type===U.FLOAT_MAT2&&(lt=2),K.type===U.FLOAT_MAT3&&(lt=3),K.type===U.FLOAT_MAT4&&(lt=4),F[$]={type:K.type,location:U.getAttribLocation(O,$),locationSize:lt}}return F})(n,m)}let I,T;n.attachShader(m,_),n.attachShader(m,E),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),this.getUniforms=function(){return I===void 0&&x(this),I},this.getAttributes=function(){return T===void 0&&x(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=n.getProgramParameter(m,37297)),L},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ry++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=E,this}let Gy=0;class Hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new zy(t),e.set(t,i)),i}}class zy{constructor(t){this.id=Gy++,this.code=t,this.usedTimes=0}}function Vy(s,t,e,i,n,r,a){const o=new ju,l=new Hy,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(A){return c.add(A),A===0?"uv":`uv${A}`}return{getParameters:function(A,g,b,v,y){const _=v.fog,E=y.geometry,x=A.isMeshStandardMaterial?v.environment:null,I=(A.isMeshStandardMaterial?e:t).get(A.envMap||x),T=I&&I.mapping===Pl?I.image.height:null,L=f[A.type];A.precision!==null&&(p=n.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const H=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,U=H!==void 0?H.length:0;let O,F,q,N,K=0;if(E.morphAttributes.position!==void 0&&(K=1),E.morphAttributes.normal!==void 0&&(K=2),E.morphAttributes.color!==void 0&&(K=3),L){const Rs=Ni[L];O=Rs.vertexShader,F=Rs.fragmentShader}else O=A.vertexShader,F=A.fragmentShader,l.update(A),q=l.getVertexShaderID(A),N=l.getFragmentShaderID(A);const $=s.getRenderTarget(),lt=s.state.buffers.depth.getReversed(),ft=y.isInstancedMesh===!0,Y=y.isBatchedMesh===!0,J=!!A.map,ct=!!A.matcap,at=!!I,rt=!!A.aoMap,C=!!A.lightMap,w=!!A.bumpMap,R=!!A.normalMap,X=!!A.displacementMap,P=!!A.emissiveMap,z=!!A.metalnessMap,M=!!A.roughnessMap,G=A.anisotropy>0,V=A.clearcoat>0,ot=A.dispersion>0,Q=A.iridescence>0,it=A.sheen>0,tt=A.transmission>0,et=G&&!!A.anisotropyMap,ut=V&&!!A.clearcoatMap,mt=V&&!!A.clearcoatNormalMap,vt=V&&!!A.clearcoatRoughnessMap,Rt=Q&&!!A.iridescenceMap,Vt=Q&&!!A.iridescenceThicknessMap,Gt=it&&!!A.sheenColorMap,yt=it&&!!A.sheenRoughnessMap,Wt=!!A.specularMap,re=!!A.specularColorMap,fe=!!A.specularIntensityMap,gt=tt&&!!A.transmissionMap,kt=tt&&!!A.thicknessMap,te=!!A.gradientMap,vr=!!A.alphaMap,Oa=A.alphaTest>0,mi=!!A.alphaHash,Bi=!!A.extensions;let Pn=0;A.toneMapped&&($!==null&&$.isXRRenderTarget!==!0||(Pn=s.toneMapping));const D={shaderID:L,shaderType:A.type,shaderName:A.name,vertexShader:O,fragmentShader:F,defines:A.defines,customVertexShaderID:q,customFragmentShaderID:N,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Y,batchingColor:Y&&y._colorsTexture!==null,instancing:ft,instancingColor:ft&&y.instanceColor!==null,instancingMorph:ft&&y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:oe,alphaToCoverage:!!A.alphaToCoverage,map:J,matcap:ct,envMap:at,envMapMode:at&&I.mapping,envMapCubeUVHeight:T,aoMap:rt,lightMap:C,bumpMap:w,normalMap:R,displacementMap:d&&X,emissiveMap:P,normalMapObjectSpace:R&&A.normalMapType===1,normalMapTangentSpace:R&&A.normalMapType===0,metalnessMap:z,roughnessMap:M,anisotropy:G,anisotropyMap:et,clearcoat:V,clearcoatMap:ut,clearcoatNormalMap:mt,clearcoatRoughnessMap:vt,dispersion:ot,iridescence:Q,iridescenceMap:Rt,iridescenceThicknessMap:Vt,sheen:it,sheenColorMap:Gt,sheenRoughnessMap:yt,specularMap:Wt,specularColorMap:re,specularIntensityMap:fe,transmission:tt,transmissionMap:gt,thicknessMap:kt,gradientMap:te,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:vr,alphaTest:Oa,alphaHash:mi,combine:A.combine,mapUv:J&&m(A.map.channel),aoMapUv:rt&&m(A.aoMap.channel),lightMapUv:C&&m(A.lightMap.channel),bumpMapUv:w&&m(A.bumpMap.channel),normalMapUv:R&&m(A.normalMap.channel),displacementMapUv:X&&m(A.displacementMap.channel),emissiveMapUv:P&&m(A.emissiveMap.channel),metalnessMapUv:z&&m(A.metalnessMap.channel),roughnessMapUv:M&&m(A.roughnessMap.channel),anisotropyMapUv:et&&m(A.anisotropyMap.channel),clearcoatMapUv:ut&&m(A.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&m(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&m(A.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&m(A.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&m(A.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(A.sheenRoughnessMap.channel),specularMapUv:Wt&&m(A.specularMap.channel),specularColorMapUv:re&&m(A.specularColorMap.channel),specularIntensityMapUv:fe&&m(A.specularIntensityMap.channel),transmissionMapUv:gt&&m(A.transmissionMap.channel),thicknessMapUv:kt&&m(A.thicknessMap.channel),alphaMapUv:vr&&m(A.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(R||G),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!E.attributes.uv&&(J||vr),fog:!!_,useFog:A.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:lt,skinning:y.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:K,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&b.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pn,decodeVideoTexture:J&&A.map.isVideoTexture===!0&&Ot.getTransfer(A.map.colorSpace)===$t,decodeVideoTextureEmissive:P&&A.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(A.emissiveMap.colorSpace)===$t,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Bi&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bi&&A.extensions.multiDraw===!0||Y)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return D.vertexUv1s=c.has(1),D.vertexUv2s=c.has(2),D.vertexUv3s=c.has(3),c.clear(),D},getProgramCacheKey:function(A){const g=[];if(A.shaderID?g.push(A.shaderID):(g.push(A.customVertexShaderID),g.push(A.customFragmentShaderID)),A.defines!==void 0)for(const b in A.defines)g.push(b),g.push(A.defines[b]);return A.isRawShaderMaterial===!1&&((function(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)})(g,A),(function(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)})(g,A),g.push(s.outputColorSpace)),g.push(A.customProgramCacheKey),g.join()},getUniforms:function(A){const g=f[A.type];let b;if(g){const v=Ni[g];b=Qv.clone(v.uniforms)}else b=A.uniforms;return b},acquireProgram:function(A,g){let b;for(let v=0,y=h.length;v<y;v++){const _=h[v];if(_.cacheKey===g){b=_,++b.usedTimes;break}}return b===void 0&&(b=new Oy(s,g,A,r),h.push(b)),b},releaseProgram:function(A){if(--A.usedTimes==0){const g=h.indexOf(A);h[g]=h[h.length-1],h.pop(),A.destroy()}},releaseShaderCache:function(A){l.remove(A)},programs:h,dispose:function(){l.dispose()}}}function Wy(){let s=new WeakMap;return{has:function(t){return s.has(t)},get:function(t){let e=s.get(t);return e===void 0&&(e={},s.set(t,e)),e},remove:function(t){s.delete(t)},update:function(t,e,i){s.get(t)[e]=i},dispose:function(){s=new WeakMap}}}function qy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Qp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function kp(){const s=[];let t=0;const e=[],i=[],n=[];function r(a,o,l,c,h,u){let d=s[t];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},s[t]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),t++,d}return{opaque:e,transmissive:i,transparent:n,init:function(){t=0,e.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,u){const d=r(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):e.push(d)},unshift:function(a,o,l,c,h,u){const d=r(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):e.unshift(d)},finish:function(){for(let a=t,o=s.length;a<o;a++){const l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){e.length>1&&e.sort(a||qy),i.length>1&&i.sort(o||Qp),n.length>1&&n.sort(o||Qp)}}}function jy(){let s=new WeakMap;return{get:function(t,e){const i=s.get(t);let n;return i===void 0?(n=new kp,s.set(t,[n])):e>=i.length?(n=new kp,i.push(n)):n=i[e],n},dispose:function(){s=new WeakMap}}}function Xy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new bt};break;case"SpotLight":e={position:new B,direction:new B,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new B,halfWidth:new B,halfHeight:new B}}return s[t.id]=e,e}}}let Yy=0;function Ky(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Jy(s){const t=new Xy,e=(function(){const o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new B);const n=new B,r=new St,a=new St;return{setup:function(o){let l=0,c=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let u=0,d=0,p=0,f=0,m=0,A=0,g=0,b=0,v=0,y=0,_=0;o.sort(Ky);for(let x=0,I=o.length;x<I;x++){const T=o[x],L=T.color,H=T.intensity,U=T.distance,O=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)l+=L.r*H,c+=L.g*H,h+=L.b*H;else if(T.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(T.sh.coefficients[F],H);_++}else if(T.isDirectionalLight){const F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const q=T.shadow,N=e.get(T);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.directionalShadow[u]=N,i.directionalShadowMap[u]=O,i.directionalShadowMatrix[u]=T.shadow.matrix,A++}i.directional[u]=F,u++}else if(T.isSpotLight){const F=t.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(L).multiplyScalar(H),F.distance=U,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,i.spot[p]=F;const q=T.shadow;if(T.map&&(i.spotLightMap[v]=T.map,v++,q.updateMatrices(T),T.castShadow&&y++),i.spotLightMatrix[p]=q.matrix,T.castShadow){const N=e.get(T);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.spotShadow[p]=N,i.spotShadowMap[p]=O,b++}p++}else if(T.isRectAreaLight){const F=t.get(T);F.color.copy(L).multiplyScalar(H),F.halfWidth.set(.5*T.width,0,0),F.halfHeight.set(0,.5*T.height,0),i.rectArea[f]=F,f++}else if(T.isPointLight){const F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){const q=T.shadow,N=e.get(T);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,N.shadowCameraNear=q.camera.near,N.shadowCameraFar=q.camera.far,i.pointShadow[d]=N,i.pointShadowMap[d]=O,i.pointShadowMatrix[d]=T.shadow.matrix,g++}i.point[d]=F,d++}else if(T.isHemisphereLight){const F=t.get(T);F.skyColor.copy(T.color).multiplyScalar(H),F.groundColor.copy(T.groundColor).multiplyScalar(H),i.hemi[m]=F,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;const E=i.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===f&&E.hemiLength===m&&E.numDirectionalShadows===A&&E.numPointShadows===g&&E.numSpotShadows===b&&E.numSpotMaps===v&&E.numLightProbes===_||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=b+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=_,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=f,E.hemiLength=m,E.numDirectionalShadows=A,E.numPointShadows=g,E.numSpotShadows=b,E.numSpotMaps=v,E.numLightProbes=_,i.version=Yy++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0;const f=l.matrixWorldInverse;for(let m=0,A=o.length;m<A;m++){const g=o[m];if(g.isDirectionalLight){const b=i.directional[c];b.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(f),c++}else if(g.isSpotLight){const b=i.spot[u];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(f),u++}else if(g.isRectAreaLight){const b=i.rectArea[d];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(g.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(.5*g.width,0,0),b.halfHeight.set(0,.5*g.height,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(g.matrixWorld),b.direction.transformDirection(f),p++}}},state:i}}function Op(s){const t=new Jy(s),e=[],i=[],n={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:function(r){n.camera=r,e.length=0,i.length=0},state:n,setupLights:function(){t.setup(e)},setupLightsView:function(r){t.setupView(e,r)},pushLight:function(r){e.push(r)},pushShadow:function(r){i.push(r)}}}function $y(s){let t=new WeakMap;return{get:function(e,i=0){const n=t.get(e);let r;return n===void 0?(r=new Op(s),t.set(e,[r])):i>=n.length?(r=new Op(s),n.push(r)):r=n[i],r},dispose:function(){t=new WeakMap}}}function Zy(s,t,e){let i=new Ju;const n=new Mt,r=new Mt,a=new qt,o=new Xm({depthPacking:3201}),l=new e0,c={},h=e.maxTextureSize,u={[Qb]:1,[kb]:0,[Ob]:2},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new $e;f.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Zt(f,d),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function b(E,x){const I=t.update(m);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pi(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,I,d,m,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,I,p,m,null)}function v(E,x,I,T){let L=null;const H=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(H!==void 0)L=H;else if(L=I.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const U=L.uuid,O=x.uuid;let F=c[U];F===void 0&&(F={},c[U]=F);let q=F[O];q===void 0&&(q=L.clone(),F[O]=q,x.addEventListener("dispose",_)),L=q}return L.visible=x.visible,L.wireframe=x.wireframe,L.side=T===3?x.shadowSide!==null?x.shadowSide:x.side:x.shadowSide!==null?x.shadowSide:u[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,I.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(s.properties.get(L).light=I),L}function y(E,x,I,T,L){if(E.visible===!1)return;if(E.layers.test(x.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===3)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const U=t.update(E),O=E.material;if(Array.isArray(O)){const F=U.groups;for(let q=0,N=F.length;q<N;q++){const K=F[q],$=O[K.materialIndex];if($&&$.visible){const lt=v(E,$,T,L);E.onBeforeShadow(s,E,x,I,U,lt,K),s.renderBufferDirect(I,null,U,lt,E,K),E.onAfterShadow(s,E,x,I,U,lt,K)}}}else if(O.visible){const F=v(E,O,T,L);E.onBeforeShadow(s,E,x,I,U,F,null),s.renderBufferDirect(I,null,U,F,E,null),E.onAfterShadow(s,E,x,I,U,F,null)}}const H=E.children;for(let U=0,O=H.length;U<O;U++)y(H[U],x,I,T,L)}function _(E){E.target.removeEventListener("dispose",_);for(const x in c){const I=c[x],T=E.target.uuid;T in I&&(I[T].dispose(),delete I[T])}}this.render=function(E,x,I){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||E.length===0)return;const T=s.getRenderTarget(),L=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),U=s.state;U.setBlending(0),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=g!==3&&this.type===3,F=g===3&&this.type!==3;for(let q=0,N=E.length;q<N;q++){const K=E[q],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);const lt=$.getFrameExtents();if(n.multiply(lt),r.copy($.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/lt.x),n.x=r.x*lt.x,$.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/lt.y),n.y=r.y*lt.y,$.mapSize.y=r.y)),$.map===null||O===!0||F===!0){const Y=this.type!==3?{minFilter:Fe,magFilter:Fe}:{};$.map!==null&&$.map.dispose(),$.map=new pi(n.x,n.y,Y),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const ft=$.getViewportCount();for(let Y=0;Y<ft;Y++){const J=$.getViewport(Y);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(a),$.updateMatrices(K,Y),i=$.getFrustum(),y(x,I,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===3&&b($,I),$.needsUpdate=!1}g=this.type,A.needsUpdate=!1,s.setRenderTarget(T,L,H)}}const t_={[rv]:1,[av]:6,[lv]:7,[ov]:5,[sv]:0,[hv]:2,[uv]:4,[cv]:3};function e_(s,t){const e=new function(){let M=!1;const G=new qt;let V=null;const ot=new qt(0,0,0,0);return{setMask:function(Q){V===Q||M||(s.colorMask(Q,Q,Q,Q),V=Q)},setLocked:function(Q){M=Q},setClear:function(Q,it,tt,et,ut){ut===!0&&(Q*=et,it*=et,tt*=et),G.set(Q,it,tt,et),ot.equals(G)===!1&&(s.clearColor(Q,it,tt,et),ot.copy(G))},reset:function(){M=!1,V=null,ot.set(-1,0,0,0)}}},i=new function(){let M=!1,G=!1,V=null,ot=null,Q=null;return{setReversed:function(it){if(G!==it){const tt=t.get("EXT_clip_control");G?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT);const et=Q;Q=null,this.setClear(et)}G=it},getReversed:function(){return G},setTest:function(it){it?at(s.DEPTH_TEST):rt(s.DEPTH_TEST)},setMask:function(it){V===it||M||(s.depthMask(it),V=it)},setFunc:function(it){if(G&&(it=t_[it]),ot!==it){switch(it){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}ot=it}},setLocked:function(it){M=it},setClear:function(it){Q!==it&&(G&&(it=1-it),s.clearDepth(it),Q=it)},reset:function(){M=!1,V=null,ot=null,Q=null,G=!1}}},n=new function(){let M=!1,G=null,V=null,ot=null,Q=null,it=null,tt=null,et=null,ut=null;return{setTest:function(mt){M||(mt?at(s.STENCIL_TEST):rt(s.STENCIL_TEST))},setMask:function(mt){G===mt||M||(s.stencilMask(mt),G=mt)},setFunc:function(mt,vt,Rt){V===mt&&ot===vt&&Q===Rt||(s.stencilFunc(mt,vt,Rt),V=mt,ot=vt,Q=Rt)},setOp:function(mt,vt,Rt){it===mt&&tt===vt&&et===Rt||(s.stencilOp(mt,vt,Rt),it=mt,tt=vt,et=Rt)},setLocked:function(mt){M=mt},setClear:function(mt){ut!==mt&&(s.clearStencil(mt),ut=mt)},reset:function(){M=!1,G=null,V=null,ot=null,Q=null,it=null,tt=null,et=null,ut=null}}},r=new WeakMap,a=new WeakMap;let o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,A=null,g=null,b=null,v=null,y=new bt(0,0,0),_=0,E=!1,x=null,I=null,T=null,L=null,H=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,F=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=F>=1):q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=F>=2);let N=null,K={};const $=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),ft=new qt().fromArray($),Y=new qt().fromArray(lt);function J(M,G,V,ot){const Q=new Uint8Array(4),it=s.createTexture();s.bindTexture(M,it),s.texParameteri(M,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(M,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<V;tt++)M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY?s.texImage3D(G,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(G+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return it}const ct={};function at(M){o[M]!==!0&&(s.enable(M),o[M]=!0)}function rt(M){o[M]!==!1&&(s.disable(M),o[M]=!1)}ct[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),e.setClear(0,0,0,1),i.setClear(1),n.setClear(0),at(s.DEPTH_TEST),i.setFunc(3),X(!1),P(1),at(s.CULL_FACE),R(0);const C={[lr]:s.FUNC_ADD,[Gb]:s.FUNC_SUBTRACT,[Hb]:s.FUNC_REVERSE_SUBTRACT};C[103]=s.MIN,C[104]=s.MAX;const w={[zb]:s.ZERO,[Vb]:s.ONE,[Wb]:s.SRC_COLOR,[jb]:s.SRC_ALPHA,[Zb]:s.SRC_ALPHA_SATURATE,[Jb]:s.DST_COLOR,[Yb]:s.DST_ALPHA,[qb]:s.ONE_MINUS_SRC_COLOR,[Xb]:s.ONE_MINUS_SRC_ALPHA,[$b]:s.ONE_MINUS_DST_COLOR,[Kb]:s.ONE_MINUS_DST_ALPHA,[tv]:s.CONSTANT_COLOR,[ev]:s.ONE_MINUS_CONSTANT_COLOR,[iv]:s.CONSTANT_ALPHA,[nv]:s.ONE_MINUS_CONSTANT_ALPHA};function R(M,G,V,ot,Q,it,tt,et,ut,mt){if(M!==0){if(d===!1&&(at(s.BLEND),d=!0),M===5)Q=Q||G,it=it||V,tt=tt||ot,G===f&&Q===g||(s.blendEquationSeparate(C[G],C[Q]),f=G,g=Q),V===m&&ot===A&&it===b&&tt===v||(s.blendFuncSeparate(w[V],w[ot],w[it],w[tt]),m=V,A=ot,b=it,v=tt),et.equals(y)!==!1&&ut===_||(s.blendColor(et.r,et.g,et.b,ut),y.copy(et),_=ut),p=M,E=!1;else if(M!==p||mt!==E){if(f===lr&&g===lr||(s.blendEquation(s.FUNC_ADD),f=lr,g=lr),mt)switch(M){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}m=null,A=null,b=null,v=null,y.set(0,0,0),_=0,p=M,E=mt}}else d===!0&&(rt(s.BLEND),d=!1)}function X(M){x!==M&&(M?s.frontFace(s.CW):s.frontFace(s.CCW),x=M)}function P(M){M!==0?(at(s.CULL_FACE),M!==I&&(M===1?s.cullFace(s.BACK):M===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):rt(s.CULL_FACE),I=M}function z(M,G,V){M?(at(s.POLYGON_OFFSET_FILL),L===G&&H===V||(s.polygonOffset(G,V),L=G,H=V)):rt(s.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:i,stencil:n},enable:at,disable:rt,bindFramebuffer:function(M,G){return l[M]!==G&&(s.bindFramebuffer(M,G),l[M]=G,M===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=G),M===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=G),!0)},drawBuffers:function(M,G){let V=h,ot=!1;if(M){V=c.get(G),V===void 0&&(V=[],c.set(G,V));const Q=M.textures;if(V.length!==Q.length||V[0]!==s.COLOR_ATTACHMENT0){for(let it=0,tt=Q.length;it<tt;it++)V[it]=s.COLOR_ATTACHMENT0+it;V.length=Q.length,ot=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,ot=!0);ot&&s.drawBuffers(V)},useProgram:function(M){return u!==M&&(s.useProgram(M),u=M,!0)},setBlending:R,setMaterial:function(M,G){M.side===2?rt(s.CULL_FACE):at(s.CULL_FACE);let V=M.side===1;G&&(V=!V),X(V),M.blending===1&&M.transparent===!1?R(0):R(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),i.setFunc(M.depthFunc),i.setTest(M.depthTest),i.setMask(M.depthWrite),e.setMask(M.colorWrite);const ot=M.stencilWrite;n.setTest(ot),ot&&(n.setMask(M.stencilWriteMask),n.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),n.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),z(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):rt(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:X,setCullFace:P,setLineWidth:function(M){M!==T&&(O&&s.lineWidth(M),T=M)},setPolygonOffset:z,setScissorTest:function(M){M?at(s.SCISSOR_TEST):rt(s.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=s.TEXTURE0+U-1),N!==M&&(s.activeTexture(M),N=M)},bindTexture:function(M,G,V){V===void 0&&(V=N===null?s.TEXTURE0+U-1:N);let ot=K[V];ot===void 0&&(ot={type:void 0,texture:void 0},K[V]=ot),ot.type===M&&ot.texture===G||(N!==V&&(s.activeTexture(V),N=V),s.bindTexture(M,G||ct[M]),ot.type=M,ot.texture=G)},unbindTexture:function(){const M=K[N];M!==void 0&&M.type!==void 0&&(s.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{s.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{s.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{s.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,G){let V=a.get(G);V===void 0&&(V=new WeakMap,a.set(G,V));let ot=V.get(M);ot===void 0&&(ot=s.getUniformBlockIndex(G,M.name),V.set(M,ot))},uniformBlockBinding:function(M,G){const V=a.get(G).get(M);r.get(G)!==V&&(s.uniformBlockBinding(G,V,M.__bindingPointIndex),r.set(G,V))},texStorage2D:function(){try{s.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{s.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{s.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{s.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){ft.equals(M)===!1&&(s.scissor(M.x,M.y,M.z,M.w),ft.copy(M))},viewport:function(M){Y.equals(M)===!1&&(s.viewport(M.x,M.y,M.z,M.w),Y.copy(M))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),i.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),o={},N=null,K={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,A=null,g=null,b=null,v=null,y=new bt(0,0,0),_=0,E=!1,x=null,I=null,T=null,L=null,H=null,ft.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),e.reset(),i.reset(),n.reset()}}}function i_(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,w){return p?new OffscreenCanvas(C,w):Ta("canvas")}function m(C,w,R){let X=1;const P=rt(C);if((P.width>R||P.height>R)&&(X=R/Math.max(P.width,P.height)),X<1){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const z=Math.floor(X*P.width),M=Math.floor(X*P.height);u===void 0&&(u=f(z,M));const G=w?f(z,M):u;return G.width=z,G.height=M,G.getContext("2d").drawImage(C,0,0,z,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+z+"x"+M+")."),G}return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),C}return C}function A(C){return C.generateMipmaps}function g(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,w,R,X,P=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let z=w;if(w===s.RED&&(R===s.FLOAT&&(z=s.R32F),R===s.HALF_FLOAT&&(z=s.R16F),R===s.UNSIGNED_BYTE&&(z=s.R8)),w===s.RED_INTEGER&&(R===s.UNSIGNED_BYTE&&(z=s.R8UI),R===s.UNSIGNED_SHORT&&(z=s.R16UI),R===s.UNSIGNED_INT&&(z=s.R32UI),R===s.BYTE&&(z=s.R8I),R===s.SHORT&&(z=s.R16I),R===s.INT&&(z=s.R32I)),w===s.RG&&(R===s.FLOAT&&(z=s.RG32F),R===s.HALF_FLOAT&&(z=s.RG16F),R===s.UNSIGNED_BYTE&&(z=s.RG8)),w===s.RG_INTEGER&&(R===s.UNSIGNED_BYTE&&(z=s.RG8UI),R===s.UNSIGNED_SHORT&&(z=s.RG16UI),R===s.UNSIGNED_INT&&(z=s.RG32UI),R===s.BYTE&&(z=s.RG8I),R===s.SHORT&&(z=s.RG16I),R===s.INT&&(z=s.RG32I)),w===s.RGB_INTEGER&&(R===s.UNSIGNED_BYTE&&(z=s.RGB8UI),R===s.UNSIGNED_SHORT&&(z=s.RGB16UI),R===s.UNSIGNED_INT&&(z=s.RGB32UI),R===s.BYTE&&(z=s.RGB8I),R===s.SHORT&&(z=s.RGB16I),R===s.INT&&(z=s.RGB32I)),w===s.RGBA_INTEGER&&(R===s.UNSIGNED_BYTE&&(z=s.RGBA8UI),R===s.UNSIGNED_SHORT&&(z=s.RGBA16UI),R===s.UNSIGNED_INT&&(z=s.RGBA32UI),R===s.BYTE&&(z=s.RGBA8I),R===s.SHORT&&(z=s.RGBA16I),R===s.INT&&(z=s.RGBA32I)),w===s.RGB&&R===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),w===s.RGBA){const M=P?yl:Ot.getTransfer(X);R===s.FLOAT&&(z=s.RGBA32F),R===s.HALF_FLOAT&&(z=s.RGBA16F),R===s.UNSIGNED_BYTE&&(z=M===$t?s.SRGB8_ALPHA8:s.RGBA8),R===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),R===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return z!==s.R16F&&z!==s.R32F&&z!==s.RG16F&&z!==s.RG32F&&z!==s.RGBA16F&&z!==s.RGBA32F||t.get("EXT_color_buffer_float"),z}function y(C,w){let R;return C?w===null||w===Ln||w===ms?R=s.DEPTH24_STENCIL8:w===ye?R=s.DEPTH32F_STENCIL8:w===Sa&&(R=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ln||w===ms?R=s.DEPTH_COMPONENT24:w===ye?R=s.DEPTH_COMPONENT32F:w===Sa&&(R=s.DEPTH_COMPONENT16),R}function _(C,w){return A(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fe&&C.minFilter!==zt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function E(C){const w=C.target;w.removeEventListener("dispose",E),(function(R){const X=i.get(R);if(X.__webglInit===void 0)return;const P=R.source,z=d.get(P);if(z){const M=z[X.__cacheKey];M.usedTimes--,M.usedTimes===0&&I(R),Object.keys(z).length===0&&d.delete(P)}i.remove(R)})(w),w.isVideoTexture&&h.delete(w)}function x(C){const w=C.target;w.removeEventListener("dispose",x),(function(R){const X=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(X.__webglFramebuffer[z]))for(let M=0;M<X.__webglFramebuffer[z].length;M++)s.deleteFramebuffer(X.__webglFramebuffer[z][M]);else s.deleteFramebuffer(X.__webglFramebuffer[z]);X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[z])}else{if(Array.isArray(X.__webglFramebuffer))for(let z=0;z<X.__webglFramebuffer.length;z++)s.deleteFramebuffer(X.__webglFramebuffer[z]);else s.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let z=0;z<X.__webglColorRenderbuffer.length;z++)X.__webglColorRenderbuffer[z]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[z]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}const P=R.textures;for(let z=0,M=P.length;z<M;z++){const G=i.get(P[z]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(P[z])}i.remove(R)})(w)}function I(C){const w=i.get(C);s.deleteTexture(w.__webglTexture);const R=C.source;delete d.get(R)[w.__cacheKey],a.memory.textures--}let T=0;function L(C,w){const R=i.get(C);if(C.isVideoTexture&&(function(X){const P=a.render.frame;h.get(X)!==P&&(h.set(X,P),X.update())})(C),C.isRenderTargetTexture===!1&&C.version>0&&R.__version!==C.version){const X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(X.complete!==!1)return void N(R,C,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}e.bindTexture(s.TEXTURE_2D,R.__webglTexture,s.TEXTURE0+w)}const H={[Gi]:s.REPEAT,[Ce]:s.CLAMP_TO_EDGE,[fs]:s.MIRRORED_REPEAT},U={[Fe]:s.NEAREST,[Fl]:s.NEAREST_MIPMAP_NEAREST,[ur]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[ls]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},O={[pv]:s.NEVER,[yv]:s.ALWAYS,[Av]:s.LESS,[mv]:s.LEQUAL,[fv]:s.EQUAL,[vv]:s.GEQUAL,[gv]:s.GREATER,[bv]:s.NOTEQUAL};function F(C,w){if(w.type!==ye||t.has("OES_texture_float_linear")!==!1||w.magFilter!==zt&&w.magFilter!==ls&&w.magFilter!==ur&&w.magFilter!==ri&&w.minFilter!==zt&&w.minFilter!==ls&&w.minFilter!==ur&&w.minFilter!==ri||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,H[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,H[w.wrapT]),C!==s.TEXTURE_3D&&C!==s.TEXTURE_2D_ARRAY||s.texParameteri(C,s.TEXTURE_WRAP_R,H[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,U[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,U[w.minFilter]),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fe||w.minFilter!==ur&&w.minFilter!==ri||w.type===ye&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const R=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function q(C,w){let R=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",E));const X=w.source;let P=d.get(X);P===void 0&&(P={},d.set(X,P));const z=(function(M){const G=[];return G.push(M.wrapS),G.push(M.wrapT),G.push(M.wrapR||0),G.push(M.magFilter),G.push(M.minFilter),G.push(M.anisotropy),G.push(M.internalFormat),G.push(M.format),G.push(M.type),G.push(M.generateMipmaps),G.push(M.premultiplyAlpha),G.push(M.flipY),G.push(M.unpackAlignment),G.push(M.colorSpace),G.join()})(w);if(z!==C.__cacheKey){P[z]===void 0&&(P[z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,R=!0),P[z].usedTimes++;const M=P[C.__cacheKey];M!==void 0&&(P[C.__cacheKey].usedTimes--,M.usedTimes===0&&I(w)),C.__cacheKey=z,C.__webglTexture=P[z].texture}return R}function N(C,w,R){let X=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(X=s.TEXTURE_3D);const P=q(C,w),z=w.source;e.bindTexture(X,C.__webglTexture,s.TEXTURE0+R);const M=i.get(z);if(z.version!==M.__version||P===!0){e.activeTexture(s.TEXTURE0+R);const G=Ot.getPrimaries(Ot.workingColorSpace),V=w.colorSpace===ln?null:Ot.getPrimaries(w.colorSpace),ot=w.colorSpace===ln||G===V?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Q=m(w.image,!1,n.maxTextureSize);Q=at(w,Q);const it=r.convert(w.format,w.colorSpace),tt=r.convert(w.type);let et,ut=v(w.internalFormat,it,tt,w.colorSpace,w.isVideoTexture);F(X,w);const mt=w.mipmaps,vt=w.isVideoTexture!==!0,Rt=M.__version===void 0||P===!0,Vt=z.dataReady,Gt=_(w,Q);if(w.isDepthTexture)ut=y(w.format===gs,w.type),Rt&&(vt?e.texStorage2D(s.TEXTURE_2D,1,ut,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,ut,Q.width,Q.height,0,it,tt,null));else if(w.isDataTexture)if(mt.length>0){vt&&Rt&&e.texStorage2D(s.TEXTURE_2D,Gt,ut,mt[0].width,mt[0].height);for(let yt=0,Wt=mt.length;yt<Wt;yt++)et=mt[yt],vt?Vt&&e.texSubImage2D(s.TEXTURE_2D,yt,0,0,et.width,et.height,it,tt,et.data):e.texImage2D(s.TEXTURE_2D,yt,ut,et.width,et.height,0,it,tt,et.data);w.generateMipmaps=!1}else vt?(Rt&&e.texStorage2D(s.TEXTURE_2D,Gt,ut,Q.width,Q.height),Vt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,it,tt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,ut,Q.width,Q.height,0,it,tt,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){vt&&Rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,ut,mt[0].width,mt[0].height,Q.depth);for(let yt=0,Wt=mt.length;yt<Wt;yt++)if(et=mt[yt],w.format!==Ae)if(it!==null)if(vt){if(Vt)if(w.layerUpdates.size>0){const re=mp(et.width,et.height,w.format,w.type);for(const fe of w.layerUpdates){const gt=et.data.subarray(fe*re/et.data.BYTES_PER_ELEMENT,(fe+1)*re/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,fe,et.width,et.height,1,it,gt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,et.width,et.height,Q.depth,it,et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,yt,ut,et.width,et.height,Q.depth,0,et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?Vt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,et.width,et.height,Q.depth,it,tt,et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,yt,ut,et.width,et.height,Q.depth,0,it,tt,et.data)}else{vt&&Rt&&e.texStorage2D(s.TEXTURE_2D,Gt,ut,mt[0].width,mt[0].height);for(let yt=0,Wt=mt.length;yt<Wt;yt++)et=mt[yt],w.format!==Ae?it!==null?vt?Vt&&e.compressedTexSubImage2D(s.TEXTURE_2D,yt,0,0,et.width,et.height,it,et.data):e.compressedTexImage2D(s.TEXTURE_2D,yt,ut,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?Vt&&e.texSubImage2D(s.TEXTURE_2D,yt,0,0,et.width,et.height,it,tt,et.data):e.texImage2D(s.TEXTURE_2D,yt,ut,et.width,et.height,0,it,tt,et.data)}else if(w.isDataArrayTexture)if(vt){if(Rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,ut,Q.width,Q.height,Q.depth),Vt)if(w.layerUpdates.size>0){const yt=mp(Q.width,Q.height,w.format,w.type);for(const Wt of w.layerUpdates){const re=Q.data.subarray(Wt*yt/Q.data.BYTES_PER_ELEMENT,(Wt+1)*yt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Wt,Q.width,Q.height,1,it,tt,re)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,it,tt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ut,Q.width,Q.height,Q.depth,0,it,tt,Q.data);else if(w.isData3DTexture)vt?(Rt&&e.texStorage3D(s.TEXTURE_3D,Gt,ut,Q.width,Q.height,Q.depth),Vt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,it,tt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,ut,Q.width,Q.height,Q.depth,0,it,tt,Q.data);else if(w.isFramebufferTexture){if(Rt)if(vt)e.texStorage2D(s.TEXTURE_2D,Gt,ut,Q.width,Q.height);else{let yt=Q.width,Wt=Q.height;for(let re=0;re<Gt;re++)e.texImage2D(s.TEXTURE_2D,re,ut,yt,Wt,0,it,tt,null),yt>>=1,Wt>>=1}}else if(mt.length>0){if(vt&&Rt){const yt=rt(mt[0]);e.texStorage2D(s.TEXTURE_2D,Gt,ut,yt.width,yt.height)}for(let yt=0,Wt=mt.length;yt<Wt;yt++)et=mt[yt],vt?Vt&&e.texSubImage2D(s.TEXTURE_2D,yt,0,0,it,tt,et):e.texImage2D(s.TEXTURE_2D,yt,ut,it,tt,et);w.generateMipmaps=!1}else if(vt){if(Rt){const yt=rt(Q);e.texStorage2D(s.TEXTURE_2D,Gt,ut,yt.width,yt.height)}Vt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it,tt,Q)}else e.texImage2D(s.TEXTURE_2D,0,ut,it,tt,Q);A(w)&&g(X),M.__version=z.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function K(C,w,R,X,P,z){const M=r.convert(R.format,R.colorSpace),G=r.convert(R.type),V=v(R.internalFormat,M,G,R.colorSpace),ot=i.get(w),Q=i.get(R);if(Q.__renderTarget=w,!ot.__hasExternalTextures){const it=Math.max(1,w.width>>z),tt=Math.max(1,w.height>>z);P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?e.texImage3D(P,z,V,it,tt,w.depth,0,M,G,null):e.texImage2D(P,z,V,it,tt,0,M,G,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),ct(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,P,Q.__webglTexture,0,J(w)):(P===s.TEXTURE_2D||P>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,P,Q.__webglTexture,z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function $(C,w,R){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer){const X=w.depthTexture,P=X&&X.isDepthTexture?X.type:null,z=y(w.stencilBuffer,P),M=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=J(w);ct(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G,z,w.width,w.height):R?s.renderbufferStorageMultisample(s.RENDERBUFFER,G,z,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,z,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,M,s.RENDERBUFFER,C)}else{const X=w.textures;for(let P=0;P<X.length;P++){const z=X[P],M=r.convert(z.format,z.colorSpace),G=r.convert(z.type),V=v(z.internalFormat,M,G,z.colorSpace),ot=J(w);R&&ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,V,w.width,w.height):ct(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,V,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,V,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(C){const w=i.get(C),R=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),X){const P=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,X.removeEventListener("dispose",P)};X.addEventListener("dispose",P),w.__depthDisposeCallback=P}w.__boundDepthTexture=X}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");(function(X,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,X),!P.depthTexture||!P.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(P.depthTexture);z.__renderTarget=P,z.__webglTexture&&P.depthTexture.image.width===P.width&&P.depthTexture.image.height===P.height||(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),L(P.depthTexture,0);const M=z.__webglTexture,G=J(P);if(P.depthTexture.format===Ca)ct(P)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,M,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,M,0);else{if(P.depthTexture.format!==gs)throw new Error("Unknown depthTexture format");ct(P)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,M,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,M,0)}})(w.__webglFramebuffer,C)}else if(R){w.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[X]),w.__webglDepthbuffer[X]===void 0)w.__webglDepthbuffer[X]=s.createRenderbuffer(),$(w.__webglDepthbuffer[X],C,!1);else{const P=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=w.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,P,s.RENDERBUFFER,z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),$(w.__webglDepthbuffer,C,!1);else{const X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,P=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,P),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,P)}e.bindFramebuffer(s.FRAMEBUFFER,null)}const ft=[],Y=[];function J(C){return Math.min(n.maxSamples,C.samples)}function ct(C){const w=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function at(C,w){const R=C.colorSpace,X=C.format,P=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||R!==oe&&R!==ln&&(Ot.getTransfer(R)===$t?X===Ae&&P===xe||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),w}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=function(){const C=T;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),T+=1,C},this.resetTextureUnits=function(){T=0},this.setTexture2D=L,this.setTexture2DArray=function(C,w){const R=i.get(C);C.version>0&&R.__version!==C.version?N(R,C,w):e.bindTexture(s.TEXTURE_2D_ARRAY,R.__webglTexture,s.TEXTURE0+w)},this.setTexture3D=function(C,w){const R=i.get(C);C.version>0&&R.__version!==C.version?N(R,C,w):e.bindTexture(s.TEXTURE_3D,R.__webglTexture,s.TEXTURE0+w)},this.setTextureCube=function(C,w){const R=i.get(C);C.version>0&&R.__version!==C.version?(function(X,P,z){if(P.image.length!==6)return;const M=q(X,P),G=P.source;e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+z);const V=i.get(G);if(G.version!==V.__version||M===!0){e.activeTexture(s.TEXTURE0+z);const ot=Ot.getPrimaries(Ot.workingColorSpace),Q=P.colorSpace===ln?null:Ot.getPrimaries(P.colorSpace),it=P.colorSpace===ln||ot===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const tt=P.isCompressedTexture||P.image[0].isCompressedTexture,et=P.image[0]&&P.image[0].isDataTexture,ut=[];for(let gt=0;gt<6;gt++)ut[gt]=tt||et?et?P.image[gt].image:P.image[gt]:m(P.image[gt],!0,n.maxCubemapSize),ut[gt]=at(P,ut[gt]);const mt=ut[0],vt=r.convert(P.format,P.colorSpace),Rt=r.convert(P.type),Vt=v(P.internalFormat,vt,Rt,P.colorSpace),Gt=P.isVideoTexture!==!0,yt=V.__version===void 0||M===!0,Wt=G.dataReady;let re,fe=_(P,mt);if(F(s.TEXTURE_CUBE_MAP,P),tt){Gt&&yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Vt,mt.width,mt.height);for(let gt=0;gt<6;gt++){re=ut[gt].mipmaps;for(let kt=0;kt<re.length;kt++){const te=re[kt];P.format!==Ae?vt!==null?Gt?Wt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt,0,0,te.width,te.height,vt,te.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt,Vt,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?Wt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt,0,0,te.width,te.height,vt,Rt,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt,Vt,te.width,te.height,0,vt,Rt,te.data)}}}else{if(re=P.mipmaps,Gt&&yt){re.length>0&&fe++;const gt=rt(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Vt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(et){Gt?Wt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ut[gt].width,ut[gt].height,vt,Rt,ut[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Vt,ut[gt].width,ut[gt].height,0,vt,Rt,ut[gt].data);for(let kt=0;kt<re.length;kt++){const te=re[kt].image[gt].image;Gt?Wt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt+1,0,0,te.width,te.height,vt,Rt,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt+1,Vt,te.width,te.height,0,vt,Rt,te.data)}}else{Gt?Wt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,vt,Rt,ut[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Vt,vt,Rt,ut[gt]);for(let kt=0;kt<re.length;kt++){const te=re[kt];Gt?Wt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt+1,0,0,vt,Rt,te.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt+1,Vt,vt,Rt,te.image[gt])}}}A(P)&&g(s.TEXTURE_CUBE_MAP),V.__version=G.version,P.onUpdate&&P.onUpdate(P)}X.__version=P.version})(R,C,w):e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+w)},this.rebindTextures=function(C,w,R){const X=i.get(C);w!==void 0&&K(X.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),R!==void 0&&lt(C)},this.setupRenderTarget=function(C){const w=C.texture,R=i.get(C),X=i.get(w);C.addEventListener("dispose",x);const P=C.textures,z=C.isWebGLCubeRenderTarget===!0,M=P.length>1;if(M||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=w.version,a.memory.textures++),z){R.__webglFramebuffer=[];for(let G=0;G<6;G++)if(w.mipmaps&&w.mipmaps.length>0){R.__webglFramebuffer[G]=[];for(let V=0;V<w.mipmaps.length;V++)R.__webglFramebuffer[G][V]=s.createFramebuffer()}else R.__webglFramebuffer[G]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){R.__webglFramebuffer=[];for(let G=0;G<w.mipmaps.length;G++)R.__webglFramebuffer[G]=s.createFramebuffer()}else R.__webglFramebuffer=s.createFramebuffer();if(M)for(let G=0,V=P.length;G<V;G++){const ot=i.get(P[G]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&ct(C)===!1){R.__webglMultisampledFramebuffer=s.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let G=0;G<P.length;G++){const V=P[G];R.__webglColorRenderbuffer[G]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,R.__webglColorRenderbuffer[G]);const ot=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),it=v(V.internalFormat,ot,Q,V.colorSpace,C.isXRRenderTarget===!0),tt=J(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,it,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,R.__webglColorRenderbuffer[G])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(R.__webglDepthRenderbuffer=s.createRenderbuffer(),$(R.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(z){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),F(s.TEXTURE_CUBE_MAP,w);for(let G=0;G<6;G++)if(w.mipmaps&&w.mipmaps.length>0)for(let V=0;V<w.mipmaps.length;V++)K(R.__webglFramebuffer[G][V],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,V);else K(R.__webglFramebuffer[G],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);A(w)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(M){for(let G=0,V=P.length;G<V;G++){const ot=P[G],Q=i.get(ot);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),F(s.TEXTURE_2D,ot),K(R.__webglFramebuffer,C,ot,s.COLOR_ATTACHMENT0+G,s.TEXTURE_2D,0),A(ot)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let G=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(G=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(G,X.__webglTexture),F(G,w),w.mipmaps&&w.mipmaps.length>0)for(let V=0;V<w.mipmaps.length;V++)K(R.__webglFramebuffer[V],C,w,s.COLOR_ATTACHMENT0,G,V);else K(R.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,G,0);A(w)&&g(G),e.unbindTexture()}C.depthBuffer&&lt(C)},this.updateRenderTargetMipmap=function(C){const w=C.textures;for(let R=0,X=w.length;R<X;R++){const P=w[R];if(A(P)){const z=b(C),M=i.get(P).__webglTexture;e.bindTexture(z,M),g(z),e.unbindTexture()}}},this.updateMultisampleRenderTarget=function(C){if(C.samples>0){if(ct(C)===!1){const w=C.textures,R=C.width,X=C.height;let P=s.COLOR_BUFFER_BIT;const z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,M=i.get(C),G=w.length>1;if(G)for(let V=0;V<w.length;V++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,M.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let V=0;V<w.length;V++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(P|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(P|=s.STENCIL_BUFFER_BIT)),G){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,M.__webglColorRenderbuffer[V]);const ot=i.get(w[V]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,R,X,0,0,R,X,P,s.NEAREST),l===!0&&(ft.length=0,Y.length=0,ft.push(s.COLOR_ATTACHMENT0+V),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ft.push(z),Y.push(z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Y)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),G)for(let V=0;V<w.length;V++){e.bindFramebuffer(s.FRAMEBUFFER,M.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.RENDERBUFFER,M.__webglColorRenderbuffer[V]);const ot=i.get(w[V]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.TEXTURE_2D,ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,M.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}},this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ct}function n_(s,t){return{convert:function(e,i=""){let n;const r=Ot.getTransfer(i);if(e===xe)return s.UNSIGNED_BYTE;if(e===Hu)return s.UNSIGNED_SHORT_4_4_4_4;if(e===zu)return s.UNSIGNED_SHORT_5_5_5_1;if(e===Um)return s.UNSIGNED_INT_5_9_9_9_REV;if(e===Ou)return s.BYTE;if(e===Gu)return s.SHORT;if(e===Sa)return s.UNSIGNED_SHORT;if(e===Nl)return s.INT;if(e===Ln)return s.UNSIGNED_INT;if(e===ye)return s.FLOAT;if(e===Se)return s.HALF_FLOAT;if(e===1021)return s.ALPHA;if(e===1022)return s.RGB;if(e===Ae)return s.RGBA;if(e===1024)return s.LUMINANCE;if(e===1025)return s.LUMINANCE_ALPHA;if(e===Ca)return s.DEPTH_COMPONENT;if(e===gs)return s.DEPTH_STENCIL;if(e===Mn)return s.RED;if(e===Vu)return s.RED_INTEGER;if(e===dr)return s.RG;if(e===Wu)return s.RG_INTEGER;if(e===qu)return s.RGBA_INTEGER;if(e===Xo||e===ga||e===Yo||e===ba)if(r===$t){if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(e===Xo)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===ga)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===Yo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===ba)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=t.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(e===Xo)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===ga)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===Yo)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===ba)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(e===dl||e===Jh||e===pl||e===$h){if(n=t.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(e===dl)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===Jh)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===pl)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===$h)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(e===Al||e===fl||e===ml){if(n=t.get("WEBGL_compressed_texture_etc"),n===null)return null;if(e===Al||e===fl)return r===$t?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(e===ml)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(e===wa||e===Zh||e===tu||e===eu||e===Ia||e===iu||e===nu||e===ru||e===su||e===au||e===ou||e===lu||e===cu||e===hu){if(n=t.get("WEBGL_compressed_texture_astc"),n===null)return null;if(e===wa)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===Zh)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===tu)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===eu)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===Ia)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===iu)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===nu)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===ru)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===su)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===au)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===ou)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===lu)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===cu)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===hu)return r===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(e===va||e===uu||e===gl){if(n=t.get("EXT_texture_compression_bptc"),n===null)return null;if(e===va)return r===$t?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===uu)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===gl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(e===36283||e===du||e===pu||e===Au){if(n=t.get("EXT_texture_compression_rgtc"),n===null)return null;if(e===va)return n.COMPRESSED_RED_RGTC1_EXT;if(e===du)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===pu)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===Au)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return e===ms?s.UNSIGNED_INT_24_8:s[e]!==void 0?s[e]:null}}}class r_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new he;t.properties.get(n).__webglTexture=e.texture,e.depthNear===i.depthNear&&e.depthFar===i.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ai({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s_ extends Ti{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null;const m=new r_,A=e.getContextAttributes();let g=null,b=null;const v=[],y=[],_=new Mt;let E=null;const x=new Pe;x.viewport=new qt;const I=new Pe;I.viewport=new qt;const T=[x,I],L=new b0;let H=null,U=null;function O(Y){const J=y.indexOf(Y.inputSource);if(J===-1)return;const ct=v[J];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,c||a),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){const J=y[Y];J!==null&&(y[Y]=null,v[Y].disconnect(J))}H=null,U=null,m.reset(),t.setRenderTarget(g),p=null,d=null,u=null,n=null,b=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}function q(Y){for(let J=0;J<Y.removed.length;J++){const ct=Y.removed[J],at=y.indexOf(ct);at>=0&&(y[at]=null,v[at].disconnect(ct))}for(let J=0;J<Y.added.length;J++){const ct=Y.added[J];let at=y.indexOf(ct);if(at===-1){for(let C=0;C<v.length;C++){if(C>=y.length){y.push(ct),at=C;break}if(y[C]===null){y[C]=ct,at=C;break}}if(at===-1)break}const rt=v[at];rt&&rt.connect(ct)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=v[Y];return J===void 0&&(J=new mc,v[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=v[Y];return J===void 0&&(J=new mc,v[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=v[Y];return J===void 0&&(J=new mc,v[Y]=J),J.getHandSpace()},this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(g=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",F),n.addEventListener("inputsourceschange",q),A.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(_),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ct=null,at=null;A.depth&&(at=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=A.stencil?gs:Ca,ct=A.stencil?ms:Ln);const rt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(rt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new pi(d.textureWidth,d.textureHeight,{format:Ae,type:xe,depthTexture:new jm(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const J={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,e,J),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new pi(p.framebufferWidth,p.framebufferHeight,{format:Ae,type:xe,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ft.setContext(n),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};const N=new B,K=new B;function $(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let J=Y.near,ct=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),L.near=I.near=x.near=J,L.far=I.far=x.far=ct,H===L.near&&U===L.far||(n.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,U=L.far),x.layers.mask=2|Y.layers.mask,I.layers.mask=4|Y.layers.mask,L.layers.mask=x.layers.mask|I.layers.mask;const at=Y.parent,rt=L.cameras;$(L,at);for(let C=0;C<rt.length;C++)$(rt[C],at);rt.length===2?(function(C,w,R){N.setFromMatrixPosition(w.matrixWorld),K.setFromMatrixPosition(R.matrixWorld);const X=N.distanceTo(K),P=w.projectionMatrix.elements,z=R.projectionMatrix.elements,M=P[14]/(P[10]-1),G=P[14]/(P[10]+1),V=(P[9]+1)/P[5],ot=(P[9]-1)/P[5],Q=(P[8]-1)/P[0],it=(z[8]+1)/z[0],tt=M*Q,et=M*it,ut=X/(-Q+it),mt=ut*-Q;if(w.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(mt),C.translateZ(ut),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),P[10]===-1)C.projectionMatrix.copy(w.projectionMatrix),C.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{const vt=M+ut,Rt=G+ut,Vt=tt-mt,Gt=et+(X-mt),yt=V*G/Rt*vt,Wt=ot*G/Rt*vt;C.projectionMatrix.makePerspective(Vt,Gt,yt,Wt,vt,Rt),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}})(L,x,I):L.projectionMatrix.copy(x.projectionMatrix),(function(C,w,R){R===null?C.matrix.copy(w.matrixWorld):(C.matrix.copy(R.matrixWorld),C.matrix.invert(),C.matrix.multiply(w.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(w.projectionMatrix),C.projectionMatrixInverse.copy(w.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=2*_s*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)})(Y,L,at)},this.getCamera=function(){return L},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)};let lt=null;const ft=new ig;ft.setAnimationLoop((function(Y,J){if(h=J.getViewerPose(c||a),f=J,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let at=!1;ct.length!==L.cameras.length&&(L.cameras.length=0,at=!0);for(let C=0;C<ct.length;C++){const w=ct[C];let R=null;if(p!==null)R=p.getViewport(w);else{const P=u.getViewSubImage(d,w);R=P.viewport,C===0&&(t.setRenderTargetTextures(b,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(b))}let X=T[C];X===void 0&&(X=new Pe,X.layers.enable(C),X.viewport=new qt,T[C]=X),X.matrix.fromArray(w.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(w.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(R.x,R.y,R.width,R.height),C===0&&(L.matrix.copy(X.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),at===!0&&L.cameras.push(X)}const rt=n.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){const C=u.getDepthInformation(ct[0]);C&&C.isValid&&C.texture&&m.init(t,C,n.renderState)}}for(let ct=0;ct<v.length;ct++){const at=y[ct],rt=v[ct];at!==null&&rt!==void 0&&rt.update(at,J,c||a)}lt&&lt(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),f=null})),this.setAnimationLoop=function(Y){lt=Y},this.dispose=function(){}}}const Vn=new Ai,a_=new St;function o_(s,t){function e(n,r){n.matrixAutoUpdate===!0&&n.updateMatrix(),r.value.copy(n.matrix)}function i(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map,e(r.map,n.mapTransform)),r.alphaMap&&(n.alphaMap.value=r.alphaMap,e(r.alphaMap,n.alphaMapTransform)),r.bumpMap&&(n.bumpMap.value=r.bumpMap,e(r.bumpMap,n.bumpMapTransform),n.bumpScale.value=r.bumpScale,r.side===1&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,e(r.normalMap,n.normalMapTransform),n.normalScale.value.copy(r.normalScale),r.side===1&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,e(r.displacementMap,n.displacementMapTransform),n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap,e(r.emissiveMap,n.emissiveMapTransform)),r.specularMap&&(n.specularMap.value=r.specularMap,e(r.specularMap,n.specularMapTransform)),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);const a=t.get(r),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,Vn.copy(l),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),n.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(Vn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio),r.lightMap&&(n.lightMap.value=r.lightMap,n.lightMapIntensity.value=r.lightMapIntensity,e(r.lightMap,n.lightMapTransform)),r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity,e(r.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,r){r.color.getRGB(n.fogColor.value,Gm(s)),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(n,r):r.isMeshToonMaterial?(i(n,r),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(n,r)):r.isMeshPhongMaterial?(i(n,r),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(n,r)):r.isMeshStandardMaterial?(i(n,r),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(n,r),r.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,c.specularIntensityMapTransform))})(n,r,l)):r.isMeshMatcapMaterial?(i(n,r),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(n,r)):r.isMeshDepthMaterial?i(n,r):r.isMeshDistanceMaterial?(i(n,r),(function(c,h){const u=t.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(n,r)):r.isMeshNormalMaterial?i(n,r):r.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,e(h.map,c.mapTransform))})(n,r),r.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(n,r)):r.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,e(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,e(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,r,a,o):r.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,e(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,e(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function l_(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){const m=u.value,A=d+"_"+p;if(f[A]===void 0)return f[A]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{const g=f[A];if(typeof m=="number"||typeof m=="boolean"){if(g!==m)return f[A]=m,!0}else if(g.equals(m)===!1)return g.copy(m),!0}return!1}function c(u){const d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){const d=u.target;d.removeEventListener("dispose",h);const p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),s.deleteBuffer(n[d.id]),delete n[d.id],delete r[d.id]}return{bind:function(u,d){const p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(A){const g=A.uniforms;let b=0;const v=16;for(let _=0,E=g.length;_<E;_++){const x=Array.isArray(g[_])?g[_]:[g[_]];for(let I=0,T=x.length;I<T;I++){const L=x[I],H=Array.isArray(L.value)?L.value:[L.value];for(let U=0,O=H.length;U<O;U++){const F=c(H[U]),q=b%v,N=q%F.boundary,K=q+N;b+=N,K!==0&&v-K<F.storage&&(b+=v-K),L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=F.storage}}}const y=b%v;y>0&&(b+=v-y),A.__size=b,A.__cache={}})(u),p=(function(A){const g=(function(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();A.__bindingPointIndex=g;const b=s.createBuffer(),v=A.__size,y=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,v,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,b),b})(u),n[u.id]=p,u.addEventListener("dispose",h));const f=d.program;i.updateUBOMapping(u,f);const m=t.render.frame;r[u.id]!==m&&((function(A){const g=n[A.id],b=A.uniforms,v=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let y=0,_=b.length;y<_;y++){const E=Array.isArray(b[y])?b[y]:[b[y]];for(let x=0,I=E.length;x<I;x++){const T=E[x];if(l(T,y,x,v)===!0){const L=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let O=0;O<H.length;O++){const F=H[O],q=c(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,L+U,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):(F.toArray(T.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)})(u),r[u.id]=m)},dispose:function(){for(const u in n)s.deleteBuffer(n[u]);a=[],n={},r={}}}}class og{constructor(t={}){const{canvas:e=_v(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;let p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const f=new Uint32Array(4),m=new Int32Array(4);let A=null,g=null;const b=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ae,this.toneMapping=0,this.toneMappingExposure=1;const y=this;let _=!1,E=0,x=0,I=null,T=-1,L=null;const H=new qt,U=new qt;let O=null;const F=new bt(0);let q=0,N=e.width,K=e.height,$=1,lt=null,ft=null;const Y=new qt(0,0,N,K),J=new qt(0,0,N,K);let ct=!1;const at=new Ju;let rt=!1,C=!1;this.transmissionResolutionScale=1;const w=new St,R=new St,X=new B,P=new qt,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let M=!1;function G(){return I===null?$:1}let V,ot,Q,it,tt,et,ut,mt,vt,Rt,Vt,Gt,yt,Wt,re,fe,gt,kt,te,vr,Oa,mi,Bi,Pn,D=i;function Rs(S,k){return e.getContext(S,k)}try{const S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hl}`),e.addEventListener("webglcontextlost",hd,!1),e.addEventListener("webglcontextrestored",ud,!1),e.addEventListener("webglcontextcreationerror",dd,!1),D===null){const k="webgl2";if(D=Rs(k,S),D===null)throw Rs(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}function cd(){V=new N0(D),V.init(),mi=new n_(D,V),ot=new D0(D,V,t,mi),Q=new e_(D,V),ot.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),it=new O0(D),tt=new Wy,et=new i_(D,V,Q,tt,ot,mi,it),ut=new U0(y),mt=new F0(y),vt=new I0(D),Bi=new B0(D,vt),Rt=new Q0(D,vt,it,Bi),Vt=new H0(D,Rt,vt,it),te=new G0(D,ot,et),fe=new L0(tt),Gt=new Vy(y,ut,mt,V,ot,Bi,fe),yt=new o_(y,tt),Wt=new jy,re=new $y(V),kt=new T0(y,ut,mt,Q,Vt,p,l),gt=new Zy(y,Vt,ot),Pn=new l_(D,it,ot,Q),vr=new R0(D,V,it),Oa=new k0(D,V,it),it.programs=Gt.programs,y.capabilities=ot,y.extensions=V,y.properties=tt,y.renderLists=Wt,y.shadowMap=gt,y.state=Q,y.info=it}cd();const Me=new s_(y,D);function hd(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ud(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const S=it.autoReset,k=gt.enabled,j=gt.autoUpdate,Z=gt.needsUpdate,W=gt.type;cd(),it.autoReset=S,gt.enabled=k,gt.autoUpdate=j,gt.needsUpdate=Z,gt.type=W}function dd(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pd(S){const k=S.target;k.removeEventListener("dispose",pd),(function(j){(function(Z){const W=tt.get(Z).programs;W!==void 0&&(W.forEach((function(st){Gt.releaseProgram(st)})),Z.isShaderMaterial&&Gt.releaseShaderCache(Z))})(j),tt.remove(j)})(k)}function Ad(S,k,j){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,Ha(S,k,j),S.side=0,S.needsUpdate=!0,Ha(S,k,j),S.side=2):Ha(S,k,j)}this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=V.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=V.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(N,K,!1))},this.getSize=function(S){return S.set(N,K)},this.setSize=function(S,k,j=!0){Me.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(N=S,K=k,e.width=Math.floor(S*$),e.height=Math.floor(k*$),j===!0&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k))},this.getDrawingBufferSize=function(S){return S.set(N*$,K*$).floor()},this.setDrawingBufferSize=function(S,k,j){N=S,K=k,$=j,e.width=Math.floor(S*j),e.height=Math.floor(k*j),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(H)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,k,j,Z){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,k,j,Z),Q.viewport(H.copy(Y).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(J)},this.setScissor=function(S,k,j,Z){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,k,j,Z),Q.scissor(U.copy(J).multiplyScalar($).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){Q.setScissorTest(ct=S)},this.setOpaqueSort=function(S){lt=S},this.setTransparentSort=function(S){ft=S},this.getClearColor=function(S){return S.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,j=!0){let Z=0;if(S){let W=!1;if(I!==null){const st=I.texture.format;W=st===qu||st===Wu||st===Vu}if(W){const st=I.texture.type,dt=st===xe||st===Ln||st===Sa||st===ms||st===Hu||st===zu,pt=kt.getClearColor(),_t=kt.getClearAlpha(),Tt=pt.r,wt=pt.g,Bt=pt.b;dt?(f[0]=Tt,f[1]=wt,f[2]=Bt,f[3]=_t,D.clearBufferuiv(D.COLOR,0,f)):(m[0]=Tt,m[1]=wt,m[2]=Bt,m[3]=_t,D.clearBufferiv(D.COLOR,0,m))}else Z|=D.COLOR_BUFFER_BIT}k&&(Z|=D.DEPTH_BUFFER_BIT),j&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",hd,!1),e.removeEventListener("webglcontextrestored",ud,!1),e.removeEventListener("webglcontextcreationerror",dd,!1),kt.dispose(),Wt.dispose(),re.dispose(),tt.dispose(),ut.dispose(),mt.dispose(),Vt.dispose(),Bi.dispose(),Pn.dispose(),Gt.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",fd),Me.removeEventListener("sessionend",md),Fn.stop()},this.renderBufferDirect=function(S,k,j,Z,W,st){k===null&&(k=z);const dt=W.isMesh&&W.matrixWorld.determinant()<0,pt=(function(jt,me,Le,Pt,It){me.isScene!==!0&&(me=z),et.resetTextureUnits();const gi=me.fog,ql=Pt.isMeshStandardMaterial?me.environment:null,za=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:oe,An=(Pt.isMeshStandardMaterial?mt:ut).get(Pt.envMap||ql),Ri=Pt.vertexColors===!0&&!!Le.attributes.color&&Le.attributes.color.itemSize===4,yr=!!Le.attributes.tangent&&(!!Pt.normalMap||Pt.anisotropy>0),Vi=!!Le.morphAttributes.position,jl=!!Le.morphAttributes.normal,_r=!!Le.morphAttributes.color;let Ed=0;Pt.toneMapped&&(I!==null&&I.isXRRenderTarget!==!0||(Ed=y.toneMapping));const xd=Le.morphAttributes.position||Le.morphAttributes.normal||Le.morphAttributes.color,Cb=xd!==void 0?xd.length:0,Qt=tt.get(Pt),wb=g.state.lights;if(rt===!0&&(C===!0||jt!==L)){const oi=jt===L&&Pt.id===T;fe.setState(Pt,jt,oi)}let bi=!1;Pt.version===Qt.__version?Qt.needsLights&&Qt.lightsStateVersion!==wb.state.version||Qt.outputColorSpace!==za||It.isBatchedMesh&&Qt.batching===!1?bi=!0:It.isBatchedMesh||Qt.batching!==!0?It.isBatchedMesh&&Qt.batchingColor===!0&&It.colorTexture===null||It.isBatchedMesh&&Qt.batchingColor===!1&&It.colorTexture!==null||It.isInstancedMesh&&Qt.instancing===!1?bi=!0:It.isInstancedMesh||Qt.instancing!==!0?It.isSkinnedMesh&&Qt.skinning===!1?bi=!0:It.isSkinnedMesh||Qt.skinning!==!0?It.isInstancedMesh&&Qt.instancingColor===!0&&It.instanceColor===null||It.isInstancedMesh&&Qt.instancingColor===!1&&It.instanceColor!==null||It.isInstancedMesh&&Qt.instancingMorph===!0&&It.morphTexture===null||It.isInstancedMesh&&Qt.instancingMorph===!1&&It.morphTexture!==null||Qt.envMap!==An||Pt.fog===!0&&Qt.fog!==gi?bi=!0:Qt.numClippingPlanes===void 0||Qt.numClippingPlanes===fe.numPlanes&&Qt.numIntersection===fe.numIntersection?(Qt.vertexAlphas!==Ri||Qt.vertexTangents!==yr||Qt.morphTargets!==Vi||Qt.morphNormals!==jl||Qt.morphColors!==_r||Qt.toneMapping!==Ed||Qt.morphTargetsCount!==Cb)&&(bi=!0):bi=!0:bi=!0:bi=!0:bi=!0:(bi=!0,Qt.__version=Pt.version);let Nn=Qt.currentProgram;bi===!0&&(Nn=Ha(Pt,me,It));let Sd=!1,Ds=!1,Xl=!1;const ve=Nn.getUniforms(),fn=Qt.uniforms;if(Q.useProgram(Nn.program)&&(Sd=!0,Ds=!0,Xl=!0),Pt.id!==T&&(T=Pt.id,Ds=!0),Sd||L!==jt){Q.buffers.depth.getReversed()?(w.copy(jt.projectionMatrix),(function(Qn){const de=Qn.elements;de[2]=.5*de[2]+.5*de[3],de[6]=.5*de[6]+.5*de[7],de[10]=.5*de[10]+.5*de[11],de[14]=.5*de[14]+.5*de[15]})(w),(function(Qn){const de=Qn.elements;de[11]===-1?(de[10]=-de[10]-1,de[14]=-de[14]):(de[10]=-de[10],de[14]=1-de[14])})(w),ve.setValue(D,"projectionMatrix",w)):ve.setValue(D,"projectionMatrix",jt.projectionMatrix),ve.setValue(D,"viewMatrix",jt.matrixWorldInverse);const oi=ve.map.cameraPosition;oi!==void 0&&oi.setValue(D,X.setFromMatrixPosition(jt.matrixWorld)),ot.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(jt.far+1)/Math.LN2)),(Pt.isMeshPhongMaterial||Pt.isMeshToonMaterial||Pt.isMeshLambertMaterial||Pt.isMeshBasicMaterial||Pt.isMeshStandardMaterial||Pt.isShaderMaterial)&&ve.setValue(D,"isOrthographic",jt.isOrthographicCamera===!0),L!==jt&&(L=jt,Ds=!0,Xl=!0)}if(It.isSkinnedMesh){ve.setOptional(D,It,"bindMatrix"),ve.setOptional(D,It,"bindMatrixInverse");const oi=It.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),ve.setValue(D,"boneTexture",oi.boneTexture,et))}It.isBatchedMesh&&(ve.setOptional(D,It,"batchingTexture"),ve.setValue(D,"batchingTexture",It._matricesTexture,et),ve.setOptional(D,It,"batchingIdTexture"),ve.setValue(D,"batchingIdTexture",It._indirectTexture,et),ve.setOptional(D,It,"batchingColorTexture"),It._colorsTexture!==null&&ve.setValue(D,"batchingColorTexture",It._colorsTexture,et));const Yl=Le.morphAttributes;Yl.position===void 0&&Yl.normal===void 0&&Yl.color===void 0||te.update(It,Le,Nn),(Ds||Qt.receiveShadow!==It.receiveShadow)&&(Qt.receiveShadow=It.receiveShadow,ve.setValue(D,"receiveShadow",It.receiveShadow)),Pt.isMeshGouraudMaterial&&Pt.envMap!==null&&(fn.envMap.value=An,fn.flipEnvMap.value=An.isCubeTexture&&An.isRenderTargetTexture===!1?-1:1),Pt.isMeshStandardMaterial&&Pt.envMap===null&&me.environment!==null&&(fn.envMapIntensity.value=me.environmentIntensity),Ds&&(ve.setValue(D,"toneMappingExposure",y.toneMappingExposure),Qt.needsLights&&(vi=Xl,(Di=fn).ambientLightColor.needsUpdate=vi,Di.lightProbe.needsUpdate=vi,Di.directionalLights.needsUpdate=vi,Di.directionalLightShadows.needsUpdate=vi,Di.pointLights.needsUpdate=vi,Di.pointLightShadows.needsUpdate=vi,Di.spotLights.needsUpdate=vi,Di.spotLightShadows.needsUpdate=vi,Di.rectAreaLights.needsUpdate=vi,Di.hemisphereLights.needsUpdate=vi),gi&&Pt.fog===!0&&yt.refreshFogUniforms(fn,gi),yt.refreshMaterialUniforms(fn,Pt,$,K,g.state.transmissionRenderTarget[jt.id]),Zo.upload(D,yd(Qt),fn,et));var Di,vi;if(Pt.isShaderMaterial&&Pt.uniformsNeedUpdate===!0&&(Zo.upload(D,yd(Qt),fn,et),Pt.uniformsNeedUpdate=!1),Pt.isSpriteMaterial&&ve.setValue(D,"center",It.center),ve.setValue(D,"modelViewMatrix",It.modelViewMatrix),ve.setValue(D,"normalMatrix",It.normalMatrix),ve.setValue(D,"modelMatrix",It.matrixWorld),Pt.isShaderMaterial||Pt.isRawShaderMaterial){const oi=Pt.uniformsGroups;for(let Qn=0,de=oi.length;Qn<de;Qn++){const Cd=oi[Qn];Pn.update(Cd,Nn),Pn.bind(Cd,Nn)}}return Nn})(S,k,j,Z,W);Q.setMaterial(Z,dt);let _t=j.index,Tt=1;if(Z.wireframe===!0){if(_t=Rt.getWireframeAttribute(j),_t===void 0)return;Tt=2}const wt=j.drawRange,Bt=j.attributes.position;let Ft=wt.start*Tt,se=(wt.start+wt.count)*Tt;st!==null&&(Ft=Math.max(Ft,st.start*Tt),se=Math.min(se,(st.start+st.count)*Tt)),_t!==null?(Ft=Math.max(Ft,0),se=Math.min(se,_t.count)):Bt!=null&&(Ft=Math.max(Ft,0),se=Math.min(se,Bt.count));const be=se-Ft;if(be<0||be===1/0)return;let ee;Bi.setup(W,Z,pt,j,_t);let ie=vr;if(_t!==null&&(ee=vt.get(_t),ie=Oa,ie.setIndex(ee)),W.isMesh)Z.wireframe===!0?(Q.setLineWidth(Z.wireframeLinewidth*G()),ie.setMode(D.LINES)):ie.setMode(D.TRIANGLES);else if(W.isLine){let jt=Z.linewidth;jt===void 0&&(jt=1),Q.setLineWidth(jt*G()),W.isLineSegments?ie.setMode(D.LINES):W.isLineLoop?ie.setMode(D.LINE_LOOP):ie.setMode(D.LINE_STRIP)}else W.isPoints?ie.setMode(D.POINTS):W.isSprite&&ie.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Zn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))ie.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const jt=W._multiDrawStarts,me=W._multiDrawCounts,Le=W._multiDrawCount,Pt=_t?vt.get(_t).bytesPerElement:1,It=tt.get(Z).currentProgram.getUniforms();for(let gi=0;gi<Le;gi++)It.setValue(D,"_gl_DrawID",gi),ie.render(jt[gi]/Pt,me[gi])}else if(W.isInstancedMesh)ie.renderInstances(Ft,be,W.count);else if(j.isInstancedBufferGeometry){const jt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,me=Math.min(j.instanceCount,jt);ie.renderInstances(Ft,be,me)}else ie.render(Ft,be)},this.compile=function(S,k,j=null){j===null&&(j=S),g=re.get(j),g.init(k),v.push(g),j.traverseVisible((function(W){W.isLight&&W.layers.test(k.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),S!==j&&S.traverseVisible((function(W){W.isLight&&W.layers.test(k.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),g.setupLights();const Z=new Set;return S.traverse((function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const st=W.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const pt=st[dt];Ad(pt,j,W),Z.add(pt)}else Ad(st,j,W),Z.add(st)})),g=v.pop(),Z},this.compileAsync=function(S,k,j=null){const Z=this.compile(S,k,j);return new Promise((W=>{function st(){Z.forEach((function(dt){tt.get(dt).currentProgram.isReady()&&Z.delete(dt)})),Z.size!==0?setTimeout(st,10):W(S)}V.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)}))};let Vl=null;function fd(){Fn.stop()}function md(){Fn.start()}const Fn=new ig;function Wl(S,k,j,Z){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||at.intersectsSprite(S)){Z&&P.setFromMatrixPosition(S.matrixWorld).applyMatrix4(R);const st=Vt.update(S),dt=S.material;dt.visible&&A.push(S,st,dt,j,P.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||at.intersectsObject(S))){const st=Vt.update(S),dt=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),P.copy(S.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),P.copy(st.boundingSphere.center)),P.applyMatrix4(S.matrixWorld).applyMatrix4(R)),Array.isArray(dt)){const pt=st.groups;for(let _t=0,Tt=pt.length;_t<Tt;_t++){const wt=pt[_t],Bt=dt[wt.materialIndex];Bt&&Bt.visible&&A.push(S,st,Bt,j,P.z,wt)}}else dt.visible&&A.push(S,st,dt,j,P.z,null)}}const W=S.children;for(let st=0,dt=W.length;st<dt;st++)Wl(W[st],k,j,Z)}function gd(S,k,j,Z){const W=S.opaque,st=S.transmissive,dt=S.transparent;g.setupLightsView(j),rt===!0&&fe.setGlobalState(y.clippingPlanes,j),Z&&Q.viewport(H.copy(Z)),W.length>0&&Ga(W,k,j),st.length>0&&Ga(st,k,j),dt.length>0&&Ga(dt,k,j),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function bd(S,k,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Z.id]===void 0&&(g.state.transmissionRenderTarget[Z.id]=new pi(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?Se:xe,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));const W=g.state.transmissionRenderTarget[Z.id],st=Z.viewport||H;W.setSize(st.z*y.transmissionResolutionScale,st.w*y.transmissionResolutionScale);const dt=y.getRenderTarget();y.setRenderTarget(W),y.getClearColor(F),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),M&&kt.render(j);const pt=y.toneMapping;y.toneMapping=0;const _t=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),g.setupLightsView(Z),rt===!0&&fe.setGlobalState(y.clippingPlanes,Z),Ga(S,j,Z),et.updateMultisampleRenderTarget(W),et.updateRenderTargetMipmap(W),V.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let wt=0,Bt=k.length;wt<Bt;wt++){const Ft=k[wt],se=Ft.object,be=Ft.geometry,ee=Ft.material,ie=Ft.group;if(ee.side===2&&se.layers.test(Z.layers)){const jt=ee.side;ee.side=1,ee.needsUpdate=!0,vd(se,j,Z,be,ee,ie),ee.side=jt,ee.needsUpdate=!0,Tt=!0}}Tt===!0&&(et.updateMultisampleRenderTarget(W),et.updateRenderTargetMipmap(W))}y.setRenderTarget(dt),y.setClearColor(F,q),_t!==void 0&&(Z.viewport=_t),y.toneMapping=pt}function Ga(S,k,j){const Z=k.isScene===!0?k.overrideMaterial:null;for(let W=0,st=S.length;W<st;W++){const dt=S[W],pt=dt.object,_t=dt.geometry,Tt=Z===null?dt.material:Z,wt=dt.group;pt.layers.test(j.layers)&&vd(pt,k,j,_t,Tt,wt)}}function vd(S,k,j,Z,W,st){S.onBeforeRender(y,k,j,Z,W,st),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(y,k,j,Z,S,st),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=1,W.needsUpdate=!0,y.renderBufferDirect(j,k,Z,W,S,st),W.side=0,W.needsUpdate=!0,y.renderBufferDirect(j,k,Z,W,S,st),W.side=2):y.renderBufferDirect(j,k,Z,W,S,st),S.onAfterRender(y,k,j,Z,W,st)}function Ha(S,k,j){k.isScene!==!0&&(k=z);const Z=tt.get(S),W=g.state.lights,st=g.state.shadowsArray,dt=W.state.version,pt=Gt.getParameters(S,W.state,st,k,j),_t=Gt.getProgramCacheKey(pt);let Tt=Z.programs;Z.environment=S.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(S.isMeshStandardMaterial?mt:ut).get(S.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Tt===void 0&&(S.addEventListener("dispose",pd),Tt=new Map,Z.programs=Tt);let wt=Tt.get(_t);if(wt!==void 0){if(Z.currentProgram===wt&&Z.lightsStateVersion===dt)return _d(S,pt),wt}else pt.uniforms=Gt.getUniforms(S),S.onBeforeCompile(pt,y),wt=Gt.acquireProgram(pt,_t),Tt.set(_t,wt),Z.uniforms=pt.uniforms;const Bt=Z.uniforms;return(S.isShaderMaterial||S.isRawShaderMaterial)&&S.clipping!==!0||(Bt.clippingPlanes=fe.uniform),_d(S,pt),Z.needsLights=(function(Ft){return Ft.isMeshLambertMaterial||Ft.isMeshToonMaterial||Ft.isMeshPhongMaterial||Ft.isMeshStandardMaterial||Ft.isShadowMaterial||Ft.isShaderMaterial&&Ft.lights===!0})(S),Z.lightsStateVersion=dt,Z.needsLights&&(Bt.ambientLightColor.value=W.state.ambient,Bt.lightProbe.value=W.state.probe,Bt.directionalLights.value=W.state.directional,Bt.directionalLightShadows.value=W.state.directionalShadow,Bt.spotLights.value=W.state.spot,Bt.spotLightShadows.value=W.state.spotShadow,Bt.rectAreaLights.value=W.state.rectArea,Bt.ltc_1.value=W.state.rectAreaLTC1,Bt.ltc_2.value=W.state.rectAreaLTC2,Bt.pointLights.value=W.state.point,Bt.pointLightShadows.value=W.state.pointShadow,Bt.hemisphereLights.value=W.state.hemi,Bt.directionalShadowMap.value=W.state.directionalShadowMap,Bt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Bt.spotShadowMap.value=W.state.spotShadowMap,Bt.spotLightMatrix.value=W.state.spotLightMatrix,Bt.spotLightMap.value=W.state.spotLightMap,Bt.pointShadowMap.value=W.state.pointShadowMap,Bt.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=wt,Z.uniformsList=null,wt}function yd(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=Zo.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function _d(S,k){const j=tt.get(S);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}Fn.setAnimationLoop((function(S){Vl&&Vl(S)})),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(S){Vl=S,Me.setAnimationLoop(S),S===null?Fn.stop():Fn.start()},Me.addEventListener("sessionstart",fd),Me.addEventListener("sessionend",md),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(_===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(k),k=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,k,I),g=re.get(S,v.length),g.init(k),v.push(g),R.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),at.setFromProjectionMatrix(R),C=this.localClippingEnabled,rt=fe.init(this.clippingPlanes,C),A=Wt.get(S,b.length),A.init(),b.push(A),Me.enabled===!0&&Me.isPresenting===!0){const st=y.xr.getDepthSensingMesh();st!==null&&Wl(st,k,-1/0,y.sortObjects)}Wl(S,k,0,y.sortObjects),A.finish(),y.sortObjects===!0&&A.sort(lt,ft),M=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,M&&kt.addToRenderList(A,S),this.info.render.frame++,rt===!0&&fe.beginShadows();const j=g.state.shadowsArray;gt.render(j,S,k),rt===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=A.opaque,W=A.transmissive;if(g.setupLights(),k.isArrayCamera){const st=k.cameras;if(W.length>0)for(let dt=0,pt=st.length;dt<pt;dt++)bd(Z,W,S,st[dt]);M&&kt.render(S);for(let dt=0,pt=st.length;dt<pt;dt++){const _t=st[dt];gd(A,S,_t,_t.viewport)}}else W.length>0&&bd(Z,W,S,k),M&&kt.render(S),gd(A,S,k);I!==null&&x===0&&(et.updateMultisampleRenderTarget(I),et.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(y,S,k),Bi.resetDefaultState(),T=-1,L=null,v.pop(),v.length>0?(g=v[v.length-1],rt===!0&&fe.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,b.pop(),A=b.length>0?b[b.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,k,j){tt.get(S.texture).__webglTexture=k,tt.get(S.depthTexture).__webglTexture=j;const Z=tt.get(S);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const j=tt.get(S);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0};const Eb=D.createFramebuffer();this.setRenderTarget=function(S,k=0,j=0){I=S,E=k,x=j;let Z=!0,W=null,st=!1,dt=!1;if(S){const pt=tt.get(S);if(pt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(pt.__webglFramebuffer===void 0)et.setupRenderTarget(S);else if(pt.__hasExternalTextures)et.rebindTextures(S,tt.get(S.texture).__webglTexture,tt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const wt=S.depthTexture;if(pt.__boundDepthTexture!==wt){if(wt!==null&&tt.has(wt)&&(S.width!==wt.image.width||S.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(S)}}const _t=S.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(dt=!0);const Tt=tt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(W=Array.isArray(Tt[k])?Tt[k][j]:Tt[k],st=!0):W=S.samples>0&&et.useMultisampledRTT(S)===!1?tt.get(S).__webglMultisampledFramebuffer:Array.isArray(Tt)?Tt[j]:Tt,H.copy(S.viewport),U.copy(S.scissor),O=S.scissorTest}else H.copy(Y).multiplyScalar($).floor(),U.copy(J).multiplyScalar($).floor(),O=ct;if(j!==0&&(W=Eb),Q.bindFramebuffer(D.FRAMEBUFFER,W)&&Z&&Q.drawBuffers(S,W),Q.viewport(H),Q.scissor(U),Q.setScissorTest(O),st){const pt=tt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,pt.__webglTexture,j)}else if(dt){const pt=tt.get(S.texture),_t=k;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.__webglTexture,j,_t)}else if(S!==null&&j!==0){const pt=tt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,j)}T=-1},this.readRenderTargetPixels=function(S,k,j,Z,W,st,dt){if(!S||!S.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt){Q.bindFramebuffer(D.FRAMEBUFFER,pt);try{const _t=S.texture,Tt=_t.format,wt=_t.type;if(!ot.textureFormatReadable(Tt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(wt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");k>=0&&k<=S.width-Z&&j>=0&&j<=S.height-W&&D.readPixels(k,j,Z,W,mi.convert(Tt),mi.convert(wt),st)}finally{const _t=I!==null?tt.get(I).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(S,k,j,Z,W,st,dt){if(!S||!S.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt){const _t=S.texture,Tt=_t.format,wt=_t.type;if(!ot.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-Z&&j>=0&&j<=S.height-W){Q.bindFramebuffer(D.FRAMEBUFFER,pt);const Bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),D.readPixels(k,j,Z,W,mi.convert(Tt),mi.convert(wt),0);const Ft=I!==null?tt.get(I).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,Ft);const se=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await(function(be,ee,ie){return new Promise((function(jt,me){setTimeout((function Le(){switch(be.clientWaitSync(ee,be.SYNC_FLUSH_COMMANDS_BIT,0)){case be.WAIT_FAILED:me();break;case be.TIMEOUT_EXPIRED:setTimeout(Le,ie);break;default:jt()}}),ie)}))})(D,se,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(Bt),D.deleteSync(se),st}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,j=0){S.isTexture!==!0&&(Zn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const Z=Math.pow(2,-j),W=Math.floor(S.image.width*Z),st=Math.floor(S.image.height*Z),dt=k!==null?k.x:0,pt=k!==null?k.y:0;et.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,dt,pt,W,st),Q.unbindTexture()};const xb=D.createFramebuffer(),Sb=D.createFramebuffer();this.copyTextureToTexture=function(S,k,j=null,Z=null,W=0,st=null){let dt,pt,_t,Tt,wt,Bt,Ft,se,be;S.isTexture!==!0&&(Zn("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,S=arguments[1],k=arguments[2],st=arguments[3]||0,j=null),st===null&&(W!==0?(Zn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=W,W=0):st=0);const ee=S.isCompressedTexture?S.mipmaps[st]:S.image;if(j!==null)dt=j.max.x-j.min.x,pt=j.max.y-j.min.y,_t=j.isBox3?j.max.z-j.min.z:1,Tt=j.min.x,wt=j.min.y,Bt=j.isBox3?j.min.z:0;else{const Ri=Math.pow(2,-W);dt=Math.floor(ee.width*Ri),pt=Math.floor(ee.height*Ri),_t=S.isDataArrayTexture?ee.depth:S.isData3DTexture?Math.floor(ee.depth*Ri):1,Tt=0,wt=0,Bt=0}Z!==null?(Ft=Z.x,se=Z.y,be=Z.z):(Ft=0,se=0,be=0);const ie=mi.convert(k.format),jt=mi.convert(k.type);let me;k.isData3DTexture?(et.setTexture3D(k,0),me=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(et.setTexture2DArray(k,0),me=D.TEXTURE_2D_ARRAY):(et.setTexture2D(k,0),me=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Le=D.getParameter(D.UNPACK_ROW_LENGTH),Pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),It=D.getParameter(D.UNPACK_SKIP_PIXELS),gi=D.getParameter(D.UNPACK_SKIP_ROWS),ql=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bt);const za=S.isDataArrayTexture||S.isData3DTexture,An=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){const Ri=tt.get(S),yr=tt.get(k),Vi=tt.get(Ri.__renderTarget),jl=tt.get(yr.__renderTarget);Q.bindFramebuffer(D.READ_FRAMEBUFFER,Vi.__webglFramebuffer),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,jl.__webglFramebuffer);for(let _r=0;_r<_t;_r++)za&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tt.get(S).__webglTexture,W,Bt+_r),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tt.get(k).__webglTexture,st,be+_r)),D.blitFramebuffer(Tt,wt,dt,pt,Ft,se,dt,pt,D.DEPTH_BUFFER_BIT,D.NEAREST);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||tt.has(S)){const Ri=tt.get(S),yr=tt.get(k);Q.bindFramebuffer(D.READ_FRAMEBUFFER,xb),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Sb);for(let Vi=0;Vi<_t;Vi++)za?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ri.__webglTexture,W,Bt+Vi):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ri.__webglTexture,W),An?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yr.__webglTexture,st,be+Vi):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yr.__webglTexture,st),W!==0?D.blitFramebuffer(Tt,wt,dt,pt,Ft,se,dt,pt,D.COLOR_BUFFER_BIT,D.NEAREST):An?D.copyTexSubImage3D(me,st,Ft,se,be+Vi,Tt,wt,dt,pt):D.copyTexSubImage2D(me,st,Ft,se,Tt,wt,dt,pt);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else An?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(me,st,Ft,se,be,dt,pt,_t,ie,jt,ee.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(me,st,Ft,se,be,dt,pt,_t,ie,ee.data):D.texSubImage3D(me,st,Ft,se,be,dt,pt,_t,ie,jt,ee):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,st,Ft,se,dt,pt,ie,jt,ee.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,st,Ft,se,ee.width,ee.height,ie,ee.data):D.texSubImage2D(D.TEXTURE_2D,st,Ft,se,dt,pt,ie,jt,ee);D.pixelStorei(D.UNPACK_ROW_LENGTH,Le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,gi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ql),st===0&&k.generateMipmaps&&D.generateMipmap(me),Q.unbindTexture()},this.copyTextureToTexture3D=function(S,k,j=null,Z=null,W=0){return S.isTexture!==!0&&(Zn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Z=arguments[1]||null,S=arguments[2],k=arguments[3],W=arguments[4]||0),Zn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,j,Z,W)},this.initRenderTarget=function(S){tt.get(S).__webglFramebuffer===void 0&&et.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?et.setTextureCube(S,0):S.isData3DTexture?et.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?et.setTexture2DArray(S,0):et.setTexture2D(S,0),Q.unbindTexture()},this.resetState=function(){E=0,x=0,I=null,Q.reset(),Bi.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ys}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ot._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ot._getUnpackColorSpace()}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const id=globalThis,Sl=id.trustedTypes,Gp=Sl?Sl.createPolicy("lit-html",{createHTML:s=>s}):void 0,lg="$lit$",In=`lit$${Math.random().toFixed(9).slice(2)}$`,cg="?"+In,c_=`<${cg}>`,gr=document,Da=()=>gr.createComment(""),La=s=>s===null||typeof s!="object"&&typeof s!="function",Su=Array.isArray,Bc=`[ 	
\f\r]`,zs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hp=/-->/g,zp=/>/g,Wn=RegExp(`>|${Bc}(?:([^\\s"'>=/]+)(${Bc}*=${Bc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vp=/'/g,Wp=/"/g,hg=/^(?:script|style|textarea|title)$/i,vo=(s=>(t,...e)=>({_$litType$:s,strings:t,values:e}))(1),ws=Symbol.for("lit-noChange"),Re=Symbol.for("lit-nothing"),qp=new WeakMap,pr=gr.createTreeWalker(gr,129);function ug(s,t){if(!Su(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gp!==void 0?Gp.createHTML(t):t}const h_=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":t===3?"<math>":"",a=zs;for(let o=0;o<e;o++){const l=s[o];let c,h,u=-1,d=0;for(;d<l.length&&(a.lastIndex=d,h=a.exec(l),h!==null);)d=a.lastIndex,a===zs?h[1]==="!--"?a=Hp:h[1]!==void 0?a=zp:h[2]!==void 0?(hg.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=Wn):h[3]!==void 0&&(a=Wn):a===Wn?h[0]===">"?(a=n??zs,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Wn:h[3]==='"'?Wp:Vp):a===Wp||a===Vp?a=Wn:a===Hp||a===zp?a=zs:(a=Wn,n=void 0);const p=a===Wn&&s[o+1].startsWith("/>")?" ":"";r+=a===zs?l+c_:u>=0?(i.push(c),l.slice(0,u)+lg+l.slice(u)+In+p):l+In+(u===-2?o:p)}return[ug(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Ua{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,a=0;const o=t.length-1,l=this.parts,[c,h]=h_(t,e);if(this.el=Ua.createElement(c,i),pr.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=pr.nextNode())!==null&&l.length<o;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(lg)){const d=h[a++],p=n.getAttribute(u).split(In),f=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:f[2],strings:p,ctor:f[1]==="."?d_:f[1]==="?"?p_:f[1]==="@"?A_:Gl}),n.removeAttribute(u)}else u.startsWith(In)&&(l.push({type:6,index:r}),n.removeAttribute(u));if(hg.test(n.tagName)){const u=n.textContent.split(In),d=u.length-1;if(d>0){n.textContent=Sl?Sl.emptyScript:"";for(let p=0;p<d;p++)n.append(u[p],Da()),pr.nextNode(),l.push({type:2,index:++r});n.append(u[d],Da())}}}else if(n.nodeType===8)if(n.data===cg)l.push({type:2,index:r});else{let u=-1;for(;(u=n.data.indexOf(In,u+1))!==-1;)l.push({type:7,index:r}),u+=In.length-1}r++}}static createElement(t,e){const i=gr.createElement("template");return i.innerHTML=t,i}}function Is(s,t,e=s,i){if(t===ws)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl;const r=La(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=Is(s,n._$AS(s,t.values),n,i)),t}class u_{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??gr).importNode(e,!0);pr.currentNode=n;let r=pr.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new nd(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new f_(r,this,t)),this._$AV.push(c),l=i[++o]}a!==l?.index&&(r=pr.nextNode(),a++)}return pr.currentNode=gr,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}let nd=class dg{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=Re,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Is(this,t,e),La(t)?t===Re||t==null||t===""?(this._$AH!==Re&&this._$AR(),this._$AH=Re):t!==this._$AH&&t!==ws&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(i=>Su(i)||typeof i?.[Symbol.iterator]=="function")(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Re&&La(this._$AH)?this._$AA.nextSibling.data=t:this.T(gr.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ua.createElement(ug(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const r=new u_(n,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=qp.get(t.strings);return e===void 0&&qp.set(t.strings,e=new Ua(t)),e}k(t){Su(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new dg(this.O(Da()),this.O(Da()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Gl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=Re,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Re}_$AI(t,e=this,i,n){const r=this.strings;let a=!1;if(r===void 0)t=Is(this,t,e,0),a=!La(t)||t!==this._$AH&&t!==ws,a&&(this._$AH=t);else{const o=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=Is(this,o[i+l],e,l),c===ws&&(c=this._$AH[l]),a||=!La(c)||c!==this._$AH[l],c===Re?t=Re:t!==Re&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!n&&this.j(t)}j(t){t===Re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class d_ extends Gl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Re?void 0:t}}let p_=class extends Gl{constructor(){super(...arguments),this.type=4}j(s){this.element.toggleAttribute(this.name,!!s&&s!==Re)}};class A_ extends Gl{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=Is(this,t,e,0)??Re)===ws)return;const i=this._$AH,n=t===Re&&i!==Re||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Re&&(i===Re||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class f_{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Is(this,t)}}const m_=id.litHtmlPolyfillSupport;m_?.(Ua,nd),(id.litHtmlVersions??=[]).push("3.2.1");const pg=(s,t,e)=>{const i=e?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const r=e?.renderBefore??null;i._$litPart$=n=new nd(t.insertBefore(Da(),r),r,void 0,e??{})}return n._$AI(s),n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};class tl extends or{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=pg(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ws}}tl._$litElement$=!0,tl.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:tl});const g_=globalThis.litElementPolyfillSupport;g_?.({LitElement:tl}),(globalThis.litElementVersions??=[]).push("4.1.1");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,fg=Ag&&self.XRSession.prototype.requestHitTestSource!=null,Rc=self.ResizeObserver!=null,Dc=self.IntersectionObserver!=null,mg=fg;(()=>{const s=navigator.userAgent||navigator.vendor||self.opera;/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(s)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(s.substr(0,4))})();const b_=/android/i.test(navigator.userAgent),v_=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,y_=/firefox/i.test(navigator.userAgent),__=/OculusBrowser/.test(navigator.userAgent),E_=b_&&!y_&&!__,x_=!!(window.webkit&&window.webkit.messageHandlers),jp=(()=>{if(v_){if(x_)return!!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);{const s=document.createElement("a");return!!(s.relList&&s.relList.supports&&s.relList.supports("ar"))}}return!1})(),gg=s=>s&&s!=="null"?S_(s):null,Xp=()=>{if(mg)return;const s=[];throw Ag||s.push("WebXR Device API"),fg||s.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${s.join(", ")}`)},S_=s=>new URL(s,window.location.toString()).toString(),Yp=(s,t)=>{let e=null;return(...i)=>{e!=null&&self.clearTimeout(e),e=self.setTimeout((()=>{e=null,s(...i)}),t)}},Qi=(s,t,e)=>Math.max(t,Math.min(e,s)),Kp=(()=>{const s=new RegExp("[?&]model-viewer-debug-mode(&|$)");return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(s)})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn=function(s,t,e,i){for(var n,r=arguments.length,a=r<3?t:i,o=s.length-1;o>=0;o--)(n=s[o])&&(a=(r<3?n(a):r>3?n(t,e,a):n(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a};const ha=Symbol("currentEnvironmentMap"),el=Symbol("currentBackground"),Cl=Symbol("updateEnvironment"),yo=Symbol("cancelEnvironmentUpdate");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=vo`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          role="button"
          href="javascript:void(0);"
          aria-label="View in your space">
        ${vo`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${vo`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${vo`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`;var Jp=(function(){var s=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),t=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var e,i=WebAssembly.validate(s)?"b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb":"b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",n=WebAssembly.instantiate(r(i),{}).then((function(f){(e=f.instance).exports.__wasm_call_ctors()}));function r(f){for(var m=new Uint8Array(f.length),A=0;A<f.length;++A){var g=f.charCodeAt(A);m[A]=g>96?g-97:g>64?g-39:g+4}var b=0;for(A=0;A<f.length;++A)m[b++]=m[A]<60?t[m[A]]:64*(m[A]-60)+m[++A];return m.buffer.slice(0,b)}function a(f,m,A,g,b,v){var y=e.exports.sbrk,_=A+3&-4,E=y(_*g),x=y(b.length),I=new Uint8Array(e.exports.memory.buffer);I.set(b,x);var T=f(E,A,g,x,b.length);if(T==0&&v&&v(E,_,g),m.set(I.subarray(E,E+A*g)),y(E-y(0)),T!=0)throw new Error("Malformed buffer data: "+T)}var o={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},c=[],h=0;function u(f){var m={object:new Worker(f),pending:0,requests:{}};return m.object.onmessage=function(A){var g=A.data;m.pending-=g.count,m.requests[g.id][g.action](g.value),delete m.requests[g.id]},m}function d(f){for(var m="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(r(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+a.toString()+p.toString(),A=new Blob([m],{type:"text/javascript"}),g=URL.createObjectURL(A),b=0;b<f;++b)c[b]=u(g);URL.revokeObjectURL(g)}function p(f){n.then((function(){var m=f.data;try{var A=new Uint8Array(m.count*m.size);a(e.exports[m.mode],A,m.count,m.size,m.source,e.exports[m.filter]),self.postMessage({id:m.id,count:m.count,action:"resolve",value:A},[A.buffer])}catch(g){self.postMessage({id:m.id,count:m.count,action:"reject",value:g})}}))}return{ready:n,supported:!0,useWorkers:function(f){d(f)},decodeVertexBuffer:function(f,m,A,g,b){a(e.exports.meshopt_decodeVertexBuffer,f,m,A,g,e.exports[o[b]])},decodeIndexBuffer:function(f,m,A,g){a(e.exports.meshopt_decodeIndexBuffer,f,m,A,g)},decodeIndexSequence:function(f,m,A,g){a(e.exports.meshopt_decodeIndexSequence,f,m,A,g)},decodeGltfBuffer:function(f,m,A,g,b,v){a(e.exports[l[b]],f,m,A,g,e.exports[o[v]])},decodeGltfBufferAsync:function(f,m,A,g,b){return c.length>0?(function(v,y,_,E,x){for(var I=c[0],T=1;T<c.length;++T)c[T].pending<I.pending&&(I=c[T]);return new Promise((function(L,H){var U=new Uint8Array(_),O=h++;I.pending+=v,I.requests[O]={resolve:L,reject:H},I.object.postMessage({id:O,count:v,size:y,source:U,mode:E,filter:x},[U.buffer])}))})(f,m,A,l[g],o[b]):n.then((function(){var v=new Uint8Array(f*m);return a(e.exports[l[g]],v,f,m,A,e.exports[o[b]]),v}))}}})();const Lc=new WeakMap;function w_(){let s,t;function e(i,n,r,a,o,l){const c=l.num_components(),h=r.num_points()*c,u=h*o.BYTES_PER_ELEMENT,d=(function(m,A){switch(A){case Float32Array:return m.DT_FLOAT32;case Int8Array:return m.DT_INT8;case Int16Array:return m.DT_INT16;case Int32Array:return m.DT_INT32;case Uint8Array:return m.DT_UINT8;case Uint16Array:return m.DT_UINT16;case Uint32Array:return m.DT_UINT32}})(i,o),p=i._malloc(u);n.GetAttributeDataArrayForAllPoints(r,l,d,u,p);const f=new o(i.HEAPF32.buffer,p,h).slice();return i._free(p),{name:a,array:f,itemSize:c}}onmessage=function(i){const n=i.data;switch(n.type){case"init":s=n.decoderConfig,t=new Promise((function(o){s.onModuleLoaded=function(l){o({draco:l})},DracoDecoderModule(s)}));break;case"decode":const r=n.buffer,a=n.taskConfig;t.then((o=>{const l=o.draco,c=new l.Decoder;try{const h=(function(d,p,f,m){const A=m.attributeIDs,g=m.attributeTypes;let b,v;const y=p.GetEncodedGeometryType(f);if(y===d.TRIANGULAR_MESH)b=new d.Mesh,v=p.DecodeArrayToMesh(f,f.byteLength,b);else{if(y!==d.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");b=new d.PointCloud,v=p.DecodeArrayToPointCloud(f,f.byteLength,b)}if(!v.ok()||b.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+v.error_msg());const _={index:null,attributes:[]};for(const E in A){const x=self[g[E]];let I,T;if(m.useUniqueIDs)T=A[E],I=p.GetAttributeByUniqueId(b,T);else{if(T=p.GetAttributeId(b,d[A[E]]),T===-1)continue;I=p.GetAttribute(b,T)}const L=e(d,p,b,E,x,I);E==="color"&&(L.vertexColorSpace=m.vertexColorSpace),_.attributes.push(L)}return y===d.TRIANGULAR_MESH&&(_.index=(function(E,x,I){const T=I.num_faces(),L=3*T,H=4*L,U=E._malloc(H);x.GetTrianglesUInt32Array(I,H,U);const O=new Uint32Array(E.HEAPF32.buffer,U,L).slice();return E._free(U),{array:O,itemSize:1}})(d,p,b)),d.destroy(b),_})(l,c,new Int8Array(r),a),u=h.attributes.map((d=>d.array.buffer));h.index&&u.push(h.index.array.buffer),self.postMessage({type:"decode",id:n.id,geometry:h},u)}catch(h){console.error(h),self.postMessage({type:"error",id:n.id,error:h.message})}finally{l.destroy(c)}}))}}}function $p(s,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===2||t===1){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o===void 0)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s;for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),e=s.getIndex()}const i=e.count-2,n=[];if(t===2)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2==0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class I_ extends zi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register((function(e){return new D_(e)})),this.register((function(e){return new L_(e)})),this.register((function(e){return new H_(e)})),this.register((function(e){return new z_(e)})),this.register((function(e){return new V_(e)})),this.register((function(e){return new P_(e)})),this.register((function(e){return new F_(e)})),this.register((function(e){return new N_(e)})),this.register((function(e){return new Q_(e)})),this.register((function(e){return new R_(e)})),this.register((function(e){return new k_(e)})),this.register((function(e){return new U_(e)})),this.register((function(e){return new G_(e)})),this.register((function(e){return new O_(e)})),this.register((function(e){return new T_(e)})),this.register((function(e){return new W_(e)})),this.register((function(e){return new q_(e)}))}load(t,e,i,n){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ea.extractUrlBase(t);a=Ea.resolveURL(c,this.path)}else a=Ea.extractUrlBase(t);this.manager.itemStart(t);const o=function(c){n?n(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new un(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,(function(c){try{r.parse(c,a,(function(h){e(h),r.manager.itemEnd(t)}),o)}catch(h){o(h)}}),i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let r;const a={},o={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===bg){try{a[Nt.KHR_BINARY_GLTF]=new Y_(t)}catch(h){return void(n&&n(h))}r=JSON.parse(a[Nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2)return void(n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));const c=new cE(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Nt.KHR_MATERIALS_UNLIT:a[u]=new B_;break;case Nt.KHR_DRACO_MESH_COMPRESSION:a[u]=new K_(r,this.dracoLoader);break;case Nt.KHR_TEXTURE_TRANSFORM:a[u]=new J_;break;case Nt.KHR_MESH_QUANTIZATION:a[u]=new $_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(t,e){const i=this;return new Promise((function(n,r){i.parse(t,e,n,r)}))}}function M_(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class T_{constructor(t){this.parser=t,this.name=Nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){const r=e[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let n=e.cache.get(i);if(n)return n;const r=e.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let o;const l=new bt(16777215);a.color!==void 0&&l.setRGB(a.color[0],a.color[1],a.color[2],oe);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new eg(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new tg(l),o.distance=c;break;case"spot":o=new d0(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),on(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=e.createUniqueName(a.name||"light_"+t),n=Promise.resolve(o),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,n=i.json.nodes[t],r=(n.extensions&&n.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then((function(a){return i._getNodeRef(e.cache,r,a)}))}}let B_=class{constructor(){this.name=Nt.KHR_MATERIALS_UNLIT}getMaterialType(){return ui}extendParams(s,t,e){const i=[];s.color=new bt(1,1,1),s.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const r=n.baseColorFactor;s.color.setRGB(r[0],r[1],r[2],oe),s.opacity=r[3]}n.baseColorTexture!==void 0&&i.push(e.assignTexture(s,"map",n.baseColorTexture,ae))}return Promise.all(i)}},R_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(s,t){const e=this.parser.json.materials[s];if(!e.extensions||!e.extensions[this.name])return Promise.resolve();const i=e.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}},D_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser,i=e.json.materials[s];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&n.push(e.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&n.push(e.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(n.push(e.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Mt(a,a)}return Promise.all(n)}},L_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_DISPERSION}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser.json.materials[s];if(!e.extensions||!e.extensions[this.name])return Promise.resolve();const i=e.extensions[this.name];return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}},U_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser,i=e.json.materials[s];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&n.push(e.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&n.push(e.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(n)}},P_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_SHEEN}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser,i=e.json.materials[s];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new bt(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],oe)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&n.push(e.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ae)),r.sheenRoughnessTexture!==void 0&&n.push(e.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(n)}},F_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser,i=e.json.materials[s];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&n.push(e.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(n)}},N_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_VOLUME}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser,i=e.json.materials[s];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&n.push(e.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new bt().setRGB(a[0],a[1],a[2],oe),Promise.all(n)}},Q_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_IOR}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser.json.materials[s];if(!e.extensions||!e.extensions[this.name])return Promise.resolve();const i=e.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}},k_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_SPECULAR}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser,i=e.json.materials[s];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&n.push(e.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new bt().setRGB(a[0],a[1],a[2],oe),r.specularColorTexture!==void 0&&n.push(e.assignTexture(t,"specularColorMap",r.specularColorTexture,ae)),Promise.all(n)}},O_=class{constructor(s){this.parser=s,this.name=Nt.EXT_MATERIALS_BUMP}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser,i=e.json.materials[s];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&n.push(e.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(n)}},G_=class{constructor(s){this.parser=s,this.name=Nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(s){const t=this.parser.json.materials[s];return t.extensions&&t.extensions[this.name]?Hi:null}extendMaterialParams(s,t){const e=this.parser,i=e.json.materials[s];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&n.push(e.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(n)}};class H_{constructor(t){this.parser=t,this.name=Nt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class z_{constructor(t){this.parser=t,this.name=Nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,i=this.parser,n=i.json,r=n.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then((function(c){if(c)return i.loadTextureImage(t,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)}))}detectSupport(){return this.isSupported||(this.isSupported=new Promise((function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}}))),this.isSupported}}class V_{constructor(t){this.parser=t,this.name=Nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,i=this.parser,n=i.json,r=n.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then((function(c){if(c)return i.loadTextureImage(t,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)}))}detectSupport(){return this.isSupported||(this.isSupported=new Promise((function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}}))),this.isSupported}}class W_{constructor(t){this.name=Nt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then((function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then((function(p){return p.buffer})):a.ready.then((function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,n.mode,n.filter),p}))}))}return null}}let q_=class{constructor(s){this.name=Nt.EXT_MESH_GPU_INSTANCING,this.parser=s}createNodeMesh(s){const t=this.parser.json,e=t.nodes[s];if(!e.extensions||!e.extensions[this.name]||e.mesh===void 0)return null;const i=t.meshes[e.mesh];for(const o of i.primitives)if(o.mode!==ci.TRIANGLES&&o.mode!==ci.TRIANGLE_STRIP&&o.mode!==ci.TRIANGLE_FAN&&o.mode!==void 0)return null;const n=e.extensions[this.name].attributes,r=[],a={};for(const o in n)r.push(this.parser.getDependency("accessor",n[o]).then((l=>(a[o]=l,a[o]))));return r.length<1?null:(r.push(this.parser.createNodeMesh(s)),Promise.all(r).then((o=>{const l=o.pop(),c=l.isGroup?l.children:[l],h=o[0].count,u=[];for(const d of c){const p=new St,f=new B,m=new Ke,A=new B(1,1,1),g=new Wv(d.geometry,d.material,h);for(let b=0;b<h;b++)a.TRANSLATION&&f.fromBufferAttribute(a.TRANSLATION,b),a.ROTATION&&m.fromBufferAttribute(a.ROTATION,b),a.SCALE&&A.fromBufferAttribute(a.SCALE,b),g.setMatrixAt(b,p.compose(f,m,A));for(const b in a)if(b==="_COLOR_0"){const v=a[b];g.instanceColor=new vu(v.array,v.itemSize,v.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&d.geometry.setAttribute(b,a[b]);ne.prototype.copy.call(g,d),this.parser.assignFinalMaterial(g),u.push(g)}return l.isGroup?(l.clear(),l.add(...u),l):u[0]})))}};const bg="glTF",j_=1313821514,X_=5130562;class Y_{constructor(t){this.name=Nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,12),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==bg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-12,r=new DataView(t,12);let a=0;for(;a<n;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===j_){const c=new Uint8Array(t,12+a,o);this.content=i.decode(c)}else if(l===X_){const c=12+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class K_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Nt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,n=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Cu[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=Cu[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[t.attributes[h]],p=hs[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then((function(h){return new Promise((function(u,d){n.decodeDracoFile(h,(function(p){for(const f in p.attributes){const m=p.attributes[f],A=l[f];A!==void 0&&(m.normalized=A)}u(p)}),o,c,oe,d)}))}))}}class J_{constructor(){this.name=Nt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord!==void 0&&e.texCoord!==t.channel||e.offset!==void 0||e.rotation!==void 0||e.scale!==void 0)&&(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class $_{constructor(){this.name=Nt.KHR_MESH_QUANTIZATION}}class vg extends Qa{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[r+a];return e}interpolate_(t,e,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=2*o,c=3*o,h=n-e,u=(i-e)/h,d=u*u,p=d*u,f=t*c,m=f-c,A=-2*p+3*d,g=p-d,b=1-A,v=g-d+u;for(let y=0;y!==o;y++){const _=a[m+y+o],E=a[m+y+l]*h,x=a[f+y+o],I=a[f+y]*h;r[y]=b*_+v*E+A*x+g*I}return r}}const Z_=new Ke;class tE extends vg{interpolate_(t,e,i,n){const r=super.interpolate_(t,e,i,n);return Z_.fromArray(r).normalize().toArray(r),r}}const ci={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zp={9728:Fe,9729:zt,9984:Fl,9985:ls,9986:ur,9987:ri},tA={33071:Ce,33648:fs,10497:Gi},Uc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},En={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eE={CUBICSPLINE:void 0,LINEAR:vs,STEP:bs},iE="OPAQUE",nE="MASK",rE="BLEND";function sE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ra({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),s.DefaultMaterial}function jn(s,t,e){for(const i in e.extensions)s[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function on(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function aE(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)s.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oE(s){let t;const e=s.extensions&&s.extensions[Nt.KHR_DRACO_MESH_COMPRESSION];if(t=e?"draco:"+e.bufferView+":"+e.indices+":"+Pc(e.attributes):s.indices+":"+Pc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)t+=":"+Pc(s.targets[i]);return t}function Pc(s){let t="";const e=Object.keys(s).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+s[e[i]]+";";return t}function wu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}const lE=new St;class cE{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new M_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?this.textureLoader=new Zm(this.options.manager):this.textureLoader=new g0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new un(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll((function(a){return a._markDefs&&a._markDefs()})),Promise.all(this._invokeAll((function(a){return a.beforeRoot&&a.beforeRoot()}))).then((function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])})).then((function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return jn(r,o,n),on(o,n),Promise.all(i._invokeAll((function(l){return l.afterRoot&&l.afterRoot(o)}))).then((function(){for(const l of o.scenes)l.updateMatrixWorld();t(o)}))})).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=e.length;n<r;n++){const a=e[n].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let n=0,r=t.length;n<r;n++){const a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const n=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const n=t(e[i]);if(n)return n}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let n=0;n<e.length;n++){const r=t(e[n]);r&&i.push(r)}return i}getDependency(t,e){const i=t+":"+e;let n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne((function(r){return r.loadNode&&r.loadNode(e)}));break;case"mesh":n=this._invokeOne((function(r){return r.loadMesh&&r.loadMesh(e)}));break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne((function(r){return r.loadBufferView&&r.loadBufferView(e)}));break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne((function(r){return r.loadMaterial&&r.loadMaterial(e)}));break;case"texture":n=this._invokeOne((function(r){return r.loadTexture&&r.loadTexture(e)}));break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne((function(r){return r.loadAnimation&&r.loadAnimation(e)}));break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne((function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)})),!n)throw new Error("Unknown type: "+t)}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map((function(r,a){return i.getDependency(t,a)}))),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Nt.KHR_BINARY_GLTF].body);const n=this.options;return new Promise((function(r,a){i.load(Ea.resolveURL(e.uri,n.path),r,void 0,(function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))}))}))}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then((function(i){const n=e.byteLength||0,r=e.byteOffset||0;return i.slice(r,r+n)}))}loadAccessor(t){const e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){const a=Uc[n.type],o=hs[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new ue(c,a,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then((function(a){const o=a[0],l=Uc[n.type],c=hs[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,p=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,f=n.normalized===!0;let m,A;if(p&&p!==u){const g=Math.floor(d/p),b="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let v=e.cache.get(b);v||(m=new c(o,g*p,n.count*p/h),v=new Ov(m,p/h),e.cache.add(b,v)),A=new Yu(v,l,d%p/h,f)}else m=o===null?new c(n.count*l):new c(o,d,n.count*l),A=new ue(m,l,f);if(n.sparse!==void 0){const g=Uc.SCALAR,b=hs[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,_=new b(a[1],v,n.sparse.count*g),E=new c(a[2],y,n.sparse.count*l);o!==null&&(A=new ue(A.array.slice(),A.itemSize,A.normalized)),A.normalized=!1;for(let x=0,I=_.length;x<I;x++){const T=_[x];if(A.setX(T,E[x*l]),l>=2&&A.setY(T,E[x*l+1]),l>=3&&A.setZ(T,E[x*l+2]),l>=4&&A.setW(T,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}A.normalized=f}return A}))}loadTexture(t){const e=this.json,i=this.options,n=e.textures[t].source,r=e.images[n];let a=this.textureLoader;if(r.uri){const o=i.manager.getHandler(r.uri);o!==null&&(a=o)}return this.loadTextureImage(t,n,a)}loadTextureImage(t,e,i){const n=this,r=this.json,a=r.textures[t],o=r.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,i).then((function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Zp[u.magFilter]||zt,h.minFilter=Zp[u.minFilter]||ri,h.wrapS=tA[u.wrapS]||Gi,h.wrapT=tA[u.wrapT]||Gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Fe&&h.minFilter!==zt,n.associations.set(h,{textures:t}),h})).catch((function(){return null}));return this.textureCache[l]=c,c}loadImageSource(t,e){const i=this,n=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then((u=>u.clone()));const a=n.images[t],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then((function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l}));else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then((function(u){return new Promise((function(d,p){let f=d;e.isImageBitmapLoader===!0&&(f=function(m){const A=new he(m);A.needsUpdate=!0,d(A)}),e.load(Ea.resolveURL(u,r.path),f,void 0,p)}))})).then((function(u){var d;return c===!0&&o.revokeObjectURL(l),on(u,a),u.userData.mimeType=a.mimeType||((d=a.uri).search(/\.jpe?g($|\?)/i)>0||d.search(/^data\:image\/jpeg/)===0?"image/jpeg":d.search(/\.webp($|\?)/i)>0||d.search(/^data\:image\/webp/)===0?"image/webp":d.search(/\.ktx2($|\?)/i)>0||d.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"),u})).catch((function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u}));return this.sourceCache[t]=h,h}assignTexture(t,e,i,n){const r=this;return this.getDependency("texture",i.index).then((function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&((a=a.clone()).channel=i.texCoord),r.extensions[Nt.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a}))}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const n=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new qm,Mi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(t.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Wm,Mi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return Ra}loadMaterial(t){const e=this,i=this.json,n=this.extensions,r=i.materials[t];let a;const o={},l=[];if((r.extensions||{})[Nt.KHR_MATERIALS_UNLIT]){const h=n[Nt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,e))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new bt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],oe),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",h.baseColorTexture,ae)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne((function(u){return u.getMaterialType&&u.getMaterialType(t)})),l.push(Promise.all(this._invokeAll((function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)}))))}r.doubleSided===!0&&(o.side=2);const c=r.alphaMode||iE;if(c===rE?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===nE&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ui&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Mt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ui&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ui){const h=r.emissiveFactor;o.emissive=new bt().setRGB(h[0],h[1],h[2],oe)}return r.emissiveTexture!==void 0&&a!==ui&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,ae)),Promise.all(l).then((function(){const h=new a(o);return r.name&&(h.name=r.name),on(h,r),e.associations.set(h,{materials:t}),r.extensions&&jn(n,h,r),h}))}createUniqueName(t){const e=Ht.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[Nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then((function(l){return eA(l,o,e)}))}const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o],h=oE(c),u=n[h];if(u)a.push(u.promise);else{let d;d=c.extensions&&c.extensions[Nt.KHR_DRACO_MESH_COMPRESSION]?r(c):eA(new $e,c,e),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,i=this.json,n=this.extensions,r=i.meshes[t],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?sE(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then((function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,f=h.length;p<f;p++){const m=h[p],A=a[p];let g;const b=c[p];if(A.mode===ci.TRIANGLES||A.mode===ci.TRIANGLE_STRIP||A.mode===ci.TRIANGLE_FAN||A.mode===void 0)g=r.isSkinnedMesh===!0?new Hv(m,b):new Zt(m,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),A.mode===ci.TRIANGLE_STRIP?g.geometry=$p(g.geometry,1):A.mode===ci.TRIANGLE_FAN&&(g.geometry=$p(g.geometry,2));else if(A.mode===ci.LINES)g=new Xv(m,b);else if(A.mode===ci.LINE_STRIP)g=new Ba(m,b);else if(A.mode===ci.LINE_LOOP)g=new Yv(m,b);else{if(A.mode!==ci.POINTS)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+A.mode);g=new Kv(m,b)}Object.keys(g.geometry.morphAttributes).length>0&&aE(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),on(g,r),A.extensions&&jn(n,g,A),e.assignFinalMaterial(g),u.push(g)}for(let p=0,f=u.length;p<f;p++)e.associations.set(u[p],{meshes:t,primitives:p});if(u.length===1)return r.extensions&&jn(n,u[0],r),u[0];const d=new Tn;r.extensions&&jn(n,d,r),e.associations.set(d,{meshes:t});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d}))}loadCamera(t){let e;const i=this.json.cameras[t],n=i[i.type];if(n)return i.type==="perspective"?e=new Pe(Ko.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new Ms(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),on(e,i),Promise.resolve(e);console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(t){const e=this.json.skins[t],i=[];for(let n=0,r=e.joints.length;n<r;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then((function(n){const r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new St;r!==null&&d.fromArray(r.array,16*c),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Ku(o,l)}))}loadAnimation(t){const e=this.json,i=this,n=e.animations[t],r=n.name?n.name:"animation_"+t,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const p=n.channels[u],f=n.samplers[p.sampler],m=p.target,A=m.node,g=n.parameters!==void 0?n.parameters[f.input]:f.input,b=n.parameters!==void 0?n.parameters[f.output]:f.output;m.node!==void 0&&(a.push(this.getDependency("node",A)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(f),h.push(m))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then((function(u){const d=u[0],p=u[1],f=u[2],m=u[3],A=u[4],g=[];for(let b=0,v=d.length;b<v;b++){const y=d[b],_=p[b],E=f[b],x=m[b],I=A[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const T=i._createAnimationTracks(y,_,E,x,I);if(T)for(let L=0;L<T.length;L++)g.push(T[L])}return new _u(r,void 0,g)}))}createNodeMesh(t){const e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then((function(r){const a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse((function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]})),a}))}loadNode(t){const e=this,i=this.json.nodes[t],n=e._loadNodeShallow(t),r=[],a=i.children||[];for(let l=0,c=a.length;l<c;l++)r.push(e.getDependency("node",a[l]));const o=i.skin===void 0?Promise.resolve(null):e.getDependency("skin",i.skin);return Promise.all([n,Promise.all(r),o]).then((function(l){const c=l[0],h=l[1],u=l[2];u!==null&&c.traverse((function(d){d.isSkinnedMesh&&d.bind(u,lE)}));for(let d=0,p=h.length;d<p;d++)c.add(h[d]);return c}))}_loadNodeShallow(t){const e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne((function(c){return c.createNodeMesh&&c.createNodeMesh(t)}));return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then((function(c){return n._getNodeRef(n.cameraCache,r.camera,c)}))),n._invokeAll((function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)})).forEach((function(c){o.push(c)})),this.nodeCache[t]=Promise.all(o).then((function(c){let h;if(h=r.isBone===!0?new Vm:c.length>1?new Tn:c.length===1?c[0]:new ne,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),on(h,r),r.extensions&&jn(i,h,r),r.matrix!==void 0){const u=new St;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=t,h})),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],n=this,r=new Tn;i.name&&(r.name=n.createUniqueName(i.name)),on(r,i),i.extensions&&jn(e,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then((function(l){for(let c=0,h=l.length;c<h;c++)r.add(l[c]);return n.associations=(c=>{const h=new Map;for(const[u,d]of n.associations)(u instanceof Mi||u instanceof he)&&h.set(u,d);return c.traverse((u=>{const d=n.associations.get(u);d!=null&&h.set(u,d)})),h})(r),r}))}_createAnimationTracks(t,e,i,n,r){const a=[],o=t.name?t.name:t.uuid,l=[];let c;switch(En[r.path]===En.weights?t.traverse((function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)})):l.push(o),En[r.path]){case En.weights:c=xs;break;case En.rotation:c=Ss;break;case En.position:case En.scale:c=Cs;break;default:i.itemSize===1?c=xs:c=Cs}const h=n.interpolation!==void 0?eE[n.interpolation]:vs,u=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const f=new c(l[d]+"."+En[r.path],e.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=wu(e.constructor),n=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)n[r]=e[r]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(e){return new(this instanceof Ss?tE:vg)(this.times,this.values,this.getValueSize()/3,e)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function eA(s,t,e){const i=t.attributes,n=[];function r(a,o){return e.getDependency("accessor",a).then((function(l){s.setAttribute(o,l)}))}for(const a in i){const o=Cu[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then((function(o){s.setIndex(o)}));n.push(a)}return Ot.workingColorSpace!==oe&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ot.workingColorSpace}" not supported.`),on(s,t),(function(a,o,l){const c=o.attributes,h=new Ye;if(c.POSITION===void 0)return;{const p=l.json.accessors[c.POSITION],f=p.min,m=p.max;if(f===void 0||m===void 0)return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(h.set(new B(f[0],f[1],f[2]),new B(m[0],m[1],m[2])),p.normalized){const A=wu(hs[p.componentType]);h.min.multiplyScalar(A),h.max.multiplyScalar(A)}}const u=o.targets;if(u!==void 0){const p=new B,f=new B;for(let m=0,A=u.length;m<A;m++){const g=u[m];if(g.POSITION!==void 0){const b=l.json.accessors[g.POSITION],v=b.min,y=b.max;if(v!==void 0&&y!==void 0){if(f.setX(Math.max(Math.abs(v[0]),Math.abs(y[0]))),f.setY(Math.max(Math.abs(v[1]),Math.abs(y[1]))),f.setZ(Math.max(Math.abs(v[2]),Math.abs(y[2]))),b.normalized){const _=wu(hs[b.componentType]);f.multiplyScalar(_)}p.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}h.expandByVector(p)}a.boundingBox=h;const d=new fi;h.getCenter(d.center),d.radius=h.min.distanceTo(h.max)/2,a.boundingSphere=d})(s,t,e),Promise.all(n).then((function(){return t.targets!==void 0?(function(a,o,l){let c=!1,h=!1,u=!1;for(let m=0,A=o.length;m<A;m++){const g=o[m];if(g.POSITION!==void 0&&(c=!0),g.NORMAL!==void 0&&(h=!0),g.COLOR_0!==void 0&&(u=!0),c&&h&&u)break}if(!c&&!h&&!u)return Promise.resolve(a);const d=[],p=[],f=[];for(let m=0,A=o.length;m<A;m++){const g=o[m];if(c){const b=g.POSITION!==void 0?l.getDependency("accessor",g.POSITION):a.attributes.position;d.push(b)}if(h){const b=g.NORMAL!==void 0?l.getDependency("accessor",g.NORMAL):a.attributes.normal;p.push(b)}if(u){const b=g.COLOR_0!==void 0?l.getDependency("accessor",g.COLOR_0):a.attributes.color;f.push(b)}}return Promise.all([Promise.all(d),Promise.all(p),Promise.all(f)]).then((function(m){const A=m[0],g=m[1],b=m[2];return c&&(a.morphAttributes.position=A),h&&(a.morphAttributes.normal=g),u&&(a.morphAttributes.color=b),a.morphTargetsRelative=!0,a}))})(s,t.targets,e):s}))}class hE{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(t){if(!this.workers[t]){const e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=e}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,e){const i=this.workersResolve[t];if(i&&i(e),this.queue.length){const{resolve:n,msg:r,transfer:a}=this.queue.shift();this.workersResolve[t]=n,this.workers[t].postMessage(r,a)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,e){return new Promise((i=>{const n=this._getIdleWorker();n!==-1?(this._initWorker(n),this.workerStatus|=1<<n,this.workersResolve[n]=i,this.workers[n].postMessage(t,e)):this.queue.push({resolve:i,msg:t,transfer:e})}))}dispose(){this.workers.forEach((t=>t.terminate())),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const yg=9,_g=15,Eg=16,xg=22,Sg=37,Cg=43,wg=76,Ig=83,Mg=97,Tg=100,Bg=103,Rg=109,Dg=165,Lg=166,rd=1000066e3;class uE{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Vs{constructor(t,e,i,n){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(t.buffer,t.byteOffset+e,i),this._littleEndian=n,this._offset=0}_nextUint8(){const t=this._dataView.getUint8(this._offset);return this._offset+=1,t}_nextUint16(){const t=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,t}_nextUint32(){const t=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint64(){const t=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,t}_nextInt32(){const t=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint8Array(t){const e=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,t);return this._offset+=t,e}_skip(t){return this._offset+=t,this}_scan(t,e){e===void 0&&(e=0);const i=this._offset;let n=0;for(;this._dataView.getUint8(this._offset)!==e&&n<t;)n++,this._offset++;return n<t&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,n)}}const Ve=[171,75,84,88,32,50,48,187,13,10,26,10];function iA(s){return new TextDecoder().decode(s)}let Fc,an,Iu;const Nc={env:{emscripten_notify_memory_growth:function(s){Iu=new Uint8Array(an.exports.memory.buffer)}}};class dE{init(){return Fc||(Fc=typeof fetch<"u"?fetch("data:application/wasm;base64,"+nA).then((t=>t.arrayBuffer())).then((t=>WebAssembly.instantiate(t,Nc))).then(this._init):WebAssembly.instantiate(Buffer.from(nA,"base64"),Nc).then(this._init),Fc)}_init(t){an=t.instance,Nc.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!an)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=t.byteLength,n=an.exports.malloc(i);Iu.set(t,n),e=e||Number(an.exports.ZSTD_findDecompressedSize(n,i));const r=an.exports.malloc(e),a=an.exports.ZSTD_decompress(r,e,n,i),o=Iu.slice(r,r+a);return an.exports.free(n),an.exports.free(r),o}}const nA="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",Qc=new WeakMap;let kc,Oc=0;class hi extends zi{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new hE,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}async detectSupportAsync(t){return this.workerConfig={astcSupported:await t.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await t.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await t.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await t.hasFeatureAsync("texture-compression-bc"),bptcSupported:await t.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await t.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(t){return t.isWebGPURenderer===!0?this.workerConfig={astcSupported:t.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:t.hasFeature("texture-compression-etc1"),etc2Supported:t.hasFeature("texture-compression-etc2"),dxtSupported:t.hasFeature("texture-compression-bc"),bptcSupported:t.hasFeature("texture-compression-bptc"),pvrtcSupported:t.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:t.extensions.has("WEBGL_compressed_texture_astc")&&t.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const t=new un(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);const e=t.loadAsync("basis_transcoder.js"),i=new un(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const n=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([e,n]).then((([r,a])=>{const o=hi.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(hi.EngineFormat),"let _EngineType = "+JSON.stringify(hi.EngineType),"let _TranscoderFormat = "+JSON.stringify(hi.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(hi.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator((()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c}))})),Oc>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Oc++}return this.transcoderPending}load(t,e,i,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new un(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(t,(a=>{this.parse(a,e,n)}),i,n)}parse(t,e,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Qc.has(t))return Qc.get(t).promise.then(e).catch(i);this._createTexture(t).then((n=>e?e(n):null)).catch(i)}_createTextureFrom(t,e){const{type:i,error:n,data:{faces:r,width:a,height:o,format:l,type:c,dfdFlags:h}}=t;if(i==="error")return Promise.reject(n);let u;if(e.faceCount===6)u=new Zv(r,l,c);else{const d=r[0].mipmaps;u=e.layerCount>1?new $v(d,a,o,e.layerCount,l,c):new Ar(d,a,o,l,c)}return u.minFilter=r[0].mipmaps.length===1?zt:ri,u.magFilter=zt,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=rA(e),u.premultiplyAlpha=!!(1&h),u}async _createTexture(t,e={}){const i=(function(o){const l=new Uint8Array(o.buffer,o.byteOffset,Ve.length);if(l[0]!==Ve[0]||l[1]!==Ve[1]||l[2]!==Ve[2]||l[3]!==Ve[3]||l[4]!==Ve[4]||l[5]!==Ve[5]||l[6]!==Ve[6]||l[7]!==Ve[7]||l[8]!==Ve[8]||l[9]!==Ve[9]||l[10]!==Ve[10]||l[11]!==Ve[11])throw new Error("Missing KTX 2.0 identifier.");const c=new uE,h=17*Uint32Array.BYTES_PER_ELEMENT,u=new Vs(o,Ve.length,h,!0);c.vkFormat=u._nextUint32(),c.typeSize=u._nextUint32(),c.pixelWidth=u._nextUint32(),c.pixelHeight=u._nextUint32(),c.pixelDepth=u._nextUint32(),c.layerCount=u._nextUint32(),c.faceCount=u._nextUint32();const d=u._nextUint32();c.supercompressionScheme=u._nextUint32();const p=u._nextUint32(),f=u._nextUint32(),m=u._nextUint32(),A=u._nextUint32(),g=u._nextUint64(),b=u._nextUint64(),v=new Vs(o,Ve.length+h,3*d*8,!0);for(let at=0;at<d;at++)c.levels.push({levelData:new Uint8Array(o.buffer,o.byteOffset+v._nextUint64(),v._nextUint64()),uncompressedByteLength:v._nextUint64()});const y=new Vs(o,p,f,!0),_={vendorId:y._skip(4)._nextUint16(),descriptorType:y._nextUint16(),versionNumber:y._nextUint16(),descriptorBlockSize:y._nextUint16(),colorModel:y._nextUint8(),colorPrimaries:y._nextUint8(),transferFunction:y._nextUint8(),flags:y._nextUint8(),texelBlockDimension:[y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8()],bytesPlane:[y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8()],samples:[]},E=(_.descriptorBlockSize/4-6)/4;for(let at=0;at<E;at++){const rt={bitOffset:y._nextUint16(),bitLength:y._nextUint8(),channelType:y._nextUint8(),samplePosition:[y._nextUint8(),y._nextUint8(),y._nextUint8(),y._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&rt.channelType?(rt.sampleLower=y._nextInt32(),rt.sampleUpper=y._nextInt32()):(rt.sampleLower=y._nextUint32(),rt.sampleUpper=y._nextUint32()),_.samples[at]=rt}c.dataFormatDescriptor.length=0,c.dataFormatDescriptor.push(_);const x=new Vs(o,m,A,!0);for(;x._offset<A;){const at=x._nextUint32(),rt=x._scan(at),C=iA(rt);if(c.keyValue[C]=x._nextUint8Array(at-rt.byteLength-1),C.match(/^ktx/i)){const w=iA(c.keyValue[C]);c.keyValue[C]=w.substring(0,w.lastIndexOf("\0"))}x._skip(at%4?4-at%4:0)}if(b<=0)return c;const I=new Vs(o,g,b,!0),T=I._nextUint16(),L=I._nextUint16(),H=I._nextUint32(),U=I._nextUint32(),O=I._nextUint32(),F=I._nextUint32(),q=[];for(let at=0;at<d;at++)q.push({imageFlags:I._nextUint32(),rgbSliceByteOffset:I._nextUint32(),rgbSliceByteLength:I._nextUint32(),alphaSliceByteOffset:I._nextUint32(),alphaSliceByteLength:I._nextUint32()});const N=g+I._offset,K=N+H,$=K+U,lt=$+O,ft=new Uint8Array(o.buffer,o.byteOffset+N,H),Y=new Uint8Array(o.buffer,o.byteOffset+K,U),J=new Uint8Array(o.buffer,o.byteOffset+$,O),ct=new Uint8Array(o.buffer,o.byteOffset+lt,F);return c.globalData={endpointCount:T,selectorCount:L,imageDescs:q,endpointsData:ft,selectorsData:Y,tablesData:J,extendedData:ct},c})(new Uint8Array(t)),n=i.vkFormat===rd&&i.dataFormatDescriptor[0].colorModel===167;if(!(i.vkFormat===0||n&&!this.workerConfig.astcHDRSupported))return(async function(o){const{vkFormat:l}=o;if(Gc[l]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let c;o.supercompressionScheme===2&&(kc||(kc=new Promise((async d=>{const p=new dE;await p.init(),d(p)}))),c=await kc);const h=[];for(let d=0;d<o.levels.length;d++){const p=Math.max(1,o.pixelWidth>>d),f=Math.max(1,o.pixelHeight>>d),m=o.pixelDepth?Math.max(1,o.pixelDepth>>d):0,A=o.levels[d];let g,b;if(o.supercompressionScheme===0)g=A.levelData;else{if(o.supercompressionScheme!==2)throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");g=c.decode(A.levelData,A.uncompressedByteLength)}b=Hc[l]===ye?new Float32Array(g.buffer,g.byteOffset,g.byteLength/Float32Array.BYTES_PER_ELEMENT):Hc[l]===Se?new Uint16Array(g.buffer,g.byteOffset,g.byteLength/Uint16Array.BYTES_PER_ELEMENT):g,h.push({data:b,width:p,height:f,depth:m})}let u;if(pE.has(Gc[l]))u=o.pixelDepth===0?new Na(h[0].data,o.pixelWidth,o.pixelHeight):new Nm(h[0].data,o.pixelWidth,o.pixelHeight,o.pixelDepth);else{if(o.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");u=new Ar(h,o.pixelWidth,o.pixelHeight),u.minFilter=h.length===1?zt:ri,u.magFilter=zt}return u.mipmaps=h,u.type=Hc[l],u.format=Gc[l],u.colorSpace=rA(o),u.needsUpdate=!0,Promise.resolve(u)})(i);const r=e,a=this.init().then((()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:r},[t]))).then((o=>this._createTextureFrom(o.data,i)));return Qc.set(t,{promise:a}),a}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Oc--,this}}hi.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2},hi.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25},hi.EngineFormat={RGBAFormat:Ae,RGBA_ASTC_4x4_Format:wa,RGB_BPTC_UNSIGNED_Format:gl,RGBA_BPTC_Format:va,RGBA_ETC2_EAC_Format:ml,RGBA_PVRTC_4BPPV1_Format:pl,RGBA_S3TC_DXT5_Format:ba,RGB_ETC1_Format:Al,RGB_ETC2_Format:fl,RGB_PVRTC_4BPPV1_Format:dl,RGBA_S3TC_DXT1_Format:ga},hi.EngineType={UnsignedByteType:xe,HalfFloatType:Se,FloatType:ye},hi.BasisWorker=function(){let s,t,e;const i=_EngineFormat,n=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",(function(u){const d=u.data;switch(d.type){case"init":s=d.config,p=d.transcoderBinary,t=new Promise((f=>{e={wasmBinary:p,onRuntimeInitialized:f},BASIS(e)})).then((()=>{e.initializeBasis(),e.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")}));break;case"transcode":t.then((()=>{try{const{faces:f,buffers:m,width:A,height:g,hasAlpha:b,format:v,type:y,dfdFlags:_}=(function(E){const x=new e.KTX2File(new Uint8Array(E));function I(){x.close(),x.delete()}if(!x.isValid())throw I(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let T;if(x.isUASTC())T=a.UASTC;else if(x.isETC1S())T=a.ETC1S;else{if(!x.isHDR())throw new Error("THREE.KTX2Loader: Unknown Basis encoding");T=a.UASTC_HDR}const L=x.getWidth(),H=x.getHeight(),U=x.getLayers()||1,O=x.getLevels(),F=x.getFaces(),q=x.getHasAlpha(),N=x.getDFDFlags(),{transcoderFormat:K,engineFormat:$,engineType:lt}=(function(J,ct,at,rt){const C=l[J];for(let w=0;w<C.length;w++){const R=C[w];if(!(R.if&&!s[R.if])&&R.basisFormat.includes(J)&&!(rt&&R.transcoderFormat.length<2)&&!(R.needsPowerOfTwo&&(!c(ct)||!c(at))))return{transcoderFormat:R.transcoderFormat[rt?1:0],engineFormat:R.engineFormat[rt?1:0],engineType:R.engineType[0]}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")})(T,L,H,q);if(!L||!H||!O)throw I(),new Error("THREE.KTX2Loader:	Invalid texture");if(!x.startTranscoding())throw I(),new Error("THREE.KTX2Loader: .startTranscoding failed");const ft=[],Y=[];for(let J=0;J<F;J++){const ct=[];for(let at=0;at<O;at++){const rt=[];let C,w;for(let X=0;X<U;X++){const P=x.getImageLevelInfo(at,X,J);J!==0||at!==0||X!==0||P.origWidth%4==0&&P.origHeight%4==0||console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),O>1?(C=P.origWidth,w=P.origHeight):(C=P.width,w=P.height);let z=new Uint8Array(x.getImageTranscodedSizeInBytes(at,X,0,K));const M=x.transcodeImage(z,at,X,J,K,0,-1,-1);if(lt===n.HalfFloatType&&(z=new Uint16Array(z.buffer,z.byteOffset,z.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!M)throw I(),new Error("THREE.KTX2Loader: .transcodeImage failed.");rt.push(z)}const R=h(rt);ct.push({data:R,width:C,height:w}),Y.push(R.buffer)}ft.push({mipmaps:ct,width:L,height:H,format:$,type:lt})}return I(),{faces:ft,buffers:Y,width:L,height:H,hasAlpha:q,dfdFlags:N,format:$,type:lt}})(d.buffer);self.postMessage({type:"transcode",id:d.id,data:{faces:f,width:A,height:g,hasAlpha:b,format:v,type:y,dfdFlags:_}},m)}catch(f){console.error(f),self.postMessage({type:"error",id:d.id,error:f.message})}}))}var p}));const o=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],engineType:[n.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],engineType:[n.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],engineType:[n.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],engineType:[n.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[i.RGB_ETC1_Format],engineType:[n.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],engineType:[n.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[i.RGB_BPTC_UNSIGNED_Format],engineType:[n.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[i.RGBAFormat,i.RGBAFormat],engineType:[n.UnsignedByteType,n.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[i.RGBAFormat],engineType:[n.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],l={[a.ETC1S]:o.filter((u=>u.basisFormat.includes(a.ETC1S))).sort(((u,d)=>u.priorityUASTC-d.priorityUASTC)),[a.UASTC]:o.filter((u=>u.basisFormat.includes(a.UASTC))).sort(((u,d)=>u.priorityUASTC-d.priorityUASTC)),[a.UASTC_HDR]:o.filter((u=>u.basisFormat.includes(a.UASTC_HDR))).sort(((u,d)=>u.priorityHDR-d.priorityHDR))};function c(u){return u<=2||!(u&u-1)&&u!==0}function h(u){if(u.length===1)return u[0];let d=0;for(let m=0;m<u.length;m++)d+=u[m].byteLength;const p=new Uint8Array(d);let f=0;for(let m=0;m<u.length;m++){const A=u[m];p.set(A,f),f+=A.byteLength}return p}};const pE=new Set([Ae,dr,Mn]),Gc={[Rg]:Ae,[Mg]:Ae,[Sg]:Ae,[Cg]:Ae,[Bg]:dr,[Ig]:dr,[Eg]:dr,[xg]:dr,[Tg]:Mn,[wg]:Mn,[_g]:Mn,[yg]:Mn,[rd]:wa,[Lg]:Ia,[Dg]:Ia},Hc={[Rg]:ye,[Mg]:Se,[Sg]:xe,[Cg]:xe,[Bg]:ye,[Ig]:Se,[Eg]:xe,[xg]:xe,[Tg]:ye,[wg]:Se,[_g]:xe,[yg]:xe,[rd]:Se,[Lg]:xe,[Dg]:xe};function rA(s){const t=s.dataFormatDescriptor[0];return t.colorPrimaries===1?t.transferFunction===2?ae:oe:t.colorPrimaries===10?t.transferFunction===2?"display-p3":"display-p3-linear":(t.colorPrimaries===0||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),ln)}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sA,aA;const xi=Symbol("retainerCount"),$i=Symbol("recentlyUsed"),_o=Symbol("evict"),Ws=Symbol("evictionThreshold"),zc=Symbol("cache");class AE{constructor(t,e=5){this[sA]=new Map,this[aA]=[],this[zc]=t,this[Ws]=e}set evictionThreshold(t){this[Ws]=t,this[_o]()}get evictionThreshold(){return this[Ws]}get cache(){return this[zc]}retainerCount(t){return this[xi].get(t)||0}reset(){this[xi].clear(),this[$i]=[]}retain(t){this[xi].has(t)||this[xi].set(t,0),this[xi].set(t,this[xi].get(t)+1);const e=this[$i].indexOf(t);e!==-1&&this[$i].splice(e,1),this[$i].unshift(t),this[_o]()}release(t){this[xi].has(t)&&this[xi].set(t,Math.max(this[xi].get(t)-1,0)),this[_o]()}[(sA=xi,aA=$i,_o)](){if(!(this[$i].length<this[Ws]))for(let t=this[$i].length-1;t>=this[Ws];--t){const e=this[$i][t];this[xi].get(e)===0&&(this[zc].delete(e),this[$i].splice(t,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=s=>{const t=new Map;for(const e of s.mappings)for(const i of e.variants)t.set(i,{material:null,gltfMaterialIndex:e.material});return t};class mE{constructor(t){this.parser=t,this.name="KHR_materials_variants"}afterRoot(t){const e=this.parser,i=e.json;if(i.extensions===void 0||i.extensions[this.name]===void 0)return null;const n=(r=>{const a=[],o=new Set;for(const l of r){let c=l,h=0;for(;o.has(c);)c=l+"."+ ++h;o.add(c),a.push(c)}return a})((i.extensions[this.name].variants||[]).map((r=>r.name)));for(const r of t.scenes)r.traverse((a=>{const o=a;if(!o.material)return;const l=e.associations.get(o);if(l==null||l.meshes==null||l.primitives==null)return;const c=i.meshes[l.meshes].primitives[l.primitives].extensions;c&&c[this.name]&&(o.userData.variantMaterials=fE(c[this.name]))}));return t.userData.variants=n,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ug,oA;he.DEFAULT_ANISOTROPY=4;const Zi=new Map,Vc=new Map;let lA;const cA=new class extends zi{constructor(s){super(s),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(s){return this.decoderPath=s,this}setDecoderConfig(s){return this.decoderConfig=s,this}setWorkerLimit(s){return this.workerLimit=s,this}load(s,t,e,i){const n=new un(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(s,(r=>{this.parse(r,t,i)}),e,i)}parse(s,t,e=()=>{}){this.decodeDracoFile(s,t,null,null,ae,e).catch(e)}decodeDracoFile(s,t,e,i,n=oe,r=()=>{}){const a={attributeIDs:e||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!e,vertexColorSpace:n};return this.decodeGeometry(s,a).then(t).catch(r)}decodeGeometry(s,t){const e=JSON.stringify(t);if(Lc.has(s)){const o=Lc.get(s);if(o.key===e)return o.promise;if(s.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const n=this.workerNextTaskID++,r=s.byteLength,a=this._getWorker(n,r).then((o=>(i=o,new Promise(((l,c)=>{i._callbacks[n]={resolve:l,reject:c},i.postMessage({type:"decode",id:n,taskConfig:t,buffer:s},[s])}))))).then((o=>this._createGeometry(o.geometry)));return a.catch((()=>!0)).then((()=>{i&&n&&this._releaseTask(i,n)})),Lc.set(s,{key:e,promise:a}),a}_createGeometry(s){const t=new $e;s.index&&t.setIndex(new ue(s.index.array,1));for(let e=0;e<s.attributes.length;e++){const i=s.attributes[e],n=i.name,r=i.array,a=i.itemSize,o=new ue(r,a);n==="color"&&(this._assignVertexColorSpace(o,i.vertexColorSpace),o.normalized=!(r instanceof Float32Array)),t.setAttribute(n,o)}return t}_assignVertexColorSpace(s,t){if(t!==ae)return;const e=new bt;for(let i=0,n=s.count;i<n;i++)e.fromBufferAttribute(s,i),Ot.toWorkingColorSpace(e,ae),s.setXYZ(i,e.r,e.g,e.b)}_loadLibrary(s,t){const e=new un(this.manager);return e.setPath(this.decoderPath),e.setResponseType(t),e.setWithCredentials(this.withCredentials),new Promise(((i,n)=>{e.load(s,i,void 0,n)}))}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const s=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return s?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then((e=>{const i=e[0];s||(this.decoderConfig.wasmBinary=e[1]);const n=w_.toString(),r=["/* draco decoder */",i,"","/* worker */",n.substring(n.indexOf("{")+1,n.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))})),this.decoderPending}_getWorker(s,t){return this._initDecoder().then((()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(n){const r=n.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort((function(i,n){return i._taskLoad>n._taskLoad?-1:1}));const e=this.workerPool[this.workerPool.length-1];return e._taskCosts[s]=t,e._taskLoad+=t,e}))}_releaseTask(s,t){s._taskLoad-=s._taskCosts[t],delete s._callbacks[t],delete s._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map((s=>s._taskLoad)))}dispose(){for(let s=0;s<this.workerPool.length;++s)this.workerPool[s].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};let hA;const Wc=new hi;let qc,jc;const ir=Symbol("loader"),wn=Symbol("evictionPolicy"),uA=Symbol("GLTFInstance");class je extends Ti{static setDRACODecoderLocation(t){lA=t,cA.setDecoderPath(t)}static getDRACODecoderLocation(){return lA}static setKTX2TranscoderLocation(t){hA=t,Wc.setTranscoderPath(t)}static getKTX2TranscoderLocation(){return hA}static setMeshoptDecoderLocation(t){var e;qc!==t&&(qc=t,jc=(e=t,new Promise(((i,n)=>{const r=document.createElement("script");document.body.appendChild(r),r.onload=i,r.onerror=n,r.async=!0,r.src=e}))).then((()=>Jp.ready)).then((()=>Jp)))}static getMeshoptDecoderLocation(){return qc}static initializeKTX2Loader(t){Wc.detectSupport(t)}static get cache(){return Zi}static clearCache(){Zi.forEach(((t,e)=>{this.delete(e)})),this[wn].reset()}static has(t){return Zi.has(t)}static async delete(t){if(!this.has(t))return;const e=Zi.get(t);Vc.delete(t),Zi.delete(t),(await e).dispose()}static hasFinishedLoading(t){return!!Vc.get(t)}constructor(t){super(),this[oA]=new I_().register((e=>new mE(e))),this[uA]=t,this[ir].setDRACOLoader(cA),this[ir].setKTX2Loader(Wc)}get[(Ug=wn,oA=ir,wn)](){return this.constructor[wn]}async preload(t,e,i=()=>{}){if(this[ir].setWithCredentials(e.withCredentials),this.dispatchEvent({type:"preload",element:e,src:t}),!Zi.has(t)){jc!=null&&this[ir].setMeshoptDecoder(await jc);const n=((o,l,c=()=>{})=>{const h=u=>{const d=u.loaded/u.total;c(Math.max(0,Math.min(1,isFinite(d)?d:1)))};return new Promise(((u,d)=>{l.load(o,u,h,d)}))})(t,this[ir],(o=>{i(.8*o)})),r=this[uA],a=n.then((o=>r.prepare(o))).then((o=>(i(.9),new r(o)))).catch((o=>(console.error(o),new r)));Zi.set(t,a)}await Zi.get(t),Vc.set(t,!0),i&&i(1)}async load(t,e,i=()=>{}){await this.preload(t,e,i);const n=await Zi.get(t),r=await n.clone();return this[wn].retain(t),r.dispose=()=>{this[wn].release(t)},r}}je[Ug]=new AE(je);class gE extends ne{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Mt(.5,.5),this.addEventListener("removed",(function(){this.traverse((function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()}))}))}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Fr=new B,dA=new St,pA=new St,AA=new B,fA=new B;class bE{constructor(t={}){const e=this;let i,n,r,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");function c(d){d.isCSS2DObject&&(d.element.style.display="none");for(let p=0,f=d.children.length;p<f;p++)c(d.children[p])}function h(d,p,f){if(d.visible!==!1){if(d.isCSS2DObject){Fr.setFromMatrixPosition(d.matrixWorld),Fr.applyMatrix4(pA);const m=Fr.z>=-1&&Fr.z<=1&&d.layers.test(f.layers)===!0,A=d.element;A.style.display=m===!0?"":"none",m===!0&&(d.onBeforeRender(e,p,f),A.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(Fr.x*r+r)+"px,"+(-Fr.y*a+a)+"px)",A.parentNode!==l&&l.appendChild(A),d.onAfterRender(e,p,f));const g={distanceToCameraSquared:u(f,d)};o.objects.set(d,g)}for(let m=0,A=d.children.length;m<A;m++)h(d.children[m],p,f)}else c(d)}function u(d,p){return AA.setFromMatrixPosition(d.matrixWorld),fA.setFromMatrixPosition(p.matrixWorld),AA.distanceToSquared(fA)}l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:n}},this.render=function(d,p){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),dA.copy(p.matrixWorldInverse),pA.multiplyMatrices(p.projectionMatrix,dA),h(d,d,p),(function(f){const m=(function(g){const b=[];return g.traverseVisible((function(v){v.isCSS2DObject&&b.push(v)})),b})(f).sort((function(g,b){return g.renderOrder!==b.renderOrder?b.renderOrder-g.renderOrder:o.objects.get(g).distanceToCameraSquared-o.objects.get(b).distanceToCameraSquared})),A=m.length;for(let g=0,b=m.length;g<b;g++)m[g].element.style.zIndex=A-g})(d)},this.setSize=function(d,p){i=d,n=p,r=i/2,a=n/2,l.style.width=d+"px",l.style.height=p+"px"}}}function Eo(s,t,e){let i=e;const n=new B;return s.updateWorldMatrix(!0,!0),s.traverseVisible((r=>{const{geometry:a}=r;if(a!==void 0){const{position:o}=a.attributes;if(o!==void 0)for(let l=0,c=o.count;l<c;l++)r.isMesh?r.getVertexPosition(l,n):n.fromBufferAttribute(o,l),r.isSkinnedMesh||n.applyMatrix4(r.matrixWorld),i=t(i,n)}})),i}const mA={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class wl{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register((function(t){return new PE(t)})),this.register((function(t){return new FE(t)})),this.register((function(t){return new OE(t)})),this.register((function(t){return new GE(t)})),this.register((function(t){return new HE(t)})),this.register((function(t){return new zE(t)})),this.register((function(t){return new NE(t)})),this.register((function(t){return new QE(t)})),this.register((function(t){return new kE(t)})),this.register((function(t){return new VE(t)})),this.register((function(t){return new WE(t)})),this.register((function(t){return new qE(t)})),this.register((function(t){return new jE(t)})),this.register((function(t){return new XE(t)}))}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,i,n){const r=new UE,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(t,e,n).catch(i)}parseAsync(t,e){const i=this;return new Promise((function(n,r){i.parse(t,n,r,e)}))}}const vE=0,gA=1,yE=2,_E=3,EE=4,Xc=5120,Yc=5121,Kc=5122,Jc=5123,bA=5124,vA=5125,yA=5126,$c=34962,xE=34963,SE=9728,CE=9729,wE=9984,IE=9985,ME=9986,TE=9987,BE=33071,RE=33648,DE=10497,Zc="KHR_mesh_quantization",ii={};ii[1003]=SE,ii[1004]=wE,ii[1005]=ME,ii[1006]=CE,ii[1007]=IE,ii[1008]=TE,ii[1001]=BE,ii[1e3]=DE,ii[1002]=RE;const _A={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},LE=new bt;function qs(s,t){return s.length===t.length&&s.every((function(e,i){return e===t[i]}))}function Pg(s){return 4*Math.ceil(s/4)}function th(s,t=0){const e=Pg(s.byteLength);if(e!==s.byteLength){const i=new Uint8Array(e);if(i.set(new Uint8Array(s)),t!==0)for(let n=s.byteLength;n<e;n++)i[n]=t;return i.buffer}return s}function EA(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function xA(s,t){if(s.toBlob!==void 0)return new Promise((i=>s.toBlob(i,t)));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),s.convertToBlob({type:t,quality:e})}class UE{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+hl}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const n=this,r=n.buffers,a=n.json;i=n.options;const o=n.extensionsUsed,l=n.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),i.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const p=th(d.result),f=new DataView(new ArrayBuffer(8));f.setUint32(0,p.byteLength,!0),f.setUint32(4,5130562,!0);const m=th((A=JSON.stringify(a),new TextEncoder().encode(A).buffer),32);var A;const g=new DataView(new ArrayBuffer(8));g.setUint32(0,m.byteLength,!0),g.setUint32(4,1313821514,!0);const b=new ArrayBuffer(12),v=new DataView(b);v.setUint32(0,1179937895,!0),v.setUint32(4,2,!0);const y=12+g.byteLength+m.byteLength+f.byteLength+p.byteLength;v.setUint32(8,y,!0);const _=new Blob([b,g,m,f,p],{type:"application/octet-stream"}),E=new FileReader;E.readAsArrayBuffer(_),E.onloadend=function(){e(E.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const p=d.result;a.buffers[0].uri=p,e(a)}}else e(a)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const i=this.options,n=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(t.userData));if(i.includeCustomExtensions&&r.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const a in r.gltfExtensions)e.extensions[a]=r.gltfExtensions[a],n[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(e.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(t,i)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const e=new B;for(let i=0,n=t.count;i<n;i++)if(Math.abs(e.fromBufferAttribute(t,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const i=t.clone(),n=new B;for(let r=0,a=i.count;r<a;r++)n.fromBufferAttribute(i,r),n.x===0&&n.y===0&&n.z===0?n.setX(1):n.normalize(),i.setXYZ(r,n.x,n.y,n.z);return e.attributesNormalized.set(t,i),i}applyTextureTransform(t,e){let i=!1;const n={};e.offset.x===0&&e.offset.y===0||(n.offset=e.offset.toArray(),i=!0),e.rotation!==0&&(n.rotation=e.rotation,i=!0),e.repeat.x===1&&e.repeat.y===1||(n.scale=e.repeat.toArray(),i=!0),i&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=n,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function i(d){return d.colorSpace===ae?function(p){return p<.04045?.0773993808*p:Math.pow(.9478672986*p+.0521327014,2.4)}:function(p){return p}}t instanceof Ar&&(t=await this.decompressTextureAsync(t)),e instanceof Ar&&(e=await this.decompressTextureAsync(e));const n=t?t.image:null,r=e?e.image:null,a=Math.max(n?n.width:0,r?r.width:0),o=Math.max(n?n.height:0,r?r.height:0),l=EA();l.width=a,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const h=c.getImageData(0,0,a,o);if(n){c.drawImage(n,0,0,a,o);const d=i(t),p=c.getImageData(0,0,a,o).data;for(let f=2;f<p.length;f+=4)h.data[f]=256*d(p[f]/256)}if(r){c.drawImage(r,0,0,a,o);const d=i(e),p=c.getImageData(0,0,a,o).data;for(let f=1;f<p.length;f+=4)h.data[f]=256*d(p[f]/256)}c.putImageData(h,0,0);const u=(t||e).clone();return u.source=new Ql(l),u.colorSpace=ln,u.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),u}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,i=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),i.push(t),0}processBufferView(t,e,i,n,r){const a=this.json;let o;switch(a.bufferViews||(a.bufferViews=[]),e){case Xc:case Yc:o=1;break;case Kc:case Jc:o=2;break;default:o=4}let l=t.itemSize*o;r===$c&&(l=4*Math.ceil(l/4));const c=Pg(n*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let p=i;p<i+n;p++){for(let f=0;f<t.itemSize;f++){let m;t.itemSize>4?m=t.array[p*t.itemSize+f]:(f===0?m=t.getX(p):f===1?m=t.getY(p):f===2?m=t.getZ(p):f===3&&(m=t.getW(p)),t.normalized===!0&&(m=Ko.normalize(m,t.array))),e===yA?h.setFloat32(u,m,!0):e===bA?h.setInt32(u,m,!0):e===vA?h.setUint32(u,m,!0):e===Kc?h.setInt16(u,m,!0):e===Jc?h.setUint16(u,m,!0):e===Xc?h.setInt8(u,m):e===Yc&&h.setUint8(u,m),u+=o}u%l!=0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===$c&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,i=e.json;return i.bufferViews||(i.bufferViews=[]),new Promise((function(n){const r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){const a=th(r.result),o={buffer:e.processBuffer(a),byteOffset:e.byteOffset,byteLength:a.byteLength};e.byteOffset+=a.byteLength,n(i.bufferViews.push(o)-1)}}))}processAccessor(t,e,i,n){const r=this.json;let a;if(t.array.constructor===Float32Array)a=yA;else if(t.array.constructor===Int32Array)a=bA;else if(t.array.constructor===Uint32Array)a=vA;else if(t.array.constructor===Int16Array)a=Kc;else if(t.array.constructor===Uint16Array)a=Jc;else if(t.array.constructor===Int8Array)a=Xc;else{if(t.array.constructor!==Uint8Array)throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);a=Yc}if(i===void 0&&(i=0),n!==void 0&&n!==1/0||(n=t.count),n===0)return null;const o=(function(u,d,p){const f={min:new Array(u.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(u.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let m=d;m<d+p;m++)for(let A=0;A<u.itemSize;A++){let g;u.itemSize>4?g=u.array[m*u.itemSize+A]:(A===0?g=u.getX(m):A===1?g=u.getY(m):A===2?g=u.getZ(m):A===3&&(g=u.getW(m)),u.normalized===!0&&(g=Ko.normalize(g,u.array))),f.min[A]=Math.min(f.min[A],g),f.max[A]=Math.max(f.max[A],g)}return f})(t,i,n);let l;e!==void 0&&(l=t===e.index?xE:$c);const c=this.processBufferView(t,a,i,n,l),h={bufferView:c.id,byteOffset:c.byteOffset,componentType:a,count:n,max:o.max,min:o.min,type:{1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"}[t.itemSize]};return t.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(t,e,i,n="image/png"){if(t!==null){const r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(t)||a.images.set(t,{});const h=a.images.get(t),u=n+":flipY/"+i.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);const d={mimeType:n},p=EA();p.width=Math.min(t.width,l.maxTextureSize),p.height=Math.min(t.height,l.maxTextureSize);const f=p.getContext("2d",{willReadFrequently:!0});if(i===!0&&(f.translate(0,p.height),f.scale(1,-1)),t.data!==void 0){e!==Ae&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const A=new Uint8ClampedArray(t.height*t.width*4);for(let g=0;g<A.length;g+=4)A[g+0]=t.data[g+0],A[g+1]=t.data[g+1],A[g+2]=t.data[g+2],A[g+3]=t.data[g+3];f.putImageData(new ImageData(A,t.width,t.height),0,0)}else{if(!(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas))throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");f.drawImage(t,0,0,p.width,p.height)}l.binary===!0?c.push(xA(p,n).then((A=>r.processBufferViewImage(A))).then((A=>{d.bufferView=A}))):p.toDataURL!==void 0?d.uri=p.toDataURL(n):c.push(xA(p,n).then((A=>new FileReader().readAsDataURL(A))).then((A=>{d.uri=A})));const m=o.images.push(d)-1;return h[u]=m,m}throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const i={magFilter:ii[t.magFilter],minFilter:ii[t.minFilter],wrapS:ii[t.wrapS],wrapT:ii[t.wrapT]};return e.samplers.push(i)-1}async processTextureAsync(t){const e=this.options,i=this.cache,n=this.json;if(i.textures.has(t))return i.textures.get(t);n.textures||(n.textures=[]),t instanceof Ar&&(t=await this.decompressTextureAsync(t,e.maxTextureSize));let r=t.userData.mimeType;r==="image/webp"&&(r="image/png");const a={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,r)};t.name&&(a.name=t.name),await this._invokeAllAsync((async function(l){l.writeTexture&&await l.writeTexture(t,a)}));const o=n.textures.push(a)-1;return i.textures.set(t,o),o}async processMaterialAsync(t){const e=this.cache,i=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const n={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=t.color.toArray().concat([t.opacity]);if(qs(r,[1,1,1,1])||(n.pbrMetallicRoughness.baseColorFactor=r),t.isMeshStandardMaterial?(n.pbrMetallicRoughness.metallicFactor=t.metalness,n.pbrMetallicRoughness.roughnessFactor=t.roughness):(n.pbrMetallicRoughness.metallicFactor=0,n.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const o=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(l,o),n.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const o={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(o,t.map),n.pbrMetallicRoughness.baseColorTexture=o}if(t.emissive){const o=t.emissive;if(Math.max(o.r,o.g,o.b)>0&&(n.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const l={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(l,t.emissiveMap),n.emissiveTexture=l}}if(t.normalMap){const o={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(o.scale=t.normalScale.x),this.applyTextureTransform(o,t.normalMap),n.normalTexture=o}if(t.aoMap){const o={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(o.strength=t.aoMapIntensity),this.applyTextureTransform(o,t.aoMap),n.occlusionTexture=o}t.transparent?n.alphaMode="BLEND":t.alphaTest>0&&(n.alphaMode="MASK",n.alphaCutoff=t.alphaTest),t.side===2&&(n.doubleSided=!0),t.name!==""&&(n.name=t.name),this.serializeUserData(t,n),await this._invokeAllAsync((async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(t,n)}));const a=i.materials.push(n)-1;return e.materials.set(t,a),a}async processMeshAsync(t){const e=this.cache,i=this.json,n=[t.geometry.uuid];if(Array.isArray(t.material))for(let y=0,_=t.material.length;y<_;y++)n.push(t.material[y].uuid);else n.push(t.material.uuid);const r=n.join(":");if(e.meshes.has(r))return e.meshes.get(r);const a=t.geometry;let o;o=t.isLineSegments?gA:t.isLineLoop?yE:t.isLine?_E:t.isPoints?vE:t.material.wireframe?gA:EE;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=a.getAttribute("normal");p===void 0||this.isNormalizedNormalAttribute(p)||(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let f=null;for(let y in a.attributes){if(y.slice(0,5)==="morph")continue;const _=a.attributes[y];if(y=d[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),e.attributes.has(this.getUID(_))){c[y]=e.attributes.get(this.getUID(_));continue}f=null;const E=_.array;y!=="JOINTS_0"||E instanceof Uint16Array||E instanceof Uint8Array?(E instanceof Uint32Array||E instanceof Int32Array)&&!y.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${y}" converted to type FLOAT.`),f=wl.Utils.toFloat32BufferAttribute(_)):(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),f=new ue(new Uint16Array(E),_.itemSize,_.normalized));const x=this.processAccessor(f||_,a);x!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,_),c[y]=x,e.attributes.set(this.getUID(_),x))}if(p!==void 0&&a.setAttribute("normal",p),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const y=[],_=[],E={};if(t.morphTargetDictionary!==void 0)for(const x in t.morphTargetDictionary)E[t.morphTargetDictionary[x]]=x;for(let x=0;x<t.morphTargetInfluences.length;++x){const I={};let T=!1;for(const L in a.morphAttributes){if(L!=="position"&&L!=="normal"){T||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),T=!0);continue}const H=a.morphAttributes[L][x],U=L.toUpperCase(),O=a.attributes[L];if(e.attributes.has(this.getUID(H,!0))){I[U]=e.attributes.get(this.getUID(H,!0));continue}const F=H.clone();if(!a.morphTargetsRelative)for(let q=0,N=H.count;q<N;q++)for(let K=0;K<H.itemSize;K++)K===0&&F.setX(q,H.getX(q)-O.getX(q)),K===1&&F.setY(q,H.getY(q)-O.getY(q)),K===2&&F.setZ(q,H.getZ(q)-O.getZ(q)),K===3&&F.setW(q,H.getW(q)-O.getW(q));I[U]=this.processAccessor(F,a),e.attributes.set(this.getUID(O,!0),I[U])}u.push(I),y.push(t.morphTargetInfluences[x]),t.morphTargetDictionary!==void 0&&_.push(E[x])}l.weights=y,_.length>0&&(l.extras={},l.extras.targetNames=_)}const m=Array.isArray(t.material);if(m&&a.groups.length===0)return null;let A=!1;if(m&&a.index===null){const y=[];for(let _=0,E=a.attributes.position.count;_<E;_++)y[_]=_;a.setIndex(y),A=!0}const g=m?t.material:[t.material],b=m?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,_=b.length;y<_;y++){const E={mode:o,attributes:c};if(this.serializeUserData(a,E),u.length>0&&(E.targets=u),a.index!==null){let I=this.getUID(a.index);b[y].start===void 0&&b[y].count===void 0||(I+=":"+b[y].start+":"+b[y].count),e.attributes.has(I)?E.indices=e.attributes.get(I):(E.indices=this.processAccessor(a.index,a,b[y].start,b[y].count),e.attributes.set(I,E.indices)),E.indices===null&&delete E.indices}const x=await this.processMaterialAsync(g[b[y].materialIndex]);x!==null&&(E.material=x),h.push(E)}A===!0&&a.setIndex(null),l.primitives=h,i.meshes||(i.meshes=[]),await this._invokeAllAsync((function(y){y.writeMesh&&y.writeMesh(t,l)}));const v=i.meshes.push(l)-1;return e.meshes.set(r,v),v}detectMeshQuantization(t,e){if(this.extensionsUsed[Zc])return;let i;switch(e.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}e.normalized&&(i+=" normalized");const n=t.split("_",1)[0];mA[n]&&mA[n].includes(i)&&(this.extensionsUsed[Zc]=!0,this.extensionsRequired[Zc]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const i=t.isOrthographicCamera,n={type:i?"orthographic":"perspective"};return i?n.orthographic={xmag:2*t.right,ymag:2*t.top,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:n.perspective={aspectRatio:t.aspect,yfov:Ko.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(n.name=t.type),e.cameras.push(n)-1}processAnimation(t,e){const i=this.json,n=this.nodeMap;i.animations||(i.animations=[]);const r=(t=wl.Utils.mergeMorphTargetTracks(t.clone(),e)).tracks,a=[],o=[];for(let l=0;l<r.length;++l){const c=r[l],h=Ht.parseTrackName(c.name);let u=Ht.findNode(e,h.nodeName);const d=_A[h.propertyName];if(h.objectName==="bones"&&(u=u.isSkinnedMesh===!0?u.skeleton.getBoneByName(h.objectIndex):void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const p=1;let f,m=c.values.length/c.times.length;d===_A.morphTargetInfluences&&(m/=u.morphTargetInfluences.length),c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",m/=3):f=c.getInterpolation()===bs?"STEP":"LINEAR",o.push({input:this.processAccessor(new ue(c.times,p)),output:this.processAccessor(new ue(c.values,m)),interpolation:f}),a.push({sampler:o.length-1,target:{node:n.get(u),path:d}})}return i.animations.push({name:t.name||"clip_"+i.animations.length,samplers:o,channels:a}),i.animations.length-1}processSkin(t){const e=this.json,i=this.nodeMap,n=e.nodes[i.get(t)],r=t.skeleton;if(r===void 0)return null;const a=t.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(16*r.bones.length),c=new St;for(let h=0;h<r.bones.length;++h)o.push(i.get(r.bones[h])),c.copy(r.boneInverses[h]),c.multiply(t.bindMatrix).toArray(l,16*h);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new ue(l,16)),joints:o,skeleton:i.get(a)}),n.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,i=this.options,n=this.nodeMap;e.nodes||(e.nodes=[]);const r={};if(i.trs){const o=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();qs(o,[0,0,0,1])||(r.rotation=o),qs(l,[0,0,0])||(r.translation=l),qs(c,[1,1,1])||(r.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),qs(t.matrix.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){const o=await this.processMeshAsync(t);o!==null&&(r.mesh=o)}else t.isCamera&&(r.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const o=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||i.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&o.push(u)}}o.length>0&&(r.children=o)}await this._invokeAllAsync((function(o){o.writeNode&&o.writeNode(t,r)}));const a=e.nodes.push(r)-1;return n.set(t,a),a}async processSceneAsync(t){const e=this.json,i=this.options;e.scenes||(e.scenes=[],e.scene=0);const n={};t.name!==""&&(n.name=t.name),e.scenes.push(n);const r=[];for(let a=0,o=t.children.length;a<o;a++){const l=t.children[a];if(l.visible||i.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(n.nodes=r),this.serializeUserData(t,n)}async processObjectsAsync(t){const e=new mr;e.name="AuxScene";for(let i=0;i<t.length;i++)e.children.push(t[i]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync((function(n){n.beforeParse&&n.beforeParse(t)}));const i=[];for(let n=0;n<t.length;n++)t[n]instanceof mr?await this.processSceneAsync(t[n]):i.push(t[n]);i.length>0&&await this.processObjectsAsync(i);for(let n=0;n<this.skins.length;++n)this.processSkin(this.skins[n]);for(let n=0;n<e.animations.length;++n)this.processAnimation(e.animations[n],t[0]);await this._invokeAllAsync((function(n){n.afterParse&&n.afterParse(t)}))}async _invokeAllAsync(t){for(let e=0,i=this.plugins.length;e<i;e++)await t(this.plugins[e])}}class PE{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight)return void console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);const i=this.writer,n=i.json,r=i.extensionsUsed,a={};t.name&&(a.name=t.name),a.color=t.color.toArray(),a.intensity=t.intensity,t.isDirectionalLight?a.type="directional":t.isPointLight?(a.type="point",t.distance>0&&(a.range=t.distance)):t.isSpotLight&&(a.type="spot",t.distance>0&&(a.range=t.distance),a.spot={},a.spot.innerConeAngle=(1-t.penumbra)*t.angle,a.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),!t.target||t.target.parent===t&&t.target.position.x===0&&t.target.position.y===0&&t.target.position.z===-1||console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(n.extensions=n.extensions||{},n.extensions[this.name]={lights:[]},r[this.name]=!0);const o=n.extensions[this.name].lights;o.push(a),e.extensions=e.extensions||{},e.extensions[this.name]={light:o.length-1}}}class FE{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},i[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class NE{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const i=this.writer,n=i.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){const a={index:await i.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};i.applyTextureTransform(a,t.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const a={index:await i.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};i.applyTextureTransform(a,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(t.clearcoatNormalMap){const a={index:await i.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(a.scale=t.clearcoatNormalScale.x),i.applyTextureTransform(a,t.clearcoatNormalMap),r.clearcoatNormalTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=r,n[this.name]=!0}}class QE{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const i=this.writer.extensionsUsed,n={};n.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=n,i[this.name]=!0}}class kE{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const i=this.writer,n=i.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){const a={index:await i.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};i.applyTextureTransform(a,t.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const a={index:await i.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};i.applyTextureTransform(a,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=r,n[this.name]=!0}}class OE{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,n=i.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){const a={index:await i.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};i.applyTextureTransform(a,t.transmissionMap),r.transmissionTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=r,n[this.name]=!0}}class GE{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,n=i.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){const a={index:await i.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};i.applyTextureTransform(a,t.thicknessMap),r.thicknessTexture=a}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,n[this.name]=!0}}class HE{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const i=this.writer.extensionsUsed,n={};n.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=n,i[this.name]=!0}}class zE{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(LE)&&!t.specularIntensityMap&&!t.specularColorMap)return;const i=this.writer,n=i.extensionsUsed,r={};if(t.specularIntensityMap){const a={index:await i.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};i.applyTextureTransform(a,t.specularIntensityMap),r.specularTexture=a}if(t.specularColorMap){const a={index:await i.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};i.applyTextureTransform(a,t.specularColorMap),r.specularColorTexture=a}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,n[this.name]=!0}}class VE{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const i=this.writer,n=i.extensionsUsed,r={};if(t.sheenRoughnessMap){const a={index:await i.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};i.applyTextureTransform(a,t.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(t.sheenColorMap){const a={index:await i.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};i.applyTextureTransform(a,t.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,n[this.name]=!0}}class WE{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const i=this.writer,n=i.extensionsUsed,r={};if(t.anisotropyMap){const a={index:await i.processTextureAsync(t.anisotropyMap)};i.applyTextureTransform(a,t.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=r,n[this.name]=!0}}class qE{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,n={};n.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=n,i[this.name]=!0}}class jE{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const i=this.writer,n=i.extensionsUsed,r={};if(t.bumpMap){const a={index:await i.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};i.applyTextureTransform(a,t.bumpMap),r.bumpTexture=a}r.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=r,n[this.name]=!0}}class XE{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const i=this.writer,n=t,r=new Float32Array(3*n.count),a=new Float32Array(4*n.count),o=new Float32Array(3*n.count),l=new St,c=new B,h=new Ke,u=new B;for(let p=0;p<n.count;p++)n.getMatrixAt(p,l),l.decompose(c,h,u),c.toArray(r,3*p),h.toArray(a,4*p),u.toArray(o,3*p);const d={TRANSLATION:i.processAccessor(new ue(r,3)),ROTATION:i.processAccessor(new ue(a,4)),SCALE:i.processAccessor(new ue(o,3))};n.instanceColor&&(d._COLOR_0=i.processAccessor(n.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:d},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}wl.Utils={insertKeyframe:function(s,t){const i=s.getValueSize(),n=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+i),a=s.createInterpolant(new s.ValueBufferType(i));let o;if(s.times.length===0){n[0]=t;for(let l=0;l<i;l++)r[l]=0;o=0}else if(t<s.times[0]){if(Math.abs(s.times[0]-t)<.001)return 0;n[0]=t,n.set(s.times,1),r.set(a.evaluate(t),0),r.set(s.values,i),o=0}else if(t>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-t)<.001)return s.times.length-1;n[n.length-1]=t,n.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(t),s.values.length),o=n.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-t)<.001)return l;if(s.times[l]<t&&s.times[l+1]>t){n.set(s.times.slice(0,l+1),0),n[l+1]=t,n.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*i),0),r.set(a.evaluate(t),(l+1)*i),r.set(s.values.slice((l+1)*i),(l+2)*i),o=l+1;break}}return s.times=n,s.values=r,o},mergeMorphTargetTracks:function(s,t){const e=[],i={},n=s.tracks;for(let r=0;r<n.length;++r){let a=n[r];const o=Ht.parseTrackName(a.name),l=Ht.findNode(t,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){e.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(vs)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(i[l.uuid]===void 0){u=a.clone();const p=new u.ValueBufferType(c*u.times.length);for(let f=0;f<u.times.length;f++)p[f*c+h]=u.values[f];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=p,i[l.uuid]=u,e.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=i[l.uuid];for(let p=0;p<u.times.length;p++)u.values[p*c+h]=d.evaluate(u.times[p]);for(let p=0;p<a.times.length;p++){const f=this.insertKeyframe(u,a.times[p]);u.values[f*c+h]=a.values[p]}}return s.tracks=e,s},toFloat32BufferAttribute:function(s){const t=new ue(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return t.array.set(s.array),t;for(let e=0,i=s.count;e<i;e++)for(let n=0;n<s.itemSize;n++)t.setComponent(e,n,s.getComponent(e,n));return t}};/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=s=>s.material!==void 0&&s.userData&&s.userData.variantMaterials&&!!Array.from(s.userData.variantMaterials.values()).filter((t=>il(t.material))),il=s=>s&&s.isMaterial&&!Array.isArray(s);class YE{constructor(t){this.writer=t,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(t){const e=new Set,i=n=>{if(!SA(n))return;const r=n.userData.variantMaterials,a=n.userData.variantData;for(const[o,l]of a){const c=r.get(l.index);c&&il(c.material)&&e.add(o)}};if(Array.isArray(t))for(const n of t)n.traverse(i);else t.traverse(i);e.forEach((n=>this.variantNames.push(n)))}async writeMesh(t,e){if(!SA(t))return;const i=t.userData,n=i.variantMaterials,r=i.variantData,a=new Map,o=new Map,l=Array.from(r.values()).sort(((u,d)=>u.index-d.index));for(const[u,d]of l.entries())o.set(d.index,u);for(const u of r.values()){const d=n.get(u.index);if(!d||!il(d.material))continue;const p=await this.writer.processMaterialAsync(d.material);a.has(p)||a.set(p,{material:p,variants:[]}),a.get(p).variants.push(o.get(u.index))}const c=Array.from(a.values()).map((u=>u.variants.sort(((d,p)=>d-p))&&u)).sort(((u,d)=>u.material-d.material));if(c.length===0)return;const h=il(i.originalMaterial)?await this.writer.processMaterialAsync(i.originalMaterial):-1;for(const u of e.primitives)h>=0&&(u.material=h),u.extensions=u.extensions||{},u.extensions[this.name]={mappings:c}}afterParse(){if(this.variantNames.length===0)return;const t=this.writer.json;t.extensions=t.extensions||{};const e=this.variantNames.map((i=>({name:i})));t.extensions[this.name]={variants:e},this.writer.extensionsUsed[this.name]=!0}}class KE{constructor(t,e,i,n,r){this.xrLight=t,this.renderer=e,this.lightProbe=i,this.xrWebGLBinding=null,this.estimationStartCallback=r,this.frameCallback=this.onXRFrame.bind(this);const a=e.xr.getSession();if(n&&"XRWebGLBinding"in window){const o=new Xu(16);t.environment=o.texture;const l=e.getContext();switch(a.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float")}this.xrWebGLBinding=new XRWebGLBinding(a,l),this.lightProbe.addEventListener("reflectionchange",(()=>{this.updateReflection()}))}a.requestAnimationFrame(this.frameCallback)}updateReflection(){const t=this.renderer.properties.get(this.xrLight.environment);if(t){const e=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);e&&(t.__webglTexture=e,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(t,e){if(!this.xrLight)return;e.session.requestAnimationFrame(this.frameCallback);const i=e.getLightEstimate(this.lightProbe);if(i){this.xrLight.lightProbe.sh.fromArray(i.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const n=Math.max(1,Math.max(i.primaryLightIntensity.x,Math.max(i.primaryLightIntensity.y,i.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(i.primaryLightIntensity.x/n,i.primaryLightIntensity.y/n,i.primaryLightIntensity.z/n),this.xrLight.directionalLight.intensity=n,this.xrLight.directionalLight.position.copy(i.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class JE extends Tn{constructor(t,e=!0){super(),this.lightProbe=new m0,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new eg,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let i=null,n=!1;t.xr.addEventListener("sessionstart",(()=>{const r=t.xr.getSession();"requestLightProbe"in r&&r.requestLightProbe({reflectionFormat:r.preferredReflectionFormat}).then((a=>{i=new KE(this,t,a,e,(()=>{n=!0,this.dispatchEvent({type:"estimationstart"})}))}))})),t.xr.addEventListener("sessionend",(()=>{i&&(i.dispose(),i=null),n&&this.dispatchEvent({type:"estimationend"})})),this.dispose=()=>{i&&(i.dispose(),i=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t=50){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(t)}setDecayTime(t){this.naturalFrequency=1/Math.max(.001,t)}update(t,e,i,n){const r=2e-4*this.naturalFrequency;if(t==null||n===0||t===e&&this.velocity===0)return e;if(i<0)return t;const a=t-e,o=this.velocity+this.naturalFrequency*a,l=a+i*o,c=Math.exp(-this.naturalFrequency*i),h=(o-this.naturalFrequency*l)*c,u=-this.naturalFrequency*(h+o*c);return Math.abs(h)<r*Math.abs(n)&&u*a>=0?(this.velocity=0,e):(this.velocity=h,e+l*c)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=.2,$E=Math.PI/24,CA=new Mt,xo=(s,t,e)=>{let i=t>0?e>0?0:-Math.PI/2:e>0?Math.PI/2:Math.PI;for(let n=0;n<=12;++n)s.push(t+.17*Math.cos(i),e+.17*Math.sin(i),0,t+ns*Math.cos(i),e+ns*Math.sin(i),0),i+=$E};class wA extends Zt{constructor(t,e){const i=new $e,n=[],r=[],{size:a,boundingBox:o}=t,l=a.x/2,c=(e==="back"?a.y:a.z)/2;xo(r,l,c),xo(r,-l,c),xo(r,-l,-c),xo(r,l,-c);const h=r.length/3;for(let p=0;p<h-2;p+=2)n.push(p,p+1,p+3,p,p+3,p+2);const u=h-2;n.push(u,u+1,1,u,1,0),i.setAttribute("position",new si(r,3)),i.setIndex(n),super(i),this.side=e;const d=this.material;switch(d.side=2,d.transparent=!0,d.opacity=0,this.goalOpacity=0,this.opacityDamper=new Xe,this.hitPlane=new Zt(new dn(2*(l+ns),2*(c+ns))),this.hitPlane.visible=!1,this.hitPlane.material.side=2,this.add(this.hitPlane),this.hitBox=new Zt(new pn(a.x+.4,a.y+ns,a.z+.4)),this.hitBox.visible=!1,this.hitBox.material.side=2,this.add(this.hitBox),o.getCenter(this.position),e){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=o.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=o.min.z,this.position.z=this.shadowHeight}t.target.add(this),this.hitBox.position.y=(a.y+ns)/2+o.min.y,t.target.add(this.hitBox),this.offsetHeight=0}getHit(t,e,i){CA.set(e,-i),this.hitPlane.visible=!0;const n=t.positionAndNormalFromPoint(CA,this.hitPlane);return this.hitPlane.visible=!1,n==null?null:n.position}getExpandedHit(t,e,i){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const n=this.getHit(t,e,i);return this.hitPlane.scale.set(1,1,1),n}controllerIntersection(t,e){this.hitBox.visible=!0;const i=t.hitFromController(e,this.hitBox);return this.hitBox.visible=!1,i}set offsetHeight(t){t-=.001,this.side==="back"?this.position.z=this.shadowHeight+t:this.position.y=this.shadowHeight+t}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(t){this.goalOpacity=t?.75:0}updateOpacity(t){const e=this.material;e.opacity=this.opacityDamper.update(e.opacity,this.goalOpacity,t,1),this.visible=e.opacity>0}dispose(){const{geometry:t,material:e}=this.hitPlane;t.dispose(),e.dispose(),this.hitBox.geometry.dispose(),this.hitBox.material.dispose(),this.geometry.dispose(),this.material.dispose(),this.hitBox.removeFromParent(),this.removeFromParent()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=(s,t)=>({type:"number",number:s,unit:t}),cn=(()=>{const s={};return t=>{const e=t;if(e in s)return s[e];const i=[];let n=0;for(;t;){if(++n>1e3){t="";break}const r=Fg(t),a=r.nodes[0];if(a==null||a.terms.length===0)break;i.push(a),t=r.remainingInput}return s[e]=i}})(),Fg=(()=>{const s=/^(\-\-|[a-z\u0240-\uffff])/i,t=/^([\*\+\/]|[\-]\s)/i,e=/^[\),]/;return i=>{const n=[];for(;i.length&&(i=i.trim(),!e.test(i));)if(i[0]==="("){const{nodes:r,remainingInput:a}=IA(i);i=a,n.push({type:"function",name:{type:"ident",value:"calc"},arguments:r})}else if(s.test(i)){const r=ZE(i),a=r.nodes[0];if((i=r.remainingInput)[0]==="("){const{nodes:o,remainingInput:l}=IA(i);n.push({type:"function",name:a,arguments:o}),i=l}else n.push(a)}else if(t.test(i))n.push({type:"operator",value:i[0]}),i=i.slice(1);else{const{nodes:r,remainingInput:a}=i[0]==="#"?ex(i):tx(i);if(r.length===0)break;n.push(r[0]),i=a}return{nodes:[{type:"expression",terms:n}],remainingInput:i}}})(),ZE=(()=>{const s=/[^a-z0-9_\-\u0240-\uffff]/i;return t=>{const e=t.match(s);return{nodes:[{type:"ident",value:e==null?t:t.substr(0,e.index)}],remainingInput:e==null?"":t.substr(e.index)}}})(),tx=(()=>{const s=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,t=/^[a-z%]+/i,e=/^(m|mm|cm|rad|deg|[%])$/;return i=>{const n=i.match(s),r=n==null?"0":n[0],a=(i=r==null?i:i.slice(r.length)).match(t);let o=a!=null&&a[0]!==""?a[0]:null;const l=a==null?i:i.slice(o.length);return o==null||e.test(o)||(o=null),{nodes:[{type:"number",number:parseFloat(r)||0,unit:o}],remainingInput:l}}})(),ex=(()=>{const s=/^[a-f0-9]*/i;return t=>{const e=(t=t.slice(1).trim()).match(s);return{nodes:e==null?[]:[{type:"hex",value:e[0]}],remainingInput:e==null?t:t.slice(e[0].length)}}})(),IA=s=>{const t=[];for(s=s.slice(1).trim();s.length;){const e=Fg(s);if(t.push(e.nodes[0]),(s=e.remainingInput.trim())[0]===",")s=s.slice(1).trim();else if(s[0]===")"){s=s.slice(1);break}}return{nodes:t,remainingInput:s}},MA=Symbol("visitedTypes");class ix{constructor(t){this[MA]=t}walk(t,e){const i=t.slice();for(;i.length;){const n=i.shift();switch(this[MA].indexOf(n.type)>-1&&e(n),n.type){case"expression":i.unshift(...n.terms);break;case"function":i.unshift(n.name,...n.arguments)}}}}const Un=Object.freeze({type:"number",number:0,unit:null}),Hl=(s,t=0)=>{let{number:e,unit:i}=s;if(isFinite(e)){if(s.unit==="rad"||s.unit==null)return s}else e=t,i="rad";return{type:"number",number:(i==="deg"&&e!=null?e:0)*Math.PI/180,unit:"rad"}},TA=(s,t=0)=>{let e,{number:i,unit:n}=s;if(isFinite(i)){if(s.unit==="m")return s}else i=t,n="m";switch(n){default:e=1;break;case"cm":e=.01;break;case"mm":e=.001}return{type:"number",number:e*i,unit:"m"}},ki=(()=>{const s=e=>e,t={rad:s,deg:Hl,m:s,mm:TA,cm:TA};return(e,i=Un)=>{isFinite(e.number)||(e.number=i.number,e.unit=i.unit);const{unit:n}=e;if(n==null)return e;const r=t[n];return r==null?i:r(e)}})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ng,BA,RA;const Bs=Symbol("evaluate"),nl=Symbol("lastValue");class pe{constructor(){this[Ng]=null}static evaluatableFor(t,e=Un){if(t instanceof pe)return t;if(t.type==="number")return t.unit==="%"?new nx(t,e):t;switch(t.name.value){case"calc":return new ax(t,e);case"env":return new rx(t)}return Un}static evaluate(t){return t instanceof pe?t.evaluate():t}static isConstant(t){return!(t instanceof pe)||t.isConstant}static applyIntrinsics(t,e){const{basis:i,keywords:n}=e,{auto:r}=n;return i.map(((a,o)=>{const l=r[o]==null?a:r[o];let c=t[o]?t[o]:l;if(c.type==="ident"){const h=c.value;h in n&&(c=n[h][o])}return c!=null&&c.type!=="ident"||(c=l),c.unit==="%"?Ge(c.number/100*a.number,a.unit):(c=ki(c,a),c.unit!==a.unit?a:c)}))}get isConstant(){return!1}evaluate(){return this.isConstant&&this[nl]!=null||(this[nl]=this[Bs]()),this[nl]}}Ng=nl;const DA=Symbol("percentage"),eh=Symbol("basis");class nx extends pe{constructor(t,e){super(),this[DA]=t,this[eh]=e}get isConstant(){return!0}[Bs](){return Ge(this[DA].number/100*this[eh].number,this[eh].unit)}}const So=Symbol("identNode");class rx extends pe{constructor(t){super(),this[BA]=null;const e=t.arguments.length?t.arguments[0].terms[0]:null;e!=null&&e.type==="ident"&&(this[So]=e)}get isConstant(){return!1}[(BA=So,Bs)](){return this[So]!=null&&this[So].value==="window-scroll-y"?{type:"number",number:window.pageYOffset/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight)||0,unit:null}:Un}}const sx=/[\*\/]/,Nr=Symbol("evaluator");class ax extends pe{constructor(t,e=Un){if(super(),this[RA]=null,t.arguments.length!==1)return;const i=t.arguments[0].terms.slice(),n=[];for(;i.length;){const r=i.shift();if(n.length>0){const a=n[n.length-1];if(a.type==="operator"&&sx.test(a.value)){const o=n.pop(),l=n.pop();if(l==null)return;n.push(new UA(o,pe.evaluatableFor(l,e),pe.evaluatableFor(r,e)));continue}}n.push(r.type==="operator"?r:pe.evaluatableFor(r,e))}for(;n.length>2;){const[r,a,o]=n.splice(0,3);if(a.type!=="operator")return;n.unshift(new UA(a,pe.evaluatableFor(r,e),pe.evaluatableFor(o,e)))}n.length===1&&(this[Nr]=n[0])}get isConstant(){return this[Nr]==null||pe.isConstant(this[Nr])}[(RA=Nr,Bs)](){return this[Nr]!=null?pe.evaluate(this[Nr]):Un}}const LA=Symbol("operator"),ih=Symbol("left"),nh=Symbol("right");class UA extends pe{constructor(t,e,i){super(),this[LA]=t,this[ih]=e,this[nh]=i}get isConstant(){return pe.isConstant(this[ih])&&pe.isConstant(this[nh])}[Bs](){const t=ki(pe.evaluate(this[ih])),e=ki(pe.evaluate(this[nh])),{number:i,unit:n}=t,{number:r,unit:a}=e;if(a!=null&&n!=null&&a!=n)return Un;const o=n||a;let l;switch(this[LA].value){case"+":l=i+r;break;case"-":l=i-r;break;case"/":l=i/r;break;case"*":l=i*r;break;default:return Un}return{type:"number",number:l,unit:o}}}const rh=Symbol("evaluatables"),PA=Symbol("intrinsics");class Qg extends pe{constructor(t,e){super(),this[PA]=e;const i=t[0],n=i!=null?i.terms:[];this[rh]=e.basis.map(((r,a)=>{const o=n[a];return o==null?{type:"ident",value:"auto"}:o.type==="ident"?o:pe.evaluatableFor(o,r)}))}get isConstant(){for(const t of this[rh])if(!pe.isConstant(t))return!1;return!0}[Bs](){const t=this[rh].map((e=>pe.evaluate(e)));return pe.applyIntrinsics(t,this[PA]).map((e=>e.number))}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kg,Og,Gg,Hg;const Qr=Symbol("instances"),FA=Symbol("activateListener"),NA=Symbol("deactivateListener"),sh=Symbol("notifyInstances"),QA=Symbol("notify"),kA=Symbol("callback");class Fi{static[sh](){for(const t of Fi[Qr])t[QA]()}static[(kg=Qr,FA)](){window.addEventListener("scroll",this[sh],{passive:!0})}static[NA](){window.removeEventListener("scroll",this[sh])}constructor(t){this[kA]=t}observe(){Fi[Qr].size===0&&Fi[FA](),Fi[Qr].add(this)}disconnect(){Fi[Qr].delete(this),Fi[Qr].size===0&&Fi[NA]()}[QA](){this[kA]()}}Fi[kg]=new Set;const OA=Symbol("computeStyleCallback"),zg=Symbol("astWalker"),ua=Symbol("dependencies"),Vg=Symbol("onScroll");class ox{constructor(t){this[Og]={},this[Gg]=new ix(["function"]),this[Hg]=()=>{this[OA]({relatedState:"window-scroll"})},this[OA]=t}observeEffectsFor(t){const e={},i=this[ua];this[zg].walk(t,(n=>{const{name:r}=n,a=n.arguments[0].terms[0];if(r.value==="env"&&a!=null&&a.type==="ident"&&a.value==="window-scroll-y"&&e["window-scroll"]==null){const o="window-scroll"in i?i["window-scroll"]:new Fi(this[Vg]);o.observe(),delete i["window-scroll"],e["window-scroll"]=o}}));for(const n in i)i[n].disconnect();this[ua]=e}dispose(){for(const t in this[ua])this[ua][t].disconnect()}}Og=ua,Gg=zg,Hg=Vg;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=s=>{const t=s.observeEffects||!1,e=s.intrinsics instanceof Function?s.intrinsics:()=>s.intrinsics;return(i,n)=>{const r=i.updated,a=i.connectedCallback,o=i.disconnectedCallback,l=Symbol(`${n}StyleEffector`),c=Symbol(`${n}StyleEvaluator`),h=Symbol(`${n}UpdateEvaluator`),u=Symbol(`${n}EvaluateAndSync`);Object.defineProperties(i,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[h]:{value:function(){const d=cn(this[n]);this[c]=new Qg(d,e(this)),this[l]==null&&t&&(this[l]=new ox((()=>this[u]()))),this[l]!=null&&this[l].observeEffectsFor(d)}},[u]:{value:function(){if(this[c]==null)return;const d=this[c].evaluate();this[s.updateHandler](d)}},updated:{value:function(d){d.has(n)&&(this[h](),this[u]()),r.call(this,d)}},connectedCallback:{value:function(){a.call(this),this.requestUpdate(n,this[n])}},disconnectedCallback:{value:function(){o.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}},Wg=s=>s<.5?2*s*s:(4-2*s)*s-1,lx=(s,t,e=Wg)=>i=>s+(t-s)*e(i),rs=s=>{const t=[],e=[];let i=s.initialValue;for(let n=0;n<s.keyframes.length;++n){const r=s.keyframes[n],{value:a,frames:o}=r,l=r.ease||Wg,c=lx(i,a,l);t.push(c),e.push(o),i=a}return((n,r)=>{const a=r.map((o=0,l=>o+=l));var o;return l=>{l=Qi(l,0,1),l*=a[a.length-1];const c=a.findIndex((d=>d>=l)),h=c<1?0:a[c-1],u=a[c];return n[c]((l-h)/(u-h))}})(t,e)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(s,t,e,i){for(var n,r=arguments.length,a=r<3?t:i,o=s.length-1;o>=0;o--)(n=s[o])&&(a=(r<3?n(a):r>3?n(t,e,a):n(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a};const cx=rs({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),hx=rs({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),qg="0deg 75deg 105%",ux=["front","right","back","left"],dx=["upper-","","lower-"],Co="auto",px="basic",GA="wiggle",Ax="none",HA=()=>({basis:[Hl(Ge(30,"deg"))],keywords:{auto:[null]}}),fx=()=>({basis:[Hl(Ge(12,"deg"))],keywords:{auto:[null]}}),jg=(()=>{const s=cn(qg)[0].terms,t=ki(s[0]),e=ki(s[1]);return i=>{const n=i[nt].idealCameraDistance();return{basis:[t,e,Ge(n,"m")],keywords:{auto:[null,null,Ge(105,"%")]}}}})(),mx=s=>{const t=2.2*s[nt].boundingSphere.radius;return{basis:[Ge(-1/0,"rad"),Ge(0,"rad"),Ge(t,"m")],keywords:{auto:[null,null,null]}}},gx=s=>{const t=jg(s),e=new Qg([],t).evaluate()[2];return{basis:[Ge(1/0,"rad"),Ge(Math.PI,"rad"),Ge(e,"m")],keywords:{auto:[null,null,null]}}},bx=s=>{const t=s[nt].boundingBox.getCenter(new B);return{basis:[Ge(t.x,"m"),Ge(t.y,"m"),Ge(t.z,"m")],keywords:{auto:[null,null,null]}}},Xg=Math.PI/2,vx=Math.PI/3,yx=Xg/2,_x=2*Math.PI,Yt=Symbol("controls"),rl=Symbol("panElement"),ah=Symbol("promptElement"),wo=Symbol("promptAnimatedContainer"),oh=Symbol("fingerAnimatedContainers"),Io=Symbol("deferInteractionPrompt"),zA=Symbol("updateAria"),tn=Symbol("a11y"),VA=Symbol("updateA11y"),WA=Symbol("updateCameraForRadius"),kr=Symbol("cancelPrompts"),lh=Symbol("onChange"),js=Symbol("onPointerChange"),Xn=Symbol("waitingToPromptUser"),Mo=Symbol("userHasInteracted"),Or=Symbol("promptElementVisibleTime"),Xs=Symbol("lastPromptOffset"),To=Symbol("cancellationSource"),ch=Symbol("lastSpherical"),Ys=Symbol("jumpCamera"),hh=Symbol("initialized"),Ks=Symbol("maintainThetaPhi"),qA=Symbol("syncCameraOrbit"),jA=Symbol("syncFieldOfView"),XA=Symbol("syncCameraTarget"),YA=Symbol("syncMinCameraOrbit"),KA=Symbol("syncMaxCameraOrbit"),JA=Symbol("syncMinFieldOfView"),$A=Symbol("syncMaxFieldOfView"),Ex=new Mt,ZA=new B,tf=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:0,maximumPolarAngle:Math.PI,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),Bo=Math.PI/8,uh=.04,ge={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class xx extends Ti{constructor(t,e,i){super(),this.camera=t,this.element=e,this.scene=i,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.inputSensitivity=1,this.changeSource=ge.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new Ct,this.panPerPixel=0,this.spherical=new $o,this.goalSpherical=new $o,this.thetaDamper=new Xe,this.phiDamper=new Xe,this.radiusDamper=new Xe,this.logFov=Math.log(tf.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new Xe,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=n=>{if(this.enablePan)n.preventDefault();else for(const r of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:r.id})))},this.touchModeZoom=(n,r)=>{if(!this._disableZoom){const a=this.twoTouchDistance(this.pointers[0],this.pointers[1]),o=uh*this.zoomSensitivity*(this.lastSeparation-a)*50/this.scene.height;this.lastSeparation=a,this.userAdjustOrbit(0,0,o)}this.panPerPixel>0&&this.movePan(n,r)},this.disableScroll=n=>{n.preventDefault()},this.touchModeRotate=(n,r)=>{const{touchAction:a}=this._options;if(!this.touchDecided&&a!=="none"){this.touchDecided=!0;const o=Math.abs(n),l=Math.abs(r);if(this.changeSource===ge.USER_INTERACTION&&(a==="pan-y"&&l>o||a==="pan-x"&&o>l))return void(this.touchMode=null);this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(n,r)},this.onPointerDown=n=>{if(this.pointers.length>2)return;const{element:r}=this;this.pointers.length===0&&(r.addEventListener("pointermove",this.onPointerMove),r.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=n.clientX,this.startPointerPosition.clientY=n.clientY,this.startTime=performance.now());try{r.setPointerCapture(n.pointerId)}catch{}this.pointers.push({clientX:n.clientX,clientY:n.clientY,id:n.pointerId}),this.isUserPointing=!1,n.pointerType==="touch"?(this.changeSource=n.altKey?ge.AUTOMATIC:ge.USER_INTERACTION,this.onTouchChange(n)):(this.changeSource=ge.USER_INTERACTION,this.onMouseDown(n)),this.changeSource===ge.USER_INTERACTION&&this.dispatchEvent({type:"user-interaction"})},this.onPointerMove=n=>{const r=this.pointers.find((c=>c.id===n.pointerId));if(r==null)return;if(n.pointerType==="mouse"&&n.buttons===0)return void this.onPointerUp(n);const a=this.pointers.length,o=(n.clientX-r.clientX)/a,l=(n.clientY-r.clientY)/a;o===0&&l===0||(r.clientX=n.clientX,r.clientY=n.clientY,n.pointerType==="touch"?(this.changeSource=n.altKey?ge.AUTOMATIC:ge.USER_INTERACTION,this.touchMode!==null&&this.touchMode(o,l)):(this.changeSource=ge.USER_INTERACTION,this.panPerPixel>0?this.movePan(o,l):this.handleSinglePointerMove(o,l)))},this.onPointerUp=n=>{const{element:r}=this,a=this.pointers.findIndex((o=>o.id===n.pointerId));a!==-1&&this.pointers.splice(a,1),this.panPerPixel>0&&!n.altKey&&this.resetRadius(),this.pointers.length===0?(r.removeEventListener("pointermove",this.onPointerMove),r.removeEventListener("pointerup",this.onPointerUp),r.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(n)):this.touchMode!==null&&this.onTouchChange(n),this.scene.element[rl].style.opacity=0,r.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=n=>{this.changeSource=ge.USER_INTERACTION;const r=n.deltaY*(n.deltaMode==1?18:1)*uh*this.zoomSensitivity/30;this.userAdjustOrbit(0,0,r),n.preventDefault(),this.dispatchEvent({type:"user-interaction"})},this.onKeyDown=n=>{const{changeSource:r}=this;this.changeSource=ge.USER_INTERACTION,(n.shiftKey&&this.enablePan?this.panKeyCodeHandler(n):this.orbitZoomKeyCodeHandler(n))?(n.preventDefault(),this.dispatchEvent({type:"user-interaction"})):this.changeSource=r},this._options=Object.assign({},tf),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:t}=this;t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||t.addEventListener("wheel",this.onWheel),t.addEventListener("keydown",this.onKeyDown),t.addEventListener("touchmove",(()=>{}),{passive:!1}),t.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:t}=this;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),t.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("contextmenu",this.onContext),t.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(t){this._disableZoom!=t&&(this._disableZoom=t,t===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(t=new $o){return t.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(t){Object.assign(this._options,t),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(t,e){this.camera.far=e===0?2:e,this.camera.near=Math.max(t,this.camera.far/1e3),this.camera.updateProjectionMatrix()}updateAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setOrbit(t=this.goalSpherical.theta,e=this.goalSpherical.phi,i=this.goalSpherical.radius){const{minimumAzimuthalAngle:n,maximumAzimuthalAngle:r,minimumPolarAngle:a,maximumPolarAngle:o,minimumRadius:l,maximumRadius:c}=this._options,{theta:h,phi:u,radius:d}=this.goalSpherical,p=Qi(t,n,r);isFinite(n)||isFinite(r)||(this.spherical.theta=this.wrapAngle(this.spherical.theta-p)+p);const f=Qi(e,a,o),m=Qi(i,l,c);return(p!==h||f!==u||m!==d)&&!!(isFinite(p)&&isFinite(f)&&isFinite(m))&&(this.goalSpherical.theta=p,this.goalSpherical.phi=f,this.goalSpherical.radius=m,this.goalSpherical.makeSafe(),!0)}setRadius(t){this.goalSpherical.radius=t,this.setOrbit()}setFieldOfView(t){const{minimumFieldOfView:e,maximumFieldOfView:i}=this._options;t=Qi(t,e,i),this.goalLogFov=Math.log(t)}setDamperDecayTime(t){this.thetaDamper.setDecayTime(t),this.phiDamper.setDecayTime(t),this.radiusDamper.setDecayTime(t),this.fovDamper.setDecayTime(t)}adjustOrbit(t,e,i){const{theta:n,phi:r,radius:a}=this.goalSpherical,{minimumRadius:o,maximumRadius:l,minimumFieldOfView:c,maximumFieldOfView:h}=this._options,u=this.spherical.theta-n,d=Math.PI-.001,p=n-Qi(t,-d-u,d-u),f=r-e,m=i===0?0:((i>0?l:o)-a)/(Math.log(i>0?h:c)-this.goalLogFov),A=a+i*(isFinite(m)?m:2*(l-o));if(this.setOrbit(p,f,A),i!==0){const g=this.goalLogFov+i;this.setFieldOfView(Math.exp(g))}}jumpToGoal(){this.update(0,1e4)}update(t,e){if(this.isStationary())return!1;const{maximumPolarAngle:i,maximumRadius:n}=this._options,r=this.spherical.theta-this.goalSpherical.theta;return Math.abs(r)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=2*Math.sign(r)*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,e,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,e,i),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,e,n),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,e,1),this.moveCamera(),!0}updateTouchActionStyle(){const{style:t}=this.element;if(this._interactionEnabled){const{touchAction:e}=this._options;this._disableZoom&&e!=="none"?t.touchAction="manipulation":t.touchAction=e}else t.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new Ai(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix())}userAdjustOrbit(t,e,i){this.adjustOrbit(t*this.orbitSensitivity*this.inputSensitivity,e*this.orbitSensitivity*this.inputSensitivity,i*this.inputSensitivity)}wrapAngle(t){const e=(t+Math.PI)/(2*Math.PI);return 2*(e-Math.floor(e))*Math.PI-Math.PI}pixelLengthToSphericalAngle(t){return 2*Math.PI*t/this.scene.height}twoTouchDistance(t,e){const{clientX:i,clientY:n}=t,{clientX:r,clientY:a}=e,o=r-i,l=a-n;return Math.sqrt(o*o+l*l)}handleSinglePointerMove(t,e){const i=this.pixelLengthToSphericalAngle(t),n=this.pixelLengthToSphericalAngle(e);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(i,n,0)}initializePan(){const{theta:t,phi:e}=this.spherical,i=t-this.scene.yaw;this.panPerPixel=.018*this.panSensitivity/this.scene.height,this.panProjection.set(-Math.cos(i),-Math.cos(e)*Math.sin(i),0,0,Math.sin(e),0,Math.sin(i),-Math.cos(e)*Math.cos(i),0)}movePan(t,e){const{scene:i}=this,n=ZA.set(t,e,0).multiplyScalar(this.inputSensitivity),r=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;n.multiplyScalar(r);const a=i.getTarget();a.add(n.applyMatrix3(this.panProjection)),i.boundingSphere.clampPoint(a,a),i.setTarget(a.x,a.y,a.z)}recenter(t){if(performance.now()>this.startTime+300||Math.abs(t.clientX-this.startPointerPosition.clientX)>2||Math.abs(t.clientY-this.startPointerPosition.clientY)>2)return;const{scene:e}=this,i=e.positionAndNormalFromPoint(e.getNDC(t.clientX,t.clientY));if(i==null){const{cameraTarget:n}=e.element;e.element.cameraTarget="",e.element.cameraTarget=n,this.userAdjustOrbit(0,0,1)}else e.target.worldToLocal(i.position),e.setTarget(i.position.x,i.position.y,i.position.z)}resetRadius(){const{scene:t}=this,e=t.positionAndNormalFromPoint(Ex.set(0,0));if(e==null)return;t.target.worldToLocal(e.position);const i=t.getTarget(),{theta:n,phi:r}=this.spherical,a=n-t.yaw,o=ZA.set(Math.sin(r)*Math.sin(a),Math.cos(r),Math.sin(r)*Math.cos(a)),l=o.dot(e.position.sub(i));i.add(o.multiplyScalar(l)),t.setTarget(i.x,i.y,i.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-l)}onTouchChange(t){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom)return this.touchMode=null,void this.element.removeEventListener("touchmove",this.disableScroll);this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),t.altKey||(this.scene.element[rl].style.opacity=1))}}onMouseDown(t){this.panPerPixel=0,this.enablePan&&(t.button===2||t.ctrlKey||t.metaKey||t.shiftKey)&&(this.initializePan(),this.scene.element[rl].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(t){let e=!0;switch(t.key){case"PageUp":this.userAdjustOrbit(0,0,uh*this.zoomSensitivity);break;case"PageDown":this.userAdjustOrbit(0,0,-.04*this.zoomSensitivity);break;case"ArrowUp":this.userAdjustOrbit(0,-Bo,0);break;case"ArrowDown":this.userAdjustOrbit(0,Bo,0);break;case"ArrowLeft":this.userAdjustOrbit(-Bo,0,0);break;case"ArrowRight":this.userAdjustOrbit(Bo,0,0);break;default:e=!1}return e}panKeyCodeHandler(t){this.initializePan();let e=!0;switch(t.key){case"ArrowUp":this.movePan(0,-10);break;case"ArrowDown":this.movePan(0,10);break;case"ArrowLeft":this.movePan(-10,0);break;case"ArrowRight":this.movePan(10,0);break;default:e=!1}return e}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=150,sl="not-presenting",Yg="session-started",Sx="object-placed",Cx="failed",Kg="tracking",wx="not-tracking",Js=new B,Hr=new Ke,Ix=new St,Mx=new B,Tx=new Pe(45,1,.1,100),ef=new $e().setFromPoints([new B(0,0,0),new B(0,0,-1)]),Bx=new pn;class Rx extends Ti{constructor(t){super(),this.renderer=t,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.xrMode=null,this.controller1=null,this.controller2=null,this.selectedController=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new B,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new B,this.relativeOrientation=new Ke,this.scaleLine=new Ba(ef),this.firstRatio=0,this.lastAngle=0,this.goalPosition=new B,this.goalYaw=0,this.goalScale=1,this.xDamper=new Xe,this.yDamper=new Xe,this.zDamper=new Xe,this.yawDamper=new Xe,this.pitchDamper=new Xe,this.rollDamper=new Xe,this.scaleDamper=new Xe,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onControllerSelectStart=e=>{const i=this.presentedScene,n=e.target;if(this.placementBox.controllerIntersection(i,n)!=null)this.selectedController!=null&&(this.selectedController.userData.line.visible=!1,i.canScale&&(this.isTwoFingering=!0,this.firstRatio=this.controllerSeparation()/i.pivot.scale.x,this.scaleLine.visible=!0)),n.attach(i.pivot),this.selectedController=n,i.setShadowIntensity(.01);else{const r=n===this.controller1?this.controller2:this.controller1;this.relativeOrientation.copy(n.quaternion).invert().multiply(i.pivot.getWorldQuaternion(Hr)),r.userData.turning=!1,n.userData.turning=!0,n.userData.line.visible=!1}},this.onControllerSelectEnd=e=>{const i=e.target;if(i.userData.turning=!1,i.userData.line.visible=!0,this.isTwoFingering=!1,this.scaleLine.visible=!1,this.selectedController!=null&&this.selectedController!=i)return;const n=this.presentedScene;n.attach(n.pivot),this.selectedController=null,this.goalYaw=Math.atan2(n.pivot.matrix.elements[8],n.pivot.matrix.elements[10]),this.goalPosition.x=n.pivot.position.x,this.goalPosition.z=n.pivot.position.z},this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new wA(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=e=>{const i=this.transientHitTestSource;if(i==null)return;const n=this.frame.getHitTestResultsForTransientInput(i),r=this.presentedScene,a=this.placementBox;if(n.length===1){this.inputSource=e.inputSource;const{axes:o}=this.inputSource.gamepad,l=a.getHit(this.presentedScene,o[0],o[1]);a.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=1.5*o[0])}else if(n.length===2){a.show=!0,this.isTwoFingering=!0;const{separation:o}=this.fingerPolar(n);this.firstRatio=o/r.pivot.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=t.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){Xp();const t=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:[],optionalFeatures:["hit-test","dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(t),this.threeRenderer.xr.cameraAutoUpdate=!1,t}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return Xp(),await navigator.xr.isSessionSupported("immersive-ar")}catch(t){return console.warn("Request to present in WebXR denied:"),console.warn(t),console.warn("Falling back to next ar-mode"),!1}}async present(t,e=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let i=new Promise(((c,h)=>{requestAnimationFrame((()=>c()))}));t.setHotspotsVisibility(!1),t.queueRender(),await i,this._presentedScene=t,this.overlay=t.element.shadowRoot.querySelector("div.default"),e===!0&&(this.xrLight=new JE(this.threeRenderer),this.xrLight.addEventListener("estimationstart",(()=>{if(!this.isPresenting||this.xrLight==null)return;const c=this.presentedScene;c.add(this.xrLight),c.environment=this.xrLight.environment})));const n=await this.resolveARSession();n.addEventListener("end",(()=>{this.postSessionCleanup()}),{once:!0});const r=t.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");r.classList.add("enabled"),r.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=r;const a=await n.requestReferenceSpace("viewer");this.xrMode=n.interactionMode,this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=t.yaw,this.goalYaw=t.yaw,this.goalScale=1,t.setBackground(null),this.oldShadowIntensity=t.shadowIntensity,t.setShadowIntensity(.01),this.oldTarget.copy(t.getTarget()),t.element.addEventListener("load",this.onUpdateScene);const o=20*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(o),z:-Math.cos(o)});n.requestHitTestSource({space:a,offsetRay:l}).then((c=>{this.initialHitSource=c})),this.xrMode!=="screen-space"&&(this.setupControllers(),this.xDamper.setDecayTime(Gr),this.yDamper.setDecayTime(Gr),this.zDamper.setDecayTime(Gr),this.yawDamper.setDecayTime(Gr),this.pitchDamper.setDecayTime(Gr),this.rollDamper.setDecayTime(Gr)),this.currentSession=n,this.placementBox=new wA(t,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:Yg})}setupControllers(){this.controller1=this.threeRenderer.xr.getController(0),this.controller1.addEventListener("selectstart",this.onControllerSelectStart),this.controller1.addEventListener("selectend",this.onControllerSelectEnd),this.controller2=this.threeRenderer.xr.getController(1),this.controller2.addEventListener("selectstart",this.onControllerSelectStart),this.controller2.addEventListener("selectend",this.onControllerSelectEnd);const t=this.presentedScene;if(t.add(this.controller1),t.add(this.controller2),!this.controller1.userData.line){const e=new Ba(ef);e.name="line",e.scale.z=5,this.controller1.userData.turning=!1,this.controller1.userData.line=e,this.controller1.add(e),this.controller2.userData.turning=!1;const i=e.clone();this.controller2.userData.line=i,this.controller2.add(i),this.scaleLine.name="scale line",this.scaleLine.visible=!1,this.controller1.add(this.scaleLine);const{size:n}=t,r=.1/Math.max(n.x,n.y,n.z),a=new Zt(Bx);a.name="box",a.scale.copy(n).multiplyScalar(r),a.visible=!1,this.controller1.userData.box=a,t.add(a);const o=a.clone();this.controller2.userData.box=o,t.add(o)}}hover(t){if(this.xrMode==="screen-space"||this.selectedController==t)return!1;const e=this.presentedScene,i=this.placementBox.controllerIntersection(e,t);return t.userData.box.visible=(i==null||t.userData.turning)&&!this.isTwoFingering,t.userData.line.scale.z=i==null?5:i.distance,i!=null}controllerSeparation(){return this.controller1.position.distanceTo(this.controller2.position)}async stopPresenting(){if(!this.isPresenting)return;const t=new Promise((e=>{this.resolveCleanup=e}));try{await this.currentSession.end(),await t}catch(e){console.warn("Error while trying to end WebXR AR session"),console.warn(e),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const t=this.presentedScene;if(t!=null){const e=t.getTarget();this.oldTarget.copy(e),this.placeOnWall?e.z=t.boundingBox.min.z:e.y=t.boundingBox.min.y,t.setTarget(e.x,e.y,e.z)}}postSessionCleanup(){const t=this.currentSession;t!=null&&(t.removeEventListener("selectstart",this.onSelectStart),t.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const e=this.presentedScene;if(this._presentedScene=null,e!=null){const{element:a}=e;this.xrLight!=null&&(e.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),e.add(e.pivot),e.pivot.quaternion.set(0,0,0,1),e.pivot.position.set(0,0,0),e.pivot.scale.set(1,1,1),e.setShadowOffset(0);const o=this.turntableRotation;o!=null&&(e.yaw=o);const l=this.oldShadowIntensity;l!=null&&e.setShadowIntensity(l),e.setEnvironmentAndSkybox(a[ha],a[el]);const c=this.oldTarget;e.setTarget(c.x,c.y,c.z),e.xrCamera=null,e.element.removeEventListener("load",this.onUpdateScene),e.orientHotspots(0);const{width:h,height:u}=a.getBoundingClientRect();e.setSize(h,u),requestAnimationFrame((()=>{e.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:ge.NONE}}))}))}this.renderer.height=0;const i=this.exitWebXRButtonContainer;i!=null&&(i.classList.remove("enabled"),i.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const n=this.transientHitTestSource;n!=null&&(n.cancel(),this.transientHitTestSource=null);const r=this.initialHitSource;r!=null&&(r.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.xrMode!=="screen-space"&&(this.controller1!=null&&(this.controller1.userData.turning=!1,this.controller1.userData.box.visible=!1,this.controller1.userData.line.visible=!0,this.controller1.removeEventListener("selectstart",this.onControllerSelectStart),this.controller1.removeEventListener("selectend",this.onControllerSelectEnd),this.controller1.removeFromParent(),this.controller1=null),this.controller2!=null&&(this.controller2.userData.turning=!1,this.controller2.userData.box.visible=!1,this.controller2.userData.line.visible=!0,this.controller2.removeEventListener("selectstart",this.onControllerSelectStart),this.controller2.removeEventListener("selectend",this.onControllerSelectEnd),this.controller2.removeFromParent(),this.controller2=null),this.selectedController=null,this.scaleLine.visible=!1),this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:sl})}updateView(t){const e=this.presentedScene,i=this.threeRenderer.xr;i.updateCamera(Tx),e.xrCamera=i.getCamera();const{elements:n}=e.getCamera().matrixWorld;if(e.orientHotspots(Math.atan2(n[1],n[5])),this.initialized||(this.placeInitially(),this.initialized=!0),t.requestViewportScale&&t.recommendedViewportScale){const a=t.recommendedViewportScale;t.requestViewportScale(Math.max(a,.25))}const r=i.getBaseLayer();if(r!=null){const a=r instanceof XRWebGLLayer?r.getViewport(t):i.getBinding().getViewSubImage(r,t).viewport;this.threeRenderer.setViewport(a.x,a.y,a.width,a.height)}}placeInitially(){const t=this.presentedScene,{pivot:e,element:i}=t,{position:n}=e,r=t.getCamera(),{width:a,height:o}=this.overlay.getBoundingClientRect();t.setSize(a,o),r.projectionMatrixInverse.copy(r.projectionMatrix).invert();const{theta:l}=i.getCameraOrbit(),c=r.getWorldDirection(Js);t.yaw=Math.atan2(-c.x,-c.z)-l,this.goalYaw=t.yaw;const h=Math.max(1,2*t.boundingSphere.radius);n.copy(r.position).add(c.multiplyScalar(h)),this.updateTarget();const u=t.getTarget();if(n.add(u).sub(this.oldTarget),this.goalPosition.copy(n),t.setHotspotsVisibility(!0),this.xrMode==="screen-space"){const{session:d}=this.frame;d.addEventListener("selectstart",this.onSelectStart),d.addEventListener("selectend",this.onSelectEnd),d.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then((p=>{this.transientHitTestSource=p}))}}getTouchLocation(){const{axes:t}=this.inputSource.gamepad;let e=this.placementBox.getExpandedHit(this.presentedScene,t[0],t[1]);return e!=null&&(Js.copy(e).sub(this.presentedScene.getCamera().position),Js.length()>10)?null:e}getHitPoint(t){const e=this.threeRenderer.xr.getReferenceSpace(),i=t.getPose(e);if(i==null)return null;const n=Ix.fromArray(i.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(n.elements[4],n.elements[6])),n.elements[5]>.75!==this.placeOnWall?Mx.setFromMatrixPosition(n):null}moveToFloor(t){const e=this.initialHitSource;if(e==null)return;const i=t.getHitTestResults(e);if(i.length==0)return;const n=i[0],r=this.getHitPoint(n);r!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(r):this.goalPosition.y=r.y),e.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:Sx}))}fingerPolar(t){const e=t[0].inputSource.gamepad.axes,i=t[1].inputSource.gamepad.axes,n=i[0]-e[0],r=i[1]-e[1],a=Math.atan2(r,n);let o=this.lastAngle-a;return o>Math.PI?o-=2*Math.PI:o<-Math.PI&&(o+=2*Math.PI),this.lastAngle=a,{separation:Math.sqrt(n*n+r*r),deltaYaw:o}}setScale(t){const e=t/this.firstRatio;this.goalScale=Math.abs(e-1)<.2?1:e}processInput(t){const e=this.transientHitTestSource;if(e==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const i=t.getHitTestResultsForTransientInput(e),n=this.presentedScene,r=n.pivot.scale.x;if(this.isTwoFingering)if(i.length<2)this.isTwoFingering=!1;else{const{separation:a,deltaYaw:o}=this.fingerPolar(i);this.placeOnWall===!1&&(this.goalYaw+=o),n.canScale&&this.setScale(a)}else if(i.length!==2)if(this.isRotating){const a=1.5*this.inputSource.gamepad.axes[0];this.goalYaw+=a-this.lastAngle,this.lastAngle=a}else this.isTranslating&&i.forEach((a=>{if(a.inputSource!==this.inputSource)return;let o=null;if(a.results.length>0&&(o=this.getHitPoint(a.results[0])),o==null&&(o=this.getTouchLocation()),o!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=o.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/r,this.presentedScene.setShadowOffset(l);const c=Js.copy(n.getCamera().position),h=-l/(c.y-o.y);c.multiplyScalar(h),o.multiplyScalar(1-h).add(c)}}this.goalPosition.add(o),this.lastDragPosition.copy(o)}}));else{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(i);this.firstRatio=a/r}}moveScene(t){const e=this.presentedScene,{pivot:i}=e,n=this.placementBox;if(n.updateOpacity(t),this.controller1&&(this.controller1.userData.turning&&(i.quaternion.copy(this.controller1.quaternion).multiply(this.relativeOrientation),this.selectedController&&this.selectedController===this.controller2&&i.quaternion.premultiply(Hr.copy(this.controller2.quaternion).invert())),this.controller1.userData.box.position.copy(this.controller1.position),i.getWorldQuaternion(this.controller1.userData.box.quaternion)),this.controller2&&(this.controller2.userData.turning&&(i.quaternion.copy(this.controller2.quaternion).multiply(this.relativeOrientation),this.selectedController&&this.selectedController===this.controller1&&i.quaternion.premultiply(Hr.copy(this.controller1.quaternion).invert())),this.controller2.userData.box.position.copy(this.controller2.position),i.getWorldQuaternion(this.controller2.userData.box.quaternion)),this.controller1&&this.controller2&&this.isTwoFingering){const d=this.controllerSeparation();this.setScale(d),this.scaleLine.scale.z=-d,this.scaleLine.lookAt(this.controller2.position)}const r=e.pivot.scale.x;if(this.goalScale!==r){const d=this.scaleDamper.update(r,this.goalScale,t,1);e.pivot.scale.set(d,d,d)}if(i.parent!==e)return;const{position:a}=i,o=e.boundingSphere.radius,l=this.goalPosition;let c=ge.NONE;if(!l.equals(a)){c=ge.USER_INTERACTION;let{x:d,y:p,z:f}=a;if(d=this.xDamper.update(d,l.x,t,o),p=this.yDamper.update(p,l.y,t,o),f=this.zDamper.update(f,l.z,t,o),a.set(d,p,f),this.xrMode==="screen-space"&&!this.isTranslating){const m=l.y-p;this.placementComplete&&this.placeOnWall===!1?(n.offsetHeight=m/e.pivot.scale.x,e.setShadowOffset(m)):m===0&&(this.placementComplete=!0,n.show=!1,e.setShadowIntensity(.8))}this.xrMode!=="screen-space"&&l.equals(a)&&e.setShadowIntensity(.8)}e.updateTarget(t),Hr.setFromAxisAngle(Js.set(0,1,0),this.goalYaw);const h=e.pivot.quaternion.angleTo(Hr),u=h-this.yawDamper.update(h,0,t,Math.PI);e.pivot.quaternion.rotateTowards(Hr,u),e.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:c}}))}onWebXRFrame(t,e){if(this.xrMode!=="screen-space"){const o=this.hover(this.controller1),l=this.hover(this.controller2);this.placementBox.show=(o||l)&&!this.isTwoFingering}this.frame=e,++this.frames;const i=this.threeRenderer.xr.getReferenceSpace(),n=e.getViewerPose(i);n==null&&this.tracking===!0&&this.frames>30&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:wx}));const r=this.presentedScene;if(n==null||r==null||!r.element.loaded)return void this.threeRenderer.clear();this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:Kg}));let a=!0;for(const o of n.views){if(this.updateView(o),a){this.moveToFloor(e),this.processInput(e);const l=t-this.lastTick;this.moveScene(l),this.renderer.preRender(r,t,l),this.lastTick=t,r.renderShadow(this.threeRenderer)}this.threeRenderer.render(r,r.getCamera()),a=!1}}}function Dx(s){const t=new Map,e=new Map,i=s.clone();return Jg(s,i,(function(n,r){t.set(r,n),e.set(n,r)})),i.traverse((function(n){if(!n.isSkinnedMesh)return;const r=n,a=t.get(n),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map((function(l){return e.get(l)})),r.bind(r.skeleton,r.bindMatrix)})),i}function Jg(s,t,e){e(s,t);for(let i=0;i<s.children.length;i++)Jg(s.children[i],t.children[i],e)}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=Symbol("prepared"),Il=Symbol("prepare"),Li=Symbol("preparedGLTF"),Ml=Symbol("clone");class Lx{static prepare(t){if(t.scene==null)throw new Error("Model does not have a scene");if(t[nf])return t;const e=this[Il](t);return e[nf]=!0,e}static[Il](t){const{scene:e}=t,i=[e];return Object.assign(Object.assign({},t),{scene:e,scenes:i})}get parser(){return this[Li].parser}get animations(){return this[Li].animations}get scene(){return this[Li].scene}get scenes(){return this[Li].scenes}get cameras(){return this[Li].cameras}get asset(){return this[Li].asset}get userData(){return this[Li].userData}constructor(t){this[Li]=t}clone(){return new this.constructor(this[Ml]())}dispose(){this.scenes.forEach((t=>{t.traverse((e=>{const i=e;i.material&&((Array.isArray(i.material)?i.material:[i.material]).forEach((n=>{for(const r in n){const a=n[r];if(a instanceof he){const o=a.source.data;o.close!=null&&o.close(),a.dispose()}}n.dispose()})),i.geometry.dispose())}))}))}[Ml](){const t=this[Li],e=Dx(this.scene);Ux(e,this.scene);const i=[e],n=t.userData?Object.assign({},t.userData):{};return Object.assign(Object.assign({},t),{scene:e,scenes:i,userData:n})}}const Ux=(s,t)=>{$g(s,t,((e,i)=>{i.userData.variantMaterials!==void 0&&(e.userData.variantMaterials=new Map(i.userData.variantMaterials)),i.userData.variantData!==void 0&&(e.userData.variantData=i.userData.variantData),i.userData.originalMaterial!==void 0&&(e.userData.originalMaterial=i.userData.originalMaterial)}))},$g=(s,t,e)=>{e(s,t);for(let i=0;i<s.children.length;i++)$g(s.children[i],t.children[i],e)},rf=Symbol("threeGLTF"),sf=Symbol("gltf"),af=Symbol("gltfElementMap"),of=Symbol("threeObjectMap"),lf=Symbol("parallelTraverseThreeScene"),cf=Symbol("correlateOriginalThreeGLTF"),hf=Symbol("correlateCloneThreeGLTF");class Pa{static from(t,e){return e!=null?this[hf](t,e):this[cf](t)}static[cf](t){const e=t.parser.json,i=t.parser.associations,n=new Map,r={name:"Default"},a={index:-1};for(const o of i.keys())o instanceof Mi&&i.get(o)==null&&(a.index<0&&(e.materials==null&&(e.materials=[]),a.index=e.materials.length,e.materials.push(r)),o.name=r.name,i.set(o,{materials:a.index}));for(const[o,l]of i){l&&(o.userData=o.userData||{},o.userData.associations=l);for(const c in l)if(c!=null&&c!=="primitives"){const h=c,u=(e[h]||[])[l[h]];if(u==null)continue;let d=n.get(u);d==null&&(d=new Set,n.set(u,d)),d.add(o)}}return new Pa(t,e,i,n)}static[hf](t,e){const i=e.threeGLTF,n=e.gltf,r=JSON.parse(JSON.stringify(n)),a=new Map,o=new Map;for(let l=0;l<i.scenes.length;l++)this[lf](i.scenes[l],t.scenes[l],((c,h)=>{const u=e.threeObjectMap.get(c);if(u!=null){for(const d in u)if(d!=null&&d!=="primitives"){const p=d,f=u[p],m=r[p][f],A=a.get(h)||{};A[p]=f,a.set(h,A);const g=o.get(m)||new Set;g.add(h),o.set(m,g)}}}));return new Pa(t,r,a,o)}static[lf](t,e,i){const n=(r,a)=>{if(i(r,a),r.isObject3D){const o=r,l=a;if(o.material)if(Array.isArray(o.material))for(let c=0;c<o.material.length;++c)i(o.material[c],l.material[c]);else i(o.material,l.material);for(let c=0;c<r.children.length;++c)n(r.children[c],a.children[c])}};n(t,e)}get threeGLTF(){return this[rf]}get gltf(){return this[sf]}get gltfElementMap(){return this[af]}get threeObjectMap(){return this[of]}constructor(t,e,i,n){this[rf]=t,this[sf]=e,this[af]=n,this[of]=i}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=Symbol("correlatedSceneGraph");class Px extends Lx{static[Il](t){const e=super[Il](t);e[$s]==null&&(e[$s]=Pa.from(e));const{scene:i}=e,n=new fi(void 0,1/0);return i.traverse((r=>{r.renderOrder=1e3,r.frustumCulled=!1,r.name||(r.name=r.uuid);const a=r;if(a.material){const{geometry:o}=a;a.castShadow=!0,a.isSkinnedMesh&&(o.boundingSphere=n,o.boundingBox=null);const l=a.material;if(l.isMeshBasicMaterial===!0&&(l.toneMapped=!1),l.shadowSide=0,l.aoMap){const{gltf:c,threeObjectMap:h}=e[$s],u=h.get(l);if(c.materials!=null&&u!=null&&u.materials!=null){const d=c.materials[u.materials];d.occlusionTexture&&d.occlusionTexture.texCoord===0&&o.attributes.uv!=null&&o.setAttribute("uv2",o.attributes.uv)}}}})),e}get correlatedSceneGraph(){return this[Li][$s]}[Ml](){const t=super[Ml](),e=new Map;return t.scene.traverse((i=>{const n=i;if(n.material){const a=n.material;if(a!=null){if(e.has(a.uuid))return void(n.material=e.get(a.uuid));n.material=a.clone(),e.set(a.uuid,n.material)}}const r=i;r.target!==void 0&&r.add(r.target)})),t[$s]=Pa.from(t,this.correlatedSceneGraph),t}}const uf=(s,t,e)=>{let i;switch(s){case xe:i=new Uint8ClampedArray(t*e*4);break;case Se:i=new Uint16Array(t*e*4);break;case Ln:i=new Uint32Array(t*e*4);break;case Ou:i=new Int8Array(t*e*4);break;case Gu:i=new Int16Array(t*e*4);break;case Nl:i=new Int32Array(t*e*4);break;case ye:i=new Float32Array(t*e*4);break;default:throw new Error("Unsupported data type")}return i};let Ro;class sd{constructor(t){var e,i,n,r,a,o,l,c,h,u,d,p,f,m,A,g;this._rendererIsDisposable=!1,this._supportsReadPixels=!0,this.render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(v){throw this._renderer.setRenderTarget(null),v}this._renderer.setRenderTarget(null)},this._width=t.width,this._height=t.height,this._type=t.type,this._colorSpace=t.colorSpace;const b={format:Ae,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:((e=t.renderTargetOptions)===null||e===void 0?void 0:e.anisotropy)!==void 0?(i=t.renderTargetOptions)===null||i===void 0?void 0:i.anisotropy:1,generateMipmaps:((n=t.renderTargetOptions)===null||n===void 0?void 0:n.generateMipmaps)!==void 0&&((r=t.renderTargetOptions)===null||r===void 0?void 0:r.generateMipmaps),magFilter:((a=t.renderTargetOptions)===null||a===void 0?void 0:a.magFilter)!==void 0?(o=t.renderTargetOptions)===null||o===void 0?void 0:o.magFilter:zt,minFilter:((l=t.renderTargetOptions)===null||l===void 0?void 0:l.minFilter)!==void 0?(c=t.renderTargetOptions)===null||c===void 0?void 0:c.minFilter:zt,samples:((h=t.renderTargetOptions)===null||h===void 0?void 0:h.samples)!==void 0?(u=t.renderTargetOptions)===null||u===void 0?void 0:u.samples:void 0,wrapS:((d=t.renderTargetOptions)===null||d===void 0?void 0:d.wrapS)!==void 0?(p=t.renderTargetOptions)===null||p===void 0?void 0:p.wrapS:Ce,wrapT:((f=t.renderTargetOptions)===null||f===void 0?void 0:f.wrapT)!==void 0?(m=t.renderTargetOptions)===null||m===void 0?void 0:m.wrapT:Ce};if(this._material=t.material,t.renderer?this._renderer=t.renderer:(this._renderer=sd.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new mr,this._camera=new Ms,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!((v,y,_,E)=>{if(Ro!==void 0)return Ro;const x=new pi(1,1,E);y.setRenderTarget(x);const I=new Zt(new dn,new ui({color:16777215}));y.render(I,_),y.setRenderTarget(null);const T=uf(v,x.width,x.height);return y.readRenderTargetPixels(x,0,0,x.width,x.height,T),x.dispose(),I.geometry.dispose(),I.material.dispose(),Ro=T[0]!==0,Ro})(this._type,this._renderer,this._camera,b)){let v;this._type===Se&&(v=this._renderer.extensions.has("EXT_color_buffer_float")?ye:void 0),v!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to 1015`),this._type=v):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new Zt(new dn,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new pi(this.width,this.height,b),this._renderTarget.texture.mapping=((A=t.renderTargetOptions)===null||A===void 0?void 0:A.mapping)!==void 0?(g=t.renderTargetOptions)===null||g===void 0?void 0:g.mapping:ps}static instantiateRenderer(){const t=new og;return t.setSize(128,128),t}toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const t=uf(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,t),t}toDataTexture(t){const e=new Na(this.toArray(),this.width,this.height,Ae,this._type,t?.mapping||ps,t?.wrapS||Ce,t?.wrapT||Ce,t?.magFilter||zt,t?.minFilter||zt,t?.anisotropy||1,oe);return e.generateMipmaps=t?.generateMipmaps!==void 0&&t?.generateMipmaps,e}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(t){this.disposeOnDemandRenderer(),t&&this.renderTarget.dispose(),this.material instanceof ai&&Object.values(this.material.uniforms).forEach((e=>{e.value instanceof he&&e.value.dispose()})),Object.values(this.material).forEach((e=>{e instanceof he&&e.dispose()})),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(t){this._width=t,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(t){this._height=t,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(t){this._renderTarget=t,this._width=t.width,this._height=t.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}class Fx extends ai{constructor({gamma:t,offsetHdr:e,offsetSdr:i,gainMapMin:n,gainMapMax:r,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:l,sdr:c,gainMap:h}){super({name:"GainMapDecoderMaterial",vertexShader:`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,fragmentShader:`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`,uniforms:{sdr:{value:c},gainMap:{value:h},gamma:{value:new B(1/t[0],1/t[1],1/t[2])},offsetHdr:{value:new B().fromArray(e)},offsetSdr:{value:new B().fromArray(i)},gainMapMin:{value:new B().fromArray(n)},gainMapMax:{value:new B().fromArray(r)},weightFactor:{value:(Math.log2(a)-o)/(l-o)}},blending:0,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(t){this.uniforms.sdr.value=t}get gainMap(){return this.uniforms.gainMap.value}set gainMap(t){this.uniforms.gainMap.value=t}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(t){this.uniforms.offsetHdr.value.fromArray(t)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(t){this.uniforms.offsetSdr.value.fromArray(t)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(t){this.uniforms.gainMapMin.value.fromArray(t)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(t){this.uniforms.gainMapMax.value.fromArray(t)}get gamma(){const t=this.uniforms.gamma.value;return[1/t.x,1/t.y,1/t.z]}set gamma(t){const e=this.uniforms.gamma.value;e.x=1/t[0],e.y=1/t[1],e.z=1/t[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(t){this._hdrCapacityMin=t,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(t){this._hdrCapacityMax=t,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(t){this._maxDisplayBoost=Math.max(1,Math.min(65504,t)),this.calculateWeight()}calculateWeight(){const t=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,t))}}class Zg extends Error{}class tb extends Error{}const Zs=(s,t,e)=>{const i=new RegExp(`${t}="([^"]*)"`,"i").exec(s);if(i)return i[1];const n=new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,"i").exec(s);if(n){const r=n[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return r&&r.length===3?r.map((a=>a.replace(/<\/?rdf:li>/g,""))):n[1].trim()}if(e!==void 0)return e;throw new Error(`Can't find ${t} in gainmap metadata`)};class Nx{constructor(t){this.options={debug:!(!t||t.debug===void 0)&&t.debug,extractFII:!t||t.extractFII===void 0||t.extractFII,extractNonFII:!t||t.extractNonFII===void 0||t.extractNonFII}}extract(t){return new Promise(((e,i)=>{const n=this.options.debug,r=new DataView(t.buffer);if(r.getUint16(0)!==65496)return void i(new Error("Not a valid jpeg"));const a=r.byteLength;let o,l=2,c=0;for(;l<a;){if(++c>250)return void i(new Error(`Found no marker after ${c} loops 😵`));if(r.getUint8(l)!==255)return void i(new Error(`Not a valid marker at offset 0x${l.toString(16)}, found: 0x${r.getUint8(l).toString(16)}`));if(o=r.getUint8(l+1),n&&console.log(`Marker: ${o.toString(16)}`),o===226){n&&console.log("Found APP2 marker (0xffe2)");const h=l+4;if(r.getUint32(h)===1297106432){const u=h+4;let d;if(r.getUint16(u)===18761)d=!1;else{if(r.getUint16(u)!==19789)return void i(new Error("No valid endianness marker found in TIFF header"));d=!0}if(r.getUint16(u+2,!d)!==42)return void i(new Error("Not valid TIFF data! (no 0x002A marker)"));const p=r.getUint32(u+4,!d);if(p<8)return void i(new Error("Not valid TIFF data! (First offset less than 8)"));const f=u+p,m=r.getUint16(f,!d),A=f+2;let g=0;for(let y=A;y<A+12*m;y+=12)r.getUint16(y,!d)===45057&&(g=r.getUint32(y+8,!d));const b=f+2+12*m+4,v=[];for(let y=b;y<b+16*g;y+=16){const _={MPType:r.getUint32(y,!d),size:r.getUint32(y+4,!d),dataOffset:r.getUint32(y+8,!d),dependantImages:r.getUint32(y+12,!d),start:-1,end:-1,isFII:!1};_.dataOffset?(_.start=u+_.dataOffset,_.isFII=!1):(_.start=0,_.isFII=!0),_.end=_.start+_.size,v.push(_)}if(this.options.extractNonFII&&v.length){const y=new Blob([r]),_=[];for(const E of v){if(E.isFII&&!this.options.extractFII)continue;const x=y.slice(E.start,E.end+1,"image/jpeg");_.push(x)}e(_)}}}l+=2+r.getUint16(l+2)}}))}}const Qx=async s=>{const t=(n=>{let r;r=typeof TextDecoder<"u"?new TextDecoder().decode(n):n.toString();let a=r.indexOf("<x:xmpmeta");for(;a!==-1;){const o=r.indexOf("x:xmpmeta>",a),l=r.slice(a,o+10);try{const c=Zs(l,"hdrgm:GainMapMin","0"),h=Zs(l,"hdrgm:GainMapMax"),u=Zs(l,"hdrgm:Gamma","1"),d=Zs(l,"hdrgm:OffsetSDR","0.015625"),p=Zs(l,"hdrgm:OffsetHDR","0.015625"),f=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(l),m=f?f[1]:"0",A=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(l);if(!A)throw new Error("Incomplete gainmap metadata");const g=A[1];return{gainMapMin:Array.isArray(c)?c.map((b=>parseFloat(b))):[parseFloat(c),parseFloat(c),parseFloat(c)],gainMapMax:Array.isArray(h)?h.map((b=>parseFloat(b))):[parseFloat(h),parseFloat(h),parseFloat(h)],gamma:Array.isArray(u)?u.map((b=>parseFloat(b))):[parseFloat(u),parseFloat(u),parseFloat(u)],offsetSdr:Array.isArray(d)?d.map((b=>parseFloat(b))):[parseFloat(d),parseFloat(d),parseFloat(d)],offsetHdr:Array.isArray(p)?p.map((b=>parseFloat(b))):[parseFloat(p),parseFloat(p),parseFloat(p)],hdrCapacityMin:parseFloat(m),hdrCapacityMax:parseFloat(g)}}catch{}a=r.indexOf("<x:xmpmeta",o)}})(s);if(!t)throw new tb("Gain map XMP metadata not found");const e=new Nx({extractFII:!0,extractNonFII:!0}),i=await e.extract(s);if(i.length!==2)throw new Zg("Gain map recovery image not found");return{sdr:new Uint8Array(await i[0].arrayBuffer()),gainMap:new Uint8Array(await i[1].arrayBuffer()),metadata:t}},df=s=>new Promise(((t,e)=>{const i=document.createElement("img");i.onload=()=>{t(i)},i.onerror=n=>{e(n)},i.src=URL.createObjectURL(s)}));class kx extends zi{constructor(t,e){super(e),t&&(this._renderer=t),this._internalLoadingManager=new $m}setRenderer(t){return this._renderer=t,this}setRenderTargetOptions(t){return this._renderTargetOptions=t,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");const t=new Fx({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new he,sdr:new he});return new sd({width:16,height:16,type:Se,colorSpace:oe,material:t,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async render(t,e,i,n){const r=n?new Blob([n],{type:"image/jpeg"}):void 0,a=new Blob([i],{type:"image/jpeg"});let o,l,c=!1;if(typeof createImageBitmap>"u"){const d=await Promise.all([r?df(r):Promise.resolve(void 0),df(a)]);l=d[0],o=d[1],c=!0}else{const d=await Promise.all([r?createImageBitmap(r,{imageOrientation:"flipY"}):Promise.resolve(void 0),createImageBitmap(a,{imageOrientation:"flipY"})]);l=d[0],o=d[1]}const h=new he(l||new ImageData(2,2),ps,Ce,Ce,zt,1008,Ae,xe,1,oe);h.flipY=c,h.needsUpdate=!0;const u=new he(o,ps,Ce,Ce,zt,1008,Ae,xe,1,ae);u.flipY=c,u.needsUpdate=!0,t.width=o.width,t.height=o.height,t.material.gainMap=h,t.material.sdr=u,t.material.gainMapMin=e.gainMapMin,t.material.gainMapMax=e.gainMapMax,t.material.offsetHdr=e.offsetHdr,t.material.offsetSdr=e.offsetSdr,t.material.gamma=e.gamma,t.material.hdrCapacityMin=e.hdrCapacityMin,t.material.hdrCapacityMax=e.hdrCapacityMax,t.material.maxDisplayBoost=Math.pow(2,e.hdrCapacityMax),t.material.needsUpdate=!0,t.render()}}class Ox extends kx{load(t,e,i,n){const r=this.prepareQuadRenderer(),a=new un(this._internalLoadingManager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(t),a.load(t,(async o=>{if(typeof o=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const l=new Uint8Array(o);let c,h,u;try{const d=await Qx(l);c=d.sdr,h=d.gainMap,u=d.metadata}catch(d){if(!(d instanceof tb||d instanceof Zg))throw d;console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),u={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},c=l}try{await this.render(r,u,c,h)}catch(d){return this.manager.itemError(t),typeof n=="function"&&n(d),void r.disposeOnDemandRenderer()}typeof e=="function"&&e(r),this.manager.itemEnd(t),r.disposeOnDemandRenderer()}),i,(o=>{this.manager.itemError(t),typeof n=="function"&&n(o)})),r}}class Gx extends h0{constructor(t){super(t),this.type=Se}parse(t){const e=function(f,m){switch(f){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(m||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(m||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(m||""));default:throw new Error("THREE.RGBELoader: Memory Error: "+(m||""))}},i=function(f,m,A){m=m||1024;let g=f.pos,b=-1,v=0,y="",_=String.fromCharCode.apply(null,new Uint16Array(f.subarray(g,g+128)));for(;0>(b=_.indexOf(`
`))&&v<m&&g<f.byteLength;)y+=_,v+=_.length,g+=128,_+=String.fromCharCode.apply(null,new Uint16Array(f.subarray(g,g+128)));return-1<b&&(f.pos+=v+b+1,y+_.slice(0,b))},n=function(f,m,A,g){const b=f[m+3],v=Math.pow(2,b-128)/255;A[g+0]=f[m+0]*v,A[g+1]=f[m+1]*v,A[g+2]=f[m+2]*v,A[g+3]=1},r=function(f,m,A,g){const b=f[m+3],v=Math.pow(2,b-128)/255;A[g+0]=$a.toHalfFloat(Math.min(f[m+0]*v,65504)),A[g+1]=$a.toHalfFloat(Math.min(f[m+1]*v,65504)),A[g+2]=$a.toHalfFloat(Math.min(f[m+2]*v,65504)),A[g+3]=$a.toHalfFloat(1)},a=new Uint8Array(t);a.pos=0;const o=(function(f){const m=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,g=/^\s*FORMAT=(\S+)\s*$/,b=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,v={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let y,_;for((f.pos>=f.byteLength||!(y=i(f)))&&e(1,"no header found"),(_=y.match(/^#\?(\S+)/))||e(3,"bad initial token"),v.valid|=1,v.programtype=_[1],v.string+=y+`
`;y=i(f),y!==!1;)if(v.string+=y+`
`,y.charAt(0)!=="#"){if((_=y.match(m))&&(v.gamma=parseFloat(_[1])),(_=y.match(A))&&(v.exposure=parseFloat(_[1])),(_=y.match(g))&&(v.valid|=2,v.format=_[1]),(_=y.match(b))&&(v.valid|=4,v.height=parseInt(_[1],10),v.width=parseInt(_[2],10)),2&v.valid&&4&v.valid)break}else v.comments+=y+`
`;return 2&v.valid||e(3,"missing format specifier"),4&v.valid||e(3,"missing image size specifier"),v})(a),l=o.width,c=o.height,h=(function(f,m,A){const g=m;if(g<8||g>32767||f[0]!==2||f[1]!==2||128&f[2])return new Uint8Array(f);g!==(f[2]<<8|f[3])&&e(3,"wrong scanline width");const b=new Uint8Array(4*m*A);b.length||e(4,"unable to allocate buffer space");let v=0,y=0;const _=4*g,E=new Uint8Array(4),x=new Uint8Array(_);let I=A;for(;I>0&&y<f.byteLength;){y+4>f.byteLength&&e(1),E[0]=f[y++],E[1]=f[y++],E[2]=f[y++],E[3]=f[y++],E[0]==2&&E[1]==2&&(E[2]<<8|E[3])==g||e(3,"bad rgbe scanline format");let T,L=0;for(;L<_&&y<f.byteLength;){T=f[y++];const U=T>128;if(U&&(T-=128),(T===0||L+T>_)&&e(3,"bad scanline data"),U){const O=f[y++];for(let F=0;F<T;F++)x[L++]=O}else x.set(f.subarray(y,y+T),L),L+=T,y+=T}const H=g;for(let U=0;U<H;U++){let O=0;b[v]=x[U+O],O+=g,b[v+1]=x[U+O],O+=g,b[v+2]=x[U+O],O+=g,b[v+3]=x[U+O],v+=4}I--}return b})(a.subarray(a.pos),l,c);let u,d,p;switch(this.type){case ye:p=h.length/4;const f=new Float32Array(4*p);for(let A=0;A<p;A++)n(h,4*A,f,4*A);u=f,d=ye;break;case Se:p=h.length/4;const m=new Uint16Array(4*p);for(let A=0;A<p;A++)r(h,4*A,m,4*A);u=m,d=Se;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:l,height:c,data:u,header:o.string,gamma:o.gamma,exposure:o.exposure,type:d}}setDataType(t){return this.type=t,this}load(t,e,i,n){return super.load(t,(function(r,a){switch(r.type){case ye:case Se:r.colorSpace=oe,r.minFilter=zt,r.magFilter=zt,r.generateMipmaps=!1,r.flipY=!0}e&&e(r,a)}),i,n)}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx={topLight:{intensity:500,position:[.418,16.199,.3]},room:{position:[-.757,13.219,.717],scale:[31.713,28.305,28.591]},boxes:[{position:[-10.906,2.009,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,.857,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:50,position:[-16.116,14.37,8.208],scale:[.1,2.428,2.739]},{intensity:50,position:[-16.109,18.021,-8.207],scale:[.1,2.425,2.751]},{intensity:17,position:[14.904,12.198,-1.832],scale:[.15,4.265,6.331]},{intensity:43,position:[-.462,8.89,14.52],scale:[4.38,5.441,.088]},{intensity:20,position:[3.235,11.486,-12.541],scale:[2.5,2,.1]},{intensity:100,position:[0,20,0],scale:[1,.1,1]}]},zx={topLight:{intensity:400,position:[.5,14,.5]},room:{position:[0,13.2,0],scale:[31.5,28.5,31.5]},boxes:[{position:[-10.906,-1,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,-.16,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:80,position:[-14,10,8],scale:[.1,2.5,2.5]},{intensity:80,position:[-14,14,-4],scale:[.1,2.5,2.5]},{intensity:23,position:[14,12,0],scale:[.1,5,5]},{intensity:16,position:[0,9,14],scale:[5,5,.1]},{intensity:80,position:[7,8,-14],scale:[2.5,2.5,.1]},{intensity:80,position:[-7,16,-14],scale:[2.5,2.5,.1]},{intensity:1,position:[0,20,0],scale:[.1,.1,.1]}]};class pf extends mr{constructor(t){super(),this.position.y=-3.5;const e=new pn;e.deleteAttribute("uv");const i=new Ra({metalness:0,side:1}),n=new Ra({metalness:0}),r=t=="legacy"?Hx:zx,a=new tg(16777215,r.topLight.intensity,28,2);a.position.set(...r.topLight.position),this.add(a);const o=new Zt(e,i);o.position.set(...r.room.position),o.scale.set(...r.room.scale),this.add(o);for(const l of r.boxes){const c=new Zt(e,n);c.position.set(...l.position),c.rotation.set(0,l.rotation,0),c.scale.set(...l.scale),this.add(c)}for(const l of r.lights){const c=new Zt(e,this.createAreaLightMaterial(l.intensity));c.position.set(...l.position),c.scale.set(...l.scale),this.add(c)}}createAreaLightMaterial(t){const e=new ui;return e.color.setScalar(t),e}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=20,Vx=/\.hdr(\.js)?$/;class Af{constructor(t){this.threeRenderer=t,this.lottieLoaderUrl="",this._ldrLoader=null,this._imageLoader=null,this._hdrLoader=null,this._lottieLoader=null,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}ldrLoader(t){return this._ldrLoader==null&&(this._ldrLoader=new Zm),this._ldrLoader.setWithCredentials(t),this._ldrLoader}imageLoader(t){return this._imageLoader==null&&(this._imageLoader=new Ox(this.threeRenderer)),this._imageLoader.setWithCredentials(t),this._imageLoader}hdrLoader(t){return this._hdrLoader==null&&(this._hdrLoader=new Gx,this._hdrLoader.setDataType(Se)),this._hdrLoader.setWithCredentials(t),this._hdrLoader}async getLottieLoader(t){if(this._lottieLoader==null){const{LottieLoader:e}=await import(this.lottieLoaderUrl);this._lottieLoader=new e}return this._lottieLoader.setWithCredentials(t),this._lottieLoader}async loadImage(t,e){const i=await new Promise(((n,r)=>this.ldrLoader(e).load(t,n,(()=>{}),r)));return i.name=t,i.flipY=!1,i}async loadLottie(t,e,i){const n=await this.getLottieLoader(i);n.setQuality(e);const r=await new Promise(((a,o)=>n.load(t,a,(()=>{}),o)));return r.name=t,r}async loadEquirect(t,e=!1,i=()=>{}){try{const n=Vx.test(t),r=n?this.hdrLoader(e):this.imageLoader(e),a=await new Promise(((o,l)=>r.load(t,(c=>{const{renderTarget:h}=c;if(h!=null){const{texture:u}=h;c.dispose(!1),o(u)}else o(c)}),(c=>{i(c.loaded/c.total*.9)}),l)));return i(1),a.name=t,a.mapping=ul,n||(a.colorSpace=ae),a}finally{i&&i(1)}}async generateEnvironmentMapAndSkybox(t=null,e=null,i=()=>{},n=!1){const r=e!=="legacy";e!=="legacy"&&e!=="neutral"||(e=null),e=gg(e);let a,o=Promise.resolve(null);t&&(o=this.loadEquirectFromUrl(t,n,i)),a=e?this.loadEquirectFromUrl(e,n,i):t?this.loadEquirectFromUrl(t,n,i):r?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[l,c]=await Promise.all([a,o]);if(l==null)throw new Error("Failed to load environment map.");return{environmentMap:l,skybox:c}}async loadEquirectFromUrl(t,e,i){if(!this.skyboxCache.has(t)){const n=this.loadEquirect(t,e,i);this.skyboxCache.set(t,n)}return this.skyboxCache.get(t)}async GenerateEnvironmentMap(t,e){await((c=0)=>new Promise((h=>setTimeout(h,c))))();const i=this.threeRenderer,n=new Xu(256,{generateMipmaps:!1,type:Se,format:Ae,colorSpace:oe,depthBuffer:!0}),r=new bu(.1,100,n),a=r.renderTarget.texture;a.name=e;const o=i.outputColorSpace,l=i.toneMapping;return i.toneMapping=0,i.outputColorSpace=oe,r.update(i,t),this.blurCubemap(n,.04),i.toneMapping=l,i.outputColorSpace=o,a}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new pf("legacy"),"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new pf("neutral"),"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(t,e){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(Do);const n=new pn,r=new Zt(n,this.blurMaterial);this.blurScene=new mr,this.blurScene.add(r)}const i=t.clone();this.halfblur(t,i,e,"latitudinal"),this.halfblur(i,t,e,"longitudinal")}halfblur(t,e,i,n){const r=t.width,a=isFinite(i)?Math.PI/(2*r):2*Math.PI/39,o=i/a,l=isFinite(i)?1+Math.floor(3*o):Do;l>Do&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${l} samples when the maximum is set to 20`);const c=[];let h=0;for(let d=0;d<Do;++d){const p=d/o,f=Math.exp(-p*p/2);c.push(f),d==0?h+=f:d<l&&(h+=2*f)}for(let d=0;d<c.length;d++)c[d]=c[d]/h;const u=this.blurMaterial.uniforms;u.envMap.value=t.texture,u.samples.value=l,u.weights.value=c,u.latitudinal.value=n==="latitudinal",u.dTheta.value=a,new bu(.1,100,e).update(this.threeRenderer,this.blurScene)}getBlurShader(t){const e=new Float32Array(t),i=new B(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:i}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,blending:0,depthTest:!1,depthWrite:!1,side:1})}async dispose(){for(const[,t]of this.skyboxCache)(await t).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=[1,.79,.62,.5,.4,.31,.25],ff="high-performance";class wi extends Ti{static get singleton(){return this._singleton||(this._singleton=new wi({powerPreference:(self.ModelViewerElement||{}).powerPreference||ff,debug:Kp()})),this._singleton}static resetSingleton(){const t=this._singleton.dispose();for(const e of t)e.disconnectedCallback();this._singleton=new wi({powerPreference:(self.ModelViewerElement||{}).powerPreference||ff,debug:Kp()});for(const e of t)e.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return zr[this.scaleStep]}set minScale(t){let e=1;for(;e<zr.length&&!(zr[e]<t);)++e;this.lastStep=e-1}constructor(t){super(),this.loader=new je(Px),this.width=0,this.height=0,this.dpr=1,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=3,this.avgFrameDuration=50,this.onWebGLContextLost=e=>{this.dispatchEvent({type:"contextlost",sourceEvent:e})},this.onWebGLContextRestored=()=>{var e;(e=this.textureUtils)===null||e===void 0||e.dispose(),this.textureUtils=new Af(this.threeRenderer);for(const i of this.scenes)i.element[Cl]()},this.dpr=window.devicePixelRatio,this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new og({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:t.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.setPixelRatio(1),this.threeRenderer.debug={checkShaderErrors:!!t.debug,onShaderError:null},this.threeRenderer.toneMapping=7}catch(e){console.warn(e)}this.arRenderer=new Rx(this),this.textureUtils=this.canRender?new Af(this.threeRenderer):null,je.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}registerScene(t){this.scenes.add(t),t.forceRescale();const e=new Mt;this.threeRenderer.getSize(e),t.canvas.width=e.x,t.canvas.height=e.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop(((i,n)=>this.render(i,n)))}unregisterScene(t){this.scenes.delete(t),this.canvas3D.parentElement===t.canvas.parentElement&&t.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null)}displayCanvas(t){return t.element.modelIsVisible&&!this.multipleScenesVisible?this.canvas3D:t.element[Lu]}countVisibleScenes(){const{canvas3D:t}=this;let e=0,i=null;for(const r of this.scenes){const{element:a}=r;a.modelIsVisible&&r.externalRenderer==null&&++e,t.parentElement===r.canvas.parentElement&&(i=r)}const n=e>1;if(i!=null){const r=n&&!this.multipleScenesVisible,a=!i.element.modelIsVisible;if(r||a){const{width:o,height:l}=this.sceneSize(i);this.copyPixels(i,o,l),t.parentElement.removeChild(t)}}this.multipleScenesVisible=n}updateRendererSize(){var t;const e=window.devicePixelRatio;if(e!==this.dpr)for(const r of this.scenes){const{element:a}=r;a[ts](a.getBoundingClientRect())}let i=0,n=0;for(const r of this.scenes)i=Math.max(i,r.width),n=Math.max(n,r.height);if(i!==this.width||n!==this.height||e!==this.dpr){this.width=i,this.height=n,this.dpr=e,i=Math.ceil(i*e),n=Math.ceil(n*e),this.canRender&&this.threeRenderer.setSize(i,n,!1);for(const r of this.scenes){const{canvas:a}=r;a.width=i,a.height=n,r.forceRescale(),(t=r.effectRenderer)===null||t===void 0||t.setSize(i,n)}}}updateRendererScale(t){const e=this.scaleStep;this.avgFrameDuration+=Qi(.2*(t-this.avgFrameDuration),-5,5),this.avgFrameDuration>60?++this.scaleStep:this.avgFrameDuration<40&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),e!==this.scaleStep&&(this.avgFrameDuration=50)}shouldRender(t){if(t.shouldRender())t.scaleStep!=this.scaleStep&&(t.scaleStep=this.scaleStep,this.rescaleCanvas(t));else{if(t.scaleStep==0)return!1;t.scaleStep=0,this.rescaleCanvas(t)}return!0}rescaleCanvas(t){const e=zr[t.scaleStep],i=Math.ceil(this.width/e),n=Math.ceil(this.height/e),{style:r}=t.canvas;r.width=`${i}px`,r.height=`${n}px`,this.canvas3D.style.width=`${i}px`,this.canvas3D.style.height=`${n}px`;const a=this.dpr*e,o=e<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";t.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:a,minimumDpr:this.dpr*zr[this.lastStep],pixelWidth:Math.ceil(t.width*a),pixelHeight:Math.ceil(t.height*a),reason:o}}))}sceneSize(t){const{dpr:e}=this,i=zr[t.scaleStep];return{width:Math.min(Math.ceil(t.width*i*e),this.canvas3D.width),height:Math.min(Math.ceil(t.height*i*e),this.canvas3D.height)}}copyPixels(t,e,i){const n=t.context;n!=null?(n.clearRect(0,0,e,i),n.drawImage(this.canvas3D,0,0,e,i,0,0,e,i),t.canvas.classList.add("show")):console.log("could not acquire 2d context")}orderedScenes(){const t=[];for(const e of[!1,!0])for(const i of this.scenes)i.element.modelIsVisible===e&&t.push(i);return t}get isPresenting(){return this.arRenderer.isPresenting}preRender(t,e,i){const{element:n,exposure:r,toneMapping:a}=t;n[Ui](e,i);const o=typeof r=="number"&&!Number.isNaN(r),l=n.environmentImage,c=n.skyboxImage,h=a===7&&(l==="neutral"||l==="legacy"||!l&&!c);this.threeRenderer.toneMappingExposure=(o?r:1)*(h?1.3:1)}render(t,e){if(e!=null)return void this.arRenderer.onWebXRFrame(t,e);const i=t-this.lastTick;if(this.lastTick=t,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(i),this.renderedLastFrame=!1);const{canvas3D:n}=this;for(const r of this.orderedScenes()){const{element:a}=r;if(!a.loaded||!a.modelIsVisible&&r.renderCount>0||(this.preRender(r,t,i),!this.shouldRender(r)))continue;if(r.externalRenderer!=null){const c=r.getCamera();c.updateMatrix();const{matrix:h,projectionMatrix:u}=c,d=h.elements.slice(),p=r.getTarget();d[12]+=p.x,d[13]+=p.y,d[14]+=p.z,r.externalRenderer.render({viewMatrix:d,projectionMatrix:u.elements});continue}if(!a.modelIsVisible&&!this.multipleScenesVisible)for(const c of this.scenes)c.element.modelIsVisible&&c.queueRender();const{width:o,height:l}=this.sceneSize(r);r.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-l,o,l),r.effectRenderer!=null?r.effectRenderer.render(i):(this.threeRenderer.autoClear=!0,this.threeRenderer.toneMapping=r.toneMapping,this.threeRenderer.render(r,r.camera)),this.multipleScenesVisible||!r.element.modelIsVisible&&r.renderCount===0?this.copyPixels(r,o,l):n.parentElement!==r.canvas.parentElement&&(r.canvas.parentElement.appendChild(n),r.canvas.classList.remove("show")),r.hasRendered(),++r.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const t=[];for(const e of this.scenes)t.push(e.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),t}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=Symbol("correlatedObjects"),Xt=Symbol("onUpdate");class ka{constructor(t,e){this[Xt]=t,this[Lt]=e}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new ui,Wx=new dn(2,2);let qx=0;const qe=Symbol("threeTexture"),gf=Symbol("threeTextures");let jx=class extends ka{get[qe](){var s;return(s=this[Lt])===null||s===void 0?void 0:s.values().next().value}get[gf](){return this[Lt]}constructor(s,t){super(s,new Set(t?[t]:[])),this[qe].image.src||(this[qe].image.src=t.name?t.name:"adhoc_image"+qx++),this[qe].image.name||(this[qe].image.name=t&&t.image&&t.image.src?t.image.src.split("/").pop():"adhoc_image")}get name(){return this[qe].image.name||""}get uri(){return this[qe].image.src}get bufferView(){return this[qe].image.bufferView}get element(){const s=this[qe];if(s&&(s.isCanvasTexture||s.isVideoTexture))return s.image}get animation(){const s=this[qe];if(s&&s.isCanvasTexture&&s.animation)return s.animation}get type(){return this.uri!=null?"external":"embedded"}set name(s){for(const t of this[gf])t.image.name=s}update(){const s=this[qe];s&&s.isCanvasTexture&&!s.animation&&(this[qe].needsUpdate=!0,this[Xt]())}async createThumbnail(s,t){const e=new mr;mf.map=this[qe];const i=new Zt(Wx,mf);e.add(i);const n=new Ms(-1,1,1,-1,0,1),{threeRenderer:r}=wi.singleton,a=new pi(s,t);r.setRenderTarget(a),r.render(e,n),r.setRenderTarget(null);const o=new Uint8Array(s*t*4);r.readRenderTargetPixels(a,0,0,s,t,o),Rn.width=s,Rn.height=t;const l=Rn.getContext("2d"),c=l.createImageData(s,t);return c.data.set(o),l.putImageData(c,0,0),new Promise((async(h,u)=>{Rn.toBlob((d=>{if(!d)return u("Failed to capture thumbnail.");h(URL.createObjectURL(d))}),"image/png")}))}};var De,Dn;(function(s){s[s.Nearest=9728]="Nearest",s[s.Linear=9729]="Linear",s[s.NearestMipmapNearest=9984]="NearestMipmapNearest",s[s.LinearMipmapNearest=9985]="LinearMipmapNearest",s[s.NearestMipmapLinear=9986]="NearestMipmapLinear",s[s.LinearMipmapLinear=9987]="LinearMipmapLinear"})(De||(De={})),(function(s){s[s.ClampToEdge=33071]="ClampToEdge",s[s.MirroredRepeat=33648]="MirroredRepeat",s[s.Repeat=10497]="Repeat"})(Dn||(Dn={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new Map([[Dn.Repeat,Gi],[Dn.ClampToEdge,Ce],[Dn.MirroredRepeat,fs]]),Mu=new Map([[Gi,Dn.Repeat],[Ce,Dn.ClampToEdge],[fs,Dn.MirroredRepeat]]),Xx=new Map([[De.Nearest,Fe],[De.Linear,zt],[De.NearestMipmapNearest,Fl],[De.LinearMipmapNearest,ls],[De.NearestMipmapLinear,ur],[De.LinearMipmapLinear,ri]]),eb=new Map([[Fe,De.Nearest],[zt,De.Linear],[Fl,De.NearestMipmapNearest],[ls,De.LinearMipmapNearest],[ur,De.NearestMipmapLinear],[ri,De.LinearMipmapLinear]]),Yx=new Map([[De.Nearest,Fe],[De.Linear,zt]]),ib=new Map([[Fe,De.Nearest],[zt,De.Linear]]),Kx=s=>eb.has(s),Jx=s=>ib.has(s),$x=s=>Mu.has(s),en=Symbol("threeTexture"),vf=Symbol("threeTextures"),Sn=Symbol("setProperty");class Zx extends ka{get[en](){var t;return(t=this[Lt])===null||t===void 0?void 0:t.values().next().value}get[vf](){return this[Lt]}constructor(t,e){super(t,new Set(e?[e]:[]))}get name(){return this[en].name||""}get minFilter(){return eb.get(this[en].minFilter)}get magFilter(){return ib.get(this[en].magFilter)}get wrapS(){return Mu.get(this[en].wrapS)}get wrapT(){return Mu.get(this[en].wrapT)}get rotation(){return this[en].rotation}get scale(){return Uu(this[en].repeat)}get offset(){return Uu(this[en].offset)}setMinFilter(t){this[Sn]("minFilter",Xx.get(t))}setMagFilter(t){this[Sn]("magFilter",Yx.get(t))}setWrapS(t){this[Sn]("wrapS",bf.get(t))}setWrapT(t){this[Sn]("wrapT",bf.get(t))}setRotation(t){t==null&&(t=0),this[Sn]("rotation",t)}setScale(t){t==null&&(t={u:1,v:1}),this[Sn]("repeat",new Mt(t.u,t.v))}setOffset(t){t==null&&(t={u:0,v:0}),this[Sn]("offset",new Mt(t.u,t.v))}[Sn](t,e){if(((i,n)=>{switch(i){case"minFilter":return Kx(n);case"magFilter":return Jx(n);case"wrapS":case"wrapT":return $x(n);case"rotation":case"repeat":case"offset":return!0;default:throw new Error(`Cannot configure property "${i}" on Sampler`)}})(t,e))for(const i of this[vf])i[t]=e,i.needsUpdate=!0;this[Xt]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=Symbol("image"),_f=Symbol("sampler"),Ef=Symbol("threeTexture");class nb extends ka{get[Ef](){var t;return(t=this[Lt])===null||t===void 0?void 0:t.values().next().value}constructor(t,e){super(t,new Set(e?[e]:[])),this[_f]=new Zx(t,e),this[yf]=new jx(t,e)}get name(){return this[Ef].name||""}set name(t){for(const e of this[Lt])e.name=t}get sampler(){return this[_f]}get source(){return this[yf]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rb,sb,ab;const nr=Symbol("texture"),rr=Symbol("transform"),dh=Symbol("materials"),xf=Symbol("usage"),Vr=Symbol("onUpdate"),da=Symbol("activeVideo");var xt;(function(s){s[s.Base=0]="Base",s[s.MetallicRoughness=1]="MetallicRoughness",s[s.Normal=2]="Normal",s[s.Occlusion=3]="Occlusion",s[s.Emissive=4]="Emissive",s[s.Clearcoat=5]="Clearcoat",s[s.ClearcoatRoughness=6]="ClearcoatRoughness",s[s.ClearcoatNormal=7]="ClearcoatNormal",s[s.SheenColor=8]="SheenColor",s[s.SheenRoughness=9]="SheenRoughness",s[s.Transmission=10]="Transmission",s[s.Thickness=11]="Thickness",s[s.Specular=12]="Specular",s[s.SpecularColor=13]="SpecularColor",s[s.Iridescence=14]="Iridescence",s[s.IridescenceThickness=15]="IridescenceThickness",s[s.Anisotropy=16]="Anisotropy"})(xt||(xt={}));class ss{constructor(t,e,i,n){this[rb]=null,this[sb]={rotation:0,scale:new Mt(1,1),offset:new Mt(0,0)},this[ab]=!1,i&&(this[rr].rotation=i.rotation,this[rr].scale.copy(i.repeat),this[rr].offset.copy(i.offset),this[nr]=new nb(t,i)),this[Vr]=t,this[dh]=n,this[xf]=e}get texture(){return this[nr]}setTexture(t){var e,i;const n=t!=null?t.source[qe]:null,r=(e=this[nr])===null||e===void 0?void 0:e.source[qe];if(r!=null&&r.isVideoTexture?this[da]=!1:!((i=this[nr])===null||i===void 0)&&i.source.animation&&this[nr].source.animation.removeEventListener("enterFrame",this[Vr]),this[nr]=t,n!=null&&n.isVideoTexture){const o=n.image;if(this[da]=!0,o.requestVideoFrameCallback!=null){const l=()=>{this[da]&&(this[Vr](),o.requestVideoFrameCallback(l))};o.requestVideoFrameCallback(l)}else{const l=()=>{this[da]&&(this[Vr](),requestAnimationFrame(l))};requestAnimationFrame(l)}}else t?.source.animation!=null&&t.source.animation.addEventListener("enterFrame",this[Vr]);let a=ae;if(this[dh])for(const o of this[dh]){switch(this[xf]){case xt.Base:o.map=n;break;case xt.MetallicRoughness:a=oe,o.metalnessMap=n,o.roughnessMap=n;break;case xt.Normal:a=oe,o.normalMap=n;break;case xt.Occlusion:a=oe,o.aoMap=n;break;case xt.Emissive:o.emissiveMap=n;break;case xt.Clearcoat:o.clearcoatMap=n;break;case xt.ClearcoatRoughness:o.clearcoatRoughnessMap=n;break;case xt.ClearcoatNormal:o.clearcoatNormalMap=n;break;case xt.SheenColor:o.sheenColorMap=n;break;case xt.SheenRoughness:o.sheenRoughnessMap=n;break;case xt.Transmission:o.transmissionMap=n;break;case xt.Thickness:o.thicknessMap=n;break;case xt.Specular:o.specularIntensityMap=n;break;case xt.SpecularColor:o.specularColorMap=n;break;case xt.Iridescence:o.iridescenceMap=n;break;case xt.IridescenceThickness:o.iridescenceThicknessMap=n;break;case xt.Anisotropy:o.anisotropyMap=n}o.needsUpdate=!0}n&&(n.colorSpace=a,n.rotation=this[rr].rotation,n.repeat=this[rr].scale,n.offset=this[rr].offset),this[Vr]()}}rb=nr,sb=rr,ab=da;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=Symbol("threeMaterial"),Lo=Symbol("threeMaterials"),Sf=Symbol("baseColorTexture"),Cf=Symbol("metallicRoughnessTexture");class tS extends ka{get[Lo](){return this[Lt]}get[ta](){var t;return(t=this[Lt])===null||t===void 0?void 0:t.values().next().value}constructor(t,e){super(t,e);const{map:i,metalnessMap:n}=e.values().next().value;this[Sf]=new ss(t,xt.Base,i,e),this[Cf]=new ss(t,xt.MetallicRoughness,n,e)}get baseColorFactor(){const t=[0,0,0,this[ta].opacity];return this[ta].color.toArray(t),t}get metallicFactor(){return this[ta].metalness}get roughnessFactor(){return this[ta].roughness}get baseColorTexture(){return this[Sf]}get metallicRoughnessTexture(){return this[Cf]}setBaseColorFactor(t){const e=new bt;t instanceof Array?e.fromArray(t):e.set(t);for(const i of this[Lo])i.color.set(e),t instanceof Array&&t.length>3?i.opacity=t[3]:(t=[0,0,0,i.opacity],e.toArray(t));this[Xt]()}setMetallicFactor(t){for(const e of this[Lo])e.metalness=t;this[Xt]()}setRoughnessFactor(t){for(const e of this[Lo])e.roughness=t;this[Xt]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wf,If;const Mf=Symbol("pbrMetallicRoughness"),Tf=Symbol("normalTexture"),Bf=Symbol("occlusionTexture"),Rf=Symbol("emissiveTexture"),le=Symbol("backingThreeMaterial"),Df=Symbol("applyAlphaCutoff"),ph=Symbol("getAlphaMode"),Wr=Symbol("lazyLoadGLTFInfo"),Ah=Symbol("initialize"),Tu=Symbol("getLoadedMaterial"),At=Symbol("ensureMaterialIsLoaded"),Lf=Symbol("gltfIndex"),pa=Symbol("setActive"),us=Symbol("variantIndices"),fh=Symbol("isActive"),Uf=Symbol("modelVariants"),mh=Symbol("name"),Je=Symbol("pbrTextures");class gh extends ka{get[(wf=us,If=Je,le)](){return this[Lt].values().next().value}constructor(t,e,i,n,r,a,o=void 0){super(t,r),this[wf]=new Set,this[If]=new Map,this[Lf]=e,this[fh]=i,this[Uf]=n,this[mh]=a,o==null?this[Ah]():this[Wr]=o}[Ah](){const t=this[Xt],e=this[Lt];this[Mf]=new tS(t,e);const{normalMap:i,aoMap:n,emissiveMap:r}=e.values().next().value;this[Tf]=new ss(t,xt.Normal,i,e),this[Bf]=new ss(t,xt.Occlusion,n,e),this[Rf]=new ss(t,xt.Emissive,r,e);const a=o=>{this[Je].set(o,new ss(t,o,null,e))};a(xt.Clearcoat),a(xt.ClearcoatRoughness),a(xt.ClearcoatNormal),a(xt.SheenColor),a(xt.SheenRoughness),a(xt.Transmission),a(xt.Thickness),a(xt.Specular),a(xt.SpecularColor),a(xt.Iridescence),a(xt.IridescenceThickness),a(xt.Anisotropy)}async[Tu](){if(this[Wr]!=null){const t=await this[Wr].doLazyLoad();return this[Ah](),this[Wr]=void 0,this.ensureLoaded=async()=>{},t}return null}colorFromRgb(t){const e=new bt;return t instanceof Array?e.fromArray(t):e.set(t),e}[At](){if(this[Wr]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[Tu]()}get isLoaded(){return this[Wr]==null}get isActive(){return this[fh]}[pa](t){this[fh]=t}get name(){return this[mh]||""}set name(t){if(this[mh]=t,this[Lt]!=null)for(const e of this[Lt])e.name=t}get pbrMetallicRoughness(){return this[At](),this[Mf]}get normalTexture(){return this[At](),this[Tf]}get occlusionTexture(){return this[At](),this[Bf]}get emissiveTexture(){return this[At](),this[Rf]}get emissiveFactor(){return this[At](),this[le].emissive.toArray()}get index(){return this[Lf]}hasVariant(t){const e=this[Uf].get(t);return e!=null&&this[us].has(e.index)}setEmissiveFactor(t){this[At]();const e=this.colorFromRgb(t);for(const i of this[Lt])i.emissive.set(e);this[Xt]()}[ph](){return this[le].transparent?"BLEND":this[le].alphaTest>0?"MASK":"OPAQUE"}[Df](){this[At]();for(const t of this[Lt])this[ph]()==="MASK"?t.alphaTest==null&&(t.alphaTest=.5):t.alphaTest=void 0,t.needsUpdate=!0}setAlphaCutoff(t){this[At]();for(const e of this[Lt])e.alphaTest=t,e.needsUpdate=!0;this[Df](),this[Xt]()}getAlphaCutoff(){return this[At](),this[le].alphaTest}setDoubleSided(t){this[At]();for(const e of this[Lt])e.side=t?2:0,e.needsUpdate=!0;this[Xt]()}getDoubleSided(){return this[At](),this[le].side==2}setAlphaMode(t){this[At]();const e=(i,n)=>{i.transparent=n,i.depthWrite=!n};for(const i of this[Lt])e(i,t==="BLEND"),i.alphaTest=t==="MASK"?.5:void 0,i.needsUpdate=!0;this[Xt]()}getAlphaMode(){return this[At](),this[ph]()}get emissiveStrength(){return this[At](),this[le].emissiveIntensity}setEmissiveStrength(t){this[At]();for(const e of this[Lt])e.emissiveIntensity=t;this[Xt]()}get clearcoatFactor(){return this[At](),this[le].clearcoat}get clearcoatRoughnessFactor(){return this[At](),this[le].clearcoatRoughness}get clearcoatTexture(){return this[At](),this[Je].get(xt.Clearcoat)}get clearcoatRoughnessTexture(){return this[At](),this[Je].get(xt.ClearcoatRoughness)}get clearcoatNormalTexture(){return this[At](),this[Je].get(xt.ClearcoatNormal)}get clearcoatNormalScale(){return this[At](),this[le].clearcoatNormalScale.x}setClearcoatFactor(t){this[At]();for(const e of this[Lt])e.clearcoat=t;this[Xt]()}setClearcoatRoughnessFactor(t){this[At]();for(const e of this[Lt])e.clearcoatRoughness=t;this[Xt]()}setClearcoatNormalScale(t){this[At]();for(const e of this[Lt])e.clearcoatNormalScale=new Mt(t,t);this[Xt]()}get ior(){return this[At](),this[le].ior}setIor(t){this[At]();for(const e of this[Lt])e.ior=t;this[Xt]()}get sheenColorFactor(){return this[At](),this[le].sheenColor.toArray()}get sheenColorTexture(){return this[At](),this[Je].get(xt.SheenColor)}get sheenRoughnessFactor(){return this[At](),this[le].sheenRoughness}get sheenRoughnessTexture(){return this[At](),this[Je].get(xt.SheenRoughness)}setSheenColorFactor(t){this[At]();const e=this.colorFromRgb(t);for(const i of this[Lt])i.sheenColor.set(e),i.sheen=1;this[Xt]()}setSheenRoughnessFactor(t){this[At]();for(const e of this[Lt])e.sheenRoughness=t,e.sheen=1;this[Xt]()}get transmissionFactor(){return this[At](),this[le].transmission}get transmissionTexture(){return this[At](),this[Je].get(xt.Transmission)}setTransmissionFactor(t){this[At]();for(const e of this[Lt])e.transmission=t;this[Xt]()}get thicknessFactor(){return this[At](),this[le].thickness}get thicknessTexture(){return this[At](),this[Je].get(xt.Thickness)}get attenuationDistance(){return this[At](),this[le].attenuationDistance}get attenuationColor(){return this[At](),this[le].attenuationColor.toArray()}setThicknessFactor(t){this[At]();for(const e of this[Lt])e.thickness=t;this[Xt]()}setAttenuationDistance(t){this[At]();for(const e of this[Lt])e.attenuationDistance=t;this[Xt]()}setAttenuationColor(t){this[At]();const e=this.colorFromRgb(t);for(const i of this[Lt])i.attenuationColor.set(e);this[Xt]()}get specularFactor(){return this[At](),this[le].specularIntensity}get specularTexture(){return this[At](),this[Je].get(xt.Specular)}get specularColorFactor(){return this[At](),this[le].specularColor.toArray()}get specularColorTexture(){return this[At](),this[Je].get(xt.SheenColor)}setSpecularFactor(t){this[At]();for(const e of this[Lt])e.specularIntensity=t;this[Xt]()}setSpecularColorFactor(t){this[At]();const e=this.colorFromRgb(t);for(const i of this[Lt])i.specularColor.set(e);this[Xt]()}get iridescenceFactor(){return this[At](),this[le].iridescence}get iridescenceTexture(){return this[At](),this[Je].get(xt.Iridescence)}get iridescenceIor(){return this[At](),this[le].iridescenceIOR}get iridescenceThicknessMinimum(){return this[At](),this[le].iridescenceThicknessRange[0]}get iridescenceThicknessMaximum(){return this[At](),this[le].iridescenceThicknessRange[1]}get iridescenceThicknessTexture(){return this[At](),this[Je].get(xt.IridescenceThickness)}setIridescenceFactor(t){this[At]();for(const e of this[Lt])e.iridescence=t;this[Xt]()}setIridescenceIor(t){this[At]();for(const e of this[Lt])e.iridescenceIOR=t;this[Xt]()}setIridescenceThicknessMinimum(t){this[At]();for(const e of this[Lt])e.iridescenceThicknessRange[0]=t;this[Xt]()}setIridescenceThicknessMaximum(t){this[At]();for(const e of this[Lt])e.iridescenceThicknessRange[1]=t;this[Xt]()}get anisotropyStrength(){return this[At](),this[le].anisotropy}get anisotropyRotation(){return this[At](),this[le].anisotropyRotation}get anisotropyTexture(){return this[At](),this[Je].get(xt.Anisotropy)}setAnisotropyStrength(t){this[At]();for(const e of this[Lt])e.anisotropy=t;this[Xt]()}setAnisotropyRotation(t){this[At]();for(const e of this[Lt])e.anisotropyRotation=t;this[Xt]()}}let ob=class{constructor(s){this.name="",this.children=new Array,this.name=s}};class bh extends ob{constructor(t,e,i,n){super(t.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=t;const{gltf:r,threeGLTF:a,threeObjectMap:o}=n;this.parser=a.parser,this.modelVariants=i,this.mesh.userData.variantData=i;const l=o.get(t.material);l.materials!=null?this.initialMaterialIdx=this.activeMaterialIdx=l.materials:console.error(`Primitive (${t.name}) missing initial material reference.`);const c=t.userData.associations||{};if(c.meshes==null)return void console.error("Mesh is missing primitive index association");const h=((r.meshes||[])[c.meshes].primitives||[])[c.primitives];if(h!=null){if(h.material!=null)this.materials.set(h.material,e[h.material]);else{const u=e.findIndex((d=>d.name==="Default"));u>=0?this.materials.set(u,e[u]):console.warn("gltfPrimitive has no material!")}if(h.extensions&&h.extensions.KHR_materials_variants){const u=h.extensions.KHR_materials_variants,d=a.parser.json.extensions.KHR_materials_variants.variants;for(const p of u.mappings){const f=e[p.material];this.materials.set(p.material,f);for(const m of p.variants){const{name:A}=d[m];this.variantToMaterialMap.set(m,f),f[us].add(m),i.has(A)||i.set(A,{name:A,index:m})}}}}else console.error("Mesh primitive definition is missing.")}async setActiveMaterial(t){const e=this.materials.get(t);if(t!==this.activeMaterialIdx){const i=e[Lt],n=await e[Tu]();this.mesh.material=n??i.values().next().value,this.parser.assignFinalMaterial(this.mesh),i.add(this.mesh.material),this.activeMaterialIdx=t}return this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(t){return this.materials.get(t)}async enableVariant(t){if(t==null)return this.setActiveMaterial(this.initialMaterialIdx);if(this.variantToMaterialMap!=null&&this.modelVariants.has(t)){const e=this.modelVariants.get(t);return this.enableVariantHelper(e.index)}return null}async enableVariantHelper(t){if(this.variantToMaterialMap!=null&&t!=null){const e=this.variantToMaterialMap.get(t);if(e!=null)return this.setActiveMaterial(e.index)}return null}async instantiateVariants(){if(this.variantToMaterialMap!=null)for(const t of this.variantToMaterialMap.keys()){const e=this.mesh.userData.variantMaterials.get(t);if(e.material!=null)continue;const i=await this.enableVariantHelper(t);i!=null&&(e.material=i)}}get variantInfo(){return this.variantToMaterialMap}addVariant(t,e){if(!this.ensureVariantIsUnused(e))return!1;this.modelVariants.has(e)||this.modelVariants.set(e,{name:e,index:this.modelVariants.size});const i=this.modelVariants.get(e).index;return t[us].add(i),this.variantToMaterialMap.set(i,t),this.materials.set(t.index,t),this.updateVariantUserData(i,t),!0}deleteVariant(t){if(this.variantInfo.has(t)){this.variantInfo.delete(t);const e=this.mesh.userData.variantMaterials;e?.delete(t)}}updateVariantUserData(t,e){e[us].add(t),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(t,{material:e[Lt].values().next().value,gltfMaterialIndex:e.index})}ensureVariantIsUnused(t){const e=this.modelVariants.get(t);return e==null||!this.variantInfo.has(e.index)||(console.warn(`Primitive cannot add variant '${t}' for this material, it already exists.`),!1)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pf,Ff,Nf,Qf,kf,Of;const Yn=Symbol("materials"),Uo=Symbol("hierarchy"),Gf=Symbol("roots"),nn=Symbol("primitives"),lb=Symbol("prepareVariantsForExport"),cb=Symbol("switchVariant"),hb=Symbol("materialFromPoint"),Bu=Symbol("nodeFromPoint"),ub=Symbol("nodeFromIndex"),ke=Symbol("variantData"),Ru=Symbol("availableVariants"),vh=Symbol("modelOnUpdate"),Hf=Symbol("cloneMaterial");class eS{constructor(t,e,i,n){this.gltf=t,this.gltfElementMap=e,this.mapKey=i,this.doLazyLoad=n}}class iS{constructor(t,e=()=>{}){this[Pf]=new Array,this[Ff]=new Array,this[Nf]=new Array,this[Qf]=new Array,this[kf]=()=>{},this[Of]=new Map,this[vh]=e;const{gltf:i,threeGLTF:n,gltfElementMap:r}=t;for(const[l,c]of i.materials.entries()){const h=r.get(c);if(h!=null)this[Yn].push(new gh(e,l,!0,this[ke],h,c.name));else{const u=(i.materials||[])[l],d=new Set;r.set(u,d);const p=async()=>{const f=await n.parser.getDependency("material",l);return d.add(f),f};this[Yn].push(new gh(e,l,!1,this[ke],d,c.name,new eS(i,r,u,p)))}}const a=new Map,o=new Array;for(const l of n.scene.children)o.push(l);for(;o.length>0;){const l=o.pop();let c=null;l instanceof Zt?(c=new bh(l,this.materials,this[ke],t),this[nn].push(c)):c=new ob(l.name);const h=a.get(l);h!=null?h.children.push(c):this[Gf].push(c),this[Uo].push(c);for(const u of l.children)o.push(u),a.set(l,c)}}get materials(){return this[Yn]}[(Pf=Yn,Ff=Uo,Nf=Gf,Qf=nn,kf=vh,Of=ke,Ru)](){const t=Array.from(this[ke].values());return t.sort(((e,i)=>e.index-i.index)),t.map((e=>e.name))}getMaterialByName(t){const e=this[Yn].filter((i=>i.name===t));return e.length>0?e[0]:null}[ub](t,e){const i=this[Uo].find((n=>{if(n instanceof bh){const{meshes:r,primitives:a}=n.mesh.userData.associations;if(r==t&&a==e)return!0}return!1}));return i??null}[Bu](t){return this[Uo].find((e=>e instanceof bh&&e.mesh===t.object))}[hb](t){return this[Bu](t).getActiveMaterial()}async[cb](t){for(const e of this[nn])await e.enableVariant(t);for(const e of this.materials)e[pa](!1);for(const e of this[nn])this.materials[e.getActiveMaterial().index][pa](!0)}async[lb](){const t=new Array;for(const e of this[nn])t.push(e.instantiateVariants());await Promise.all(t)}[Hf](t,e){const i=this.materials[t];i.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const n=i[Lt],r=new Set;for(const[o,l]of n.entries()){const c=l.clone();c.name=e+(n.size>1?"_inst"+o:""),r.add(c)}const a=new gh(this[vh],this[Yn].length,!1,this[ke],r,e);return this[Yn].push(a),a}createMaterialInstanceForVariant(t,e,i,n=!0){let r=null;for(const a of this[nn]){const o=this[ke].get(i);o!=null&&a.variantInfo.has(o.index)||a.getMaterial(t)!=null&&(this.hasVariant(i)||this.createVariant(i),r==null&&(r=this[Hf](t,e)),a.addVariant(r,i))}if(n&&r!=null){r[pa](!0),this.materials[t][pa](!1);for(const a of this[nn])a.enableVariant(i)}return r}createVariant(t){this[ke].has(t)?console.warn(`Variant '${t}'' already exists`):this[ke].set(t,{name:t,index:this[ke].size})}hasVariant(t){return this[ke].has(t)}setMaterialToVariant(t,e){if(this[Ru]().find((i=>i===e))!=null)if(t<0||t>=this.materials.length)console.error("setMaterialToVariant(): materialIndex is out of bounds.");else for(const i of this[nn]){const n=i.getMaterial(t);n!=null&&i.addVariant(n,e)}else console.warn(`Can't add material to '${e}', the variant does not exist.'`)}updateVariantName(t,e){const i=this[ke].get(t);i!=null&&(i.name=e,this[ke].set(e,i),this[ke].delete(t))}deleteVariant(t){const e=this[ke].get(t);if(e!=null){for(const i of this.materials)i.hasVariant(t)&&i[us].delete(e.index);for(const i of this[nn])i.deleteVariant(e.index);this[ke].delete(t)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yh=function(s,t,e,i){for(var n,r=arguments.length,a=r<3?t:i,o=s.length-1;o>=0;o--)(n=s[o])&&(a=(r<3?n(a):r>3?n(t,e,a):n(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a};const al=Symbol("currentGLTF"),ol=Symbol("originalGltfJson"),sr=Symbol("model"),_h=Symbol("getOnUpdateMethod"),ea=Symbol("buildTexture");/* @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS extends Zt{constructor(){super(void 0,new ui({depthWrite:!1})),this.height=0,this.radius=0,this.resolution=0,this.userData.noHit=!0}get map(){return this.material.map}set map(t){this.material.map=t}isUsable(){return this.height>0&&this.radius>0&&this.geometry!=null&&this.map!=null}updateGeometry(t=this.height,e=this.radius,i=128){t==this.height&&e==this.radius&&i==this.resolution||(this.height=t,this.radius=e,this.resolution=i,t>0&&e>0&&(this.geometry.dispose(),this.geometry=(function(n,r,a){const o=new $u(r,2*a,a);o.scale(1,1,-1);const l=o.getAttribute("position"),c=new B;for(let h=0;h<l.count;++h)if(c.fromBufferAttribute(l,h),c.y<0){const u=3*-n/2,d=c.y<u?-n/c.y:1-c.y*c.y/(3*u*u);c.multiplyScalar(d),c.toArray(l.array,3*h)}return l.needsUpdate=!0,o})(t,e,i)))}}const Po=new B,Eh=new B,xh=new B,Fo=new Ct,zf=new ni,Vf=new Ke;class db extends gE{constructor(t){super(document.createElement("div")),this.normal=new B(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=t.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(t.position),this.updateNormal(t.normal),this.surface=t.surface}get facingCamera(){return!this.element.classList.contains("hide")}show(){this.facingCamera&&this.initialized||this.updateVisibility(!0)}hide(){!this.facingCamera&&this.initialized||this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(t){if(t==null)return;const e=cn(t)[0].terms;for(let i=0;i<3;++i)this.position.setComponent(i,ki(e[i]).number);this.updateMatrixWorld()}updateNormal(t){if(t==null)return;const e=cn(t)[0].terms;for(let i=0;i<3;++i)this.normal.setComponent(i,e[i].number)}updateSurface(){const{mesh:t,tri:e,bary:i}=this;if(t==null||e==null||i==null)return;t.getVertexPosition(e.x,Po),t.getVertexPosition(e.y,Eh),t.getVertexPosition(e.z,xh),Po.toArray(Fo.elements,0),Eh.toArray(Fo.elements,3),xh.toArray(Fo.elements,6),this.position.copy(i).applyMatrix3(Fo);const n=this.parent;n.worldToLocal(t.localToWorld(this.position)),zf.set(Po,Eh,xh),zf.getNormal(this.normal).transformDirection(t.matrixWorld);const r=n.parent;Vf.setFromAxisAngle(Po.set(0,1,0),-r.rotation.y),this.normal.applyQuaternion(Vf)}orient(t){this.pivot.style.transform=`rotate(${t}rad)`}updateVisibility(t){this.element.classList.toggle("hide",!t),this.slot.assignedNodes().forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;const i=e,n=i.dataset.visibilityAttribute;if(n!=null){const r=`data-${n}`;i.toggleAttribute(r,t)}i.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:t}}))})),this.initialized=!0}}const rS={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},sS={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};function Wf(s,t,e){return(1-e)*s+e*t}/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS extends ne{constructor(t,e,i){super(),this.camera=new Ms,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new Xm,this.horizontalBlurMaterial=new ai(rS),this.verticalBlurMaterial=new ai(sS),this.intensity=0,this.softness=1,this.boundingBox=new Ye,this.size=new B,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:n}=this;n.rotation.x=Math.PI/2,n.left=-.5,n.right=.5,n.bottom=-.5,n.top=.5,this.add(n);const r=new dn,a=new ui({opacity:1,transparent:!0,side:1});this.floor=new Zt(r,a),this.floor.userData.noHit=!0,n.add(this.floor),this.blurPlane=new Zt(r),this.blurPlane.visible=!1,n.add(this.blurPlane),t.target.add(this),this.depthMaterial.onBeforeCompile=function(o){o.fragmentShader=o.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.depthMaterial.side=2,this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(t,e,i)}setScene(t,e,i){const{boundingBox:n,size:r,rotation:a,position:o}=this;if(this.isAnimated=t.animationNames.length>0,this.boundingBox.copy(t.boundingBox),this.size.copy(t.size),this.maxDimension=Math.max(r.x,r.y,r.z)*(this.isAnimated?2:1),this.boundingBox.getCenter(o),i==="back"){const{min:l,max:c}=n;[l.y,l.z]=[l.z,l.y],[c.y,c.z]=[c.z,c.y],[r.y,r.z]=[r.z,r.y],a.x=Math.PI/2,a.y=Math.PI}else a.x=0,a.y=0;if(this.isAnimated){const l=n.min.y,c=n.max.y;r.y=this.maxDimension,n.expandByVector(r.subScalar(this.maxDimension).multiplyScalar(-.5)),n.min.y=l,n.max.y=c,r.set(this.maxDimension,c-l,this.maxDimension)}i==="bottom"?o.y=n.min.y:o.z=n.min.y,this.setSoftness(e)}setSoftness(t){this.softness=t;const{size:e,camera:i}=this,n=this.isAnimated?2:1,r=n*Math.pow(2,9-3*t);this.setMapSize(r);const a=e.y/2,o=e.y*n;i.near=0,i.far=Wf(o,a,t),this.depthMaterial.opacity=1/t,i.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(t){const{size:e}=this;this.isAnimated&&(t*=2);const i=Math.floor(e.x>e.z?t:t*e.x/e.z),n=Math.floor(e.x>e.z?t*e.z/e.x:t),r=10+i,a=10+n;if(this.renderTarget==null||this.renderTarget.width===r&&this.renderTarget.height===a||(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const o={format:Ae};this.renderTarget=new pi(r,a,o),this.renderTargetBlur=new pi(r,a,o),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(e.x*(1+10/i),e.z*(1+10/n),1),this.needsUpdate=!0}setIntensity(t){this.intensity=t,t>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=t*Wf(.3,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(t){this.floor.position.z=-t+this.gap()}gap(){return .001*this.maxDimension}render(t,e){e.overrideMaterial=this.depthMaterial;const i=t.getClearAlpha();t.setClearAlpha(0),this.floor.visible=!1;const n=t.xr.enabled;t.xr.enabled=!1;const r=t.getRenderTarget();t.setRenderTarget(this.renderTarget),t.render(e,this.camera),e.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(t),t.xr.enabled=n,t.setRenderTarget(r),t.setClearAlpha(i)}blurShadow(t){const{camera:e,horizontalBlurMaterial:i,verticalBlurMaterial:n,renderTarget:r,renderTargetBlur:a,blurPlane:o}=this;o.visible=!0,o.material=i,i.uniforms.h.value=1/this.renderTarget.width,i.uniforms.tDiffuse.value=this.renderTarget.texture,t.setRenderTarget(a),t.render(o,e),o.material=n,n.uniforms.v.value=1/this.renderTarget.height,n.uniforms.tDiffuse.value=this.renderTargetBlur.texture,t.setRenderTarget(r),t.render(o,e),o.visible=!1}dispose(){this.renderTarget!=null&&this.renderTarget.dispose(),this.renderTargetBlur!=null&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new B,qf=new B,jf=new B,No=new class{constructor(s,t,e=0,i=1/0){this.ray=new Fa(s,t),this.near=e,this.far=i,this.camera=null,this.layers=new ju,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(s,t){this.ray.set(s,t)}setFromCamera(s,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(s.x,s.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(s.x,s.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(s){return Ap.identity().extractRotation(s.matrixWorld),this.ray.origin.setFromMatrixPosition(s.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ap),this}intersectObject(s,t=!0,e=[]){return Eu(s,this,e,t),e.sort(fp),e}intersectObjects(s,t=!0,e=[]){for(let i=0,n=s.length;i<n;i++)Eu(s[i],this,e,t);return e.sort(fp),e}},oS=new B,ia=new Mt;class lS extends mr{constructor({canvas:t,element:e,width:i,height:n}){super(),this.annotationRenderer=new bE,this.effectRenderer=null,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.appendedAnimations=[],this.markedAnimations=[],this.camera=new Pe(45,1,.1,100),this.xrCamera=null,this.url=null,this.pivot=new ne,this.target=new ne,this.animationNames=[],this.boundingBox=new Ye,this.boundingSphere=new fi,this.size=new B,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.toneMapping=7,this.canScale=!0,this.isDirty=!1,this.goalTarget=new B,this.targetDamperX=new Xe,this.targetDamperY=new Xe,this.targetDamperZ=new Xe,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.groundedSkybox=new nS,this.name="ModelScene",this.element=e,this.canvas=t,this.camera=new Pe(45,1,.1,100),this.camera.name="MainCamera",this.add(this.pivot),this.pivot.name="Pivot",this.pivot.add(this.target),this.setSize(i,n),this.target.name="Target",this.mixer=new w0(this.target);const{domElement:r}=this.annotationRenderer,{style:a}=r;a.display="none",a.pointerEvents="none",a.position="absolute",a.top="0",this.element.shadowRoot.querySelector(".default").appendChild(r),this.schemaElement.setAttribute("type","application/ld+json")}get context(){return this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(t){this.reset(),this._model=t,this.target.add(t),await this.setupScene()}async setSource(t,e=()=>{}){if(!t||t===this.url)return void e(1);if(this.reset(),this.url=t,this.externalRenderer!=null){const o=await this.externalRenderer.load(e);return this.boundingSphere.radius=o.framedRadius,void(this.idealAspect=o.fieldOfViewAspect)}let i;this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);try{i=await new Promise((async(o,l)=>{this.cancelPendingSourceChange=()=>l();try{o(await this.element[Kt].loader.load(t,this.element,e))}catch(c){l(c)}}))}catch(o){if(o==null)return;throw o}this.cancelPendingSourceChange=null,this.reset(),this.url=t,this._currentGLTF=i,i!=null&&(this._model=i.scene,this.target.add(i.scene));const{animations:n}=i,r=new Map,a=[];for(const o of n)r.set(o.name,o),a.push(o.name);this.animations=n,this.animationsByName=r,this.animationNames=a,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity),this.setGroundedSkybox()}reset(){this.url=null,this.renderCount=0,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:t}=this;t!=null&&(t.removeFromParent(),this._model=null);const e=this._currentGLTF;e!=null&&(e.dispose(),this._currentGLTF=null),this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}dispose(){this.reset(),this.shadow!=null&&(this.shadow.dispose(),this.shadow=null),this.element[al]=null,this.element[ol]=null,this.element[sr]=null}get currentGLTF(){return this._currentGLTF}setSize(t,e){if(this.width!==t||this.height!==e){if(this.width=Math.max(t,1),this.height=Math.max(e,1),this.annotationRenderer.setSize(t,e),this.aspect=this.width/this.height,this.externalRenderer!=null){const i=window.devicePixelRatio;this.externalRenderer.resize(t*i,e*i)}this.queueRender()}}markBakedShadow(t){t.userData.noHit=!0,this.bakedShadows.add(t)}unmarkBakedShadow(t){t.userData.noHit=!1,t.visible=!0,this.bakedShadows.delete(t),this.boundingBox.expandByObject(t)}findBakedShadows(t){const e=new Ye;t.traverse((i=>{const n=i;if(!n.material||!n.material.transparent)return;e.setFromObject(n);const r=e.getSize(oS),a=Math.min(r.x,r.y,r.z);Math.max(r.x,r.y,r.z)<100*a||this.markBakedShadow(n)}))}checkBakedShadows(){const{min:t,max:e}=this.boundingBox,i=new Ye;this.boundingBox.getSize(this.size);for(const n of this.bakedShadows)i.setFromObject(n),i.min.y<t.y+this.size.y/100&&i.min.x<=t.x&&i.max.x>=e.x&&i.min.z<=t.z&&i.max.z>=e.z||i.min.z<t.z+this.size.z/100&&i.min.x<=t.x&&i.max.x>=e.x&&i.min.y<=t.y&&i.max.y>=e.y||this.unmarkBakedShadow(n)}applyTransform(){const{model:t}=this;if(t==null)return;const e=cn(this.element.orientation)[0].terms,i=ki(e[0]).number,n=ki(e[1]).number,r=ki(e[2]).number;t.quaternion.setFromEuler(new Ai(n,r,i,"YXZ"));const a=cn(this.element.scale)[0].terms;t.scale.set(a[0].number,a[1].number,a[2].number)}updateBoundingBox(){const{model:t}=this;if(t==null)return;this.target.remove(t),this.findBakedShadows(t);const e=(i,n)=>i.expandByPoint(n);this.setBakedShadowVisibility(!1),this.boundingBox=Eo(t,e,new Ye),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach((i=>this.unmarkBakedShadow(i))),this.boundingBox=Eo(t,e,new Ye)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(t)}async updateFraming(){const{model:t}=this;if(t==null)return;this.target.remove(t),this.setBakedShadowVisibility(!1);const{center:e}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,e.copy(this.getTarget()),this.boundingSphere.radius=Math.sqrt(Eo(t,((i,n)=>Math.max(i,e.distanceToSquared(n))),0)),this.idealAspect=Eo(t,((i,n)=>{n.sub(e);const r=Math.sqrt(n.x*n.x+n.z*n.z);return Math.max(i,r/(this.idealCameraDistance()-Math.abs(n.y)))}),0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(t)}setBakedShadowVisibility(t=this.shadowIntensity<=0){for(const e of this.bakedShadows)e.visible=t}idealCameraDistance(){const t=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(t)}adjustedFoV(t){const e=Math.tan(t/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(e)*180/Math.PI}getNDC(t,e){if(this.xrCamera!=null)ia.set(t/window.screen.width,e/window.screen.height);else{const i=this.element.getBoundingClientRect();ia.set((t-i.x)/this.width,(e-i.y)/this.height)}return ia.multiplyScalar(2).subScalar(1),ia.y*=-1,ia}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(t,e){this.element[Kt].arRenderer.presentedScene!==this&&(this.environment=t,this.setBackground(e),this.queueRender())}setBackground(t){this.groundedSkybox.map=t,this.groundedSkybox.isUsable()?(this.target.add(this.groundedSkybox),this.background=null):(this.target.remove(this.groundedSkybox),this.background=t)}farRadius(){return this.boundingSphere.radius*(this.groundedSkybox.parent!=null?10:1)}setGroundedSkybox(){const t=cn(this.element.skyboxHeight)[0].terms[0],e=ki(t).number,i=10*this.boundingSphere.radius;this.groundedSkybox.updateGeometry(e,i),this.groundedSkybox.position.y=e-(this.shadow?2*this.shadow.gap():0),this.setBackground(this.groundedSkybox.map)}setTarget(t,e,i){this.goalTarget.set(-t,-e,-i)}setTargetDamperDecayTime(t){this.targetDamperX.setDecayTime(t),this.targetDamperY.setDecayTime(t),this.targetDamperZ.setDecayTime(t)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}getDynamicTarget(){return this.target.position.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(1e4)}updateTarget(t){const e=this.goalTarget,i=this.target.position;if(e.equals(i))return!1;{const n=this.boundingSphere.radius/10;let{x:r,y:a,z:o}=i;return r=this.targetDamperX.update(r,e.x,t,n),a=this.targetDamperY.update(a,e.y,t,n),o=this.targetDamperZ.update(o,e.z,t,n),this.groundedSkybox.position.x=-r,this.groundedSkybox.position.z=-o,this.target.position.set(r,a,o),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(t,e){const{x:i,z:n}=this.position;this.yaw=Math.atan2(t-i,e-n)}get model(){return this._model}set yaw(t){this.pivot.rotation.y=t,this.groundedSkybox.rotation.y=-t,this.queueRender()}get yaw(){return this.pivot.rotation.y}set animationTime(t){this.mixer.setTime(t),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const t=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop!==bl||1&~t?this.currentAnimationAction.time:this.duration-this.currentAnimationAction.time}return 0}set animationTimeScale(t){this.mixer.timeScale=t}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(t=null,e=0,i=2201,n=1/0){if(this._currentGLTF==null)return;const{animations:r}=this;if(r==null||r.length===0)return;let a=null;if(t!=null&&(a=this.animationsByName.get(t),a==null)){const o=parseInt(t);!isNaN(o)&&o>=0&&o<r.length&&(a=r[o])}a==null&&(a=r[0]);try{const{currentAnimationAction:o}=this,l=this.mixer.clipAction(a,this);l.timeScale!=this.element.timeScale&&(l.timeScale=this.element.timeScale),this.currentAnimationAction=l,this.element.paused?this.mixer.stopAllAction():(l.paused=!1,o!=null&&l!==o?l.crossFadeFrom(o,e,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),l.setLoop(i,n),l.enabled=!0,l.clampWhenFinished=!0,l.play()}catch(o){console.error(o)}}appendAnimation(t="",e=2201,i=1/0,n=1,r=1,a=!1,o=!1,l=!0,c=null,h=!1){if(this._currentGLTF==null||t===this.element.animationName)return;const{animations:u}=this;if(u==null||u.length===0)return;let d=null;if(t&&(d=this.animationsByName.get(t)),d!=null){typeof i=="string"?isNaN(i)?(i=1/0,console.warn("Invalid repetitionCount value, repetitionCount is set to Infinity")):i=Math.max(parseInt(i),1):typeof i=="number"&&i<1&&(i=1),i===1&&e!==Ma&&(e=Ma),typeof n=="string"&&(isNaN(n)?(n=1,console.warn("Invalid weight value, weight is set to 1")):n=parseFloat(n)),typeof r=="string"&&(isNaN(r)?(r=1,console.warn("Invalid timeScale value, timeScale is set to 1")):r=parseFloat(r)),typeof a=="string"&&(a.toLowerCase().trim()==="true"?a=!0:a.toLowerCase().trim()==="false"?a=!1:isNaN(a)?(a=!1,console.warn("Invalid fade value, fade is set to false")):a=parseFloat(a)),typeof o=="string"&&(o.toLowerCase().trim()==="true"?o=!0:o.toLowerCase().trim()==="false"?o=!1:isNaN(o)?(o=!1,console.warn("Invalid warp value, warp is set to false")):o=parseFloat(o)),typeof c=="string"&&(isNaN(c)||(c=parseFloat(c)));try{const p=this.mixer.existingAction(d)||this.mixer.clipAction(d,this),f=p.timeScale;h&&this.appendedAnimations.includes(t)&&(this.markedAnimations.map((m=>m.name)).includes(t)||this.markedAnimations.push({name:t,loopMode:e,repetitionCount:i})),typeof c=="number"&&(p.time=Math.min(Math.max(c,0),d.duration)),typeof a=="boolean"&&a?p.fadeIn(1.25):typeof a=="number"?p.fadeIn(Math.max(a,0)):n>=0&&(p.weight=Math.min(Math.max(n,0),1)),typeof o=="boolean"&&o?p.warp(l?f:0,r,1.25):typeof o=="number"?p.warp(l?f:0,r,Math.max(o,0)):p.timeScale=r,p.isRunning()||(p.time==d.duration&&p.stop(),p.setLoop(e,i),p.paused=!1,p.enabled=!0,p.clampWhenFinished=!0,p.play()),this.appendedAnimations.includes(t)||this.element[nt].appendedAnimations.push(t)}catch(p){console.error(p)}}}detachAnimation(t="",e=!0){if(this._currentGLTF==null||t===this.element.animationName)return;const{animations:i}=this;if(i==null||i.length===0)return;let n=null;if(t&&(n=this.animationsByName.get(t)),n!=null){typeof e=="string"&&(e.toLowerCase().trim()==="true"?e=!0:e.toLowerCase().trim()==="false"?e=!1:isNaN(e)?(e=!0,console.warn("Invalid fade value, fade is set to true")):e=parseFloat(e));try{const r=this.mixer.existingAction(n)||this.mixer.clipAction(n,this);typeof e=="boolean"&&e?r.fadeOut(1.5):typeof e=="number"?r.fadeOut(Math.max(e,0)):r.stop();const a=this.element[nt].appendedAnimations.filter((o=>o!==t));this.element[nt].appendedAnimations=a}catch(r){console.error(r)}}}updateAnimationLoop(t="",e=2201,i=1/0){if(this._currentGLTF==null||t===this.element.animationName)return;const{animations:n}=this;if(n==null||n.length===0)return;let r=null;if(t&&(r=this.animationsByName.get(t)),r!=null)try{const a=this.mixer.existingAction(r)||this.mixer.clipAction(r,this);a.stop(),a.setLoop(e,i),a.play()}catch(a){console.error(a)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(t){this.mixer.update(t),this.queueShadowRender()}subscribeMixerEvent(t,e){this.mixer.addEventListener(t,e)}updateShadow(){const t=this.shadow;if(t!=null){const e=this.element.arPlacement==="wall"?"back":"bottom";t.setScene(this,this.shadowSoftness,e),t.needsUpdate=!0}}renderShadow(t){const e=this.shadow;e!=null&&e.needsUpdate==1&&(e.render(t,this),e.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(t){if(this.shadowIntensity=t,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(t<=0&&this.shadow==null))){if(this.shadow==null){const e=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new aS(this,this.shadowSoftness,e)}this.shadow.setIntensity(t)}}setShadowSoftness(t){this.shadowSoftness=t;const e=this.shadow;e?.setSoftness(t)}setShadowOffset(t){const e=this.shadow;e?.setOffset(t)}getHit(t=this){return No.intersectObject(t,!0).find((e=>e.object.visible&&!e.object.userData.noHit))}hitFromController(t,e=this){return No.setFromXRController(t),this.getHit(e)}hitFromPoint(t,e=this){return No.setFromCamera(t,this.getCamera()),this.getHit(e)}positionAndNormalFromPoint(t,e=this){var i;const n=this.hitFromPoint(t,e);return n==null?null:{position:n.point,normal:n.face!=null?n.face.normal.clone().applyNormalMatrix(new Ct().getNormalMatrix(n.object.matrixWorld)):No.ray.direction.clone().multiplyScalar(-1),uv:(i=n.uv)!==null&&i!==void 0?i:null}}surfaceFromPoint(t,e=this){const i=this.element.model;if(i==null)return null;const n=this.hitFromPoint(t,e);if(n==null||n.face==null)return null;const r=i[Bu](n),{meshes:a,primitives:o}=r.mesh.userData.associations,l=new B,c=new B,h=new B,{a:u,b:d,c:p}=n.face,f=n.object;f.getVertexPosition(u,l),f.getVertexPosition(d,c),f.getVertexPosition(p,h);const m=new ni(l,c,h),A=new B;return m.getBarycoord(f.worldToLocal(n.point),A),`${a} ${o} ${u} ${d} ${p} ${A.x.toFixed(3)} ${A.y.toFixed(3)} ${A.z.toFixed(3)}`}addHotspot(t){this.target.add(t),this.annotationRenderer.domElement.appendChild(t.element),this.updateSurfaceHotspot(t)}removeHotspot(t){this.target.remove(t)}forHotspots(t){const{children:e}=this.target;for(let i=0,n=e.length;i<n;i++){const r=e[i];r instanceof db&&t(r)}}updateSurfaceHotspot(t){if(t.surface==null||this.element.model==null)return;const e=cn(t.surface)[0].terms;if(e.length!=8)return void console.warn(t.surface+" does not have exactly 8 numbers.");const i=this.element.model[ub](e[0].number,e[1].number);if(i==null)return void console.warn(t.surface+" does not match a node/primitive in this glTF! Skipping this hotspot.");const n=i.mesh.geometry.attributes.position.count,r=new B(e[2].number,e[3].number,e[4].number);if(r.x>=n||r.y>=n||r.z>=n)return void console.warn(t.surface+" vertex indices out of range in this glTF! Skipping this hotspot.");const a=new B(e[5].number,e[6].number,e[7].number);t.mesh=i.mesh,t.tri=r,t.bary=a,t.updateSurface()}animateSurfaceHotspots(){this.element.paused||this.forHotspots((t=>{t.updateSurface()}))}updateHotspotsVisibility(t){this.forHotspots((e=>{Sh.copy(t),qf.setFromMatrixPosition(e.matrixWorld),Sh.sub(qf),jf.copy(e.normal).transformDirection(this.target.matrixWorld),Sh.dot(jf)<0?e.hide():e.show()}))}orientHotspots(t){this.forHotspots((e=>{e.orient(t)}))}setHotspotsVisibility(t){this.forHotspots((e=>{e.visible=t}))}updateSchema(t){var e;const{schemaElement:i,element:n}=this,{alt:r,poster:a,iosSrc:o}=n;if(t!=null){const l=[{"@type":"MediaObject",contentUrl:t,encodingFormat:((e=t.split(".").pop())===null||e===void 0?void 0:e.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];o&&l.push({"@type":"MediaObject",contentUrl:o,encodingFormat:"model/vnd.usdz+zip"});const c={"@context":"http://schema.org/","@type":"3DModel",image:a??void 0,name:r??void 0,encoding:l};i.textContent=JSON.stringify(c),document.head.appendChild(i)}else i.parentElement!=null&&i.parentElement.removeChild(i)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(t){const e={progress:0,completed:!1};return this.ongoingActivities.add(e),this.ongoingActivityCount===1&&this.announceTotalProgress(e,0,t),i=>{let n;return n=Math.max(Qi(i,0,1),e.progress),n!==e.progress&&this.announceTotalProgress(e,n,t),e.progress}}announceTotalProgress(t,e,i){let n=0,r=0;e==1&&(t.completed=!0);for(const l of this.ongoingActivities){const{progress:c}=l;n+=1-c,l.completed&&r++}const a=t.progress;t.progress=e,this.totalProgress+=(e-a)*(1-this.totalProgress)/n;const o=r===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:o,reason:i}})),r===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xf,Yf,Kf,Jf,$f,Zf,tm,em,im,nm,rm,sm,am,Qo=function(s,t,e,i){for(var n,r=arguments.length,a=r<3?t:i,o=s.length-1;o>=0;o--)(n=s[o])&&(a=(r<3?n(a):r>3?n(t,e,a):n(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a};const Rn=document.createElement("canvas"),Ch=Symbol("fallbackResizeHandler"),om=Symbol("defaultAriaLabel"),ko=Symbol("resizeObserver"),qr=Symbol("clearModelTimeout"),wh=Symbol("onContextLost"),jr=Symbol("loaded"),Ih=Symbol("status"),Mh=Symbol("onFocus"),Th=Symbol("onBlur"),ts=Symbol("updateSize"),Oo=Symbol("intersectionObserver"),ar=Symbol("isElementInViewport"),Tl=Symbol("announceModelVisibility"),as=Symbol("ariaLabel"),Du=Symbol("altDefaulted"),na=Symbol("statusElement"),Bl=Symbol("updateStatus"),Aa=Symbol("loadedTime"),ds=Symbol("updateSource"),lm=Symbol("markLoaded"),ll=Symbol("container"),Si=Symbol("input"),Lu=Symbol("canvas"),nt=Symbol("scene"),Be=Symbol("needsRender"),Ui=Symbol("tick"),Pi=Symbol("onModelLoad"),Rl=Symbol("onResize"),Kt=Symbol("renderer"),cr=Symbol("progressTracker"),cm=Symbol("getLoaded"),hr=Symbol("getModelIsVisible"),os=Symbol("shouldAttemptPreload"),Cn=s=>({x:s.x,y:s.y,z:s.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),Uu=s=>({u:s.x,v:s.y,toString(){return`${this.u} ${this.v}`}});class fa extends or{static get is(){return"model-viewer"}static set modelCacheSize(t){je[wn].evictionThreshold=t}static get modelCacheSize(){return je[wn].evictionThreshold}static set minimumRenderScale(t){t>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),t<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),wi.singleton.minScale=t}static get minimumRenderScale(){return wi.singleton.minScale}get loaded(){return this[cm]()}get[(Xf=ar,Yf=jr,Kf=Aa,Jf=Ih,$f=qr,Zf=Ch,tm=Tl,em=ko,im=Oo,nm=cr,Kt)](){return wi.singleton}get modelIsVisible(){return this[hr]()}constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[Xf]=!1,this[Yf]=!1,this[Kf]=0,this[Jf]="",this[$f]=null,this[Zf]=Yp((()=>{const n=this.getBoundingClientRect();this[ts](n)}),50),this[tm]=Yp((n=>{const r=this.modelIsVisible;r!==n&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:r}}))}),0),this[em]=null,this[im]=null,this[nm]=new cS,this[rm]=()=>{this[na].textContent=this[Ih]},this[sm]=()=>{this[na].textContent=""},this[am]=n=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:n.sourceEvent}}))},this.attachShadow({mode:"open"});const t=this.shadowRoot;let e,i;if((n=>{pg(C_,n)})(t),this[ll]=t.querySelector(".container"),this[Si]=t.querySelector(".userInput"),this[Lu]=t.querySelector("canvas"),this[na]=t.querySelector("#status"),this[om]=this[Si].getAttribute("aria-label"),this.isConnected){const n=this.getBoundingClientRect();e=n.width,i=n.height}else e=300,i=150;this[nt]=new lS({canvas:this[Lu],element:this,width:e,height:i}),Promise.resolve().then((()=>{this[ts](this.getBoundingClientRect())})),Rc&&(this[ko]=new ResizeObserver((n=>{if(!this[Kt].isPresenting)for(let r of n)r.target===this&&this[ts](r.contentRect)}))),Dc?this[Oo]=new IntersectionObserver((n=>{for(let r of n)if(r.target===this){const a=this.modelIsVisible;this[ar]=r.isIntersecting,this[Tl](a),this[ar]&&!this.loaded&&this[ds]()}}),{root:null,rootMargin:"0px",threshold:1e-5}):this[ar]=!0}connectedCallback(){super.connectedCallback&&super.connectedCallback(),Rc?this[ko].observe(this):self.addEventListener("resize",this[Ch]),Dc&&this[Oo].observe(this),this.addEventListener("focus",this[Mh]),this.addEventListener("blur",this[Th]);const t=this[Kt];t.addEventListener("contextlost",this[wh]),t.registerScene(this[nt]),this[qr]!=null&&(self.clearTimeout(this[qr]),this[qr]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Rc?this[ko].unobserve(this):self.removeEventListener("resize",this[Ch]),Dc&&this[Oo].unobserve(this),this.removeEventListener("focus",this[Mh]),this.removeEventListener("blur",this[Th]);const t=this[Kt];t.removeEventListener("contextlost",this[wh]),t.unregisterScene(this[nt]),this[qr]=self.setTimeout((()=>{this[nt].dispose(),this[qr]=null}),10)}updated(t){super.updated(t),t.has("src")&&(this.src==null?(this[jr]=!1,this[Aa]=0,this[nt].reset()):this.src!==this[nt].url&&(this[jr]=!1,this[Aa]=0,this[ds]())),t.has("alt")&&this[Si].setAttribute("aria-label",this[as]),t.has("generateSchema")&&(this.generateSchema?this[nt].updateSchema(this.src):this[nt].updateSchema(null))}toDataURL(t,e){return this[Kt].displayCanvas(this[nt]).toDataURL(t,e)}async toBlob(t){const e=t?t.mimeType:void 0,i=t?t.qualityArgument:void 0,n=t?t.idealAspect:void 0,{width:r,height:a,idealAspect:o,aspect:l}=this[nt],{dpr:c,scaleFactor:h}=this[Kt];let u=r*h*c,d=a*h*c,p=0,f=0;if(n===!0)if(o>l){const m=d;d=Math.round(u/o),f=(m-d)/2}else{const m=u;u=Math.round(d*o),p=(m-u)/2}Rn.width=u,Rn.height=d;try{return new Promise((async(m,A)=>{Rn.getContext("2d").drawImage(this[Kt].displayCanvas(this[nt]),p,f,u,d,0,0,u,d),Rn.toBlob((g=>{if(!g)return A(new Error("Unable to retrieve canvas blob"));m(g)}),e,i)}))}finally{this[ts]({width:r,height:a})}}registerEffectComposer(t){t.setRenderer(this[Kt].threeRenderer),t.setMainCamera(this[nt].getCamera()),t.setMainScene(this[nt]),this[nt].effectRenderer=t}unregisterEffectComposer(){this[nt].effectRenderer=null}registerRenderer(t){this[nt].externalRenderer=t}unregisterRenderer(){this[nt].externalRenderer=null}get[as](){return this[Du]}get[Du](){return this.alt==null||this.alt==="null"?this[om]:this.alt}[cm](){return this[jr]}[hr](){return this.loaded&&this[ar]}[os](){return!!this.src&&this[ar]}[ts]({width:t,height:e}){t!==0&&e!==0&&(this[ll].style.width=`${t}px`,this[ll].style.height=`${e}px`,this[Rl]({width:t,height:e}))}[Ui](t,e){var i;(i=this[nt].effectRenderer)===null||i===void 0||i.beforeRender(t,e)}[lm](){this[jr]||(this[jr]=!0,this[Aa]=performance.now())}[Be](){this[nt].queueRender()}[Pi](){}[Bl](t){this[Ih]=t;const e=this.getRootNode();e!=null&&e.activeElement===this&&this[na].textContent!=t&&(this[na].textContent=t)}[(rm=Mh,sm=Th,Rl)](t){this[nt].setSize(t.width,t.height)}async[(am=wh,ds)](){const t=this[nt];if(this.loaded||!this[os]()||this.src===t.url)return;this.generateSchema&&t.updateSchema(this.src),this[Bl]("Loading"),t.stopAnimation();const e=this[cr].beginActivity("model-load"),i=this.src;try{const n=t.setSource(i,(a=>e(.95*Qi(a,0,1)))),r=this[Cl]();await Promise.all([n,r]),this[lm](),this[Pi](),this.updateComplete.then((()=>{this.dispatchEvent(new CustomEvent("before-render"))})),await new Promise((a=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:i}})),a()}))}))}))}catch(n){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:n}}))}finally{e(1)}}}Qo([Et({type:String})],fa.prototype,"alt",void 0),Qo([Et({type:String})],fa.prototype,"src",void 0),Qo([Et({type:Boolean,attribute:"with-credentials"})],fa.prototype,"withCredentials",void 0),Qo([Et({type:Boolean,attribute:"generate-schema"})],fa.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bh=function(s,t,e,i){for(var n,r=arguments.length,a=r<3?t:i,o=s.length-1;o>=0;o--)(n=s[o])&&(a=(r<3?n(a):r>3?n(t,e,a):n(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a};const Go=Symbol("changeAnimation"),hm=Symbol("appendAnimation"),um=Symbol("detachAnimation"),ei=Symbol("paused"),hS={repetitions:1/0,pingpong:!1},uS={pingpong:!1,repetitions:null,weight:1,timeScale:1,fade:!1,warp:!1,relativeWarp:!0,time:null},dS={fade:!0},Kn=Symbol("hotspotMap"),Rh=Symbol("mutationCallback"),ra=Symbol("observer"),Dh=Symbol("addHotspot"),dm=Symbol("removeHotspot"),Lh=new St;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var He=Uint8Array,di=Uint16Array,ad=Int32Array,od=new He([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ld=new He([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pm=new He([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pb=function(s,t){for(var e=new di(31),i=0;i<31;++i)e[i]=t+=1<<s[i-1];var n=new ad(e[30]);for(i=1;i<30;++i)for(var r=e[i];r<e[i+1];++r)n[r]=r-e[i]<<5|i;return{b:e,r:n}},Ab=pb(od,2),pS=Ab.b,Pu=Ab.r;pS[28]=258,Pu[258]=28;for(var Am=pb(ld,0).r,fb=new di(32768),ce=0;ce<32768;++ce){var Jn=(43690&ce)>>1|(21845&ce)<<1;Jn=(61680&(Jn=(52428&Jn)>>2|(13107&Jn)<<2))>>4|(3855&Jn)<<4,fb[ce]=((65280&Jn)>>8|(255&Jn)<<8)>>1}var xa=function(s,t,e){for(var i=s.length,n=0,r=new di(t);n<i;++n)s[n]&&++r[s[n]-1];var a,o=new di(t);for(n=1;n<t;++n)o[n]=o[n-1]+r[n-1]<<1;for(a=new di(i),n=0;n<i;++n)s[n]&&(a[n]=fb[o[s[n]-1]++]>>15-s[n]);return a},br=new He(288);for(ce=0;ce<144;++ce)br[ce]=8;for(ce=144;ce<256;++ce)br[ce]=9;for(ce=256;ce<280;++ce)br[ce]=7;for(ce=280;ce<288;++ce)br[ce]=8;var Dl=new He(32);for(ce=0;ce<32;++ce)Dl[ce]=5;var AS=xa(br,9),fS=xa(Dl,5),mb=function(s){return(s+7)/8|0},gb=function(s,t,e){return(e==null||e>s.length)&&(e=s.length),new He(s.subarray(t,e))},mS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zl=function(s,t,e){var i=new Error(t||mS[s]);if(i.code=s,Error.captureStackTrace&&Error.captureStackTrace(i,zl),!e)throw i;return i},rn=function(s,t,e){e<<=7&t;var i=t/8|0;s[i]|=e,s[i+1]|=e>>8},sa=function(s,t,e){e<<=7&t;var i=t/8|0;s[i]|=e,s[i+1]|=e>>8,s[i+2]|=e>>16},Uh=function(s,t){for(var e=[],i=0;i<s.length;++i)s[i]&&e.push({s:i,f:s[i]});var n=e.length,r=e.slice();if(!n)return{t:vb,l:0};if(n==1){var a=new He(e[0].s+1);return a[e[0].s]=1,{t:a,l:1}}e.sort((function(_,E){return _.f-E.f})),e.push({s:-1,f:25001});var o=e[0],l=e[1],c=0,h=1,u=2;for(e[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=n-1;)o=e[e[c].f<e[u].f?c++:u++],l=e[c!=h&&e[c].f<e[u].f?c++:u++],e[h++]={s:-1,f:o.f+l.f,l:o,r:l};var d=r[0].s;for(i=1;i<n;++i)r[i].s>d&&(d=r[i].s);var p=new di(d+1),f=Fu(e[h-1],p,0);if(f>t){i=0;var m=0,A=f-t,g=1<<A;for(r.sort((function(_,E){return p[E.s]-p[_.s]||_.f-E.f}));i<n;++i){var b=r[i].s;if(!(p[b]>t))break;m+=g-(1<<f-p[b]),p[b]=t}for(m>>=A;m>0;){var v=r[i].s;p[v]<t?m-=1<<t-p[v]++-1:++i}for(;i>=0&&m;--i){var y=r[i].s;p[y]==t&&(--p[y],++m)}f=t}return{t:new He(p),l:f}},Fu=function(s,t,e){return s.s==-1?Math.max(Fu(s.l,t,e+1),Fu(s.r,t,e+1)):t[s.s]=e},fm=function(s){for(var t=s.length;t&&!s[--t];);for(var e=new di(++t),i=0,n=s[0],r=1,a=function(l){e[i++]=l},o=1;o<=t;++o)if(s[o]==n&&o!=t)++r;else{if(!n&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(n),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(n);r=1,n=s[o]}return{c:e.subarray(0,i),n:t}},aa=function(s,t){for(var e=0,i=0;i<t.length;++i)e+=s[i]*t[i];return e},bb=function(s,t,e){var i=e.length,n=mb(t+2);s[n]=255&i,s[n+1]=i>>8,s[n+2]=255^s[n],s[n+3]=255^s[n+1];for(var r=0;r<i;++r)s[n+r+4]=e[r];return 8*(n+4+i)},mm=function(s,t,e,i,n,r,a,o,l,c,h){rn(t,h++,e),++n[256];for(var u=Uh(n,15),d=u.t,p=u.l,f=Uh(r,15),m=f.t,A=f.l,g=fm(d),b=g.c,v=g.n,y=fm(m),_=y.c,E=y.n,x=new di(19),I=0;I<b.length;++I)++x[31&b[I]];for(I=0;I<_.length;++I)++x[31&_[I]];for(var T=Uh(x,7),L=T.t,H=T.l,U=19;U>4&&!L[pm[U-1]];--U);var O,F,q,N,K=c+5<<3,$=aa(n,br)+aa(r,Dl)+a,lt=aa(n,d)+aa(r,m)+a+14+3*U+aa(x,L)+2*x[16]+3*x[17]+7*x[18];if(l>=0&&K<=$&&K<=lt)return bb(t,h,s.subarray(l,l+c));if(rn(t,h,1+(lt<$)),h+=2,lt<$){O=xa(d,p),F=d,q=xa(m,A),N=m;var ft=xa(L,H);for(rn(t,h,v-257),rn(t,h+5,E-1),rn(t,h+10,U-4),h+=14,I=0;I<U;++I)rn(t,h+3*I,L[pm[I]]);h+=3*U;for(var Y=[b,_],J=0;J<2;++J){var ct=Y[J];for(I=0;I<ct.length;++I){var at=31&ct[I];rn(t,h,ft[at]),h+=L[at],at>15&&(rn(t,h,ct[I]>>5&127),h+=ct[I]>>12)}}}else O=AS,F=br,q=fS,N=Dl;for(I=0;I<o;++I){var rt=i[I];if(rt>255){sa(t,h,O[(at=rt>>18&31)+257]),h+=F[at+257],at>7&&(rn(t,h,rt>>23&31),h+=od[at]);var C=31&rt;sa(t,h,q[C]),h+=N[C],C>3&&(sa(t,h,rt>>5&8191),h+=ld[C])}else sa(t,h,O[rt]),h+=F[rt]}return sa(t,h,O[256]),h+F[256]},gS=new ad([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),vb=new He(0),bS=(function(){for(var s=new Int32Array(256),t=0;t<256;++t){for(var e=t,i=9;--i;)e=(1&e&&-306674912)^e>>>1;s[t]=e}return s})(),vS=function(){var s=-1;return{p:function(t){for(var e=s,i=0;i<t.length;++i)e=bS[255&e^t[i]]^e>>>8;s=e},d:function(){return~s}}},yS=function(s,t,e,i,n){if(!n&&(n={l:1},t.dictionary)){var r=t.dictionary.subarray(-32768),a=new He(r.length+s.length);a.set(r),a.set(s,r.length),s=a,n.w=r.length}return(function(o,l,c,h,u,d){var p=d.z||o.length,f=new He(h+p+5*(1+Math.ceil(p/7e3))+u),m=f.subarray(h,f.length-u),A=d.l,g=7&(d.r||0);if(l){g&&(m[0]=d.r>>3);for(var b=gS[l-1],v=b>>13,y=8191&b,_=(1<<c)-1,E=d.p||new di(32768),x=d.h||new di(_+1),I=Math.ceil(c/3),T=2*I,L=function(ut){return(o[ut]^o[ut+1]<<I^o[ut+2]<<T)&_},H=new ad(25e3),U=new di(288),O=new di(32),F=0,q=0,N=d.i||0,K=0,$=d.w||0,lt=0;N+2<p;++N){var ft=L(N),Y=32767&N,J=x[ft];if(E[Y]=J,x[ft]=Y,$<=N){var ct=p-N;if((F>7e3||K>24576)&&(ct>423||!A)){g=mm(o,m,0,H,U,O,q,K,lt,N-lt,g),K=F=q=0,lt=N;for(var at=0;at<286;++at)U[at]=0;for(at=0;at<30;++at)O[at]=0}var rt=2,C=0,w=y,R=Y-J&32767;if(ct>2&&ft==L(N-R))for(var X=Math.min(v,ct)-1,P=Math.min(32767,N),z=Math.min(258,ct);R<=P&&--w&&Y!=J;){if(o[N+rt]==o[N+rt-R]){for(var M=0;M<z&&o[N+M]==o[N+M-R];++M);if(M>rt){if(rt=M,C=R,M>X)break;var G=Math.min(R,M-2),V=0;for(at=0;at<G;++at){var ot=N-R+at&32767,Q=ot-E[ot]&32767;Q>V&&(V=Q,J=ot)}}}R+=(Y=J)-(J=E[Y])&32767}if(C){H[K++]=268435456|Pu[rt]<<18|Am[C];var it=31&Pu[rt],tt=31&Am[C];q+=od[it]+ld[tt],++U[257+it],++O[tt],$=N+rt,++F}else H[K++]=o[N],++U[o[N]]}}for(N=Math.max(N,$);N<p;++N)H[K++]=o[N],++U[o[N]];g=mm(o,m,A,H,U,O,q,K,lt,N-lt,g),A||(d.r=7&g|m[g/8|0]<<3,g-=7,d.h=x,d.p=E,d.i=N,d.w=$)}else{for(N=d.w||0;N<p+A;N+=65535){var et=N+65535;et>=p&&(m[g/8|0]=A,et=p),g=bb(m,g+1,o.subarray(N,et))}d.i=p}return gb(f,0,h+mb(g)+u)})(s,t.level==null?6:t.level,t.mem==null?n.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+t.mem,e,i,n)},yb=function(s,t){var e={};for(var i in s)e[i]=s[i];for(var i in t)e[i]=t[i];return e},Ue=function(s,t,e){for(;e;++t)s[t]=e,e>>>=8};function _S(s,t){return yS(s,t||{},0,0)}var _b=function(s,t,e,i){for(var n in s){var r=s[n],a=t+n,o=i;Array.isArray(r)&&(o=yb(i,r[1]),r=r[0]),r instanceof He?e[a]=[r,o]:(e[a+="/"]=[new He(0),o],_b(r,a,e,i))}},gm=typeof TextEncoder<"u"&&new TextEncoder,ES=typeof TextDecoder<"u"&&new TextDecoder;try{ES.decode(vb,{stream:!0})}catch{}function Ll(s,t){if(gm)return gm.encode(s);for(var e=s.length,i=new He(s.length+(s.length>>1)),n=0,r=function(c){i[n++]=c},a=0;a<e;++a){if(n+5>i.length){var o=new He(n+8+(e-a<<1));o.set(i),i=o}var l=s.charCodeAt(a);l<128||t?r(l):l<2048?(r(192|l>>6),r(128|63&l)):l>55295&&l<57344?(r(240|(l=65536+(1047552&l)|1023&s.charCodeAt(++a))>>18),r(128|l>>12&63),r(128|l>>6&63),r(128|63&l)):(r(224|l>>12),r(128|l>>6&63),r(128|63&l))}return gb(i,0,n)}var Nu=function(s){var t=0;if(s)for(var e in s){var i=s[e].length;i>65535&&zl(9),t+=i+4}return t},bm=function(s,t,e,i,n,r,a,o){var l=i.length,c=e.extra,h=o&&o.length,u=Nu(c);Ue(s,t,a!=null?33639248:67324752),t+=4,a!=null&&(s[t++]=20,s[t++]=e.os),s[t]=20,t+=2,s[t++]=e.flag<<1|(r<0&&8),s[t++]=n&&8,s[t++]=255&e.compression,s[t++]=e.compression>>8;var d=new Date(e.mtime==null?Date.now():e.mtime),p=d.getFullYear()-1980;if((p<0||p>119)&&zl(10),Ue(s,t,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),t+=4,r!=-1&&(Ue(s,t,e.crc),Ue(s,t+4,r<0?-r-2:r),Ue(s,t+8,e.size)),Ue(s,t+12,l),Ue(s,t+14,u),t+=16,a!=null&&(Ue(s,t,h),Ue(s,t+6,e.attrs),Ue(s,t+10,a),t+=14),s.set(i,t),t+=l,u)for(var f in c){var m=c[f],A=m.length;Ue(s,t,+f),Ue(s,t+2,A),s.set(m,t+4),t+=4+A}return h&&(s.set(o,t),t+=h),t};function xS(s,t){t||(t={});var e={},i=[];_b(s,"",e,t);var n=0,r=0;for(var a in e){var o=e[a],l=o[0],c=o[1],h=c.level==0?0:8,u=(x=Ll(a)).length,d=c.comment,p=d&&Ll(d),f=p&&p.length,m=Nu(c.extra);u>65535&&zl(11);var A=h?_S(l,c):l,g=A.length,b=vS();b.p(l),i.push(yb(c,{size:l.length,crc:b.d(),c:A,f:x,m:p,u:u!=a.length||p&&d.length!=f,o:n,compression:h})),n+=30+u+m+g,r+=76+2*(u+m)+(f||0)+g}for(var v=new He(r+22),y=n,_=r-n,E=0;E<i.length;++E){var x=i[E];bm(v,x.o,x,x.f,x.u,x.c.length);var I=30+x.f.length+Nu(x.extra);v.set(x.c,x.o+I),bm(v,n,x,x.f,x.u,x.c.length,x.o,x.m),n+=16+I+(x.m?x.m.length:0)}return(function(T,L,H,U,O){Ue(T,L,101010256),Ue(T,L+8,H),Ue(T,L+10,H),Ue(T,L+12,U),Ue(T,L+16,O)})(v,n,i.length,_,y),v}class SS{constructor(){this.textureUtils=null}setTextureUtils(t){this.textureUtils=t}parse(t,e,i,n){this.parseAsync(t,n).then(e).catch(i)}async parseAsync(t,e={}){e=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},e);const i={},n="model.usda";i[n]=null;let r=vm();r+=(function(c){return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{${c.includeAnchoringProperties===!0?`
		token preliminary:anchoring:type = "${c.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${c.ar.planeAnchoring.alignment}"
	`:""}
`})(e);const a={},o={};t.traverseVisible((c=>{if(c.isMesh){const h=c.geometry,u=c.material;if(u.isMeshStandardMaterial){const d="geometries/Geometry_"+h.id+".usda";if(!(d in i)){const p=(function(f){return`
def "Geometry"
{
${(function(A){const g="Geometry",b=A.attributes,v=b.position.count;return`
	def Mesh "${g}"
	{
		int[] faceVertexCounts = [${(function(y){const _=y.index!==null?y.index.count:y.attributes.position.count;return Array(_/3).fill(3).join(", ")})(A)}]
		int[] faceVertexIndices = [${(function(y){const _=y.index,E=[];if(_!==null)for(let x=0;x<_.count;x++)E.push(_.getX(x));else{const x=y.attributes.position.count;for(let I=0;I<x;I++)E.push(I)}return E.join(", ")})(A)}]
		normal3f[] normals = [${Ph(b.normal,v)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${Ph(b.position,v)}]
${(function(y){let _="";for(let x=0;x<4;x++){const I=x>0?x:"",T=y["uv"+I];T!==void 0&&(_+=`
		texCoord2f[] primvars:st${I} = [${wS(T)}] (
			interpolation = "vertex"
		)`)}const E=y.color;return E!==void 0&&(_+=`
	color3f[] primvars:displayColor = [${Ph(E,E.count)}] (
		interpolation = "vertex"
		)`),_})(b)}
		uniform token subdivisionScheme = "none"
	}
`})(f)}
}
`})(h);i[d]=(function(f){let m=vm();return m+=f,Ll(m)})(p)}u.uuid in a||(a[u.uuid]=u),r+=(function(p,f,m){const A="Object_"+p.id,g=ym(p.matrixWorld);return p.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",p),`def Xform "${A}" (
	prepend references = @./geometries/Geometry_${f.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${g}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${m.id}>
}

`})(c,h,u)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(r+=(function(h){const u=h.name?h.name:"Camera_"+h.id,d=ym(h.matrixWorld);return h.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",h),h.isOrthographicCamera?`def Camera "${u}"
		{
			matrix4d xformOp:transform = ${d}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${h.near.toPrecision(Oe)}, ${h.far.toPrecision(Oe)})
			float horizontalAperture = ${(10*(Math.abs(h.left)+Math.abs(h.right))).toPrecision(Oe)}
			float verticalAperture = ${(10*(Math.abs(h.top)+Math.abs(h.bottom))).toPrecision(Oe)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${u}"
		{
			matrix4d xformOp:transform = ${d}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${h.near.toPrecision(Oe)}, ${h.far.toPrecision(Oe)})
			float focalLength = ${h.getFocalLength().toPrecision(Oe)}
			float focusDistance = ${h.focus.toPrecision(Oe)}
			float horizontalAperture = ${h.getFilmWidth().toPrecision(Oe)}
			token projection = "perspective"
			float verticalAperture = ${h.getFilmHeight().toPrecision(Oe)}
		}
	
	`})(c))})),r+=`
		}
	}
}

`,r+=(function(c,h,u=!1){const d=[];for(const p in c){const f=c[p];d.push(IS(f,h,u))}return`def "Materials"
{
${d.join("")}
}

`})(a,o,e.quickLookCompatible),i[n]=Ll(r),r=null;for(const c in o){let h=o[c];if(h.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");h=await this.textureUtils.decompress(h)}const u=CS(h.image,h.flipY,e.maxTextureSize),d=await new Promise((p=>u.toBlob(p,"image/png",1)));i[`textures/Texture_${c}.png`]=new Uint8Array(await d.arrayBuffer())}let l=0;for(const c in i){const h=i[c];l+=34+c.length;const u=63&l;if(u!==4){const d=new Uint8Array(64-u);i[c]=[h,{extra:{12345:d}}]}l=h.length}return xS(i,{level:0})}}function CS(s,t,e){if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&s instanceof ImageBitmap){const i=e/Math.max(s.width,s.height),n=document.createElement("canvas");n.width=s.width*Math.min(1,i),n.height=s.height*Math.min(1,i);const r=n.getContext("2d");return t===!0&&(r.translate(0,n.height),r.scale(1,-1)),r.drawImage(s,0,0,n.width,n.height),n}throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const Oe=7;function vm(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function ym(s){const t=s.elements;return`( ${Ho(t,0)}, ${Ho(t,4)}, ${Ho(t,8)}, ${Ho(t,12)} )`}function Ho(s,t){return`(${s[t+0]}, ${s[t+1]}, ${s[t+2]}, ${s[t+3]})`}function Ph(s,t){if(s===void 0)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");const e=[];for(let i=0;i<s.count;i++){const n=s.getX(i),r=s.getY(i),a=s.getZ(i);e.push(`(${n.toPrecision(Oe)}, ${r.toPrecision(Oe)}, ${a.toPrecision(Oe)})`)}return e.join(", ")}function wS(s){const t=[];for(let e=0;e<s.count;e++){const i=s.getX(e),n=s.getY(e);t.push(`(${i.toPrecision(Oe)}, ${1-n.toPrecision(Oe)})`)}return t.join(", ")}function IS(s,t,e=!1){const n=[],r=[];function a(o,l,c){const h=o.source.id+"_"+o.flipY;t[h]=o;const u=o.channel>0?"st"+o.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},p=o.repeat.clone(),f=o.offset.clone(),m=o.rotation,A=Math.sin(m),g=Math.cos(m);return f.y=1-f.y-p.y,e?(f.x=f.x/p.x,f.y=f.y/p.y,f.x+=A/p.x,f.y+=g-1):(f.x+=A*p.x,f.y+=(1-g)*p.y),`
		def Shader "PrimvarReader_${l}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${u}"
			float2 outputs:result
		}

		def Shader "Transform2d_${l}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${s.id}/PrimvarReader_${l}.outputs:result>
			float inputs:rotation = ${(m*(180/Math.PI)).toFixed(Oe)}
			float2 inputs:scale = ${Em(p)}
			float2 inputs:translation = ${Em(f)}
			float2 outputs:result
		}

		def Shader "Texture_${o.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${h}.png@
			float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+(function(b){return`(${b.r}, ${b.g}, ${b.b}, 1.0)`})(c):""}
			token inputs:sourceColorSpace = "${o.colorSpace===ln?"raw":"sRGB"}"
			token inputs:wrapS = "${d[o.wrapS]}"
			token inputs:wrapT = "${d[o.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${s.transparent||s.alphaTest>0?"float outputs:a":""}
		}`}return s.side===2&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",s),s.map!==null?(n.push(`			color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`),s.transparent?n.push(`			float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`):s.alphaTest>0&&(n.push(`			float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`),n.push(`			float inputs:opacityThreshold = ${s.alphaTest}`)),r.push(a(s.map,"diffuse",s.color))):n.push(`			color3f inputs:diffuseColor = ${_m(s.color)}`),s.emissiveMap!==null?(n.push(`			color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`),r.push(a(s.emissiveMap,"emissive",new bt(s.emissive.r*s.emissiveIntensity,s.emissive.g*s.emissiveIntensity,s.emissive.b*s.emissiveIntensity)))):s.emissive.getHex()>0&&n.push(`			color3f inputs:emissiveColor = ${_m(s.emissive)}`),s.normalMap!==null&&(n.push(`			normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`),r.push(a(s.normalMap,"normal"))),s.aoMap!==null&&(n.push(`			float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`),r.push(a(s.aoMap,"occlusion",new bt(s.aoMapIntensity,s.aoMapIntensity,s.aoMapIntensity)))),s.roughnessMap!==null?(n.push(`			float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`),r.push(a(s.roughnessMap,"roughness",new bt(s.roughness,s.roughness,s.roughness)))):n.push(`			float inputs:roughness = ${s.roughness}`),s.metalnessMap!==null?(n.push(`			float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`),r.push(a(s.metalnessMap,"metallic",new bt(s.metalness,s.metalness,s.metalness)))):n.push(`			float inputs:metallic = ${s.metalness}`),s.alphaMap!==null?(n.push(`			float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`),n.push("			float inputs:opacityThreshold = 0.0001"),r.push(a(s.alphaMap,"opacity"))):n.push(`			float inputs:opacity = ${s.opacity}`),s.isMeshPhysicalMaterial&&(s.clearcoatMap!==null?(n.push(`			float inputs:clearcoat.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatMap.id}_clearcoat.outputs:r>`),r.push(a(s.clearcoatMap,"clearcoat",new bt(s.clearcoat,s.clearcoat,s.clearcoat)))):n.push(`			float inputs:clearcoat = ${s.clearcoat}`),s.clearcoatRoughnessMap!==null?(n.push(`			float inputs:clearcoatRoughness.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),r.push(a(s.clearcoatRoughnessMap,"clearcoatRoughness",new bt(s.clearcoatRoughness,s.clearcoatRoughness,s.clearcoatRoughness)))):n.push(`			float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`),n.push(`			float inputs:ior = ${s.ior}`)),`
	def Material "Material_${s.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${n.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>

${r.join(`
`)}

	}
`}function _m(s){return`(${s.r}, ${s.g}, ${s.b})`}function Em(s){return`(${s.x}, ${s.y})`}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n=function(s,t,e,i){for(var n,r=arguments.length,a=r<3?t:i,o=s.length-1;o>=0;o--)(n=s[o])&&(a=(r<3?n(a):r>3?n(t,e,a):n(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a};let xm=!1,Sm=!1;const Cm="#model-viewer-no-ar-fallback",MS=(wm=["quick-look","scene-viewer","webxr","none"],s=>{try{const t=cn(s),e=(t.length?t[0].terms:[]).filter((i=>i&&i.type==="ident")).map((i=>i.value)).filter((i=>wm.indexOf(i)>-1));return new Set(e)}catch{}return new Set});var wm;const Fh="quick-look",Im="scene-viewer",Mm="webxr",oa="none",sn=Symbol("arButtonContainer"),Tm=Symbol("enterARWithWebXR"),Bm=Symbol("openSceneViewer"),Rm=Symbol("openIOSARQuickLook"),TS=Symbol("canActivateAR"),zo=Symbol("arMode"),Nh=Symbol("arModes"),Xr=Symbol("arAnchor"),Vo=Symbol("preload"),Wo=Symbol("onARButtonContainerClick"),Qh=Symbol("onARStatus"),kh=Symbol("onARTracking"),Oh=Symbol("onARTap"),la=Symbol("selectARMode"),Gh=Symbol("triggerLoad");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hh=function(s,t,e,i){for(var n,r=arguments.length,a=r<3?t:i,o=s.length-1;o>=0;o--)(n=s[o])&&(a=(r<3?n(a):r>3?n(t,e,a):n(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a};const zh="auto",BS="auto",RS="eager",Yr=Symbol("defaultProgressBarElement"),Vh=Symbol("posterContainerElement"),Kr=Symbol("defaultPosterElement"),ca=Symbol("shouldDismissPoster"),Wh=Symbol("hidePoster"),qo=Symbol("modelIsRevealed"),qh=Symbol("updateProgressBar"),DS=Symbol("ariaLabelCallToAction"),jh=Symbol("onProgress");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xh=function(s,t,e,i){for(var n,r=arguments.length,a=r<3?t:i,o=s.length-1;o>=0;o--)(n=s[o])&&(a=(r<3?n(a):r>3?n(t,e,a):n(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a};const LS=Math.PI/32,US={basis:[Hl(Ge(LS,"rad"))],keywords:{auto:[null]}},Jr=Symbol("autoRotateStartTime"),Yh=Symbol("radiansPerSecond"),Dm=Symbol("syncRotationRate"),Kh=Symbol("onCameraChange"),PS=(s=>{var t,e,i;class n extends s{constructor(){super(...arguments),this[t]=new Map,this[e]=a=>{a.forEach((o=>{o instanceof MutationRecord&&o.type!=="childList"||(o.addedNodes.forEach((l=>{this[Dh](l)})),o.removedNodes.forEach((l=>{this[dm](l)})),this[Be]())}))},this[i]=new MutationObserver(this[Rh])}connectedCallback(){super.connectedCallback();for(let o=0;o<this.children.length;++o)this[Dh](this.children[o]);const{ShadyDOM:a}=self;a==null?this[ra].observe(this,{childList:!0}):this[ra]=a.observeChildren(this,this[Rh])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:a}=self;a==null?this[ra].disconnect():a.unobserveChildren(this[ra])}[(t=Kn,e=Rh,i=ra,Pi)](){super[Pi]();const a=this[nt];a.forHotspots((o=>{a.updateSurfaceHotspot(o)}))}[Ui](a,o){super[Ui](a,o);const l=this[nt],{annotationRenderer:c}=l,h=l.getCamera();l.shouldRender()&&(l.animateSurfaceHotspots(),l.updateHotspotsVisibility(h.position),c.domElement.style.display="",c.render(l,h))}updateHotspot(a){const o=this[Kn].get(a.name);o!=null&&(o.updatePosition(a.position),o.updateNormal(a.normal),o.surface=a.surface,this[nt].updateSurfaceHotspot(o),this[Be]())}queryHotspot(a){const o=this[Kn].get(a);if(o==null)return null;const l=Cn(o.position),c=Cn(o.normal),h=o.facingCamera,u=this[nt],d=u.getCamera(),p=new B;p.setFromMatrixPosition(o.matrixWorld),p.project(d);const f=u.width/2,m=u.height/2;p.x=p.x*f+f,p.y=-p.y*m+m;const A=Cn(new B(p.x,p.y,p.z));return Number.isFinite(A.x)&&Number.isFinite(A.y)?{position:l,normal:c,canvasPosition:A,facingCamera:h}:null}positionAndNormalFromPoint(a,o){const l=this[nt],c=l.getNDC(a,o),h=l.positionAndNormalFromPoint(c);if(h==null)return null;Lh.copy(l.target.matrixWorld).invert();const u=Cn(h.position.applyMatrix4(Lh)),d=Cn(h.normal.transformDirection(Lh));let p=null;return h.uv!=null&&(p=Uu(h.uv)),{position:u,normal:d,uv:p}}surfaceFromPoint(a,o){const l=this[nt],c=l.getNDC(a,o);return l.surfaceFromPoint(c)}[Dh](a){if(!(a instanceof HTMLElement&&a.slot.indexOf("hotspot")===0))return;let o=this[Kn].get(a.slot);o!=null?o.increment():(o=new db({name:a.slot,position:a.dataset.position,normal:a.dataset.normal,surface:a.dataset.surface}),this[Kn].set(a.slot,o),this[nt].addHotspot(o)),this[nt].queueRender()}[dm](a){if(!(a instanceof HTMLElement))return;const o=this[Kn].get(a.slot);o&&(o.decrement()&&(this[nt].removeHotspot(o),this[Kn].delete(a.slot)),this[nt].queueRender())}}return n})((s=>{var t,e,i;class n extends s{constructor(){super(...arguments),this[t]=void 0,this[e]=null,this[i]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[sr]}get availableVariants(){return this.model?this.model[Ru]():[]}get originalGltfJson(){return this[ol]}[(t=sr,e=al,i=ol,_h)](){return()=>{this[Be]()}}[ea](a){return a.colorSpace=ae,a.wrapS=Gi,a.wrapT=Gi,new nb(this[_h](),a)}async createTexture(a,o="image/png"){const{textureUtils:l}=this[Kt],c=await l.loadImage(a,this.withCredentials);return c.userData.mimeType=o,this[ea](c)}async createLottieTexture(a,o=1){const{textureUtils:l}=this[Kt],c=await l.loadLottie(a,o,this.withCredentials);return this[ea](c)}createVideoTexture(a){const o=document.createElement("video");o.crossOrigin=this.withCredentials?"use-credentials":"anonymous",o.src=a,o.muted=!0,o.playsInline=!0,o.loop=!0,o.play();const l=new Jv(o);return this[ea](l)}createCanvasTexture(){const a=document.createElement("canvas"),o=new t0(a);return this[ea](o)}async updated(a){if(super.updated(a),a.has("variantName")){const o=this[cr].beginActivity("variant-update");o(.1);const l=this[sr],{variantName:c}=this;l!=null&&(await l[cb](c),this[Be](),this.dispatchEvent(new CustomEvent("variant-applied"))),o(1)}if(a.has("orientation")||a.has("scale")){if(!this.loaded)return;const o=this[nt];o.applyTransform(),o.updateBoundingBox(),o.updateShadow(),this[Kt].arRenderer.onUpdateScene(),this[Be]()}}[Pi](){super[Pi]();const{currentGLTF:a}=this[nt];if(a!=null){const{correlatedSceneGraph:o}=a;o!=null&&a!==this[al]&&(this[sr]=new iS(o,this[_h]()),this[ol]=JSON.parse(JSON.stringify(o.gltf))),"variants"in a.userData&&this.requestUpdate("variantName")}this[al]=a}async exportScene(a){const o=this[nt];return new Promise((async(l,c)=>{const h={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(h,a),h.animations=o.animations,h.truncateDrawRange=!0;const u=o.shadow;let d=!1;u!=null&&(d=u.visible,u.visible=!1),await this[sr][lb](),new wl().register((p=>new YE(p))).parse(o.model,(p=>l(new Blob([h.binary?p:JSON.stringify(p)],{type:h.binary?"application/octet-stream":"application/json"}))),(()=>c("glTF export failed")),h),u!=null&&(u.visible=d)}))}materialFromPoint(a,o){const l=this[sr];if(l==null)return null;const c=this[nt],h=c.getNDC(a,o),u=c.hitFromPoint(h);return u==null||u.face==null?null:l[hb](u)}}return yh([Et({type:String,attribute:"variant-name"})],n.prototype,"variantName",void 0),yh([Et({type:String,attribute:"orientation"})],n.prototype,"orientation",void 0),yh([Et({type:String,attribute:"scale"})],n.prototype,"scale",void 0),n})((s=>{var t,e,i;class n extends s{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=3e3,this.rotationPerSecond="auto",this[t]=performance.now(),this[e]=0,this[i]=a=>{this.autoRotate&&a.detail.source==="user-interaction"&&(this[Jr]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Kh]),this[Jr]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Kh]),this[Jr]=performance.now()}updated(a){super.updated(a),a.has("autoRotate")&&(this[Jr]=performance.now())}[(t=Jr,e=Yh,Dm)](a){this[Yh]=a[0]}[Ui](a,o){if(super[Ui](a,o),!this.autoRotate||!this[hr]()||this[Kt].isPresenting)return;const l=Math.min(o,a-this[Jr]-this.autoRotateDelay);l>0&&(this[nt].yaw=this.turntableRotation+this[Yh]*l*.001)}get turntableRotation(){return this[nt].yaw}resetTurntableRotation(a=0){this[nt].yaw=a}}return i=Kh,Xh([Et({type:Boolean,attribute:"auto-rotate"})],n.prototype,"autoRotate",void 0),Xh([Et({type:Number,attribute:"auto-rotate-delay"})],n.prototype,"autoRotateDelay",void 0),Xh([xn({intrinsics:US,updateHandler:Dm}),Et({type:String,attribute:"rotation-per-second"})],n.prototype,"rotationPerSecond",void 0),n})((s=>{var t,e,i;class n extends s{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=0,this.shadowSoftness=1,this.exposure=1,this.toneMapping="auto",this.skyboxHeight="0",this[t]=null,this[e]=null,this[i]=null}updated(a){super.updated(a),a.has("shadowIntensity")&&(this[nt].setShadowIntensity(.5*this.shadowIntensity),this[Be]()),a.has("shadowSoftness")&&(this[nt].setShadowSoftness(this.shadowSoftness),this[Be]()),a.has("exposure")&&(this[nt].exposure=this.exposure,this[Be]()),a.has("toneMapping")&&(this[nt].toneMapping=this.toneMapping==="aces"?4:this.toneMapping==="agx"?6:this.toneMapping==="reinhard"?2:this.toneMapping==="cineon"?3:this.toneMapping==="linear"?1:this.toneMapping==="none"?0:7,this[Be]()),(a.has("environmentImage")||a.has("skyboxImage"))&&this[os]()&&this[Cl](),a.has("skyboxHeight")&&(this[nt].setGroundedSkybox(),this[Be]())}hasBakedShadow(){return this[nt].bakedShadows.size>0}async[(t=ha,e=el,i=yo,Cl)](){const{skyboxImage:a,environmentImage:o}=this;this[yo]!=null&&(this[yo](),this[yo]=null);const{textureUtils:l}=this[Kt];if(l==null)return;const c=this[cr].beginActivity("environment-update");try{const{environmentMap:h,skybox:u}=await l.generateEnvironmentMapAndSkybox(gg(a),o,(d=>c(Qi(d,0,1))),this.withCredentials);this[ha]!==h&&(this[ha]=h,this.dispatchEvent(new CustomEvent("environment-change"))),this[el]=u!=null?u.name===h.name?h:u:null,this[nt].setEnvironmentAndSkybox(this[ha],this[el])}catch(h){if(h instanceof Error)throw this[nt].setEnvironmentAndSkybox(null,null),h}finally{c(1)}}}return qn([Et({type:String,attribute:"environment-image"})],n.prototype,"environmentImage",void 0),qn([Et({type:String,attribute:"skybox-image"})],n.prototype,"skyboxImage",void 0),qn([Et({type:Number,attribute:"shadow-intensity"})],n.prototype,"shadowIntensity",void 0),qn([Et({type:Number,attribute:"shadow-softness"})],n.prototype,"shadowSoftness",void 0),qn([Et({type:Number})],n.prototype,"exposure",void 0),qn([Et({type:String,attribute:"tone-mapping"})],n.prototype,"toneMapping",void 0),qn([Et({type:String,attribute:"skybox-height"})],n.prototype,"skyboxHeight",void 0),n})((s=>{var t,e,i,n,r,a,o,l,c,h,u,d,p,f,m,A,g,b;class v extends s{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=qg,this.cameraTarget="auto auto auto",this.fieldOfView="auto",this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=3e3,this.interactionPrompt=Co,this.interactionPromptStyle=GA,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.touchAction=Ax,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=50,this.a11y=null,this[t]=this.shadowRoot.querySelector(".interaction-prompt"),this[e]=this.shadowRoot.querySelector("#prompt"),this[i]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[n]=this.shadowRoot.querySelector(".pan-target"),this[r]=0,this[a]=1/0,this[o]=!1,this[l]=!1,this[c]=ge.AUTOMATIC,this[h]=new xx(this[nt].camera,this[Si],this[nt]),this[u]=new $o,this[d]=!1,this[p]=!1,this[f]=!1,this[m]={},this[A]=()=>{const _=this[Yt].changeSource;this[To]=_,_===ge.USER_INTERACTION&&(this[Mo]=!0,this[Io]())},this[g]=()=>{this[zA](),this[Be]();const _=this[Yt].changeSource;this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:_}}))},this[b]=_=>{this[ll].classList.toggle("pointer-tumbling",_.type==="pointer-change-start")}}get inputSensitivity(){return this[Yt].inputSensitivity}set inputSensitivity(_){this[Yt].inputSensitivity=_}getCameraOrbit(){const{theta:_,phi:E,radius:x}=this[ch];return{theta:_,phi:E,radius:x,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return Cn(this[Kt].isPresenting?this[Kt].arRenderer.target:this[nt].getDynamicTarget())}getFieldOfView(){return this[Yt].getFieldOfView()}getMinimumFieldOfView(){return this[Yt].options.minimumFieldOfView}getMaximumFieldOfView(){return this[Yt].options.maximumFieldOfView}getIdealAspect(){return this[nt].idealAspect}jumpCameraToGoal(){this[Ys]=!0,this.requestUpdate(Ys,!1)}resetInteractionPrompt(){this[Xs]=0,this[Or]=1/0,this[Mo]=!1,this[Xn]=this.interactionPrompt===Co&&this.cameraControls}zoom(_){const E=new WheelEvent("wheel",{deltaY:-30*_});this[Si].dispatchEvent(E)}connectedCallback(){super.connectedCallback(),this[Yt].addEventListener("user-interaction",this[kr]),this[Yt].addEventListener("pointer-change-start",this[js]),this[Yt].addEventListener("pointer-change-end",this[js])}disconnectedCallback(){super.disconnectedCallback(),this[Yt].removeEventListener("user-interaction",this[kr]),this[Yt].removeEventListener("pointer-change-start",this[js]),this[Yt].removeEventListener("pointer-change-end",this[js])}updated(_){super.updated(_);const E=this[Yt],x=this[nt];if(_.has("cameraControls")&&(this.cameraControls?(E.enableInteraction(),this.interactionPrompt===Co&&(this[Xn]=!0)):(E.disableInteraction(),this[Io]()),this[Si].setAttribute("aria-label",this[as])),_.has("disableZoom")&&(E.disableZoom=this.disableZoom),_.has("disablePan")&&(E.enablePan=!this.disablePan),_.has("disableTap")&&(E.enableTap=!this.disableTap),(_.has("interactionPrompt")||_.has("cameraControls")||_.has("src"))&&(this.interactionPrompt===Co&&this.cameraControls&&!this[Mo]?this[Xn]=!0:this[Io]()),_.has("interactionPromptStyle")&&(this[wo].style.opacity=this.interactionPromptStyle==px?"1":"0"),_.has("touchAction")){const I=this.touchAction;E.applyOptions({touchAction:I}),E.updateTouchActionStyle()}_.has("orbitSensitivity")&&(E.orbitSensitivity=this.orbitSensitivity),_.has("zoomSensitivity")&&(E.zoomSensitivity=this.zoomSensitivity),_.has("panSensitivity")&&(E.panSensitivity=this.panSensitivity),_.has("interpolationDecay")&&(E.setDamperDecayTime(this.interpolationDecay),x.setTargetDamperDecayTime(this.interpolationDecay)),_.has("a11y")&&this[VA](),this[Ys]===!0&&Promise.resolve().then((()=>{E.jumpToGoal(),x.jumpToGoal(),this[lh](),this[Ys]=!1}))}async updateFraming(){const _=this[nt],E=_.adjustedFoV(_.framedFoVDeg);await _.updateFraming();const x=_.adjustedFoV(_.framedFoVDeg),I=this[Yt].getFieldOfView()/E;this[Yt].setFieldOfView(x*I),this[Ks]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(_,E,x){const I=this[Si],T=this[oh];if(T[0].style.opacity==="1")return void console.warn("interact() failed because an existing interaction is running.");const L=new Array;L.push({x:rs(E.x),y:rs(E.y)});const H=[{x:L[0].x(0),y:L[0].y(0)}];x!=null&&(L.push({x:rs(x.x),y:rs(x.y)}),H.push({x:L[1].x(0),y:L[1].y(0)}));let U=performance.now();const{width:O,height:F}=this[nt],q=this.getBoundingClientRect(),N=lt=>{for(const[ft,Y]of H.entries()){const{style:J}=T[ft];J.transform=`translateX(${O*Y.x}px) translateY(${F*Y.y}px)`,lt==="pointerdown"?J.opacity="1":lt==="pointerup"&&(J.opacity="0");const ct={pointerId:ft-5678,pointerType:"touch",target:I,clientX:O*Y.x+q.x,clientY:F*Y.y+q.y,altKey:!0};I.dispatchEvent(new PointerEvent(lt,ct))}},K=()=>{const lt=this[To];if(lt!==ge.AUTOMATIC||!I.isConnected){for(const Y of this[oh])Y.style.opacity="0";return N("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:lt}})),void document.removeEventListener("visibilitychange",$)}const ft=Math.min(1,(performance.now()-U)/_);for(const[Y,J]of H.entries())J.x=L[Y].x(ft),J.y=L[Y].y(ft);N("pointermove"),ft<1?requestAnimationFrame(K):(N("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:ge.AUTOMATIC}})),document.removeEventListener("visibilitychange",$))},$=()=>{let lt=0;document.visibilityState==="hidden"?lt=performance.now()-U:U=performance.now()-lt};document.addEventListener("visibilitychange",$),N("pointerdown"),this[To]=ge.AUTOMATIC,requestAnimationFrame(K)}[(t=ah,e=wo,i=oh,n=rl,r=Xs,a=Or,o=Mo,l=Xn,c=To,h=Yt,u=ch,d=Ys,p=hh,f=Ks,m=tn,jA)](_){const E=this[Yt],x=this[nt];x.framedFoVDeg=180*_[0]/Math.PI,E.changeSource=ge.NONE,E.setFieldOfView(x.adjustedFoV(x.framedFoVDeg)),this[kr]()}[qA](_){const E=this[Yt];if(this[Ks]){const{theta:x,phi:I}=this.getCameraOrbit();_[0]=x,_[1]=I,this[Ks]=!1}E.changeSource=ge.NONE,E.setOrbit(_[0],_[1],_[2]),this[kr]()}[YA](_){this[Yt].applyOptions({minimumAzimuthalAngle:_[0],minimumPolarAngle:_[1],minimumRadius:_[2]}),this.jumpCameraToGoal()}[KA](_){this[Yt].applyOptions({maximumAzimuthalAngle:_[0],maximumPolarAngle:_[1],maximumRadius:_[2]}),this[WA](_[2]),this.jumpCameraToGoal()}[JA](_){this[Yt].applyOptions({minimumFieldOfView:180*_[0]/Math.PI}),this.jumpCameraToGoal()}[$A](_){const E=this[nt].adjustedFoV(180*_[0]/Math.PI);this[Yt].applyOptions({maximumFieldOfView:E}),this.jumpCameraToGoal()}[XA](_){const[E,x,I]=_;this[Kt].arRenderer.isPresenting||this[nt].setTarget(E,x,I),this[Yt].changeSource=ge.NONE,this[Kt].arRenderer.updateTarget(),this[kr]()}[Ui](_,E){if(super[Ui](_,E),this[Kt].isPresenting||!this[hr]())return;const x=this[Yt],I=this[nt],T=performance.now();if(this[Xn]&&this.loaded&&T>this[Aa]+this.interactionPromptThreshold&&(this[Xn]=!1,this[Or]=T,this[ah].classList.add("visible")),isFinite(this[Or])&&this.interactionPromptStyle===GA){const U=(T-this[Or])/5e3%1,O=cx(U),F=hx(U);if(this[wo].style.opacity=`${F}`,O!==this[Xs]){const q=O*I.width*.05,N=(O-this[Xs])*Math.PI/16;this[wo].style.transform=`translateX(${q}px)`,x.changeSource=ge.AUTOMATIC,x.adjustOrbit(N,0,0),this[Xs]=O}}const L=x.update(_,E),H=I.updateTarget(E);(L||H)&&this[lh]()}[Io](){this[Xn]=!1,this[ah].classList.remove("visible"),this[Or]=1/0}[WA](_){const E=Math.max(this[nt].farRadius(),_),x=Math.abs(2*E);this[Yt].updateNearFar(0,x)}[zA](){const{theta:_,phi:E}=this[Yt].getCameraSpherical(this[ch]),x=(4+Math.floor((_%_x+yx)/Xg))%4,I=Math.floor(E/vx),T=`${dx[I]}${ux[x]}`,L=T;L in this[tn]?this[Bl](this[tn][L]):this[Bl](`View from stage ${T}`)}get[as](){let _=". Use mouse, touch or arrow keys to move.";return"interaction-prompt"in this[tn]&&(_=`. ${this[tn]["interaction-prompt"]}`),super[as].replace(/\.$/,"")+(this.cameraControls?_:"")}async[Rl](_){const E=this[Yt],x=this[nt],I=x.adjustedFoV(x.framedFoVDeg);super[Rl](_);const T=x.adjustedFoV(x.framedFoVDeg)/I,L=E.getFieldOfView()*(isFinite(T)?T:1);E.updateAspect(this[nt].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[Yt].setFieldOfView(L),this.jumpCameraToGoal()}[Pi](){super[Pi](),this[hh]?this[Ks]=!0:this[hh]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}[(A=kr,g=lh,b=js,VA)](){if(typeof this.a11y=="string")if(this.a11y.startsWith("{"))try{this[tn]=JSON.parse(this.a11y)}catch(_){console.warn("Error parsing a11y JSON:",_)}else this.a11y.length>0?console.warn("Error not supported format, should be a JSON string:",this.a11y):this[tn]={};else typeof this.a11y=="object"&&this.a11y!=null?this[tn]=Object.assign({},this.a11y):this[tn]={};this[Si].setAttribute("aria-label",this[as])}}return Ee([Et({type:Boolean,attribute:"camera-controls"})],v.prototype,"cameraControls",void 0),Ee([xn({intrinsics:jg,observeEffects:!0,updateHandler:qA}),Et({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],v.prototype,"cameraOrbit",void 0),Ee([xn({intrinsics:bx,observeEffects:!0,updateHandler:XA}),Et({type:String,attribute:"camera-target",hasChanged:()=>!0})],v.prototype,"cameraTarget",void 0),Ee([xn({intrinsics:HA,observeEffects:!0,updateHandler:jA}),Et({type:String,attribute:"field-of-view",hasChanged:()=>!0})],v.prototype,"fieldOfView",void 0),Ee([xn({intrinsics:mx,updateHandler:YA}),Et({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],v.prototype,"minCameraOrbit",void 0),Ee([xn({intrinsics:gx,updateHandler:KA}),Et({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],v.prototype,"maxCameraOrbit",void 0),Ee([xn({intrinsics:fx,updateHandler:JA}),Et({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],v.prototype,"minFieldOfView",void 0),Ee([xn({intrinsics:HA,updateHandler:$A}),Et({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],v.prototype,"maxFieldOfView",void 0),Ee([Et({type:Number,attribute:"interaction-prompt-threshold"})],v.prototype,"interactionPromptThreshold",void 0),Ee([Et({type:String,attribute:"interaction-prompt"})],v.prototype,"interactionPrompt",void 0),Ee([Et({type:String,attribute:"interaction-prompt-style"})],v.prototype,"interactionPromptStyle",void 0),Ee([Et({type:Number,attribute:"orbit-sensitivity"})],v.prototype,"orbitSensitivity",void 0),Ee([Et({type:Number,attribute:"zoom-sensitivity"})],v.prototype,"zoomSensitivity",void 0),Ee([Et({type:Number,attribute:"pan-sensitivity"})],v.prototype,"panSensitivity",void 0),Ee([Et({type:String,attribute:"touch-action"})],v.prototype,"touchAction",void 0),Ee([Et({type:Boolean,attribute:"disable-zoom"})],v.prototype,"disableZoom",void 0),Ee([Et({type:Boolean,attribute:"disable-pan"})],v.prototype,"disablePan",void 0),Ee([Et({type:Boolean,attribute:"disable-tap"})],v.prototype,"disableTap",void 0),Ee([Et({type:Number,attribute:"interpolation-decay"})],v.prototype,"interpolationDecay",void 0),Ee([Et()],v.prototype,"a11y",void 0),v})((s=>{var t,e,i,n,r,a,o,l,c,h;class u extends s{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arUsdzMaxTextureSize="auto",this.arPlacement="floor",this.arModes="webxr scene-viewer quick-look",this.iosSrc=null,this.xrEnvironment=!1,this[t]=!1,this[e]=this.shadowRoot.querySelector(".ar-button"),this[i]=document.createElement("a"),this[n]=new Set,this[r]=oa,this[a]=!1,this[o]=p=>{p.preventDefault(),this.activateAR()},this[l]=({status:p})=>{p!==sl&&this[Kt].arRenderer.presentedScene!==this[nt]||(this.setAttribute("ar-status",p),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:p}})),p===sl?this.removeAttribute("ar-tracking"):p===Yg&&this.setAttribute("ar-tracking",Kg))},this[c]=({status:p})=>{this.setAttribute("ar-tracking",p),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:p}}))},this[h]=p=>{p.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[zo]!==oa}connectedCallback(){super.connectedCallback(),this[Kt].arRenderer.addEventListener("status",this[Qh]),this.setAttribute("ar-status",sl),this[Kt].arRenderer.addEventListener("tracking",this[kh]),this[Xr].addEventListener("message",this[Oh])}disconnectedCallback(){super.disconnectedCallback(),this[Kt].arRenderer.removeEventListener("status",this[Qh]),this[Kt].arRenderer.removeEventListener("tracking",this[kh]),this[Xr].removeEventListener("message",this[Oh])}update(p){super.update(p),p.has("arScale")&&(this[nt].canScale=this.arScale!=="fixed"),p.has("arPlacement")&&(this[nt].updateShadow(),this[Be]()),p.has("arModes")&&(this[Nh]=MS(this.arModes)),(p.has("ar")||p.has("arModes")||p.has("src")||p.has("iosSrc")||p.has("arUsdzMaxTextureSize"))&&this[la]()}async activateAR(){switch(this[zo]){case Fh:await this[Rm]();break;case Mm:await this[Tm]();break;case Im:this[Bm]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities")}}async[(t=TS,e=sn,i=Xr,n=Nh,r=zo,a=Vo,o=Wo,l=Qh,c=kh,h=Oh,la)](){var p;let f=oa;if(this.ar){if(this.src!=null)for(const m of this[Nh]){if(m==="webxr"&&mg&&!xm&&await this[Kt].arRenderer.supportsPresentation()){f=Mm;break}if(m==="scene-viewer"&&!Sm&&(E_||navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&(!((p=(await navigator.userAgentData.getHighEntropyValues(["formFactor"])).formFactor)===null||p===void 0)&&p.includes("XR")))){f=Im;break}if(m==="quick-look"&&jp){f=Fh;break}}f===oa&&this.iosSrc!=null&&jp&&(f=Fh)}if(f!==oa)this[sn].classList.add("enabled"),this[sn].addEventListener("click",this[Wo]);else if(this[sn].classList.contains("enabled")){this[sn].removeEventListener("click",this[Wo]),this[sn].classList.remove("enabled");const m=Cx;this.setAttribute("ar-status",m),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:m}}))}this[zo]=f}async[Tm](){console.log("Attempting to present in AR with WebXR..."),await this[Gh]();try{this[sn].removeEventListener("click",this[Wo]);const{arRenderer:p}=this[Kt];p.placeOnWall=this.arPlacement==="wall",await p.present(this[nt],this.xrEnvironment)}catch(p){console.warn("Error while trying to present in AR with WebXR"),console.error(p),await this[Kt].arRenderer.stopPresenting(),xm=!0,console.warn("Falling back to next ar-mode"),await this[la](),this.activateAR()}finally{this[la]()}}async[Gh](){this.loaded||(this[Vo]=!0,this[ds](),await((p,f,m=null)=>new Promise((A=>{p.addEventListener(f,(function g(b){m&&!m(b)||(A(b),p.removeEventListener(f,g))}))})))(this,"load"),this[Vo]=!1)}[os](){return super[os]()||this[Vo]}[Bm](){const p=self.location.toString(),f=new URL(p),m=new URL(this.src,p);m.hash&&(m.hash="");const A=new URLSearchParams(m.search);if(f.hash=Cm,A.set("mode","ar_preferred"),A.has("disable_occlusion")||A.set("disable_occlusion","true"),this.arScale==="fixed"&&A.set("resizable","false"),this.arPlacement==="wall"&&A.set("enable_vertical_placement","true"),A.has("sound")){const b=new URL(A.get("sound"),p);A.set("sound",b.toString())}if(A.has("link")){const b=new URL(A.get("link"),p);A.set("link",b.toString())}const g=`intent://arvr.google.com/scene-viewer/1.2?${A.toString()+"&file="+encodeURIComponent(m.toString())}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(f.toString())};end;`;self.addEventListener("hashchange",(()=>{self.location.hash===Cm&&(Sm=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[la]())}),{once:!0}),this[Xr].setAttribute("href",g),console.log("Attempting to present in AR with Scene Viewer..."),this[Xr].click()}async[Rm](){const p=!this.iosSrc;this[sn].classList.remove("enabled");const f=p?await this.prepareUSDZ():this.iosSrc,m=new URL(f,self.location.toString());if(p){const b=self.location.toString(),v=new URL(b),y=new URL(this.src,v);y.hash&&(m.hash=y.hash)}this.arScale==="fixed"&&(m.hash&&(m.hash+="&"),m.hash+="allowsContentScaling=0");const A=this[Xr];A.setAttribute("rel","ar");const g=document.createElement("img");A.appendChild(g),A.setAttribute("href",m.toString()),p&&A.setAttribute("download","model.usdz"),A.style.display="none",A.isConnected||this.shadowRoot.appendChild(A),console.log("Attempting to present in AR with Quick Look..."),A.click(),A.removeChild(g),p&&URL.revokeObjectURL(f),this[sn].classList.add("enabled")}async prepareUSDZ(){const p=this[cr].beginActivity("usdz-conversion");await this[Gh]();const{model:f,shadow:m,target:A}=this[nt];if(f==null)return"";let g=!1;m!=null&&(g=m.visible,m.visible=!1),p(.2);const b=new SS;A.remove(f),f.position.copy(A.position),f.updateWorldMatrix(!1,!0);const v=await b.parseAsync(f,{maxTextureSize:isNaN(this.arUsdzMaxTextureSize)?1/0:Math.max(parseInt(this.arUsdzMaxTextureSize),16)});f.position.set(0,0,0),A.add(f);const y=new Blob([v],{type:"model/vnd.usdz+zip"}),_=URL.createObjectURL(y);return p(1),m!=null&&(m.visible=g),_}}return $n([Et({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),$n([Et({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),$n([Et({type:String,attribute:"ar-usdz-max-texture-size"})],u.prototype,"arUsdzMaxTextureSize",void 0),$n([Et({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),$n([Et({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),$n([Et({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),$n([Et({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u})((s=>{var t,e,i,n,r,a,o,l;class c extends s{static set dracoDecoderLocation(u){je.setDRACODecoderLocation(u)}static get dracoDecoderLocation(){return je.getDRACODecoderLocation()}static set ktx2TranscoderLocation(u){je.setKTX2TranscoderLocation(u)}static get ktx2TranscoderLocation(){return je.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(u){je.setMeshoptDecoderLocation(u)}static get meshoptDecoderLocation(){return je.getMeshoptDecoderLocation()}static set lottieLoaderLocation(u){wi.singleton.textureUtils.lottieLoaderUrl=u}static get lottieLoaderLocation(){return wi.singleton.textureUtils.lottieLoaderUrl}static mapURLs(u){wi.singleton.loader[ir].manager.setURLModifier(u)}dismissPoster(){this.loaded?this[Wh]():(this[ca]=!0,this[ds]())}showPoster(){const u=this[Vh];if(u.classList.contains("show"))return;u.classList.add("show"),this[Si].classList.remove("show");const d=this[Kr];d.removeAttribute("tabindex"),d.removeAttribute("aria-hidden");const p=this.modelIsVisible;this[qo]=!1,this[Tl](p)}getDimensions(){return Cn(this[nt].size)}getBoundingBoxCenter(){return Cn(this[nt].boundingBox.getCenter(new B))}constructor(...u){super(...u),this.poster=null,this.reveal=zh,this.loading=BS,this[t]=!1,this[e]=!1,this[i]=this.shadowRoot.querySelector(".slot.poster"),this[n]=this.shadowRoot.querySelector("#default-poster"),this[r]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[a]=this[Kr].getAttribute("aria-label"),this[o]=((A,g)=>{let b=null;const v=(...y)=>{b==null&&(A(...y),b=self.setTimeout((()=>b=null),g))};return v.flush=()=>{b!=null&&(self.clearTimeout(b),b=null)},v})((A=>{const g=this[Yr].parentNode;requestAnimationFrame((()=>{this[Yr].style.transform=`scaleX(${A})`,A===0&&(g.removeChild(this[Yr]),g.appendChild(this[Yr])),this[Yr].classList.toggle("hide",A===1)}))}),100),this[l]=A=>{const g=A.detail.totalProgress,b=A.detail.reason;g===1&&(this[qh].flush(),this.loaded&&(this[ca]||this.reveal===zh)&&this[Wh]()),this[qh](g),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:g,reason:b}}))};const d=self.ModelViewerElement||{},p=d.dracoDecoderLocation||"https://www.gstatic.com/draco/versioned/decoders/1.5.6/";je.setDRACODecoderLocation(p);const f=d.ktx2TranscoderLocation||"https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/";je.setKTX2TranscoderLocation(f),d.meshoptDecoderLocation&&je.setMeshoptDecoderLocation(d.meshoptDecoderLocation);const m=d.lottieLoaderLocation||"https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js";wi.singleton.textureUtils.lottieLoaderUrl=m}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[cr].addEventListener("progress",this[jh])}disconnectedCallback(){super.disconnectedCallback(),this[cr].removeEventListener("progress",this[jh])}async updated(u){super.updated(u),u.has("poster")&&this.poster!=null&&(this[Kr].style.backgroundImage=`url(${this.poster})`),u.has("alt")&&this[Kr].setAttribute("aria-label",this[Du]),(u.has("reveal")||u.has("loading"))&&this[ds]()}[(t=qo,e=ca,i=Vh,n=Kr,r=Yr,a=DS,o=qh,l=jh,os)](){return!!this.src&&(this[ca]||this.loading===RS||this.reveal===zh&&this[ar])}[Wh](){this[ca]=!1;const u=this[Vh];if(!u.classList.contains("show"))return;u.classList.remove("show"),this[Si].classList.add("show");const d=this.modelIsVisible;this[qo]=!0,this[Tl](d);const p=this.getRootNode();p&&p.activeElement===this&&this[Si].focus();const f=this[Kr];f.setAttribute("aria-hidden","true"),f.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[hr](){return super[hr]()&&this[qo]}}return Hh([Et({type:String})],c.prototype,"poster",void 0),Hh([Et({type:String})],c.prototype,"reveal",void 0),Hh([Et({type:String})],c.prototype,"loading",void 0),c})((s=>{var t;class e extends s{constructor(...n){super(n),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[t]=!0,this[nt].subscribeMixerEvent("loop",(r=>{const a=r.action._loopCount,o=r.action._clip.name,l=r.action._clip.uuid,c=this[nt].markedAnimations.find((h=>h.name===o));if(c){this[nt].updateAnimationLoop(c.name,c.loopMode,c.repetitionCount);const h=this[nt].markedAnimations.filter((u=>u.name!==o));this[nt].markedAnimations=h}this.dispatchEvent(new CustomEvent("loop",{detail:{count:a,name:o,uuid:l}}))})),this[nt].subscribeMixerEvent("finished",(r=>{if(this[nt].appendedAnimations.includes(r.action._clip.name)){const a=this[nt].appendedAnimations.filter((o=>o!==r.action._clip.name));this[nt].appendedAnimations=a}else this[ei]=!0;this.dispatchEvent(new CustomEvent("finished"))}))}get availableAnimations(){return this.loaded?this[nt].animationNames:[]}get duration(){return this[nt].duration}get paused(){return this[ei]}get currentTime(){return this[nt].animationTime}get appendedAnimations(){return this[nt].appendedAnimations}set currentTime(n){this[nt].animationTime=n,this[Be]()}get timeScale(){return this[nt].animationTimeScale}set timeScale(n){this[nt].animationTimeScale=n}pause(){this[ei]||(this[ei]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(n){this.availableAnimations.length>0&&(this[ei]=!1,this[Go](n),this.dispatchEvent(new CustomEvent("play")))}appendAnimation(n,r){this.availableAnimations.length>0&&(this[ei]=!1,this[hm](n,r),this.dispatchEvent(new CustomEvent("append-animation")))}detachAnimation(n,r){this.availableAnimations.length>0&&(this[ei]=!1,this[um](n,r),this.dispatchEvent(new CustomEvent("detach-animation")))}[(t=ei,Pi)](){super[Pi](),this[ei]=!0,this.animationName!=null&&this[Go](),this.autoplay&&this.play()}[Ui](n,r){super[Ui](n,r),this[ei]||!this[hr]()&&!this[Kt].isPresenting||(this[nt].updateAnimation(r/1e3),this[Be]())}updated(n){super.updated(n),n.has("autoplay")&&this.autoplay&&this.play(),n.has("animationName")&&this[Go]()}[Go](n=hS){var r;const a=(r=n.repetitions)!==null&&r!==void 0?r:1/0,o=n.pingpong?bl:a===1?Ma:fu;this[nt].playAnimation(this.animationName,this.animationCrossfadeDuration/1e3,o,a),this[ei]&&(this[nt].updateAnimation(0),this[Be]())}[hm](n="",r=uS){var a;const o=(a=r.repetitions)!==null&&a!==void 0?a:1/0,l=r.pingpong?bl:o===1?Ma:fu,c=!!r.repetitions||"pingpong"in r;this[nt].appendAnimation(n||this.animationName,l,o,r.weight,r.timeScale,r.fade,r.warp,r.relativeWarp,r.time,c),this[ei]&&(this[nt].updateAnimation(0),this[Be]())}[um](n="",r=dS){this[nt].detachAnimation(n||this.animationName,r.fade),this[ei]&&(this[nt].updateAnimation(0),this[Be]())}}return Bh([Et({type:Boolean})],e.prototype,"autoplay",void 0),Bh([Et({type:String,attribute:"animation-name"})],e.prototype,"animationName",void 0),Bh([Et({type:Number,attribute:"animation-crossfade-duration"})],e.prototype,"animationCrossfadeDuration",void 0),e})(fa))))))));customElements.define("model-viewer",PS);export{t0 as CanvasTexture,un as FileLoader,zi as Loader,PS as ModelViewerElement,Fe as NearestFilter};
