const queryParams = location.search.substr(1).split('&').reduce((acc, param) => {
  if (param) {
    const [key, value] = param.split('=');
    acc[key] = value;
  }
  return acc;
}, {});

// Build region, either China ('cn') or rest of the world ('row').
const region = queryParams.region || 'row';

/**
 * @return {string} The url to the CDN build directory.
 */
const getCDNDistUrl = function() {
  return new URL(`./dist/${region}/cdn/`, window.location.href).toString();
};

/**
 * Asynchronously load specified script.
 * @param {string} src URL of the script to load
 * @return {Promise} Promise resolved when the script is loaded.
 */
const loadScript = function(src) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

/**
 * Asynchronously load specified script from the CDN build.
 * @param {string} src URL of the script to load.
 * @return {Promise} Promise resolved when the script is loaded.
 */
const loadCDNScript = function(src) {
  return loadScript(getCDNDistUrl() + src);
}


/**
 * Asynchronously load specified scripts from the CDN build in order.
 * @param {string[]} srcs URLs of the scripts to load.
 * @return {Promise} Promise resolved when all scripts are loaded.
 */
const loadCDNScripts = function(srcs) {
  return srcs.reduce((promise, src) => promise.then(() => loadCDNScript(src)), Promise.resolve());
}

// Note that once we include webgl engine it will introduce the H namespace and push classes inside it
// As we use uncompiled sources here, all modules will push their classes to the mapsjs namespace.
// Therefore, here we merge both together, so that inside test pages both H and mapsjs contain classes
// from all modules

// If webgl is loaded, H exists already!
if (window['H']) {
  mapsjs.lang.extend(H, mapsjs);
  mapsjs = H;
} else if (window.mapsjs) {
  H = mapsjs;
}

window.DemoUtils = {
  loadCDNScripts,
  queryParams,
  region,
  loadScript
}
