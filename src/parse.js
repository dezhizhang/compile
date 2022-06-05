
let tokenize = require('./tokenize')

function parse(script) {
    let token = tokenize(script);
    return token;

}

module.exports = parse;

