console.log('--- 10 Functions ---');
console.log('This is a function statement');
var edgar = getOwnerStatement('Edgar', 'Benito');
console.log(edgar.greeting());
function getOwnerStatement(name, petName) {
  return {
    name: name,
    greeting: function() {
      return 'Hi I am ' + this.name + ' and my pet is ' + petName;
    }
  }
}
console.log('------------------------------');
console.log('This is a function expression, you can use anonymous function');
var getOwnerExpression = function(name, petName) {
  return {
    name: name,
    greeting: function() {
      return 'Hi I am ' + this.name + ' and my pet is ' + petName;
    }
  }
}

var edith = getOwnerExpression('Edith', 'Scofield');
console.log(edith.greeting());
console.log('------------------------------');
console.log('Immediately Invoked Function Expression');
(function(dogName) {
  console.log('This dog ' + dogName + ' is coming from global context');
  dogName = 'Claudio';
  console.log('This dog ' + dogName + ' is inside of IIFE');
})(dogName);
console.log('This dog ' + dogName + ' is on a global context');

console.log('------------------------------');
console.log('This points to global inside of a function');
var petOwner = 'Edgar';
var petName = 'Benito';

function getOwnerInfo(greeting) {
  greeting = greeting || 'Hi';
  return greeting + ' I am ' + this.petOwner + ' and my pet is ' + this.petName;
}
console.log(getOwnerInfo());
console.log('------------ BIND ------------');
var bruno = {
  petOwner: 'Juan',
  petName: 'Bruno',
};
var getBrunoOwnerInfo = getOwnerInfo.bind(bruno);
console.log(getBrunoOwnerInfo());
console.log('------------ CALL ------------');
console.log(getOwnerInfo.call(bruno, 'Hola'));
console.log('--------- APPLY ---------');
console.log(getOwnerInfo.apply(bruno, ['Hello']));
console.log('--------- CLOSURES ---------');
function buildOwner(ownerName) {
  var pets = [];

  return {
    addPet: function(pet) {
      pets.push(pet);
    },
    removePet: function(petId) {
      pets = pets.filter(function(pet) {
        return pet.id !== petId
      });
    },
    getPet: function(petId) {
      var pet = pets.find(function(pet) {
        return pet.id === petId;
      });

      return pet ? ownerName + ' there you are ' + pet.name : 'you do not have this pet';
    },
    getPets: function() {
      if (pets.length == 0) {
        return ownerName + ' you do not have pets';
      }
      return ownerName + ' you have ' + pets.length + ' pets';
    }
  }
}

var edgar = buildOwner('Edgar');
edgar.addPet({id: 1, name: 'Scofield'});
edgar.addPet({id: 2, name: 'Benito'});
console.log(edgar.getPets());
console.log(edgar.getPet(2));
console.log(edgar.getPet(3));
edgar.removePet(1);
edgar.removePet(2);
console.log(edgar.getPets());
