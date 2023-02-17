import { List } from '@here/hds-list';
/**
 * @slot default Content for the list of `hds-vertical-navigation-sub-list-item` elements
 */
export declare class VerticalNavigationSubList extends List {
    isMainSubList: boolean;
    protected slotElement: HTMLSlotElement;
    static get styles(): any;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-vertical-navigation-sub-list': VerticalNavigationSubList;
    }
}
