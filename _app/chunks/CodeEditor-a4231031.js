import{S as R,i as _,s as H,e as S,w as U,c as C,a as w,x as M,d as p,g as y,y as B,q as E,U as F,V as A,o as k,B as K,k as q,m as W,b as x,W as L,_ as P,n as z,p as G,G as V,v as X,aa as O}from"./index-755ae93b.js";import{B as J,f as I}from"./Button-45b991c0.js";function Q(){if(typeof window!="undefined"){let c=function(n,t,s){return t=t===void 0?1:t,s=s||t+1,s-t<=1?function(){if(arguments.length<=t||a.type(arguments[t])==="string")return n.apply(this,arguments);var r=arguments[t],e;for(var i in r){var l=Array.prototype.slice.call(arguments);l.splice(t,1,i,r[i]),e=n.apply(this,l)}return e}:c(c(n,t+1,s),t,s-1)},h=function(n,t,s){var r=v(s);if(r==="string"){var e=Object.getOwnPropertyDescriptor(t,s);e&&(!e.writable||!e.configurable||!e.enumerable||e.get||e.set)?(delete n[s],Object.defineProperty(n,s,e)):n[s]=t[s]}else if(r==="array")s.forEach(function(l){l in t&&h(n,t,l)});else for(var i in t)s&&(r==="regexp"&&!s.test(i)||r==="function"&&!s.call(t,i))||h(n,t,i);return n},v=function(n){if(n===null)return"null";if(n===void 0)return"undefined";var t=(Object.prototype.toString.call(n).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase();return t=="number"&&isNaN(n)?"nan":t};var a=self.Bliss=h(function(n,t){return arguments.length==2&&!t||!n?null:a.type(n)==="string"?(t||document).querySelector(n):n||null},self.Bliss);h(a,{extend:h,overload:c,type:v,property:a.property||"_",listeners:self.WeakMap?new WeakMap:new Map,original:{addEventListener:(self.EventTarget||Node).prototype.addEventListener,removeEventListener:(self.EventTarget||Node).prototype.removeEventListener},sources:{},noop:function(){},$:function(n,t){return n instanceof Node||n instanceof Window?[n]:arguments.length==2&&!t?[]:Array.prototype.slice.call(typeof n=="string"?(t||document).querySelectorAll(n):n||[])},defined:function(){for(var n=0;n<arguments.length;n++)if(arguments[n]!==void 0)return arguments[n]},create:function(n,t){return n instanceof Node?a.set(n,t):(arguments.length===1&&(a.type(n)==="string"?t={}:(t=n,n=t.tag,t=a.extend({},t,function(s){return s!=="tag"}))),a.set(document.createElement(n||"div"),t))},each:function(n,t,s){s=s||{};for(var r in n)s[r]=t.call(n,r,n[r]);return s},ready:function(n,t,s){if(typeof n=="function"&&!t&&(t=n,n=void 0),n=n||document,t&&(n.readyState!=="loading"?t():a.once(n,"DOMContentLoaded",function(){t()})),!s)return new Promise(function(r){a.ready(n,r,!0)})},Class:function(n){var t=["constructor","extends","abstract","static"].concat(Object.keys(a.classProps)),s=n.hasOwnProperty("constructor")?n.constructor:a.noop,r;arguments.length==2?(r=arguments[0],n=arguments[1]):(r=function(){if(this.constructor.__abstract&&this.constructor===r)throw new Error("Abstract classes cannot be directly instantiated.");r.super&&r.super.apply(this,arguments),s.apply(this,arguments)},r.super=n.extends||null,r.prototype=a.extend(Object.create(r.super?r.super.prototype:Object),{constructor:r}),r.prototype.super=r.super?r.super.prototype:null,r.__abstract=!!n.abstract);var e=function(l){return this.hasOwnProperty(l)&&t.indexOf(l)===-1};if(n.static){a.extend(r,n.static,e);for(var i in a.classProps)i in n.static&&a.classProps[i](r,n.static[i])}a.extend(r.prototype,n,e);for(var i in a.classProps)i in n&&a.classProps[i](r.prototype,n[i]);return r},classProps:{lazy:c(function(n,t,s){return Object.defineProperty(n,t,{get:function(){var r=s.call(this);return Object.defineProperty(this,t,{value:r,configurable:!0,enumerable:!0,writable:!0}),r},set:function(r){Object.defineProperty(this,t,{value:r,configurable:!0,enumerable:!0,writable:!0})},configurable:!0,enumerable:!0}),n}),live:c(function(n,t,s){return a.type(s)==="function"&&(s={set:s}),Object.defineProperty(n,t,{get:function(){var r=this["_"+t],e=s.get&&s.get.call(this,r);return e!==void 0?e:r},set:function(r){var e=this["_"+t],i=s.set&&s.set.call(this,r,e);this["_"+t]=i!==void 0?i:r},configurable:s.configurable,enumerable:s.enumerable}),n})},include:function(){var n=arguments[arguments.length-1],t=arguments.length===2?arguments[0]:!1,s=document.createElement("script");return t?Promise.resolve():new Promise(function(r,e){a.set(s,{async:!0,onload:function(){r(s),s.parentNode&&s.parentNode.removeChild(s)},onerror:function(){e(s)},src:n,inside:document.head})})},load:function n(t,s){s=s?new URL(s,location.href):location.href,t=new URL(t,s);var r=n.loading=n.loading||{};return r[t+""]?r[t+""]:/\.css$/.test(t.pathname)?r[t+""]=new Promise(function(e,i){var l=a.create("link",{href:t,rel:"stylesheet",inside:document.head,onload:function(){e(l)},onerror:function(){i(l)}})}):r[t+""]=a.include(t)},fetch:function(n,t){if(!n)throw new TypeError("URL parameter is mandatory and cannot be "+n);var s=h({url:new URL(n,location),data:"",method:"GET",headers:{},xhr:new XMLHttpRequest},t);s.method=s.method.toUpperCase(),a.hooks.run("fetch-args",s),s.method==="GET"&&s.data&&(s.url.search+=s.data),document.body.setAttribute("data-loading",s.url),s.xhr.open(s.method,s.url.href,s.async!==!1,s.user,s.password);for(var r in t)if(r==="upload")s.xhr.upload&&typeof t[r]=="object"&&a.extend(s.xhr.upload,t[r]);else if(r in s.xhr)try{s.xhr[r]=t[r]}catch(o){self.console&&console.error(o)}var e=Object.keys(s.headers).map(function(o){return o.toLowerCase()});s.method!=="GET"&&e.indexOf("content-type")===-1&&s.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");for(var i in s.headers)s.headers[i]!==void 0&&s.xhr.setRequestHeader(i,s.headers[i]);var l=new Promise(function(o,u){s.xhr.onload=function(){document.body.removeAttribute("data-loading"),s.xhr.status===0||s.xhr.status>=200&&s.xhr.status<300||s.xhr.status===304?o(s.xhr):u(a.extend(Error(s.xhr.statusText),{xhr:s.xhr,get status(){return this.xhr.status}}))},s.xhr.onerror=function(){document.body.removeAttribute("data-loading"),u(a.extend(Error("Network Error"),{xhr:s.xhr}))},s.xhr.ontimeout=function(){document.body.removeAttribute("data-loading"),u(a.extend(Error("Network Timeout"),{xhr:s.xhr}))},s.xhr.send(s.method==="GET"?null:s.data)});return l.xhr=s.xhr,l},value:function(n){var t=typeof n!="string";return a.$(arguments).slice(+t).reduce(function(s,r){return s&&s[r]},t?n:self)}}),a.Hooks=new a.Class({add:function(n,t,s){if(typeof arguments[0]!="string"){for(var n in arguments[0])this.add(n,arguments[0][n],arguments[1]);return}(Array.isArray(n)?n:[n]).forEach(function(r){this[r]=this[r]||[],t&&this[r][s?"unshift":"push"](t)},this)},run:function(n,t){this[n]=this[n]||[],this[n].forEach(function(s){s.call(t&&t.context?t.context:t,t)})}}),a.hooks=new a.Hooks,a.property,a.Element=function(n){this.subject=n,this.data={},this.bliss={}},a.Element.prototype={set:c(function(n,t){n in a.setProps?a.setProps[n].call(this,t):n in this?this[n]=t:this.setAttribute(n,t)},0),transition:function(n,t){return new Promise(function(s,r){if("transition"in this.style&&t!==0){var e=a.extend({},this.style,/^transition(Duration|Property)$/);a.style(this,{transitionDuration:(t||400)+"ms",transitionProperty:Object.keys(n).join(", ")}),a.once(this,"transitionend",function(){clearTimeout(i),a.style(this,e),s(this)});var i=setTimeout(s,t+50,this);a.style(this,n)}else a.style(this,n),s(this)}.bind(this))},fire:function(n,t){var s=document.createEvent("HTMLEvents");return s.initEvent(n,!0,!0),this.dispatchEvent(a.extend(s,t))},bind:c(function(n,t){if(arguments.length>1&&(a.type(t)==="function"||t.handleEvent)){var s=t;t=a.type(arguments[2])==="object"?arguments[2]:{capture:!!arguments[2]},t.callback=s}var r=a.listeners.get(this)||{};n.trim().split(/\s+/).forEach(function(e){if(e.indexOf(".")>-1){e=e.split(".");var i=e[1];e=e[0]}r[e]=r[e]||[],r[e].filter(function(l){return l.callback===t.callback&&l.capture==t.capture}).length===0&&r[e].push(a.extend({className:i},t)),a.original.addEventListener.call(this,e,t.callback,t)},this),a.listeners.set(this,r)},0),unbind:c(function(n,t){if(t&&(a.type(t)==="function"||t.handleEvent)){var s=t;t=arguments[2]}a.type(t)=="boolean"&&(t={capture:t}),t=t||{},t.callback=t.callback||s;var r=a.listeners.get(this);(n||"").trim().split(/\s+/).forEach(function(e){if(e.indexOf(".")>-1){e=e.split(".");var i=e[1];e=e[0]}if(!r)return e&&t.callback?a.original.removeEventListener.call(this,e,t.callback,t.capture):void 0;for(var l in r)if(!e||l===e)for(var o=0,u;u=r[l][o];o++)(!i||i===u.className)&&(!t.callback||t.callback===u.callback)&&(!!t.capture==!!u.capture||!e&&!t.callback&&t.capture===void 0)&&(r[l].splice(o,1),a.original.removeEventListener.call(this,l,u.callback,u.capture),o--)},this)},0),when:function(n,t){var s=this;return new Promise(function(r){s.addEventListener(n,function e(i){(!t||t.call(this,i))&&(this.removeEventListener(n,e),r(i))})})},toggleAttribute:function(n,t,s){arguments.length<3&&(s=t!==null),s?this.setAttribute(n,t):this.removeAttribute(n)}},a.setProps={style:function(n){for(var t in n)t in this.style?this.style[t]=n[t]:this.style.setProperty(t,n[t])},attributes:function(n){for(var t in n)this.setAttribute(t,n[t])},properties:function(n){a.extend(this,n)},events:function(n){if(arguments.length==1&&n&&n.addEventListener){var t=this;if(a.listeners){var s=a.listeners.get(n);for(var r in s)s[r].forEach(function(i){a.bind(t,r,i.callback,i.capture)})}for(var e in n)e.indexOf("on")===0&&(this[e]=n[e])}else return a.bind.apply(this,[this].concat(a.$(arguments)))},once:c(function(n,t){var s=this,r=function(){return a.unbind(s,n,r),t.apply(s,arguments)};a.bind(this,n,r,{once:!0})},0),delegate:c(function(n,t,s){a.bind(this,n,function(r){r.target.closest(t)&&s.call(this,r)})},0,2),contents:function(n){(n||n===0)&&(Array.isArray(n)?n:[n]).forEach(function(t){var s=a.type(t);/^(string|number)$/.test(s)?t=document.createTextNode(t+""):s==="object"&&(t=a.create(t)),t instanceof Node&&this.appendChild(t)},this)},inside:function(n){n&&n.appendChild(this)},before:function(n){n&&n.parentNode.insertBefore(this,n)},after:function(n){n&&n.parentNode.insertBefore(this,n.nextSibling)},start:function(n){n&&n.insertBefore(this,n.firstChild)},around:function(n){n&&n.parentNode&&a.before(this,n),this.appendChild(n)}},a.Array=function(n){this.subject=n},a.Array.prototype={all:function(n){var t=a.$(arguments).slice(1);return this[n].apply(this,t)}},a.add=c(function(n,t,s,r){s=a.extend({$:!0,element:!0,array:!0},s),a.type(t)=="function"&&(s.element&&(!(n in a.Element.prototype)||!r)&&(a.Element.prototype[n]=function(){return this.subject&&a.defined(t.apply(this.subject,arguments),this.subject)}),s.array&&(!(n in a.Array.prototype)||!r)&&(a.Array.prototype[n]=function(){var e=arguments;return this.subject.map(function(i){return i&&a.defined(t.apply(i,e),i)})}),s.$&&(a.sources[n]=a[n]=t,(s.array||s.element)&&(a[n]=function(){var e=[].slice.apply(arguments),i=e.shift(),l=s.array&&Array.isArray(i)?"Array":"Element";return a[l].prototype[n].apply({subject:i},e)})))},0),a.add(a.Array.prototype,{element:!1}),a.add(a.Element.prototype),a.add(a.setProps),a.add(a.classProps,{element:!1,array:!1});var d=document.createElement("_");a.add(a.extend({},HTMLElement.prototype,function(n){return a.type(d[n])==="function"}),null,!0)}}async function Y(){if(typeof window!="undefined"){const s=document.currentScript?new URL(document.currentScript.src):null;Q();var a=Bliss,d=Bliss.$,c=Promise.resolve();if(s){var h=s.searchParams.get("load");if(h!==null){var v=["../prism-live.css"];h&&v.push(...h.split(/,/).map(r=>/\./.test(r)?r:`prism-live-${r}.js`)),c=Promise.all(v.map(r=>a.load(r,s)))}}var n=navigator.platform.indexOf("Mac")===0?"metaKey":"ctrlKey",t=Prism.Live=class{constructor(e){this.source=e,this.sourceType=e.nodeName.toLowerCase(),this.wrapper=a.create({className:"prism-live",around:this.source}),this.sourceType==="textarea"?(this.textarea=this.source,this.code=a.create("code"),this.pre=a.create("pre",{className:this.textarea.className+" no-whitespace-normalization",contents:this.code,before:this.textarea})):(this.pre=this.source,this.pre.classList.add("no-whitespace-normalization"),this.code=a("code",this.pre),this.textarea=a.create("textarea",{className:this.pre.className,value:this.pre.textContent,after:this.pre})),t.all.set(this.textarea,this),t.all.set(this.pre,this),t.all.set(this.code,this),this.pre.classList.add("prism-live"),this.textarea.classList.add("prism-live"),this.source.classList.add("prism-live-source"),self.Incrementable&&new Incrementable(this.textarea),a.bind(this.textarea,{input:i=>this.update(),keyup:i=>{i.key=="Enter"&&(this.insert(this.currentIndent),this.syncScroll())},keydown:i=>{if(i.key=="Tab"&&!i.altKey)if(i.preventDefault(),this.tabstops&&this.tabstops.length>0)this.moveCaret(this.tabstops.shift());else if(this.hasSelection){var l=this.beforeCaret(`
`),o=i.shiftKey;this.selectionStart-=l.length;var u=t.adjustIndentation(this.selection,{relative:!0,indentation:o?-1:1});if(this.replace(u),o){var f=t.regexp.gm`^${this.indent}`,m=f.test(l);this.selectionStart+=l.length+1-(o+m)}else{var b=l.length==this.selectionStart;this.selectionStart+=l.length+1+!b}}else{var g=t.match(this.beforeCaret(),/\S*$/),T=this.expandSnippet(g);T?requestAnimationFrame(()=>a.fire(this.textarea,"input")):this.insert(this.indent)}else if(t.pairs[i.key]){var D=t.pairs[i.key];this.wrapSelection({before:i.key,after:D,outside:!0}),i.preventDefault()}else for(let N in t.shortcuts)t.checkShortcut(N,i)&&(t.shortcuts[N].call(this,i),i.preventDefault())},click:i=>{this.getLine(),this.value,this.selectionStart},"click keyup":i=>{(!i.key||i.key.lastIndexOf("Arrow")>-1)&&(this.tabstops=null)}}),this.textarea.addEventListener("scroll",this,{passive:!0}),a.bind(window,{resize:i=>this.syncStyles()}),requestAnimationFrame(()=>{this.syncStyles();var i=getComputedStyle(this.source);this.pre.style.height=this.source.style.height||i.getPropertyValue("--height"),this.pre.style.maxHeight=this.source.style.maxHeight||i.getPropertyValue("--max-height"),this.textarea.spellcheck=this.source.spellcheck||i.getPropertyValue("--spellcheck")}),this.update(),this.lang=(this.code.className.match(/lang(?:uage)?-(\w+)/i)||[,])[1],this.observer=new MutationObserver(i=>{document.activeElement!==this.textarea&&(this.textarea.value=this.pre.textContent)}),this.observe(),this.source.dispatchEvent(new CustomEvent("prism-live-init",{bubbles:!0,detail:this}))}handleEvent(e){e.type==="scroll"&&this.syncScroll()}observe(){return this.observer&&this.observer.observe(this.pre,{childList:!0,subtree:!0,characterData:!0})}unobserve(){this.observer&&(this.observer.takeRecords(),this.observer.disconnect())}expandSnippet(e){if(!e)return!1;var i=this.context;if(e in i.snippets||e in t.snippets)var l=i.snippets[e]||t.snippets[e];else if(i.snippets.custom)var l=i.snippets.custom.call(this,e);if(l){for(var o=[],u=[],f=l,m;m=t.CARET_INDICATOR.exec(f);)o.push(m.index+1),u.push(f.slice(0,m.index+m[1].length)),f=f.slice(m.index+m[0].length),t.CARET_INDICATOR.lastIndex=0;u.push(f),u=u.join(""),o.length>0&&(o[0]-=u.length),this.delete(e),this.insert(u,{matchIndentation:!0}),this.tabstops=o,this.moveCaret(this.tabstops.shift())}return!!l}get selectionStart(){return this.textarea.selectionStart}set selectionStart(e){this.textarea.selectionStart=e}get selectionEnd(){return this.textarea.selectionEnd}set selectionEnd(e){this.textarea.selectionEnd=e}get hasSelection(){return this.selectionStart!=this.selectionEnd}get selection(){return this.value.slice(this.selectionStart,this.selectionEnd)}get value(){return this.textarea.value}set value(e){this.textarea.value=e}get indent(){return t.match(this.value,/^[\t ]+/m,t.DEFAULT_INDENT)}get currentIndent(){var e=this.value.slice(0,this.selectionStart-1);return t.match(e,/^[\t ]*/mg,"",-1)}get currentLanguage(){var e=this.getNode();e=e?e.parentNode:this.code;var i=t.match(e.closest('[class*="language-"]').className,/language-(\w+)/,1);return t.aliases[i]||i}get context(){var e=this.currentLanguage;return t.languages[e]||t.languages.DEFAULT}setSelection(e,i){e&&typeof e=="object"&&(e.start||e.end)&&(i=e.end,e=e.start);let l=this.selectionStart,o=this.selectionEnd;e!==void 0&&(this.selectionStart=e),i!==void 0&&(this.selectionEnd=i),this.selectionStart!==this.selectionEnd&&(l!==this.selectionStart||o!==this.selectionEnd)&&this.textarea.dispatchEvent(new Event("select",{bubbles:!0}))}update(e){var i=this.value;/\n$/.test(this.value)&&(i+="\u200B"),!(!e&&this.code.textContent===i&&a(".token",this.code))&&(this.unobserve(),this.code.textContent=i,Prism.highlightElement(this.code),this.observe())}syncStyles(){var e=getComputedStyle(this.pre);this.textarea.style.caretColor=e.color;var i=/^(font|lineHeight)|[tT]abSize/gi;for(var l in e)e[l]&&l in this.textarea.style&&i.test(l)&&(this.wrapper.style[l]=e[l],this.textarea.style[l]=this.pre.style[l]="inherit");this.textarea.style["padding-left"]=e["padding-left"],this.update()}syncScroll(){this.pre.clientWidth===0&&this.pre.clientHeight===0||(this.pre.scrollTop=this.textarea.scrollTop,this.pre.scrollLeft=this.textarea.scrollLeft)}beforeCaretIndex(e=""){return this.value.lastIndexOf(e,this.selectionStart)}afterCaretIndex(e=""){return this.value.indexOf(e,this.selectionEnd)}beforeCaret(e=""){var i=this.beforeCaretIndex(e);return(i===-1||!e)&&(i=0),this.value.slice(i,this.selectionStart)}getLine(e=this.selectionStart){for(var i=this.value,l=`
`,o="\r",u,f,m,u=this.selectionStart;(m=i[u])&&!(m===l||m===o||!u);u--);for(var f=this.selectionStart;(m=i[f])&&!(m===l||m===o);f++);return{start:u,end:f}}afterCaret(e=""){var i=this.afterCaretIndex(e);return(i===-1||!e)&&(i=void 0),this.value.slice(this.selectionEnd,i)}setCaret(e){this.selectionStart=this.selectionEnd=e}moveCaret(e){e&&this.setCaret(this.selectionEnd+e)}insert(e,{index:i}={}){if(!!e)if(this.textarea.focus(),i===void 0)this.replace(e);else{var l=this.selectionStart,o=this.selectionEnd;this.selectionStart=this.selectionEnd=i,this.replace(e),this.setSelection(l+(i<l?e.length:0),o+(i<=o?e.length:0))}}replace(e){var i=this.hasSelection;this.insertText(e),i&&this.setSelection({start:this.selectionEnd-e.length})}set(e,{start:i,end:l}={}){var o=this.selectionStart,u=this.selectionEnd;this.setSelection(i,l),this.insertText(e),this.setSelection(o,u)}insertText(e){if(!!e){if(t.supportsExecCommand===!0)document.execCommand("insertText",!1,e);else if(t.supportsExecCommand===void 0){let i=this.value;document.execCommand("insertText",!1,e),t.supportsExecCommand=i!==this.value}return t.supportsExecCommand===!1&&(this.textarea.setRangeText(e,this.selectionStart,this.selectionEnd,"end"),requestAnimationFrame(()=>this.update())),t.supportsExecCommand}}wrap({before:e,after:i,start:l=this.selectionStart,end:o=this.selectionEnd}={}){var u=this.selectionStart,f=this.selectionEnd,m=this.value.slice(l,o);this.set(e+m+i,{start:l,end:o}),u>l&&(u+=e.length),f>l&&(f+=e.length),u>o&&(u+=i.length),f>o&&(f+=i.length),this.setSelection(u,f)}wrapSelection(e={}){var i=this.hasSelection;this.replace(e.before+this.selection+e.after),i?e.outside&&(this.selectionStart+=e.before.length,this.selectionEnd-=e.after.length):this.moveCaret(-e.after.length)}toggleComment(){var e=this.context.comments,i=this.getNode(),l=i.parentNode.closest(".token.comment");if(l){var o=this.getOffset(l),u=l.textContent;if(e.singleline&&u.indexOf(e.singleline)===0){var f=o+u.length;this.set(this.value.slice(o+e.singleline.length,f),{start:o,end:f}),this.moveCaret(-e.singleline.length)}else{e=e.multiline||e;var f=o+u.length-e[1].length;this.set(this.value.slice(o+e[0].length,f),{start:o,end:f+e[1].length})}}else this.hasSelection?(e=e.multiline||e,this.wrapSelection({before:e[0],after:e[1]})):(e=e.singleline?[e.singleline,""]:e.multiline||e,f=this.afterCaretIndex(`
`),this.wrap({before:e[0],after:e[1],start:this.beforeCaretIndex(`
`)+1,end:f<0?this.value.length:f}))}duplicateContent(){var e=this.beforeCaret(`
`),i=this.afterCaret(`
`),l=e+this.selection+i;this.insert(l,{index:this.selectionStart-e.length})}delete(e,{forward:i,pos:l}={}){var o=e=e>0?e:(e+"").length;if(l){var u=this.selectionStart;this.selectionStart=l,this.selectionEnd=l+this.selectionEnd-u}for(;o--;)document.execCommand(i?"forwardDelete":"delete");l&&(this.selectionStart=u-e,this.selectionEnd=this.selectionEnd-l+this.selectionStart)}getNode(e=this.selectionStart,i=this.code){for(var l,o=0,u=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);l=u.nextNode();)if(o+=l.data.length,o>=e)return l;return null}getOffset(e){var i=document.createRange();return i.selectNodeContents(this.code),i.setEnd(e,0),i.toString().length}static match(e,i,l,o=0){typeof l=="number"&&arguments.length===3&&(o=l,l=void 0);var u=e.match(i);return o<0&&(o=u.length+o),u?u[o]:l}static checkShortcut(e,i){return e.trim().split(/\s*\+\s*/).every(l=>{switch(l){case"Cmd":return i[n];case"Ctrl":return i.ctrlKey;case"Shift":return i.shiftKey;case"Alt":return i.altKey;default:return i.key===l}})}static registerLanguage(e,i,l=t.languages.DEFAULT){return Object.setPrototypeOf(i,l),t.languages[e]=i}static matchIndentation(e,i){e=e.replace(/\r?\n/g,"$&"+i)}static adjustIndentation(e,{indentation:i,relative:l=!0,indent:o=t.DEFAULT_INDENT}){if(!l){var u=e.match(t.regexp.gm`^(${o})+`).sort()[0];u&&e.replace(t.regexp.gm`^${u}`,"")}if(i<0)return e.replace(t.regexp.gm`^${o}`,"");if(i>0)return e.replace(/^/gm,o)}static create(e,...i){let l=t.all.get(e);return l||(l=new t(e)),l}};Object.assign(t,{all:new WeakMap,ready:c,DEFAULT_INDENT:"	",CARET_INDICATOR:/(^|[^\\])\$(\d+)/g,snippets:{test:"Snippets work!"},pairs:{"(":")","[":"]","{":"}",'"':'"',"'":"'","`":"`"},shortcuts:{"Cmd + /":function(){this.toggleComment()},"Ctrl + Shift + D":function(){this.duplicateContent()}},languages:{DEFAULT:{comments:{multiline:["/*","*/"]},snippets:{}}},aliases:(()=>{var r={},e=new WeakMap(Object.entries(Prism.languages).map(o=>o.reverse()).reverse());for(var i in Prism.languages){var l=Prism.languages[i];typeof l!="function"&&(r[i]=e.get(l))}return r})(),regexp:(()=>{var r=l=>l.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=(l,o,...u)=>{var f=o[0]+u.map((m,b)=>r(m)+o[b+1]).join("");return RegExp(f,l)},i={};return new Proxy(e.bind(t,""),{get:(l,o)=>l[o]||i[o]||(i[o]=e.bind(t,o))})})()}),t.supportsExecCommand=document.execCommand?void 0:!1,a.ready().then(()=>{d(":not(.prism-live) > textarea.prism-live, :not(.prism-live) > pre.prism-live").forEach(r=>t.create(r))})}}function j(a){let d,c,h,v;return c=new J({props:{icon:a[4],iconColor:"var(--color-gray-500)",lozenge:!0,transparent:!0}}),c.$on("click",a[7]),{c(){d=S("div"),U(c.$$.fragment)},l(n){d=C(n,"DIV",{});var t=w(d);M(c.$$.fragment,t),t.forEach(p)},m(n,t){y(n,d,t),B(c,d,null),v=!0},p(n,t){const s={};t&16&&(s.icon=n[4]),c.$set(s)},i(n){v||(E(c.$$.fragment,n),F(()=>{h||(h=A(d,I,{},!0)),h.run(1)}),v=!0)},o(n){k(c.$$.fragment,n),h||(h=A(d,I,{},!1)),h.run(0),v=!1},d(n){n&&p(d),K(c),n&&h&&h.end()}}}function Z(a){let d,c,h,v,n,t,s,r=a[5]&&j(a);return{c(){d=S("div"),r&&r.c(),c=q(),h=S("textarea"),this.h()},l(e){d=C(e,"DIV",{class:!0});var i=w(d);r&&r.l(i),i.forEach(p),c=W(e),h=C(e,"TEXTAREA",{class:!0}),w(h).forEach(p),this.h()},h(){x(d,"class","button svelte-s7n4sl"),x(h,"class",v="prism-live language-"+a[0]+" svelte-s7n4sl"),L(h,"line-numbers",a[1])},m(e,i){y(e,d,i),r&&r.m(d,null),a[11](d),y(e,c,i),y(e,h,i),a[12](h),n=!0,t||(s=[P(window,"keydown",a[6]),P(h,"input",a[8])],t=!0)},p(e,[i]){e[5]?r?(r.p(e,i),i&32&&E(r,1)):(r=j(e),r.c(),E(r,1),r.m(d,null)):r&&(z(),k(r,1,1,()=>{r=null}),G()),(!n||i&1&&v!==(v="prism-live language-"+e[0]+" svelte-s7n4sl"))&&x(h,"class",v),i&3&&L(h,"line-numbers",e[1])},i(e){n||(E(r),n=!0)},o(e){k(r),n=!1},d(e){e&&p(d),r&&r.d(),a[11](null),e&&p(c),e&&p(h),a[12](null),t=!1,V(s)}}}function $(a,d,c){let{language:h="js"}=d,{lineNumbers:v=!1}=d,{code:n=""}=d,{validationHook:t=null}=d,s,r,e="save",i=!1,l;function o(g){document.activeElement===s&&(navigator.userAgent.indexOf("Mac OS X")!=-1?g.metaKey&&g.which===83&&(u(),g.preventDefault()):g.ctrlKey&&g.which===83&&(u(),g.preventDefault()))}async function u(){if(t!==null)try{await new Promise(t),c(4,e="done")}catch{c(2,s.value=l,s);var g=new Event("input");s.dispatchEvent(g),c(9,n=s.value),c(4,e="close")}else c(4,e="done");l=s.value,setTimeout(()=>{c(5,i=!1)},500),setTimeout(()=>{c(4,e="save")},2e3)}function f(){c(5,i=!0),c(9,n=s.value)}X(async()=>{if(c(2,s.textContent=n,s),l=s.textContent,await Y(),s.previousElementSibling.nodeName==="PRE"){let g=s.parentElement;g.style.position="relative",g.appendChild(r)}});function m(g){O[g?"unshift":"push"](()=>{r=g,c(3,r)})}function b(g){O[g?"unshift":"push"](()=>{s=g,c(2,s)})}return a.$$set=g=>{"language"in g&&c(0,h=g.language),"lineNumbers"in g&&c(1,v=g.lineNumbers),"code"in g&&c(9,n=g.code),"validationHook"in g&&c(10,t=g.validationHook)},[h,v,s,r,e,i,o,u,f,n,t,m,b]}class ie extends R{constructor(d){super(),_(this,d,$,Z,H,{language:0,lineNumbers:1,code:9,validationHook:10})}}export{ie as C};
