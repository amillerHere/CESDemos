import { AccordionItem } from '@here/hds-accordion';
import '@here/hds-avatar';
import { IconStyle } from '@here/hds-icon';
import { nothing, PropertyValues } from 'lit';
import { VerticalNavigationMode } from './hds-vertical-navigation.js';
/**
 * @slot default Content for a `hds-vertical-navigation-sub-list` structure
 * @event {CustomEvent<{verticalNavItemId: string}>} select Fired when the item has been selected `VerticalNavigationSelectPayload`
 */
export declare class VerticalNavigationItem extends AccordionItem {
    static itemIdCounter: number;
    hasSubList: boolean;
    chevron: boolean;
    navMode: VerticalNavigationMode;
    avatarUrl: string;
    avatarName: string;
    iconStyle: IconStyle;
    selected: boolean;
    protected slotElement: HTMLSlotElement;
    private avatarElement?;
    private titleElement?;
    private titleContentElement?;
    static get styles(): any;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected renderIcon(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected render(): import("lit-html").TemplateResult<1>;
    private _setTitleNode;
    private _checkSubList;
    private _appendTitleNode;
    private _setRenderingPreference;
    private _handleClick;
    private _avatarTemplate;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-vertical-navigation-item': VerticalNavigationItem;
    }
}
