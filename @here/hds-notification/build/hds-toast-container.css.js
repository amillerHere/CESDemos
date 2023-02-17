import { css } from 'lit';
export const styles = css `
:host {
  --hds-notification-margin-bottom: var(--hds-spacing-4);
  --hds-toast-container-margin: var(--hds-spacing-4);
}

:host(:focus) {
  outline: 0;
}

.wrapper {
  box-sizing: border-box;
  position: fixed;
  width: 25rem;
  z-index: 9999;
}

.wrapper.top-right {
    right: var(--hds-toast-container-margin);
    top: var(--hds-toast-container-margin);
  }

.wrapper.top-left {
    left: var(--hds-toast-container-margin);
    top: var(--hds-toast-container-margin);
  }

.wrapper.bottom-right {
    bottom: var(--hds-toast-container-margin);
    right: var(--hds-toast-container-margin);
  }

.wrapper.bottom-left {
    bottom: var(--hds-toast-container-margin);
    left: var(--hds-toast-container-margin);
  }

.wrapper ::slotted(hds-notification:last-of-type) {
    --hds-notification-margin-bottom: var(--hds-spacing-0);
  }

`;
//# sourceMappingURL=hds-toast-container.css.js.map