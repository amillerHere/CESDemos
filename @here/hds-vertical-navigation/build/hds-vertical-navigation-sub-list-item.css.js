import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.-hds-vertical-navigation-sub-list-item.disabled .-hds-list-item-wrapper.disabled {
        background: transparent;
        border-color: transparent;
      }

.-hds-vertical-navigation-sub-list-item .main-list-wrapper .-hds-list-item-wrapper.disabled:focus {
      border-color: transparent;
    }

.-hds-vertical-navigation-sub-list-item .-hds-list-item-wrapper ::slotted(a),
    .-hds-vertical-navigation-sub-list-item .-hds-list-item-wrapper .text {
      color: var(--hds-foreground-secondary) !important;
      font-family: var(--hds-button-font-family);
      font-size: var(--hds-button-font-size);
      line-height: var(--hds-button-line-height);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

.-hds-vertical-navigation-sub-list-item .-hds-list-item-wrapper.selected {
      background-color: var(--hds-background-object);
    }

.-hds-vertical-navigation-sub-list-item .-hds-list-item-wrapper.selected ::slotted(a),
      .-hds-vertical-navigation-sub-list-item .-hds-list-item-wrapper.selected .text {
        color: var(--hds-foreground-primary) !important;
      }

.-hds-vertical-navigation-sub-list-item .-hds-list-item-wrapper.disabled ::slotted(a),
      .-hds-vertical-navigation-sub-list-item .-hds-list-item-wrapper.disabled .text {
        color: var(--hds-foreground-inactive) !important;
      }

.-hds-vertical-navigation-sub-list-item .sub-list-wrapper {
    padding-left: var(--hds-spacing-2);
  }

`;
//# sourceMappingURL=hds-vertical-navigation-sub-list-item.css.js.map