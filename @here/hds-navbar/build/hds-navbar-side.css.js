import { css } from 'lit';
export const styles = css `
:host(:focus),
:host .content {
  outline: 0;
}

:host(hds-navbar-side[variant='vertical'][panel-interaction='toggle']) .-hds-panel-wrapper.open {
  grid-template-columns: 1fr;
}

.hds-navbar-side-container {
  background: var(--hds-background-secondary);
  box-shadow: inset -0.0625rem 0 0 var(--hds-background-press);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: var(--hds-spacing-2) var(--hds-spacing-0);
}

.hds-navbar-side-container.collapsed {
    width: 4.5rem;
  }

.hds-navbar-side-container.collapsed .hds-navbar-side--logo,
      .hds-navbar-side-container.collapsed .hds-navbar-side--toggle-icon {
        margin-right: var(--hds-spacing-0);
      }

.hds-navbar-side-container.collapsed .hds-navbar-side--toggle-icon {
        transform: rotate(180deg);
      }

.hds-navbar-side-container.collapsed .hds-navbar-side--title,
      .hds-navbar-side-container.collapsed .hds-navbar-side--toggle-text {
        display: none;
      }

.hds-navbar-side-container .hds-navbar-side--header,
    .hds-navbar-side-container .hds-navbar-side--toggle {
      align-items: center;
      display: flex;
    }

.hds-navbar-side-container .hds-navbar-side--header {
      height: 4rem;
      padding: var(--hds-spacing-0) calc(var(--hds-spacing-4) + 4px);
    }

.hds-navbar-side-container .hds-navbar-side--header.hide-header {
        height: 0;
      }

.hds-navbar-side-container .hds-navbar-side--toggle {
      background: none;
      border: 0.125rem solid transparent;
      box-sizing: border-box;
      cursor: pointer;
      height: 3.5rem;
      padding: var(--hds-spacing-0) var(--hds-spacing-3) var(--hds-spacing-0) var(--hds-spacing-6);
      width: 100%;
    }

.hds-navbar-side-container .hds-navbar-side--toggle:hover {
        background: var(--hds-background-hover);
      }

.hds-navbar-side-container .hds-navbar-side--toggle *:focus,
      .hds-navbar-side-container .hds-navbar-side--toggle *:focus:not(:focus-visible) {
        outline: 0;
      }

.hds-navbar-side-container .hds-navbar-side--toggle:focus-visible {
        outline: var(--hds-object-focused) solid 0.125rem;
        outline-offset: -0.125rem;
      }

.hds-navbar-side-container .hds-navbar-side--logo {
      align-items: center;
      display: flex;
      margin-right: var(--hds-spacing-3);
    }

.hds-navbar-side-container .hds-navbar-side--title,
    .hds-navbar-side-container .hds-navbar-side--title ::slotted(*),
    .hds-navbar-side-container .hds-navbar-side--toggle-text,
    .hds-navbar-side-container .hds-navbar-side--toggle-text ::slotted(*) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

.hds-navbar-side-container .hds-navbar-side--title {
      color: var(--hds-foreground-primary);
      letter-spacing: var(--hds-subheadline-letter-spacing);
      -webkit-text-decoration: var(--hds-subheadline-text-decoration, inherit);
              text-decoration: var(--hds-subheadline-text-decoration, inherit);
      font: var(--hds-subheadline-font);
    }

.hds-navbar-side-container .hds-navbar-side--toggle-icon {
      --hds-icon-color: var(--hds-foreground-secondary);

      margin-right: calc(var(--hds-spacing-3) + var(--hds-spacing-1px)*2);
    }

.hds-navbar-side-container .hds-navbar-side--toggle-text {
      color: var(--hds-foreground-secondary);
      font-family: var(--hds-button-font-family);
      font-size: var(--hds-button-font-size);
      line-height: var(--hds-button-line-height);
    }

.hds-navbar-side-container .hds-navbar-side--main {
      flex: 1;
      overflow: auto;
    }

`;
//# sourceMappingURL=hds-navbar-side.css.js.map