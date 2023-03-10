import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.-hds-vertical-navigation-item.has-avatar .-hds-accordion-item-wrapper .-hds-accordion-button {
        padding: 0 calc(var(--hds-spacing-5) - 2px);
      }

.-hds-vertical-navigation-item.nav-collapsed {
    width: 4.5rem;
  }

.-hds-vertical-navigation-item.nav-collapsed .-hds-accordion-item-wrapper .-hds-accordion-button {
        display: flex;
        justify-content: center;
        padding: 0;
      }

.-hds-vertical-navigation-item.nav-collapsed .-hds-accordion-item-wrapper .-hds-accordion-button .headline {
          overflow: hidden;
          width: 1.5rem;
        }

.-hds-vertical-navigation-item.nav-collapsed.has-avatar .-hds-accordion-item-wrapper .headline {
          width: 2rem;
        }

.-hds-vertical-navigation-item.nav-expanded.has-avatar .-hds-accordion-item-wrapper hds-avatar {
          margin-right: var(--hds-spacing-3);
        }

.-hds-vertical-navigation-item.selected {
    position: relative;
  }

.-hds-vertical-navigation-item.selected.has-sub-list.has-chevron .-hds-accordion-item-wrapper .arrow {
          --hds-icon-color: var(--hds-foreground-primary);
        }

.-hds-vertical-navigation-item.selected .-hds-accordion-item-wrapper .-hds-accordion-button {
        --hds-icon-color: var(--hds-foreground-primary);

        background: var(--hds-background-object);
        color: var(--hds-foreground-primary);
      }

.-hds-vertical-navigation-item.selected .-hds-accordion-item-wrapper .-hds-accordion-button .headline a {
            color: var(--hds-foreground-primary);
          }

.-hds-vertical-navigation-item.has-sub-list .-hds-accordion-item-wrapper .content {
        margin: var(--hds-spacing-2) var(--hds-spacing-0) var(--hds-spacing-2) var(--hds-spacing-6);
      }

.-hds-vertical-navigation-item.has-sub-list.has-chevron .-hds-accordion-item-wrapper .arrow {
          --hds-icon-color: var(--hds-foreground-secondary);

          display: flex;
          transform: rotate(-90deg);
        }

.-hds-vertical-navigation-item.has-sub-list.has-chevron .-hds-accordion-item-wrapper .-hds-accordion-button .headline {
            margin-left: calc(var(--hds-spacing-2) + var(--hds-spacing-1px)*2);
          }

.-hds-vertical-navigation-item.has-sub-list.has-chevron .-hds-accordion-item-wrapper.expanded .arrow {
          transform: none;
        }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper.last-child .content {
        border-bottom: 0;
      }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper.expanded .content {
        display: block;
      }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper .-hds-accordion-button {
      --hds-icon-color: var(--hds-foreground-secondary);

      border: 0;
      color: var(--hds-foreground-secondary);
      height: 3.5rem;
      padding: 0 var(--hds-spacing-6);
    }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper .-hds-accordion-button:not(:focus) {
        border-color: transparent;
      }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper .-hds-accordion-button:focus-visible {
        outline-offset: -0.125rem;
      }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper .-hds-accordion-button .headline {
        align-items: center;
        margin-left: var(--hds-spacing-0);
      }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper .-hds-accordion-button .headline a {
          color: var(--hds-foreground-primary);
          outline: none;
          text-decoration: none;
        }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper .-hds-accordion-button .headline a:visited {
            color: var(--hds-foreground-primary);
          }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper .-hds-accordion-button .headline hds-icon {
          margin-right: calc(var(--hds-spacing-3) + var(--hds-spacing-1px)*2);
        }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper .arrow {
      display: none;
    }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper .content {
      padding: var(--hds-spacing-0);
    }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper.disabled .-hds-accordion-button {
        --hds-icon-color: var(--hds-foreground-inactive);

        background: transparent;
        color: var(--hds-foreground-inactive);
      }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper.disabled .-hds-accordion-button .headline a {
            color: var(--hds-foreground-inactive);
            outline: none;
            pointer-events: none;
          }

.-hds-vertical-navigation-item .-hds-accordion-item-wrapper.disabled .-hds-accordion-button .headline a:visited {
              color: var(--hds-foreground-inactive);
            }

`;
//# sourceMappingURL=hds-vertical-navigation-item.css.js.map