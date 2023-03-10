import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import '@here/hds-icon';
import { Panel } from '@here/hds-panel';
import { VerticalNavigation, VerticalNavigationItem } from '@here/hds-vertical-navigation';
import { html, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './hds-navbar-side.css.js';
/**
 * @slot logo Content for the logo image
 * @slot title Content for the title in the header section
 * @slot main Main content for the `hds-vertical-navigation` structure
 * @slot footer Content for the `hds-vertical-navigation` structure in the footer section
 *
 * @event {CustomEvent<{expanded: boolean}>} change Fired when sidebar state changes: expanded / collapsed `NavbarSideChangePayload`
 *
 */
let NavBarSide = class NavBarSide extends Panel {
    constructor() {
        super(...arguments);
        this.hideHeader = false;
        this.navbarSideExpanded = true;
        this.hideToggle = false;
        this.toggleText = 'Hide Menu';
    }
    static get styles() {
        return [super.styles, styles];
    }
    firstUpdated() {
        super.firstUpdated();
        const slotLogoContent = this.slotLogoEl.assignedNodes({ flatten: true }) || [];
        const slotTitleContent = this.slotTitleEl.assignedNodes({ flatten: true }) || [];
        this.hideHeader = !(slotLogoContent.length > 0 || slotTitleContent.length > 0);
    }
    async updated(changedProperties) {
        await this.updateComplete;
        if (changedProperties.has('navbarSideExpanded')) {
            this.dispatchEvent(new CustomEvent('change', {
                detail: { expanded: this.navbarSideExpanded },
                bubbles: true,
            }));
        }
    }
    render() {
        return super.renderPanel(this.renderNavbarSide());
    }
    renderToggleButton() {
        if (!this.hideToggle) {
            return html `
        <button class="hds-navbar-side--toggle" @click="${this._toggleNavbar}">
          <hds-icon
            class="hds-navbar-side--toggle-icon"
            name="hide-menu"
            size="24px"
            icon-style="outline"
          ></hds-icon>
          <div class="hds-navbar-side--toggle-text">${this.toggleText}</div>
        </button>
      `;
        }
        return nothing;
    }
    _handleNavItemClick(e) {
        const elem = e.target;
        if (elem instanceof VerticalNavigationItem) {
            const subListArr = elem.querySelectorAll('hds-vertical-navigation-sub-list') || [];
            if (!this.navbarSideExpanded && subListArr.length > 0) {
                const slotMainContent = this.slotMainEl.assignedElements({
                    flatten: true,
                });
                const slotFooterContent = this.slotFooterEl.assignedElements({
                    flatten: true,
                });
                this._setNavMode(slotMainContent, slotFooterContent, 'expanded');
                this.navbarSideExpanded = true;
            }
        }
    }
    _toggleNavbar(e) {
        e.stopPropagation();
        this.navbarSideExpanded = !this.navbarSideExpanded;
        const slotMainContent = this.slotMainEl.assignedElements({ flatten: true });
        const slotFooterContent = this.slotFooterEl.assignedElements({
            flatten: true,
        });
        const navMode = !this.navbarSideExpanded ? 'collapsed' : 'expanded';
        this._setNavMode(slotMainContent, slotFooterContent, navMode);
        if (!this.navbarSideExpanded) {
            const navListItem = [
                ...slotMainContent[0].querySelectorAll('hds-vertical-navigation-item'),
                ...slotFooterContent[0].querySelectorAll('hds-vertical-navigation-item'),
            ];
            for (let i = 0; i < navListItem.length; i++) {
                navListItem[i]?.removeAttribute('expanded');
            }
        }
    }
    renderNavbarSide() {
        const classes = {
            collapsed: !this.navbarSideExpanded,
        };
        const headerClasses = {
            'hide-header': this.hideHeader,
        };
        return html `
      <div class="hds-navbar-side-container ${classMap(classes)}" role="navigation">
        <div class="hds-navbar-side--header ${classMap(headerClasses)}">
          <div class="hds-navbar-side--logo">
            <slot name="logo"></slot>
          </div>
          <div class="hds-navbar-side--title">
            <slot name="title"></slot>
          </div>
        </div>
        <div class="hds-navbar-side--main" @click="${this._handleNavItemClick}">
          <slot name="main"></slot>
        </div>
        <div class="hds-navbar-side--footer" @click="${this._handleNavItemClick}">
          <slot name="footer"></slot>
          ${this.renderToggleButton()}
        </div>
      </div>
    `;
    }
    _setNavMode(slotMainContent, slotFooterContent, navMode) {
        if (slotMainContent && slotMainContent.length) {
            if (slotMainContent[0] instanceof VerticalNavigation) {
                slotMainContent[0]?.setAttribute('nav-mode', navMode);
            }
            else {
                slotMainContent[0]
                    .querySelector('hds-vertical-navigation')
                    ?.setAttribute('nav-mode', navMode);
            }
        }
        if (slotFooterContent && slotFooterContent.length) {
            if (slotFooterContent[0] instanceof VerticalNavigation) {
                slotFooterContent[0]?.setAttribute('nav-mode', navMode);
            }
            else {
                slotFooterContent[0]
                    .querySelector('hds-vertical-navigation')
                    ?.setAttribute('nav-mode', navMode);
            }
        }
    }
};
__decorate([
    property({ type: Boolean, attribute: false })
], NavBarSide.prototype, "hideHeader", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'expanded' })
], NavBarSide.prototype, "navbarSideExpanded", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-toggle' })
], NavBarSide.prototype, "hideToggle", void 0);
__decorate([
    property({ type: String, attribute: 'toggle-text' })
], NavBarSide.prototype, "toggleText", void 0);
__decorate([
    query('slot[name=logo]')
], NavBarSide.prototype, "slotLogoEl", void 0);
__decorate([
    query('slot[name=title]')
], NavBarSide.prototype, "slotTitleEl", void 0);
__decorate([
    query('slot[name=main]')
], NavBarSide.prototype, "slotMainEl", void 0);
__decorate([
    query('slot[name=footer]')
], NavBarSide.prototype, "slotFooterEl", void 0);
NavBarSide = __decorate([
    customElement('hds-navbar-side')
], NavBarSide);
export { NavBarSide };
//# sourceMappingURL=hds-navbar-side.js.map