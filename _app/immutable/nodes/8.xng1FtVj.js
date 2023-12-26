import{s as le,a as S,f as v,c as P,g as b,h as k,d as p,j as _,k as T,i as V,u as y,G as R,o as se,J as x,F as E,p as M,e as U,l as C,m as O,n as B,H as K,N as oe,v as ce}from"../chunks/scheduler.FdWkyacO.js";import{S as ne,i as ae,a as G,g as Q,t as J,c as X,b as z,d as D,m as q,e as W}from"../chunks/index.7yMu5dm2.js";/* empty css                                                  */import"../chunks/ThemeSelector.svelte_svelte_type_style_lang.XNi7U43x.js";import{e as j}from"../chunks/Button.svelte_svelte_type_style_lang.5uonD8t2.js";import"../chunks/prism.E7XjHMYj.js";/* empty css                                                      */import{L as ue}from"../chunks/Link.7_au7iwF.js";import{P as fe}from"../chunks/ProgressCircular.SWKcxY6C.js";import"../chunks/Notifications.s3Intbze.js";/* empty css                                                      *//* empty css                                                     */import"../chunks/simplebar.OdDKkZHp.js";/* empty css                                                         *//* empty css                                                        *//* empty css                                                      *//* empty css                                                   */import"../chunks/App.svelte_svelte_type_style_lang.LPBWuiGi.js";const Y={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:20,maxFontSize:500,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!0};function he(i,e){e||(e={});let t={};for(let l in Y)e.hasOwnProperty(l)?t[l]=e[l]:t[l]=Y[l];let n=Object.prototype.toString.call(i);n!=="[object Array]"&&n!=="[object NodeList]"&&n!=="[object HTMLCollection]"&&(i=[i]);for(let l=0;l<i.length;l++)me(i[l],t)}function me(i,e){if(!pe(i)||!e.reProcess&&i.getAttribute("textFitted"))return!1;e.reProcess||i.setAttribute("textFitted",1);let t,n,l,r,s,h,u;if(l=i.innerHTML,r=de(i),n=ge(i),!r||!e.widthOnly&&!n)throw e.widthOnly?new Error("Set a static width on the target element "+i.outerHTML+" before using textFit!"):new Error("Set a static height and width on the target element "+i.outerHTML+" before using textFit!");l.indexOf("textFitted")===-1?(t=document.createElement("span"),t.className="textFitted",t.style.display="inline-block",t.innerHTML=l,i.innerHTML="",i.appendChild(t)):(t=i.querySelector("span.textFitted"),A(t,"textFitAlignVert")&&(t.className=t.className.replace("textFitAlignVert",""),t.style.height="",i.className.replace("textFitAlignVertFlex",""))),e.alignHoriz&&(i.style["text-align"]="center",t.style["text-align"]="center");let c=e.multiLine;e.detectMultiLine&&!c&&t.scrollHeight>=parseInt(window.getComputedStyle(t)["font-size"],10)*2&&(c=!0),c||(i.style["white-space"]="nowrap"),s=e.minFontSize,u=e.maxFontSize;let a=s;for(;s<=u;)h=u+s>>1,t.style.fontSize=h+"px",t.scrollWidth<=r&&(e.widthOnly||t.scrollHeight<=n)?(a=h,s=h+1):u=h-1;if(t.style.fontSize!=a+"px"&&(t.style.fontSize=a+"px"),e.alignVert){_e();let g=t.scrollHeight;window.getComputedStyle(i).position==="static"&&(i.style.position="relative"),A(t,"textFitAlignVert")||(t.className=t.className+" textFitAlignVert"),t.style.height=g+"px",e.alignVertWithFlexbox&&!A(i,"textFitAlignVertFlex")&&(i.className=i.className+" textFitAlignVertFlex")}}function ge(i){let e=window.getComputedStyle(i,null);return i.clientHeight-parseInt(e.getPropertyValue("padding-top"),10)-parseInt(e.getPropertyValue("padding-bottom"),10)}function de(i){let e=window.getComputedStyle(i,null);return i.clientWidth-parseInt(e.getPropertyValue("padding-left"),10)-parseInt(e.getPropertyValue("padding-right"),10)}function pe(i){return typeof HTMLElement=="object"?i instanceof HTMLElement:i&&typeof i=="object"&&i!==null&&i.nodeType===1&&typeof i.nodeName=="string"}function A(i,e){return(" "+i.className+" ").indexOf(" "+e+" ")>-1}function _e(){if(document.getElementById("textFitStyleSheet"))return;let i=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","display: flex;","justify-content: center;","flex-direction: column;","}",".textFitAlignVertFlex{","display: flex;","}",".textFitAlignVertFlex .textFitAlignVert{","position: static;","}"].join(""),e=document.createElement("style");e.type="text/css",e.id="textFitStyleSheet",e.innerHTML=i,document.body.appendChild(e)}function Z(i,e,t){const n=i.slice();return n[12]=e[t],n[13]=e,n[14]=t,n}function $(i,e,t){const n=i.slice();return n[15]=e[t],n[17]=t,n}function ee(i){let e,t,n;return t=new fe({}),{c(){e=v("div"),z(t.$$.fragment),this.h()},l(l){e=b(l,"DIV",{class:!0});var r=k(e);D(t.$$.fragment,r),r.forEach(p),this.h()},h(){_(e,"class","loading-spinner svelte-1wdej41")},m(l,r){V(l,e,r),q(t,e,null),n=!0},i(l){n||(G(t.$$.fragment,l),n=!0)},o(l){J(t.$$.fragment,l),n=!1},d(l){l&&p(e),W(t)}}}function te(i){let e,t,n='<div class="push-tile svelte-1wdej41"></div>';return{c(){e=v("div"),t=v("div"),t.innerHTML=n,this.h()},l(l){e=b(l,"DIV",{class:!0});var r=k(e);t=b(r,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-anr5hd"&&(t.innerHTML=n),r.forEach(p),this.h()},h(){_(t,"class","push svelte-1wdej41"),E(t,"animate",i[3]),T(t,"margin-bottom",i[2]),_(e,"class","column svelte-1wdej41"),E(e,"first",i[17]==0)},m(l,r){V(l,e,r),y(e,t)},p(l,r){r&8&&E(t,"animate",l[3]),r&4&&T(t,"margin-bottom",l[2])},d(l){l&&p(e)}}}function ye(i){let e,t,n=i[12].caption+"",l,r,s,h,u,c=i[12].subcaption+"",a;return{c(){e=v("div"),t=v("h2"),l=C(n),r=S(),s=v("hr"),h=S(),u=v("h4"),a=C(c),this.h()},l(g){e=b(g,"DIV",{class:!0});var o=k(e);t=b(o,"H2",{class:!0});var d=k(t);l=O(d,n),d.forEach(p),r=P(o),s=b(o,"HR",{class:!0}),h=P(o),u=b(o,"H4",{class:!0});var f=k(u);a=O(f,c),f.forEach(p),o.forEach(p),this.h()},h(){_(t,"class","svelte-1wdej41"),_(s,"class","svelte-1wdej41"),_(u,"class","svelte-1wdej41"),_(e,"class","text svelte-1wdej41"),T(e,"background-color",i[12].colour)},m(g,o){V(g,e,o),y(e,t),y(t,l),y(e,r),y(e,s),y(e,h),y(e,u),y(u,a)},p(g,o){o&1&&n!==(n=g[12].caption+"")&&B(l,n),o&1&&c!==(c=g[12].subcaption+"")&&B(a,c),o&1&&T(e,"background-color",g[12].colour)},d(g){g&&p(e)}}}function ve(i){let e,t,n=i[12].caption+"",l;return{c(){e=v("div"),t=v("h2"),l=C(n),this.h()},l(r){e=b(r,"DIV",{class:!0});var s=k(e);t=b(s,"H2",{class:!0});var h=k(t);l=O(h,n),h.forEach(p),s.forEach(p),this.h()},h(){_(t,"class","svelte-1wdej41"),_(e,"class","text svelte-1wdej41"),T(e,"background-color",i[12].colour)},m(r,s){V(r,e,s),y(e,t),y(t,l)},p(r,s){s&1&&n!==(n=r[12].caption+"")&&B(l,n),s&1&&T(e,"background-color",r[12].colour)},d(r){r&&p(e)}}}function be(i){let e,t,n,l,r,s,h=i[12].caption+"",u;return{c(){e=v("div"),t=v("img"),r=S(),s=v("div"),u=C(h),this.h()},l(c){e=b(c,"DIV",{class:!0});var a=k(e);t=b(a,"IMG",{src:!0,alt:!0,class:!0}),r=P(a),s=b(a,"DIV",{class:!0});var g=k(s);u=O(g,h),g.forEach(p),a.forEach(p),this.h()},h(){K(t.src,n=i[12].image)||_(t,"src",n),_(t,"alt",l=i[12].caption),_(t,"class","svelte-1wdej41"),_(s,"class","textfit svelte-1wdej41"),_(e,"class","image-holder svelte-1wdej41")},m(c,a){V(c,e,a),y(e,t),y(e,r),y(e,s),y(s,u)},p(c,a){a&1&&!K(t.src,n=c[12].image)&&_(t,"src",n),a&1&&l!==(l=c[12].caption)&&_(t,"alt",l),a&1&&h!==(h=c[12].caption+"")&&B(u,h)},d(c){c&&p(e)}}}function we(i){let e;function t(r,s){if(r[12].type==="image")return be;if(r[12].type==="text")return ve;if(r[12].type==="link")return ye}let n=t(i),l=n&&n(i);return{c(){l&&l.c(),e=U()},l(r){l&&l.l(r),e=U()},m(r,s){l&&l.m(r,s),V(r,e,s)},p(r,s){n===(n=t(r))&&l?l.p(r,s):(l&&l.d(1),l=n&&n(r),l&&(l.c(),l.m(e.parentNode,e)))},d(r){r&&p(e),l&&l.d(r)}}}function ie(i){let e,t,n,l=i[13],r=i[14],s;t=new ue({props:{href:i[12].link?i[12].link:null,$$slots:{default:[we]},$$scope:{ctx:i}}});const h=()=>i[8](e,l,r),u=()=>i[8](null,l,r);return{c(){e=v("div"),z(t.$$.fragment),n=S(),this.h()},l(c){e=b(c,"DIV",{class:!0});var a=k(e);D(t.$$.fragment,a),n=P(a),a.forEach(p),this.h()},h(){_(e,"class","tile svelte-1wdej41"),E(e,"animate",i[3]),T(e,"margin-bottom",i[2])},m(c,a){V(c,e,a),q(t,e,null),y(e,n),h(),s=!0},p(c,a){i=c;const g={};a&1&&(g.href=i[12].link?i[12].link:null),a&262145&&(g.$$scope={dirty:a,ctx:i}),t.$set(g),(l!==i[13]||r!==i[14])&&(u(),l=i[13],r=i[14],h()),(!s||a&8)&&E(e,"animate",i[3]),a&4&&T(e,"margin-bottom",i[2])},i(c){s||(G(t.$$.fragment,c),s=!0)},o(c){J(t.$$.fragment,c),s=!1},d(c){c&&p(e),W(t),u()}}}function Ve(i){let e,t,n,l,r,s=i[4]&&ee(),h=j({length:i[1]}),u=[];for(let o=0;o<h.length;o+=1)u[o]=te($(i,h,o));let c=j(i[0]),a=[];for(let o=0;o<c.length;o+=1)a[o]=ie(Z(i,c,o));const g=o=>J(a[o],1,1,()=>{a[o]=null});return{c(){s&&s.c(),e=S(),t=v("div");for(let o=0;o<u.length;o+=1)u[o].c();n=S(),l=v("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){s&&s.l(o),e=P(o),t=b(o,"DIV",{class:!0});var d=k(t);for(let m=0;m<u.length;m+=1)u[m].l(d);n=P(d),l=b(d,"DIV",{class:!0});var f=k(l);for(let m=0;m<a.length;m+=1)a[m].l(f);f.forEach(p),d.forEach(p),this.h()},h(){_(l,"class","scratch svelte-1wdej41"),_(t,"class","gallery svelte-1wdej41"),T(t,"gap",i[2])},m(o,d){s&&s.m(o,d),V(o,e,d),V(o,t,d);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(t,null);y(t,n),y(t,l);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(l,null);i[9](l),i[10](t),r=!0},p(o,[d]){if(o[4]?s?d&16&&G(s,1):(s=ee(),s.c(),G(s,1),s.m(e.parentNode,e)):s&&(Q(),J(s,1,1,()=>{s=null}),X()),d&14){h=j({length:o[1]});let f;for(f=0;f<h.length;f+=1){const m=$(o,h,f);u[f]?u[f].p(m,d):(u[f]=te(m),u[f].c(),u[f].m(t,n))}for(;f<u.length;f+=1)u[f].d(1);u.length=h.length}if(d&13){c=j(o[0]);let f;for(f=0;f<c.length;f+=1){const m=Z(o,c,f);a[f]?(a[f].p(m,d),G(a[f],1)):(a[f]=ie(m),a[f].c(),G(a[f],1),a[f].m(l,null))}for(Q(),f=c.length;f<a.length;f+=1)g(f);X()}d&4&&T(t,"gap",o[2])},i(o){if(!r){G(s);for(let d=0;d<c.length;d+=1)G(a[d]);r=!0}},o(o){J(s),a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)J(a[d]);r=!1},d(o){o&&(p(e),p(t)),s&&s.d(o),R(u,o),R(a,o),i[9](null),i[10](null)}}}function N(i,e){return Array.from(i.querySelectorAll(e))}function ke(i,e){let t=0,n=N(i,e);if(n.length>0){let l=parseInt(window.getComputedStyle(n[0]).getPropertyValue("margin-bottom"));n.forEach(r=>{t+=r.offsetHeight+l})}return t}function Fe(i){i.map(e=>{let t=e.querySelector(".push");e.appendChild(t)}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{let e=i.map(n=>{let l=Array.from(n.querySelectorAll(".tile")).pop(),r=n.querySelector(".push"),s=Math.round(l.getBoundingClientRect().bottom),h=parseInt(window.getComputedStyle(r).getPropertyValue("margin-bottom"));return{push:r,margin:h,height:s}}),t=Math.max(...e.map(n=>n.height));e.forEach(n=>{n.height=Math.abs(n.height-t),n.height<n.margin?n.height=0:n.height=n.height-n.margin,n.push.style.height=`${n.height}px`})})})}function Ie(i,e,t){let{columns:n=3}=e,{tiles:l=[]}=e,{gap:r="1rem"}=e,{animate:s=!1}=e,{animation:h="float-up 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}=e,u=!0,c,a;function g(){if(!c)return;let m=N(c,".column").filter(H=>H.offsetParent!==null);l.forEach(H=>{a.appendChild(H.handle)}),l.forEach(H=>{let F=m.map(re=>ke(re,".tile"));const I=Math.min(...F),L=F.indexOf(I);m[L].appendChild(H.handle)}),Fe(m),requestAnimationFrame(()=>{he(c.getElementsByClassName("textfit"),{multiline:!0})})}se(()=>{window.addEventListener("resize",g),s&&N(c,".animate").forEach(F=>{let I=new IntersectionObserver(L=>{if(L[0].isIntersecting){F.style.visibility="visible",F.style.animation=h,I.unobserve(F);return}});I.observe(F)});const m=setInterval(()=>{l.filter(I=>I.type==="image").map(I=>I.handle.querySelector("img").complete).every(I=>I===!0)&&(clearInterval(m),g(),t(4,u=!1))},50)});function o(m,H,F){M[m?"unshift":"push"](()=>{H[F].handle=m,t(0,l)})}function d(m){M[m?"unshift":"push"](()=>{a=m,t(6,a)})}function f(m){M[m?"unshift":"push"](()=>{c=m,t(5,c)})}return i.$$set=m=>{"columns"in m&&t(1,n=m.columns),"tiles"in m&&t(0,l=m.tiles),"gap"in m&&t(2,r=m.gap),"animate"in m&&t(3,s=m.animate),"animation"in m&&t(7,h=m.animation)},g(),[l,n,r,s,u,c,a,h,o,d,f]}class Te extends ne{constructor(e){super(),ae(this,e,Ie,Ve,le,{columns:1,tiles:0,gap:2,animate:3,animation:7})}}function He(i){let e,t,n="Gallery",l,r,s="This is the <code>Gallery</code> widget:",h,u,c;return u=new Te({props:{tiles:[...i[0]]}}),{c(){e=S(),t=v("h1"),t.textContent=n,l=S(),r=v("p"),r.innerHTML=s,h=S(),z(u.$$.fragment),this.h()},l(a){oe("svelte-o2qzrr",document.head).forEach(p),e=P(a),t=b(a,"H1",{"data-svelte-h":!0}),x(t)!=="svelte-14azyx4"&&(t.textContent=n),l=P(a),r=b(a,"P",{"data-svelte-h":!0}),x(r)!=="svelte-144rlt2"&&(r.innerHTML=s),h=P(a),D(u.$$.fragment,a),this.h()},h(){document.title="Demo - Gallery"},m(a,g){V(a,e,g),V(a,t,g),V(a,l,g),V(a,r,g),V(a,h,g),q(u,a,g),c=!0},p:ce,i(a){c||(G(u.$$.fragment,a),c=!0)},o(a){J(u.$$.fragment,a),c=!1},d(a){a&&(p(e),p(t),p(l),p(r),p(h)),W(u,a)}}}const w="https://cdn.bojit.org/img";function Ge(i){return[[{type:"image",caption:"Neck Carving Through Carbon Fibre",image:w+"/posts/BOJIT_V3-Gallery_1.JPG"},{type:"image",caption:"Binding Glue-Up",image:w+"/posts/BOJIT_V3-Gallery_2.JPG"},{type:"image",caption:"Fretboard Pinning",image:w+"/posts/BOJIT_V3-Gallery_3.JPG"},{type:"image",caption:"Hardware Fitting",image:w+"/posts/BOJIT_V3-Gallery_4.JPG"},{type:"image",caption:"Neck Blank Levelling",image:w+"/posts/BOJIT_V3-Gallery_5.JPG"},{type:"image",caption:'F-Hole "Thinning"',image:w+"/posts/BOJIT_V3-Gallery_6.JPG"},{type:"image",caption:"Old-Fashioned Resawing!",image:w+"/posts/BOJIT_V3-Gallery_7.JPG"},{type:"image",caption:"Bookmatched Top",image:w+"/posts/BOJIT_V3-Gallery_8.JPG"},{type:"image",caption:"Neck Pocket Routing",image:w+"/posts/BOJIT_V3-Gallery_9.JPG"},{type:"image",caption:"Setting Neck Joint",image:w+"/posts/BOJIT_V3-Gallery_10.JPG"},{type:"image",caption:"My Workshop!",image:w+"/posts/BOJIT_V3-Gallery_11.JPG"},{type:"image",caption:"Finished Build",image:w+"/posts/BOJIT_V3-Gallery_12.JPG"},{type:"image",caption:"Headstock Design",image:w+"/posts/BOJIT_V3-Gallery_13.JPG"},{type:"image",caption:"Back of Headstock",image:w+"/posts/BOJIT_V3-Gallery_14.JPG"}]]}class Ue extends ne{constructor(e){super(),ae(this,e,Ge,He,le,{})}}export{Ue as component};
