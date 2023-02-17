var Input_1;
import { __decorate } from "tslib";
import { customElement, clamp } from '@here/hds-base';
import '@here/hds-icon';
import '@here/hds-label';
import { html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './hds-input.css.js';
/**
 * @event {CustomEvent<{value: number | string}>} input Fired when the value of the element has changed `InputInputPayload`
 * @event {CustomEvent<{value: number | string}>} change Fired when an alteration to the element's value is committed by the user `InputChangePayload`
 * @event {CustomEvent<Input>} focus Fired when the element has focus
 * @event {CustomEvent<Input>} blur Fired when the element loses focus
 * @event {KeyboardEvent} keydown Fired when a key is pressed
 * @event {KeyboardEvent} keyup Fired when a key is released
 *
 */
let Input = Input_1 = class Input extends LitElement {
    constructor() {
        super(...arguments);
        this.value = '';
        this.type = 'text';
        this.id = '';
        this.size = 'medium';
        this.iconCategory = 'core-ui';
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.minlength = -1;
        this.maxlength = -1;
        this.step = 1;
        this.charCounter = false;
        this.error = false;
        this.ariaLabel = '';
        this.passwordVisibility = 'masked';
    }
    get charCounterVisible() {
        return this.charCounter && this.maxlength !== -1;
    }
    get errorTextVisible() {
        return this.error && !!this.errorText;
    }
    connectedCallback() {
        super.connectedCallback();
        Input_1.idCounter++;
        if (this.label) {
            this.labelId = `hds-input-label-${Input_1.idCounter}`;
        }
        this.initialType = this.type;
    }
    clear() {
        this.value = '';
        this.setDefaultValues();
        this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
    }
    focus() {
        this.inputElement.focus();
    }
    blur() {
        this.inputElement.blur();
    }
    async _nativeFocus(e) {
        e.stopPropagation();
        e.preventDefault();
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('focus', { detail: this }));
    }
    async _nativeBlur(e) {
        e.stopPropagation();
        e.preventDefault();
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('blur', { detail: this }));
    }
    togglePassword() {
        if (this.disabled || !this.isPasswordVisibilityEnabled()) {
            return;
        }
        this.passwordVisibility = this.passwordVisibility === 'masked' ? 'text' : 'masked';
        this.type = this.passwordVisibility === 'masked' ? 'password' : 'text';
    }
    async stepUp(n) {
        if (this.type !== 'number' || this.disabled)
            return;
        await this.changeByStep(n || this.step);
    }
    async stepDown(n) {
        if (this.type !== 'number' || this.disabled)
            return;
        await this.changeByStep(-1 * (n || this.step));
    }
    setSelectionRange(start, end, direction) {
        this.inputElement.setSelectionRange(start, end, direction);
    }
    setRangeText(replacement, start, end, selectionMode) {
        if (start && end) {
            this.inputElement.setRangeText(replacement, start, end, selectionMode);
        }
        else {
            this.inputElement.setRangeText(replacement);
        }
        this.value = this.inputElement.value;
    }
    checkValidity() {
        return this.inputElement.checkValidity();
    }
    reportValidity() {
        return this.inputElement.reportValidity();
    }
    select() {
        this.inputElement.select();
    }
    setCustomValidity(error) {
        this.inputElement.setCustomValidity(error);
    }
    firstUpdated() {
        this.setDefaultValues();
    }
    render() {
        const classes = {
            disabled: this.disabled,
            readonly: this.readonly,
            required: this.required,
            error: this.error,
            '-icon': this.icon,
        };
        classes[`-${this.size}`] = true;
        return html `
      <div class="wrapper">
        ${this.renderLabel()}
        <div class="input-wrapper ${classMap(classes)}">
          ${this.renderIcon()} ${this.renderInput()} ${this.renderIconControls()}
        </div>
        ${this.renderHelperText()}
      </div>
    `;
    }
    getAriaLabelledBy() {
        if (this.label)
            return this.labelId;
        if (this.ariaLabelledby)
            return this.ariaLabelledby;
        return undefined;
    }
    renderInput() {
        const classes = {
            'input-width-with-icon': this.type === 'number' || this.type === 'search' || this.isPasswordVisibilityEnabled(),
        };
        return html `
      <input
        .value="${this.value}"
        type="${this.type}"
        id="${ifDefined(this.id === '' ? undefined : this.id)}"
        name="${ifDefined(this.name === '' ? undefined : this.name)}"
        placeholder="${ifDefined(this.placeholder === '' ? undefined : this.placeholder)}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        minlength="${ifDefined(this.minlength === -1 ? undefined : this.minlength)}"
        maxlength="${ifDefined(this.maxlength === -1 ? undefined : this.maxlength)}"
        min="${ifDefined(this.type !== 'number' ? undefined : this.min)}"
        max="${ifDefined(this.type !== 'number' ? undefined : this.max)}"
        step="${ifDefined(this.type !== 'number' ? undefined : this.step)}"
        pattern="${ifDefined(this.pattern)}"
        @change="${this.change}"
        @input="${this.input}"
        @focus="${this._nativeFocus}"
        @blur="${this._nativeBlur}"
        @keydown="${this.keyPress}"
        @keyup="${this.keyPress}"
        aria-labelledby="${ifDefined(this.getAriaLabelledBy())}"
        aria-label="${ifDefined(this.ariaLabel ? this.ariaLabel : undefined)}"
        class="${classMap(classes)}"
      />
    `;
    }
    renderCharCounter() {
        if (!this.charCounterVisible) {
            return nothing;
        }
        const length = Math.min(String(this.value).length, this.maxlength);
        return html ` <span slot="secondary">${length}/${this.maxlength}</span> `;
    }
    renderLabel() {
        if (this.label || this.secondaryLabel) {
            return html `
        <hds-label id="${this.labelId}"
          >${this.label} <span slot="secondary">${this.secondaryLabel}</span></hds-label
        >
      `;
        }
        return nothing;
    }
    renderIcon() {
        if (!this.icon) {
            return undefined;
        }
        return html ` <hds-icon
      name="${this.icon}"
      category="${this.iconCategory}"
      size="16px"
    ></hds-icon>`;
    }
    renderHelperText() {
        if (!this.charCounterVisible && !this.errorTextVisible) {
            return nothing;
        }
        return html `
      <hds-label type="assistive" variant="error">
        ${this.errorText} ${this.renderCharCounter()}
      </hds-label>
    `;
    }
    async handleUp(e) {
        e.stopPropagation();
        e.preventDefault();
        await this.stepUp(this.step);
    }
    async handleDown(e) {
        e.stopPropagation();
        e.preventDefault();
        await this.stepDown(this.step);
    }
    async keyPress(evt) {
        evt.stopPropagation();
        await this.updateComplete;
        this.dispatchEvent(new KeyboardEvent(evt.type, evt));
    }
    setDefaultValues() {
        if (this.type === 'number') {
            if ((!this.value && parseInt(this.value, 10) !== 0) || Number.isNaN(this.value)) {
                this.value = undefined;
            }
            if (this.min === undefined ||
                Number.isNaN(this.min) ||
                (this.min === 0 && this.getAttribute('min') === '')) {
                this.min = -Infinity;
            }
            if (this.max === undefined ||
                Number.isNaN(this.max) ||
                (this.max === 0 && this.getAttribute('max') === '')) {
                this.max = Infinity;
            }
            this.value = clamp(parseInt(this.value, 10), this.min, this.max);
        }
    }
    async input(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.type === 'number') {
            this.value = clamp(this.inputElement.valueAsNumber, this.min, this.max);
        }
        else {
            this.value = this.inputElement.value;
        }
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('input', { detail: { value: this.value } }));
    }
    async changeByStep(step = 1) {
        if ((!this.value && parseInt(this.value, 10) !== 0) || Number.isNaN(this.value)) {
            this.value = 0;
        }
        this.value = clamp(parseInt(this.value, 10) + step, this.min, this.max);
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('input', {
            detail: { value: this.value },
        }));
        this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
    }
    async change(e) {
        e.stopPropagation();
        e.preventDefault();
        this.value = this.inputElement.value;
        if (this.type === 'number') {
            this.value = clamp(parseInt(this.value, 10), this.min, this.max);
            this.inputElement.value = this.value;
        }
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
    }
    isPasswordVisibilityEnabled() {
        return this.initialType === 'password' && this.passwordVisibility !== 'disabled';
    }
    renderIconControls() {
        if (this.type === 'number') {
            const iconSize = this.size === 'extra-small' ? '8px' : '16px';
            return html ` <div class="input-controls">
        <div class="input-control up" @click="${this.handleUp}">
          <hds-icon name="chevron-up" size="${iconSize}"></hds-icon>
        </div>
        <div class="input-control down" @click="${this.handleDown}">
          <hds-icon name="chevron-down" size="${iconSize}"></hds-icon>
        </div>
      </div>`;
        }
        if (this.isPasswordVisibilityEnabled()) {
            const iconName = this.passwordVisibility === 'masked' ? 'show' : 'hide';
            return html ` <div class="input-controls">
        <div class="input-control toggle-password" @click="${this.togglePassword}">
          <hds-icon name="${iconName}" size="16px"></hds-icon>
        </div>
      </div>`;
        }
        if (this.type === 'search' && this.value?.length > 0) {
            return html ` <div class="input-controls" @click="${this.clear}">
        <div class="input-control search">
          <hds-icon name="clear" size="16px"></hds-icon>
        </div>
      </div>`;
        }
        return nothing;
    }
};
Input.styles = styles;
Input.idCounter = 0;
Input.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
Input.formAssociated = true;
__decorate([
    property({ type: String, reflect: true })
], Input.prototype, "value", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "type", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "id", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "name", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "label", void 0);
__decorate([
    property({ type: String, attribute: 'secondary-label' })
], Input.prototype, "secondaryLabel", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "size", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "icon", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "pattern", void 0);
__decorate([
    property({ type: String, attribute: 'icon-category' })
], Input.prototype, "iconCategory", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "required", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "minlength", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "maxlength", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "max", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "step", void 0);
__decorate([
    property({ type: Boolean, attribute: 'char-counter' })
], Input.prototype, "charCounter", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "error", void 0);
__decorate([
    property({ type: String, attribute: 'error-text' })
], Input.prototype, "errorText", void 0);
__decorate([
    property({ type: String, attribute: 'aria-labelledby' })
], Input.prototype, "ariaLabelledby", void 0);
__decorate([
    property({ type: String, attribute: 'aria-label' })
], Input.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: String, attribute: 'password-visibility' })
], Input.prototype, "passwordVisibility", void 0);
__decorate([
    query('input')
], Input.prototype, "inputElement", void 0);
Input = Input_1 = __decorate([
    customElement('hds-input')
], Input);
export { Input };
//# sourceMappingURL=hds-input.js.map