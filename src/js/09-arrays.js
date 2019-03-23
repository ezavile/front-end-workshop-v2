console.log('--- 09 Arrays ---');
var dogs = [
  {
    name: 'Benito'
  },
  {
    name: 'Moringo'
  },
];

var cats = new Array(
  {
    name: 'Remmy',
  },
  {
    name: 'Shisha'
  }
);

console.log('Dogs: ', dogs);
console.log('Cats: ', cats);
console.log('------------------------------');
var dogsClone = dogs;
dogsClone.push({name: 'Scofield'});
dogsClone[4] = {name: 'Camila'};
console.log('Dogs: ', dogsClone);
console.log('Dogs clone: ', dogsClone);
console.log('------------------------------');
console.log('Benito: ', dogs[0]);
console.log('Shisha: ', dogs[1]);
console.log('------------------------------');
console.log('Dogs: ', dogsClone);
for (var i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}
console.log(i);
console.log('------------------------------');
console.log('Cats: ', dogsClone);
cats.forEach(function(cat) {
  console.log(cat);
});
