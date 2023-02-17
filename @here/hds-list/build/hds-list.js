var List_1;
import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ListItem } from './hds-list-item.js';
import { styles } from './hds-list.css.js';
/**
 * @slot default Content for the `hds-list-item` elements
 *
 * @event {CustomEvent<{id: string; index: number}>} select Fired when an item has been selected `ListSelectPayload`
 */
let List = List_1 = class List extends LitElement {
    constructor() {
        super(...arguments);
        this.innerRole = null;
        this.innerAriaLabel = null;
        this.truncate = true;
        this.groupTitle = '';
        this.variant = 'subtle';
        this.size = 'small';
        this.horizontalPadding = 'default';
        this.selectedIndex = -1;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id = this.id || `hds-list-${++List_1.listCounter}`;
    }
    updated(_changedProperties) {
        if (_changedProperties.has('selectedIndex') && this.selectedIndex > -1) {
            const selectedElement = this._getAllItems()[this.selectedIndex];
            for (const item of this._getAllItems()) {
                item.selected = item.id === selectedElement.id;
            }
            this.dispatchEvent(new CustomEvent('select', {
                detail: { index: this.selectedIndex, id: selectedElement.id },
                bubbles: true,
                composed: true,
            }));
        }
        const items = this._getItems(this.itemsSlot);
        for (let i = 0; i < items.length; i += 1) {
            if (_changedProperties.has('variant')) {
                items[i].groupVariant = this.variant;
            }
            if (_changedProperties.has('size')) {
                items[i].size = this.size;
            }
            if (_changedProperties.has('horizontalPadding')) {
                items[i].horizontalPadding = this.horizontalPadding;
            }
        }
    }
    renderGroupTitle() {
        if (!this.groupTitle) {
            return undefined;
        }
        return html ` <h4 class="group-title">${this.groupTitle}</h4> `;
    }
    render() {
        const role = this.innerRole || 'listbox';
        const ariaLabel = this.innerAriaLabel || 'list';
        const isNested = this.groupTitle && this.id !== 'hds-list-1';
        const classes = {
            truncate: this.truncate,
            list: true,
            nested: isNested,
        };
        classes[`hds-list-variant-${this.variant}`] = true;
        const localStyles = {
            maxWidth: 'initial',
            width: this.width,
        };
        return html `
      <div
        class="-hds-list-wrapper ${classMap(classes)}"
        style="${styleMap(localStyles)}"
        tabindex="0"
        role="${role}"
        aria-label="${ariaLabel}"
        @select="${ifDefined(!isNested ? this.onSelect : undefined)}"
        @keydown="${ifDefined(!isNested ? this.onKeypress : undefined)}"
      >
        ${this.renderGroupTitle()}
        <slot @slotchange="${this._onSlotChange}"></slot>
      </div>
    `;
    }
    async onKeypress(evt) {
        evt.preventDefault();
        const listItems = this._getAllItems();
        const itemsLen = listItems.length;
        const currentSelectedItem = this._getFocusedItem();
        const index = currentSelectedItem ? this._getItemIndex(currentSelectedItem.id) : -1;
        // eslint-disable-next-line default-case
        switch (evt.key) {
            case 'ArrowUp':
                {
                    // Up arrow
                    const prevIndex = index - 1;
                    if (prevIndex > -1) {
                        const item = listItems[prevIndex];
                        (item.shadowRoot?.querySelector('div[role="option"]')).focus();
                    }
                }
                break;
            case 'ArrowDown':
                {
                    // Down arrow
                    const nextIndex = index + 1;
                    if (nextIndex < itemsLen) {
                        const item = listItems[nextIndex];
                        (item.shadowRoot?.querySelector('div[role="option"]')).focus();
                    }
                }
                break;
            case 'Enter':
                if (currentSelectedItem && index > -1) {
                    this.selectedIndex = index;
                }
                break;
        }
    }
    async onSelect(e) {
        const selectedItemId = e.detail;
        e.stopPropagation();
        const selectedElement = this._getAllItems()[this.selectedIndex];
        if (!selectedElement || selectedItemId !== selectedElement.id) {
            this.selectedIndex = this._getItemIndex(selectedItemId);
        }
    }
    async _onSlotChange() {
        await this.updateComplete;
        if (this.selectedIndex === -1) {
            this.selectedIndex = this._getAllItems().findIndex(item => item.selected);
        }
    }
    _getFocusedItem() {
        return this._getAllItems().filter(item => item === document.activeElement)[0];
    }
    _getItemIndex(itemId) {
        return this._getAllItems().findIndex(item => item.id === itemId);
    }
    // Get list items from a list group
    _getItems(itemsSlot) {
        if (!itemsSlot)
            return [];
        return itemsSlot
            .assignedNodes({ flatten: true })
            .filter((e) => e instanceof ListItem);
    }
    // Get list items from array of list groups
    _getGroupedItems(itemsSlot) {
        if (!itemsSlot)
            return [];
        const listGroups = itemsSlot
            .assignedNodes({ flatten: true })
            .filter((e) => e instanceof List_1);
        return listGroups.reduce((prevList, currentList) => {
            const groupItems = this._getItems(currentList.itemsSlot);
            return [...prevList, ...groupItems];
        }, []);
    }
    // get all the list items from all the list groups
    _getAllItems() {
        return [
            ...this._getItems(this.itemsSlot),
            ...this._getGroupedItems(this.itemsSlot),
        ];
    }
};
List.styles = styles;
List.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
List.listCounter = 0;
__decorate([
    property({ type: String, attribute: 'inner-role' })
], List.prototype, "innerRole", void 0);
__decorate([
    property({ type: String, attribute: 'inner-aria-label' })
], List.prototype, "innerAriaLabel", void 0);
__decorate([
    property({ type: Boolean })
], List.prototype, "truncate", void 0);
__decorate([
    property({ type: String, attribute: 'group-title' })
], List.prototype, "groupTitle", void 0);
__decorate([
    property({ type: String })
], List.prototype, "width", void 0);
__decorate([
    property({ type: String, attribute: true })
], List.prototype, "variant", void 0);
__decorate([
    property({ type: String, attribute: true })
], List.prototype, "size", void 0);
__decorate([
    property({ type: String, attribute: 'horizontal-padding', reflect: true })
], List.prototype, "horizontalPadding", void 0);
__decorate([
    property({ type: Number, attribute: 'selected-index', reflect: true })
], List.prototype, "selectedIndex", void 0);
__decorate([
    query('slot')
], List.prototype, "itemsSlot", void 0);
List = List_1 = __decorate([
    customElement('hds-list')
], List);
export { List };
//# sourceMappingURL=hds-list.js.map