import '@here/hds-icon';
import { Panel } from '@here/hds-panel';
import { nothing } from 'lit';
export declare type NavbarSideChangePayload = {
    expanded: boolean;
};
/**
 * @slot logo Content for the logo image
 * @slot title Content for the title in the header section
 * @slot main Main content for the `hds-vertical-navigation` structure
 * @slot footer Content for the `hds-vertical-navigation` structure in the footer section
 *
 * @event {CustomEvent<{expanded: boolean}>} change Fired when sidebar state changes: expanded / collapsed `NavbarSideChangePayload`
 *
 */
export declare class NavBarSide extends Panel {
    hideHeader: boolean;
    navbarSideExpanded: boolean;
    hideToggle: boolean;
    toggleText: string;
    protected slotLogoEl: HTMLSlotElement;
    protected slotTitleEl: HTMLSlotElement;
    protected slotMainEl: HTMLSlotElement;
    protected slotFooterEl: HTMLSlotElement;
    static get styles(): any;
    firstUpdated(): void;
    protected updated(changedProperties: any): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    protected renderToggleButton(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected _handleNavItemClick(e: Event): void;
    protected _toggleNavbar(e: Event): void;
    protected renderNavbarSide(): import("lit-html").TemplateResult<1>;
    private _setNavMode;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-navbar-side': NavBarSide;
    }
}
