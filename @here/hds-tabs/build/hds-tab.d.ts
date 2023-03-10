import { BaseElement } from '@here/hds-base';
import '@here/hds-icon';
import { IconCategory } from '@here/hds-iconlibrary';
import { nothing, PropertyValues } from 'lit';
export declare type TabSelectPayload = string;
/**
 *
 * @slot default Content for the label
 *
 * @event {CustomEvent<string>} tabselect (**Internal event**) Fired when item is selected, internal use only `TabSelectPayload`
 */
export declare class Tab extends BaseElement {
    static styles: import("lit").CSSResultGroup;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    isTabbable: boolean;
    icon: string;
    iconCategory: IconCategory;
    link: boolean;
    clickAction: boolean;
    externalLink: boolean;
    disabled: boolean;
    ariaControls: any;
    ariaRole: string;
    tabPanelId: string;
    selected: boolean;
    rightSideIcon: string;
    showMenu: boolean;
    protected menuItemsSlot: HTMLSlotElement;
    protected defaultSlot: HTMLSlotElement;
    get clickActionValue(): boolean;
    showSelectedTabMenu(showMenu: boolean): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected renderIcon(_icon: string, _category: IconCategory): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleKeydown;
    private hasMenuContent;
    private _renderAsLink;
    private _renderAsButton;
    private _handleClick;
    private _handleMouseMove;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-tab': Tab;
    }
}
