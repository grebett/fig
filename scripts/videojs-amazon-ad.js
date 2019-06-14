/*! @name videojs-amazon-ad @version 1.0.0 @license MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
  typeof define === 'function' && define.amd ? define(['video.js'], factory) :
  (global = global || self, global.videojsAmazonAd = factory(global.videojs));
}(this, function (videojs) { 'use strict';

  videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var version = "1.0.0";

  var Plugin = videojs.getPlugin('plugin'); // Default options for the plugin.

  var defaults = {};
  /**
   * An advanced Video.js plugin. For more information on the API
   *
   * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
   */

  var AmazonAd =
  /*#__PURE__*/
  function (_Plugin) {
    _inheritsLoose(AmazonAd, _Plugin);

    /**
     * Create a AmazonAd plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js plugin architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your plugin's caller.
     */
    function AmazonAd(player, options) {
      var _this;

      // the parent class will add player under this.player
      _this = _Plugin.call(this, player) || this;
      _this.options = videojs.mergeOptions(defaults, options);

      _this.player.ready(function () {
        _this.player.addClass('vjs-amazon-ad');

        console.log('hey, this is a plugin');

        _this.player.on('readyforpreroll', function (e) {
          console.log('readyforpreroll', e);
        });
      });

      return _this;
    }

    return AmazonAd;
  }(Plugin); // Define default values for the plugin's `state` object here.


  AmazonAd.defaultState = {}; // Include the version number.

  AmazonAd.VERSION = version; // Register the plugin with video.js.

  videojs.registerPlugin('amazonAd', AmazonAd);

  return AmazonAd;

}));
