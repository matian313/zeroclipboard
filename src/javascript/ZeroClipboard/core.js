ZeroClipboard.version = "{{version}}";
// ZeroClipboard options defaults
var _defaults = {
  moviePath:        "ZeroClipboard.swf",        // URL to movie
  trustedDomain:    undefined,                  // Domains that we should trust
  hoverClass:       "zeroclipboard-is-hover",   // The class used to hover over the object
  activeClass:      "zeroclipboard-is-active"   // The class used to set object active
};

/*
 * Set defaults.
 *
 * returns nothing
 */
ZeroClipboard.setDefaults = function (options) {
  for (var ko in options) _defaults[ko] = options[ko];
};

/*
 * Self-destruction and clean up everything
 *
 * returns nothing
 */
ZeroClipboard.destroy = function () {
  // get the bridge
  var bridge = document.getElementById("global-zeroclipboard-html-bridge");

  // if no bridge exists return
  if (!bridge) return;

  // delete the client object
  delete ZeroClipboard.Client.prototype._singleton;

  // remove the bridge
  bridge.parentNode.removeChild(bridge);
};

/*
 * Simple Flash Detection
 *
 * returns true if flash is detected
 */
ZeroClipboard.detectFlashSupport = function () {

  // Assume we don't have it
  var hasFlash = false;

  try {

    // If we can create an ActiveXObject
    if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
      hasFlash = true;
    }
  } catch (error) {

    // If the navigator knows what to do with the flash mimetype
    if (navigator.mimeTypes["application/x-shockwave-flash"]) {
      hasFlash = true;
    }
  }

  return hasFlash;
};