(function() {
  var AvatarElement = (function() {
    var createWrapper = function() {
      var div = document.createElement('div');
      div.classList.add('hp_Avatar');
  
      return div;
    };
    
    return {
      render: function(options) {
        var wrapper = createWrapper();
        var imageElement = ImageElement.render(options);
        var userNameElement = UserNameElement.render(options.userName);

        wrapper.append(imageElement);
        wrapper.append(userNameElement);

        return wrapper;
      }
    }
  })();

  window.AvatarElement = AvatarElement;
})();
