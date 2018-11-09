### About
A simple private blockchain API. It is ready to scale and build features on top of it.

### Requirements
* [Node.js: 8.11.3 LTS](https://nodejs.org)
* [express](https://www.express.com)
* [LevelDB](http://expressjs.com)

## Usage

### Installation

## Run App

```sh
git clone https://github.com/ebrahim-hamdy/PrivateBlockchainApi.git
cd PrivateBlockchainApi
npm install
```

This installs the dependencies of the project.

### Start API server
```sh
npm start
```
This starts the API server, listening on port 8000 of localhost.

### Endpoints

The endpoints implemented are:

### POST /addBlock

input:
```json
{
  "data": ""
}
```
output: Return new block after creation.

### GET /getBlock/{height}

output: Return a single block with a height.

### GET /getBlockHeight

output: Return block size

### GET /getChain

output: Retrieve and return chain.
