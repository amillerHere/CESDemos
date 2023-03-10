import '@here/hds-icon';
import { IconCategory } from '@here/hds-iconlibrary';
import '@here/hds-label';
import { LitElement, nothing } from 'lit';
export declare type InputType = 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'number';
export declare type PasswordVisibility = 'disabled' | 'text' | 'masked';
export declare type InputSize = 'extra-small' | 'small' | 'medium';
export declare type InputChangePayload = {
    value: number | string;
};
export declare type InputInputPayload = {
    value: number | string;
};
/**
 * @event {CustomEvent<{value: number | string}>} input Fired when the value of the element has changed `InputInputPayload`
 * @event {CustomEvent<{value: number | string}>} change Fired when an alteration to the element's value is committed by the user `InputChangePayload`
 * @event {CustomEvent<Input>} focus Fired when the element has focus
 * @event {CustomEvent<Input>} blur Fired when the element loses focus
 * @event {KeyboardEvent} keydown Fired when a key is pressed
 * @event {KeyboardEvent} keyup Fired when a key is released
 *
 */
export declare class Input extends LitElement {
    static styles: import("lit").CSSResultGroup;
    static idCounter: number;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    static formAssociated: boolean;
    value: any;
    type: InputType;
    id: string;
    name?: any;
    placeholder?: any;
    label?: any;
    secondaryLabel?: any;
    size: InputSize;
    icon?: any;
    pattern?: any;
    iconCategory: IconCategory;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    minlength: number;
    maxlength: number;
    min: any;
    max: any;
    step: number;
    charCounter: boolean;
    error: boolean;
    errorText?: any;
    ariaLabelledby?: any;
    ariaLabel: string;
    passwordVisibility: PasswordVisibility;
    inputElement: HTMLInputElement;
    protected isTabbable: boolean | undefined;
    private labelId;
    private initialType;
    protected get charCounterVisible(): boolean;
    protected get errorTextVisible(): boolean;
    connectedCallback(): void;
    clear(): void;
    focus(): void;
    blur(): void;
    private _nativeFocus;
    private _nativeBlur;
    togglePassword(): void;
    stepUp(n?: number): Promise<void>;
    stepDown(n?: number): Promise<void>;
    setSelectionRange(start: number, end: number, direction?: 'forward' | 'backward' | 'none'): void;
    setRangeText(replacement: string, start?: number, end?: number, selectionMode?: SelectionMode): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    select(): void;
    setCustomValidity(error: string): void;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected getAriaLabelledBy(): any;
    protected renderInput(): import("lit-html").TemplateResult<1>;
    protected renderCharCounter(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected renderLabel(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected renderIcon(): import("lit-html").TemplateResult<1> | undefined;
    protected renderHelperText(): import("lit-html").TemplateResult<1> | typeof nothing;
    private handleUp;
    private handleDown;
    private keyPress;
    private setDefaultValues;
    private input;
    private changeByStep;
    private change;
    private isPasswordVisibilityEnabled;
    private renderIconControls;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-input': Input;
    }
}
