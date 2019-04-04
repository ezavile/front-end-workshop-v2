(function() {
  var githubIcon = document.createElement('i');
  githubIcon.classList.add('hp_icon-facebook');
  
  var githubLink = document.createElement('a');
  githubLink.href = 'http://www.github.com/ezavile';
  githubLink.target = '_blank';
  githubLink.append(githubIcon);

  var githubList = document.createElement('li');
  githubList.classList.add('hp_Footer-socialNetwork-item');
    
  githubList.append(githubLink);

  var socialNetworks = document.querySelector('.hp_Footer-socialNetwork');
  socialNetworks.append(githubLink);
})();
