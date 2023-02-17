import { css } from 'lit';
export const styles = css `
:host {
  appearance: auto !important;
}

:host {
    display: inline-block;
    height: 2.5rem;
  }

:host([width='100%']) {
    width: 100%;
  }

:host([size='extra-small']) {
    height: 1.5rem;
  }

:host([size='small']) {
    height: 2rem;
  }

:host([size='small'][variant='link']) {
    height: initial;
  }

:host([size='medium']) {
    height: 2.5rem;
  }

:host([size='medium'][variant='link']) {
    height: initial;
  }

:host([size='large']) {
    height: 3rem;
  }

:host([size='large'][variant='link']) {
    height: initial;
  }

:host(:focus) {
    outline: 0;
  }

.hds-button {
    --hds-icon-color: var(--hds-onlightcolor-primary);
    letter-spacing: var(--hds-button-letter-spacing);
    -webkit-text-decoration: var(--hds-button-text-decoration, inherit);
            text-decoration: var(--hds-button-text-decoration, inherit);
    font: var(--hds-button-font);
    align-items: center;
    background: var(--hds-gradient);
    border-radius: 3.125rem;
    border-width: 0;
    box-sizing: border-box;
    color: var(--hds-onlightcolor-primary);
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    padding: var(--hds-spacing-2) var(--hds-spacing-4);
    position: relative;
    text-decoration: none;
  }

.hds-button *:focus,
  .hds-button *:focus:active,
  .hds-button *:focus:not(:focus-visible),
  .hds-button *:active {
    outline: 0;
  }

.hds-button::before {
    background: none;
    border-radius: 3.125rem;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

.hds-button:focus-visible {
    border-radius: 3.125rem;
    outline: var(--hds-object-focused) solid 0.125rem;
  }

.hds-button:hover {
    background: var(--hds-gradient-hover);
    color: var(--hds-onlightcolor-primary);
  }

.hds-button:visited {
    color: var(--hds-onlightcolor-primary);
  }

.hds-button.hds-button--icon:not(.hds-button--icononly) .hds-button-label {
    margin-left: var(--hds-spacing-2);
    margin-top: var(--hds-spacing-1px);
  }

.hds-button.hds-button--icon-right:not(.hds-button--icononly) .hds-button-label {
    margin-right: var(--hds-spacing-2);
  }

.hds-button .hds-button-label-container {
    align-items: center;
    display: flex;
    justify-content: center;
  }

.hds-button .hds-button-loading-container {
    align-items: center;
    display: inline-flex;
    position: absolute;
  }

.hds-button.hds-button--disabled {
    --hds-icon-color: var(--hds-foreground-inactive);

    background: var(--hds-gradient-disabled);
    color: var(--hds-foreground-inactive);
    cursor: not-allowed;
  }

.hds-button.hds-button--loading {
    cursor: not-allowed;
  }

.hds-button.hds-button--size-extra-small {
    --hds-icon-size: 1rem;

    height: 1.5rem;
    padding: var(--hds-spacing-1) var(--hds-spacing-3);
  }

.hds-button.hds-button--size-extra-small.hds-button--icononly {
      --hds-icon-size: 0.5rem;

      height: 1.5rem;
      padding: var(--hds-spacing-1);
      width: 1.5rem;
    }

.hds-button.hds-button--size-small {
    --hds-icon-size: 1rem;

    height: 2rem;
    padding: var(--hds-spacing-2) var(--hds-spacing-4);
  }

.hds-button.hds-button--size-small.hds-button--icononly {
      height: 2rem;
      padding: var(--hds-spacing-2);
      width: 2rem;
    }

.hds-button.hds-button--size-medium {
    --hds-icon-size: 1rem;

    height: 2.5rem;
    padding: var(--hds-spacing-3) var(--hds-spacing-4);
  }

.hds-button.hds-button--size-medium.hds-button--icononly {
      height: 2.5rem;
      padding: var(--hds-spacing-3);
      width: 2.5rem;
    }

.hds-button.hds-button--size-large {
    --hds-icon-size: 1rem;

    height: 3rem;
    padding: var(--hds-spacing-4) var(--hds-spacing-6);
  }

.hds-button.hds-button--size-large.hds-button--icononly {
      --hds-icon-size: 1.5rem;

      height: 3rem;
      padding: var(--hds-spacing-4);
      width: 3rem;
    }

.hds-button.hds-button--variant-secondary {
    --hds-icon-color: var(--hds-foreground-primary);

    background: var(--hds-background-object);
    color: var(--hds-foreground-primary);
  }

.hds-button.hds-button--variant-secondary:hover {
      background: var(--hds-background-object-hover);
      color: var(--hds-foreground-primary);
    }

.hds-button.hds-button--variant-secondary:active {
      background: var(--hds-background-object-press) !important;
    }

.hds-button.hds-button--variant-secondary.hds-button--disabled {
      --hds-icon-color: var(--hds-foreground-inactive);

      background: var(--hds-background-object);
      color: var(--hds-foreground-inactive);
    }

/*
        CSS styles defined here are applied only to Safari browsers
        (any version and any device)
        Secondary variant Button Disable state not working
        properly in Safari hence the styles defined below is a fallback
      */

@media not all and (-webkit-min-device-pixel-ratio: 0), not all and (min-resolution: 0.001dpcm) {
        @supports (-webkit-appearance: none) {

.hds-button.hds-button--variant-secondary.hds-button--disabled {
          --hds-icon-color: var(--hds-foreground-primary);

          color: var(--hds-foreground-primary)
    }

          .hds-button.hds-button--variant-secondary.hds-button--disabled:hover {
            background: var(--hds-background-object);
            color: var(--hds-foreground-inactive);
          }

          .hds-button.hds-button--variant-secondary.hds-button--disabled .hds-button-label-container {
            opacity: 0.3;
          }
        }
      }

.hds-button.hds-button--variant-subtle {
    --hds-icon-color: var(--hds-foreground-primary);

    background: transparent;
    border-width: 0;
    color: var(--hds-foreground-primary);
  }

.hds-button.hds-button--variant-subtle:hover {
      background: var(--hds-background-hover);
      color: var(--hds-foreground-primary);
    }

.hds-button.hds-button--variant-subtle:active {
      background: var(--hds-background-press) !important;
    }

.hds-button.hds-button--variant-subtle.hds-button--disabled {
      --hds-icon-color: var(--hds-foreground-primary-disabled);

      background: transparent;
      color: var(--hds-foreground-primary-disabled);
    }

.hds-button.hds-button--variant-success {
    --hds-icon-color: var(--hds-ondarkcolor-primary);

    background: var(--hds-positive);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-button.hds-button--variant-success:hover {
      background: var(--hds-positive-hover);
      color: var(--hds-ondarkcolor-primary);
    }

.hds-button.hds-button--variant-success:active {
      background: var(--hds-positive-press) !important;
    }

.hds-button.hds-button--variant-success.hds-button--disabled {
      --hds-icon-color: var(--hds-ondarkcolor-primary);

      background: var(--hds-positive-disabled);
      color: var(--hds-ondarkcolor-primary);
    }

.hds-button.hds-button--variant-warning {
    --hds-icon-color: var(--hds-onlightcolor-primary);

    background: var(--hds-warning);
    color: var(--hds-onlightcolor-primary);
  }

.hds-button.hds-button--variant-warning:hover {
      background: var(--hds-warning-hover);
      color: var(--hds-onlightcolor-primary);
    }

.hds-button.hds-button--variant-warning:active {
      --hds-icon-color: var(--hds-ondarkcolor-primary);

      background: var(--hds-warning-press) !important;
      color: var(--hds-ondarkcolor-primary);
    }

.hds-button.hds-button--variant-warning.hds-button--disabled {
      --hds-icon-color: var(--hds-onlightcolor-inactive);

      background: var(--hds-warning-disabled);
      color: var(--hds-onlightcolor-inactive);
    }

.hds-button.hds-button--variant-danger {
    --hds-icon-color: var(--hds-ondarkcolor-primary);

    background: var(--hds-negative);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-button.hds-button--variant-danger:hover {
      background: var(--hds-negative-hover);
      color: var(--hds-ondarkcolor-primary);
    }

.hds-button.hds-button--variant-danger:active {
      --hds-icon-color: var(--hds-ondarkcolor-primary);

      background: var(--hds-negative-press) !important;
      color: var(--hds-ondarkcolor-primary);
    }

.hds-button.hds-button--variant-danger.hds-button--disabled {
      background: var(--hds-negative-disabled);
    }

.hds-button.hds-button--variant-danger.hds-button--disabled::before {
        border: 0;
      }

.hds-button.hds-button--variant-link {
    --hds-icon-color: var(--hds-action);

    background: transparent;
    border-width: 0;
    color: var(--hds-action);
    height: initial;
    padding: var(--hds-spacing-0) var(--hds-spacing-0);
  }

.hds-button.hds-button--variant-link ::slotted(a) {
      color: var(--hds-action);
      font: inherit;
      letter-spacing: inherit;
      text-decoration: none;
    }

.hds-button.hds-button--variant-link:hover {
      --hds-icon-color: var(--hds-action-hover);

      background: transparent;
      color: var(--hds-action-hover);
    }

.hds-button.hds-button--variant-link::before {
      border-radius: var(--hds-border-radius);
    }

.hds-button.hds-button--variant-link::before:hover {
        --hds-icon-color: var(--hds-action-hover);

        background: transparent;
        color: var(--hds-action-hover);
      }

.hds-button.hds-button--variant-link:focus-visible {
      border-radius: var(--hds-border-radius);
    }

.hds-button.hds-button--variant-link:active {
      --hds-icon-color: var(--hds-action-press) !important;

      background: transparent !important;
      color: var(--hds-action-press) !important;
    }

.hds-button.hds-button--variant-link.hds-button--disabled {
      --hds-icon-color: var(--hds-action-disabled);

      color: var(--hds-action-disabled);
    }

.hds-button.hds-button--variant-link.hds-button--disabled ::slotted(a) {
        color: var(--hds-action-disabled);
        font: inherit;
        letter-spacing: inherit;
        text-decoration: none;
      }

.hds-button.hds-button--variant-danger-quiet {
    --hds-icon-color: var(--hds-foreground-negative);

    background: var(--hds-negative-secondary);
    color: var(--hds-foreground-negative);
  }

.hds-button.hds-button--variant-danger-quiet:hover {
      background: var(--hds-negative-secondary-hover);
      color: var(--hds-foreground-negative);
    }

.hds-button.hds-button--variant-danger-quiet:active {
      --hds-icon-color: var(--hds-ondarkcolor-primary);

      background: var(--hds-negative-secondary-press) !important;
      color: var(--hds-ondarkcolor-primary);
    }

.hds-button.hds-button--variant-danger-quiet.hds-button--disabled {
      --hds-icon-color: var(--hds-negative-disabled);

      background: var(--hds-negative-secondary-disabled);
      color: var(--hds-negative-disabled);
    }

.hds-button.hds-button--variant-success-quiet {
    --hds-icon-color: var(--hds-foreground-positive);

    background: var(--hds-positive-secondary);
    color: var(--hds-foreground-positive);
  }

.hds-button.hds-button--variant-success-quiet:hover {
      background: var(--hds-positive-secondary-hover);
      color: var(--hds-foreground-positive);
    }

.hds-button.hds-button--variant-success-quiet:active {
      --hds-icon-color: var(--hds-ondarkcolor-primary);

      background: var(--hds-positive-secondary-press) !important;
      color: var(--hds-ondarkcolor-primary);
    }

.hds-button.hds-button--variant-success-quiet.hds-button--disabled {
      --hds-icon-color: var(--hds-positive-disabled);

      background: var(--hds-positive-secondary-disabled);
      color: var(--hds-positive-disabled);
    }

.hds-button.hds-button--variant-warning-quiet {
    --hds-icon-color: var(--hds-foreground-warning);

    background: var(--hds-warning-secondary);
    color: var(--hds-foreground-warning);
  }

.hds-button.hds-button--variant-warning-quiet:hover {
      background: var(--hds-warning-secondary-hover);
      color: var(--hds-foreground-warning);
    }

.hds-button.hds-button--variant-warning-quiet:active {
      background: var(--hds-warning-secondary-press) !important;
    }

.hds-button.hds-button--variant-warning-quiet.hds-button--disabled {
      --hds-icon-color: var(--hds-warning-disabled);

      background: var(--hds-warning-secondary-disabled);
      color: var(--hds-warning-disabled);
    }

.hds-button.hds-button--variant-subtle-quiet {
    --hds-icon-color: var(--hds-foreground-secondary);

    background: var(--hds-background-secondary);
    color: var(--hds-foreground-secondary);
  }

.hds-button.hds-button--variant-subtle-quiet:hover {
      background: var(--hds-background-hover);
      color: var(--hds-foreground-secondary);
    }

.hds-button.hds-button--variant-subtle-quiet:active {
      background: var(--hds-background-press) !important;
    }

.hds-button.hds-button--variant-subtle-quiet.hds-button--disabled {
      --hds-icon-color: var(--hds-foreground-secondary-disabled);

      background: var(--hds-background-secondary);
      color: var(--hds-foreground-secondary-disabled);
    }

.hds-button.hds-button--variant-floating {
    --hds-icon-color: var(--hds-foreground-primary);

    background: var(--hds-background-secondary);
    color: var(--hds-foreground-primary);
    filter: var(--hds-object);
  }

.hds-button.hds-button--variant-floating:hover {
      background: var(--hds-background-hover);
      color: var(--hds-foreground-primary);
    }

.hds-button.hds-button--variant-floating:active {
      background: var(--hds-background-press) !important;
    }

.hds-button.hds-button--variant-floating.hds-button--disabled {
      --hds-icon-color: var(--hds-foreground-inactive);

      background: var(--hds-background-secondary);
      color: var(--hds-foreground-inactive);
    }

.hds-button.hds-button--variant-on-color-primary {
    --hds-icon-color: var(--hds-foreground-primary);

    background: var(--hds-background-secondary);
    color: var(--hds-foreground-primary);
  }

.hds-button.hds-button--variant-on-color-primary:hover {
      background: var(--hds-background-hover);
      color: var(--hds-foreground-primary);
    }

.hds-button.hds-button--variant-on-color-primary:active {
      background: var(--hds-background-press) !important;
    }

.hds-button.hds-button--variant-on-color-primary.hds-button--disabled {
      --hds-icon-color: var(--hds-foreground-inactive);

      background: var(--hds-background-secondary);
      color: var(--hds-foreground-inactive);
    }

.hds-button.hds-button--variant-on-color-secondary {
    --hds-icon-color: var(--hds-inverse-primary);

    background: var(--hds-foreground-tertiary);
    color: var(--hds-inverse-primary);
  }

.hds-button.hds-button--variant-on-color-secondary:hover {
      background: var(--hds-foreground-tertiary-hover);
      color: var(--hds-inverse-primary);
    }

.hds-button.hds-button--variant-on-color-secondary:active {
      background: var(--hds-foreground-tertiary-press) !important;
    }

.hds-button.hds-button--variant-on-color-secondary.hds-button--disabled {
      --hds-icon-color: var(--hds-inverse-inactive);

      background: var(--hds-foreground-tertiary);
      color: var(--hds-inverse-inactive);
    }

`;
//# sourceMappingURL=hds-button.css.js.map