const ASTNode = require('./ASTNode');
let nodeTypes = require('./nodeType');

function toAST(TokenReader) {
    let rootNode = new ASTNode(nodeTypes.Program)
    return rootNode;
}


module.exports = toAST;
