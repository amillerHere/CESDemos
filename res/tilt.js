/* eslint-disable require-jsdoc */
const viewModel = map.getViewModel();

function tilt(deg) {
  const lookAt = viewModel.getLookAtData();
  lookAt.tilt = deg;
  viewModel.setLookAtData(lookAt);
}

function heading(deg) {
  const lookAt = viewModel.getLookAtData();
  lookAt.heading = deg;
  viewModel.setLookAtData(lookAt);
}

function tiltAndHeading(tilt, heading) {
  const lookAt = viewModel.getLookAtData();
  lookAt.tilt = tilt;
  lookAt.heading = heading;
  viewModel.setLookAtData(lookAt);
}

// ############################################ spinning ###############################################################

let spinInterval;
let angle = 0;

const rotate = () => {
  console.log(`${angle % 360}°`);
  heading(angle);
  angle += 0.5;

  if (angle > 359) {
    angle = 0;
  }
};

const spinStart = () => (spinInterval = setInterval(rotate, 34));
const spinStop = () => clearInterval(spinInterval);
