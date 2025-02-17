/**
 * @file textFit.ts
 * @author James Bennion-Pedley
 * @brief JS-Driven Text-Fit Algorithm
 * @date 04/01/2025
 *
 * @copyright Copyright (c) 2025
 *
 */

/*---------------------------------- Imports ---------------------------------*/

import { mergeDeep } from '$lib/utils/merge';

/*----------------------------------- Types ----------------------------------*/

type Settings = {
    alignVert?: boolean; // if true, textFit will align vertically using css tables
    alignHoriz?: boolean; // if true, textFit will set text-align: center
    multiLine?: boolean; // if true, textFit will not set white-space: no-wrap
    detectMultiLine?: boolean; // disable to turn off automatic multi-line sensing
    minFontSize?: number;
    maxFontSize?: number;
    reProcess?: boolean; // if true, textFit will re-process already-fit nodes. Set to 'false' for better performance
    widthOnly?: boolean; // if true, textFit will fit text to element width, regardless of text height
    alignVertWithFlexbox?: boolean; // if true, textFit will use flexbox for vertical alignment
};

/*----------------------------------- State ----------------------------------*/

const defaultSettings: Settings = {
    alignVert: false,
    alignHoriz: false,
    multiLine: false,
    detectMultiLine: true,
    minFontSize: 20,
    maxFontSize: 500,
    reProcess: true,
    widthOnly: false,
    alignVertWithFlexbox: true
};

/*--------------------------------- Functions --------------------------------*/

function textFit(els: any, options: Settings) {
    if (!options) options = {};

    // Extend options
    let settings: Settings = mergeDeep(defaultSettings, options);

    // Support passing a single el
    let elType = Object.prototype.toString.call(els);
    if (
        elType !== '[object Array]' &&
        elType !== '[object NodeList]' &&
        elType !== '[object HTMLCollection]'
    ) {
        els = [els];
    }

    // Process each el we've passed.
    for (let i = 0; i < els.length; i++) {
        processItem(els[i], settings);
    }
}

/**
 * The meat. Given an el, make the text inside it fit its parent.
 * @param  {DOMElement} el       Child el.
 * @param  {Object} settings     Options for fit.
 */
