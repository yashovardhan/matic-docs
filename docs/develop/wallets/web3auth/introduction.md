---
id: introduction 
title: Introduction
description: Enable social logins in your Polygon dApp - Web3Auth
keywords:
  - web3auth
  - social login
  - web3
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

Web3Auth is a pluggable auth infrastructure for Web3 wallets and applications. It streamlines the onboarding of both mainstream and crypto native
users under a minute by providing experiences that they're most comfortable with. With support for all social logins, web & mobile native platforms,
wallets and other key management methods, **Web3Auth results in a standard cryptographic key provider specific to the user and application.**

## What does Web3Auth do?

---

With Web3Auth integrated in your application, your user can sign up using the flow of their choice:

#### Mainstream Social Account Logins, & Passwordless flows
  Users can register via Google, Twitter, GitHub, and any other OAuth providers of their
  choice. Users can also register via a passwordless flow, where they can sign in a link sent to their email. This is enabled by our key
  infrastructure [(tKey)](https://github.com/tkey/tkey). Know more about the key management and security of tkey and our infrastructure
  [here](./key-management.mdx).

#### Holistic Web3 Wallet/Key Management Support
  Empower users to use their wallet or key management of choice. Using the Web3Auth suite, users can
  use their existing wallet or key management of choice and hook it up with you application directly.

## Features
---
- **Seemless Onboarding:** Our social login flows are indistinguishable from Web2.0 logins, contributing to greatly improved user experience and
  onboarding.
- **Non-custodial Public Key Infrastructure:** The user is always in control of ownership and access to their cryptographic key pair. Login services
  only ever have access to one share, and thus it's not possible for the provider to retrieve the user's private key on their own.
- **Whitelabel:** Customize Web3Auth's UI such that it blends directly into your application
- **Web and native mobile:** Web3Auth works both on web as well as mobile out of the box, with native and hybrid applications supported.
- **Using your existing auth/userbase:** Plug in to your existing userbase or auth. Zero migration necessary.
- **Integrable in 5 minutes** - That’s it!

## How can I use Web3Auth?

---

Web3Auth comes with simple SDKs that can be integrated in multiple ways to provide the best experience for your users. We support all the available
chains out there with special providers available for EVM and Solana.

## Our SDKs
---
### JavaScript SDKs for Web

- Plug n Play SDK [@web3auth/web3auth](https://docs.web3auth.io/api-reference/web/plugnplay)
- Custom Login UI SDK [@web3auth/core](https://docs.web3auth.io/api-reference/web/customloginui)

### Native SDK for Android

- [web3auth-android-sdk](https://docs.web3auth.io/api-reference/android/setting-up)

### Native SDK for iOS

- [web3auth-swift-sdk](https://docs.web3auth.io/api-reference/ios/setting-up)

### React Native SDK

- [web3auth-react-native-sdk](https://docs.web3auth.io/api-reference/react-native/choosesdk)

### Flutter SDK

- [web3auth-flutter-sdk](https://docs.web3auth.io/api-reference/flutter/setting-up)

:::tip quick start

To quickly get started with Web3Auth, we recommend using our [quick start guide](https://docs.web3auth.io/get-started/quickstart) present on the Web3Auth documentation.

::::

:::info note

- Want to know how our SDKs work? Checkout [**Understanding Web3Auth SDKs**](https://docs.web3auth.io/developing-with-web3auth/understand-sdk)
- Want to know what goes on behind the scenes to make all this possible? See [**How Web3Auth Works?**](https://docs.web3auth.io/overview/how-web3auth-works)
- How are social logins non-custodial? See [**Key Management and Security**](https://docs.web3auth.io/overview/key-management)

:::
