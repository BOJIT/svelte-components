import{a3 as m}from"./index-949f6906.js";function f(t){const e=t-1;return e*e*e+1}function $(t){return t*t}function h(t){return-t*(t-2)}function x(t,{delay:e=0,duration:s=400,easing:o=m}={}){const n=+getComputedStyle(t).opacity;return{delay:e,duration:s,easing:o,css:r=>`opacity: ${r*n}`}}function L(t,{delay:e=0,duration:s=400,easing:o=f,x:n=0,y:r=0,opacity:c=0}={}){const a=getComputedStyle(t),i=+a.opacity,p=a.transform==="none"?"":a.transform,u=i*(1-c);return{delay:e,duration:s,easing:o,css:(d,l)=>`
			transform: ${p} translate(${(1-d)*n}px, ${(1-d)*r}px);
			opacity: ${i-u*l}`}}function v(t,{delay:e=0,duration:s=400,easing:o=f,start:n=0,opacity:r=0}={}){const c=getComputedStyle(t),a=+c.opacity,i=c.transform==="none"?"":c.transform,p=1-n,u=a*(1-r);return{delay:e,duration:s,easing:o,css:(d,l)=>`
			transform: ${i} scale(${1-p*l});
			opacity: ${a-u*l}
		`}}function y(t,e){return function(s){const o=s.currentTarget,n=document.createElement("span"),r=Math.max(o.clientWidth,o.clientHeight),c=()=>{n.remove(),n.removeEventListener("animationend",c)};n.addEventListener("animationend",c),n.style.width=n.style.height=`${r}px`;const a=o.getBoundingClientRect();e?n.classList.add("absolute","top-0","left-0","ripple-centered",`bg-${t}-transDark`):(n.style.left=`${s.clientX-a.left-r/2}px`,n.style.top=`${s.clientY-a.top-r/2}px`,n.classList.add("ripple-normal",`bg-${t}-trans`)),n.classList.add("ripple"),o.appendChild(n)}}function C(t="primary",e=!1){return function(s){const o=y(t,e);return s.addEventListener("mousedown",o),{onDestroy:()=>s.removeEventListener("mousedown",o)}}}export{L as a,h as b,f as c,x as f,$ as q,C as r,v as s};
