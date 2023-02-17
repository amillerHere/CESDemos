var ListItem_1;
import { __decorate } from "tslib";
import { customElement, BaseElement } from '@here/hds-base';
import '@here/hds-icon';
import '@here/hds-tooltip';
import { html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './hds-list-item.css.js';
/**
 * @slot default Content for the item label
 *
 * @event {CustomEvent<string>} select Fired when the element has been selected with the id of the list item `ListItemSelectPayload`
 */
let ListItem = ListItem_1 = class ListItem extends BaseElement {
    constructor() {
        super(...arguments);
        this.isTabbable = true;
        this.disabled = false;
        this.selected = false;
        this.dragging = false;
        this.iconCategory = 'core-ui';
        this.hasTooltip = false;
        this.hasAnchor = false;
        this.variant = 'default';
        this.groupVariant = 'subtle';
        this.size = 'small';
        this.horizontalPadding = 'default';
    }
    connectedCallback() {
        super.connectedCallback();
        this.id = this.id || `hds-list-item-${++ListItem_1.itemIdCounter}`;
        this.setAttribute('data-hds-tooltip', this.id);
    }
    firstUpdated() {
        if (this.textContainer && this.textContainer.scrollWidth > this.textContainer.offsetWidth) {
            this.hasTooltip = true;
        }
        const slotElements = this.listItemContentSlot?.assignedNodes({ flatten: true });
        const anchorTag = slotElements.find(element => element.nodeName === 'A');
        if (anchorTag) {
            this.hasAnchor = true;
            if (anchorTag.scrollWidth > anchorTag.offsetWidth) {
                this.hasTooltip = true;
            }
        }
    }
    updated(_changedProperties) {
        if (_changedProperties.has('selected') && !this.disabled && this.selected) {
            this.updateComplete;
            this.dispatchEvent(new CustomEvent('select', { detail: this.id, bubbles: true }));
        }
    }
    render() {
        const classes = {
            item: true,
            selected: this.selected,
            disabled: this.disabled,
            dragging: this.dragging,
            'hds-list-item--has-anchor': this.hasAnchor,
        };
        classes[`hds-list-item-variant-${this.groupVariant}-${this.variant}`] = true;
        classes[`hds-list-item-size-${this.size}`] = true;
        classes[`hds-list-item-h-padding-${this.horizontalPadding}`] = true;
        return html `
      <div
        class="-hds-list-item-wrapper ${classMap(classes)}"
        role="option"
        aria-selected="${ifDefined(this.selected)}"
        tabindex="0"
        @click="${this.onItemClick}"
        ?disabled="${this.disabled}"
      >
        ${this.renderIcon()}
        <span class="text">
          <slot></slot>
        </span>
        <slot name="right"></slot>
      </div>
      ${this.renderTooltip()}
    `;
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
    async onItemClick() {
        if (!this.disabled) {
            this.selected = true;
        }
    }
    renderTooltip() {
        if (this.hasTooltip) {
            return html `
        <hds-tooltip id="${this.id}" position="right">
          <div>${this.listItemContentSlot.assignedNodes()[0]?.textContent}</div>
        </hds-tooltip>
      `;
        }
        return nothing;
    }
};
ListItem.styles = styles;
ListItem.itemIdCounter = 0;
ListItem.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ type: Boolean, attribute: true, reflect: true })
], ListItem.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, attribute: true, reflect: true })
], ListItem.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean, attribute: true, reflect: true })
], ListItem.prototype, "dragging", void 0);
__decorate([
    property({ type: String })
], ListItem.prototype, "icon", void 0);
__decorate([
    property({ type: String, attribute: 'icon-category' })
], ListItem.prototype, "iconCategory", void 0);
__decorate([
    property({ type: Boolean, attribute: false })
], ListItem.prototype, "hasTooltip", void 0);
__decorate([
    property({ type: Boolean, attribute: false })
], ListItem.prototype, "hasAnchor", void 0);
__decorate([
    property({ type: String, attribute: true })
], ListItem.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], ListItem.prototype, "groupVariant", void 0);
__decorate([
    property({ type: String })
], ListItem.prototype, "size", void 0);
__decorate([
    property({ type: String, attribute: false })
], ListItem.prototype, "horizontalPadding", void 0);
__decorate([
    query('slot')
], ListItem.prototype, "listItemContentSlot", void 0);
__decorate([
    query('.text')
], ListItem.prototype, "textContainer", void 0);
ListItem = ListItem_1 = __decorate([
    customElement('hds-list-item')
], ListItem);
export { ListItem };
//# sourceMappingURL=hds-list-item.js.map