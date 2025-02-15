var Qe=e=>{throw TypeError(e)};var qt=(e,t,n)=>t.has(e)||Qe("Cannot "+n);var S=(e,t,n)=>(qt(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?Qe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{ak as T,g as O,i as j,b7 as Ie,b6 as Gt}from"./CSs5j321.js";import{w as Ce}from"./D5St-4ZP.js";import{o as et}from"./i_6tuh6C.js";new URL("sveltekit-internal://");function Ht(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Mt(e){return e.split("%25").map(decodeURI).join("%25")}function Kt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Ue({href:e}){return e.split("#")[0]}function Wt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return f=>(n(f),i[s](f));t();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return r||Yt(a),a}function Yt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead")}})}const Jt="/__data.json",zt=".html__data.json";function Xt(e){return e.endsWith(".html")?e.replace(/\.html$/,zt):e.replace(/\/$/,"")+Jt}function Zt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Qt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}let Ne=0;const en=window.fetch;function tn(){Ne+=1}function nn(){Ne-=1}{let e=!1;(async()=>{e=new Error().stack.includes("check_stack_trace")})(),window.fetch=(n,r)=>{const a=n instanceof Request?n.url:n.toString(),o=new Error().stack.split(`
`),i=o.findIndex(h=>h.includes("load@")||h.includes("at load")),s=o.slice(0,i+2).join(`
`),c=e?s.includes("src/runtime/client/client.js"):Ne,f=r==null?void 0:r.__sveltekit_fetch__;return c&&!f&&console.warn(`Loading ${a} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://svelte.dev/docs/kit/load#making-fetch-requests`),(n instanceof Request?n.method:(r==null?void 0:r.method)||"GET")!=="GET"&&K.delete(Fe(n)),en(n,r)}}const K=new Map;function rn(e,t){const n=Fe(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&K.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Qt(a)),Promise.resolve(new Response(a,o))}return De(e,t)}function an(e,t,n){if(K.size>0){const r=Fe(e,n),a=K.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);K.delete(r)}}return De(t,n)}function De(e,t){const n={...t};return Object.defineProperty(n,"__sveltekit_fetch__",{value:!0,writable:!0,configurable:!0}),window.fetch(e,n)}function Fe(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Zt(...a)}"]`}return r}const on=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function sn(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${ln(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return $e(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return $e(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=on.exec(c),[,h,w,u,p]=d;return t.push({name:u,matcher:p,optional:!!h,rest:!!w,chained:w?f===1&&i[0]==="":!1}),w?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return $e(c)}).join("")}).join("")}/?$`),params:t}}function cn(e){return!/^\([^)]+\)$/.test(e)}function ln(e){return e.slice(1).split("/").filter(cn)}function fn(e,t,n){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<t.length;s+=1){const c=t[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const d=t[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function $e(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function un({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([s,[c,f,d]])=>{const{pattern:h,params:w}=sn(s),u={id:s,exec:p=>{const l=h.exec(p);if(l)return fn(l,w,r)},errors:[1,...d||[]].map(p=>e[p]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function yt(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function tt(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var dt;const L=((dt=globalThis.__sveltekit_1eb81vi)==null?void 0:dt.base)??"";var pt;(pt=globalThis.__sveltekit_1eb81vi)==null||pt.assets;const _t="sveltekit:snapshot",vt="sveltekit:scroll",bt="sveltekit:states",hn="sveltekit:pageurl",q="sveltekit:history",J="sveltekit:navigation",fe={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},le=location.origin;function kt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Ve(){return{x:pageXOffset,y:pageYOffset}}const nt=new WeakSet,rt={"preload-code":["","off","false","tap","hover","viewport","eager"],"preload-data":["","off","false","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function B(e,t){const n=e.getAttribute(`data-sveltekit-${t}`);return dn(e,t,n),n}function dn(e,t,n){n!==null&&!nt.has(e)&&!rt[t].includes(n)&&(console.error(`Unexpected value for ${t} — should be one of ${rt[t].map(r=>JSON.stringify(r)).join(", ")}`,e),nt.add(e))}const at={...fe,"":fe.hover};function St(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function Et(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=St(e)}}function Pe(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const s=location.hash.split("#")[1]||"/";r.hash=`#${s}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,o=!r||!!a||be(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===le&&e.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function ue(e){let t=null,n=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=B(s,"preload-code")),a===null&&(a=B(s,"preload-data")),t===null&&(t=B(s,"keepfocus")),n===null&&(n=B(s,"noscroll")),o===null&&(o=B(s,"reload")),i===null&&(i=B(s,"replacestate")),s=St(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:at[r??"off"],preload_data:at[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(i)}}function ot(e){const t=Ce(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function o(i){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function pn(){const{set:e,subscribe:t}=Ce(!1);return{subscribe:t,check:async()=>!1}}function be(e,t,n){return e.origin!==le||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function st(e){const t=mn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const gn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function mn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=gn.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const wn=-1,yn=-2,_n=-3,vn=-4,bn=-5,kn=-6;function Sn(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(o,i=!1){if(o===wn)return;if(o===_n)return NaN;if(o===vn)return 1/0;if(o===bn)return-1/0;if(o===kn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=t==null?void 0:t[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const w=Object.create(null);r[o]=w;for(let u=1;u<s.length;u+=2)w[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],p=s[1],l=st(p),g=new u(l);r[o]=g;break}case"ArrayBuffer":{const u=s[1],p=st(u);r[o]=p;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==yn&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in s){const d=s[f];c[f]=a(d)}}return r[o]}return a(0)}function En(e){function t(n,r){if(n)for(const a in n){if(a[0]==="_"||e.has(a))continue;const o=[...e.values()],i=An(a,r==null?void 0:r.slice(r.lastIndexOf(".")))??`valid exports are ${o.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${a}'${r?` in ${r}`:""} (${i})`)}}return t}function An(e,t=".js"){const n=[];if(Be.has(e)&&n.push(`+layout${t}`),At.has(e)&&n.push(`+page${t}`),Rt.has(e)&&n.push(`+layout.server${t}`),Rn.has(e)&&n.push(`+page.server${t}`),In.has(e)&&n.push(`+server${t}`),n.length>0)return`'${e}' is a valid export in ${n.slice(0,-1).join(", ")}${n.length>1?" or ":""}${n.at(-1)}`}const Be=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),At=new Set([...Be,"entries"]),Rt=new Set([...Be]),Rn=new Set([...Rt,"actions","entries"]),In=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","fallback","prerender","trailingSlash","config","entries"]),Un=En(At);function $n(e){return e.filter(t=>t!=null)}class ke{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class qe{constructor(t,n){this.status=t,this.location=n}}class he extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}function xn(e,t){const n=/^(moz-icon|view-source|jar):/.exec(t);n&&console.warn(`${e}: Calling \`depends('${t}')\` will throw an error in Firefox because \`${n[1]}\` is a special URI scheme`)}const xe="x-sveltekit-invalidated",Ln="x-sveltekit-trailing-slash";function de(e){return e instanceof ke||e instanceof he?e.status:500}function Pn(e){return e instanceof he?e.text:"Internal Error"}let U,z,it;const Tn=et.toString().includes("$$")||/function \w+\(\) \{\}/.test(et.toString());var Q,ee,te,ne,re,ae,oe,se,gt,ie,mt,ce,wt;Tn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},z={current:null},it={current:!1}):(U=new(gt=class{constructor(){P(this,Q,T({}));P(this,ee,T(null));P(this,te,T(null));P(this,ne,T({}));P(this,re,T({id:null}));P(this,ae,T({}));P(this,oe,T(-1));P(this,se,T(new URL("https://example.com")))}get data(){return O(S(this,Q))}set data(t){j(S(this,Q),t)}get form(){return O(S(this,ee))}set form(t){j(S(this,ee),t)}get error(){return O(S(this,te))}set error(t){j(S(this,te),t)}get params(){return O(S(this,ne))}set params(t){j(S(this,ne),t)}get route(){return O(S(this,re))}set route(t){j(S(this,re),t)}get state(){return O(S(this,ae))}set state(t){j(S(this,ae),t)}get status(){return O(S(this,oe))}set status(t){j(S(this,oe),t)}get url(){return O(S(this,se))}set url(t){j(S(this,se),t)}[Ie](t){}},Q=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,gt),z=new(mt=class{constructor(){P(this,ie,T(null))}get current(){return O(S(this,ie))}set current(t){j(S(this,ie),t)}[Ie](t){}},ie=new WeakMap,mt),it=new(wt=class{constructor(){P(this,ce,T(!1))}get current(){return O(S(this,ce))}set current(t){j(S(this,ce),t)}[Ie](t){}},ce=new WeakMap,wt));function On(e){Object.assign(U,e)}const jn=new Set(["icon","shortcut icon","apple-touch-icon"]),V=yt(vt)??{},X=yt(_t)??{};{let e=!1;const t=import.meta.url.split("?")[0],n=()=>{var i,s;if(e)return;let o=(i=new Error().stack)==null?void 0:i.split(`
`);o&&(!o[0].includes("https:")&&!o[0].includes("http:")&&(o=o.slice(1)),o=o.slice(2),!((s=o[0])!=null&&s.includes(t))&&(e=!0,console.warn("Avoid using `history.pushState(...)` and `history.replaceState(...)` as these will conflict with SvelteKit's router. Use the `pushState` and `replaceState` imports from `$app/navigation` instead.")))},r=history.pushState;history.pushState=(...o)=>(n(),r.apply(history,o));const a=history.replaceState;history.replaceState=(...o)=>(n(),a.apply(history,o))}const N={url:ot({}),page:ot({}),navigating:Ce(null),updated:pn()};function Ge(e){V[e]=Ve()}function Cn(e,t){let n=e+1;for(;V[n];)delete V[n],n+=1;for(n=t+1;X[n];)delete X[n],n+=1}function G(e){return location.href=e.href,new Promise(()=>{})}async function It(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(L||"/");e&&await e.update()}}function ct(){}let Se,Te,pe,C,Oe,k;const ge=[],me=[];let $=null;const Ut=new Set,Nn=new Set,W=new Set;let _={branch:[],error:null,url:null},He=!1,we=!1,lt=!0,Z=!1,H=!1,$t=!1,Me=!1,xt,I,x,ye;const Y=new Set;async function tr(e,t,n){var a,o,i,s;t===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`),document.URL!==location.href&&(location.href=location.href),k=e,await((o=(a=e.hooks).init)==null?void 0:o.call(a)),Se=un(e),C=document.documentElement,Oe=t,Te=e.nodes[0],pe=e.nodes[1],Te(),pe(),I=(i=history.state)==null?void 0:i[q],x=(s=history.state)==null?void 0:s[J],I||(I=x=Date.now(),history.replaceState({...history.state,[q]:I,[J]:x},""));const r=V[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Kn(Oe,n):Gn(k.hash?Bt(new URL(location.href)):location.href,{replaceState:!0}),Mn()}function Dn(){ge.length=0,Me=!1}function Lt(e){me.some(t=>t==null?void 0:t.snapshot)&&(X[e]=me.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function Pt(e){var t;(t=X[e])==null||t.forEach((n,r)=>{var a,o;(o=(a=me[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function ft(){Ge(I),tt(vt,V),Lt(x),tt(_t,X)}async function Ke(e,t,n,r){return M({type:"goto",url:kt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Me=!0),t.invalidate&&t.invalidate.forEach(Hn)}})}async function Fn(e){if(e.id!==($==null?void 0:$.id)){const t={};Y.add(t),$={id:e.id,token:t,promise:Ot({...e,preload:t}).then(n=>(Y.delete(t),n.type==="loaded"&&n.state.error&&($=null),n))}}return $.promise}async function Le(e){const t=jt(e);if(!t)return;const n=Se.find(r=>r.exec(Ct(t)));n&&await Promise.all([...n.layouts,n.leaf].map(r=>r==null?void 0:r[1]()))}function Tt(e,t,n){var o;if(e.state.error&&document.querySelector("vite-error-overlay"))return;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,e.props.page),xt=new k.root({target:t,props:{...e.props,stores:N,components:me},hydrate:n,sync:!1}),Pt(x);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};W.forEach(i=>i(a)),we=!0}function _e({url:e,params:t,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(L&&(e.pathname===L||e.pathname===L+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=Ht(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:o},props:{constructors:$n(n).map(u=>u.node.component),page:ze(U)}};i!==void 0&&(c.props.form=i);let f={},d=!U,h=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const p=n[u],l=_.branch[u];(p==null?void 0:p.data)!==(l==null?void 0:l.data)&&(d=!0),p&&(f={...f,...p.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==U.form||d)&&(c.props.page={error:a,params:t,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:U.data}),c}async function We({loader:e,parent:t,url:n,params:r,route:a,server_data_node:o}){var d,h,w;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if(Un(f.universal),f.universal&&k.hash){const u=Object.keys(f.universal).filter(p=>p!=="load");if(u.length>0)throw new Error(`Page options are ignored when \`router.type === 'hash'\` (${a.id} has ${u.filter(p=>p!=="load").map(p=>`'${p}'`).join(", ")})`)}if((d=f.universal)!=null&&d.load){let u=function(...l){for(const g of l){xn(a.id,g);const{href:y}=new URL(g,n);c.dependencies.add(y)}};const p={route:new Proxy(a,{get:(l,g)=>(s&&(c.route=!0),l[g])}),params:new Proxy(r,{get:(l,g)=>(s&&c.params.add(g),l[g])}),data:(o==null?void 0:o.data)??null,url:Wt(n,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)},k.hash),async fetch(l,g){let y;l instanceof Request?(y=l.url,g={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...g}):y=l;const R=new URL(y,n);return s&&u(R.href),R.origin===n.origin&&(y=R.href.slice(n.origin.length)),we?an(y,R.href,g):rn(y,g)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),t()},untrack(l){s=!1;try{return l()}finally{s=!0}}};try{if(tn(),i=await f.universal.load.call(null,p)??null,i!=null&&Object.getPrototypeOf(i)!==Object.prototype)throw new Error(`a load function related to route '${a.id}' returned ${typeof i!="object"?`a ${typeof i}`:i instanceof Response?"a Response object":Array.isArray(i)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{nn()}}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((w=f.universal)==null?void 0:w.trailingSlash)??(o==null?void 0:o.slash)}}function ut(e,t,n,r,a,o){if(Me)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(ge.some(s=>s(new URL(i))))return!0;return!1}function Ye(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Vn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),o=t.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function ht({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:ze(U),constructors:[]}}}async function Ot({id:e,invalidating:t,url:n,params:r,route:a,preload:o}){if(($==null?void 0:$.id)===e)return Y.delete($.token),$.promise;const{errors:i,layouts:s,leaf:c}=a,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?e!==ve(_.url):!1,w=_.route?a.id!==_.route.id:!1,u=Vn(_.url,n);let p=!1;const l=f.map((m,v)=>{var D;const E=_.branch[v],A=!!(m!=null&&m[0])&&((E==null?void 0:E.loader)!==m[1]||ut(p,w,h,u,(D=E.server)==null?void 0:D.uses,r));return A&&(p=!0),A});if(l.some(Boolean)){try{d=await Dt(n,l)}catch(m){const v=await F(m,{url:n,params:r,route:{id:e}});return Y.has(o)?ht({error:v,url:n,params:r,route:a}):Ee({status:de(m),error:v,url:n,route:a})}if(d.type==="redirect")return d}const g=d==null?void 0:d.nodes;let y=!1;const R=f.map(async(m,v)=>{var Ae;if(!m)return;const E=_.branch[v],A=g==null?void 0:g[v];if((!A||A.type==="skip")&&m[1]===(E==null?void 0:E.loader)&&!ut(y,w,h,u,(Ae=E.universal)==null?void 0:Ae.uses,r))return E;if(y=!0,(A==null?void 0:A.type)==="error")throw A;return We({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Ze;const Xe={};for(let Re=0;Re<v;Re+=1)Object.assign(Xe,(Ze=await R[Re])==null?void 0:Ze.data);return Xe},server_data_node:Ye(A===void 0&&m[0]?{type:"skip"}:A??null,m[0]?E==null?void 0:E.server:void 0)})});for(const m of R)m.catch(()=>{});const b=[];for(let m=0;m<f.length;m+=1)if(f[m])try{b.push(await R[m])}catch(v){if(v instanceof qe)return{type:"redirect",location:v.location};if(Y.has(o))return ht({error:await F(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let E=de(v),A;if(g!=null&&g.includes(v))E=v.status??E,A=v.error;else if(v instanceof ke)A=v.body;else{if(await N.updated.check())return await It(),await G(n);A=await F(v,{params:r,url:n,route:{id:a.id}})}const D=await Bn(m,b,i);return D?_e({url:n,params:r,branch:b.slice(0,D.idx).concat(D.node),status:E,error:A,route:a}):await je(n,{id:a.id},A,E)}else b.push(void 0);return _e({url:n,params:r,branch:b,status:200,error:null,route:a,form:t?void 0:null})}async function Bn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ee({status:e,error:t,url:n,route:r}){const a={};let o=null;if(k.server_loads[0]===0)try{const s=await Dt(n,[!0]);if(s.type!=="data"||s.nodes[0]&&s.nodes[0].type!=="data")throw 0;o=s.nodes[0]??null}catch{(n.origin!==le||n.pathname!==location.pathname||He)&&await G(n)}try{const s=await We({loader:Te,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ye(o)}),c={node:await pe(),loader:pe,universal:null,server:null,data:null};return _e({url:n,params:a,branch:[s,c],status:e,error:t,route:null})}catch(s){if(s instanceof qe)return Ke(new URL(s.location,location.href),{},0);throw s}}function jt(e){let t;try{if(t=k.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);k.hash?n.hash=t:n.pathname=t,t=n}}catch(n){{console.error(n);debugger}return}return t}function Je(e,t){if(!e||be(e,L,k.hash))return;const n=jt(e);if(!n)return;const r=Ct(n);for(const a of Se){const o=a.exec(r);if(o)return{id:ve(e),invalidating:t,route:a,params:Kt(o),url:e}}}function Ct(e){return Mt(k.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(L.length))||"/"}function ve(e){return(k.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function Nt({url:e,type:t,intent:n,delta:r}){let a=!1;const o=Vt(_,n,e,t);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Z||Ut.forEach(s=>s(i)),a?null:o}async function M({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=ct,block:d=ct}){const h=Je(t,!1),w=Nt({url:t,type:e,delta:n==null?void 0:n.delta,intent:h});if(!w){d();return}const u=I,p=x;f(),Z=!0,we&&N.navigating.set(z.current=w.navigation),ye=c;let l=h&&await Ot(h);if(!l)if(be(t,L,k.hash))if(k.hash)l=await je(t,{id:null},await F(new he(404,"Not Found",`Not found: ${t.pathname} (did you forget the hash?)`),{url:t,params:{},route:{id:null}}),404);else return await G(t);else l=await je(t,{id:null},await F(new he(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404);if(t=(h==null?void 0:h.url)||t,ye!==c)return w.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await Ee({status:500,error:await F(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Ke(new URL(l.location,t).href,{},s+1,c),!1;else l.props.page.status>=400&&await N.updated.check()&&(await It(),await G(t));if(Dn(),Ge(u),Lt(p),l.props.page.url.pathname!==t.pathname&&(t.pathname=l.props.page.url.pathname),i=n?n.state:i,!n){const b=o?0:1,m={[q]:I+=b,[J]:x+=b,[bt]:i};(o?history.replaceState:history.pushState).call(history,m,"",t),o||Cn(I,x)}if($=null,l.props.page.state=i,we){_=l.state,l.props.page&&(l.props.page.url=t);const b=(await Promise.all(Array.from(Nn,m=>m(w.navigation)))).filter(m=>typeof m=="function");if(b.length>0){let m=function(){b.forEach(v=>{W.delete(v)})};b.push(m),b.forEach(v=>{W.add(v)})}xt.$set(l.props),On(l.props.page),$t=!0}else Tt(l,Oe,!1);const{activeElement:g}=document;await Gt();const y=n?n.scroll:a?Ve():null;if(lt){const b=t.hash&&document.getElementById(decodeURIComponent(k.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));y?scrollTo(y.x,y.y):b?b.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==g&&document.activeElement!==document.body;!r&&!R&&Wn(),lt=!0,l.props.page&&Object.assign(U,l.props.page),Z=!1,e==="popstate"&&Pt(x),w.fulfil(void 0),W.forEach(b=>b(w.navigation)),N.navigating.set(z.current=null)}async function je(e,t,n,r){if(e.origin===le&&e.pathname===location.pathname&&!He)return await Ee({status:r,error:n,url:e,route:t});if(r!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await G(e)}function qn(){let e;C.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(o){o.defaultPrevented||r(o.composedPath()[0],1)}C.addEventListener("mousedown",t),C.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Le(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=Et(o,C);if(!s)return;const{url:c,external:f,download:d}=Pe(s,L,k.hash);if(f||d)return;const h=ue(s),w=c&&ve(_.url)===ve(c);if(!h.reload&&!w)if(i<=h.preload_data){const u=Je(c,!1);u&&Fn(u).then(p=>{p.type==="loaded"&&p.state.error&&console.warn(`Preloading data for ${u.url.pathname} failed with the following error: ${p.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://svelte.dev/docs/kit/link-options for more info`)})}else i<=h.preload_code&&Le(c)}function a(){n.disconnect();for(const o of C.querySelectorAll("a")){const{url:i,external:s,download:c}=Pe(o,L,k.hash);if(s||c)continue;const f=ue(o);f.reload||(f.preload_code===fe.viewport&&n.observe(o),f.preload_code===fe.eager&&Le(i))}}W.add(a),a()}function F(e,t){if(e instanceof ke)return e.body;console.warn("The next HMR update will cause the page to reload");const n=de(e),r=Pn(e);return k.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Gn(e,t={}){return e=new URL(kt(e)),e.origin!==le?Promise.reject(new Error(`Cannot use \`goto\` with an external URL. Use \`window.location = "${e}"\` instead`)):Ke(e,t,0)}function Hn(e){if(typeof e=="function")ge.push(e);else{const{href:t}=new URL(e,location.href);ge.push(n=>n.href===t)}}function Mn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ft(),!Z){const a=Vt(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ut.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ft()}),(t=navigator.connection)!=null&&t.saveData||qn(),C.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Et(n.composedPath()[0],C);if(!r)return;const{url:a,external:o,target:i,download:s}=Pe(r,L,k.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ue(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=(k.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=d===Ue(location);if(o||c.reload&&(!w||!h)){Nt({url:a,type:"link"})?Z=!0:n.preventDefault();return}if(h!==void 0&&w){const[,u]=_.url.href.split("#");if(u===h){if(n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const p=r.ownerDocument.getElementById(decodeURIComponent(h));p&&(p.scrollIntoView(),p.focus())}return}if(H=!0,Ge(I),e(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),M({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),C.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(be(s,L,!1))return;const c=n.target,f=ue(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),M({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(ye={},a===I)return;const o=V[a],i=n.state[bt]??{},s=new URL(n.state[hn]??location.href),c=n.state[J],f=_.url?Ue(location)===Ue(_.url):!1;if(c===x&&($t||f)){i!==U.state&&(U.state=i),e(s),V[I]=Ve(),o&&scrollTo(o.x,o.y),I=a;return}const h=a-I;await M({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=a,x=c},block:()=>{history.go(-h)},nav_token:ye})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[q]:++I,[J]:x},"",location.href)):k.hash&&_.url.hash===location.hash&&M({type:"goto",url:Bt(_.url)})});for(const n of document.querySelectorAll("link"))jn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&N.navigating.set(z.current=null)});function e(n){_.url=U.url=n,N.page.set(ze(U)),N.page.notify()}}async function Kn(e,{status:t=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){He=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Je(c,!1)||{});let f,d=!0;try{const h=r.map(async(p,l)=>{const g=i[l];return g!=null&&g.uses&&(g.uses=Ft(g.uses)),We({loader:k.nodes[p],url:c,params:a,route:o,parent:async()=>{const y={};for(let R=0;R<l;R+=1)Object.assign(y,(await h[R]).data);return y},server_data_node:Ye(g)})}),w=await Promise.all(h),u=Se.find(({id:p})=>p===o.id);if(u){const p=u.layouts;for(let l=0;l<p.length;l++)p[l]||w.splice(l,0,void 0)}f=_e({url:c,params:a,branch:w,status:t,error:n,form:s,route:u??null})}catch(h){if(h instanceof qe){await G(new URL(h.location,location.href));return}f=await Ee({status:de(h),error:await F(h,{url:c,params:a,route:o}),url:c,route:o}),e.textContent="",d=!1}f.props.page&&(f.props.page.state={}),Tt(f,e,d)}async function Dt(e,t){var o;const n=new URL(e);if(n.pathname=Xt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Ln,"1"),e.searchParams.has(xe))throw new Error(`Cannot used reserved query parameter "${xe}"`);n.searchParams.append(xe,t.map(i=>i?"1":"0").join(""));const a=await De(n.href,{});if(!a.ok){let i;throw(o=a.headers.get("content-type"))!=null&&o.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new ke(a.status,i)}return new Promise(async i=>{var w;const s=new Map,c=a.body.getReader(),f=new TextDecoder;function d(u){return Sn(u,{...k.decoders,Promise:p=>new Promise((l,g)=>{s.set(p,{fulfil:l,reject:g})})})}let h="";for(;;){const{done:u,value:p}=await c.read();if(u&&!h)break;for(h+=!p&&h?`
`:f.decode(p,{stream:!0});;){const l=h.indexOf(`
`);if(l===-1)break;const g=JSON.parse(h.slice(0,l));if(h=h.slice(l+1),g.type==="redirect")return i(g);if(g.type==="data")(w=g.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=Ft(y.uses),y.data=d(y.data))}),i(g);else if(g.type==="chunk"){const{id:y,data:R,error:b}=g,m=s.get(y);s.delete(y),b?m.reject(d(b)):m.fulfil(d(R))}}}})}function Ft(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Wn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Vt(e,t,n,r){var c,f;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((f=t==null?void 0:t.route)==null?void 0:f.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:o}}function ze(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function Bt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}{const e=console.warn;console.warn=function(...n){n.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(n[0])||e(...n)}}export{tr as a,L as b,Gn as g,U as p,N as s,it as u};
