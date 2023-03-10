import '@here/hds-icon';
import { LitElement, PropertyValues } from 'lit';
export declare type CheckboxSize = 'small' | 'medium';
export declare type CheckboxChangePayload = {
    name: string;
    id: string;
    value: string | boolean | undefined;
    checked: boolean;
};
/**
 * @summary Checkbox base class.
 *
 * @event {CustomEvent<{name: string, id: string; value: string | boolean | undefined, checked: boolean}>} change Fired when the checked value has changed `CheckboxChangePayload`
 *
 * @slot default Content placed in the label.
 * @slot description  Content placed in the description.
 */
export declare class Checkbox extends LitElement {
    static styles: import("lit").CSSResultGroup;
    static formAssociated: boolean;
    size: CheckboxSize;
    checked: boolean;
    disabled: boolean;
    required: boolean;
    indeterminate: boolean;
    id: string;
    name: string;
    ariaLabel: string;
    showRequired: boolean;
    protected formElement: HTMLInputElement;
    _value: string | boolean;
    get value(): string | boolean | undefined;
    set value(v: string | boolean | undefined);
    get defaultChecked(): boolean;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private displayIcon;
    private renderContent;
    private _changeHandler;
    private _propertyChangeHandler;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-checkbox': Checkbox;
    }
}
