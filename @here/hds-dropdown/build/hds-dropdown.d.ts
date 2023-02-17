import { BaseElement } from '@here/hds-base';
import '@here/hds-icon';
import { PropertyValues } from 'lit';
export declare type DropdownVariant = 'solid' | 'subtle';
export declare type DropdownSize = 'small' | 'medium' | 'large';
export declare type DropdownChangePayload = {
    open: boolean;
};
/**
 * @slot trigger Element to be the trigger for the dropdown menu
 * @slot toggle Label for the toggle element
 * @slot menu Element `hds-list` for the items of the dropdown menu
 *
 * @event {CustomEvent<{open: boolean}>} change Fired when the dropdown has been changed: expanded/collapsed `DropdownChangePayload`
 * @event {CustomEvent<{id: string; index: number}>} select Fired when an item from the menu has been selected `ListSelectPayload`
 */
export declare class Dropdown extends BaseElement {
    static styles: import("lit").CSSResultGroup;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    isTabbable: boolean;
    open: boolean;
    variant: DropdownVariant;
    size: DropdownSize;
    readOnly: boolean;
    disabled: boolean;
    rightAlign: boolean;
    arrow: boolean;
    toggleWidth: string;
    protected menuSlot: HTMLElement;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedPropertyValues: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleKeydown;
    private _handleClose;
    private _handleClick;
    private _removeEventListeners;
    private _addEventListeners;
    private _getOffsetTop;
    private _handleOnSelect;
    private _handleToggleClick;
    private _handleClickInSide;
    private _getMenu;
    private _handleScroll;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-dropdown': Dropdown;
    }
}
