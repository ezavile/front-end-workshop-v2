console.log('--- 11 Prototypes ---');
function buildOwner(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}

function buildPet(pet, name, owner) {
  return {
    pet: pet,
    name: name,
    owner: owner,
    getDescription: function() {
      return this.name + ' is a ' + this.pet + ' and his owner is ' + this.owner.getFullName();
    }
  }
}

var edgar = buildOwner('Edgar', 'Zavala');
var benito = buildPet('dog', 'Benito', edgar);
console.log(edgar);
console.log(benito);
console.log(benito.getDescription());
console.log('------------------------------');
var edith = buildOwner('Edith', 'Garcia');
var scofield = buildPet('dog', 'Scofield', edith);
console.log(edith);
console.log(scofield);
console.log(scofield.getDescription());
console.log('------------------------------');
function Owner(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Owner.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}

function Pet(pet, name, owner) {
  this.pet = pet;
  this.name = name;
  this.owner = owner;
};

Pet.prototype.getDescription = function() {
  return this.name + ' is a ' + this.pet + ' and his owner is ' + this.owner.getFullName();
}

function Dog(name, owner) {
  Pet.call(this, 'dog', name, owner);
}

Dog.prototype = Object.create(Pet.prototype);

Dog.prototype.bark = function() {
  return 'gua gua!!';
};

function Cat(name, owner) {
  Pet.call(this, 'cat', name, owner);
}

Cat.prototype = Object.create(Pet.prototype);

Cat.prototype.meow = function() {
  return 'miau miau!!';
};

var juan = new Owner('Juan', 'Zavala');
var luna = new Cat('Luna', juan);
console.log(juan);
console.log(luna);
console.log(luna.getDescription());
console.log(luna.meow());
console.log('------------------------------');
var adrian = new Owner('Adrian', 'Zavala');
var sky = new Dog('Sky', adrian);
console.log(adrian);
console.log(sky);
console.log(sky.getDescription());
console.log(sky.bark());

