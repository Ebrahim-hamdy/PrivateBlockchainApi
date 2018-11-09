module.exports = (app) => {
    const block = require('./../controllers/block.controller.js');

    // Add a new Block
    app.post('/block/addBlock', block.addBlock);
    // Find a single block with a height
    app.get('/block/getBlock/:height', block.getBlock);
    // Retrieve and return blocks size.
    app.get('/block/getBlockHeight', block.getBlockHeight);
    // Retrieve and return chain.
    app.get('/block/getChain', block.getChain);
}
