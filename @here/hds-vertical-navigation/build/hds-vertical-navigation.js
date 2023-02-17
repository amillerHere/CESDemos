import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { Accordion } from '@here/hds-accordion';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './hds-vertical-navigation.css.js';
import { VerticalNavigationItem } from './hds-vertical-navigation-item.js';
/**
 * @slot default Content for `hds-vertical-navigation-item` elements structure
 *
 * @event {CustomEvent<{verticalNavItemId?: string; verticalSubListItemId?: string; verticalNavItemIndex?: number; verticalSubListItemIndex?: number;}>} select Fired when one of the navigation items has been selected `VerticalNavigationSelectPayload`
 */
let VerticalNavigation = class VerticalNavigation extends Accordion {
    constructor() {
        super(...arguments);
        this.chevron = false;
        this.navMode = 'expanded';
    }
    static get styles() {
        return [super.styles, styles];
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (this.chevron) {
            this.arrowPosition = 'start';
        }
    }
    updated() {
        super.updated();
        this._updateNavItems();
    }
    render() {
        const classes = {
            'nav-expanded': this.navMode === 'expanded',
            'nav-collapsed': this.navMode === 'collapsed',
        };
        return html `
      <div
        class="-hds-vertical-navigation ${classMap(classes)}"
        @select="${this._handleSelected}"
        @subListItemSelect="${this._handleSelected}"
      >
        ${super.render()}
      </div>
    `;
    }
    _updateNavItems() {
        const items = this._getNavItems();
        for (let i = 0; i < items.length; i += 1) {
            items[i].chevron = this.chevron;
            items[i].navMode = this.navMode;
        }
    }
    _getNavItems() {
        return this.slotElement
            .assignedNodes({ flatten: true })
            .filter((e) => e instanceof VerticalNavigationItem);
    }
    async _handleSelected(evt) {
        evt.stopPropagation();
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('select', {
            detail: evt.detail,
            bubbles: true,
            composed: true,
        }));
    }
};
__decorate([
    property({ type: Boolean })
], VerticalNavigation.prototype, "chevron", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'nav-mode' })
], VerticalNavigation.prototype, "navMode", void 0);
VerticalNavigation = __decorate([
    customElement('hds-vertical-navigation')
], VerticalNavigation);
export { VerticalNavigation };
//# sourceMappingURL=hds-vertical-navigation.js.map