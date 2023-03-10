import { css } from 'lit';
export const styles = css `
:host(:focus) {
  outline: 0;
}

@keyframes linear-animation {
  0% {
    transform: translateX(-15%) scaleX(0.15);
  }

  100% {
    transform: translateX(100%) scaleX(0.15);
  }
}

@keyframes clockwise-animation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.-hds-progress-indicator-wrapper {
  align-items: center;
  box-sizing: border-box;
  color: var(--hds-onlightcolor-primary);
  display: flex;
  letter-spacing: var(--hds-body-letter-spacing);
  -webkit-text-decoration: var(--hds-body-text-decoration, inherit);
          text-decoration: var(--hds-body-text-decoration, inherit);
  font: var(--hds-body-font);
  width: 100%;
}

.-hds-progress-indicator-wrapper.disabled {
    background: var(--hds-background-object);
    color: var(--hds-foreground-inactive);
  }

.-hds-progress-indicator-wrapper svg {
    display: block;
    margin: auto;
  }

.-hds-progress-indicator-wrapper svg line {
      stroke-linecap: round;
      stroke-width: 0.125rem;
    }

.-hds-progress-indicator-wrapper svg .track {
      stroke-dashoffset: 0;
      stroke-opacity: 0.4;
    }

.-hds-progress-indicator-wrapper svg .progress {
      stroke-opacity: 1;
    }

.-hds-progress-indicator-wrapper.linear.determinate .progress {
      transition: all 250ms ease-in;
    }

.-hds-progress-indicator-wrapper.linear.indeterminate .progress {
      animation: linear-animation 1s infinite linear;
    }

.-hds-progress-indicator-wrapper.accent svg line {
        stroke: var(--hds-accent);
      }

.-hds-progress-indicator-wrapper.action svg line {
        stroke: var(--hds-action);
      }

.-hds-progress-indicator-wrapper.on-light svg line {
        stroke: var(--hds-foreground-primary);
      }

.-hds-progress-indicator-wrapper.on-light-subtle svg line {
        stroke: var(--hds-foreground-secondary);
      }

.-hds-progress-indicator-wrapper.on-dark svg line {
        stroke: var(--hds-ondarkcolor-primary);
      }

.-hds-progress-indicator-wrapper.circular {
  align-items: center;
  display: flex;
}

.-hds-progress-indicator-wrapper.circular svg {
    display: block;
    margin: auto;
    overflow: visible;
    transform: rotate(-90deg);
  }

.-hds-progress-indicator-wrapper.circular svg circle {
      fill: transparent;
      stroke-linecap: butt;
      stroke-width: 0.125rem;
      vector-effect: non-scaling-stroke;
    }

.-hds-progress-indicator-wrapper.circular svg .path {
      stroke-opacity: 0.4;
    }

.-hds-progress-indicator-wrapper.circular svg .circularProgress {
      stroke-opacity: 1;
    }

.-hds-progress-indicator-wrapper.circular svg .circularDeterminateProgress {
      stroke-dasharray: 100 100;
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 1s ease-in-out;
    }

.-hds-progress-indicator-wrapper.circular.small {
    height: 1rem;
    width: 1rem;
  }

.-hds-progress-indicator-wrapper.circular.small svg {
      height: 0.875rem;
      width: 0.875rem;
    }

.-hds-progress-indicator-wrapper.circular.small .circularProgress {
      stroke-dasharray: 38;
      stroke-dashoffset: 25;
    }

.-hds-progress-indicator-wrapper.circular.small.circularProgress.determinate {
      stroke-dasharray: 100 100;
      stroke-dashoffset: 0;
    }

.-hds-progress-indicator-wrapper.circular.large {
    height: 2rem;
    width: 2rem;
  }

.-hds-progress-indicator-wrapper.circular.large svg {
      height: 1.875rem;
      width: 1.875rem;
    }

.-hds-progress-indicator-wrapper.circular.large .circularProgress {
      stroke-dasharray: 88;
      stroke-dashoffset: 59;
    }

.-hds-progress-indicator-wrapper.circular.determinate .circularProgress {
      opacity: 0;
    }

.-hds-progress-indicator-wrapper.circular.indeterminate .circularProgress {
      animation: clockwise-animation 1s infinite linear;
      transform-origin: center;
    }

.-hds-progress-indicator-wrapper.circular.accent svg circle {
        stroke: var(--hds-accent);
      }

.-hds-progress-indicator-wrapper.circular.action svg circle {
        stroke: var(--hds-action);
      }

.-hds-progress-indicator-wrapper.circular.on-light svg circle {
        stroke: var(--hds-foreground-primary);
      }

.-hds-progress-indicator-wrapper.circular.on-light-subtle svg circle {
        stroke: var(--hds-foreground-secondary);
      }

.-hds-progress-indicator-wrapper.circular.on-dark svg circle {
        stroke: var(--hds-ondarkcolor-primary);
      }

.-hds-progress-indicator-wrapper.circular.on-light-danger svg circle {
        stroke: var(--hds-foreground-negative);
      }

.-hds-progress-indicator-wrapper.circular.on-light-success svg circle {
        stroke: var(--hds-foreground-positive);
      }

.-hds-progress-indicator-wrapper.circular.on-light-warning svg circle {
        stroke: var(--hds-foreground-warning);
      }

`;
//# sourceMappingURL=hds-progress-indicator.css.js.map