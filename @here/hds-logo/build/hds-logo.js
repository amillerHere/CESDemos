var Logo_1;
import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { html, LitElement, svg } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './hds-logo.css.js';
let Logo = Logo_1 = class Logo extends LitElement {
    constructor() {
        super(...arguments);
        this.onDark = false;
        this.monochrome = false;
        this.size = 'extra-small';
        this.padding = false;
        this.background = false;
    }
    /**
     * Returns the SVG code for the HERE logo
     * @param color Color value for the letters
     * @param symbolColor Color value for he symbol
     * @return {SVGTemplateResult} SVG code for the HERE logo
     */
    static drawLogo() {
        return svg `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <path
          fill="var(--hds-logo-color)"
          d="M19.0262 20.43C17.8776 19.0817 17.9276 18.3326 18.6267 17.6335C19.4756 16.7845 20.3745 17.1341 21.3733 18.0829L19.0262 20.43ZM30.8115 5.44869C31.6604 4.59975 32.5593 4.94932 33.558 5.89813L31.211 8.2452C30.0125 6.89688 30.0624 6.19776 30.8115 5.44869ZM37.9026 7.8457C36.8539 9.4437 34.9563 12.0405 33.0087 10.0929L37.9526 5.14907C37.5031 4.69963 37.2035 4.30013 36.9039 4.05044C34.2572 1.40375 31.2609 1.35381 28.9138 3.70088C27.3658 5.24894 26.9163 7.04669 27.3658 8.74457L25.8177 6.99676C25.4182 7.19651 23.5206 8.89438 24.9188 11.3913L23.171 9.94308L20.824 12.2901L24.02 15.4861C21.573 13.5386 18.9263 13.7383 16.829 15.8357C14.5818 18.0829 14.7316 20.8295 16.4294 23.0767L16.0799 22.7271C13.8327 20.4799 11.3858 21.2789 10.1873 22.4774C9.23844 23.4262 8.68912 24.6747 8.93881 25.5735L4.09486 20.7296L1.49811 23.3264L11.0861 32.9144H16.2297L12.784 29.4687C10.9863 27.621 10.9363 26.6722 11.8352 25.7733C12.6841 24.9244 13.6829 25.4737 15.4307 27.1715L18.8265 30.5673L21.3733 28.0205L18.1273 24.7745C20.4744 26.5224 23.2709 26.6222 25.7678 24.1254L25.8177 24.0754C27.3658 22.6772 27.8152 21.2789 27.8152 21.2789L25.8677 19.9805C24.819 21.5785 22.9713 24.1753 21.0237 22.2277L25.9675 17.2839L29.0637 20.38L31.7603 17.6834L27.9151 13.8382C26.1173 12.0405 27.166 10.3426 27.9151 9.69339C28.2647 10.4425 28.764 11.1416 29.4132 11.7908C31.9101 14.2876 35.1061 14.787 37.9526 11.9905L38.0025 11.9406C39.5506 10.5423 40 9.14407 40 9.14407L37.9026 7.8457Z"
        />
        <path fill="var(--hds-logo-symbol-color)" d="M10.9863 32.9144L5.49314 38.4076L0 32.9144H10.9863Z" />
      </svg>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'img');
        this.setAttribute('aria-label', this.getAttribute('aria-label') ?? 'HERE Technologies Logo');
    }
    render() {
        const color = this.onDark ? '#fff' : '#000a19cc';
        const symbolColor = this.monochrome ? color : '#12e4d6';
        if (this.background)
            this.padding = true;
        const logoClasses = {
            'light-theme': this.background && !this.onDark,
            'dark-theme': this.background && this.onDark,
            padded: this.padding,
        };
        const cssStyles = {
            '--hds-logo-color': color,
            '--hds-logo-symbol-color': symbolColor,
        };
        logoClasses[this.size] = true;
        return html `
      <div id="logo" class="wrapper ${classMap(logoClasses)}" style="${styleMap(cssStyles)}">
        ${Logo_1.drawLogo()}
      </div>
    `;
    }
};
Logo.styles = styles;
__decorate([
    property({ type: Boolean, attribute: 'on-dark' })
], Logo.prototype, "onDark", void 0);
__decorate([
    property({ type: Boolean })
], Logo.prototype, "monochrome", void 0);
__decorate([
    property({ type: String })
], Logo.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], Logo.prototype, "padding", void 0);
__decorate([
    property({ type: Boolean })
], Logo.prototype, "background", void 0);
Logo = Logo_1 = __decorate([
    customElement('hds-logo')
], Logo);
export { Logo };
//# sourceMappingURL=hds-logo.js.map