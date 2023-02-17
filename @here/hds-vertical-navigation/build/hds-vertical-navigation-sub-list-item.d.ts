import { ListItem } from '@here/hds-list';
/**
 * @slot default Content for the item's label
 *
 * @event {CustomEvent<{verticalSubListItemId: string}>}  subListItemSelect (**Internal event**) Fired when item has been selected, internal use only `VerticalNavigationSelectPayload`
 */
export declare class VerticalNavigationSubListItem extends ListItem {
    hasSubList: boolean;
    subListElement: HTMLElement;
    protected slotElement: HTMLSlotElement;
    static get styles(): any;
    protected firstUpdated(): void;
    protected updated(changedProperties: any): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    private _appendSubList;
    private _handleClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-vertical-navigation-sub-list-item': VerticalNavigationSubListItem;
    }
}
