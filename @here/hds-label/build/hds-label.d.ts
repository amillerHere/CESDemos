import { LitElement, PropertyValues } from 'lit';
export declare type LabelVariant = 'default' | 'error' | 'warning' | 'success' | 'focus' | 'disabled';
export declare type LabelType = 'default' | 'assistive';
/**
 * @slot default Content for the primary label
 * @slot secondary Content for the secondary label, on the right
 * @slot form-element Form element to reference for accessibility
 *
 */
export declare class Label extends LitElement {
    static styles: import("lit").CSSResultGroup;
    static idCounter: number;
    for?: any;
    type: LabelType;
    variant: LabelVariant;
    protected formElement: HTMLSlotElement;
    protected secondaryLabel: HTMLDivElement;
    protected secondaryLabelSlot: HTMLSlotElement;
    private currentLabelTarget?;
    protected firstUpdated(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected renderPrimaryLabel(): import("lit-html").TemplateResult<1>;
    protected renderSecondaryLabel(): import("lit-html").TemplateResult<1>;
    protected renderFormElement(): import("lit-html").TemplateResult<1>;
    private labelClick;
    private findLabelTarget;
    private assignAriaLabelledBy;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-label': Label;
    }
}
