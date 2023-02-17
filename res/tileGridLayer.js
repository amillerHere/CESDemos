/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
// To use a Tile Grid Layer for debugging (either as Base Layer or as layer on top)

(() => {
  const Provider = (getProviderClass());
  false ? // As BaseLayer?
    map.setBaseLayer(getLayer(0.5)) :
    map.addLayer(getLayer(0.5));


  self.getTileGridLayer =
    self.getBlankLayer = // legacy
    getLayer;



  // ###########################################  Implementation ##################################################

  function getLayer(opacity) {
    return new H.map.layer.TileLayer(new Provider(opacity));
  }

  function getProviderClass() {
    function inherits(childCtor, parentCtor) {
      function TempCtor() {}
      TempCtor.prototype = parentCtor.prototype;
      childCtor.superClass_ = parentCtor.prototype;
      childCtor.prototype = new TempCtor();
      childCtor.prototype.constructor = childCtor;
      childCtor.base = function(me, methodName, var_args) {
        var args = new Array(arguments.length - 2);
        for (let i = 2; i < arguments.length; i++) {
          args[i - 2] = arguments[i];
        }
        return parentCtor.prototype[methodName].apply(me, args);
      };
    }

    const tileSize = map.getBaseLayer().tileSize;

    function Provider(opacity) {
      Provider.superClass_.constructor.call(this, {tileSize: tileSize, engineType: map.getEngine().type});
      // Not public in compiled build:
      if (this.setOpacityInternal) {
        this.setOpacityInternal(opacity === undefined ? 0.5 : opacity);
      }
    }
    inherits(Provider, H.map.provider.RemoteTileProvider);

    Provider.prototype.requestInternal = function(x, y, z, success) {
      setTimeout(function() {
        success();
      }, 0);
      return {cancel: function() {}};
    };

    // Required for proper rendering configuration to be assembled:
    Provider.prototype.providesRasters = function() {
      return true;
    };

    Provider.prototype.createTileInternal = function(x, y, z, data, options) {
      data = document.createElement('canvas');
      data.width = tileSize;
      data.height = tileSize;
      const ctx = data.getContext('2d');
      let j = z,
          mask;
      const quadKey = Array(z);
      while (j--) {
        mask = 1 << j;
        quadKey[z - j] = (x & mask && 1) + (y & mask && 2);
      }
      ctx.clearRect(0, 0, tileSize, tileSize);
      ctx.save()
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, tileSize, tileSize);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.font = (12) + 'px sans-serif';
      // ctx.fillText(z + '/' + x + '/' + (Math.pow(2, z) - y - 1) + ' -- ' + quadKey.join(''), 18, 18);
      ctx.fillText(z + '/' + x + '/' + y + ' -- ' + quadKey.join(''), 18, 18);
      ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 0, 2 * tileSize, 2 * tileSize);
      ctx.strokeRect((tileSize / 2) - 1, (tileSize / 2) - 1, 2, 2);
      ctx.restore();

      return new H.map.provider.Tile(x, y, z, data);
    };

    return Provider;
  }

  window.getTileGridLayer = function(opacity) {
    return new H.map.layer.TileLayer(new Provider(opacity));
  };
})();

