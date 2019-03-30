console.log('--- 04 Scope Chain ---');
function moringoInfo() {
  var dogName = 'Moringo';
  console.log('Dog name:', dogName);
  console.log('Dog breed', getDogBreed());
  console.log('Dog description', getDogDescription());

  function getDogBreed() {
    return 'Pitbull';
  }

  function getDogDescription() {
    return dogName + ' is a good dog...';
  }
}

moringoInfo();
console.log('Dog name:', dogName);
console.log('Dog breed:', getDogBreed());
console.log('Dog description', getDogDescription());
