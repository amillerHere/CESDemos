import '@here/hds-avatar';
import '@here/hds-icon';
import '@here/hds-list';
import { LitElement, PropertyValues } from 'lit';
export declare type ProfileMenuChangePayload = {
    open: boolean;
};
/**
 * @slot default Content for the `hds-list-item` elements for the menu
 *
 * @event {CustomEvent<{open: boolean}>} change Fired when the menu state has changed: open / close `ProfileMenuChangePayload`
 */
export declare class ProfileMenu extends LitElement {
    static styles: import("lit").CSSResultGroup;
    profileName: string;
    profileEmail: string;
    avatarImageUrl: string;
    open: boolean;
    private _handleDocumentClickRef;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProperties: PropertyValues): void;
    protected renderAvatar(size: any): import("lit-html").TemplateResult<1>;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleDocumentClick;
    private _handleClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-profile-menu': ProfileMenu;
    }
}
