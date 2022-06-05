
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
    return new TokenReader(tokens);
}

// function TokenReader(tokens) {
//     this.tokens = tokens;
//     this.pos = 0;
// }

class TokenReader{
    constructor(tokens) {
        this.tokens = tokens;
        this.pos = 0;
    }

    read() {
        if(this.pos < this.tokens.length) {
            return this.tokens[this.pos++];
        }
        return null;
    }
    peek() {
        if(this.pos < this.tokens.length) {
            return this.tokens[this.pos];
        }
    }

    unread() {
        if(this.pos > 0) {
            this.pos--;
        }
    }
}

module.exports = tokenize;
