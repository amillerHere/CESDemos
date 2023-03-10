import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import '@here/hds-icon';
import { html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './hds-checkbox.css.js';
/**
 * @summary Checkbox base class.
 *
 * @event {CustomEvent<{name: string, id: string; value: string | boolean | undefined, checked: boolean}>} change Fired when the checked value has changed `CheckboxChangePayload`
 *
 * @slot default Content placed in the label.
 * @slot description  Content placed in the description.
 */
let Checkbox = class Checkbox extends LitElement {
    constructor() {
        super(...arguments);
        this.size = 'medium';
        this.checked = false;
        this.disabled = false;
        this.required = false;
        this.indeterminate = false;
        this.id = '';
        this.name = '';
        this.ariaLabel = '';
        this.showRequired = false;
        this._value = 'on';
    }
    get value() {
        if (this.checked) {
            return this._value;
        }
        return undefined;
    }
    set value(v) {
        if (v === undefined) {
            this._value = 'on';
            this.checked = false;
        }
        else {
            if (typeof v === 'boolean') {
                this.checked = v;
            }
            this._value = v;
        }
    }
    get defaultChecked() {
        return this.formElement.defaultChecked;
    }
    updated(_changedProperties) {
        if (_changedProperties.has('checked') && _changedProperties.get('checked') !== undefined) {
            this._propertyChangeHandler();
        }
        if (_changedProperties.has('indeterminate')) {
            this.formElement.indeterminate = this.indeterminate;
        }
    }
    render() {
        const classes = {
            disabled: this.disabled,
            '-checked': this.checked || this.indeterminate,
            'hds-checkbox--size-small': this.size === 'small',
        };
        return html `
      <label class="-hds-checkbox-wrapper ${classMap(classes)}">
        <input
          type="checkbox"
          id="${ifDefined(this.id === '' ? undefined : this.id)}"
          name="${ifDefined(this.name === '' ? undefined : this.name)}"
          ?checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @change="${this._changeHandler}"
          @click="${e => e.stopPropagation()}"
          aria-label="${ifDefined(this.ariaLabel)}"
        />
        <span class="checkbox-trigger"> ${this.displayIcon()} </span>
        ${this.renderContent()}
      </label>
    `;
    }
    displayIcon() {
        const iconSize = this.size === 'small' ? '8px' : '16px';
        const iconName = this.indeterminate ? 'minus' : 'checkmark';
        return html ` <hds-icon name="${iconName}" size="${iconSize}"></hds-icon>`;
    }
    renderContent() {
        return html ` <div class="checkbox-content">
      <span class="checkbox-label">
        <slot></slot>
        ${this.showRequired && this.required
            ? html `<span class="checkbox-required">*</span>`
            : nothing}
      </span>
      <slot name="description" class="description"></slot>
    </div>`;
    }
    _changeHandler() {
        this.checked = this.formElement.checked;
    }
    _propertyChangeHandler() {
        this.formElement.checked = this.checked;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { name: this.name, id: this.id, value: this.value, checked: this.checked },
        }));
    }
};
Checkbox.styles = styles;
Checkbox.formAssociated = true;
__decorate([
    property({ type: String, reflect: true })
], Checkbox.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Checkbox.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Checkbox.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Checkbox.prototype, "required", void 0);
__decorate([
    property({ type: Boolean, attribute: false })
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
    property({ type: String, reflect: true })
], Checkbox.prototype, "id", void 0);
__decorate([
    property({ type: String, reflect: true })
], Checkbox.prototype, "name", void 0);
__decorate([
    property({ type: String, attribute: 'aria-label' })
], Checkbox.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-required' })
], Checkbox.prototype, "showRequired", void 0);
__decorate([
    query('input')
], Checkbox.prototype, "formElement", void 0);
__decorate([
    property({ type: String, attribute: 'value', reflect: true })
], Checkbox.prototype, "_value", void 0);
Checkbox = __decorate([
    customElement('hds-checkbox')
], Checkbox);
export { Checkbox };
//# sourceMappingURL=hds-checkbox.js.map