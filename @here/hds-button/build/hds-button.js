import { __decorate } from "tslib";
import { customElement, BaseElement, closestElement, isSlotEmpty } from '@here/hds-base';
import { html, LitElement, nothing } from 'lit';
import { property, query, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './hds-button.css.js';
const spinnerVariantColor = {
    primary: 'on-light',
    secondary: 'on-light',
    subtle: 'on-light',
    danger: 'on-dark',
    success: 'on-dark',
    warning: 'on-light',
    'danger-quiet': 'on-dark',
    'success-quiet': 'on-dark',
    'warning-quiet': 'on-light',
    link: 'action',
    'subtle-quiet': 'on-light-subtle',
    floating: 'on-light',
    'on-color-primary': 'on-light',
    'on-color-secondary': 'on-dark',
};
/**
 * @slot default Label for the button
 */
let Button = class Button extends BaseElement {
    constructor() {
        super(...arguments);
        this.variant = 'primary';
        this.size = 'medium';
        this.disabled = false;
        this.iconStyle = 'solid';
        this.iconCategory = 'core-ui';
        this.iconRight = '';
        this.iconRightCategory = 'core-ui';
        this.iconRightStyle = 'solid';
        this.loading = false;
        this.type = 'button';
        this.iconOnly = false;
        this.isTabbable = true;
    }
    focus() {
        return this.buttonElement && this.buttonElement.focus();
    }
    blur() {
        return this.buttonElement && this.buttonElement.blur();
    }
    click() {
        if (!this.isButtonDisabled()) {
            this.buttonElement.click();
        }
    }
    update(_changedProperties) {
        super.update(_changedProperties);
        if (!_changedProperties.has('iconOnly') &&
            (_changedProperties.has('icon') ||
                _changedProperties.has('icon-style') ||
                _changedProperties.has('icon-category'))) {
            this.iconOnly = this.icon && isSlotEmpty(this.listLabelItems);
            this.requestUpdate();
        }
    }
    render() {
        const _disabled = this.isButtonDisabled();
        const _ariaLabel = this.getAriaLabel();
        const classes = {
            'hds-button--icon': !!this.icon,
            'hds-button--icon-right': !!this.iconRight,
            'hds-button--icononly': this.iconOnly,
            'hds-button--disabled': _disabled,
        };
        classes[`hds-button--variant-${this.variant}`] = true;
        classes[`hds-button--size-${this.size}`] = true;
        if (this.variant !== 'link')
            classes['hds-button--loading'] = this.loading;
        const labelStyles = {
            visibility: this.loading && this.variant !== 'link' ? 'hidden' : undefined,
        };
        const localStyles = {
            width: this.width,
        };
        return html `
      <button
        id="Button"
        @focus="${this.focus}"
        @blur="${this.blur}"
        class="hds-button ${classMap(classes)}"
        style="${styleMap(localStyles)}"
        ?disabled="${_disabled}"
        type="${this.type}"
        @click="${this.handleAction}"
        aria-label="${ifDefined(_ariaLabel)}"
      >
        ${this.loading && this.variant !== 'link' ? this.renderSpinner() : nothing}
        <span class="hds-button-label-container" style=${styleMap(labelStyles)}>
          ${this.renderIcon(this.icon, this.iconCategory, this.iconStyle)}
          <span class="hds-button-label">
            <slot></slot>
          </span>
          ${this.renderIcon(this.iconRight, this.iconRightCategory, this.iconRightStyle)}
        </span>
      </button>
    `;
    }
    renderIcon(icon, category, style) {
        if (!icon || icon.trim() === '')
            return nothing;
        let iconSize = '16px';
        if (this.iconOnly) {
            if (this.size === 'extra-small') {
                iconSize = '8px';
            }
            else if (this.size === 'large') {
                iconSize = '24px';
            }
        }
        return html ` <hds-icon
      name="${icon}"
      size="${iconSize}"
      icon-style="${style}"
      category="${category}"
    ></hds-icon>`;
    }
    renderSpinner() {
        const color = spinnerVariantColor[this.variant];
        return html `
      <span class="hds-button-loading-container">
        <hds-progress-indicator
          size="small"
          color="${color}"
          indicator-type="circular"
        ></hds-progress-indicator>
      </span>
    `;
    }
    isButtonDisabled() {
        if (this.disabled)
            return true;
        if (this.variant !== 'link')
            return this.loading;
        return false;
    }
    getAriaLabel() {
        if (!this.ariaLabel || this.ariaLabel === '') {
            if (this.loading) {
                return 'Loading';
            }
            return undefined;
        }
        return this.ariaLabel;
    }
    handleAction(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.isButtonDisabled()) {
            return;
        }
        this.updateComplete;
        if (this.type === 'submit' || this.type === 'reset') {
            const form = closestElement('FORM', this);
            if (form) {
                if (this.type === 'submit') {
                    form.requestSubmit();
                }
                else {
                    // form.dispatchEvent(new Event('reset'));
                    form.reset();
                }
            }
        }
        this.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            composed: true,
        }));
    }
};
Button.styles = styles;
Button.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ type: String, reflect: true })
], Button.prototype, "variant", void 0);
__decorate([
    property({ type: String, reflect: true })
], Button.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Button.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], Button.prototype, "width", void 0);
__decorate([
    property({ type: String })
], Button.prototype, "icon", void 0);
__decorate([
    property({ type: String, attribute: 'icon-style' })
], Button.prototype, "iconStyle", void 0);
__decorate([
    property({ type: String, attribute: 'icon-category' })
], Button.prototype, "iconCategory", void 0);
__decorate([
    property({ type: String, attribute: 'icon-right' })
], Button.prototype, "iconRight", void 0);
__decorate([
    property({ type: String, attribute: 'icon-right-category' })
], Button.prototype, "iconRightCategory", void 0);
__decorate([
    property({ type: String, attribute: 'icon-right-style' })
], Button.prototype, "iconRightStyle", void 0);
__decorate([
    property({ type: String, attribute: 'aria-label' })
], Button.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Button.prototype, "loading", void 0);
__decorate([
    property({ type: String, reflect: true })
], Button.prototype, "type", void 0);
__decorate([
    query('#Button')
], Button.prototype, "buttonElement", void 0);
__decorate([
    query('slot')
], Button.prototype, "labelSlot", void 0);
__decorate([
    queryAssignedNodes('', true)
], Button.prototype, "listLabelItems", void 0);
Button = __decorate([
    customElement('hds-button')
], Button);
export { Button };
//# sourceMappingURL=hds-button.js.map