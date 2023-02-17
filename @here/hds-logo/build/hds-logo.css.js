import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.wrapper {
  --hds-logo-size: 2rem;

  display: block;
  padding: 0;
  width: fit-content;
}

.wrapper.light-theme {
    background-color: var(--hds-ondarkcolor-primary);
  }

.wrapper.dark-theme {
    background-color: var(--hds-onlightcolor-primary);
  }

.wrapper.extra-small {
    --hds-logo-size: 2rem;
  }

.wrapper.extra-small.padded {
      padding: 0.75rem;
    }

.wrapper.small {
    --hds-logo-size: 2.5rem;
  }

.wrapper.small.padded {
      padding: 0.75rem;
    }

.wrapper.medium {
    --hds-logo-size: 3.5rem;
  }

.wrapper.medium.padded {
      padding: 1.25rem;
    }

.wrapper.large {
    --hds-logo-size: 4.5rem;
  }

.wrapper.large.padded {
      padding: 1.375rem;
    }

.wrapper.extra-large {
    --hds-logo-size: 5.5rem;
  }

.wrapper.extra-large.padded {
      padding: 1.6875rem;
    }

.wrapper svg {
    display: block;
    height: var(--hds-logo-size);
    width: var(--hds-logo-size);
  }

`;
//# sourceMappingURL=hds-logo.css.js.map