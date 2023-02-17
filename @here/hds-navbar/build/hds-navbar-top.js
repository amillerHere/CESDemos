import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './hds-navbar-top.css.js';
/**
 * @slot logo Content for the logo image
 * @slot page-title Content for the title
 * @slot tabs-menu Content to create the menu structure in the navbar top using `hds-tab-bar` component
 * @slot right-tray Content to implement actionable items on the right hand side of the navbar top
 * @slot profile-menu Content to implement the profile details menu in the navbar top for login and profile menu controls with `hds-profile-menu` element
 */
let NavBarTop = class NavBarTop extends LitElement {
    render() {
        const classes = {};
        return html `
      <div class="hds-navbar-top-container" role="navigation">
        <div class="hds-navbar-top ${classMap(classes)}">
          <div class="hds-navbar-top-logo-container">
            <slot name="logo"></slot>
          </div>
          <hr />
          <div class="hds-navbar-top-title">
            <slot name="page-title"></slot>
          </div>
          <slot class="hds-navbar-top-tabs" name="tabs-menu"></slot>
          <div class="hds-navbar-top-right-end-container">
            <slot class="hds-navbar-top-right-tray" name="right-tray"></slot>
            <slot class="hds-navbar-top-profile-menu" name="profile-menu"></slot>
          </div>
        </div>
      </div>
    `;
    }
};
NavBarTop.styles = styles;
NavBarTop = __decorate([
    customElement('hds-navbar-top')
], NavBarTop);
export { NavBarTop };
//# sourceMappingURL=hds-navbar-top.js.map