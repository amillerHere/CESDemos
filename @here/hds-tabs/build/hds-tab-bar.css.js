import { css } from 'lit';
export const styles = css `
:host {
  outline: none !important;
}

:host(:focus) {
  outline: 0;
}

.wrapper {
  align-items: center;
  background-color: var(--hds-background-secondary);
  box-sizing: border-box;
  display: flex;
  height: 3rem;
  width: fit-content;
}

.wrapper ::slotted(hds-tab) {
    height: 100% !important;
  }

`;
//# sourceMappingURL=hds-tab-bar.css.js.map