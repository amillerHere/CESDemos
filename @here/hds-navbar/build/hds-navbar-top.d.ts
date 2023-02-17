import { LitElement } from 'lit';
/**
 * @slot logo Content for the logo image
 * @slot page-title Content for the title
 * @slot tabs-menu Content to create the menu structure in the navbar top using `hds-tab-bar` component
 * @slot right-tray Content to implement actionable items on the right hand side of the navbar top
 * @slot profile-menu Content to implement the profile details menu in the navbar top for login and profile menu controls with `hds-profile-menu` element
 */
export declare class NavBarTop extends LitElement {
    static styles: import("lit").CSSResultGroup;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-navbar-top': NavBarTop;
    }
}
