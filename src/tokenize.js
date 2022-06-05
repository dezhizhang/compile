
let RegExpObject = /([0-9])|(\+)|(\*)/g
let tokenTypes = require('./tokenType');
let tokenNames = [tokenTypes.NUMBER,tokenTypes.PLUS,tokenTypes.MULTIPLY]


function * tokenizer(script){
    let result;
    while(true) {
        result = RegExpObject.exec(script);
        if(!result) break;
        let index = result.findIndex((item,index) => index > 0 && !!item)
        let toekn = {};
        toekn.type = tokenNames[index - 1];
        toekn.value = result[0];
        yield toekn;

    }
}

function tokenize(script) {
    let tokens = [];
    for(let token of tokenizer(script)) {
        tokens.push(token);
    }
    return tokens;
}

module.exports = tokenize;
