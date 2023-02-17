import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

:host {
  box-sizing: border-box;
  display: inline-block;
  line-height: 1rem;
  -webkit-user-select: none;
          user-select: none;
}

.-hds-checkbox-wrapper {
  --hds-icon-color: transparent;

  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.-hds-checkbox-wrapper:active {
    outline: none;
  }

.-hds-checkbox-wrapper:hover .checkbox-trigger {
    border-color: var(--hds-foreground-tertiary-hover);
  }

.-hds-checkbox-wrapper .checkbox-trigger {
    align-items: center;
    border-color: var(--hds-foreground-tertiary);
    border-radius: var(--hds-border-radius);
    border-style: solid;
    border-width: 0.0625rem;
    box-sizing: border-box;
    display: flex;
    height: 1.25rem;
    justify-content: center;
    position: relative;
    transition: all 0.15s ease-in-out;
    width: 1.25rem;
  }

.-hds-checkbox-wrapper .checkbox-trigger:focus,
    .-hds-checkbox-wrapper .checkbox-trigger:active {
      outline: none;
    }

.-hds-checkbox-wrapper.disabled {
    cursor: default;
    pointer-events: none;
  }

.-hds-checkbox-wrapper.disabled .checkbox-trigger {
      border-color: var(--hds-foreground-inactive);
    }

.-hds-checkbox-wrapper.disabled .checkbox-label {
      color: var(--hds-foreground-inactive);
    }

.-hds-checkbox-wrapper.-checked {
    --hds-icon-color: var(--hds-ondarkcolor-primary);
  }

.-hds-checkbox-wrapper.-checked .checkbox-trigger {
      background: var(--hds-action);
      border-color: var(--hds-action);
    }

.-hds-checkbox-wrapper.-checked.disabled {
    --hds-icon-color: var(--hds-foreground-tertiary-disabled);
  }

.-hds-checkbox-wrapper.-checked.disabled .checkbox-trigger {
      background-color: unset;
      border-color: var(--hds-foreground-tertiary-disabled);
    }

.-hds-checkbox-wrapper .checkbox-content {
    display: flex;
    flex-direction: column;
    letter-spacing: var(--hds-body-small-letter-spacing);
    -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
            text-decoration: var(--hds-body-small-text-decoration, inherit);
    font: var(--hds-body-small-font);
    margin-left: var(--hds-spacing-2);
  }

.-hds-checkbox-wrapper .checkbox-label {
    color: var(--hds-foreground-primary);
    padding-top: var(--hds-spacing-1px);
  }

.-hds-checkbox-wrapper ::slotted([slot='description']) {
    color: var(--hds-foreground-secondary);
    display: block;
    margin-top: var(--hds-spacing-2);
    max-width: 14.25rem;
  }

.-hds-checkbox-wrapper > input {
    border: 0.0625rem solid transparent;
    cursor: pointer;
    display: block;
    height: 1.25rem;
    left: 0;
    margin: var(--hds-spacing-0);
    opacity: 0;
    padding: var(--hds-spacing-0);
    position: absolute;
    top: 0;
    width: 1.25rem;
  }

.-hds-checkbox-wrapper > input:focus-visible + .checkbox-trigger {
    outline: var(--hds-object-focused) solid 0.125rem;
  }

.-hds-checkbox-wrapper hds-icon {
    color: transparent;
    transition: all 0.15s ease-in-out;
  }

.-hds-checkbox-wrapper .checkbox-required {
    color: var(--hds-negative);
  }

.-hds-checkbox-wrapper.hds-checkbox--size-small .checkbox-trigger,
    .-hds-checkbox-wrapper.hds-checkbox--size-small > input {
      height: 1rem;
      margin-top: calc(var(--hds-spacing-1) - 2px);
      width: 1rem;
    }

.-hds-checkbox-wrapper.hds-checkbox--size-small hds-icon {
      margin-top: calc(var(--hds-spacing-1)/-2);
    }

`;
//# sourceMappingURL=hds-checkbox.css.js.map