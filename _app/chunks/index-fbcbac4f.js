function x(){}const J=t=>t;function Et(t,e){for(const n in e)t[n]=e[n];return t}function Nt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function _t(t){return t()}function ot(){return Object.create(null)}function C(t){t.forEach(_t)}function j(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function te(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function Ct(t){return Object.keys(t).length===0}function At(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t,e,n){t.$$.on_destroy.push(At(e,n))}function ne(t,e,n,i){if(t){const s=dt(t,e,n,i);return t[0](s)}}function dt(t,e,n,i){return t[1]&&i?Et(n.ctx.slice(),t[1](i(e))):n.ctx}function ie(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function se(t,e,n,i,s,c){if(s){const r=dt(e,n,i,c);t.p(r,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ce(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function le(t){return t==null?"":t}function oe(t,e,n){return t.set(n),e}function ae(t){return t&&j(t.destroy)?t.destroy:x}const ht=typeof window!="undefined";let K=ht?()=>window.performance.now():()=>Date.now(),tt=ht?t=>requestAnimationFrame(t):x;const T=new Set;function mt(t){T.forEach(e=>{e.c(t)||(T.delete(e),e.f())}),T.size!==0&&tt(mt)}function Q(t){let e;return T.size===0&&tt(mt),{promise:new Promise(n=>{T.add(e={c:t,f:n})}),abort(){T.delete(e)}}}let U=!1;function Tt(){U=!0}function St(){U=!1}function jt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:jt(1,s,u=>e[n[u]].claim_order,a))-1;i[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(r[l],_)}}function Dt(t,e){t.appendChild(e)}function pt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ht(t){const e=et("style");return Rt(pt(t),e),e.sheet}function Rt(t,e){return Dt(t.head||t,e),e.sheet}function Pt(t,e){if(U){for(Mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Bt(t,e,n){t.insertBefore(e,n||null)}function Lt(t,e,n){U&&!n?Pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function gt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function fe(){return nt(" ")}function _e(){return nt("")}function de(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function he(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function it(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:it(t,i,e[i])}function pe(t,e){for(const n in e)it(t,n,e[n])}function ge(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:it(t,e,n)}function ye(t){return t===""?null:+t}function Ot(t){return Array.from(t.childNodes)}function yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function bt(t,e,n,i,s=!1){yt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function $t(t,e,n,i){return bt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function be(t,e,n){return $t(t,e,n,et)}function $e(t,e,n){return $t(t,e,n,gt)}function qt(t,e){return bt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function xe(t){return qt(t," ")}function at(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function we(t,e){const n=at(t,"HTML_TAG_START",0),i=at(t,"HTML_TAG_END",n);if(n===i)return new ut(void 0,e);yt(t);const s=t.splice(n,i-n+1);H(s[0]),H(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ut(c,e)}function ke(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e){t.value=e==null?"":e}function Ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ne(t,e,n){t.classList[n?"add":"remove"](e)}function xt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Ce(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class zt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=gt(n.nodeName):this.e=et(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Bt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(H)}}class ut extends zt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}}function Ae(t,e){return new t(e)}const W=new Map;let I=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gt(t,e){const n={stylesheet:Ht(e),rules:{}};return W.set(t,n),n}function R(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const y=e+(n-e)*c(m);a+=m*100+`%{${r(y,1-y)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ft(_)}_${o}`,u=pt(t),{stylesheet:d,rules:h}=W.get(u)||Gt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,I+=1,f}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),I-=s,I||Wt())}function Wt(){tt(()=>{I||(W.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&H(e)}),W.clear())})}function Te(t,e,n,i){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:c=0,duration:r=300,easing:o=J,start:l=K()+c,end:a=l+r,tick:_=x,css:f}=n(t,{from:e,to:s},i);let u=!0,d=!1,h;function p(){f&&(h=R(t,0,1,r,c,o,f)),c||(d=!0)}function m(){f&&P(t,h),u=!1}return Q(y=>{if(!d&&y>=l&&(d=!0),d&&y>=a&&(_(1,0),m()),!u)return!1;if(d){const b=y-l,$=0+1*o(b/r);_($,1-$)}return!0}),p(),_(0,1),m}function Se(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,It(t,s)}}function It(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let B;function E(t){B=t}function A(){if(!B)throw new Error("Function called outside component initialization");return B}function je(t){A().$$.on_mount.push(t)}function Me(t){A().$$.after_update.push(t)}function De(t){A().$$.on_destroy.push(t)}function He(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=xt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Re(t,e){return A().$$.context.set(t,e),e}function Pe(t){return A().$$.context.get(t)}function Be(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const D=[],ft=[],F=[],Y=[],wt=Promise.resolve();let Z=!1;function kt(){Z||(Z=!0,wt.then(st))}function Le(){return kt(),wt}function S(t){F.push(t)}function Oe(t){Y.push(t)}const X=new Set;let z=0;function st(){const t=B;do{for(;z<D.length;){const e=D[z];z++,E(e),Jt(e.$$)}for(E(null),D.length=0,z=0;ft.length;)ft.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];X.has(n)||(X.add(n),n())}F.length=0}while(D.length);for(;Y.length;)Y.pop()();Z=!1,X.clear(),E(t)}function Jt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}let M;function rt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function N(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const G=new Set;let v;function Kt(){v={r:0,c:[],p:v}}function Qt(){v.r||C(v.c),v=v.p}function ct(t,e){t&&t.i&&(G.delete(t),t.i(e))}function vt(t,e,n,i){if(t&&t.o){if(G.has(t))return;G.add(t),v.c.push(()=>{G.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const lt={duration:0};function qe(t,e,n){let i=e(t,n),s=!1,c,r,o=0;function l(){c&&P(t,c)}function a(){const{delay:f=0,duration:u=300,easing:d=J,tick:h=x,css:p}=i||lt;p&&(c=R(t,0,1,u,f,d,p,o++)),h(0,1);const m=K()+f,y=m+u;r&&r.abort(),s=!0,S(()=>N(t,!0,"start")),r=Q(b=>{if(s){if(b>=y)return h(1,0),N(t,!0,"end"),l(),s=!1;if(b>=m){const $=d((b-m)/u);h($,1-$)}}return s})}let _=!1;return{start(){_||(_=!0,P(t),j(i)?(i=i(),rt().then(a)):a())},invalidate(){_=!1},end(){s&&(l(),s=!1)}}}function ze(t,e,n){let i=e(t,n),s=!0,c;const r=v;r.r+=1;function o(){const{delay:l=0,duration:a=300,easing:_=J,tick:f=x,css:u}=i||lt;u&&(c=R(t,1,0,a,l,_,u));const d=K()+l,h=d+a;S(()=>N(t,!1,"start")),Q(p=>{if(s){if(p>=h)return f(0,1),N(t,!1,"end"),--r.r||C(r.c),!1;if(p>=d){const m=_((p-d)/a);f(1-m,m)}}return s})}return j(i)?rt().then(()=>{i=i(),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),s&&(c&&P(t,c),s=!1)}}}function Fe(t,e,n,i){let s=e(t,n),c=i?0:1,r=null,o=null,l=null;function a(){l&&P(t,l)}function _(u,d){const h=u.b-c;return d*=Math.abs(h),{a:c,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:p=J,tick:m=x,css:y}=s||lt,b={start:K()+d,b:u};u||(b.group=v,v.r+=1),r||o?o=b:(y&&(a(),l=R(t,c,u,h,d,p,y)),u&&m(0,1),r=_(b,h),S(()=>N(t,u,"start")),Q($=>{if(o&&$>o.start&&(r=_(o,h),o=null,N(t,r.b,"start"),y&&(a(),l=R(t,c,r.b,r.duration,0,p,s.css))),r){if($>=r.end)m(c=r.b,1-c),N(t,r.b,"end"),o||(r.b?a():--r.group.r||C(r.group.c)),r=null;else if($>=r.start){const L=$-r.start;c=r.a+r.d*p(L/r.duration),m(c,1-c)}}return!!(r||o)}))}return{run(u){j(s)?rt().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=o=null}}}function Ge(t,e){const n=e.token={};function i(s,c,r,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;r!==void 0&&(l=l.slice(),l[r]=o);const a=s&&(e.current=s)(l);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,u)=>{u!==c&&f&&(Kt(),vt(f,1,1,()=>{e.blocks[u]===f&&(e.blocks[u]=null)}),Qt())}):e.block.d(1),a.c(),ct(a,1),a.m(e.mount(),e.anchor),_=!0),e.block=a,e.blocks&&(e.blocks[c]=a),_&&st()}if(Nt(t)){const s=A();if(t.then(c=>{E(s),i(e.then,1,e.value,c),E(null)},c=>{if(E(s),i(e.catch,2,e.error,c),E(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function We(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Ut(t,e){vt(t,1,1,()=>{e.delete(t.key)})}function Ie(t,e){t.f(),Ut(t,e)}function Je(t,e,n,i,s,c,r,o,l,a,_,f){let u=t.length,d=c.length,h=u;const p={};for(;h--;)p[t[h].key]=h;const m=[],y=new Map,b=new Map;for(h=d;h--;){const g=f(s,c,h),w=n(g);let k=r.get(w);k?i&&k.p(g,e):(k=a(w,g),k.c()),y.set(w,m[h]=k),w in p&&b.set(w,Math.abs(h-p[w]))}const $=new Set,L=new Set;function V(g){ct(g,1),g.m(o,_),r.set(g.key,g),_=g.first,d--}for(;u&&d;){const g=m[d-1],w=t[u-1],k=g.key,O=w.key;g===w?(_=g.first,u--,d--):y.has(O)?!r.has(k)||$.has(k)?V(g):L.has(O)?u--:b.get(k)>b.get(O)?(L.add(k),V(g)):($.add(O),u--):(l(w,r),u--)}for(;u--;){const g=t[u];y.has(g.key)||l(g,r)}for(;d;)V(m[d-1]);return m}function Ke(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Qe(t){return typeof t=="object"&&t!==null?t:{}}function Ue(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ve(t){t&&t.c()}function Xe(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||S(()=>{const r=t.$$.on_mount.map(_t).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...r):C(r),t.$$.on_mount=[]}),c.forEach(S)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(D.push(t),kt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ye(t,e,n,i,s,c,r,o=[-1]){const l=B;E(t);const a=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:s,bound:ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ot(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&Yt(t,f)),u}):[],a.update(),_=!0,C(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Tt();const f=Ot(e.target);a.fragment&&a.fragment.l(f),f.forEach(H)}else a.fragment&&a.fragment.c();e.intro&&ct(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),St(),st()}E(l)}class Ze{$destroy(){Xt(this,1),this.$destroy=x}$on(e,n){if(!j(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as $,Ke as A,Qe as B,Xt as C,Et as D,Le as E,x as F,At as G,C as H,j as I,S as J,Fe as K,Pt as L,ne as M,se as N,re as O,ie as P,Ne as Q,ue as R,Ze as S,te as T,gt as U,$e as V,pe as W,ce as X,ee as Y,oe as Z,He as _,Ot as a,ae as a0,Se as a1,It as a2,Te as a3,qe as a4,ze as a5,Je as a6,Ie as a7,J as a8,Be as a9,me as aa,Ce as ab,ge as ac,ft as ad,Ue as ae,Oe as af,le as ag,ut as ah,we as ai,ve as aj,Pe as ak,De as al,Ge as am,We as an,ye as ao,he as ap,it as b,be as c,H as d,et as e,Ee as f,Lt as g,qt as h,Ye as i,ke as j,fe as k,_e as l,xe as m,Kt as n,vt as o,Qt as p,ct as q,Re as r,Zt as s,nt as t,Me as u,je as v,Ae as w,Ve as x,Xe as y,Vt as z};
