import{c as te,l as ae}from"../chunks/disclose-version.CU9s1OoD.js";import"../chunks/legacy.Be4n8mFY.js";import{p as ne,t as he,b as re,m as se,F as z,i as me,a as ie,c as D,r as P,o as be,a0 as ve,s as B,f as _e,$ as ye}from"../chunks/runtime.B_ekEDTW.js";import{a as oe,b as le,t as ue,h as Se}from"../chunks/template.BcPLOrkZ.js";import{h as V}from"../chunks/html.CCXl_-s0.js";import{s as ce}from"../chunks/attributes.D7JdqW-T.js";import{v as ke,p as Q}from"../chunks/validate.B6OXhVCf.js";import{c as ee}from"../chunks/_commonjsHelpers.CZnAS8i4.js";se();R[z]="src/lib/components/widgets/YouTube/YouTube.svelte";var we=le(ue('<div class="content-padded"><div class="aspect-ratio svelte-kndpgh"><iframe title="youtube-video" frameborder="0" class="svelte-kndpgh"></iframe></div></div>'),R[z],[[33,0,[[34,4,[[35,8]]]]]]);function R(d,b){te(new.target),ne(b,!0,R),ke(b,[],[],R);let s=Q(b,"autoplay",3,!1),u=Q(b,"playlist",3,"");const p=be(()=>[b.src,"?version=3","&modestbranding=1",s()?"&autoplay=1&loop=1&controls=0&mute=1":"",ve(u(),"",!1)?`&playlist=${u()}`:""]);var m=we(),h=D(m),i=D(h);return he(()=>ce(i,"src",me(p).join(""))),P(h),P(m),oe(d,m),re({...ae()})}ie(R);var Ae={exports:{}};(function(d){var b=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var s=function(u){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,m=0,h={},i={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof y?new y(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++m}),t.__id},clone:function t(e,a){a=a||{};var n,r;switch(i.util.type(e)){case"Object":if(r=i.util.objId(e),a[r])return a[r];n={},a[r]=n;for(var l in e)e.hasOwnProperty(l)&&(n[l]=t(e[l],a));return n;case"Array":return r=i.util.objId(e),a[r]?a[r]:(n=[],a[r]=n,e.forEach(function(c,o){n[o]=t(c,a)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=p.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(p,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var n="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(n))return!1;t=t.parentElement}return!!a}},languages:{plain:h,plaintext:h,text:h,txt:h,extend:function(t,e){var a=i.util.clone(i.languages[t]);for(var n in e)a[n]=e[n];return a},insertBefore:function(t,e,a,n){n=n||i.languages;var r=n[t],l={};for(var c in r)if(r.hasOwnProperty(c)){if(c==e)for(var o in a)a.hasOwnProperty(o)&&(l[o]=a[o]);a.hasOwnProperty(c)||(l[c]=r[c])}var f=n[t];return n[t]=l,i.languages.DFS(i.languages,function(S,x){x===f&&S!=t&&(this[S]=l)}),l},DFS:function t(e,a,n,r){r=r||{};var l=i.util.objId;for(var c in e)if(e.hasOwnProperty(c)){a.call(e,c,e[c],n||c);var o=e[c],f=i.util.type(o);f==="Object"&&!r[l(o)]?(r[l(o)]=!0,t(o,a,null,r)):f==="Array"&&!r[l(o)]&&(r[l(o)]=!0,t(o,a,c,r))}}},plugins:{},highlightAll:function(t,e){i.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var n={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),i.hooks.run("before-all-elements-highlight",n);for(var r=0,l;l=n.elements[r++];)i.highlightElement(l,e===!0,n.callback)},highlightElement:function(t,e,a){var n=i.util.getLanguage(t),r=i.languages[n];i.util.setLanguage(t,n);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(l,n);var c=t.textContent,o={element:t,language:n,grammar:r,code:c};function f(x){o.highlightedCode=x,i.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,i.hooks.run("after-highlight",o),i.hooks.run("complete",o),a&&a.call(o.element)}if(i.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){i.hooks.run("complete",o),a&&a.call(o.element);return}if(i.hooks.run("before-highlight",o),!o.grammar){f(i.util.encode(o.code));return}if(e&&u.Worker){var S=new Worker(i.filename);S.onmessage=function(x){f(x.data)},S.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else f(i.highlight(o.code,o.grammar,o.language))},highlight:function(t,e,a){var n={code:t,grammar:e,language:a};if(i.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=i.tokenize(n.code,n.grammar),i.hooks.run("after-tokenize",n),y.stringify(i.util.encode(n.tokens),n.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var n in a)e[n]=a[n];delete e.rest}var r=new I;return O(r,r.head,t),T(t,r,e,r.head,0),N(r)},hooks:{all:{},add:function(t,e){var a=i.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=i.hooks.all[t];if(!(!a||!a.length))for(var n=0,r;r=a[n++];)r(e)}},Token:y};u.Prism=i;function y(t,e,a,n){this.type=t,this.content=e,this.alias=a,this.length=(n||"").length|0}y.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(f){n+=t(f,a)}),n}var r={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(r.classes,l):r.classes.push(l)),i.hooks.run("wrap",r);var c="";for(var o in r.attributes)c+=" "+o+'="'+(r.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+c+">"+r.content+"</"+r.tag+">"};function E(t,e,a,n){t.lastIndex=e;var r=t.exec(a);if(r&&n&&r[1]){var l=r[1].length;r.index+=l,r[0]=r[0].slice(l)}return r}function T(t,e,a,n,r,l){for(var c in a)if(!(!a.hasOwnProperty(c)||!a[c])){var o=a[c];o=Array.isArray(o)?o:[o];for(var f=0;f<o.length;++f){if(l&&l.cause==c+","+f)return;var S=o[f],x=S.inside,Z=!!S.lookbehind,K=!!S.greedy,pe=S.alias;if(K&&!S.pattern.global){var de=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,de+"g")}for(var W=S.pattern||S,k=n.next,A=r;k!==e.tail&&!(l&&A>=l.reach);A+=k.value.length,k=k.next){var $=k.value;if(e.length>t.length)return;if(!($ instanceof y)){var C=1,w;if(K){if(w=E(W,A,t,Z),!w||w.index>=t.length)break;var M=w.index,ge=w.index+w[0].length,F=A;for(F+=k.value.length;M>=F;)k=k.next,F+=k.value.length;if(F-=k.value.length,A=F,k.value instanceof y)continue;for(var L=k;L!==e.tail&&(F<ge||typeof L.value=="string");L=L.next)C++,F+=L.value.length;C--,$=t.slice(A,F),w.index-=A}else if(w=E(W,0,$,Z),!w)continue;var M=w.index,G=w[0],q=$.slice(0,M),J=$.slice(M+G.length),X=A+$.length;l&&X>l.reach&&(l.reach=X);var H=k.prev;q&&(H=O(e,H,q),A+=q.length),j(e,H,C);var fe=new y(c,x?i.tokenize(G,x):G,pe,G);if(k=O(e,H,fe),J&&O(e,k,J),C>1){var Y={cause:c+","+f,reach:X};T(t,e,a,k.prev,A,Y),l&&Y.reach>l.reach&&(l.reach=Y.reach)}}}}}}function I(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function O(t,e,a){var n=e.next,r={value:a,prev:e,next:n};return e.next=r,n.prev=r,t.length++,r}function j(t,e,a){for(var n=e.next,r=0;r<a&&n!==t.tail;r++)n=n.next;e.next=n,n.prev=e,t.length-=r}function N(t){for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e}if(!u.document)return u.addEventListener&&(i.disableWorkerMessageHandler||u.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,n=e.code,r=e.immediateClose;u.postMessage(i.highlight(n,i.languages[a],a)),r&&u.close()},!1)),i;var v=i.util.currentScript();v&&(i.filename=v.src,v.hasAttribute("data-manual")&&(i.manual=!0));function g(){i.manual||i.highlightAll()}if(!i.manual){var _=document.readyState;_==="loading"||_==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return i}(b);d.exports&&(d.exports=s),typeof ee<"u"&&(ee.Prism=s),s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup,s.hooks.add("wrap",function(u){u.type==="entity"&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(p,m){var h={};h["language-"+m]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[m]},h.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:h}};i["language-"+m]={pattern:/[\s\S]+/,inside:s.languages[m]};var y={};y[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:i},s.languages.insertBefore("markup","cdata",y)}}),Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(u,p){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:s.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.xml=s.languages.extend("markup",{}),s.languages.ssml=s.languages.xml,s.languages.atom=s.languages.xml,s.languages.rss=s.languages.xml,function(u){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+p.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var m=u.languages.markup;m&&(m.tag.addInlined("style","css"),m.tag.addAttribute("style","css"))}(s),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),s.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,s.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),s.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),s.languages.js=s.languages.javascript,function(){if(typeof s>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var u="Loading…",p=function(v,g){return"✖ Error "+v+" while fetching file: "+g},m="✖ Error: File does not exist or is empty",h={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",y="loading",E="loaded",T="failed",I="pre[data-src]:not(["+i+'="'+E+'"]):not(['+i+'="'+y+'"])';function O(v,g,_){var t=new XMLHttpRequest;t.open("GET",v,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?g(t.responseText):t.status>=400?_(p(t.status,t.statusText)):_(m))},t.send(null)}function j(v){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(g){var _=Number(g[1]),t=g[2],e=g[3];return t?e?[_,Number(e)]:[_,void 0]:[_,_]}}s.hooks.add("before-highlightall",function(v){v.selector+=", "+I}),s.hooks.add("before-sanity-check",function(v){var g=v.element;if(g.matches(I)){v.code="",g.setAttribute(i,y);var _=g.appendChild(document.createElement("CODE"));_.textContent=u;var t=g.getAttribute("data-src"),e=v.language;if(e==="none"){var a=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=h[a]||a}s.util.setLanguage(_,e),s.util.setLanguage(g,e);var n=s.plugins.autoloader;n&&n.loadLanguages(e),O(t,function(r){g.setAttribute(i,E);var l=j(g.getAttribute("data-range"));if(l){var c=r.split(/\r\n?|\n/g),o=l[0],f=l[1]==null?c.length:l[1];o<0&&(o+=c.length),o=Math.max(0,Math.min(o-1,c.length)),f<0&&(f+=c.length),f=Math.max(0,Math.min(f,c.length)),r=c.slice(o,f).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(o+1))}_.textContent=r,s.highlightElement(_)},function(r){g.setAttribute(i,T),_.textContent=r})}}),s.plugins.fileHighlight={highlight:function(g){for(var _=(g||document).querySelectorAll(I),t=0,e;e=_[t++];)s.highlightElement(e)}};var N=!1;s.fileHighlight=function(){N||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),N=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ae);(function(d){var b="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",s={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},u={bash:s,environment:{pattern:RegExp("\\$"+b),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+b),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};d.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+b),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:u},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:s}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:u},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:u.entity}}],environment:{pattern:RegExp("\\$?"+b),alias:"constant"},variable:u.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},s.inside=d.languages.bash;for(var p=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],m=u.variable[1].inside,h=0;h<p.length;h++)m[p[h]]=d.languages.bash[p[h]];d.languages.sh=d.languages.bash,d.languages.shell=d.languages.bash})(Prism);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(d){var b=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,s=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return b.source});d.languages.cpp=d.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return b.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:b,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),d.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return s})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),d.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:d.languages.cpp}}}}),d.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),d.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:d.languages.extend("cpp",{})}}),d.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},d.languages.cpp["base-clause"])})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;se();U[z]="src/routes/demo/markdown/+page.svx";var Ee=le(ue('<h1>Title of Article</h1> <p>This is a basic demo of using <code>Svelte</code> components in markdown. Links look like <a href="https://github.com" rel="nofollow">this</a>:</p> <h2>Standard Markdown Stuff</h2> <p>This is an image.</p> <p><img alt="BOJIT_V3-Neck_Laminations.JPG"></p> <p>This is a <em>YouTube</em> video</p> <!> <h4>Heading 4</h4> <ul><li>Ordered List</li> <li>Test <ol><li>Nested</li> <li>List <ol><li>Test</li> <li>TEST</li></ol></li></ol></li></ul> <hr> <h5>Heading 5</h5> <ol><li>Ordered</li> <li>List <ul><li>Nested</li> <li>Unordered</li></ul></li></ol> <h2>Syntax highlighting</h2> <p>Standard github-style syntax highlighing works: there are a couple of modifier components that are used to add line numbers and a copy button:</p> <pre class="language-c"><!></pre> <p>This uses <code>PrismJS</code> under the hood. All language components except <code>html</code>, <code>css</code> and <code>js</code> have to be included manually.</p> <pre class="language-bash"><!></pre>',1),U[z],[[18,0],[19,0,[[19,33],[19,93]]],[23,0],[24,0],[25,0,[[25,3]]],[29,0,[[29,13]]],[31,0],[32,0,[[33,0],[34,0,[[35,0,[[36,0],[37,0,[[38,0,[[39,0],[40,0]]]]]]]]]]],[46,0],[47,0],[48,0,[[49,0],[50,0,[[51,0,[[52,0],[53,0]]]]]]],[57,0],[58,0],[59,0],[65,0,[[65,13],[65,81],[65,100],[65,121]]],[66,0]]);function U(d,b){te(new.target),ne(b,!1,U);const s="https://cdn.bojit.org/img";var u=Ee();Se(I=>{ye.title="Demo - Markdown"});var p=B(_e(u),8),m=D(p);ce(m,"src",`${s}/posts/BOJIT_V3-Neck_Laminations.JPG`),P(p);var h=B(p,4);R(h,{src:"https://www.youtube.com/embed/Yf2NzRww4Mk"});var i=B(h,16),y=D(i);V(y,()=>`<code class="language-c"><span class="token class-name">uint8_t</span> test <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>main<span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    test<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),P(i);var E=B(i,4),T=D(E);return V(T,()=>`<code class="language-bash"><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">"test"</span></code>`),P(E),oe(d,u),re({...ae()})}ie(U);export{U as component};
