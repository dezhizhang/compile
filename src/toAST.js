const ASTNode = require('./ASTNode');
const nodeTypes = require('./nodeType');
const tokenType = require('tokenType');
function toAST(TokenReader) {
    let rootNode = new ASTNode(nodeTypes.Program)
    return rootNode;
}

function additive(TokenReader) {
    
}

function number(TokenReader) {
    let node = null;
    let token = TokenReader.peek();
    if(token !== null && token.type === tokenType.NUMBER) {
        token = TokenReader.read();
        node = new ASTNode(nodeTypes.Numeric,token.value);
    }
    return node;

}


module.exports = toAST;
