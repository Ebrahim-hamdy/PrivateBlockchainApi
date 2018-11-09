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

### POST /block

input:
```json
{
  "data": ""
}
```
sample output:
```json
{
    "hash": "e3306f285588eaa2857be698c6f819c6d59f2754579ad02ad6767de7fe2a06c6",
    "height": 20,
    "body": "add new Block",
    "time": "1541785917",
    "previousBlockHash": "61208064f8ea3265428fd50cf657a626232883437006642d8b82b01acccbe838"
}
```

### GET /block/{height}

sample output:
```json
{
    "hash": "e3306f285588eaa2857be698c6f819c6d59f2754579ad02ad6767de7fe2a06c6",
    "height": 20,
    "body": "add new Block",
    "time": "1541785917",
    "previousBlockHash": "61208064f8ea3265428fd50cf657a626232883437006642d8b82b01acccbe838"
}
```

### GET /getBlockHeight

sample output: block size 21

### GET /getChain

sample output:
```json
{
        "hash": "ceae0114d0bb9dc41ae4cd7d3e841c5595bc2c5a0de35782a16fa9b35357ac53",
        "height": 0,
        "body": "First block in the chain - Genesis block",
        "time": "1541780203"
}, {
        "hash": "e3306f285588eaa2857be698c6f819c6d59f2754579ad02ad6767de7fe2a06c6",
        "height": 20,
        "body": "add new Block",
        "time": "1541785917",
        "previousBlockHash": "ceae0114d0bb9dc41ae4cd7d3e841c5595bc2c5a0de35782a16fa9b35357ac53"
}
```