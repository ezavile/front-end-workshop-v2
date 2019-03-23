console.log('--- 02 Creation and Hoisting ---');
console.log('Dog name:', dogName);
console.log('Dog breed: ', getDogBreed());

var dogName = 'Benito';

function getDogBreed () {
  return 'Rottwailler';
}

function getDogDescription() {
  return dogName + ' is a bad dog...';
}

console.log('Dog description: ', getDogDescription());
console.log('Why dog name did not throw an error?');
console.log('But this will throw an error');
console.log(dogBreed);
