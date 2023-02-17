import { css } from 'lit';
export const styles = css `
/* #region misc */

:host {
  display: block;
}

:host(:focus) {
  outline: 0;
}

:host([dragging]),
:host([draggable='true']) {
  background-color: var(--hds-background-secondary);
  border-radius: var(--hds-border-radius);
  filter: var(--hds-object--dragged);
}

:host(:host:focus-visible) .-hds-list-item-wrapper {
    border: 2px solid var(--hds-object-focused);
  }

:host(:host:focus-visible) .dragging {
    border-color: transparent;
  }

.-hds-list-item-wrapper {
  --hds-icon-fill-transition: 0.4s ease;

  align-items: center;
  cursor: pointer;
  display: flex;
  letter-spacing: var(--hds-body-small-letter-spacing);
  -webkit-text-decoration: var(--hds-body-small-text-decoration, inherit);
          text-decoration: var(--hds-body-small-text-decoration, inherit);
  font: var(--hds-body-small-font);
  line-height: normal;
  overflow: inherit;
  padding-left: var(--hds-spacing-4);
  padding-right: var(--hds-spacing-4);
  text-align: left;
  text-overflow: inherit;
  transition: all 0.4s ease, transform 0ms, border 0ms, outline 0ms;
  white-space: inherit;
}

.-hds-list-item-wrapper .text {
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
    width: 100%;
  }

.-hds-list-item-wrapper .icon {
    --hds-icon-color: var(--hds-foreground-secondary);

    margin-right: var(--hds-spacing-2);
  }

.-hds-list-item-wrapper ::slotted(a) {
    color: var(--hds-foreground-primary) !important;
    font: inherit !important;
    letter-spacing: inherit !important;
    text-decoration: none !important;
  }

.-hds-list-item-wrapper.disabled .icon {
      --hds-icon-color: var(--hds-foreground-inactive);
    }

.-hds-list-item-wrapper .disabled,
  .-hds-list-item-wrapper.disabled ::slotted(a),
  .-hds-list-item-wrapper.disabled {
    color: var(--hds-foreground-inactive) !important;
    cursor: default !important;
    pointer-events: none !important;
  }

.-hds-list-item-wrapper:focus,
  .-hds-list-item-wrapper:focus:active,
  .-hds-list-item-wrapper:active {
    outline: 0;
  }

.hds-list-item--has-anchor .text {
    padding: var(--hds-spacing-0);
  }

.hds-list-item--has-anchor .text slot {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
    }

.hds-list-item--has-anchor .text ::slotted(a) {
      display: block;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

/* #endregion */

/* #region list item sizes */

.hds-list-item-size-small {
  height: 2rem;
}

.hds-list-item-size-medium {
  height: 2.5rem;
}

.hds-list-item-size-large {
  height: 3rem;
}

.hds-list-item-size-extra-large {
  height: 3.5rem;
}

/* #endregion */

/* #region H-Padding */

.hds-list-item-h-padding-default {
  padding-left: calc(var(--hds-spacing-4) - 2px);
  padding-right: calc(var(--hds-spacing-4) - 2px);
}

.hds-list-item-h-padding-dense {
  padding-left: calc(var(--hds-spacing-2) - 2px);
  padding-right: calc(var(--hds-spacing-2) - 2px);
}

/* #endregion */

/* #region list variant subtle/subtle-divider */

.hds-list-item-variant-subtle-default,
.hds-list-item-variant-subtle-divider-default {
  background-color: transparent;
  border: 2px solid transparent;
}

.hds-list-item-variant-subtle-default:hover, .hds-list-item-variant-subtle-divider-default:hover {
    background-color: var(--hds-background-hover);
  }

.hds-list-item-variant-subtle-default:active, .hds-list-item-variant-subtle-divider-default:active {
    background-color: var(--hds-background-press);
  }

.hds-list-item-variant-subtle-default.selected, .hds-list-item-variant-subtle-divider-default.selected {
    background-color: var(--hds-background-selected);
  }

.hds-list-item-variant-subtle-default.selected:hover, .hds-list-item-variant-subtle-divider-default.selected:hover {
      background-color: var(--hds-background-selected-hover);
    }

.hds-list-item-variant-subtle-default.selected:active, .hds-list-item-variant-subtle-divider-default.selected:active {
      background-color: var(--hds-background-selected-press);
    }

.hds-list-item-variant-subtle-default.disabled, .hds-list-item-variant-subtle-divider-default.disabled {
    background-color: transparent;
  }

.hds-list-item-variant-subtle-default.dragging,
  .hds-list-item-variant-subtle-default.dragging.selected,
  .hds-list-item-variant-subtle-divider-default.dragging,
  .hds-list-item-variant-subtle-divider-default.dragging.selected {
    background-color: var(--hds-background-press);
  }

.hds-list-item-variant-subtle-success,
.hds-list-item-variant-subtle-divider-success {
  background-color: var(--hds-positive-secondary);
  border: 2px solid transparent;
}

.hds-list-item-variant-subtle-success:hover, .hds-list-item-variant-subtle-divider-success:hover {
    background-color: var(--hds-positive-secondary-hover);
  }

.hds-list-item-variant-subtle-success:active,
  .hds-list-item-variant-subtle-success:active:focus,
  .hds-list-item-variant-subtle-divider-success:active,
  .hds-list-item-variant-subtle-divider-success:active:focus {
    background-color: var(--hds-positive-secondary-press);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-subtle-success:active .icon, .hds-list-item-variant-subtle-success:active:focus .icon, .hds-list-item-variant-subtle-divider-success:active .icon, .hds-list-item-variant-subtle-divider-success:active:focus .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-subtle-success:active ::slotted(a), .hds-list-item-variant-subtle-success:active:focus ::slotted(a), .hds-list-item-variant-subtle-divider-success:active ::slotted(a), .hds-list-item-variant-subtle-divider-success:active:focus ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-subtle-success:focus, .hds-list-item-variant-subtle-divider-success:focus {
    background-color: var(--hds-positive-secondary);
  }

.hds-list-item-variant-subtle-success.selected, .hds-list-item-variant-subtle-divider-success.selected {
    background-color: var(--hds-positive);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-subtle-success.selected:hover, .hds-list-item-variant-subtle-divider-success.selected:hover {
      background-color: var(--hds-positive-hover);
    }

.hds-list-item-variant-subtle-success.selected:active, .hds-list-item-variant-subtle-divider-success.selected:active {
      background-color: var(--hds-positive-press);
    }

.hds-list-item-variant-subtle-success.selected .icon, .hds-list-item-variant-subtle-divider-success.selected .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-subtle-success.selected ::slotted(a), .hds-list-item-variant-subtle-divider-success.selected ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-subtle-success.disabled, .hds-list-item-variant-subtle-divider-success.disabled {
    background-color: transparent;
  }

.hds-list-item-variant-subtle-success.dragging,
  .hds-list-item-variant-subtle-success.dragging:hover,
  .hds-list-item-variant-subtle-success.dragging.selected,
  .hds-list-item-variant-subtle-divider-success.dragging,
  .hds-list-item-variant-subtle-divider-success.dragging:hover,
  .hds-list-item-variant-subtle-divider-success.dragging.selected {
    background-color: var(--hds-positive-press);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-subtle-success.dragging .icon, .hds-list-item-variant-subtle-success.dragging:hover .icon, .hds-list-item-variant-subtle-success.dragging.selected .icon, .hds-list-item-variant-subtle-divider-success.dragging .icon, .hds-list-item-variant-subtle-divider-success.dragging:hover .icon, .hds-list-item-variant-subtle-divider-success.dragging.selected .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-subtle-success.dragging ::slotted(a), .hds-list-item-variant-subtle-success.dragging:hover ::slotted(a), .hds-list-item-variant-subtle-success.dragging.selected ::slotted(a), .hds-list-item-variant-subtle-divider-success.dragging ::slotted(a), .hds-list-item-variant-subtle-divider-success.dragging:hover ::slotted(a), .hds-list-item-variant-subtle-divider-success.dragging.selected ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-subtle-error,
.hds-list-item-variant-subtle-divider-error {
  background-color: var(--hds-negative-secondary);
  border: 2px solid transparent;
}

.hds-list-item-variant-subtle-error:hover, .hds-list-item-variant-subtle-divider-error:hover {
    background-color: var(--hds-negative-secondary-hover);
  }

.hds-list-item-variant-subtle-error:active,
  .hds-list-item-variant-subtle-error:active:focus,
  .hds-list-item-variant-subtle-divider-error:active,
  .hds-list-item-variant-subtle-divider-error:active:focus {
    background-color: var(--hds-negative-secondary-press);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-subtle-error:active .icon, .hds-list-item-variant-subtle-error:active:focus .icon, .hds-list-item-variant-subtle-divider-error:active .icon, .hds-list-item-variant-subtle-divider-error:active:focus .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-subtle-error:active ::slotted(a), .hds-list-item-variant-subtle-error:active:focus ::slotted(a), .hds-list-item-variant-subtle-divider-error:active ::slotted(a), .hds-list-item-variant-subtle-divider-error:active:focus ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-subtle-error:focus, .hds-list-item-variant-subtle-divider-error:focus {
    background-color: var(--hds-negative-secondary);
  }

.hds-list-item-variant-subtle-error.selected, .hds-list-item-variant-subtle-divider-error.selected {
    background-color: var(--hds-negative);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-subtle-error.selected:hover, .hds-list-item-variant-subtle-divider-error.selected:hover {
      background-color: var(--hds-negative-hover);
    }

.hds-list-item-variant-subtle-error.selected:active, .hds-list-item-variant-subtle-divider-error.selected:active {
      background-color: var(--hds-negative-press);
    }

.hds-list-item-variant-subtle-error.selected .icon, .hds-list-item-variant-subtle-divider-error.selected .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-subtle-error.selected ::slotted(a), .hds-list-item-variant-subtle-divider-error.selected ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-subtle-error.disabled, .hds-list-item-variant-subtle-divider-error.disabled {
    background-color: transparent;
  }

.hds-list-item-variant-subtle-error.dragging,
  .hds-list-item-variant-subtle-error.dragging:active,
  .hds-list-item-variant-subtle-error.dragging:focus,
  .hds-list-item-variant-subtle-error.dragging.selected,
  .hds-list-item-variant-subtle-divider-error.dragging,
  .hds-list-item-variant-subtle-divider-error.dragging:active,
  .hds-list-item-variant-subtle-divider-error.dragging:focus,
  .hds-list-item-variant-subtle-divider-error.dragging.selected {
    background-color: var(--hds-negative-press);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-subtle-error.dragging .icon, .hds-list-item-variant-subtle-error.dragging:active .icon, .hds-list-item-variant-subtle-error.dragging:focus .icon, .hds-list-item-variant-subtle-error.dragging.selected .icon, .hds-list-item-variant-subtle-divider-error.dragging .icon, .hds-list-item-variant-subtle-divider-error.dragging:active .icon, .hds-list-item-variant-subtle-divider-error.dragging:focus .icon, .hds-list-item-variant-subtle-divider-error.dragging.selected .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-subtle-error.dragging ::slotted(a), .hds-list-item-variant-subtle-error.dragging:active ::slotted(a), .hds-list-item-variant-subtle-error.dragging:focus ::slotted(a), .hds-list-item-variant-subtle-error.dragging.selected ::slotted(a), .hds-list-item-variant-subtle-divider-error.dragging ::slotted(a), .hds-list-item-variant-subtle-divider-error.dragging:active ::slotted(a), .hds-list-item-variant-subtle-divider-error.dragging:focus ::slotted(a), .hds-list-item-variant-subtle-divider-error.dragging.selected ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

/* #endregion */

/* #region list variant solid */

.hds-list-item-variant-solid-default {
  background-color: var(--hds-background-object);
  border: 2px solid transparent;
  border-radius: var(--hds-border-radius);
}

.hds-list-item-variant-solid-default:hover {
    background-color: var(--hds-background-object-hover);
  }

.hds-list-item-variant-solid-default:active {
    background-color: var(--hds-background-object-press);
    color: var(--hds-foreground-primary);
  }

.hds-list-item-variant-solid-default.selected {
    background-color: var(--hds-action);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-solid-default.selected:hover {
      background-color: var(--hds-action-hover);
    }

.hds-list-item-variant-solid-default.selected:active {
      background-color: var(--hds-action-press);
    }

.hds-list-item-variant-solid-default.selected .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-solid-default.selected ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-solid-default.disabled {
    background-color: var(--hds-background-object);
  }

.hds-list-item-variant-solid-default.disabled .icon {
      --hds-icon-color: var(--hds-foreground-inactive);
    }

.hds-list-item-variant-solid-default.dragging,
  .hds-list-item-variant-solid-default.dragging.selected,
  .hds-list-item-variant-solid-default.dragging:active,
  .hds-list-item-variant-solid-default.dragging:focus {
    background-color: var(--hds-background-object-press);
    color: var(--hds-foreground-primary);
  }

.hds-list-item-variant-solid-default.dragging .icon, .hds-list-item-variant-solid-default.dragging.selected .icon, .hds-list-item-variant-solid-default.dragging:active .icon, .hds-list-item-variant-solid-default.dragging:focus .icon {
      --hds-icon-color: var(--hds-foreground-primary);
    }

.hds-list-item-variant-solid-default.dragging ::slotted(a), .hds-list-item-variant-solid-default.dragging.selected ::slotted(a), .hds-list-item-variant-solid-default.dragging:active ::slotted(a), .hds-list-item-variant-solid-default.dragging:focus ::slotted(a) {
      color: var(--hds-foreground-primary) !important;
    }

.hds-list-item-variant-solid-success {
  background-color: var(--hds-positive-secondary);
  border: 2px solid transparent;
  border-radius: var(--hds-border-radius);
  color: var(--hds-foreground-primary);
}

.hds-list-item-variant-solid-success:hover {
    background-color: var(--hds-positive-secondary-hover);
  }

.hds-list-item-variant-solid-success:active,
  .hds-list-item-variant-solid-success:active:focus {
    background-color: var(--hds-positive-secondary-press);
    border: 2px solid transparent;
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-solid-success:active .icon, .hds-list-item-variant-solid-success:active:focus .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-solid-success:active ::slotted(a), .hds-list-item-variant-solid-success:active:focus ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-solid-success:focus {
    background-color: var(--hds-positive-secondary);
  }

.hds-list-item-variant-solid-success.selected {
    background-color: var(--hds-positive);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-solid-success.selected:hover {
      background-color: var(--hds-positive-hover);
    }

.hds-list-item-variant-solid-success.selected:active {
      background-color: var(--hds-positive-press);
    }

.hds-list-item-variant-solid-success.selected .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-solid-success.selected ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-solid-success.disabled {
    background-color: var(--hds-background-object);
  }

.hds-list-item-variant-solid-success.dragging,
  .hds-list-item-variant-solid-success.dragging.selected,
  .hds-list-item-variant-solid-success.dragging:active,
  .hds-list-item-variant-solid-success.dragging:focus {
    background-color: var(--hds-positive-secondary-press);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-solid-success.dragging .icon, .hds-list-item-variant-solid-success.dragging.selected .icon, .hds-list-item-variant-solid-success.dragging:active .icon, .hds-list-item-variant-solid-success.dragging:focus .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-solid-success.dragging ::slotted(a), .hds-list-item-variant-solid-success.dragging.selected ::slotted(a), .hds-list-item-variant-solid-success.dragging:active ::slotted(a), .hds-list-item-variant-solid-success.dragging:focus ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-solid-error {
  background-color: var(--hds-negative-secondary);
  border: 2px solid transparent;
  border-radius: var(--hds-border-radius);
  color: var(--hds-foreground-primary);
}

.hds-list-item-variant-solid-error:hover {
    background-color: var(--hds-negative-secondary-hover);
  }

.hds-list-item-variant-solid-error:active,
  .hds-list-item-variant-solid-error:active:focus {
    background-color: var(--hds-negative-secondary-press);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-solid-error:active .icon, .hds-list-item-variant-solid-error:active:focus .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-solid-error:active ::slotted(a), .hds-list-item-variant-solid-error:active:focus ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-solid-error:focus {
    background-color: var(--hds-negative-secondary);
  }

.hds-list-item-variant-solid-error.selected {
    background-color: var(--hds-negative);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-solid-error.selected:hover {
      background-color: var(--hds-negative-hover);
    }

.hds-list-item-variant-solid-error.selected:active {
      background-color: var(--hds-negative-press);
    }

.hds-list-item-variant-solid-error.selected .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-solid-error.selected ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

.hds-list-item-variant-solid-error.disabled {
    background-color: var(--hds-background-object);
  }

.hds-list-item-variant-solid-error.dragging,
  .hds-list-item-variant-solid-error.dragging.selected,
  .hds-list-item-variant-solid-error.dragging:active,
  .hds-list-item-variant-solid-error.dragging:focus {
    background-color: var(--hds-negative-secondary-press);
    color: var(--hds-ondarkcolor-primary);
  }

.hds-list-item-variant-solid-error.dragging .icon, .hds-list-item-variant-solid-error.dragging.selected .icon, .hds-list-item-variant-solid-error.dragging:active .icon, .hds-list-item-variant-solid-error.dragging:focus .icon {
      --hds-icon-color: var(--hds-ondarkcolor-primary);
    }

.hds-list-item-variant-solid-error.dragging ::slotted(a), .hds-list-item-variant-solid-error.dragging.selected ::slotted(a), .hds-list-item-variant-solid-error.dragging:active ::slotted(a), .hds-list-item-variant-solid-error.dragging:focus ::slotted(a) {
      color: var(--hds-ondarkcolor-primary) !important;
    }

/* #endregion */

`;
//# sourceMappingURL=hds-list-item.css.js.map