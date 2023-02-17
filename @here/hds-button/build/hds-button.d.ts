import { BaseElement } from '@here/hds-base';
import { IconStyle } from '@here/hds-icon';
import { IconCategory } from '@here/hds-iconlibrary';
import { PropertyValues } from 'lit';
export declare type ButtonType = 'button' | 'submit' | 'reset';
export declare type ButtonVariant = 'primary' | 'secondary' | 'subtle' | 'success' | 'warning' | 'danger' | 'link' | 'danger-quiet' | 'success-quiet' | 'warning-quiet' | 'subtle-quiet' | 'floating' | 'on-color-primary' | 'on-color-secondary';
export declare type ButtonSize = 'extra-small' | 'small' | 'medium' | 'large';
/**
 * @slot default Label for the button
 */
export declare class Button extends BaseElement {
    static styles: import("lit").CSSResultGroup;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    variant: ButtonVariant;
    size: ButtonSize;
    disabled: boolean;
    width: any;
    icon: any;
    iconStyle: IconStyle;
    iconCategory: IconCategory;
    iconRight: string;
    iconRightCategory: IconCategory;
    iconRightStyle: IconStyle;
    ariaLabel: any;
    loading: boolean;
    type: ButtonType;
    buttonElement: HTMLButtonElement;
    labelSlot: HTMLSlotElement;
    listLabelItems: Array<Node>;
    protected iconOnly: boolean;
    protected isTabbable: boolean;
    focus(): void;
    blur(): void;
    click(): void;
    protected update(_changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private renderIcon;
    private renderSpinner;
    private isButtonDisabled;
    private getAriaLabel;
    private handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-button': Button;
    }
}
