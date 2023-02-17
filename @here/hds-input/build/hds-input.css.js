import { css } from 'lit';
export const styles = css `
:host {
  outline: none !important;
}

:host(:focus) {
  outline: 0;
}

.wrapper {
  --hds-icon-color: var(--hds-foreground-primary);

  box-sizing: border-box;
  min-width: 5rem;
}

.wrapper .input-wrapper {
    --hds-icon-color: var(--hds-foreground-secondary);

    align-items: center;
    background: var(--hds-background-secondary);
    border: var(--hds-border-width) solid;
    border-color: var(--hds-foreground-tertiary);
    border-radius: var(--hds-border-radius);
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    position: relative;
    transition:
      color var(--hds-transition-duration-short),
      border-color var(--hds-transition-duration-short);
  }

.wrapper .input-wrapper.-icon hds-icon {
        margin-left: var(--hds-spacing-4);
      }

.wrapper .input-wrapper.-icon input {
        padding-left: var(--hds-spacing-2);
      }

.wrapper .input-wrapper.-extra-small {
      height: 1.375rem;
    }

.wrapper .input-wrapper.-extra-small input {
        padding: var(--hds-spacing-0) var(--hds-spacing-2);
      }

.wrapper .input-wrapper.-extra-small.-icon hds-icon {
        margin-left: var(--hds-spacing-2);
      }

.wrapper .input-wrapper.-extra-small ::placeholder {
        line-height: 1.25rem;
      }

.wrapper .input-wrapper.-extra-small .input-controls {
        padding-right: var(--hds-spacing-2);
      }

.wrapper .input-wrapper.-extra-small .input-controls .input-control {
          --hds-icon-size: 8px;

          height: 0.5rem;
          line-height: 0.5rem;
        }

.wrapper .input-wrapper.-small {
      height: 1.875rem;
    }

.wrapper .input-wrapper.-small ::placeholder {
        line-height: 1.75rem;
      }

.wrapper .input-wrapper.-small .input-controls {
        padding-right: var(--hds-spacing-2);
      }

.wrapper .input-wrapper.-small .input-controls .input-control {
          --hds-icon-size: 16px;

          height: 0.75rem;
          line-height: 0.75rem;
        }

.wrapper .input-wrapper.-medium {
      height: 2.375rem;
    }

.wrapper .input-wrapper.-medium ::placeholder {
        line-height: 2.25rem;
      }

.wrapper .input-wrapper.-medium .input-controls {
        padding-right: calc(var(--hds-spacing-4) - var(--hds-spacing-1px));
      }

.wrapper .input-wrapper.-medium .input-controls .input-control {
          height: 0.75rem;
          line-height: 0.75rem;
        }

.wrapper .input-wrapper:hover {
      border-color: var(--hds-foreground-tertiary-hover);
    }

.wrapper .input-wrapper:focus,
    .wrapper .input-wrapper:focus-within,
    .wrapper .input-wrapper:active {
      border: 0;
      box-shadow: 0 0 0 0.125rem var(--hds-object-focused);
    }

.wrapper .input-wrapper.error {
      border-color: var(--hds-negative) !important;
    }

.wrapper .input-wrapper.disabled {
      --hds-icon-color: var(--hds-foreground-tertiary-disabled);

      background-color: var(--hds-background-object);
      border-color: var(--hds-foreground-tertiary-disabled) !important;
      color: var(--hds-foreground-tertiary-disabled) !important;
      cursor: not-allowed;
    }

.wrapper .input-wrapper.disabled input,
      .wrapper .input-wrapper.disabled .input-control {
        cursor: not-allowed;
      }

.wrapper .input-wrapper.readonly {
      --hds-icon-color: var(--hds-foreground-primary);

      background-color: var(--hds-background-object);
      border-color: var(--hds-foreground-tertiary-disabled) !important;
    }

.wrapper .input-wrapper.readonly input,
      .wrapper .input-wrapper.readonly .input-control {
        cursor: not-allowed;
      }

.wrapper .input-wrapper input[type='number']::-webkit-inner-spin-button,
    .wrapper .input-wrapper input[type='number']::-webkit-outer-spin-button {
      appearance: none;
      margin: var(--hds-spacing-0);
    }

.wrapper .input-wrapper input[type='number'] {
      appearance: textfield;
    }

.wrapper .input-wrapper input[type='search']::-webkit-search-cancel-button {
      appearance: none;
    }

.wrapper .input-wrapper input {
      background: transparent;
      border: 0;
      box-sizing: inherit;
      color: var(--hds-foreground-primary);
      letter-spacing: var(--hds-body-small-letter-spacing);
      -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
              text-decoration: var(--hds-body-small-text-decoration, inherit);
      font: var(--hds-body-small-font);
      height: 100%;
      padding: var(--hds-spacing-0) var(--hds-spacing-4);
      outline: none;
      transition:
        color var(--hds-transition-duration-short),
        border-color var(--hds-transition-duration-short);
      width: 100%;
    }

.wrapper .input-wrapper input::placeholder {
        color: var(--hds-foreground-tertiary);
        letter-spacing: var(--hds-body-small-letter-spacing);
        -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
                text-decoration: var(--hds-body-small-text-decoration, inherit);
        font: var(--hds-body-small-font);
      }

.wrapper .input-wrapper input:disabled::placeholder,
      .wrapper .input-wrapper input:read-only::placeholder {
        color: var(--hds-foreground-tertiary-disabled);
      }

.wrapper .input-wrapper input:read-only {
        color: var(--hds-foreground-primary);
      }

.wrapper .input-wrapper input:disabled {
        color: var(--hds-foreground-tertiary);
      }

.wrapper input[type='number'] {
    color: var(--hds-foreground-primary);
  }

.wrapper .input-controls {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: -5px;
    -webkit-user-select: none;
            user-select: none;
  }

.wrapper .input-controls .input-control {
      color: var(--hds-foreground-secondary);
      cursor: pointer;
    }

`;
//# sourceMappingURL=hds-input.css.js.map