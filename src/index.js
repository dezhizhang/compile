
let parse = require('./parse')
let sourceCode = '2+3*4';
let ast = parse(sourceCode);
console.log(ast);
