function $(){}const W=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function at(t){return t()}function rt(){return Object.create(null)}function A(t){t.forEach(at)}function D(t){return typeof t=="function"}function Vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function Xt(t,e){return O||(O=document.createElement("a")),O.href=e,t===O.href}function kt(t){return Object.keys(t).length===0}function vt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yt(t,e,n){t.$$.on_destroy.push(vt(e,n))}function Zt(t,e,n,i){if(t){const s=ut(t,e,n,i);return t[0](s)}}function ut(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function ee(t,e,n,i,s,c){if(s){const r=ut(e,n,i,c);t.p(r,s)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t){return t==null?"":t}function re(t,e,n){return t.set(n),e}function le(t){return t&&D(t.destroy)?t.destroy:$}const ft=typeof window!="undefined";let J=ft?()=>window.performance.now():()=>Date.now(),tt=ft?t=>requestAnimationFrame(t):$;const C=new Set;function _t(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&tt(_t)}function K(t){let e;return C.size===0&&tt(_t),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let Q=!1;function Et(){Q=!0}function At(){Q=!1}function Ct(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function St(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:Ct(1,s,u=>e[n[u]].claim_order,a))-1;i[l]=n[d]+1;const _=d+1;n[_]=l,s=Math.max(_,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(r[l],d)}}function Nt(t,e){t.appendChild(e)}function dt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Tt(t){const e=et("style");return Mt(dt(t),e),e.sheet}function Mt(t,e){Nt(t.head||t,e)}function jt(t,e){if(Q){for(St(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Rt(t,e,n){t.insertBefore(e,n||null)}function Bt(t,e,n){Q&&!n?jt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode.removeChild(t)}function ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function Dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function oe(){return nt(" ")}function ae(){return nt("")}function ue(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function fe(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Ht(t,i,e[i])}function de(t){return t===""?null:+t}function Lt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function mt(t,e,n,i,s=!1){ht(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function pt(t,e,n,i){return mt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function he(t,e,n){return pt(t,e,n,et)}function me(t,e,n){return pt(t,e,n,Dt)}function Ot(t,e){return mt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function pe(t){return Ot(t," ")}function lt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ye(t){const e=lt(t,"HTML_TAG_START",0),n=lt(t,"HTML_TAG_END",e);if(e===n)return new ct;ht(t);const i=t.splice(e,n-e+1);F(i[0]),F(i[i.length-1]);const s=i.slice(1,i.length-1);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ct(s)}function ge(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function be(t,e){t.value=e==null?"":e}function xe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function $e(t,e,n){t.classList[n?"add":"remove"](e)}function yt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function we(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Pt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=et(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Rt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(F)}}class ct extends Pt{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Bt(this.t,this.n[n],e)}}const G=new Map;let I=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:Tt(e),rules:{}};return G.set(t,n),n}function j(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*c(m);a+=m*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,_=`__svelte_${qt(d)}_${o}`,u=dt(t),{stylesheet:f,rules:h}=G.get(u)||zt(u,t);h[_]||(h[_]=!0,f.insertRule(`@keyframes ${_} ${d}`,f.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,I+=1,_}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),I-=s,I||Ft())}function Ft(){tt(()=>{I||(G.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),G.clear())})}function ke(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:c=0,duration:r=300,easing:o=W,start:l=J()+c,end:a=l+r,tick:d=$,css:_}=n(t,{from:e,to:s},i);let u=!0,f=!1,h;function p(){_&&(h=j(t,0,1,r,c,o,_)),c||(f=!0)}function m(){_&&R(t,h),u=!1}return K(g=>{if(!f&&g>=l&&(f=!0),f&&g>=a&&(d(1,0),m()),!u)return!1;if(f){const b=g-l,x=0+1*o(b/r);d(x,1-x)}return!0}),p(),d(0,1),m}function ve(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Gt(t,s)}}function Gt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let B;function M(t){B=t}function U(){if(!B)throw new Error("Function called outside component initialization");return B}function Ee(t){U().$$.on_mount.push(t)}function Ae(t){U().$$.after_update.push(t)}function Ce(){const t=U();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=yt(e,n);i.slice().forEach(c=>{c.call(t,s)})}}}function Se(t,e){U().$$.context.set(t,e)}function Ne(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const T=[],ot=[],q=[],Y=[],gt=Promise.resolve();let Z=!1;function bt(){Z||(Z=!0,gt.then(xt))}function Te(){return bt(),gt}function S(t){q.push(t)}function Me(t){Y.push(t)}const X=new Set;let P=0;function xt(){const t=B;do{for(;P<T.length;){const e=T[P];P++,M(e),It(e.$$)}for(M(null),T.length=0,P=0;ot.length;)ot.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];X.has(n)||(X.add(n),n())}q.length=0}while(T.length);for(;Y.length;)Y.pop()();Z=!1,X.clear(),M(t)}function It(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}let N;function it(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function E(t,e,n){t.dispatchEvent(yt(`${e?"intro":"outro"}${n}`))}const z=new Set;let v;function je(){v={r:0,c:[],p:v}}function Re(){v.r||A(v.c),v=v.p}function $t(t,e){t&&t.i&&(z.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),v.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const st={duration:0};function Be(t,e,n){let i=e(t,n),s=!1,c,r,o=0;function l(){c&&R(t,c)}function a(){const{delay:_=0,duration:u=300,easing:f=W,tick:h=$,css:p}=i||st;p&&(c=j(t,0,1,u,_,f,p,o++)),h(0,1);const m=J()+_,g=m+u;r&&r.abort(),s=!0,S(()=>E(t,!0,"start")),r=K(b=>{if(s){if(b>=g)return h(1,0),E(t,!0,"end"),l(),s=!1;if(b>=m){const x=f((b-m)/u);h(x,1-x)}}return s})}let d=!1;return{start(){d||(d=!0,R(t),D(i)?(i=i(),it().then(a)):a())},invalidate(){d=!1},end(){s&&(l(),s=!1)}}}function De(t,e,n){let i=e(t,n),s=!0,c;const r=v;r.r+=1;function o(){const{delay:l=0,duration:a=300,easing:d=W,tick:_=$,css:u}=i||st;u&&(c=j(t,1,0,a,l,d,u));const f=J()+l,h=f+a;S(()=>E(t,!1,"start")),K(p=>{if(s){if(p>=h)return _(0,1),E(t,!1,"end"),--r.r||A(r.c),!1;if(p>=f){const m=d((p-f)/a);_(1-m,m)}}return s})}return D(i)?it().then(()=>{i=i(),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),s&&(c&&R(t,c),s=!1)}}}function He(t,e,n,i){let s=e(t,n),c=i?0:1,r=null,o=null,l=null;function a(){l&&R(t,l)}function d(u,f){const h=u.b-c;return f*=Math.abs(h),{a:c,b:u.b,d:h,duration:f,start:u.start,end:u.start+f,group:u.group}}function _(u){const{delay:f=0,duration:h=300,easing:p=W,tick:m=$,css:g}=s||st,b={start:J()+f,b:u};u||(b.group=v,v.r+=1),r||o?o=b:(g&&(a(),l=j(t,c,u,h,f,p,g)),u&&m(0,1),r=d(b,h),S(()=>E(t,u,"start")),K(x=>{if(o&&x>o.start&&(r=d(o,h),o=null,E(t,r.b,"start"),g&&(a(),l=j(t,c,r.b,r.duration,0,p,s.css))),r){if(x>=r.end)m(c=r.b,1-c),E(t,r.b,"end"),o||(r.b?a():--r.group.r||A(r.group.c)),r=null;else if(x>=r.start){const H=x-r.start;c=r.a+r.d*p(H/r.duration),m(c,1-c)}}return!!(r||o)}))}return{run(u){D(s)?it().then(()=>{s=s(),_(u)}):_(u)},end(){a(),r=o=null}}}function Jt(t,e){Wt(t,1,1,()=>{e.delete(t.key)})}function Le(t,e){t.f(),Jt(t,e)}function Oe(t,e,n,i,s,c,r,o,l,a,d,_){let u=t.length,f=c.length,h=u;const p={};for(;h--;)p[t[h].key]=h;const m=[],g=new Map,b=new Map;for(h=f;h--;){const y=_(s,c,h),w=n(y);let k=r.get(w);k?i&&k.p(y,e):(k=a(w,y),k.c()),g.set(w,m[h]=k),w in p&&b.set(w,Math.abs(h-p[w]))}const x=new Set,H=new Set;function V(y){$t(y,1),y.m(o,d),r.set(y.key,y),d=y.first,f--}for(;u&&f;){const y=m[f-1],w=t[u-1],k=y.key,L=w.key;y===w?(d=y.first,u--,f--):g.has(L)?!r.has(k)||x.has(k)?V(y):H.has(L)?u--:b.get(k)>b.get(L)?(H.add(k),V(y)):(x.add(L),u--):(l(w,r),u--)}for(;u--;){const y=t[u];g.has(y.key)||l(y,r)}for(;f;)V(m[f-1]);return m}function Pe(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function qe(t){return typeof t=="object"&&t!==null?t:{}}function ze(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Fe(t){t&&t.c()}function Ge(t,e){t&&t.l(e)}function Kt(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||S(()=>{const l=c.map(at).filter(D);r?r.push(...l):A(l),t.$$.on_mount=[]}),o.forEach(S)}function Qt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ut(t,e){t.$$.dirty[0]===-1&&(T.push(t),bt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ie(t,e,n,i,s,c,r,o=[-1]){const l=B;M(t);const a=t.$$={fragment:null,ctx:null,props:c,update:$,not_equal:s,bound:rt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:rt(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(_,u,...f)=>{const h=f.length?f[0]:u;return a.ctx&&s(a.ctx[_],a.ctx[_]=h)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](h),d&&Ut(t,_)),u}):[],a.update(),d=!0,A(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Et();const _=Lt(e.target);a.fragment&&a.fragment.l(_),_.forEach(F)}else a.fragment&&a.fragment.c();e.intro&&$t(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),At(),xt()}M(l)}class We{$destroy(){Qt(this,1),this.$destroy=$}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!kt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Oe as $,qe as A,Qt as B,wt as C,Te as D,$ as E,vt as F,A as G,D as H,Zt as I,ee as J,ne as K,te as L,Dt as M,me as N,jt as O,S as P,He as Q,$e as R,We as S,ce as T,Yt as U,Xt as V,ve as W,Gt as X,ke as Y,Be as Z,De as _,Lt as a,Le as a0,W as a1,ue as a2,ie as a3,Ne as a4,_e as a5,le as a6,re as a7,ot as a8,ze as a9,we as aa,Me as ab,Ce as ac,ct as ad,ye as ae,se as af,be as ag,de as ah,fe as ai,Ht as b,he as c,F as d,et as e,xe as f,Bt as g,Ot as h,Ie as i,ge as j,oe as k,ae as l,pe as m,je as n,Wt as o,Re as p,$t as q,Se as r,Vt as s,nt as t,Ae as u,Ee as v,Fe as w,Ge as x,Kt as y,Pe as z};
