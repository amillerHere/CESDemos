import { css } from 'lit';
export const styles = css `
:host(hds-radio) {
  outline: none !important;
}

:host(:focus) {
  outline: 0;
}

.wrapper {
  align-items: flex-start;
  box-sizing: border-box;
  display: inline-flex;
  outline: none !important;
}

.wrapper > input {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 0.0625rem;
    margin: calc(var(--hds-spacing-1px)*-1);
    overflow: hidden;
    padding: var(--hds-spacing-0);
    position: absolute;
    visibility: inherit;
    white-space: nowrap;
    width: 1px;
  }

.wrapper > input:focus {
      outline: none;
    }

.wrapper > .radio-container {
    align-items: center;
    background: var(--hds-foreground-tertiary);
    border-radius: 1.25rem;
    box-sizing: border-box;
    display: flex;
    height: 1.25rem;
    justify-content: center;
    margin-top: calc(var(--hds-spacing-1)*0.5);
    min-height: 1.25rem;
    min-width: 1.25rem;
    transition: background var(--hds-transition-duration-short);
    width: 1.25rem;
  }

.wrapper > .radio-container .dot {
      background: transparent;
      border: solid 0.5625rem var(--hds-background-secondary);
      border-radius: 1.5rem;
      box-sizing: border-box;
      height: 1rem;
      transition: border var(--hds-transition-duration-short);
      width: 1rem;
    }

/* Exact resolution fix */

@media (resolution: 1.25dppx) {
      .wrapper > .radio-container .dot {
        border: solid 0.53125rem var(--hds-background-secondary);
        height: 1.0625rem;
        width: 1.0625rem;
      }
    }

.wrapper.hds-radio--size-small > .radio-container {
      height: 1rem;
      margin-top: var(--hds-spacing-1);
      min-height: 1rem;
      min-width: 1rem;
      width: 1rem;
    }

.wrapper.hds-radio--size-small > .radio-container div.dot {
        border-width: 0.4375rem;
        height: 0.875rem;
        width: 0.875rem;
      }

.wrapper.hds-radio--size-small.-checked > .radio-container {
        background: var(--hds-action);
      }

.wrapper.hds-radio--size-small.-checked > .radio-container .dot {
          border-width: 0.1875rem;
        }

.wrapper .text-container {
    margin-left: var(--hds-spacing-2);
  }

.wrapper .label-text {
    color: var(--hds-foreground-primary);
    letter-spacing: var(--hds-body-small-letter-spacing);
    -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
            text-decoration: var(--hds-body-small-text-decoration, inherit);
    font: var(--hds-body-small-font);
    transition: color var(--hds-transition-duration-short);
  }

.wrapper .description-text {
    color: var(--hds-foreground-secondary);
    display: block;
    letter-spacing: var(--hds-body-small-letter-spacing);
    -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
            text-decoration: var(--hds-body-small-text-decoration, inherit);
    font: var(--hds-body-small-font);
    transition: color var(--hds-transition-duration-short);
  }

.wrapper .description-text:not(:empty) {
      margin-top: var(--hds-spacing-2);
    }

.wrapper:hover > .radio-container {
      background: var(--hds-foreground-tertiary-hover);
    }

.wrapper > input:focus-visible + .radio-container {
    box-shadow: 0 0 0 0.125rem var(--hds-object-focused);
  }

.wrapper.-checked > .radio-container {
      background: var(--hds-action);
    }

.wrapper.-checked > .radio-container .dot {
        border-width: 0.3125rem;
        height: 1.125rem;
        width: 1.125rem;
      }

.wrapper.disabled > .radio-container {
      background: var(--hds-foreground-tertiary-disabled) !important;
    }

.wrapper.disabled .label-text {
      color: var(--hds-foreground-tertiary-disabled) !important;
    }

.wrapper.disabled .description-text {
      color: var(--hds-foreground-tertiary-disabled) !important;
    }

`;
//# sourceMappingURL=hds-radio.css.js.map