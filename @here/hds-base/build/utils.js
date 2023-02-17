/**
 * Clamp function that check that a number `x` in between the bounds `[min, max]`
 *
 * @param {number} x Number to check
 * @param {number} min Minimum bound
 * @param {number} max Maximum bound
 * @return {number} `min` if `x <= min`, `x` if `min < x < max`, `max` if `x >= max`
 */
export function clamp(x, min, max) {
    if (Number.isNaN(x))
        return NaN;
    return Math.min(Math.max(x, min), max);
}
/**
 * Simple debounce function, so it called once every given time.
 * Useful to use with events like resize, mousemove, etc.
 *
 * @param {(...args: T) => (PromiseLike<U> | U)} callback function to be debounced
 * @param {number} wait number in milliseconds
 * @returns {(...args: T) => Promise<U>}
 */
export function debounce(callback, wait) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        return new Promise(resolve => {
            timer = setTimeout(() => resolve(callback(...args)), wait);
        });
    };
}
/**
 * Find the closest element with a given selector up to dom from the base element
 *
 * @param {string} selector selector for element to be found
 * @param {Element} base the element from which the search starts
 * @returns {T | null} first element found by selector or null
 */
export function closestElement(selector, base) {
    function findClosest(el) {
        if (!el || el === document || el === window) {
            return null;
        }
        const found = el.closest(selector);
        return found || findClosest(el.getRootNode().host);
    }
    return findClosest(base);
}
/**
 *
 * @param {string} name name of the CSS variable
 * @param {HTMLElement} el HTMLElement to get the CSS variable from, fallback to first `[data-theme]` element if `undefined`
 * @returns {string | undefined} the value of the CSS Variable
 */
export function getCSSVariable(name, el) {
    const htmlElement = el || document.querySelector('[data-theme^=hds]');
    return getComputedStyle(htmlElement)?.getPropertyValue(name).trim();
}
/**
 * Returns if a given slot or and array of nodes are empty
 *
 * @param {HTMLSlotElement | Array<Node>} slotEl
 * @returns {boolean}
 */
export function isSlotEmpty(slotEl) {
    let elements;
    if (slotEl instanceof HTMLSlotElement) {
        elements = slotEl.assignedNodes({ flatten: true });
    }
    else {
        elements = slotEl;
    }
    return elements.length === 0 || (elements.length === 1 && elements[0].textContent.trim() === '');
}
/**
 *
 * @param {string} tagName
 * @returns {(ctor: CustomElementConstructor) => void}
 */
export const customElement = (tagName) => (ctor) => {
    const settings = window.hds || {};
    const disableAutoCustomElementsDefine = !!settings.disableAutoCustomElementsDefine;
    if (!disableAutoCustomElementsDefine) {
        const tryGetBeforeCustomElementsDefine = !!settings.tryGetBeforeCustomElementsDefine;
        if (!tryGetBeforeCustomElementsDefine ||
            (tryGetBeforeCustomElementsDefine && !window.customElements.get(tagName))) {
            window.customElements.define(tagName, ctor);
        }
    }
};
/**
 * Format string template by passed arguments
 * @param template - original string template
 * @param args - arguments for replacement
 * @param keepNotMatched - if true will keep all unresolved params
 * @example stringFormat('hello {0}', {0: 'world'}) => 'hello world'
 * @example stringFormat('hello {name}', {name: 'Dmytro'}) => 'hello Dmytro'
 * @example stringFormat('hello {world} {name}', {name: 'Dmytro'}, true) => 'hello {world} Dmytro'
 * @returns - fromatted string
 */
export const stringFormat = (template, args, keepNotMatched = false) => {
    if (template) {
        const keys = Object.keys(args);
        return template.replace(/{([a-zA-Z0-9]+)}/g, (_, match) => args[match] || args[keys[match]] || (keepNotMatched ? `{${match}}` : ''));
    }
    return template;
};
//# sourceMappingURL=utils.js.map