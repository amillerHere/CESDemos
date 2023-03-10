import { css } from 'lit';
export const styles = css `
:host(hds-checkbox-group) {
  outline: none !important;
}

:host(:focus) {
  outline: 0;
}

.label-text {
  box-sizing: inherit;
}

.label-text.label-text-primary {
    color: var(--hds-foreground-primary);
    letter-spacing: var(--hds-body-small-letter-spacing);
    -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
            text-decoration: var(--hds-body-small-text-decoration, inherit);
    font: var(--hds-body-small-font);
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
  }

.label-text.label-text-secondary {
    color: var(--hds-foreground-secondary);
    letter-spacing: var(--hds-caption-letter-spacing);
    -webkit-text-decoration: var(--hds-caption-text-decoration, inherit);
            text-decoration: var(--hds-caption-text-decoration, inherit);
    font: var(--hds-caption-font);
  }

.label-container {
  align-items: center;
  box-sizing: inherit;
  display: flex;
  flex-direction: row;
  margin-bottom: var(--hds-spacing-2);
}

.label-container .label-primary {
    flex: 1;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

.label-container .label-secondary {
    min-width: 20%;
    text-align: right;
  }

.clearfix::after {
  clear: both;
  content: '';
  display: table;
}

.-hds-checkbox-group-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.-hds-checkbox-group-wrapper ::slotted(hds-checkbox) {
    margin-top: var(--hds-spacing-4);
  }

.-hds-checkbox-group-wrapper ::slotted(hds-checkbox:first-of-type) {
    margin-top: var(--hds-spacing-0);
  }

`;
//# sourceMappingURL=hds-checkbox-group.css.js.map