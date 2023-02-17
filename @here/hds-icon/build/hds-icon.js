var Icon_1;
import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import * as HDSIconLibrary from '@here/hds-iconlibrary';
import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './hds-icon.css.js';
/**
 * @event {CustomEvent<{type: IconErrorType, message: string, category: IconCategory, name: string, style: IconStyle, size: IconSvgSize}>} notfound Fired when the icon doesn't exist. `IconNotFoundPayload`
 *
 * @cssprop --hds-icon-color  Color value for the icon
 * @cssprop --hds-icon-size   Size value for the icon, overrides the attribute `size`
 *
 * */
let Icon = Icon_1 = class Icon extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.category = 'core-ui';
        this.iconStyle = 'solid';
        this.size = '16px';
        this.ariaLabel = '';
        this.svgSize = '16px';
    }
    static getNameByMediaType(type) {
        if (Icon_1._nameByMediaType === undefined) {
            Icon_1._nameByMediaType = {
                'image/jpeg': 'JPG-File',
                'image/jpg': 'JPG-File',
                'application/msword': 'DOC-File',
                'application/postscript': 'EPS-File',
                'application/eps': 'EPS-File',
                'application/x-eps': 'EPS-File',
                'image/eps': 'EPS-File',
                'image/x-eps': 'EPS-File',
                'image/gif': 'GIF-File',
                'text/html': 'HTML-File',
                'audio/mpeg': 'MP3-File',
                'application/pdf': 'PDF-File',
                'image/png': 'PNG-File',
                'image/svg+xml': 'SVG-File',
                'image/tiff': 'TIFF-File',
                'text/plain': 'TXT-File',
                'audio/wav': 'WAV-File',
                'audio/x-wav': 'WAV-File',
                'application/zip': 'ZIP-File',
            };
        }
        if (type in Icon_1._nameByMediaType)
            return Icon_1._nameByMediaType[type];
        if (type.endsWith('/json') || type.endsWith('+json'))
            return 'JSON-File';
        if (type.includes('image/'))
            return 'image';
        if (type.includes('compressed'))
            return 'archive';
        return 'file';
    }
    async updated(_changedProperties) {
        if (_changedProperties.has('errorEventPayload')) {
            // FIXME: We set the timeout to the next browser loop so this event can be caught by React
            setTimeout(() => {
                this.dispatchEvent(new CustomEvent('notfound', {
                    detail: this.errorEventPayload,
                    bubbles: true,
                    composed: true,
                }));
            }, 0);
        }
    }
    render() {
        // Create a new var to not trigger the update
        let styleIcon = this.iconStyle;
        // Only icons bigger than 24px will be style outline.
        // if an icon smaller we revert to 16px solid.
        const size = parseInt(this.size, 10);
        if (size >= 24) {
            this.svgSize = '24px';
        }
        else {
            styleIcon = 'solid';
            if (size < 16) {
                this.svgSize = '8px';
            }
        }
        let error;
        let errorType = 'IconNotFound';
        // Check if font has been loaded
        const allIconsFontFamily = `hds-iconlibrary-${this.svgSize}`;
        const categoryFontFamily = `hds-iconlibrary-${this.category}-${this.svgSize}`;
        let fontFamily;
        if (!document.fonts) {
            error =
                'Fonts not found in document. Maybe test environment or SSR? Falling back to all icons font family';
            // eslint-disable-next-line no-console
            // console.warn(error);
            this.errorEventPayload = {
                message: error,
                name: this.name,
                type: 'FontNotFound',
                category: this.category,
                size: this.svgSize,
                style: styleIcon,
            };
            fontFamily = allIconsFontFamily;
        }
        document.fonts &&
            document.fonts.forEach(value => {
                // Firefox returns the name between double quotes
                const fontFamilyName = value.family.replace(/"([^"]+(?="))"/g, '$1');
                if (!fontFamilyName)
                    return;
                if (fontFamily && fontFamily === allIconsFontFamily)
                    return;
                if (fontFamilyName === allIconsFontFamily) {
                    fontFamily = allIconsFontFamily;
                }
                else if (fontFamilyName === categoryFontFamily) {
                    fontFamily = categoryFontFamily;
                }
            });
        if (!fontFamily) {
            error = `Font ${categoryFontFamily} has not been found! Make sure font has been loaded properly`;
            errorType = 'FontNotFound';
            fontFamily = categoryFontFamily;
        }
        let codepointsKey;
        let codepointKey;
        if (fontFamily === allIconsFontFamily) {
            codepointsKey = `HDS_ICONLIBRARY_${this.svgSize.toUpperCase()}_CODEPOINTS`;
            codepointKey = `${this.category}-${this.name}_${styleIcon}_${this.svgSize}`;
        }
        else {
            codepointsKey = `HDS_ICONLIBRARY_${this.category
                .replaceAll('-', '_')
                .toUpperCase()}_${this.svgSize.toUpperCase()}_CODEPOINTS`;
            codepointKey = `${this.name}_${styleIcon}_${this.svgSize}`;
            // Check if category exists
            if (!HDSIconLibrary[codepointsKey]) {
                errorType = 'CategoryNotFound';
                error = `Category ${this.category}  not found!`;
            }
        }
        // Check if the icon exists
        const codepoint = HDSIconLibrary[codepointsKey][codepointKey];
        if (!codepoint) {
            errorType = 'IconNotFound';
            error = `Icon ${this.category}/${this.name} style ${styleIcon} size ${this.svgSize} not found!`;
        }
        // During test the font is not loaded. We skipped if the font is not loaded for core-ui
        if (error && !(this.category === 'core-ui' && errorType === 'FontNotFound')) {
            // eslint-disable-next-line no-console
            console.warn(error);
            this.errorEventPayload = {
                type: errorType,
                message: error,
                category: this.category,
                name: this.name,
                style: styleIcon,
                size: this.svgSize,
            };
        }
        const cssClasses = {};
        cssClasses[`size-${this.svgSize}`] = true;
        cssClasses[`style-${styleIcon}`] = true;
        const cssStyles = {
            '--hds-icon-actual-size': `var(--hds-icon-size, calc(${parseInt(this.size, 10)}rem / var(--hds-font-baseline)))`,
            'font-family': `${fontFamily}, serif !important`,
        };
        return html `
      <i
        class="hds-icon ${classMap(cssClasses)}"
        style="${styleMap(cssStyles)}"
        data-unicode="${Number.isNaN(codepoint) || !codepoint
            ? ''
            : String.fromCodePoint(codepoint)}"
        role="img"
        aria-label="${this.ariaLabel !== '' ? this.ariaLabel : this.name}"
      ></i>
    `;
    }
};
Icon.styles = styles;
__decorate([
    property({ type: String })
], Icon.prototype, "name", void 0);
__decorate([
    property({ type: String })
], Icon.prototype, "category", void 0);
__decorate([
    property({ type: String, attribute: 'icon-style' })
], Icon.prototype, "iconStyle", void 0);
__decorate([
    property({ type: String })
], Icon.prototype, "size", void 0);
__decorate([
    property({ type: String, attribute: 'aria-label' })
], Icon.prototype, "ariaLabel", void 0);
__decorate([
    state()
], Icon.prototype, "errorEventPayload", void 0);
Icon = Icon_1 = __decorate([
    customElement('hds-icon')
], Icon);
export { Icon };
//# sourceMappingURL=hds-icon.js.map