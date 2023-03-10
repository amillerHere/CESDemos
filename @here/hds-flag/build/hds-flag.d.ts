import '@here/hds-icon';
import { IconCategory } from '@here/hds-iconlibrary';
import '@here/hds-tooltip';
import { LitElement, nothing, PropertyValues } from 'lit';
export declare type FlagVariant = 'subtle' | 'warning' | 'success' | 'error' | 'custom' | 'subtle-quiet' | 'warning-quiet' | 'success-quiet' | 'error-quiet' | 'custom-quiet';
export declare type FlagSize = 'small' | 'medium' | 'large';
/**
 * @slot default Content for the Flag label
 *
 * @cssprop --hds-flag-custom-accent-color Accent color value
 * @cssprop --hds-flag-custom-font-color Font color value
 * @cssprop --hds-icon-color Icon color value
 */
export declare class Flag extends LitElement {
    static flagIdCounter: number;
    static styles: import("lit").CSSResultGroup;
    variant: FlagVariant;
    size: FlagSize;
    icon: any;
    iconCategory: IconCategory;
    protected slotElement: HTMLSlotElement;
    protected labelEl: HTMLElement;
    protected slotItemsList: HTMLSlotElement;
    private iconOnly;
    connectedCallback(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected renderIcon(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-flag': Flag;
    }
}
