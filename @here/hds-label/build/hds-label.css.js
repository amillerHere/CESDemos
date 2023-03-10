import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.-hds-label-wrapper .label-container {
    box-sizing: inherit;
    display: flex;
    flex-direction: row;
    margin-bottom: var(--hds-spacing-1);
  }

.-hds-label-wrapper .label-container::after {
      clear: both;
      content: '';
      display: table;
    }

.-hds-label-wrapper .label-container .label-primary {
      --hds-icon-color: var(--hds-foreground-secondary);

      color: var(--hds-foreground-secondary);
      flex: 1;
      letter-spacing: var(--hds-body-small-letter-spacing);
      -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
              text-decoration: var(--hds-body-small-text-decoration, inherit);
      font: var(--hds-body-small-font);
      text-align: left;
    }

.-hds-label-wrapper .label-container .label-primary.error {
        color: var(--hds-negative);
      }

.-hds-label-wrapper .label-container .label-primary.warning {
        color: var(--hds-warning);
      }

.-hds-label-wrapper .label-container .label-primary.success {
        color: var(--hds-positive);
      }

.-hds-label-wrapper .label-container .label-primary.focus {
        color: var(--hds-accent);
      }

.-hds-label-wrapper .label-container .label-primary.disabled {
        color: var(--hds-foreground-tertiary-disabled);
      }

.-hds-label-wrapper .label-container .label-secondary {
      --hds-icon-color: var(--hds-foreground-secondary);

      color: var(--hds-foreground-secondary);
      letter-spacing: var(--hds-caption-letter-spacing);
      -webkit-text-decoration: var(--hds-caption-text-decoration, inherit);
              text-decoration: var(--hds-caption-text-decoration, inherit);
      font: var(--hds-caption-font);
      min-width: 20%;
      text-align: right;
    }

.-hds-label-wrapper.default {
    align-items: end;
  }

.-hds-label-wrapper.default .label-container .label-primary {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

.-hds-label-wrapper.assistive {
    align-items: start;
  }

.-hds-label-wrapper.assistive .label-container {
      margin-top: var(--hds-spacing-2);
    }

.-hds-label-wrapper.assistive .label-container .label-primary {
        letter-spacing: var(--hds-caption-letter-spacing);
        -webkit-text-decoration: var(--hds-caption-text-decoration, inherit);
                text-decoration: var(--hds-caption-text-decoration, inherit);
        font: var(--hds-caption-font);
      }

.-hds-label-wrapper.assistive .label-container .label-secondary {
        margin-left: var(--hds-spacing-8);
        min-width: auto;
      }

`;
//# sourceMappingURL=hds-label.css.js.map