
let tokenize = require('./tokenize')

function parse(script) {
    let token = tokenize(script);
    let ast = toAST(token);
    return ast;

}

module.exports = parse;

