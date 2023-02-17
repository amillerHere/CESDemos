var AccordionItem_1;
import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import '@here/hds-icon';
import { html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './hds-accordion-item.css.js';
/**
 * @summary Item for Accordion component
 * @slot default Content of the Accordion item
 *
 * @event {CustomEvent<{index: number; id: string; expanded: boolean}>} change Fired when the item has expanded/collapsed `AccordionChangePayload`
 */
let AccordionItem = AccordionItem_1 = class AccordionItem extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.arrowPosition = 'end';
        this.disabled = false;
        this.isAccordionDisabled = false;
        this.headline = '';
        this.expanded = false;
        this.iconCategory = 'core-ui';
        this.isLastChild = false;
        this.isFirstChild = false;
        this.index = -1;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id = this.id || `hds-accordion-item-${++AccordionItem_1.itemIdCounter}`;
    }
    focus() {
        return this.buttonElement && this.buttonElement.focus();
    }
    blur() {
        return this.buttonElement && this.buttonElement.blur();
    }
    updated(_changedProperties) {
        if (_changedProperties.has('expanded') && _changedProperties.get('expanded') !== undefined) {
            this.dispatchEvent(new CustomEvent('change', {
                detail: {
                    index: this.index,
                    id: this.id,
                    expanded: this.expanded,
                },
                bubbles: true,
            }));
        }
    }
    renderIcon() {
        if (!this.icon)
            return nothing;
        return html `
      <hds-icon
        class="icon"
        name="${this.icon}"
        category="${this.iconCategory}"
        size="16px"
      ></hds-icon>
    `;
    }
    render() {
        const classes = {
            disabled: this.disabled || this.isAccordionDisabled,
            expanded: this.expanded,
            'last-child': this.isLastChild,
            'first-child': this.isFirstChild,
        };
        classes[`hds-accordion-variant-${this.variant}`] = true;
        classes[`arrow-pos-${this.arrowPosition}`] = true;
        const buttonClasses = {
            disabled: this.disabled || this.isAccordionDisabled,
        };
        const arrowIcon = html ` <hds-icon name="chevron-down" size="16px"></hds-icon>`;
        return html `
      <div class="-hds-accordion-item-wrapper ${classMap(classes)}">
        <div
          tabindex="0"
          role="button"
          class="-hds-accordion-button ${classMap(buttonClasses)}"
          @click="${this._toggle}"
          id="${`accordion-control-${this.index}`}"
          aria-expanded="${this.expanded}"
          aria-controls="accordion-section-${this.index}"
          aria-disabled="${this.expanded && (this.disabled || this.isAccordionDisabled)}"
        >
          <div class="headline">
            ${this.renderIcon()}
            <span class="headline-text">${this.headline}</span>
          </div>
          <div class="arrow">${arrowIcon}</div>
        </div>
        <div
          class="content"
          role="region"
          id="${`accordion-section-${this.index}`}"
          aria-labelledby="${`accordion-control-${this.index}`}"
        >
          <slot></slot>
        </div>
      </div>
    `;
    }
    _toggle() {
        if (this.disabled || this.isAccordionDisabled)
            return;
        this.expanded = !this.expanded;
    }
};
AccordionItem.styles = styles;
AccordionItem.itemIdCounter = 0;
AccordionItem.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ type: String, attribute: false })
], AccordionItem.prototype, "variant", void 0);
__decorate([
    property({ type: String, attribute: false })
], AccordionItem.prototype, "arrowPosition", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AccordionItem.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: false })
], AccordionItem.prototype, "isAccordionDisabled", void 0);
__decorate([
    property({ type: String, reflect: true })
], AccordionItem.prototype, "headline", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AccordionItem.prototype, "expanded", void 0);
__decorate([
    property({ type: String })
], AccordionItem.prototype, "icon", void 0);
__decorate([
    property({ type: String, attribute: 'icon-category' })
], AccordionItem.prototype, "iconCategory", void 0);
__decorate([
    property({ type: Boolean, attribute: false })
], AccordionItem.prototype, "isLastChild", void 0);
__decorate([
    property({ type: Boolean, attribute: false })
], AccordionItem.prototype, "isFirstChild", void 0);
__decorate([
    property({ type: Number, attribute: false })
], AccordionItem.prototype, "index", void 0);
__decorate([
    query('.-hds-accordion-button')
], AccordionItem.prototype, "buttonElement", void 0);
AccordionItem = AccordionItem_1 = __decorate([
    customElement('hds-accordion-item')
], AccordionItem);
export { AccordionItem };
//# sourceMappingURL=hds-accordion-item.js.map