import{c as v,l as T}from"../chunks/BvQ-jD0X.js";import"../chunks/BpBpVZaC.js";import{p as _,h as w,s as l,f as I,g as A,a as S,b as C,$ as E,i as r,A as i,F as g,c as L,d as $,r as j}from"../chunks/DGXZ7-fm.js";import{a as M}from"../chunks/DmM4ED4t.js";import{h as x}from"../chunks/BCQ-OJUB.js";import{l as s}from"../chunks/C0e3KP6j.js";import{T as u,a as t,A as k}from"../chunks/i8MtLjm_.js";import{S as H}from"../chunks/Bf78Kkxf.js";p[g]="src/routes/demo/searchable-list/+page.svx";var B=M(L('<h1>Searchable List</h1> <p>This is a <code>searchable</code> list: a very common UI component in BOJIT sites. Open the developer console to see how the various callbacks work.</p> <pre class="language-svelte"><!></pre> <hr/> <!>',1),p[g],[[13,0],[14,0,[[14,13]]],[15,0],[67,0]]);function p(m,y){v(new.target),_(y,!1,p);var d={...T()},e=B();w(c=>{E.title="Demo - Searchable List"});var o=l(I(e),4),h=$(o);x(h,()=>`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Widgets.SearchableList</span>
    <span class="token attr-name">overflowHeight</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20rem<span class="token punctuation">"</span></span>
    <span class="token attr-name">sort</span>
    <span class="token attr-name">buttons=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> Table <span class="token keyword">as</span> Icon<span class="token punctuation">,</span>
            <span class="token function-variable function">onclick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">l<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'TABLE:'</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> TrashCan <span class="token keyword">as</span> Icon<span class="token punctuation">,</span>
            <span class="token function-variable function">onclick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">l<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'TRASH:'</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">items</span><span class="token attr-value"><span class="token punctuation">=</span>&#123;[</span>
        <span class="token language-javascript"><span class="token punctuation">&#123;</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Search Entry'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sublabel</span><span class="token operator">:</span> <span class="token string">'example description'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> Table <span class="token keyword">as</span> Icon<span class="token punctuation">,</span>
            <span class="token literal-property property">buttons</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">&#123;</span>
                    <span class="token literal-property property">icon</span><span class="token operator">:</span> AddComment <span class="token keyword">as</span> Icon<span class="token punctuation">,</span>
                    <span class="token function-variable function">onclick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">l<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'COMMENT:'</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">&#125;</span>
                <span class="token punctuation">&#125;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">&#125;</span></span><span class="token attr-name">,</span>
        <span class="token language-javascript"><span class="token punctuation">&#123;</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Biggest Entry'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> AddComment <span class="token keyword">as</span> Icon
        <span class="token punctuation">&#125;</span></span><span class="token attr-name">,</span>
        <span class="token language-javascript"><span class="token punctuation">&#123;</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Trials of the Past'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> TrashCan <span class="token keyword">as</span> Icon
        <span class="token punctuation">&#125;</span></span><span class="token attr-name">,</span>
        <span class="token language-javascript"><span class="token punctuation">&#123;</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Gravy of the Past'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> TrashCan <span class="token keyword">as</span> Icon
        <span class="token punctuation">&#125;</span></span><span class="token attr-name">,</span>
        <span class="token language-javascript"><span class="token punctuation">&#123;</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Trials in Hastings'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> TrashCan <span class="token keyword">as</span> Icon
        <span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">]&#125;</span>
    <span class="token attr-name">onitemclick=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token parameter">l<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'MAIN:'</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Widgets.SearchableList</span><span class="token punctuation">></span></span></code>`),j(o);var b=l(o,4);{let c=i(()=>[{icon:u,onclick:(a,n)=>{console.log(...s("log","TABLE:",a,n))}},{icon:t,onclick:(a,n)=>{console.log(...s("log","TRASH:",a,n))}}]),f=i(()=>[{label:"Search Entry",sublabel:"example description",icon:u,buttons:[{icon:k,onclick:(a,n)=>{console.log(...s("log","COMMENT:",a,n))}}]},{label:"Biggest Entry",icon:k},{label:"Trials of the Past",icon:t},{label:"Gravy of the Past",icon:t},{label:"Trials in Hastings",icon:t}]);A(()=>H(b,{overflowHeight:"20rem",sort:!0,get buttons(){return r(c)},get items(){return r(f)},onitemclick:(a,n)=>{console.log(...s("log","MAIN:",a,n))}}),"component",p,68,0,{componentTag:"Widgets.SearchableList"})}return S(m,e),C(d)}export{p as component};
