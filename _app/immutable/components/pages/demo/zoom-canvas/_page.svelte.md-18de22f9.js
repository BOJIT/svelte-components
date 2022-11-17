import{S as z,i as S,s as T,I as V,k as w,q as D,a as E,l as b,m as g,r as y,h as d,c as k,n as M,M as P,p as Z,b as h,H as v,J as j,K as B,L as J,f as $,t as F,ai as K,o as x,ab as N,aj as O,ak as R,w as L,a9 as G,x as W,y as q,z as A,B as Q}from"../../../../chunks/index-949f6906.js";/* empty css                                                                  */function U(f){let e,a,o,m,c,u;const s=f[4].default,n=V(s,f,f[3],null);return{c(){e=w("div"),a=w("canvas"),o=w("h4"),m=D("Canvas element not supported in your browser!"),c=E(),n&&n.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var i=g(e);a=b(i,"CANVAS",{class:!0});var l=g(a);o=b(l,"H4",{});var p=g(o);m=y(p,"Canvas element not supported in your browser!"),p.forEach(d),l.forEach(d),c=k(i),n&&n.l(i),i.forEach(d),this.h()},h(){M(a,"class","svelte-3c5elr"),M(e,"class","container svelte-3c5elr"),P(e,"fill",f[0]==="fill"),Z(e,"padding-bottom",f[1])},m(r,i){h(r,e,i),v(e,a),v(a,o),v(o,m),f[5](a),v(e,c),n&&n.m(e,null),u=!0},p(r,[i]){n&&n.p&&(!u||i&8)&&j(n,s,r,r[3],u?J(s,r[3],i,null):B(r[3]),null),(!u||i&1)&&P(e,"fill",r[0]==="fill"),i&2&&Z(e,"padding-bottom",r[1])},i(r){u||($(n,r),u=!0)},o(r){F(n,r),u=!1},d(r){r&&d(e),f[5](null),n&&n.d(r)}}}function X(f,e,a){let{$$slots:o={},$$scope:m}=e,{aspect:c="fill"}=e,u="0%",s,n=[];K("canvas",{addDrawFn:l=>{n.push(l)},removeDrawFn:l=>{let p=n.indexOf(l);p>-1&&n.splice(p,1)}}),x(()=>{let l=s.getContext("2d");r(l,s),window.addEventListener("resize",p=>{r(l,s)})});function r(l,p){l.clearRect(0,0,p.width,p.height),a(2,s.width=s.offsetWidth,s),a(2,s.height=s.offsetHeight,s),n.forEach(t=>t(l))}function i(l){N[l?"unshift":"push"](()=>{s=l,a(2,s)})}return f.$$set=l=>{"aspect"in l&&a(0,c=l.aspect),"$$scope"in l&&a(3,m=l.$$scope)},f.$$.update=()=>{if(f.$$.dirty&1)if(c==="fill")a(1,u="0%");else{let l=parseInt(c.split(":")[0])/parseInt(c.split(":")[1]);a(1,u=(100/l).toString().concat("%"))}},[c,u,s,m,o,i]}class Y extends z{constructor(e){super(),S(this,e,X,U,T,{aspect:0})}}function ee(f,e,a){let{start:o}=e,{end:m}=e,c=O("canvas");x(()=>{c.addDrawFn(u)}),R(()=>{c.removeDrawFn(u)});function u(s){s.beginPath(),s.moveTo(...o),s.lineTo(...m),s.strokeStyle="#ffffff",s.stroke()}return f.$$set=s=>{"start"in s&&a(0,o=s.start),"end"in s&&a(1,m=s.end)},[o,m]}class te extends z{constructor(e){super(),S(this,e,ee,null,T,{start:0,end:1})}}function se(f){let e,a;return e=new te({props:{start:[10,20],end:[150,100]}}),{c(){L(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,m){q(e,o,m),a=!0},p:Q,i(o){a||($(e.$$.fragment,o),a=!0)},o(o){F(e.$$.fragment,o),a=!1},d(o){A(e,o)}}}function ae(f){let e,a,o,m,c,u,s,n,r,i,l,p;return n=new Y({props:{aspect:"16:9",$$slots:{default:[se]},$$scope:{ctx:f}}}),{c(){e=E(),a=w("h1"),o=D("This is a Zoomable Canvas Element"),m=E(),c=w("p"),u=D("Wrapped text behaviour either side looks like this:"),s=E(),L(n.$$.fragment),r=E(),i=w("p"),l=D("More text"),this.h()},l(t){G("svelte-115tnza",document.head).forEach(d),e=k(t),a=b(t,"H1",{});var C=g(a);o=y(C,"This is a Zoomable Canvas Element"),C.forEach(d),m=k(t),c=b(t,"P",{});var H=g(c);u=y(H,"Wrapped text behaviour either side looks like this:"),H.forEach(d),s=k(t),W(n.$$.fragment,t),r=k(t),i=b(t,"P",{});var I=g(i);l=y(I,"More text"),I.forEach(d),this.h()},h(){document.title="Demo - Zoom Canvas"},m(t,_){h(t,e,_),h(t,a,_),v(a,o),h(t,m,_),h(t,c,_),v(c,u),h(t,s,_),q(n,t,_),h(t,r,_),h(t,i,_),v(i,l),p=!0},p(t,[_]){const C={};_&1&&(C.$$scope={dirty:_,ctx:t}),n.$set(C)},i(t){p||($(n.$$.fragment,t),p=!0)},o(t){F(n.$$.fragment,t),p=!1},d(t){t&&d(e),t&&d(a),t&&d(m),t&&d(c),t&&d(s),A(n,t),t&&d(r),t&&d(i)}}}class oe extends z{constructor(e){super(),S(this,e,null,ae,T,{})}}export{oe as default};
