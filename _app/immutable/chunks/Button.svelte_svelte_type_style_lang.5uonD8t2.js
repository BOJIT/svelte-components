import{a as st,t as ot}from"./index.7yMu5dm2.js";import{R as ft}from"./scheduler.FdWkyacO.js";import{w as P,d as ht}from"./index.2ub-2Bxr.js";function re(t){return t?.length!==void 0?t:Array.from(t)}function ut(t,r){ot(t,1,1,()=>{r.delete(t.key)})}function ne(t,r){t.f(),ut(t,r)}function ae(t,r,e,n,a,i,o,f,h,l,w,g){let k=t.length,A=i.length,x=k;const O={};for(;x--;)O[t[x].key]=x;const $=[],D=new Map,j=new Map,G=[];for(x=A;x--;){const c=g(a,i,x),v=e(c);let _=o.get(v);_?n&&G.push(()=>_.p(c,r)):(_=l(v,c),_.c()),D.set(v,$[x]=_),v in O&&j.set(v,Math.abs(x-O[v]))}const z=new Set,V=new Set;function B(c){st(c,1),c.m(f,w),o.set(c.key,c),w=c.first,A--}for(;k&&A;){const c=$[A-1],v=t[k-1],_=c.key,F=v.key;c===v?(w=c.first,k--,A--):D.has(F)?!o.has(_)||z.has(_)?B(c):V.has(F)?k--:j.get(_)>j.get(F)?(V.add(_),B(c)):(z.add(F),k--):(h(v,o),k--)}for(;k--;){const c=t[k];D.has(c.key)||h(c,o)}for(;A;)B($[A-1]);return ft(G),$}function ie(t,r){const e={},n={},a={$$scope:1};let i=t.length;for(;i--;){const o=t[i],f=r[i];if(f){for(const h in o)h in f||(n[h]=1);for(const h in f)a[h]||(e[h]=f[h],a[h]=1);t[i]=f}else for(const h in o)a[h]=1}for(const o in n)o in e||(e[o]=void 0);return e}function se(t){return typeof t=="object"&&t!==null?t:{}}let T;function ct(){if(window.matchMedia){if(window.matchMedia("(prefers-color-scheme: dark)").matches)return!0}else return!1}function lt(t=!1,r="mode-dark"){return typeof window>"u"?P(t):(T||(T=P(t||ct())),{subscribe:T.subscribe,set:e=>{r.split(" ").forEach(n=>{e?document.body.classList.add(n):document.body.classList.remove(n)}),T.set(e)}})}function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},C(t)}var dt=/^\s+/,gt=/\s+$/;function s(t,r){if(t=t||"",r=r||{},t instanceof s)return t;if(!(this instanceof s))return new s(t,r);var e=bt(t);this._originalInput=t,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||e.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=e.ok}s.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(r.r*299+r.g*587+r.b*114)/1e3},getLuminance:function(){var r=this.toRgb(),e,n,a,i,o,f;return e=r.r/255,n=r.g/255,a=r.b/255,e<=.03928?i=e/12.92:i=Math.pow((e+.055)/1.055,2.4),n<=.03928?o=n/12.92:o=Math.pow((n+.055)/1.055,2.4),a<=.03928?f=a/12.92:f=Math.pow((a+.055)/1.055,2.4),.2126*i+.7152*o+.0722*f},setAlpha:function(r){return this._a=Q(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=q(this._r,this._g,this._b);return{h:r.h*360,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=q(this._r,this._g,this._b),e=Math.round(r.h*360),n=Math.round(r.s*100),a=Math.round(r.v*100);return this._a==1?"hsv("+e+", "+n+"%, "+a+"%)":"hsva("+e+", "+n+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var r=U(this._r,this._g,this._b);return{h:r.h*360,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=U(this._r,this._g,this._b),e=Math.round(r.h*360),n=Math.round(r.s*100),a=Math.round(r.l*100);return this._a==1?"hsl("+e+", "+n+"%, "+a+"%)":"hsla("+e+", "+n+"%, "+a+"%, "+this._roundA+")"},toHex:function(r){return W(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return _t(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(u(this._r,255)*100)+"%",g:Math.round(u(this._g,255)*100)+"%",b:Math.round(u(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(u(this._r,255)*100)+"%, "+Math.round(u(this._g,255)*100)+"%, "+Math.round(u(this._b,255)*100)+"%)":"rgba("+Math.round(u(this._r,255)*100)+"%, "+Math.round(u(this._g,255)*100)+"%, "+Math.round(u(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Tt[W(this._r,this._g,this._b,!0)]||!1},toFilter:function(r){var e="#"+X(this._r,this._g,this._b,this._a),n=e,a=this._gradientType?"GradientType = 1, ":"";if(r){var i=s(r);n="#"+X(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+e+",endColorstr="+n+")"},toString:function(r){var e=!!r;r=r||this._format;var n=!1,a=this._a<1&&this._a>=0,i=!e&&a&&(r==="hex"||r==="hex6"||r==="hex3"||r==="hex4"||r==="hex8"||r==="name");return i?r==="name"&&this._a===0?this.toName():this.toRgbString():(r==="rgb"&&(n=this.toRgbString()),r==="prgb"&&(n=this.toPercentageRgbString()),(r==="hex"||r==="hex6")&&(n=this.toHexString()),r==="hex3"&&(n=this.toHexString(!0)),r==="hex4"&&(n=this.toHex8String(!0)),r==="hex8"&&(n=this.toHex8String()),r==="name"&&(n=this.toName()),r==="hsl"&&(n=this.toHslString()),r==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},clone:function(){return s(this.toString())},_applyModification:function(r,e){var n=r.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Mt,arguments)},brighten:function(){return this._applyModification(xt,arguments)},darken:function(){return this._applyModification(At,arguments)},desaturate:function(){return this._applyModification(yt,arguments)},saturate:function(){return this._applyModification(wt,arguments)},greyscale:function(){return this._applyModification(kt,arguments)},spin:function(){return this._applyModification(St,arguments)},_applyCombination:function(r,e){return r.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination($t,arguments)},complement:function(){return this._applyCombination(Rt,arguments)},monochromatic:function(){return this._applyCombination(Ft,arguments)},splitcomplement:function(){return this._applyCombination(Ht,arguments)},triad:function(){return this._applyCombination(Z,[3])},tetrad:function(){return this._applyCombination(Z,[4])}};s.fromRatio=function(t,r){if(C(t)=="object"){var e={};for(var n in t)t.hasOwnProperty(n)&&(n==="a"?e[n]=t[n]:e[n]=H(t[n]));t=e}return s(t,r)};function bt(t){var r={r:0,g:0,b:0},e=1,n=null,a=null,i=null,o=!1,f=!1;return typeof t=="string"&&(t=Ct(t)),C(t)=="object"&&(M(t.r)&&M(t.g)&&M(t.b)?(r=mt(t.r,t.g,t.b),o=!0,f=String(t.r).substr(-1)==="%"?"prgb":"rgb"):M(t.h)&&M(t.s)&&M(t.v)?(n=H(t.s),a=H(t.v),r=vt(t.h,n,a),o=!0,f="hsv"):M(t.h)&&M(t.s)&&M(t.l)&&(n=H(t.s),i=H(t.l),r=pt(t.h,n,i),o=!0,f="hsl"),t.hasOwnProperty("a")&&(e=t.a)),e=Q(e),{ok:o,format:t.format||f,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:e}}function mt(t,r,e){return{r:u(t,255)*255,g:u(r,255)*255,b:u(e,255)*255}}function U(t,r,e){t=u(t,255),r=u(r,255),e=u(e,255);var n=Math.max(t,r,e),a=Math.min(t,r,e),i,o,f=(n+a)/2;if(n==a)i=o=0;else{var h=n-a;switch(o=f>.5?h/(2-n-a):h/(n+a),n){case t:i=(r-e)/h+(r<e?6:0);break;case r:i=(e-t)/h+2;break;case e:i=(t-r)/h+4;break}i/=6}return{h:i,s:o,l:f}}function pt(t,r,e){var n,a,i;t=u(t,360),r=u(r,100),e=u(e,100);function o(l,w,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?l+(w-l)*6*g:g<1/2?w:g<2/3?l+(w-l)*(2/3-g)*6:l}if(r===0)n=a=i=e;else{var f=e<.5?e*(1+r):e+r-e*r,h=2*e-f;n=o(h,f,t+1/3),a=o(h,f,t),i=o(h,f,t-1/3)}return{r:n*255,g:a*255,b:i*255}}function q(t,r,e){t=u(t,255),r=u(r,255),e=u(e,255);var n=Math.max(t,r,e),a=Math.min(t,r,e),i,o,f=n,h=n-a;if(o=n===0?0:h/n,n==a)i=0;else{switch(n){case t:i=(r-e)/h+(r<e?6:0);break;case r:i=(e-t)/h+2;break;case e:i=(t-r)/h+4;break}i/=6}return{h:i,s:o,v:f}}function vt(t,r,e){t=u(t,360)*6,r=u(r,100),e=u(e,100);var n=Math.floor(t),a=t-n,i=e*(1-r),o=e*(1-a*r),f=e*(1-(1-a)*r),h=n%6,l=[e,o,i,i,f,e][h],w=[f,e,e,o,i,i][h],g=[i,i,f,e,e,o][h];return{r:l*255,g:w*255,b:g*255}}function W(t,r,e,n){var a=[p(Math.round(t).toString(16)),p(Math.round(r).toString(16)),p(Math.round(e).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function _t(t,r,e,n,a){var i=[p(Math.round(t).toString(16)),p(Math.round(r).toString(16)),p(Math.round(e).toString(16)),p(tt(n))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function X(t,r,e,n){var a=[p(tt(n)),p(Math.round(t).toString(16)),p(Math.round(r).toString(16)),p(Math.round(e).toString(16))];return a.join("")}s.equals=function(t,r){return!t||!r?!1:s(t).toRgbString()==s(r).toRgbString()};s.random=function(){return s.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function yt(t,r){r=r===0?0:r||10;var e=s(t).toHsl();return e.s-=r/100,e.s=I(e.s),s(e)}function wt(t,r){r=r===0?0:r||10;var e=s(t).toHsl();return e.s+=r/100,e.s=I(e.s),s(e)}function kt(t){return s(t).desaturate(100)}function Mt(t,r){r=r===0?0:r||10;var e=s(t).toHsl();return e.l+=r/100,e.l=I(e.l),s(e)}function xt(t,r){r=r===0?0:r||10;var e=s(t).toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(r/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(r/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(r/100)))),s(e)}function At(t,r){r=r===0?0:r||10;var e=s(t).toHsl();return e.l-=r/100,e.l=I(e.l),s(e)}function St(t,r){var e=s(t).toHsl(),n=(e.h+r)%360;return e.h=n<0?360+n:n,s(e)}function Rt(t){var r=s(t).toHsl();return r.h=(r.h+180)%360,s(r)}function Z(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var e=s(t).toHsl(),n=[s(t)],a=360/r,i=1;i<r;i++)n.push(s({h:(e.h+i*a)%360,s:e.s,l:e.l}));return n}function Ht(t){var r=s(t).toHsl(),e=r.h;return[s(t),s({h:(e+72)%360,s:r.s,l:r.l}),s({h:(e+216)%360,s:r.s,l:r.l})]}function $t(t,r,e){r=r||6,e=e||30;var n=s(t).toHsl(),a=360/e,i=[s(t)];for(n.h=(n.h-(a*r>>1)+720)%360;--r;)n.h=(n.h+a)%360,i.push(s(n));return i}function Ft(t,r){r=r||6;for(var e=s(t).toHsv(),n=e.h,a=e.s,i=e.v,o=[],f=1/r;r--;)o.push(s({h:n,s:a,v:i})),i=(i+f)%1;return o}s.mix=function(t,r,e){e=e===0?0:e||50;var n=s(t).toRgb(),a=s(r).toRgb(),i=e/100,o={r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a};return s(o)};s.readability=function(t,r){var e=s(t),n=s(r);return(Math.max(e.getLuminance(),n.getLuminance())+.05)/(Math.min(e.getLuminance(),n.getLuminance())+.05)};s.isReadable=function(t,r,e){var n=s.readability(t,r),a,i;switch(i=!1,a=It(e),a.level+a.size){case"AAsmall":case"AAAlarge":i=n>=4.5;break;case"AAlarge":i=n>=3;break;case"AAAsmall":i=n>=7;break}return i};s.mostReadable=function(t,r,e){var n=null,a=0,i,o,f,h;e=e||{},o=e.includeFallbackColors,f=e.level,h=e.size;for(var l=0;l<r.length;l++)i=s.readability(t,r[l]),i>a&&(a=i,n=s(r[l]));return s.isReadable(t,n,{level:f,size:h})||!o?n:(e.includeFallbackColors=!1,s.mostReadable(t,["#fff","#000"],e))};var N=s.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Tt=s.hexNames=Et(N);function Et(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}function Q(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function u(t,r){Lt(t)&&(t="100%");var e=Pt(t);return t=Math.min(r,Math.max(0,parseFloat(t))),e&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function I(t){return Math.min(1,Math.max(0,t))}function b(t){return parseInt(t,16)}function Lt(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function Pt(t){return typeof t=="string"&&t.indexOf("%")!=-1}function p(t){return t.length==1?"0"+t:""+t}function H(t){return t<=1&&(t=t*100+"%"),t}function tt(t){return Math.round(parseFloat(t)*255).toString(16)}function J(t){return b(t)/255}var m=function(){var t="[-\\+]?\\d+%?",r="[-\\+]?\\d*\\.\\d+%?",e="(?:"+r+")|(?:"+t+")",n="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",a="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function M(t){return!!m.CSS_UNIT.exec(t)}function Ct(t){t=t.replace(dt,"").replace(gt,"").toLowerCase();var r=!1;if(N[t])t=N[t],r=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e;return(e=m.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=m.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=m.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=m.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=m.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=m.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=m.hex8.exec(t))?{r:b(e[1]),g:b(e[2]),b:b(e[3]),a:J(e[4]),format:r?"name":"hex8"}:(e=m.hex6.exec(t))?{r:b(e[1]),g:b(e[2]),b:b(e[3]),format:r?"name":"hex"}:(e=m.hex4.exec(t))?{r:b(e[1]+""+e[1]),g:b(e[2]+""+e[2]),b:b(e[3]+""+e[3]),a:J(e[4]+""+e[4]),format:r?"name":"hex8"}:(e=m.hex3.exec(t))?{r:b(e[1]+""+e[1]),g:b(e[2]+""+e[2]),b:b(e[3]+""+e[3]),format:r?"name":"hex"}:!1}function It(t){var r,e;return t=t||{level:"AA",size:"small"},r=(t.level||"AA").toUpperCase(),e=(t.size||"small").toLowerCase(),r!=="AA"&&r!=="AAA"&&(r="AA"),e!=="small"&&e!=="large"&&(e="small"),{level:r,size:e}}function Ot(t,r){return t.b=Math.floor(t.b*r.b/255),t.g=Math.floor(t.g*r.g/255),t.r=Math.floor(t.r*r.r/255),s("rgb "+t.r+" "+t.g+" "+t.b)}const d=(t,r)=>({[r]:s(t).toHexString()}),R=s("#ffffff");function Dt(t){return{50:`var(${t}-50)`,200:`var(${t}-200)`,300:`var(${t}-300)`,400:`var(${t}-400)`,500:`var(${t}-500)`,600:`var(${t}-600)`,700:`var(${t}-700)`,800:`var(${t}-800)`,900:`var(${t}-900)`,transLight:`var(${t}-transLight)`,trans:`var(${t}-trans)`,transDark:`var(${t}-transDark)`,a100:`var(${t}-a100)`,a200:`var(${t}-a200)`,a400:`var(${t}-a400)`,a700:`var(${t}-a700)`}}function jt(t){const r=t.match(/var\((?<color>[^\)]+)/);if(r)return Dt(r.groups.color);const e=Ot(s(t).toRgb(),s(t).toRgb()),n=s(t).tetrad(),a=d(s.mix(R,t,30),"50");return{transLight:s(a[50]).toRgbString().replace(")",", 0.15)"),trans:s(a[50]).toRgbString().replace(")",", 0.7)"),transDark:s(t).toRgbString().replace(")",", 0.15)"),...d(s.mix(R,t,12),"50"),...a,...d(s.mix(R,t,50),"200"),...d(s.mix(R,t,70),"300"),...d(s.mix(R,t,85),"400"),...d(s.mix(R,t,100),"500"),...d(s.mix(e,t,87),"600"),...d(s.mix(e,t,70),"700"),...d(s.mix(e,t,54),"800"),...d(s.mix(e,t,25),"900"),...d(s.mix(e,n[4],15).saturate(80).lighten(65),"a100"),...d(s.mix(e,n[4],15).saturate(80).lighten(55),"a200"),...d(s.mix(e,n[4],15).saturate(100).lighten(45),"a400"),...d(s.mix(e,n[4],15).saturate(100).lighten(40),"a700")}}function Bt(t){return Object.keys(t).reduce((r,e)=>({...r,[e]:jt(t[e])}),{})}function et(){return typeof window<"u"?window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"}const Nt="dark",Y=lt();let y,rt=!1;const nt=P(Nt),at=P(et());typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{at.set(et())});const it=ht([nt,at],([t,r])=>{switch(t){case"light":return"light";case"dark":return"dark";case"auto":return r}});it.subscribe(t=>{switch(t){case"light":Y.set(!1);break;case"dark":Y.set(!0);break}});function Gt(t){const r=L(Bt(L(t.colours)));for(const[e,n]of Object.entries(r))S(e,n,"--color-");if(t.fonts!==void 0){const e=L(t.fonts);for(const[n,a]of Object.entries(e))S(n,a,"--font-")}if(t.swatch!==void 0)for(const[e,n]of Object.entries(t.swatch))n.forEach((a,i)=>{let o=s(a);S("swatch-base-"+i+"-"+e,a,"--color-"),S("swatch-lighter-"+i+"-"+e,o.lighten().toHexString(),"--color-"),S("swatch-darker-"+i+"-"+e,o.darken().toHexString(),"--color-"),o.getLuminance()>.179?S("swatch-text-"+i+"-"+e,"#000000","--color-"):S("swatch-text-"+i+"-"+e,"#FFFFFF","--color-")}),(y==null||n.length<y)&&(y=n.length);else y=0;rt=!0}function zt(t){if(y==null||y==0)return"";{const r=t%y;return["--color-swatch-base-light: var(--color-swatch-base-"+r+"-light)","--color-swatch-lighter-light: var(--color-swatch-lighter-"+r+"-light)","--color-swatch-darker-light: var(--color-swatch-darker-"+r+"-light)","--color-swatch-text-light: var(--color-swatch-text-"+r+"-light)","--color-swatch-base-dark: var(--color-swatch-base-"+r+"-dark)","--color-swatch-lighter-dark: var(--color-swatch-lighter-"+r+"-dark)","--color-swatch-darker-dark: var(--color-swatch-darker-"+r+"-dark)","--color-swatch-text-dark: var(--color-swatch-text-"+r+"-dark)"].join(";")}}function Vt(t){if(typeof y<"u"&&y!==0){const r=t%y;if(typeof document<"u"){const e=getComputedStyle(document.documentElement),n=K(e.getPropertyValue("--color-swatch-base-"+r+"-light")),a=K(e.getPropertyValue("--color-swatch-base-"+r+"-dark"));if(n!==null&&a!==null)return[n,a]}}return[[255,255,255],[255,255,255]]}async function Ut(t){var r=Date.now();return new Promise(e);function e(n,a){rt?n():t&&Date.now()-r>=t?a(new Error("timeout")):setTimeout(e.bind(this,n,a),30)}}function L(t){let r={};for(const e in t)if(typeof t[e]=="object"&&!Array.isArray(t[e])){const n=L(t[e]);for(const a in n)r[e+"-"+a]=n[a]}else r[e]=t[e];return r}function S(t,r,e){const n=e.concat(t.split(/(?=[A-Z])/).join("-").toLowerCase());typeof window<"u"&&document.documentElement.style.setProperty(n,r)}function K(t,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)){return r?r.map(e=>parseInt(e,16)).slice(1):null}const qt={Mode:nt,swatchColor:zt,swatchColorJS:Vt,ready:Ut,subscribe:it.subscribe,init:Gt},Wt={colours:{primary:"#557d6e",secondary:"#906e96",background:{light:"#ffffff",dark:"#212121"}},swatch:{light:["#fe4a49","#fed766","#226f54","#3e7cb1","#f17300","#1e2d2f","#826aed","#3a506b"],dark:["#ef476f","#ffd166","#06d6a0","#118ab2","#fb5607","#cbf3f0","#5c4d7d","#729ea1"]},fonts:{headings:"Gloria Hallelujah",body:"Nunito",monospace:"Syne Mono"}},Xt={colours:{primary:"#456952",secondary:"#06d6a0",background:{light:"#ffffff",dark:"#212121"}},swatch:{light:["#fe4a49","#fed766","#226f54","#3e7cb1","#f17300","#1e2d2f","#826aed","#3a506b"],dark:["#ef476f","#ffd166","#06d6a0","#118ab2","#fb5607","#cbf3f0","#5c4d7d","#729ea1"]},fonts:{headings:"comfortaa",body:"montserrat",monospace:"red hat mono"}},Zt={colours:{primary:"#20418c",secondary:"#7986cb",success:"#76b878",alert:"#faa019",background:{light:"#ffffff",dark:"#212121"}},swatch:{light:["#fe4a49","#fed766","#226f54","#3e7cb1","#f17300","#1e2d2f","#826aed","#3a506b"],dark:["#ef476f","#ffd166","#06d6a0","#118ab2","#fb5607","#cbf3f0","#5c4d7d","#729ea1"]},fonts:{headings:"comfortaa",body:"montserrat",monospace:"red hat mono"}},oe={quirky:Wt,evergreen:Xt,midnight:Zt},fe=qt.Mode,Jt=["white","black","transparent"];function E(t,r,e,n){return Jt.includes(r)?`${t}-${r}`:`${t}-${r}-${e||n} `}function he(t,r=500){return{bg:e=>E("bg",t,e,r),border:e=>E("border",t,e,r),txt:e=>E("text",t,e,r),caret:e=>E("caret",t,e,r)}}class ue{constructor(r,e){this.defaults=(typeof r=="function"?r(e):r)||e,this.classes=this.defaults}flush(){return this.classes=this.defaults,this}extend(...r){return this}get(){return this.classes}replace(r,e=!0){return e&&r&&(this.classes=Object.keys(r).reduce((n,a)=>n.replace(new RegExp(a,"g"),r[a]),this.classes)),this}remove(r,e=!0){return e&&r&&(this.classes=r.split(" ").reduce((n,a)=>n.replace(new RegExp(a,"g"),""),this.classes)),this}add(r,e=!0,n){if(!e||!r)return this;switch(typeof r){case"string":default:return this.classes+=` ${r} `,this;case"function":return this.classes+=` ${r(n||this.classes)} `,this}}}const Yt=["class","add","remove","replace","value"];function ce(t,r){const e=[...t,...Yt];return Object.keys(r).reduce((n,a)=>a.includes("$$")||a.includes("Class")||e.includes(a)?n:{...n,[a]:r[a]},{})}function Kt(t,r){return function(e){const n=e.currentTarget,a=document.createElement("span"),i=Math.max(n.clientWidth,n.clientHeight),o=()=>{a.remove(),a.removeEventListener("animationend",o)};a.addEventListener("animationend",o),a.style.width=a.style.height=`${i}px`;const f=n.getBoundingClientRect();r?a.classList.add("absolute","top-0","left-0","ripple-centered",`bg-${t}-transDark`):(a.style.left=`${e.clientX-f.left-i/2}px`,a.style.top=`${e.clientY-f.top-i/2}px`,a.classList.add("ripple-normal",`bg-${t}-trans`)),a.classList.add("ripple"),n.appendChild(a)}}function le(t="primary",r=!1){return function(e){const n=Kt(t,r);return e.addEventListener("mousedown",n),{onDestroy:()=>e.removeEventListener("mousedown",n)}}}export{ue as C,se as a,ce as b,he as c,re as e,ne as f,ie as g,fe as m,oe as p,le as r,qt as t,ae as u};
