import { LitElement } from 'lit';
export declare type TabBarSelectPayload = number;
/**
 * @slot default Content for the list of `hds-tab` elements
 *
 * @event {CustomEvent<number>} select Fired when a tab item has been selected `TabBarSelectPayload`
 *
 */
export declare class TabBar extends LitElement {
    static styles: import("lit").CSSResultGroup;
    selectFirstTab: boolean;
    ariaLabel: any;
    ariaRole: string;
    previousTabIndex: string;
    protected tabsSlot: HTMLElement;
    private tabElements;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _onSlotChange;
    private _setDefaultSelectedTab;
    private _activateFirstSelectedTab;
    private _handleSelectedTab;
    private _handleClickShowMenu;
    private _getTabIndex;
    private _getSelectedTab;
    private _clearActiveTab;
    private _setSelectedTab;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-tab-bar': TabBar;
    }
}
