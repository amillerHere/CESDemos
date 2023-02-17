import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { TabPanel } from './hds-tab-panel.js';
/**
 * @slot default Container for the `hds-tab-panel` elements
 */
let TabPanelContainer = class TabPanelContainer extends LitElement {
    constructor() {
        super(...arguments);
        this.tabBarId = '';
        this.selectedPanel = '';
        this.panelElements = [];
    }
    updated(_changedProperties) {
        if (_changedProperties.has('selectedPanel')) {
            this._setSelectedPanel(this.selectedPanel);
        }
    }
    render() {
        return html ` <slot @slotchange="${this._onSlotChange}"></slot>`;
    }
    _onSlotChange() {
        this.panelElements = this.panelSlots
            .assignedNodes({ flatten: true })
            .filter(e => e instanceof TabPanel);
        this._setSelectedPanel(this.selectedPanel);
    }
    _setSelectedPanel(panelId) {
        this.panelElements.forEach(panel => {
            // eslint-disable-next-line no-param-reassign
            panel.show = panel.id === panelId;
        });
    }
};
__decorate([
    property({ type: String, reflect: true, attribute: 'tab-bar-id' })
], TabPanelContainer.prototype, "tabBarId", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'selected-panel' })
], TabPanelContainer.prototype, "selectedPanel", void 0);
__decorate([
    query('slot')
], TabPanelContainer.prototype, "panelSlots", void 0);
TabPanelContainer = __decorate([
    customElement('hds-tab-panel-container')
], TabPanelContainer);
export { TabPanelContainer };
//# sourceMappingURL=hds-tab-panel-container.js.map