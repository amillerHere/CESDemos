import '@here/hds-icon';
import { IconCategory } from '@here/hds-iconlibrary';
import { LitElement, nothing, PropertyValues } from 'lit';
import { AccordionArrowPosition, AccordionVariant } from './hds-accordion.js';
/**
 * @summary Item for Accordion component
 * @slot default Content of the Accordion item
 *
 * @event {CustomEvent<{index: number; id: string; expanded: boolean}>} change Fired when the item has expanded/collapsed `AccordionChangePayload`
 */
export declare class AccordionItem extends LitElement {
    static styles: import("lit").CSSResultGroup;
    static itemIdCounter: number;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    variant: AccordionVariant;
    arrowPosition: AccordionArrowPosition;
    disabled: boolean;
    isAccordionDisabled: boolean;
    headline: string;
    expanded: boolean;
    icon?: string;
    iconCategory: IconCategory;
    isLastChild: boolean;
    isFirstChild: boolean;
    index: number;
    buttonElement: HTMLDivElement;
    connectedCallback(): void;
    focus(): void;
    blur(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected renderIcon(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected render(): import("lit-html").TemplateResult<1>;
    private _toggle;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-accordion-item': AccordionItem;
    }
}
