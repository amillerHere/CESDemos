/**
 * Clamp function that check that a number `x` in between the bounds `[min, max]`
 *
 * @param {number} x Number to check
 * @param {number} min Minimum bound
 * @param {number} max Maximum bound
 * @return {number} `min` if `x <= min`, `x` if `min < x < max`, `max` if `x >= max`
 */
export declare function clamp(x: number, min: number, max: number): number;
/**
 * Simple debounce function, so it called once every given time.
 * Useful to use with events like resize, mousemove, etc.
 *
 * @param {(...args: T) => (PromiseLike<U> | U)} callback function to be debounced
 * @param {number} wait number in milliseconds
 * @returns {(...args: T) => Promise<U>}
 */
export declare function debounce<T extends unknown[], U>(callback: (...args: T) => PromiseLike<U> | U, wait: number): (...args: T) => Promise<U>;
/**
 * Find the closest element with a given selector up to dom from the base element
 *
 * @param {string} selector selector for element to be found
 * @param {Element} base the element from which the search starts
 * @returns {T | null} first element found by selector or null
 */
export declare function closestElement<T extends Element>(selector: string, base: Element): T | null;
/**
 *
 * @param {string} name name of the CSS variable
 * @param {HTMLElement} el HTMLElement to get the CSS variable from, fallback to first `[data-theme]` element if `undefined`
 * @returns {string | undefined} the value of the CSS Variable
 */
export declare function getCSSVariable(name: string, el?: HTMLElement): string;
/**
 * Returns if a given slot or and array of nodes are empty
 *
 * @param {HTMLSlotElement | Array<Node>} slotEl
 * @returns {boolean}
 */
export declare function isSlotEmpty(slotEl: HTMLSlotElement | Array<Node>): boolean;
/**
 *
 * @param {string} tagName
 * @returns {(ctor: CustomElementConstructor) => void}
 */
export declare const customElement: (tagName: string) => (ctor: CustomElementConstructor) => void;
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
export declare const stringFormat: (template: string, args: {
    [key: string]: any;
    [key: number]: any;
}, keepNotMatched?: boolean) => string;
