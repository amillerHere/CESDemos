import { css } from 'lit';
export const styles = css `
:host {
  outline: none !important;
}

:host(:focus) {
  outline: 0;
}

.tab {
  --hds-icon-color: var(--hds-foreground-secondary);
  align-items: center;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid transparent;
  box-sizing: border-box;
  color: var(--hds-foreground-secondary);
  cursor: pointer;
  display: flex;
  letter-spacing: var(--hds-button-letter-spacing);
  -webkit-text-decoration: var(--hds-button-text-decoration, inherit);
          text-decoration: var(--hds-button-text-decoration, inherit);
  font: var(--hds-button-font);
  height: inherit;
  letter-spacing: var(--hds-button-letter-spacing);
  padding: var(--hds-spacing-0) var(--hds-spacing-3);
}

.tab ::slotted(a) {
    align-items: center !important;
    color: var(--hds-foreground-secondary) !important;
    display: flex !important;
    font: inherit !important;
    height: 100% !important;
    letter-spacing: inherit !important;
    text-decoration: none !important;
  }

.tab ::slotted(a:focus-visible),
  .tab:hover {
    --hds-icon-color: var(--hds-foreground-secondary) !important;

    background: var(--hds-background-hover) !important;
    outline: none !important;
  }

.tab ::slotted(a:active),
  .tab:active {
    background: var(--hds-background-press) !important;
  }

.tab:focus-within:focus-visible {
    --hds-icon-color: var(--hds-foreground-secondary) !important;

    color: var(--hds-foreground-primary) !important;
    outline: var(--hds-object-focused) solid 0.125rem !important;
  }

.tab[aria-selected='true']:focus-visible:focus-within {
    outline: var(--hds-object-focused) solid 0.125rem;
  }

.tab[aria-selected='true'],
  .tab[aria-selected='true'] ::slotted(a) {
    --hds-icon-color: var(--hds-foreground-secondary) !important;

    color: var(--hds-foreground-primary) !important;
    cursor: pointer !important;
    outline: none !important;
  }

.tab[aria-selected='true'] {
    --hds-icon-color: var(--hds-foreground-primary) !important;

    border-bottom: 2px solid var(--hds-action);
  }

.tab[aria-selected='true']:hover {
    --hds-icon-color: var(--hds-foreground-primary) !important;
  }

.tab.disabled {
    --hds-icon-color: var(--hds-onlightcolor-inactive) !important;

    color: var(--hds-foreground-inactive) !important;
    cursor: default !important;
  }

.tab.disabled:hover {
      background: transparent !important;
    }

.tab.hds-tab--icon-label hds-icon:first-of-type {
    margin-right: var(--hds-spacing-2);
  }

.tab.hds-tab--icon-actionable hds-icon:last-of-type {
    --hds-icon-color: var(--hds-foreground-secondary);

    margin-left: var(--hds-spacing-2);
  }

.tab.external-link hds-icon:last-of-type {
      margin-top: -3px;
    }

.hds-tab-wrapper {
  display: inline;
  height: inherit;
  position: relative;
}

.hds-tab-wrapper .hds-tab-menu-wrapper {
    display: none;
    left: 0;
    padding-top: var(--hds-spacing-2);
    position: absolute;
  }

.hds-tab-wrapper .hds-tab-menu-wrapper.hds-tab-menu-wrapper--show-menu {
      background: var(--hds-background-secondary);
      border-radius: var(--hds-border-radius);
      display: block;
      filter: var(--hds-overlay);
    }

`;
//# sourceMappingURL=hds-tab.css.js.map