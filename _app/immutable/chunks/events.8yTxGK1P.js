import{a7 as E,w as q,C as N,N as P,am as d,an as v,a6 as L,S as m,ao as B,ap as F,Z as M,F as O,aq as T}from"./runtime.S8YJ2jtw.js";function Z(t,e){if(e){const r=document.body;t.autofocus=!0,E(()=>{document.activeElement===r&&t.focus()})}}function j(t){q&&N(t)!==null&&P(t)}let b=!1;function W(){b||(b=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function $(t){var e=L,r=m;d(null),v(null);try{return t()}finally{d(e),v(r)}}function z(t,e,r,i=r){t.addEventListener(e,()=>$(r));const n=t.__on_r;n?t.__on_r=()=>{n(),i(!0)}:t.__on_r=()=>i(!0),W()}const A=new Set,C=new Set;function x(t,e,r,i){function n(a){if(i.capture||D.call(e,a),!a.cancelBubble)return $(()=>r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?E(()=>{e.addEventListener(t,n,i)}):e.addEventListener(t,n,i),n}function G(t,e,r,i={}){var n=x(e,t,r,i);return()=>{t.removeEventListener(e,n,i)}}function H(t,e,r,i,n){var a={capture:i,passive:n},c=x(t,e,r,a);(e===document.body||e===window||e===document)&&B(()=>{e.removeEventListener(t,c,a)})}function J(t){for(var e=0;e<t.length;e++)A.add(t[e]);for(var r of C)r(t)}function D(t){var w;var e=this,r=e.ownerDocument,i=t.type,n=((w=t.composedPath)==null?void 0:w.call(t))||[],a=n[0]||t.target,c=0,s=t.__root;if(s){var o=n.indexOf(s);if(o!==-1&&(e===document||e===window)){t.__root=e;return}var l=n.indexOf(e);if(l===-1)return;o<=l&&(c=o)}if(a=n[c]||t.target,a!==e){F(t,"currentTarget",{configurable:!0,get(){return a||r}});var h=L,y=m;d(null),v(null);try{for(var f,g=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var u=a["__"+i];if(u!==void 0&&!a.disabled)if(M(u)){var[S,...k]=u;S.apply(a,[t,...k])}else u.call(a,t)}catch(_){f?g.push(_):f=_}if(t.cancelBubble||p===e||p===null)break;a=p}if(f){for(let _ of g)queueMicrotask(()=>{throw _});throw f}}finally{t.__root=e,delete t.currentTarget,d(h),v(y)}}}function K(t,e,r,i,n,a=!1,c=!1){let s,o;try{s=t()}catch(l){o=l}if(typeof s=="function")s.apply(e,r);else if(a||s!=null||o){const h=` at ${i==null?void 0:i[O]}:${n[0]}:${n[1]}`,f=`\`${r[0].type}\` handler${h}`;if(T(f,c?"remove the trailing `()`":"add a leading `() =>`"),o)throw o}}export{A as a,Z as b,x as c,J as d,H as e,W as f,j as g,D as h,K as i,z as l,G as o,C as r};