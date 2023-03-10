import { __decorate } from "tslib";
import { customElement, BaseElement } from '@here/hds-base';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './hds-radio.css.js';
// used for generating unique id for each radio
let radioIdCounter = 0;
/**
 * @slot default Content placed in the label.
 * @slot description  Content placed in the description.
 *
 * @event {CustomEvent<{id: string; name: string; value: string}>} change Fired when the state has changed: checked/unchecked `RadioChangePayload`
 * @event {CustomEvent<string>} selectNext (**Internal use only**) Fired when next radio element should be selected `RadioSelect`
 * @event {CustomEvent<string>} selectPrevious (**Internal use only**) Fired when previous radio element should be selected `RadioSelect`
 *
 * */
let Radio = class Radio extends BaseElement {
    constructor() {
        super(...arguments);
        this.isTabbable = true;
        this.checked = false;
        this.disabled = false;
        this.isRadioGroupDisabled = false;
        this.id = '';
        this.name = '';
        this.value = '';
        this.ariaLabel = '';
        this.tabIndex = -1;
        this.size = 'medium';
        this._handleKeydown = (e) => {
            let flag = false;
            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    this.dispatchEvent(new CustomEvent('selectNext', { detail: this.id, bubbles: true }));
                    flag = true;
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    this.dispatchEvent(new CustomEvent('selectPrevious', { detail: this.id, bubbles: true }));
                    flag = true;
                    break;
            }
            if (flag) {
                e.stopPropagation();
                e.preventDefault();
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', this._handleKeydown);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this._handleKeydown);
    }
    focus() {
        this.formElement.focus();
    }
    defaultValue() {
        return this.formElement.defaultValue;
    }
    defaultChecked() {
        return this.formElement.defaultChecked;
    }
    firstUpdated() {
        this.id = this.id || `hds-radio-${++radioIdCounter}`;
        this.name = this.name || 'hds-radio-group';
    }
    updated(_changedProperties) {
        if (this.checked && _changedProperties.get('checked') !== undefined) {
            this._handleClick();
        }
    }
    render() {
        const classes = {
            wrapper: true,
            disabled: this.disabled || this.isRadioGroupDisabled,
            '-checked': this.checked,
            'hds-radio--size-small': this.size === 'small',
        };
        return html `
      <label class="${classMap(classes)}">
        <input
          type="radio"
          tabindex="${this.tabIndex}"
          .checked="${this.checked}"
          id="${ifDefined(this.id === '' ? undefined : this.id)}"
          name="${ifDefined(this.name === '' ? undefined : this.name)}"
          .value="${this.value}"
          ?disabled="${this.disabled || this.isRadioGroupDisabled}"
          aria-label="${ifDefined(this.ariaLabel)}"
          @click="${this._handleClick}"
        />
        <div class="radio-container">
          <div class="dot"></div>
        </div>
        <div class="text-container">
          <slot class="label-text"></slot>
          <slot name="description" class="description-text"></slot>
        </div>
      </label>
    `;
    }
    _handleClick(e) {
        if (e)
            e.stopPropagation();
        this.dispatchEvent(new CustomEvent('change', {
            detail: { id: this.id, name: this.name, value: this.value },
            bubbles: true,
            composed: true,
        }));
    }
};
Radio.styles = styles;
Radio.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ type: Boolean, reflect: true })
], Radio.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Radio.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, attribute: false })
], Radio.prototype, "isRadioGroupDisabled", void 0);
__decorate([
    property({ type: String })
], Radio.prototype, "id", void 0);
__decorate([
    property({ type: String })
], Radio.prototype, "name", void 0);
__decorate([
    property({ type: String })
], Radio.prototype, "value", void 0);
__decorate([
    property({ type: String, attribute: 'aria-label' })
], Radio.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: Number, attribute: 'tabindex' })
], Radio.prototype, "tabIndex", void 0);
__decorate([
    property({ type: String, attribute: false })
], Radio.prototype, "size", void 0);
__decorate([
    query('input')
], Radio.prototype, "formElement", void 0);
Radio = __decorate([
    customElement('hds-radio')
], Radio);
export { Radio };
//# sourceMappingURL=hds-radio.js.map