import{aH as V,aI as x,o as A,a1 as W,aJ as L,aB as Z,a4 as j,n as T,i as U,g as d,a5 as z,aK as y,aL as Q,aM as X,aN as m,aO as k,as as ee,aP as K,aQ as w,aR as G,aS as re,aT as ne,av as N,aU as se,J as ie,aV as ae,aW as ue,G as $,aX as te,T as q,aY as fe,aZ as le,a_ as ce,F as g,a$ as oe,M as pe,b0 as de,ah as _e,b1 as ve}from"./CSs5j321.js";import{s as be}from"./P7nci53E.js";function C(e,r){return e===r||(e==null?void 0:e[L])===r}function Ee(e={},r,s,n){return V(()=>{var i,a;return x(()=>{i=a,a=(n==null?void 0:n())||[],A(()=>{e!==s(...a)&&(r(e,...a),i&&C(s(...i),e)&&r(null,...i))})}),()=>{W(()=>{a&&C(s(...a),e)&&r(null,...a)})}}),e}let S=!1;function Oe(e,r,s){const n=s[r]??(s[r]={store:null,source:j(void 0),unsubscribe:T});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=T;else{var i=!0;n.unsubscribe=be(e,a=>{i?n.source.v=a:U(n.source,a)}),i=!1}return d(n.source)}function Re(e,r,s){let n=s[r];return n&&n.store!==e&&(n.unsubscribe(),n.unsubscribe=T),e}function Ie(){const e={};return Z(()=>{for(var r in e)e[r].unsubscribe()}),e}function H(e){var r=S;try{return S=!1,[e(),S]}finally{S=r}}const he={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return le(`${e.name}.${String(r)}`),!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ae(e,r,s){return new Proxy({props:e,exclude:r,name:s,other:{},to_proxy:[]},he)}const Pe={get(e,r){if(!e.exclude.includes(r))return d(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,s){return r in e.special||(e.special[r]=Se({get[r](){return e.props[r]}},r,m)),e.special[r](s),K(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),K(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Te(e,r){return new Proxy({props:e,exclude:r,special:{},version:z(0)},Pe)}const we={get(e,r){let s=e.props.length;for(;s--;){let n=e.props[s];if(w(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n)return n[r]}},set(e,r,s){let n=e.props.length;for(;n--;){let i=e.props[n];w(i)&&(i=i());const a=y(i,r);if(a&&a.set)return a.set(s),!0}return!1},getOwnPropertyDescriptor(e,r){let s=e.props.length;for(;s--;){let n=e.props[s];if(w(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n){const i=y(n,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===L||r===G)return!1;for(let s of e.props)if(w(s)&&(s=s()),s!=null&&r in s)return!0;return!1},ownKeys(e){const r=[];for(let s of e.props){w(s)&&(s=s());for(const n in s)r.includes(n)||r.push(n)}return r}};function ge(...e){return new Proxy({props:e},we)}function Y(e){for(var r=q,s=q;r!==null&&!(r.f&(re|ne));)r=r.parent;try{return N(r),e()}finally{N(s)}}function Se(e,r,s,n){var F;var i=(s&se)!==0,a=!ie||(s&ae)!==0,t=(s&ue)!==0,f=(s&fe)!==0,_=!1,l;t?[l,_]=H(()=>e[r]):l=e[r];var p=L in e||G in e,o=((F=y(e,r))==null?void 0:F.set)??(p&&t&&r in e?u=>e[r]=u:void 0),c=n,h=!0,E=!1,D=()=>(E=!0,h&&(h=!1,f?c=A(n):c=n),c);l===void 0&&n!==void 0&&(o&&a&&Q(r),l=D(),o&&o(l));var v;if(a)v=()=>{var u=e[r];return u===void 0?D():(h=!0,E=!1,u)};else{var M=Y(()=>(i?$:te)(()=>e[r]));M.f|=X,v=()=>{var u=d(M);return u!==void 0&&(c=void 0),u===void 0?c:u}}if(!(s&m))return v;if(o){var J=e.$$legacy;return function(u,b){return arguments.length>0?((!a||!b||J||_)&&o(b?v():u),u):v()}}var O=!1,B=!1,R=j(l),P=Y(()=>$(()=>{var u=v(),b=d(R);return O?(O=!1,B=!0,b):(B=!1,R.v=u)}));return i||(P.equals=k),function(u,b){if(arguments.length>0){const I=b?d(P):a&&t?ee(u):u;return P.equals(I)||(O=!0,U(R,I),E&&c!==void 0&&(c=I),A(()=>d(P))),u}return d(P)}}function Le(e,r){x(()=>{const s=new Map,n=e(),i=pe(n)?n:n==null?[]:Array.from(n),a=i.length;for(let t=0;t<a;t++){const f=r(i[t],t);if(s.has(f)){const _=String(s.get(f)),l=String(t);let p=String(f);p.startsWith("[object ")&&(p=null),de(_,l,p)}s.set(f,t)}})}function De(e,r,s,n){var t;for(const f in e){var i=(t=y(e,f))==null?void 0:t.set,a=n.name;i&&(s.includes(f)&&ce(n[g],f,a),r.includes(f)||oe(f,n[g],a))}}function Me(e,r,s,n,i){var f;var a=!1,t=(f=_e)==null?void 0:f[g];x(()=>{if(!a){var[_,l]=H(r);if(!l){var p=s(),o=!1,c=x(()=>{o||_[p]});if(o=!0,c.deps===null){var h=`${t}:${n}:${i}`;ve(e,h),a=!0}}}})}export{Oe as a,Ee as b,Re as c,ge as d,Le as e,Me as f,Te as l,Se as p,Ae as r,Ie as s,De as v};
