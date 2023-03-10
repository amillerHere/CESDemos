import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

.-hds-panel-wrapper {
  background: var(--hds-background-secondary);
  color: var(--hds-foreground-primary);
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr;
  letter-spacing: var(--hds-body-letter-spacing);
  -webkit-text-decoration: var(--hds-body-text-decoration, inherit);
          text-decoration: var(--hds-body-text-decoration, inherit);
  font: var(--hds-body-font);
  height: 100%;
  position: relative;
}

.-hds-panel-wrapper.disabled {
    background: var(--hds-background-object);
    color: var(--hds-foreground-inactive);
  }

:host([variant='vertical'][panel-interaction='toggle']) .handle::after {
  border-color: var(--hds-foreground-divider);
  border-radius: var(--hds-spacing-1) 0 calc(var(--hds-spacing-1px) + 2px) calc(var(--hds-spacing-1px) + 2px);
  border-style: solid;
  border-width: calc(var(--hds-spacing-1) + 1px) calc(var(--hds-spacing-1) + 1px) 0 0;
  content: '';
  display: inline-block;
  height: calc(var(--hds-spacing-3) + 2px);
  margin-top: -0.5625rem;
  position: absolute;
  top: 50%;
  vertical-align: top;
  width: calc(var(--hds-spacing-3) + 2px);
}

:host([variant='vertical'][panel-interaction='drag']) .handle::after {
  background: var(--hds-foreground-divider);
  border-radius: var(--hds-spacing-1);
  content: '';
  display: inline-block;
  height: var(--hds-spacing-7);
  left: 50%;
  margin-left: -0.125rem;
  margin-top: calc(var(--hds-spacing-4)*-1);
  position: absolute;
  top: 50%;
  width: var(--hds-spacing-1);
}

:host([variant='horizontal'][panel-interaction='toggle']) .handle::after {
  border-color: var(--hds-foreground-divider);
  border-radius: var(--hds-spacing-1);
  border-style: solid;
  border-width: calc(var(--hds-spacing-1) + 1px) calc(var(--hds-spacing-1) + 1px) 0 0;
  content: '';
  display: inline-block;
  height: calc(var(--hds-spacing-3) + 2px);
  left: 50%;
  margin-left: -0.625rem;
  position: absolute;
  vertical-align: top;
  width: calc(var(--hds-spacing-3) + 2px);
}

:host([variant='horizontal'][panel-interaction='drag']) .handle::after {
  background: var(--hds-foreground-divider);
  border-radius: var(--hds-spacing-1);
  content: '';
  display: inline-block;
  height: var(--hds-spacing-1);
  left: 50%;
  margin-left: calc(var(--hds-spacing-4)*-1);
  position: absolute;
  top: 0.5625rem;
  width: var(--hds-spacing-7);
}

:host([overlay]) .handle {
    filter: var(--hds-overlay);
  }

:host(.resizing) {
  -webkit-user-select: none;
          user-select: none;
}

:host(.resizing[variant='vertical']) {
  cursor: col-resize;
}

:host(.resizing[variant='horizontal']) {
  cursor: row-resize;
}

.content {
  overflow: auto;
}

:host([variant='vertical'][panel-position='right']) .content {
    grid-column: 2;
  }

:host([variant='vertical'][panel-position='right'][panel-interaction='toggle']) .-hds-panel-wrapper.closed .handle::after {
        margin-left: 0.125rem;
        transform: rotate(225deg) skew(22deg, 22deg);
      }

:host([variant='vertical'][panel-position='right'][panel-interaction='toggle']) .-hds-panel-wrapper.open .handle::after {
        margin-left: -0.125rem;
        transform: rotate(45deg) skew(22deg, 22deg);
      }

:host([panel-interaction='toggle']) .handle {
  cursor: pointer;
}

:host([variant='vertical'][panel-interaction='toggle']) .-hds-panel-wrapper.open {
      grid-template-columns: auto;
      width: auto;
    }

:host([variant='vertical'][panel-interaction='toggle']) .-hds-panel-wrapper.open .handle::after {
        margin-left: calc(var(--hds-spacing-1px) + 2px);
        transform: rotate(225deg) skew(22deg, 22deg);
      }

:host([variant='vertical'][panel-interaction='toggle']) .-hds-panel-wrapper.closed {
      grid-template-columns: 0;
      width: var(--hds-spacing-6);
    }

:host([variant='vertical'][panel-interaction='toggle']) .-hds-panel-wrapper.closed .handle::after {
        margin-left: 0;
        transform: rotate(45deg) skew(22deg, 22deg);
      }

:host([variant='vertical'][panel-interaction='toggle']) .-hds-panel-wrapper.partial .handle::after {
        margin-left: 0;
        transform: rotate(45deg) skew(22deg, 22deg);
      }

