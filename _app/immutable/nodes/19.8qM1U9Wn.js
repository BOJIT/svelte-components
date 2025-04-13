import{c as xe,l as ye}from"../chunks/DFlwrw4f.js";import"../chunks/DTnbcjZT.js";import{M as ht,aw as bt,b9 as gt,ba as pt,o as ut,aI as _t,bb as Ge,w as wt,aJ as xt,bc as yt,p as ke,f as De,b as Te,m as Ee,F as M,a as Se,c as B,s as w,r as R,t as ae,am as kt,k as E,at as Tt,g as c,i as ve,as as qe,ak as Ue,G as ue,n as Me,aP as Qe,u as Ze,al as Et,$ as St,h as et,aX as tt,d as be}from"../chunks/CSs5j321.js";import{c as vt,a as $,b as V,t as N,h as Mt,f as ot}from"../chunks/B_ALQZRw.js";import{i as Pe,w as J}from"../chunks/CT1BjXXT.js";import{v as He,p as W,b as U,r as Ke,d as Ct,s as It,a as Wt}from"../chunks/CLHzkbyc.js";import{i as $t}from"../chunks/DrQjd4fS.js";import{S as Pt,a as Dt,A as Ce,T as je,b as ge}from"../chunks/DDv7llXw.js";import{s as At}from"../chunks/CWc45YTg.js";import{e as Be,i as Le}from"../chunks/BFJAm33o.js";import{h as Ht}from"../chunks/CSlf_XMF.js";import{c as mt}from"../chunks/CHEL5tyd.js";import{l as Rt,j as jt,e as Bt,d as Lt}from"../chunks/YJMA9Ui2.js";import{t as Fe,s as Ft}from"../chunks/BSOGHkt2.js";import{s as Ot}from"../chunks/PwPRnE0L.js";import{r as rt,s as Je,c as Vt}from"../chunks/CCyzYQME.js";import{c as Ae}from"../chunks/D_AFOtY5.js";import{I as _e}from"../chunks/EeIJkZZA.js";import{T as at}from"../chunks/Cf9nFbiu.js";import{C as Ie}from"../chunks/D1pzh6K_.js";import{_ as Oe}from"../chunks/C1FmrZbK.js";import{v as Nt}from"../chunks/BLPoDtA8.js";import{o as qt,a as Jt}from"../chunks/i_6tuh6C.js";import{d as nt}from"../chunks/DbtyUzfh.js";import{B as zt}from"../chunks/BXt7g-27.js";import{C as Kt}from"../chunks/BmpQ0ObI.js";import{W as st,B as Xt}from"../chunks/Ds1-F9-b.js";import{n as lt}from"../chunks/CS0D03Ih.js";var Yt="font-weight: bold",Gt="font-weight: normal";function it(e){console.warn(`%c[svelte] state_snapshot_uncloneable
%c${e?`The following properties cannot be cloned with \`$state.snapshot\` — the return value contains the originals:

${e}`:"Value cannot be cloned with `$state.snapshot` — the original value was returned"}
https://svelte.dev/e/state_snapshot_uncloneable`,Yt,Gt)}const Ut=[];function Qt(e,t=!1){if(!t){const a=[],i=we(e,new Map,"",a);if(a.length===1&&a[0]==="")it();else if(a.length>0){const n=a.length>10?a.slice(0,7):a.slice(0,10),r=a.length-n.length;let f=n.map(d=>`- <value>${d}`).join(`
`);r>0&&(f+=`
- ...and ${r} more`),it(f)}return i}return we(e,new Map,"",Ut)}function we(e,t,a,i,n=null){if(typeof e=="object"&&e!==null){var r=t.get(e);if(r!==void 0)return r;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(ht(e)){var f=Array(e.length);t.set(e,f),n!==null&&t.set(n,f);for(var d=0;d<e.length;d+=1){var _=e[d];d in e&&(f[d]=we(_,t,`${a}[${d}]`,i))}return f}if(bt(e)===gt){f={},t.set(e,f),n!==null&&t.set(n,f);for(var p in e)f[p]=we(e[p],t,`${a}.${p}`,i);return f}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return we(e.toJSON(),t,`${a}.toJSON()`,i,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return i.push(a),e}}function ze(e,t,a=t){var i=pt();Rt(e,"input",n=>{e.type==="checkbox"&&Ge();var r=n?e.defaultValue:e.value;if(r=Ve(e)?Ne(r):r,a(r),i&&r!==(r=t())){var f=e.selectionStart,d=e.selectionEnd;e.value=r??"",d!==null&&(e.selectionStart=f,e.selectionEnd=Math.min(d,e.value.length))}}),(wt&&e.defaultValue!==e.value||ut(t)==null&&e.value)&&a(Ve(e)?Ne(e.value):e.value),_t(()=>{e.type==="checkbox"&&Ge();var n=t();Ve(e)&&n===Ne(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function Ve(e){var t=e.type;return t==="number"||t==="range"}function Ne(e){return e===""?null:+e}function pe(e,...t){return ut(()=>{try{let a=!1;const i=[];for(const n of t)n&&typeof n=="object"&&xt in n?(i.push(Qt(n,!0)),a=!0):i.push(n);a&&(yt(e),console.log("%c[snapshot]","color: grey",...i))}catch{}}),t}Ee();K[M]="src/lib/components/ui/input/input.svelte";var Zt=V(N('<label class="relative block"><!> <input></label>'),K[M],[[22,4,[[28,8]]]]),eo=V(N("<input>"),K[M],[[39,4]]);function K(e,t){xe(new.target),ke(t,!0,K),He(t,["ref","value"],[],K);let a=W(t,"ref",15,null),i=W(t,"value",15),n=Ke(t,["$$slots","$$events","$$legacy","ref","value","icon","class"],"restProps");var r=vt(),f=De(r);{var d=p=>{var l=Zt(),y=B(l);mt(y,()=>t.icon,(b,k)=>{k(b,{size:16,class:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"})});var g=w(y,2);rt(g);let h;U(g,b=>a(b),()=>a()),R(l),ae(()=>h=Je(g,h,{class:Ae("flex h-10 w-full rounded-md border border-input bg-accent px-3 py-2 pl-9 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t.class),...n})),ze(g,i),$(p,l)},_=p=>{var l=eo();rt(l);let y;U(l,g=>a(g),()=>a()),ae(()=>y=Je(l,y,{class:Ae("flex h-10 w-full rounded-md border border-input bg-accent px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t.class),...n})),ze(l,i),$(p,l)};Pe(f,p=>{t.icon?p(d):p(_,!1)})}return $(e,r),Te({...ye()})}Se(K);Ee();me[M]="src/lib/components/ui/textarea/textarea.svelte";var to=V(N("<textarea></textarea>"),me[M],[[14,0]]);function me(e,t){xe(new.target),ke(t,!0,me),He(t,["ref","value"],[],me);let a=W(t,"ref",15,null),i=W(t,"value",15),n=Ke(t,["$$slots","$$events","$$legacy","ref","value","class"],"restProps");var r=to();jt(r);let f;return U(r,d=>a(d),()=>a()),ae(()=>f=Je(r,f,{class:Ae("flex min-h-[80px] w-full rounded-md border border-input bg-accent px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t.class),...n})),ze(r,i),$(e,r),Te({...ye()})}Se(me);const ct=e=>typeof e=="object"&&e!=null&&e.nodeType===1,dt=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",We=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const a=getComputedStyle(e,null);return dt(a.overflowY,t)||dt(a.overflowX,t)||(i=>{const n=(r=>{if(!r.ownerDocument||!r.ownerDocument.defaultView)return null;try{return r.ownerDocument.defaultView.frameElement}catch{return null}})(i);return!!n&&(n.clientHeight<i.scrollHeight||n.clientWidth<i.scrollWidth)})(e)}return!1},$e=(e,t,a,i,n,r,f,d)=>r<e&&f>t||r>e&&f<t?0:r<=e&&d<=a||f>=t&&d>=a?r-e-i:f>t&&d<a||r<e&&d>a?f-t+n:0,oo=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},ft=(e,t)=>{var a,i,n,r;if(typeof document>"u")return[];const{scrollMode:f,block:d,inline:_,boundary:p,skipOverflowHiddenElements:l}=t,y=typeof p=="function"?p:F=>F!==p;if(!ct(e))throw new TypeError("Invalid target");const g=document.scrollingElement||document.documentElement,h=[];let b=e;for(;ct(b)&&y(b);){if(b=oo(b),b===g){h.push(b);break}b!=null&&b===document.body&&We(b)&&!We(document.documentElement)||b!=null&&We(b,l)&&h.push(b)}const k=(i=(a=window.visualViewport)==null?void 0:a.width)!=null?i:innerWidth,P=(r=(n=window.visualViewport)==null?void 0:n.height)!=null?r:innerHeight,{scrollX:j,scrollY:L}=window,{height:m,width:D,top:q,right:A,bottom:T,left:H}=e.getBoundingClientRect(),{top:se,right:X,bottom:Y,left:o}=(F=>{const v=window.getComputedStyle(F);return{top:parseFloat(v.scrollMarginTop)||0,right:parseFloat(v.scrollMarginRight)||0,bottom:parseFloat(v.scrollMarginBottom)||0,left:parseFloat(v.scrollMarginLeft)||0}})(e);let s=d==="start"||d==="nearest"?q-se:d==="end"?T+Y:q+m/2-se+Y,u=_==="center"?H+D/2-o+X:_==="end"?A+X:H-o;const O=[];for(let F=0;F<h.length;F++){const v=h[F],{height:ee,width:le,top:Q,right:te,bottom:he,left:ie}=v.getBoundingClientRect();if(f==="if-needed"&&q>=0&&H>=0&&T<=P&&A<=k&&(v===g&&!We(v)||q>=Q&&T<=he&&H>=ie&&A<=te))return O;const ce=getComputedStyle(v),oe=parseInt(ce.borderLeftWidth,10),de=parseInt(ce.borderTopWidth,10),fe=parseInt(ce.borderRightWidth,10),S=parseInt(ce.borderBottomWidth,10);let x=0,C=0;const Z="offsetWidth"in v?v.offsetWidth-v.clientWidth-oe-fe:0,G="offsetHeight"in v?v.offsetHeight-v.clientHeight-de-S:0,re="offsetWidth"in v?v.offsetWidth===0?0:le/v.offsetWidth:0,Re="offsetHeight"in v?v.offsetHeight===0?0:ee/v.offsetHeight:0;if(g===v)x=d==="start"?s:d==="end"?s-P:d==="nearest"?$e(L,L+P,P,de,S,L+s,L+s+m,m):s-P/2,C=_==="start"?u:_==="center"?u-k/2:_==="end"?u-k:$e(j,j+k,k,oe,fe,j+u,j+u+D,D),x=Math.max(0,x+L),C=Math.max(0,C+j);else{x=d==="start"?s-Q-de:d==="end"?s-he+S+G:d==="nearest"?$e(Q,he,ee,de,S+G,s,s+m,m):s-(Q+ee/2)+G/2,C=_==="start"?u-ie-oe:_==="center"?u-(ie+le/2)+Z/2:_==="end"?u-te+fe+Z:$e(ie,te,le,oe,fe+Z,u,u+D,D);const{scrollLeft:Xe,scrollTop:Ye}=v;x=Re===0?0:Math.max(0,Math.min(Ye+x/Re,v.scrollHeight-ee/Re+G)),C=re===0?0:Math.max(0,Math.min(Xe+C/re,v.scrollWidth-le/re+Z)),s+=Ye-x,u+=Xe-C}O.push({el:v,top:x,left:C})}return O},ro=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function ao(e,t){if(!e.isConnected||!(n=>{let r=n;for(;r&&r.parentNode;){if(r.parentNode===document)return!0;r=r.parentNode instanceof ShadowRoot?r.parentNode.host:r.parentNode}return!1})(e))return;const a=(n=>{const r=window.getComputedStyle(n);return{top:parseFloat(r.scrollMarginTop)||0,right:parseFloat(r.scrollMarginRight)||0,bottom:parseFloat(r.scrollMarginBottom)||0,left:parseFloat(r.scrollMarginLeft)||0}})(e);if((n=>typeof n=="object"&&typeof n.behavior=="function")(t))return t.behavior(ft(e,t));const i=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:n,top:r,left:f}of ft(e,ro(t))){const d=r-a.top+a.bottom,_=f-a.left+a.right;n.scroll({top:d,left:_,behavior:i})}}Ee();z[M]="src/lib/components/widgets/SearchableList/SearchableList.svelte";var no=(e,t,a,i,n)=>{ve(t,qe(a(),null,t)),i()(n().label,n().key)},so=V(N('<div class="px-1 pl-2"><!></div>'),z[M],[[168,12]]),lo=V(N('<h6 class="text-gray-400 svelte-j45u12"> </h6>'),z[M],[[175,16]]),io=V(N('<button class="list-item overflow-hidden bg-accent hover:brightness-[90%] dark:hover:brightness-[120%] svelte-j45u12" tabindex="-1"><!> <div class="grow-1 w-full overflow-hidden pl-0 pr-1 pt-1"><h5 class="svelte-j45u12"><!></h5> <!></div> <!> <!></button>'),z[M],[[157,4,[[172,8,[[173,12]]]]]]),co=V(N('<div><form autocomplete="off" class="p-[4px]"><!></form> <div class="overflow-scroll p-[4px]" data-simplebar=""><div class="list svelte-j45u12"></div></div></div>'),z[M],[[207,0,[[208,4],[217,4,[[218,8]]]]]]);function z(e,t){xe(new.target),ke(t,!0,z);const a=J(z,(o,s=Me,u=Me,O=Me,F=Me)=>{var v=io();v.__click=[no,h,u,_,s];var ee=B(v);{var le=S=>{var x=so(),C=B(x),Z=ue(()=>r()?16:24);mt(C,()=>s().icon,(G,re)=>{re(G,{get size(){return c(Z)}})}),R(x),$(S,x)};Pe(ee,S=>{s().icon&&S(le)})}var Q=w(ee,2),te=B(Q),he=B(te);Ht(he,()=>D(s().label,F()),!1,!1),R(te);var ie=w(te,2);{var ce=S=>{var x=lo(),C=B(x,!0);R(x),ae(()=>At(C,s().sublabel)),$(S,x)};Pe(ie,S=>{r()||S(ce)})}R(Q);var oe=w(Q,2);{var de=S=>{var x=vt(),C=De(x);Be(C,17,()=>s().buttons,Le,(Z,G)=>{_e(Z,{variant:"ghost",class:"aspect-square hover:brightness-[90%] dark:hover:brightness-[120%]",get Icon(){return c(G).icon},onclick:re=>{re.stopPropagation(),c(G).onclick(s().label,s().key)}})}),$(S,x)};Pe(oe,S=>{s().buttons&&S(de)})}var fe=w(oe,2);Be(fe,17,d,Le,(S,x)=>{_e(S,{variant:"ghost",class:"aspect-square hover:brightness-[90%] dark:hover:brightness-[120%]",get Icon(){return c(x).icon},onclick:C=>{C.stopPropagation(),c(x).onclick(s().label,s().key)}})}),R(v),ae(()=>{Fe(v,"selected",O()),Fe(v,"narrow",r())}),$(o,v)});He(t,[],["focus"],z);let i=W(t,"items",19,()=>[]),n=W(t,"sort",3,!1),r=W(t,"narrow",3,!1),f=W(t,"overflowHeight",3,"30rem");W(t,"hideSearch",3,!1);let d=W(t,"buttons",19,()=>[]),_=W(t,"onitemclick",3,(o,s)=>{}),p=Ke(t,["$$slots","$$events","$$legacy","items","sort","narrow","overflowHeight","hideSearch","buttons","onitemclick"],"rest"),l,y,g=Ue(""),h=Ue(null),b=ue(()=>q(i(),c(g))),k=ue(()=>E(c(b).length,1)?0:E(c(h),null)||c(h)>=c(b).length?null:c(h)),P=ue(()=>E(i().length,0,!1)&&E(c(b).length,0));function j(){if(E(l,void 0))return;let o=l.querySelector("input");o==null||o.focus()}function L(o){if(E(c(h),c(k),!1)&&ve(h,qe(c(k),null,h)),E(o,"down")?c(h)&&c(h)>0&&Qe(h,-1):E(c(h),null)?ve(h,0):c(h)<c(b).length-1&&Qe(h),E(c(h),null,!1)){const s=y.children.item(c(h));s&&ao(s,{scrollMode:"if-needed"})}}function m(o){if(E(l,void 0))return;let s=l.querySelector("input");E(s,document.activeElement,!1)||(E(o.key,"ArrowDown")?(o.preventDefault(),L("up")):E(o.key,"ArrowUp")?(o.preventDefault(),L("down")):E(o.key,"Enter")&&(o.preventDefault(),E(c(k),null,!1)&&_()(c(b)[c(k)].label,c(b)[c(k)].key),setTimeout(j,100)))}function D(o,s){if(E(s,""))return o;const u=new RegExp(s,"gi");return o.replace(u,function(F){return'<span class="highlight">'+F+"</span>"})}function q(o,s){let u=o.filter(O=>O.label.toLowerCase().includes(s.toLowerCase()));return n()&&(u=u.sort((O,F)=>O.label.localeCompare(F.label))),u}var A=co();Bt("keydown",Tt,m);var T=B(A),H=B(T),se=ue(()=>`transition ${c(P)?"focus-visible:ring-red-500":"focus-visible:ring-primary-500"}`);kt(()=>c(g),K),K(H,Ct({icon:Pt,get class(){return c(se)}},()=>p,{get value(){return c(g)},set value(o){ve(g,qe(o,null,g))}})),R(T),U(T,o=>l=o,()=>l);var X=w(T,2),Y=B(X);return Be(Y,21,()=>c(b),Le,(o,s,u)=>{a(o,()=>c(s),()=>u,()=>E(u,c(k)),()=>c(g))}),R(Y),U(Y,o=>y=o,()=>y),R(X),R(A),ae(()=>{Ot(X,"max-height",f()),Fe(Y,"narrow",r())}),$(e,A),Te({get focus(){return j},...ye()})}Se(z);Lt(["click"]);Ee();ne[M]="src/lib/components/widgets/Terminal/Terminal.svelte";var fo=V(N('<div><div class="xterm-container svelte-1vd217g"></div></div>'),ne[M],[[147,0,[[148,4]]]]);function ne(e,t){xe(new.target),ke(t,!0,ne);const a=It(),i=()=>(Nt(nt,"mode"),Wt(nt,"$mode",a));He(t,["ref"],["write"],ne);let n=W(t,"rows",3,15),r=W(t,"ref",15,null),f=W(t,"onread",3,m=>{}),d=W(t,"loopback",3,!1),_=W(t,"autoCLRF",3,!0),p,l,y,g=null;function h(m){Et(m,"light")?l.options.theme={foreground:"#2d2d2d",cursor:"#2d2d2d",background:"#00000000"}:l.options.theme={foreground:"#f5f5f5",cursor:"#f5f5f5",background:"#00000000"}}function b(m){_()&&(m=m.split("\r",-1).join(`\r
`)),_()&&E(m,"\r")&&(m=`\r
`),f()(m),d()&&(E(m,"")&&(m="\b \b"),l==null||l.write(m))}function k(m,D){D?l==null||l.write(`\x1B[${D}m${m}\x1B[0m`):l==null||l.write(m)}qt(async()=>{const{Terminal:m}=await Oe(async()=>{const{Terminal:T}=await import("../chunks/BtnXY879.js").then(H=>H.x);return{Terminal:T}},[],import.meta.url),{FitAddon:D}=await Oe(async()=>{const{FitAddon:T}=await import("../chunks/CyyJcX4C.js").then(H=>H.a);return{FitAddon:T}},[],import.meta.url),{WebglAddon:q}=await Oe(async()=>{const{WebglAddon:T}=await import("../chunks/VSpYQPpo.js").then(H=>H.a);return{WebglAddon:T}},[],import.meta.url);l=new m({theme:{background:"#00000000"},allowTransparency:!0,convertEol:_(),cursorBlink:!0,scrollback:5e3,fontFamily:"JetBrains Mono",fontWeight:500}),y=new D;let A=new q;A.onContextLoss(T=>{A.dispose()}),l.loadAddon(y),l.loadAddon(A),l.open(p),l.onData(b),y.fit(),i()&&h(i()),g=new ResizeObserver(function(T){y==null||y.fit()}),g.observe(p)}),Jt(()=>{g==null||g.unobserve(p)}),Ze(()=>{l==null||l.resize(l.cols,n()),l==null||l.scrollToBottom()}),Ze(()=>{i()&&l&&h(i())});var P=fo();const j=ue(()=>Vt(Ae("console",t.class)));var L=B(P);return U(L,m=>p=m,()=>p),R(P),U(P,m=>r(m),()=>r()),ae(()=>Ft(P,c(j),"svelte-1vd217g")),$(e,P),Te({get write(){return k},...ye()})}Se(ne);Ee();I[M]="src/routes/example/+page.svelte";var uo=V(N('<div class="tab">Tab 1</div> <div class="tab">Tab 2</div> <div class="tab">Tab 3</div>',1),I[M],[[97,4],[98,4],[99,4]]),vo=V(N('<div class="tab">Tab 1</div> <div class="tab">Tab 2</div> <div class="tab">Tab 3</div>',1),I[M],[[172,4],[173,4],[174,4]]),mo=V(N("<!>Test Text",1),I[M],[]),ho=V(N('<h1>Welcome to your library project</h1> <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p> <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> <!> <br> <!> <hr> <!> <!> <!> <!> <!> <hr> <br> <br> <div class="row svelte-1hbcf61"><!> <!></div> <br> <hr> <div class="row svelte-1hbcf61"><!> <!> <!> <!></div> <form><!> <!> <!></form> <div class="row svelte-1hbcf61"><!></div>',1),I[M],[[35,0],[36,0],[37,0,[[37,9]]],[91,0],[102,0],[177,0],[179,0],[180,0],[182,0],[193,0],[194,0],[195,0],[240,0],[246,0]]);function I(e,t){xe(new.target),ke(t,!1,I);let a=et(),i=et();$t();var n=ho();Mt(o=>{St.title="Example Page"});var r=w(De(n),6),f=tt(()=>[{icon:je,onclick:(o,s)=>{console.log(...pe("log","TABLE:",o,s))}},{icon:ge,onclick:(o,s)=>{console.log(...pe("log","TRASH:",o,s))}}]),d=tt(()=>[{label:"Search Entry",sublabel:"example description",icon:je,buttons:[{icon:Ce,onclick:(o,s)=>{console.log(...pe("log","COMMENT:",o,s))}}]},{label:"Biggest Entry",icon:Ce},{label:"Trials of the Past",icon:ge},{label:"Gravy of the Past",icon:ge},{label:"Trials in Hastings",icon:ge}]);z(r,{overflowHeight:"14rem",sort:!0,get buttons(){return c(f)},get items(){return c(d)},onitemclick:(o,s)=>{console.log(...pe("log","MAIN:",o,s))}});var _=w(r,4);at(_,{tabs:["simplified","tabs","api","entry","tabs","api","entry","tabs","api","entry"],fade:!0,children:J(I,(o,s)=>{var u=uo();be(4),$(o,u)}),$$slots:{default:!0}});var p=w(_,4);Ie(p,{children:J(I,(o,s)=>{Kt(o,{geometry:"https://cdn.bojit.org/files/glb/BOJIT_V3.glb"})}),$$slots:{default:!0}});var l=w(p,2);Ie(l,{class:"aspect-auto",children:J(I,(o,s)=>{st(o,{json:{head:{text:"WaveDrom Timing Diagram",tick:0,every:2},signal:[{name:"clk",wave:"p.....|..."},{name:"Data",wave:"x.345x|=.x",data:["head","body","tail","data"]},{name:"Request",wave:"0.1..0|1.0"},{},{name:"Acknowledge",wave:"1.....|01."}]}})}),$$slots:{default:!0}});var y=w(l,2);Ie(y,{class:"aspect-auto",children:J(I,(o,s)=>{st(o,{json:{signal:[{name:"clk",wave:"p.||..|......."},{name:"Data",wave:"x.345x|=.x....",data:["a","b","c","data"]},{name:"Request",wave:"0.1..0|1.0.1.1"},{},{name:"Acknowledge",wave:"1.....|01....."}]}})}),$$slots:{default:!0}});var g=w(y,2);Ie(g,{class:"aspect-auto",children:J(I,(o,s)=>{Xt(o,{json:[{name:"IPO",bits:8,attr:"RO"},{bits:7},{name:"BRK",bits:5,attr:"RW",type:4},{name:"CPK",bits:1},{name:"Clear",bits:3},{bits:8}],options:{hspace:800,lanes:2}})}),$$slots:{default:!0}});var h=w(g,2);at(h,{colourOffset:1,tabs:[{label:"TEST"},{label:"this"},{label:"is an example"}],children:J(I,(o,s)=>{var u=vo();be(4),$(o,u)}),$$slots:{default:!0}});var b=w(h,8),k=B(b);U(ne(k,{class:"!h-40 !w-1/2",onread:o=>{console.log(...pe("log",o))},$$legacy:!0}),o=>ve(a,o),()=>c(a));var P=w(k,2);U(ne(P,{class:"!h-40 !w-1/2",loopback:!0,$$legacy:!0}),o=>ve(i,o),()=>c(i)),R(b);var j=w(b,6),L=B(j);zt(L,{class:"h-12",onclick:()=>{lt({title:"Some Error",type:"warning",description:"example",timeout:2e3})},children:J(I,(o,s)=>{var u=mo(),O=De(u);Ce(O,{}),be(),$(o,u)}),$$slots:{default:!0}});var m=w(L,2);_e(m,{Icon:Ce,variant:"secondary",label:"Add Comment",onclick:()=>{c(i).write(`Example Message: ${Date.now()}
`)}});var D=w(m,2);_e(D,{Icon:je,label:"Table",onclick:()=>{c(a).write(`Example Message: ${Date.now()}
`,33)}});var q=w(D,2);_e(q,{Icon:ge,variant:"destructive",label:"Delete",shape:"circle",onclick:()=>{lt({title:"Item Deleted",type:"success",timeout:5e3})}}),R(j);var A=w(j,2),T=B(A);K(T,{placeholder:"Example 1",children:J(I,(o,s)=>{be();var u=ot("Enter Text Here");$(o,u)}),$$slots:{default:!0}});var H=w(T,2);K(H,{placeholder:"Example 2",children:J(I,(o,s)=>{be();var u=ot("Enter Text Here");$(o,u)}),$$slots:{default:!0}});var se=w(H,2);me(se,{placeholder:"Some Text"}),R(A);var X=w(A,2),Y=B(X);return Dt(Y,{type:"single",value:50,max:100,step:1,class:"my-3 max-w-[70%]"}),R(X),$(e,n),Te({...ye()})}Se(I);export{I as component};
