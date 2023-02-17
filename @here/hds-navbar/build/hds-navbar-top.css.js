import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.hds-navbar-top-container {
  box-shadow: 0 1px 0 var(--hds-foreground-divider);
  height: 3rem;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2;
}

.hds-navbar-top {
  background: var(--hds-background-secondary);
  display: flex;
  flex-direction: row;
  letter-spacing: var(--hds-body-letter-spacing);
  -webkit-text-decoration: var(--hds-body-text-decoration, inherit);
          text-decoration: var(--hds-body-text-decoration, inherit);
  font: var(--hds-body-font);
  height: inherit;
  margin: var(--hds-spacing-0) auto;
  max-width: 100%;
}

.hds-navbar-top .hds-navbar-top-logo-container {
    display: inline-block;
    height: 2rem;
    margin: var(--hds-spacing-2) var(--hds-spacing-4) var(--hds-spacing-2) var(--hds-spacing-6);
    overflow: hidden;
  }

.hds-navbar-top .hds-navbar-top-logo-container ::slotted(*) {
      box-sizing: inherit;
      overflow: inherit;
    }

.hds-navbar-top .hds-navbar-top-right-end-container {
    display: flex;
    margin-left: auto;
  }

.hds-navbar-top .hds-navbar-top-profile-menu::slotted(*) {
      display: inline-block;
      padding: var(--hds-spacing-1) var(--hds-spacing-4);
    }

.hds-navbar-top .hds-navbar-top-right-tray {
    align-items: center;
    display: flex;
  }

.hds-navbar-top hr {
    align-self: center;
    border: 0;
    border-left: 0.0625rem solid var(--hds-foreground-divider);
    height: 1.5rem;
    margin: var(--hds-spacing-0);
  }

.hds-navbar-top .hds-navbar-top-title {
    align-items: center;
    color: var(--hds-foreground-primary);
    display: flex;
    letter-spacing: var(--hds-subheadline-letter-spacing);
    -webkit-text-decoration: var(--hds-subheadline-text-decoration, inherit);
            text-decoration: var(--hds-subheadline-text-decoration, inherit);
    font: var(--hds-subheadline-font);
    padding: var(--hds-spacing-0) var(--hds-spacing-4) var(--hds-spacing-0) var(--hds-spacing-4);
  }

`;
//# sourceMappingURL=hds-navbar-top.css.js.map