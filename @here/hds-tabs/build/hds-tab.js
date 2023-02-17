import { __decorate } from "tslib";
import { customElement, BaseElement } from '@here/hds-base';
import '@here/hds-icon';
import { html, LitElement, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './hds-tab.css.js';
// used for generating unique id for each tab
let tabIdCounter = 0;
/**
 *
 * @slot default Content for the label
 *
 * @event {CustomEvent<string>} tabselect (**Internal event**) Fired when item is selected, internal use only `TabSelectPayload`
 */
let Tab = class Tab extends BaseElement {
    constructor() {
        super(...arguments);
        this.isTabbable = true;
        this.icon = '';
        this.iconCategory = 'core-ui';
        this.link = false;
        this.clickAction = false;
        this.externalLink = false;
        this.disabled = false;
        this.ariaRole = 'tab';
        this.tabPanelId = '';
        this.selected = false;
        this.rightSideIcon = '';
        this.showMenu = false;
        this._handleKeydown = (e) => {
            switch (e.key) {
                case 'Enter':
                case ' ':
                    this.showMenu = true;
                    break;
                case 'Tab':
                    this.showMenu = false;
                    break;
            }
        };
    }
    get clickActionValue() {
        return this.clickAction;
    }
    showSelectedTabMenu(showMenu) {
        this.showMenu = showMenu;
        if (this.hasMenuContent()) {
            this.rightSideIcon = showMenu ? 'chevron-up' : 'chevron-down';
        }
        else {
            this.rightSideIcon = '';
        }
    }
    updated(_changedProperties) {
        if (this.selected && _changedProperties.has('selected')) {
            const tabPanelContainer = this.ownerDocument.querySelector(`[tab-bar-id="${this.parentElement.id}"]`);
            if (tabPanelContainer) {
                tabPanelContainer.selectedPanel = this.tabPanelId;
            }
        }
    }
    renderIcon(_icon, _category) {
        if (!_icon) {
            return nothing;
        }
        return html ` <hds-icon name="${_icon}" size="16px" category="${_category}"></hds-icon>`;
    }
    firstUpdated() {
        this.id = this.id || `hds-tab-${++tabIdCounter}`;
        if (this.hasMenuContent()) {
            this.rightSideIcon = 'chevron-down';
        }
        else if (this.link && this.externalLink) {
            this.rightSideIcon = 'external-link';
        }
        else {
            this.rightSideIcon = '';
        }
    }
    render() {
        const classes = {
            tab: true,
            disabled: this.disabled,
            'hds-tab--icon-label': this.icon,
            'hds-tab--icon-actionable': this.rightSideIcon,
            'external-link': this.externalLink,
        };
        const slotClasses = {
            'hds-tab-menu-wrapper--show-menu': this.showMenu,
        };
        // eslint-disable-next-line  lit-a11y/mouse-events-have-key-events
        return html `
      <div
        class="hds-tab-wrapper"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
        @mouseover="${this._handleMouseMove}"
        @mouseout="${this._handleMouseMove}"
      >
        ${this.link ? this._renderAsLink(classes) : this._renderAsButton(classes)}
        <slot id="menu" class="hds-tab-menu-wrapper ${classMap(slotClasses)}" name="menu"></slot>
      </div>
    `;
    }
    hasMenuContent() {
        return this.menuItemsSlot.assignedNodes({ flatten: true }).length !== 0;
    }
    _renderAsLink(classes) {
        return html `
      <div
        class="${classMap(classes)}"
        role="${ifDefined(this.ariaRole)}"
        aria-selected="${ifDefined(this.selected)}"
        aria-disabled="${ifDefined(this.disabled)}"
        aria-controls="${ifDefined(this.ariaControls)}"
        ?disabled="${this.disabled}"
      >
        ${this.renderIcon(this.icon, this.iconCategory)}
        <slot></slot>
        ${this.renderIcon(this.rightSideIcon, 'core-ui')}
      </div>
    `;
    }
    _renderAsButton(classes) {
        return html `
      <button
        class="${classMap(classes)}"
        role="${ifDefined(this.ariaRole)}"
        aria-selected="${ifDefined(this.selected)}"
        aria-disabled="${ifDefined(this.disabled)}"
        aria-controls="${ifDefined(this.ariaControls)}"
        ?disabled="${this.disabled}"
      >
        ${this.renderIcon(this.icon, this.iconCategory)}
        <slot></slot>
        ${this.renderIcon(this.rightSideIcon, 'core-ui')}
      </button>
    `;
    }
    async _handleClick(e) {
        await this.updateComplete;
        if (this.disabled)
            return;
        this.dispatchEvent(new CustomEvent('tabselect', { detail: this.id, bubbles: true }));
        if (this.link && this.externalLink && e && e.target && e.target.nodeName !== 'A') {
            e.preventDefault();
            e.stopPropagation();
            this.defaultSlot
                .assignedNodes()
                .find(element => element.nodeName === 'A')?.click();
        }
    }
    _handleMouseMove(e) {
        if (this.clickAction) {
            return;
        }
        if (this.rightSideIcon && !this.link) {
            e.preventDefault();
            switch (e.type) {
                case 'mouseout':
                    if (this.showMenu) {
                        this.showMenu = false;
                        this.rightSideIcon = 'chevron-down';
                    }
                    break;
                case 'mouseover':
                    if (!this.showMenu) {
                        this.showMenu = true;
                        this.rightSideIcon = 'chevron-up';
                    }
                    break;
            }
        }
    }
};
Tab.styles = styles;
Tab.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ type: String })
], Tab.prototype, "icon", void 0);
__decorate([
    property({ type: String, attribute: 'icon-category' })
], Tab.prototype, "iconCategory", void 0);
__decorate([
    property({ type: Boolean })
], Tab.prototype, "link", void 0);
__decorate([
    property({ type: Boolean, attribute: 'click-action' })
], Tab.prototype, "clickAction", void 0);
__decorate([
    property({ type: Boolean, attribute: 'external-link' })
], Tab.prototype, "externalLink", void 0);
__decorate([
    property({ type: Boolean })
], Tab.prototype, "disabled", void 0);
__decorate([
    property({ type: String, attribute: 'aria-controls' })
], Tab.prototype, "ariaControls", void 0);
__decorate([
    property({ type: String, attribute: 'aria-role' })
], Tab.prototype, "ariaRole", void 0);
__decorate([
    property({ type: String, attribute: 'tab-panel-id' })
], Tab.prototype, "tabPanelId", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Tab.prototype, "selected", void 0);
__decorate([
    state()
], Tab.prototype, "rightSideIcon", void 0);
__decorate([
    state()
], Tab.prototype, "showMenu", void 0);
__decorate([
    query('#menu')
], Tab.prototype, "menuItemsSlot", void 0);
__decorate([
    query('slot:not([name])', false)
], Tab.prototype, "defaultSlot", void 0);
Tab = __decorate([
    customElement('hds-tab')
], Tab);
export { Tab };
//# sourceMappingURL=hds-tab.js.map