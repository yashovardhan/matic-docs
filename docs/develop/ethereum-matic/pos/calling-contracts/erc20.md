---
id: erc20
title: ERC20 Deposit and Withdraw Guide
sidebar_label: ERC20
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---

## Quick summary 

This section of the docs deal with depositing and withdrawing ERC20 tokens. Just like the Using SDK section of the docs, the bare skeleton of this page is very much the same as depositing and withdrawing ETH. What stands as a difference are the contracts that are instantiated, and the difference in the methods used. In this section, we'll learn how to **instantiate the contracts**, **deposit**, **burn**, and **exit**. Let's go.

## High Level Flow

### Depositing ERC20 

- Provide approval for the **ERC20PredicateProxy** contract to spend the tokens that will be deposited
- Go on to deposit the tokens by making the **depositFor** call on **RootChainManager**.

### Withdrawing ERC20

- **Burn** the tokens on the Polygon chain.
- Call the **exit** function and make sure to submit the transaction proof of burn hash. This call is to be made after the **checkpoint** is submitted for the block containing burn transaction 

## Details

Let's see what the steps to using the contracts look like

### Instantiate the contracts

These are the contracts exposed here

```js
const mainWeb3 = new Web3(mainProvider)
const maticWeb3 = new Web3(maticProvider)
const rootTokenContract = new mainWeb3.eth.Contract(rootTokenABI, rootTokenAddress)
const rootChainManagerContract = new mainWeb3.eth.Contract(rootChainManagerABI, rootChainManagerAddress)
const childTokenContract = new maticWeb3(childTokenABI, childTokenAddress)
```

### Approve
Provide approval for the **ERC20PredicateProxy** contract to spend the tokens by calling the **approve** function of the token contract. The **approve** function takes two arguments, the spender and the amount. The **spender** is the address that is being approved to spend the tokens and the **amount** is the amount of tokens that can be spent. We suggest that you keep the amount equal to the deposit amount for one-time approval or pass a bigger number to avoid approving multiple times
```js
await rootTokenContract.methods
  .approve(erc20Predicate, amount)
  .send({ from: userAddress })
```

### Deposit
As always, please make sure the token is mapped and the amount is approved for deposit before making this call.

Call the **depositFor** function of the **RootChainManager**, this function takes 3 arguments, **user**, **rootToken** and **depositData**. User is the address of the user that will receive the deposit on the Polygon chain, **rootToken** is the address of token on the Polygon chain and **depositData** is the abi encoded amount

This is what the deposit method looks like
```js
const depositData = mainWeb3.eth.abi.encodeParameter('uint256', amount)
await rootChainManagerContract.methods
  .depositFor(userAddress, rootToken, depositData)
  .send({ from: userAddress })
```

### Burn
Burning a token involves destroying the token on the Polygon chain and making the proof of burn available in the **exit** step. Tokens are burnt by calling the **withdraw** function which in itself takes a single argument, **amount**, indicating the number of tokens to be burned. As said previously, proof of this burn needs to be submitted in the exit step, so make sure to store the transaction hash.

```js
const burnTx = await childTokenContract.methods
  .withdraw(amount)
  .send({ from: userAddress })
const burnTxHash = burnTx.transactionHash
```

### Exit
Completing the cycle means calling the exit function on the **RootChainManager** contract which unlocks and recieves the tokens back from the **ERC20PredicateProxy** contract. This function takes a single byte argument from the **withdraw** function and uses it as proof of burn for the transaction. Its important that we wait for the checkpoint containing the burn transaction to be submitted before calling this function. The proof of burn us generated by RLP encoding the following fields:

- headerNumber - Checkpoint header block number containing the burn transaction
- blockProof - Proof that the block header (in the child chain) is a leaf in the submitted merkle root
- blockNumber - Block number containing the burn transaction on child chain
- blockTime - Burn transaction block time
- txRoot - Transactions root of block
- receiptRoot - Receipts root of block
- receipt - Receipt of the burn transaction
- receiptProof - Merkle proof of the burn receipt
- branchMask - 32 bits denoting the path of receipt in merkle patricia tree
- receiptLogIndex - Log Index to read from the receipt

Generating all this information manually has historically proven to be tricky, so we advise you use the matic.js SDK. If you're still interested in sending the transaction manually, please pass encodeAbi as true in the options object to get raw call data.

```js
const exitCalldata = await maticPOSClient
  .exitERC20(burnTxHash, { from, encodeAbi: true })
```

Send this calldata to **RootChainManager**.

```js
await mainWeb3.eth.sendTransaction({
  from: userAddress,
  to: rootChainManagerAddress,
  data: exitCalldata.data
})
```