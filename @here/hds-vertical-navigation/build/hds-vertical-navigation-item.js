var VerticalNavigationItem_1;
import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { AccordionItem } from '@here/hds-accordion';
import '@here/hds-avatar';
import { html, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './hds-vertical-navigation-item.css.js';
import { VerticalNavigationSubList } from './hds-vertical-navigation-sub-list.js';
/**
 * @slot default Content for a `hds-vertical-navigation-sub-list` structure
 * @event {CustomEvent<{verticalNavItemId: string}>} select Fired when the item has been selected `VerticalNavigationSelectPayload`
 */
let VerticalNavigationItem = VerticalNavigationItem_1 = class VerticalNavigationItem extends AccordionItem {
    constructor() {
        super(...arguments);
        this.hasSubList = false;
        this.chevron = false;
        this.navMode = 'expanded';
        this.avatarUrl = '';
        this.avatarName = '';
        this.iconStyle = 'solid';
        this.selected = false;
    }
    static get styles() {
        return [super.styles, styles];
    }
    firstUpdated(_changedProperties) {
        this.id = this.id ?? `hds-vertical-navigation-item-${++VerticalNavigationItem_1.itemIdCounter}`;
        const slotContent = this.slotElement.assignedNodes({ flatten: true });
        this._setTitleNode(slotContent);
        this._checkSubList(slotContent);
        this._setRenderingPreference();
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (!this.disabled && this.selected && _changedProperties.has('selected')) {
            this.dispatchEvent(new CustomEvent('select', {
                detail: { verticalNavItemId: this.id, verticalNavItemIndex: this.index },
                bubbles: true,
                composed: true,
            }));
        }
    }
    renderIcon() {
        if (!this.icon)
            return nothing;
        return html `
      <hds-icon
        class="icon"
        name="${this.icon}"
        category="${this.iconCategory}"
        icon-style="${this.iconStyle}"
        size="24px"
      ></hds-icon>
    `;
    }
    render() {
        const classes = {
            'has-sub-list': this.hasSubList,
            'has-chevron': this.chevron,
            'has-avatar': this.avatarUrl || this.avatarName,
            'nav-expanded': this.navMode === 'expanded',
            'nav-collapsed': this.navMode === 'collapsed',
            selected: this.selected,
        };
        return html `
      <div
        class="-hds-vertical-navigation-item ${classMap(classes)}"
        aria-selected="${ifDefined(this.selected)}"
        tabindex="0"
        @click="${this._handleClick}"
      >
        ${this._avatarTemplate()} ${super.render()}
      </div>
    `;
    }
    _setTitleNode(slotContent) {
        const titleNodeArr = slotContent.filter((e) => e.nodeType === Node.ELEMENT_NODE);
        if (titleNodeArr.length !== 0 && !(titleNodeArr[0] instanceof VerticalNavigationSubList)) {
            this._appendTitleNode(titleNodeArr[0]);
        }
    }
    _checkSubList(slotContent) {
        const subListContent = slotContent.filter((e) => e instanceof VerticalNavigationSubList);
        if (subListContent.length !== 0) {
            this.hasSubList = true;
        }
        else {
            this.hasSubList = false;
        }
    }
    _appendTitleNode(titleNode) {
        this.headline = '';
        this.titleContentElement?.append(titleNode);
    }
    _setRenderingPreference() {
        if (this.avatarUrl || this.avatarName) {
            this.chevron = false;
            this.icon = '';
            this.avatarElement && this.titleElement?.prepend(this.avatarElement);
        }
        else if (this.icon) {
            this.chevron = false;
        }
    }
    async _handleClick(e) {
        e.stopPropagation();
        if (!this.disabled)
            this.selected = true;
    }
    _avatarTemplate() {
        if (this.avatarUrl || this.avatarName) {
            return html ` <hds-avatar
        size="medium"
        name="${ifDefined(this.avatarName)}"
        image-url="${ifDefined(this.avatarUrl)}"
      ></hds-avatar>`;
        }
        return nothing;
    }
};
VerticalNavigationItem.itemIdCounter = 0;
__decorate([
    property({ type: Boolean, attribute: false })
], VerticalNavigationItem.prototype, "hasSubList", void 0);
__decorate([
    property({ type: Boolean, attribute: false })
], VerticalNavigationItem.prototype, "chevron", void 0);
__decorate([
    property({ type: String, attribute: false })
], VerticalNavigationItem.prototype, "navMode", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'avatar-url' })
], VerticalNavigationItem.prototype, "avatarUrl", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'avatar-name' })
], VerticalNavigationItem.prototype, "avatarName", void 0);
__decorate([
    property({ type: String, attribute: 'icon-style' })
], VerticalNavigationItem.prototype, "iconStyle", void 0);
__decorate([
    property({ type: Boolean, attribute: true, reflect: true })
], VerticalNavigationItem.prototype, "selected", void 0);
__decorate([
    query('slot')
], VerticalNavigationItem.prototype, "slotElement", void 0);
__decorate([
    query('hds-avatar')
], VerticalNavigationItem.prototype, "avatarElement", void 0);
__decorate([
    query('.headline')
], VerticalNavigationItem.prototype, "titleElement", void 0);
__decorate([
    query('.headline-text')
], VerticalNavigationItem.prototype, "titleContentElement", void 0);
VerticalNavigationItem = VerticalNavigationItem_1 = __decorate([
    customElement('hds-vertical-navigation-item')
], VerticalNavigationItem);
export { VerticalNavigationItem };
//# sourceMappingURL=hds-vertical-navigation-item.js.map