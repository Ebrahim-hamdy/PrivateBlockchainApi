/*jshint esversion: 6 */

const SHA256 = require('crypto-js/sha256');

const Block = require('./../models/block.model.js');
const leveldb = require('./levelSandbox');

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Blockchain {
    constructor() {
        leveldb.getLevelDBHeight().then(length => {
            if(length === 0) {
                this.addBlock(new Block('First block in the chain - Genesis block'))
                    .then(() => console.log('Gensis block'));
            }
        });
    }

    // Add new block
    async addBlock(newBlock) {
        // Block height
        newBlock.height = await this.getBlockHeight();
        // previous block hash
        if(newBlock.height > 0) {
            const prevBlock = await this.getBlock(newBlock.height -1);
            newBlock.previousBlockHash = prevBlock.hash;
        }
        // Block hash with SHA256 using newBlock and converting to a string
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        // Adding block object to LevelDB
        await leveldb.addLevelDBData(newBlock.height, JSON.stringify(newBlock));
    }

    // Get block height
    async getBlockHeight() {
        return await leveldb.getLevelDBHeight();
    }

    // get block
    async getBlock(blockHeight) {
        return await leveldb.getLevelDBData(blockHeight);
    }

    // get chain
    async getChain() {
        return await leveldb.getLevelDBChain();
    }

    // validate block
    async validateBlock(blockHeight) {
        const block = await this.getBlock(blockHeight);
        const blockHash = block.hash;

        block.hash = '';

        const validBlockHash = SHA256(JSON.stringify(block)).toString();

        if(blockHash === validBlockHash) {
            console.log('Block #' + blockHeight + 'valid');
            return true;

        } else {
            console.log(`Block # ${blockHeight} invalid hash`);
            return false;
        }
    }

   // Validate chain
    async validateChain() {
      let errorLog = [];
      let chain = [];

      let chainLength = await this.getBlockHeight();

      for (let i = 0; i < this.chainLength -1; i++) {

        // validate block
        let validBlock = await this.validateBlock(i);
        if (!validBlock) errorLog.push(i);

        // compare blocks hash link
        let blockHash = await this.getBlock(i).hash;
        let previousHash = await this.getBlock(i + 1).previousBlockHash;

        if (blockHash !== previousHash) {
          errorLog.push(i);
        }
      }

      if (errorLog.length > 0) {
        console.log('Block errors = ' + errorLog.length);
        console.log('Blocks: '+ errorLog);

      } else {
        console.log('No errors detected');
      }
  }
}

module.exports = Blockchain;
/* ===== Testing ==============================================================|
|  - Self-invoking function to add blocks to chain                             |                                      |
|  ===========================================================================*/

// (async () => {
//     const blockchain = new Blockchain();
//     await blockchain.addBlock(new Block('This is 1st manually added block'));
//     await blockchain.addBlock(new Block('This is 2nd manually added block'));
//     await blockchain.addBlock(new Block('This is 3rd manually added block'));
//     const chain = await blockchain.getChain();
//     console.log(chain);
//     const block = await blockchain.getBlock(2);
//     console.log(block);
// })();
