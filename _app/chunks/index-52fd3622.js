function $(){}const J=t=>t;function vt(t,e){for(const n in e)t[n]=e[n];return t}function Et(t){return t&&typeof t=="object"&&typeof t.then=="function"}function _t(t){return t()}function at(){return Object.create(null)}function C(t){t.forEach(_t)}function D(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function te(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function At(t){return Object.keys(t).length===0}function Ct(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t,e,n){t.$$.on_destroy.push(Ct(e,n))}function ne(t,e,n,i){if(t){const s=dt(t,e,n,i);return t[0](s)}}function dt(t,e,n,i){return t[1]&&i?vt(n.ctx.slice(),t[1](i(e))):n.ctx}function ie(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)l[a]=e.dirty[a]|s[a];return l}return e.dirty|s}return e.dirty}function se(t,e,n,i,s,l){if(s){const r=dt(e,n,i,l);t.p(r,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ce(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function le(t){return t==null?"":t}function ae(t,e,n){return t.set(n),e}function oe(t){return t&&D(t.destroy)?t.destroy:$}const ht=typeof window!="undefined";let K=ht?()=>window.performance.now():()=>Date.now(),tt=ht?t=>requestAnimationFrame(t):$;const S=new Set;function mt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&tt(mt)}function Q(t){let e;return S.size===0&&tt(mt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let U=!1;function St(){U=!0}function Nt(){U=!1}function Tt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function jt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=o?s+1:Tt(1,s,u=>e[n[u]].claim_order,o))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let a=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);l.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<l.length&&r[c].claim_order>=l[o].claim_order;)o++;const _=o<l.length?l[o]:null;t.insertBefore(r[c],_)}}function Mt(t,e){t.appendChild(e)}function pt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Rt(t){const e=et("style");return Bt(pt(t),e),e.sheet}function Bt(t,e){Mt(t.head||t,e)}function Dt(t,e){if(U){for(jt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function Lt(t,e,n){U&&!n?Dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function G(t){t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function Ot(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function fe(){return nt(" ")}function _e(){return nt("")}function de(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function he(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function it(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:it(t,i,e[i])}function pe(t,e){for(const n in e)it(t,n,e[n])}function ye(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:it(t,e,n)}function ge(t){return t===""?null:+t}function Pt(t){return Array.from(t.childNodes)}function yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function gt(t,e,n,i,s=!1){yt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function bt(t,e,n,i){return gt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||l.push(a.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function be(t,e,n){return bt(t,e,n,et)}function xe(t,e,n){return bt(t,e,n,Ot)}function qt(t,e){return gt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function $e(t){return qt(t," ")}function ot(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ke(t){const e=ot(t,"HTML_TAG_START",0),n=ot(t,"HTML_TAG_END",e);if(e===n)return new ut;yt(t);const i=t.splice(e,n-e+1);G(i[0]),G(i[i.length-1]);const s=i.slice(1,i.length-1);for(const l of s)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ut(s)}function we(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e){t.value=e==null?"":e}function Ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ae(t,e,n){t.classList[n?"add":"remove"](e)}function xt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function Ce(t,e=document.body){return Array.from(e.querySelectorAll(t))}class zt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=et(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(G)}}class ut extends zt{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}}const I=new Map;let W=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gt(t,e){const n={stylesheet:Rt(e),rules:{}};return I.set(t,n),n}function M(t,e,n,i,s,l,r,a=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);o+=m*100+`%{${r(g,1-g)}}
`}const _=o+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ft(_)}_${a}`,u=pt(t),{stylesheet:d,rules:h}=I.get(u)||Gt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,W+=1,f}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),W-=s,W||It())}function It(){tt(()=>{W||(I.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),I.clear())})}function Se(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:l=0,duration:r=300,easing:a=J,start:c=K()+l,end:o=c+r,tick:_=$,css:f}=n(t,{from:e,to:s},i);let u=!0,d=!1,h;function p(){f&&(h=M(t,0,1,r,l,a,f)),l||(d=!0)}function m(){f&&R(t,h),u=!1}return Q(g=>{if(!d&&g>=c&&(d=!0),d&&g>=o&&(_(1,0),m()),!u)return!1;if(d){const b=g-c,x=0+1*a(b/r);_(x,1-x)}return!0}),p(),_(0,1),m}function Ne(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Wt(t,s)}}function Wt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let B;function E(t){B=t}function H(){if(!B)throw new Error("Function called outside component initialization");return B}function Te(t){H().$$.on_mount.push(t)}function je(t){H().$$.after_update.push(t)}function Me(){const t=H();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=xt(e,n);i.slice().forEach(l=>{l.call(t,s)})}}}function Re(t,e){H().$$.context.set(t,e)}function Be(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const j=[],ft=[],z=[],Y=[],$t=Promise.resolve();let Z=!1;function kt(){Z||(Z=!0,$t.then(st))}function De(){return kt(),$t}function N(t){z.push(t)}function He(t){Y.push(t)}const X=new Set;let q=0;function st(){const t=B;do{for(;q<j.length;){const e=j[q];q++,E(e),Jt(e.$$)}for(E(null),j.length=0,q=0;ft.length;)ft.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];X.has(n)||(X.add(n),n())}z.length=0}while(j.length);for(;Y.length;)Y.pop()();Z=!1,X.clear(),E(t)}function Jt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let T;function rt(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function A(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const F=new Set;let v;function Kt(){v={r:0,c:[],p:v}}function Qt(){v.r||C(v.c),v=v.p}function ct(t,e){t&&t.i&&(F.delete(t),t.i(e))}function wt(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),v.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const lt={duration:0};function Le(t,e,n){let i=e(t,n),s=!1,l,r,a=0;function c(){l&&R(t,l)}function o(){const{delay:f=0,duration:u=300,easing:d=J,tick:h=$,css:p}=i||lt;p&&(l=M(t,0,1,u,f,d,p,a++)),h(0,1);const m=K()+f,g=m+u;r&&r.abort(),s=!0,N(()=>A(t,!0,"start")),r=Q(b=>{if(s){if(b>=g)return h(1,0),A(t,!0,"end"),c(),s=!1;if(b>=m){const x=d((b-m)/u);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,R(t),D(i)?(i=i(),rt().then(o)):o())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function Oe(t,e,n){let i=e(t,n),s=!0,l;const r=v;r.r+=1;function a(){const{delay:c=0,duration:o=300,easing:_=J,tick:f=$,css:u}=i||lt;u&&(l=M(t,1,0,o,c,_,u));const d=K()+c,h=d+o;N(()=>A(t,!1,"start")),Q(p=>{if(s){if(p>=h)return f(0,1),A(t,!1,"end"),--r.r||C(r.c),!1;if(p>=d){const m=_((p-d)/o);f(1-m,m)}}return s})}return D(i)?rt().then(()=>{i=i(),a()}):a(),{end(c){c&&i.tick&&i.tick(1,0),s&&(l&&R(t,l),s=!1)}}}function Pe(t,e,n,i){let s=e(t,n),l=i?0:1,r=null,a=null,c=null;function o(){c&&R(t,c)}function _(u,d){const h=u.b-l;return d*=Math.abs(h),{a:l,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:p=J,tick:m=$,css:g}=s||lt,b={start:K()+d,b:u};u||(b.group=v,v.r+=1),r||a?a=b:(g&&(o(),c=M(t,l,u,h,d,p,g)),u&&m(0,1),r=_(b,h),N(()=>A(t,u,"start")),Q(x=>{if(a&&x>a.start&&(r=_(a,h),a=null,A(t,r.b,"start"),g&&(o(),c=M(t,l,r.b,r.duration,0,p,s.css))),r){if(x>=r.end)m(l=r.b,1-l),A(t,r.b,"end"),a||(r.b?o():--r.group.r||C(r.group.c)),r=null;else if(x>=r.start){const L=x-r.start;l=r.a+r.d*p(L/r.duration),m(l,1-l)}}return!!(r||a)}))}return{run(u){D(s)?rt().then(()=>{s=s(),f(u)}):f(u)},end(){o(),r=a=null}}}function qe(t,e){const n=e.token={};function i(s,l,r,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;r!==void 0&&(c=c.slice(),c[r]=a);const o=s&&(e.current=s)(c);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,u)=>{u!==l&&f&&(Kt(),wt(f,1,1,()=>{e.blocks[u]===f&&(e.blocks[u]=null)}),Qt())}):e.block.d(1),o.c(),ct(o,1),o.m(e.mount(),e.anchor),_=!0),e.block=o,e.blocks&&(e.blocks[l]=o),_&&st()}if(Et(t)){const s=H();if(t.then(l=>{E(s),i(e.then,1,e.value,l),E(null)},l=>{if(E(s),i(e.catch,2,e.error,l),E(null),!e.hasCatch)throw l}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function ze(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Ut(t,e){wt(t,1,1,()=>{e.delete(t.key)})}function Fe(t,e){t.f(),Ut(t,e)}function Ge(t,e,n,i,s,l,r,a,c,o,_,f){let u=t.length,d=l.length,h=u;const p={};for(;h--;)p[t[h].key]=h;const m=[],g=new Map,b=new Map;for(h=d;h--;){const y=f(s,l,h),k=n(y);let w=r.get(k);w?i&&w.p(y,e):(w=o(k,y),w.c()),g.set(k,m[h]=w),k in p&&b.set(k,Math.abs(h-p[k]))}const x=new Set,L=new Set;function V(y){ct(y,1),y.m(a,_),r.set(y.key,y),_=y.first,d--}for(;u&&d;){const y=m[d-1],k=t[u-1],w=y.key,O=k.key;y===k?(_=y.first,u--,d--):g.has(O)?!r.has(w)||x.has(w)?V(y):L.has(O)?u--:b.get(w)>b.get(O)?(L.add(w),V(y)):(x.add(O),u--):(c(k,r),u--)}for(;u--;){const y=t[u];g.has(y.key)||c(y,r)}for(;d;)V(m[d-1]);return m}function Ie(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],a=e[l];if(a){for(const c in r)c in a||(i[c]=1);for(const c in a)s[c]||(n[c]=a[c],s[c]=1);t[l]=a}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function We(t){return typeof t=="object"&&t!==null?t:{}}function Je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ke(t){t&&t.c()}function Qe(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:s,on_mount:l,on_destroy:r,after_update:a}=t.$$;s&&s.m(e,n),i||N(()=>{const c=l.map(_t).filter(D);r?r.push(...c):C(c),t.$$.on_mount=[]}),a.forEach(N)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(j.push(t),kt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ue(t,e,n,i,s,l,r,a=[-1]){const c=B;E(t);const o=t.$$={fragment:null,ctx:null,props:l,update:$,not_equal:s,bound:at(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:at(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return o.ctx&&s(o.ctx[f],o.ctx[f]=h)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](h),_&&Yt(t,f)),u}):[],o.update(),_=!0,C(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){St();const f=Pt(e.target);o.fragment&&o.fragment.l(f),f.forEach(G)}else o.fragment&&o.fragment.c();e.intro&&ct(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),Nt(),st()}E(c)}class Ve{$destroy(){Xt(this,1),this.$destroy=$}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Je as $,We as A,Xt as B,vt as C,De as D,$ as E,Ct as F,C as G,D as H,de as I,N as J,Le as K,Oe as L,Be as M,Dt as N,se as O,re as P,ie as Q,ce as R,Ve as S,ne as T,Ae as U,ue as V,ee as W,Ot as X,xe as Y,pe as Z,ft as _,Pt as a,He as a0,ae as a1,Pe as a2,te as a3,J as a4,me as a5,oe as a6,qe as a7,ze as a8,Ne as a9,Wt as aa,Se as ab,Ge as ac,Fe as ad,Me as ae,Ce as af,ye as ag,ut as ah,ke as ai,le as aj,ve as ak,ge as al,he as am,it as b,be as c,G as d,et as e,Ee as f,Lt as g,qt as h,Ue as i,we as j,fe as k,_e as l,$e as m,Kt as n,wt as o,Qt as p,ct as q,Re as r,Zt as s,nt as t,je as u,Te as v,Ke as w,Qe as x,Vt as y,Ie as z};