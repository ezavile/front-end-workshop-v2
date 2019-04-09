var ImageElement = require('./image-element');
var UserNameElement = require('./user-name-element');

var createWrapper = function() {
  var div = document.createElement('div');
  div.classList.add('hp_Avatar');

  return div;
};

module.exports = {
  render: function(options) {
    var wrapper = createWrapper();
    var imageElement = ImageElement.render(options);
    var userNameElement = UserNameElement.render(options.userName);

    wrapper.append(imageElement);
    wrapper.append(userNameElement);

    return wrapper;
  }
}
