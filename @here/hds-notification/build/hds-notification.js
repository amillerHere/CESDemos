import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import '@here/hds-button';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './hds-notification.css.js';
/**
 *
 * @slot default Main content for the notification
 *
 * @event {CustomEvent<{open: boolean}>} change Fired when the notification changes the state: open / close `NotificationChangePayload`
 * @event {CustomEvent} action Fired when the action button has been clicked
 */
let Notification = class Notification extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
        this.notificationTitle = '';
        this.variant = 'information';
        this.duration = 3;
        this.icon = undefined;
        this.iconCategory = 'core-ui';
        this.iconStyle = 'outline';
        this.keepNode = false;
        this.inline = false;
        this.hideClose = false;
        this.closeAriaLabel = 'Close';
        // eslint-disable-next-line no-undef
        this._timeoutId = null;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.clearTimeout();
    }
    close() {
        this.open = false;
        this.clearTimeout();
        if (!this.keepNode) {
            this.remove();
        }
    }
    updated(changedProperties) {
        if (changedProperties.has('open') && changedProperties.get('open') !== undefined) {
            this.dispatchEvent(new CustomEvent('change', {
                detail: {
                    open: this.open,
                },
            }));
        }
        if (this.open && this._timeoutId === null && this.duration > 0) {
            this._timeoutId = setTimeout(() => {
                this.close();
            }, this.duration * 1000);
        }
    }
    render() {
        const classes = {
            open: this.open,
            information: this.variant === 'information',
            confirmation: this.variant === 'confirmation',
            warning: this.variant === 'warning',
            error: this.variant === 'error',
            inline: this.inline,
        };
        return html `
      <div
        id="notification"
        class="wrapper ${classMap(classes)}"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <div class="hds-notification__icon">
          <hds-icon
            name="${this.getIconName()}"
            size="24px"
            category="${this.iconCategory}"
            icon-style="${this.iconStyle}"
          ></hds-icon>
        </div>
        <div class="hds-notification__content-wrapper">
          <div class="hds-notification__content">
            ${!this.inline
            ? html ` <div class="hds-notification__header">${this.notificationTitle}</div>`
            : ''}
            <slot></slot>
          </div>
          
          ${this.inline && this.actionText
            ? html ` <div class="hds-notification__action">
                  <hds-button variant="link" @click="${this._handleClickAction}" size="small"
                    >${this.actionText}
                  </hds-button>
                </div>`
            : ''}
          
          ${this.hideClose
            ? ''
            : html ` <hds-button
                  class="clear"
                  icon="cross"
                  variant="subtle"
                  @click="${this.close}"
                  size="small"
                  aria-label="${this.closeAriaLabel}"
                ></hds-button>`}
        </div>
      </div>
      </div>`;
    }
    clearTimeout() {
        if (this._timeoutId !== null) {
            clearTimeout(this._timeoutId);
        }
    }
    getIconName() {
        if (this.icon) {
            return this.icon;
        }
        this.iconCategory = 'core-ui';
        switch (this.variant) {
            case 'information':
                return 'information';
            case 'confirmation':
                return 'confirm';
            case 'warning':
                return 'attention';
            case 'error':
                return 'alert';
            default:
                return 'information';
        }
    }
    _handleClickAction() {
        this.dispatchEvent(new CustomEvent('action'));
    }
};
Notification.styles = styles;
__decorate([
    property({ type: Boolean, reflect: true })
], Notification.prototype, "open", void 0);
__decorate([
    property({ type: String, attribute: 'notification-title', reflect: true })
], Notification.prototype, "notificationTitle", void 0);
__decorate([
    property({ type: String })
], Notification.prototype, "variant", void 0);
__decorate([
    property({ type: Number })
], Notification.prototype, "duration", void 0);
__decorate([
    property({ type: String })
], Notification.prototype, "icon", void 0);
__decorate([
    property({ type: String, attribute: 'icon-category' })
], Notification.prototype, "iconCategory", void 0);
__decorate([
    property({ type: String, attribute: 'icon-style' })
], Notification.prototype, "iconStyle", void 0);
__decorate([
    property({ type: Boolean, attribute: 'keep-node' })
], Notification.prototype, "keepNode", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Notification.prototype, "inline", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'hide-close' })
], Notification.prototype, "hideClose", void 0);
__decorate([
    property({ type: String, attribute: 'action-text' })
], Notification.prototype, "actionText", void 0);
__decorate([
    property({ type: String, attribute: 'close-aria-label' })
], Notification.prototype, "closeAriaLabel", void 0);
Notification = __decorate([
    customElement('hds-notification')
], Notification);
export { Notification };
//# sourceMappingURL=hds-notification.js.map