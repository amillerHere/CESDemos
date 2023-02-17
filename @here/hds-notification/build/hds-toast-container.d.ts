import { IconStyle } from '@here/hds-icon';
import { IconCategory } from '@here/hds-iconlibrary';
import { LitElement } from 'lit';
import { NotificationChangePayload, NotificationVariant } from './hds-notification.js';
export declare type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export declare class ToastContainer extends LitElement {
    static styles: import("lit").CSSResultGroup;
    position: NotificationPosition;
    protected render(): import("lit-html").TemplateResult<1>;
}
export interface ToastProps {
    title: string;
    body?: string;
    bodyTemplateElementId?: string;
    variant?: NotificationVariant;
    duration?: number;
    position?: NotificationPosition;
    icon?: string;
    iconStyle?: IconStyle;
    iconCategory?: IconCategory;
    onChange?: (e: CustomEvent<NotificationChangePayload>) => void;
    onAction?: (e: CustomEvent) => void;
}
export declare const toast: ({ title, body, bodyTemplateElementId, variant, duration, position, icon, iconStyle, iconCategory, onChange, onAction, }: ToastProps) => void;
declare global {
    interface HTMLElementTagNameMap {
        'hds-toast-container': ToastContainer;
    }
}
