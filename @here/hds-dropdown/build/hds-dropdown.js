import { __decorate } from "tslib";
import { customElement, BaseElement } from '@here/hds-base';
import '@here/hds-icon';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './hds-dropdown.css.js';
/**
 * @slot trigger Element to be the trigger for the dropdown menu
 * @slot toggle Label for the toggle element
 * @slot menu Element `hds-list` for the items of the dropdown menu
 *
 * @event {CustomEvent<{open: boolean}>} change Fired when the dropdown has been changed: expanded/collapsed `DropdownChangePayload`
 * @event {CustomEvent<{id: string; index: number}>} select Fired when an item from the menu has been selected `ListSelectPayload`
 */
let Dropdown = class Dropdown extends BaseElement {
    constructor() {
        super();
        this.isTabbable = true;
        this.open = false;
        this.variant = 'solid';
        this.size = 'medium';
        this.readOnly = false;
        this.disabled = false;
        this.rightAlign = false;
        this.arrow = true;
        this.toggleWidth = '';
        this._handleKeydown = this._handleKeydown.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._handleScroll = this._handleScroll.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this._addEventListeners();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._removeEventListeners();
    }
    updated(changedPropertyValues) {
        if (changedPropertyValues.has('open') && changedPropertyValues.get('open') !== undefined) {
            this.dispatchEvent(new CustomEvent('change', {
                detail: {
                    open: this.open,
                },
                bubbles: true,
                composed: true,
            }));
        }
        if (this.open) {
            this._getMenu()[0].focus();
            this._handleScroll();
        }
    }
    render() {
        const toggleClasses = {
            toggleWrapper: true,
            open: this.open,
            arrow: this.arrow,
            'read-only': this.readOnly,
            disabled: this.disabled,
        };
        toggleClasses[this.variant] = true;
        toggleClasses[`size-${this.size}`] = true;
        const toggleStyles = {
            width: this.toggleWidth,
        };
        let arrowIconElement = html ``;
        if (this.arrow) {
            arrowIconElement = html ` <hds-icon name="chevron-down" size="16px"></hds-icon>`;
        }
        const menuClasses = {
            menuWrapper: true,
            open: this.open,
            rightAlign: this.rightAlign,
        };
        return html `
      <div
        id="hds-dropdown"
        class="hds-dropdown-wrapper"
        @click="${this._handleClickInSide}"
        @select="${this._handleOnSelect}"
      >
        <div class="trigger-wrapper">
          <slot name="trigger" @click="${this._handleToggleClick}">
            <div role="button" class="${classMap(toggleClasses)}" style="${styleMap(toggleStyles)}">
              <slot name="toggle"></slot>
              ${arrowIconElement}
            </div>
          </slot>
        </div>
        <div class="${classMap(menuClasses)}">
          <slot name="menu"></slot>
        </div>
      </div>
    `;
    }
    _handleKeydown(e) {
        // emits close event on Escape key down
        if (e.key === 'Escape') {
            this._handleClose();
        }
    }
    _handleClose() {
        this.open = false;
        const menuNode = this.shadowRoot.querySelector('.menuWrapper');
        menuNode.classList.remove('reverse');
    }
    _handleClick(event) {
        if (event.target !== this) {
            this._handleClose();
        }
    }
    _removeEventListeners() {
        this.ownerDocument.removeEventListener('click', this._handleClick);
        this.ownerDocument.removeEventListener('keydown', this._handleKeydown);
        this.ownerDocument.removeEventListener('scroll', this._handleScroll);
        this.ownerDocument.removeEventListener('resize', this._handleScroll);
    }
    _addEventListeners() {
        this._removeEventListeners();
        this.ownerDocument.addEventListener('click', this._handleClick);
        this.ownerDocument.addEventListener('keydown', this._handleKeydown);
        this.ownerDocument.addEventListener('scroll', this._handleScroll);
        this.ownerDocument.addEventListener('resize', this._handleScroll);
    }
    _getOffsetTop(elem) {
        let offsetTop = 0;
        while ((elem = elem.offsetParent)) {
            offsetTop += elem.offsetTop;
        }
        return offsetTop;
    }
    async _handleOnSelect(e) {
        e.stopPropagation();
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('select', {
            detail: e.detail,
            bubbles: true,
            composed: true,
        }));
        this._handleClose();
    }
    async _handleToggleClick() {
        if (!this.open && (this.disabled || this.readOnly))
            return;
        this.open = !this.open;
    }
    _handleClickInSide(evt) {
        evt.stopPropagation();
    }
    _getMenu() {
        return this.menuSlot.assignedNodes({ flatten: true });
    }
    _handleScroll() {
        // get the top offset of the dropdown (distance from top of the page)
        const menuNode = this.shadowRoot.querySelector('.menuWrapper');
        const toggleNode = this.shadowRoot.querySelector('.trigger-wrapper');
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const toggleHeight = toggleNode.offsetHeight;
        const menuHeight = menuNode.offsetHeight;
        const topOffset = this._getOffsetTop(toggleNode) + toggleHeight;
        const relativeOffset = topOffset - scrollTop + menuHeight / 2;
        const relativeHeight = toggleHeight + menuHeight;
        if (windowHeight < relativeOffset && windowHeight > relativeHeight) {
            menuNode.classList.remove('reverse');
            menuNode.classList.add('reverse');
        }
        else {
            menuNode.classList.remove('reverse');
        }
    }
};
Dropdown.styles = styles;
Dropdown.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ type: Boolean, reflect: true })
], Dropdown.prototype, "open", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, attribute: 'read-only' })
], Dropdown.prototype, "readOnly", void 0);
__decorate([
    property({ type: Boolean })
], Dropdown.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, attribute: 'right-align' })
], Dropdown.prototype, "rightAlign", void 0);
__decorate([
    property({ type: Boolean })
], Dropdown.prototype, "arrow", void 0);
__decorate([
    property({ type: String, attribute: 'toggle-width' })
], Dropdown.prototype, "toggleWidth", void 0);
__decorate([
    query('[name="menu"]')
], Dropdown.prototype, "menuSlot", void 0);
Dropdown = __decorate([
    customElement('hds-dropdown')
], Dropdown);
export { Dropdown };
//# sourceMappingURL=hds-dropdown.js.map