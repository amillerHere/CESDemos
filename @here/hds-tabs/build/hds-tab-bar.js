import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './hds-tab-bar.css.js';
import { Tab } from './hds-tab.js';
let tabBarCounter = 0;
/**
 * @slot default Content for the list of `hds-tab` elements
 *
 * @event {CustomEvent<number>} select Fired when a tab item has been selected `TabBarSelectPayload`
 *
 */
let TabBar = class TabBar extends LitElement {
    constructor() {
        super(...arguments);
        this.selectFirstTab = false;
        this.ariaRole = 'tablist';
        this.previousTabIndex = '';
        this.tabElements = [];
    }
    firstUpdated() {
        this._setDefaultSelectedTab();
        this.id = this.id || `hds-tab-bar-${++tabBarCounter}`;
    }
    render() {
        return html `
      <div
        id="tabs"
        class="wrapper"
        role="${ifDefined(this.ariaRole)}"
        aria-label="${ifDefined(this.ariaLabel)}"
        @tabselect="${this._handleSelectedTab}"
      >
        <slot @slotchange="${this._onSlotChange}"></slot>
      </div>
    `;
    }
    _onSlotChange() {
        this.tabElements = this.tabsSlot
            .assignedNodes({ flatten: true })
            .filter((e) => e instanceof Tab);
        this._setDefaultSelectedTab();
    }
    _setDefaultSelectedTab() {
        if (this.tabElements.length === 0) {
            return;
        }
        if (this._activateFirstSelectedTab()) {
            return;
        }
        if (this.selectFirstTab) {
            this.tabElements[0].selected = true;
        }
    }
    _activateFirstSelectedTab() {
        const selectedTabs = this.tabElements.filter(tab => tab.selected);
        if (selectedTabs.length === 0) {
            return false;
        }
        this._clearActiveTab();
        selectedTabs[0].selected = true;
        return true;
    }
    async _handleSelectedTab(evt) {
        evt.stopPropagation();
        const { detail: tabId } = evt;
        const currentSelectedTab = this._getSelectedTab();
        const newSelectedTabIndex = this._getTabIndex(tabId);
        const newSelectedTab = this.tabElements.find(tab => tab.id === tabId);
        if (currentSelectedTab?.clickActionValue || newSelectedTab?.clickActionValue) {
            this._handleClickShowMenu(newSelectedTab);
        }
        if (newSelectedTabIndex !== -1) {
            this._clearActiveTab();
            this._setSelectedTab(tabId);
            if (currentSelectedTab?.id !== tabId) {
                await this.updateComplete;
                this.dispatchEvent(new CustomEvent('select', { detail: newSelectedTabIndex }));
            }
        }
    }
    _handleClickShowMenu(newSelectedTab) {
        if (newSelectedTab?.id === this.previousTabIndex) {
            newSelectedTab.showSelectedTabMenu(false);
            this.previousTabIndex = '';
        }
        else {
            this.tabElements.forEach((tab) => tab.showSelectedTabMenu(tab === newSelectedTab && tab.clickActionValue));
            this.previousTabIndex = newSelectedTab?.id;
        }
    }
    _getTabIndex(tabId) {
        return this.tabElements.findIndex(tab => tab.id === tabId);
    }
    _getSelectedTab() {
        return this.tabElements.find(tab => tab.selected);
    }
    _clearActiveTab() {
        for (const tab of this.tabElements) {
            tab.selected = false;
        }
    }
    _setSelectedTab(tabId) {
        for (const tab of this.tabElements) {
            if (tab.id === tabId) {
                tab.selected = true;
                return;
            }
        }
    }
};
TabBar.styles = styles;
__decorate([
    property({ type: Boolean, attribute: 'select-first-tab' })
], TabBar.prototype, "selectFirstTab", void 0);
__decorate([
    property({ type: String, attribute: 'aria-label' })
], TabBar.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: String, attribute: 'aria-role' })
], TabBar.prototype, "ariaRole", void 0);
__decorate([
    query('slot')
], TabBar.prototype, "tabsSlot", void 0);
TabBar = __decorate([
    customElement('hds-tab-bar')
], TabBar);
export { TabBar };
//# sourceMappingURL=hds-tab-bar.js.map