import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.wrapper {
  align-items: center;
  box-sizing: border-box;
  display: none;
  filter: var(--hds-overlay);
  margin-bottom: var(--hds-notification-margin-bottom);
}

.wrapper.open {
    display: flex;
  }

.wrapper .hds-notification__icon {
    --hds-icon-color: var(--hds-ondarkcolor-primary);

    align-self: stretch;
    background: var(--hds-accent);
    border-bottom-left-radius: var(--hds-border-radius);
    border-top-left-radius: var(--hds-border-radius);
    box-sizing: inherit;
    display: flex;
    justify-content: center;
    width: 2.5rem;
  }

.wrapper .hds-notification__icon hds-icon {
      margin-top: var(--hds-spacing-4);
    }

.wrapper.information .hds-notification__icon {
    background: var(--hds-accent);
  }

.wrapper.confirmation .hds-notification__icon {
    background: var(--hds-positive);
  }

.wrapper.warning .hds-notification__icon {
    background: var(--hds-warning);
  }

.wrapper.error .hds-notification__icon {
    background: var(--hds-negative);
  }

.wrapper .hds-notification__content-wrapper {
    background: var(--hds-background-secondary);
    border-bottom-right-radius: var(--hds-border-radius);
    border-top-right-radius: var(--hds-border-radius);
    box-sizing: inherit;
    color: var(--hds-foreground-secondary);
    display: flex;
    letter-spacing: var(--hds-body-letter-spacing);
    -webkit-text-decoration: var(--hds-body-text-decoration, inherit);
            text-decoration: var(--hds-body-text-decoration, inherit);
    font: var(--hds-body-font);
    width: 22.5rem;
  }

.wrapper .hds-notification__content-wrapper .hds-notification__header {
      color: var(--hds-foreground-primary);
      letter-spacing: var(--hds-headline-04-letter-spacing);
      -webkit-text-decoration: var(--hds-headline-04-text-decoration, inherit);
              text-decoration: var(--hds-headline-04-text-decoration, inherit);
      font: var(--hds-headline-04-font);
      margin-bottom: var(--hds-spacing-2);
    }

.wrapper .hds-notification__content-wrapper .clear {
      margin: var(--hds-spacing-4) var(--hds-spacing-4) var(--hds-spacing-0) auto;
    }

.wrapper .hds-notification__content-wrapper .clear:focus {
        outline: none;
      }

.wrapper .hds-notification__content {
    padding: var(--hds-spacing-6) var(--hds-spacing-0) var(--hds-spacing-6) var(--hds-spacing-6);
  }

.wrapper .hds-notification__content ::slotted(a:focus-visible) {
      outline-color: var(--hds-object-focused) !important;
    }

.wrapper.inline {
  filter: var(--hds-object--subtle);
}

.wrapper.inline .hds-notification__icon {
    align-items: center;
  }

.wrapper.inline .hds-notification__icon hds-icon {
      margin: var(--hds-spacing-0);
    }

.wrapper.inline .hds-notification__content-wrapper {
    align-items: center;
    max-width: 37.5rem;
    min-width: 20rem;
    padding: var(--hds-spacing-0) var(--hds-spacing-4);
    width: auto;
  }

.wrapper.inline .hds-notification__content-wrapper .hds-notification__content {
      flex-grow: 1;
      padding: var(--hds-spacing-3) var(--hds-spacing-0);
    }

.wrapper.inline .hds-notification__content-wrapper .hds-notification__action {
      margin: var(--hds-spacing-0) var(--hds-spacing-2);
    }

.wrapper.inline .hds-notification__content-wrapper .clear {
      margin: var(--hds-spacing-0);
      margin-left: auto;
    }

.wrapper.inline .hds-notification__content-wrapper .clear:focus {
        outline: none;
      }

`;
//# sourceMappingURL=hds-notification.css.js.map