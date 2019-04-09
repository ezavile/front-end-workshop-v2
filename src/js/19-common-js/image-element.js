var createImage = function(options) {
  var img = document.createElement('img');
  img.src = options.pictureUrl;
  img.alt = options.alt || '';
  img.style.width = options.width || '30px';

  return img;
}

module.exports = {
  render: function(options) {
    return createImage(options);
  }
}
