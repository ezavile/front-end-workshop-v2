(function() {
  var ImageElement = (function() {
    var createImage = function(options) {
      var img = document.createElement('img');
      img.src = options.pictureUrl;
      img.alt = options.alt || '';
      img.style.width = options.width || '30px';

      return img;
    }

    return {
      render: function(options) {
        return createImage(options);
      }
    }
  })();

  window.ImageElement = ImageElement;
})();
