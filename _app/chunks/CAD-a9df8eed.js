import{_ as L}from"./preload-helper-e4860ae8.js";import{S as V,i as A,s as S,e as g,c as h,a as w,d as b,T as D,ac as r,b as E,Q as p,f as z,g as k,L as y,$ as I,F as q,H as M,v as O,ad as P}from"./index-fbcbac4f.js";function R(n){let o,e,t,d,i,_,f,m,u,c;return{c(){o=g("div"),e=g("div"),t=g("model-viewer"),this.h()},l(a){o=h(a,"DIV",{class:!0});var l=w(o);e=h(l,"DIV",{class:!0});var v=w(e);t=h(v,"MODEL-VIEWER",{src:!0,"disable-zoom":!0,"enable-pan":!0,"camera-controls":!0,"auto-rotate":!0,class:!0}),w(t).forEach(b),v.forEach(b),l.forEach(b),this.h()},h(){D(t.src,d=n[0]?n[0]:!1)||r(t,"src",d),r(t,"disable-zoom",i=!n[5]||void 0),r(t,"enable-pan",_=n[3]||void 0),r(t,"camera-controls",f=!n[2]||void 0),r(t,"auto-rotate",m=n[2]||void 0),r(t,"class","svelte-1fiqyb5"),E(e,"class","model-container svelte-1fiqyb5"),p(e,"transparent",n[1]),p(e,"zoomable",n[5]),z(e,"padding-bottom",n[4]),E(o,"class","content-padded")},m(a,l){k(a,o,l),y(o,e),y(e,t),n[10](e),u||(c=[I(e,"mousedown",n[7]),I(e,"mouseup",n[8])],u=!0)},p(a,[l]){l&1&&!D(t.src,d=a[0]?a[0]:!1)&&r(t,"src",d),l&32&&i!==(i=!a[5]||void 0)&&r(t,"disable-zoom",i),l&8&&_!==(_=a[3]||void 0)&&r(t,"enable-pan",_),l&4&&f!==(f=!a[2]||void 0)&&r(t,"camera-controls",f),l&4&&m!==(m=a[2]||void 0)&&r(t,"auto-rotate",m),l&2&&p(e,"transparent",a[1]),l&32&&p(e,"zoomable",a[5]),l&16&&z(e,"padding-bottom",a[4])},i:q,o:q,d(a){a&&b(o),n[10](null),u=!1,M(c)}}}function T(n,o,e){let{geometry:t=null}=o,{transparent:d=!1}=o,{aspect:i="4:3"}=o,{rotate:_=!1}=o,{pan:f=!0}=o,m="0%",u=!1,c=Date.now(),a;function l(){c=Date.now()}function v(){u===!1?e(5,u=!0):Date.now()-c<200&&e(5,u=!1)}O(async()=>{await L(()=>import("./model-viewer.min-5a9beee9.js"),[]),window.addEventListener("mouseup",function(s){s.target!=a&&s.target.parentNode!=a&&e(5,u=!1)})});function C(s){P[s?"unshift":"push"](()=>{a=s,e(6,a)})}return n.$$set=s=>{"geometry"in s&&e(0,t=s.geometry),"transparent"in s&&e(1,d=s.transparent),"aspect"in s&&e(9,i=s.aspect),"rotate"in s&&e(2,_=s.rotate),"pan"in s&&e(3,f=s.pan)},n.$$.update=()=>{if(n.$$.dirty&512){let s=parseInt(i.split(":")[0])/parseInt(i.split(":")[1]);e(4,m=(100/s).toString().concat("%"))}},[t,d,_,f,m,u,a,l,v,i,C]}class N extends V{constructor(o){super(),A(this,o,T,R,S,{geometry:0,transparent:1,aspect:9,rotate:2,pan:3})}}export{N as C};
