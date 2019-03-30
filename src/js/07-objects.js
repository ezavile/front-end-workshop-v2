console.log('--- 07 Objects ---');
var scofield = {
  pet: 'dog',
  name: 'Scofield',
  age: 3,
  'id-pet': '1',
  0: 'weird',
};
scofield.breed = 'criollo';

var camila = new Object({
  pet: 'cat',
  name: 'Camila',
  age: 5,
  'id-pet': '2',
  0: 'weird',
});

console.log('Dog name: ', scofield.name);
console.log('Dog attr weird: ', scofield[0]);
console.log('------------------------------');
console.log('Cat age: ', camila.age);
console.log('Cat id: ', camila['id-pet']);

var moringo = {
  name: 'Moringo',
  getDescription: function() {
    return moringo.name + ' is a good dog...';
  },
};

console.log('Moringo name: ', moringo.name);
console.log('Moringo description: ', moringo.getDescription());
console.log('------------------------------');
var moringoClone = moringo;
moringoClone.name = 'Moringo Clone';
console.log('Moringo Clone name: ', moringoClone.name);
console.log('Moringo Clone description: ', moringoClone.getDescription());
console.log('------------------------------');
console.log('Moringo name: ', moringo.name);
console.log('Moringo description: ', moringo.getDescription());
