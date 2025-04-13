<!--
 * @file Content.svelte
 * @author James Bennion-Pedley
 * @brief Section designed for containing main text/markdown content of page
 * @date 17/11/2022
 *
 * @copyright Copyright (c) 2022
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import './CodeLight.css';
    import './CodeDark.css';

    /*--------------------------------- Props --------------------------------*/

    let { children } = $props();
</script>

<article>
    {@render children?.()}
</article>

<style>
    /* Desktop article adjustments */
    article {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        margin-top: 1rem;
        margin-bottom: 2rem;
        box-sizing: border-box;
        padding: 0 10px;
    }

    /* Tablet article adjustments */
    @media (max-width: 1200px) {
        article {
            max-width: 768px;
        }
    }

    /* Mobile article adjustments */
    @media (max-width: 768px) {
        article {
            max-width: 100%;
        }
    }

    /*---------------------------- Article Styling ---------------------------*/

    /* Text */
    article :global(h1),
    article :global(h2),
    article :global(h3),
    article :global(h4),
    article :global(h5),
    article :global(h6) {
        margin-top: 24px;
        margin-bottom: 16px;
        line-height: 1.25;
    }

    article :global(h1) {
        font-weight: 500;
        font-size: 2.5em;
    }

    article :global(h2) {
        font-weight: 500;
        font-size: 1.5em;
    }

    article :global(h3) {
        font-weight: 200;
        font-size: 1.25em;
    }

    article :global(h4) {
        font-weight: 200;
        font-size: 1em;
    }

    article :global(h5) {
        font-weight: 200;
        font-size: 0.875em;
    }

    article :global(h6) {
        font-weight: 200;
        font-size: 0.85em;
    }

    article :global(p) {
        margin-top: 0;
        margin-bottom: 10px;
        font-weight: 100;
        font-size: 1.1em;
    }

    /* Links */
    article :global(a) {
        color: #237094;
    }

    :global(.dark) article :global(a) {
        color: #95b4c2;
    }

    article :global(a:visited) {
        color: #6d4085;
    }

    :global(.dark) article :global(a):visited {
        color: #907b9c;
    }

    article :global(a:hover) {
        text-decoration: underline;
    }

    /* Inline Code */
    article :global(:not(pre) > code) {
        border-radius: 0.125rem;
        font-size: 0.875rem;
        padding: 0.15rem 0.3rem;
        --tw-text-opacity: 1;
        letter-spacing: 0.25px;
        background-color: hsl(var(--accent));
        color: hsl(var(--primary));
        font-family: var(--font-monospace);
    }

    /* Block Code overrides */
    article > :global(pre[class*='language-']) {
        border-radius: 0.5em;
        margin-bottom: 0.5rem;
    }

    article > :global(div > pre[class*='language-']) {
        border-radius: 0.5em;
        margin-bottom: 0.5rem;
    }

    /* Block Quotes */
    article > :global(blockquote) {
        border-left: 4px solid hsl(var(--primary));
        padding: 1rem;
        font-style: bold;
        color: hsl(var(--foreground));
        background-color: hsl(var(--muted));
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    /* Separators */
    article :global(hr) {
        box-sizing: content-box;
        overflow: hidden;
        background: transparent;
        border-top: 1px solid hsl(var(--horizontal-separator));
        height: 0.25em;
        padding: 0;
        margin: 24px 0;
    }

    /* Lists */
    article :global(ul),
    article :global(ol) {
        position: relative;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        padding-left: 2em;
    }

    article :global(ul) {
        list-style-type: circle;
        list-style-type: none;
    }

    article :global(li) {
        margin-top: 0.4rem;
        margin-bottom: 0.4rem;
        padding-left: 0.3rem;
    }

    article :global(ul > li::before) {
        content: '➤ ';
        position: absolute;
        left: 15px;
    }

    article :global(ol) {
        list-style-type: decimal;
    }

    article :global(ul ol),
    article :global(ol ol) {
        list-style-type: lower-roman;
    }

    article :global(ul ul ol),
    article :global(ul ul ol),
    article :global(ul ol ol),
    article :global(ol ol ol) {
        list-style-type: lower-alpha;
    }

    /* Input Elements (only first children) */
    article :global(input) {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    /* Image */
    article :global(img) {
        width: 80%;
        margin: 0 auto;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        display: block;
    }

    @media (max-width: 768px) {
        article :global(img) {
            width: 100%;
        }
    }

    :global(.dark) article :global(img) {
        filter: brightness(0.8);
    }
</style>
