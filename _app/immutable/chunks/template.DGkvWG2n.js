import{w as d,H as T,_ as A,K as N,R as c,q as D,aW as R,D as m,I as p,J as v,z as f,C as _,S as g,aX as x,aY as C,x as b}from"./runtime.DPhIO4oW.js";function w(e,t,a){return(...i)=>{const r=e(...i);var s=d?r:r.nodeType===11?r.firstChild:r;return y(s,t,a),r}}function H(e,t,a){e.__svelte_meta={loc:{file:t,line:a[0],column:a[1]}},a[2]&&y(e.firstChild,t,a[2])}function y(e,t,a){for(var i=0,r=0;e&&i<a.length;){if(d&&e.nodeType===8){var s=e;s.data===T||s.data===A?r+=1:s.data[0]===N&&(r-=1)}r===0&&e.nodeType===1&&H(e,t,a[i++]),e=e.nextSibling}}let n;function I(){n=void 0}function M(e){let t=null,a=d;var i;if(d){for(t=f,n===void 0&&(n=_(document.head));n!==null&&(n.nodeType!==8||n.data!==T);)n=m(n);n===null?p(!1):n=v(m(n))}d||(i=document.head.appendChild(c()));try{D(()=>e(i),R)}finally{a&&(p(!0),n=f,v(t))}}function E(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var a=g;a.nodes_start===null&&(a.nodes_start=e,a.nodes_end=t)}function O(e,t){var a=(t&x)!==0,i=(t&C)!==0,r,s=!e.startsWith("<!>");return()=>{if(d)return u(f,null),f;r===void 0&&(r=E(s?e:"<!>"+e),a||(r=_(r)));var o=i?document.importNode(r,!0):r.cloneNode(!0);if(a){var h=_(o),l=o.lastChild;u(h,l)}else u(o,o);return o}}function F(e,t,a="svg"){var i=!e.startsWith("<!>"),r=`<${a}>${i?e:"<!>"+e}</${a}>`,s;return()=>{if(d)return u(f,null),f;if(!s){var o=E(r),h=_(o);s=_(h)}var l=s.cloneNode(!0);return u(l,l),l}}function L(e=""){if(!d){var t=c(e+"");return u(t,t),t}var a=f;return a.nodeType!==3&&(a.before(a=c()),v(a)),u(a,a),a}function Y(){if(d)return u(f,null),f;var e=document.createDocumentFragment(),t=document.createComment(""),a=c();return e.append(t,a),u(t,a),e}function P(e,t){if(d){g.nodes_end=f,b();return}e!==null&&e.before(t)}export{P as a,w as b,u as c,E as d,Y as e,L as f,M as h,F as n,I as r,O as t};