function processItem(el: any, settings: any) {
    if (!isElement(el) || (!settings.reProcess && el.getAttribute('textFitted'))) {
        return false;
    }

    // Set textFitted attribute so we know this was processed.
    if (!settings.reProcess) {
        el.setAttribute('textFitted', 1);
    }

    let innerSpan, originalHeight, originalHTML, originalWidth;
    let low, mid, high;

    // Get element data.
    originalHTML = el.innerHTML;
    originalWidth = innerWidth(el);
    originalHeight = innerHeight(el);

    // Don't process if we can't find box dimensions
    if (!originalWidth || (!settings.widthOnly && !originalHeight)) {
        return;
        // if (!settings.widthOnly)
        //     throw new Error(
        //         'Set a static height and width on the target element ' +
        //             el.outerHTML +
        //             ' before using textFit!'
        //     );
        // else
        //     throw new Error(
        //         'Set a static width on the target element ' +
        //             el.outerHTML +
        //             ' before using textFit!'
        //     );
    }

    // Add textFitted span inside this container.
    if (originalHTML.indexOf('textFitted') === -1) {
        innerSpan = document.createElement('span');
        innerSpan.className = 'textFitted';
        // Inline block ensure it takes on the size of its contents, even if they are enclosed
        // in other tags like <p>
        innerSpan.style['display'] = 'inline-block';
        innerSpan.innerHTML = originalHTML;
        el.innerHTML = '';
        el.appendChild(innerSpan);
    } else {
        // Reprocessing.
        innerSpan = el.querySelector('span.textFitted');
        // Remove vertical align if we're reprocessing.
        if (hasClass(innerSpan, 'textFitAlignVert')) {
            innerSpan.className = innerSpan.className.replace('textFitAlignVert', '');
            innerSpan.style['height'] = '';
            el.className.replace('textFitAlignVertFlex', '');
        }
    }

    // Prepare & set alignment
    if (settings.alignHoriz) {
        el.style['text-align'] = 'center';
        innerSpan.style['text-align'] = 'center';
    }

    // Check if this string is multiple lines
    // Not guaranteed to always work if you use wonky line-heights
    let multiLine = settings.multiLine;
    if (
        settings.detectMultiLine &&
        !multiLine &&
        innerSpan.scrollHeight >= parseInt(window.getComputedStyle(innerSpan)['font-size'], 10) * 2
    ) {
        multiLine = true;
    }

    // If we're not treating this as a multiline string, don't let it wrap.
    if (!multiLine) {
        el.style['white-space'] = 'nowrap';
    }

    low = settings.minFontSize;
    high = settings.maxFontSize;

    // Binary search for highest best fit
    let size = low;
    while (low <= high) {
        mid = (high + low) >> 1;
        innerSpan.style.fontSize = mid + 'px';
        if (
            innerSpan.scrollWidth <= originalWidth &&
            (settings.widthOnly || innerSpan.scrollHeight <= originalHeight)
        ) {
            size = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        // await injection point
    }
    // found, updating font if differs:
    if (innerSpan.style.fontSize != size + 'px') innerSpan.style.fontSize = size + 'px';

    // Our height is finalized. If we are aligning vertically, set that up.
    if (settings.alignVert) {
        addStyleSheet();
        let height = innerSpan.scrollHeight;
        if (window.getComputedStyle(el)['position'] === 'static') {
            el.style['position'] = 'relative';
        }
        if (!hasClass(innerSpan, 'textFitAlignVert')) {
            innerSpan.className = innerSpan.className + ' textFitAlignVert';
        }
        innerSpan.style['height'] = height + 'px';
        if (settings.alignVertWithFlexbox && !hasClass(el, 'textFitAlignVertFlex')) {
            el.className = el.className + ' textFitAlignVertFlex';
        }
    }
}

// Calculate height without padding.
function innerHeight(el: HTMLElement) {
    let style = window.getComputedStyle(el, null);
    return (
        el.clientHeight -
        parseInt(style.getPropertyValue('padding-top'), 10) -
        parseInt(style.getPropertyValue('padding-bottom'), 10)
    );
}

// Calculate width without padding.
function innerWidth(el: HTMLElement) {
    let style = window.getComputedStyle(el, null);
    return (
        el.clientWidth -
        parseInt(style.getPropertyValue('padding-left'), 10) -
        parseInt(style.getPropertyValue('padding-right'), 10)
    );
}

// Returns true if it is a DOM element
function isElement(o: any) {
    return typeof HTMLElement === 'object'
        ? o instanceof HTMLElement //DOM2
        : o &&
              typeof o === 'object' &&
              o !== null &&
              o.nodeType === 1 &&
              typeof o.nodeName === 'string';
}

function hasClass(element: HTMLElement, cls: string) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

// Better than a stylesheet dependency
function addStyleSheet() {
    if (document.getElementById('textFitStyleSheet')) return;
    let style = [
        '.textFitAlignVert{',
        'position: absolute;',
        'top: 0; right: 0; bottom: 0; left: 0;',
        'margin: auto;',
        'display: flex;',
        'justify-content: center;',
        'flex-direction: column;',
        '}',
        '.textFitAlignVertFlex{',
        'display: flex;',
        '}',
        '.textFitAlignVertFlex .textFitAlignVert{',
        'position: static;',
        '}'
    ].join('');

    let css = document.createElement('style');
    css.type = 'text/css';
    css.id = 'textFitStyleSheet';
    css.innerHTML = style;
    document.body.appendChild(css);
}

/*---------------------------------- Exports ---------------------------------*/

export { textFit };
