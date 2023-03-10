import { LitElement, PropertyValues } from 'lit';
/**
 * @slot default Container for the `hds-tab-panel` elements
 */
export declare class TabPanelContainer extends LitElement {
    tabBarId: string;
    selectedPanel: string;
    protected panelSlots: HTMLSlotElement;
    private panelElements;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _onSlotChange;
    private _setSelectedPanel;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-tab-panel-container': TabPanelContainer;
    }
}
