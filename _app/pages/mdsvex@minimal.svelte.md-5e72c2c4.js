import{S as Re,i as Be,s as Ge,e as _,w as R,c as g,a as h,x as B,d as a,b as O,g as m,N as u,y as G,q as P,o as D,B as x,v as an,_ as j,U as He,f as M,k as S,m as k,n as Hn,p as $n,V as Cn,l as Rn,t as w,h as T,j as bt,a3 as Ce,E as $e,$ as Bn,af as ti,a0 as Gn}from"../chunks/index-52fd3622.js";import{a as xn,C as Vn}from"../chunks/CodeEditor-6e7f2e2f.js";import{B as ni}from"../chunks/Button-67dd7a3a.js";import{m as ii,P as li}from"../chunks/prism-0a6dc08e.js";import{L as si}from"../chunks/Link-36315202.js";import"../chunks/preload-helper-e4860ae8.js";import"../chunks/index-0d752253.js";/* empty css                                                               */function ai(i){let t,n,l,s;return l=new ni({props:{icon:i[2],iconColor:"var(--color-gray-500)",lozenge:!0,transparent:!0}}),l.$on("click",i[3]),{c(){t=_("div"),n=_("div"),R(l.$$.fragment),this.h()},l(r){t=g(r,"DIV",{});var o=h(t);n=g(o,"DIV",{class:!0});var d=h(n);B(l.$$.fragment,d),d.forEach(a),o.forEach(a),this.h()},h(){O(n,"class","button svelte-11bnmlh")},m(r,o){m(r,t,o),u(t,n),G(l,n,null),i[4](n),i[5](t),s=!0},p(r,[o]){const d={};o&4&&(d.icon=r[2]),l.$set(d)},i(r){s||(P(l.$$.fragment,r),s=!0)},o(r){D(l.$$.fragment,r),s=!1},d(r){r&&a(t),x(l),i[4](null),i[5](null)}}}function ri(i,t,n){let l,s,r,o="content_copy";function d(){n(2,o="done"),navigator.clipboard.writeText(r.textContent),ii.push({type:"info",title:"Text Copied!",message:"Text copied to clipboard",timeout:3}),setTimeout(()=>{n(2,o="content_copy")},3e3)}an(()=>{var p,I;let c,A=l;for(;A&&((p=A.nextElementSibling)==null?void 0:p.nodeName)!=="PRE";)A=A.nextElementSibling;((I=A.nextElementSibling)==null?void 0:I.nodeName)==="PRE"&&(c=A.nextElementSibling,r=c.getElementsByTagName("code")[0],s.parentElement.nodeName!=="PRE"&&(c.style.position="relative",c.insertBefore(s,c.firstChild)))});function v(c){j[c?"unshift":"push"](()=>{s=c,n(1,s)})}function b(c){j[c?"unshift":"push"](()=>{l=c,n(0,l)})}return[l,s,o,d,v,b]}class Mn extends Re{constructor(t){super(),Be(this,t,ri,ai,Ge,{})}}const Fn={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:20,maxFontSize:500,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!0};function oi(i,t){t||(t={});let n={};for(let s in Fn)t.hasOwnProperty(s)?n[s]=t[s]:n[s]=Fn[s];let l=Object.prototype.toString.call(i);l!=="[object Array]"&&l!=="[object NodeList]"&&l!=="[object HTMLCollection]"&&(i=[i]);for(let s=0;s<i.length;s++)ui(i[s],n)}function ui(i,t){if(!fi(i)||!t.reProcess&&i.getAttribute("textFitted"))return!1;t.reProcess||i.setAttribute("textFitted",1);let n,l,s,r,o,d,v;if(s=i.innerHTML,r=pi(i),l=ci(i),!r||!t.widthOnly&&!l)throw t.widthOnly?new Error("Set a static width on the target element "+i.outerHTML+" before using textFit!"):new Error("Set a static height and width on the target element "+i.outerHTML+" before using textFit!");s.indexOf("textFitted")===-1?(n=document.createElement("span"),n.className="textFitted",n.style.display="inline-block",n.innerHTML=s,i.innerHTML="",i.appendChild(n)):(n=i.querySelector("span.textFitted"),ln(n,"textFitAlignVert")&&(n.className=n.className.replace("textFitAlignVert",""),n.style.height="",i.className.replace("textFitAlignVertFlex",""))),t.alignHoriz&&(i.style["text-align"]="center",n.style["text-align"]="center");let b=t.multiLine;t.detectMultiLine&&!b&&n.scrollHeight>=parseInt(window.getComputedStyle(n)["font-size"],10)*2&&(b=!0),b||(i.style["white-space"]="nowrap"),o=t.minFontSize,v=t.maxFontSize;let c=o;for(;o<=v;)d=v+o>>1,n.style.fontSize=d+"px",n.scrollWidth<=r&&(t.widthOnly||n.scrollHeight<=l)?(c=d,o=d+1):v=d-1;if(n.style.fontSize!=c+"px"&&(n.style.fontSize=c+"px"),t.alignVert){di();let A=n.scrollHeight;window.getComputedStyle(i).position==="static"&&(i.style.position="relative"),ln(n,"textFitAlignVert")||(n.className=n.className+" textFitAlignVert"),n.style.height=A+"px",t.alignVertWithFlexbox&&!ln(i,"textFitAlignVertFlex")&&(i.className=i.className+" textFitAlignVertFlex")}}function ci(i){let t=window.getComputedStyle(i,null);return i.clientHeight-parseInt(t.getPropertyValue("padding-top"),10)-parseInt(t.getPropertyValue("padding-bottom"),10)}function pi(i){let t=window.getComputedStyle(i,null);return i.clientWidth-parseInt(t.getPropertyValue("padding-left"),10)-parseInt(t.getPropertyValue("padding-right"),10)}function fi(i){return typeof HTMLElement=="object"?i instanceof HTMLElement:i&&typeof i=="object"&&i!==null&&i.nodeType===1&&typeof i.nodeName=="string"}function ln(i,t){return(" "+i.className+" ").indexOf(" "+t+" ")>-1}function di(){if(document.getElementById("textFitStyleSheet"))return;let i=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","display: flex;","justify-content: center;","flex-direction: column;","}",".textFitAlignVertFlex{","display: flex;","}",".textFitAlignVertFlex .textFitAlignVert{","position: static;","}"].join(""),t=document.createElement("style");t.type="text/css",t.id="textFitStyleSheet",t.innerHTML=i,document.body.appendChild(t)}function Jn(i,t,n){const l=i.slice();return l[12]=t[n],l[13]=t,l[14]=n,l}function zn(i,t,n){const l=i.slice();return l[15]=t[n],l[17]=n,l}function Un(i){let t,n,l;return n=new li({}),{c(){t=_("div"),R(n.$$.fragment),this.h()},l(s){t=g(s,"DIV",{class:!0});var r=h(t);B(n.$$.fragment,r),r.forEach(a),this.h()},h(){O(t,"class","loading-spinner svelte-rel92n")},m(s,r){m(s,t,r),G(n,t,null),l=!0},i(s){l||(P(n.$$.fragment,s),l=!0)},o(s){D(n.$$.fragment,s),l=!1},d(s){s&&a(t),x(n)}}}function qn(i){let t,n,l;return{c(){t=_("div"),n=_("div"),l=_("div"),this.h()},l(s){t=g(s,"DIV",{class:!0});var r=h(t);n=g(r,"DIV",{class:!0});var o=h(n);l=g(o,"DIV",{class:!0}),h(l).forEach(a),o.forEach(a),r.forEach(a),this.h()},h(){O(l,"class","push-tile svelte-rel92n"),O(n,"class","push svelte-rel92n"),He(n,"animate",i[3]),M(n,"margin-bottom",i[2],!1),O(t,"class","column svelte-rel92n"),He(t,"first",i[17]==0)},m(s,r){m(s,t,r),u(t,n),u(n,l)},p(s,r){r&8&&He(n,"animate",s[3]),r&4&&M(n,"margin-bottom",s[2],!1)},d(s){s&&a(t)}}}function mi(i){let t,n,l=i[12].caption+"",s,r,o,d,v,b=i[12].subcaption+"",c;return{c(){t=_("div"),n=_("h2"),s=w(l),r=S(),o=_("hr"),d=S(),v=_("h4"),c=w(b),this.h()},l(A){t=g(A,"DIV",{class:!0});var p=h(t);n=g(p,"H2",{class:!0});var I=h(n);s=T(I,l),I.forEach(a),r=k(p),o=g(p,"HR",{class:!0}),d=k(p),v=g(p,"H4",{class:!0});var y=h(v);c=T(y,b),y.forEach(a),p.forEach(a),this.h()},h(){O(n,"class","svelte-rel92n"),O(o,"class","svelte-rel92n"),O(v,"class","svelte-rel92n"),O(t,"class","text svelte-rel92n"),M(t,"background-color",i[12].colour,!1)},m(A,p){m(A,t,p),u(t,n),u(n,s),u(t,r),u(t,o),u(t,d),u(t,v),u(v,c)},p(A,p){p&1&&l!==(l=A[12].caption+"")&&bt(s,l),p&1&&b!==(b=A[12].subcaption+"")&&bt(c,b),p&1&&M(t,"background-color",A[12].colour,!1)},d(A){A&&a(t)}}}function _i(i){let t,n,l=i[12].caption+"",s;return{c(){t=_("div"),n=_("h2"),s=w(l),this.h()},l(r){t=g(r,"DIV",{class:!0});var o=h(t);n=g(o,"H2",{class:!0});var d=h(n);s=T(d,l),d.forEach(a),o.forEach(a),this.h()},h(){O(n,"class","svelte-rel92n"),O(t,"class","text svelte-rel92n"),M(t,"background-color",i[12].colour,!1)},m(r,o){m(r,t,o),u(t,n),u(n,s)},p(r,o){o&1&&l!==(l=r[12].caption+"")&&bt(s,l),o&1&&M(t,"background-color",r[12].colour,!1)},d(r){r&&a(t)}}}function gi(i){let t,n,l,s,r,o,d=i[12].caption+"",v;return{c(){t=_("div"),n=_("img"),r=S(),o=_("div"),v=w(d),this.h()},l(b){t=g(b,"DIV",{class:!0});var c=h(t);n=g(c,"IMG",{src:!0,alt:!0,class:!0}),r=k(c),o=g(c,"DIV",{class:!0});var A=h(o);v=T(A,d),A.forEach(a),c.forEach(a),this.h()},h(){Ce(n.src,l=i[12].image)||O(n,"src",l),O(n,"alt",s=i[12].caption),O(n,"class","svelte-rel92n"),O(o,"class","textfit svelte-rel92n"),O(t,"class","image-holder svelte-rel92n")},m(b,c){m(b,t,c),u(t,n),u(t,r),u(t,o),u(o,v)},p(b,c){c&1&&!Ce(n.src,l=b[12].image)&&O(n,"src",l),c&1&&s!==(s=b[12].caption)&&O(n,"alt",s),c&1&&d!==(d=b[12].caption+"")&&bt(v,d)},d(b){b&&a(t)}}}function hi(i){let t;function n(r,o){if(r[12].type==="image")return gi;if(r[12].type==="text")return _i;if(r[12].type==="link")return mi}let l=n(i),s=l&&l(i);return{c(){s&&s.c(),t=Rn()},l(r){s&&s.l(r),t=Rn()},m(r,o){s&&s.m(r,o),m(r,t,o)},p(r,o){l===(l=n(r))&&s?s.p(r,o):(s&&s.d(1),s=l&&l(r),s&&(s.c(),s.m(t.parentNode,t)))},d(r){s&&s.d(r),r&&a(t)}}}function jn(i){let t,n,l,s=i[13],r=i[14],o;n=new si({props:{href:i[12].link?i[12].link:null,$$slots:{default:[hi]},$$scope:{ctx:i}}});const d=()=>i[8](t,s,r),v=()=>i[8](null,s,r);return{c(){t=_("div"),R(n.$$.fragment),l=S(),this.h()},l(b){t=g(b,"DIV",{class:!0});var c=h(t);B(n.$$.fragment,c),l=k(c),c.forEach(a),this.h()},h(){O(t,"class","tile svelte-rel92n"),He(t,"animate",i[3]),M(t,"margin-bottom",i[2],!1)},m(b,c){m(b,t,c),G(n,t,null),u(t,l),d(),o=!0},p(b,c){i=b;const A={};c&1&&(A.href=i[12].link?i[12].link:null),c&262145&&(A.$$scope={dirty:c,ctx:i}),n.$set(A),(s!==i[13]||r!==i[14])&&(v(),s=i[13],r=i[14],d()),c&8&&He(t,"animate",i[3]),c&4&&M(t,"margin-bottom",i[2],!1)},i(b){o||(P(n.$$.fragment,b),o=!0)},o(b){D(n.$$.fragment,b),o=!1},d(b){b&&a(t),x(n),v()}}}function bi(i){let t,n,l,s,r,o=i[4]&&Un(),d={length:i[1]},v=[];for(let p=0;p<d.length;p+=1)v[p]=qn(zn(i,d,p));let b=i[0],c=[];for(let p=0;p<b.length;p+=1)c[p]=jn(Jn(i,b,p));const A=p=>D(c[p],1,1,()=>{c[p]=null});return{c(){o&&o.c(),t=S(),n=_("div");for(let p=0;p<v.length;p+=1)v[p].c();l=S(),s=_("div");for(let p=0;p<c.length;p+=1)c[p].c();this.h()},l(p){o&&o.l(p),t=k(p),n=g(p,"DIV",{class:!0});var I=h(n);for(let E=0;E<v.length;E+=1)v[E].l(I);l=k(I),s=g(I,"DIV",{class:!0});var y=h(s);for(let E=0;E<c.length;E+=1)c[E].l(y);y.forEach(a),I.forEach(a),this.h()},h(){O(s,"class","scratch svelte-rel92n"),O(n,"class","gallery svelte-rel92n"),M(n,"gap",i[2],!1)},m(p,I){o&&o.m(p,I),m(p,t,I),m(p,n,I);for(let y=0;y<v.length;y+=1)v[y].m(n,null);u(n,l),u(n,s);for(let y=0;y<c.length;y+=1)c[y].m(s,null);i[9](s),i[10](n),r=!0},p(p,[I]){if(p[4]?o?I&16&&P(o,1):(o=Un(),o.c(),P(o,1),o.m(t.parentNode,t)):o&&(Hn(),D(o,1,1,()=>{o=null}),$n()),I&14){d={length:p[1]};let y;for(y=0;y<d.length;y+=1){const E=zn(p,d,y);v[y]?v[y].p(E,I):(v[y]=qn(E),v[y].c(),v[y].m(n,l))}for(;y<v.length;y+=1)v[y].d(1);v.length=d.length}if(I&13){b=p[0];let y;for(y=0;y<b.length;y+=1){const E=Jn(p,b,y);c[y]?(c[y].p(E,I),P(c[y],1)):(c[y]=jn(E),c[y].c(),P(c[y],1),c[y].m(s,null))}for(Hn(),y=b.length;y<c.length;y+=1)A(y);$n()}I&4&&M(n,"gap",p[2],!1)},i(p){if(!r){P(o);for(let I=0;I<b.length;I+=1)P(c[I]);r=!0}},o(p){D(o),c=c.filter(Boolean);for(let I=0;I<c.length;I+=1)D(c[I]);r=!1},d(p){o&&o.d(p),p&&a(t),p&&a(n),Cn(v,p),Cn(c,p),i[9](null),i[10](null)}}}function sn(i,t){return Array.from(i.querySelectorAll(t))}function yi(i,t){let n=0,l=sn(i,t);if(l.length>0){let s=parseInt(window.getComputedStyle(l[0]).getPropertyValue("margin-bottom"));l.forEach(r=>{n+=r.offsetHeight+s})}return n}function vi(i){i.map(t=>{let n=t.querySelector(".push");t.appendChild(n)}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{let t=i.map(l=>{let s=Array.from(l.querySelectorAll(".tile")).pop(),r=l.querySelector(".push"),o=Math.round(s.getBoundingClientRect().bottom),d=parseInt(window.getComputedStyle(r).getPropertyValue("margin-bottom"));return{push:r,margin:d,height:o}}),n=Math.max(...t.map(l=>l.height));t.forEach(l=>{l.height=Math.abs(l.height-n),l.height<l.margin?l.height=0:l.height=l.height-l.margin,l.push.style.height=`${l.height}px`})})})}function Ei(i,t,n){let{columns:l=3}=t,{tiles:s=[]}=t,{gap:r="1rem"}=t,{animate:o=!1}=t,{animation:d="float-up 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}=t,v=!0,b,c;function A(){if(!b)return;let E=sn(b,".column").filter($=>$.offsetParent!==null);s.forEach($=>{c.appendChild($.handle)}),s.forEach($=>{let L=E.map(oe=>yi(oe,".tile"));const N=Math.min(...L),re=L.indexOf(N);E[re].appendChild($.handle)}),vi(E),requestAnimationFrame(()=>{oi(b.getElementsByClassName("textfit"),{multiline:!0})})}an(()=>{window.addEventListener("resize",A),o&&sn(b,".animate").forEach(L=>{let N=new IntersectionObserver(re=>{if(re[0].isIntersecting){L.style.visibility="visible",L.style.animation=d,N.unobserve(L);return}});N.observe(L)});const E=setInterval(()=>{s.filter(N=>N.type==="image").map(N=>N.handle.querySelector("img").complete).every(N=>N===!0)&&(clearInterval(E),A(),n(4,v=!1))},50)});function p(E,$,L){j[E?"unshift":"push"](()=>{$[L].handle=E,n(0,s)})}function I(E){j[E?"unshift":"push"](()=>{c=E,n(6,c)})}function y(E){j[E?"unshift":"push"](()=>{b=E,n(5,b)})}return i.$$set=E=>{"columns"in E&&n(1,l=E.columns),"tiles"in E&&n(0,s=E.tiles),"gap"in E&&n(2,r=E.gap),"animate"in E&&n(3,o=E.animate),"animation"in E&&n(7,d=E.animation)},A(),[s,l,r,o,v,b,c,d,p,I,y]}class Si extends Re{constructor(t){super(),Be(this,t,Ei,bi,Ge,{columns:1,tiles:0,gap:2,animate:3,animation:7})}}function ki(i){let t;return{c(){t=_("div")},l(n){t=g(n,"DIV",{}),h(t).forEach(a)},m(n,l){m(n,t,l),i[2](t)},p:$e,i:$e,o:$e,d(n){n&&a(t),i[2](null)}}}function wi(i,t,n){let l,{global:s=!1}=t;an(()=>{var d;s&&document.body.classList.add("line-numbers");let o=l;for(;o&&((d=o.nextElementSibling)==null?void 0:d.nodeName)!=="PRE";)o=o.nextElementSibling;o.nextElementSibling.classList.add("line-numbers"),typeof Prism!="undefined"&&Prism.highlightAll()});function r(o){j[o?"unshift":"push"](()=>{l=o,n(0,l)})}return i.$$set=o=>{"global"in o&&n(1,s=o.global)},[l,s,r]}class Xn extends Re{constructor(t){super(),Be(this,t,wi,ki,Ge,{global:1})}}function Ti(i){let t,n,l,s;return{c(){t=_("div"),n=_("div"),l=_("iframe"),this.h()},l(r){t=g(r,"DIV",{class:!0});var o=h(t);n=g(o,"DIV",{class:!0});var d=h(n);l=g(d,"IFRAME",{title:!0,type:!0,src:!0,frameborder:!0,class:!0}),h(l).forEach(a),d.forEach(a),o.forEach(a),this.h()},h(){O(l,"title","youtube-video"),O(l,"type","text/html"),Ce(l.src,s=i[0].join(""))||O(l,"src",s),O(l,"frameborder","0"),O(l,"class","svelte-1ayp6kn"),O(n,"class","aspect-ratio svelte-1ayp6kn"),O(t,"class","content-padded")},m(r,o){m(r,t,o),u(t,n),u(n,l)},p(r,[o]){o&1&&!Ce(l.src,s=r[0].join(""))&&O(l,"src",s)},i:$e,o:$e,d(r){r&&a(t)}}}function Ii(i,t,n){let{src:l=""}=t,{autoplay:s=!1}=t,{playlist:r=""}=t,o=[];return i.$$set=d=>{"src"in d&&n(1,l=d.src),"autoplay"in d&&n(2,s=d.autoplay),"playlist"in d&&n(3,r=d.playlist)},i.$$.update=()=>{i.$$.dirty&14&&n(0,o=[l,"?version=3","&modestbranding=1",s?"&autoplay=1&loop=1&controls=0&mute=1":"",r!==""?`&playlist=${r}`:""])},[o,l,s,r]}class Ai extends Re{constructor(t){super(),Be(this,t,Ii,Ti,Ge,{src:1,autoplay:2,playlist:3})}}(function(i){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};i.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=i.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=l.variable[1].inside,o=0;o<s.length;o++)r[s[o]]=i.languages.bash[s[o]];i.languages.shell=i.languages.bash})(Prism);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(i){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});i.languages.cpp=i.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),i.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),i.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i.languages.cpp}}}}),i.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),i.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:i.languages.extend("cpp",{})}}),i.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},i.languages.cpp["base-clause"])})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;function Oi(i){let t,n,l,s,r,o,d,v,b,c,A,p,I,y,E,$,L,N,re,oe,X,xe,ue,yt,Ve,U,Ee,vt,Et,ce,St,Y,Se,kt,wt,pe,Tt,K,ke,It,At,we,Ot,Me,Fe,Je,fe,Pt,ze,q,Te,Lt,Nt,de,Dt,W,Ie,Ht,$t,Ae,Ct,Ue,me,Rt,qe,_e,Bt,je,Z,Xe,Q,Ye,ee,Yn=`<code class="language-c"><span class="token class-name">uint8_t</span> test <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>main<span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    test<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Ke,C,Gt,Oe,xt,Vt,Pe,Mt,Ft,Le,Jt,zt,Ne,Ut,qt,We,te,Ze,ne,Qe,ie,Kn=`<code class="language-bash"><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">"test"</span></code>`,et,ge,jt,tt,he,Xt,nt,F,Yt,it,be,Kt,lt,J,Wt,st,ye,Zt,at,le,rt,ve,Qt,ot,se,ut,ct,pt,ae,ft;X=new Ai({props:{src:"https://www.youtube.com/embed/Yf2NzRww4Mk"}}),Z=new Xn({}),Q=new Mn({}),te=new Xn({}),ne=new Mn({});function Wn(e){i[3](e)}let rn={lineNumbers:!0,language:"js"};i[0]!==void 0&&(rn.code=i[0]),F=new xn({props:rn}),j.push(()=>Bn(F,"code",Wn));function Zn(e){i[4](e)}let on={lineNumbers:!0,language:"json"};return i[1]!==void 0&&(on.code=i[1]),J=new xn({props:on}),j.push(()=>Bn(J,"code",Zn)),le=new Vn({props:{geometry:"https://cdn.bojit.org/files/glb/BOJIT_V3.glb",aspect:"16:10"}}),se=new Vn({props:{geometry:"https://cdn.bojit.org/files/glb/kinectIP.glb"}}),ae=new Si({props:{tiles:[...i[2]]}}),{c(){t=S(),n=_("h1"),l=w("Title of Article"),s=S(),r=_("p"),o=w("This is a basic demo of using "),d=_("code"),v=w("Svelte"),b=w(" components in markdown. Links look like "),c=_("a"),A=w("this"),p=w(":"),I=S(),y=_("h2"),E=w("Standard Markdown stuff"),$=S(),L=_("p"),N=_("img"),oe=S(),R(X.$$.fragment),xe=S(),ue=_("h4"),yt=w("Heading 4"),Ve=S(),U=_("ul"),Ee=_("li"),vt=w("Ordered List"),Et=S(),ce=_("li"),St=w("Test"),Y=_("ol"),Se=_("li"),kt=w("Nested"),wt=S(),pe=_("li"),Tt=w("List"),K=_("ol"),ke=_("li"),It=w("Test"),At=S(),we=_("li"),Ot=w("TEST"),Me=S(),Fe=_("hr"),Je=S(),fe=_("h5"),Pt=w("Heading 5"),ze=S(),q=_("ol"),Te=_("li"),Lt=w("Ordered"),Nt=S(),de=_("li"),Dt=w("List"),W=_("ul"),Ie=_("li"),Ht=w("Nested"),$t=S(),Ae=_("li"),Ct=w("Unordered"),Ue=S(),me=_("h2"),Rt=w("Syntax highlighting"),qe=S(),_e=_("p"),Bt=w("Standard github-style syntax highlighing works: there are a couple of modifier components that are used to add line numbers and a copy button:"),je=S(),R(Z.$$.fragment),Xe=S(),R(Q.$$.fragment),Ye=S(),ee=_("pre"),Ke=S(),C=_("p"),Gt=w("This uses "),Oe=_("code"),xt=w("PrismJS"),Vt=w(" under the hood. All language components except "),Pe=_("code"),Mt=w("html"),Ft=w(", "),Le=_("code"),Jt=w("css"),zt=w(" and "),Ne=_("code"),Ut=w("js"),qt=w(" have to be included manually."),We=S(),R(te.$$.fragment),Ze=S(),R(ne.$$.fragment),Qe=S(),ie=_("pre"),et=S(),ge=_("h2"),jt=w("Special blocks"),tt=S(),he=_("p"),Xt=w("Below is an interactive JS Editor:"),nt=S(),R(F.$$.fragment),it=S(),be=_("p"),Kt=w("Other languages are supported too!"),lt=S(),R(J.$$.fragment),st=S(),ye=_("p"),Zt=w("Here is an embedded CAD model."),at=S(),R(le.$$.fragment),rt=S(),ve=_("p"),Qt=w("And another:"),ot=S(),R(se.$$.fragment),ut=S(),ct=_("hr"),pt=S(),R(ae.$$.fragment),this.h()},l(e){ti('[data-svelte="svelte-8t5c85"]',document.head).forEach(a),t=k(e),n=g(e,"H1",{});var De=h(n);l=T(De,"Title of Article"),De.forEach(a),s=k(e),r=g(e,"P",{});var z=h(r);o=T(z,"This is a basic demo of using "),d=g(z,"CODE",{});var un=h(d);v=T(un,"Svelte"),un.forEach(a),b=T(z," components in markdown. Links look like "),c=g(z,"A",{href:!0,rel:!0});var cn=h(c);A=T(cn,"this"),cn.forEach(a),p=T(z,":"),z.forEach(a),I=k(e),y=g(e,"H2",{});var pn=h(y);E=T(pn,"Standard Markdown stuff"),pn.forEach(a),$=k(e),L=g(e,"P",{});var fn=h(L);N=g(fn,"IMG",{src:!0,alt:!0}),fn.forEach(a),oe=k(e),B(X.$$.fragment,e),xe=k(e),ue=g(e,"H4",{});var dn=h(ue);yt=T(dn,"Heading 4"),dn.forEach(a),Ve=k(e),U=g(e,"UL",{});var dt=h(U);Ee=g(dt,"LI",{});var mn=h(Ee);vt=T(mn,"Ordered List"),mn.forEach(a),Et=k(dt),ce=g(dt,"LI",{});var en=h(ce);St=T(en,"Test"),Y=g(en,"OL",{});var mt=h(Y);Se=g(mt,"LI",{});var _n=h(Se);kt=T(_n,"Nested"),_n.forEach(a),wt=k(mt),pe=g(mt,"LI",{});var tn=h(pe);Tt=T(tn,"List"),K=g(tn,"OL",{});var _t=h(K);ke=g(_t,"LI",{});var gn=h(ke);It=T(gn,"Test"),gn.forEach(a),At=k(_t),we=g(_t,"LI",{});var hn=h(we);Ot=T(hn,"TEST"),hn.forEach(a),_t.forEach(a),tn.forEach(a),mt.forEach(a),en.forEach(a),dt.forEach(a),Me=k(e),Fe=g(e,"HR",{}),Je=k(e),fe=g(e,"H5",{});var bn=h(fe);Pt=T(bn,"Heading 5"),bn.forEach(a),ze=k(e),q=g(e,"OL",{});var gt=h(q);Te=g(gt,"LI",{});var yn=h(Te);Lt=T(yn,"Ordered"),yn.forEach(a),Nt=k(gt),de=g(gt,"LI",{});var nn=h(de);Dt=T(nn,"List"),W=g(nn,"UL",{});var ht=h(W);Ie=g(ht,"LI",{});var vn=h(Ie);Ht=T(vn,"Nested"),vn.forEach(a),$t=k(ht),Ae=g(ht,"LI",{});var En=h(Ae);Ct=T(En,"Unordered"),En.forEach(a),ht.forEach(a),nn.forEach(a),gt.forEach(a),Ue=k(e),me=g(e,"H2",{});var Sn=h(me);Rt=T(Sn,"Syntax highlighting"),Sn.forEach(a),qe=k(e),_e=g(e,"P",{});var kn=h(_e);Bt=T(kn,"Standard github-style syntax highlighing works: there are a couple of modifier components that are used to add line numbers and a copy button:"),kn.forEach(a),je=k(e),B(Z.$$.fragment,e),Xe=k(e),B(Q.$$.fragment,e),Ye=k(e),ee=g(e,"PRE",{class:!0});var Qn=h(ee);Qn.forEach(a),Ke=k(e),C=g(e,"P",{});var V=h(C);Gt=T(V,"This uses "),Oe=g(V,"CODE",{});var wn=h(Oe);xt=T(wn,"PrismJS"),wn.forEach(a),Vt=T(V," under the hood. All language components except "),Pe=g(V,"CODE",{});var Tn=h(Pe);Mt=T(Tn,"html"),Tn.forEach(a),Ft=T(V,", "),Le=g(V,"CODE",{});var In=h(Le);Jt=T(In,"css"),In.forEach(a),zt=T(V," and "),Ne=g(V,"CODE",{});var An=h(Ne);Ut=T(An,"js"),An.forEach(a),qt=T(V," have to be included manually."),V.forEach(a),We=k(e),B(te.$$.fragment,e),Ze=k(e),B(ne.$$.fragment,e),Qe=k(e),ie=g(e,"PRE",{class:!0});var ei=h(ie);ei.forEach(a),et=k(e),ge=g(e,"H2",{});var On=h(ge);jt=T(On,"Special blocks"),On.forEach(a),tt=k(e),he=g(e,"P",{});var Pn=h(he);Xt=T(Pn,"Below is an interactive JS Editor:"),Pn.forEach(a),nt=k(e),B(F.$$.fragment,e),it=k(e),be=g(e,"P",{});var Ln=h(be);Kt=T(Ln,"Other languages are supported too!"),Ln.forEach(a),lt=k(e),B(J.$$.fragment,e),st=k(e),ye=g(e,"P",{});var Nn=h(ye);Zt=T(Nn,"Here is an embedded CAD model."),Nn.forEach(a),at=k(e),B(le.$$.fragment,e),rt=k(e),ve=g(e,"P",{});var Dn=h(ve);Qt=T(Dn,"And another:"),Dn.forEach(a),ot=k(e),B(se.$$.fragment,e),ut=k(e),ct=g(e,"HR",{}),pt=k(e),B(ae.$$.fragment,e),this.h()},h(){document.title="MDSVex Demo",O(c,"href","https://github.com"),O(c,"rel","nofollow"),Ce(N.src,re=H+"/posts/BOJIT_V3-Neck_Laminations.JPG")||O(N,"src",re),O(N,"alt","BOJIT_V3-Neck_Laminations.JPG"),O(ee,"class","language-c"),O(ie,"class","language-bash")},m(e,f){m(e,t,f),m(e,n,f),u(n,l),m(e,s,f),m(e,r,f),u(r,o),u(r,d),u(d,v),u(r,b),u(r,c),u(c,A),u(r,p),m(e,I,f),m(e,y,f),u(y,E),m(e,$,f),m(e,L,f),u(L,N),m(e,oe,f),G(X,e,f),m(e,xe,f),m(e,ue,f),u(ue,yt),m(e,Ve,f),m(e,U,f),u(U,Ee),u(Ee,vt),u(U,Et),u(U,ce),u(ce,St),u(ce,Y),u(Y,Se),u(Se,kt),u(Y,wt),u(Y,pe),u(pe,Tt),u(pe,K),u(K,ke),u(ke,It),u(K,At),u(K,we),u(we,Ot),m(e,Me,f),m(e,Fe,f),m(e,Je,f),m(e,fe,f),u(fe,Pt),m(e,ze,f),m(e,q,f),u(q,Te),u(Te,Lt),u(q,Nt),u(q,de),u(de,Dt),u(de,W),u(W,Ie),u(Ie,Ht),u(W,$t),u(W,Ae),u(Ae,Ct),m(e,Ue,f),m(e,me,f),u(me,Rt),m(e,qe,f),m(e,_e,f),u(_e,Bt),m(e,je,f),G(Z,e,f),m(e,Xe,f),G(Q,e,f),m(e,Ye,f),m(e,ee,f),ee.innerHTML=Yn,m(e,Ke,f),m(e,C,f),u(C,Gt),u(C,Oe),u(Oe,xt),u(C,Vt),u(C,Pe),u(Pe,Mt),u(C,Ft),u(C,Le),u(Le,Jt),u(C,zt),u(C,Ne),u(Ne,Ut),u(C,qt),m(e,We,f),G(te,e,f),m(e,Ze,f),G(ne,e,f),m(e,Qe,f),m(e,ie,f),ie.innerHTML=Kn,m(e,et,f),m(e,ge,f),u(ge,jt),m(e,tt,f),m(e,he,f),u(he,Xt),m(e,nt,f),G(F,e,f),m(e,it,f),m(e,be,f),u(be,Kt),m(e,lt,f),G(J,e,f),m(e,st,f),m(e,ye,f),u(ye,Zt),m(e,at,f),G(le,e,f),m(e,rt,f),m(e,ve,f),u(ve,Qt),m(e,ot,f),G(se,e,f),m(e,ut,f),m(e,ct,f),m(e,pt,f),G(ae,e,f),ft=!0},p(e,[f]){const De={};!Yt&&f&1&&(Yt=!0,De.code=e[0],Gn(()=>Yt=!1)),F.$set(De);const z={};!Wt&&f&2&&(Wt=!0,z.code=e[1],Gn(()=>Wt=!1)),J.$set(z)},i(e){ft||(P(X.$$.fragment,e),P(Z.$$.fragment,e),P(Q.$$.fragment,e),P(te.$$.fragment,e),P(ne.$$.fragment,e),P(F.$$.fragment,e),P(J.$$.fragment,e),P(le.$$.fragment,e),P(se.$$.fragment,e),P(ae.$$.fragment,e),ft=!0)},o(e){D(X.$$.fragment,e),D(Z.$$.fragment,e),D(Q.$$.fragment,e),D(te.$$.fragment,e),D(ne.$$.fragment,e),D(F.$$.fragment,e),D(J.$$.fragment,e),D(le.$$.fragment,e),D(se.$$.fragment,e),D(ae.$$.fragment,e),ft=!1},d(e){e&&a(t),e&&a(n),e&&a(s),e&&a(r),e&&a(I),e&&a(y),e&&a($),e&&a(L),e&&a(oe),x(X,e),e&&a(xe),e&&a(ue),e&&a(Ve),e&&a(U),e&&a(Me),e&&a(Fe),e&&a(Je),e&&a(fe),e&&a(ze),e&&a(q),e&&a(Ue),e&&a(me),e&&a(qe),e&&a(_e),e&&a(je),x(Z,e),e&&a(Xe),x(Q,e),e&&a(Ye),e&&a(ee),e&&a(Ke),e&&a(C),e&&a(We),x(te,e),e&&a(Ze),x(ne,e),e&&a(Qe),e&&a(ie),e&&a(et),e&&a(ge),e&&a(tt),e&&a(he),e&&a(nt),x(F,e),e&&a(it),e&&a(be),e&&a(lt),x(J,e),e&&a(st),e&&a(ye),e&&a(at),x(le,e),e&&a(rt),e&&a(ve),e&&a(ot),x(se,e),e&&a(ut),e&&a(ct),e&&a(pt),x(ae,e)}}}const H="https://cdn.bojit.org/img";function Pi(i,t,n){let l=`let x = {
	
}`,s=`{
	
}`,r=[{type:"image",caption:"Neck Carving Through Carbon Fibre",image:H+"/posts/BOJIT_V3-Gallery_1.JPG"},{type:"image",caption:"Binding Glue-Up",image:H+"/posts/BOJIT_V3-Gallery_2.JPG"},{type:"image",caption:"Fretboard Pinning",image:H+"/posts/BOJIT_V3-Gallery_3.JPG"},{type:"image",caption:"Hardware Fitting",image:H+"/posts/BOJIT_V3-Gallery_4.JPG"},{type:"image",caption:"Neck Blank Levelling",image:H+"/posts/BOJIT_V3-Gallery_5.JPG"},{type:"image",caption:'F-Hole "Thinning"',image:H+"/posts/BOJIT_V3-Gallery_6.JPG"},{type:"image",caption:"Old-Fashioned Resawing!",image:H+"/posts/BOJIT_V3-Gallery_7.JPG"},{type:"image",caption:"Bookmatched Top",image:H+"/posts/BOJIT_V3-Gallery_8.JPG"},{type:"image",caption:"Neck Pocket Routing",image:H+"/posts/BOJIT_V3-Gallery_9.JPG"},{type:"image",caption:"Setting Neck Joint",image:H+"/posts/BOJIT_V3-Gallery_10.JPG"},{type:"image",caption:"My Workshop!",image:H+"/posts/BOJIT_V3-Gallery_11.JPG"},{type:"image",caption:"Finished Build",image:H+"/posts/BOJIT_V3-Gallery_12.JPG"},{type:"image",caption:"Headstock Design",image:H+"/posts/BOJIT_V3-Gallery_13.JPG"},{type:"image",caption:"Back of Headstock",image:H+"/posts/BOJIT_V3-Gallery_14.JPG"}];function o(v){l=v,n(0,l)}function d(v){s=v,n(1,s)}return[l,s,r,o,d]}class Gi extends Re{constructor(t){super(),Be(this,t,Pi,Oi,Ge,{})}}export{Gi as default};
