import { LitElement, PropertyValues } from 'lit';
import { ListItemSelectPayload, ListItemSize } from './hds-list-item.js';
export declare type ListVariant = 'subtle' | 'subtle-divider' | 'solid';
export declare type ListPadding = 'default' | 'dense';
export declare type ListSelectPayload = {
    id: string;
    index: number;
};
/**
 * @slot default Content for the `hds-list-item` elements
 *
 * @event {CustomEvent<{id: string; index: number}>} select Fired when an item has been selected `ListSelectPayload`
 */
export declare class List extends LitElement {
    static styles: import("lit").CSSResultGroup;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    static listCounter: number;
    innerRole: string | null;
    innerAriaLabel: string | null;
    truncate: boolean;
    groupTitle: string;
    width: any;
    variant: ListVariant;
    size: ListItemSize;
    horizontalPadding: ListPadding;
    selectedIndex: number;
    protected itemsSlot: HTMLElement;
    connectedCallback(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected renderGroupTitle(): import("lit-html").TemplateResult<1> | undefined;
    protected render(): import("lit-html").TemplateResult<1>;
    protected onKeypress(evt: KeyboardEvent): Promise<void>;
    protected onSelect(e: CustomEvent<ListItemSelectPayload>): Promise<void>;
    private _onSlotChange;
    private _getFocusedItem;
    private _getItemIndex;
    private _getItems;
    private _getGroupedItems;
    private _getAllItems;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-list': List;
    }
}
