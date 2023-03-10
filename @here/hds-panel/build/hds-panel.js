var Panel_1;
import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { html, LitElement, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { styles } from './hds-panel.css.js';
/**
 * @slot default Main content for panel container
 *
 * @event {CustomEvent<{expanded: PanelExpansion; resized: boolean}>} change Fired when there is change in element's state: expanded / collapsed / resized `PanelChangePayload`
 */
let Panel = Panel_1 = class Panel extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = 'vertical';
        this.panelPosition = 'left';
        this.panelInteraction = 'none';
        this.partialSize = 0;
        this.expanded = 'open';
        this.overlay = false;
        this.resizing = false;
        this._showPeek = false;
        this._handleWidth = 0;
        this._handleHeight = 0;
    }
    firstUpdated() {
        this._handleWidth = this.handleElement?.offsetWidth;
        this._handleHeight = this.handleElement?.offsetHeight;
        this.containerComputedStyle = getComputedStyle(this.wrapperElement);
        this.id = this.id || `hds-panel-${++Panel_1.panelCounter}`;
    }
    toggle() {
        this._handleToggle();
    }
    open() {
        this._resetWrapperStyles();
    }
    close() {
        this.partialSize && !Number.isNaN(this.partialSize) && this.partialSize > 0 && !this._showPeek
            ? this._handleToggle()
            : (this.expanded = 'closed');
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if ((_changedProperties.has('expanded') && _changedProperties.get('expanded') !== undefined) ||
            (_changedProperties.has('resizing') && _changedProperties.get('resizing') !== undefined)) {
            this.dispatchEvent(new CustomEvent('change', {
                detail: {
                    expanded: this.expanded,
                    resized: this.resizing,
                },
                bubbles: true,
            }));
        }
    }
    renderPanel(template = undefined) {
        return html `
      <div class="-hds-panel-wrapper ${this.expanded}">
        <div class="content" role="region" tabindex="0">
          ${template !== undefined ? template : html ` <slot></slot>`}
        </div>
        ${this.panelInteraction !== 'none' ? this._renderHandle() : nothing}
      </div>
    `;
    }
    render() {
        return this.renderPanel();
    }
    _handleResize(e) {
        e.preventDefault();
        e.stopPropagation();
        this.resizing = true;
        // eslint-disable-next-line wc/no-self-class
        this.classList.add('resizing');
        let newWidth = 0;
        let newHeight = 0;
        if (this.variant === 'vertical') {
            let newMedianRight = this._right - e.clientX;
            if (this.panelPosition === 'right') {
                if (newMedianRight <= 0)
                    newMedianRight = 0;
                newWidth = Math.floor(newMedianRight - this._handleWidth / 2);
                if (this.partialSize && newWidth <= this.partialSize)
                    return;
                this.wrapperElement.style.gridTemplateColumns = `${this._handleWidth}px ${newWidth}px`;
                this.wrapperElement.style.width = 'auto';
            }
            else {
                let newMedianLeft = e.clientX - this._left;
                if (newMedianLeft <= 0)
                    newMedianLeft = 0;
                newWidth = Math.floor(newMedianLeft - this._handleWidth / 2);
                if (this.partialSize && newWidth < this.partialSize)
                    return;
                this.wrapperElement.style.gridTemplateColumns = `${newWidth}px ${this._handleWidth}px`;
                this.wrapperElement.style.width = 'auto';
            }
        }
        else if (this.variant === 'horizontal') {
            const newMedianTop = e.clientY - this._top;
            if (this.panelPosition === 'top') {
                newHeight = Math.floor(newMedianTop - this._handleHeight / 2);
                if (this.partialSize && newHeight < this.partialSize)
                    return;
                this.wrapperElement.style.gridTemplateRows = `calc(${newHeight}px) ${this._handleHeight}px`;
                this.wrapperElement.style.height = 'auto';
            }
            else {
                const newMedianBottom = this._bottom - e.clientY;
                newHeight = Math.floor(newMedianBottom - this._handleHeight / 2);
                if (this.partialSize && newHeight < this.partialSize)
                    return;
                this.wrapperElement.style.gridTemplateRows = `${this._handleHeight}px calc(${newHeight}px)`;
                this.wrapperElement.style.height = 'auto';
            }
        }
    }
    _dragStart(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setPointerCapture(e.pointerId);
        const clientRect = this.getBoundingClientRect();
        this._left = clientRect.x;
        this._right = clientRect.right;
        this._top = clientRect.y;
        this._bottom = clientRect.bottom;
        this.addEventListener('pointermove', this._handleResize);
        this.addEventListener('pointerup', this._dragEnd);
    }
    _dragEnd(e) {
        e.preventDefault();
        e.stopPropagation();
        this.resizing = false;
        // eslint-disable-next-line wc/no-self-class
        this.classList.remove('resizing');
        if (this.className === '')
            this.removeAttribute('class');
        this.removeEventListener('pointermove', this._handleResize);
        this.removeEventListener('pointerup', this._dragEnd);
    }
    _handleToggle() {
        if (this.partialSize &&
            !Number.isNaN(this.partialSize) &&
            this.partialSize > 0 &&
            !this._showPeek) {
            switch (this.panelPosition) {
                case 'top':
                    this.wrapperElement.style.gridTemplateRows = `calc(${this.partialSize}px) ${this._handleHeight}px`;
                    this.wrapperElement.style.height = `${this.partialSize + this._handleHeight}px`;
                    break;
                case 'bottom':
                    this.wrapperElement.style.gridTemplateRows = `${this._handleHeight}px calc(${this.partialSize}px)`;
                    this.wrapperElement.style.height = `${this.partialSize + this._handleHeight}px`;
                    break;
                case 'right':
                    this.wrapperElement.style.gridTemplateColumns = `${this._handleWidth}px calc(${this.partialSize}px)`;
                    this.wrapperElement.style.width = `${this.partialSize + this._handleWidth}px`;
                    break;
                case 'left':
                default:
                    this.wrapperElement.style.gridTemplateColumns = `calc(${this.partialSize}px)`;
                    this.wrapperElement.style.width = `${this.partialSize + this._handleWidth}px`;
                    break;
            }
            this.expanded = 'partial';
            this._showPeek = true;
        }
        else if (this.partialSize &&
            !Number.isNaN(this.partialSize) &&
            this.partialSize > 0 &&
            this._showPeek) {
            this._resetWrapperStyles();
        }
        else {
            this.expanded = this.expanded === 'closed' || this.expanded === 'partial' ? 'open' : 'closed';
        }
    }
    _resetWrapperStyles() {
        this.expanded = 'open';
        this._showPeek = false;
        this.wrapperElement.removeAttribute('style');
    }
    _renderHandle() {
        return html `
      <div
        data-position="${this.panelPosition}"
        class="handle"
        @click="${this.panelInteraction === 'toggle' ? this._handleToggle : undefined}"
        @pointerdown="${this.panelInteraction === 'drag' ? this._dragStart : undefined}"
      ></div>
    `;
    }
};
Panel.styles = styles;
Panel.panelCounter = 0;
__decorate([
    property({ type: String, reflect: true })
], Panel.prototype, "variant", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'panel-position' })
], Panel.prototype, "panelPosition", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'panel-interaction' })
], Panel.prototype, "panelInteraction", void 0);
__decorate([
    property({ type: Number, attribute: 'partial-size' })
], Panel.prototype, "partialSize", void 0);
__decorate([
    property({ type: String, reflect: true })
], Panel.prototype, "expanded", void 0);
__decorate([
    property({ type: Boolean, attribute: 'overlay' })
], Panel.prototype, "overlay", void 0);
__decorate([
    state()
], Panel.prototype, "containerComputedStyle", void 0);
__decorate([
    state()
], Panel.prototype, "resizing", void 0);
__decorate([
    query('slot')
], Panel.prototype, "slotElement", void 0);
__decorate([
    query('.content')
], Panel.prototype, "contentElement", void 0);
__decorate([
    query('.handle')
], Panel.prototype, "handleElement", void 0);
__decorate([
    query('.-hds-panel-wrapper')
], Panel.prototype, "wrapperElement", void 0);
Panel = Panel_1 = __decorate([
    customElement('hds-panel')
], Panel);
export { Panel };
//# sourceMappingURL=hds-panel.js.map