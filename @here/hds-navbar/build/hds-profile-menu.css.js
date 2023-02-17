import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.hds-profile-menu-closed-avatar {
  align-items: center;
  cursor: pointer;
  display: flex;
}

.hds-profile-menu-closed-avatar .hds-profile-menu-icon-wrapper {
    padding: var(--hds-spacing-2);
  }

.hds-profile-menu-closed-avatar.disabled {
    background: var(--hds-background-object);
    color: var(--hds-foreground-inactive);
  }

.hds-profile-menu-closed-avatar:focus-visible {
    outline: var(--hds-object-focused) solid 0.125rem;
    outline-offset: 0.375rem;
  }

.hds-profile-menu-wrapper {
  position: relative;
}

.hds-profile-menu-wrapper .hds-profile-menu {
    display: none;
    min-width: 15.5rem;
    position: absolute;
    right: -0.5rem;
    top: 3.125rem;
  }

.hds-profile-menu-wrapper .hds-profile-menu.hds-profile-menu-show {
      display: block;
    }

.hds-profile-menu {
  background: var(--hds-background-secondary);
  border: 0.0625rem solid var(--hds-foreground-tertiary);
  border-radius: var(--hds-border-radius);
  display: flex;
  filter: var(--hds-overlay);
  flex-direction: column;
  list-style: none;
  margin: var(--hds-spacing-0);
  overflow: inherit;
  padding: var(--hds-spacing-2) var(--hds-spacing-0);
}

.hds-profile-details {
  align-items: center;
  display: flex;
  height: 3.125rem;
}

.hds-profile-details .hds-profile-details-avatar-wrapper {
    padding-left: var(--hds-spacing-4);
    padding-right: var(--hds-spacing-3);
  }

.hds-profile-details .hds-profile-details-avatar-wrapper:focus:focus-within {
      outline: 0;
    }

.hds-profile-details .hds-profile-details-text-container {
    height: 100%;
    padding-right: var(--hds-spacing-2);
  }

.hds-profile-details .hds-profile-details-text {
    align-items: center;
    display: flex;
    height: 1.5625rem;
  }

.hds-profile-details .hds-profile-details-text.hds-profile-details-text--name {
      color: var(--hds-foreground-primary);
      letter-spacing: var(--hds-button-letter-spacing);
      -webkit-text-decoration: var(--hds-button-text-decoration, inherit);
              text-decoration: var(--hds-button-text-decoration, inherit);
      font: var(--hds-button-font);
    }

.hds-profile-details .hds-profile-details-text.hds-profile-details-text--email {
      color: var(--hds-foreground-secondary);
      letter-spacing: var(--hds-body-small-letter-spacing);
      -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
              text-decoration: var(--hds-body-small-text-decoration, inherit);
      font: var(--hds-body-small-font);
    }

`;
//# sourceMappingURL=hds-profile-menu.css.js.map