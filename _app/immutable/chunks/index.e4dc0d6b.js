import{am as q,an as l}from"./index.33cc678e.js";function d(t){const n=t-1;return n*n*n+1}function C(t){return t*t}function S(t){return-t*(t-2)}function b(t,{delay:n=0,duration:s=400,easing:a=q}={}){const c=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:a,css:r=>`opacity: ${r*c}`}}function O(t,{delay:n=0,duration:s=400,easing:a=d,x:c=0,y:r=0,opacity:e=0}={}){const o=getComputedStyle(t),i=+o.opacity,f=o.transform==="none"?"":o.transform,y=i*(1-e),[m,u]=l(c),[$,g]=l(r);return{delay:n,duration:s,easing:a,css:(p,_)=>`
			transform: ${f} translate(${(1-p)*m}${u}, ${(1-p)*$}${g});
			opacity: ${i-y*_}`}}function U(t,{delay:n=0,duration:s=400,easing:a=d,start:c=0,opacity:r=0}={}){const e=getComputedStyle(t),o=+e.opacity,i=e.transform==="none"?"":e.transform,f=1-c,y=o*(1-r);return{delay:n,duration:s,easing:a,css:(m,u)=>`
			transform: ${i} scale(${1-f*u});
			opacity: ${o-y*u}
		`}}export{S as a,O as b,d as c,b as f,C as q,U as s};
