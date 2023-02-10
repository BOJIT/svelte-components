import{a3 as d}from"./index-1d05d7c3.js";function m(t){const n=t-1;return n*n*n+1}function $(t){return t*t}function g(t){return-t*(t-2)}function q(t,{delay:n=0,duration:s=400,easing:a=d}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:a,css:c=>`opacity: ${c*r}`}}function x(t,{delay:n=0,duration:s=400,easing:a=m,x:r=0,y:c=0,opacity:e=0}={}){const o=getComputedStyle(t),f=+o.opacity,i=o.transform==="none"?"":o.transform,p=f*(1-e);return{delay:n,duration:s,easing:a,css:(y,u)=>`
			transform: ${i} translate(${(1-y)*r}px, ${(1-y)*c}px);
			opacity: ${f-p*u}`}}function C(t,{delay:n=0,duration:s=400,easing:a=m,start:r=0,opacity:c=0}={}){const e=getComputedStyle(t),o=+e.opacity,f=e.transform==="none"?"":e.transform,i=1-r,p=o*(1-c);return{delay:n,duration:s,easing:a,css:(y,u)=>`
			transform: ${f} scale(${1-i*u});
			opacity: ${o-p*u}
		`}}export{x as a,g as b,m as c,q as f,$ as q,C as s};
