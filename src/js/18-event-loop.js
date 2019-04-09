(function() {
  function waitThreeSeconds(){
    console.time('waitThreeSeconds');
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.timeEnd('waitThreeSeconds');
  }

  document.addEventListener('click', function() {
    console.log('click event!');
  });

  waitThreeSeconds();
  console.log('finished execution');


  setTimeout(function() {
    console.log('Hi after 1 ms');
  }, 1);

  console.time('for');
  for (var i = 0; i < 10000; i++) {
    if (i === 0) {
      console.log(i);
    }
    if (i === 9999) {
      console.log(i);
    }
  }
  console.timeEnd('for');
})();
