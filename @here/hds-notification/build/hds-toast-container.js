import { __decorate } from "tslib";
import { customElement } from '@here/hds-base';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './hds-toast-container.css.js';
let ToastContainer = class ToastContainer extends LitElement {
    constructor() {
        super(...arguments);
        this.position = 'bottom-right';
    }
    render() {
        const classes = {
            [this.position]: true,
        };
        return html ` <div id="hds-notification__container" class="wrapper ${classMap(classes)}">
      <slot></slot>
    </div>`;
    }
};
ToastContainer.styles = styles;
__decorate([
    property({ type: String, reflect: true })
], ToastContainer.prototype, "position", void 0);
ToastContainer = __decorate([
    customElement('hds-toast-container')
], ToastContainer);
export { ToastContainer };
export const toast = ({ title = '', body = '', bodyTemplateElementId = '', variant = 'information', duration = 3, position = 'bottom-right', icon, iconStyle = 'solid', iconCategory = 'core-ui', onChange, onAction, }) => {
    let parentEl = document.querySelector("[data-theme^='hds-']");
    if (!parentEl) {
        // eslint-disable-next-line no-console
        console.error("No [data-theme^='hds-'] element found.");
        parentEl = document.body;
    }
    const toastNotificationEl = document.createElement('hds-notification');
    toastNotificationEl.open = true;
    toastNotificationEl.notificationTitle = title;
    if (onChange) {
        toastNotificationEl.addEventListener('change', e => onChange(e));
    }
    if (onAction) {
        toastNotificationEl.addEventListener('action', e => onAction(e));
    }
    if (bodyTemplateElementId) {
        const templateEl = document.getElementById(bodyTemplateElementId);
        if (templateEl) {
            const templateClone = templateEl.content.cloneNode(true);
            toastNotificationEl.appendChild(templateClone);
        }
        else {
            // eslint-disable-next-line no-console
            console.error(`No template element found with id: ${bodyTemplateElementId}`);
            return;
        }
    }
    else {
        toastNotificationEl.innerHTML = body;
    }
    toastNotificationEl.variant = variant;
    toastNotificationEl.duration = duration;
    toastNotificationEl.icon = icon;
    toastNotificationEl.iconCategory = iconCategory;
    toastNotificationEl.iconStyle = iconStyle;
    let container = document.querySelector('hds-toast-container');
    if (!container) {
        container = document.createElement('hds-toast-container');
        container.position = position;
        parentEl.appendChild(container);
    }
    container.appendChild(toastNotificationEl);
};
//# sourceMappingURL=hds-toast-container.js.map