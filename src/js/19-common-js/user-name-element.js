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
