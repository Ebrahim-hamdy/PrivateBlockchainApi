/*jshint esversion: 6 */
const Block = require('./../models/block.model');
const Blockchain = require('./../shared/simple-chain');
const helper = require('./../shared/helpers');

const blockchain = new Blockchain();

// Add new Block
exports.addBlock = async (req, res) => {
  // Validate request
  if(helper.isEmptyOrSpaces(req.body.data) || Object.keys(req.body).length === 0) {
    return res.status(400).send({
      message: "Block content can not be empty"
    });
  }

  const blockData = req.body.data;
  const newBlock = new Block(blockData);

  await blockchain.addBlock(newBlock);
  res.send(newBlock);
}

// Find a single block with a height
exports.getBlock = async (req, res) => {
  try {

    let block = await blockchain.getBlock(req.params.height);

    if(!block) {
        return res.status(404).send({
          message: "Block not found with height " + req.params.height
        });
    }
    res.send(block);

  } catch(err) {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Block not found with height " + req.params.height
      });
    }
    return res.status(500).send({
      message: "Error retrieving block with height " + req.params.height
    });
  }
};

// Retrieve and return blocks size.
exports.getBlockHeight = async (req, res) => {
  try{
    let size = await blockchain.getBlockHeight()

    res.send(`block size ${size}`);

  } catch(err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while retrieving block height."
    });
  }
};

// Retrieve and return chain.
exports.getChain = async (req, res) => {
  try{
    let chain = await blockchain.getChain()

    res.send(chain);

  } catch(err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while retrieving chain."
    });
  }
};
