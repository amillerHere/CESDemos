import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.hds-dropdown-wrapper {
  display: inline-block;
  left: 0;
  position: relative;
  top: 0;
}

.hds-dropdown-wrapper:focus,
  .hds-dropdown-wrapper:active,
  .hds-dropdown-wrapper *:focus,
  .hds-dropdown-wrapper *:active {
    outline: 0;
  }

.toggleWrapper {
  --hds-icon-color: var(--hds-foreground-secondary);
  --hds-icon-size: 1rem;

  align-items: center;
  border: 0;
  border-radius: var(--hds-border-radius);
  box-sizing: border-box;
  color: var(--hds-foreground-primary);
  cursor: pointer;
  display: flex;
  letter-spacing: var(--hds-body-small-letter-spacing);
  -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
          text-decoration: var(--hds-body-small-text-decoration, inherit);
  font: var(--hds-body-small-font);
  justify-content: space-between;
  padding: var(--hds-spacing-3) var(--hds-spacing-4);
}

.toggleWrapper.solid {
    border: 0.0625rem solid var(--hds-foreground-tertiary);
  }

.toggleWrapper.subtle {
    border: 0;
  }

.toggleWrapper.subtle:hover {
      background: var(--hds-background-hover);
    }

.toggleWrapper.size-small {
    height: 1.5rem;
  }

.toggleWrapper.size-medium {
    height: 2rem;
  }

.toggleWrapper.size-large {
    height: 2.5rem;
  }

.toggleWrapper.disabled {
    --hds-icon-color: var(--hds-foreground-tertiary-disabled);

    background: var(--hds-background-object);
    border: 0.0625rem solid var(--hds-foreground-tertiary-disabled);
    color: var(--hds-foreground-tertiary-disabled);
    cursor: not-allowed;
  }

.toggleWrapper.read-only {
    background: var(--hds-background-object);
    border: 0.0625rem solid var(--hds-foreground-tertiary-disabled);
    cursor: default;
  }

.toggleWrapper hds-icon {
    margin-left: var(--hds-spacing-3);
    transition: 150ms ease-in;
  }

.toggleWrapper:focus,
  .toggleWrapper:focus-within,
  .toggleWrapper:active:focus-visible,
  .toggleWrapper:active {
    outline: none;
  }

.toggleWrapper:focus-visible {
    outline: var(--hds-object-focused) solid 0.125rem;
  }

.toggleWrapper.open hds-icon {
      transform: rotate(180deg);
    }

.toggleWrapper ::slotted(*) {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

.toggleWrapper.arrow ::slotted(*) {
      width: calc(100% + 16px);
    }

.menuWrapper {
  background: var(--hds-background-secondary);
  border-radius: var(--hds-border-radius);
  display: none;
  filter: var(--hds-overlay);
  left: 0;
  min-width: 100%;
  opacity: 0;
  position: absolute;
  top: 3rem;
  visibility: hidden;
  z-index: 1;
}

.menuWrapper.rightAlign {
    left: auto;
    right: 0;
  }

.menuWrapper.reverse {
    bottom: 3rem;
    top: auto;
  }

.menuWrapper.open {
    display: block;
    opacity: 1;
    visibility: visible;
  }

.menuWrapper:hover,
  .menuWrapper:focus {
    outline: none;
  }

`;
//# sourceMappingURL=hds-dropdown.css.js.map