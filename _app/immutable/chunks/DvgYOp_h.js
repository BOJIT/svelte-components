/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K0=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function Ee(s){return(e,t)=>t!==void 0?((n,i,r)=>{i.constructor.createProperty(r,n)})(s,e,t):K0(s,e);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var jl;(jl=window.HTMLSlotElement)===null||jl===void 0||jl.prototype.assignedElements;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="169",J0=0,$0=1,Z0=2,nr=100,ev=101,tv=102,nv=200,iv=201,rv=202,sv=203,av=204,ov=205,lv=206,cv=207,hv=208,uv=209,dv=210,Av=211,pv=212,mv=213,gv=214,fv=0,vv=1,_v=2,yv=3,Ev=4,xv=5,Sv=6,Cv=7,Od="attached",os=300,hr=301,ls=302,ul=303,Pl=306,Qn=1e3,Et=1001,cs=1002,Ut=1003,Nl=1004,ar=1005,We=1006,ns=1007,cn=1008,mt=1009,Ku=1010,Ju=1011,Ea=1012,Fl=1013,bi=1014,yt=1015,xt=1016,$u=1017,Zu=1018,hs=1020,jg=35902,ct=1023,xa=1026,us=1027,Si=1028,ed=1029,or=1030,td=1031,nd=1033,qo=33776,pa=33777,Xo=33778,ma=33779,dl=35840,su=35841,Al=35842,au=35843,pl=36196,ml=37492,gl=37496,Sa=37808,ou=37809,lu=37810,cu=37811,Ca=37812,hu=37813,uu=37814,du=37815,Au=37816,pu=37817,mu=37818,gu=37819,fu=37820,vu=37821,ga=36492,_u=36494,yu=36495,Eu=36284,xu=36285,Su=36286,Yg=2201,id=2202,ds=2300,As=2301,Yl=2302,Yr=2400,Kr=2401,fl=2402,Iv=2500,ai="",st="srgb",et="srgb-linear",Ql="display-p3",Da="display-p3-linear",vl="linear",rt="srgb",_l="rec709",yl="p3",pr=7680,wv=512,Mv=513,bv=514,Tv=515,Bv=516,Rv=517,Dv=518,Lv=519,Cu=35044,kd="300 es",ps=2e3,El=2001;class Mn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gd=1234567;const fa=Math.PI/180,ms=180/Math.PI;function In(){const s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Pt[255&s]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[255&e]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[63&t|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[255&n]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Iu(s,e){return(s%e+e)%e}function va(s,e,t){return(1-t)*s+t*e}function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}const jo={DEG2RAD:fa,RAD2DEG:ms,generateUUID:In,clamp:bt,euclideanModulo:Iu,mapLinear:function(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:va,damp:function(s,e,t,n){return va(s,e,1-Math.exp(-t*n))},pingpong:function(s,e=1){return e-Math.abs(Iu(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){s!==void 0&&(Gd=s);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(s){return s*fa},radToDeg:function(s){return s*ms},isPowerOfTwo:function(s){return!(s&s-1)&&s!==0},ceilPowerOfTwo:function(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))},floorPowerOfTwo:function(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))},setQuaternionFromProperEuler:function(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),A=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*A,o*c);break;case"YXY":s.set(l*A,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*A,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Ye,denormalize:Sn};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class be{constructor(e,t,n,i,r,a,o,l,c){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],A=n[5],p=n[8],g=i[0],f=i[3],m=i[6],_=i[1],v=i[4],y=i[7],E=i[2],S=i[5],C=i[8];return r[0]=a*g+o*_+l*E,r[3]=a*f+o*v+l*S,r[6]=a*m+o*y+l*C,r[1]=c*g+h*_+u*E,r[4]=c*f+h*v+u*S,r[7]=c*m+h*y+u*C,r[2]=d*g+A*_+p*E,r[5]=d*f+A*v+p*S,r[8]=d*m+A*y+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,A=c*r-a*l,p=t*u+n*d+i*A;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=A*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kl=new be;function Kg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ia(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uv(){const s=Ia("canvas");return s.style.display="block",s}const Hd={};function Yo(s){s in Hd||(Hd[s]=!0,console.warn(s))}const zd=new be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vd=new be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[et]:{transfer:vl,primaries:_l,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[st]:{transfer:rt,primaries:_l,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Da]:{transfer:vl,primaries:yl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Vd),fromReference:s=>s.applyMatrix3(zd)},[Ql]:{transfer:rt,primaries:yl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Vd),fromReference:s=>s.applyMatrix3(zd).convertLinearToSRGB()}},Pv=new Set([et,Da]),He={enabled:!0,_workingColorSpace:et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Pv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=bs[e].toReference;return(0,bs[t].fromReference)(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return bs[s].primaries},getTransfer:function(s){return s===ai?vl:bs[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(bs[e].luminanceCoefficients)}};function is(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function Jl(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}let mr;class Nv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mr===void 0&&(mr=Ia("canvas")),mr.width=e.width,mr.height=e.height;const n=mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ia("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=255*is(r[a]/255);return n.putImageData(i,0,0),t}if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*is(t[n]/255)):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fv=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($l(i[a].image)):r.push($l(i[a]))}else r=$l(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function $l(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qv=0;class Ke extends Mn{constructor(e=Ke.DEFAULT_IMAGE,t=Ke.DEFAULT_MAPPING,n=1001,i=1001,r=1006,a=1008,o=1023,l=1009,c=Ke.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=In(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==os)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case Et:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case Et:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null,Ke.DEFAULT_MAPPING=os,Ke.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,t=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],A=l[5],p=l[9],g=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+f)<.1&&Math.abs(c+A+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(A+1)/2,E=(m+1)/2,S=(h+d)/4,C=(u+g)/4,B=(p+f)/4;return v>y&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=S/n,r=C/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=B/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=C/r,i=B/r),this.set(n,i,r,t),this}let _=Math.sqrt((f-p)*(f-p)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(f-p)/_,this.y=(u-g)/_,this.z=(d-h)/_,this.w=Math.acos((c+A+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ov extends Mn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Ov{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jg extends Ke{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $g extends Ke{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],A=r[a+1],p=r[a+2],g=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=A,e[t+2]=p,void(e[t+3]=g);if(u!==g||l!==d||c!==A||h!==p){let f=1-o;const m=l*d+c*A+h*p+u*g,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const E=Math.sqrt(v),S=Math.atan2(E,m*_);f=Math.sin(f*S)/E,o=Math.sin(o*S)/E}const y=o*_;if(l=l*f+d*y,c=c*f+A*y,h=h*f+p*y,u=u*f+g*y,f===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],A=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*A-c*d,e[t+1]=l*p+h*d+c*u-o*A,e[t+2]=c*p+h*A+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),A=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*A*p,this._y=c*A*u-d*h*p,this._z=c*h*p+d*A*u,this._w=c*h*u-d*A*p;break;case"YXZ":this._x=d*h*u+c*A*p,this._y=c*A*u-d*h*p,this._z=c*h*p-d*A*u,this._w=c*h*u+d*A*p;break;case"ZXY":this._x=d*h*u-c*A*p,this._y=c*A*u+d*h*p,this._z=c*h*p+d*A*u,this._w=c*h*u-d*A*p;break;case"ZYX":this._x=d*h*u-c*A*p,this._y=c*A*u+d*h*p,this._z=c*h*p-d*A*u,this._w=c*h*u+d*A*p;break;case"YZX":this._x=d*h*u+c*A*p,this._y=c*A*u+d*h*p,this._z=c*h*p-d*A*u,this._w=c*h*u-d*A*p;break;case"XZY":this._x=d*h*u-c*A*p,this._y=c*A*u-d*h*p,this._z=c*h*p+d*A*u,this._w=c*h*u+d*A*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const A=.5/Math.sqrt(d+1);this._w=.25/A,this._x=(h-l)*A,this._y=(r-c)*A,this._z=(a-i)*A}else if(n>o&&n>u){const A=2*Math.sqrt(1+n-o-u);this._w=(h-l)/A,this._x=.25*A,this._y=(i+a)/A,this._z=(r+c)/A}else if(o>u){const A=2*Math.sqrt(1+o-n-u);this._w=(r-c)/A,this._x=(i+a)/A,this._y=.25*A,this._z=(l+h)/A}else{const A=2*Math.sqrt(1+u-n-o);this._w=(a-i)/A,this._x=(r+c)/A,this._y=(l+h)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const A=1-t;return this._w=A*a+t*this._w,this._x=A*n+t*this._x,this._y=A*i+t*this._y,this._z=A*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new T,Wd=new Yt;class jt{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ha.copy(n.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),za.subVectors(this.max,Ts),gr.subVectors(e.a,Ts),fr.subVectors(e.b,Ts),vr.subVectors(e.c,Ts),ui.subVectors(fr,gr),di.subVectors(vr,fr),Ni.subVectors(gr,vr);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ni.z,Ni.y,ui.z,0,-ui.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!!ec(t,gr,fr,vr,za)&&(t=[1,0,0,0,1,0,0,0,1],!!ec(t,gr,fr,vr,za)&&(Va.crossVectors(ui,di),t=[Va.x,Va.y,Va.z],ec(t,gr,fr,vr,za)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(vn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new T,new T,new T,new T,new T,new T,new T,new T],vn=new T,Ha=new jt,gr=new T,fr=new T,vr=new T,ui=new T,di=new T,Ni=new T,Ts=new T,za=new T,Va=new T,Fi=new T;function ec(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Fi.fromArray(s,r);const o=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kv=new jt,Bs=new T,tc=new T;class pn{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(tc)),this.expandByPoint(Bs.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new T,nc=new T,Wa=new T,Ai=new T,ic=new T,qa=new T,rc=new T;class La{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nc.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(nc);const r=.5*e.distanceTo(t),a=-this.direction.dot(Wa),o=Ai.dot(this.direction),l=-Ai.dot(Wa),c=Ai.lengthSq(),h=Math.abs(1-a*a);let u,d,A,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const g=1/h;u*=g,d*=g,A=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),A=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),A=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),A=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),A=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),A=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),A=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nc).addScaledVector(Wa,d),A}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i?null:((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,r){ic.subVectors(t,e),qa.subVectors(n,e),rc.crossVectors(ic,qa);let a,o=this.direction.dot(rc);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ai.subVectors(this.origin,e);const l=a*this.direction.dot(qa.crossVectors(Ai,qa));if(l<0)return null;const c=a*this.direction.dot(ic.cross(Ai));if(c<0||l+c>o)return null;const h=-a*Ai.dot(rc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(e,t,n,i,r,a,o,l,c,h,u,d,A,p,g,f){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,A,p,g,f)}set(e,t,n,i,r,a,o,l,c,h,u,d,A,p,g,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=A,m[7]=p,m[11]=g,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,A=a*u,p=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=A+p*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=p+A*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,A=l*u,p=c*h,g=c*u;t[0]=d+g*o,t[4]=p*o-A,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=A*o-p,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,A=l*u,p=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=p+A*o,t[1]=A+p*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,A=a*u,p=o*h,g=o*u;t[0]=l*h,t[4]=p*c-A,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=A*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,A=a*c,p=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=p*u+A,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=A*u+p,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*l,A=a*c,p=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=A*u-p,t[2]=p*u-A,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gv,e,Hv)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),pi.crossVectors(n,en),pi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),pi.crossVectors(n,en)),pi.normalize(),Xa.crossVectors(en,pi),i[0]=pi.x,i[4]=Xa.x,i[8]=en.x,i[1]=pi.y,i[5]=Xa.y,i[9]=en.y,i[2]=pi.z,i[6]=Xa.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],A=n[13],p=n[2],g=n[6],f=n[10],m=n[14],_=n[3],v=n[7],y=n[11],E=n[15],S=i[0],C=i[4],B=i[8],b=i[12],R=i[1],W=i[5],D=i[9],G=i[13],N=i[2],z=i[6],F=i[10],J=i[14],ee=i[3],oe=i[7],he=i[11],Y=i[15];return r[0]=a*S+o*R+l*N+c*ee,r[4]=a*C+o*W+l*z+c*oe,r[8]=a*B+o*D+l*F+c*he,r[12]=a*b+o*G+l*J+c*Y,r[1]=h*S+u*R+d*N+A*ee,r[5]=h*C+u*W+d*z+A*oe,r[9]=h*B+u*D+d*F+A*he,r[13]=h*b+u*G+d*J+A*Y,r[2]=p*S+g*R+f*N+m*ee,r[6]=p*C+g*W+f*z+m*oe,r[10]=p*B+g*D+f*F+m*he,r[14]=p*b+g*G+f*J+m*Y,r[3]=_*S+v*R+y*N+E*ee,r[7]=_*C+v*W+y*z+E*oe,r[11]=_*B+v*D+y*F+E*he,r[15]=_*b+v*G+y*J+E*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],A=e[14];return e[3]*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*A-n*l*A)+e[7]*(+t*l*A-t*c*d+r*a*d-i*a*A+i*c*h-r*l*h)+e[11]*(+t*c*u-t*o*A-r*a*u+n*a*A+r*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],A=e[11],p=e[12],g=e[13],f=e[14],m=e[15],_=u*f*c-g*d*c+g*l*A-o*f*A-u*l*m+o*d*m,v=p*d*c-h*f*c-p*l*A+a*f*A+h*l*m-a*d*m,y=h*g*c-p*u*c+p*o*A-a*g*A-h*o*m+a*u*m,E=p*u*l-h*g*l-p*o*d+a*g*d+h*o*f-a*u*f,S=t*_+n*v+i*y+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return e[0]=_*C,e[1]=(g*d*r-u*f*r-g*i*A+n*f*A+u*i*m-n*d*m)*C,e[2]=(o*f*r-g*l*r+g*i*c-n*f*c-o*i*m+n*l*m)*C,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*A-n*l*A)*C,e[4]=v*C,e[5]=(h*f*r-p*d*r+p*i*A-t*f*A-h*i*m+t*d*m)*C,e[6]=(p*l*r-a*f*r-p*i*c+t*f*c+a*i*m-t*l*m)*C,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*A+t*l*A)*C,e[8]=y*C,e[9]=(p*u*r-h*g*r-p*n*A+t*g*A+h*n*m-t*u*m)*C,e[10]=(a*g*r-p*o*r+p*n*c-t*g*c-a*n*m+t*o*m)*C,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*A-t*o*A)*C,e[12]=E*C,e[13]=(h*g*i-p*u*i+p*n*d-t*g*d-h*n*f+t*u*f)*C,e[14]=(p*o*i-a*g*i-p*n*l+t*g*l+a*n*f-t*o*f)*C,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,A=r*h,p=r*u,g=a*h,f=a*u,m=o*u,_=l*c,v=l*h,y=l*u,E=n.x,S=n.y,C=n.z;return i[0]=(1-(g+m))*E,i[1]=(A+y)*E,i[2]=(p-v)*E,i[3]=0,i[4]=(A-y)*S,i[5]=(1-(d+m))*S,i[6]=(f+_)*S,i[7]=0,i[8]=(p+v)*C,i[9]=(f-_)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=_r.set(i[0],i[1],i[2]).length();const a=_r.set(i[4],i[5],i[6]).length(),o=_r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const l=1/r,c=1/a,h=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=c,_n.elements[5]*=c,_n.elements[6]*=c,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=2e3){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let A,p;if(o===ps)A=-(a+r)/(a-r),p=-2*a*r/(a-r);else{if(o!==El)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);A=-a/(a-r),p=-a*r/(a-r)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=A,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=2e3){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,A=(n+i)*h;let p,g;if(o===ps)p=(a+r)*u,g=-2*u;else{if(o!==El)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);p=r*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-A,l[2]=0,l[6]=0,l[10]=g,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _r=new T,_n=new Se,Gv=new T(0,0,0),Hv=new T(1,1,1),pi=new T,Xa=new T,en=new T,qd=new Se,Xd=new Yt;class An{constructor(e=0,t=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],A=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,A),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,A),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,A),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class sd{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}}let zv=0;const jd=new T,yr=new Yt,Wn=new Se,ja=new T,Rs=new T,Vv=new T,Wv=new Yt,Yd=new T(1,0,0),Kd=new T(0,1,0),Jd=new T(0,0,1),$d={type:"added"},qv={type:"removed"},Er={type:"childadded",child:null},sc={type:"childremoved",child:null};class tt extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tt.DEFAULT_UP.clone();const e=new T,t=new An,n=new Yt,i=new T(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new be}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Yd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(Jd,e)}translateOnAxis(e,t){return jd.copy(e).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(Jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ja.copy(e):ja.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Rs,ja,this.up):Wn.lookAt(ja,Rs,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),yr.setFromRotationMatrix(Wn),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($d),Er.child=e,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qv),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($d),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,Vv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Wv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),A=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),A.length>0&&(n.animations=A),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}tt.DEFAULT_UP=new T(0,1,0),tt.DEFAULT_MATRIX_AUTO_UPDATE=!0,tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new T,qn=new T,ac=new T,Xn=new T,xr=new T,Sr=new T,Zd=new T,oc=new T,lc=new T,cc=new T,hc=new Ve,uc=new Ve,dc=new Ve;class rn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){yn.subVectors(i,t),qn.subVectors(n,t),ac.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(qn),l=yn.dot(ac),c=qn.dot(qn),h=qn.dot(ac),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,A=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-A-p,p,A)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn)!==null&&Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return hc.setScalar(0),uc.setScalar(0),dc.setScalar(0),hc.fromBufferAttribute(e,t),uc.fromBufferAttribute(e,n),dc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(hc,r.x),a.addScaledVector(uc,r.y),a.addScaledVector(dc,r.z),a}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),qn.subVectors(e,t),yn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),.5*yn.cross(qn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;xr.subVectors(i,n),Sr.subVectors(r,n),oc.subVectors(e,n);const l=xr.dot(oc),c=Sr.dot(oc);if(l<=0&&c<=0)return t.copy(n);lc.subVectors(e,i);const h=xr.dot(lc),u=Sr.dot(lc);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xr,a);cc.subVectors(e,r);const A=xr.dot(cc),p=Sr.dot(cc);if(p>=0&&A<=p)return t.copy(r);const g=A*c-l*p;if(g<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Sr,o);const f=h*p-A*u;if(f<=0&&u-h>=0&&A-p>=0)return Zd.subVectors(r,i),o=(u-h)/(u-h+(A-p)),t.copy(i).addScaledVector(Zd,o);const m=1/(f+g+d);return a=g*m,o=d*m,t.copy(n).addScaledVector(xr,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Ac(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}class fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=Iu(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ac(a,r,e+1/3),this.g=Ac(a,r,e),this.b=Ac(a,r,e-1/3)}return He.toWorkingColorSpace(this,i),this}setStyle(e,t=st){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){const n=Zg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Jl(e.r),this.g=Jl(e.g),this.b=Jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return He.fromWorkingColorSpace(Nt.copy(this),e),65536*Math.round(bt(255*Nt.r,0,255))+256*Math.round(bt(255*Nt.g,0,255))+Math.round(bt(255*Nt.b,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,r=Nt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=st){He.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Ya);const n=va(mi.h,Ya.h,t),i=va(mi.s,Ya.s,t),r=va(mi.l,Ya.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new fe;fe.NAMES=Zg;let Xv=0;class wn extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=In(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hn extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jn=jv();function jv(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}const Ka={toHalfFloat:function(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=bt(s,-65504,65504),jn.floatView[0]=s;const e=jn.uint32View[0],t=e>>23&511;return jn.baseTable[t]+((8388607&e)>>jn.shiftTable[t])},fromHalfFloat:function(s){const e=s>>10;return jn.uint32View[0]=jn.mantissaTable[jn.offsetTable[e]+(1023&s)]+jn.exponentTable[e],jn.floatView[0]}},vt=new T,Ja=new Te;class ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cu,this.updateRanges=[],this.gpuType=yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}}class ef extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tf extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yv=0;const on=new Se,pc=new tt,Cr=new T,tn=new jt,Ds=new jt,Mt=new T;class $t extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?tf:ef)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(tn.min,Ds.min),tn.expandByPoint(Mt),Mt.addVectors(tn.max,Ds.max),tn.expandByPoint(Mt)):(tn.expandByPoint(Ds.min),tn.expandByPoint(Ds.max))}tn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),Mt.add(Cr)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new T,l[B]=new T;const c=new T,h=new T,u=new T,d=new Te,A=new Te,p=new Te,g=new T,f=new T;function m(B,b,R){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,B),A.fromBufferAttribute(r,b),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),A.sub(d),p.sub(d);const W=1/(A.x*p.y-p.x*A.y);isFinite(W)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-A.y).multiplyScalar(W),f.copy(u).multiplyScalar(A.x).addScaledVector(h,-p.x).multiplyScalar(W),o[B].add(g),o[b].add(g),o[R].add(g),l[B].add(f),l[b].add(f),l[R].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let B=0,b=_.length;B<b;++B){const R=_[B],W=R.start;for(let D=W,G=W+R.count;D<G;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new T,y=new T,E=new T,S=new T;function C(B){E.fromBufferAttribute(i,B),S.copy(E);const b=o[B];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),y.crossVectors(S,b);const R=y.dot(l[B])<0?-1:1;a.setXYZW(B,v.x,v.y,v.z,R)}for(let B=0,b=_.length;B<b;++B){const R=_[B],W=R.start;for(let D=W,G=W+R.count;D<G;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,A=n.count;d<A;d++)n.setXYZ(d,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,A=e.count;d<A;d+=3){const p=e.getX(d+0),g=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,A=t.count;d<A;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let A=0,p=0;for(let g=0,f=l.length;g<f;g++){A=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let m=0;m<h;m++)d[p++]=c[A++]}return new ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,i=this.attributes;for(const o in i){const l=e(i[o],n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const A=c[u];h.push(A.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,A=u.length;d<A;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eA=new Se,Qi=new La,$a=new pn,tA=new T,Za=new T,eo=new T,to=new T,mc=new T,no=new T,nA=new T,io=new T;class Je extends tt{constructor(e=new $t,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(mc.fromBufferAttribute(u,e),a?no.addScaledVector(mc,h):no.addScaledVector(mc.sub(t),h))}t.add(no)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),$a.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere($a,tA)===null||Qi.origin.distanceToSquared(tA)>(e.far-e.near)**2))return;eA.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(eA),n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Qi)}}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,A=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){const f=d[p],m=a[f.materialIndex];for(let _=Math.max(f.start,A.start),v=Math.min(o.count,Math.min(f.start+f.count,A.start+A.count));_<v;_+=3)i=ro(this,m,e,n,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let p=Math.max(0,A.start),g=Math.min(o.count,A.start+A.count);p<g;p+=3)i=ro(this,a,e,n,c,h,u,o.getX(p),o.getX(p+1),o.getX(p+2)),i&&(i.faceIndex=Math.floor(p/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){const f=d[p],m=a[f.materialIndex];for(let _=Math.max(f.start,A.start),v=Math.min(l.count,Math.min(f.start+f.count,A.start+A.count));_<v;_+=3)i=ro(this,m,e,n,c,h,u,_,_+1,_+2),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let p=Math.max(0,A.start),g=Math.min(l.count,A.start+A.count);p<g;p+=3)i=ro(this,a,e,n,c,h,u,p,p+1,p+2),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}function ro(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Za),s.getVertexPosition(l,eo),s.getVertexPosition(c,to);const h=function(u,d,A,p,g,f,m,_){let v;if(v=d.side===1?p.intersectTriangle(m,f,g,!0,_):p.intersectTriangle(g,f,m,d.side===0,_),v===null)return null;io.copy(_),io.applyMatrix4(u.matrixWorld);const y=A.ray.origin.distanceTo(io);return y<A.near||y>A.far?null:{distance:y,point:io.clone(),object:u}}(s,e,t,n,Za,eo,to,nA);if(h){const u=new T;rn.getBarycoord(nA,Za,eo,to,u),i&&(h.uv=rn.getInterpolatedAttribute(i,o,l,c,u,new Te)),r&&(h.uv1=rn.getInterpolatedAttribute(r,o,l,c,u,new Te)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};rn.getNormal(Za,eo,to,d.normal),h.face=d,h.barycoord=u}return h}class ci extends $t{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,A=0;function p(g,f,m,_,v,y,E,S,C,B,b){const R=y/C,W=E/B,D=y/2,G=E/2,N=S/2,z=C+1,F=B+1;let J=0,ee=0;const oe=new T;for(let he=0;he<F;he++){const Y=he*W-G;for(let K=0;K<z;K++){const ne=K*R-D;oe[g]=ne*_,oe[f]=Y*v,oe[m]=N,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[f]=0,oe[m]=S>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(K/C),u.push(1-he/B),J+=1}}for(let he=0;he<B;he++)for(let Y=0;Y<C;Y++){const K=d+Y+z*he,ne=d+Y+z*(he+1),ie=d+(Y+1)+z*(he+1),w=d+(Y+1)+z*he;l.push(K,ne,w),l.push(ne,ie,w),ee+=6}o.addGroup(A,ee,b),A+=ee,d+=J}p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(s){const e={};for(let t=0;t<s.length;t++){const n=gs(s[t]);for(const i in n)e[i]=n[i]}return e}function nf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Kv={clone:gs,merge:Vt};class Jt extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=function(t){const n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rf extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=ps}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new T,iA=new Te,rA=new Te;class Tt extends rf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*ms*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*fa*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ms*Math.atan(Math.tan(.5*fa*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,iA,rA),t.subVectors(rA,iA)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*fa*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90;class wu extends tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tt(Ir,1,e,t);i.layers=this.layers,this.add(i);const r=new Tt(Ir,1,e,t);r.layers=this.layers,this.add(r);const a=new Tt(Ir,1,e,t);a.layers=this.layers,this.add(a);const o=new Tt(Ir,1,e,t);o.layers=this.layers,this.add(o);const l=new Tt(Ir,1,e,t);l.layers=this.layers,this.add(l);const c=new Tt(Ir,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ps)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==El)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,A),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class sf extends Ke{constructor(e,t,n,i,r,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:hr,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ad extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new sf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:We}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ci(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const a=new Je(i,r),o=t.minFilter;return t.minFilter===cn&&(t.minFilter=We),new wu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const gc=new T,Jv=new T,$v=new be;class Yi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gc.subVectors(n,t).cross(Jv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$v.getNormalMatrix(e),i=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new pn,so=new T;class od{constructor(e=new Yi,t=new Yi,n=new Yi,i=new Yi,r=new Yi,a=new Yi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],A=i[8],p=i[9],g=i[10],f=i[11],m=i[12],_=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,f-A,y-m).normalize(),n[1].setComponents(l+r,d+c,f+A,y+m).normalize(),n[2].setComponents(l+a,d+h,f+p,y+_).normalize(),n[3].setComponents(l-a,d-h,f-p,y-_).normalize(),n[4].setComponents(l-o,d-u,f-g,y-v).normalize(),t===ps)n[5].setComponents(l+o,d+u,f+g,y+v).normalize();else{if(t!==El)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(so.x=i.normal.x>0?e.max.x:e.min.x,so.y=i.normal.y>0?e.max.y:e.min.y,so.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function af(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zv(s){const e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);const n=e.get(t);n&&(s.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){const r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}const i=e.get(t);if(i===void 0)e.set(t,function(r,a){const o=r.array,l=r.usage,c=o.byteLength,h=s.createBuffer();let u;if(s.bindBuffer(a,h),s.bufferData(a,o,l),r.onUploadCallback(),o instanceof Float32Array)u=s.FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?s.HALF_FLOAT:s.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=s.SHORT;else if(o instanceof Uint32Array)u=s.UNSIGNED_INT;else if(o instanceof Int32Array)u=s.INT;else if(o instanceof Int8Array)u=s.BYTE;else if(o instanceof Uint8Array)u=s.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=s.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:c}}(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){const l=a.array,c=a.updateRanges;if(s.bindBuffer(o,r),c.length===0)s.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){const d=c[h],A=c[u];A.start<=d.start+d.count+1?d.count=Math.max(d.count,A.start+A.count-d.start):(++h,c[h]=A)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){const A=c[u];s.bufferSubData(o,A.start*l.BYTES_PER_ELEMENT,l,A.start,A.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}class On extends $t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,A=[],p=[],g=[],f=[];for(let m=0;m<h;m++){const _=m*d-a;for(let v=0;v<c;v++){const y=v*u-r;p.push(y,-_,0),g.push(0,0,1),f.push(v/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const v=_+c*m,y=_+c*(m+1),E=_+1+c*(m+1),S=_+1+c*m;A.push(v,y,S),A.push(y,E,S)}this.setIndex(A),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}const Re={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
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
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
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
}`},ce={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Ln={basic:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new fe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new fe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Vt([ce.points,ce.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Vt([ce.common,ce.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Vt([ce.sprite,ce.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Vt([ce.common,ce.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Vt([ce.lights,ce.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ln.physical={uniforms:Vt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const ao={r:0,b:0,g:0},ki=new An,e_=new Se;function t_(s,e,t,n,i,r,a){const o=new fe(0);let l,c,h=r===!0?0:1,u=null,d=0,A=null;function p(f){let m=f.isScene===!0?f.background:null;return m&&m.isTexture&&(m=(f.backgroundBlurriness>0?t:e).get(m)),m}function g(f,m){f.getRGB(ao,nf(s)),n.buffers.color.setClear(ao.r,ao.g,ao.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),h=m,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,g(o,h)},render:function(f){let m=!1;const _=p(f);_===null?g(o,h):_&&_.isColor&&(g(_,1),m=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||m)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))},addToRenderList:function(f,m){const _=p(m);_&&(_.isCubeTexture||_.mapping===Pl)?(c===void 0&&(c=new Je(new ci(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:gs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ki.copy(m.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(ki)),c.material.toneMapped=He.getTransfer(_.colorSpace)!==rt,u===_&&d===_.version&&A===s.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,A=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Je(new On(2,2),new Jt({name:"BackgroundMaterial",uniforms:gs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=He.getTransfer(_.colorSpace)!==rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&A===s.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,A=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function n_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=c(null);let r=i,a=!1;function o(m){return s.bindVertexArray(m)}function l(m){return s.deleteVertexArray(m)}function c(m){const _=[],v=[],y=[];for(let E=0;E<t;E++)_[E]=0,v[E]=0,y[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:v,attributeDivisors:y,object:m,attributes:{},index:null}}function h(){const m=r.newAttributes;for(let _=0,v=m.length;_<v;_++)m[_]=0}function u(m){d(m,0)}function d(m,_){const v=r.newAttributes,y=r.enabledAttributes,E=r.attributeDivisors;v[m]=1,y[m]===0&&(s.enableVertexAttribArray(m),y[m]=1),E[m]!==_&&(s.vertexAttribDivisor(m,_),E[m]=_)}function A(){const m=r.newAttributes,_=r.enabledAttributes;for(let v=0,y=_.length;v<y;v++)_[v]!==m[v]&&(s.disableVertexAttribArray(v),_[v]=0)}function p(m,_,v,y,E,S,C){C===!0?s.vertexAttribIPointer(m,_,v,E,S):s.vertexAttribPointer(m,_,v,y,E,S)}function g(){f(),a=!0,r!==i&&(r=i,o(r.object))}function f(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(m,_,v,y,E){let S=!1;const C=function(B,b,R){const W=R.wireframe===!0;let D=n[B.id];D===void 0&&(D={},n[B.id]=D);let G=D[b.id];G===void 0&&(G={},D[b.id]=G);let N=G[W];return N===void 0&&(N=c(s.createVertexArray()),G[W]=N),N}(y,v,_);r!==C&&(r=C,o(r.object)),S=function(B,b,R,W){const D=r.attributes,G=b.attributes;let N=0;const z=R.getAttributes();for(const F in z)if(z[F].location>=0){const J=D[F];let ee=G[F];if(ee===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),J===void 0||J.attribute!==ee||ee&&J.data!==ee.data)return!0;N++}return r.attributesNum!==N||r.index!==W}(m,y,v,E),S&&function(B,b,R,W){const D={},G=b.attributes;let N=0;const z=R.getAttributes();for(const F in z)if(z[F].location>=0){let J=G[F];J===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(J=B.instanceColor));const ee={};ee.attribute=J,J&&J.data&&(ee.data=J.data),D[F]=ee,N++}r.attributes=D,r.attributesNum=N,r.index=W}(m,y,v,E),E!==null&&e.update(E,s.ELEMENT_ARRAY_BUFFER),(S||a)&&(a=!1,function(B,b,R,W){h();const D=W.attributes,G=R.getAttributes(),N=b.defaultAttributeValues;for(const z in G){const F=G[z];if(F.location>=0){let J=D[z];if(J===void 0&&(z==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),z==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),J!==void 0){const ee=J.normalized,oe=J.itemSize,he=e.get(J);if(he===void 0)continue;const Y=he.buffer,K=he.type,ne=he.bytesPerElement,ie=K===s.INT||K===s.UNSIGNED_INT||J.gpuType===Fl;if(J.isInterleavedBufferAttribute){const w=J.data,x=w.stride,U=J.offset;if(w.isInstancedInterleavedBuffer){for(let O=0;O<F.locationSize;O++)d(F.location+O,w.meshPerAttribute);B.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let O=0;O<F.locationSize;O++)u(F.location+O);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let O=0;O<F.locationSize;O++)p(F.location+O,oe/F.locationSize,K,ee,x*ne,(U+oe/F.locationSize*O)*ne,ie)}else{if(J.isInstancedBufferAttribute){for(let w=0;w<F.locationSize;w++)d(F.location+w,J.meshPerAttribute);B.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let w=0;w<F.locationSize;w++)u(F.location+w);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let w=0;w<F.locationSize;w++)p(F.location+w,oe/F.locationSize,K,ee,oe*ne,oe/F.locationSize*w*ne,ie)}}else if(N!==void 0){const ee=N[z];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(F.location,ee);break;case 3:s.vertexAttrib3fv(F.location,ee);break;case 4:s.vertexAttrib4fv(F.location,ee);break;default:s.vertexAttrib1fv(F.location,ee)}}}}A()}(m,_,v,y),E!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:g,resetDefaultState:f,dispose:function(){g();for(const m in n){const _=n[m];for(const v in _){const y=_[v];for(const E in y)l(y[E].object),delete y[E];delete _[v]}delete n[m]}},releaseStatesOfGeometry:function(m){if(n[m.id]===void 0)return;const _=n[m.id];for(const v in _){const y=_[v];for(const E in y)l(y[E].object),delete y[E];delete _[v]}delete n[m.id]},releaseStatesOfProgram:function(m){for(const _ in n){const v=n[_];if(v[m.id]===void 0)continue;const y=v[m.id];for(const E in y)l(y[E].object),delete y[E];delete v[m.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:A}}function i_(s,e,t){let n;function i(r,a,o){o!==0&&(s.drawArraysInstanced(n,r,a,o),t.update(a,n,o))}this.setMode=function(r){n=r},this.render=function(r,a){s.drawArrays(n,r,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(r,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,r,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(r,a,o,l){if(o===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<r.length;h++)i(r[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,r,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u];for(let u=0;u<l.length;u++)t.update(h,n,l[u])}}}function r_(s,e,t,n){let i;function r(d){if(d==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){const d=e.get("EXT_clip_control");d.clipControlEXT(d.LOWER_LEFT_EXT,d.ZERO_TO_ONE_EXT)}const h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const d=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,textureFormatReadable:function(d){return d===ct||n.convert(d)===s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){const A=d===xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==mt&&n.convert(d)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==yt&&!A)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:s.getParameter(s.MAX_TEXTURE_SIZE),maxCubemapSize:s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:s.getParameter(s.MAX_VERTEX_ATTRIBS),maxVertexUniforms:s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:s.getParameter(s.MAX_VARYING_VECTORS),maxFragmentUniforms:s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:s.getParameter(s.MAX_SAMPLES)}}function s_(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Yi,o=new be,l={value:null,needsUpdate:!1};function c(h,u,d,A){const p=h!==null?h.length:0;let g=null;if(p!==0){if(g=l.value,A!==!0||g===null){const f=d+4*p,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,v=d;_!==p;++_,v+=4)a.copy(h[_]).applyMatrix4(m,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){const A=h.clippingPlanes,p=h.clipIntersection,g=h.clipShadows,f=s.get(h);if(!i||A===null||A.length===0||r&&!g)r?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{const m=r?0:n,_=4*m;let v=f.clippingState||null;l.value=v,v=c(A,u,_,d);for(let y=0;y!==_;++y)v[y]=t[y];f.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=m}}}function a_(s){let e=new WeakMap;function t(i,r){return r===ul?i.mapping=hr:r===304&&(i.mapping=ls),i}function n(i){const r=i.target;r.removeEventListener("dispose",n);const a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture){const r=i.mapping;if(r===ul||r===304){if(e.has(i))return t(e.get(i).texture,i.mapping);{const a=i.image;if(a&&a.height>0){const o=new ad(a.height);return o.fromEquirectangularTexture(s,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}class Ss extends rf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sA=[.125,.215,.35,.446,.526,.582],Ls=20,fc=new Ss,aA=new fe;let vc=null,_c=0,yc=0,Ec=!1;const Ki=(1+Math.sqrt(5))/2,wr=1/Ki,oA=[new T(-Ki,wr,0),new T(Ki,wr,0),new T(-wr,0,Ki),new T(wr,0,Ki),new T(0,Ki,-wr),new T(0,Ki,wr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class lA{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uA(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hA(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,_c,yc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:xt,format:ct,colorSpace:et,depthBuffer:!1},i=cA(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cA(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){const o=[],l=[],c=[];let h=a;const u=a-4+1+sA.length;for(let d=0;d<u;d++){const A=Math.pow(2,h);l.push(A);let p=1/A;d>a-4?p=sA[d-a+4-1]:d===0&&(p=0),c.push(p);const g=1/(A-2),f=-g,m=1+g,_=[f,f,m,f,m,m,f,f,m,m,f,m],v=6,y=6,E=3,S=2,C=1,B=new Float32Array(E*y*v),b=new Float32Array(S*y*v),R=new Float32Array(C*y*v);for(let D=0;D<v;D++){const G=D%3*2/3-1,N=D>2?0:-1,z=[G,N,0,G+2/3,N,0,G+2/3,N+1,0,G,N,0,G+2/3,N+1,0,G,N+1,0];B.set(z,E*y*D),b.set(_,S*y*D);const F=[D,D,D,D,D,D];R.set(F,C*y*D)}const W=new $t;W.setAttribute("position",new ht(B,E)),W.setAttribute("uv",new ht(b,S)),W.setAttribute("faceIndex",new ht(R,C)),o.push(W),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(r)),this._blurMaterial=function(a,o,l){const c=new Float32Array(Ls),h=new T(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ld(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return i}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,fc)}_sceneToCubeUV(e,t,n,i){const r=new Tt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(aA),l.toneMapping=0,l.autoClear=!1;const u=new hn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Je(new ci,u);let A=!1;const p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,A=!0):(u.color.copy(aA),A=!0);for(let g=0;g<6;g++){const f=g%3;f===0?(r.up.set(0,a[g],0),r.lookAt(o[g],0,0)):f===1?(r.up.set(0,0,a[g]),r.lookAt(0,o[g],0)):(r.up.set(0,a[g],0),r.lookAt(0,0,o[g]));const m=this._cubeSize;oo(i,f*m,g>2?m:0,m,m),l.setRenderTarget(i),A&&l.render(d,r),l.render(e,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===hr||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uA()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hA());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],r);r.uniforms.envMap.value=e;const o=this._cubeSize;oo(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,fc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=oA[(i-r-1)%oA.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=new Je(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,A=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,p=r/A,g=isFinite(r)?1+Math.floor(3*p):Ls;g>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);const f=[];let m=0;for(let y=0;y<Ls;++y){const E=y/p,S=Math.exp(-E*E/2);f.push(S),y===0?m+=S:y<g&&(m+=2*S)}for(let y=0;y<f.length;y++)f[y]=f[y]/m;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=A,u.mipInt.value=_-n;const v=this._sizeLods[i];oo(t,3*v*(i>_-4?i-_+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,fc)}}function cA(s,e,t){const n=new dn(s,e,t);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function hA(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function uA(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ld(){return`

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
	`}function o_(s){let e=new WeakMap,t=null;function n(i){const r=i.target;r.removeEventListener("dispose",n);const a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture){const r=i.mapping,a=r===ul||r===304,o=r===hr||r===ls;if(a||o){let l=e.get(i);const c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new lA(s)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{const h=i.image;return a&&h&&h.height>0||o&&h&&function(u){let d=0;const A=6;for(let p=0;p<A;p++)u[p]!==void 0&&d++;return d===A}(h)?(t===null&&(t=new lA(s)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function l_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Yo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function c_(s,e,t,n){const i={},r=new WeakMap;function a(l){const c=l.target;c.index!==null&&e.remove(c.index);for(const u in c.attributes)e.remove(c.attributes[u]);for(const u in c.morphAttributes){const d=c.morphAttributes[u];for(let A=0,p=d.length;A<p;A++)e.remove(d[A])}c.removeEventListener("dispose",a),delete i[c.id];const h=r.get(c);h&&(e.remove(h),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){const c=[],h=l.index,u=l.attributes.position;let d=0;if(h!==null){const g=h.array;d=h.version;for(let f=0,m=g.length;f<m;f+=3){const _=g[f+0],v=g[f+1],y=g[f+2];c.push(_,v,v,y,y,_)}}else{if(u===void 0)return;{const g=u.array;d=u.version;for(let f=0,m=g.length/3-1;f<m;f+=3){const _=f+0,v=f+1,y=f+2;c.push(_,v,v,y,y,_)}}}const A=new(Kg(c)?tf:ef)(c,1);A.version=d;const p=r.get(l);p&&e.remove(p),r.set(l,A)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){const c=l.attributes;for(const u in c)e.update(c[u],s.ARRAY_BUFFER);const h=l.morphAttributes;for(const u in h){const d=h[u];for(let A=0,p=d.length;A<p;A++)e.update(d[A],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){const c=r.get(l);if(c){const h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function h_(s,e,t){let n,i,r;function a(o,l,c){c!==0&&(s.drawElementsInstanced(n,l,i,o*r,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,r=o.bytesPerElement},this.render=function(o,l){s.drawElements(n,l,i,o*r),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/r,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let A=0;A<c;A++)d+=l[A];for(let A=0;A<h.length;A++)t.update(d,n,h[A])}}}function u_(s){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case s.TRIANGLES:e.triangles+=i*(t/3);break;case s.LINES:e.lines+=i*(t/2);break;case s.LINE_STRIP:e.lines+=i*(t-1);break;case s.LINE_LOOP:e.lines+=i*t;break;case s.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function d_(s,e,t){const n=new WeakMap,i=new Ve;return{update:function(r,a,o){const l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let B=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let _=0;d===!0&&(_=1),A===!0&&(_=2),p===!0&&(_=3);let v=a.attributes.position.count*_,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*y*4*h),S=new Jg(E,v,y,h);S.type=yt,S.needsUpdate=!0;const C=4*_;for(let b=0;b<h;b++){const R=g[b],W=f[b],D=m[b],G=v*y*4*b;for(let N=0;N<R.count;N++){const z=N*C;d===!0&&(i.fromBufferAttribute(R,N),E[G+z+0]=i.x,E[G+z+1]=i.y,E[G+z+2]=i.z,E[G+z+3]=0),A===!0&&(i.fromBufferAttribute(W,N),E[G+z+4]=i.x,E[G+z+5]=i.y,E[G+z+6]=i.z,E[G+z+7]=0),p===!0&&(i.fromBufferAttribute(D,N),E[G+z+8]=i.x,E[G+z+9]=i.y,E[G+z+10]=i.z,E[G+z+11]=D.itemSize===4?i.w:1)}}u={count:h,texture:S,size:new Te(v,y)},n.set(a,u),a.addEventListener("dispose",B)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let d=0;for(let p=0;p<l.length;p++)d+=l[p];const A=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(s,"morphTargetBaseInfluence",A),o.getUniforms().setValue(s,"morphTargetInfluences",l)}o.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}}}function A_(s,e,t,n){let i=new WeakMap;function r(a){const o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){const o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),i.get(a)!==o&&(t.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,s.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){const h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}class of extends Ke{constructor(e,t,n,i,r,a,o,l,c,h=1026){if(h!==xa&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xa&&(n=bi),n===void 0&&h===us&&(n=hs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lf=new Ke,dA=new of(1,1),cf=new Jg,hf=new $g,uf=new sf,AA=[],pA=[],mA=new Float32Array(16),gA=new Float32Array(9),fA=new Float32Array(4);function Cs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=AA[i];if(r===void 0&&(r=new Float32Array(i),AA[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ol(s,e){let t=pA[e];t===void 0&&(t=new Int32Array(e),pA[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function p_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function m_(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function g_(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function f_(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function v_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(St(t,n))return;fA.set(n),s.uniformMatrix2fv(this.addr,!1,fA),Ct(t,n)}}function __(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(St(t,n))return;gA.set(n),s.uniformMatrix3fv(this.addr,!1,gA),Ct(t,n)}}function y_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(St(t,n))return;mA.set(n),s.uniformMatrix4fv(this.addr,!1,mA),Ct(t,n)}}function E_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function x_(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function S_(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function C_(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function I_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function w_(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function M_(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function b_(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function T_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();let r;n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),this.type===s.SAMPLER_2D_SHADOW?(dA.compareFunction=515,r=dA):r=lf,t.setTexture2D(e||r,i)}function B_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hf,i)}function R_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uf,i)}function D_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cf,i)}function L_(s,e){s.uniform1fv(this.addr,e)}function U_(s,e){const t=Cs(e,this.size,2);s.uniform2fv(this.addr,t)}function P_(s,e){const t=Cs(e,this.size,3);s.uniform3fv(this.addr,t)}function N_(s,e){const t=Cs(e,this.size,4);s.uniform4fv(this.addr,t)}function F_(s,e){const t=Cs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Q_(s,e){const t=Cs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function O_(s,e){const t=Cs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function k_(s,e){s.uniform1iv(this.addr,e)}function G_(s,e){s.uniform2iv(this.addr,e)}function H_(s,e){s.uniform3iv(this.addr,e)}function z_(s,e){s.uniform4iv(this.addr,e)}function V_(s,e){s.uniform1uiv(this.addr,e)}function W_(s,e){s.uniform2uiv(this.addr,e)}function q_(s,e){s.uniform3uiv(this.addr,e)}function X_(s,e){s.uniform4uiv(this.addr,e)}function j_(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||lf,r[a])}function Y_(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hf,r[a])}function K_(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uf,r[a])}function J_(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cf,r[a])}class $_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return f_;case 35674:return v_;case 35675:return __;case 35676:return y_;case 5124:case 35670:return E_;case 35667:case 35671:return x_;case 35668:case 35672:return S_;case 35669:case 35673:return C_;case 5125:return I_;case 36294:return w_;case 36295:return M_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return D_}}(t.type)}}class Z_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return L_;case 35664:return U_;case 35665:return P_;case 35666:return N_;case 35674:return F_;case 35675:return Q_;case 35676:return O_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return H_;case 35669:case 35673:return z_;case 5125:return V_;case 36294:return W_;case 36295:return q_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return J_}}(t.type)}}class ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function vA(s,e){s.seq.push(e),s.map[e.id]=e}function ty(s,e,t){const n=s.name,i=n.length;for(xc.lastIndex=0;;){const r=xc.exec(n),a=xc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){vA(t,c===void 0?new $_(o,s,e):new Z_(o,s,e));break}{let h=t.map[o];h===void 0&&(h=new ey(o),vA(t,h)),t=h}}}class Ko{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i);ty(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function _A(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let ny=0;function yA(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+function(o,l){const c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let A=u;A<d;A++){const p=A+1;h.push(`${p===l?">":" "} ${p}: ${c[A]}`)}return h.join(`
`)}(s.getShaderSource(e),a)}return i}function iy(s,e){const t=function(n){const i=He.getPrimaries(He.workingColorSpace),r=He.getPrimaries(n);let a;switch(i===r?a="":i===yl&&r===_l?a="LinearDisplayP3ToLinearSRGB":i===_l&&r===yl&&(a="LinearSRGBToLinearDisplayP3"),n){case et:case Da:return[a,"LinearTransferOETF"];case st:case Ql:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}}(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ry(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lo=new T;function sy(){return He.getLuminanceCoefficients(lo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${lo.x.toFixed(4)}, ${lo.y.toFixed(4)}, ${lo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Us(s){return s!==""}function EA(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xA(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(s){return s.replace(ay,ly)}const oy=new Map;function ly(s,e){let t=Re[e];if(t===void 0){const n=oy.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Mu(t)}const cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function SA(s){return s.replace(cy,hy)}function hy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function CA(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uy(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=function(W){let D="SHADOWMAP_TYPE_BASIC";return W.shadowMapType===1?D="SHADOWMAP_TYPE_PCF":W.shadowMapType===2?D="SHADOWMAP_TYPE_PCF_SOFT":W.shadowMapType===3&&(D="SHADOWMAP_TYPE_VSM"),D}(t),c=function(W){let D="ENVMAP_TYPE_CUBE";if(W.envMap)switch(W.envMapMode){case hr:case ls:D="ENVMAP_TYPE_CUBE";break;case Pl:D="ENVMAP_TYPE_CUBE_UV"}return D}(t),h=function(W){let D="ENVMAP_MODE_REFLECTION";return W.envMap&&W.envMapMode===ls&&(D="ENVMAP_MODE_REFRACTION"),D}(t),u=function(W){let D="ENVMAP_BLENDING_NONE";if(W.envMap)switch(W.combine){case 0:D="ENVMAP_BLENDING_MULTIPLY";break;case 1:D="ENVMAP_BLENDING_MIX";break;case 2:D="ENVMAP_BLENDING_ADD"}return D}(t),d=function(W){const D=W.envMapCubeUVHeight;if(D===null)return null;const G=Math.log2(D)-2,N=1/D;return{texelWidth:1/(3*Math.max(Math.pow(2,G),112)),texelHeight:N,maxMip:G}}(t),A=function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}(t),p=function(W){const D=[];for(const G in W){const N=W[G];N!==!1&&D.push("#define "+G+" "+N)}return D.join(`
`)}(r),g=i.createProgram();let f,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Us).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Us).join(`
`),m.length>0&&(m+=`
`)):(f=[CA(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),m=[CA(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Re.tonemapping_pars_fragment:"",t.toneMapping!==0?ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,iy("linearToOutputTexel",t.outputColorSpace),sy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),a=Mu(a),a=EA(a,t),a=xA(a,t),o=Mu(o),o=EA(o,t),o=xA(o,t),a=SA(a),o=SA(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=_+f+a,y=_+m+o,E=_A(i,i.VERTEX_SHADER,v),S=_A(i,i.FRAGMENT_SHADER,y);function C(W){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(g).trim(),G=i.getShaderInfoLog(E).trim(),N=i.getShaderInfoLog(S).trim();let z=!0,F=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,S);else{const J=yA(i,E,"vertex"),ee=yA(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+D+`
`+J+`
`+ee)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):G!==""&&N!==""||(F=!1);F&&(W.diagnostics={runnable:z,programLog:D,vertexShader:{log:G,prefix:f},fragmentShader:{log:N,prefix:m}})}i.deleteShader(E),i.deleteShader(S),B=new Ko(i,g),b=function(D,G){const N={},z=D.getProgramParameter(G,D.ACTIVE_ATTRIBUTES);for(let F=0;F<z;F++){const J=D.getActiveAttrib(G,F),ee=J.name;let oe=1;J.type===D.FLOAT_MAT2&&(oe=2),J.type===D.FLOAT_MAT3&&(oe=3),J.type===D.FLOAT_MAT4&&(oe=4),N[ee]={type:J.type,location:D.getAttribLocation(G,ee),locationSize:oe}}return N}(i,g)}let B,b;i.attachShader(g,E),i.attachShader(g,S),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),this.getUniforms=function(){return B===void 0&&C(this),B},this.getAttributes=function(){return b===void 0&&C(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(g,37297)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=S,this}let dy=0;class Ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new py(e),t.set(e,n)),n}}class py{constructor(e){this.id=dy++,this.code=e,this.usedTimes=0}}function my(s,e,t,n,i,r,a){const o=new sd,l=new Ay,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,A=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,v,y,E){const S=y.fog,C=E.geometry,B=m.isMeshStandardMaterial?y.environment:null,b=(m.isMeshStandardMaterial?t:e).get(m.envMap||B),R=b&&b.mapping===Pl?b.image.height:null,W=g[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));const D=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,G=D!==void 0?D.length:0;let N,z,F,J,ee=0;if(C.morphAttributes.position!==void 0&&(ee=1),C.morphAttributes.normal!==void 0&&(ee=2),C.morphAttributes.color!==void 0&&(ee=3),W){const ws=Ln[W];N=ws.vertexShader,z=ws.fragmentShader}else N=m.vertexShader,z=m.fragmentShader,l.update(m),F=l.getVertexShaderID(m),J=l.getFragmentShaderID(m);const oe=s.getRenderTarget(),he=E.isInstancedMesh===!0,Y=E.isBatchedMesh===!0,K=!!m.map,ne=!!m.matcap,ie=!!b,w=!!m.aoMap,x=!!m.lightMap,U=!!m.bumpMap,O=!!m.normalMap,P=!!m.displacementMap,k=!!m.emissiveMap,M=!!m.metalnessMap,H=!!m.roughnessMap,q=m.anisotropy>0,se=m.clearcoat>0,V=m.dispersion>0,te=m.iridescence>0,ae=m.sheen>0,Z=m.transmission>0,ue=q&&!!m.anisotropyMap,de=se&&!!m.clearcoatMap,ve=se&&!!m.clearcoatNormalMap,Be=se&&!!m.clearcoatRoughnessMap,Ge=te&&!!m.iridescenceMap,Fe=te&&!!m.iridescenceThicknessMap,_e=ae&&!!m.sheenColorMap,ze=ae&&!!m.sheenRoughnessMap,$e=!!m.specularMap,ut=!!m.specularColorMap,ge=!!m.specularIntensityMap,Pe=Z&&!!m.transmissionMap,Ze=Z&&!!m.thicknessMap,Qa=!!m.gradientMap,Ar=!!m.alphaMap,Zt=m.alphaTest>0,Hn=!!m.alphaHash,Ri=!!m.extensions;let L=0;m.toneMapped&&(oe!==null&&oe.isXRRenderTarget!==!0||(L=s.toneMapping));const Di={shaderID:W,shaderType:m.type,shaderName:m.name,vertexShader:N,fragmentShader:z,defines:m.defines,customVertexShaderID:F,customFragmentShaderID:J,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Y,batchingColor:Y&&E._colorsTexture!==null,instancing:he,instancingColor:he&&E.instanceColor!==null,instancingMorph:he&&E.morphTexture!==null,supportsVertexTextures:A,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:et,alphaToCoverage:!!m.alphaToCoverage,map:K,matcap:ne,envMap:ie,envMapMode:ie&&b.mapping,envMapCubeUVHeight:R,aoMap:w,lightMap:x,bumpMap:U,normalMap:O,displacementMap:A&&P,emissiveMap:k,normalMapObjectSpace:O&&m.normalMapType===1,normalMapTangentSpace:O&&m.normalMapType===0,metalnessMap:M,roughnessMap:H,anisotropy:q,anisotropyMap:ue,clearcoat:se,clearcoatMap:de,clearcoatNormalMap:ve,clearcoatRoughnessMap:Be,dispersion:V,iridescence:te,iridescenceMap:Ge,iridescenceThicknessMap:Fe,sheen:ae,sheenColorMap:_e,sheenRoughnessMap:ze,specularMap:$e,specularColorMap:ut,specularIntensityMap:ge,transmission:Z,transmissionMap:Pe,thicknessMap:Ze,gradientMap:Qa,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Ar,alphaTest:Zt,alphaHash:Hn,combine:m.combine,mapUv:K&&f(m.map.channel),aoMapUv:w&&f(m.aoMap.channel),lightMapUv:x&&f(m.lightMap.channel),bumpMapUv:U&&f(m.bumpMap.channel),normalMapUv:O&&f(m.normalMap.channel),displacementMapUv:P&&f(m.displacementMap.channel),emissiveMapUv:k&&f(m.emissiveMap.channel),metalnessMapUv:M&&f(m.metalnessMap.channel),roughnessMapUv:H&&f(m.roughnessMap.channel),anisotropyMapUv:ue&&f(m.anisotropyMap.channel),clearcoatMapUv:de&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:ve&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:ze&&f(m.sheenRoughnessMap.channel),specularMapUv:$e&&f(m.specularMap.channel),specularColorMapUv:ut&&f(m.specularColorMap.channel),specularIntensityMapUv:ge&&f(m.specularIntensityMap.channel),transmissionMapUv:Pe&&f(m.transmissionMap.channel),thicknessMapUv:Ze&&f(m.thicknessMap.channel),alphaMapUv:Ar&&f(m.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(O||q),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!C.attributes.uv&&(K||Ar),fog:!!S,useFog:m.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:E.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ee,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:s.shadowMap.enabled&&v.length>0,shadowMapType:s.shadowMap.type,toneMapping:L,decodeVideoTexture:K&&m.map.isVideoTexture===!0&&He.getTransfer(m.map.colorSpace)===rt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ri&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ri&&m.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Di.vertexUv1s=c.has(1),Di.vertexUv2s=c.has(2),Di.vertexUv3s=c.has(3),c.clear(),Di},getProgramCacheKey:function(m){const _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(const v in m.defines)_.push(v),_.push(m.defines[v]);return m.isRawShaderMaterial===!1&&(function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}(_,m),function(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),v.push(o.mask)}(_,m),_.push(s.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){const _=g[m.type];let v;if(_){const y=Ln[_];v=Kv.clone(y.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,_){let v;for(let y=0,E=h.length;y<E;y++){const S=h[y];if(S.cacheKey===_){v=S,++v.usedTimes;break}}return v===void 0&&(v=new uy(s,_,m,r),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){const _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function gy(){let s=new WeakMap;return{has:function(e){return s.has(e)},get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,n){s.get(e)[t]=n},dispose:function(){s=new WeakMap}}}function fy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function IA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wA(){const s=[];let e=0;const t=[],n=[],i=[];function r(a,o,l,c,h,u){let d=s[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},s[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){const d=r(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){const d=r(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=s.length;a<o;a++){const l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||fy),n.length>1&&n.sort(o||IA),i.length>1&&i.sort(o||IA)}}}function vy(){let s=new WeakMap;return{get:function(e,t){const n=s.get(e);let i;return n===void 0?(i=new wA,s.set(e,[i])):t>=n.length?(i=new wA,n.push(i)):i=n[t],i},dispose:function(){s=new WeakMap}}}function _y(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new fe};break;case"SpotLight":t={position:new T,direction:new T,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new T,halfWidth:new T,halfHeight:new T}}return s[e.id]=t,t}}}let yy=0;function Ey(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xy(s){const e=new _y,t=function(){const o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new T);const i=new T,r=new Se,a=new Se;return{setup:function(o){let l=0,c=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let u=0,d=0,A=0,p=0,g=0,f=0,m=0,_=0,v=0,y=0,E=0;o.sort(Ey);for(let C=0,B=o.length;C<B;C++){const b=o[C],R=b.color,W=b.intensity,D=b.distance,G=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)l+=R.r*W,c+=R.g*W,h+=R.b*W;else if(b.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(b.sh.coefficients[N],W);E++}else if(b.isDirectionalLight){const N=e.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const z=b.shadow,F=t.get(b);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.directionalShadow[u]=F,n.directionalShadowMap[u]=G,n.directionalShadowMatrix[u]=b.shadow.matrix,f++}n.directional[u]=N,u++}else if(b.isSpotLight){const N=e.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(R).multiplyScalar(W),N.distance=D,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,n.spot[A]=N;const z=b.shadow;if(b.map&&(n.spotLightMap[v]=b.map,v++,z.updateMatrices(b),b.castShadow&&y++),n.spotLightMatrix[A]=z.matrix,b.castShadow){const F=t.get(b);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.spotShadow[A]=F,n.spotShadowMap[A]=G,_++}A++}else if(b.isRectAreaLight){const N=e.get(b);N.color.copy(R).multiplyScalar(W),N.halfWidth.set(.5*b.width,0,0),N.halfHeight.set(0,.5*b.height,0),n.rectArea[p]=N,p++}else if(b.isPointLight){const N=e.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){const z=b.shadow,F=t.get(b);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,F.shadowCameraNear=z.camera.near,F.shadowCameraFar=z.camera.far,n.pointShadow[d]=F,n.pointShadowMap[d]=G,n.pointShadowMatrix[d]=b.shadow.matrix,m++}n.point[d]=N,d++}else if(b.isHemisphereLight){const N=e.get(b);N.skyColor.copy(b.color).multiplyScalar(W),N.groundColor.copy(b.groundColor).multiplyScalar(W),n.hemi[g]=N,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;const S=n.hash;S.directionalLength===u&&S.pointLength===d&&S.spotLength===A&&S.rectAreaLength===p&&S.hemiLength===g&&S.numDirectionalShadows===f&&S.numPointShadows===m&&S.numSpotShadows===_&&S.numSpotMaps===v&&S.numLightProbes===E||(n.directional.length=u,n.spot.length=A,n.rectArea.length=p,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=m,n.pointShadowMap.length=m,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=m,n.spotLightMatrix.length=_+v-y,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=E,S.directionalLength=u,S.pointLength=d,S.spotLength=A,S.rectAreaLength=p,S.hemiLength=g,S.numDirectionalShadows=f,S.numPointShadows=m,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=E,n.version=yy++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,A=0;const p=l.matrixWorldInverse;for(let g=0,f=o.length;g<f;g++){const m=o[g];if(m.isDirectionalLight){const _=n.directional[c];_.direction.setFromMatrixPosition(m.matrixWorld),i.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),c++}else if(m.isSpotLight){const _=n.spot[u];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(m.matrixWorld),i.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),u++}else if(m.isRectAreaLight){const _=n.rectArea[d];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(m.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(.5*m.width,0,0),_.halfHeight.set(0,.5*m.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(m.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(p),h++}else if(m.isHemisphereLight){const _=n.hemi[A];_.direction.setFromMatrixPosition(m.matrixWorld),_.direction.transformDirection(p),A++}}},state:n}}function MA(s){const e=new xy(s),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(r){i.camera=r,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(r){e.setupView(t,r)},pushLight:function(r){t.push(r)},pushShadow:function(r){n.push(r)}}}function Sy(s){let e=new WeakMap;return{get:function(t,n=0){const i=e.get(t);let r;return i===void 0?(r=new MA(s),e.set(t,[r])):n>=i.length?(r=new MA(s),i.push(r)):r=i[n],r},dispose:function(){e=new WeakMap}}}class df extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Iy(s,e,t){let n=new od;const i=new Te,r=new Te,a=new Ve,o=new df({depthPacking:3201}),l=new Cy,c={},h=t.maxTextureSize,u={[J0]:1,[$0]:0,[Z0]:2},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:`void main() {
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
}`}),A=d.clone();A.defines.HORIZONTAL_PASS=1;const p=new $t;p.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Je(p,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;function _(S,C){const B=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,A.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,A.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new dn(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(C,null,B,d,g,null),A.uniforms.shadow_pass.value=S.mapPass.texture,A.uniforms.resolution.value=S.mapSize,A.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(C,null,B,A,g,null)}function v(S,C,B,b){let R=null;const W=B.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(W!==void 0)R=W;else if(R=B.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=R.uuid,G=C.uuid;let N=c[D];N===void 0&&(N={},c[D]=N);let z=N[G];z===void 0&&(z=R.clone(),N[G]=z,C.addEventListener("dispose",E)),R=z}return R.visible=C.visible,R.wireframe=C.wireframe,R.side=b===3?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:u[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(s.properties.get(R).light=B),R}function y(S,C,B,b,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===3)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld);const D=e.update(S),G=S.material;if(Array.isArray(G)){const N=D.groups;for(let z=0,F=N.length;z<F;z++){const J=N[z],ee=G[J.materialIndex];if(ee&&ee.visible){const oe=v(S,ee,b,R);S.onBeforeShadow(s,S,C,B,D,oe,J),s.renderBufferDirect(B,null,D,oe,S,J),S.onAfterShadow(s,S,C,B,D,oe,J)}}}else if(G.visible){const N=v(S,G,b,R);S.onBeforeShadow(s,S,C,B,D,N,null),s.renderBufferDirect(B,null,D,N,S,null),S.onAfterShadow(s,S,C,B,D,N,null)}}const W=S.children;for(let D=0,G=W.length;D<G;D++)y(W[D],C,B,b,R)}function E(S){S.target.removeEventListener("dispose",E);for(const C in c){const B=c[C],b=S.target.uuid;b in B&&(B[b].dispose(),delete B[b])}}this.render=function(S,C,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const b=s.getRenderTarget(),R=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),D=s.state;D.setBlending(0),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=m!==3&&this.type===3,N=m===3&&this.type!==3;for(let z=0,F=S.length;z<F;z++){const J=S[z],ee=J.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);const oe=ee.getFrameExtents();if(i.multiply(oe),r.copy(ee.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/oe.x),i.x=r.x*oe.x,ee.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/oe.y),i.y=r.y*oe.y,ee.mapSize.y=r.y)),ee.map===null||G===!0||N===!0){const Y=this.type!==3?{minFilter:Ut,magFilter:Ut}:{};ee.map!==null&&ee.map.dispose(),ee.map=new dn(i.x,i.y,Y),ee.map.texture.name=J.name+".shadowMap",ee.camera.updateProjectionMatrix()}s.setRenderTarget(ee.map),s.clear();const he=ee.getViewportCount();for(let Y=0;Y<he;Y++){const K=ee.getViewport(Y);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),D.viewport(a),ee.updateMatrices(J,Y),n=ee.getFrustum(),y(C,B,ee.camera,J,this.type)}ee.isPointLightShadow!==!0&&this.type===3&&_(ee,B),ee.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(b,R,W)}}const wy={[fv]:1,[_v]:6,[Ev]:7,[yv]:5,[vv]:0,[Sv]:2,[Cv]:4,[xv]:3};function My(s){const e=new function(){let M=!1;const H=new Ve;let q=null;const se=new Ve(0,0,0,0);return{setMask:function(V){q===V||M||(s.colorMask(V,V,V,V),q=V)},setLocked:function(V){M=V},setClear:function(V,te,ae,Z,ue){ue===!0&&(V*=Z,te*=Z,ae*=Z),H.set(V,te,ae,Z),se.equals(H)===!1&&(s.clearColor(V,te,ae,Z),se.copy(H))},reset:function(){M=!1,q=null,se.set(-1,0,0,0)}}},t=new function(){let M=!1,H=!1,q=null,se=null,V=null;return{setReversed:function(te){H=te},setTest:function(te){te?ne(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(te){q===te||M||(s.depthMask(te),q=te)},setFunc:function(te){if(H&&(te=wy[te]),se!==te){switch(te){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}se=te}},setLocked:function(te){M=te},setClear:function(te){V!==te&&(s.clearDepth(te),V=te)},reset:function(){M=!1,q=null,se=null,V=null}}},n=new function(){let M=!1,H=null,q=null,se=null,V=null,te=null,ae=null,Z=null,ue=null;return{setTest:function(de){M||(de?ne(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(de){H===de||M||(s.stencilMask(de),H=de)},setFunc:function(de,ve,Be){q===de&&se===ve&&V===Be||(s.stencilFunc(de,ve,Be),q=de,se=ve,V=Be)},setOp:function(de,ve,Be){te===de&&ae===ve&&Z===Be||(s.stencilOp(de,ve,Be),te=de,ae=ve,Z=Be)},setLocked:function(de){M=de},setClear:function(de){ue!==de&&(s.clearStencil(de),ue=de)},reset:function(){M=!1,H=null,q=null,se=null,V=null,te=null,ae=null,Z=null,ue=null}}},i=new WeakMap,r=new WeakMap;let a={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,A=null,p=null,g=null,f=null,m=null,_=null,v=new fe(0,0,0),y=0,E=!1,S=null,C=null,B=null,b=null,R=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,G=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(N)[1]),D=G>=1):N.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),D=G>=2);let z=null,F={};const J=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),oe=new Ve().fromArray(J),he=new Ve().fromArray(ee);function Y(M,H,q,se){const V=new Uint8Array(4),te=s.createTexture();s.bindTexture(M,te),s.texParameteri(M,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(M,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<q;ae++)M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY?s.texImage3D(H,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,V):s.texImage2D(H+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,V);return te}const K={};function ne(M){a[M]!==!0&&(s.enable(M),a[M]=!0)}function ie(M){a[M]!==!1&&(s.disable(M),a[M]=!1)}K[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),e.setClear(0,0,0,1),t.setClear(1),n.setClear(0),ne(s.DEPTH_TEST),t.setFunc(3),O(!1),P(1),ne(s.CULL_FACE),U(0);const w={[nr]:s.FUNC_ADD,[ev]:s.FUNC_SUBTRACT,[tv]:s.FUNC_REVERSE_SUBTRACT};w[103]=s.MIN,w[104]=s.MAX;const x={[nv]:s.ZERO,[iv]:s.ONE,[rv]:s.SRC_COLOR,[av]:s.SRC_ALPHA,[dv]:s.SRC_ALPHA_SATURATE,[hv]:s.DST_COLOR,[lv]:s.DST_ALPHA,[sv]:s.ONE_MINUS_SRC_COLOR,[ov]:s.ONE_MINUS_SRC_ALPHA,[uv]:s.ONE_MINUS_DST_COLOR,[cv]:s.ONE_MINUS_DST_ALPHA,[Av]:s.CONSTANT_COLOR,[pv]:s.ONE_MINUS_CONSTANT_COLOR,[mv]:s.CONSTANT_ALPHA,[gv]:s.ONE_MINUS_CONSTANT_ALPHA};function U(M,H,q,se,V,te,ae,Z,ue,de){if(M!==0){if(u===!1&&(ne(s.BLEND),u=!0),M===5)V=V||H,te=te||q,ae=ae||se,H===A&&V===f||(s.blendEquationSeparate(w[H],w[V]),A=H,f=V),q===p&&se===g&&te===m&&ae===_||(s.blendFuncSeparate(x[q],x[se],x[te],x[ae]),p=q,g=se,m=te,_=ae),Z.equals(v)!==!1&&ue===y||(s.blendColor(Z.r,Z.g,Z.b,ue),v.copy(Z),y=ue),d=M,E=!1;else if(M!==d||de!==E){if(A===nr&&f===nr||(s.blendEquation(s.FUNC_ADD),A=nr,f=nr),de)switch(M){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}p=null,g=null,m=null,_=null,v.set(0,0,0),y=0,d=M,E=de}}else u===!0&&(ie(s.BLEND),u=!1)}function O(M){S!==M&&(M?s.frontFace(s.CW):s.frontFace(s.CCW),S=M)}function P(M){M!==0?(ne(s.CULL_FACE),M!==C&&(M===1?s.cullFace(s.BACK):M===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),C=M}function k(M,H,q){M?(ne(s.POLYGON_OFFSET_FILL),b===H&&R===q||(s.polygonOffset(H,q),b=H,R=q)):ie(s.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:t,stencil:n},enable:ne,disable:ie,bindFramebuffer:function(M,H){return o[M]!==H&&(s.bindFramebuffer(M,H),o[M]=H,M===s.DRAW_FRAMEBUFFER&&(o[s.FRAMEBUFFER]=H),M===s.FRAMEBUFFER&&(o[s.DRAW_FRAMEBUFFER]=H),!0)},drawBuffers:function(M,H){let q=c,se=!1;if(M){q=l.get(H),q===void 0&&(q=[],l.set(H,q));const V=M.textures;if(q.length!==V.length||q[0]!==s.COLOR_ATTACHMENT0){for(let te=0,ae=V.length;te<ae;te++)q[te]=s.COLOR_ATTACHMENT0+te;q.length=V.length,se=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,se=!0);se&&s.drawBuffers(q)},useProgram:function(M){return h!==M&&(s.useProgram(M),h=M,!0)},setBlending:U,setMaterial:function(M,H){M.side===2?ie(s.CULL_FACE):ne(s.CULL_FACE);let q=M.side===1;H&&(q=!q),O(q),M.blending===1&&M.transparent===!1?U(0):U(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),t.setFunc(M.depthFunc),t.setTest(M.depthTest),t.setMask(M.depthWrite),e.setMask(M.colorWrite);const se=M.stencilWrite;n.setTest(se),se&&(n.setMask(M.stencilWriteMask),n.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),n.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),k(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:O,setCullFace:P,setLineWidth:function(M){M!==B&&(D&&s.lineWidth(M),B=M)},setPolygonOffset:k,setScissorTest:function(M){M?ne(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=s.TEXTURE0+W-1),z!==M&&(s.activeTexture(M),z=M)},bindTexture:function(M,H,q){q===void 0&&(q=z===null?s.TEXTURE0+W-1:z);let se=F[q];se===void 0&&(se={type:void 0,texture:void 0},F[q]=se),se.type===M&&se.texture===H||(z!==q&&(s.activeTexture(q),z=q),s.bindTexture(M,H||K[M]),se.type=M,se.texture=H)},unbindTexture:function(){const M=F[z];M!==void 0&&M.type!==void 0&&(s.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,H){let q=r.get(H);q===void 0&&(q=new WeakMap,r.set(H,q));let se=q.get(M);se===void 0&&(se=s.getUniformBlockIndex(H,M.name),q.set(M,se))},uniformBlockBinding:function(M,H){const q=r.get(H).get(M);i.get(H)!==q&&(s.uniformBlockBinding(H,q,M.__bindingPointIndex),i.set(H,q))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){oe.equals(M)===!1&&(s.scissor(M.x,M.y,M.z,M.w),oe.copy(M))},viewport:function(M){he.equals(M)===!1&&(s.viewport(M.x,M.y,M.z,M.w),he.copy(M))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),a={},z=null,F={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,A=null,p=null,g=null,f=null,m=null,_=null,v=new fe(0,0,0),y=0,E=!1,S=null,C=null,B=null,b=null,R=null,oe.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),e.reset(),t.reset(),n.reset()}}}function bA(s,e,t,n){const i=function(r){switch(r){case mt:case Ku:return{byteLength:1,components:1};case Ea:case Ju:case xt:return{byteLength:2,components:1};case $u:case Zu:return{byteLength:2,components:4};case bi:case Fl:case yt:return{byteLength:4,components:1};case jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}(n);switch(t){case 1021:case 1024:return s*e;case 1025:return s*e*2;case Si:case ed:return s*e/i.components*i.byteLength;case or:case td:return s*e*2/i.components*i.byteLength;case 1022:return s*e*3/i.components*i.byteLength;case ct:case nd:return s*e*4/i.components*i.byteLength;case qo:case pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xo:case ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case su:case au:return Math.max(s,16)*Math.max(e,8)/4;case dl:case Al:return Math.max(s,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gl:case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case uu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Au:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case pu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case mu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ga:case _u:case yu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case 36283:case Eu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xu:case Su:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function by(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap;let u;const d=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,x){return A?new OffscreenCanvas(w,x):Ia("canvas")}function g(w,x,U){let O=1;const P=ie(w);if((P.width>U||P.height>U)&&(O=U/Math.max(P.width,P.height)),O<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const k=Math.floor(O*P.width),M=Math.floor(O*P.height);u===void 0&&(u=p(k,M));const H=x?p(k,M):u;return H.width=k,H.height=M,H.getContext("2d").drawImage(w,0,0,k,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+k+"x"+M+")."),H}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),w}return w}function f(w){return w.generateMipmaps&&w.minFilter!==Ut&&w.minFilter!==We}function m(w){s.generateMipmap(w)}function _(w,x,U,O,P=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let k=x;if(x===s.RED&&(U===s.FLOAT&&(k=s.R32F),U===s.HALF_FLOAT&&(k=s.R16F),U===s.UNSIGNED_BYTE&&(k=s.R8)),x===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(k=s.R8UI),U===s.UNSIGNED_SHORT&&(k=s.R16UI),U===s.UNSIGNED_INT&&(k=s.R32UI),U===s.BYTE&&(k=s.R8I),U===s.SHORT&&(k=s.R16I),U===s.INT&&(k=s.R32I)),x===s.RG&&(U===s.FLOAT&&(k=s.RG32F),U===s.HALF_FLOAT&&(k=s.RG16F),U===s.UNSIGNED_BYTE&&(k=s.RG8)),x===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(k=s.RG8UI),U===s.UNSIGNED_SHORT&&(k=s.RG16UI),U===s.UNSIGNED_INT&&(k=s.RG32UI),U===s.BYTE&&(k=s.RG8I),U===s.SHORT&&(k=s.RG16I),U===s.INT&&(k=s.RG32I)),x===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(k=s.RGB8UI),U===s.UNSIGNED_SHORT&&(k=s.RGB16UI),U===s.UNSIGNED_INT&&(k=s.RGB32UI),U===s.BYTE&&(k=s.RGB8I),U===s.SHORT&&(k=s.RGB16I),U===s.INT&&(k=s.RGB32I)),x===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(k=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(k=s.RGBA16UI),U===s.UNSIGNED_INT&&(k=s.RGBA32UI),U===s.BYTE&&(k=s.RGBA8I),U===s.SHORT&&(k=s.RGBA16I),U===s.INT&&(k=s.RGBA32I)),x===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(k=s.RGB9_E5),x===s.RGBA){const M=P?vl:He.getTransfer(O);U===s.FLOAT&&(k=s.RGBA32F),U===s.HALF_FLOAT&&(k=s.RGBA16F),U===s.UNSIGNED_BYTE&&(k=M===rt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(k=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(k=s.RGB5_A1)}return k!==s.R16F&&k!==s.R32F&&k!==s.RG16F&&k!==s.RG32F&&k!==s.RGBA16F&&k!==s.RGBA32F||e.get("EXT_color_buffer_float"),k}function v(w,x){let U;return w?x===null||x===bi||x===hs?U=s.DEPTH24_STENCIL8:x===yt?U=s.DEPTH32F_STENCIL8:x===Ea&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bi||x===hs?U=s.DEPTH_COMPONENT24:x===yt?U=s.DEPTH_COMPONENT32F:x===Ea&&(U=s.DEPTH_COMPONENT16),U}function y(w,x){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ut&&w.minFilter!==We?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function E(w){const x=w.target;x.removeEventListener("dispose",E),function(U){const O=n.get(U);if(O.__webglInit===void 0)return;const P=U.source,k=d.get(P);if(k){const M=k[O.__cacheKey];M.usedTimes--,M.usedTimes===0&&C(U),Object.keys(k).length===0&&d.delete(P)}n.remove(U)}(x),x.isVideoTexture&&h.delete(x)}function S(w){const x=w.target;x.removeEventListener("dispose",S),function(U){const O=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(O.__webglFramebuffer[k]))for(let M=0;M<O.__webglFramebuffer[k].length;M++)s.deleteFramebuffer(O.__webglFramebuffer[k][M]);else s.deleteFramebuffer(O.__webglFramebuffer[k]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[k])}else{if(Array.isArray(O.__webglFramebuffer))for(let k=0;k<O.__webglFramebuffer.length;k++)s.deleteFramebuffer(O.__webglFramebuffer[k]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let k=0;k<O.__webglColorRenderbuffer.length;k++)O.__webglColorRenderbuffer[k]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[k]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}const P=U.textures;for(let k=0,M=P.length;k<M;k++){const H=n.get(P[k]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(P[k])}n.remove(U)}(x)}function C(w){const x=n.get(w);s.deleteTexture(x.__webglTexture);const U=w.source;delete d.get(U)[x.__cacheKey],a.memory.textures--}let B=0;function b(w,x){const U=n.get(w);if(w.isVideoTexture&&function(O){const P=a.render.frame;h.get(O)!==P&&(h.set(O,P),O.update())}(w),w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){const O=w.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void z(U,w,x);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+x)}const R={[Qn]:s.REPEAT,[Et]:s.CLAMP_TO_EDGE,[cs]:s.MIRRORED_REPEAT},W={[Ut]:s.NEAREST,[Nl]:s.NEAREST_MIPMAP_NEAREST,[ar]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[ns]:s.LINEAR_MIPMAP_NEAREST,[cn]:s.LINEAR_MIPMAP_LINEAR},D={[wv]:s.NEVER,[Lv]:s.ALWAYS,[Mv]:s.LESS,[Tv]:s.LEQUAL,[bv]:s.EQUAL,[Dv]:s.GEQUAL,[Bv]:s.GREATER,[Rv]:s.NOTEQUAL};function G(w,x){if(x.type!==yt||e.has("OES_texture_float_linear")!==!1||x.magFilter!==We&&x.magFilter!==ns&&x.magFilter!==ar&&x.magFilter!==cn&&x.minFilter!==We&&x.minFilter!==ns&&x.minFilter!==ar&&x.minFilter!==cn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,R[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,R[x.wrapT]),w!==s.TEXTURE_3D&&w!==s.TEXTURE_2D_ARRAY||s.texParameteri(w,s.TEXTURE_WRAP_R,R[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,W[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,W[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,D[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==ar&&x.minFilter!==cn||x.type===yt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function N(w,x){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",E));const O=x.source;let P=d.get(O);P===void 0&&(P={},d.set(O,P));const k=function(M){const H=[];return H.push(M.wrapS),H.push(M.wrapT),H.push(M.wrapR||0),H.push(M.magFilter),H.push(M.minFilter),H.push(M.anisotropy),H.push(M.internalFormat),H.push(M.format),H.push(M.type),H.push(M.generateMipmaps),H.push(M.premultiplyAlpha),H.push(M.flipY),H.push(M.unpackAlignment),H.push(M.colorSpace),H.join()}(x);if(k!==w.__cacheKey){P[k]===void 0&&(P[k]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),P[k].usedTimes++;const M=P[w.__cacheKey];M!==void 0&&(P[w.__cacheKey].usedTimes--,M.usedTimes===0&&C(x)),w.__cacheKey=k,w.__webglTexture=P[k].texture}return U}function z(w,x,U){let O=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=s.TEXTURE_3D);const P=N(w,x),k=x.source;t.bindTexture(O,w.__webglTexture,s.TEXTURE0+U);const M=n.get(k);if(k.version!==M.__version||P===!0){t.activeTexture(s.TEXTURE0+U);const H=He.getPrimaries(He.workingColorSpace),q=x.colorSpace===ai?null:He.getPrimaries(x.colorSpace),se=x.colorSpace===ai||H===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let V=g(x.image,!1,i.maxTextureSize);V=ne(x,V);const te=r.convert(x.format,x.colorSpace),ae=r.convert(x.type);let Z,ue=_(x.internalFormat,te,ae,x.colorSpace,x.isVideoTexture);G(O,x);const de=x.mipmaps,ve=x.isVideoTexture!==!0,Be=M.__version===void 0||P===!0,Ge=k.dataReady,Fe=y(x,V);if(x.isDepthTexture)ue=v(x.format===us,x.type),Be&&(ve?t.texStorage2D(s.TEXTURE_2D,1,ue,V.width,V.height):t.texImage2D(s.TEXTURE_2D,0,ue,V.width,V.height,0,te,ae,null));else if(x.isDataTexture)if(de.length>0){ve&&Be&&t.texStorage2D(s.TEXTURE_2D,Fe,ue,de[0].width,de[0].height);for(let _e=0,ze=de.length;_e<ze;_e++)Z=de[_e],ve?Ge&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Z.width,Z.height,te,ae,Z.data):t.texImage2D(s.TEXTURE_2D,_e,ue,Z.width,Z.height,0,te,ae,Z.data);x.generateMipmaps=!1}else ve?(Be&&t.texStorage2D(s.TEXTURE_2D,Fe,ue,V.width,V.height),Ge&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,V.width,V.height,te,ae,V.data)):t.texImage2D(s.TEXTURE_2D,0,ue,V.width,V.height,0,te,ae,V.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ve&&Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,ue,de[0].width,de[0].height,V.depth);for(let _e=0,ze=de.length;_e<ze;_e++)if(Z=de[_e],x.format!==ct)if(te!==null)if(ve){if(Ge)if(x.layerUpdates.size>0){const $e=bA(Z.width,Z.height,x.format,x.type);for(const ut of x.layerUpdates){const ge=Z.data.subarray(ut*$e/Z.data.BYTES_PER_ELEMENT,(ut+1)*$e/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,ut,Z.width,Z.height,1,te,ge,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Z.width,Z.height,V.depth,te,Z.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,ue,Z.width,Z.height,V.depth,0,Z.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ge&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Z.width,Z.height,V.depth,te,ae,Z.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,ue,Z.width,Z.height,V.depth,0,te,ae,Z.data)}else{ve&&Be&&t.texStorage2D(s.TEXTURE_2D,Fe,ue,de[0].width,de[0].height);for(let _e=0,ze=de.length;_e<ze;_e++)Z=de[_e],x.format!==ct?te!==null?ve?Ge&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Z.width,Z.height,te,Z.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,ue,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ge&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Z.width,Z.height,te,ae,Z.data):t.texImage2D(s.TEXTURE_2D,_e,ue,Z.width,Z.height,0,te,ae,Z.data)}else if(x.isDataArrayTexture)if(ve){if(Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,ue,V.width,V.height,V.depth),Ge)if(x.layerUpdates.size>0){const _e=bA(V.width,V.height,x.format,x.type);for(const ze of x.layerUpdates){const $e=V.data.subarray(ze*_e/V.data.BYTES_PER_ELEMENT,(ze+1)*_e/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ze,V.width,V.height,1,te,ae,$e)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,te,ae,V.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,V.width,V.height,V.depth,0,te,ae,V.data);else if(x.isData3DTexture)ve?(Be&&t.texStorage3D(s.TEXTURE_3D,Fe,ue,V.width,V.height,V.depth),Ge&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,te,ae,V.data)):t.texImage3D(s.TEXTURE_3D,0,ue,V.width,V.height,V.depth,0,te,ae,V.data);else if(x.isFramebufferTexture){if(Be)if(ve)t.texStorage2D(s.TEXTURE_2D,Fe,ue,V.width,V.height);else{let _e=V.width,ze=V.height;for(let $e=0;$e<Fe;$e++)t.texImage2D(s.TEXTURE_2D,$e,ue,_e,ze,0,te,ae,null),_e>>=1,ze>>=1}}else if(de.length>0){if(ve&&Be){const _e=ie(de[0]);t.texStorage2D(s.TEXTURE_2D,Fe,ue,_e.width,_e.height)}for(let _e=0,ze=de.length;_e<ze;_e++)Z=de[_e],ve?Ge&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,te,ae,Z):t.texImage2D(s.TEXTURE_2D,_e,ue,te,ae,Z);x.generateMipmaps=!1}else if(ve){if(Be){const _e=ie(V);t.texStorage2D(s.TEXTURE_2D,Fe,ue,_e.width,_e.height)}Ge&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te,ae,V)}else t.texImage2D(s.TEXTURE_2D,0,ue,te,ae,V);f(x)&&m(O),M.__version=k.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function F(w,x,U,O,P,k){const M=r.convert(U.format,U.colorSpace),H=r.convert(U.type),q=_(U.internalFormat,M,H,U.colorSpace);if(!n.get(x).__hasExternalTextures){const se=Math.max(1,x.width>>k),V=Math.max(1,x.height>>k);P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?t.texImage3D(P,k,q,se,V,x.depth,0,M,H,null):t.texImage2D(P,k,q,se,V,0,M,H,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),K(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,O,P,n.get(U).__webglTexture,0,Y(x)):(P===s.TEXTURE_2D||P>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,O,P,n.get(U).__webglTexture,k),t.bindFramebuffer(s.FRAMEBUFFER,null)}function J(w,x,U){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){const O=x.depthTexture,P=O&&O.isDepthTexture?O.type:null,k=v(x.stencilBuffer,P),M=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=Y(x);K(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,H,k,x.width,x.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,H,k,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,k,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,M,s.RENDERBUFFER,w)}else{const O=x.textures;for(let P=0;P<O.length;P++){const k=O[P],M=r.convert(k.format,k.colorSpace),H=r.convert(k.type),q=_(k.internalFormat,M,H,k.colorSpace),se=Y(x);U&&K(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,q,x.width,x.height):K(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,q,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,q,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(w){const x=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const O=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){const P=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",P)};O.addEventListener("dispose",P),x.__depthDisposeCallback=P}x.__boundDepthTexture=O}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");(function(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,O),!P.depthTexture||!P.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(P.depthTexture).__webglTexture&&P.depthTexture.image.width===P.width&&P.depthTexture.image.height===P.height||(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),b(P.depthTexture,0);const k=n.get(P.depthTexture).__webglTexture,M=Y(P);if(P.depthTexture.format===xa)K(P)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,k,0,M):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,k,0);else{if(P.depthTexture.format!==us)throw new Error("Unknown depthTexture format");K(P)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,k,0,M):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,k,0)}})(x.__webglFramebuffer,w)}else if(U){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=s.createRenderbuffer(),J(x.__webglDepthbuffer[O],w,!1);else{const P=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer[O];s.bindRenderbuffer(s.RENDERBUFFER,k),s.framebufferRenderbuffer(s.FRAMEBUFFER,P,s.RENDERBUFFER,k)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),J(x.__webglDepthbuffer,w,!1);else{const O=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,P=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,P),s.framebufferRenderbuffer(s.FRAMEBUFFER,O,s.RENDERBUFFER,P)}t.bindFramebuffer(s.FRAMEBUFFER,null)}const oe=[],he=[];function Y(w){return Math.min(i.maxSamples,w.samples)}function K(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(w,x){const U=w.colorSpace,O=w.format,P=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==et&&U!==ai&&(He.getTransfer(U)===rt?O===ct&&P===mt||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=function(){const w=B;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),B+=1,w},this.resetTextureUnits=function(){B=0},this.setTexture2D=b,this.setTexture2DArray=function(w,x){const U=n.get(w);w.version>0&&U.__version!==w.version?z(U,w,x):t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+x)},this.setTexture3D=function(w,x){const U=n.get(w);w.version>0&&U.__version!==w.version?z(U,w,x):t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+x)},this.setTextureCube=function(w,x){const U=n.get(w);w.version>0&&U.__version!==w.version?function(O,P,k){if(P.image.length!==6)return;const M=N(O,P),H=P.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+k);const q=n.get(H);if(H.version!==q.__version||M===!0){t.activeTexture(s.TEXTURE0+k);const se=He.getPrimaries(He.workingColorSpace),V=P.colorSpace===ai?null:He.getPrimaries(P.colorSpace),te=P.colorSpace===ai||se===V?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ae=P.isCompressedTexture||P.image[0].isCompressedTexture,Z=P.image[0]&&P.image[0].isDataTexture,ue=[];for(let ge=0;ge<6;ge++)ue[ge]=ae||Z?Z?P.image[ge].image:P.image[ge]:g(P.image[ge],!0,i.maxCubemapSize),ue[ge]=ne(P,ue[ge]);const de=ue[0],ve=r.convert(P.format,P.colorSpace),Be=r.convert(P.type),Ge=_(P.internalFormat,ve,Be,P.colorSpace),Fe=P.isVideoTexture!==!0,_e=q.__version===void 0||M===!0,ze=H.dataReady;let $e,ut=y(P,de);if(G(s.TEXTURE_CUBE_MAP,P),ae){Fe&&_e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ge,de.width,de.height);for(let ge=0;ge<6;ge++){$e=ue[ge].mipmaps;for(let Pe=0;Pe<$e.length;Pe++){const Ze=$e[Pe];P.format!==ct?ve!==null?Fe?ze&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,Ze.width,Ze.height,ve,Ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,Ge,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,Ze.width,Ze.height,ve,Be,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,Ge,Ze.width,Ze.height,0,ve,Be,Ze.data)}}}else{if($e=P.mipmaps,Fe&&_e){$e.length>0&&ut++;const ge=ie(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ge,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Z){Fe?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue[ge].width,ue[ge].height,ve,Be,ue[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ge,ue[ge].width,ue[ge].height,0,ve,Be,ue[ge].data);for(let Pe=0;Pe<$e.length;Pe++){const Ze=$e[Pe].image[ge].image;Fe?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,Ze.width,Ze.height,ve,Be,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,Ge,Ze.width,Ze.height,0,ve,Be,Ze.data)}}else{Fe?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ve,Be,ue[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ge,ve,Be,ue[ge]);for(let Pe=0;Pe<$e.length;Pe++){const Ze=$e[Pe];Fe?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,ve,Be,Ze.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,Ge,ve,Be,Ze.image[ge])}}}f(P)&&m(s.TEXTURE_CUBE_MAP),q.__version=H.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}(U,w,x):t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+x)},this.rebindTextures=function(w,x,U){const O=n.get(w);x!==void 0&&F(O.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&ee(w)},this.setupRenderTarget=function(w){const x=w.texture,U=n.get(w),O=n.get(x);w.addEventListener("dispose",S);const P=w.textures,k=w.isWebGLCubeRenderTarget===!0,M=P.length>1;if(M||(O.__webglTexture===void 0&&(O.__webglTexture=s.createTexture()),O.__version=x.version,a.memory.textures++),k){U.__webglFramebuffer=[];for(let H=0;H<6;H++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[H]=[];for(let q=0;q<x.mipmaps.length;q++)U.__webglFramebuffer[H][q]=s.createFramebuffer()}else U.__webglFramebuffer[H]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let H=0;H<x.mipmaps.length;H++)U.__webglFramebuffer[H]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(M)for(let H=0,q=P.length;H<q;H++){const se=n.get(P[H]);se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&K(w)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let H=0;H<P.length;H++){const q=P[H];U.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[H]);const se=r.convert(q.format,q.colorSpace),V=r.convert(q.type),te=_(q.internalFormat,se,V,q.colorSpace,w.isXRRenderTarget===!0),ae=Y(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,te,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+H,s.RENDERBUFFER,U.__webglColorRenderbuffer[H])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),J(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(k){t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture),G(s.TEXTURE_CUBE_MAP,x);for(let H=0;H<6;H++)if(x.mipmaps&&x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)F(U.__webglFramebuffer[H][q],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,q);else F(U.__webglFramebuffer[H],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);f(x)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(M){for(let H=0,q=P.length;H<q;H++){const se=P[H],V=n.get(se);t.bindTexture(s.TEXTURE_2D,V.__webglTexture),G(s.TEXTURE_2D,se),F(U.__webglFramebuffer,w,se,s.COLOR_ATTACHMENT0+H,s.TEXTURE_2D,0),f(se)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let H=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(H=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(H,O.__webglTexture),G(H,x),x.mipmaps&&x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)F(U.__webglFramebuffer[q],w,x,s.COLOR_ATTACHMENT0,H,q);else F(U.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,H,0);f(x)&&m(H),t.unbindTexture()}w.depthBuffer&&ee(w)},this.updateRenderTargetMipmap=function(w){const x=w.textures;for(let U=0,O=x.length;U<O;U++){const P=x[U];if(f(P)){const k=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,M=n.get(P).__webglTexture;t.bindTexture(k,M),m(k),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(K(w)===!1){const x=w.textures,U=w.width,O=w.height;let P=s.COLOR_BUFFER_BIT;const k=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,M=n.get(w),H=x.length>1;if(H)for(let q=0;q<x.length;q++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,M.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let q=0;q<x.length;q++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(P|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(P|=s.STENCIL_BUFFER_BIT)),H){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,M.__webglColorRenderbuffer[q]);const se=n.get(x[q]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,U,O,0,0,U,O,P,s.NEAREST),l===!0&&(oe.length=0,he.length=0,oe.push(s.COLOR_ATTACHMENT0+q),w.depthBuffer&&w.resolveDepthBuffer===!1&&(oe.push(k),he.push(k),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,he)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),H)for(let q=0;q<x.length;q++){t.bindFramebuffer(s.FRAMEBUFFER,M.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,M.__webglColorRenderbuffer[q]);const se=n.get(x[q]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.TEXTURE_2D,se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,M.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}},this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=F,this.useMultisampledRTT=K}function Ty(s,e){return{convert:function(t,n=""){let i;const r=He.getTransfer(n);if(t===mt)return s.UNSIGNED_BYTE;if(t===$u)return s.UNSIGNED_SHORT_4_4_4_4;if(t===Zu)return s.UNSIGNED_SHORT_5_5_5_1;if(t===jg)return s.UNSIGNED_INT_5_9_9_9_REV;if(t===Ku)return s.BYTE;if(t===Ju)return s.SHORT;if(t===Ea)return s.UNSIGNED_SHORT;if(t===Fl)return s.INT;if(t===bi)return s.UNSIGNED_INT;if(t===yt)return s.FLOAT;if(t===xt)return s.HALF_FLOAT;if(t===1021)return s.ALPHA;if(t===1022)return s.RGB;if(t===ct)return s.RGBA;if(t===1024)return s.LUMINANCE;if(t===1025)return s.LUMINANCE_ALPHA;if(t===xa)return s.DEPTH_COMPONENT;if(t===us)return s.DEPTH_STENCIL;if(t===Si)return s.RED;if(t===ed)return s.RED_INTEGER;if(t===or)return s.RG;if(t===td)return s.RG_INTEGER;if(t===nd)return s.RGBA_INTEGER;if(t===qo||t===pa||t===Xo||t===ma)if(r===rt){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===qo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===pa)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Xo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ma)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===qo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===pa)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Xo)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ma)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===dl||t===su||t===Al||t===au){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===dl)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===su)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Al)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===au)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===pl||t===ml||t===gl){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===pl||t===ml)return r===rt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===gl)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===Sa||t===ou||t===lu||t===cu||t===Ca||t===hu||t===uu||t===du||t===Au||t===pu||t===mu||t===gu||t===fu||t===vu){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===Sa)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===ou)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===lu)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===cu)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Ca)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===hu)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===uu)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===du)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Au)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===pu)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===mu)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===gu)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===fu)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===vu)return r===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===ga||t===_u||t===yu){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===ga)return r===rt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===_u)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===yu)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===36283||t===Eu||t===xu||t===Su){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===ga)return i.COMPRESSED_RED_RGTC1_EXT;if(t===Eu)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===xu)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Su)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===hs?s.UNSIGNED_INT_24_8:s[t]!==void 0?s[t]:null}}}class By extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ci extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ry={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const f=t.getJointPose(g,n),m=this._getHandJoint(c,g);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),A=.02,p=.005;c.inputState.pinching&&d>A+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=A-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Dy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ke;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ly extends Mn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,A=null,p=null;const g=new Dy,f=t.getContextAttributes();let m=null,_=null;const v=[],y=[],E=new Te;let S=null;const C=new Tt;C.layers.enable(1),C.viewport=new Ve;const B=new Tt;B.layers.enable(2),B.viewport=new Ve;const b=[C,B],R=new By;R.layers.enable(1),R.layers.enable(2);let W=null,D=null;function G(Y){const K=y.indexOf(Y.inputSource);if(K===-1)return;const ne=v[K];ne!==void 0&&(ne.update(Y.inputSource,Y.frame,c||a),ne.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",z);for(let Y=0;Y<v.length;Y++){const K=y[Y];K!==null&&(y[Y]=null,v[Y].disconnect(K))}W=null,D=null,g.reset(),e.setRenderTarget(m),A=null,d=null,u=null,i=null,_=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}function z(Y){for(let K=0;K<Y.removed.length;K++){const ne=Y.removed[K],ie=y.indexOf(ne);ie>=0&&(y[ie]=null,v[ie].disconnect(ne))}for(let K=0;K<Y.added.length;K++){const ne=Y.added[K];let ie=y.indexOf(ne);if(ie===-1){for(let x=0;x<v.length;x++){if(x>=y.length){y.push(ne),ie=x;break}if(y[x]===null){y[x]=ne,ie=x;break}}if(ie===-1)break}const w=v[ie];w&&w.connect(ne)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=v[Y];return K===void 0&&(K=new Sc,v[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=v[Y];return K===void 0&&(K=new Sc,v[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=v[Y];return K===void 0&&(K=new Sc,v[Y]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:A},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",N),i.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){const K={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};A=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),_=new dn(A.framebufferWidth,A.framebufferHeight,{format:ct,type:mt,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let K=null,ne=null,ie=null;f.depth&&(ie=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=f.stencil?us:xa,ne=f.stencil?hs:bi);const w={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(w),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new dn(d.textureWidth,d.textureHeight,{format:ct,type:mt,depthTexture:new of(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};const F=new T,J=new T;function ee(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let K=Y.near,ne=Y.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),R.near=B.near=C.near=K,R.far=B.far=C.far=ne,W===R.near&&D===R.far||(i.updateRenderState({depthNear:R.near,depthFar:R.far}),W=R.near,D=R.far);const ie=Y.parent,w=R.cameras;ee(R,ie);for(let x=0;x<w.length;x++)ee(w[x],ie);w.length===2?function(x,U,O){F.setFromMatrixPosition(U.matrixWorld),J.setFromMatrixPosition(O.matrixWorld);const P=F.distanceTo(J),k=U.projectionMatrix.elements,M=O.projectionMatrix.elements,H=k[14]/(k[10]-1),q=k[14]/(k[10]+1),se=(k[9]+1)/k[5],V=(k[9]-1)/k[5],te=(k[8]-1)/k[0],ae=(M[8]+1)/M[0],Z=H*te,ue=H*ae,de=P/(-te+ae),ve=de*-te;if(U.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.translateX(ve),x.translateZ(de),x.matrixWorld.compose(x.position,x.quaternion,x.scale),x.matrixWorldInverse.copy(x.matrixWorld).invert(),k[10]===-1)x.projectionMatrix.copy(U.projectionMatrix),x.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const Be=H+de,Ge=q+de,Fe=Z-ve,_e=ue+(P-ve),ze=se*q/Ge*Be,$e=V*q/Ge*Be;x.projectionMatrix.makePerspective(Fe,_e,ze,$e,Be,Ge),x.projectionMatrixInverse.copy(x.projectionMatrix).invert()}}(R,C,B):R.projectionMatrix.copy(C.projectionMatrix),function(x,U,O){O===null?x.matrix.copy(U.matrixWorld):(x.matrix.copy(O.matrixWorld),x.matrix.invert(),x.matrix.multiply(U.matrixWorld)),x.matrix.decompose(x.position,x.quaternion,x.scale),x.updateMatrixWorld(!0),x.projectionMatrix.copy(U.projectionMatrix),x.projectionMatrixInverse.copy(U.projectionMatrixInverse),x.isPerspectiveCamera&&(x.fov=2*ms*Math.atan(1/x.projectionMatrix.elements[5]),x.zoom=1)}(Y,R,ie)},this.getCamera=function(){return R},this.getFoveation=function(){if(d!==null||A!==null)return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)};let oe=null;const he=new af;he.setAnimationLoop(function(Y,K){if(h=K.getViewerPose(c||a),p=K,h!==null){const ne=h.views;A!==null&&(e.setRenderTargetFramebuffer(_,A.framebuffer),e.setRenderTarget(_));let ie=!1;ne.length!==R.cameras.length&&(R.cameras.length=0,ie=!0);for(let x=0;x<ne.length;x++){const U=ne[x];let O=null;if(A!==null)O=A.getViewport(U);else{const k=u.getViewSubImage(d,U);O=k.viewport,x===0&&(e.setRenderTargetTextures(_,k.colorTexture,d.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(_))}let P=b[x];P===void 0&&(P=new Tt,P.layers.enable(x),P.viewport=new Ve,b[x]=P),P.matrix.fromArray(U.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(U.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(O.x,O.y,O.width,O.height),x===0&&(R.matrix.copy(P.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ie===!0&&R.cameras.push(P)}const w=i.enabledFeatures;if(w&&w.includes("depth-sensing")){const x=u.getDepthInformation(ne[0]);x&&x.isValid&&x.texture&&g.init(e,x,i.renderState)}}for(let ne=0;ne<v.length;ne++){const ie=y[ne],w=v[ne];ie!==null&&w!==void 0&&w.update(ie,K,c||a)}oe&&oe(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}),this.setAnimationLoop=function(Y){oe=Y},this.dispose=function(){}}}const Gi=new An,Uy=new Se;function Py(s,e){function t(i,r){i.matrixAutoUpdate===!0&&i.updateMatrix(),r.value.copy(i.matrix)}function n(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map,t(r.map,i.mapTransform)),r.alphaMap&&(i.alphaMap.value=r.alphaMap,t(r.alphaMap,i.alphaMapTransform)),r.bumpMap&&(i.bumpMap.value=r.bumpMap,t(r.bumpMap,i.bumpMapTransform),i.bumpScale.value=r.bumpScale,r.side===1&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,t(r.normalMap,i.normalMapTransform),i.normalScale.value.copy(r.normalScale),r.side===1&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,t(r.displacementMap,i.displacementMapTransform),i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,i.emissiveMapTransform)),r.specularMap&&(i.specularMap.value=r.specularMap,t(r.specularMap,i.specularMapTransform)),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);const a=e.get(r),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,Gi.copy(l),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),i.envMapRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(Gi)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap&&(i.lightMap.value=r.lightMap,i.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,i.lightMapTransform)),r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,r){r.color.getRGB(i.fogColor.value,nf(s)),r.isFog?(i.fogNear.value=r.near,i.fogFar.value=r.far):r.isFogExp2&&(i.fogDensity.value=r.density)},refreshMaterialUniforms:function(i,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?n(i,r):r.isMeshToonMaterial?(n(i,r),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(i,r)):r.isMeshPhongMaterial?(n(i,r),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(i,r)):r.isMeshStandardMaterial?(n(i,r),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(i,r),r.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(i,r,l)):r.isMeshMatcapMaterial?(n(i,r),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(i,r)):r.isMeshDepthMaterial?n(i,r):r.isMeshDistanceMaterial?(n(i,r),function(c,h){const u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(i,r)):r.isMeshNormalMaterial?n(i,r):r.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(i,r),r.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(i,r)):r.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,r,a,o):r.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,r):r.isShadowMaterial?(i.color.value.copy(r.color),i.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function Ny(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,A,p){const g=u.value,f=d+"_"+A;if(p[f]===void 0)return p[f]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{const m=p[f];if(typeof g=="number"||typeof g=="boolean"){if(m!==g)return p[f]=g,!0}else if(m.equals(g)===!1)return m.copy(g),!0}return!1}function c(u){const d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){const d=u.target;d.removeEventListener("dispose",h);const A=a.indexOf(d.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[d.id]),delete i[d.id],delete r[d.id]}return{bind:function(u,d){const A=d.program;n.uniformBlockBinding(u,A)},update:function(u,d){let A=i[u.id];A===void 0&&(function(f){const m=f.uniforms;let _=0;const v=16;for(let E=0,S=m.length;E<S;E++){const C=Array.isArray(m[E])?m[E]:[m[E]];for(let B=0,b=C.length;B<b;B++){const R=C[B],W=Array.isArray(R.value)?R.value:[R.value];for(let D=0,G=W.length;D<G;D++){const N=c(W[D]),z=_%v,F=z%N.boundary,J=z+F;_+=F,J!==0&&v-J<N.storage&&(_+=v-J),R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=_,_+=N.storage}}}const y=_%v;y>0&&(_+=v-y),f.__size=_,f.__cache={}}(u),A=function(f){const m=function(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=m;const _=s.createBuffer(),v=f.__size,y=f.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,v,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,m,_),_}(u),i[u.id]=A,u.addEventListener("dispose",h));const p=d.program;n.updateUBOMapping(u,p);const g=e.render.frame;r[u.id]!==g&&(function(f){const m=i[f.id],_=f.uniforms,v=f.__cache;s.bindBuffer(s.UNIFORM_BUFFER,m);for(let y=0,E=_.length;y<E;y++){const S=Array.isArray(_[y])?_[y]:[_[y]];for(let C=0,B=S.length;C<B;C++){const b=S[C];if(l(b,y,C,v)===!0){const R=b.__offset,W=Array.isArray(b.value)?b.value:[b.value];let D=0;for(let G=0;G<W.length;G++){const N=W[G],z=c(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,R+D,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,D),D+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}(u),r[u.id]=g)},dispose:function(){for(const u in i)s.deleteBuffer(i[u]);a=[],i={},r={}}}}class cd{constructor(e={}){const{canvas:t=Uv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;let d;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const A=new Uint32Array(4),p=new Int32Array(4);let g=null,f=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=st,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let y=!1,E=0,S=0,C=null,B=-1,b=null;const R=new Ve,W=new Ve;let D=null;const G=new fe(0);let N=0,z=t.width,F=t.height,J=1,ee=null,oe=null;const he=new Ve(0,0,z,F),Y=new Ve(0,0,z,F);let K=!1;const ne=new od;let ie=!1,w=!1;const x=new Se,U=new Se,O=new T,P=new Ve,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let M=!1;function H(){return C===null?J:1}let q,se,V,te,ae,Z,ue,de,ve,Be,Ge,Fe,_e,ze,$e,ut,ge,Pe,Ze,Qa,Ar,Zt,Hn,Ri,L=n;function Di(I,Q){return t.getContext(I,Q)}try{const I={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hl}`),t.addEventListener("webglcontextlost",Sd,!1),t.addEventListener("webglcontextrestored",Cd,!1),t.addEventListener("webglcontextcreationerror",Id,!1),L===null){const Q="webgl2";if(L=Di(Q,I),L===null)throw Di(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}function ws(){q=new l_(L),q.init(),Zt=new Ty(L,q),se=new r_(L,q,e,Zt),V=new My(L),se.reverseDepthBuffer&&V.buffers.depth.setReversed(!0),te=new u_(L),ae=new gy,Z=new by(L,q,V,ae,se,Zt,te),ue=new a_(v),de=new o_(v),ve=new Zv(L),Hn=new n_(L,ve),Be=new c_(L,ve,te,Hn),Ge=new A_(L,Be,ve,te),Ze=new d_(L,se,Z),ut=new s_(ae),Fe=new my(v,ue,de,q,se,Hn,ut),_e=new Py(v,ae),ze=new vy,$e=new Sy(q),Pe=new t_(v,ue,de,V,Ge,d,l),ge=new Iy(v,Ge,se),Ri=new Ny(L,te,se,V),Qa=new i_(L,q,te),Ar=new h_(L,q,te),te.programs=Fe.programs,v.capabilities=se,v.extensions=q,v.properties=ae,v.renderLists=ze,v.shadowMap=ge,v.state=V,v.info=te}ws();const It=new Ly(v,L);function Sd(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Cd(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const I=te.autoReset,Q=ge.enabled,j=ge.autoUpdate,$=ge.needsUpdate,X=ge.type;ws(),te.autoReset=I,ge.enabled=Q,ge.autoUpdate=j,ge.needsUpdate=$,ge.type=X}function Id(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function wd(I){const Q=I.target;Q.removeEventListener("dispose",wd),function(j){(function($){const X=ae.get($).programs;X!==void 0&&(X.forEach(function(re){Fe.releaseProgram(re)}),$.isShaderMaterial&&Fe.releaseShaderCache($))})(j),ae.remove(j)}(Q)}function Md(I,Q,j){I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,ka(I,Q,j),I.side=0,I.needsUpdate=!0,ka(I,Q,j),I.side=2):ka(I,Q,j)}this.xr=It,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const I=q.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=q.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(I){I!==void 0&&(J=I,this.setSize(z,F,!1))},this.getSize=function(I){return I.set(z,F)},this.setSize=function(I,Q,j=!0){It.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(z=I,F=Q,t.width=Math.floor(I*J),t.height=Math.floor(Q*J),j===!0&&(t.style.width=I+"px",t.style.height=Q+"px"),this.setViewport(0,0,I,Q))},this.getDrawingBufferSize=function(I){return I.set(z*J,F*J).floor()},this.setDrawingBufferSize=function(I,Q,j){z=I,F=Q,J=j,t.width=Math.floor(I*j),t.height=Math.floor(Q*j),this.setViewport(0,0,I,Q)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(he)},this.setViewport=function(I,Q,j,$){I.isVector4?he.set(I.x,I.y,I.z,I.w):he.set(I,Q,j,$),V.viewport(R.copy(he).multiplyScalar(J).round())},this.getScissor=function(I){return I.copy(Y)},this.setScissor=function(I,Q,j,$){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,Q,j,$),V.scissor(W.copy(Y).multiplyScalar(J).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(I){V.setScissorTest(K=I)},this.setOpaqueSort=function(I){ee=I},this.setTransparentSort=function(I){oe=I},this.getClearColor=function(I){return I.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(I=!0,Q=!0,j=!0){let $=0;if(I){let X=!1;if(C!==null){const re=C.texture.format;X=re===nd||re===td||re===ed}if(X){const re=C.texture.type,pe=re===mt||re===bi||re===Ea||re===hs||re===$u||re===Zu,me=Pe.getClearColor(),ye=Pe.getClearAlpha(),we=me.r,Ie=me.g,Ce=me.b;pe?(A[0]=we,A[1]=Ie,A[2]=Ce,A[3]=ye,L.clearBufferuiv(L.COLOR,0,A)):(p[0]=we,p[1]=Ie,p[2]=Ce,p[3]=ye,L.clearBufferiv(L.COLOR,0,p))}else $|=L.COLOR_BUFFER_BIT}Q&&($|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Sd,!1),t.removeEventListener("webglcontextrestored",Cd,!1),t.removeEventListener("webglcontextcreationerror",Id,!1),ze.dispose(),$e.dispose(),ae.dispose(),ue.dispose(),de.dispose(),Ge.dispose(),Hn.dispose(),Ri.dispose(),Fe.dispose(),It.dispose(),It.removeEventListener("sessionstart",bd),It.removeEventListener("sessionend",Td),Li.stop()},this.renderBufferDirect=function(I,Q,j,$,X,re){Q===null&&(Q=k);const pe=X.isMesh&&X.matrixWorld.determinant()<0,me=function(Oe,At,Dt,Le,Me){At.isScene!==!0&&(At=k),Z.resetTextureUnits();const mn=At.fog,G0=Le.isMeshStandardMaterial?At.environment:null,H0=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:et,Ga=(Le.isMeshStandardMaterial?de:ue).get(Le.envMap||G0),z0=Le.vertexColors===!0&&!!Dt.attributes.color&&Dt.attributes.color.itemSize===4,V0=!!Dt.attributes.tangent&&(!!Le.normalMap||Le.anisotropy>0),W0=!!Dt.morphAttributes.position,q0=!!Dt.morphAttributes.normal,X0=!!Dt.morphAttributes.color;let Pd=0;Le.toneMapped&&(C!==null&&C.isXRRenderTarget!==!0||(Pd=v.toneMapping));const Nd=Dt.morphAttributes.position||Dt.morphAttributes.normal||Dt.morphAttributes.color,j0=Nd!==void 0?Nd.length:0,Ne=ae.get(Le),Y0=f.state.lights;if(ie===!0&&(w===!0||Oe!==b)){const an=Oe===b&&Le.id===B;ut.setState(Le,Oe,an)}let gn=!1;Le.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==Y0.state.version||Ne.outputColorSpace!==H0||Me.isBatchedMesh&&Ne.batching===!1?gn=!0:Me.isBatchedMesh||Ne.batching!==!0?Me.isBatchedMesh&&Ne.batchingColor===!0&&Me.colorTexture===null||Me.isBatchedMesh&&Ne.batchingColor===!1&&Me.colorTexture!==null||Me.isInstancedMesh&&Ne.instancing===!1?gn=!0:Me.isInstancedMesh||Ne.instancing!==!0?Me.isSkinnedMesh&&Ne.skinning===!1?gn=!0:Me.isSkinnedMesh||Ne.skinning!==!0?Me.isInstancedMesh&&Ne.instancingColor===!0&&Me.instanceColor===null||Me.isInstancedMesh&&Ne.instancingColor===!1&&Me.instanceColor!==null||Me.isInstancedMesh&&Ne.instancingMorph===!0&&Me.morphTexture===null||Me.isInstancedMesh&&Ne.instancingMorph===!1&&Me.morphTexture!==null||Ne.envMap!==Ga||Le.fog===!0&&Ne.fog!==mn?gn=!0:Ne.numClippingPlanes===void 0||Ne.numClippingPlanes===ut.numPlanes&&Ne.numIntersection===ut.numIntersection?(Ne.vertexAlphas!==z0||Ne.vertexTangents!==V0||Ne.morphTargets!==W0||Ne.morphNormals!==q0||Ne.morphColors!==X0||Ne.toneMapping!==Pd||Ne.morphTargetsCount!==j0)&&(gn=!0):gn=!0:gn=!0:gn=!0:gn=!0:(gn=!0,Ne.__version=Le.version);let Ui=Ne.currentProgram;gn===!0&&(Ui=ka(Le,At,Me));let Fd=!1,Ms=!1,ql=!1;const ft=Ui.getUniforms(),hi=Ne.uniforms;if(V.useProgram(Ui.program)&&(Fd=!0,Ms=!0,ql=!0),Le.id!==B&&(B=Le.id,Ms=!0),Fd||b!==Oe){se.reverseDepthBuffer?(x.copy(Oe.projectionMatrix),function(Pi){const ot=Pi.elements;ot[2]=.5*ot[2]+.5*ot[3],ot[6]=.5*ot[6]+.5*ot[7],ot[10]=.5*ot[10]+.5*ot[11],ot[14]=.5*ot[14]+.5*ot[15]}(x),function(Pi){const ot=Pi.elements;ot[11]===-1?(ot[10]=-ot[10]-1,ot[14]=-ot[14]):(ot[10]=-ot[10],ot[14]=1-ot[14])}(x),ft.setValue(L,"projectionMatrix",x)):ft.setValue(L,"projectionMatrix",Oe.projectionMatrix),ft.setValue(L,"viewMatrix",Oe.matrixWorldInverse);const an=ft.map.cameraPosition;an!==void 0&&an.setValue(L,O.setFromMatrixPosition(Oe.matrixWorld)),se.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(Oe.far+1)/Math.LN2)),(Le.isMeshPhongMaterial||Le.isMeshToonMaterial||Le.isMeshLambertMaterial||Le.isMeshBasicMaterial||Le.isMeshStandardMaterial||Le.isShaderMaterial)&&ft.setValue(L,"isOrthographic",Oe.isOrthographicCamera===!0),b!==Oe&&(b=Oe,Ms=!0,ql=!0)}if(Me.isSkinnedMesh){ft.setOptional(L,Me,"bindMatrix"),ft.setOptional(L,Me,"bindMatrixInverse");const an=Me.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),ft.setValue(L,"boneTexture",an.boneTexture,Z))}Me.isBatchedMesh&&(ft.setOptional(L,Me,"batchingTexture"),ft.setValue(L,"batchingTexture",Me._matricesTexture,Z),ft.setOptional(L,Me,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",Me._indirectTexture,Z),ft.setOptional(L,Me,"batchingColorTexture"),Me._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",Me._colorsTexture,Z));const Xl=Dt.morphAttributes;Xl.position===void 0&&Xl.normal===void 0&&Xl.color===void 0||Ze.update(Me,Dt,Ui),(Ms||Ne.receiveShadow!==Me.receiveShadow)&&(Ne.receiveShadow=Me.receiveShadow,ft.setValue(L,"receiveShadow",Me.receiveShadow)),Le.isMeshGouraudMaterial&&Le.envMap!==null&&(hi.envMap.value=Ga,hi.flipEnvMap.value=Ga.isCubeTexture&&Ga.isRenderTargetTexture===!1?-1:1),Le.isMeshStandardMaterial&&Le.envMap===null&&At.environment!==null&&(hi.envMapIntensity.value=At.environmentIntensity),Ms&&(ft.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&(fn=ql,(bn=hi).ambientLightColor.needsUpdate=fn,bn.lightProbe.needsUpdate=fn,bn.directionalLights.needsUpdate=fn,bn.directionalLightShadows.needsUpdate=fn,bn.pointLights.needsUpdate=fn,bn.pointLightShadows.needsUpdate=fn,bn.spotLights.needsUpdate=fn,bn.spotLightShadows.needsUpdate=fn,bn.rectAreaLights.needsUpdate=fn,bn.hemisphereLights.needsUpdate=fn),mn&&Le.fog===!0&&_e.refreshFogUniforms(hi,mn),_e.refreshMaterialUniforms(hi,Le,J,F,f.state.transmissionRenderTarget[Oe.id]),Ko.upload(L,Ld(Ne),hi,Z));var bn,fn;if(Le.isShaderMaterial&&Le.uniformsNeedUpdate===!0&&(Ko.upload(L,Ld(Ne),hi,Z),Le.uniformsNeedUpdate=!1),Le.isSpriteMaterial&&ft.setValue(L,"center",Me.center),ft.setValue(L,"modelViewMatrix",Me.modelViewMatrix),ft.setValue(L,"normalMatrix",Me.normalMatrix),ft.setValue(L,"modelMatrix",Me.matrixWorld),Le.isShaderMaterial||Le.isRawShaderMaterial){const an=Le.uniformsGroups;for(let Pi=0,ot=an.length;Pi<ot;Pi++){const Qd=an[Pi];Ri.update(Qd,Ui),Ri.bind(Qd,Ui)}}return Ui}(I,Q,j,$,X);V.setMaterial($,pe);let ye=j.index,we=1;if($.wireframe===!0){if(ye=Be.getWireframeAttribute(j),ye===void 0)return;we=2}const Ie=j.drawRange,Ce=j.attributes.position;let Qe=Ie.start*we,gt=(Ie.start+Ie.count)*we;re!==null&&(Qe=Math.max(Qe,re.start*we),gt=Math.min(gt,(re.start+re.count)*we)),ye!==null?(Qe=Math.max(Qe,0),gt=Math.min(gt,ye.count)):Ce!=null&&(Qe=Math.max(Qe,0),gt=Math.min(gt,Ce.count));const dt=gt-Qe;if(dt<0||dt===1/0)return;let wt;Hn.setup(X,$,me,j,ye);let nt=Qa;if(ye!==null&&(wt=ve.get(ye),nt=Ar,nt.setIndex(wt)),X.isMesh)$.wireframe===!0?(V.setLineWidth($.wireframeLinewidth*H()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(X.isLine){let Oe=$.linewidth;Oe===void 0&&(Oe=1),V.setLineWidth(Oe*H()),X.isLineSegments?nt.setMode(L.LINES):X.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else X.isPoints?nt.setMode(L.POINTS):X.isSprite&&nt.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)nt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))nt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Oe=X._multiDrawStarts,At=X._multiDrawCounts,Dt=X._multiDrawCount,Le=ye?ve.get(ye).bytesPerElement:1,Me=ae.get($).currentProgram.getUniforms();for(let mn=0;mn<Dt;mn++)Me.setValue(L,"_gl_DrawID",mn),nt.render(Oe[mn]/Le,At[mn])}else if(X.isInstancedMesh)nt.renderInstances(Qe,dt,X.count);else if(j.isInstancedBufferGeometry){const Oe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,At=Math.min(j.instanceCount,Oe);nt.renderInstances(Qe,dt,At)}else nt.render(Qe,dt)},this.compile=function(I,Q,j=null){j===null&&(j=I),f=$e.get(j),f.init(Q),_.push(f),j.traverseVisible(function(X){X.isLight&&X.layers.test(Q.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),I!==j&&I.traverseVisible(function(X){X.isLight&&X.layers.test(Q.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights();const $=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const re=X.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const me=re[pe];Md(me,j,X),$.add(me)}else Md(re,j,X),$.add(re)}),_.pop(),f=null,$},this.compileAsync=function(I,Q,j=null){const $=this.compile(I,Q,j);return new Promise(X=>{function re(){$.forEach(function(pe){ae.get(pe).currentProgram.isReady()&&$.delete(pe)}),$.size!==0?setTimeout(re,10):X(I)}q.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Vl=null;function bd(){Li.stop()}function Td(){Li.start()}const Li=new af;function Wl(I,Q,j,$){if(I.visible===!1)return;if(I.layers.test(Q.layers)){if(I.isGroup)j=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Q);else if(I.isLight)f.pushLight(I),I.castShadow&&f.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ne.intersectsSprite(I)){$&&P.setFromMatrixPosition(I.matrixWorld).applyMatrix4(U);const re=Ge.update(I),pe=I.material;pe.visible&&g.push(I,re,pe,j,P.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ne.intersectsObject(I))){const re=Ge.update(I),pe=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),P.copy(I.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),P.copy(re.boundingSphere.center)),P.applyMatrix4(I.matrixWorld).applyMatrix4(U)),Array.isArray(pe)){const me=re.groups;for(let ye=0,we=me.length;ye<we;ye++){const Ie=me[ye],Ce=pe[Ie.materialIndex];Ce&&Ce.visible&&g.push(I,re,Ce,j,P.z,Ie)}}else pe.visible&&g.push(I,re,pe,j,P.z,null)}}const X=I.children;for(let re=0,pe=X.length;re<pe;re++)Wl(X[re],Q,j,$)}function Bd(I,Q,j,$){const X=I.opaque,re=I.transmissive,pe=I.transparent;f.setupLightsView(j),ie===!0&&ut.setGlobalState(v.clippingPlanes,j),$&&V.viewport(R.copy($)),X.length>0&&Oa(X,Q,j),re.length>0&&Oa(re,Q,j),pe.length>0&&Oa(pe,Q,j),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Rd(I,Q,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new dn(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?xt:mt,minFilter:cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const X=f.state.transmissionRenderTarget[$.id],re=$.viewport||R;X.setSize(re.z,re.w);const pe=v.getRenderTarget();v.setRenderTarget(X),v.getClearColor(G),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),M&&Pe.render(j);const me=v.toneMapping;v.toneMapping=0;const ye=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),ie===!0&&ut.setGlobalState(v.clippingPlanes,$),Oa(I,j,$),Z.updateMultisampleRenderTarget(X),Z.updateRenderTargetMipmap(X),q.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ie=0,Ce=Q.length;Ie<Ce;Ie++){const Qe=Q[Ie],gt=Qe.object,dt=Qe.geometry,wt=Qe.material,nt=Qe.group;if(wt.side===2&&gt.layers.test($.layers)){const Oe=wt.side;wt.side=1,wt.needsUpdate=!0,Dd(gt,j,$,dt,wt,nt),wt.side=Oe,wt.needsUpdate=!0,we=!0}}we===!0&&(Z.updateMultisampleRenderTarget(X),Z.updateRenderTargetMipmap(X))}v.setRenderTarget(pe),v.setClearColor(G,N),ye!==void 0&&($.viewport=ye),v.toneMapping=me}function Oa(I,Q,j){const $=Q.isScene===!0?Q.overrideMaterial:null;for(let X=0,re=I.length;X<re;X++){const pe=I[X],me=pe.object,ye=pe.geometry,we=$===null?pe.material:$,Ie=pe.group;me.layers.test(j.layers)&&Dd(me,Q,j,ye,we,Ie)}}function Dd(I,Q,j,$,X,re){I.onBeforeRender(v,Q,j,$,X,re),I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(v,Q,j,$,I,re),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,v.renderBufferDirect(j,Q,$,X,I,re),X.side=0,X.needsUpdate=!0,v.renderBufferDirect(j,Q,$,X,I,re),X.side=2):v.renderBufferDirect(j,Q,$,X,I,re),I.onAfterRender(v,Q,j,$,X,re)}function ka(I,Q,j){Q.isScene!==!0&&(Q=k);const $=ae.get(I),X=f.state.lights,re=f.state.shadowsArray,pe=X.state.version,me=Fe.getParameters(I,X.state,re,Q,j),ye=Fe.getProgramCacheKey(me);let we=$.programs;$.environment=I.isMeshStandardMaterial?Q.environment:null,$.fog=Q.fog,$.envMap=(I.isMeshStandardMaterial?de:ue).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?Q.environmentRotation:I.envMapRotation,we===void 0&&(I.addEventListener("dispose",wd),we=new Map,$.programs=we);let Ie=we.get(ye);if(Ie!==void 0){if($.currentProgram===Ie&&$.lightsStateVersion===pe)return Ud(I,me),Ie}else me.uniforms=Fe.getUniforms(I),I.onBeforeCompile(me,v),Ie=Fe.acquireProgram(me,ye),we.set(ye,Ie),$.uniforms=me.uniforms;const Ce=$.uniforms;return(I.isShaderMaterial||I.isRawShaderMaterial)&&I.clipping!==!0||(Ce.clippingPlanes=ut.uniform),Ud(I,me),$.needsLights=function(Qe){return Qe.isMeshLambertMaterial||Qe.isMeshToonMaterial||Qe.isMeshPhongMaterial||Qe.isMeshStandardMaterial||Qe.isShadowMaterial||Qe.isShaderMaterial&&Qe.lights===!0}(I),$.lightsStateVersion=pe,$.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMap.value=X.state.directionalShadowMap,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotShadowMap.value=X.state.spotShadowMap,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMap.value=X.state.pointShadowMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Ie,$.uniformsList=null,Ie}function Ld(I){if(I.uniformsList===null){const Q=I.currentProgram.getUniforms();I.uniformsList=Ko.seqWithValue(Q.seq,I.uniforms)}return I.uniformsList}function Ud(I,Q){const j=ae.get(I);j.outputColorSpace=Q.outputColorSpace,j.batching=Q.batching,j.batchingColor=Q.batchingColor,j.instancing=Q.instancing,j.instancingColor=Q.instancingColor,j.instancingMorph=Q.instancingMorph,j.skinning=Q.skinning,j.morphTargets=Q.morphTargets,j.morphNormals=Q.morphNormals,j.morphColors=Q.morphColors,j.morphTargetsCount=Q.morphTargetsCount,j.numClippingPlanes=Q.numClippingPlanes,j.numIntersection=Q.numClipIntersection,j.vertexAlphas=Q.vertexAlphas,j.vertexTangents=Q.vertexTangents,j.toneMapping=Q.toneMapping}Li.setAnimationLoop(function(I){Vl&&Vl(I)}),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(I){Vl=I,It.setAnimationLoop(I),I===null?Li.stop():Li.start()},It.addEventListener("sessionstart",bd),It.addEventListener("sessionend",Td),this.render=function(I,Q){if(Q!==void 0&&Q.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(y===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(Q),Q=It.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,Q,C),f=$e.get(I,_.length),f.init(Q),_.push(f),U.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ne.setFromProjectionMatrix(U),w=this.localClippingEnabled,ie=ut.init(this.clippingPlanes,w),g=ze.get(I,m.length),g.init(),m.push(g),It.enabled===!0&&It.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Wl(re,Q,-1/0,v.sortObjects)}Wl(I,Q,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ee,oe),M=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,M&&Pe.addToRenderList(g,I),this.info.render.frame++,ie===!0&&ut.beginShadows();const j=f.state.shadowsArray;ge.render(j,I,Q),ie===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,X=g.transmissive;if(f.setupLights(),Q.isArrayCamera){const re=Q.cameras;if(X.length>0)for(let pe=0,me=re.length;pe<me;pe++)Rd($,X,I,re[pe]);M&&Pe.render(I);for(let pe=0,me=re.length;pe<me;pe++){const ye=re[pe];Bd(g,I,ye,ye.viewport)}}else X.length>0&&Rd($,X,I,Q),M&&Pe.render(I),Bd(g,I,Q);C!==null&&(Z.updateMultisampleRenderTarget(C),Z.updateRenderTargetMipmap(C)),I.isScene===!0&&I.onAfterRender(v,I,Q),Hn.resetDefaultState(),B=-1,b=null,_.pop(),_.length>0?(f=_[_.length-1],ie===!0&&ut.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,m.pop(),g=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(I,Q,j){ae.get(I.texture).__webglTexture=Q,ae.get(I.depthTexture).__webglTexture=j;const $=ae.get(I);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Q){const j=ae.get(I);j.__webglFramebuffer=Q,j.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(I,Q=0,j=0){C=I,E=Q,S=j;let $=!0,X=null,re=!1,pe=!1;if(I){const me=ae.get(I);if(me.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(me.__webglFramebuffer===void 0)Z.setupRenderTarget(I);else if(me.__hasExternalTextures)Z.rebindTextures(I,ae.get(I.texture).__webglTexture,ae.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ie=I.depthTexture;if(me.__boundDepthTexture!==Ie){if(Ie!==null&&ae.has(Ie)&&(I.width!==Ie.image.width||I.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(I)}}const ye=I.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);const we=ae.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(X=Array.isArray(we[Q])?we[Q][j]:we[Q],re=!0):X=I.samples>0&&Z.useMultisampledRTT(I)===!1?ae.get(I).__webglMultisampledFramebuffer:Array.isArray(we)?we[j]:we,R.copy(I.viewport),W.copy(I.scissor),D=I.scissorTest}else R.copy(he).multiplyScalar(J).floor(),W.copy(Y).multiplyScalar(J).floor(),D=K;if(V.bindFramebuffer(L.FRAMEBUFFER,X)&&$&&V.drawBuffers(I,X),V.viewport(R),V.scissor(W),V.setScissorTest(D),re){const me=ae.get(I.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me.__webglTexture,j)}else if(pe){const me=ae.get(I.texture),ye=Q||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.__webglTexture,j||0,ye)}B=-1},this.readRenderTargetPixels=function(I,Q,j,$,X,re,pe){if(!I||!I.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ae.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&pe!==void 0&&(me=me[pe]),me){V.bindFramebuffer(L.FRAMEBUFFER,me);try{const ye=I.texture,we=ye.format,Ie=ye.type;if(!se.textureFormatReadable(we))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Q>=0&&Q<=I.width-$&&j>=0&&j<=I.height-X&&L.readPixels(Q,j,$,X,Zt.convert(we),Zt.convert(Ie),re)}finally{const ye=C!==null?ae.get(C).__webglFramebuffer:null;V.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(I,Q,j,$,X,re,pe){if(!I||!I.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ae.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&pe!==void 0&&(me=me[pe]),me){const ye=I.texture,we=ye.format,Ie=ye.type;if(!se.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=I.width-$&&j>=0&&j<=I.height-X){V.bindFramebuffer(L.FRAMEBUFFER,me);const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(Q,j,$,X,Zt.convert(we),Zt.convert(Ie),0);const Qe=C!==null?ae.get(C).__webglFramebuffer:null;V.bindFramebuffer(L.FRAMEBUFFER,Qe);const gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await function(dt,wt,nt){return new Promise(function(Oe,At){setTimeout(function Dt(){switch(dt.clientWaitSync(wt,dt.SYNC_FLUSH_COMMANDS_BIT,0)){case dt.WAIT_FAILED:At();break;case dt.TIMEOUT_EXPIRED:setTimeout(Dt,nt);break;default:Oe()}},nt)})}(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Ce),L.deleteSync(gt),re}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Q=null,j=0){I.isTexture!==!0&&(Yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,I=arguments[1]);const $=Math.pow(2,-j),X=Math.floor(I.image.width*$),re=Math.floor(I.image.height*$),pe=Q!==null?Q.x:0,me=Q!==null?Q.y:0;Z.setTexture2D(I,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,pe,me,X,re),V.unbindTexture()},this.copyTextureToTexture=function(I,Q,j=null,$=null,X=0){let re,pe,me,ye,we,Ie;I.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1],Q=arguments[2],X=arguments[3]||0,j=null),j!==null?(re=j.max.x-j.min.x,pe=j.max.y-j.min.y,me=j.min.x,ye=j.min.y):(re=I.image.width,pe=I.image.height,me=0,ye=0),$!==null?(we=$.x,Ie=$.y):(we=0,Ie=0);const Ce=Zt.convert(Q.format),Qe=Zt.convert(Q.type);Z.setTexture2D(Q,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Q.unpackAlignment);const gt=L.getParameter(L.UNPACK_ROW_LENGTH),dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),wt=L.getParameter(L.UNPACK_SKIP_PIXELS),nt=L.getParameter(L.UNPACK_SKIP_ROWS),Oe=L.getParameter(L.UNPACK_SKIP_IMAGES),At=I.isCompressedTexture?I.mipmaps[X]:I.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,me),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),I.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,X,we,Ie,re,pe,Ce,Qe,At.data):I.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,X,we,Ie,At.width,At.height,Ce,At.data):L.texSubImage2D(L.TEXTURE_2D,X,we,Ie,re,pe,Ce,Qe,At),L.pixelStorei(L.UNPACK_ROW_LENGTH,gt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe),X===0&&Q.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(I,Q,j=null,$=null,X=0){let re,pe,me,ye,we,Ie,Ce,Qe,gt;I.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,$=arguments[1]||null,I=arguments[2],Q=arguments[3],X=arguments[4]||0);const dt=I.isCompressedTexture?I.mipmaps[X]:I.image;j!==null?(re=j.max.x-j.min.x,pe=j.max.y-j.min.y,me=j.max.z-j.min.z,ye=j.min.x,we=j.min.y,Ie=j.min.z):(re=dt.width,pe=dt.height,me=dt.depth,ye=0,we=0,Ie=0),$!==null?(Ce=$.x,Qe=$.y,gt=$.z):(Ce=0,Qe=0,gt=0);const wt=Zt.convert(Q.format),nt=Zt.convert(Q.type);let Oe;if(Q.isData3DTexture)Z.setTexture3D(Q,0),Oe=L.TEXTURE_3D;else{if(!Q.isDataArrayTexture&&!Q.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");Z.setTexture2DArray(Q,0),Oe=L.TEXTURE_2D_ARRAY}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Q.unpackAlignment);const At=L.getParameter(L.UNPACK_ROW_LENGTH),Dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Le=L.getParameter(L.UNPACK_SKIP_PIXELS),Me=L.getParameter(L.UNPACK_SKIP_ROWS),mn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ie),I.isDataTexture||I.isData3DTexture?L.texSubImage3D(Oe,X,Ce,Qe,gt,re,pe,me,wt,nt,dt.data):Q.isCompressedArrayTexture?L.compressedTexSubImage3D(Oe,X,Ce,Qe,gt,re,pe,me,wt,dt.data):L.texSubImage3D(Oe,X,Ce,Qe,gt,re,pe,me,wt,nt,dt),L.pixelStorei(L.UNPACK_ROW_LENGTH,At),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,Me),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mn),X===0&&Q.generateMipmaps&&L.generateMipmap(Oe),V.unbindTexture()},this.initRenderTarget=function(I){ae.get(I).__webglFramebuffer===void 0&&Z.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Z.setTextureCube(I,0):I.isData3DTexture?Z.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Z.setTexture2DArray(I,0):Z.setTexture2D(I,0),V.unbindTexture()},this.resetState=function(){E=0,S=0,C=null,V.reset(),Hn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ql?"display-p3":"srgb",t.unpackColorSpace=He.workingColorSpace===Da?"display-p3":"srgb"}}class Ti extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cu,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new T;class hd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const TA=new T,BA=new Ve,RA=new Ve,Qy=new T,DA=new Se,co=new T,Cc=new pn,LA=new Se,Ic=new La;class Oy extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Od,this.bindMatrix=new Se,this.bindMatrixInverse=new Se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(i),e.ray.intersectsSphere(Cc)!==!1&&(LA.copy(i).invert(),Ic.copy(e.ray).applyMatrix4(LA),this.boundingBox!==null&&Ic.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,Ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ve,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Od?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;BA.fromBufferAttribute(i.attributes.skinIndex,e),RA.fromBufferAttribute(i.attributes.skinWeight,e),TA.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=RA.getComponent(r);if(a!==0){const o=BA.getComponent(r);DA.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qy.copy(TA).applyMatrix4(DA),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Af extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ua extends Ke{constructor(e=null,t=1,n=1,i,r,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const UA=new Se,ky=new Se;class ud{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Se)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Se;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ky;UA.multiplyMatrices(o,t[r]),UA.toArray(n,16*r)}i!==null&&(i.needsUpdate=!0)}clone(){return new ud(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ua(t,e,e,ct,yt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Af),this.bones.push(a),this.boneInverses.push(new Se().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class bu extends ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mr=new Se,PA=new Se,ho=[],NA=new jt,Gy=new Se,Ps=new Je,Ns=new pn;class Hy extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),NA.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(NA)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Ns.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),e.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mr),PA.multiplyMatrices(n,Mr),Ps.matrixWorld=PA,Ps.raycast(e,ho);for(let a=0,o=ho.length;a<o;a++){const l=ho[a];l.instanceId=r,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ua(new Float32Array(i*this.count),i,this.count,Si,yt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pf extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xl=new T,Sl=new T,FA=new Se,Fs=new La,uo=new pn,wc=new T,QA=new T;class wa extends tt{constructor(e=new $t,t=new pf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xl.fromBufferAttribute(t,i-1),Sl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xl.distanceTo(Sl);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;FA.copy(i).invert(),Fs.copy(e.ray).applyMatrix4(FA);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),A=Math.min(h.count,a.start+a.count);for(let p=d,g=A-1;p<g;p+=c){const f=h.getX(p),m=h.getX(p+1),_=Ao(this,e,Fs,l,f,m);_&&t.push(_)}if(this.isLineLoop){const p=h.getX(A-1),g=h.getX(d),f=Ao(this,e,Fs,l,p,g);f&&t.push(f)}}else{const d=Math.max(0,a.start),A=Math.min(u.count,a.start+a.count);for(let p=d,g=A-1;p<g;p+=c){const f=Ao(this,e,Fs,l,p,p+1);f&&t.push(f)}if(this.isLineLoop){const p=Ao(this,e,Fs,l,A-1,d);p&&t.push(p)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}}function Ao(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(xl.fromBufferAttribute(a,i),Sl.fromBufferAttribute(a,r),t.distanceSqToSegment(xl,Sl,wc,QA)>n)return;wc.applyMatrix4(s.matrixWorld);const o=e.ray.origin.distanceTo(wc);return o<e.near||o>e.far?void 0:{distance:o,point:QA.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const OA=new T,kA=new T;class zy extends wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)OA.fromBufferAttribute(t,i),kA.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+OA.distanceTo(kA);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vy extends wa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mf extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const GA=new Se,Tu=new La,po=new pn,mo=new T;class Wy extends tt{constructor(e=new $t,t=new mf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;GA.copy(i).invert(),Tu.copy(e.ray).applyMatrix4(GA);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){const A=c.getX(u);mo.fromBufferAttribute(h,A),HA(mo,A,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)mo.fromBufferAttribute(h,u),HA(mo,u,l,i,e,t,this)}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}}function HA(s,e,t,n,i,r,a){const o=Tu.distanceSqToPoint(s);if(o<t){const l=new T;Tu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qy extends Ke{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:We,this.magFilter=r!==void 0?r:We,this.generateMipmaps=!1;const h=this;"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)})}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class cr extends Ke{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Xy extends cr{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Et,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jy extends cr{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,hr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class gf extends Ke{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dd extends $t{constructor(e=1,t=32,n=16,i=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,A=[],p=[],g=[],f=[];for(let m=0;m<=n;m++){const _=[],v=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const S=E/t;u.x=-e*Math.cos(i+S*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+S*r)*Math.sin(a+v*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),f.push(S+y,1-v),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const v=h[m][_+1],y=h[m][_],E=h[m+1][_],S=h[m+1][_+1];(m!==0||a>0)&&A.push(v,y,S),(m!==n-1||l<Math.PI)&&A.push(y,E,S)}this.setIndex(A),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ma extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends Ma{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function go(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Yy(s){const e=s.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return s[n]-s[i]}),t}function zA(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function ff(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Pa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=r)break e;{const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0}}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ky extends Pa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kr:r=e,o=2*t-n;break;case fl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kr:a=e,l=2*n-t;break;case fl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,A=this._weightNext,p=(n-t)/(i-t),g=p*p,f=g*p,m=-d*f+2*d*g-d*p,_=(1+d)*f+(-1.5-2*d)*g+(-.5+d)*p+1,v=(-1-A)*f+(1.5+A)*g+.5*p,y=A*f-A*g;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+_*a[c+E]+v*a[l+E]+y*a[u+E];return r}}class vf extends Pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Jy extends Pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ky(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case Yl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(i!==void 0&&(o=i,ArrayBuffer.isView(o)&&!(o instanceof DataView)))for(let l=0,c=i.length;l!==c;++l){const h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}var o;return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,u=h-n,d=h+n;for(let A=0;A!==n;++A){const p=t[h+A];if(p!==t[u+A]||p!==t[d+A]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Fn.prototype.TimeBufferType=Float32Array,Fn.prototype.ValueBufferType=Float32Array,Fn.prototype.DefaultInterpolation=As;class qr extends Fn{constructor(e,t,n){super(e,t,n)}}qr.prototype.ValueTypeName="bool",qr.prototype.ValueBufferType=Array,qr.prototype.DefaultInterpolation=ds,qr.prototype.InterpolantFactoryMethodLinear=void 0,qr.prototype.InterpolantFactoryMethodSmooth=void 0;class _f extends Fn{}_f.prototype.ValueTypeName="color";class fs extends Fn{}fs.prototype.ValueTypeName="number";class $y extends Pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Yt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class vs extends Fn{InterpolantFactoryMethodLinear(e){return new $y(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion",vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends Fn{constructor(e,t,n){super(e,t,n)}}Xr.prototype.ValueTypeName="string",Xr.prototype.ValueBufferType=Array,Xr.prototype.DefaultInterpolation=ds,Xr.prototype.InterpolantFactoryMethodLinear=void 0,Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends Fn{}_s.prototype.ValueTypeName="vector";class Bu{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Zy(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Yy(l);l=zA(l,1,h),c=zA(c,1,h),i||l[0]!==0||(l.push(r),c.push(c[0])),a.push(new fs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,d,A,p){if(d.length!==0){const g=[],f=[];ff(d,g,f,A),g.length!==0&&p.push(new h(u,g,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){const d={};let A;for(A=0;A<u.length;A++)if(u[A].morphTargets)for(let p=0;p<u[A].morphTargets.length;p++)d[u[A].morphTargets[p]]=-1;for(const p in d){const g=[],f=[];for(let m=0;m!==u[A].morphTargets.length;++m){const _=u[A];g.push(_.time),f.push(_.morphTarget===p?1:0)}i.push(new fs(".morphTargetInfluence["+p+"]",g,f))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(_s,d+".position",u,"pos",i),n(vs,d+".quaternion",u,"rot",i),n(_s,d+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){const i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Zy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return _f;case"quaternion":return vs;case"bool":case"boolean":return qr;case"string":return Xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(s.type);if(s.times===void 0){const t=[],n=[];ff(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yf{constructor(e,t,n){const i=this;let r,a=!1,o=0,l=0;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const A=c[u],p=c[u+1];if(A.global&&(A.lastIndex=0),A.test(h))return p}return null}}}const eE=new yf;class Gn{constructor(e){this.manager=e!==void 0?e:eE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class tE extends Error{constructor(e,t){super(e),this.response=t}}class li extends Gn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0)return void Yn[e].push({onLoad:t,onProgress:n,onError:i});Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Yn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),A=d?parseInt(d):0,p=A!==0;let g=0;const f=new ReadableStream({start(m){(function _(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{g+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:A});for(let S=0,C=h.length;S<C;S++){const B=h[S];B.onProgress&&B.onProgress(E)}m.enqueue(y),_()}},v=>{m.error(v)})})()}});return new Response(f)}throw new tE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(A=>d.decode(A))}}}).then(c=>{Ii.add(e,c);const h=Yn[e];delete Yn[e];for(let u=0,d=h.length;u<d;u++){const A=h[u];A.onLoad&&A.onLoad(c)}}).catch(c=>{const h=Yn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Yn[e];for(let u=0,d=h.length;u<d;u++){const A=h[u];A.onError&&A.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nE extends Gn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ii.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ia("img");function l(){h(),Ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class iE extends Gn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Ua,o=new li(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i===void 0)return void console.error(h);i(h)}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Et,a.wrapT=c.wrapT!==void 0?c.wrapT:Et,a.magFilter=c.magFilter!==void 0?c.magFilter:We,a.minFilter=c.minFilter!==void 0?c.minFilter:We,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=cn),c.mipmapCount===1&&(a.minFilter=We),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class Ef extends Gn{constructor(e){super(e)}load(e,t,n,i){const r=new Ke,a=new nE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class kl extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Mc=new Se,VA=new T,WA=new T;class Ad{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new od,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;VA.setFromMatrixPosition(e.matrixWorld),t.position.copy(VA),WA.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(WA),t.updateMatrixWorld(),Mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rE extends Ad{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=2*ms*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;n===t.fov&&i===t.aspect&&r===t.far||(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sE extends kl{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qA=new Se,Qs=new T,bc=new T;class aE extends Ad{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qs),bc.copy(n.position),bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bc),n.updateMatrixWorld(),i.makeTranslation(-Qs.x,-Qs.y,-Qs.z),qA.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qA)}}class xf extends kl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new aE}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oE extends Ad{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sf extends kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new oE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lE{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*i*1.092548),t.addScaledVector(a[5],i*r*1.092548),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],n*r*1.092548),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*i),t.addScaledVector(a[2],1.023328*r),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*i),t.addScaledVector(a[5],.858086*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],.858086*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+3*i);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+3*i);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class cE extends kl{constructor(e=new lE,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class _a{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hE extends Gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ii.get(e);if(a!==void 0)return r.manager.itemStart(e),a.then?void a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)}):(setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a);const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ii.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(e,l),r.manager.itemStart(e)}}class uE{constructor(e,t,n){let i,r,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Yt.multiplyQuaternionsFlat(e,a,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const pd="\\[\\]\\.:\\/",dE=new RegExp("["+pd+"]","g"),Tc="[^"+pd+"]",AE="[^"+pd.replace("\\.","")+"]",pE=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Tc)+/(WCOD+)?/.source.replace("WCOD",AE)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc)+"$"),mE=["material","materials","bones","map"];class ke{constructor(e,t,n){this.path=t,this.parsedPath=n||ke.parseTrackName(t),this.node=ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ke.Composite(e,t,n):new ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dE,"")}static parseTrackName(e){const t=pE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ke.Composite=class{constructor(s,e,t){const n=t||ke.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,n)}getValue(s,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(s,e)}setValue(s,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(s,e)}bind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray],ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gE{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Yr,endingEnd:Yr};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Yg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;if(this.blendMode===2501)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===id;if(e===0)return r===-1||!a||1&~r?i:t-i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&!(1&~r))return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Kr,i.endingEnd=Kr):(i.endingStart=e?this.zeroSlopeAtStart?Kr:Yr:fl,i.endingEnd=t?this.zeroSlopeAtEnd?Kr:Yr:fl)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const fE=new Float32Array(1);class vE extends Mn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],A=d.name;let p=h[A];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,A));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;p=new uE(ke.create(n,A,g),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,A),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new vf(new Float32Array(2),new Float32Array(2),1,fE),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Bu.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(n=a!==null?a.blendMode:Iv),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new gE(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Bu.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName[t];if(i!==void 0)for(const r in i){const a=i[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class md{constructor(e){this.value=e}clone(){return new md(this.value.clone===void 0?this.value:this.value.clone())}}const XA=new Se;function jA(s,e){return s.distance-e.distance}function Ru(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ru(r[a],e,t,!0)}}class Jo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);const $o=window,gd=$o.ShadowRoot&&($o.ShadyCSS===void 0||$o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cf=Symbol(),YA=new WeakMap;class _E{constructor(e,t,n){if(this._$cssResult$=!0,n!==Cf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(gd&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=YA.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&YA.set(t,e))}return e}toString(){return this.cssText}}const KA=gd?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(n=>new _E(typeof n=="string"?n:n+"",void 0,Cf))(t)})(s):s;var Bc;const Cl=window,JA=Cl.trustedTypes,yE=JA?JA.emptyScript:"",$A=Cl.reactiveElementPolyfillSupport,Du={toAttribute(s,e){switch(e){case Boolean:s=s?yE:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},If=(s,e)=>e!==s&&(e==e||s==s),Rc={attribute:!0,type:String,converter:Du,reflect:!1,hasChanged:If},Lu="finalized";class Os extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const i=this._$Ep(n,t);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,t=Rc){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Rc}static finalize(){if(this.hasOwnProperty(Lu))return!1;this[Lu]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of n)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(KA(i))}else e!==void 0&&t.push(KA(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((n,i)=>{gd?n.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):i.forEach(r=>{const a=document.createElement("style"),o=$o.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=r.cssText,n.appendChild(a)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Rc){var i;const r=this.constructor._$Ep(e,n);if(r!==void 0&&n.reflect===!0){const a=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:Du).toAttribute(t,n.type);this._$El=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Ev.get(e);if(r!==void 0&&this._$El!==r){const a=i.getPropertyOptions(r),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:Du;this._$El=r,this[r]=o.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||If)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(n)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dc;Os[Lu]=!0,Os.elementProperties=new Map,Os.elementStyles=[],Os.shadowRootOptions={mode:"open"},$A==null||$A({ReactiveElement:Os}),((Bc=Cl.reactiveElementVersions)!==null&&Bc!==void 0?Bc:Cl.reactiveElementVersions=[]).push("1.6.3");const Il=window,ys=Il.trustedTypes,ZA=ys?ys.createPolicy("lit-html",{createHTML:s=>s}):void 0,Uu="$lit$",xi=`lit$${(Math.random()+"").slice(9)}$`,wf="?"+xi,EE=`<${wf}>`,ur=document,ba=()=>ur.createComment(""),Ta=s=>s===null||typeof s!="object"&&typeof s!="function",ep=Array.isArray,Lc=`[ 	
\f\r]`,ks=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tp=/-->/g,np=/>/g,Hi=RegExp(`>|${Lc}(?:([^\\s"'>=/]+)(${Lc}*=${Lc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ip=/'/g,rp=/"/g,Mf=/^(?:script|style|textarea|title)$/i,fo=(s=>(e,...t)=>({_$litType$:s,strings:e,values:t}))(1),Es=Symbol.for("lit-noChange"),Bt=Symbol.for("lit-nothing"),sp=new WeakMap,lr=ur.createTreeWalker(ur,129,null,!1);function bf(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ZA!==void 0?ZA.createHTML(e):e}const xE=(s,e)=>{const t=s.length-1,n=[];let i,r=e===2?"<svg>":"",a=ks;for(let o=0;o<t;o++){const l=s[o];let c,h,u=-1,d=0;for(;d<l.length&&(a.lastIndex=d,h=a.exec(l),h!==null);)d=a.lastIndex,a===ks?h[1]==="!--"?a=tp:h[1]!==void 0?a=np:h[2]!==void 0?(Mf.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=Hi):h[3]!==void 0&&(a=Hi):a===Hi?h[0]===">"?(a=i??ks,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Hi:h[3]==='"'?rp:ip):a===rp||a===ip?a=Hi:a===tp||a===np?a=ks:(a=Hi,i=void 0);const A=a===Hi&&s[o+1].startsWith("/>")?" ":"";r+=a===ks?l+EE:u>=0?(n.push(c),l.slice(0,u)+Uu+l.slice(u)+xi+A):l+xi+(u===-2?(n.push(void 0),o):A)}return[bf(s,r+(s[t]||"<?>")+(e===2?"</svg>":"")),n]};class Ba{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,a=0;const o=e.length-1,l=this.parts,[c,h]=xE(e,t);if(this.el=Ba.createElement(c,n),lr.currentNode=this.el.content,t===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=lr.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const d of i.getAttributeNames())if(d.endsWith(Uu)||d.startsWith(xi)){const A=h[a++];if(u.push(d),A!==void 0){const p=i.getAttribute(A.toLowerCase()+Uu).split(xi),g=/([.?@])?(.*)/.exec(A);l.push({type:1,index:r,name:g[2],strings:p,ctor:g[1]==="."?CE:g[1]==="?"?wE:g[1]==="@"?ME:Gl})}else l.push({type:6,index:r})}for(const d of u)i.removeAttribute(d)}if(Mf.test(i.tagName)){const u=i.textContent.split(xi),d=u.length-1;if(d>0){i.textContent=ys?ys.emptyScript:"";for(let A=0;A<d;A++)i.append(u[A],ba()),lr.nextNode(),l.push({type:2,index:++r});i.append(u[d],ba())}}}else if(i.nodeType===8)if(i.data===wf)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(xi,u+1))!==-1;)l.push({type:7,index:r}),u+=xi.length-1}r++}}static createElement(e,t){const n=ur.createElement("template");return n.innerHTML=e,n}}function xs(s,e,t=s,n){var i,r,a,o;if(e===Es)return e;let l=n!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[n]:t._$Cl;const c=Ta(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(s),l._$AT(s,t,n)),n!==void 0?((a=(o=t)._$Co)!==null&&a!==void 0?a:o._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=xs(s,l._$AS(s,e.values),l,n)),e}class SE{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ur).importNode(n,!0);lr.currentNode=r;let a=lr.nextNode(),o=0,l=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new Na(a,a.nextSibling,this,e):c.type===1?h=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(h=new bE(a,this,e)),this._$AV.push(h),c=i[++l]}o!==(c==null?void 0:c.index)&&(a=lr.nextNode(),o++)}return lr.currentNode=ur,r}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Na{constructor(e,t,n,i){var r;this.type=2,this._$AH=Bt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=xs(this,e,t),Ta(e)?e===Bt||e==null||e===""?(this._$AH!==Bt&&this._$AR(),this._$AH=Bt):e!==this._$AH&&e!==Es&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):(n=>ep(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function")(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Bt&&Ta(this._$AH)?this._$AA.nextSibling.data=e:this.$(ur.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ba.createElement(bf(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(n);else{const a=new SE(r,this),o=a.u(this.options);a.v(n),this.$(o),this._$AH=a}}_$AC(e){let t=sp.get(e.strings);return t===void 0&&sp.set(e.strings,t=new Ba(e)),t}T(e){ep(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new Na(this.k(ba()),this.k(ba()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Gl{constructor(e,t,n,i,r){this.type=1,this._$AH=Bt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Bt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const r=this.strings;let a=!1;if(r===void 0)e=xs(this,e,t,0),a=!Ta(e)||e!==this._$AH&&e!==Es,a&&(this._$AH=e);else{const o=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=xs(this,o[n+l],t,l),c===Es&&(c=this._$AH[l]),a||(a=!Ta(c)||c!==this._$AH[l]),c===Bt?e=Bt:e!==Bt&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!i&&this.j(e)}j(e){e===Bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class CE extends Gl{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Bt?void 0:e}}const IE=ys?ys.emptyScript:"";class wE extends Gl{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Bt?this.element.setAttribute(this.name,IE):this.element.removeAttribute(this.name)}}class ME extends Gl{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){var n;if((e=(n=xs(this,e,t,0))!==null&&n!==void 0?n:Bt)===Es)return;const i=this._$AH,r=e===Bt&&i!==Bt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==Bt&&(i===Bt||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class bE{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){xs(this,e)}}const ap=Il.litHtmlPolyfillSupport;ap==null||ap(Ba,Na),((Dc=Il.litHtmlVersions)!==null&&Dc!==void 0?Dc:Il.litHtmlVersions=[]).push("2.8.0");const Tf=(s,e,t)=>{var n,i;const r=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let a=r._$litPart$;if(a===void 0){const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=a=new Na(e.insertBefore(ba(),o),o,void 0,t??{})}return a._$AI(s),a;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},Zo=window,fd=Zo.ShadowRoot&&(Zo.ShadyCSS===void 0||Zo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bf=Symbol(),op=new WeakMap;class TE{constructor(e,t,n){if(this._$cssResult$=!0,n!==Bf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(fd&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=op.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&op.set(t,e))}return e}toString(){return this.cssText}}const lp=fd?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(n=>new TE(typeof n=="string"?n:n+"",void 0,Bf))(t)})(s):s;var Uc;const wl=window,cp=wl.trustedTypes,BE=cp?cp.emptyScript:"",hp=wl.reactiveElementPolyfillSupport,Pu={toAttribute(s,e){switch(e){case Boolean:s=s?BE:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Rf=(s,e)=>e!==s&&(e==e||s==s),Pc={attribute:!0,type:String,converter:Pu,reflect:!1,hasChanged:Rf},Nu="finalized";class ir extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const i=this._$Ep(n,t);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,t=Pc){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pc}static finalize(){if(this.hasOwnProperty(Nu))return!1;this[Nu]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of n)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(lp(i))}else e!==void 0&&t.push(lp(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((n,i)=>{fd?n.adoptedStyleSheets=i.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):i.forEach(r=>{const a=document.createElement("style"),o=Zo.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=r.cssText,n.appendChild(a)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Pc){var i;const r=this.constructor._$Ep(e,n);if(r!==void 0&&n.reflect===!0){const a=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:Pu).toAttribute(t,n.type);this._$El=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Ev.get(e);if(r!==void 0&&this._$El!==r){const a=i.getPropertyOptions(r),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:Pu;this._$El=r,this[r]=o.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Rf)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(n)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nc,Fc;ir[Nu]=!0,ir.elementProperties=new Map,ir.elementStyles=[],ir.shadowRootOptions={mode:"open"},hp==null||hp({ReactiveElement:ir}),((Uc=wl.reactiveElementVersions)!==null&&Uc!==void 0?Uc:wl.reactiveElementVersions=[]).push("1.6.3");class el extends ir{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Tf(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Es}}el.finalized=!0,el._$litElement$=!0,(Nc=globalThis.litElementHydrateSupport)===null||Nc===void 0||Nc.call(globalThis,{LitElement:el});const up=globalThis.litElementPolyfillSupport;up==null||up({LitElement:el}),((Fc=globalThis.litElementVersions)!==null&&Fc!==void 0?Fc:globalThis.litElementVersions=[]).push("3.3.3");/* @license
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
 */const Df=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,Lf=Df&&self.XRSession.prototype.requestHitTestSource!=null,Qc=self.ResizeObserver!=null,Oc=self.IntersectionObserver!=null,Uf=Lf;(()=>{const s=navigator.userAgent||navigator.vendor||self.opera;/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(s)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(s.substr(0,4))})();const RE=/android/i.test(navigator.userAgent),DE=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,LE=/firefox/i.test(navigator.userAgent),UE=/OculusBrowser/.test(navigator.userAgent),PE=RE&&!LE&&!UE,NE=!!(window.webkit&&window.webkit.messageHandlers),dp=(()=>{if(DE){if(NE)return!!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);{const s=document.createElement("a");return!!(s.relList&&s.relList.supports&&s.relList.supports("ar"))}}return!1})(),Pf=s=>s&&s!=="null"?FE(s):null,Ap=()=>{if(Uf)return;const s=[];throw Df||s.push("WebXR Device API"),Lf||s.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${s.join(", ")}`)},FE=s=>new URL(s,window.location.toString()).toString(),pp=(s,e)=>{let t=null;return(...n)=>{t!=null&&self.clearTimeout(t),t=self.setTimeout(()=>{t=null,s(...n)},e)}},Un=(s,e,t)=>Math.max(e,Math.min(t,s)),mp=(()=>{const s=new RegExp("[?&]model-viewer-debug-mode(&|$)");return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(s)})();/* @license
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
 */var zi=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const la=Symbol("currentEnvironmentMap"),tl=Symbol("currentBackground"),Ml=Symbol("updateEnvironment"),vo=Symbol("cancelEnvironmentUpdate");/* @license
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
 */const QE=fo`
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
        ${fo`
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
        ${fo`
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
          ${fo`
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
</div>`,kc=new WeakMap;function OE(){let s,e;function t(n,i,r,a,o,l){const c=l.num_components(),h=r.num_points()*c,u=h*o.BYTES_PER_ELEMENT,d=function(g,f){switch(f){case Float32Array:return g.DT_FLOAT32;case Int8Array:return g.DT_INT8;case Int16Array:return g.DT_INT16;case Int32Array:return g.DT_INT32;case Uint8Array:return g.DT_UINT8;case Uint16Array:return g.DT_UINT16;case Uint32Array:return g.DT_UINT32}}(n,o),A=n._malloc(u);i.GetAttributeDataArrayForAllPoints(r,l,d,u,A);const p=new o(n.HEAPF32.buffer,A,h).slice();return n._free(A),{name:a,array:p,itemSize:c}}onmessage=function(n){const i=n.data;switch(i.type){case"init":s=i.decoderConfig,e=new Promise(function(o){s.onModuleLoaded=function(l){o({draco:l})},DracoDecoderModule(s)});break;case"decode":const r=i.buffer,a=i.taskConfig;e.then(o=>{const l=o.draco,c=new l.Decoder;try{const h=function(d,A,p,g){const f=g.attributeIDs,m=g.attributeTypes;let _,v;const y=A.GetEncodedGeometryType(p);if(y===d.TRIANGULAR_MESH)_=new d.Mesh,v=A.DecodeArrayToMesh(p,p.byteLength,_);else{if(y!==d.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");_=new d.PointCloud,v=A.DecodeArrayToPointCloud(p,p.byteLength,_)}if(!v.ok()||_.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+v.error_msg());const E={index:null,attributes:[]};for(const S in f){const C=self[m[S]];let B,b;if(g.useUniqueIDs)b=f[S],B=A.GetAttributeByUniqueId(_,b);else{if(b=A.GetAttributeId(_,d[f[S]]),b===-1)continue;B=A.GetAttribute(_,b)}const R=t(d,A,_,S,C,B);S==="color"&&(R.vertexColorSpace=g.vertexColorSpace),E.attributes.push(R)}return y===d.TRIANGULAR_MESH&&(E.index=function(S,C,B){const b=B.num_faces(),R=3*b,W=4*R,D=S._malloc(W);C.GetTrianglesUInt32Array(B,W,D);const G=new Uint32Array(S.HEAPF32.buffer,D,R).slice();return S._free(D),{array:G,itemSize:1}}(d,A,_)),d.destroy(_),E}(l,c,new Int8Array(r),a),u=h.attributes.map(d=>d.array.buffer);h.index&&u.push(h.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:h},u)}catch(h){console.error(h),self.postMessage({type:"error",id:i.id,error:h.message})}finally{l.destroy(c)}})}}}function gp(s,e){if(e===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===2||e===1){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o===void 0)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s;for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}const n=t.count-2,i=[];if(e===2)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2==0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class kE extends Gn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new WE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new jE(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new sx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=_a.extractUrlBase(e);a=_a.resolveURL(c,this.path)}else a=_a.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new li(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Nf){try{a[Ue.KHR_BINARY_GLTF]=new lx(e)}catch(h){return void(i&&i(h))}r=JSON.parse(a[Ue.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2)return void(i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));const c=new xx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ue.KHR_MATERIALS_UNLIT:a[u]=new zE;break;case Ue.KHR_DRACO_MESH_COMPRESSION:a[u]=new cx(r,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:a[u]=new hx;break;case Ue.KHR_MESH_QUANTIZATION:a[u]=new ux;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function GE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class HE{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let o;const l=new fe(16777215);a.color!==void 0&&l.setRGB(a.color[0],a.color[1],a.color[2],et);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new Sf(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new xf(l),o.distance=c;break;case"spot":o=new sE(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),o.decay=2,si(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(o),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],r=(i.extensions&&i.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(a){return n._getNodeRef(t.cache,r,a)})}}class zE{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return hn}extendParams(e,t,n){const i=[];e.color=new fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],et),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,st))}return Promise.all(i)}}class VE{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class WE{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(o,o)}return Promise.all(r)}}class qE{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class XE{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class jE{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],et)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,st)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class YE{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class KE{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(o[0],o[1],o[2],et),Promise.all(r)}}class JE{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class $E{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(o[0],o[1],o[2],et),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,st)),Promise.all(r)}}class ZE{constructor(e){this.parser=e,this.name=Ue.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class ex{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?kn:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class tx{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class nx{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ix{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rx{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(A){return A.buffer}):a.ready.then(function(){const A=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(A),h,u,d,i.mode,i.filter),A})})}return null}}class sx{constructor(e){this.name=Ue.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ln.TRIANGLES&&l.mode!==ln.TRIANGLE_STRIP&&l.mode!==ln.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],o={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(c=>(o[l]=c,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const A of h){const p=new Se,g=new T,f=new Yt,m=new T(1,1,1),_=new Hy(A.geometry,A.material,u);for(let v=0;v<u;v++)o.TRANSLATION&&g.fromBufferAttribute(o.TRANSLATION,v),o.ROTATION&&f.fromBufferAttribute(o.ROTATION,v),o.SCALE&&m.fromBufferAttribute(o.SCALE,v),_.setMatrixAt(v,p.compose(g,f,m));for(const v in o)if(v==="_COLOR_0"){const y=o[v];_.instanceColor=new bu(y.array,y.itemSize,y.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&A.geometry.setAttribute(v,o[v]);tt.prototype.copy.call(_,A),this.parser.assignFinalMaterial(_),d.push(_)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const Nf="glTF",ax=1313821514,ox=5130562;class lx{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,12),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-12,r=new DataView(e,12);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===ax){const c=new Uint8Array(e,12+a,o);this.content=n.decode(c)}else if(l===ox){const c=12+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Fu[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Fu[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],A=rs[d.componentType];c[u]=A.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(A){for(const p in A.attributes){const g=A.attributes[p],f=l[p];f!==void 0&&(g.normalized=f)}u(A)},o,c,et,d)})})}}class hx{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord!==void 0&&t.texCoord!==e.channel||t.offset!==void 0||t.rotation!==void 0||t.scale!==void 0)&&(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ux{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}}class Ff extends Pa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=2*o,c=3*o,h=i-t,u=(n-t)/h,d=u*u,A=d*u,p=e*c,g=p-c,f=-2*A+3*d,m=A-d,_=1-f,v=m-d+u;for(let y=0;y!==o;y++){const E=a[g+y+o],S=a[g+y+l]*h,C=a[p+y+o],B=a[p+y]*h;r[y]=_*E+v*S+f*C+m*B}return r}}const dx=new Yt;class Ax extends Ff{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return dx.fromArray(r).normalize().toArray(r),r}}const ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fp={9728:Ut,9729:We,9984:Nl,9985:ns,9986:ar,9987:cn},vp={33071:Et,33648:cs,10497:Qn},Gc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},px={CUBICSPLINE:void 0,LINEAR:As,STEP:ds},mx="OPAQUE",gx="MASK",fx="BLEND";function vx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ma({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),s.DefaultMaterial}function Vi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function si(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _x(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yx(s){let e;const t=s.extensions&&s.extensions[Ue.KHR_DRACO_MESH_COMPRESSION];if(e=t?"draco:"+t.bufferView+":"+t.indices+":"+Hc(t.attributes):s.indices+":"+Hc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Hc(s.targets[n]);return e}function Hc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Qu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}const Ex=new Se;class xx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new GE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Ef(this.options.manager):this.textureLoader=new hE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new li(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Vi(r,o,i),si(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(_a.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Gc[i.type],o=rs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ht(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Gc[i.type],c=rs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,A=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let g,f;if(A&&A!==u){const m=Math.floor(d/A),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(_);v||(g=new c(o,m*A,i.count*A/h),v=new Fy(g,A/h),t.cache.add(_,v)),f=new hd(v,l,d%A/h,p)}else g=o===null?new c(i.count*l):new c(o,d,i.count*l),f=new ht(g,l,p);if(i.sparse!==void 0){const m=Gc.SCALAR,_=rs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,E=new _(a[1],v,i.sparse.count*m),S=new c(a[2],y,i.sparse.count*l);o!==null&&(f=new ht(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let C=0,B=E.length;C<B;C++){const b=E[C];if(f.setX(b,S[C*l]),l>=2&&f.setY(b,S[C*l+1]),l>=3&&f.setZ(b,S[C*l+2]),l>=4&&f.setW(b,S[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=p}return f})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,r=t.images[i];let a=this.textureLoader;if(r.uri){const o=n.manager.getHandler(r.uri);o!==null&&(a=o)}return this.loadTextureImage(e,i,a)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=fp[u.magFilter]||We,h.minFilter=fp[u.minFilter]||cn,h.wrapS=vp[u.wrapS]||Qn,h.wrapT=vp[u.wrapT]||Qn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,A){let p=d;t.isImageBitmapLoader===!0&&(p=function(g){const f=new Ke(g);f.needsUpdate=!0,d(f)}),t.load(_a.resolveURL(u,r.path),p,void 0,A)})}).then(function(u){var d;return c===!0&&o.revokeObjectURL(l),si(u,a),u.userData.mimeType=a.mimeType||((d=a.uri).search(/\.jpe?g($|\?)/i)>0||d.search(/^data\:image\/jpeg/)===0?"image/jpeg":d.search(/\.webp($|\?)/i)>0||d.search(/^data\:image\/webp/)===0?"image/webp":"image/png"),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&((a=a.clone()).channel=n.texCoord),r.extensions[Ue.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new mf,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new pf,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ma}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=[];if((r.extensions||{})[Ue.KHR_MATERIALS_UNLIT]){const h=i[Ue.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],et),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,st)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=2);const c=r.alphaMode||mx;if(c===fx?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===gx&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==hn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==hn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==hn){const h=r.emissiveFactor;o.emissive=new fe().setRGB(h[0],h[1],h[2],et)}return r.emissiveTexture!==void 0&&a!==hn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,st)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),si(h,r),t.associations.set(h,{materials:e}),r.extensions&&Vi(i,h,r),h})}createUniqueName(e){const t=ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return _p(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=yx(c),u=i[h];if(u)a.push(u.promise);else{let d;d=c.extensions&&c.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?r(c):_p(new $t,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?vx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let A=0,p=h.length;A<p;A++){const g=h[A],f=a[A];let m;const _=c[A];if(f.mode===ln.TRIANGLES||f.mode===ln.TRIANGLE_STRIP||f.mode===ln.TRIANGLE_FAN||f.mode===void 0)m=r.isSkinnedMesh===!0?new Oy(g,_):new Je(g,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),f.mode===ln.TRIANGLE_STRIP?m.geometry=gp(m.geometry,1):f.mode===ln.TRIANGLE_FAN&&(m.geometry=gp(m.geometry,2));else if(f.mode===ln.LINES)m=new zy(g,_);else if(f.mode===ln.LINE_STRIP)m=new wa(g,_);else if(f.mode===ln.LINE_LOOP)m=new Vy(g,_);else{if(f.mode!==ln.POINTS)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);m=new Wy(g,_)}Object.keys(m.geometry.morphAttributes).length>0&&_x(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),si(m,r),f.extensions&&Vi(i,m,f),t.assignFinalMaterial(m),u.push(m)}for(let A=0,p=u.length;A<p;A++)t.associations.set(u[A],{meshes:e,primitives:A});if(u.length===1)return r.extensions&&Vi(i,u[0],r),u[0];const d=new Ci;r.extensions&&Vi(i,d,r),t.associations.set(d,{meshes:e});for(let A=0,p=u.length;A<p;A++)d.add(u[A]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(i)return n.type==="perspective"?t=new Tt(jo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ss(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),si(t,n),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Se;r!==null&&d.fromArray(r.array,16*c),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ud(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const A=i.channels[u],p=i.samplers[A.sampler],g=A.target,f=g.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;g.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],A=u[1],p=u[2],g=u[3],f=u[4],m=[];for(let _=0,v=d.length;_<v;_++){const y=d[_],E=A[_],S=p[_],C=g[_],B=f[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const b=n._createAnimationTracks(y,E,S,C,B);if(b)for(let R=0;R<b.length;R++)m.push(b[R])}return new Bu(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this,n=this.json.nodes[e],i=t._loadNodeShallow(e),r=[],a=n.children||[];for(let l=0,c=a.length;l<c;l++)r.push(t.getDependency("node",a[l]));const o=n.skin===void 0?Promise.resolve(null):t.getDependency("skin",n.skin);return Promise.all([i,Promise.all(r),o]).then(function(l){const c=l[0],h=l[1],u=l[2];u!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(u,Ex)});for(let d=0,A=h.length;d<A;d++)c.add(h[d]);return c})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(h=r.isBone===!0?new Af:c.length>1?new Ci:c.length===1?c[0]:new tt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),si(h,r),r.extensions&&Vi(n,h,r),r.matrix!==void 0){const u=new Se;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ci;n.name&&(r.name=i.createUniqueName(n.name)),si(r,n),n.extensions&&Vi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,h=l.length;c<h;c++)r.add(l[c]);return i.associations=(c=>{const h=new Map;for(const[u,d]of i.associations)(u instanceof wn||u instanceof Ke)&&h.set(u,d);return c.traverse(u=>{const d=i.associations.get(u);d!=null&&h.set(u,d)}),h})(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];let c;switch(fi[r.path]===fi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o),fi[r.path]){case fi.weights:c=fs;break;case fi.rotation:c=vs;break;case fi.position:case fi.scale:c=_s;break;default:n.itemSize===1?c=fs:c=_s}const h=i.interpolation!==void 0?px[i.interpolation]:As,u=this._getArrayFromAccessor(n);for(let d=0,A=l.length;d<A;d++){const p=new c(l[d]+"."+fi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){return new(this instanceof vs?Ax:Ff)(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _p(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Fu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return He.workingColorSpace!==et&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`),si(s,e),function(a,o,l){const c=o.attributes,h=new jt;if(c.POSITION===void 0)return;{const A=l.json.accessors[c.POSITION],p=A.min,g=A.max;if(p===void 0||g===void 0)return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(h.set(new T(p[0],p[1],p[2]),new T(g[0],g[1],g[2])),A.normalized){const f=Qu(rs[A.componentType]);h.min.multiplyScalar(f),h.max.multiplyScalar(f)}}const u=o.targets;if(u!==void 0){const A=new T,p=new T;for(let g=0,f=u.length;g<f;g++){const m=u[g];if(m.POSITION!==void 0){const _=l.json.accessors[m.POSITION],v=_.min,y=_.max;if(v!==void 0&&y!==void 0){if(p.setX(Math.max(Math.abs(v[0]),Math.abs(y[0]))),p.setY(Math.max(Math.abs(v[1]),Math.abs(y[1]))),p.setZ(Math.max(Math.abs(v[2]),Math.abs(y[2]))),_.normalized){const E=Qu(rs[_.componentType]);p.multiplyScalar(E)}A.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}h.expandByVector(A)}a.boundingBox=h;const d=new pn;h.getCenter(d.center),d.radius=h.min.distanceTo(h.max)/2,a.boundingSphere=d}(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?function(a,o,l){let c=!1,h=!1,u=!1;for(let g=0,f=o.length;g<f;g++){const m=o[g];if(m.POSITION!==void 0&&(c=!0),m.NORMAL!==void 0&&(h=!0),m.COLOR_0!==void 0&&(u=!0),c&&h&&u)break}if(!c&&!h&&!u)return Promise.resolve(a);const d=[],A=[],p=[];for(let g=0,f=o.length;g<f;g++){const m=o[g];if(c){const _=m.POSITION!==void 0?l.getDependency("accessor",m.POSITION):a.attributes.position;d.push(_)}if(h){const _=m.NORMAL!==void 0?l.getDependency("accessor",m.NORMAL):a.attributes.normal;A.push(_)}if(u){const _=m.COLOR_0!==void 0?l.getDependency("accessor",m.COLOR_0):a.attributes.color;p.push(_)}}return Promise.all([Promise.all(d),Promise.all(A),Promise.all(p)]).then(function(g){const f=g[0],m=g[1],_=g[2];return c&&(a.morphAttributes.position=f),h&&(a.morphAttributes.normal=m),u&&(a.morphAttributes.color=_),a.morphTargetsRelative=!0,a})}(s,e.targets,t):s})}class Sx{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Qf=9,Of=15,kf=16,Gf=22,Hf=37,zf=43,Vf=76,Wf=83,qf=97,Xf=100,jf=103,Yf=109,Kf=165,Jf=166,$f=1000066e3;class Cx{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Gs{constructor(e,t,n,i){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=i,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);const n=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}}const zt=[171,75,84,88,32,50,48,187,13,10,26,10];function yp(s){return new TextDecoder().decode(s)}let zc,ri,Ou;const Vc={env:{emscripten_notify_memory_growth:function(s){Ou=new Uint8Array(ri.exports.memory.buffer)}}};class Ix{init(){return zc||(zc=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Ep).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Vc)).then(this._init):WebAssembly.instantiate(Buffer.from(Ep,"base64"),Vc).then(this._init),zc)}_init(e){ri=e.instance,Vc.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!ri)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,i=ri.exports.malloc(n);Ou.set(e,i),t=t||Number(ri.exports.ZSTD_findDecompressedSize(i,n));const r=ri.exports.malloc(t),a=ri.exports.ZSTD_decompress(r,t,i,n),o=Ou.slice(r,r+a);return ri.exports.free(i),ri.exports.free(r),o}}const Ep="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",Wc=new WeakMap;let qc,Xc=0;class Pn extends Gn{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Sx,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new li(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new li(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([r,a])=>{const o=Pn.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(Pn.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(Pn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Pn.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),Xc>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Xc++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new li(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Wc.has(e))return Wc.get(e).promise.then(t).catch(n);this._createTexture(e).then(i=>t?t(i):null).catch(n)}_createTextureFrom(e,t){const{faces:n,width:i,height:r,format:a,type:o,error:l,dfdFlags:c}=e;if(o==="error")return Promise.reject(l);let h;if(t.faceCount===6)h=new jy(n,a,mt);else{const u=n[0].mipmaps;h=t.layerCount>1?new Xy(u,i,r,t.layerCount,a,mt):new cr(u,i,r,a,mt)}return h.minFilter=n[0].mipmaps.length===1?We:cn,h.magFilter=We,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=xp(t),h.premultiplyAlpha=!!(1&c),h}async _createTexture(e,t={}){const n=function(a){const o=new Uint8Array(a.buffer,a.byteOffset,zt.length);if(o[0]!==zt[0]||o[1]!==zt[1]||o[2]!==zt[2]||o[3]!==zt[3]||o[4]!==zt[4]||o[5]!==zt[5]||o[6]!==zt[6]||o[7]!==zt[7]||o[8]!==zt[8]||o[9]!==zt[9]||o[10]!==zt[10]||o[11]!==zt[11])throw new Error("Missing KTX 2.0 identifier.");const l=new Cx,c=17*Uint32Array.BYTES_PER_ELEMENT,h=new Gs(a,zt.length,c,!0);l.vkFormat=h._nextUint32(),l.typeSize=h._nextUint32(),l.pixelWidth=h._nextUint32(),l.pixelHeight=h._nextUint32(),l.pixelDepth=h._nextUint32(),l.layerCount=h._nextUint32(),l.faceCount=h._nextUint32();const u=h._nextUint32();l.supercompressionScheme=h._nextUint32();const d=h._nextUint32(),A=h._nextUint32(),p=h._nextUint32(),g=h._nextUint32(),f=h._nextUint64(),m=h._nextUint64(),_=new Gs(a,zt.length+c,3*u*8,!0);for(let ne=0;ne<u;ne++)l.levels.push({levelData:new Uint8Array(a.buffer,a.byteOffset+_._nextUint64(),_._nextUint64()),uncompressedByteLength:_._nextUint64()});const v=new Gs(a,d,A,!0),y={vendorId:v._skip(4)._nextUint16(),descriptorType:v._nextUint16(),versionNumber:v._nextUint16(),descriptorBlockSize:v._nextUint16(),colorModel:v._nextUint8(),colorPrimaries:v._nextUint8(),transferFunction:v._nextUint8(),flags:v._nextUint8(),texelBlockDimension:[v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8()],bytesPlane:[v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8()],samples:[]},E=(y.descriptorBlockSize/4-6)/4;for(let ne=0;ne<E;ne++){const ie={bitOffset:v._nextUint16(),bitLength:v._nextUint8(),channelType:v._nextUint8(),samplePosition:[v._nextUint8(),v._nextUint8(),v._nextUint8(),v._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&ie.channelType?(ie.sampleLower=v._nextInt32(),ie.sampleUpper=v._nextInt32()):(ie.sampleLower=v._nextUint32(),ie.sampleUpper=v._nextUint32()),y.samples[ne]=ie}l.dataFormatDescriptor.length=0,l.dataFormatDescriptor.push(y);const S=new Gs(a,p,g,!0);for(;S._offset<g;){const ne=S._nextUint32(),ie=S._scan(ne),w=yp(ie);if(l.keyValue[w]=S._nextUint8Array(ne-ie.byteLength-1),w.match(/^ktx/i)){const x=yp(l.keyValue[w]);l.keyValue[w]=x.substring(0,x.lastIndexOf("\0"))}S._skip(ne%4?4-ne%4:0)}if(m<=0)return l;const C=new Gs(a,f,m,!0),B=C._nextUint16(),b=C._nextUint16(),R=C._nextUint32(),W=C._nextUint32(),D=C._nextUint32(),G=C._nextUint32(),N=[];for(let ne=0;ne<u;ne++)N.push({imageFlags:C._nextUint32(),rgbSliceByteOffset:C._nextUint32(),rgbSliceByteLength:C._nextUint32(),alphaSliceByteOffset:C._nextUint32(),alphaSliceByteLength:C._nextUint32()});const z=f+C._offset,F=z+R,J=F+W,ee=J+D,oe=new Uint8Array(a.buffer,a.byteOffset+z,R),he=new Uint8Array(a.buffer,a.byteOffset+F,W),Y=new Uint8Array(a.buffer,a.byteOffset+J,D),K=new Uint8Array(a.buffer,a.byteOffset+ee,G);return l.globalData={endpointCount:B,selectorCount:b,imageDescs:N,endpointsData:oe,selectorsData:he,tablesData:Y,extendedData:K},l}(new Uint8Array(e));if(n.vkFormat!==0)return async function(a){const{vkFormat:o}=a;if(jc[o]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let l;a.supercompressionScheme===2&&(qc||(qc=new Promise(async u=>{const d=new Ix;await d.init(),u(d)})),l=await qc);const c=[];for(let u=0;u<a.levels.length;u++){const d=Math.max(1,a.pixelWidth>>u),A=Math.max(1,a.pixelHeight>>u),p=a.pixelDepth?Math.max(1,a.pixelDepth>>u):0,g=a.levels[u];let f,m;if(a.supercompressionScheme===0)f=g.levelData;else{if(a.supercompressionScheme!==2)throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");f=l.decode(g.levelData,g.uncompressedByteLength)}m=Yc[o]===yt?new Float32Array(f.buffer,f.byteOffset,f.byteLength/Float32Array.BYTES_PER_ELEMENT):Yc[o]===xt?new Uint16Array(f.buffer,f.byteOffset,f.byteLength/Uint16Array.BYTES_PER_ELEMENT):f,c.push({data:m,width:d,height:A,depth:p})}let h;if(wx.has(jc[o]))h=a.pixelDepth===0?new Ua(c[0].data,a.pixelWidth,a.pixelHeight):new $g(c[0].data,a.pixelWidth,a.pixelHeight,a.pixelDepth);else{if(a.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");h=new cr(c,a.pixelWidth,a.pixelHeight)}return h.mipmaps=c,h.type=Yc[o],h.format=jc[o],h.colorSpace=xp(a),h.needsUpdate=!0,Promise.resolve(h)}(n);const i=t,r=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:i},[e])).then(a=>this._createTextureFrom(a.data,n));return Wc.set(e,{promise:r}),r}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Xc--,this}}Pn.BasisFormat={ETC1S:0,UASTC_4x4:1},Pn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16},Pn.EngineFormat={RGBAFormat:ct,RGBA_ASTC_4x4_Format:Sa,RGBA_BPTC_Format:ga,RGBA_ETC2_EAC_Format:gl,RGBA_PVRTC_4BPPV1_Format:Al,RGBA_S3TC_DXT5_Format:ma,RGB_ETC1_Format:pl,RGB_ETC2_Format:ml,RGB_PVRTC_4BPPV1_Format:dl,RGBA_S3TC_DXT1_Format:pa},Pn.BasisWorker=function(){let s,e,t;const n=_EngineFormat,i=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(u){const d=u.data;switch(d.type){case"init":s=d.config,A=d.transcoderBinary,e=new Promise(p=>{t={wasmBinary:A,onRuntimeInitialized:p},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")});break;case"transcode":e.then(()=>{try{const{faces:p,buffers:g,width:f,height:m,hasAlpha:_,format:v,dfdFlags:y}=function(E){const S=new t.KTX2File(new Uint8Array(E));function C(){S.close(),S.delete()}if(!S.isValid())throw C(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const B=S.isUASTC()?r.UASTC_4x4:r.ETC1S,b=S.getWidth(),R=S.getHeight(),W=S.getLayers()||1,D=S.getLevels(),G=S.getFaces(),N=S.getHasAlpha(),z=S.getDFDFlags(),{transcoderFormat:F,engineFormat:J}=function(he,Y,K,ne){let ie,w;const x=he===r.ETC1S?o:l;for(let U=0;U<x.length;U++){const O=x[U];if(s[O.if]&&O.basisFormat.includes(he)&&!(ne&&O.transcoderFormat.length<2)&&(!O.needsPowerOfTwo||c(Y)&&c(K)))return ie=O.transcoderFormat[ne?1:0],w=O.engineFormat[ne?1:0],{transcoderFormat:ie,engineFormat:w}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),ie=i.RGBA32,w=n.RGBAFormat,{transcoderFormat:ie,engineFormat:w}}(B,b,R,N);if(!b||!R||!D)throw C(),new Error("THREE.KTX2Loader:	Invalid texture");if(!S.startTranscoding())throw C(),new Error("THREE.KTX2Loader: .startTranscoding failed");const ee=[],oe=[];for(let he=0;he<G;he++){const Y=[];for(let K=0;K<D;K++){const ne=[];let ie,w;for(let U=0;U<W;U++){const O=S.getImageLevelInfo(K,U,he);he!==0||K!==0||U!==0||O.origWidth%4==0&&O.origHeight%4==0||console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),D>1?(ie=O.origWidth,w=O.origHeight):(ie=O.width,w=O.height);const P=new Uint8Array(S.getImageTranscodedSizeInBytes(K,U,0,F));if(!S.transcodeImage(P,K,U,he,F,0,-1,-1))throw C(),new Error("THREE.KTX2Loader: .transcodeImage failed.");ne.push(P)}const x=h(ne);Y.push({data:x,width:ie,height:w}),oe.push(x.buffer)}ee.push({mipmaps:Y,width:b,height:R,format:J})}return C(),{faces:ee,buffers:oe,width:b,height:R,hasAlpha:N,format:J,dfdFlags:z}}(d.buffer);self.postMessage({type:"transcode",id:d.id,faces:p,width:f,height:m,hasAlpha:_,format:v,dfdFlags:y},g)}catch(p){console.error(p),self.postMessage({type:"error",id:d.id,error:p.message})}})}var A});const a=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],o=a.sort(function(u,d){return u.priorityETC1S-d.priorityETC1S}),l=a.sort(function(u,d){return u.priorityUASTC-d.priorityUASTC});function c(u){return u<=2||!(u&u-1)&&u!==0}function h(u){if(u.length===1)return u[0];let d=0;for(let g=0;g<u.length;g++)d+=u[g].byteLength;const A=new Uint8Array(d);let p=0;for(let g=0;g<u.length;g++){const f=u[g];A.set(f,p),p+=f.byteLength}return A}};const wx=new Set([ct,or,Si]),jc={[Yf]:ct,[qf]:ct,[Hf]:ct,[zf]:ct,[jf]:or,[Wf]:or,[kf]:or,[Gf]:or,[Xf]:Si,[Vf]:Si,[Of]:Si,[Qf]:Si,[$f]:Sa,[Jf]:Ca,[Kf]:Ca},Yc={[Yf]:yt,[qf]:xt,[Hf]:mt,[zf]:mt,[jf]:yt,[Wf]:xt,[kf]:mt,[Gf]:mt,[Xf]:yt,[Vf]:xt,[Of]:mt,[Qf]:mt,[$f]:xt,[Jf]:mt,[Kf]:mt};function xp(s){const e=s.dataFormatDescriptor[0];return e.colorPrimaries===1?e.transferFunction===2?st:et:e.colorPrimaries===10?e.transferFunction===2?Ql:Da:(e.colorPrimaries===0||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),ai)}/* @license
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
 */var Sp,Cp;const En=Symbol("retainerCount"),Kn=Symbol("recentlyUsed"),_o=Symbol("evict"),Hs=Symbol("evictionThreshold"),Kc=Symbol("cache");class Mx{constructor(e,t=5){this[Sp]=new Map,this[Cp]=[],this[Kc]=e,this[Hs]=t}set evictionThreshold(e){this[Hs]=e,this[_o]()}get evictionThreshold(){return this[Hs]}get cache(){return this[Kc]}retainerCount(e){return this[En].get(e)||0}reset(){this[En].clear(),this[Kn]=[]}retain(e){this[En].has(e)||this[En].set(e,0),this[En].set(e,this[En].get(e)+1);const t=this[Kn].indexOf(e);t!==-1&&this[Kn].splice(t,1),this[Kn].unshift(e),this[_o]()}release(e){this[En].has(e)&&this[En].set(e,Math.max(this[En].get(e)-1,0)),this[_o]()}[(Sp=En,Cp=Kn,_o)](){if(!(this[Kn].length<this[Hs]))for(let e=this[Kn].length-1;e>=this[Hs];--e){const t=this[Kn][e];this[En].get(t)===0&&(this[Kc].delete(t),this[Kn].splice(e,1))}}}/* @license
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
 */const bx=s=>{const e=new Map;for(const t of s.mappings)for(const n of t.variants)e.set(n,{material:null,gltfMaterialIndex:t.material});return e};class Tx{constructor(e){this.parser=e,this.name="KHR_materials_variants"}afterRoot(e){const t=this.parser,n=t.json;if(n.extensions===void 0||n.extensions[this.name]===void 0)return null;const i=(r=>{const a=[],o=new Set;for(const l of r){let c=l,h=0;for(;o.has(c);)c=l+"."+ ++h;o.add(c),a.push(c)}return a})((n.extensions[this.name].variants||[]).map(r=>r.name));for(const r of e.scenes)r.traverse(a=>{const o=a;if(!o.material)return;const l=t.associations.get(o);if(l==null||l.meshes==null||l.primitives==null)return;const c=n.meshes[l.meshes].primitives[l.primitives].extensions;c&&c[this.name]&&(o.userData.variantMaterials=bx(c[this.name]))});return e.userData.variants=i,Promise.resolve()}}/* @license
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
 */var Zf,Ip;Ke.DEFAULT_ANISOTROPY=4;const Jn=new Map,Jc=new Map;let wp;const Mp=new class extends Gn{constructor(s){super(s),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(s){return this.decoderPath=s,this}setDecoderConfig(s){return this.decoderConfig=s,this}setWorkerLimit(s){return this.workerLimit=s,this}load(s,e,t,n){const i=new li(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(s,r=>{this.parse(r,e,n)},t,n)}parse(s,e,t=()=>{}){this.decodeDracoFile(s,e,null,null,st,t).catch(t)}decodeDracoFile(s,e,t,n,i=et,r=()=>{}){const a={attributeIDs:t||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!t,vertexColorSpace:i};return this.decodeGeometry(s,a).then(e).catch(r)}decodeGeometry(s,e){const t=JSON.stringify(e);if(kc.has(s)){const o=kc.get(s);if(o.key===t)return o.promise;if(s.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const i=this.workerNextTaskID++,r=s.byteLength,a=this._getWorker(i,r).then(o=>(n=o,new Promise((l,c)=>{n._callbacks[i]={resolve:l,reject:c},n.postMessage({type:"decode",id:i,taskConfig:e,buffer:s},[s])}))).then(o=>this._createGeometry(o.geometry));return a.catch(()=>!0).then(()=>{n&&i&&this._releaseTask(n,i)}),kc.set(s,{key:t,promise:a}),a}_createGeometry(s){const e=new $t;s.index&&e.setIndex(new ht(s.index.array,1));for(let t=0;t<s.attributes.length;t++){const n=s.attributes[t],i=n.name,r=n.array,a=n.itemSize,o=new ht(r,a);i==="color"&&(this._assignVertexColorSpace(o,n.vertexColorSpace),o.normalized=!(r instanceof Float32Array)),e.setAttribute(i,o)}return e}_assignVertexColorSpace(s,e){if(e!==st)return;const t=new fe;for(let n=0,i=s.count;n<i;n++)t.fromBufferAttribute(s,n),He.toWorkingColorSpace(t,st),s.setXYZ(n,t.r,t.g,t.b)}_loadLibrary(s,e){const t=new li(this.manager);return t.setPath(this.decoderPath),t.setResponseType(e),t.setWithCredentials(this.withCredentials),new Promise((n,i)=>{t.load(s,n,void 0,i)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const s=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return s?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(t=>{const n=t[0];s||(this.decoderConfig.wasmBinary=t[1]);const i=OE.toString(),r=["/* draco decoder */",n,"","/* worker */",i.substring(i.indexOf("{")+1,i.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(s,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(i){const r=i.data;switch(r.type){case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,i){return n._taskLoad>i._taskLoad?-1:1});const t=this.workerPool[this.workerPool.length-1];return t._taskCosts[s]=e,t._taskLoad+=e,t})}_releaseTask(s,e){s._taskLoad-=s._taskCosts[e],delete s._callbacks[e],delete s._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(s=>s._taskLoad))}dispose(){for(let s=0;s<this.workerPool.length;++s)this.workerPool[s].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};let bp;const $c=new Pn;let Zc,eh;const Ji=Symbol("loader"),Ei=Symbol("evictionPolicy"),Tp=Symbol("GLTFInstance");class qt extends Mn{constructor(e){super(),this[Ip]=new kE().register(t=>new Tx(t)),this[Tp]=e,this[Ji].setDRACOLoader(Mp),this[Ji].setKTX2Loader($c)}static setDRACODecoderLocation(e){wp=e,Mp.setDecoderPath(e)}static getDRACODecoderLocation(){return wp}static setKTX2TranscoderLocation(e){bp=e,$c.setTranscoderPath(e)}static getKTX2TranscoderLocation(){return bp}static setMeshoptDecoderLocation(e){var t;Zc!==e&&(Zc=e,eh=(t=e,new Promise((n,i)=>{const r=document.createElement("script");document.body.appendChild(r),r.onload=n,r.onerror=i,r.async=!0,r.src=t})).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return Zc}static initializeKTX2Loader(e){$c.detectSupport(e)}static get cache(){return Jn}static clearCache(){Jn.forEach((e,t)=>{this.delete(t)}),this[Ei].reset()}static has(e){return Jn.has(e)}static async delete(e){if(!this.has(e))return;const t=Jn.get(e);Jc.delete(e),Jn.delete(e),(await t).dispose()}static hasFinishedLoading(e){return!!Jc.get(e)}get[(Zf=Ei,Ip=Ji,Ei)](){return this.constructor[Ei]}async preload(e,t,n=()=>{}){if(this[Ji].setWithCredentials(t.withCredentials),this.dispatchEvent({type:"preload",element:t,src:e}),!Jn.has(e)){eh!=null&&this[Ji].setMeshoptDecoder(await eh);const i=((o,l,c=()=>{})=>{const h=u=>{const d=u.loaded/u.total;c(Math.max(0,Math.min(1,isFinite(d)?d:1)))};return new Promise((u,d)=>{l.load(o,u,h,d)})})(e,this[Ji],o=>{n(.8*o)}),r=this[Tp],a=i.then(o=>r.prepare(o)).then(o=>(n(.9),new r(o))).catch(o=>(console.error(o),new r));Jn.set(e,a)}await Jn.get(e),Jc.set(e,!0),n&&n(1)}async load(e,t,n=()=>{}){await this.preload(e,t,n);const i=await Jn.get(e),r=await i.clone();return this[Ei].retain(e),r.dispose=()=>{this[Ei].release(e)},r}}qt[Zf]=new Mx(qt);class Bx extends tt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Te(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const br=new T,Bp=new Se,Rp=new Se,Dp=new T,Lp=new T;class Rx{constructor(e={}){const t=this;let n,i,r,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");function c(d){d.isCSS2DObject&&(d.element.style.display="none");for(let A=0,p=d.children.length;A<p;A++)c(d.children[A])}function h(d,A,p){if(d.visible!==!1){if(d.isCSS2DObject){br.setFromMatrixPosition(d.matrixWorld),br.applyMatrix4(Rp);const g=br.z>=-1&&br.z<=1&&d.layers.test(p.layers)===!0,f=d.element;f.style.display=g===!0?"":"none",g===!0&&(d.onBeforeRender(t,A,p),f.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(br.x*r+r)+"px,"+(-br.y*a+a)+"px)",f.parentNode!==l&&l.appendChild(f),d.onAfterRender(t,A,p));const m={distanceToCameraSquared:u(p,d)};o.objects.set(d,m)}for(let g=0,f=d.children.length;g<f;g++)h(d.children[g],A,p)}else c(d)}function u(d,A){return Dp.setFromMatrixPosition(d.matrixWorld),Lp.setFromMatrixPosition(A.matrixWorld),Dp.distanceToSquared(Lp)}l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(d,A){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Bp.copy(A.matrixWorldInverse),Rp.multiplyMatrices(A.projectionMatrix,Bp),h(d,d,A),function(p){const g=function(m){const _=[];return m.traverseVisible(function(v){v.isCSS2DObject&&_.push(v)}),_}(p).sort(function(m,_){return m.renderOrder!==_.renderOrder?_.renderOrder-m.renderOrder:o.objects.get(m).distanceToCameraSquared-o.objects.get(_).distanceToCameraSquared}),f=g.length;for(let m=0,_=g.length;m<_;m++)g[m].element.style.zIndex=f-m}(d)},this.setSize=function(d,A){n=d,i=A,r=n/2,a=i/2,l.style.width=d+"px",l.style.height=A+"px"}}}function yo(s,e,t){let n=t;const i=new T;return s.updateWorldMatrix(!0,!0),s.traverseVisible(r=>{const{geometry:a}=r;if(a!==void 0){const{position:o}=a.attributes;if(o!==void 0)for(let l=0,c=o.count;l<c;l++)r.isMesh?r.getVertexPosition(l,i):i.fromBufferAttribute(o,l),r.isSkinnedMesh||i.applyMatrix4(r.matrixWorld),n=e(n,i)}}),n}let zs,th,Tr,Eo;function nl(s,e=1/0,t=null){th||(th=new On(2,2,1,1)),Tr||(Tr=new Jt({uniforms:{blitTexture:new md(s)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = sRGBTransferOETF( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),Tr.uniforms.blitTexture.value=s,Tr.defines.IS_SRGB=s.colorSpace==st,Tr.needsUpdate=!0,Eo||(Eo=new Je(th,Tr),Eo.frustumCulled=!1);const n=new Tt,i=new Ti;i.add(Eo),t===null&&(t=zs=new cd({antialias:!1}));const r=Math.min(s.image.width,e),a=Math.min(s.image.height,e);t.setSize(r,a),t.clear(),t.render(i,n);const o=document.createElement("canvas"),l=o.getContext("2d");o.width=r,o.height=a,l.drawImage(t.domElement,0,0,r,a);const c=new gf(o);return c.minFilter=s.minFilter,c.magFilter=s.magFilter,c.wrapS=s.wrapS,c.wrapT=s.wrapT,c.colorSpace=s.colorSpace,c.name=s.name,zs&&(zs.forceContextLoss(),zs.dispose(),zs=null),c}const Up={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class vd{constructor(){this.pluginCallbacks=[],this.register(function(e){return new jx(e)}),this.register(function(e){return new Yx(e)}),this.register(function(e){return new Zx(e)}),this.register(function(e){return new eS(e)}),this.register(function(e){return new tS(e)}),this.register(function(e){return new nS(e)}),this.register(function(e){return new Kx(e)}),this.register(function(e){return new Jx(e)}),this.register(function(e){return new $x(e)}),this.register(function(e){return new iS(e)}),this.register(function(e){return new rS(e)}),this.register(function(e){return new sS(e)}),this.register(function(e){return new aS(e)}),this.register(function(e){return new oS(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){const r=new Xx,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.write(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const Dx=0,Pp=1,Lx=2,Ux=3,Px=4,nh=5120,ih=5121,rh=5122,sh=5123,Np=5124,Fp=5125,Qp=5126,ah=34962,Nx=34963,Fx=9728,Qx=9729,Ox=9984,kx=9985,Gx=9986,Hx=9987,zx=33071,Vx=33648,Wx=10497,oh="KHR_mesh_quantization",nn={};nn[1003]=Fx,nn[1004]=Ox,nn[1005]=Gx,nn[1006]=Qx,nn[1007]=kx,nn[1008]=Hx,nn[1001]=zx,nn[1e3]=Wx,nn[1002]=Vx;const Op={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},qx=new fe;function Vs(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function e0(s){return 4*Math.ceil(s/4)}function lh(s,e=0){const t=e0(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function kp(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Gp(s,e){if(s.toBlob!==void 0)return new Promise(n=>s.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class Xx{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+hl}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const i=this,r=i.buffers,a=i.json;n=i.options;const o=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const A=lh(d.result),p=new DataView(new ArrayBuffer(8));p.setUint32(0,A.byteLength,!0),p.setUint32(4,5130562,!0);const g=lh((f=JSON.stringify(a),new TextEncoder().encode(f).buffer),32);var f;const m=new DataView(new ArrayBuffer(8));m.setUint32(0,g.byteLength,!0),m.setUint32(4,1313821514,!0);const _=new ArrayBuffer(12),v=new DataView(_);v.setUint32(0,1179937895,!0),v.setUint32(4,2,!0);const y=12+m.byteLength+g.byteLength+p.byteLength+A.byteLength;v.setUint32(8,y,!0);const E=new Blob([_,m,g,p,A],{type:"application/octet-stream"}),S=new FileReader;S.readAsArrayBuffer(E),S.onloadend=function(){t(S.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const A=d.result;a.buffers[0].uri=A,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const n=new Map;n.set(!0,this.uid++),n.set(!1,this.uid++),this.uids.set(e,n)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const t=new T;for(let n=0,i=e.count;n<i;n++)if(Math.abs(t.fromBufferAttribute(e,n).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new T;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};t.offset.x===0&&t.offset.y===0||(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),t.repeat.x===1&&t.repeat.y===1||(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(d){return d.colorSpace===st?function(A){return A<.04045?.0773993808*A:Math.pow(.9478672986*A+.0521327014,2.4)}:function(A){return A}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof cr&&(e=nl(e)),t instanceof cr&&(t=nl(t));const i=e?e.image:null,r=t?t.image:null,a=Math.max(i?i.width:0,r?r.width:0),o=Math.max(i?i.height:0,r?r.height:0),l=kp();l.width=a,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const h=c.getImageData(0,0,a,o);if(i){c.drawImage(i,0,0,a,o);const d=n(e),A=c.getImageData(0,0,a,o).data;for(let p=2;p<A.length;p+=4)h.data[p]=256*d(A[p]/256)}if(r){c.drawImage(r,0,0,a,o);const d=n(t),A=c.getImageData(0,0,a,o).data;for(let p=1;p<A.length;p+=4)h.data[p]=256*d(A[p]/256)}c.putImageData(h,0,0);const u=(e||t).clone();return u.source=new rd(l),u.colorSpace=ai,u.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),u}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const a=this.json;let o;switch(a.bufferViews||(a.bufferViews=[]),t){case nh:case ih:o=1;break;case rh:case sh:o=2;break;default:o=4}let l=e.itemSize*o;r===ah&&(l=4*Math.ceil(l/4));const c=e0(i*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let A=n;A<n+i;A++){for(let p=0;p<e.itemSize;p++){let g;e.itemSize>4?g=e.array[A*e.itemSize+p]:(p===0?g=e.getX(A):p===1?g=e.getY(A):p===2?g=e.getZ(A):p===3&&(g=e.getW(A)),e.normalized===!0&&(g=jo.normalize(g,e.array))),t===Qp?h.setFloat32(u,g,!0):t===Np?h.setInt32(u,g,!0):t===Fp?h.setUint32(u,g,!0):t===rh?h.setInt16(u,g,!0):t===sh?h.setUint16(u,g,!0):t===nh?h.setInt8(u,g):t===ih&&h.setUint8(u,g),u+=o}u%l!=0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===ah&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const a=lh(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,i){const r=this.json;let a;if(e.array.constructor===Float32Array)a=Qp;else if(e.array.constructor===Int32Array)a=Np;else if(e.array.constructor===Uint32Array)a=Fp;else if(e.array.constructor===Int16Array)a=rh;else if(e.array.constructor===Uint16Array)a=sh;else if(e.array.constructor===Int8Array)a=nh;else{if(e.array.constructor!==Uint8Array)throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);a=ih}if(n===void 0&&(n=0),i!==void 0&&i!==1/0||(i=e.count),i===0)return null;const o=function(u,d,A){const p={min:new Array(u.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(u.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let g=d;g<d+A;g++)for(let f=0;f<u.itemSize;f++){let m;u.itemSize>4?m=u.array[g*u.itemSize+f]:(f===0?m=u.getX(g):f===1?m=u.getY(g):f===2?m=u.getZ(g):f===3&&(m=u.getW(g)),u.normalized===!0&&(m=jo.normalize(m,u.array))),p.min[f]=Math.min(p.min[f],m),p.max[f]=Math.max(p.max[f],m)}return p}(e,n,i);let l;t!==void 0&&(l=e===t.index?Nx:ah);const c=this.processBufferView(e,a,n,i,l),h={bufferView:c.id,byteOffset:c.byteOffset,componentType:a,count:i,max:o.max,min:o.min,type:{1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"}[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});const h=a.images.get(e),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);const d={mimeType:i},A=kp();A.width=Math.min(e.width,l.maxTextureSize),A.height=Math.min(e.height,l.maxTextureSize);const p=A.getContext("2d",{willReadFrequently:!0});if(n===!0&&(p.translate(0,A.height),p.scale(1,-1)),e.data!==void 0){t!==ct&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const f=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<f.length;m+=4)f[m+0]=e.data[m+0],f[m+1]=e.data[m+1],f[m+2]=e.data[m+2],f[m+3]=e.data[m+3];p.putImageData(new ImageData(f,e.width,e.height),0,0)}else{if(!(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas))throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");p.drawImage(e,0,0,A.width,A.height)}l.binary===!0?c.push(Gp(A,i).then(f=>r.processBufferViewImage(f)).then(f=>{d.bufferView=f})):A.toDataURL!==void 0?d.uri=A.toDataURL(i):c.push(Gp(A,i).then(f=>new FileReader().readAsDataURL(f)).then(f=>{d.uri=f}));const g=o.images.push(d)-1;return h[u]=g,g}throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:nn[e.magFilter],minFilter:nn[e.minFilter],wrapS:nn[e.wrapS],wrapT:nn[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const t=this.options,n=this.cache,i=this.json;if(n.textures.has(e))return n.textures.get(e);i.textures||(i.textures=[]),e instanceof cr&&(e=nl(e,t.maxTextureSize));let r=e.userData.mimeType;r==="image/webp"&&(r="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,r)};e.name&&(a.name=e.name),this._invokeAll(function(l){l.writeTexture&&l.writeTexture(e,a)});const o=i.textures.push(a)-1;return n.textures.set(e,o),o}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(Vs(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(o),channel:o.channel};this.applyTextureTransform(l,o),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const l={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),i.emissiveTexture=l}}if(e.normalMap){const o={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){const o={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===2&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,E=e.material.length;y<E;y++)i.push(e.material[y].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const a=e.geometry;let o;o=e.isLineSegments?Pp:e.isLineLoop?Lx:e.isLine?Ux:e.isPoints?Dx:e.material.wireframe?Pp:Px;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},A=a.getAttribute("normal");A===void 0||this.isNormalizedNormalAttribute(A)||(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(A)));let p=null;for(let y in a.attributes){if(y.slice(0,5)==="morph")continue;const E=a.attributes[y];if(y=d[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),t.attributes.has(this.getUID(E))){c[y]=t.attributes.get(this.getUID(E));continue}p=null;const S=E.array;y!=="JOINTS_0"||S instanceof Uint16Array||S instanceof Uint8Array||(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=new ht(new Uint16Array(S),E.itemSize,E.normalized));const C=this.processAccessor(p||E,a);C!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,E),c[y]=C,t.attributes.set(this.getUID(E),C))}if(A!==void 0&&a.setAttribute("normal",A),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const y=[],E=[],S={};if(e.morphTargetDictionary!==void 0)for(const C in e.morphTargetDictionary)S[e.morphTargetDictionary[C]]=C;for(let C=0;C<e.morphTargetInfluences.length;++C){const B={};let b=!1;for(const R in a.morphAttributes){if(R!=="position"&&R!=="normal"){b||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),b=!0);continue}const W=a.morphAttributes[R][C],D=R.toUpperCase(),G=a.attributes[R];if(t.attributes.has(this.getUID(W,!0))){B[D]=t.attributes.get(this.getUID(W,!0));continue}const N=W.clone();if(!a.morphTargetsRelative)for(let z=0,F=W.count;z<F;z++)for(let J=0;J<W.itemSize;J++)J===0&&N.setX(z,W.getX(z)-G.getX(z)),J===1&&N.setY(z,W.getY(z)-G.getY(z)),J===2&&N.setZ(z,W.getZ(z)-G.getZ(z)),J===3&&N.setW(z,W.getW(z)-G.getW(z));B[D]=this.processAccessor(N,a),t.attributes.set(this.getUID(G,!0),B[D])}u.push(B),y.push(e.morphTargetInfluences[C]),e.morphTargetDictionary!==void 0&&E.push(S[C])}l.weights=y,E.length>0&&(l.extras={},l.extras.targetNames=E)}const g=Array.isArray(e.material);if(g&&a.groups.length===0)return null;let f=!1;if(g&&a.index===null){const y=[];for(let E=0,S=a.attributes.position.count;E<S;E++)y[E]=E;a.setIndex(y),f=!0}const m=g?e.material:[e.material],_=g?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,E=_.length;y<E;y++){const S={mode:o,attributes:c};if(this.serializeUserData(a,S),u.length>0&&(S.targets=u),a.index!==null){let B=this.getUID(a.index);_[y].start===void 0&&_[y].count===void 0||(B+=":"+_[y].start+":"+_[y].count),t.attributes.has(B)?S.indices=t.attributes.get(B):(S.indices=this.processAccessor(a.index,a,_[y].start,_[y].count),t.attributes.set(B,S.indices)),S.indices===null&&delete S.indices}const C=this.processMaterial(m[_[y].materialIndex]);C!==null&&(S.material=C),h.push(S)}f===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(y){y.writeMesh&&y.writeMesh(e,l)});const v=n.meshes.push(l)-1;return t.meshes.set(r,v),v}detectMeshQuantization(e,t){if(this.extensionsUsed[oh])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];Up[i]&&Up[i].includes(n)&&(this.extensionsUsed[oh]=!0,this.extensionsRequired[oh]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:2*e.right,ymag:2*e.top,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:jo.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]);const r=(e=vd.Utils.mergeMorphTargetTracks(e.clone(),t)).tracks,a=[],o=[];for(let l=0;l<r.length;++l){const c=r[l],h=ke.parseTrackName(c.name);let u=ke.findNode(t,h.nodeName);const d=Op[h.propertyName];if(h.objectName==="bones"&&(u=u.isSkinnedMesh===!0?u.skeleton.getBoneByName(h.objectIndex):void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const A=1;let p,g=c.values.length/c.times.length;d===Op.morphTargetInfluences&&(g/=u.morphTargetInfluences.length),c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",g/=3):p=c.getInterpolation()===ds?"STEP":"LINEAR",o.push({input:this.processAccessor(new ht(c.times,A)),output:this.processAccessor(new ht(c.values,g)),interpolation:p}),a.push({sampler:o.length-1,target:{node:i.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(16*r.bones.length),c=new Se;for(let h=0;h<r.bones.length;++h)o.push(n.get(r.bones[h])),c.copy(r.boneInverses[h]),c.multiply(e.bindMatrix).toArray(l,16*h);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new ht(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Vs(o,[0,0,0,1])||(r.rotation=o),Vs(l,[0,0,0])||(r.translation=l),Vs(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),Vs(e.matrix.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const o=this.processMesh(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const u=this.processNode(h);u!==null&&o.push(u)}}o.length>0&&(r.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,r)});const a=t.nodes.push(r)-1;return i.set(e,a),a}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}processObjects(e){const t=new Ti;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof Ti?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class jx{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight)return void console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);const n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),!e.target||e.target.parent===e&&e.target.position.x===0&&e.target.position.y===0&&e.target.position.z===-1||console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class Yx{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const n=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},n[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class Kx{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const a={index:n.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const a={index:n.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){const a={index:n.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Jx{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const n=this.writer.extensionsUsed,i={};i.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=i,n[this.name]=!0}}class $x{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const a={index:n.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const a={index:n.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Zx{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const a={index:n.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class eS{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const a={index:n.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class tS{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const n=this.writer.extensionsUsed,i={};i.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=i,n[this.name]=!0}}class nS{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(qx)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const a={index:n.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){const a={index:n.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class iS{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const a={index:n.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){const a={index:n.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class rS{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){const a={index:n.processTexture(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class sS{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const n=this.writer.extensionsUsed,i={};i.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=i,n[this.name]=!0}}class aS{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){const a={index:n.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class oS{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,r=new Float32Array(3*i.count),a=new Float32Array(4*i.count),o=new Float32Array(3*i.count),l=new Se,c=new T,h=new Yt,u=new T;for(let A=0;A<i.count;A++)i.getMatrixAt(A,l),l.decompose(c,h,u),c.toArray(r,3*A),h.toArray(a,4*A),u.toArray(o,3*A);const d={TRANSLATION:n.processAccessor(new ht(r,3)),ROTATION:n.processAccessor(new ht(a,4)),SCALE:n.processAccessor(new ht(o,3))};i.instanceColor&&(d._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}vd.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),a=s.createInterpolant(new s.ValueBufferType(n));let o;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(a.evaluate(e),0),r.set(s.values,n),o=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(e),s.values.length),o=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return s.times=i,s.values=r,o},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r];const o=ke.parseTrackName(a.name),l=ke.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(As)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const A=new u.ValueBufferType(c*u.times.length);for(let p=0;p<u.times.length;p++)A[p*c+h]=u.values[p];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=A,n[l.uuid]=u,t.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let A=0;A<u.times.length;A++)u.values[A*c+h]=d.evaluate(u.times[A]);for(let A=0;A<a.times.length;A++){const p=this.insertKeyframe(u,a.times[A]);u.values[p*c+h]=a.values[A]}}return s.tracks=t,s}};/* @license
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
 */const Hp=s=>s.material!==void 0&&s.userData&&s.userData.variantMaterials&&!!Array.from(s.userData.variantMaterials.values()).filter(e=>il(e.material)),il=s=>s&&s.isMaterial&&!Array.isArray(s);class lS{constructor(e){this.writer=e,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(e){const t=new Set;for(const n of e)n.traverse(i=>{if(!Hp(i))return;const r=i.userData.variantMaterials,a=i.userData.variantData;for(const[o,l]of a){const c=r.get(l.index);c&&il(c.material)&&t.add(o)}});t.forEach(n=>this.variantNames.push(n))}writeMesh(e,t){if(!Hp(e))return;const n=e.userData,i=n.variantMaterials,r=n.variantData,a=new Map,o=new Map,l=Array.from(r.values()).sort((u,d)=>u.index-d.index);for(const[u,d]of l.entries())o.set(d.index,u);for(const u of r.values()){const d=i.get(u.index);if(!d||!il(d.material))continue;const A=this.writer.processMaterial(d.material);a.has(A)||a.set(A,{material:A,variants:[]}),a.get(A).variants.push(o.get(u.index))}const c=Array.from(a.values()).map(u=>u.variants.sort((d,A)=>d-A)&&u).sort((u,d)=>u.material-d.material);if(c.length===0)return;const h=il(n.originalMaterial)?this.writer.processMaterial(n.originalMaterial):-1;for(const u of t.primitives)h>=0&&(u.material=h),u.extensions=u.extensions||{},u.extensions[this.name]={mappings:c}}afterParse(){if(this.variantNames.length===0)return;const e=this.writer.json;e.extensions=e.extensions||{};const t=this.variantNames.map(n=>({name:n}));e.extensions[this.name]={variants:t},this.writer.extensionsUsed[this.name]=!0}}class cS{constructor(e,t,n,i,r){this.xrLight=e,this.renderer=t,this.lightProbe=n,this.xrWebGLBinding=null,this.estimationStartCallback=r,this.frameCallback=this.onXRFrame.bind(this);const a=t.xr.getSession();if(i&&"XRWebGLBinding"in window){const o=new ad(16);e.environment=o.texture;const l=t.getContext();switch(a.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float")}this.xrWebGLBinding=new XRWebGLBinding(a,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}a.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const t=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);t&&(e.__webglTexture=t,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,t){if(!this.xrLight)return;t.session.requestAnimationFrame(this.frameCallback);const n=t.getLightEstimate(this.lightProbe);if(n){this.xrLight.lightProbe.sh.fromArray(n.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const i=Math.max(1,Math.max(n.primaryLightIntensity.x,Math.max(n.primaryLightIntensity.y,n.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(n.primaryLightIntensity.x/i,n.primaryLightIntensity.y/i,n.primaryLightIntensity.z/i),this.xrLight.directionalLight.intensity=i,this.xrLight.directionalLight.position.copy(n.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class hS extends Ci{constructor(e,t=!0){super(),this.lightProbe=new cE,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new Sf,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let n=null,i=!1;e.xr.addEventListener("sessionstart",()=>{const r=e.xr.getSession();"requestLightProbe"in r&&r.requestLightProbe({reflectionFormat:r.preferredReflectionFormat}).then(a=>{n=new cS(this,e,a,t,()=>{i=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{n&&(n.dispose(),n=null),i&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{n&&(n.dispose(),n=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}/* @license
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
 */class Xt{constructor(e=50){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(e)}setDecayTime(e){this.naturalFrequency=1/Math.max(.001,e)}update(e,t,n,i){const r=2e-4*this.naturalFrequency;if(e==null||i===0||e===t&&this.velocity===0)return t;if(n<0)return e;const a=e-t,o=this.velocity+this.naturalFrequency*a,l=a+n*o,c=Math.exp(-this.naturalFrequency*n),h=(o-this.naturalFrequency*l)*c,u=-this.naturalFrequency*(h+o*c);return Math.abs(h)<r*Math.abs(i)&&u*a>=0?(this.velocity=0,t):(this.velocity=h,t+l*c)}}/* @license
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
 */const Jr=.2,uS=Math.PI/24,zp=new Te,xo=(s,e,t)=>{let n=e>0?t>0?0:-Math.PI/2:t>0?Math.PI/2:Math.PI;for(let i=0;i<=12;++i)s.push(e+.17*Math.cos(n),t+.17*Math.sin(n),0,e+Jr*Math.cos(n),t+Jr*Math.sin(n),0),n+=uS};class Vp extends Je{constructor(e,t){const n=new $t,i=[],r=[],{size:a,boundingBox:o}=e,l=a.x/2,c=(t==="back"?a.y:a.z)/2;xo(r,l,c),xo(r,-l,c),xo(r,-l,-c),xo(r,l,-c);const h=r.length/3;for(let A=0;A<h-2;A+=2)i.push(A,A+1,A+3,A,A+3,A+2);const u=h-2;i.push(u,u+1,1,u,1,0),n.setAttribute("position",new sn(r,3)),n.setIndex(i),super(n),this.side=t;const d=this.material;switch(d.side=2,d.transparent=!0,d.opacity=0,this.goalOpacity=0,this.opacityDamper=new Xt,this.hitPlane=new Je(new On(2*(l+Jr),2*(c+Jr))),this.hitPlane.visible=!1,this.hitPlane.material.side=2,this.add(this.hitPlane),this.hitBox=new Je(new ci(a.x+.4,a.y+Jr,a.z+.4)),this.hitBox.visible=!1,this.hitBox.material.side=2,this.add(this.hitBox),o.getCenter(this.position),t){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=o.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=o.min.z,this.position.z=this.shadowHeight}e.target.add(this),this.hitBox.position.y=(a.y+Jr)/2+o.min.y,e.target.add(this.hitBox),this.offsetHeight=0}getHit(e,t,n){zp.set(t,-n),this.hitPlane.visible=!0;const i=e.positionAndNormalFromPoint(zp,this.hitPlane);return this.hitPlane.visible=!1,i==null?null:i.position}getExpandedHit(e,t,n){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const i=this.getHit(e,t,n);return this.hitPlane.scale.set(1,1,1),i}controllerIntersection(e,t){this.hitBox.visible=!0;const n=e.hitFromController(t,this.hitBox);return this.hitBox.visible=!1,n}set offsetHeight(e){e-=.001,this.side==="back"?this.position.z=this.shadowHeight+e:this.position.y=this.shadowHeight+e}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(e){this.goalOpacity=e?.75:0}updateOpacity(e){const t=this.material;t.opacity=this.opacityDamper.update(t.opacity,this.goalOpacity,e,1),this.visible=t.opacity>0}dispose(){const{geometry:e,material:t}=this.hitPlane;e.dispose(),t.dispose(),this.hitBox.geometry.dispose(),this.hitBox.material.dispose(),this.geometry.dispose(),this.material.dispose(),this.hitBox.removeFromParent(),this.removeFromParent()}}/* @license
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
 */const kt=(s,e)=>({type:"number",number:s,unit:e}),oi=(()=>{const s={};return e=>{const t=e;if(t in s)return s[t];const n=[];let i=0;for(;e;){if(++i>1e3){e="";break}const r=t0(e),a=r.nodes[0];if(a==null||a.terms.length===0)break;n.push(a),e=r.remainingInput}return s[t]=n}})(),t0=(()=>{const s=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,t=/^[\),]/;return n=>{const i=[];for(;n.length&&(n=n.trim(),!t.test(n));)if(n[0]==="("){const{nodes:r,remainingInput:a}=Wp(n);n=a,i.push({type:"function",name:{type:"ident",value:"calc"},arguments:r})}else if(s.test(n)){const r=dS(n),a=r.nodes[0];if((n=r.remainingInput)[0]==="("){const{nodes:o,remainingInput:l}=Wp(n);i.push({type:"function",name:a,arguments:o}),n=l}else i.push(a)}else if(e.test(n))i.push({type:"operator",value:n[0]}),n=n.slice(1);else{const{nodes:r,remainingInput:a}=n[0]==="#"?pS(n):AS(n);if(r.length===0)break;i.push(r[0]),n=a}return{nodes:[{type:"expression",terms:i}],remainingInput:n}}})(),dS=(()=>{const s=/[^a-z0-9_\-\u0240-\uffff]/i;return e=>{const t=e.match(s);return{nodes:[{type:"ident",value:t==null?e:e.substr(0,t.index)}],remainingInput:t==null?"":e.substr(t.index)}}})(),AS=(()=>{const s=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,t=/^(m|mm|cm|rad|deg|[%])$/;return n=>{const i=n.match(s),r=i==null?"0":i[0],a=(n=r==null?n:n.slice(r.length)).match(e);let o=a!=null&&a[0]!==""?a[0]:null;const l=a==null?n:n.slice(o.length);return o==null||t.test(o)||(o=null),{nodes:[{type:"number",number:parseFloat(r)||0,unit:o}],remainingInput:l}}})(),pS=(()=>{const s=/^[a-f0-9]*/i;return e=>{const t=(e=e.slice(1).trim()).match(s);return{nodes:t==null?[]:[{type:"hex",value:t[0]}],remainingInput:t==null?e:e.slice(t[0].length)}}})(),Wp=s=>{const e=[];for(s=s.slice(1).trim();s.length;){const t=t0(s);if(e.push(t.nodes[0]),(s=t.remainingInput.trim())[0]===",")s=s.slice(1).trim();else if(s[0]===")"){s=s.slice(1);break}}return{nodes:e,remainingInput:s}},qp=Symbol("visitedTypes");class mS{constructor(e){this[qp]=e}walk(e,t){const n=e.slice();for(;n.length;){const i=n.shift();switch(this[qp].indexOf(i.type)>-1&&t(i),i.type){case"expression":n.unshift(...i.terms);break;case"function":n.unshift(i.name,...i.arguments)}}}}const Bi=Object.freeze({type:"number",number:0,unit:null}),Hl=(s,e=0)=>{let{number:t,unit:n}=s;if(isFinite(t)){if(s.unit==="rad"||s.unit==null)return s}else t=e,n="rad";return{type:"number",number:(n==="deg"&&t!=null?t:0)*Math.PI/180,unit:"rad"}},Xp=(s,e=0)=>{let t,{number:n,unit:i}=s;if(isFinite(n)){if(s.unit==="m")return s}else n=e,i="m";switch(i){default:t=1;break;case"cm":t=.01;break;case"mm":t=.001}return{type:"number",number:t*n,unit:"m"}},Nn=(()=>{const s=t=>t,e={rad:s,deg:Hl,m:s,mm:Xp,cm:Xp};return(t,n=Bi)=>{isFinite(t.number)||(t.number=n.number,t.unit=n.unit);const{unit:i}=t;if(i==null)return t;const r=e[i];return r==null?n:r(t)}})();/* @license
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
 */var n0,jp,Yp;const Is=Symbol("evaluate"),rl=Symbol("lastValue");class lt{constructor(){this[n0]=null}static evaluatableFor(e,t=Bi){if(e instanceof lt)return e;if(e.type==="number")return e.unit==="%"?new gS(e,t):e;switch(e.name.value){case"calc":return new _S(e,t);case"env":return new fS(e)}return Bi}static evaluate(e){return e instanceof lt?e.evaluate():e}static isConstant(e){return!(e instanceof lt)||e.isConstant}static applyIntrinsics(e,t){const{basis:n,keywords:i}=t,{auto:r}=i;return n.map((a,o)=>{const l=r[o]==null?a:r[o];let c=e[o]?e[o]:l;if(c.type==="ident"){const h=c.value;h in i&&(c=i[h][o])}return c!=null&&c.type!=="ident"||(c=l),c.unit==="%"?kt(c.number/100*a.number,a.unit):(c=Nn(c,a),c.unit!==a.unit?a:c)})}get isConstant(){return!1}evaluate(){return this.isConstant&&this[rl]!=null||(this[rl]=this[Is]()),this[rl]}}n0=rl;const Kp=Symbol("percentage"),ch=Symbol("basis");class gS extends lt{constructor(e,t){super(),this[Kp]=e,this[ch]=t}get isConstant(){return!0}[Is](){return kt(this[Kp].number/100*this[ch].number,this[ch].unit)}}const So=Symbol("identNode");class fS extends lt{constructor(e){super(),this[jp]=null;const t=e.arguments.length?e.arguments[0].terms[0]:null;t!=null&&t.type==="ident"&&(this[So]=t)}get isConstant(){return!1}[(jp=So,Is)](){return this[So]!=null&&this[So].value==="window-scroll-y"?{type:"number",number:window.pageYOffset/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight)||0,unit:null}:Bi}}const vS=/[\*\/]/,Br=Symbol("evaluator");class _S extends lt{constructor(e,t=Bi){if(super(),this[Yp]=null,e.arguments.length!==1)return;const n=e.arguments[0].terms.slice(),i=[];for(;n.length;){const r=n.shift();if(i.length>0){const a=i[i.length-1];if(a.type==="operator"&&vS.test(a.value)){const o=i.pop(),l=i.pop();if(l==null)return;i.push(new $p(o,lt.evaluatableFor(l,t),lt.evaluatableFor(r,t)));continue}}i.push(r.type==="operator"?r:lt.evaluatableFor(r,t))}for(;i.length>2;){const[r,a,o]=i.splice(0,3);if(a.type!=="operator")return;i.unshift(new $p(a,lt.evaluatableFor(r,t),lt.evaluatableFor(o,t)))}i.length===1&&(this[Br]=i[0])}get isConstant(){return this[Br]==null||lt.isConstant(this[Br])}[(Yp=Br,Is)](){return this[Br]!=null?lt.evaluate(this[Br]):Bi}}const Jp=Symbol("operator"),hh=Symbol("left"),uh=Symbol("right");class $p extends lt{constructor(e,t,n){super(),this[Jp]=e,this[hh]=t,this[uh]=n}get isConstant(){return lt.isConstant(this[hh])&&lt.isConstant(this[uh])}[Is](){const e=Nn(lt.evaluate(this[hh])),t=Nn(lt.evaluate(this[uh])),{number:n,unit:i}=e,{number:r,unit:a}=t;if(a!=null&&i!=null&&a!=i)return Bi;const o=i||a;let l;switch(this[Jp].value){case"+":l=n+r;break;case"-":l=n-r;break;case"/":l=n/r;break;case"*":l=n*r;break;default:return Bi}return{type:"number",number:l,unit:o}}}const dh=Symbol("evaluatables"),Zp=Symbol("intrinsics");class i0 extends lt{constructor(e,t){super(),this[Zp]=t;const n=e[0],i=n!=null?n.terms:[];this[dh]=t.basis.map((r,a)=>{const o=i[a];return o==null?{type:"ident",value:"auto"}:o.type==="ident"?o:lt.evaluatableFor(o,r)})}get isConstant(){for(const e of this[dh])if(!lt.isConstant(e))return!1;return!0}[Is](){const e=this[dh].map(t=>lt.evaluate(t));return lt.applyIntrinsics(e,this[Zp]).map(t=>t.number)}}/* @license
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
 */var r0,s0,a0,o0;const Rr=Symbol("instances"),em=Symbol("activateListener"),tm=Symbol("deactivateListener"),Ah=Symbol("notifyInstances"),nm=Symbol("notify"),im=Symbol("callback");class Dn{constructor(e){this[im]=e}static[Ah](){for(const e of Dn[Rr])e[nm]()}static[(r0=Rr,em)](){window.addEventListener("scroll",this[Ah],{passive:!0})}static[tm](){window.removeEventListener("scroll",this[Ah])}observe(){Dn[Rr].size===0&&Dn[em](),Dn[Rr].add(this)}disconnect(){Dn[Rr].delete(this),Dn[Rr].size===0&&Dn[tm]()}[nm](){this[im]()}}Dn[r0]=new Set;const rm=Symbol("computeStyleCallback"),l0=Symbol("astWalker"),ca=Symbol("dependencies"),c0=Symbol("onScroll");class yS{constructor(e){this[s0]={},this[a0]=new mS(["function"]),this[o0]=()=>{this[rm]({relatedState:"window-scroll"})},this[rm]=e}observeEffectsFor(e){const t={},n=this[ca];this[l0].walk(e,i=>{const{name:r}=i,a=i.arguments[0].terms[0];if(r.value==="env"&&a!=null&&a.type==="ident"&&a.value==="window-scroll-y"&&t["window-scroll"]==null){const o="window-scroll"in n?n["window-scroll"]:new Dn(this[c0]);o.observe(),delete n["window-scroll"],t["window-scroll"]=o}});for(const i in n)n[i].disconnect();this[ca]=t}dispose(){for(const e in this[ca])this[ca][e].disconnect()}}s0=ca,a0=l0,o0=c0;/* @license
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
 */const vi=s=>{const e=s.observeEffects||!1,t=s.intrinsics instanceof Function?s.intrinsics:()=>s.intrinsics;return(n,i)=>{const r=n.updated,a=n.connectedCallback,o=n.disconnectedCallback,l=Symbol(`${i}StyleEffector`),c=Symbol(`${i}StyleEvaluator`),h=Symbol(`${i}UpdateEvaluator`),u=Symbol(`${i}EvaluateAndSync`);Object.defineProperties(n,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[h]:{value:function(){const d=oi(this[i]);this[c]=new i0(d,t(this)),this[l]==null&&e&&(this[l]=new yS(()=>this[u]())),this[l]!=null&&this[l].observeEffectsFor(d)}},[u]:{value:function(){if(this[c]==null)return;const d=this[c].evaluate();this[s.updateHandler](d)}},updated:{value:function(d){d.has(i)&&(this[h](),this[u]()),r.call(this,d)}},connectedCallback:{value:function(){a.call(this),this.requestUpdate(i,this[i])}},disconnectedCallback:{value:function(){o.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}},h0=s=>s<.5?2*s*s:(4-2*s)*s-1,ES=(s,e,t=h0)=>n=>s+(e-s)*t(n),$r=s=>{const e=[],t=[];let n=s.initialValue;for(let i=0;i<s.keyframes.length;++i){const r=s.keyframes[i],{value:a,frames:o}=r,l=r.ease||h0,c=ES(n,a,l);e.push(c),t.push(o),n=a}return((i,r)=>{const a=r.map((o=0,l=>o+=l));var o;return l=>{l=Un(l,0,1),l*=a[a.length-1];const c=a.findIndex(d=>d>=l),h=c<1?0:a[c-1],u=a[c];return i[c]((l-h)/(u-h))}})(e,t)};/* @license
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
 */var _t=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const xS=$r({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),SS=$r({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),u0="0deg 75deg 105%",CS=["front","right","back","left"],IS=["upper-","","lower-"],Co="auto",wS="basic",sm="wiggle",MS="none",am=()=>({basis:[Hl(kt(30,"deg"))],keywords:{auto:[null]}}),bS=()=>({basis:[Hl(kt(12,"deg"))],keywords:{auto:[null]}}),d0=(()=>{const s=oi(u0)[0].terms,e=Nn(s[0]),t=Nn(s[1]);return n=>{const i=n[le].idealCameraDistance();return{basis:[e,t,kt(i,"m")],keywords:{auto:[null,null,kt(105,"%")]}}}})(),TS=s=>{const e=2.2*s[le].boundingSphere.radius;return{basis:[kt(-1/0,"rad"),kt(0,"rad"),kt(e,"m")],keywords:{auto:[null,null,null]}}},BS=s=>{const e=d0(s),t=new i0([],e).evaluate()[2];return{basis:[kt(1/0,"rad"),kt(Math.PI,"rad"),kt(t,"m")],keywords:{auto:[null,null,null]}}},RS=s=>{const e=s[le].boundingBox.getCenter(new T);return{basis:[kt(e.x,"m"),kt(e.y,"m"),kt(e.z,"m")],keywords:{auto:[null,null,null]}}},A0=Math.PI/2,DS=Math.PI/3,LS=A0/2,US=2*Math.PI,Xe=Symbol("controls"),sl=Symbol("panElement"),ph=Symbol("promptElement"),Io=Symbol("promptAnimatedContainer"),mh=Symbol("fingerAnimatedContainers"),wo=Symbol("deferInteractionPrompt"),om=Symbol("updateAria"),$n=Symbol("a11y"),lm=Symbol("updateA11y"),cm=Symbol("updateCameraForRadius"),Dr=Symbol("cancelPrompts"),gh=Symbol("onChange"),Ws=Symbol("onPointerChange"),Wi=Symbol("waitingToPromptUser"),Mo=Symbol("userHasInteracted"),Lr=Symbol("promptElementVisibleTime"),qs=Symbol("lastPromptOffset"),bo=Symbol("cancellationSource"),fh=Symbol("lastSpherical"),Xs=Symbol("jumpCamera"),vh=Symbol("initialized"),js=Symbol("maintainThetaPhi"),hm=Symbol("syncCameraOrbit"),um=Symbol("syncFieldOfView"),dm=Symbol("syncCameraTarget"),Am=Symbol("syncMinCameraOrbit"),pm=Symbol("syncMaxCameraOrbit"),mm=Symbol("syncMinFieldOfView"),gm=Symbol("syncMaxFieldOfView"),PS=new Te,fm=new T,vm=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:0,maximumPolarAngle:Math.PI,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),To=Math.PI/8,_h=.04,pt={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class NS extends Mn{constructor(e,t,n){super(),this.camera=e,this.element=t,this.scene=n,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.inputSensitivity=1,this.changeSource=pt.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new be,this.panPerPixel=0,this.spherical=new Jo,this.goalSpherical=new Jo,this.thetaDamper=new Xt,this.phiDamper=new Xt,this.radiusDamper=new Xt,this.logFov=Math.log(vm.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new Xt,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=i=>{if(this.enablePan)i.preventDefault();else for(const r of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:r.id})))},this.touchModeZoom=(i,r)=>{if(!this._disableZoom){const a=this.twoTouchDistance(this.pointers[0],this.pointers[1]),o=_h*this.zoomSensitivity*(this.lastSeparation-a)*50/this.scene.height;this.lastSeparation=a,this.userAdjustOrbit(0,0,o)}this.panPerPixel>0&&this.movePan(i,r)},this.disableScroll=i=>{i.preventDefault()},this.touchModeRotate=(i,r)=>{const{touchAction:a}=this._options;if(!this.touchDecided&&a!=="none"){this.touchDecided=!0;const o=Math.abs(i),l=Math.abs(r);if(this.changeSource===pt.USER_INTERACTION&&(a==="pan-y"&&l>o||a==="pan-x"&&o>l))return void(this.touchMode=null);this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(i,r)},this.onPointerDown=i=>{if(this.pointers.length>2)return;const{element:r}=this;this.pointers.length===0&&(r.addEventListener("pointermove",this.onPointerMove),r.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=i.clientX,this.startPointerPosition.clientY=i.clientY,this.startTime=performance.now());try{r.setPointerCapture(i.pointerId)}catch{}this.pointers.push({clientX:i.clientX,clientY:i.clientY,id:i.pointerId}),this.isUserPointing=!1,i.pointerType==="touch"?(this.changeSource=i.altKey?pt.AUTOMATIC:pt.USER_INTERACTION,this.onTouchChange(i)):(this.changeSource=pt.USER_INTERACTION,this.onMouseDown(i)),this.changeSource===pt.USER_INTERACTION&&this.dispatchEvent({type:"user-interaction"})},this.onPointerMove=i=>{const r=this.pointers.find(c=>c.id===i.pointerId);if(r==null)return;if(i.pointerType==="mouse"&&i.buttons===0)return void this.onPointerUp(i);const a=this.pointers.length,o=(i.clientX-r.clientX)/a,l=(i.clientY-r.clientY)/a;o===0&&l===0||(r.clientX=i.clientX,r.clientY=i.clientY,i.pointerType==="touch"?(this.changeSource=i.altKey?pt.AUTOMATIC:pt.USER_INTERACTION,this.touchMode!==null&&this.touchMode(o,l)):(this.changeSource=pt.USER_INTERACTION,this.panPerPixel>0?this.movePan(o,l):this.handleSinglePointerMove(o,l)))},this.onPointerUp=i=>{const{element:r}=this,a=this.pointers.findIndex(o=>o.id===i.pointerId);a!==-1&&this.pointers.splice(a,1),this.panPerPixel>0&&!i.altKey&&this.resetRadius(),this.pointers.length===0?(r.removeEventListener("pointermove",this.onPointerMove),r.removeEventListener("pointerup",this.onPointerUp),r.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(i)):this.touchMode!==null&&this.onTouchChange(i),this.scene.element[sl].style.opacity=0,r.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=i=>{this.changeSource=pt.USER_INTERACTION;const r=i.deltaY*(i.deltaMode==1?18:1)*_h*this.zoomSensitivity/30;this.userAdjustOrbit(0,0,r),i.preventDefault(),this.dispatchEvent({type:"user-interaction"})},this.onKeyDown=i=>{const{changeSource:r}=this;this.changeSource=pt.USER_INTERACTION,(i.shiftKey&&this.enablePan?this.panKeyCodeHandler(i):this.orbitZoomKeyCodeHandler(i))?(i.preventDefault(),this.dispatchEvent({type:"user-interaction"})):this.changeSource=r},this._options=Object.assign({},vm),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:e}=this;e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||e.addEventListener("wheel",this.onWheel),e.addEventListener("keydown",this.onKeyDown),e.addEventListener("touchmove",()=>{},{passive:!1}),e.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:e}=this;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointercancel",this.onPointerUp),e.removeEventListener("wheel",this.onWheel),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("contextmenu",this.onContext),e.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(e){this._disableZoom!=e&&(this._disableZoom=e,e===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(e=new Jo){return e.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(e){Object.assign(this._options,e),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(e,t){this.camera.far=t===0?2:t,this.camera.near=Math.max(e,this.camera.far/1e3),this.camera.updateProjectionMatrix()}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setOrbit(e=this.goalSpherical.theta,t=this.goalSpherical.phi,n=this.goalSpherical.radius){const{minimumAzimuthalAngle:i,maximumAzimuthalAngle:r,minimumPolarAngle:a,maximumPolarAngle:o,minimumRadius:l,maximumRadius:c}=this._options,{theta:h,phi:u,radius:d}=this.goalSpherical,A=Un(e,i,r);isFinite(i)||isFinite(r)||(this.spherical.theta=this.wrapAngle(this.spherical.theta-A)+A);const p=Un(t,a,o),g=Un(n,l,c);return(A!==h||p!==u||g!==d)&&!!(isFinite(A)&&isFinite(p)&&isFinite(g))&&(this.goalSpherical.theta=A,this.goalSpherical.phi=p,this.goalSpherical.radius=g,this.goalSpherical.makeSafe(),!0)}setRadius(e){this.goalSpherical.radius=e,this.setOrbit()}setFieldOfView(e){const{minimumFieldOfView:t,maximumFieldOfView:n}=this._options;e=Un(e,t,n),this.goalLogFov=Math.log(e)}setDamperDecayTime(e){this.thetaDamper.setDecayTime(e),this.phiDamper.setDecayTime(e),this.radiusDamper.setDecayTime(e),this.fovDamper.setDecayTime(e)}adjustOrbit(e,t,n){const{theta:i,phi:r,radius:a}=this.goalSpherical,{minimumRadius:o,maximumRadius:l,minimumFieldOfView:c,maximumFieldOfView:h}=this._options,u=this.spherical.theta-i,d=Math.PI-.001,A=i-Un(e,-d-u,d-u),p=r-t,g=n===0?0:((n>0?l:o)-a)/(Math.log(n>0?h:c)-this.goalLogFov),f=a+n*(isFinite(g)?g:2*(l-o));if(this.setOrbit(A,p,f),n!==0){const m=this.goalLogFov+n;this.setFieldOfView(Math.exp(m))}}jumpToGoal(){this.update(0,1e4)}update(e,t){if(this.isStationary())return!1;const{maximumPolarAngle:n,maximumRadius:i}=this._options,r=this.spherical.theta-this.goalSpherical.theta;return Math.abs(r)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=2*Math.sign(r)*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,t,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,t,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,t,i),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,t,1),this.moveCamera(),!0}updateTouchActionStyle(){const{style:e}=this.element;if(this._interactionEnabled){const{touchAction:t}=this._options;this._disableZoom&&t!=="none"?e.touchAction="manipulation":e.touchAction=t}else e.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new An(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix())}userAdjustOrbit(e,t,n){this.adjustOrbit(e*this.orbitSensitivity*this.inputSensitivity,t*this.orbitSensitivity*this.inputSensitivity,n*this.inputSensitivity)}wrapAngle(e){const t=(e+Math.PI)/(2*Math.PI);return 2*(t-Math.floor(t))*Math.PI-Math.PI}pixelLengthToSphericalAngle(e){return 2*Math.PI*e/this.scene.height}twoTouchDistance(e,t){const{clientX:n,clientY:i}=e,{clientX:r,clientY:a}=t,o=r-n,l=a-i;return Math.sqrt(o*o+l*l)}handleSinglePointerMove(e,t){const n=this.pixelLengthToSphericalAngle(e),i=this.pixelLengthToSphericalAngle(t);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(n,i,0)}initializePan(){const{theta:e,phi:t}=this.spherical,n=e-this.scene.yaw;this.panPerPixel=.018*this.panSensitivity/this.scene.height,this.panProjection.set(-Math.cos(n),-Math.cos(t)*Math.sin(n),0,0,Math.sin(t),0,Math.sin(n),-Math.cos(t)*Math.cos(n),0)}movePan(e,t){const{scene:n}=this,i=fm.set(e,t,0).multiplyScalar(this.inputSensitivity),r=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;i.multiplyScalar(r);const a=n.getTarget();a.add(i.applyMatrix3(this.panProjection)),n.boundingSphere.clampPoint(a,a),n.setTarget(a.x,a.y,a.z)}recenter(e){if(performance.now()>this.startTime+300||Math.abs(e.clientX-this.startPointerPosition.clientX)>2||Math.abs(e.clientY-this.startPointerPosition.clientY)>2)return;const{scene:t}=this,n=t.positionAndNormalFromPoint(t.getNDC(e.clientX,e.clientY));if(n==null){const{cameraTarget:i}=t.element;t.element.cameraTarget="",t.element.cameraTarget=i,this.userAdjustOrbit(0,0,1)}else t.target.worldToLocal(n.position),t.setTarget(n.position.x,n.position.y,n.position.z)}resetRadius(){const{scene:e}=this,t=e.positionAndNormalFromPoint(PS.set(0,0));if(t==null)return;e.target.worldToLocal(t.position);const n=e.getTarget(),{theta:i,phi:r}=this.spherical,a=i-e.yaw,o=fm.set(Math.sin(r)*Math.sin(a),Math.cos(r),Math.sin(r)*Math.cos(a)),l=o.dot(t.position.sub(n));n.add(o.multiplyScalar(l)),e.setTarget(n.x,n.y,n.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-l)}onTouchChange(e){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom)return this.touchMode=null,void this.element.removeEventListener("touchmove",this.disableScroll);this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),e.altKey||(this.scene.element[sl].style.opacity=1))}}onMouseDown(e){this.panPerPixel=0,this.enablePan&&(e.button===2||e.ctrlKey||e.metaKey||e.shiftKey)&&(this.initializePan(),this.scene.element[sl].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(e){let t=!0;switch(e.key){case"PageUp":this.userAdjustOrbit(0,0,_h*this.zoomSensitivity);break;case"PageDown":this.userAdjustOrbit(0,0,-.04*this.zoomSensitivity);break;case"ArrowUp":this.userAdjustOrbit(0,-To,0);break;case"ArrowDown":this.userAdjustOrbit(0,To,0);break;case"ArrowLeft":this.userAdjustOrbit(-To,0,0);break;case"ArrowRight":this.userAdjustOrbit(To,0,0);break;default:t=!1}return t}panKeyCodeHandler(e){this.initializePan();let t=!0;switch(e.key){case"ArrowUp":this.movePan(0,-10);break;case"ArrowDown":this.movePan(0,10);break;case"ArrowLeft":this.movePan(-10,0);break;case"ArrowRight":this.movePan(10,0);break;default:t=!1}return t}}/* @license
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
 */const Ur=150,al="not-presenting",p0="session-started",FS="object-placed",QS="failed",m0="tracking",OS="not-tracking",Ys=new T,Pr=new Yt,kS=new Se,GS=new T,HS=new Tt(45,1,.1,100),_m=new $t().setFromPoints([new T(0,0,0),new T(0,0,-1)]),zS=new ci;class VS extends Mn{constructor(e){super(),this.renderer=e,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.xrMode=null,this.controller1=null,this.controller2=null,this.selectedController=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new T,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new T,this.relativeOrientation=new Yt,this.scaleLine=new wa(_m),this.firstRatio=0,this.lastAngle=0,this.goalPosition=new T,this.goalYaw=0,this.goalScale=1,this.xDamper=new Xt,this.yDamper=new Xt,this.zDamper=new Xt,this.yawDamper=new Xt,this.pitchDamper=new Xt,this.rollDamper=new Xt,this.scaleDamper=new Xt,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onControllerSelectStart=t=>{const n=this.presentedScene,i=t.target;if(this.placementBox.controllerIntersection(n,i)!=null)this.selectedController!=null&&(this.selectedController.userData.line.visible=!1,n.canScale&&(this.isTwoFingering=!0,this.firstRatio=this.controllerSeparation()/n.pivot.scale.x,this.scaleLine.visible=!0)),i.attach(n.pivot),this.selectedController=i,n.setShadowIntensity(.01);else{const r=i===this.controller1?this.controller2:this.controller1;this.relativeOrientation.copy(i.quaternion).invert().multiply(n.pivot.getWorldQuaternion(Pr)),r.userData.turning=!1,i.userData.turning=!0,i.userData.line.visible=!1}},this.onControllerSelectEnd=t=>{const n=t.target;if(n.userData.turning=!1,n.userData.line.visible=!0,this.isTwoFingering=!1,this.scaleLine.visible=!1,this.selectedController!=null&&this.selectedController!=n)return;const i=this.presentedScene;i.attach(i.pivot),this.selectedController=null,this.goalYaw=Math.atan2(i.pivot.matrix.elements[8],i.pivot.matrix.elements[10]),this.goalPosition.x=i.pivot.position.x,this.goalPosition.z=i.pivot.position.z},this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new Vp(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=t=>{const n=this.transientHitTestSource;if(n==null)return;const i=this.frame.getHitTestResultsForTransientInput(n),r=this.presentedScene,a=this.placementBox;if(i.length===1){this.inputSource=t.inputSource;const{axes:o}=this.inputSource.gamepad,l=a.getHit(this.presentedScene,o[0],o[1]);a.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=1.5*o[0])}else if(i.length===2){a.show=!0,this.isTwoFingering=!0;const{separation:o}=this.fingerPolar(i);this.firstRatio=o/r.pivot.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=e.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){Ap();const e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(e),this.threeRenderer.xr.cameraAutoUpdate=!1,e}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return Ap(),await navigator.xr.isSessionSupported("immersive-ar")}catch(e){return console.warn("Request to present in WebXR denied:"),console.warn(e),console.warn("Falling back to next ar-mode"),!1}}async present(e,t=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let n=new Promise((c,h)=>{requestAnimationFrame(()=>c())});e.setHotspotsVisibility(!1),e.queueRender(),await n,this._presentedScene=e,this.overlay=e.element.shadowRoot.querySelector("div.default"),t===!0&&(this.xrLight=new hS(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const c=this.presentedScene;c.add(this.xrLight),c.environment=this.xrLight.environment}));const i=await this.resolveARSession();i.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const r=e.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");r.classList.add("enabled"),r.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=r;const a=await i.requestReferenceSpace("viewer");this.xrMode=i.interactionMode,this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=e.yaw,this.goalYaw=e.yaw,this.goalScale=1,e.setBackground(null),this.oldShadowIntensity=e.shadowIntensity,e.setShadowIntensity(.01),this.oldTarget.copy(e.getTarget()),e.element.addEventListener("load",this.onUpdateScene);const o=20*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(o),z:-Math.cos(o)});i.requestHitTestSource({space:a,offsetRay:l}).then(c=>{this.initialHitSource=c}),this.xrMode!=="screen-space"&&(this.setupControllers(),this.xDamper.setDecayTime(Ur),this.yDamper.setDecayTime(Ur),this.zDamper.setDecayTime(Ur),this.yawDamper.setDecayTime(Ur),this.pitchDamper.setDecayTime(Ur),this.rollDamper.setDecayTime(Ur)),this.currentSession=i,this.placementBox=new Vp(e,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:p0})}setupControllers(){this.controller1=this.threeRenderer.xr.getController(0),this.controller1.addEventListener("selectstart",this.onControllerSelectStart),this.controller1.addEventListener("selectend",this.onControllerSelectEnd),this.controller2=this.threeRenderer.xr.getController(1),this.controller2.addEventListener("selectstart",this.onControllerSelectStart),this.controller2.addEventListener("selectend",this.onControllerSelectEnd);const e=this.presentedScene;if(e.add(this.controller1),e.add(this.controller2),!this.controller1.userData.line){const t=new wa(_m);t.name="line",t.scale.z=5,this.controller1.userData.turning=!1,this.controller1.userData.line=t,this.controller1.add(t),this.controller2.userData.turning=!1;const n=t.clone();this.controller2.userData.line=n,this.controller2.add(n),this.scaleLine.name="scale line",this.scaleLine.visible=!1,this.controller1.add(this.scaleLine);const{size:i}=e,r=.1/Math.max(i.x,i.y,i.z),a=new Je(zS);a.name="box",a.scale.copy(i).multiplyScalar(r),a.visible=!1,this.controller1.userData.box=a,e.add(a);const o=a.clone();this.controller2.userData.box=o,e.add(o)}}hover(e){if(this.xrMode==="screen-space"||this.selectedController==e)return!1;const t=this.presentedScene,n=this.placementBox.controllerIntersection(t,e);return e.userData.box.visible=(n==null||e.userData.turning)&&!this.isTwoFingering,e.userData.line.scale.z=n==null?5:n.distance,n!=null}controllerSeparation(){return this.controller1.position.distanceTo(this.controller2.position)}async stopPresenting(){if(!this.isPresenting)return;const e=new Promise(t=>{this.resolveCleanup=t});try{await this.currentSession.end(),await e}catch(t){console.warn("Error while trying to end WebXR AR session"),console.warn(t),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const e=this.presentedScene;if(e!=null){const t=e.getTarget();this.oldTarget.copy(t),this.placeOnWall?t.z=e.boundingBox.min.z:t.y=e.boundingBox.min.y,e.setTarget(t.x,t.y,t.z)}}postSessionCleanup(){const e=this.currentSession;e!=null&&(e.removeEventListener("selectstart",this.onSelectStart),e.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const t=this.presentedScene;if(this._presentedScene=null,t!=null){const{element:a}=t;this.xrLight!=null&&(t.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),t.add(t.pivot),t.pivot.quaternion.set(0,0,0,1),t.pivot.position.set(0,0,0),t.pivot.scale.set(1,1,1),t.setShadowOffset(0);const o=this.turntableRotation;o!=null&&(t.yaw=o);const l=this.oldShadowIntensity;l!=null&&t.setShadowIntensity(l),t.setEnvironmentAndSkybox(a[la],a[tl]);const c=this.oldTarget;t.setTarget(c.x,c.y,c.z),t.xrCamera=null,t.element.removeEventListener("load",this.onUpdateScene),t.orientHotspots(0);const{width:h,height:u}=a.getBoundingClientRect();t.setSize(h,u),requestAnimationFrame(()=>{t.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:pt.NONE}}))})}this.renderer.height=0;const n=this.exitWebXRButtonContainer;n!=null&&(n.classList.remove("enabled"),n.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const i=this.transientHitTestSource;i!=null&&(i.cancel(),this.transientHitTestSource=null);const r=this.initialHitSource;r!=null&&(r.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.xrMode!=="screen-space"&&(this.controller1!=null&&(this.controller1.userData.turning=!1,this.controller1.userData.box.visible=!1,this.controller1.userData.line.visible=!0,this.controller1.removeEventListener("selectstart",this.onControllerSelectStart),this.controller1.removeEventListener("selectend",this.onControllerSelectEnd),this.controller1.removeFromParent(),this.controller1=null),this.controller2!=null&&(this.controller2.userData.turning=!1,this.controller2.userData.box.visible=!1,this.controller2.userData.line.visible=!0,this.controller2.removeEventListener("selectstart",this.onControllerSelectStart),this.controller2.removeEventListener("selectend",this.onControllerSelectEnd),this.controller2.removeFromParent(),this.controller2=null),this.selectedController=null,this.scaleLine.visible=!1),this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:al})}updateView(e){const t=this.presentedScene,n=this.threeRenderer.xr;n.updateCamera(HS),t.xrCamera=n.getCamera();const{elements:i}=t.getCamera().matrixWorld;if(t.orientHotspots(Math.atan2(i[1],i[5])),this.initialized||(this.placeInitially(),this.initialized=!0),e.requestViewportScale&&e.recommendedViewportScale){const a=e.recommendedViewportScale;e.requestViewportScale(Math.max(a,.25))}const r=n.getBaseLayer();if(r!=null){const a=r instanceof XRWebGLLayer?r.getViewport(e):n.getBinding().getViewSubImage(r,e).viewport;this.threeRenderer.setViewport(a.x,a.y,a.width,a.height)}}placeInitially(){const e=this.presentedScene,{pivot:t,element:n}=e,{position:i}=t,r=e.getCamera(),{width:a,height:o}=this.overlay.getBoundingClientRect();e.setSize(a,o),r.projectionMatrixInverse.copy(r.projectionMatrix).invert();const{theta:l}=n.getCameraOrbit(),c=r.getWorldDirection(Ys);e.yaw=Math.atan2(-c.x,-c.z)-l,this.goalYaw=e.yaw;const h=Math.max(1,2*e.boundingSphere.radius);i.copy(r.position).add(c.multiplyScalar(h)),this.updateTarget();const u=e.getTarget();if(i.add(u).sub(this.oldTarget),this.goalPosition.copy(i),e.setHotspotsVisibility(!0),this.xrMode==="screen-space"){const{session:d}=this.frame;d.addEventListener("selectstart",this.onSelectStart),d.addEventListener("selectend",this.onSelectEnd),d.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(A=>{this.transientHitTestSource=A})}}getTouchLocation(){const{axes:e}=this.inputSource.gamepad;let t=this.placementBox.getExpandedHit(this.presentedScene,e[0],e[1]);return t!=null&&(Ys.copy(t).sub(this.presentedScene.getCamera().position),Ys.length()>10)?null:t}getHitPoint(e){const t=this.threeRenderer.xr.getReferenceSpace(),n=e.getPose(t);if(n==null)return null;const i=kS.fromArray(n.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(i.elements[4],i.elements[6])),i.elements[5]>.75!==this.placeOnWall?GS.setFromMatrixPosition(i):null}moveToFloor(e){const t=this.initialHitSource;if(t==null)return;const n=e.getHitTestResults(t);if(n.length==0)return;const i=n[0],r=this.getHitPoint(i);r!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(r):this.goalPosition.y=r.y),t.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:FS}))}fingerPolar(e){const t=e[0].inputSource.gamepad.axes,n=e[1].inputSource.gamepad.axes,i=n[0]-t[0],r=n[1]-t[1],a=Math.atan2(r,i);let o=this.lastAngle-a;return o>Math.PI?o-=2*Math.PI:o<-Math.PI&&(o+=2*Math.PI),this.lastAngle=a,{separation:Math.sqrt(i*i+r*r),deltaYaw:o}}setScale(e){const t=e/this.firstRatio;this.goalScale=Math.abs(t-1)<.2?1:t}processInput(e){const t=this.transientHitTestSource;if(t==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const n=e.getHitTestResultsForTransientInput(t),i=this.presentedScene,r=i.pivot.scale.x;if(this.isTwoFingering)if(n.length<2)this.isTwoFingering=!1;else{const{separation:a,deltaYaw:o}=this.fingerPolar(n);this.placeOnWall===!1&&(this.goalYaw+=o),i.canScale&&this.setScale(a)}else if(n.length!==2)if(this.isRotating){const a=1.5*this.inputSource.gamepad.axes[0];this.goalYaw+=a-this.lastAngle,this.lastAngle=a}else this.isTranslating&&n.forEach(a=>{if(a.inputSource!==this.inputSource)return;let o=null;if(a.results.length>0&&(o=this.getHitPoint(a.results[0])),o==null&&(o=this.getTouchLocation()),o!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=o.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/r,this.presentedScene.setShadowOffset(l);const c=Ys.copy(i.getCamera().position),h=-l/(c.y-o.y);c.multiplyScalar(h),o.multiplyScalar(1-h).add(c)}}this.goalPosition.add(o),this.lastDragPosition.copy(o)}});else{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(n);this.firstRatio=a/r}}moveScene(e){const t=this.presentedScene,{pivot:n}=t,i=this.placementBox;if(i.updateOpacity(e),this.controller1&&(this.controller1.userData.turning&&(n.quaternion.copy(this.controller1.quaternion).multiply(this.relativeOrientation),this.selectedController&&this.selectedController===this.controller2&&n.quaternion.premultiply(Pr.copy(this.controller2.quaternion).invert())),this.controller1.userData.box.position.copy(this.controller1.position),n.getWorldQuaternion(this.controller1.userData.box.quaternion)),this.controller2&&(this.controller2.userData.turning&&(n.quaternion.copy(this.controller2.quaternion).multiply(this.relativeOrientation),this.selectedController&&this.selectedController===this.controller1&&n.quaternion.premultiply(Pr.copy(this.controller1.quaternion).invert())),this.controller2.userData.box.position.copy(this.controller2.position),n.getWorldQuaternion(this.controller2.userData.box.quaternion)),this.controller1&&this.controller2&&this.isTwoFingering){const d=this.controllerSeparation();this.setScale(d),this.scaleLine.scale.z=-d,this.scaleLine.lookAt(this.controller2.position)}const r=t.pivot.scale.x;if(this.goalScale!==r){const d=this.scaleDamper.update(r,this.goalScale,e,1);t.pivot.scale.set(d,d,d)}if(n.parent!==t)return;const{position:a}=n,o=t.boundingSphere.radius,l=this.goalPosition;let c=pt.NONE;if(!l.equals(a)){c=pt.USER_INTERACTION;let{x:d,y:A,z:p}=a;if(d=this.xDamper.update(d,l.x,e,o),A=this.yDamper.update(A,l.y,e,o),p=this.zDamper.update(p,l.z,e,o),a.set(d,A,p),this.xrMode==="screen-space"&&!this.isTranslating){const g=l.y-A;this.placementComplete&&this.placeOnWall===!1?(i.offsetHeight=g/t.pivot.scale.x,t.setShadowOffset(g)):g===0&&(this.placementComplete=!0,i.show=!1,t.setShadowIntensity(.8))}this.xrMode!=="screen-space"&&l.equals(a)&&t.setShadowIntensity(.8)}t.updateTarget(e),Pr.setFromAxisAngle(Ys.set(0,1,0),this.goalYaw);const h=t.pivot.quaternion.angleTo(Pr),u=h-this.yawDamper.update(h,0,e,Math.PI);t.pivot.quaternion.rotateTowards(Pr,u),t.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:c}}))}onWebXRFrame(e,t){if(this.xrMode!=="screen-space"){const o=this.hover(this.controller1),l=this.hover(this.controller2);this.placementBox.show=(o||l)&&!this.isTwoFingering}this.frame=t,++this.frames;const n=this.threeRenderer.xr.getReferenceSpace(),i=t.getViewerPose(n);i==null&&this.tracking===!0&&this.frames>30&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:OS}));const r=this.presentedScene;if(i==null||r==null||!r.element.loaded)return void this.threeRenderer.clear();this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:m0}));let a=!0;for(const o of i.views){if(this.updateView(o),a){this.moveToFloor(t),this.processInput(t);const l=e-this.lastTick;this.moveScene(l),this.renderer.preRender(r,e,l),this.lastTick=e,r.renderShadow(this.threeRenderer)}this.threeRenderer.render(r,r.getCamera()),a=!1}}}function WS(s){const e=new Map,t=new Map,n=s.clone();return g0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function g0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)g0(s.children[n],e.children[n],t)}/* @license
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
 */const ym=Symbol("prepared"),bl=Symbol("prepare"),Tn=Symbol("preparedGLTF"),Tl=Symbol("clone");class qS{constructor(e){this[Tn]=e}static prepare(e){if(e.scene==null)throw new Error("Model does not have a scene");if(e[ym])return e;const t=this[bl](e);return t[ym]=!0,t}static[bl](e){const{scene:t}=e,n=[t];return Object.assign(Object.assign({},e),{scene:t,scenes:n})}get parser(){return this[Tn].parser}get animations(){return this[Tn].animations}get scene(){return this[Tn].scene}get scenes(){return this[Tn].scenes}get cameras(){return this[Tn].cameras}get asset(){return this[Tn].asset}get userData(){return this[Tn].userData}clone(){return new this.constructor(this[Tl]())}dispose(){this.scenes.forEach(e=>{e.traverse(t=>{const n=t;n.material&&((Array.isArray(n.material)?n.material:[n.material]).forEach(i=>{for(const r in i){const a=i[r];if(a instanceof Ke){const o=a.source.data;o.close!=null&&o.close(),a.dispose()}}i.dispose()}),n.geometry.dispose())})})}[Tl](){const e=this[Tn],t=WS(this.scene);XS(t,this.scene);const n=[t],i=e.userData?Object.assign({},e.userData):{};return Object.assign(Object.assign({},e),{scene:t,scenes:n,userData:i})}}const XS=(s,e)=>{f0(s,e,(t,n)=>{n.userData.variantMaterials!==void 0&&(t.userData.variantMaterials=new Map(n.userData.variantMaterials)),n.userData.variantData!==void 0&&(t.userData.variantData=n.userData.variantData),n.userData.originalMaterial!==void 0&&(t.userData.originalMaterial=n.userData.originalMaterial)})},f0=(s,e,t)=>{t(s,e);for(let n=0;n<s.children.length;n++)f0(s.children[n],e.children[n],t)},Em=Symbol("threeGLTF"),xm=Symbol("gltf"),Sm=Symbol("gltfElementMap"),Cm=Symbol("threeObjectMap"),Im=Symbol("parallelTraverseThreeScene"),wm=Symbol("correlateOriginalThreeGLTF"),Mm=Symbol("correlateCloneThreeGLTF");class Ra{constructor(e,t,n,i){this[Em]=e,this[xm]=t,this[Sm]=i,this[Cm]=n}static from(e,t){return t!=null?this[Mm](e,t):this[wm](e)}static[wm](e){const t=e.parser.json,n=e.parser.associations,i=new Map,r={name:"Default"},a={type:"materials",index:-1};for(const o of n.keys())o instanceof wn&&n.get(o)==null&&(a.index<0&&(t.materials==null&&(t.materials=[]),a.index=t.materials.length,t.materials.push(r)),o.name=r.name,n.set(o,{materials:a.index}));for(const[o,l]of n){l&&(o.userData=o.userData||{},o.userData.associations=l);for(const c in l)if(c!=null&&c!=="primitives"){const h=c,u=(t[h]||[])[l[h]];if(u==null)continue;let d=i.get(u);d==null&&(d=new Set,i.set(u,d)),d.add(o)}}return new Ra(e,t,n,i)}static[Mm](e,t){const n=t.threeGLTF,i=t.gltf,r=JSON.parse(JSON.stringify(i)),a=new Map,o=new Map;for(let l=0;l<n.scenes.length;l++)this[Im](n.scenes[l],e.scenes[l],(c,h)=>{const u=t.threeObjectMap.get(c);if(u!=null){for(const d in u)if(d!=null&&d!=="primitives"){const A=d,p=u[A],g=r[A][p],f=a.get(h)||{};f[A]=p,a.set(h,f);const m=o.get(g)||new Set;m.add(h),o.set(g,m)}}});return new Ra(e,r,a,o)}static[Im](e,t,n){const i=(r,a)=>{if(n(r,a),r.isObject3D){const o=r,l=a;if(o.material)if(Array.isArray(o.material))for(let c=0;c<o.material.length;++c)n(o.material[c],l.material[c]);else n(o.material,l.material);for(let c=0;c<r.children.length;++c)i(r.children[c],a.children[c])}};i(e,t)}get threeGLTF(){return this[Em]}get gltf(){return this[xm]}get gltfElementMap(){return this[Sm]}get threeObjectMap(){return this[Cm]}}/* @license
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
 */const Ks=Symbol("correlatedSceneGraph");class jS extends qS{static[bl](e){const t=super[bl](e);t[Ks]==null&&(t[Ks]=Ra.from(t));const{scene:n}=t,i=new pn(void 0,1/0);return n.traverse(r=>{r.renderOrder=1e3,r.frustumCulled=!1,r.name||(r.name=r.uuid);const a=r;if(a.material){const{geometry:o}=a;a.castShadow=!0,a.isSkinnedMesh&&(o.boundingSphere=i,o.boundingBox=null);const l=a.material;if(l.isMeshBasicMaterial===!0&&(l.toneMapped=!1),l.shadowSide=0,l.aoMap){const{gltf:c,threeObjectMap:h}=t[Ks],u=h.get(l);if(c.materials!=null&&u!=null&&u.materials!=null){const d=c.materials[u.materials];d.occlusionTexture&&d.occlusionTexture.texCoord===0&&o.attributes.uv!=null&&o.setAttribute("uv2",o.attributes.uv)}}}}),t}get correlatedSceneGraph(){return this[Tn][Ks]}[Tl](){const e=super[Tl](),t=new Map;return e.scene.traverse(n=>{const i=n;if(i.material){const a=i.material;if(a!=null){if(t.has(a.uuid))return void(i.material=t.get(a.uuid));i.material=a.clone(),t.set(a.uuid,i.material)}}const r=n;r.target!==void 0&&r.add(r.target)}),e[Ks]=Ra.from(e,this.correlatedSceneGraph),e}}const bm=(s,e,t)=>{let n;switch(s){case mt:n=new Uint8ClampedArray(e*t*4);break;case xt:n=new Uint16Array(e*t*4);break;case bi:n=new Uint32Array(e*t*4);break;case Ku:n=new Int8Array(e*t*4);break;case Ju:n=new Int16Array(e*t*4);break;case Fl:n=new Int32Array(e*t*4);break;case yt:n=new Float32Array(e*t*4);break;default:throw new Error("Unsupported data type")}return n};let Bo;class _d{constructor(e){var t,n,i,r,a,o,l,c,h,u,d,A,p,g,f,m;this._rendererIsDisposable=!1,this._supportsReadPixels=!0,this.render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(v){throw this._renderer.setRenderTarget(null),v}this._renderer.setRenderTarget(null)},this._width=e.width,this._height=e.height,this._type=e.type,this._colorSpace=e.colorSpace;const _={format:ct,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:((t=e.renderTargetOptions)===null||t===void 0?void 0:t.anisotropy)!==void 0?(n=e.renderTargetOptions)===null||n===void 0?void 0:n.anisotropy:1,generateMipmaps:((i=e.renderTargetOptions)===null||i===void 0?void 0:i.generateMipmaps)!==void 0&&((r=e.renderTargetOptions)===null||r===void 0?void 0:r.generateMipmaps),magFilter:((a=e.renderTargetOptions)===null||a===void 0?void 0:a.magFilter)!==void 0?(o=e.renderTargetOptions)===null||o===void 0?void 0:o.magFilter:We,minFilter:((l=e.renderTargetOptions)===null||l===void 0?void 0:l.minFilter)!==void 0?(c=e.renderTargetOptions)===null||c===void 0?void 0:c.minFilter:We,samples:((h=e.renderTargetOptions)===null||h===void 0?void 0:h.samples)!==void 0?(u=e.renderTargetOptions)===null||u===void 0?void 0:u.samples:void 0,wrapS:((d=e.renderTargetOptions)===null||d===void 0?void 0:d.wrapS)!==void 0?(A=e.renderTargetOptions)===null||A===void 0?void 0:A.wrapS:Et,wrapT:((p=e.renderTargetOptions)===null||p===void 0?void 0:p.wrapT)!==void 0?(g=e.renderTargetOptions)===null||g===void 0?void 0:g.wrapT:Et};if(this._material=e.material,e.renderer?this._renderer=e.renderer:(this._renderer=_d.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new Ti,this._camera=new Ss,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!((v,y,E,S)=>{if(Bo!==void 0)return Bo;const C=new dn(1,1,S);y.setRenderTarget(C);const B=new Je(new On,new hn({color:16777215}));y.render(B,E),y.setRenderTarget(null);const b=bm(v,C.width,C.height);return y.readRenderTargetPixels(C,0,0,C.width,C.height,b),C.dispose(),B.geometry.dispose(),B.material.dispose(),Bo=b[0]!==0,Bo})(this._type,this._renderer,this._camera,_)){let v;this._type===xt&&(v=this._renderer.extensions.has("EXT_color_buffer_float")?yt:void 0),v!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to 1015`),this._type=v):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new Je(new On,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new dn(this.width,this.height,_),this._renderTarget.texture.mapping=((f=e.renderTargetOptions)===null||f===void 0?void 0:f.mapping)!==void 0?(m=e.renderTargetOptions)===null||m===void 0?void 0:m.mapping:os}static instantiateRenderer(){const e=new cd;return e.setSize(128,128),e}toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const e=bm(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){const t=new Ua(this.toArray(),this.width,this.height,ct,this._type,(e==null?void 0:e.mapping)||os,(e==null?void 0:e.wrapS)||Et,(e==null?void 0:e.wrapT)||Et,(e==null?void 0:e.magFilter)||We,(e==null?void 0:e.minFilter)||We,(e==null?void 0:e.anisotropy)||1,et);return t.generateMipmaps=(e==null?void 0:e.generateMipmaps)!==void 0&&(e==null?void 0:e.generateMipmaps),t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof Jt&&Object.values(this.material.uniforms).forEach(t=>{t.value instanceof Ke&&t.value.dispose()}),Object.values(this.material).forEach(t=>{t instanceof Ke&&t.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}class YS extends Jt{constructor({gamma:e,offsetHdr:t,offsetSdr:n,gainMapMin:i,gainMapMax:r,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:l,sdr:c,gainMap:h}){super({name:"GainMapDecoderMaterial",vertexShader:`
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
`,uniforms:{sdr:{value:c},gainMap:{value:h},gamma:{value:new T(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new T().fromArray(t)},offsetSdr:{value:new T().fromArray(n)},gainMapMin:{value:new T().fromArray(i)},gainMapMax:{value:new T().fromArray(r)},weightFactor:{value:(Math.log2(a)-o)/(l-o)}},blending:0,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){const e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){const t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){const e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}}class v0 extends Error{}class _0 extends Error{}const Js=(s,e,t)=>{var n;let i;const r=(n=s.attributes.getNamedItem(e))===null||n===void 0?void 0:n.nodeValue;if(r)i=r;else{const a=s.getElementsByTagName(e)[0];if(!a){if(t)return t;throw new Error(`Can't find ${e} in gainmap metadata`)}{const o=a.getElementsByTagName("rdf:li");if(o.length!==3)throw new Error(`Gainmap metadata contains an array of items for ${e} but its length is not 3`);i=Array.from(o).map(l=>l.innerHTML)}}return i};class KS{constructor(e){this.options={debug:!(!e||e.debug===void 0)&&e.debug,extractFII:!e||e.extractFII===void 0||e.extractFII,extractNonFII:!e||e.extractNonFII===void 0||e.extractNonFII}}extract(e){return new Promise((t,n)=>{const i=this.options.debug,r=new DataView(e.buffer);if(r.getUint16(0)!==65496)return void n(new Error("Not a valid jpeg"));const a=r.byteLength;let o,l=2,c=0;for(;l<a;){if(++c>250)return void n(new Error(`Found no marker after ${c} loops 😵`));if(r.getUint8(l)!==255)return void n(new Error(`Not a valid marker at offset 0x${l.toString(16)}, found: 0x${r.getUint8(l).toString(16)}`));if(o=r.getUint8(l+1),i&&console.log(`Marker: ${o.toString(16)}`),o===226){i&&console.log("Found APP2 marker (0xffe2)");const h=l+4;if(r.getUint32(h)===1297106432){const u=h+4;let d;if(r.getUint16(u)===18761)d=!1;else{if(r.getUint16(u)!==19789)return void n(new Error("No valid endianness marker found in TIFF header"));d=!0}if(r.getUint16(u+2,!d)!==42)return void n(new Error("Not valid TIFF data! (no 0x002A marker)"));const A=r.getUint32(u+4,!d);if(A<8)return void n(new Error("Not valid TIFF data! (First offset less than 8)"));const p=u+A,g=r.getUint16(p,!d),f=p+2;let m=0;for(let y=f;y<f+12*g;y+=12)r.getUint16(y,!d)===45057&&(m=r.getUint32(y+8,!d));const _=p+2+12*g+4,v=[];for(let y=_;y<_+16*m;y+=16){const E={MPType:r.getUint32(y,!d),size:r.getUint32(y+4,!d),dataOffset:r.getUint32(y+8,!d),dependantImages:r.getUint32(y+12,!d),start:-1,end:-1,isFII:!1};E.dataOffset?(E.start=u+E.dataOffset,E.isFII=!1):(E.start=0,E.isFII=!0),E.end=E.start+E.size,v.push(E)}if(this.options.extractNonFII&&v.length){const y=new Blob([r]),E=[];for(const S of v){if(S.isFII&&!this.options.extractFII)continue;const C=y.slice(S.start,S.end+1,"image/jpeg");E.push(C)}t(E)}}}l+=2+r.getUint16(l+2)}})}}const JS=async s=>{const e=(i=>{var r,a;let o;o=typeof TextDecoder<"u"?new TextDecoder().decode(i):i.toString();let l=o.indexOf("<x:xmpmeta");const c=new DOMParser;for(;l!==-1;){const h=o.indexOf("x:xmpmeta>",l);o.slice(l,h+10);const u=o.slice(l,h+10);try{const d=c.parseFromString(u,"text/xml").getElementsByTagName("rdf:Description")[0],A=Js(d,"hdrgm:GainMapMin","0"),p=Js(d,"hdrgm:GainMapMax"),g=Js(d,"hdrgm:Gamma","1"),f=Js(d,"hdrgm:OffsetSDR","0.015625"),m=Js(d,"hdrgm:OffsetHDR","0.015625");let _=(r=d.attributes.getNamedItem("hdrgm:HDRCapacityMin"))===null||r===void 0?void 0:r.nodeValue;_||(_="0");const v=(a=d.attributes.getNamedItem("hdrgm:HDRCapacityMax"))===null||a===void 0?void 0:a.nodeValue;if(!v)throw new Error("Incomplete gainmap metadata");return{gainMapMin:Array.isArray(A)?A.map(y=>parseFloat(y)):[parseFloat(A),parseFloat(A),parseFloat(A)],gainMapMax:Array.isArray(p)?p.map(y=>parseFloat(y)):[parseFloat(p),parseFloat(p),parseFloat(p)],gamma:Array.isArray(g)?g.map(y=>parseFloat(y)):[parseFloat(g),parseFloat(g),parseFloat(g)],offsetSdr:Array.isArray(f)?f.map(y=>parseFloat(y)):[parseFloat(f),parseFloat(f),parseFloat(f)],offsetHdr:Array.isArray(m)?m.map(y=>parseFloat(y)):[parseFloat(m),parseFloat(m),parseFloat(m)],hdrCapacityMin:parseFloat(_),hdrCapacityMax:parseFloat(v)}}catch{}l=o.indexOf("<x:xmpmeta",h)}})(s);if(!e)throw new _0("Gain map XMP metadata not found");const t=new KS({extractFII:!0,extractNonFII:!0}),n=await t.extract(s);if(n.length!==2)throw new v0("Gain map recovery image not found");return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:e}},Tm=s=>new Promise((e,t)=>{const n=document.createElement("img");n.onload=()=>{e(n)},n.onerror=i=>{t(i)},n.src=URL.createObjectURL(s)});class $S extends Gn{constructor(e,t){super(t),e&&(this._renderer=e),this._internalLoadingManager=new yf}setRenderer(e){return this._renderer=e,this}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");const e=new YS({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new Ke,sdr:new Ke});return new _d({width:16,height:16,type:xt,colorSpace:et,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async render(e,t,n,i){const r=i?new Blob([i],{type:"image/jpeg"}):void 0,a=new Blob([n],{type:"image/jpeg"});let o,l,c=!1;if(typeof createImageBitmap>"u"){const d=await Promise.all([r?Tm(r):Promise.resolve(void 0),Tm(a)]);l=d[0],o=d[1],c=!0}else{const d=await Promise.all([r?createImageBitmap(r,{imageOrientation:"flipY"}):Promise.resolve(void 0),createImageBitmap(a,{imageOrientation:"flipY"})]);l=d[0],o=d[1]}const h=new Ke(l||new ImageData(2,2),os,Et,Et,We,1008,ct,mt,1,et);h.flipY=c,h.needsUpdate=!0;const u=new Ke(o,os,Et,Et,We,1008,ct,mt,1,st);u.flipY=c,u.needsUpdate=!0,e.width=o.width,e.height=o.height,e.material.gainMap=h,e.material.sdr=u,e.material.gainMapMin=t.gainMapMin,e.material.gainMapMax=t.gainMapMax,e.material.offsetHdr=t.offsetHdr,e.material.offsetSdr=t.offsetSdr,e.material.gamma=t.gamma,e.material.hdrCapacityMin=t.hdrCapacityMin,e.material.hdrCapacityMax=t.hdrCapacityMax,e.material.maxDisplayBoost=Math.pow(2,t.hdrCapacityMax),e.material.needsUpdate=!0,e.render()}}class ZS extends $S{load(e,t,n,i){const r=this.prepareQuadRenderer(),a=new li(this._internalLoadingManager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(e),a.load(e,async o=>{if(typeof o=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const l=new Uint8Array(o);let c,h,u;try{const d=await JS(l);c=d.sdr,h=d.gainMap,u=d.metadata}catch(d){if(!(d instanceof _0||d instanceof v0))throw d;console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),u={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},c=l}try{await this.render(r,u,c,h)}catch(d){return this.manager.itemError(e),typeof i=="function"&&i(d),void r.disposeOnDemandRenderer()}typeof t=="function"&&t(r),this.manager.itemEnd(e),r.disposeOnDemandRenderer()},n,o=>{this.manager.itemError(e),typeof i=="function"&&i(o)}),r}}class eC extends iE{constructor(e){super(e),this.type=xt}parse(e){const t=function(p,g){switch(p){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(g||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(g||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(g||""));default:throw new Error("THREE.RGBELoader: Memory Error: "+(g||""))}},n=function(p,g,f){g=g||1024;let m=p.pos,_=-1,v=0,y="",E=String.fromCharCode.apply(null,new Uint16Array(p.subarray(m,m+128)));for(;0>(_=E.indexOf(`
`))&&v<g&&m<p.byteLength;)y+=E,v+=E.length,m+=128,E+=String.fromCharCode.apply(null,new Uint16Array(p.subarray(m,m+128)));return-1<_&&(p.pos+=v+_+1,y+E.slice(0,_))},i=function(p,g,f,m){const _=p[g+3],v=Math.pow(2,_-128)/255;f[m+0]=p[g+0]*v,f[m+1]=p[g+1]*v,f[m+2]=p[g+2]*v,f[m+3]=1},r=function(p,g,f,m){const _=p[g+3],v=Math.pow(2,_-128)/255;f[m+0]=Ka.toHalfFloat(Math.min(p[g+0]*v,65504)),f[m+1]=Ka.toHalfFloat(Math.min(p[g+1]*v,65504)),f[m+2]=Ka.toHalfFloat(Math.min(p[g+2]*v,65504)),f[m+3]=Ka.toHalfFloat(1)},a=new Uint8Array(e);a.pos=0;const o=function(p){const g=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,f=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,m=/^\s*FORMAT=(\S+)\s*$/,_=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,v={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let y,E;for((p.pos>=p.byteLength||!(y=n(p)))&&t(1,"no header found"),(E=y.match(/^#\?(\S+)/))||t(3,"bad initial token"),v.valid|=1,v.programtype=E[1],v.string+=y+`
`;y=n(p),y!==!1;)if(v.string+=y+`
`,y.charAt(0)!=="#"){if((E=y.match(g))&&(v.gamma=parseFloat(E[1])),(E=y.match(f))&&(v.exposure=parseFloat(E[1])),(E=y.match(m))&&(v.valid|=2,v.format=E[1]),(E=y.match(_))&&(v.valid|=4,v.height=parseInt(E[1],10),v.width=parseInt(E[2],10)),2&v.valid&&4&v.valid)break}else v.comments+=y+`
`;return 2&v.valid||t(3,"missing format specifier"),4&v.valid||t(3,"missing image size specifier"),v}(a),l=o.width,c=o.height,h=function(p,g,f){const m=g;if(m<8||m>32767||p[0]!==2||p[1]!==2||128&p[2])return new Uint8Array(p);m!==(p[2]<<8|p[3])&&t(3,"wrong scanline width");const _=new Uint8Array(4*g*f);_.length||t(4,"unable to allocate buffer space");let v=0,y=0;const E=4*m,S=new Uint8Array(4),C=new Uint8Array(E);let B=f;for(;B>0&&y<p.byteLength;){y+4>p.byteLength&&t(1),S[0]=p[y++],S[1]=p[y++],S[2]=p[y++],S[3]=p[y++],S[0]==2&&S[1]==2&&(S[2]<<8|S[3])==m||t(3,"bad rgbe scanline format");let b,R=0;for(;R<E&&y<p.byteLength;){b=p[y++];const D=b>128;if(D&&(b-=128),(b===0||R+b>E)&&t(3,"bad scanline data"),D){const G=p[y++];for(let N=0;N<b;N++)C[R++]=G}else C.set(p.subarray(y,y+b),R),R+=b,y+=b}const W=m;for(let D=0;D<W;D++){let G=0;_[v]=C[D+G],G+=m,_[v+1]=C[D+G],G+=m,_[v+2]=C[D+G],G+=m,_[v+3]=C[D+G],v+=4}B--}return _}(a.subarray(a.pos),l,c);let u,d,A;switch(this.type){case yt:A=h.length/4;const p=new Float32Array(4*A);for(let f=0;f<A;f++)i(h,4*f,p,4*f);u=p,d=yt;break;case xt:A=h.length/4;const g=new Uint16Array(4*A);for(let f=0;f<A;f++)r(h,4*f,g,4*f);u=g,d=xt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:l,height:c,data:u,header:o.string,gamma:o.gamma,exposure:o.exposure,type:d}}setDataType(e){return this.type=e,this}load(e,t,n,i){return super.load(e,function(r,a){switch(r.type){case yt:case xt:r.colorSpace=et,r.minFilter=We,r.magFilter=We,r.generateMipmaps=!1,r.flipY=!0}t&&t(r,a)},n,i)}}/* @license
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
 */const tC={topLight:{intensity:500,position:[.418,16.199,.3]},room:{position:[-.757,13.219,.717],scale:[31.713,28.305,28.591]},boxes:[{position:[-10.906,2.009,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,.857,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:50,position:[-16.116,14.37,8.208],scale:[.1,2.428,2.739]},{intensity:50,position:[-16.109,18.021,-8.207],scale:[.1,2.425,2.751]},{intensity:17,position:[14.904,12.198,-1.832],scale:[.15,4.265,6.331]},{intensity:43,position:[-.462,8.89,14.52],scale:[4.38,5.441,.088]},{intensity:20,position:[3.235,11.486,-12.541],scale:[2.5,2,.1]},{intensity:100,position:[0,20,0],scale:[1,.1,1]}]},nC={topLight:{intensity:400,position:[.5,14,.5]},room:{position:[0,13.2,0],scale:[31.5,28.5,31.5]},boxes:[{position:[-10.906,-1,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,-.16,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:80,position:[-14,10,8],scale:[.1,2.5,2.5]},{intensity:80,position:[-14,14,-4],scale:[.1,2.5,2.5]},{intensity:23,position:[14,12,0],scale:[.1,5,5]},{intensity:16,position:[0,9,14],scale:[5,5,.1]},{intensity:80,position:[7,8,-14],scale:[2.5,2.5,.1]},{intensity:80,position:[-7,16,-14],scale:[2.5,2.5,.1]},{intensity:1,position:[0,20,0],scale:[.1,.1,.1]}]};class Bm extends Ti{constructor(e){super(),this.position.y=-3.5;const t=new ci;t.deleteAttribute("uv");const n=new Ma({metalness:0,side:1}),i=new Ma({metalness:0}),r=e=="legacy"?tC:nC,a=new xf(16777215,r.topLight.intensity,28,2);a.position.set(...r.topLight.position),this.add(a);const o=new Je(t,n);o.position.set(...r.room.position),o.scale.set(...r.room.scale),this.add(o);for(const l of r.boxes){const c=new Je(t,i);c.position.set(...l.position),c.rotation.set(0,l.rotation,0),c.scale.set(...l.scale),this.add(c)}for(const l of r.lights){const c=new Je(t,this.createAreaLightMaterial(l.intensity));c.position.set(...l.position),c.scale.set(...l.scale),this.add(c)}}createAreaLightMaterial(e){const t=new hn;return t.color.setScalar(e),t}}/* @license
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
 */const Ro=20,iC=/\.hdr(\.js)?$/;class Rm{constructor(e){this.threeRenderer=e,this.lottieLoaderUrl="",this._ldrLoader=null,this._imageLoader=null,this._hdrLoader=null,this._lottieLoader=null,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}ldrLoader(e){return this._ldrLoader==null&&(this._ldrLoader=new Ef),this._ldrLoader.setWithCredentials(e),this._ldrLoader}imageLoader(e){return this._imageLoader==null&&(this._imageLoader=new ZS(this.threeRenderer)),this._imageLoader.setWithCredentials(e),this._imageLoader}hdrLoader(e){return this._hdrLoader==null&&(this._hdrLoader=new eC,this._hdrLoader.setDataType(xt)),this._hdrLoader.setWithCredentials(e),this._hdrLoader}async getLottieLoader(e){if(this._lottieLoader==null){const{LottieLoader:t}=await import(this.lottieLoaderUrl);this._lottieLoader=new t}return this._lottieLoader.setWithCredentials(e),this._lottieLoader}async loadImage(e,t){const n=await new Promise((i,r)=>this.ldrLoader(t).load(e,i,()=>{},r));return n.name=e,n.flipY=!1,n}async loadLottie(e,t,n){const i=await this.getLottieLoader(n);i.setQuality(t);const r=await new Promise((a,o)=>i.load(e,a,()=>{},o));return r.name=e,r}async loadEquirect(e,t=!1,n=()=>{}){try{const i=iC.test(e),r=i?this.hdrLoader(t):this.imageLoader(t),a=await new Promise((o,l)=>r.load(e,c=>{const{renderTarget:h}=c;if(h!=null){const{texture:u}=h;c.dispose(!1),o(u)}else o(c)},c=>{n(c.loaded/c.total*.9)},l));return n(1),a.name=e,a.mapping=ul,i||(a.colorSpace=st),a}finally{n&&n(1)}}async generateEnvironmentMapAndSkybox(e=null,t=null,n=()=>{},i=!1){const r=t!=="legacy";t!=="legacy"&&t!=="neutral"||(t=null),t=Pf(t);let a,o=Promise.resolve(null);e&&(o=this.loadEquirectFromUrl(e,i,n)),a=t?this.loadEquirectFromUrl(t,i,n):e?this.loadEquirectFromUrl(e,i,n):r?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[l,c]=await Promise.all([a,o]);if(l==null)throw new Error("Failed to load environment map.");return{environmentMap:l,skybox:c}}async loadEquirectFromUrl(e,t,n){if(!this.skyboxCache.has(e)){const i=this.loadEquirect(e,t,n);this.skyboxCache.set(e,i)}return this.skyboxCache.get(e)}async GenerateEnvironmentMap(e,t){await((c=0)=>new Promise(h=>setTimeout(h,c)))();const n=this.threeRenderer,i=new ad(256,{generateMipmaps:!1,type:xt,format:ct,colorSpace:et,depthBuffer:!0}),r=new wu(.1,100,i),a=r.renderTarget.texture;a.name=t;const o=n.outputColorSpace,l=n.toneMapping;return n.toneMapping=0,n.outputColorSpace=et,r.update(n,e),this.blurCubemap(i,.04),n.toneMapping=l,n.outputColorSpace=o,a}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new Bm("legacy"),"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new Bm("neutral"),"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(e,t){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(Ro);const i=new ci,r=new Je(i,this.blurMaterial);this.blurScene=new Ti,this.blurScene.add(r)}const n=e.clone();this.halfblur(e,n,t,"latitudinal"),this.halfblur(n,e,t,"longitudinal")}halfblur(e,t,n,i){const r=e.width,a=isFinite(n)?Math.PI/(2*r):2*Math.PI/39,o=n/a,l=isFinite(n)?1+Math.floor(3*o):Ro;l>Ro&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${l} samples when the maximum is set to 20`);const c=[];let h=0;for(let d=0;d<Ro;++d){const A=d/o,p=Math.exp(-A*A/2);c.push(p),d==0?h+=p:d<l&&(h+=2*p)}for(let d=0;d<c.length;d++)c[d]=c[d]/h;const u=this.blurMaterial.uniforms;u.envMap.value=e.texture,u.samples.value=l,u.weights.value=c,u.latitudinal.value=i==="latitudinal",u.dTheta.value=a,new wu(.1,100,t).update(this.threeRenderer,this.blurScene)}getBlurShader(e){const t=new Float32Array(e),n=new T(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:n}},vertexShader:`
      
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
      `,blending:0,depthTest:!1,depthWrite:!1,side:1})}async dispose(){for(const[,e]of this.skyboxCache)(await e).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
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
 */const Nr=[1,.79,.62,.5,.4,.31,.25],Dm="high-performance";class Cn extends Mn{constructor(e){super(),this.loader=new qt(jS),this.width=0,this.height=0,this.dpr=1,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=3,this.avgFrameDuration=50,this.onWebGLContextLost=t=>{this.dispatchEvent({type:"contextlost",sourceEvent:t})},this.onWebGLContextRestored=()=>{var t;(t=this.textureUtils)===null||t===void 0||t.dispose(),this.textureUtils=new Rm(this.threeRenderer);for(const n of this.scenes)n.element[Ml]()},this.dpr=window.devicePixelRatio,this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new cd({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:e.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.setPixelRatio(1),this.threeRenderer.debug={checkShaderErrors:!!e.debug,onShaderError:null},this.threeRenderer.toneMapping=4}catch(t){console.warn(t)}this.arRenderer=new VS(this),this.textureUtils=this.canRender?new Rm(this.threeRenderer):null,qt.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}static get singleton(){return this._singleton||(this._singleton=new Cn({powerPreference:(self.ModelViewerElement||{}).powerPreference||Dm,debug:mp()})),this._singleton}static resetSingleton(){const e=this._singleton.dispose();for(const t of e)t.disconnectedCallback();this._singleton=new Cn({powerPreference:(self.ModelViewerElement||{}).powerPreference||Dm,debug:mp()});for(const t of e)t.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return Nr[this.scaleStep]}set minScale(e){let t=1;for(;t<Nr.length&&!(Nr[t]<e);)++t;this.lastStep=t-1}registerScene(e){this.scenes.add(e),e.forceRescale();const t=new Te;this.threeRenderer.getSize(t),e.canvas.width=t.x,e.canvas.height=t.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((n,i)=>this.render(n,i))}unregisterScene(e){this.scenes.delete(e),this.canvas3D.parentElement===e.canvas.parentElement&&e.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null)}displayCanvas(e){return e.element.modelIsVisible&&!this.multipleScenesVisible?this.canvas3D:e.element[Wu]}countVisibleScenes(){const{canvas3D:e}=this;let t=0,n=null;for(const r of this.scenes){const{element:a}=r;a.modelIsVisible&&r.externalRenderer==null&&++t,e.parentElement===r.canvas.parentElement&&(n=r)}const i=t>1;if(n!=null){const r=i&&!this.multipleScenesVisible,a=!n.element.modelIsVisible;if(r||a){const{width:o,height:l}=this.sceneSize(n);this.copyPixels(n,o,l),e.parentElement.removeChild(e)}}this.multipleScenesVisible=i}updateRendererSize(){var e;const t=window.devicePixelRatio;if(t!==this.dpr)for(const r of this.scenes){const{element:a}=r;a[jr](a.getBoundingClientRect())}let n=0,i=0;for(const r of this.scenes)n=Math.max(n,r.width),i=Math.max(i,r.height);if(n!==this.width||i!==this.height||t!==this.dpr){this.width=n,this.height=i,this.dpr=t,n=Math.ceil(n*t),i=Math.ceil(i*t),this.canRender&&this.threeRenderer.setSize(n,i,!1);for(const r of this.scenes){const{canvas:a}=r;a.width=n,a.height=i,r.forceRescale(),(e=r.effectRenderer)===null||e===void 0||e.setSize(n,i)}}}updateRendererScale(e){const t=this.scaleStep;this.avgFrameDuration+=Un(.2*(e-this.avgFrameDuration),-5,5),this.avgFrameDuration>60?++this.scaleStep:this.avgFrameDuration<40&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),t!==this.scaleStep&&(this.avgFrameDuration=50)}shouldRender(e){if(e.shouldRender())e.scaleStep!=this.scaleStep&&(e.scaleStep=this.scaleStep,this.rescaleCanvas(e));else{if(e.scaleStep==0)return!1;e.scaleStep=0,this.rescaleCanvas(e)}return!0}rescaleCanvas(e){const t=Nr[e.scaleStep],n=Math.ceil(this.width/t),i=Math.ceil(this.height/t),{style:r}=e.canvas;r.width=`${n}px`,r.height=`${i}px`,this.canvas3D.style.width=`${n}px`,this.canvas3D.style.height=`${i}px`;const a=this.dpr*t,o=t<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";e.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:a,minimumDpr:this.dpr*Nr[this.lastStep],pixelWidth:Math.ceil(e.width*a),pixelHeight:Math.ceil(e.height*a),reason:o}}))}sceneSize(e){const{dpr:t}=this,n=Nr[e.scaleStep];return{width:Math.min(Math.ceil(e.width*n*t),this.canvas3D.width),height:Math.min(Math.ceil(e.height*n*t),this.canvas3D.height)}}copyPixels(e,t,n){const i=e.context;i!=null?(i.clearRect(0,0,t,n),i.drawImage(this.canvas3D,0,0,t,n,0,0,t,n),e.canvas.classList.add("show")):console.log("could not acquire 2d context")}orderedScenes(){const e=[];for(const t of[!1,!0])for(const n of this.scenes)n.element.modelIsVisible===t&&e.push(n);return e}get isPresenting(){return this.arRenderer.isPresenting}preRender(e,t,n){const{element:i,exposure:r,toneMapping:a}=e;i[Bn](t,n);const o=typeof r=="number"&&!Number.isNaN(r),l=i.environmentImage,c=i.skyboxImage,h=a===7&&(l==="neutral"||l==="legacy"||!l&&!c);this.threeRenderer.toneMappingExposure=(o?r:1)*(h?1.3:1)}render(e,t){if(t!=null)return void this.arRenderer.onWebXRFrame(e,t);const n=e-this.lastTick;if(this.lastTick=e,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(n),this.renderedLastFrame=!1);const{canvas3D:i}=this;for(const r of this.orderedScenes()){const{element:a}=r;if(!a.loaded||!a.modelIsVisible&&r.renderCount>0||(this.preRender(r,e,n),!this.shouldRender(r)))continue;if(r.externalRenderer!=null){const c=r.getCamera();c.updateMatrix();const{matrix:h,projectionMatrix:u}=c,d=h.elements.slice(),A=r.getTarget();d[12]+=A.x,d[13]+=A.y,d[14]+=A.z,r.externalRenderer.render({viewMatrix:d,projectionMatrix:u.elements});continue}if(!a.modelIsVisible&&!this.multipleScenesVisible)for(const c of this.scenes)c.element.modelIsVisible&&c.queueRender();const{width:o,height:l}=this.sceneSize(r);r.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-l,o,l),r.effectRenderer!=null?r.effectRenderer.render(n):(this.threeRenderer.autoClear=!0,this.threeRenderer.toneMapping=r.toneMapping,this.threeRenderer.render(r,r.camera)),this.multipleScenesVisible||!r.element.modelIsVisible&&r.renderCount===0?this.copyPixels(r,o,l):i.parentElement!==r.canvas.parentElement&&(r.canvas.parentElement.appendChild(i),r.canvas.classList.remove("show")),r.hasRendered(),++r.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const e=[];for(const t of this.scenes)e.push(t.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),e}}/* @license
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
 */const De=Symbol("correlatedObjects"),qe=Symbol("onUpdate");class Fa{constructor(e,t){this[qe]=e,this[De]=t}}/* @license
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
 */const Lm=new hn,rC=new On(2,2);let sC=0;const Wt=Symbol("threeTexture"),Um=Symbol("threeTextures");class aC extends Fa{get[Wt](){var e;return(e=this[De])===null||e===void 0?void 0:e.values().next().value}get[Um](){return this[De]}constructor(e,t){super(e,new Set(t?[t]:[])),this[Wt].image.src||(this[Wt].image.src=t.name?t.name:"adhoc_image"+sC++),this[Wt].image.name||(this[Wt].image.name=t&&t.image&&t.image.src?t.image.src.split("/").pop():"adhoc_image")}get name(){return this[Wt].image.name||""}get uri(){return this[Wt].image.src}get bufferView(){return this[Wt].image.bufferView}get element(){const e=this[Wt];if(e&&(e.isCanvasTexture||e.isVideoTexture))return e.image}get animation(){const e=this[Wt];if(e&&e.isCanvasTexture&&e.animation)return e.animation}get type(){return this.uri!=null?"external":"embedded"}set name(e){for(const t of this[Um])t.image.name=e}update(){const e=this[Wt];e&&e.isCanvasTexture&&!e.animation&&(this[Wt].needsUpdate=!0,this[qe]())}async createThumbnail(e,t){const n=new Ti;Lm.map=this[Wt];const i=new Je(rC,Lm);n.add(i);const r=new Ss(-1,1,1,-1,0,1),{threeRenderer:a}=Cn.singleton,o=new dn(e,t);a.setRenderTarget(o),a.render(n,r),a.setRenderTarget(null);const l=new Uint8Array(e*t*4);a.readRenderTargetPixels(o,0,0,e,t,l),wi.width=e,wi.height=t;const c=wi.getContext("2d"),h=c.createImageData(e,t);return h.data.set(l),c.putImageData(h,0,0),new Promise(async(u,d)=>{wi.toBlob(A=>{if(!A)return d("Failed to capture thumbnail.");u(URL.createObjectURL(A))},"image/png")})}}var Rt,Mi;(function(s){s[s.Nearest=9728]="Nearest",s[s.Linear=9729]="Linear",s[s.NearestMipmapNearest=9984]="NearestMipmapNearest",s[s.LinearMipmapNearest=9985]="LinearMipmapNearest",s[s.NearestMipmapLinear=9986]="NearestMipmapLinear",s[s.LinearMipmapLinear=9987]="LinearMipmapLinear"})(Rt||(Rt={})),function(s){s[s.ClampToEdge=33071]="ClampToEdge",s[s.MirroredRepeat=33648]="MirroredRepeat",s[s.Repeat=10497]="Repeat"}(Mi||(Mi={}));/* @license
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
 */const Pm=new Map([[Mi.Repeat,Qn],[Mi.ClampToEdge,Et],[Mi.MirroredRepeat,cs]]),ku=new Map([[Qn,Mi.Repeat],[Et,Mi.ClampToEdge],[cs,Mi.MirroredRepeat]]),oC=new Map([[Rt.Nearest,Ut],[Rt.Linear,We],[Rt.NearestMipmapNearest,Nl],[Rt.LinearMipmapNearest,ns],[Rt.NearestMipmapLinear,ar],[Rt.LinearMipmapLinear,cn]]),y0=new Map([[Ut,Rt.Nearest],[We,Rt.Linear],[Nl,Rt.NearestMipmapNearest],[ns,Rt.LinearMipmapNearest],[ar,Rt.NearestMipmapLinear],[cn,Rt.LinearMipmapLinear]]),lC=new Map([[Rt.Nearest,Ut],[Rt.Linear,We]]),E0=new Map([[Ut,Rt.Nearest],[We,Rt.Linear]]),cC=s=>y0.has(s),hC=s=>E0.has(s),uC=s=>ku.has(s),Zn=Symbol("threeTexture"),Nm=Symbol("threeTextures"),_i=Symbol("setProperty");class dC extends Fa{get[Zn](){var e;return(e=this[De])===null||e===void 0?void 0:e.values().next().value}get[Nm](){return this[De]}constructor(e,t){super(e,new Set(t?[t]:[]))}get name(){return this[Zn].name||""}get minFilter(){return y0.get(this[Zn].minFilter)}get magFilter(){return E0.get(this[Zn].magFilter)}get wrapS(){return ku.get(this[Zn].wrapS)}get wrapT(){return ku.get(this[Zn].wrapT)}get rotation(){return this[Zn].rotation}get scale(){return qu(this[Zn].repeat)}get offset(){return qu(this[Zn].offset)}setMinFilter(e){this[_i]("minFilter",oC.get(e))}setMagFilter(e){this[_i]("magFilter",lC.get(e))}setWrapS(e){this[_i]("wrapS",Pm.get(e))}setWrapT(e){this[_i]("wrapT",Pm.get(e))}setRotation(e){e==null&&(e=0),this[_i]("rotation",e)}setScale(e){e==null&&(e={u:1,v:1}),this[_i]("repeat",new Te(e.u,e.v))}setOffset(e){e==null&&(e={u:0,v:0}),this[_i]("offset",new Te(e.u,e.v))}[_i](e,t){if(((n,i)=>{switch(n){case"minFilter":return cC(i);case"magFilter":return hC(i);case"wrapS":case"wrapT":return uC(i);case"rotation":case"repeat":case"offset":return!0;default:throw new Error(`Cannot configure property "${n}" on Sampler`)}})(e,t))for(const n of this[Nm])n[e]=t,n.needsUpdate=!0;this[qe]()}}/* @license
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
 */const Fm=Symbol("image"),Qm=Symbol("sampler"),Om=Symbol("threeTexture");class x0 extends Fa{constructor(e,t){super(e,new Set(t?[t]:[])),this[Qm]=new dC(e,t),this[Fm]=new aC(e,t)}get[Om](){var e;return(e=this[De])===null||e===void 0?void 0:e.values().next().value}get name(){return this[Om].name||""}set name(e){for(const t of this[De])t.name=e}get sampler(){return this[Qm]}get source(){return this[Fm]}}/* @license
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
 */var S0,C0,I0;const $i=Symbol("texture"),Zi=Symbol("transform"),yh=Symbol("materials"),km=Symbol("usage"),Fr=Symbol("onUpdate"),ha=Symbol("activeVideo");var xe;(function(s){s[s.Base=0]="Base",s[s.MetallicRoughness=1]="MetallicRoughness",s[s.Normal=2]="Normal",s[s.Occlusion=3]="Occlusion",s[s.Emissive=4]="Emissive",s[s.Clearcoat=5]="Clearcoat",s[s.ClearcoatRoughness=6]="ClearcoatRoughness",s[s.ClearcoatNormal=7]="ClearcoatNormal",s[s.SheenColor=8]="SheenColor",s[s.SheenRoughness=9]="SheenRoughness",s[s.Transmission=10]="Transmission",s[s.Thickness=11]="Thickness",s[s.Specular=12]="Specular",s[s.SpecularColor=13]="SpecularColor",s[s.Iridescence=14]="Iridescence",s[s.IridescenceThickness=15]="IridescenceThickness",s[s.Anisotropy=16]="Anisotropy"})(xe||(xe={}));class Zr{constructor(e,t,n,i){this[S0]=null,this[C0]={rotation:0,scale:new Te(1,1),offset:new Te(0,0)},this[I0]=!1,n&&(this[Zi].rotation=n.rotation,this[Zi].scale.copy(n.repeat),this[Zi].offset.copy(n.offset),this[$i]=new x0(e,n)),this[Fr]=e,this[yh]=i,this[km]=t}get texture(){return this[$i]}setTexture(e){var t,n;const i=e!=null?e.source[Wt]:null,r=(t=this[$i])===null||t===void 0?void 0:t.source[Wt];if(r!=null&&r.isVideoTexture?this[ha]=!1:!((n=this[$i])===null||n===void 0)&&n.source.animation&&this[$i].source.animation.removeEventListener("enterFrame",this[Fr]),this[$i]=e,i!=null&&i.isVideoTexture){const o=i.image;if(this[ha]=!0,o.requestVideoFrameCallback!=null){const l=()=>{this[ha]&&(this[Fr](),o.requestVideoFrameCallback(l))};o.requestVideoFrameCallback(l)}else{const l=()=>{this[ha]&&(this[Fr](),requestAnimationFrame(l))};requestAnimationFrame(l)}}else(e==null?void 0:e.source.animation)!=null&&e.source.animation.addEventListener("enterFrame",this[Fr]);let a=st;if(this[yh])for(const o of this[yh]){switch(this[km]){case xe.Base:o.map=i;break;case xe.MetallicRoughness:a=et,o.metalnessMap=i,o.roughnessMap=i;break;case xe.Normal:a=et,o.normalMap=i;break;case xe.Occlusion:a=et,o.aoMap=i;break;case xe.Emissive:o.emissiveMap=i;break;case xe.Clearcoat:o.clearcoatMap=i;break;case xe.ClearcoatRoughness:o.clearcoatRoughnessMap=i;break;case xe.ClearcoatNormal:o.clearcoatNormalMap=i;break;case xe.SheenColor:o.sheenColorMap=i;break;case xe.SheenRoughness:o.sheenRoughnessMap=i;break;case xe.Transmission:o.transmissionMap=i;break;case xe.Thickness:o.thicknessMap=i;break;case xe.Specular:o.specularIntensityMap=i;break;case xe.SpecularColor:o.specularColorMap=i;break;case xe.Iridescence:o.iridescenceMap=i;break;case xe.IridescenceThickness:o.iridescenceThicknessMap=i;break;case xe.Anisotropy:o.anisotropyMap=i}o.needsUpdate=!0}i&&(i.colorSpace=a,i.rotation=this[Zi].rotation,i.repeat=this[Zi].scale,i.offset=this[Zi].offset),this[Fr]()}}S0=$i,C0=Zi,I0=ha;/* @license
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
 */const $s=Symbol("threeMaterial"),Do=Symbol("threeMaterials"),Gm=Symbol("baseColorTexture"),Hm=Symbol("metallicRoughnessTexture");class AC extends Fa{constructor(e,t){super(e,t);const{map:n,metalnessMap:i}=t.values().next().value;this[Gm]=new Zr(e,xe.Base,n,t),this[Hm]=new Zr(e,xe.MetallicRoughness,i,t)}get[Do](){return this[De]}get[$s](){var e;return(e=this[De])===null||e===void 0?void 0:e.values().next().value}get baseColorFactor(){const e=[0,0,0,this[$s].opacity];return this[$s].color.toArray(e),e}get metallicFactor(){return this[$s].metalness}get roughnessFactor(){return this[$s].roughness}get baseColorTexture(){return this[Gm]}get metallicRoughnessTexture(){return this[Hm]}setBaseColorFactor(e){const t=new fe;e instanceof Array?t.fromArray(e):t.set(e);for(const n of this[Do])n.color.set(t),e instanceof Array&&e.length>3?n.opacity=e[3]:(e=[0,0,0,n.opacity],t.toArray(e));this[qe]()}setMetallicFactor(e){for(const t of this[Do])t.metalness=e;this[qe]()}setRoughnessFactor(e){for(const t of this[Do])t.roughness=e;this[qe]()}}/* @license
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
 */var zm,Vm;const Wm=Symbol("pbrMetallicRoughness"),qm=Symbol("normalTexture"),Xm=Symbol("occlusionTexture"),jm=Symbol("emissiveTexture"),it=Symbol("backingThreeMaterial"),Ym=Symbol("applyAlphaCutoff"),Eh=Symbol("getAlphaMode"),Qr=Symbol("lazyLoadGLTFInfo"),xh=Symbol("initialize"),Gu=Symbol("getLoadedMaterial"),Ae=Symbol("ensureMaterialIsLoaded"),Km=Symbol("gltfIndex"),ua=Symbol("setActive"),ss=Symbol("variantIndices"),Sh=Symbol("isActive"),Jm=Symbol("modelVariants"),Ch=Symbol("name"),Kt=Symbol("pbrTextures");class Ih extends Fa{constructor(e,t,n,i,r,a,o=void 0){super(e,r),this[zm]=new Set,this[Vm]=new Map,this[Km]=t,this[Sh]=n,this[Jm]=i,this[Ch]=a,o==null?this[xh]():this[Qr]=o}get[(zm=ss,Vm=Kt,it)](){return this[De].values().next().value}[xh](){const e=this[qe],t=this[De];this[Wm]=new AC(e,t);const{normalMap:n,aoMap:i,emissiveMap:r}=t.values().next().value;this[qm]=new Zr(e,xe.Normal,n,t),this[Xm]=new Zr(e,xe.Occlusion,i,t),this[jm]=new Zr(e,xe.Emissive,r,t);const a=o=>{this[Kt].set(o,new Zr(e,o,null,t))};a(xe.Clearcoat),a(xe.ClearcoatRoughness),a(xe.ClearcoatNormal),a(xe.SheenColor),a(xe.SheenRoughness),a(xe.Transmission),a(xe.Thickness),a(xe.Specular),a(xe.SpecularColor),a(xe.Iridescence),a(xe.IridescenceThickness),a(xe.Anisotropy)}async[Gu](){if(this[Qr]!=null){const e=await this[Qr].doLazyLoad();return this[xh](),this[Qr]=void 0,this.ensureLoaded=async()=>{},e}return null}colorFromRgb(e){const t=new fe;return e instanceof Array?t.fromArray(e):t.set(e),t}[Ae](){if(this[Qr]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[Gu]()}get isLoaded(){return this[Qr]==null}get isActive(){return this[Sh]}[ua](e){this[Sh]=e}get name(){return this[Ch]||""}set name(e){if(this[Ch]=e,this[De]!=null)for(const t of this[De])t.name=e}get pbrMetallicRoughness(){return this[Ae](),this[Wm]}get normalTexture(){return this[Ae](),this[qm]}get occlusionTexture(){return this[Ae](),this[Xm]}get emissiveTexture(){return this[Ae](),this[jm]}get emissiveFactor(){return this[Ae](),this[it].emissive.toArray()}get index(){return this[Km]}hasVariant(e){const t=this[Jm].get(e);return t!=null&&this[ss].has(t.index)}setEmissiveFactor(e){this[Ae]();const t=this.colorFromRgb(e);for(const n of this[De])n.emissive.set(t);this[qe]()}[Eh](){return this[it].transparent?"BLEND":this[it].alphaTest>0?"MASK":"OPAQUE"}[Ym](){this[Ae]();for(const e of this[De])this[Eh]()==="MASK"?e.alphaTest==null&&(e.alphaTest=.5):e.alphaTest=void 0,e.needsUpdate=!0}setAlphaCutoff(e){this[Ae]();for(const t of this[De])t.alphaTest=e,t.needsUpdate=!0;this[Ym](),this[qe]()}getAlphaCutoff(){return this[Ae](),this[it].alphaTest}setDoubleSided(e){this[Ae]();for(const t of this[De])t.side=e?2:0,t.needsUpdate=!0;this[qe]()}getDoubleSided(){return this[Ae](),this[it].side==2}setAlphaMode(e){this[Ae]();const t=(n,i)=>{n.transparent=i,n.depthWrite=!i};for(const n of this[De])t(n,e==="BLEND"),n.alphaTest=e==="MASK"?.5:void 0,n.needsUpdate=!0;this[qe]()}getAlphaMode(){return this[Ae](),this[Eh]()}get emissiveStrength(){return this[Ae](),this[it].emissiveIntensity}setEmissiveStrength(e){this[Ae]();for(const t of this[De])t.emissiveIntensity=e;this[qe]()}get clearcoatFactor(){return this[Ae](),this[it].clearcoat}get clearcoatRoughnessFactor(){return this[Ae](),this[it].clearcoatRoughness}get clearcoatTexture(){return this[Ae](),this[Kt].get(xe.Clearcoat)}get clearcoatRoughnessTexture(){return this[Ae](),this[Kt].get(xe.ClearcoatRoughness)}get clearcoatNormalTexture(){return this[Ae](),this[Kt].get(xe.ClearcoatNormal)}get clearcoatNormalScale(){return this[Ae](),this[it].clearcoatNormalScale.x}setClearcoatFactor(e){this[Ae]();for(const t of this[De])t.clearcoat=e;this[qe]()}setClearcoatRoughnessFactor(e){this[Ae]();for(const t of this[De])t.clearcoatRoughness=e;this[qe]()}setClearcoatNormalScale(e){this[Ae]();for(const t of this[De])t.clearcoatNormalScale=new Te(e,e);this[qe]()}get ior(){return this[Ae](),this[it].ior}setIor(e){this[Ae]();for(const t of this[De])t.ior=e;this[qe]()}get sheenColorFactor(){return this[Ae](),this[it].sheenColor.toArray()}get sheenColorTexture(){return this[Ae](),this[Kt].get(xe.SheenColor)}get sheenRoughnessFactor(){return this[Ae](),this[it].sheenRoughness}get sheenRoughnessTexture(){return this[Ae](),this[Kt].get(xe.SheenRoughness)}setSheenColorFactor(e){this[Ae]();const t=this.colorFromRgb(e);for(const n of this[De])n.sheenColor.set(t),n.sheen=1;this[qe]()}setSheenRoughnessFactor(e){this[Ae]();for(const t of this[De])t.sheenRoughness=e,t.sheen=1;this[qe]()}get transmissionFactor(){return this[Ae](),this[it].transmission}get transmissionTexture(){return this[Ae](),this[Kt].get(xe.Transmission)}setTransmissionFactor(e){this[Ae]();for(const t of this[De])t.transmission=e;this[qe]()}get thicknessFactor(){return this[Ae](),this[it].thickness}get thicknessTexture(){return this[Ae](),this[Kt].get(xe.Thickness)}get attenuationDistance(){return this[Ae](),this[it].attenuationDistance}get attenuationColor(){return this[Ae](),this[it].attenuationColor.toArray()}setThicknessFactor(e){this[Ae]();for(const t of this[De])t.thickness=e;this[qe]()}setAttenuationDistance(e){this[Ae]();for(const t of this[De])t.attenuationDistance=e;this[qe]()}setAttenuationColor(e){this[Ae]();const t=this.colorFromRgb(e);for(const n of this[De])n.attenuationColor.set(t);this[qe]()}get specularFactor(){return this[Ae](),this[it].specularIntensity}get specularTexture(){return this[Ae](),this[Kt].get(xe.Specular)}get specularColorFactor(){return this[Ae](),this[it].specularColor.toArray()}get specularColorTexture(){return this[Ae](),this[Kt].get(xe.SheenColor)}setSpecularFactor(e){this[Ae]();for(const t of this[De])t.specularIntensity=e;this[qe]()}setSpecularColorFactor(e){this[Ae]();const t=this.colorFromRgb(e);for(const n of this[De])n.specularColor.set(t);this[qe]()}get iridescenceFactor(){return this[Ae](),this[it].iridescence}get iridescenceTexture(){return this[Ae](),this[Kt].get(xe.Iridescence)}get iridescenceIor(){return this[Ae](),this[it].iridescenceIOR}get iridescenceThicknessMinimum(){return this[Ae](),this[it].iridescenceThicknessRange[0]}get iridescenceThicknessMaximum(){return this[Ae](),this[it].iridescenceThicknessRange[1]}get iridescenceThicknessTexture(){return this[Ae](),this[Kt].get(xe.IridescenceThickness)}setIridescenceFactor(e){this[Ae]();for(const t of this[De])t.iridescence=e;this[qe]()}setIridescenceIor(e){this[Ae]();for(const t of this[De])t.iridescenceIOR=e;this[qe]()}setIridescenceThicknessMinimum(e){this[Ae]();for(const t of this[De])t.iridescenceThicknessRange[0]=e;this[qe]()}setIridescenceThicknessMaximum(e){this[Ae]();for(const t of this[De])t.iridescenceThicknessRange[1]=e;this[qe]()}get anisotropyStrength(){return this[Ae](),this[it].anisotropy}get anisotropyRotation(){return this[Ae](),this[it].anisotropyRotation}get anisotropyTexture(){return this[Ae](),this[Kt].get(xe.Anisotropy)}setAnisotropyStrength(e){this[Ae]();for(const t of this[De])t.anisotropy=e;this[qe]()}setAnisotropyRotation(e){this[Ae]();for(const t of this[De])t.anisotropyRotation=e;this[qe]()}}class w0{constructor(e){this.name="",this.children=new Array,this.name=e}}class wh extends w0{constructor(e,t,n,i){super(e.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=e;const{gltf:r,threeGLTF:a,threeObjectMap:o}=i;this.parser=a.parser,this.modelVariants=n,this.mesh.userData.variantData=n;const l=o.get(e.material);l.materials!=null?this.initialMaterialIdx=this.activeMaterialIdx=l.materials:console.error(`Primitive (${e.name}) missing initial material reference.`);const c=e.userData.associations||{};if(c.meshes==null)return void console.error("Mesh is missing primitive index association");const h=((r.meshes||[])[c.meshes].primitives||[])[c.primitives];if(h!=null){if(h.material!=null)this.materials.set(h.material,t[h.material]);else{const u=t.findIndex(d=>d.name==="Default");u>=0?this.materials.set(u,t[u]):console.warn("gltfPrimitive has no material!")}if(h.extensions&&h.extensions.KHR_materials_variants){const u=h.extensions.KHR_materials_variants,d=a.parser.json.extensions.KHR_materials_variants.variants;for(const A of u.mappings){const p=t[A.material];this.materials.set(A.material,p);for(const g of A.variants){const{name:f}=d[g];this.variantToMaterialMap.set(g,p),p[ss].add(g),n.has(f)||n.set(f,{name:f,index:g})}}}}else console.error("Mesh primitive definition is missing.")}async setActiveMaterial(e){const t=this.materials.get(e);if(e!==this.activeMaterialIdx){const n=t[De],i=await t[Gu]();this.mesh.material=i??n.values().next().value,this.parser.assignFinalMaterial(this.mesh),n.add(this.mesh.material),this.activeMaterialIdx=e}return this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(e){return this.materials.get(e)}async enableVariant(e){if(e==null)return this.setActiveMaterial(this.initialMaterialIdx);if(this.variantToMaterialMap!=null&&this.modelVariants.has(e)){const t=this.modelVariants.get(e);return this.enableVariantHelper(t.index)}return null}async enableVariantHelper(e){if(this.variantToMaterialMap!=null&&e!=null){const t=this.variantToMaterialMap.get(e);if(t!=null)return this.setActiveMaterial(t.index)}return null}async instantiateVariants(){if(this.variantToMaterialMap!=null)for(const e of this.variantToMaterialMap.keys()){const t=this.mesh.userData.variantMaterials.get(e);if(t.material!=null)continue;const n=await this.enableVariantHelper(e);n!=null&&(t.material=n)}}get variantInfo(){return this.variantToMaterialMap}addVariant(e,t){if(!this.ensureVariantIsUnused(t))return!1;this.modelVariants.has(t)||this.modelVariants.set(t,{name:t,index:this.modelVariants.size});const n=this.modelVariants.get(t).index;return e[ss].add(n),this.variantToMaterialMap.set(n,e),this.materials.set(e.index,e),this.updateVariantUserData(n,e),!0}deleteVariant(e){if(this.variantInfo.has(e)){this.variantInfo.delete(e);const t=this.mesh.userData.variantMaterials;t!=null&&t.delete(e)}}updateVariantUserData(e,t){t[ss].add(e),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(e,{material:t[De].values().next().value,gltfMaterialIndex:t.index})}ensureVariantIsUnused(e){const t=this.modelVariants.get(e);return t==null||!this.variantInfo.has(t.index)||(console.warn(`Primitive cannot add variant '${e}' for this material, it already exists.`),!1)}}/* @license
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
 */var $m,Zm,eg,tg,ng,ig;const qi=Symbol("materials"),Lo=Symbol("hierarchy"),rg=Symbol("roots"),ei=Symbol("primitives"),M0=Symbol("prepareVariantsForExport"),b0=Symbol("switchVariant"),T0=Symbol("materialFromPoint"),Hu=Symbol("nodeFromPoint"),B0=Symbol("nodeFromIndex"),Ft=Symbol("variantData"),zu=Symbol("availableVariants"),Mh=Symbol("modelOnUpdate"),sg=Symbol("cloneMaterial");class pC{constructor(e,t,n,i){this.gltf=e,this.gltfElementMap=t,this.mapKey=n,this.doLazyLoad=i}}class mC{constructor(e,t=()=>{}){this[$m]=new Array,this[Zm]=new Array,this[eg]=new Array,this[tg]=new Array,this[ng]=()=>{},this[ig]=new Map,this[Mh]=t;const{gltf:n,threeGLTF:i,gltfElementMap:r}=e;for(const[l,c]of n.materials.entries()){const h=r.get(c);if(h!=null)this[qi].push(new Ih(t,l,!0,this[Ft],h,c.name));else{const u=(n.materials||[])[l],d=new Set;r.set(u,d);const A=async()=>{const p=await i.parser.getDependency("material",l);return d.add(p),p};this[qi].push(new Ih(t,l,!1,this[Ft],d,c.name,new pC(n,r,u,A)))}}const a=new Map,o=new Array;for(const l of i.scene.children)o.push(l);for(;o.length>0;){const l=o.pop();let c=null;l instanceof Je?(c=new wh(l,this.materials,this[Ft],e),this[ei].push(c)):c=new w0(l.name);const h=a.get(l);h!=null?h.children.push(c):this[rg].push(c),this[Lo].push(c);for(const u of l.children)o.push(u),a.set(l,c)}}get materials(){return this[qi]}[($m=qi,Zm=Lo,eg=rg,tg=ei,ng=Mh,ig=Ft,zu)](){const e=Array.from(this[Ft].values());return e.sort((t,n)=>t.index-n.index),e.map(t=>t.name)}getMaterialByName(e){const t=this[qi].filter(n=>n.name===e);return t.length>0?t[0]:null}[B0](e,t){const n=this[Lo].find(i=>{if(i instanceof wh){const{meshes:r,primitives:a}=i.mesh.userData.associations;if(r==e&&a==t)return!0}return!1});return n??null}[Hu](e){return this[Lo].find(t=>t instanceof wh&&t.mesh===e.object)}[T0](e){return this[Hu](e).getActiveMaterial()}async[b0](e){for(const t of this[ei])await t.enableVariant(e);for(const t of this.materials)t[ua](!1);for(const t of this[ei])this.materials[t.getActiveMaterial().index][ua](!0)}async[M0](){const e=new Array;for(const t of this[ei])e.push(t.instantiateVariants());await Promise.all(e)}[sg](e,t){const n=this.materials[e];n.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const i=n[De],r=new Set;for(const[o,l]of i.entries()){const c=l.clone();c.name=t+(i.size>1?"_inst"+o:""),r.add(c)}const a=new Ih(this[Mh],this[qi].length,!1,this[Ft],r,t);return this[qi].push(a),a}createMaterialInstanceForVariant(e,t,n,i=!0){let r=null;for(const a of this[ei]){const o=this[Ft].get(n);o!=null&&a.variantInfo.has(o.index)||a.getMaterial(e)!=null&&(this.hasVariant(n)||this.createVariant(n),r==null&&(r=this[sg](e,t)),a.addVariant(r,n))}if(i&&r!=null){r[ua](!0),this.materials[e][ua](!1);for(const a of this[ei])a.enableVariant(n)}return r}createVariant(e){this[Ft].has(e)?console.warn(`Variant '${e}'' already exists`):this[Ft].set(e,{name:e,index:this[Ft].size})}hasVariant(e){return this[Ft].has(e)}setMaterialToVariant(e,t){if(this[zu]().find(n=>n===t)!=null)if(e<0||e>=this.materials.length)console.error("setMaterialToVariant(): materialIndex is out of bounds.");else for(const n of this[ei]){const i=n.getMaterial(e);i!=null&&n.addVariant(i,t)}else console.warn(`Can't add material to '${t}', the variant does not exist.'`)}updateVariantName(e,t){const n=this[Ft].get(e);n!=null&&(n.name=t,this[Ft].set(t,n),this[Ft].delete(e))}deleteVariant(e){const t=this[Ft].get(e);if(t!=null){for(const n of this.materials)n.hasVariant(e)&&n[ss].delete(t.index);for(const n of this[ei])n.deleteVariant(t.index);this[Ft].delete(e)}}}/* @license
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
 */var bh=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const ol=Symbol("currentGLTF"),ll=Symbol("originalGltfJson"),er=Symbol("model"),Th=Symbol("getOnUpdateMethod"),Zs=Symbol("buildTexture");/* @license
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
 */class gC extends Je{constructor(){super(void 0,new hn({depthWrite:!1})),this.height=0,this.radius=0,this.resolution=0,this.userData.noHit=!0}get map(){return this.material.map}set map(e){this.material.map=e}isUsable(){return this.height>0&&this.radius>0&&this.geometry!=null&&this.map!=null}updateGeometry(e=this.height,t=this.radius,n=128){e==this.height&&t==this.radius&&n==this.resolution||(this.height=e,this.radius=t,this.resolution=n,e>0&&t>0&&(this.geometry.dispose(),this.geometry=function(i,r,a){const o=new dd(r,2*a,a);o.scale(1,1,-1);const l=o.getAttribute("position"),c=new T;for(let h=0;h<l.count;++h)if(c.fromBufferAttribute(l,h),c.y<0){const u=3*-i/2,d=c.y<u?-i/c.y:1-c.y*c.y/(3*u*u);c.multiplyScalar(d),c.toArray(l.array,3*h)}return l.needsUpdate=!0,o}(e,t,n)))}}const Uo=new T,Bh=new T,Rh=new T,Po=new be,ag=new rn,og=new Yt;class R0 extends Bx{constructor(e){super(document.createElement("div")),this.normal=new T(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=e.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(e.position),this.updateNormal(e.normal),this.surface=e.surface}get facingCamera(){return!this.element.classList.contains("hide")}show(){this.facingCamera&&this.initialized||this.updateVisibility(!0)}hide(){!this.facingCamera&&this.initialized||this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(e){if(e==null)return;const t=oi(e)[0].terms;for(let n=0;n<3;++n)this.position.setComponent(n,Nn(t[n]).number);this.updateMatrixWorld()}updateNormal(e){if(e==null)return;const t=oi(e)[0].terms;for(let n=0;n<3;++n)this.normal.setComponent(n,t[n].number)}updateSurface(){const{mesh:e,tri:t,bary:n}=this;if(e==null||t==null||n==null)return;e.getVertexPosition(t.x,Uo),e.getVertexPosition(t.y,Bh),e.getVertexPosition(t.z,Rh),Uo.toArray(Po.elements,0),Bh.toArray(Po.elements,3),Rh.toArray(Po.elements,6),this.position.copy(n).applyMatrix3(Po);const i=this.parent;i.worldToLocal(e.localToWorld(this.position)),ag.set(Uo,Bh,Rh),ag.getNormal(this.normal).transformDirection(e.matrixWorld);const r=i.parent;og.setFromAxisAngle(Uo.set(0,1,0),-r.rotation.y),this.normal.applyQuaternion(og)}orient(e){this.pivot.style.transform=`rotate(${e}rad)`}updateVisibility(e){this.element.classList.toggle("hide",!e),this.slot.assignedNodes().forEach(t=>{if(t.nodeType!==Node.ELEMENT_NODE)return;const n=t,i=n.dataset.visibilityAttribute;if(i!=null){const r=`data-${i}`;n.toggleAttribute(r,e)}n.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:e}}))}),this.initialized=!0}}const fC={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

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

		}`},vC={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

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

		}`};function lg(s,e,t){return(1-t)*s+t*e}/* @license
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
 */class _C extends tt{constructor(e,t,n){super(),this.camera=new Ss,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new df,this.horizontalBlurMaterial=new Jt(fC),this.verticalBlurMaterial=new Jt(vC),this.intensity=0,this.softness=1,this.boundingBox=new jt,this.size=new T,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:i}=this;i.rotation.x=Math.PI/2,i.left=-.5,i.right=.5,i.bottom=-.5,i.top=.5,this.add(i);const r=new On,a=new hn({opacity:1,transparent:!0,side:1});this.floor=new Je(r,a),this.floor.userData.noHit=!0,i.add(this.floor),this.blurPlane=new Je(r),this.blurPlane.visible=!1,i.add(this.blurPlane),e.target.add(this),this.depthMaterial.onBeforeCompile=function(o){o.fragmentShader=o.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(e,t,n)}setScene(e,t,n){const{boundingBox:i,size:r,rotation:a,position:o}=this;if(this.isAnimated=e.animationNames.length>0,this.boundingBox.copy(e.boundingBox),this.size.copy(e.size),this.maxDimension=Math.max(r.x,r.y,r.z)*(this.isAnimated?2:1),this.boundingBox.getCenter(o),n==="back"){const{min:l,max:c}=i;[l.y,l.z]=[l.z,l.y],[c.y,c.z]=[c.z,c.y],[r.y,r.z]=[r.z,r.y],a.x=Math.PI/2,a.y=Math.PI}else a.x=0,a.y=0;if(this.isAnimated){const l=i.min.y,c=i.max.y;r.y=this.maxDimension,i.expandByVector(r.subScalar(this.maxDimension).multiplyScalar(-.5)),i.min.y=l,i.max.y=c,r.set(this.maxDimension,c-l,this.maxDimension)}n==="bottom"?o.y=i.min.y:o.z=i.min.y,this.setSoftness(t)}setSoftness(e){this.softness=e;const{size:t,camera:n}=this,i=this.isAnimated?2:1,r=i*Math.pow(2,9-3*e);this.setMapSize(r);const a=t.y/2,o=t.y*i;n.near=0,n.far=lg(o,a,e),this.depthMaterial.opacity=1/e,n.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(e){const{size:t}=this;this.isAnimated&&(e*=2);const n=Math.floor(t.x>t.z?e:e*t.x/t.z),i=Math.floor(t.x>t.z?e*t.z/t.x:e),r=10+n,a=10+i;if(this.renderTarget==null||this.renderTarget.width===r&&this.renderTarget.height===a||(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const o={format:ct};this.renderTarget=new dn(r,a,o),this.renderTargetBlur=new dn(r,a,o),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(t.x*(1+10/n),t.z*(1+10/i),1),this.needsUpdate=!0}setIntensity(e){this.intensity=e,e>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=e*lg(.3,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(e){this.floor.position.z=-e+this.gap()}gap(){return .001*this.maxDimension}render(e,t){t.overrideMaterial=this.depthMaterial;const n=e.getClearAlpha();e.setClearAlpha(0),this.floor.visible=!1;const i=e.xr.enabled;e.xr.enabled=!1;const r=e.getRenderTarget();e.setRenderTarget(this.renderTarget),e.render(t,this.camera),t.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(e),e.xr.enabled=i,e.setRenderTarget(r),e.setClearAlpha(n)}blurShadow(e){const{camera:t,horizontalBlurMaterial:n,verticalBlurMaterial:i,renderTarget:r,renderTargetBlur:a,blurPlane:o}=this;o.visible=!0,o.material=n,n.uniforms.h.value=1/this.renderTarget.width,n.uniforms.tDiffuse.value=this.renderTarget.texture,e.setRenderTarget(a),e.render(o,t),o.material=i,i.uniforms.v.value=1/this.renderTarget.height,i.uniforms.tDiffuse.value=this.renderTargetBlur.texture,e.setRenderTarget(r),e.render(o,t),o.visible=!1}dispose(){this.renderTarget!=null&&this.renderTarget.dispose(),this.renderTargetBlur!=null&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}}/* @license
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
 */const Dh=new T,cg=new T,hg=new T,No=new class{constructor(s,e,t=0,n=1/0){this.ray=new La(s,e),this.near=t,this.far=n,this.camera=null,this.layers=new sd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(s,e){this.ray.set(s,e)}setFromCamera(s,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(s.x,s.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(s.x,s.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(s){return XA.identity().extractRotation(s.matrixWorld),this.ray.origin.setFromMatrixPosition(s.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(XA),this}intersectObject(s,e=!0,t=[]){return Ru(s,this,t,e),t.sort(jA),t}intersectObjects(s,e=!0,t=[]){for(let n=0,i=s.length;n<i;n++)Ru(s[n],this,t,e);return t.sort(jA),t}},yC=new T,ea=new Te;class EC extends Ti{constructor({canvas:e,element:t,width:n,height:i}){super(),this.annotationRenderer=new Rx,this.effectRenderer=null,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.camera=new Tt(45,1,.1,100),this.xrCamera=null,this.url=null,this.pivot=new tt,this.target=new tt,this.animationNames=[],this.boundingBox=new jt,this.boundingSphere=new pn,this.size=new T,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.toneMapping=4,this.canScale=!0,this.isDirty=!1,this.goalTarget=new T,this.targetDamperX=new Xt,this.targetDamperY=new Xt,this.targetDamperZ=new Xt,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.groundedSkybox=new gC,this.name="ModelScene",this.element=t,this.canvas=e,this.camera=new Tt(45,1,.1,100),this.camera.name="MainCamera",this.add(this.pivot),this.pivot.name="Pivot",this.pivot.add(this.target),this.setSize(n,i),this.target.name="Target",this.mixer=new vE(this.target);const{domElement:r}=this.annotationRenderer,{style:a}=r;a.display="none",a.pointerEvents="none",a.position="absolute",a.top="0",this.element.shadowRoot.querySelector(".default").appendChild(r),this.schemaElement.setAttribute("type","application/ld+json")}get context(){return this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(e){this.reset(),this._model=e,this.target.add(e),await this.setupScene()}async setSource(e,t=()=>{}){if(!e||e===this.url)return void t(1);if(this.reset(),this.url=e,this.externalRenderer!=null){const o=await this.externalRenderer.load(t);return this.boundingSphere.radius=o.framedRadius,void(this.idealAspect=o.fieldOfViewAspect)}let n;this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);try{n=await new Promise(async(o,l)=>{this.cancelPendingSourceChange=()=>l();try{o(await this.element[je].loader.load(e,this.element,t))}catch(c){l(c)}})}catch(o){if(o==null)return;throw o}this.cancelPendingSourceChange=null,this.reset(),this.url=e,this._currentGLTF=n,n!=null&&(this._model=n.scene,this.target.add(n.scene));const{animations:i}=n,r=new Map,a=[];for(const o of i)r.set(o.name,o),a.push(o.name);this.animations=i,this.animationsByName=r,this.animationNames=a,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity),this.setGroundedSkybox()}reset(){this.url=null,this.renderCount=0,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:e}=this;e!=null&&(e.removeFromParent(),this._model=null);const t=this._currentGLTF;t!=null&&(t.dispose(),this._currentGLTF=null),this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}dispose(){this.reset(),this.shadow!=null&&(this.shadow.dispose(),this.shadow=null),this.element[ol]=null,this.element[ll]=null,this.element[er]=null}get currentGLTF(){return this._currentGLTF}setSize(e,t){if(this.width!==e||this.height!==t){if(this.width=Math.max(e,1),this.height=Math.max(t,1),this.annotationRenderer.setSize(e,t),this.aspect=this.width/this.height,this.externalRenderer!=null){const n=window.devicePixelRatio;this.externalRenderer.resize(e*n,t*n)}this.queueRender()}}markBakedShadow(e){e.userData.noHit=!0,this.bakedShadows.add(e)}unmarkBakedShadow(e){e.userData.noHit=!1,e.visible=!0,this.bakedShadows.delete(e),this.boundingBox.expandByObject(e)}findBakedShadows(e){const t=new jt;e.traverse(n=>{const i=n;if(!i.material||!i.material.transparent)return;t.setFromObject(i);const r=t.getSize(yC),a=Math.min(r.x,r.y,r.z);Math.max(r.x,r.y,r.z)<100*a||this.markBakedShadow(i)})}checkBakedShadows(){const{min:e,max:t}=this.boundingBox,n=new jt;this.boundingBox.getSize(this.size);for(const i of this.bakedShadows)n.setFromObject(i),n.min.y<e.y+this.size.y/100&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.z<=e.z&&n.max.z>=t.z||n.min.z<e.z+this.size.z/100&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.y<=e.y&&n.max.y>=t.y||this.unmarkBakedShadow(i)}applyTransform(){const{model:e}=this;if(e==null)return;const t=oi(this.element.orientation)[0].terms,n=Nn(t[0]).number,i=Nn(t[1]).number,r=Nn(t[2]).number;e.quaternion.setFromEuler(new An(i,r,n,"YXZ"));const a=oi(this.element.scale)[0].terms;e.scale.set(a[0].number,a[1].number,a[2].number)}updateBoundingBox(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.findBakedShadows(e);const t=(n,i)=>n.expandByPoint(i);this.setBakedShadowVisibility(!1),this.boundingBox=yo(e,t,new jt),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach(n=>this.unmarkBakedShadow(n)),this.boundingBox=yo(e,t,new jt)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(e)}async updateFraming(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.setBakedShadowVisibility(!1);const{center:t}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,t.copy(this.getTarget()),this.boundingSphere.radius=Math.sqrt(yo(e,(n,i)=>Math.max(n,t.distanceToSquared(i)),0)),this.idealAspect=yo(e,(n,i)=>{i.sub(t);const r=Math.sqrt(i.x*i.x+i.z*i.z);return Math.max(n,r/(this.idealCameraDistance()-Math.abs(i.y)))},0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(e)}setBakedShadowVisibility(e=this.shadowIntensity<=0){for(const t of this.bakedShadows)t.visible=e}idealCameraDistance(){const e=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(e)}adjustedFoV(e){const t=Math.tan(e/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(t)*180/Math.PI}getNDC(e,t){if(this.xrCamera!=null)ea.set(e/window.screen.width,t/window.screen.height);else{const n=this.element.getBoundingClientRect();ea.set((e-n.x)/this.width,(t-n.y)/this.height)}return ea.multiplyScalar(2).subScalar(1),ea.y*=-1,ea}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(e,t){this.element[je].arRenderer.presentedScene!==this&&(this.environment=e,this.setBackground(t),this.queueRender())}setBackground(e){this.groundedSkybox.map=e,this.groundedSkybox.isUsable()?(this.target.add(this.groundedSkybox),this.background=null):(this.target.remove(this.groundedSkybox),this.background=e)}farRadius(){return this.boundingSphere.radius*(this.groundedSkybox.parent!=null?10:1)}setGroundedSkybox(){const e=oi(this.element.skyboxHeight)[0].terms[0],t=Nn(e).number,n=10*this.boundingSphere.radius;this.groundedSkybox.updateGeometry(t,n),this.groundedSkybox.position.y=t-(this.shadow?2*this.shadow.gap():0),this.setBackground(this.groundedSkybox.map)}setTarget(e,t,n){this.goalTarget.set(-e,-t,-n)}setTargetDamperDecayTime(e){this.targetDamperX.setDecayTime(e),this.targetDamperY.setDecayTime(e),this.targetDamperZ.setDecayTime(e)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}getDynamicTarget(){return this.target.position.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(1e4)}updateTarget(e){const t=this.goalTarget,n=this.target.position;if(t.equals(n))return!1;{const i=this.boundingSphere.radius/10;let{x:r,y:a,z:o}=n;return r=this.targetDamperX.update(r,t.x,e,i),a=this.targetDamperY.update(a,t.y,e,i),o=this.targetDamperZ.update(o,t.z,e,i),this.groundedSkybox.position.x=-r,this.groundedSkybox.position.z=-o,this.target.position.set(r,a,o),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(e,t){const{x:n,z:i}=this.position;this.yaw=Math.atan2(e-n,t-i)}get model(){return this._model}set yaw(e){this.pivot.rotation.y=e,this.groundedSkybox.rotation.y=-e,this.queueRender()}get yaw(){return this.pivot.rotation.y}set animationTime(e){this.mixer.setTime(e),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const e=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop!==id||1&~e?this.currentAnimationAction.time:this.duration-this.currentAnimationAction.time}return 0}set animationTimeScale(e){this.mixer.timeScale=e}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(e=null,t=0,n=2201,i=1/0){if(this._currentGLTF==null)return;const{animations:r}=this;if(r==null||r.length===0)return;let a=null;if(e!=null&&(a=this.animationsByName.get(e),a==null)){const o=parseInt(e);!isNaN(o)&&o>=0&&o<r.length&&(a=r[o])}a==null&&(a=r[0]);try{const{currentAnimationAction:o}=this,l=this.mixer.clipAction(a,this);this.currentAnimationAction=l,this.element.paused?this.mixer.stopAllAction():(l.paused=!1,o!=null&&l!==o?l.crossFadeFrom(o,t,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),l.setLoop(n,i),l.enabled=!0,l.clampWhenFinished=!0,l.play()}catch(o){console.error(o)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(e){this.mixer.update(e),this.queueShadowRender()}subscribeMixerEvent(e,t){this.mixer.addEventListener(e,t)}updateShadow(){const e=this.shadow;if(e!=null){const t=this.element.arPlacement==="wall"?"back":"bottom";e.setScene(this,this.shadowSoftness,t),e.needsUpdate=!0}}renderShadow(e){const t=this.shadow;t!=null&&t.needsUpdate==1&&(t.render(e,this),t.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(e){if(this.shadowIntensity=e,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(e<=0&&this.shadow==null))){if(this.shadow==null){const t=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new _C(this,this.shadowSoftness,t)}this.shadow.setIntensity(e)}}setShadowSoftness(e){this.shadowSoftness=e;const t=this.shadow;t!=null&&t.setSoftness(e)}setShadowOffset(e){const t=this.shadow;t!=null&&t.setOffset(e)}getHit(e=this){return No.intersectObject(e,!0).find(t=>t.object.visible&&!t.object.userData.noHit)}hitFromController(e,t=this){return No.setFromXRController(e),this.getHit(t)}hitFromPoint(e,t=this){return No.setFromCamera(e,this.getCamera()),this.getHit(t)}positionAndNormalFromPoint(e,t=this){var n;const i=this.hitFromPoint(e,t);return i==null?null:{position:i.point,normal:i.face!=null?i.face.normal.clone().applyNormalMatrix(new be().getNormalMatrix(i.object.matrixWorld)):No.ray.direction.clone().multiplyScalar(-1),uv:(n=i.uv)!==null&&n!==void 0?n:null}}surfaceFromPoint(e,t=this){const n=this.element.model;if(n==null)return null;const i=this.hitFromPoint(e,t);if(i==null||i.face==null)return null;const r=n[Hu](i),{meshes:a,primitives:o}=r.mesh.userData.associations,l=new T,c=new T,h=new T,{a:u,b:d,c:A}=i.face,p=i.object;p.getVertexPosition(u,l),p.getVertexPosition(d,c),p.getVertexPosition(A,h);const g=new rn(l,c,h),f=new T;return g.getBarycoord(p.worldToLocal(i.point),f),`${a} ${o} ${u} ${d} ${A} ${f.x.toFixed(3)} ${f.y.toFixed(3)} ${f.z.toFixed(3)}`}addHotspot(e){this.target.add(e),this.annotationRenderer.domElement.appendChild(e.element),this.updateSurfaceHotspot(e)}removeHotspot(e){this.target.remove(e)}forHotspots(e){const{children:t}=this.target;for(let n=0,i=t.length;n<i;n++){const r=t[n];r instanceof R0&&e(r)}}updateSurfaceHotspot(e){if(e.surface==null||this.element.model==null)return;const t=oi(e.surface)[0].terms;if(t.length!=8)return void console.warn(e.surface+" does not have exactly 8 numbers.");const n=this.element.model[B0](t[0].number,t[1].number);if(n==null)return void console.warn(e.surface+" does not match a node/primitive in this glTF! Skipping this hotspot.");const i=n.mesh.geometry.attributes.position.count,r=new T(t[2].number,t[3].number,t[4].number);if(r.x>=i||r.y>=i||r.z>=i)return void console.warn(e.surface+" vertex indices out of range in this glTF! Skipping this hotspot.");const a=new T(t[5].number,t[6].number,t[7].number);e.mesh=n.mesh,e.tri=r,e.bary=a,e.updateSurface()}animateSurfaceHotspots(){this.element.paused||this.forHotspots(e=>{e.updateSurface()})}updateHotspotsVisibility(e){this.forHotspots(t=>{Dh.copy(e),cg.setFromMatrixPosition(t.matrixWorld),Dh.sub(cg),hg.copy(t.normal).transformDirection(this.target.matrixWorld),Dh.dot(hg)<0?t.hide():t.show()})}orientHotspots(e){this.forHotspots(t=>{t.orient(e)})}setHotspotsVisibility(e){this.forHotspots(t=>{t.visible=e})}updateSchema(e){var t;const{schemaElement:n,element:i}=this,{alt:r,poster:a,iosSrc:o}=i;if(e!=null){const l=[{"@type":"MediaObject",contentUrl:e,encodingFormat:((t=e.split(".").pop())===null||t===void 0?void 0:t.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];o&&l.push({"@type":"MediaObject",contentUrl:o,encodingFormat:"model/vnd.usdz+zip"});const c={"@context":"http://schema.org/","@type":"3DModel",image:a??void 0,name:r??void 0,encoding:l};n.textContent=JSON.stringify(c),document.head.appendChild(n)}else n.parentElement!=null&&n.parentElement.removeChild(n)}}/* @license
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
 */class xC extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(e){const t={progress:0,completed:!1};return this.ongoingActivities.add(t),this.ongoingActivityCount===1&&this.announceTotalProgress(t,0,e),n=>{let i;return i=Math.max(Un(n,0,1),t.progress),i!==t.progress&&this.announceTotalProgress(t,i,e),t.progress}}announceTotalProgress(e,t,n){let i=0,r=0;t==1&&(e.completed=!0);for(const l of this.ongoingActivities){const{progress:c}=l;i+=1-c,l.completed&&r++}const a=e.progress;e.progress=t,this.totalProgress+=(t-a)*(1-this.totalProgress)/i;const o=r===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:o,reason:n}})),r===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
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
 */var ug,dg,Ag,pg,mg,gg,fg,vg,_g,yg,Eg,xg,Sg,Fo=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const wi=document.createElement("canvas"),Lh=Symbol("fallbackResizeHandler"),Cg=Symbol("defaultAriaLabel"),Qo=Symbol("resizeObserver"),Or=Symbol("clearModelTimeout"),Uh=Symbol("onContextLost"),kr=Symbol("loaded"),Ph=Symbol("status"),Nh=Symbol("onFocus"),Fh=Symbol("onBlur"),jr=Symbol("updateSize"),Oo=Symbol("intersectionObserver"),tr=Symbol("isElementInViewport"),Bl=Symbol("announceModelVisibility"),es=Symbol("ariaLabel"),Vu=Symbol("altDefaulted"),ta=Symbol("statusElement"),Rl=Symbol("updateStatus"),da=Symbol("loadedTime"),as=Symbol("updateSource"),Ig=Symbol("markLoaded"),cl=Symbol("container"),xn=Symbol("input"),Wu=Symbol("canvas"),le=Symbol("scene"),Qt=Symbol("needsRender"),Bn=Symbol("tick"),Rn=Symbol("onModelLoad"),Dl=Symbol("onResize"),je=Symbol("renderer"),rr=Symbol("progressTracker"),wg=Symbol("getLoaded"),sr=Symbol("getModelIsVisible"),ts=Symbol("shouldAttemptPreload"),yi=s=>({x:s.x,y:s.y,z:s.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),qu=s=>({u:s.x,v:s.y,toString(){return`${this.u} ${this.v}`}});class Aa extends ir{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[ug]=!1,this[dg]=!1,this[Ag]=0,this[pg]="",this[mg]=null,this[gg]=pp(()=>{const i=this.getBoundingClientRect();this[jr](i)},50),this[fg]=pp(i=>{const r=this.modelIsVisible;r!==i&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:r}}))},0),this[vg]=null,this[_g]=null,this[yg]=new xC,this[Eg]=()=>{this[ta].textContent=this[Ph]},this[xg]=()=>{this[ta].textContent=""},this[Sg]=i=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:i.sourceEvent}}))},this.attachShadow({mode:"open"});const e=this.shadowRoot;let t,n;if((i=>{Tf(QE,i)})(e),this[cl]=e.querySelector(".container"),this[xn]=e.querySelector(".userInput"),this[Wu]=e.querySelector("canvas"),this[ta]=e.querySelector("#status"),this[Cg]=this[xn].getAttribute("aria-label"),this.isConnected){const i=this.getBoundingClientRect();t=i.width,n=i.height}else t=300,n=150;this[le]=new EC({canvas:this[Wu],element:this,width:t,height:n}),Promise.resolve().then(()=>{this[jr](this.getBoundingClientRect())}),Qc&&(this[Qo]=new ResizeObserver(i=>{if(!this[je].isPresenting)for(let r of i)r.target===this&&this[jr](r.contentRect)})),Oc?this[Oo]=new IntersectionObserver(i=>{for(let r of i)if(r.target===this){const a=this.modelIsVisible;this[tr]=r.isIntersecting,this[Bl](a),this[tr]&&!this.loaded&&this[as]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[tr]=!0}static get is(){return"model-viewer"}static set modelCacheSize(e){qt[Ei].evictionThreshold=e}static get modelCacheSize(){return qt[Ei].evictionThreshold}static set minimumRenderScale(e){e>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),e<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),Cn.singleton.minScale=e}static get minimumRenderScale(){return Cn.singleton.minScale}get loaded(){return this[wg]()}get[(ug=tr,dg=kr,Ag=da,pg=Ph,mg=Or,gg=Lh,fg=Bl,vg=Qo,_g=Oo,yg=rr,je)](){return Cn.singleton}get modelIsVisible(){return this[sr]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),Qc?this[Qo].observe(this):self.addEventListener("resize",this[Lh]),Oc&&this[Oo].observe(this),this.addEventListener("focus",this[Nh]),this.addEventListener("blur",this[Fh]);const e=this[je];e.addEventListener("contextlost",this[Uh]),e.registerScene(this[le]),this[Or]!=null&&(self.clearTimeout(this[Or]),this[Or]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Qc?this[Qo].unobserve(this):self.removeEventListener("resize",this[Lh]),Oc&&this[Oo].unobserve(this),this.removeEventListener("focus",this[Nh]),this.removeEventListener("blur",this[Fh]);const e=this[je];e.removeEventListener("contextlost",this[Uh]),e.unregisterScene(this[le]),this[Or]=self.setTimeout(()=>{this[le].dispose(),this[Or]=null},10)}updated(e){super.updated(e),e.has("src")&&(this.src==null?(this[kr]=!1,this[da]=0,this[le].reset()):this.src!==this[le].url&&(this[kr]=!1,this[da]=0,this[as]())),e.has("alt")&&this[xn].setAttribute("aria-label",this[es]),e.has("generateSchema")&&(this.generateSchema?this[le].updateSchema(this.src):this[le].updateSchema(null))}toDataURL(e,t){return this[je].displayCanvas(this[le]).toDataURL(e,t)}async toBlob(e){const t=e?e.mimeType:void 0,n=e?e.qualityArgument:void 0,i=e?e.idealAspect:void 0,{width:r,height:a,idealAspect:o,aspect:l}=this[le],{dpr:c,scaleFactor:h}=this[je];let u=r*h*c,d=a*h*c,A=0,p=0;if(i===!0)if(o>l){const g=d;d=Math.round(u/o),p=(g-d)/2}else{const g=u;u=Math.round(d*o),A=(g-u)/2}wi.width=u,wi.height=d;try{return new Promise(async(g,f)=>{wi.getContext("2d").drawImage(this[je].displayCanvas(this[le]),A,p,u,d,0,0,u,d),wi.toBlob(m=>{if(!m)return f(new Error("Unable to retrieve canvas blob"));g(m)},t,n)})}finally{this[jr]({width:r,height:a})}}registerEffectComposer(e){e.setRenderer(this[je].threeRenderer),e.setMainCamera(this[le].getCamera()),e.setMainScene(this[le]),this[le].effectRenderer=e}unregisterEffectComposer(){this[le].effectRenderer=null}registerRenderer(e){this[le].externalRenderer=e}unregisterRenderer(){this[le].externalRenderer=null}get[es](){return this[Vu]}get[Vu](){return this.alt==null||this.alt==="null"?this[Cg]:this.alt}[wg](){return this[kr]}[sr](){return this.loaded&&this[tr]}[ts](){return!!this.src&&this[tr]}[jr]({width:e,height:t}){e!==0&&t!==0&&(this[cl].style.width=`${e}px`,this[cl].style.height=`${t}px`,this[Dl]({width:e,height:t}))}[Bn](e,t){var n;(n=this[le].effectRenderer)===null||n===void 0||n.beforeRender(e,t)}[Ig](){this[kr]||(this[kr]=!0,this[da]=performance.now())}[Qt](){this[le].queueRender()}[Rn](){}[Rl](e){this[Ph]=e;const t=this.getRootNode();t!=null&&t.activeElement===this&&this[ta].textContent!=e&&(this[ta].textContent=e)}[(Eg=Nh,xg=Fh,Dl)](e){this[le].setSize(e.width,e.height)}async[(Sg=Uh,as)](){const e=this[le];if(this.loaded||!this[ts]()||this.src===e.url)return;this.generateSchema&&e.updateSchema(this.src),this[Rl]("Loading"),e.stopAnimation();const t=this[rr].beginActivity("model-load"),n=this.src;try{const i=e.setSource(n,a=>t(.95*Un(a,0,1))),r=this[Ml]();await Promise.all([i,r]),this[Ig](),this[Rn](),this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent("before-render"))}),await new Promise(a=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:n}})),a()})})})}catch(i){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:i}}))}finally{t(1)}}}Fo([Ee({type:String})],Aa.prototype,"alt",void 0),Fo([Ee({type:String})],Aa.prototype,"src",void 0),Fo([Ee({type:Boolean,attribute:"with-credentials"})],Aa.prototype,"withCredentials",void 0),Fo([Ee({type:Boolean,attribute:"generate-schema"})],Aa.prototype,"generateSchema",void 0);/* @license
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
 */var Qh=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const ko=Symbol("changeAnimation"),ti=Symbol("paused"),SC={repetitions:1/0,pingpong:!1},Xi=Symbol("hotspotMap"),Oh=Symbol("mutationCallback"),na=Symbol("observer"),kh=Symbol("addHotspot"),Mg=Symbol("removeHotspot"),Gh=new Se;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Gt=Uint8Array,un=Uint16Array,yd=Int32Array,Ed=new Gt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xd=new Gt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),bg=new Gt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),D0=function(s,e){for(var t=new un(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];var i=new yd(t[30]);for(n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},L0=D0(Ed,2),CC=L0.b,Xu=L0.r;CC[28]=258,Xu[258]=28;for(var Tg=D0(xd,0).r,U0=new un(32768),at=0;at<32768;++at){var ji=(43690&at)>>1|(21845&at)<<1;ji=(61680&(ji=(52428&ji)>>2|(13107&ji)<<2))>>4|(3855&ji)<<4,U0[at]=((65280&ji)>>8|(255&ji)<<8)>>1}var ya=function(s,e,t){for(var n=s.length,i=0,r=new un(e);i<n;++i)s[i]&&++r[s[i]-1];var a,o=new un(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;for(a=new un(n),i=0;i<n;++i)s[i]&&(a[i]=U0[o[s[i]-1]++]>>15-s[i]);return a},dr=new Gt(288);for(at=0;at<144;++at)dr[at]=8;for(at=144;at<256;++at)dr[at]=9;for(at=256;at<280;++at)dr[at]=7;for(at=280;at<288;++at)dr[at]=8;var Ll=new Gt(32);for(at=0;at<32;++at)Ll[at]=5;var IC=ya(dr,9),wC=ya(Ll,5),P0=function(s){return(s+7)/8|0},N0=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new Gt(s.subarray(e,t))},MC=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zl=function(s,e,t){var n=new Error(e||MC[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,zl),!t)throw n;return n},ni=function(s,e,t){t<<=7&e;var n=e/8|0;s[n]|=t,s[n+1]|=t>>8},ia=function(s,e,t){t<<=7&e;var n=e/8|0;s[n]|=t,s[n+1]|=t>>8,s[n+2]|=t>>16},Hh=function(s,e){for(var t=[],n=0;n<s.length;++n)s[n]&&t.push({s:n,f:s[n]});var i=t.length,r=t.slice();if(!i)return{t:Q0,l:0};if(i==1){var a=new Gt(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(E,S){return E.f-S.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=i-1;)o=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:o.f+l.f,l:o,r:l};var d=r[0].s;for(n=1;n<i;++n)r[n].s>d&&(d=r[n].s);var A=new un(d+1),p=ju(t[h-1],A,0);if(p>e){n=0;var g=0,f=p-e,m=1<<f;for(r.sort(function(E,S){return A[S.s]-A[E.s]||E.f-S.f});n<i;++n){var _=r[n].s;if(!(A[_]>e))break;g+=m-(1<<p-A[_]),A[_]=e}for(g>>=f;g>0;){var v=r[n].s;A[v]<e?g-=1<<e-A[v]++-1:++n}for(;n>=0&&g;--n){var y=r[n].s;A[y]==e&&(--A[y],++g)}p=e}return{t:new Gt(A),l:p}},ju=function(s,e,t){return s.s==-1?Math.max(ju(s.l,e,t+1),ju(s.r,e,t+1)):e[s.s]=t},Bg=function(s){for(var e=s.length;e&&!s[--e];);for(var t=new un(++e),n=0,i=s[0],r=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(s[o]==i&&o!=e)++r;else{if(!i&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(i),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(i);r=1,i=s[o]}return{c:t.subarray(0,n),n:e}},ra=function(s,e){for(var t=0,n=0;n<e.length;++n)t+=s[n]*e[n];return t},F0=function(s,e,t){var n=t.length,i=P0(e+2);s[i]=255&n,s[i+1]=n>>8,s[i+2]=255^s[i],s[i+3]=255^s[i+1];for(var r=0;r<n;++r)s[i+r+4]=t[r];return 8*(i+4+n)},Rg=function(s,e,t,n,i,r,a,o,l,c,h){ni(e,h++,t),++i[256];for(var u=Hh(i,15),d=u.t,A=u.l,p=Hh(r,15),g=p.t,f=p.l,m=Bg(d),_=m.c,v=m.n,y=Bg(g),E=y.c,S=y.n,C=new un(19),B=0;B<_.length;++B)++C[31&_[B]];for(B=0;B<E.length;++B)++C[31&E[B]];for(var b=Hh(C,7),R=b.t,W=b.l,D=19;D>4&&!R[bg[D-1]];--D);var G,N,z,F,J=c+5<<3,ee=ra(i,dr)+ra(r,Ll)+a,oe=ra(i,d)+ra(r,g)+a+14+3*D+ra(C,R)+2*C[16]+3*C[17]+7*C[18];if(l>=0&&J<=ee&&J<=oe)return F0(e,h,s.subarray(l,l+c));if(ni(e,h,1+(oe<ee)),h+=2,oe<ee){G=ya(d,A),N=d,z=ya(g,f),F=g;var he=ya(R,W);for(ni(e,h,v-257),ni(e,h+5,S-1),ni(e,h+10,D-4),h+=14,B=0;B<D;++B)ni(e,h+3*B,R[bg[B]]);h+=3*D;for(var Y=[_,E],K=0;K<2;++K){var ne=Y[K];for(B=0;B<ne.length;++B){var ie=31&ne[B];ni(e,h,he[ie]),h+=R[ie],ie>15&&(ni(e,h,ne[B]>>5&127),h+=ne[B]>>12)}}}else G=IC,N=dr,z=wC,F=Ll;for(B=0;B<o;++B){var w=n[B];if(w>255){ia(e,h,G[(ie=w>>18&31)+257]),h+=N[ie+257],ie>7&&(ni(e,h,w>>23&31),h+=Ed[ie]);var x=31&w;ia(e,h,z[x]),h+=F[x],x>3&&(ia(e,h,w>>5&8191),h+=xd[x])}else ia(e,h,G[w]),h+=N[w]}return ia(e,h,G[256]),h+N[256]},bC=new yd([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Q0=new Gt(0),TC=function(){for(var s=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(1&t&&-306674912)^t>>>1;s[e]=t}return s}(),BC=function(){var s=-1;return{p:function(e){for(var t=s,n=0;n<e.length;++n)t=TC[255&t^e[n]]^t>>>8;s=t},d:function(){return~s}}},RC=function(s,e,t,n,i){if(!i&&(i={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),a=new Gt(r.length+s.length);a.set(r),a.set(s,r.length),s=a,i.w=r.length}return function(o,l,c,h,u,d){var A=d.z||o.length,p=new Gt(h+A+5*(1+Math.ceil(A/7e3))+u),g=p.subarray(h,p.length-u),f=d.l,m=7&(d.r||0);if(l){m&&(g[0]=d.r>>3);for(var _=bC[l-1],v=_>>13,y=8191&_,E=(1<<c)-1,S=d.p||new un(32768),C=d.h||new un(E+1),B=Math.ceil(c/3),b=2*B,R=function(de){return(o[de]^o[de+1]<<B^o[de+2]<<b)&E},W=new yd(25e3),D=new un(288),G=new un(32),N=0,z=0,F=d.i||0,J=0,ee=d.w||0,oe=0;F+2<A;++F){var he=R(F),Y=32767&F,K=C[he];if(S[Y]=K,C[he]=Y,ee<=F){var ne=A-F;if((N>7e3||J>24576)&&(ne>423||!f)){m=Rg(o,g,0,W,D,G,z,J,oe,F-oe,m),J=N=z=0,oe=F;for(var ie=0;ie<286;++ie)D[ie]=0;for(ie=0;ie<30;++ie)G[ie]=0}var w=2,x=0,U=y,O=Y-K&32767;if(ne>2&&he==R(F-O))for(var P=Math.min(v,ne)-1,k=Math.min(32767,F),M=Math.min(258,ne);O<=k&&--U&&Y!=K;){if(o[F+w]==o[F+w-O]){for(var H=0;H<M&&o[F+H]==o[F+H-O];++H);if(H>w){if(w=H,x=O,H>P)break;var q=Math.min(O,H-2),se=0;for(ie=0;ie<q;++ie){var V=F-O+ie&32767,te=V-S[V]&32767;te>se&&(se=te,K=V)}}}O+=(Y=K)-(K=S[Y])&32767}if(x){W[J++]=268435456|Xu[w]<<18|Tg[x];var ae=31&Xu[w],Z=31&Tg[x];z+=Ed[ae]+xd[Z],++D[257+ae],++G[Z],ee=F+w,++N}else W[J++]=o[F],++D[o[F]]}}for(F=Math.max(F,ee);F<A;++F)W[J++]=o[F],++D[o[F]];m=Rg(o,g,f,W,D,G,z,J,oe,F-oe,m),f||(d.r=7&m|g[m/8|0]<<3,m-=7,d.h=C,d.p=S,d.i=F,d.w=ee)}else{for(F=d.w||0;F<A+f;F+=65535){var ue=F+65535;ue>=A&&(g[m/8|0]=f,ue=A),m=F0(g,m+1,o.subarray(F,ue))}d.i=A}return N0(p,0,h+P0(m)+u)}(s,e.level==null?6:e.level,e.mem==null?i.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+e.mem,t,n,i)},O0=function(s,e){var t={};for(var n in s)t[n]=s[n];for(var n in e)t[n]=e[n];return t},Lt=function(s,e,t){for(;t;++e)s[e]=t,t>>>=8};function DC(s,e){return RC(s,e||{},0,0)}var k0=function(s,e,t,n){for(var i in s){var r=s[i],a=e+i,o=n;Array.isArray(r)&&(o=O0(n,r[1]),r=r[0]),r instanceof Gt?t[a]=[r,o]:(t[a+="/"]=[new Gt(0),o],k0(r,a,t,n))}},Dg=typeof TextEncoder<"u"&&new TextEncoder,LC=typeof TextDecoder<"u"&&new TextDecoder;try{LC.decode(Q0,{stream:!0})}catch{}function Ul(s,e){var t;if(Dg)return Dg.encode(s);var n=s.length,i=new Gt(s.length+(s.length>>1)),r=0,a=function(c){i[r++]=c};for(t=0;t<n;++t){if(r+5>i.length){var o=new Gt(r+8+(n-t<<1));o.set(i),i=o}var l=s.charCodeAt(t);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|63&l)):l>55295&&l<57344?(a(240|(l=65536+(1047552&l)|1023&s.charCodeAt(++t))>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|63&l)):(a(224|l>>12),a(128|l>>6&63),a(128|63&l))}return N0(i,0,r)}var Yu=function(s){var e=0;if(s)for(var t in s){var n=s[t].length;n>65535&&zl(9),e+=n+4}return e},Lg=function(s,e,t,n,i,r,a,o){var l=n.length,c=t.extra,h=o&&o.length,u=Yu(c);Lt(s,e,a!=null?33639248:67324752),e+=4,a!=null&&(s[e++]=20,s[e++]=t.os),s[e]=20,e+=2,s[e++]=t.flag<<1|(r<0&&8),s[e++]=i&&8,s[e++]=255&t.compression,s[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),A=d.getFullYear()-1980;if((A<0||A>119)&&zl(10),Lt(s,e,A<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,r!=-1&&(Lt(s,e,t.crc),Lt(s,e+4,r<0?-r-2:r),Lt(s,e+8,t.size)),Lt(s,e+12,l),Lt(s,e+14,u),e+=16,a!=null&&(Lt(s,e,h),Lt(s,e+6,t.attrs),Lt(s,e+10,a),e+=14),s.set(n,e),e+=l,u)for(var p in c){var g=c[p],f=g.length;Lt(s,e,+p),Lt(s,e+2,f),s.set(g,e+4),e+=4+f}return h&&(s.set(o,e),e+=h),e};function UC(s,e){var t={},n=[];k0(s,"",t,e);var i=0,r=0;for(var a in t){var o=t[a],l=o[0],c=o[1],h=c.level==0?0:8,u=(C=Ul(a)).length,d=c.comment,A=d&&Ul(d),p=A&&A.length,g=Yu(c.extra);u>65535&&zl(11);var f=h?DC(l,c):l,m=f.length,_=BC();_.p(l),n.push(O0(c,{size:l.length,crc:_.d(),c:f,f:C,m:A,u:u!=a.length||A&&d.length!=p,o:i,compression:h})),i+=30+u+g+m,r+=76+2*(u+g)+(p||0)+m}for(var v=new Gt(r+22),y=i,E=r-i,S=0;S<n.length;++S){var C=n[S];Lg(v,C.o,C,C.f,C.u,C.c.length);var B=30+C.f.length+Yu(C.extra);v.set(C.c,C.o+B),Lg(v,i,C,C.f,C.u,C.c.length,C.o,C.m),i+=16+B+(C.m?C.m.length:0)}return function(b,R,W,D,G){Lt(b,R,101010256),Lt(b,R+8,W),Lt(b,R+10,W),Lt(b,R+12,D),Lt(b,R+16,G)}(v,i,n.length,E,y),v}class PC{parse(e,t,n,i){this.parseAsync(e,i).then(t).catch(n)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},t);const n={},i="model.usda";n[i]=null;let r=Ug();r+=function(c){return`def Xform "Root"
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
`}(t);const a={},o={};e.traverseVisible(c=>{if(c.isMesh){const h=c.geometry,u=c.material;if(u.isMeshStandardMaterial){const d="geometries/Geometry_"+h.id+".usda";if(!(d in n)){const A=function(p){return`
def "Geometry"
{
${function(f){const m="Geometry",_=f.attributes,v=_.position.count;return`
	def Mesh "${m}"
	{
		int[] faceVertexCounts = [${function(y){const E=y.index!==null?y.index.count:y.attributes.position.count;return Array(E/3).fill(3).join(", ")}(f)}]
		int[] faceVertexIndices = [${function(y){const E=y.index,S=[];if(E!==null)for(let C=0;C<E.count;C++)S.push(E.getX(C));else{const C=y.attributes.position.count;for(let B=0;B<C;B++)S.push(B)}return S.join(", ")}(f)}]
		normal3f[] normals = [${zh(_.normal,v)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${zh(_.position,v)}]
${function(y){let E="";for(let C=0;C<4;C++){const B=C>0?C:"",b=y["uv"+B];b!==void 0&&(E+=`
		texCoord2f[] primvars:st${B} = [${FC(b)}] (
			interpolation = "vertex"
		)`)}const S=y.color;return S!==void 0&&(E+=`
	color3f[] primvars:displayColor = [${zh(S,S.count)}] (
		interpolation = "vertex"
		)`),E}(_)}
		uniform token subdivisionScheme = "none"
	}
`}(p)}
}
`}(h);n[d]=function(p){let g=Ug();return g+=p,Ul(g)}(A)}u.uuid in a||(a[u.uuid]=u),r+=function(A,p,g){const f="Object_"+A.id,m=Pg(A.matrixWorld);return A.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",A),`def Xform "${f}" (
	prepend references = @./geometries/Geometry_${p.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${m}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${g.id}>
}

`}(c,h,u)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(r+=function(h){const u=h.name?h.name:"Camera_"+h.id,d=Pg(h.matrixWorld);return h.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",h),h.isOrthographicCamera?`def Camera "${u}"
		{
			matrix4d xformOp:transform = ${d}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${h.near.toPrecision(Ot)}, ${h.far.toPrecision(Ot)})
			float horizontalAperture = ${(10*(Math.abs(h.left)+Math.abs(h.right))).toPrecision(Ot)}
			float verticalAperture = ${(10*(Math.abs(h.top)+Math.abs(h.bottom))).toPrecision(Ot)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${u}"
		{
			matrix4d xformOp:transform = ${d}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${h.near.toPrecision(Ot)}, ${h.far.toPrecision(Ot)})
			float focalLength = ${h.getFocalLength().toPrecision(Ot)}
			float focusDistance = ${h.focus.toPrecision(Ot)}
			float horizontalAperture = ${h.getFilmWidth().toPrecision(Ot)}
			token projection = "perspective"
			float verticalAperture = ${h.getFilmHeight().toPrecision(Ot)}
		}
	
	`}(c))}),r+=`
		}
	}
}

`,r+=function(c,h,u=!1){const d=[];for(const A in c){const p=c[A];d.push(QC(p,h,u))}return`def "Materials"
{
${d.join("")}
}

`}(a,o,t.quickLookCompatible),n[i]=Ul(r),r=null;for(const c in o){let h=o[c];h.isCompressedTexture===!0&&(h=nl(h));const u=NC(h.image,h.flipY,t.maxTextureSize),d=await new Promise(A=>u.toBlob(A,"image/png",1));n[`textures/Texture_${c}.png`]=new Uint8Array(await d.arrayBuffer())}let l=0;for(const c in n){const h=n[c];l+=34+c.length;const u=63&l;if(u!==4){const d=new Uint8Array(64-u);n[c]=[h,{extra:{12345:d}}]}l=h.length}return UC(n,{level:0})}}function NC(s,e,t){if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&s instanceof ImageBitmap){const n=t/Math.max(s.width,s.height),i=document.createElement("canvas");i.width=s.width*Math.min(1,n),i.height=s.height*Math.min(1,n);const r=i.getContext("2d");return e===!0&&(r.translate(0,i.height),r.scale(1,-1)),r.drawImage(s,0,0,i.width,i.height),i}throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const Ot=7;function Ug(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function Pg(s){const e=s.elements;return`( ${Go(e,0)}, ${Go(e,4)}, ${Go(e,8)}, ${Go(e,12)} )`}function Go(s,e){return`(${s[e+0]}, ${s[e+1]}, ${s[e+2]}, ${s[e+3]})`}function zh(s,e){if(s===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[];for(let n=0;n<s.count;n++){const i=s.getX(n),r=s.getY(n),a=s.getZ(n);t.push(`(${i.toPrecision(Ot)}, ${r.toPrecision(Ot)}, ${a.toPrecision(Ot)})`)}return t.join(", ")}function FC(s){const e=[];for(let t=0;t<s.count;t++){const n=s.getX(t),i=s.getY(t);e.push(`(${n.toPrecision(Ot)}, ${1-i.toPrecision(Ot)})`)}return e.join(", ")}function QC(s,e,t=!1){const n="			",i=[],r=[];function a(o,l,c){const h=o.source.id+"_"+o.flipY;e[h]=o;const u=o.channel>0?"st"+o.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},A=o.repeat.clone(),p=o.offset.clone(),g=o.rotation,f=Math.sin(g),m=Math.cos(g);return p.y=1-p.y-A.y,t?(p.x=p.x/A.x,p.y=p.y/A.y,p.x+=f/A.x,p.y+=m-1):(p.x+=f*A.x,p.y+=(1-m)*A.y),`
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
			float inputs:rotation = ${(g*(180/Math.PI)).toFixed(Ot)}
			float2 inputs:scale = ${Fg(A)}
			float2 inputs:translation = ${Fg(p)}
			float2 outputs:result
		}

		def Shader "Texture_${o.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${h}.png@
			float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+function(_){return`(${_.r}, ${_.g}, ${_.b}, 1.0)`}(c):""}
			token inputs:sourceColorSpace = "${o.colorSpace===ai?"raw":"sRGB"}"
			token inputs:wrapS = "${d[o.wrapS]}"
			token inputs:wrapT = "${d[o.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${s.transparent||s.alphaTest>0?"float outputs:a":""}
		}`}return s.side===2&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",s),s.map!==null?(i.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`),s.transparent?i.push(`${n}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`):s.alphaTest>0&&(i.push(`${n}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`),i.push(`${n}float inputs:opacityThreshold = ${s.alphaTest}`)),r.push(a(s.map,"diffuse",s.color))):i.push(`${n}color3f inputs:diffuseColor = ${Ng(s.color)}`),s.emissiveMap!==null?(i.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`),r.push(a(s.emissiveMap,"emissive",new fe(s.emissive.r*s.emissiveIntensity,s.emissive.g*s.emissiveIntensity,s.emissive.b*s.emissiveIntensity)))):s.emissive.getHex()>0&&i.push(`${n}color3f inputs:emissiveColor = ${Ng(s.emissive)}`),s.normalMap!==null&&(i.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`),r.push(a(s.normalMap,"normal"))),s.aoMap!==null&&(i.push(`${n}float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`),r.push(a(s.aoMap,"occlusion",new fe(s.aoMapIntensity,s.aoMapIntensity,s.aoMapIntensity)))),s.roughnessMap!==null?(i.push(`${n}float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`),r.push(a(s.roughnessMap,"roughness",new fe(s.roughness,s.roughness,s.roughness)))):i.push(`${n}float inputs:roughness = ${s.roughness}`),s.metalnessMap!==null?(i.push(`${n}float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`),r.push(a(s.metalnessMap,"metallic",new fe(s.metalness,s.metalness,s.metalness)))):i.push(`${n}float inputs:metallic = ${s.metalness}`),s.alphaMap!==null?(i.push(`${n}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`),i.push(`${n}float inputs:opacityThreshold = 0.0001`),r.push(a(s.alphaMap,"opacity"))):i.push(`${n}float inputs:opacity = ${s.opacity}`),s.isMeshPhysicalMaterial&&(s.clearcoatMap!==null?(i.push(`${n}float inputs:clearcoat.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatMap.id}_clearcoat.outputs:r>`),r.push(a(s.clearcoatMap,"clearcoat",new fe(s.clearcoat,s.clearcoat,s.clearcoat)))):i.push(`${n}float inputs:clearcoat = ${s.clearcoat}`),s.clearcoatRoughnessMap!==null?(i.push(`${n}float inputs:clearcoatRoughness.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),r.push(a(s.clearcoatRoughnessMap,"clearcoatRoughness",new fe(s.clearcoatRoughness,s.clearcoatRoughness,s.clearcoatRoughness)))):i.push(`${n}float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`),i.push(`${n}float inputs:ior = ${s.ior}`)),`
	def Material "Material_${s.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${i.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>

${r.join(`
`)}

	}
`}function Ng(s){return`(${s.r}, ${s.g}, ${s.b})`}function Fg(s){return`(${s.x}, ${s.y})`}/* @license
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
 */var Gr=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};let Qg=!1,Og=!1;const kg="#model-viewer-no-ar-fallback",OC=(Gg=["quick-look","scene-viewer","webxr","none"],s=>{try{const e=oi(s),t=(e.length?e[0].terms:[]).filter(n=>n&&n.type==="ident").map(n=>n.value).filter(n=>Gg.indexOf(n)>-1);return new Set(t)}catch{}return new Set});var Gg;const Vh="quick-look",Hg="scene-viewer",zg="webxr",sa="none",ii=Symbol("arButtonContainer"),Vg=Symbol("enterARWithWebXR"),Wg=Symbol("openSceneViewer"),qg=Symbol("openIOSARQuickLook"),kC=Symbol("canActivateAR"),Ho=Symbol("arMode"),Wh=Symbol("arModes"),Hr=Symbol("arAnchor"),zo=Symbol("preload"),Vo=Symbol("onARButtonContainerClick"),qh=Symbol("onARStatus"),Xh=Symbol("onARTracking"),jh=Symbol("onARTap"),aa=Symbol("selectARMode"),Yh=Symbol("triggerLoad");/* @license
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
 */var Kh=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const Jh="auto",GC="auto",HC="eager",zr=Symbol("defaultProgressBarElement"),$h=Symbol("posterContainerElement"),Vr=Symbol("defaultPosterElement"),oa=Symbol("shouldDismissPoster"),Zh=Symbol("hidePoster"),Wo=Symbol("modelIsRevealed"),eu=Symbol("updateProgressBar"),zC=Symbol("ariaLabelCallToAction"),tu=Symbol("onProgress");/* @license
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
 */var nu=function(s,e,t,n){for(var i,r=arguments.length,a=r<3?e:n,o=s.length-1;o>=0;o--)(i=s[o])&&(a=(r<3?i(a):r>3?i(e,t,a):i(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};const VC=Math.PI/32,WC={basis:[Hl(kt(VC,"rad"))],keywords:{auto:[null]}},Wr=Symbol("autoRotateStartTime"),iu=Symbol("radiansPerSecond"),Xg=Symbol("syncRotationRate"),ru=Symbol("onCameraChange"),qC=(s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this[e]=new Map,this[t]=a=>{a.forEach(o=>{o instanceof MutationRecord&&o.type!=="childList"||(o.addedNodes.forEach(l=>{this[kh](l)}),o.removedNodes.forEach(l=>{this[Mg](l)}),this[Qt]())})},this[n]=new MutationObserver(this[Oh])}connectedCallback(){super.connectedCallback();for(let o=0;o<this.children.length;++o)this[kh](this.children[o]);const{ShadyDOM:a}=self;a==null?this[na].observe(this,{childList:!0}):this[na]=a.observeChildren(this,this[Oh])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:a}=self;a==null?this[na].disconnect():a.unobserveChildren(this[na])}[(e=Xi,t=Oh,n=na,Rn)](){super[Rn]();const a=this[le];a.forHotspots(o=>{a.updateSurfaceHotspot(o)})}[Bn](a,o){super[Bn](a,o);const l=this[le],{annotationRenderer:c}=l,h=l.getCamera();l.shouldRender()&&(l.animateSurfaceHotspots(),l.updateHotspotsVisibility(h.position),c.domElement.style.display="",c.render(l,h))}updateHotspot(a){const o=this[Xi].get(a.name);o!=null&&(o.updatePosition(a.position),o.updateNormal(a.normal),o.surface=a.surface,this[le].updateSurfaceHotspot(o),this[Qt]())}queryHotspot(a){const o=this[Xi].get(a);if(o==null)return null;const l=yi(o.position),c=yi(o.normal),h=o.facingCamera,u=this[le],d=u.getCamera(),A=new T;A.setFromMatrixPosition(o.matrixWorld),A.project(d);const p=u.width/2,g=u.height/2;A.x=A.x*p+p,A.y=-A.y*g+g;const f=yi(new T(A.x,A.y,A.z));return Number.isFinite(f.x)&&Number.isFinite(f.y)?{position:l,normal:c,canvasPosition:f,facingCamera:h}:null}positionAndNormalFromPoint(a,o){const l=this[le],c=l.getNDC(a,o),h=l.positionAndNormalFromPoint(c);if(h==null)return null;Gh.copy(l.target.matrixWorld).invert();const u=yi(h.position.applyMatrix4(Gh)),d=yi(h.normal.transformDirection(Gh));let A=null;return h.uv!=null&&(A=qu(h.uv)),{position:u,normal:d,uv:A}}surfaceFromPoint(a,o){const l=this[le],c=l.getNDC(a,o);return l.surfaceFromPoint(c)}[kh](a){if(!(a instanceof HTMLElement&&a.slot.indexOf("hotspot")===0))return;let o=this[Xi].get(a.slot);o!=null?o.increment():(o=new R0({name:a.slot,position:a.dataset.position,normal:a.dataset.normal,surface:a.dataset.surface}),this[Xi].set(a.slot,o),this[le].addHotspot(o)),this[le].queueRender()}[Mg](a){if(!(a instanceof HTMLElement))return;const o=this[Xi].get(a.slot);o&&(o.decrement()&&(this[le].removeHotspot(o),this[Xi].delete(a.slot)),this[le].queueRender())}}return i})((s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this[e]=void 0,this[t]=null,this[n]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[er]}get availableVariants(){return this.model?this.model[zu]():[]}get originalGltfJson(){return this[ll]}[(e=er,t=ol,n=ll,Th)](){return()=>{this[Qt]()}}[Zs](a){return a.colorSpace=st,a.wrapS=Qn,a.wrapT=Qn,new x0(this[Th](),a)}async createTexture(a,o="image/png"){const{textureUtils:l}=this[je],c=await l.loadImage(a,this.withCredentials);return c.userData.mimeType=o,this[Zs](c)}async createLottieTexture(a,o=1){const{textureUtils:l}=this[je],c=await l.loadLottie(a,o,this.withCredentials);return this[Zs](c)}createVideoTexture(a){const o=document.createElement("video");o.crossOrigin=this.withCredentials?"use-credentials":"anonymous",o.src=a,o.muted=!0,o.playsInline=!0,o.loop=!0,o.play();const l=new qy(o);return this[Zs](l)}createCanvasTexture(){const a=document.createElement("canvas"),o=new gf(a);return this[Zs](o)}async updated(a){if(super.updated(a),a.has("variantName")){const o=this[rr].beginActivity("variant-update");o(.1);const l=this[er],{variantName:c}=this;l!=null&&(await l[b0](c),this[Qt](),this.dispatchEvent(new CustomEvent("variant-applied"))),o(1)}if(a.has("orientation")||a.has("scale")){if(!this.loaded)return;const o=this[le];o.applyTransform(),o.updateBoundingBox(),o.updateShadow(),this[je].arRenderer.onUpdateScene(),this[Qt]()}}[Rn](){super[Rn]();const{currentGLTF:a}=this[le];if(a!=null){const{correlatedSceneGraph:o}=a;o!=null&&a!==this[ol]&&(this[er]=new mC(o,this[Th]()),this[ll]=JSON.parse(JSON.stringify(o.gltf))),"variants"in a.userData&&this.requestUpdate("variantName")}this[ol]=a}async exportScene(a){const o=this[le];return new Promise(async(l,c)=>{const h={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(h,a),h.animations=o.animations,h.truncateDrawRange=!0;const u=o.shadow;let d=!1;u!=null&&(d=u.visible,u.visible=!1),await this[er][M0](),new vd().register(A=>new lS(A)).parse(o.model,A=>l(new Blob([h.binary?A:JSON.stringify(A)],{type:h.binary?"application/octet-stream":"application/json"})),()=>c("glTF export failed"),h),u!=null&&(u.visible=d)})}materialFromPoint(a,o){const l=this[er];if(l==null)return null;const c=this[le],h=c.getNDC(a,o),u=c.hitFromPoint(h);return u==null||u.face==null?null:l[T0](u)}}return bh([Ee({type:String,attribute:"variant-name"})],i.prototype,"variantName",void 0),bh([Ee({type:String,attribute:"orientation"})],i.prototype,"orientation",void 0),bh([Ee({type:String,attribute:"scale"})],i.prototype,"scale",void 0),i})((s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=3e3,this.rotationPerSecond="auto",this[e]=performance.now(),this[t]=0,this[n]=a=>{this.autoRotate&&a.detail.source==="user-interaction"&&(this[Wr]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[ru]),this[Wr]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[ru]),this[Wr]=performance.now()}updated(a){super.updated(a),a.has("autoRotate")&&(this[Wr]=performance.now())}[(e=Wr,t=iu,Xg)](a){this[iu]=a[0]}[Bn](a,o){if(super[Bn](a,o),!this.autoRotate||!this[sr]()||this[je].isPresenting)return;const l=Math.min(o,a-this[Wr]-this.autoRotateDelay);l>0&&(this[le].yaw=this.turntableRotation+this[iu]*l*.001)}get turntableRotation(){return this[le].yaw}resetTurntableRotation(a=0){this[le].yaw=a}}return n=ru,nu([Ee({type:Boolean,attribute:"auto-rotate"})],i.prototype,"autoRotate",void 0),nu([Ee({type:Number,attribute:"auto-rotate-delay"})],i.prototype,"autoRotateDelay",void 0),nu([vi({intrinsics:WC,updateHandler:Xg}),Ee({type:String,attribute:"rotation-per-second"})],i.prototype,"rotationPerSecond",void 0),i})((s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=0,this.shadowSoftness=1,this.exposure=1,this.toneMapping="auto",this.skyboxHeight="0",this[e]=null,this[t]=null,this[n]=null}updated(a){super.updated(a),a.has("shadowIntensity")&&(this[le].setShadowIntensity(.5*this.shadowIntensity),this[Qt]()),a.has("shadowSoftness")&&(this[le].setShadowSoftness(this.shadowSoftness),this[Qt]()),a.has("exposure")&&(this[le].exposure=this.exposure,this[Qt]()),a.has("toneMapping")&&(this[le].toneMapping=this.toneMapping==="aces"?4:this.toneMapping==="agx"?6:7,this[Qt]()),(a.has("environmentImage")||a.has("skyboxImage"))&&this[ts]()&&this[Ml](),a.has("skyboxHeight")&&(this[le].setGroundedSkybox(),this[Qt]())}hasBakedShadow(){return this[le].bakedShadows.size>0}async[(e=la,t=tl,n=vo,Ml)](){const{skyboxImage:a,environmentImage:o}=this;this[vo]!=null&&(this[vo](),this[vo]=null);const{textureUtils:l}=this[je];if(l==null)return;const c=this[rr].beginActivity("environment-update");try{const{environmentMap:h,skybox:u}=await l.generateEnvironmentMapAndSkybox(Pf(a),o,d=>c(Un(d,0,1)),this.withCredentials);this[la]!==h&&(this[la]=h,this.dispatchEvent(new CustomEvent("environment-change"))),this[tl]=u!=null?u.name===h.name?h:u:null,this[le].setEnvironmentAndSkybox(this[la],this[tl])}catch(h){if(h instanceof Error)throw this[le].setEnvironmentAndSkybox(null,null),h}finally{c(1)}}}return zi([Ee({type:String,attribute:"environment-image"})],i.prototype,"environmentImage",void 0),zi([Ee({type:String,attribute:"skybox-image"})],i.prototype,"skyboxImage",void 0),zi([Ee({type:Number,attribute:"shadow-intensity"})],i.prototype,"shadowIntensity",void 0),zi([Ee({type:Number,attribute:"shadow-softness"})],i.prototype,"shadowSoftness",void 0),zi([Ee({type:Number})],i.prototype,"exposure",void 0),zi([Ee({type:String,attribute:"tone-mapping"})],i.prototype,"toneMapping",void 0),zi([Ee({type:String,attribute:"skybox-height"})],i.prototype,"skyboxHeight",void 0),i})((s=>{var e,t,n,i,r,a,o,l,c,h,u,d,A,p,g,f,m,_;class v extends s{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=u0,this.cameraTarget="auto auto auto",this.fieldOfView="auto",this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=3e3,this.interactionPrompt=Co,this.interactionPromptStyle=sm,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.touchAction=MS,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=50,this.a11y=null,this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[t]=this.shadowRoot.querySelector("#prompt"),this[n]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[i]=this.shadowRoot.querySelector(".pan-target"),this[r]=0,this[a]=1/0,this[o]=!1,this[l]=!1,this[c]=pt.AUTOMATIC,this[h]=new NS(this[le].camera,this[xn],this[le]),this[u]=new Jo,this[d]=!1,this[A]=!1,this[p]=!1,this[g]={},this[f]=()=>{const E=this[Xe].changeSource;this[bo]=E,E===pt.USER_INTERACTION&&(this[Mo]=!0,this[wo]())},this[m]=()=>{this[om](),this[Qt]();const E=this[Xe].changeSource;this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:E}}))},this[_]=E=>{this[cl].classList.toggle("pointer-tumbling",E.type==="pointer-change-start")}}get inputSensitivity(){return this[Xe].inputSensitivity}set inputSensitivity(E){this[Xe].inputSensitivity=E}getCameraOrbit(){const{theta:E,phi:S,radius:C}=this[fh];return{theta:E,phi:S,radius:C,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return yi(this[je].isPresenting?this[je].arRenderer.target:this[le].getDynamicTarget())}getFieldOfView(){return this[Xe].getFieldOfView()}getMinimumFieldOfView(){return this[Xe].options.minimumFieldOfView}getMaximumFieldOfView(){return this[Xe].options.maximumFieldOfView}getIdealAspect(){return this[le].idealAspect}jumpCameraToGoal(){this[Xs]=!0,this.requestUpdate(Xs,!1)}resetInteractionPrompt(){this[qs]=0,this[Lr]=1/0,this[Mo]=!1,this[Wi]=this.interactionPrompt===Co&&this.cameraControls}zoom(E){const S=new WheelEvent("wheel",{deltaY:-30*E});this[xn].dispatchEvent(S)}connectedCallback(){super.connectedCallback(),this[Xe].addEventListener("user-interaction",this[Dr]),this[Xe].addEventListener("pointer-change-start",this[Ws]),this[Xe].addEventListener("pointer-change-end",this[Ws])}disconnectedCallback(){super.disconnectedCallback(),this[Xe].removeEventListener("user-interaction",this[Dr]),this[Xe].removeEventListener("pointer-change-start",this[Ws]),this[Xe].removeEventListener("pointer-change-end",this[Ws])}updated(E){super.updated(E);const S=this[Xe],C=this[le];if(E.has("cameraControls")&&(this.cameraControls?(S.enableInteraction(),this.interactionPrompt===Co&&(this[Wi]=!0)):(S.disableInteraction(),this[wo]()),this[xn].setAttribute("aria-label",this[es])),E.has("disableZoom")&&(S.disableZoom=this.disableZoom),E.has("disablePan")&&(S.enablePan=!this.disablePan),E.has("disableTap")&&(S.enableTap=!this.disableTap),(E.has("interactionPrompt")||E.has("cameraControls")||E.has("src"))&&(this.interactionPrompt===Co&&this.cameraControls&&!this[Mo]?this[Wi]=!0:this[wo]()),E.has("interactionPromptStyle")&&(this[Io].style.opacity=this.interactionPromptStyle==wS?"1":"0"),E.has("touchAction")){const B=this.touchAction;S.applyOptions({touchAction:B}),S.updateTouchActionStyle()}E.has("orbitSensitivity")&&(S.orbitSensitivity=this.orbitSensitivity),E.has("zoomSensitivity")&&(S.zoomSensitivity=this.zoomSensitivity),E.has("panSensitivity")&&(S.panSensitivity=this.panSensitivity),E.has("interpolationDecay")&&(S.setDamperDecayTime(this.interpolationDecay),C.setTargetDamperDecayTime(this.interpolationDecay)),E.has("a11y")&&this[lm](),this[Xs]===!0&&Promise.resolve().then(()=>{S.jumpToGoal(),C.jumpToGoal(),this[gh](),this[Xs]=!1})}async updateFraming(){const E=this[le],S=E.adjustedFoV(E.framedFoVDeg);await E.updateFraming();const C=E.adjustedFoV(E.framedFoVDeg),B=this[Xe].getFieldOfView()/S;this[Xe].setFieldOfView(C*B),this[js]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(E,S,C){const B=this[xn],b=this[mh];if(b[0].style.opacity==="1")return void console.warn("interact() failed because an existing interaction is running.");const R=new Array;R.push({x:$r(S.x),y:$r(S.y)});const W=[{x:R[0].x(0),y:R[0].y(0)}];C!=null&&(R.push({x:$r(C.x),y:$r(C.y)}),W.push({x:R[1].x(0),y:R[1].y(0)}));let D=performance.now();const{width:G,height:N}=this[le],z=this.getBoundingClientRect(),F=oe=>{for(const[he,Y]of W.entries()){const{style:K}=b[he];K.transform=`translateX(${G*Y.x}px) translateY(${N*Y.y}px)`,oe==="pointerdown"?K.opacity="1":oe==="pointerup"&&(K.opacity="0");const ne={pointerId:he-5678,pointerType:"touch",target:B,clientX:G*Y.x+z.x,clientY:N*Y.y+z.y,altKey:!0};B.dispatchEvent(new PointerEvent(oe,ne))}},J=()=>{const oe=this[bo];if(oe!==pt.AUTOMATIC||!B.isConnected){for(const Y of this[mh])Y.style.opacity="0";return F("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:oe}})),void document.removeEventListener("visibilitychange",ee)}const he=Math.min(1,(performance.now()-D)/E);for(const[Y,K]of W.entries())K.x=R[Y].x(he),K.y=R[Y].y(he);F("pointermove"),he<1?requestAnimationFrame(J):(F("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:pt.AUTOMATIC}})),document.removeEventListener("visibilitychange",ee))},ee=()=>{let oe=0;document.visibilityState==="hidden"?oe=performance.now()-D:D=performance.now()-oe};document.addEventListener("visibilitychange",ee),F("pointerdown"),this[bo]=pt.AUTOMATIC,requestAnimationFrame(J)}[(e=ph,t=Io,n=mh,i=sl,r=qs,a=Lr,o=Mo,l=Wi,c=bo,h=Xe,u=fh,d=Xs,A=vh,p=js,g=$n,um)](E){const S=this[Xe],C=this[le];C.framedFoVDeg=180*E[0]/Math.PI,S.changeSource=pt.NONE,S.setFieldOfView(C.adjustedFoV(C.framedFoVDeg)),this[Dr]()}[hm](E){const S=this[Xe];if(this[js]){const{theta:C,phi:B}=this.getCameraOrbit();E[0]=C,E[1]=B,this[js]=!1}S.changeSource=pt.NONE,S.setOrbit(E[0],E[1],E[2]),this[Dr]()}[Am](E){this[Xe].applyOptions({minimumAzimuthalAngle:E[0],minimumPolarAngle:E[1],minimumRadius:E[2]}),this.jumpCameraToGoal()}[pm](E){this[Xe].applyOptions({maximumAzimuthalAngle:E[0],maximumPolarAngle:E[1],maximumRadius:E[2]}),this[cm](E[2]),this.jumpCameraToGoal()}[mm](E){this[Xe].applyOptions({minimumFieldOfView:180*E[0]/Math.PI}),this.jumpCameraToGoal()}[gm](E){const S=this[le].adjustedFoV(180*E[0]/Math.PI);this[Xe].applyOptions({maximumFieldOfView:S}),this.jumpCameraToGoal()}[dm](E){const[S,C,B]=E;this[je].arRenderer.isPresenting||this[le].setTarget(S,C,B),this[Xe].changeSource=pt.NONE,this[je].arRenderer.updateTarget(),this[Dr]()}[Bn](E,S){if(super[Bn](E,S),this[je].isPresenting||!this[sr]())return;const C=this[Xe],B=this[le],b=performance.now();if(this[Wi]&&this.loaded&&b>this[da]+this.interactionPromptThreshold&&(this[Wi]=!1,this[Lr]=b,this[ph].classList.add("visible")),isFinite(this[Lr])&&this.interactionPromptStyle===sm){const D=(b-this[Lr])/5e3%1,G=xS(D),N=SS(D);if(this[Io].style.opacity=`${N}`,G!==this[qs]){const z=G*B.width*.05,F=(G-this[qs])*Math.PI/16;this[Io].style.transform=`translateX(${z}px)`,C.changeSource=pt.AUTOMATIC,C.adjustOrbit(F,0,0),this[qs]=G}}const R=C.update(E,S),W=B.updateTarget(S);(R||W)&&this[gh]()}[wo](){this[Wi]=!1,this[ph].classList.remove("visible"),this[Lr]=1/0}[cm](E){const S=Math.max(this[le].farRadius(),E),C=Math.abs(2*S);this[Xe].updateNearFar(0,C)}[om](){const{theta:E,phi:S}=this[Xe].getCameraSpherical(this[fh]),C=(4+Math.floor((E%US+LS)/A0))%4,B=Math.floor(S/DS),b=`${IS[B]}${CS[C]}`,R=b;R in this[$n]?this[Rl](this[$n][R]):this[Rl](`View from stage ${b}`)}get[es](){let E=". Use mouse, touch or arrow keys to move.";return"interaction-prompt"in this[$n]&&(E=`. ${this[$n]["interaction-prompt"]}`),super[es].replace(/\.$/,"")+(this.cameraControls?E:"")}async[Dl](E){const S=this[Xe],C=this[le],B=C.adjustedFoV(C.framedFoVDeg);super[Dl](E);const b=C.adjustedFoV(C.framedFoVDeg)/B,R=S.getFieldOfView()*(isFinite(b)?b:1);S.updateAspect(this[le].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[Xe].setFieldOfView(R),this.jumpCameraToGoal()}[Rn](){super[Rn](),this[vh]?this[js]=!0:this[vh]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}[(f=Dr,m=gh,_=Ws,lm)](){if(typeof this.a11y=="string")if(this.a11y.startsWith("{"))try{this[$n]=JSON.parse(this.a11y)}catch(E){console.warn("Error parsing a11y JSON:",E)}else this.a11y.length>0?console.warn("Error not supported format, should be a JSON string:",this.a11y):this[$n]={};else typeof this.a11y=="object"&&this.a11y!=null?this[$n]=Object.assign({},this.a11y):this[$n]={};this[xn].setAttribute("aria-label",this[es])}}return _t([Ee({type:Boolean,attribute:"camera-controls"})],v.prototype,"cameraControls",void 0),_t([vi({intrinsics:d0,observeEffects:!0,updateHandler:hm}),Ee({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],v.prototype,"cameraOrbit",void 0),_t([vi({intrinsics:RS,observeEffects:!0,updateHandler:dm}),Ee({type:String,attribute:"camera-target",hasChanged:()=>!0})],v.prototype,"cameraTarget",void 0),_t([vi({intrinsics:am,observeEffects:!0,updateHandler:um}),Ee({type:String,attribute:"field-of-view",hasChanged:()=>!0})],v.prototype,"fieldOfView",void 0),_t([vi({intrinsics:TS,updateHandler:Am}),Ee({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],v.prototype,"minCameraOrbit",void 0),_t([vi({intrinsics:BS,updateHandler:pm}),Ee({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],v.prototype,"maxCameraOrbit",void 0),_t([vi({intrinsics:bS,updateHandler:mm}),Ee({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],v.prototype,"minFieldOfView",void 0),_t([vi({intrinsics:am,updateHandler:gm}),Ee({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],v.prototype,"maxFieldOfView",void 0),_t([Ee({type:Number,attribute:"interaction-prompt-threshold"})],v.prototype,"interactionPromptThreshold",void 0),_t([Ee({type:String,attribute:"interaction-prompt"})],v.prototype,"interactionPrompt",void 0),_t([Ee({type:String,attribute:"interaction-prompt-style"})],v.prototype,"interactionPromptStyle",void 0),_t([Ee({type:Number,attribute:"orbit-sensitivity"})],v.prototype,"orbitSensitivity",void 0),_t([Ee({type:Number,attribute:"zoom-sensitivity"})],v.prototype,"zoomSensitivity",void 0),_t([Ee({type:Number,attribute:"pan-sensitivity"})],v.prototype,"panSensitivity",void 0),_t([Ee({type:String,attribute:"touch-action"})],v.prototype,"touchAction",void 0),_t([Ee({type:Boolean,attribute:"disable-zoom"})],v.prototype,"disableZoom",void 0),_t([Ee({type:Boolean,attribute:"disable-pan"})],v.prototype,"disablePan",void 0),_t([Ee({type:Boolean,attribute:"disable-tap"})],v.prototype,"disableTap",void 0),_t([Ee({type:Number,attribute:"interpolation-decay"})],v.prototype,"interpolationDecay",void 0),_t([Ee()],v.prototype,"a11y",void 0),v})((s=>{var e,t,n,i,r,a,o,l,c,h;class u extends s{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes="webxr scene-viewer quick-look",this.iosSrc=null,this.xrEnvironment=!1,this[e]=!1,this[t]=this.shadowRoot.querySelector(".ar-button"),this[n]=document.createElement("a"),this[i]=new Set,this[r]=sa,this[a]=!1,this[o]=A=>{A.preventDefault(),this.activateAR()},this[l]=({status:A})=>{A!==al&&this[je].arRenderer.presentedScene!==this[le]||(this.setAttribute("ar-status",A),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:A}})),A===al?this.removeAttribute("ar-tracking"):A===p0&&this.setAttribute("ar-tracking",m0))},this[c]=({status:A})=>{this.setAttribute("ar-tracking",A),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:A}}))},this[h]=A=>{A.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[Ho]!==sa}connectedCallback(){super.connectedCallback(),this[je].arRenderer.addEventListener("status",this[qh]),this.setAttribute("ar-status",al),this[je].arRenderer.addEventListener("tracking",this[Xh]),this[Hr].addEventListener("message",this[jh])}disconnectedCallback(){super.disconnectedCallback(),this[je].arRenderer.removeEventListener("status",this[qh]),this[je].arRenderer.removeEventListener("tracking",this[Xh]),this[Hr].removeEventListener("message",this[jh])}update(A){super.update(A),A.has("arScale")&&(this[le].canScale=this.arScale!=="fixed"),A.has("arPlacement")&&(this[le].updateShadow(),this[Qt]()),A.has("arModes")&&(this[Wh]=OC(this.arModes)),(A.has("ar")||A.has("arModes")||A.has("src")||A.has("iosSrc"))&&this[aa]()}async activateAR(){switch(this[Ho]){case Vh:await this[qg]();break;case zg:await this[Vg]();break;case Hg:this[Wg]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities")}}async[(e=kC,t=ii,n=Hr,i=Wh,r=Ho,a=zo,o=Vo,l=qh,c=Xh,h=jh,aa)](){var A;let p=sa;if(this.ar){if(this.src!=null)for(const g of this[Wh]){if(g==="webxr"&&Uf&&!Qg&&await this[je].arRenderer.supportsPresentation()){p=zg;break}if(g==="scene-viewer"&&!Og&&(PE||navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&(!((A=(await navigator.userAgentData.getHighEntropyValues(["formFactor"])).formFactor)===null||A===void 0)&&A.includes("XR")))){p=Hg;break}if(g==="quick-look"&&dp){p=Vh;break}}p===sa&&this.iosSrc!=null&&dp&&(p=Vh)}if(p!==sa)this[ii].classList.add("enabled"),this[ii].addEventListener("click",this[Vo]);else if(this[ii].classList.contains("enabled")){this[ii].removeEventListener("click",this[Vo]),this[ii].classList.remove("enabled");const g=QS;this.setAttribute("ar-status",g),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:g}}))}this[Ho]=p}async[Vg](){console.log("Attempting to present in AR with WebXR..."),await this[Yh]();try{this[ii].removeEventListener("click",this[Vo]);const{arRenderer:A}=this[je];A.placeOnWall=this.arPlacement==="wall",await A.present(this[le],this.xrEnvironment)}catch(A){console.warn("Error while trying to present in AR with WebXR"),console.error(A),await this[je].arRenderer.stopPresenting(),Qg=!0,console.warn("Falling back to next ar-mode"),await this[aa](),this.activateAR()}finally{this[aa]()}}async[Yh](){this.loaded||(this[zo]=!0,this[as](),await((A,p,g=null)=>new Promise(f=>{A.addEventListener(p,function m(_){g&&!g(_)||(f(_),A.removeEventListener(p,m))})}))(this,"load"),this[zo]=!1)}[ts](){return super[ts]()||this[zo]}[Wg](){const A=self.location.toString(),p=new URL(A),g=new URL(this.src,A);g.hash&&(g.hash="");const f=new URLSearchParams(g.search);if(p.hash=kg,f.set("mode","ar_preferred"),f.has("disable_occlusion")||f.set("disable_occlusion","true"),this.arScale==="fixed"&&f.set("resizable","false"),this.arPlacement==="wall"&&f.set("enable_vertical_placement","true"),f.has("sound")){const _=new URL(f.get("sound"),A);f.set("sound",_.toString())}if(f.has("link")){const _=new URL(f.get("link"),A);f.set("link",_.toString())}const m=`intent://arvr.google.com/scene-viewer/1.2?${f.toString()+"&file="+encodeURIComponent(g.toString())}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(p.toString())};end;`;self.addEventListener("hashchange",()=>{self.location.hash===kg&&(Og=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[aa]())},{once:!0}),this[Hr].setAttribute("href",m),console.log("Attempting to present in AR with Scene Viewer..."),this[Hr].click()}async[qg](){const A=!this.iosSrc;this[ii].classList.remove("enabled");const p=A?await this.prepareUSDZ():this.iosSrc,g=new URL(p,self.location.toString());if(A){const _=self.location.toString(),v=new URL(_),y=new URL(this.src,v);y.hash&&(g.hash=y.hash)}this.arScale==="fixed"&&(g.hash&&(g.hash+="&"),g.hash+="allowsContentScaling=0");const f=this[Hr];f.setAttribute("rel","ar");const m=document.createElement("img");f.appendChild(m),f.setAttribute("href",g.toString()),A&&f.setAttribute("download","model.usdz"),f.style.display="none",f.isConnected||this.shadowRoot.appendChild(f),console.log("Attempting to present in AR with Quick Look..."),f.click(),f.removeChild(m),A&&URL.revokeObjectURL(p),this[ii].classList.add("enabled")}async prepareUSDZ(){const A=this[rr].beginActivity("usdz-conversion");await this[Yh]();const{model:p,shadow:g,target:f}=this[le];if(p==null)return"";let m=!1;g!=null&&(m=g.visible,g.visible=!1),A(.2);const _=new PC;f.remove(p),p.position.copy(f.position),p.updateWorldMatrix(!1,!0);const v=await _.parseAsync(p);p.position.set(0,0,0),f.add(p);const y=new Blob([v],{type:"model/vnd.usdz+zip"}),E=URL.createObjectURL(y);return A(1),g!=null&&(g.visible=m),E}}return Gr([Ee({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),Gr([Ee({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),Gr([Ee({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),Gr([Ee({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),Gr([Ee({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),Gr([Ee({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u})((s=>{var e,t,n,i,r,a,o,l;class c extends s{constructor(...u){super(...u),this.poster=null,this.reveal=Jh,this.loading=GC,this[e]=!1,this[t]=!1,this[n]=this.shadowRoot.querySelector(".slot.poster"),this[i]=this.shadowRoot.querySelector("#default-poster"),this[r]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[a]=this[Vr].getAttribute("aria-label"),this[o]=((f,m)=>{let _=null;const v=(...y)=>{_==null&&(f(...y),_=self.setTimeout(()=>_=null,m))};return v.flush=()=>{_!=null&&(self.clearTimeout(_),_=null)},v})(f=>{const m=this[zr].parentNode;requestAnimationFrame(()=>{this[zr].style.transform=`scaleX(${f})`,f===0&&(m.removeChild(this[zr]),m.appendChild(this[zr])),this[zr].classList.toggle("hide",f===1)})},100),this[l]=f=>{const m=f.detail.totalProgress,_=f.detail.reason;m===1&&(this[eu].flush(),this.loaded&&(this[oa]||this.reveal===Jh)&&this[Zh]()),this[eu](m),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:m,reason:_}}))};const d=self.ModelViewerElement||{},A=d.dracoDecoderLocation||"https://www.gstatic.com/draco/versioned/decoders/1.5.6/";qt.setDRACODecoderLocation(A);const p=d.ktx2TranscoderLocation||"https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/";qt.setKTX2TranscoderLocation(p),d.meshoptDecoderLocation&&qt.setMeshoptDecoderLocation(d.meshoptDecoderLocation);const g=d.lottieLoaderLocation||"https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js";Cn.singleton.textureUtils.lottieLoaderUrl=g}static set dracoDecoderLocation(u){qt.setDRACODecoderLocation(u)}static get dracoDecoderLocation(){return qt.getDRACODecoderLocation()}static set ktx2TranscoderLocation(u){qt.setKTX2TranscoderLocation(u)}static get ktx2TranscoderLocation(){return qt.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(u){qt.setMeshoptDecoderLocation(u)}static get meshoptDecoderLocation(){return qt.getMeshoptDecoderLocation()}static set lottieLoaderLocation(u){Cn.singleton.textureUtils.lottieLoaderUrl=u}static get lottieLoaderLocation(){return Cn.singleton.textureUtils.lottieLoaderUrl}static mapURLs(u){Cn.singleton.loader[Ji].manager.setURLModifier(u)}dismissPoster(){this.loaded?this[Zh]():(this[oa]=!0,this[as]())}showPoster(){const u=this[$h];if(u.classList.contains("show"))return;u.classList.add("show"),this[xn].classList.remove("show");const d=this[Vr];d.removeAttribute("tabindex"),d.removeAttribute("aria-hidden");const A=this.modelIsVisible;this[Wo]=!1,this[Bl](A)}getDimensions(){return yi(this[le].size)}getBoundingBoxCenter(){return yi(this[le].boundingBox.getCenter(new T))}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[rr].addEventListener("progress",this[tu])}disconnectedCallback(){super.disconnectedCallback(),this[rr].removeEventListener("progress",this[tu])}async updated(u){super.updated(u),u.has("poster")&&this.poster!=null&&(this[Vr].style.backgroundImage=`url(${this.poster})`),u.has("alt")&&this[Vr].setAttribute("aria-label",this[Vu]),(u.has("reveal")||u.has("loading"))&&this[as]()}[(e=Wo,t=oa,n=$h,i=Vr,r=zr,a=zC,o=eu,l=tu,ts)](){return!!this.src&&(this[oa]||this.loading===HC||this.reveal===Jh&&this[tr])}[Zh](){this[oa]=!1;const u=this[$h];if(!u.classList.contains("show"))return;u.classList.remove("show"),this[xn].classList.add("show");const d=this.modelIsVisible;this[Wo]=!0,this[Bl](d);const A=this.getRootNode();A&&A.activeElement===this&&this[xn].focus();const p=this[Vr];p.setAttribute("aria-hidden","true"),p.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[sr](){return super[sr]()&&this[Wo]}}return Kh([Ee({type:String})],c.prototype,"poster",void 0),Kh([Ee({type:String})],c.prototype,"reveal",void 0),Kh([Ee({type:String})],c.prototype,"loading",void 0),c})((s=>{var e;class t extends s{constructor(...i){super(i),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0,this[le].subscribeMixerEvent("loop",r=>{const a=r.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:a}}))}),this[le].subscribeMixerEvent("finished",()=>{this[ti]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[le].animationNames:[]}get duration(){return this[le].duration}get paused(){return this[ti]}get currentTime(){return this[le].animationTime}set currentTime(i){this[le].animationTime=i,this[Qt]()}get timeScale(){return this[le].animationTimeScale}set timeScale(i){this[le].animationTimeScale=i}pause(){this[ti]||(this[ti]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(i){this.availableAnimations.length>0&&(this[ti]=!1,this[ko](i),this.dispatchEvent(new CustomEvent("play")))}[(e=ti,Rn)](){super[Rn](),this[ti]=!0,this.animationName!=null&&this[ko](),this.autoplay&&this.play()}[Bn](i,r){super[Bn](i,r),this[ti]||!this[sr]()&&!this[je].isPresenting||(this[le].updateAnimation(r/1e3),this[Qt]())}updated(i){super.updated(i),i.has("autoplay")&&this.autoplay&&this.play(),i.has("animationName")&&this[ko]()}[ko](i=SC){var r;const a=(r=i.repetitions)!==null&&r!==void 0?r:1/0,o=i.pingpong?id:a===1?2200:Yg;this[le].playAnimation(this.animationName,this.animationCrossfadeDuration/1e3,o,a),this[ti]&&(this[le].updateAnimation(0),this[Qt]())}}return Qh([Ee({type:Boolean})],t.prototype,"autoplay",void 0),Qh([Ee({type:String,attribute:"animation-name"})],t.prototype,"animationName",void 0),Qh([Ee({type:Number,attribute:"animation-crossfade-duration"})],t.prototype,"animationCrossfadeDuration",void 0),t})(Aa))))))));customElements.define("model-viewer",qC);export{gf as CanvasTexture,li as FileLoader,Gn as Loader,qC as ModelViewerElement,Ut as NearestFilter};
