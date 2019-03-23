console.log('--- 06 Data Types ---');

console.log('---------------');
console.log('Primitive type:');
console.log('---------------');
var catName = 'remy';
var catAge = 3;
var catIsBig = false;
var rabbit = undefined;
var cat = null;

console.log(typeof catName);
console.log(typeof catAge);
console.log(typeof catIsBig);
console.log(typeof cat);
console.log(typeof rabbit);
console.log('---------------');
console.log('Reference type:');
console.log('---------------');
function getRemyName() {};
var remy = new Object({ name: 'remmy' });
var dogs = new Array(remy);
var dogBirthday = new Date();
var regex = new RegExp();
console.log(typeof getRemyName);
console.log(typeof remy);
console.log(typeof dogBirthday);
console.log(typeof regex);
