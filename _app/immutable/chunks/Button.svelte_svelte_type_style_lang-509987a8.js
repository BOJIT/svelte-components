const u=["white","black","transparent"];function i(r,e,t,n){return u.includes(e)?`${r}-${e}`:`${r}-${e}-${t||n} `}function h(r,e=500){return{bg:t=>i("bg",r,t,e),border:t=>i("border",r,t,e),txt:t=>i("text",r,t,e),caret:t=>i("caret",r,t,e)}}class p{constructor(e,t){this.defaults=(typeof e=="function"?e(t):e)||t,this.classes=this.defaults}flush(){return this.classes=this.defaults,this}extend(...e){return this}get(){return this.classes}replace(e,t=!0){return t&&e&&(this.classes=Object.keys(e).reduce((n,s)=>n.replace(new RegExp(s,"g"),e[s]),this.classes)),this}remove(e,t=!0){return t&&e&&(this.classes=e.split(" ").reduce((n,s)=>n.replace(new RegExp(s,"g"),""),this.classes)),this}add(e,t=!0,n){if(!t||!e)return this;switch(typeof e){case"string":default:return this.classes+=` ${e} `,this;case"function":return this.classes+=` ${e(n||this.classes)} `,this}}}const o=["class","add","remove","replace","value"];function f(r,e){const t=[...r,...o];return Object.keys(e).reduce((n,s)=>s.includes("$$")||s.includes("Class")||t.includes(s)?n:{...n,[s]:e[s]},{})}function d(r,e){return function(t){const n=t.currentTarget,s=document.createElement("span"),l=Math.max(n.clientWidth,n.clientHeight),c=()=>{s.remove(),s.removeEventListener("animationend",c)};s.addEventListener("animationend",c),s.style.width=s.style.height=`${l}px`;const a=n.getBoundingClientRect();e?s.classList.add("absolute","top-0","left-0","ripple-centered",`bg-${r}-transDark`):(s.style.left=`${t.clientX-a.left-l/2}px`,s.style.top=`${t.clientY-a.top-l/2}px`,s.classList.add("ripple-normal",`bg-${r}-trans`)),s.classList.add("ripple"),n.appendChild(s)}}function g(r="primary",e=!1){return function(t){const n=d(r,e);return t.addEventListener("mousedown",n),{onDestroy:()=>t.removeEventListener("mousedown",n)}}}export{p as C,f,g as r,h as u};
