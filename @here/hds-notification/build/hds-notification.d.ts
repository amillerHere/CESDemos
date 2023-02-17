import '@here/hds-button';
import { IconStyle } from '@here/hds-icon';
import { IconCategory } from '@here/hds-iconlibrary';
import { LitElement, PropertyValues } from 'lit';
export declare type NotificationVariant = 'information' | 'confirmation' | 'warning' | 'error';
export declare type NotificationChangePayload = {
    open: boolean;
};
/**
 *
 * @slot default Main content for the notification
 *
 * @event {CustomEvent<{open: boolean}>} change Fired when the notification changes the state: open / close `NotificationChangePayload`
 * @event {CustomEvent} action Fired when the action button has been clicked
 */
export declare class Notification extends LitElement {
    static styles: import("lit").CSSResultGroup;
    open: boolean;
    notificationTitle: string;
    variant: NotificationVariant;
    duration: number;
    icon: string | undefined;
    iconCategory: IconCategory;
    iconStyle: IconStyle;
    keepNode: boolean;
    inline: boolean;
    hideClose: boolean;
    actionText?: any;
    closeAriaLabel: string;
    private _timeoutId;
    disconnectedCallback(): void;
    close(): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private clearTimeout;
    private getIconName;
    private _handleClickAction;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-notification': Notification;
    }
}
