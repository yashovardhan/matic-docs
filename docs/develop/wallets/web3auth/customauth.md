---
id: customauth 
title: Using Custom Authentication
description: Enable social logins in your Polygon dApp - Custom Authentication with Web3Auth
keywords:
  - web3auth
  - social login
  - web3
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

Custom Authentication is a way to authenticate users with your own custom authentication service. For example, you can use a custom authentication
service like **Firebase** or **Auth0** for providing the Web2 authentication aspect which can be passed on to Web3Auth via **Verifiers** and Web3Auth will proceed
with the process from there.

Using your own authentication service with Web3Auth is one of the best utlisation of our platform. When building a production application, we
recommend you to prefer this approach rather than relying on the default authentication provided by Web3Auth. There are multiple upsides to it:

- Using custom authentication can **provide your users a holistic experience from start to finish**. This is enabled since you own the whole
  experience and Web3Auth is just a service in the client side backend.
- You can **customise the data needed from the authentication service** and onboard users according to your requirements. Web3Auth just needs the
  verification token from your side, that's it!
- You can **migrate your existing users into the new flow with Web3Auth**, without them needing to create new accounts according to our flow. Again,
  just pass on the verification token, we'll create a wallet for them instantly for you!

This guide will further explain how you can utilise Web3Auth to create your custom authentication reference.

## Get Started

---

Using your own authentication service with Web3Auth is actually relatively easy and can be done with not too much code. To get started,

- **Design your Key Management Architecture to decide on which logins ([verifiers](https://docs.web3auth.io/customauth/verifiers)) you'd like to implement, your authentication
  structure and more.**

:::tip

#### Here are a couple of questions that might help you there:

**Which logins should my application support?**

You can select from this [list](https://docs.web3auth.io/customauth/verifiers) or use your own Custom Verifier. There are some nuances with certain login providers, so don't hesitate
to get in touch.

**Should different logins lead to the same key?**

You can choose to connect logins with the same verifierID. For example if a user uses generic email logins and a gmail login to login on different
occasions he/she can still retrieve the same key. This can only be done on logins which share a common unique identifier for a user. Read more about
[aggregating logins](https://docs.web3auth.io/customauth/verifiers#aggregating-loginsverifiers).

:::

- **Create your verifier on testnet on the [Web3Auth Dashboard](https://dashboard.web3auth.io).** This would require you to similarly setup the
  different logins/auths you have chosen with the respective parties. For example, with Google you need a `clientID`. Any generic OAuth follow the
  details (here)[./verifiers]The process is fairly strightforward and you can view it [here](/get-started/using-dashboard#creating-a-verifier).
- **Make sure to convert/ deploy your verifier to mainnet, before entering into production.**

## Using your own custom login provider

---

You can use your own login providers, using one of the custom login schemes \(either via JWTs or ECDSA signatures\). This way, your users can still
use your existing login provider. As long as your application follows the JWT specification and uses JWKS for signing whose public keys are exposed by
an endpoint, it should be supported.

Read more [**here**](/developing-with-web3auth/customauth/#custom-verifiers)

## Can XXXX authenticator/login be supported?

---

If you'd like support for a particular login system, do
send your query over to hello@web3auth.io.
