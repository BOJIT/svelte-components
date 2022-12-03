import{S as G,i as j,s as q,P as B,Q as W,R as H,m as P,h as f,n as _,T as V,b as x,H as Y,U as lt,B as N,V as z,ab as et,ac as pt,w as ht,x as ct,y as ft,ad as vt,f as gt,t as ut,z as dt,o as mt,ae as Lt,k as T,l as I,N as At,p as st,q as X,a as J,r as E,c as Q}from"../../../../chunks/index-e917e727.js";import"../../../../chunks/preload-helper-b21cceae.js";/* empty css                                                                     */import"../../../../chunks/ripple-30976434.js";import"../../../../chunks/Button-f5f59228.js";/* empty css                                                                        *//* empty css                                                              */import{C as Yt}from"../../../../chunks/Container-e7a59fee.js";import{t as xt}from"../../../../chunks/index-52b2abe4.js";import"../../../../chunks/SelectorFilter.svelte_svelte_type_style_lang-292cf01b.js";import{R as it}from"../../../../chunks/refresh-93349a9e.js";import"../../../../chunks/App.svelte_svelte_type_style_lang-a63ac7e0.js";import"../../../../chunks/prism-e10a34b9.js";/* empty css                                                                 *//* empty css                                                              *//* empty css                                                               *//* empty css                                                                  */class O{constructor(t,e,s,n){this.r=t,this.g=e,this.b=s,this.a=n}}class Pt{constructor(){this.scaleX=1,this.scaleY=1,this.offsetX=0,this.offsetY=0,this.loop=!1,this._vbuffer=0,this._coord=0,this.visible=!0,this.intensity=1,this.xy=new Float32Array([]),this.numPoints=0,this.color=new O(0,0,0,1),this.webglNumPoints=0}}class K extends Pt{constructor(t,e){super(),this.currentIndex=0,this.webglNumPoints=e,this.numPoints=e,this.color=t,this.xy=new Float32Array(2*this.webglNumPoints)}setX(t,e){this.xy[t*2]=e}setY(t,e){this.xy[t*2+1]=e}getX(t){return this.xy[t*2]}getY(t){return this.xy[t*2+1]}lineSpaceX(t,e){for(let s=0;s<this.numPoints;s++)this.setX(s,t+e*s)}arrangeX(){this.lineSpaceX(-1,2/this.numPoints)}constY(t){for(let e=0;e<this.numPoints;e++)this.setY(e,t)}shiftAdd(t){const e=t.length;for(let s=0;s<this.numPoints-e;s++)this.setY(s,this.getY(s+e));for(let s=0;s<e;s++)this.setY(s+this.numPoints-e,t[s])}addArrayY(t){if(this.currentIndex+t.length<=this.numPoints)for(let e=0;e<t.length;e++)this.setY(this.currentIndex,t[e]),this.currentIndex++}replaceArrayY(t){if(t.length==this.numPoints)for(let e=0;e<this.numPoints;e++)this.setY(e,t[e])}}class yt{constructor(t,e){this.debug=!1,this.addLine=this.addDataLine,e==null?this.webgl=t.getContext("webgl",{antialias:!0,transparent:!1}):(this.webgl=t.getContext("webgl",{antialias:e.antialias,transparent:e.transparent,desynchronized:e.deSync,powerPerformance:e.powerPerformance,preserveDrawing:e.preserveDrawing}),this.debug=e.debug==null?!1:e.debug),this.log("canvas type is: "+t.constructor.name),this.log(`[webgl-plot]:width=${t.width}, height=${t.height}`),this._linesData=[],this._linesAux=[],this._thickLines=[],this._surfaces=[],this.gScaleX=1,this.gScaleY=1,this.gXYratio=1,this.gOffsetX=0,this.gOffsetY=0,this.gLog10X=!1,this.gLog10Y=!1,this.webgl.clear(this.webgl.COLOR_BUFFER_BIT),this.webgl.viewport(0,0,t.width,t.height),this._progLine=this.webgl.createProgram(),this.initThinLineProgram(),this.webgl.enable(this.webgl.BLEND),this.webgl.blendFunc(this.webgl.SRC_ALPHA,this.webgl.ONE_MINUS_SRC_ALPHA)}get linesData(){return this._linesData}get linesAux(){return this._linesAux}get thickLines(){return this._thickLines}get surfaces(){return this._surfaces}_drawLines(t){const e=this.webgl;t.forEach(s=>{if(s.visible){e.useProgram(this._progLine);const n=e.getUniformLocation(this._progLine,"uscale");e.uniformMatrix2fv(n,!1,new Float32Array([s.scaleX*this.gScaleX*(this.gLog10X?1/Math.log(10):1),0,0,s.scaleY*this.gScaleY*this.gXYratio*(this.gLog10Y?1/Math.log(10):1)]));const o=e.getUniformLocation(this._progLine,"uoffset");e.uniform2fv(o,new Float32Array([s.offsetX+this.gOffsetX,s.offsetY+this.gOffsetY]));const i=e.getUniformLocation(this._progLine,"is_log");e.uniform2iv(i,new Int32Array([this.gLog10X?1:0,this.gLog10Y?1:0]));const r=e.getUniformLocation(this._progLine,"uColor");e.uniform4fv(r,[s.color.r,s.color.g,s.color.b,s.color.a]),e.bufferData(e.ARRAY_BUFFER,s.xy,e.STREAM_DRAW),e.drawArrays(s.loop?e.LINE_LOOP:e.LINE_STRIP,0,s.webglNumPoints)}})}_drawSurfaces(t){const e=this.webgl;t.forEach(s=>{if(s.visible){e.useProgram(this._progLine);const n=e.getUniformLocation(this._progLine,"uscale");e.uniformMatrix2fv(n,!1,new Float32Array([s.scaleX*this.gScaleX*(this.gLog10X?1/Math.log(10):1),0,0,s.scaleY*this.gScaleY*this.gXYratio*(this.gLog10Y?1/Math.log(10):1)]));const o=e.getUniformLocation(this._progLine,"uoffset");e.uniform2fv(o,new Float32Array([s.offsetX+this.gOffsetX,s.offsetY+this.gOffsetY]));const i=e.getUniformLocation(this._progLine,"is_log");e.uniform2iv(i,new Int32Array([this.gLog10X?1:0,this.gLog10Y?1:0]));const r=e.getUniformLocation(this._progLine,"uColor");e.uniform4fv(r,[s.color.r,s.color.g,s.color.b,s.color.a]),e.bufferData(e.ARRAY_BUFFER,s.xy,e.STREAM_DRAW),e.drawArrays(e.TRIANGLE_STRIP,0,s.webglNumPoints)}})}_drawTriangles(t){const e=this.webgl;e.bufferData(e.ARRAY_BUFFER,t.xy,e.STREAM_DRAW),e.useProgram(this._progLine);const s=e.getUniformLocation(this._progLine,"uscale");e.uniformMatrix2fv(s,!1,new Float32Array([t.scaleX*this.gScaleX*(this.gLog10X?1/Math.log(10):1),0,0,t.scaleY*this.gScaleY*this.gXYratio*(this.gLog10Y?1/Math.log(10):1)]));const n=e.getUniformLocation(this._progLine,"uoffset");e.uniform2fv(n,new Float32Array([t.offsetX+this.gOffsetX,t.offsetY+this.gOffsetY]));const o=e.getUniformLocation(this._progLine,"is_log");e.uniform2iv(o,new Int32Array([0,0]));const i=e.getUniformLocation(this._progLine,"uColor");e.uniform4fv(i,[t.color.r,t.color.g,t.color.b,t.color.a]),e.drawArrays(e.TRIANGLE_STRIP,0,t.xy.length/2)}_drawThickLines(){this._thickLines.forEach(t=>{if(t.visible){const e=Math.min(this.gScaleX,this.gScaleY);t.setActualThickness(t.getThickness()/e),t.convertToTriPoints(),this._drawTriangles(t)}})}update(){this.clear(),this.draw()}draw(){this._drawLines(this.linesData),this._drawLines(this.linesAux),this._drawThickLines(),this._drawSurfaces(this.surfaces)}clear(){this.webgl.clear(this.webgl.COLOR_BUFFER_BIT)}_addLine(t){t._vbuffer=this.webgl.createBuffer(),this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER,t._vbuffer),this.webgl.bufferData(this.webgl.ARRAY_BUFFER,t.xy,this.webgl.STREAM_DRAW),t._coord=this.webgl.getAttribLocation(this._progLine,"coordinates"),this.webgl.vertexAttribPointer(t._coord,2,this.webgl.FLOAT,!1,0,0),this.webgl.enableVertexAttribArray(t._coord)}addDataLine(t){this._addLine(t),this.linesData.push(t)}addAuxLine(t){this._addLine(t),this.linesAux.push(t)}addThickLine(t){this._addLine(t),this._thickLines.push(t)}addSurface(t){this._addLine(t),this.surfaces.push(t)}initThinLineProgram(){const t=`
      attribute vec2 coordinates;
      uniform mat2 uscale;
      uniform vec2 uoffset;
      uniform ivec2 is_log;

      void main(void) {
         float x = (is_log[0]==1) ? log(coordinates.x) : coordinates.x;
         float y = (is_log[1]==1) ? log(coordinates.y) : coordinates.y;
         vec2 line = vec2(x, y);
         gl_Position = vec4(uscale*line + uoffset, 0.0, 1.0);
      }`,e=this.webgl.createShader(this.webgl.VERTEX_SHADER);this.webgl.shaderSource(e,t),this.webgl.compileShader(e);const s=`
         precision mediump float;
         uniform highp vec4 uColor;
         void main(void) {
            gl_FragColor =  uColor;
         }`,n=this.webgl.createShader(this.webgl.FRAGMENT_SHADER);this.webgl.shaderSource(n,s),this.webgl.compileShader(n),this._progLine=this.webgl.createProgram(),this.webgl.attachShader(this._progLine,e),this.webgl.attachShader(this._progLine,n),this.webgl.linkProgram(this._progLine)}popDataLine(){this.linesData.pop()}removeAllLines(){this._linesData=[],this._linesAux=[],this._thickLines=[],this._surfaces=[]}removeDataLines(){this._linesData=[]}removeAuxLines(){this._linesAux=[]}viewport(t,e,s,n){this.webgl.viewport(t,e,s,n)}log(t){this.debug&&console.log("[webgl-plot]:"+t)}}function Rt(a){let t,e,s=[a[0],{fill:"currentColor"},{viewBox:"0 0 512 512"}],n={};for(let o=0;o<s.length;o+=1)n=B(n,s[o]);return{c(){t=W("svg"),e=W("path"),this.h()},l(o){t=H(o,"svg",{fill:!0,viewBox:!0});var i=P(t);e=H(i,"path",{fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),P(e).forEach(f),i.forEach(f),this.h()},h(){_(e,"fill","none"),_(e,"stroke","currentColor"),_(e,"stroke-linecap","round"),_(e,"stroke-linejoin","round"),_(e,"stroke-width","32"),_(e,"d","M176 96h16v320h-16zm144 0h16v320h-16z"),V(t,n)},m(o,i){x(o,t,i),Y(t,e)},p(o,[i]){V(t,n=lt(s,[i&1&&o[0],{fill:"currentColor"},{viewBox:"0 0 512 512"}]))},i:N,o:N,d(o){o&&f(t)}}}function St(a,t,e){return a.$$set=s=>{e(0,t=B(B({},t),z(s)))},t=z(t),[t]}class ot extends G{constructor(t){super(),j(this,t,St,Rt,q,{})}}function Xt(a){let t,e,s=[a[0],{fill:"currentColor"},{viewBox:"0 0 512 512"}],n={};for(let o=0;o<s.length;o+=1)n=B(n,s[o]);return{c(){t=W("svg"),e=W("path"),this.h()},l(o){t=H(o,"svg",{fill:!0,viewBox:!0});var i=P(t);e=H(i,"path",{fill:!0,stroke:!0,"stroke-miterlimit":!0,"stroke-width":!0,d:!0}),P(e).forEach(f),i.forEach(f),this.h()},h(){_(e,"fill","none"),_(e,"stroke","currentColor"),_(e,"stroke-miterlimit","10"),_(e,"stroke-width","32"),_(e,"d","M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z"),V(t,n)},m(o,i){x(o,t,i),Y(t,e)},p(o,[i]){V(t,n=lt(s,[i&1&&o[0],{fill:"currentColor"},{viewBox:"0 0 512 512"}]))},i:N,o:N,d(o){o&&f(t)}}}function Et(a,t,e){return a.$$set=s=>{e(0,t=B(B({},t),z(s)))},t=z(t),[t]}class rt extends G{constructor(t){super(),j(this,t,Et,Xt,q,{})}}function nt(a,t,e){const s=a.slice();return s[21]=t[e],s}function Ft(a){let t;return{c(){t=T("canvas"),this.h()},l(e){t=I(e,"CANVAS",{class:!0}),P(t).forEach(f),this.h()},h(){_(t,"class","svelte-1ba8xq2")},m(e,s){x(e,t,s),a[11](t)},p:N,d(e){e&&f(t),a[11](null)}}}function at(a){let t;return{c(){t=T("div"),this.h()},l(e){t=I(e,"DIV",{class:!0,style:!0}),P(t).forEach(f),this.h()},h(){_(t,"class","legend-square svelte-1ba8xq2"),st(t,"background-color",a[21])},m(e,s){x(e,t,s)},p(e,s){s&32&&st(t,"background-color",e[21])},d(e){e&&f(t)}}}function Ct(a){let t,e,s=a[5],n=[];for(let o=0;o<s.length;o+=1)n[o]=at(nt(a,s,o));return{c(){t=T("div"),e=T("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=I(o,"DIV",{slot:!0,class:!0});var i=P(t);e=I(i,"DIV",{class:!0});var r=P(e);for(let c=0;c<n.length;c+=1)n[c].l(r);r.forEach(f),i.forEach(f),this.h()},h(){_(e,"class","legend-flex svelte-1ba8xq2"),_(t,"slot","overlay"),_(t,"class","legend svelte-1ba8xq2")},m(o,i){x(o,t,i),Y(t,e);for(let r=0;r<n.length;r+=1)n[r].m(e,null)},p(o,i){if(i&32){s=o[5];let r;for(r=0;r<s.length;r+=1){const c=nt(o,s,r);n[r]?n[r].p(c,i):(n[r]=at(c),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},d(o){o&&f(t),At(n,o)}}}function Dt(a){let t,e,s;function n(i){a[13](i)}let o={wide:a[1],tray:[{icon:a[4]?rt:ot,callback:a[12]},{icon:it,callback:a[2]}],$$slots:{overlay:[Ct],default:[Ft]},$$scope:{ctx:a}};return a[0]!==void 0&&(o.aspect=a[0]),t=new Yt({props:o}),et.push(()=>pt(t,"aspect",n)),{c(){ht(t.$$.fragment)},l(i){ct(t.$$.fragment,i)},m(i,r){ft(t,i,r),s=!0},p(i,[r]){const c={};r&2&&(c.wide=i[1]),r&16&&(c.tray=[{icon:i[4]?rt:ot,callback:i[12]},{icon:it,callback:i[2]}]),r&16777256&&(c.$$scope={dirty:r,ctx:i}),!e&&r&1&&(e=!0,c.aspect=i[0],vt(()=>e=!1)),t.$set(c)},i(i){s||(gt(t.$$.fragment,i),s=!0)},o(i){ut(t.$$.fragment,i),s=!1},d(i){dt(t,i)}}}const F=.9;function Mt(a,t,e){let{demo:s=!1}=t,{aspect:n}=t,{wide:o}=t,{resX:i=100}=t,{resY:r=[-1,1]}=t,{numLines:c=1}=t;function u(l){if(v||s)return;if(l.length!==c){console.warn("Data Length Mismatch");return}const m=2*F/(r[1]-r[0]);let w=Math.abs(r[0])/(r[1]-r[0]),b=-F+2*F*w;r[0]<0&&r[1]>0||(b=-F-r[0]*m);for(let A=0;A<c;A++){const M=new Float32Array(1);M[0]=l[A]*m+b,L[A].shiftAdd(M)}}function C(){d==null||d.clear(),h(),U()}let g,v=!1,R=null,d=null,L=[],S=[];function D(){if(r[0]<0&&r[1]>0){let l=Math.abs(r[0])/(r[1]-r[0]);return-F+2*F*l}else return-F}function U(){const l=window.devicePixelRatio||1;e(3,g.width=g.clientWidth*l,g),e(3,g.height=g.clientHeight*l,g),d=new yt(g);const m=new K(new O(255,255,255,255),i);m.arrangeX(),m.constY(D()),d.addAuxLine(m);const w=new K(new O(255,255,255,255),i);for(let b=0;b<i;b++){const A=-F+2*F*b/i;w.setX(b,-1),w.setY(b,A)}d.addAuxLine(w),L.forEach(b=>{d==null||d.addLine(b)})}function h(){for(let l=0;l<c;l++){const m=xt.swatchColorJS(l);let w=1;const b=new O(m[w][0]/255,m[w][1]/255,m[w][2]/255,1);e(5,S[l]=`rgb(${m[w][0]}, ${m[w][1]}, ${m[w][2]})`,S),L[l]=new K(b,i),L[l].arrangeX(),L[l].constY(D())}L.length=c,e(5,S.length=c,S)}function p(){if(v)return;const l=.005,m=.7,w=.1,b=2*Math.PI/c;for(let A=0;A<c;A++)for(let M=0;M<L[A].numPoints;M++){const wt=Math.sin(Math.PI*M*l*Math.PI*2+A*b),bt=Math.random()-.5;L[A].setY(M,wt*m+bt*w)}}mt(()=>{h(),U(),R=new ResizeObserver(function(m){U()}),R.observe(g);function l(){s&&p(),d==null||d.update(),requestAnimationFrame(l)}requestAnimationFrame(l)}),Lt(()=>{R==null||R.unobserve(g)});function k(l){et[l?"unshift":"push"](()=>{g=l,e(3,g)})}const y=()=>{v&&C(),e(4,v=!v)};function _t(l){n=l,e(0,n)}return a.$$set=l=>{"demo"in l&&e(6,s=l.demo),"aspect"in l&&e(0,n=l.aspect),"wide"in l&&e(1,o=l.wide),"resX"in l&&e(7,i=l.resX),"resY"in l&&e(8,r=l.resY),"numLines"in l&&e(9,c=l.numLines)},[n,o,C,g,v,S,s,i,r,c,u,k,y,_t]}class Tt extends G{constructor(t){super(),j(this,t,Mt,Dt,q,{demo:6,aspect:0,wide:1,resX:7,resY:8,numLines:9,update:10,clear:2})}get update(){return this.$$.ctx[10]}get clear(){return this.$$.ctx[2]}}function It(a){let t,e,s,n,o,i,r,c,u,C,g,v,R,d,L,S,D,U={wide:!0,numLines:tt,resX:Z,resY:[a[1],$],demo:!0};return r=new Tt({props:U}),a[2](r),{c(){t=T("h1"),e=X("Plotter"),s=J(),n=T("p"),o=X("This is a line plotter component, designed for fast real-time plotting."),i=J(),ht(r.$$.fragment),c=J(),u=T("p"),C=X("Y min = "),g=X(a[1]),v=X(" , Y max = "),R=X($),d=X(", X range = "),L=X(Z),S=X(" steps.")},l(h){t=I(h,"H1",{});var p=P(t);e=E(p,"Plotter"),p.forEach(f),s=Q(h),n=I(h,"P",{});var k=P(n);o=E(k,"This is a line plotter component, designed for fast real-time plotting."),k.forEach(f),i=Q(h),ct(r.$$.fragment,h),c=Q(h),u=I(h,"P",{});var y=P(u);C=E(y,"Y min = "),g=E(y,a[1]),v=E(y," , Y max = "),R=E(y,$),d=E(y,", X range = "),L=E(y,Z),S=E(y," steps."),y.forEach(f)},m(h,p){x(h,t,p),Y(t,e),x(h,s,p),x(h,n,p),Y(n,o),x(h,i,p),ft(r,h,p),x(h,c,p),x(h,u,p),Y(u,C),Y(u,g),Y(u,v),Y(u,R),Y(u,d),Y(u,L),Y(u,S),D=!0},p(h,[p]){const k={};r.$set(k)},i(h){D||(gt(r.$$.fragment,h),D=!0)},o(h){ut(r.$$.fragment,h),D=!1},d(h){h&&f(t),h&&f(s),h&&f(n),h&&f(i),a[2](null),dt(r,h),h&&f(c),h&&f(u)}}}const Z=100,$=50,tt=8;function kt(a,t,e){let s;mt(()=>{let i=0,r=.05,c=25,u=0;setInterval(()=>{let C=Array.from({length:tt},(g,v)=>c*Math.sin(2*Math.PI*r*i+v*2*Math.PI/tt)+u);s==null||s.update(C),i++},50)});function o(i){et[i?"unshift":"push"](()=>{s=i,e(0,s)})}return[s,-50,o]}class ee extends G{constructor(t){super(),j(this,t,kt,It,q,{})}}export{ee as default};
