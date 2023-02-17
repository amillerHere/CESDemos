import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.arrow {
  display: flex;
}

.content {
  display: none;
}

.-hds-accordion-button {
  --hds-icon-color: var(--hds-foreground-primary);

  align-items: center;
  box-sizing: border-box;
  color: var(--hds-foreground-primary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  line-height: var(--hds-button-line-height);
  width: 100%;
}

.-hds-accordion-button .headline {
    align-items: center;
    display: flex;
    line-height: normal;
    width: 100%;
  }

.-hds-accordion-button .headline .icon {
      margin-right: var(--hds-spacing-2);
    }

.-hds-accordion-button .headline .headline-text {
      letter-spacing: var(--hds-button-letter-spacing);
      -webkit-text-decoration: var(--hds-button-text-decoration, inherit);
              text-decoration: var(--hds-button-text-decoration, inherit);
      font: var(--hds-button-font);
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

.-hds-accordion-button:disabled {
    cursor: default;
  }

.-hds-accordion-button *:focus,
  .-hds-accordion-button *:focus:active,
  .-hds-accordion-button *:focus:not(:focus-visible),
  .-hds-accordion-button *:focus-visible,
  .-hds-accordion-button *:active {
    outline: 0;
  }

.expanded .arrow {
    transform: rotate(180deg);
  }

.expanded .content {
    display: flex;
  }

.arrow-pos-start .-hds-accordion-button {
    flex-direction: row-reverse;
  }

.arrow-pos-start .headline {
    margin-left: var(--hds-spacing-2);
  }

.arrow-pos-end .-hds-accordion-button {
    flex-direction: row;
  }

.hds-accordion-variant-default.last-child .-hds-accordion-button {
      border-bottom: var(--hds-border-width) solid var(--hds-foreground-divider);
    }

.hds-accordion-variant-default.last-child.expanded .-hds-accordion-button {
        border-bottom-color: transparent;
      }

.hds-accordion-variant-default.last-child.expanded .content {
        border-bottom: var(--hds-border-width) solid var(--hds-foreground-divider);
      }

.hds-accordion-variant-default .content {
    padding: var(--hds-spacing-4) var(--hds-spacing-7) var(--hds-spacing-7) var(--hds-spacing-7);
  }

.hds-accordion-variant-default .-hds-accordion-button {
    background: transparent;
    border-bottom: var(--hds-border-width) solid transparent;
    border-left: solid 0.125rem transparent;
    border-right: solid 0.125rem transparent;
    border-top: var(--hds-border-width) solid var(--hds-foreground-divider);
    height: 3rem;
    padding-left: var(--hds-spacing-3);
    padding-right: var(--hds-spacing-3);
  }

.hds-accordion-variant-default .-hds-accordion-button:hover {
      background: var(--hds-background-hover);
    }

.hds-accordion-variant-default .-hds-accordion-button.disabled {
      --hds-icon-color: var(--hds-foreground-inactive);

      color: var(--hds-foreground-inactive);
      cursor: not-allowed;
    }

.hds-accordion-variant-default .-hds-accordion-button:active {
      background: var(--hds-background-press);
    }

.hds-accordion-variant-default .-hds-accordion-button:focus-visible {
      outline: var(--hds-object-focused) solid 0.125rem;
    }

.hds-accordion-variant-default .-hds-accordion-button.disabled:hover {
      background: transparent;
    }

.hds-accordion-variant-solid {
  margin: var(--hds-spacing-1) var(--hds-spacing-0);
}

.hds-accordion-variant-solid.first-child {
    margin-top: var(--hds-spacing-0);
  }

.hds-accordion-variant-solid.last-child {
    margin-bottom: var(--hds-spacing-0);
  }

.hds-accordion-variant-solid .headline hds-icon {
    margin-right: var(--hds-spacing-2);
  }

.hds-accordion-variant-solid .content {
    padding: var(--hds-spacing-2);
  }

.hds-accordion-variant-solid .-hds-accordion-button {
    background: var(--hds-background-object);
    border-color: transparent;
    border-radius: var(--hds-border-radius);
    height: 2rem;
    padding-left: var(--hds-spacing-2);
    padding-right: var(--hds-spacing-2);
  }

.hds-accordion-variant-solid .-hds-accordion-button:hover {
      background: var(--hds-background-object-hover);
    }

.hds-accordion-variant-solid .-hds-accordion-button:active {
      background: var(--hds-background-object-press);
    }

.hds-accordion-variant-solid .-hds-accordion-button:focus-visible {
      outline: var(--hds-object-focused) solid 0.125rem;
    }

`;
//# sourceMappingURL=hds-accordion-item.css.js.map