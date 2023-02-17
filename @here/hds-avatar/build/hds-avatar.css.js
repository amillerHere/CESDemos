import { css } from 'lit';
export const styles = css `
:root {
  --hds-avatar-background: #fff;
}

:host(:focus) {
  outline: 0;
}

.-hds-avatar-wrapper {
  --hds-icon-color: var(--hds-foreground-primary);

  border-radius: 100%;
  box-sizing: border-box;
  color: var(--hds-foreground-primary);
  position: relative;
}

.-hds-avatar-wrapper.bordered {
    background: var(--hds-avatar-border-background, var(--hds-gradient));
    padding: 0.125rem;
  }

.-hds-avatar-wrapper.small {

    height: 1.5rem;

    width: 1.5rem;
  }

.-hds-avatar-wrapper.small .avatar-image {
    border-radius: 100%;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

.-hds-avatar-wrapper.small {}

.-hds-avatar-wrapper.small .focus-ring {
    border: 0.125rem solid var(--hds-avatar-focus-ring-color);
    border-radius: 100%;
    box-sizing: border-box;
    height: 1.25rem;
    left: 0.125rem;
    pointer-events: none;
    position: absolute;
    top: 0.125rem;
    width: 1.25rem;
  }

.-hds-avatar-wrapper.small {

    letter-spacing: var(--hds-avatar-initials-small-letter-spacing);

    -webkit-text-decoration: var(--hds-avatar-initials-small-text-decoration, inherit);

            text-decoration: var(--hds-avatar-initials-small-text-decoration, inherit);

    font: var(--hds-avatar-initials-small-font);
}

.-hds-avatar-wrapper.medium {

    height: 2rem;

    width: 2rem;
  }

.-hds-avatar-wrapper.medium .avatar-image {
    border-radius: 100%;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

.-hds-avatar-wrapper.medium {}

.-hds-avatar-wrapper.medium .focus-ring {
    border: 0.125rem solid var(--hds-avatar-focus-ring-color);
    border-radius: 100%;
    box-sizing: border-box;
    height: 1.75rem;
    left: 0.125rem;
    pointer-events: none;
    position: absolute;
    top: 0.125rem;
    width: 1.75rem;
  }

.-hds-avatar-wrapper.medium {

    letter-spacing: var(--hds-avatar-initials-medium-letter-spacing);

    -webkit-text-decoration: var(--hds-avatar-initials-medium-text-decoration, inherit);

            text-decoration: var(--hds-avatar-initials-medium-text-decoration, inherit);

    font: var(--hds-avatar-initials-medium-font);
}

.-hds-avatar-wrapper.large {

    height: 2.5rem;

    width: 2.5rem;
  }

.-hds-avatar-wrapper.large .avatar-image {
    border-radius: 100%;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

.-hds-avatar-wrapper.large {}

.-hds-avatar-wrapper.large .focus-ring {
    border: 0.125rem solid var(--hds-avatar-focus-ring-color);
    border-radius: 100%;
    box-sizing: border-box;
    height: 2.25rem;
    left: 0.125rem;
    pointer-events: none;
    position: absolute;
    top: 0.125rem;
    width: 2.25rem;
  }

.-hds-avatar-wrapper.large {

    letter-spacing: var(--hds-avatar-initials-large-letter-spacing);

    -webkit-text-decoration: var(--hds-avatar-initials-large-text-decoration, inherit);

            text-decoration: var(--hds-avatar-initials-large-text-decoration, inherit);

    font: var(--hds-avatar-initials-large-font);
}

.-hds-avatar-wrapper.x-large {

    height: 6rem;

    width: 6rem;
  }

.-hds-avatar-wrapper.x-large .avatar-image {
    border-radius: 100%;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

.-hds-avatar-wrapper.x-large {}

.-hds-avatar-wrapper.x-large .focus-ring {
    border: 0.125rem solid var(--hds-avatar-focus-ring-color);
    border-radius: 100%;
    box-sizing: border-box;
    height: 5.75rem;
    left: 0.125rem;
    pointer-events: none;
    position: absolute;
    top: 0.125rem;
    width: 5.75rem;
  }

.-hds-avatar-wrapper.x-large {

    letter-spacing: var(--hds-headline-02-letter-spacing);

    -webkit-text-decoration: var(--hds-headline-02-text-decoration, inherit);

            text-decoration: var(--hds-headline-02-text-decoration, inherit);

    font: var(--hds-headline-02-font);
}

.-hds-avatar-wrapper .content {
    align-items: center;
    background: var(--hds-avatar-background);
    border-radius: 100%;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: center;
    text-transform: uppercase;
  }

`;
//# sourceMappingURL=hds-avatar.css.js.map