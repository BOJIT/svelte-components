import{S as M,i as j,s as F,w as d,x as R,y as k,f as b,t as g,z as w,a8 as G,e as D,b as p,g as B,d as E,h as v,v as T,k as I,l as O,m as S,n as m,p as C,M as z,a4 as U,a7 as H,D as J}from"./index-949f6906.js";import{r as K}from"./ripple-3b16fdc2.js";import{L as P}from"./Link-2eb40228.js";import"./simplebar-c2495cc7.js";function Q(o){let e,l,t,i,c,u;var r=o[0];function s(n){return{props:{height:n[6],color:n[9]}}}return r&&(l=T(r,s(o))),{c(){e=I("button"),l&&d(l.$$.fragment),this.h()},l(n){e=O(n,"BUTTON",{class:!0,style:!0,"aria-label":!0});var a=S(e);l&&R(l.$$.fragment,a),a.forEach(v),this.h()},h(){e.disabled=o[3],m(e,"class",t=o[7]+" overflow-hidden svelte-eemtoe"),C(e,"background-color",o[8]),m(e,"aria-label",o[5]),z(e,"hoverable",!o[3])},m(n,a){p(n,e,a),l&&k(l,e,null),i=!0,c||(u=U(e,"click",o[13]),c=!0)},p(n,a){const _={};if(a&64&&(_.height=n[6]),a&512&&(_.color=n[9]),r!==(r=n[0])){if(l){B();const h=l;g(h.$$.fragment,1,0,()=>{w(h,1)}),E()}r?(l=T(r,s(n)),d(l.$$.fragment),b(l.$$.fragment,1),k(l,e,null)):l=null}else r&&l.$set(_);(!i||a&8)&&(e.disabled=n[3]),(!i||a&128&&t!==(t=n[7]+" overflow-hidden svelte-eemtoe"))&&m(e,"class",t),(!i||a&256)&&C(e,"background-color",n[8]),(!i||a&32)&&m(e,"aria-label",n[5]),(!i||a&136)&&z(e,"hoverable",!n[3])},i(n){i||(l&&b(l.$$.fragment,n),i=!0)},o(n){l&&g(l.$$.fragment,n),i=!1},d(n){n&&v(e),l&&w(l),c=!1,u()}}}function V(o){let e,l,t,i,c,u;var r=o[0];function s(n){return{props:{height:n[6],color:n[9]}}}return r&&(l=T(r,s(o))),{c(){e=I("button"),l&&d(l.$$.fragment),this.h()},l(n){e=O(n,"BUTTON",{class:!0,style:!0,"aria-label":!0});var a=S(e);l&&R(l.$$.fragment,a),a.forEach(v),this.h()},h(){e.disabled=o[3],m(e,"class",t=o[7]+" overflow-hidden svelte-eemtoe"),C(e,"background-color",o[8]),m(e,"aria-label",o[5]),z(e,"hoverable",!o[3])},m(n,a){p(n,e,a),l&&k(l,e,null),i=!0,c||(u=[U(e,"click",o[12]),H(o[11].call(null,e))],c=!0)},p(n,a){const _={};if(a&64&&(_.height=n[6]),a&512&&(_.color=n[9]),r!==(r=n[0])){if(l){B();const h=l;g(h.$$.fragment,1,0,()=>{w(h,1)}),E()}r?(l=T(r,s(n)),d(l.$$.fragment),b(l.$$.fragment,1),k(l,e,null)):l=null}else r&&l.$set(_);(!i||a&8)&&(e.disabled=n[3]),(!i||a&128&&t!==(t=n[7]+" overflow-hidden svelte-eemtoe"))&&m(e,"class",t),(!i||a&256)&&C(e,"background-color",n[8]),(!i||a&32)&&m(e,"aria-label",n[5]),(!i||a&136)&&z(e,"hoverable",!n[3])},i(n){i||(l&&b(l.$$.fragment,n),i=!0)},o(n){l&&g(l.$$.fragment,n),i=!1},d(n){n&&v(e),l&&w(l),c=!1,J(u)}}}function W(o){let e,l,t,i;const c=[V,Q],u=[];function r(s,n){return s[4]?0:1}return e=r(o),l=u[e]=c[e](o),{c(){l.c(),t=D()},l(s){l.l(s),t=D()},m(s,n){u[e].m(s,n),p(s,t,n),i=!0},p(s,n){let a=e;e=r(s),e===a?u[e].p(s,n):(B(),g(u[a],1,1,()=>{u[a]=null}),E(),l=u[e],l?l.p(s,n):(l=u[e]=c[e](s),l.c()),b(l,1),l.m(t.parentNode,t))},i(s){i||(b(l),i=!0)},o(s){g(l),i=!1},d(s){u[e].d(s),s&&v(t)}}}function X(o){let e,l;return e=new P({props:{href:o[1],newTab:o[2],label:o[5],$$slots:{default:[W]},$$scope:{ctx:o}}}),{c(){d(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,i){k(e,t,i),l=!0},p(t,[i]){const c={};i&2&&(c.href=t[1]),i&4&&(c.newTab=t[2]),i&32&&(c.label=t[5]),i&17401&&(c.$$scope={dirty:i,ctx:t}),e.$set(c)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function Y(o,e,l){const t=G();let i=K("white"),{icon:c}=e,{href:u=null}=e,{newTab:r=!1}=e,{disabled:s=!1}=e,{useRipple:n=!0}=e,{label:a="Accessibility Label"}=e,{size:_="2.5em"}=e,{shape:h="rounded"}=e,{color:L="var(--color-primary-500)"}=e,{iconColor:N="white"}=e;const q=()=>{t("click")},A=()=>{t("click")};return o.$$set=f=>{"icon"in f&&l(0,c=f.icon),"href"in f&&l(1,u=f.href),"newTab"in f&&l(2,r=f.newTab),"disabled"in f&&l(3,s=f.disabled),"useRipple"in f&&l(4,n=f.useRipple),"label"in f&&l(5,a=f.label),"size"in f&&l(6,_=f.size),"shape"in f&&l(7,h=f.shape),"color"in f&&l(8,L=f.color),"iconColor"in f&&l(9,N=f.iconColor)},[c,u,r,s,n,a,_,h,L,N,t,i,q,A]}class ee extends M{constructor(e){super(),j(this,e,Y,X,F,{icon:0,href:1,newTab:2,disabled:3,useRipple:4,label:5,size:6,shape:7,color:8,iconColor:9})}}export{ee as I};
