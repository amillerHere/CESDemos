import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import '@here/hds-avatar';
import '@here/hds-icon';
import '@here/hds-list';
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './hds-profile-menu.css.js';
/**
 * @slot default Content for the `hds-list-item` elements for the menu
 *
 * @event {CustomEvent<{open: boolean}>} change Fired when the menu state has changed: open / close `ProfileMenuChangePayload`
 */
let ProfileMenu = class ProfileMenu extends LitElement {
    constructor() {
        super(...arguments);
        this.profileName = '';
        this.profileEmail = '';
        this.avatarImageUrl = '';
        this.open = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this._handleDocumentClickRef = this._handleDocumentClick.bind(this);
        this.ownerDocument.addEventListener('click', this._handleDocumentClickRef);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.ownerDocument.removeEventListener('click', this._handleDocumentClickRef);
    }
    updated(changedProperties) {
        if (changedProperties.has('open') && changedProperties.get('open') !== undefined) {
            this.dispatchEvent(new CustomEvent('change', {
                detail: {
                    open: this.open,
                },
            }));
        }
    }
    renderAvatar(size) {
        return html `
      <hds-avatar
        name="${this.profileName}"
        image-url="${this.avatarImageUrl}"
        size="${size}"
      ></hds-avatar>
    `;
    }
    render() {
        const menuClasses = {
            'hds-profile-menu-show': this.open,
        };
        const loggedIn = this.profileName || this.profileEmail || this.avatarImageUrl;
        // temporary measure for logged in User
        return html `
      <div class="hds-profile-menu-wrapper">
        <div class="hds-profile-menu-closed-avatar" tabindex="0" @click="${this._handleClick}">
          <span class="hds-avatar-wrapper" aria-label="${this.profileName} profile" role="button">
            ${this.renderAvatar('medium')}
          </span>
          <span class="hds-profile-menu-icon-wrapper">
            <hds-icon name="chevron-down" size="8px"></hds-icon>
          </span>
        </div>
        <div class="hds-profile-menu ${classMap(menuClasses)}">
          ${(loggedIn &&
            html ` <div class="hds-profile-details">
              <span
                class="hds-profile-details-avatar-wrapper"
                aria-label="${this.profileName} profile"
                role="button"
                tabindex="0"
              >
                ${this.renderAvatar('large')}
              </span>
              <span class="hds-profile-details-text-container">
                <span class="hds-profile-details-text hds-profile-details-text--name">
                  ${this.profileName}
                </span>
                <span class="hds-profile-details-text hds-profile-details-text--email">
                  ${this.profileEmail}
                </span>
              </span>
            </div>`) ||
            nothing}
          <slot></slot>
        </div>
      </div>
    `;
    }
    _handleDocumentClick() {
        // e.preventDefault hasn't been added since this listener works on the entire document and shall not prevent default
        if (this.open) {
            this.open = false;
        }
    }
    _handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.open = !this.open;
    }
};
ProfileMenu.styles = styles;
__decorate([
    property({ type: String, attribute: 'profile-name' })
], ProfileMenu.prototype, "profileName", void 0);
__decorate([
    property({ type: String, attribute: 'profile-email' })
], ProfileMenu.prototype, "profileEmail", void 0);
__decorate([
    property({ type: String, attribute: 'avatar-image-url' })
], ProfileMenu.prototype, "avatarImageUrl", void 0);
__decorate([
    property({ type: Boolean, attribute: 'open', reflect: true })
], ProfileMenu.prototype, "open", void 0);
ProfileMenu = __decorate([
    customElement('hds-profile-menu')
], ProfileMenu);
export { ProfileMenu };
//# sourceMappingURL=hds-profile-menu.js.map