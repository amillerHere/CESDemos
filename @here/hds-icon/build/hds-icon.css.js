import { css } from 'lit';
export const styles = css `
:host {
  box-sizing: border-box;
  display: inline-block;
}

:host(:focus) {
  outline: 0;
}

.hds-icon {
  box-sizing: border-box;
  color: var(--hds-icon-color);
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-variant: normal;
  font-weight: normal !important;
  text-rendering: auto;
  text-transform: none;
  transition: color var(--hds-icon-fill-transition);
}

.hds-icon.size-16px {
  margin-top: 0;
}

.hds-icon.size-24px {
  margin-top: 0;
}

.hds-icon::before {
  content: attr(data-unicode);
  display: block;
  line-height: var(--hds-icon-actual-size);
  font-size: var(--hds-icon-actual-size);
  height: var(--hds-icon-actual-size);
  width: var(--hds-icon-actual-size);
}

`;
//# sourceMappingURL=hds-icon.css.js.map