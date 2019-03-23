console.log('--- 08 This ---');
var moringo = {
  name: 'Moringo',
  getDescription: function() {
    return this.name + ' is a good dog...';
  },
};

var name = 'Benito placed on global context';

function getDescription() {
  return this.name + ' is a good dog...';
}

console.log('Using this inside of an object:', moringoClone.getDescription());
console.log('------------------------------');
console.log('Using this inside of a function:', getDescription());
console.log('------------------------------');
console.log('This used outside an object points to global');
console.log(window === this);
console.log(globalThis === window);

function attachLocalVariableToGlobal() {
  var fromLocalToGlobal = { name: 'some pet' };
  window.fromLocalToGlobal = fromLocalToGlobal;
}

attachLocalVariableToGlobal();
console.log('this.fromLocalToGlobal', this.fromLocalToGlobal);
console.log('window.fromLocalToGlobal', window.fromLocalToGlobal);
console.log('globalThis.fromLocalToGlobal', globalThis.fromLocalToGlobal);
