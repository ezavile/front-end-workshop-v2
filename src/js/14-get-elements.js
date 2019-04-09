(function() {
  var cardOne = document.getElementById('card-one');
  var cards = document.getElementsByClassName('hp_CampaignCard');
  var paragraphs = document.getElementsByTagName('p');

  console.log(cardOne);
  console.log(cards);
  console.log(paragraphs);

  console.log('---------------------');

  cardOne = document.querySelector('#card-one');
  cards = document.querySelector('.hp_CampaignCard');
  paragraphs = document.querySelector('p');

  console.log(cardOne);
  console.log(cards);
  console.log(paragraphs);

  console.log('---------------------');

  cards = document.querySelectorAll('.hp_CampaignCard');
  paragraphs = document.querySelectorAll('p');

  console.log(cards);
  console.log(paragraphs);

  console.log('---------------------');

  cards.forEach(function(card) {
    console.log(card);
  });

  console.log('---------------------');
  
  cardOne = document.querySelector('#card-one');
  var titleCardOne = cardOne.querySelector('h3');

  console.log(titleCardOne);
})();
