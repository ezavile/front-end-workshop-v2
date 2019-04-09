(function() {
  var cardOne = document.querySelector('#card-one');
  var titleCardOne = cardOne.querySelector('h3');

  titleCardOne.style.color = 'white';
  titleCardOne.style.backgroundColor = 'red';

  titleCardOne.innerText = '<b>Other title</b>';
  cardOne.classList.add('is-disabled');
  console.log('Class as DOMTokenList:', cardOne.classList);

  var cardTwo = document.querySelector('#card-two');
  var titleCardTwo = cardTwo.querySelector('h3');

  cardTwo.classList.toggle('is-disabled');
  titleCardTwo.innerHTML = '<b>Other title two</b>';
})();
