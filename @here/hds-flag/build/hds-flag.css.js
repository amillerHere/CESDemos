import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

:host {
  display: inline-block;
}

.hds-flag-wrapper {
  align-items: center;
  background-color: transparent;
  border-radius: 50px;
  box-sizing: border-box;
  color: var(--hds-ondarkcolor-primary);
  display: flex;
  letter-spacing: var(--hds-caption-letter-spacing);
  -webkit-text-decoration: var(--hds-caption-text-decoration, inherit);
          text-decoration: var(--hds-caption-text-decoration, inherit);
  font: var(--hds-caption-font);
  vertical-align: middle;
  width: fit-content;
}

.hds-flag-wrapper.--size-small {
    height: 1rem;
    padding: var(--hds-spacing-0) calc(var(--hds-spacing-2) - var(--hds-spacing-1px)*2);
  }

.hds-flag-wrapper.--size-small.--icon-only {
      line-height: 0.5rem;
      width: 1rem;
    }

.hds-flag-wrapper.--size-medium {
    height: 1.5rem;
    padding: var(--hds-spacing-0) var(--hds-spacing-2);
  }

.hds-flag-wrapper.--size-medium.--icon-only {
      letter-spacing: var(--hds-body-small-letter-spacing);
      -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
              text-decoration: var(--hds-body-small-text-decoration, inherit);
      font: var(--hds-body-small-font);
      width: 1.5rem;
    }

.hds-flag-wrapper.--size-large {
    letter-spacing: var(--hds-body-small-letter-spacing);
    -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
            text-decoration: var(--hds-body-small-text-decoration, inherit);
    font: var(--hds-body-small-font);
    height: 2rem;
    padding: var(--hds-spacing-0) var(--hds-spacing-4);
  }

.hds-flag-wrapper.--size-large.--icon-only {
      line-height: 1rem;
      width: 2rem;
    }

.hds-flag-wrapper.--icon-only {
    justify-content: center;
    padding: var(--hds-spacing-0);
  }

.hds-flag-wrapper:not(.--icon-only) hds-icon {
      margin-right: var(--hds-spacing-1);
    }

.hds-flag-wrapper .hds-flag-label-wrapper {
    white-space: nowrap;
  }

.hds-flag-wrapper:focus,
  .hds-flag-wrapper:focus:not(:focus-visible) {
    outline: none;
  }

.hds-flag-wrapper:focus-visible {
    outline: none;
  }

.--variant-subtle {
  --hds-icon-color: var(--hds-foreground-primary);

  background-color: var(--hds-background-object);
  border-color: var(--hds-background-object);
  color: var(--hds-foreground-primary);
}

.--variant-warning {
  --hds-icon-color: var(--hds-foreground-primary);

  background-color: var(--hds-warning);
  border-color: var(--hds-warning);
  color: var(--hds-foreground-primary);
}

.--variant-success {
  --hds-icon-color: var(--hds-ondarkcolor-primary);

  background-color: var(--hds-positive);
  border-color: var(--hds-positive);
  color: var(--hds-ondarkcolor-primary);
}

.--variant-error {
  --hds-icon-color: var(--hds-ondarkcolor-primary);

  background-color: var(--hds-negative);
  border-color: var(--hds-negative);
  color: var(--hds-ondarkcolor-primary);
}

.--variant-custom {
  background-color: var(--hds-flag-custom-accent-color);
  border-color: var(--hds-flag-custom-accent-color);
  color: var(--hds-flag-custom-font-color);
}

.--variant-subtle-quiet {
  --hds-icon-color: var(--hds-foreground-secondary);

  border-color: var(--hds-foreground-secondary);
  color: var(--hds-foreground-secondary);
}

.--variant-warning-quiet {
  --hds-icon-color: var(--hds-foreground-warning);

  border-color: var(--hds-foreground-warning);
  color: var(--hds-foreground-warning);
}

.--variant-success-quiet {
  --hds-icon-color: var(--hds-foreground-positive);

  border-color: var(--hds-foreground-positive);
  color: var(--hds-foreground-positive);
}

.--variant-error-quiet {
  --hds-icon-color: var(--hds-foreground-negative);

  border-color: var(--hds-foreground-negative);
  color: var(--hds-foreground-negative);
}

.--variant-custom-quiet {
  --hds-icon-color: var(--hds-flag-custom-accent-color);

  border-color: var(--hds-flag-custom-accent-color);
  color: var(--hds-flag-custom-accent-color);
}

`;
//# sourceMappingURL=hds-flag.css.js.map