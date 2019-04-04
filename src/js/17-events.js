(function() {
  var cardOne = document.querySelector('#card-one');
  var titleCardOne = cardOne.querySelector('h3');

  // window.addEventListener('click', function() {
  //   console.log('click window');
  // }, true);

  // cardOne.addEventListener('click', function() {
  //   console.log('click cardOne');
  // }, true);

  // titleCardOne.addEventListener('click', function() {
  //   console.log('click titleCardOne');
  // }, true);

  // window.addEventListener('click', function() {
  //   console.log('click window');
  // }, false);

  // cardOne.addEventListener('click', function() {
  //   console.log('click cardOne');
  // }, false);

  // titleCardOne.addEventListener('click', function() {
  //   console.log('click titleCardOne');
  // }, false);

  window.addEventListener('click', function(ev) {
    // ev.stopPropagation()
    console.log('click window');
  });


  cardOne.addEventListener('click', function(ev) {
    // ev.stopPropagation()
    console.log('click cardOne');
  });

  cardOne.dispatchEvent(new Event('click'));
  
  titleCardOne.addEventListener('click', function(ev) {
    // ev.stopPropagation()
    console.log('click titleCardOne');
  });
  
})();
