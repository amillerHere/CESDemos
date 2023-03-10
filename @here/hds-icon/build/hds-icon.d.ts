import { IconCategory } from '@here/hds-iconlibrary';
import { LitElement, PropertyValues } from 'lit';
export declare type IconStyle = 'solid' | 'outline';
export declare type IconSvgSize = '8px' | '16px' | '24px';
export declare type IconNotFoundType = 'FontNotFound' | 'CategoryNotFound' | 'IconNotFound';
export declare type IconNotFoundPayload = {
    type: IconNotFoundType;
    message: string;
    category: IconCategory;
    name: string;
    style: IconStyle;
    size: IconSvgSize;
};
/**
 * @event {CustomEvent<{type: IconErrorType, message: string, category: IconCategory, name: string, style: IconStyle, size: IconSvgSize}>} notfound Fired when the icon doesn't exist. `IconNotFoundPayload`
 *
 * @cssprop --hds-icon-color  Color value for the icon
 * @cssprop --hds-icon-size   Size value for the icon, overrides the attribute `size`
 *
 * */
export declare class Icon extends LitElement {
    static styles: import("lit").CSSResultGroup;
    private static _nameByMediaType;
    name: string;
    category: IconCategory;
    iconStyle: IconStyle;
    size: string;
    ariaLabel: string;
    errorEventPayload?: IconNotFoundPayload;
    private svgSize;
    static getNameByMediaType(type: string): any;
    protected updated(_changedProperties: PropertyValues): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-icon': Icon;
    }
}
