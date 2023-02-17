import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { List } from '@here/hds-list';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { VerticalNavigationItem } from './hds-vertical-navigation-item.js';
import { styles } from './hds-vertical-navigation-sub-list.css.js';
import { VerticalNavigation } from './hds-vertical-navigation.js';
/**
 * @slot default Content for the list of `hds-vertical-navigation-sub-list-item` elements
 */
let VerticalNavigationSubList = class VerticalNavigationSubList extends List {
    constructor() {
        super(...arguments);
        this.isMainSubList = false;
    }
    static get styles() {
        return [super.styles, styles];
    }
    firstUpdated() {
        if (this.parentNode instanceof VerticalNavigation ||
            this.parentNode instanceof VerticalNavigationItem) {
            this.isMainSubList = true;
        }
    }
    render() {
        const classes = {
            'main-sub-list': this.isMainSubList,
        };
        return html `
      <div class="-hds-vertical-navigation-sub-list ${classMap(classes)}">${super.render()}</div>
    `;
    }
};
__decorate([
    property({ type: Boolean, attribute: false })
], VerticalNavigationSubList.prototype, "isMainSubList", void 0);
__decorate([
    query('slot')
], VerticalNavigationSubList.prototype, "slotElement", void 0);
VerticalNavigationSubList = __decorate([
    customElement('hds-vertical-navigation-sub-list')
], VerticalNavigationSubList);
export { VerticalNavigationSubList };
//# sourceMappingURL=hds-vertical-navigation-sub-list.js.map