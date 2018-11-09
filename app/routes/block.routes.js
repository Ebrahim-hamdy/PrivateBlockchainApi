module.exports = (app) => {
    const block = require('./../controllers/block.controller.js');

    // Add a new Block
    app.post('/block', block.addBlock);
    // Find a single block with a height
    app.get('/block/:height', block.getBlock);
    // Retrieve and return blocks size.
    app.get('/getBlockHeight', block.getBlockHeight);
    // Retrieve and return chain.
    app.get('/getChain', block.getChain);
}
