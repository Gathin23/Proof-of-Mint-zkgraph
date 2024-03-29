# Proof of Mint - zkgraph

### This zkgraph tracks all the address that has minted DOP token on sepolia

#### DOP token address on Sepolia Testnet: 0x4873528341d33ec918c7465f244491acb75bc95f

#### Event being read on Sepolia USDT: Transfer(address,address,uint256)


## Usage CLI

> Note: Only `full` image will be processed by zkOracle node. `local` (generated by commands ending with `--local` option) means the zkGraph is compiled locally and only contains partial computation (so that proving and executing will be faster).

The workflow of local zkGraph development must follow: `Develop` (code in /src) -> `Compile` (get compiled wasm image) -> `Execute` (get expected output) -> `Prove` (generate input and pre-test for actual proving in zkOracle) -> `Verify` (verify proof on-chain).

To upload and publish your zkGraph, you should `Upload` (upload code to IPFS), and then `Publish` (register zkGraph on onchain zkGraph Registry).


## Commonly used commands

- **compile**: `npx zkgraph compile`
- **exec**: `npx zkgraph exec <block id>`
- **prove**: ` npx zkgraph prove <block id> <expected state> -i|-t|-p`  
- ……

Read more: https://github.com/hyperoracle/zkgraph-cli#cli
