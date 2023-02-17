import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { ListItem } from '@here/hds-list';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './hds-vertical-navigation-sub-list-item.css.js';
import { VerticalNavigationSubList } from './hds-vertical-navigation-sub-list.js';
/**
 * @slot default Content for the item's label
 *
 * @event {CustomEvent<{verticalSubListItemId: string}>}  subListItemSelect (**Internal event**) Fired when item has been selected, internal use only `VerticalNavigationSelectPayload`
 */
let VerticalNavigationSubListItem = class VerticalNavigationSubListItem extends ListItem {
    constructor() {
        super(...arguments);
        this.hasSubList = false;
    }
    static get styles() {
        return [super.styles, styles];
    }
    firstUpdated() {
        super.firstUpdated();
        const parentElem = this.parentNode;
        const slotContent = this.slotElement
            .assignedNodes({ flatten: true })
            .filter((e) => e instanceof VerticalNavigationSubList);
        if (parentElem instanceof VerticalNavigationSubList &&
            parentElem.classList.contains('disabled')) {
            this.disabled = true;
        }
        if (slotContent.length !== 0) {
            this.hasSubList = true;
            this._appendSubList(slotContent);
        }
        else {
            this.hasSubList = false;
        }
        if (this.hasTooltip) {
            this.hasTooltip = false;
        }
    }
    async updated(changedProperties) {
        if (changedProperties.has('selected')) {
            if (this.selected && !this.disabled) {
                this.dispatchEvent(new CustomEvent('subListItemSelect', {
                    detail: { verticalSubListItemId: this.id },
                    bubbles: true,
                    composed: true,
                }));
            }
        }
    }
    render() {
        const classes = {
            disabled: this.disabled,
        };
        return html `
      <div
        class="-hds-vertical-navigation-sub-list-item ${classMap(classes)}"
        @click="${this._handleClick}"
      >
        <div class="main-list-wrapper">${super.render()}</div>
        <div class="sub-list-wrapper"></div>
      </div>
    `;
    }
    _appendSubList(slotContent) {
        for (let i = 0; i < slotContent.length; i += 1) {
            if (this.disabled) {
                slotContent[i].classList.add('disabled');
            }
            this.subListElement.append(slotContent[i]);
        }
    }
    _handleClick(e) {
        e.stopPropagation();
    }
};
__decorate([
    property({ type: Boolean, attribute: false, reflect: true })
], VerticalNavigationSubListItem.prototype, "hasSubList", void 0);
__decorate([
    query('.sub-list-wrapper')
], VerticalNavigationSubListItem.prototype, "subListElement", void 0);
__decorate([
    query('slot')
], VerticalNavigationSubListItem.prototype, "slotElement", void 0);
VerticalNavigationSubListItem = __decorate([
    customElement('hds-vertical-navigation-sub-list-item')
], VerticalNavigationSubListItem);
export { VerticalNavigationSubListItem };
//# sourceMappingURL=hds-vertical-navigation-sub-list-item.js.map