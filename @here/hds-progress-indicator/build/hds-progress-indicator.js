import { __decorate } from "tslib";
import { customElement, clamp } from '@here/hds-base';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './hds-progress-indicator.css.js';
let ProgressIndicator = class ProgressIndicator extends LitElement {
    constructor() {
        super(...arguments);
        this.color = 'accent';
        this.size = 'small';
        this.indicatorType = 'linear';
        this.variant = 'indeterminate';
        this.progress = 0;
    }
    firstUpdated() {
        this._circularProgressLength = this.circularDeterminateVariant?.getAttribute('r');
    }
    updated() {
        if (this.variant !== 'determinate')
            return;
        if (this.indicatorType === 'circular') {
            if (this.progress === 0) {
                this.circularDeterminateVariant.style.opacity = '0';
            }
            else if (this.progress > 0) {
                const r = this._circularProgressLength;
                const c = Math.PI * (r * 2);
                const pct = ((100 - this.progress) / 100) * c;
                if (this.circularDeterminateVariant !== null) {
                    this.circularDeterminateVariant.style.opacity = '1';
                    this.circularDeterminateVariant.style.strokeDashoffset = `${Math.round(pct)}`;
                }
            }
        }
    }
    // eslint-disable-next-line no-undef
    update(changedProperties) {
        super.update(changedProperties);
        this.progress = clamp(this.progress, 0, 100);
    }
    render() {
        const classes = {};
        classes[this.size] = true;
        classes[this.color] = true;
        classes[this.indicatorType] = true;
        classes[this.variant] = true;
        return html `
      <div
        class="-hds-progress-indicator-wrapper ${classMap(classes)}"
        role="progressbar"
        aria-label="${this.ariaLabel || 'progress indicator'}"
        aria-live="polite"
      >
        ${this.indicatorType === 'circular'
            ? this._renderCircularVariant()
            : this._renderLinearVariant()}
      </div>
    `;
    }
    _renderLinearVariant() {
        return html `
      <svg width="100%" height="2">
        <line class="track" x1="0" y1="50%" x2="100%" y2="50%"></line>
        <line
          class="progress"
          x1="0%"
          y1="50%"
          x2="${this.variant === 'indeterminate' ? '100%' : `${clamp(this.progress, 1, 100)}%`}"
          y2="50%"
        ></line>
      </svg>
    `;
    }
    _renderCircularVariant() {
        const { cx, cy, r, viewBox } = this.getCircularDimensions();
        return html `
      <svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" cx="${cx}" cy="${cy}" r="${r}"></circle>
        <circle cx="${cx}" cy="${cy}" r="${r}" class="circularProgress"></circle>
      </svg>
    `;
    }
    getCircularDimensions() {
        const dimensions = {};
        switch (this.size) {
            case 'small':
                dimensions.cx = 7;
                dimensions.r = 6;
                break;
            case 'large':
            default:
                dimensions.cx = 15;
                dimensions.r = 14;
                break;
        }
        dimensions.cy = dimensions.cx;
        dimensions.viewBox = `0 0 ${2 * dimensions.cx} ${2 * dimensions.cy}`;
        return dimensions;
    }
};
ProgressIndicator.styles = styles;
__decorate([
    property({ type: String })
], ProgressIndicator.prototype, "color", void 0);
__decorate([
    property({ type: String })
], ProgressIndicator.prototype, "size", void 0);
__decorate([
    property({ type: String, attribute: 'indicator-type' })
], ProgressIndicator.prototype, "indicatorType", void 0);
__decorate([
    property({ type: String })
], ProgressIndicator.prototype, "variant", void 0);
__decorate([
    property({ type: Number, reflect: true })
], ProgressIndicator.prototype, "progress", void 0);
__decorate([
    property({ type: String, attribute: 'aria-label' })
], ProgressIndicator.prototype, "ariaLabel", void 0);
__decorate([
    query('.circularProgress')
], ProgressIndicator.prototype, "circularDeterminateVariant", void 0);
ProgressIndicator = __decorate([
    customElement('hds-progress-indicator')
], ProgressIndicator);
export { ProgressIndicator };
//# sourceMappingURL=hds-progress-indicator.js.map