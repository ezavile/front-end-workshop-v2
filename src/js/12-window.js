alert('Welcome to Hopets');
console.log('It was an alert...');
console.log('Screen width: ', screen.width);
console.log('--- JSON stringify ---');
var benito = {
  name: 'Benito',
  pet: 'dog',
};
console.log(JSON.stringify(benito, false, 2));
console.log('--- JSON parse ---');
var benitoJSON = '{ "name": "Benito", "pet": "dog" }';  
console.log(JSON.parse(benitoJSON, false, 2));
var yourName = prompt('What is your name?');
alert('Welcome ' + yourName);
console.log('--- Location ---');
console.log(location.href);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
confirm('Do you want to my github profile?') ? location.assign('https://www.github.com/ezavile') : null;
console.log('--- Body Inner HTML ---');
console.log(document.body.innerHTML);
