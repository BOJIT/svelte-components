import{S as te,i as ie,s as le,a as S,k as v,c as H,l as b,m as V,h as d,n as y,p as E,b as I,H as _,f as T,g as j,t as O,d as W,N as R,o as ae,w as x,x as z,y as D,z as q,M as B,ab as L,e as U,q as P,r as J,u as A,O as K,a9 as re,B as se}from"../../../../chunks/index-949f6906.js";import"../../../../chunks/preload-helper-b21cceae.js";/* empty css                                                                     *//* empty css                                                              */import{L as oe}from"../../../../chunks/Link-2eb40228.js";import{P as ce}from"../../../../chunks/ProgressCircular-b70c9616.js";import"../../../../chunks/simplebar-c2495cc7.js";import"../../../../chunks/index-8200bf23.js";/* empty css                                                              *//* empty css                                                               *//* empty css                                                                  */const Q={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:20,maxFontSize:500,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!0};function fe(i,e){e||(e={});let t={};for(let l in Q)e.hasOwnProperty(l)?t[l]=e[l]:t[l]=Q[l];let n=Object.prototype.toString.call(i);n!=="[object Array]"&&n!=="[object NodeList]"&&n!=="[object HTMLCollection]"&&(i=[i]);for(let l=0;l<i.length;l++)ue(i[l],t)}function ue(i,e){if(!ge(i)||!e.reProcess&&i.getAttribute("textFitted"))return!1;e.reProcess||i.setAttribute("textFitted",1);let t,n,l,a,r,g,h;if(l=i.innerHTML,a=me(i),n=he(i),!a||!e.widthOnly&&!n)throw e.widthOnly?new Error("Set a static width on the target element "+i.outerHTML+" before using textFit!"):new Error("Set a static height and width on the target element "+i.outerHTML+" before using textFit!");l.indexOf("textFitted")===-1?(t=document.createElement("span"),t.className="textFitted",t.style.display="inline-block",t.innerHTML=l,i.innerHTML="",i.appendChild(t)):(t=i.querySelector("span.textFitted"),M(t,"textFitAlignVert")&&(t.className=t.className.replace("textFitAlignVert",""),t.style.height="",i.className.replace("textFitAlignVertFlex",""))),e.alignHoriz&&(i.style["text-align"]="center",t.style["text-align"]="center");let u=e.multiLine;e.detectMultiLine&&!u&&t.scrollHeight>=parseInt(window.getComputedStyle(t)["font-size"],10)*2&&(u=!0),u||(i.style["white-space"]="nowrap"),r=e.minFontSize,h=e.maxFontSize;let s=r;for(;r<=h;)g=h+r>>1,t.style.fontSize=g+"px",t.scrollWidth<=a&&(e.widthOnly||t.scrollHeight<=n)?(s=g,r=g+1):h=g-1;if(t.style.fontSize!=s+"px"&&(t.style.fontSize=s+"px"),e.alignVert){pe();let p=t.scrollHeight;window.getComputedStyle(i).position==="static"&&(i.style.position="relative"),M(t,"textFitAlignVert")||(t.className=t.className+" textFitAlignVert"),t.style.height=p+"px",e.alignVertWithFlexbox&&!M(i,"textFitAlignVertFlex")&&(i.className=i.className+" textFitAlignVertFlex")}}function he(i){let e=window.getComputedStyle(i,null);return i.clientHeight-parseInt(e.getPropertyValue("padding-top"),10)-parseInt(e.getPropertyValue("padding-bottom"),10)}function me(i){let e=window.getComputedStyle(i,null);return i.clientWidth-parseInt(e.getPropertyValue("padding-left"),10)-parseInt(e.getPropertyValue("padding-right"),10)}function ge(i){return typeof HTMLElement=="object"?i instanceof HTMLElement:i&&typeof i=="object"&&i!==null&&i.nodeType===1&&typeof i.nodeName=="string"}function M(i,e){return(" "+i.className+" ").indexOf(" "+e+" ")>-1}function pe(){if(document.getElementById("textFitStyleSheet"))return;let i=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","display: flex;","justify-content: center;","flex-direction: column;","}",".textFitAlignVertFlex{","display: flex;","}",".textFitAlignVertFlex .textFitAlignVert{","position: static;","}"].join(""),e=document.createElement("style");e.type="text/css",e.id="textFitStyleSheet",e.innerHTML=i,document.body.appendChild(e)}function X(i,e,t){const n=i.slice();return n[12]=e[t],n[13]=e,n[14]=t,n}function Y(i,e,t){const n=i.slice();return n[15]=e[t],n[17]=t,n}function Z(i){let e,t,n;return t=new ce({}),{c(){e=v("div"),x(t.$$.fragment),this.h()},l(l){e=b(l,"DIV",{class:!0});var a=V(e);z(t.$$.fragment,a),a.forEach(d),this.h()},h(){y(e,"class","loading-spinner svelte-rel92n")},m(l,a){I(l,e,a),D(t,e,null),n=!0},i(l){n||(T(t.$$.fragment,l),n=!0)},o(l){O(t.$$.fragment,l),n=!1},d(l){l&&d(e),q(t)}}}function $(i){let e,t,n;return{c(){e=v("div"),t=v("div"),n=v("div"),this.h()},l(l){e=b(l,"DIV",{class:!0});var a=V(e);t=b(a,"DIV",{class:!0});var r=V(t);n=b(r,"DIV",{class:!0}),V(n).forEach(d),r.forEach(d),a.forEach(d),this.h()},h(){y(n,"class","push-tile svelte-rel92n"),y(t,"class","push svelte-rel92n"),B(t,"animate",i[3]),E(t,"margin-bottom",i[2]),y(e,"class","column svelte-rel92n"),B(e,"first",i[17]==0)},m(l,a){I(l,e,a),_(e,t),_(t,n)},p(l,a){a&8&&B(t,"animate",l[3]),a&4&&E(t,"margin-bottom",l[2])},d(l){l&&d(e)}}}function de(i){let e,t,n=i[12].caption+"",l,a,r,g,h,u=i[12].subcaption+"",s;return{c(){e=v("div"),t=v("h2"),l=P(n),a=S(),r=v("hr"),g=S(),h=v("h4"),s=P(u),this.h()},l(p){e=b(p,"DIV",{class:!0});var o=V(e);t=b(o,"H2",{class:!0});var c=V(t);l=J(c,n),c.forEach(d),a=H(o),r=b(o,"HR",{class:!0}),g=H(o),h=b(o,"H4",{class:!0});var f=V(h);s=J(f,u),f.forEach(d),o.forEach(d),this.h()},h(){y(t,"class","svelte-rel92n"),y(r,"class","svelte-rel92n"),y(h,"class","svelte-rel92n"),y(e,"class","text svelte-rel92n"),E(e,"background-color",i[12].colour)},m(p,o){I(p,e,o),_(e,t),_(t,l),_(e,a),_(e,r),_(e,g),_(e,h),_(h,s)},p(p,o){o&1&&n!==(n=p[12].caption+"")&&A(l,n),o&1&&u!==(u=p[12].subcaption+"")&&A(s,u),o&1&&E(e,"background-color",p[12].colour)},d(p){p&&d(e)}}}function _e(i){let e,t,n=i[12].caption+"",l;return{c(){e=v("div"),t=v("h2"),l=P(n),this.h()},l(a){e=b(a,"DIV",{class:!0});var r=V(e);t=b(r,"H2",{class:!0});var g=V(t);l=J(g,n),g.forEach(d),r.forEach(d),this.h()},h(){y(t,"class","svelte-rel92n"),y(e,"class","text svelte-rel92n"),E(e,"background-color",i[12].colour)},m(a,r){I(a,e,r),_(e,t),_(t,l)},p(a,r){r&1&&n!==(n=a[12].caption+"")&&A(l,n),r&1&&E(e,"background-color",a[12].colour)},d(a){a&&d(e)}}}function ye(i){let e,t,n,l,a,r,g=i[12].caption+"",h;return{c(){e=v("div"),t=v("img"),a=S(),r=v("div"),h=P(g),this.h()},l(u){e=b(u,"DIV",{class:!0});var s=V(e);t=b(s,"IMG",{src:!0,alt:!0,class:!0}),a=H(s),r=b(s,"DIV",{class:!0});var p=V(r);h=J(p,g),p.forEach(d),s.forEach(d),this.h()},h(){K(t.src,n=i[12].image)||y(t,"src",n),y(t,"alt",l=i[12].caption),y(t,"class","svelte-rel92n"),y(r,"class","textfit svelte-rel92n"),y(e,"class","image-holder svelte-rel92n")},m(u,s){I(u,e,s),_(e,t),_(e,a),_(e,r),_(r,h)},p(u,s){s&1&&!K(t.src,n=u[12].image)&&y(t,"src",n),s&1&&l!==(l=u[12].caption)&&y(t,"alt",l),s&1&&g!==(g=u[12].caption+"")&&A(h,g)},d(u){u&&d(e)}}}function ve(i){let e;function t(a,r){if(a[12].type==="image")return ye;if(a[12].type==="text")return _e;if(a[12].type==="link")return de}let n=t(i),l=n&&n(i);return{c(){l&&l.c(),e=U()},l(a){l&&l.l(a),e=U()},m(a,r){l&&l.m(a,r),I(a,e,r)},p(a,r){n===(n=t(a))&&l?l.p(a,r):(l&&l.d(1),l=n&&n(a),l&&(l.c(),l.m(e.parentNode,e)))},d(a){l&&l.d(a),a&&d(e)}}}function ee(i){let e,t,n,l=i[13],a=i[14],r;t=new oe({props:{href:i[12].link?i[12].link:null,$$slots:{default:[ve]},$$scope:{ctx:i}}});const g=()=>i[8](e,l,a),h=()=>i[8](null,l,a);return{c(){e=v("div"),x(t.$$.fragment),n=S(),this.h()},l(u){e=b(u,"DIV",{class:!0});var s=V(e);z(t.$$.fragment,s),n=H(s),s.forEach(d),this.h()},h(){y(e,"class","tile svelte-rel92n"),B(e,"animate",i[3]),E(e,"margin-bottom",i[2])},m(u,s){I(u,e,s),D(t,e,null),_(e,n),g(),r=!0},p(u,s){i=u;const p={};s&1&&(p.href=i[12].link?i[12].link:null),s&262145&&(p.$$scope={dirty:s,ctx:i}),t.$set(p),(l!==i[13]||a!==i[14])&&(h(),l=i[13],a=i[14],g()),(!r||s&8)&&B(e,"animate",i[3]),s&4&&E(e,"margin-bottom",i[2])},i(u){r||(T(t.$$.fragment,u),r=!0)},o(u){O(t.$$.fragment,u),r=!1},d(u){u&&d(e),q(t),h()}}}function be(i){let e,t,n,l,a,r=i[4]&&Z(),g={length:i[1]},h=[];for(let o=0;o<g.length;o+=1)h[o]=$(Y(i,g,o));let u=i[0],s=[];for(let o=0;o<u.length;o+=1)s[o]=ee(X(i,u,o));const p=o=>O(s[o],1,1,()=>{s[o]=null});return{c(){r&&r.c(),e=S(),t=v("div");for(let o=0;o<h.length;o+=1)h[o].c();n=S(),l=v("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){r&&r.l(o),e=H(o),t=b(o,"DIV",{class:!0});var c=V(t);for(let m=0;m<h.length;m+=1)h[m].l(c);n=H(c),l=b(c,"DIV",{class:!0});var f=V(l);for(let m=0;m<s.length;m+=1)s[m].l(f);f.forEach(d),c.forEach(d),this.h()},h(){y(l,"class","scratch svelte-rel92n"),y(t,"class","gallery svelte-rel92n"),E(t,"gap",i[2])},m(o,c){r&&r.m(o,c),I(o,e,c),I(o,t,c);for(let f=0;f<h.length;f+=1)h[f].m(t,null);_(t,n),_(t,l);for(let f=0;f<s.length;f+=1)s[f].m(l,null);i[9](l),i[10](t),a=!0},p(o,[c]){if(o[4]?r?c&16&&T(r,1):(r=Z(),r.c(),T(r,1),r.m(e.parentNode,e)):r&&(j(),O(r,1,1,()=>{r=null}),W()),c&14){g={length:o[1]};let f;for(f=0;f<g.length;f+=1){const m=Y(o,g,f);h[f]?h[f].p(m,c):(h[f]=$(m),h[f].c(),h[f].m(t,n))}for(;f<h.length;f+=1)h[f].d(1);h.length=g.length}if(c&13){u=o[0];let f;for(f=0;f<u.length;f+=1){const m=X(o,u,f);s[f]?(s[f].p(m,c),T(s[f],1)):(s[f]=ee(m),s[f].c(),T(s[f],1),s[f].m(l,null))}for(j(),f=u.length;f<s.length;f+=1)p(f);W()}c&4&&E(t,"gap",o[2])},i(o){if(!a){T(r);for(let c=0;c<u.length;c+=1)T(s[c]);a=!0}},o(o){O(r),s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)O(s[c]);a=!1},d(o){r&&r.d(o),o&&d(e),o&&d(t),R(h,o),R(s,o),i[9](null),i[10](null)}}}function N(i,e){return Array.from(i.querySelectorAll(e))}function Ve(i,e){let t=0,n=N(i,e);if(n.length>0){let l=parseInt(window.getComputedStyle(n[0]).getPropertyValue("margin-bottom"));n.forEach(a=>{t+=a.offsetHeight+l})}return t}function ke(i){i.map(e=>{let t=e.querySelector(".push");e.appendChild(t)}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{let e=i.map(n=>{let l=Array.from(n.querySelectorAll(".tile")).pop(),a=n.querySelector(".push"),r=Math.round(l.getBoundingClientRect().bottom),g=parseInt(window.getComputedStyle(a).getPropertyValue("margin-bottom"));return{push:a,margin:g,height:r}}),t=Math.max(...e.map(n=>n.height));e.forEach(n=>{n.height=Math.abs(n.height-t),n.height<n.margin?n.height=0:n.height=n.height-n.margin,n.push.style.height=`${n.height}px`})})})}function Fe(i,e,t){let{columns:n=3}=e,{tiles:l=[]}=e,{gap:a="1rem"}=e,{animate:r=!1}=e,{animation:g="float-up 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}=e,h=!0,u,s;function p(){if(!u)return;let m=N(u,".column").filter(k=>k.offsetParent!==null);l.forEach(k=>{s.appendChild(k.handle)}),l.forEach(k=>{let w=m.map(ne=>Ve(ne,".tile"));const G=Math.min(...w),C=w.indexOf(G);m[C].appendChild(k.handle)}),ke(m),requestAnimationFrame(()=>{fe(u.getElementsByClassName("textfit"),{multiline:!0})})}ae(()=>{window.addEventListener("resize",p),r&&N(u,".animate").forEach(w=>{let G=new IntersectionObserver(C=>{if(C[0].isIntersecting){w.style.visibility="visible",w.style.animation=g,G.unobserve(w);return}});G.observe(w)});const m=setInterval(()=>{l.filter(G=>G.type==="image").map(G=>G.handle.querySelector("img").complete).every(G=>G===!0)&&(clearInterval(m),p(),t(4,h=!1))},50)});function o(m,k,w){L[m?"unshift":"push"](()=>{k[w].handle=m,t(0,l)})}function c(m){L[m?"unshift":"push"](()=>{s=m,t(6,s)})}function f(m){L[m?"unshift":"push"](()=>{u=m,t(5,u)})}return i.$$set=m=>{"columns"in m&&t(1,n=m.columns),"tiles"in m&&t(0,l=m.tiles),"gap"in m&&t(2,a=m.gap),"animate"in m&&t(3,r=m.animate),"animation"in m&&t(7,g=m.animation)},p(),[l,n,a,r,h,u,s,g,o,c,f]}class Ie extends te{constructor(e){super(),ie(this,e,Fe,be,le,{columns:1,tiles:0,gap:2,animate:3,animation:7})}}function we(i){let e,t,n,l,a,r,g,h,u,s,p,o;return p=new Ie({props:{tiles:[...i[0]]}}),{c(){e=S(),t=v("h1"),n=P("Gallery"),l=S(),a=v("p"),r=P("This is the "),g=v("code"),h=P("Gallery"),u=P(" widget:"),s=S(),x(p.$$.fragment),this.h()},l(c){re("svelte-o2qzrr",document.head).forEach(d),e=H(c),t=b(c,"H1",{});var m=V(t);n=J(m,"Gallery"),m.forEach(d),l=H(c),a=b(c,"P",{});var k=V(a);r=J(k,"This is the "),g=b(k,"CODE",{});var w=V(g);h=J(w,"Gallery"),w.forEach(d),u=J(k," widget:"),k.forEach(d),s=H(c),z(p.$$.fragment,c),this.h()},h(){document.title="Demo - Gallery"},m(c,f){I(c,e,f),I(c,t,f),_(t,n),I(c,l,f),I(c,a,f),_(a,r),_(a,g),_(g,h),_(a,u),I(c,s,f),D(p,c,f),o=!0},p:se,i(c){o||(T(p.$$.fragment,c),o=!0)},o(c){O(p.$$.fragment,c),o=!1},d(c){c&&d(e),c&&d(t),c&&d(l),c&&d(a),c&&d(s),q(p,c)}}}const F="https://cdn.bojit.org/img";function Ge(i){return[[{type:"image",caption:"Neck Carving Through Carbon Fibre",image:F+"/posts/BOJIT_V3-Gallery_1.JPG"},{type:"image",caption:"Binding Glue-Up",image:F+"/posts/BOJIT_V3-Gallery_2.JPG"},{type:"image",caption:"Fretboard Pinning",image:F+"/posts/BOJIT_V3-Gallery_3.JPG"},{type:"image",caption:"Hardware Fitting",image:F+"/posts/BOJIT_V3-Gallery_4.JPG"},{type:"image",caption:"Neck Blank Levelling",image:F+"/posts/BOJIT_V3-Gallery_5.JPG"},{type:"image",caption:'F-Hole "Thinning"',image:F+"/posts/BOJIT_V3-Gallery_6.JPG"},{type:"image",caption:"Old-Fashioned Resawing!",image:F+"/posts/BOJIT_V3-Gallery_7.JPG"},{type:"image",caption:"Bookmatched Top",image:F+"/posts/BOJIT_V3-Gallery_8.JPG"},{type:"image",caption:"Neck Pocket Routing",image:F+"/posts/BOJIT_V3-Gallery_9.JPG"},{type:"image",caption:"Setting Neck Joint",image:F+"/posts/BOJIT_V3-Gallery_10.JPG"},{type:"image",caption:"My Workshop!",image:F+"/posts/BOJIT_V3-Gallery_11.JPG"},{type:"image",caption:"Finished Build",image:F+"/posts/BOJIT_V3-Gallery_12.JPG"},{type:"image",caption:"Headstock Design",image:F+"/posts/BOJIT_V3-Gallery_13.JPG"},{type:"image",caption:"Back of Headstock",image:F+"/posts/BOJIT_V3-Gallery_14.JPG"}]]}class Me extends te{constructor(e){super(),ie(this,e,Ge,we,le,{})}}export{Me as default};
