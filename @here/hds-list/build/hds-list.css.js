import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

:host {
  display: block;
}

.-hds-list-wrapper {
  box-sizing: border-box;
}

.-hds-list-wrapper:focus,
  .-hds-list-wrapper:hover .-hds-list-wrapper:active,
  .-hds-list-wrapper *:focus,
  .-hds-list-wrapper *:active {
    outline: 0;
  }

.-hds-list-wrapper.truncate ::slotted(hds-list-item) {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;

    /* Required for text-overflow to do anything */
    white-space: nowrap;
  }

.-hds-list-wrapper .group-title {
    box-shadow: 0 1px 0 var(--hds-foreground-inactive);
    color: var(--hds-foreground-secondary);
    letter-spacing: var(--hds-caption-letter-spacing);
    -webkit-text-decoration: var(--hds-caption-text-decoration, inherit);
            text-decoration: var(--hds-caption-text-decoration, inherit);
    font: var(--hds-caption-font);
    margin: var(--hds-spacing-0) var(--hds-spacing-0) var(--hds-spacing-4);
    padding: var(--hds-spacing-4) var(--hds-spacing-4) var(--hds-spacing-2) var(--hds-spacing-4);
  }

.-hds-list-wrapper.nested {
    border-width: 0;
    filter: none;
    padding: var(--hds-spacing-0);
  }

:host([variant='subtle-divider']) ::slotted([id^='hds-list-item-']) {
    box-shadow: 0 var(--hds-border-width) 0 var(--hds-foreground-divider);
  }

:host([variant='subtle-divider']) ::slotted([id^='hds-list-item-']:focus),
  :host([variant='subtle-divider']) ::slotted([id^='hds-list-item-']:last-of-type) {
    box-shadow: none;
  }

:host([variant='solid']) ::slotted([id^='hds-list-item-']) {
    margin-bottom: var(--hds-spacing-2);
  }

:host([variant='solid']) ::slotted([id^='hds-list-item-']:last-of-type) {
    margin-bottom: var(--hds-spacing-0);
  }

`;
//# sourceMappingURL=hds-list.css.js.map