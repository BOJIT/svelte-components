import{c as L,l as K}from"./DFlwrw4f.js";import"./DTnbcjZT.js";import{m as N,a as V,F as S,p as A,f as q,b as z,t as X,s as ge,l as w,e as ye,g as we,h as ve,j as v,i as Se,k as _e}from"./CSs5j321.js";import{b as F,t as j,c as Y,a as b,h as be}from"./B_ALQZRw.js";import{i as D}from"./CT1BjXXT.js";import{i as U}from"./DrQjd4fS.js";import{p as u,s as ke,a as J}from"./CLHzkbyc.js";import{v as O}from"./BLPoDtA8.js";import{o as pe}from"./i_6tuh6C.js";import{g as Z,d as $,w as f}from"./D5St-4ZP.js";import{d as ee}from"./CCyzYQME.js";import{h as Me}from"./CSlf_XMF.js";let G,R;function te(o){if(typeof document>"u")return;clearTimeout(G),clearTimeout(R);const e=document.createElement("style"),n=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);e.appendChild(n);const t=()=>document.head.appendChild(e),i=()=>document.head.removeChild(e);if(typeof window.getComputedStyle<"u"){t(),o(),window.getComputedStyle(e).opacity,i();return}if(typeof window.requestAnimationFrame<"u"){t(),o(),window.requestAnimationFrame(i);return}t(),G=window.setTimeout(()=>{o(),R=window.setTimeout(i,120)},120)}function W(o){return o.filter(e=>e.length>0)}const oe={getItem:o=>null,setItem:(o,e)=>{}},g=typeof document<"u",Ce=["dark","light","system"],p=f("mode-watcher-mode"),M=f("mode-watcher-theme"),ne=Ie(),T=Ke(),re=f(void 0),se=Le(),x=f(!0),ae=f([]),ie=f([]),Ee=Ne(),Te=Ve();function Ie(){const o="system",e=g?localStorage:oe,n=e.getItem(i());let t=I(n)?n:o;function i(){return Z(p)}const{subscribe:c,set:a}=f(t,()=>{if(!g)return;const s=l=>{if(l.key!==i())return;const m=l.newValue;I(m)?a(t=m):a(t=o)};return addEventListener("storage",s),()=>removeEventListener("storage",s)});function r(s){a(t=s),e.setItem(i(),t)}return{subscribe:c,set:r}}function Le(){const o=g?localStorage:oe,e=o.getItem(t());let n=e??"";function t(){return Z(M)}const{subscribe:i,set:c}=f(n,()=>{if(!g)return;const r=s=>{if(s.key!==t())return;const l=s.newValue;c(l===null?n="":n=l)};return addEventListener("storage",r),()=>removeEventListener("storage",r)});function a(r){c(n=r),o.setItem(t(),n)}return{subscribe:i,set:a}}function Ke(){let e=!0;const{subscribe:n,set:t}=f(void 0,()=>{if(!g)return;const a=s=>{e&&t(s.matches?"light":"dark")},r=window.matchMedia("(prefers-color-scheme: light)");return r.addEventListener("change",a),()=>r.removeEventListener("change",a)});function i(){if(!g)return;const a=window.matchMedia("(prefers-color-scheme: light)");t(a.matches?"light":"dark")}function c(a){e=a}return{subscribe:n,query:i,tracking:c}}function Ne(){const{subscribe:o}=$([ne,T,re,x,ae,ie],([e,n,t,i,c,a])=>{if(!g)return;const r=e==="system"?n:e,s=W(c),l=W(a);function m(){const d=document.documentElement,y=document.querySelector('meta[name="theme-color"]');r==="light"?(s.length&&d.classList.remove(...s),l.length&&d.classList.add(...l),d.style.colorScheme="light",y&&t&&y.setAttribute("content",t.light)):(l.length&&d.classList.remove(...l),s.length&&d.classList.add(...s),d.style.colorScheme="dark",y&&t&&y.setAttribute("content",t.dark))}return i?te(m):m(),r});return{subscribe:o}}function Ve(){const{subscribe:o}=$([se,x],([e,n])=>{if(!g)return;function t(){document.documentElement.setAttribute("data-theme",e)}return n?te(t):t(),e});return{subscribe:o}}function I(o){return typeof o!="string"?!1:Ce.includes(o)}function Ae(o){ne.set(o)}function qe(o){se.set(o)}function ze({defaultMode:o="system",themeColors:e,darkClassNames:n=["dark"],lightClassNames:t=[],defaultTheme:i="",modeStorageKey:c="mode-watcher-mode",themeStorageKey:a="mode-watcher-theme"}){const r=document.documentElement,s=localStorage.getItem(c)||o,l=localStorage.getItem(a)||i,m=s==="light"||s==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(m?(n.length&&r.classList.remove(...n),t.length&&r.classList.add(...t)):(t.length&&r.classList.remove(...t),n.length&&r.classList.add(...n)),r.style.colorScheme=m?"light":"dark",e){const d=document.querySelector('meta[name="theme-color"]');d&&d.setAttribute("content",s==="light"?e.light:e.dark)}l&&(r.setAttribute("data-theme",l),localStorage.setItem(a,l)),localStorage.setItem(c,s)}N();k[S]="node_modules/mode-watcher/dist/mode-watcher-lite.svelte";var Fe=F(j('<meta name="theme-color">'),k[S],[[8,1]]);function k(o,e){L(new.target),A(e,!1,k);let n=u(e,"themeColors",24,()=>{});U();var t=Y(),i=q(t);{var c=a=>{var r=Fe();X(()=>ee(r,"content",n().dark)),b(a,r)};D(i,a=>{n()&&a(c)})}return b(o,t),z({...K()})}V(k);N();_[S]="node_modules/mode-watcher/dist/mode-watcher-full.svelte";var je=F(j('<meta name="theme-color">'),_[S],[[12,2]]),De=F(j("<!> <!>",1),_[S],[]);function _(o,e){L(new.target),A(e,!1,_);let n=u(e,"trueNonce",8,""),t=u(e,"initConfig",8),i=u(e,"themeColors",24,()=>{});return U(),be(c=>{var a=De(),r=q(a);{var s=m=>{var d=je();X(()=>ee(d,"content",i().dark)),b(m,d)};D(r,m=>{i()&&m(s)})}var l=ge(r,2);Me(l,()=>`<script${n()?` nonce=${n()}`:""}>(`+ze.toString()+")("+JSON.stringify(t())+");<\/script>",!1,!1),b(c,a)}),z({...K()})}V(_);N();H[S]="node_modules/mode-watcher/dist/mode-watcher.svelte";function H(o,e){L(new.target),A(e,!1,H);const n=ke(),t=()=>(O(p,"modeStorageKeyStore"),J(p,"$modeStorageKeyStore",n)),i=()=>(O(M,"themeStorageKeyStore"),J(M,"$themeStorageKeyStore",n)),c=ve();let a=u(e,"track",8,!0),r=u(e,"defaultMode",8,"system"),s=u(e,"themeColors",24,()=>{}),l=u(e,"disableTransitions",8,!0),m=u(e,"darkClassNames",24,()=>["dark"]),d=u(e,"lightClassNames",24,()=>[]),y=u(e,"defaultTheme",8,""),P=u(e,"nonce",8,""),C=u(e,"themeStorageKey",8,"mode-watcher-theme"),E=u(e,"modeStorageKey",8,"mode-watcher-mode"),ce=u(e,"disableHeadScriptInjection",8,!1);pe(()=>{const h=Ee.subscribe(()=>{}),fe=Te.subscribe(()=>{});T.tracking(a()),T.query();const B=localStorage.getItem(t());Ae(I(B)?B:r());const he=localStorage.getItem(i());return qe(he||y()),()=>{h(),fe()}});const le={defaultMode:r(),themeColors:s(),darkClassNames:m(),lightClassNames:d(),defaultTheme:y(),modeStorageKey:E(),themeStorageKey:C()};w(()=>v(l()),()=>{x.set(l())}),w(()=>v(s()),()=>{re.set(s())}),w(()=>v(m()),()=>{ae.set(m())}),w(()=>v(d()),()=>{ie.set(d())}),w(()=>v(E()),()=>{p.set(E())}),w(()=>v(C()),()=>{M.set(C())}),w(()=>v(P()),()=>{Se(c,_e(typeof window,"undefined")?P():"")}),ye(),U();var Q=Y(),me=q(Q);{var de=h=>{k(h,{get themeColors(){return s()}})},ue=h=>{_(h,{get trueNonce(){return we(c)},initConfig:le,get themeColors(){return s()}})};D(me,h=>{ce()?h(de):h(ue,!1)})}return b(o,Q),z({...K()})}V(H);export{H as M,Ee as d,Ae as s,ne as u};
