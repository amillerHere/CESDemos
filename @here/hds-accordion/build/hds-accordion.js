import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { styles } from './hds-accordion.css.js';
import { AccordionItem } from './hds-accordion-item.js';
/**
 * @slot default Slot for `hds-accordion-item` elements
 *
 * @event {CustomEvent<{index: number; id: string; expanded: boolean}>} change Fired when an accordion item has expanded/collapsed `AccordionChangePayload`
 */
let Accordion = class Accordion extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.arrowPosition = 'end';
        this.expandMode = 'many';
        this.defaultExpanded = false;
        this.disabled = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('change', this._onChange);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('change', this._onChange);
    }
    updated() {
        this._updateItems();
    }
    render() {
        return html `
      <div class="-hds-accordion-wrapper" @keydown="${this._onKeyDown}">
        <slot @slotchange="${this._onSlotChange}"></slot>
      </div>
    `;
    }
    _onSlotChange() {
        if (this.defaultExpanded) {
            const items = this._getItems();
            for (let i = 0; i < items.length; i += 1) {
                if ((this.expandMode === 'one' && i === 0) || this.expandMode === 'many') {
                    items[i].expanded = true;
                }
            }
        }
        this._updateItems();
    }
    _getFocusedItem() {
        return this._getItems().find(item => item === document.activeElement);
    }
    _focusItemByIndex(index) {
        this._getItems()[index]?.focus();
    }
    _onKeyDown(e) {
        if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) {
            const focusedItem = this._getFocusedItem();
            const itemsCount = this._getItems().length;
            if (focusedItem !== undefined && itemsCount > 1) {
                e.preventDefault();
                if (e.key === 'ArrowUp') {
                    this._focusItemByIndex(focusedItem.index === 0 ? itemsCount - 1 : focusedItem.index - 1);
                }
                else if (e.key === 'ArrowDown') {
                    this._focusItemByIndex(focusedItem.index === itemsCount - 1 ? 0 : focusedItem.index + 1);
                }
                else if (e.key === 'Home') {
                    this._focusItemByIndex(0);
                }
                else if (e.key === 'End') {
                    this._focusItemByIndex(itemsCount - 1);
                }
            }
        }
    }
    _onChange(e) {
        if (this.expandMode === 'one' && e.detail.expanded) {
            this._getItems().forEach(item => {
                // eslint-disable-next-line no-param-reassign
                if (item !== e.target)
                    item.expanded = false;
            });
        }
    }
    _updateItems() {
        const items = this._getItems();
        for (let i = 0; i < items.length; i++) {
            items[i].variant = this.variant;
            items[i].arrowPosition = this.arrowPosition;
            items[i].isAccordionDisabled = this.disabled;
            items[i].index = i;
            items[i].isFirstChild = i === 0;
            items[i].isLastChild = i === items.length - 1;
        }
    }
    _getItems() {
        return this.slotElement
            .assignedNodes({ flatten: true })
            .filter((e) => e instanceof AccordionItem);
    }
};
Accordion.styles = styles;
Accordion.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ type: String, reflect: true })
], Accordion.prototype, "variant", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'arrow-position' })
], Accordion.prototype, "arrowPosition", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'expand-mode' })
], Accordion.prototype, "expandMode", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'default-expanded' })
], Accordion.prototype, "defaultExpanded", void 0);
__decorate([
    property({ type: Boolean })
], Accordion.prototype, "disabled", void 0);
__decorate([
    query('slot')
], Accordion.prototype, "slotElement", void 0);
Accordion = __decorate([
    customElement('hds-accordion')
], Accordion);
export { Accordion };
//# sourceMappingURL=hds-accordion.js.map