:host([variant='vertical'][panel-interaction='toggle']) .-hds-panel-wrapper .handle:hover {
        background-color: var(--hds-background-hover);
      }

:host([variant='vertical'][panel-interaction='toggle']) .-hds-panel-wrapper .handle:active {
        background-color: var(--hds-background-press);
      }

:host([variant='horizontal'][panel-interaction='toggle']) .-hds-panel-wrapper.open {
      grid-template-rows: auto;
      height: auto;
    }

:host([variant='horizontal'][panel-interaction='toggle']) .-hds-panel-wrapper.open .handle::after {
        margin-top: var(--hds-spacing-1);
        transform: rotate(315deg) skew(22deg, 22deg);
      }

:host([variant='horizontal'][panel-interaction='toggle']) .-hds-panel-wrapper.closed {
      height: 1.375rem;
    }

:host([variant='horizontal'][panel-interaction='toggle']) .-hds-panel-wrapper.closed .handle::after {
        margin-top: var(--hds-spacing-1px);
        transform: rotate(135deg) skew(22deg, 22deg);
      }

:host([variant='horizontal'][panel-interaction='toggle']) .-hds-panel-wrapper.partial .handle::after {
        margin-top: var(--hds-spacing-1px);
        transform: rotate(135deg) skew(22deg, 22deg);
      }

:host([variant='horizontal'][panel-interaction='toggle']) .handle:hover {
      background-color: var(--hds-background-hover);
    }

:host([variant='horizontal'][panel-interaction='toggle']) .handle:active {
      background-color: var(--hds-background-press);
    }

:host([variant='vertical'][enable-peek]) .-hds-panel-wrapper.expanded {
    overflow: hidden;
  }

:host .handle {
  background-color: var(--hds-background-secondary);
  order: 2;
  position: relative;
  z-index: 1;
}

:host([variant='vertical']) .handle {
  border-left: var(--hds-spacing-1px) solid var(--hds-foreground-divider);
  border-right: var(--hds-spacing-1px) solid var(--hds-foreground-divider);
  grid-column: 2 / 2;
  height: 100%;
  width: 1.375rem;
}

:host([variant='vertical']) .handle[data-position='right'] {
    grid-column: 1 / 2;
  }

:host([variant='horizontal']) .handle {
  border-bottom: var(--hds-spacing-1px) solid var(--hds-foreground-divider);
  border-top: var(--hds-spacing-1px) solid var(--hds-foreground-divider);
  grid-row: 1 / 2;
  height: 1.375rem;
  width: 100%;
}

:host([variant='vertical'][panel-interaction='drag']) .-hds-panel-wrapper.closed {
    width: var(--hds-spacing-6);
  }

:host([variant='vertical'][panel-interaction='drag']) .-hds-panel-wrapper .handle {
    cursor: col-resize;
  }

:host([variant='vertical'][panel-interaction='drag']) .-hds-panel-wrapper .handle:hover::after {
        background: var(--hds-foreground-tertiary);
      }

:host([variant='vertical'][panel-interaction='drag']) .-hds-panel-wrapper .handle:active::after {
        background: var(--hds-foreground-tertiary-press);
      }

:host([variant='horizontal'][panel-interaction='drag']) .-hds-panel-wrapper.closed {
    height: 1.375rem;
  }

:host([variant='horizontal'][panel-interaction='drag']) .-hds-panel-wrapper .handle {
    cursor: row-resize;
  }

:host([variant='horizontal'][panel-interaction='drag']) .-hds-panel-wrapper .handle:hover::after {
        background: var(--hds-foreground-tertiary);
      }

:host([variant='horizontal'][panel-interaction='drag']) .-hds-panel-wrapper .handle:active::after {
        background: var(--hds-foreground-tertiary-press);
      }

:host([variant='horizontal'][panel-position='top']) .handle {
    grid-row: 2 / 2;
  }

:host([variant='horizontal'][panel-position='bottom'][panel-interaction='toggle']) .-hds-panel-wrapper .handle::after {
      margin-top: var(--hds-spacing-1);
      transform: rotate(315deg) skew(22deg, 22deg);
    }

:host([variant='horizontal'][panel-position='bottom'][panel-interaction='toggle']) .-hds-panel-wrapper.open .handle::after {
        margin-top: var(--hds-spacing-1px);
        transform: rotate(135deg) skew(22deg, 22deg);
      }

:host([variant='horizontal']) .-hds-panel-wrapper {
  grid-template-rows: 1fr;
  height: auto;
}

::slotted(*) {
  overflow: auto;
}

`;
//# sourceMappingURL=hds-panel.css.js.map