import { BaseElement } from '@here/hds-base';
import '@here/hds-icon';
import { IconCategory } from '@here/hds-iconlibrary';
import '@here/hds-tooltip';
import { nothing, PropertyValues } from 'lit';
import { ListPadding, ListVariant } from './hds-list.js';
export declare type ListItemSize = 'small' | 'medium' | 'large' | 'extra-large';
export declare type ListItemVariant = 'default' | 'success' | 'error';
export declare type ListItemSelectPayload = string;
/**
 * @slot default Content for the item label
 *
 * @event {CustomEvent<string>} select Fired when the element has been selected with the id of the list item `ListItemSelectPayload`
 */
export declare class ListItem extends BaseElement {
    static styles: import("lit").CSSResultGroup;
    static itemIdCounter: number;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    isTabbable: boolean;
    disabled: boolean;
    selected: boolean;
    dragging: boolean;
    icon?: string;
    iconCategory: IconCategory;
    hasTooltip: boolean;
    hasAnchor: boolean;
    variant: ListItemVariant;
    groupVariant: ListVariant;
    size: ListItemSize;
    horizontalPadding: ListPadding;
    protected listItemContentSlot: HTMLSlotElement;
    protected textContainer: HTMLElement;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected renderIcon(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected onItemClick(): Promise<void>;
    private renderTooltip;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-list-item': ListItem;
    }
}
