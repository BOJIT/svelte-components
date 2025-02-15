import{c as he,l as je}from"./DFlwrw4f.js";import{p as Ae,f as _e,b as xe,m as we,F as I,a as ke,c as Q,n as U,r as W,t as X}from"./CSs5j321.js";import{c as Ve,a as J,b as se,t as oe}from"./B_ALQZRw.js";import{i as Oe,s as Y}from"./CT1BjXXT.js";import{s as Z}from"./CCyzYQME.js";import{v as Me,p as E,b as $,r as Ne}from"./CLHzkbyc.js";import{t as ze,e as Ce,c as ee}from"./D_AFOtY5.js";var te=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,m=e=>!e||typeof e!="object"||Object.keys(e).length===0,Ee=(e,a)=>JSON.stringify(e)===JSON.stringify(a);function ie(e,a){e.forEach(function(t){Array.isArray(t)?ie(t,a):a.push(t)})}function le(e){let a=[];return ie(e,a),a}var ue=(...e)=>le(e).filter(Boolean),fe=(e,a)=>{let t={},w=Object.keys(e),k=Object.keys(a);for(let c of w)if(k.includes(c)){let g=e[c],A=a[c];Array.isArray(g)||Array.isArray(A)?t[c]=ue(A,g):typeof g=="object"&&typeof A=="object"?t[c]=fe(g,A):t[c]=A+" "+g}else t[c]=e[c];for(let c of k)w.includes(c)||(t[c]=a[c]);return t},re=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim(),Ge={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},ce=e=>e||void 0,S=(...e)=>ce(le(e).filter(Boolean).join(" ")),R=null,O={},F=!1,G=(...e)=>a=>a.twMerge?((!R||F)&&(F=!1,R=m(O)?ze:Ce({...O,extend:{theme:O.theme,classGroups:O.classGroups,conflictingClassGroupModifiers:O.conflictingClassGroupModifiers,conflictingClassGroups:O.conflictingClassGroups,...O.extend}})),ce(R(S(e)))):S(e),ne=(e,a)=>{for(let t in a)e.hasOwnProperty(t)?e[t]=S(e[t],a[t]):e[t]=a[t];return e},Se=(e,a)=>{let{extend:t=null,slots:w={},variants:k={},compoundVariants:c=[],compoundSlots:g=[],defaultVariants:A={}}=e,d={...Ge,...a},C=t!=null&&t.base?S(t.base,e==null?void 0:e.base):e==null?void 0:e.base,b=t!=null&&t.variants&&!m(t.variants)?fe(k,t.variants):k,M=t!=null&&t.defaultVariants&&!m(t.defaultVariants)?{...t.defaultVariants,...A}:A;!m(d.twMergeConfig)&&!Ee(d.twMergeConfig,O)&&(F=!0,O=d.twMergeConfig);let _=m(t==null?void 0:t.slots),y=m(w)?{}:{base:S(e==null?void 0:e.base,_&&(t==null?void 0:t.base)),...w},x=_?y:ne({...t==null?void 0:t.slots},m(y)?{base:e==null?void 0:e.base}:y),V=m(t==null?void 0:t.compoundVariants)?c:ue(t==null?void 0:t.compoundVariants,c),h=p=>{if(m(b)&&m(w)&&_)return G(C,p==null?void 0:p.class,p==null?void 0:p.className)(d);if(V&&!Array.isArray(V))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof V}`);if(g&&!Array.isArray(g))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof g}`);let pe=(r,s,n=[],i)=>{let o=n;if(typeof s=="string")o=o.concat(re(s).split(" ").map(l=>`${r}:${l}`));else if(Array.isArray(s))o=o.concat(s.reduce((l,u)=>l.concat(`${r}:${u}`),[]));else if(typeof s=="object"&&typeof i=="string"){for(let l in s)if(s.hasOwnProperty(l)&&l===i){let u=s[l];if(u&&typeof u=="string"){let f=re(u);o[i]?o[i]=o[i].concat(f.split(" ").map(v=>`${r}:${v}`)):o[i]=f.split(" ").map(v=>`${r}:${v}`)}else Array.isArray(u)&&u.length>0&&(o[i]=u.reduce((f,v)=>f.concat(`${r}:${v}`),[]))}}return o},K=(r,s=b,n=null,i=null)=>{var o;let l=s[r];if(!l||m(l))return null;let u=(o=i==null?void 0:i[r])!=null?o:p==null?void 0:p[r];if(u===null)return null;let f=te(u),v=Array.isArray(d.responsiveVariants)&&d.responsiveVariants.length>0||d.responsiveVariants===!0,N=M==null?void 0:M[r],j=[];if(typeof f=="object"&&v)for(let[B,H]of Object.entries(f)){let me=l[H];if(B==="initial"){N=H;continue}Array.isArray(d.responsiveVariants)&&!d.responsiveVariants.includes(B)||(j=pe(B,me,j,n))}let T=f!=null&&typeof f!="object"?f:te(N),P=l[T||"false"];return typeof j=="object"&&typeof n=="string"&&j[n]?ne(j,P):j.length>0?(j.push(P),n==="base"?j.join(" "):j):P},ve=()=>b?Object.keys(b).map(r=>K(r,b)):null,be=(r,s)=>{if(!b||typeof b!="object")return null;let n=new Array;for(let i in b){let o=K(i,b,r,s),l=r==="base"&&typeof o=="string"?o:o&&o[r];l&&(n[n.length]=l)}return n},L={};for(let r in p)p[r]!==void 0&&(L[r]=p[r]);let q=(r,s)=>{var n;let i=typeof(p==null?void 0:p[r])=="object"?{[r]:(n=p[r])==null?void 0:n.initial}:{};return{...M,...L,...i,...s}},D=(r=[],s)=>{let n=[];for(let{class:i,className:o,...l}of r){let u=!0;for(let[f,v]of Object.entries(l)){let N=q(f,s)[f];if(Array.isArray(v)){if(!v.includes(N)){u=!1;break}}else{let j=T=>T==null||T===!1;if(j(v)&&j(N))continue;if(N!==v){u=!1;break}}}u&&(i&&n.push(i),o&&n.push(o))}return n},ye=r=>{let s=D(V,r);if(!Array.isArray(s))return s;let n={};for(let i of s)if(typeof i=="string"&&(n.base=G(n.base,i)(d)),typeof i=="object")for(let[o,l]of Object.entries(i))n[o]=G(n[o],l)(d);return n},ge=r=>{if(g.length<1)return null;let s={};for(let{slots:n=[],class:i,className:o,...l}of g){if(!m(l)){let u=!0;for(let f of Object.keys(l)){let v=q(f,r)[f];if(v===void 0||(Array.isArray(l[f])?!l[f].includes(v):l[f]!==v)){u=!1;break}}if(!u)continue}for(let u of n)s[u]=s[u]||[],s[u].push([i,o])}return s};if(!m(w)||!_){let r={};if(typeof x=="object"&&!m(x))for(let s of Object.keys(x))r[s]=n=>{var i,o;return G(x[s],be(s,n),((i=ye(n))!=null?i:[])[s],((o=ge(n))!=null?o:[])[s],n==null?void 0:n.class,n==null?void 0:n.className)(d)};return r}return G(C,ve(),D(V),p==null?void 0:p.class,p==null?void 0:p.className)(d)},de=()=>{if(!(!b||typeof b!="object"))return Object.keys(b)};return h.variantKeys=de(),h.extend=t,h.base=C,h.slots=x,h.variants=b,h.defaultVariants=M,h.compoundSlots=g,h.compoundVariants=V,h};we();z[I]="src/lib/components/ui/button/button.svelte";const ae=Se({base:"ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",alert:"bg-alert text-alert-foreground hover:bg-alert/90",success:"bg-success text-success-foreground hover:bg-success/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});var Te=se(oe("<a><!></a>"),z[I],[[59,4]]),Pe=se(oe("<button><!></button>"),z[I],[[68,4]]);function z(e,a){he(new.target),Ae(a,!0,z),Me(a,["ref"],[],z);let t=E(a,"variant",3,"default"),w=E(a,"size",3,"default"),k=E(a,"ref",15,null),c=E(a,"href",3,void 0),g=E(a,"type",3,"button"),A=Ne(a,["$$slots","$$events","$$legacy","class","variant","size","ref","href","type","children"],"restProps");var d=Ve(),C=_e(d);{var b=_=>{var y=Te();let x;var V=Q(y);Y(V,()=>a.children??U),W(y),$(y,h=>k(h),()=>k()),X(()=>x=Z(y,x,{class:ee(ae({variant:t(),size:w(),className:a.class})),href:c(),...A})),J(_,y)},M=_=>{var y=Pe();let x;var V=Q(y);Y(V,()=>a.children??U),W(y),$(y,h=>k(h),()=>k()),X(()=>x=Z(y,x,{class:ee(ae({variant:t(),size:w(),className:a.class})),type:g(),...A})),J(_,y)};Oe(C,_=>{c()?_(b):_(M,!1)})}return J(e,d),xe({...je()})}ke(z);export{z as B};
