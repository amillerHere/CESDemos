import { Accordion } from '@here/hds-accordion';
import { PropertyValues } from 'lit';
export declare type VerticalNavigationMode = 'collapsed' | 'expanded';
export declare type VerticalNavigationSelectPayload = {
    verticalNavItemId?: string;
    verticalSubListItemId?: string;
    verticalNavItemIndex?: number;
    verticalSubListItemIndex?: number;
};
/**
 * @slot default Content for `hds-vertical-navigation-item` elements structure
 *
 * @event {CustomEvent<{verticalNavItemId?: string; verticalSubListItemId?: string; verticalNavItemIndex?: number; verticalSubListItemIndex?: number;}>} select Fired when one of the navigation items has been selected `VerticalNavigationSelectPayload`
 */
export declare class VerticalNavigation extends Accordion {
    chevron: boolean;
    navMode: VerticalNavigationMode;
    static get styles(): any;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected updated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _updateNavItems;
    private _getNavItems;
    private _handleSelected;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-vertical-navigation': VerticalNavigation;
    }
}
