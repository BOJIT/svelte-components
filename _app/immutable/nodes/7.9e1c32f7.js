import{S as te,i as ie,s as le,a as S,k as v,c as P,l as b,m as w,h as p,n as y,p as E,b as F,E as _,g as T,v as q,d as O,f as W,R,o as ae,y as N,z as x,A as z,B as D,Q as j,w as C,e as Q,q as H,r as J,u as B,T as U,Z as re,F as se}from"../chunks/index.33cc678e.js";/* empty css                                                  */import"../chunks/ThemeSelector.svelte_svelte_type_style_lang.186b0848.js";import"../chunks/Button.svelte_svelte_type_style_lang.662bcbc4.js";import{L as oe}from"../chunks/Link.5b420f68.js";import{P as ce}from"../chunks/ProgressCircular.d96f8384.js";import"../chunks/Notifications.4fd1e524.js";/* empty css                                                      *//* empty css                                                     *//* empty css                                                         */import"../chunks/simplebar.f3f50ae1.js";/* empty css                                                        *//* empty css                                                      *//* empty css                                                   */import"../chunks/App.svelte_svelte_type_style_lang.63d4c16e.js";import"../chunks/prism.37b4e59c.js";/* empty css                                                      */const Z={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:20,maxFontSize:500,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!0};function fe(i,e){e||(e={});let t={};for(let l in Z)e.hasOwnProperty(l)?t[l]=e[l]:t[l]=Z[l];let n=Object.prototype.toString.call(i);n!=="[object Array]"&&n!=="[object NodeList]"&&n!=="[object HTMLCollection]"&&(i=[i]);for(let l=0;l<i.length;l++)ue(i[l],t)}function ue(i,e){if(!ge(i)||!e.reProcess&&i.getAttribute("textFitted"))return!1;e.reProcess||i.setAttribute("textFitted",1);let t,n,l,a,r,g,h;if(l=i.innerHTML,a=me(i),n=he(i),!a||!e.widthOnly&&!n)throw e.widthOnly?new Error("Set a static width on the target element "+i.outerHTML+" before using textFit!"):new Error("Set a static height and width on the target element "+i.outerHTML+" before using textFit!");l.indexOf("textFitted")===-1?(t=document.createElement("span"),t.className="textFitted",t.style.display="inline-block",t.innerHTML=l,i.innerHTML="",i.appendChild(t)):(t=i.querySelector("span.textFitted"),L(t,"textFitAlignVert")&&(t.className=t.className.replace("textFitAlignVert",""),t.style.height="",i.className.replace("textFitAlignVertFlex",""))),e.alignHoriz&&(i.style["text-align"]="center",t.style["text-align"]="center");let u=e.multiLine;e.detectMultiLine&&!u&&t.scrollHeight>=parseInt(window.getComputedStyle(t)["font-size"],10)*2&&(u=!0),u||(i.style["white-space"]="nowrap"),r=e.minFontSize,h=e.maxFontSize;let s=r;for(;r<=h;)g=h+r>>1,t.style.fontSize=g+"px",t.scrollWidth<=a&&(e.widthOnly||t.scrollHeight<=n)?(s=g,r=g+1):h=g-1;if(t.style.fontSize!=s+"px"&&(t.style.fontSize=s+"px"),e.alignVert){de();let d=t.scrollHeight;window.getComputedStyle(i).position==="static"&&(i.style.position="relative"),L(t,"textFitAlignVert")||(t.className=t.className+" textFitAlignVert"),t.style.height=d+"px",e.alignVertWithFlexbox&&!L(i,"textFitAlignVertFlex")&&(i.className=i.className+" textFitAlignVertFlex")}}function he(i){let e=window.getComputedStyle(i,null);return i.clientHeight-parseInt(e.getPropertyValue("padding-top"),10)-parseInt(e.getPropertyValue("padding-bottom"),10)}function me(i){let e=window.getComputedStyle(i,null);return i.clientWidth-parseInt(e.getPropertyValue("padding-left"),10)-parseInt(e.getPropertyValue("padding-right"),10)}function ge(i){return typeof HTMLElement=="object"?i instanceof HTMLElement:i&&typeof i=="object"&&i!==null&&i.nodeType===1&&typeof i.nodeName=="string"}function L(i,e){return(" "+i.className+" ").indexOf(" "+e+" ")>-1}function de(){if(document.getElementById("textFitStyleSheet"))return;let i=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","display: flex;","justify-content: center;","flex-direction: column;","}",".textFitAlignVertFlex{","display: flex;","}",".textFitAlignVertFlex .textFitAlignVert{","position: static;","}"].join(""),e=document.createElement("style");e.type="text/css",e.id="textFitStyleSheet",e.innerHTML=i,document.body.appendChild(e)}function K(i,e,t){const n=i.slice();return n[12]=e[t],n[13]=e,n[14]=t,n}function X(i,e,t){const n=i.slice();return n[15]=e[t],n[17]=t,n}function Y(i){let e,t,n;return t=new ce({}),{c(){e=v("div"),N(t.$$.fragment),this.h()},l(l){e=b(l,"DIV",{class:!0});var a=w(e);x(t.$$.fragment,a),a.forEach(p),this.h()},h(){y(e,"class","loading-spinner svelte-1wdej41")},m(l,a){F(l,e,a),z(t,e,null),n=!0},i(l){n||(T(t.$$.fragment,l),n=!0)},o(l){O(t.$$.fragment,l),n=!1},d(l){l&&p(e),D(t)}}}function $(i){let e,t,n;return{c(){e=v("div"),t=v("div"),n=v("div"),this.h()},l(l){e=b(l,"DIV",{class:!0});var a=w(e);t=b(a,"DIV",{class:!0});var r=w(t);n=b(r,"DIV",{class:!0}),w(n).forEach(p),r.forEach(p),a.forEach(p),this.h()},h(){y(n,"class","push-tile svelte-1wdej41"),y(t,"class","push svelte-1wdej41"),j(t,"animate",i[3]),E(t,"margin-bottom",i[2]),y(e,"class","column svelte-1wdej41"),j(e,"first",i[17]==0)},m(l,a){F(l,e,a),_(e,t),_(t,n)},p(l,a){a&8&&j(t,"animate",l[3]),a&4&&E(t,"margin-bottom",l[2])},d(l){l&&p(e)}}}function pe(i){let e,t,n=i[12].caption+"",l,a,r,g,h,u=i[12].subcaption+"",s;return{c(){e=v("div"),t=v("h2"),l=H(n),a=S(),r=v("hr"),g=S(),h=v("h4"),s=H(u),this.h()},l(d){e=b(d,"DIV",{class:!0});var o=w(e);t=b(o,"H2",{class:!0});var f=w(t);l=J(f,n),f.forEach(p),a=P(o),r=b(o,"HR",{class:!0}),g=P(o),h=b(o,"H4",{class:!0});var c=w(h);s=J(c,u),c.forEach(p),o.forEach(p),this.h()},h(){y(t,"class","svelte-1wdej41"),y(r,"class","svelte-1wdej41"),y(h,"class","svelte-1wdej41"),y(e,"class","text svelte-1wdej41"),E(e,"background-color",i[12].colour)},m(d,o){F(d,e,o),_(e,t),_(t,l),_(e,a),_(e,r),_(e,g),_(e,h),_(h,s)},p(d,o){o&1&&n!==(n=d[12].caption+"")&&B(l,n),o&1&&u!==(u=d[12].subcaption+"")&&B(s,u),o&1&&E(e,"background-color",d[12].colour)},d(d){d&&p(e)}}}function _e(i){let e,t,n=i[12].caption+"",l;return{c(){e=v("div"),t=v("h2"),l=H(n),this.h()},l(a){e=b(a,"DIV",{class:!0});var r=w(e);t=b(r,"H2",{class:!0});var g=w(t);l=J(g,n),g.forEach(p),r.forEach(p),this.h()},h(){y(t,"class","svelte-1wdej41"),y(e,"class","text svelte-1wdej41"),E(e,"background-color",i[12].colour)},m(a,r){F(a,e,r),_(e,t),_(t,l)},p(a,r){r&1&&n!==(n=a[12].caption+"")&&B(l,n),r&1&&E(e,"background-color",a[12].colour)},d(a){a&&p(e)}}}function ye(i){let e,t,n,l,a,r,g=i[12].caption+"",h;return{c(){e=v("div"),t=v("img"),a=S(),r=v("div"),h=H(g),this.h()},l(u){e=b(u,"DIV",{class:!0});var s=w(e);t=b(s,"IMG",{src:!0,alt:!0,class:!0}),a=P(s),r=b(s,"DIV",{class:!0});var d=w(r);h=J(d,g),d.forEach(p),s.forEach(p),this.h()},h(){U(t.src,n=i[12].image)||y(t,"src",n),y(t,"alt",l=i[12].caption),y(t,"class","svelte-1wdej41"),y(r,"class","textfit svelte-1wdej41"),y(e,"class","image-holder svelte-1wdej41")},m(u,s){F(u,e,s),_(e,t),_(e,a),_(e,r),_(r,h)},p(u,s){s&1&&!U(t.src,n=u[12].image)&&y(t,"src",n),s&1&&l!==(l=u[12].caption)&&y(t,"alt",l),s&1&&g!==(g=u[12].caption+"")&&B(h,g)},d(u){u&&p(e)}}}function ve(i){let e;function t(a,r){if(a[12].type==="image")return ye;if(a[12].type==="text")return _e;if(a[12].type==="link")return pe}let n=t(i),l=n&&n(i);return{c(){l&&l.c(),e=Q()},l(a){l&&l.l(a),e=Q()},m(a,r){l&&l.m(a,r),F(a,e,r)},p(a,r){n===(n=t(a))&&l?l.p(a,r):(l&&l.d(1),l=n&&n(a),l&&(l.c(),l.m(e.parentNode,e)))},d(a){l&&l.d(a),a&&p(e)}}}function ee(i){let e,t,n,l=i[13],a=i[14],r;t=new oe({props:{href:i[12].link?i[12].link:null,$$slots:{default:[ve]},$$scope:{ctx:i}}});const g=()=>i[8](e,l,a),h=()=>i[8](null,l,a);return{c(){e=v("div"),N(t.$$.fragment),n=S(),this.h()},l(u){e=b(u,"DIV",{class:!0});var s=w(e);x(t.$$.fragment,s),n=P(s),s.forEach(p),this.h()},h(){y(e,"class","tile svelte-1wdej41"),j(e,"animate",i[3]),E(e,"margin-bottom",i[2])},m(u,s){F(u,e,s),z(t,e,null),_(e,n),g(),r=!0},p(u,s){i=u;const d={};s&1&&(d.href=i[12].link?i[12].link:null),s&262145&&(d.$$scope={dirty:s,ctx:i}),t.$set(d),(l!==i[13]||a!==i[14])&&(h(),l=i[13],a=i[14],g()),(!r||s&8)&&j(e,"animate",i[3]),s&4&&E(e,"margin-bottom",i[2])},i(u){r||(T(t.$$.fragment,u),r=!0)},o(u){O(t.$$.fragment,u),r=!1},d(u){u&&p(e),D(t),h()}}}function be(i){let e,t,n,l,a,r=i[4]&&Y(),g={length:i[1]},h=[];for(let o=0;o<g.length;o+=1)h[o]=$(X(i,g,o));let u=i[0],s=[];for(let o=0;o<u.length;o+=1)s[o]=ee(K(i,u,o));const d=o=>O(s[o],1,1,()=>{s[o]=null});return{c(){r&&r.c(),e=S(),t=v("div");for(let o=0;o<h.length;o+=1)h[o].c();n=S(),l=v("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){r&&r.l(o),e=P(o),t=b(o,"DIV",{class:!0});var f=w(t);for(let m=0;m<h.length;m+=1)h[m].l(f);n=P(f),l=b(f,"DIV",{class:!0});var c=w(l);for(let m=0;m<s.length;m+=1)s[m].l(c);c.forEach(p),f.forEach(p),this.h()},h(){y(l,"class","scratch svelte-1wdej41"),y(t,"class","gallery svelte-1wdej41"),E(t,"gap",i[2])},m(o,f){r&&r.m(o,f),F(o,e,f),F(o,t,f);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(t,null);_(t,n),_(t,l);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(l,null);i[9](l),i[10](t),a=!0},p(o,[f]){if(o[4]?r?f&16&&T(r,1):(r=Y(),r.c(),T(r,1),r.m(e.parentNode,e)):r&&(q(),O(r,1,1,()=>{r=null}),W()),f&14){g={length:o[1]};let c;for(c=0;c<g.length;c+=1){const m=X(o,g,c);h[c]?h[c].p(m,f):(h[c]=$(m),h[c].c(),h[c].m(t,n))}for(;c<h.length;c+=1)h[c].d(1);h.length=g.length}if(f&13){u=o[0];let c;for(c=0;c<u.length;c+=1){const m=K(o,u,c);s[c]?(s[c].p(m,f),T(s[c],1)):(s[c]=ee(m),s[c].c(),T(s[c],1),s[c].m(l,null))}for(q(),c=u.length;c<s.length;c+=1)d(c);W()}f&4&&E(t,"gap",o[2])},i(o){if(!a){T(r);for(let f=0;f<u.length;f+=1)T(s[f]);a=!0}},o(o){O(r),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)O(s[f]);a=!1},d(o){r&&r.d(o),o&&p(e),o&&p(t),R(h,o),R(s,o),i[9](null),i[10](null)}}}function M(i,e){return Array.from(i.querySelectorAll(e))}function we(i,e){let t=0,n=M(i,e);if(n.length>0){let l=parseInt(window.getComputedStyle(n[0]).getPropertyValue("margin-bottom"));n.forEach(a=>{t+=a.offsetHeight+l})}return t}function Ve(i){i.map(e=>{let t=e.querySelector(".push");e.appendChild(t)}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{let e=i.map(n=>{let l=Array.from(n.querySelectorAll(".tile")).pop(),a=n.querySelector(".push"),r=Math.round(l.getBoundingClientRect().bottom),g=parseInt(window.getComputedStyle(a).getPropertyValue("margin-bottom"));return{push:a,margin:g,height:r}}),t=Math.max(...e.map(n=>n.height));e.forEach(n=>{n.height=Math.abs(n.height-t),n.height<n.margin?n.height=0:n.height=n.height-n.margin,n.push.style.height=`${n.height}px`})})})}function ke(i,e,t){let{columns:n=3}=e,{tiles:l=[]}=e,{gap:a="1rem"}=e,{animate:r=!1}=e,{animation:g="float-up 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}=e,h=!0,u,s;function d(){if(!u)return;let m=M(u,".column").filter(V=>V.offsetParent!==null);l.forEach(V=>{s.appendChild(V.handle)}),l.forEach(V=>{let I=m.map(ne=>we(ne,".tile"));const G=Math.min(...I),A=I.indexOf(G);m[A].appendChild(V.handle)}),Ve(m),requestAnimationFrame(()=>{fe(u.getElementsByClassName("textfit"),{multiline:!0})})}ae(()=>{window.addEventListener("resize",d),r&&M(u,".animate").forEach(I=>{let G=new IntersectionObserver(A=>{if(A[0].isIntersecting){I.style.visibility="visible",I.style.animation=g,G.unobserve(I);return}});G.observe(I)});const m=setInterval(()=>{l.filter(G=>G.type==="image").map(G=>G.handle.querySelector("img").complete).every(G=>G===!0)&&(clearInterval(m),d(),t(4,h=!1))},50)});function o(m,V,I){C[m?"unshift":"push"](()=>{V[I].handle=m,t(0,l)})}function f(m){C[m?"unshift":"push"](()=>{s=m,t(6,s)})}function c(m){C[m?"unshift":"push"](()=>{u=m,t(5,u)})}return i.$$set=m=>{"columns"in m&&t(1,n=m.columns),"tiles"in m&&t(0,l=m.tiles),"gap"in m&&t(2,a=m.gap),"animate"in m&&t(3,r=m.animate),"animation"in m&&t(7,g=m.animation)},d(),[l,n,a,r,h,u,s,g,o,f,c]}class Fe extends te{constructor(e){super(),ie(this,e,ke,be,le,{columns:1,tiles:0,gap:2,animate:3,animation:7})}}function Ie(i){let e,t,n,l,a,r,g,h,u,s,d,o;return d=new Fe({props:{tiles:[...i[0]]}}),{c(){e=S(),t=v("h1"),n=H("Gallery"),l=S(),a=v("p"),r=H("This is the "),g=v("code"),h=H("Gallery"),u=H(" widget:"),s=S(),N(d.$$.fragment),this.h()},l(f){re("svelte-o2qzrr",document.head).forEach(p),e=P(f),t=b(f,"H1",{});var m=w(t);n=J(m,"Gallery"),m.forEach(p),l=P(f),a=b(f,"P",{});var V=w(a);r=J(V,"This is the "),g=b(V,"CODE",{});var I=w(g);h=J(I,"Gallery"),I.forEach(p),u=J(V," widget:"),V.forEach(p),s=P(f),x(d.$$.fragment,f),this.h()},h(){document.title="Demo - Gallery"},m(f,c){F(f,e,c),F(f,t,c),_(t,n),F(f,l,c),F(f,a,c),_(a,r),_(a,g),_(g,h),_(a,u),F(f,s,c),z(d,f,c),o=!0},p:se,i(f){o||(T(d.$$.fragment,f),o=!0)},o(f){O(d.$$.fragment,f),o=!1},d(f){f&&p(e),f&&p(t),f&&p(l),f&&p(a),f&&p(s),D(d,f)}}}const k="https://cdn.bojit.org/img";function Ge(i){return[[{type:"image",caption:"Neck Carving Through Carbon Fibre",image:k+"/posts/BOJIT_V3-Gallery_1.JPG"},{type:"image",caption:"Binding Glue-Up",image:k+"/posts/BOJIT_V3-Gallery_2.JPG"},{type:"image",caption:"Fretboard Pinning",image:k+"/posts/BOJIT_V3-Gallery_3.JPG"},{type:"image",caption:"Hardware Fitting",image:k+"/posts/BOJIT_V3-Gallery_4.JPG"},{type:"image",caption:"Neck Blank Levelling",image:k+"/posts/BOJIT_V3-Gallery_5.JPG"},{type:"image",caption:'F-Hole "Thinning"',image:k+"/posts/BOJIT_V3-Gallery_6.JPG"},{type:"image",caption:"Old-Fashioned Resawing!",image:k+"/posts/BOJIT_V3-Gallery_7.JPG"},{type:"image",caption:"Bookmatched Top",image:k+"/posts/BOJIT_V3-Gallery_8.JPG"},{type:"image",caption:"Neck Pocket Routing",image:k+"/posts/BOJIT_V3-Gallery_9.JPG"},{type:"image",caption:"Setting Neck Joint",image:k+"/posts/BOJIT_V3-Gallery_10.JPG"},{type:"image",caption:"My Workshop!",image:k+"/posts/BOJIT_V3-Gallery_11.JPG"},{type:"image",caption:"Finished Build",image:k+"/posts/BOJIT_V3-Gallery_12.JPG"},{type:"image",caption:"Headstock Design",image:k+"/posts/BOJIT_V3-Gallery_13.JPG"},{type:"image",caption:"Back of Headstock",image:k+"/posts/BOJIT_V3-Gallery_14.JPG"}]]}class qe extends te{constructor(e){super(),ie(this,e,Ge,Ie,le,{})}}export{qe as component};
