import{_ as k}from"./preload-helper.41c905a7.js";import{S as C,i as I,s as V,k as h,l as p,m as v,h as w,T as g,a9 as r,n as q,Q as c,b as A,E as M,_ as E,F as z,$ as O,o as P,w as R}from"./index.ed07b2e6.js";/* empty css                                          */function S(t){let a,e,u,f,m,_,l,d,i;return{c(){a=h("div"),e=h("model-viewer"),this.h()},l(n){a=p(n,"DIV",{class:!0});var o=v(a);e=p(o,"MODEL-VIEWER",{src:!0,"disable-zoom":!0,"enable-pan":!0,"camera-controls":!0,"auto-rotate":!0,class:!0}),v(e).forEach(w),o.forEach(w),this.h()},h(){g(e.src,u=t[0]?t[0]:!1)||r(e,"src",u),r(e,"disable-zoom",f=!t[4]||void 0),r(e,"enable-pan",m=t[3]||void 0),r(e,"camera-controls",_=!t[2]||void 0),r(e,"auto-rotate",l=t[2]||void 0),r(e,"class","svelte-lwth"),q(a,"class","model-container svelte-lwth"),c(a,"transparent",t[1]),c(a,"zoomable",t[4]),c(a,"rounded-border",t[6])},m(n,o){A(n,a,o),M(a,e),t[9](a),d||(i=[E(a,"mousedown",t[7]),E(a,"mouseup",t[8])],d=!0)},p(n,[o]){o&1&&!g(e.src,u=n[0]?n[0]:!1)&&r(e,"src",u),o&16&&f!==(f=!n[4]||void 0)&&r(e,"disable-zoom",f),o&8&&m!==(m=n[3]||void 0)&&r(e,"enable-pan",m),o&4&&_!==(_=!n[2]||void 0)&&r(e,"camera-controls",_),o&4&&l!==(l=n[2]||void 0)&&r(e,"auto-rotate",l),o&2&&c(a,"transparent",n[1]),o&16&&c(a,"zoomable",n[4]),o&64&&c(a,"rounded-border",n[6])},i:z,o:z,d(n){n&&w(a),t[9](null),d=!1,O(i)}}}function T(t,a,e){let{geometry:u=null}=a,{transparent:f=!1}=a,{rotate:m=!1}=a,{pan:_=!0}=a,l=!1,d=Date.now(),i,n=!1;function o(){d=Date.now()}function D(){l===!1?e(4,l=!0):Date.now()-d<200&&e(4,l=!1)}P(async()=>{var s;await k(()=>import("./model-viewer.min.7c22e572.js"),[],import.meta.url),(s=i.parentElement)!=null&&s.classList.contains("container")&&e(6,n=!0),window.addEventListener("mouseup",function(b){b.target!=i&&b.target.parentNode!=i&&e(4,l=!1)})});function L(s){R[s?"unshift":"push"](()=>{i=s,e(5,i)})}return t.$$set=s=>{"geometry"in s&&e(0,u=s.geometry),"transparent"in s&&e(1,f=s.transparent),"rotate"in s&&e(2,m=s.rotate),"pan"in s&&e(3,_=s.pan)},[u,f,m,_,l,i,n,o,D,L]}class W extends C{constructor(a){super(),I(this,a,T,S,V,{geometry:0,transparent:1,rotate:2,pan:3})}}export{W as C};
