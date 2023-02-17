import { LitElement } from 'lit';
export declare type AccordionVariant = 'default' | 'solid';
export declare type AccordionArrowPosition = 'start' | 'end';
export declare type AccordionExpandMode = 'one' | 'many';
export declare type AccordionChangePayload = {
    index: number;
    id: string;
    expanded: boolean;
};
/**
 * @slot default Slot for `hds-accordion-item` elements
 *
 * @event {CustomEvent<{index: number; id: string; expanded: boolean}>} change Fired when an accordion item has expanded/collapsed `AccordionChangePayload`
 */
export declare class Accordion extends LitElement {
    static styles: import("lit").CSSResultGroup;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    variant: AccordionVariant;
    arrowPosition: AccordionArrowPosition;
    expandMode: AccordionExpandMode;
    defaultExpanded: boolean;
    disabled: boolean;
    protected slotElement: HTMLSlotElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _onSlotChange;
    private _getFocusedItem;
    private _focusItemByIndex;
    private _onKeyDown;
    private _onChange;
    private _updateItems;
    private _getItems;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-accordion': Accordion;
    }
}
