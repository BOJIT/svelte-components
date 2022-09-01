import{S as te,i as le,s as ie,e as v,w as x,c as b,a as V,x as D,d as p,b as y,g as I,y as q,q as T,o as O,B as z,W as B,f as E,P as _,k as S,m as P,n as j,p as W,X as R,v as ae,aa as L,l as U,t as H,h as J,j as A,Y as X,af as re,E as se}from"../../chunks/index-755ae93b.js";import{L as oe}from"../../chunks/Link-f46c7ae3.js";import{P as ce}from"../../chunks/ProgressCircular-f38b631b.js";/* empty css                                                                  */const Y={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:20,maxFontSize:500,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!0};function fe(l,e){e||(e={});let t={};for(let i in Y)e.hasOwnProperty(i)?t[i]=e[i]:t[i]=Y[i];let n=Object.prototype.toString.call(l);n!=="[object Array]"&&n!=="[object NodeList]"&&n!=="[object HTMLCollection]"&&(l=[l]);for(let i=0;i<l.length;i++)ue(l[i],t)}function ue(l,e){if(!ge(l)||!e.reProcess&&l.getAttribute("textFitted"))return!1;e.reProcess||l.setAttribute("textFitted",1);let t,n,i,a,r,g,h;if(i=l.innerHTML,a=me(l),n=he(l),!a||!e.widthOnly&&!n)throw e.widthOnly?new Error("Set a static width on the target element "+l.outerHTML+" before using textFit!"):new Error("Set a static height and width on the target element "+l.outerHTML+" before using textFit!");i.indexOf("textFitted")===-1?(t=document.createElement("span"),t.className="textFitted",t.style.display="inline-block",t.innerHTML=i,l.innerHTML="",l.appendChild(t)):(t=l.querySelector("span.textFitted"),M(t,"textFitAlignVert")&&(t.className=t.className.replace("textFitAlignVert",""),t.style.height="",l.className.replace("textFitAlignVertFlex",""))),e.alignHoriz&&(l.style["text-align"]="center",t.style["text-align"]="center");let u=e.multiLine;e.detectMultiLine&&!u&&t.scrollHeight>=parseInt(window.getComputedStyle(t)["font-size"],10)*2&&(u=!0),u||(l.style["white-space"]="nowrap"),r=e.minFontSize,h=e.maxFontSize;let s=r;for(;r<=h;)g=h+r>>1,t.style.fontSize=g+"px",t.scrollWidth<=a&&(e.widthOnly||t.scrollHeight<=n)?(s=g,r=g+1):h=g-1;if(t.style.fontSize!=s+"px"&&(t.style.fontSize=s+"px"),e.alignVert){de();let d=t.scrollHeight;window.getComputedStyle(l).position==="static"&&(l.style.position="relative"),M(t,"textFitAlignVert")||(t.className=t.className+" textFitAlignVert"),t.style.height=d+"px",e.alignVertWithFlexbox&&!M(l,"textFitAlignVertFlex")&&(l.className=l.className+" textFitAlignVertFlex")}}function he(l){let e=window.getComputedStyle(l,null);return l.clientHeight-parseInt(e.getPropertyValue("padding-top"),10)-parseInt(e.getPropertyValue("padding-bottom"),10)}function me(l){let e=window.getComputedStyle(l,null);return l.clientWidth-parseInt(e.getPropertyValue("padding-left"),10)-parseInt(e.getPropertyValue("padding-right"),10)}function ge(l){return typeof HTMLElement=="object"?l instanceof HTMLElement:l&&typeof l=="object"&&l!==null&&l.nodeType===1&&typeof l.nodeName=="string"}function M(l,e){return(" "+l.className+" ").indexOf(" "+e+" ")>-1}function de(){if(document.getElementById("textFitStyleSheet"))return;let l=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","display: flex;","justify-content: center;","flex-direction: column;","}",".textFitAlignVertFlex{","display: flex;","}",".textFitAlignVertFlex .textFitAlignVert{","position: static;","}"].join(""),e=document.createElement("style");e.type="text/css",e.id="textFitStyleSheet",e.innerHTML=l,document.body.appendChild(e)}function K(l,e,t){const n=l.slice();return n[12]=e[t],n[13]=e,n[14]=t,n}function Q(l,e,t){const n=l.slice();return n[15]=e[t],n[17]=t,n}function Z(l){let e,t,n;return t=new ce({}),{c(){e=v("div"),x(t.$$.fragment),this.h()},l(i){e=b(i,"DIV",{class:!0});var a=V(e);D(t.$$.fragment,a),a.forEach(p),this.h()},h(){y(e,"class","loading-spinner svelte-rel92n")},m(i,a){I(i,e,a),q(t,e,null),n=!0},i(i){n||(T(t.$$.fragment,i),n=!0)},o(i){O(t.$$.fragment,i),n=!1},d(i){i&&p(e),z(t)}}}function $(l){let e,t,n;return{c(){e=v("div"),t=v("div"),n=v("div"),this.h()},l(i){e=b(i,"DIV",{class:!0});var a=V(e);t=b(a,"DIV",{class:!0});var r=V(t);n=b(r,"DIV",{class:!0}),V(n).forEach(p),r.forEach(p),a.forEach(p),this.h()},h(){y(n,"class","push-tile svelte-rel92n"),y(t,"class","push svelte-rel92n"),B(t,"animate",l[3]),E(t,"margin-bottom",l[2],!1),y(e,"class","column svelte-rel92n"),B(e,"first",l[17]==0)},m(i,a){I(i,e,a),_(e,t),_(t,n)},p(i,a){a&8&&B(t,"animate",i[3]),a&4&&E(t,"margin-bottom",i[2],!1)},d(i){i&&p(e)}}}function pe(l){let e,t,n=l[12].caption+"",i,a,r,g,h,u=l[12].subcaption+"",s;return{c(){e=v("div"),t=v("h2"),i=H(n),a=S(),r=v("hr"),g=S(),h=v("h4"),s=H(u),this.h()},l(d){e=b(d,"DIV",{class:!0});var o=V(e);t=b(o,"H2",{class:!0});var c=V(t);i=J(c,n),c.forEach(p),a=P(o),r=b(o,"HR",{class:!0}),g=P(o),h=b(o,"H4",{class:!0});var f=V(h);s=J(f,u),f.forEach(p),o.forEach(p),this.h()},h(){y(t,"class","svelte-rel92n"),y(r,"class","svelte-rel92n"),y(h,"class","svelte-rel92n"),y(e,"class","text svelte-rel92n"),E(e,"background-color",l[12].colour,!1)},m(d,o){I(d,e,o),_(e,t),_(t,i),_(e,a),_(e,r),_(e,g),_(e,h),_(h,s)},p(d,o){o&1&&n!==(n=d[12].caption+"")&&A(i,n),o&1&&u!==(u=d[12].subcaption+"")&&A(s,u),o&1&&E(e,"background-color",d[12].colour,!1)},d(d){d&&p(e)}}}function _e(l){let e,t,n=l[12].caption+"",i;return{c(){e=v("div"),t=v("h2"),i=H(n),this.h()},l(a){e=b(a,"DIV",{class:!0});var r=V(e);t=b(r,"H2",{class:!0});var g=V(t);i=J(g,n),g.forEach(p),r.forEach(p),this.h()},h(){y(t,"class","svelte-rel92n"),y(e,"class","text svelte-rel92n"),E(e,"background-color",l[12].colour,!1)},m(a,r){I(a,e,r),_(e,t),_(t,i)},p(a,r){r&1&&n!==(n=a[12].caption+"")&&A(i,n),r&1&&E(e,"background-color",a[12].colour,!1)},d(a){a&&p(e)}}}function ye(l){let e,t,n,i,a,r,g=l[12].caption+"",h;return{c(){e=v("div"),t=v("img"),a=S(),r=v("div"),h=H(g),this.h()},l(u){e=b(u,"DIV",{class:!0});var s=V(e);t=b(s,"IMG",{src:!0,alt:!0,class:!0}),a=P(s),r=b(s,"DIV",{class:!0});var d=V(r);h=J(d,g),d.forEach(p),s.forEach(p),this.h()},h(){X(t.src,n=l[12].image)||y(t,"src",n),y(t,"alt",i=l[12].caption),y(t,"class","svelte-rel92n"),y(r,"class","textfit svelte-rel92n"),y(e,"class","image-holder svelte-rel92n")},m(u,s){I(u,e,s),_(e,t),_(e,a),_(e,r),_(r,h)},p(u,s){s&1&&!X(t.src,n=u[12].image)&&y(t,"src",n),s&1&&i!==(i=u[12].caption)&&y(t,"alt",i),s&1&&g!==(g=u[12].caption+"")&&A(h,g)},d(u){u&&p(e)}}}function ve(l){let e;function t(a,r){if(a[12].type==="image")return ye;if(a[12].type==="text")return _e;if(a[12].type==="link")return pe}let n=t(l),i=n&&n(l);return{c(){i&&i.c(),e=U()},l(a){i&&i.l(a),e=U()},m(a,r){i&&i.m(a,r),I(a,e,r)},p(a,r){n===(n=t(a))&&i?i.p(a,r):(i&&i.d(1),i=n&&n(a),i&&(i.c(),i.m(e.parentNode,e)))},d(a){i&&i.d(a),a&&p(e)}}}function ee(l){let e,t,n,i=l[13],a=l[14],r;t=new oe({props:{href:l[12].link?l[12].link:null,$$slots:{default:[ve]},$$scope:{ctx:l}}});const g=()=>l[8](e,i,a),h=()=>l[8](null,i,a);return{c(){e=v("div"),x(t.$$.fragment),n=S(),this.h()},l(u){e=b(u,"DIV",{class:!0});var s=V(e);D(t.$$.fragment,s),n=P(s),s.forEach(p),this.h()},h(){y(e,"class","tile svelte-rel92n"),B(e,"animate",l[3]),E(e,"margin-bottom",l[2],!1)},m(u,s){I(u,e,s),q(t,e,null),_(e,n),g(),r=!0},p(u,s){l=u;const d={};s&1&&(d.href=l[12].link?l[12].link:null),s&262145&&(d.$$scope={dirty:s,ctx:l}),t.$set(d),(i!==l[13]||a!==l[14])&&(h(),i=l[13],a=l[14],g()),s&8&&B(e,"animate",l[3]),s&4&&E(e,"margin-bottom",l[2],!1)},i(u){r||(T(t.$$.fragment,u),r=!0)},o(u){O(t.$$.fragment,u),r=!1},d(u){u&&p(e),z(t),h()}}}function be(l){let e,t,n,i,a,r=l[4]&&Z(),g={length:l[1]},h=[];for(let o=0;o<g.length;o+=1)h[o]=$(Q(l,g,o));let u=l[0],s=[];for(let o=0;o<u.length;o+=1)s[o]=ee(K(l,u,o));const d=o=>O(s[o],1,1,()=>{s[o]=null});return{c(){r&&r.c(),e=S(),t=v("div");for(let o=0;o<h.length;o+=1)h[o].c();n=S(),i=v("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){r&&r.l(o),e=P(o),t=b(o,"DIV",{class:!0});var c=V(t);for(let m=0;m<h.length;m+=1)h[m].l(c);n=P(c),i=b(c,"DIV",{class:!0});var f=V(i);for(let m=0;m<s.length;m+=1)s[m].l(f);f.forEach(p),c.forEach(p),this.h()},h(){y(i,"class","scratch svelte-rel92n"),y(t,"class","gallery svelte-rel92n"),E(t,"gap",l[2],!1)},m(o,c){r&&r.m(o,c),I(o,e,c),I(o,t,c);for(let f=0;f<h.length;f+=1)h[f].m(t,null);_(t,n),_(t,i);for(let f=0;f<s.length;f+=1)s[f].m(i,null);l[9](i),l[10](t),a=!0},p(o,[c]){if(o[4]?r?c&16&&T(r,1):(r=Z(),r.c(),T(r,1),r.m(e.parentNode,e)):r&&(j(),O(r,1,1,()=>{r=null}),W()),c&14){g={length:o[1]};let f;for(f=0;f<g.length;f+=1){const m=Q(o,g,f);h[f]?h[f].p(m,c):(h[f]=$(m),h[f].c(),h[f].m(t,n))}for(;f<h.length;f+=1)h[f].d(1);h.length=g.length}if(c&13){u=o[0];let f;for(f=0;f<u.length;f+=1){const m=K(o,u,f);s[f]?(s[f].p(m,c),T(s[f],1)):(s[f]=ee(m),s[f].c(),T(s[f],1),s[f].m(i,null))}for(j(),f=u.length;f<s.length;f+=1)d(f);W()}c&4&&E(t,"gap",o[2],!1)},i(o){if(!a){T(r);for(let c=0;c<u.length;c+=1)T(s[c]);a=!0}},o(o){O(r),s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)O(s[c]);a=!1},d(o){r&&r.d(o),o&&p(e),o&&p(t),R(h,o),R(s,o),l[9](null),l[10](null)}}}function N(l,e){return Array.from(l.querySelectorAll(e))}function Ve(l,e){let t=0,n=N(l,e);if(n.length>0){let i=parseInt(window.getComputedStyle(n[0]).getPropertyValue("margin-bottom"));n.forEach(a=>{t+=a.offsetHeight+i})}return t}function ke(l){l.map(e=>{let t=e.querySelector(".push");e.appendChild(t)}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{let e=l.map(n=>{let i=Array.from(n.querySelectorAll(".tile")).pop(),a=n.querySelector(".push"),r=Math.round(i.getBoundingClientRect().bottom),g=parseInt(window.getComputedStyle(a).getPropertyValue("margin-bottom"));return{push:a,margin:g,height:r}}),t=Math.max(...e.map(n=>n.height));e.forEach(n=>{n.height=Math.abs(n.height-t),n.height<n.margin?n.height=0:n.height=n.height-n.margin,n.push.style.height=`${n.height}px`})})})}function Fe(l,e,t){let{columns:n=3}=e,{tiles:i=[]}=e,{gap:a="1rem"}=e,{animate:r=!1}=e,{animation:g="float-up 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}=e,h=!0,u,s;function d(){if(!u)return;let m=N(u,".column").filter(k=>k.offsetParent!==null);i.forEach(k=>{s.appendChild(k.handle)}),i.forEach(k=>{let w=m.map(ne=>Ve(ne,".tile"));const G=Math.min(...w),C=w.indexOf(G);m[C].appendChild(k.handle)}),ke(m),requestAnimationFrame(()=>{fe(u.getElementsByClassName("textfit"),{multiline:!0})})}ae(()=>{window.addEventListener("resize",d),r&&N(u,".animate").forEach(w=>{let G=new IntersectionObserver(C=>{if(C[0].isIntersecting){w.style.visibility="visible",w.style.animation=g,G.unobserve(w);return}});G.observe(w)});const m=setInterval(()=>{i.filter(G=>G.type==="image").map(G=>G.handle.querySelector("img").complete).every(G=>G===!0)&&(clearInterval(m),d(),t(4,h=!1))},50)});function o(m,k,w){L[m?"unshift":"push"](()=>{k[w].handle=m,t(0,i)})}function c(m){L[m?"unshift":"push"](()=>{s=m,t(6,s)})}function f(m){L[m?"unshift":"push"](()=>{u=m,t(5,u)})}return l.$$set=m=>{"columns"in m&&t(1,n=m.columns),"tiles"in m&&t(0,i=m.tiles),"gap"in m&&t(2,a=m.gap),"animate"in m&&t(3,r=m.animate),"animation"in m&&t(7,g=m.animation)},d(),[i,n,a,r,h,u,s,g,o,c,f]}class Ie extends te{constructor(e){super(),le(this,e,Fe,be,ie,{columns:1,tiles:0,gap:2,animate:3,animation:7})}}function we(l){let e,t,n,i,a,r,g,h,u,s,d,o;return d=new Ie({props:{tiles:[...l[0]]}}),{c(){e=S(),t=v("h1"),n=H("Gallery"),i=S(),a=v("p"),r=H("This is the "),g=v("code"),h=H("Gallery"),u=H(" widget:"),s=S(),x(d.$$.fragment),this.h()},l(c){re('[data-svelte="svelte-o2qzrr"]',document.head).forEach(p),e=P(c),t=b(c,"H1",{});var m=V(t);n=J(m,"Gallery"),m.forEach(p),i=P(c),a=b(c,"P",{});var k=V(a);r=J(k,"This is the "),g=b(k,"CODE",{});var w=V(g);h=J(w,"Gallery"),w.forEach(p),u=J(k," widget:"),k.forEach(p),s=P(c),D(d.$$.fragment,c),this.h()},h(){document.title="Demo - Gallery"},m(c,f){I(c,e,f),I(c,t,f),_(t,n),I(c,i,f),I(c,a,f),_(a,r),_(a,g),_(g,h),_(a,u),I(c,s,f),q(d,c,f),o=!0},p:se,i(c){o||(T(d.$$.fragment,c),o=!0)},o(c){O(d.$$.fragment,c),o=!1},d(c){c&&p(e),c&&p(t),c&&p(i),c&&p(a),c&&p(s),z(d,c)}}}const F="https://cdn.bojit.org/img";function Ge(l){return[[{type:"image",caption:"Neck Carving Through Carbon Fibre",image:F+"/posts/BOJIT_V3-Gallery_1.JPG"},{type:"image",caption:"Binding Glue-Up",image:F+"/posts/BOJIT_V3-Gallery_2.JPG"},{type:"image",caption:"Fretboard Pinning",image:F+"/posts/BOJIT_V3-Gallery_3.JPG"},{type:"image",caption:"Hardware Fitting",image:F+"/posts/BOJIT_V3-Gallery_4.JPG"},{type:"image",caption:"Neck Blank Levelling",image:F+"/posts/BOJIT_V3-Gallery_5.JPG"},{type:"image",caption:'F-Hole "Thinning"',image:F+"/posts/BOJIT_V3-Gallery_6.JPG"},{type:"image",caption:"Old-Fashioned Resawing!",image:F+"/posts/BOJIT_V3-Gallery_7.JPG"},{type:"image",caption:"Bookmatched Top",image:F+"/posts/BOJIT_V3-Gallery_8.JPG"},{type:"image",caption:"Neck Pocket Routing",image:F+"/posts/BOJIT_V3-Gallery_9.JPG"},{type:"image",caption:"Setting Neck Joint",image:F+"/posts/BOJIT_V3-Gallery_10.JPG"},{type:"image",caption:"My Workshop!",image:F+"/posts/BOJIT_V3-Gallery_11.JPG"},{type:"image",caption:"Finished Build",image:F+"/posts/BOJIT_V3-Gallery_12.JPG"},{type:"image",caption:"Headstock Design",image:F+"/posts/BOJIT_V3-Gallery_13.JPG"},{type:"image",caption:"Back of Headstock",image:F+"/posts/BOJIT_V3-Gallery_14.JPG"}]]}class He extends te{constructor(e){super(),le(this,e,Ge,we,ie,{})}}export{He as default};
