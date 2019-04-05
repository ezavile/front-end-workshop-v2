(function() {
  var UserNameElement = (function() {
    var createUserName = function(userName) {
      var span = document.createElement('span');
      span.innerText = userName;

      return span;
    }

    return {
      render: function(userName) {
        return createUserName(userName);
      }
    }
  })();

  window.UserNameElement = UserNameElement;
})();
