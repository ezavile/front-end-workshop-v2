(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./image-element":2,"./user-name-element":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
var AvatarElement = require('./avatar-element');
var avatar = AvatarElement.render({pictureUrl: 'https://randomuser.me/api/portraits/men/2.jpg', userName: 'Edgar Zavala'});
document.querySelector('.hp_Avatar').replaceWith(avatar);

},{"./avatar-element":1}],4:[function(require,module,exports){
var createUserName = function(userName) {
  var span = document.createElement('span');
  span.innerText = userName;

  return span;
}

module.exports = {
  render: function(userName) {
    return createUserName(userName);
  }
}

},{}]},{},[3]);
