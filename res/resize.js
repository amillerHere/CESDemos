/* eslint-disable require-jsdoc */
const container = document.getElementById('mapContainer');
const horizontalHandle = document.createElement('aside');
const verticalHandle = document.createElement('aside');

const activeBgColor = '#ca0';
const inactiveBgColor = '#456';

// "false" means that map resizing will be triggered explicitly on "mousemove"
const toUseResizeObserver = false;

function resizeMap() {
  self.map.getViewPort().resize();
}

// see:
//   * https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
//   * https://caniuse.com/#feat=resizeobserver
if (toUseResizeObserver) {
  if (typeof ResizeObserver === 'function') {
    (new ResizeObserver(resizeMap)).observe(container);
  } else {
    console.warn('"ResizeObserver" is not supported');
  }
}

container.style.cssText = [
  'position: relative',
  'width: 80%',
  'height: 80%'
].join(';');

// with "ResizeObserver" subscribed,
// there's no need to trigger resizing after updating container's styles
if (!toUseResizeObserver) {
  resizeMap();
}

horizontalHandle.style.cssText = [
  'position: absolute',
  'top: 0',
  'bottom: 0',
  'right: 0',
  'width: 8px',
  `background-color: ${inactiveBgColor}`,
  'cursor: col-resize'
].join(';');

verticalHandle.style.cssText = [
  'position: absolute',
  'bottom: 0',
  'left: 0',
  'right: 0',
  'height: 8px',
  `background-color: ${inactiveBgColor}`,
  'cursor: row-resize'
].join(';');

horizontalHandle.addEventListener('mousedown', startHorizontalResizing);
verticalHandle.addEventListener('mousedown', startVerticalResizing);
document.addEventListener('mouseup', stopResizing);
document.addEventListener('mouseleave', stopResizing);
document.addEventListener('mousemove', resizeOrSkip);

container.appendChild(horizontalHandle);
container.appendChild(verticalHandle);

let isHorizontalResizing = false;
let isVerticalResizing = false;

function stopResizing() {
  isHorizontalResizing = false;
  isVerticalResizing = false;

  horizontalHandle.style.cursor = 'col-resize';
  horizontalHandle.style.backgroundColor = inactiveBgColor;

  verticalHandle.style.cursor = 'row-resize';
  verticalHandle.style.backgroundColor = inactiveBgColor;
}

function startHorizontalResizing() {
  isHorizontalResizing = true;

  horizontalHandle.style.cursor = 'grab';
  horizontalHandle.style.backgroundColor = activeBgColor;
}

function startVerticalResizing() {
  isVerticalResizing = true;

  verticalHandle.style.cursor = 'grab';
  verticalHandle.style.backgroundColor = activeBgColor;
}

function resizeOrSkip(evt) {
  if (isHorizontalResizing) {
    container.style.width = `${evt.pageX / document.body.clientWidth * 100}%`;
  }

  if (isVerticalResizing) {
    container.style.height = `${evt.pageY / document.body.clientHeight * 100}%`;
  }

  // with "ResizeObserver" subscribed,
  // there's no need to trigger resizing in the "mousemove" handler
  if (!toUseResizeObserver && (isHorizontalResizing || isVerticalResizing)) {
    resizeMap();
  }
}
