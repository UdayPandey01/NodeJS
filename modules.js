const name = require('./names');
const sayHi = require('./util');
const data = require('./alternative-syntax');
console.log(data);


sayHi('susan')
sayHi(name.john)
sayHi(name.peter)