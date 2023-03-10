import { css } from 'lit';
export const styles = css `
:host(hds-radio-group) {
  outline: none !important;
}

:host(:focus) {
  outline: 0;
}

hds-label {
  display: block;
  margin-bottom: var(--hds-spacing-4);
}

.wrapper {
  box-sizing: border-box;
  display: flex;
}

.wrapper ::slotted(hds-radio) {
    margin-right: var(--hds-spacing-7);
  }

.wrapper ::slotted(hds-radio:last-of-type) {
    margin-right: var(--hds-spacing-0);
  }

.wrapper.-vertical {
    flex-direction: column;
  }

.wrapper.-vertical ::slotted(hds-radio) {
      margin-bottom: var(--hds-spacing-2);
      margin-right: var(--hds-spacing-0);
    }

.wrapper.-vertical ::slotted(hds-radio:last-of-type) {
      margin-bottom: var(--hds-spacing-0);
    }

`;
//# sourceMappingURL=hds-radio-group.css.js.map