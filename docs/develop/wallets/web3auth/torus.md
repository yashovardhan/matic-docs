---
id: torus 
title: Torus Wallet
description: Enable social logins in your Polygon dApp - Torus Wallet
keywords:
  - web3auth
  - social login
  - web3
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

Torus Wallet is our wallet product built on top of Web3Auth, that enables you to connect to the Polygon using your social accounts. It uses the same flow, and additionally provides a direct connection to Ethereum and other blockchains via a metamask esque style. Out of the box, it supports OAuth social logins and native biometric logins, fiat-to-crypto and much more.

## Get Started
---
If your application is already compatible with Metamask/other web3 providers, integrating the Torus Wallet would give you a provider to wrap the same web3 interface. You can install via a **npm** package or **IPFS**. or **jsdelivr** or **unpkg**. 

**Install `npm` package**

```bash
npm i @toruslabs/torus-embed
```

**Example**

```js title="torus-example.js"
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";

const torus = new Torus({
  buttonPosition: "top-left" // default: bottom-left
});
await torus.init({
  buildEnv: "production", // default: production
  enableLogging: true, // default: false
  network: {
    host: "mumbai", // default: mainnet
    chainId: 80001, // default: 1
    networkName: "Mumbai Test Network" // default: Main Ethereum Network
  },
  showTorusButton: false // default: true
});
await torus.login(); // await torus.ethereum.enable()
const web3 = new Web3(torus.provider);
```