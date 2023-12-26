import{$ as q,a5 as l}from"./scheduler.FdWkyacO.js";function $(t){const n=t-1;return n*n*n+1}function C(t){return t*t}function S(t){return-t*(t-2)}function b(t,{delay:n=0,duration:s=400,easing:a=q}={}){const c=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:a,css:r=>`opacity: ${r*c}`}}function O(t,{delay:n=0,duration:s=400,easing:a=$,x:c=0,y:r=0,opacity:e=0}={}){const o=getComputedStyle(t),i=+o.opacity,f=o.transform==="none"?"":o.transform,y=i*(1-e),[p,u]=l(c),[d,g]=l(r);return{delay:n,duration:s,easing:a,css:(m,_)=>`
			transform: ${f} translate(${(1-m)*p}${u}, ${(1-m)*d}${g});
			opacity: ${i-y*_}`}}function U(t,{delay:n=0,duration:s=400,easing:a=$,start:c=0,opacity:r=0}={}){const e=getComputedStyle(t),o=+e.opacity,i=e.transform==="none"?"":e.transform,f=1-c,y=o*(1-r);return{delay:n,duration:s,easing:a,css:(p,u)=>`
			transform: ${i} scale(${1-f*u});
			opacity: ${o-y*u}
		`}}export{S as a,O as b,$ as c,b as f,C as q,U as s};
