---
title: 'Online Identity Verification'
date: 2025-06-02T14:39:05+02:00
tags:
category:
topic:
draft: false
---


How to reliably set up verification for your online identity (Email and Socials).

<!--more-->


Terminology:

- PGP: Pretty Good Privacy
- GPG: Gnu Privacy Guard

## 1. Creating a private OpenPGP key

Make sure `gnupg` is installed (additionally install gpg-tui):

```bash
sudo pacman -S gnupg gpg-tui
```


---

>[!Note]
>We will add your official Emails and Socials to this key later


Generate a private key:

```bash
gpg --full-generate-key
```

I recommend a full generation and going with the defaults.


>[!Warning]
>Deleting a key: `gpg --delete-secret-key [FPR or Email]`)


---

Listing all secret keys:

```bash
gpg --list-secret-keys
```

Listing all public keys:

```bash
gpg --list-public-keys
```

This way you can check out all your keys and their fingerprint (FPR)

---

### Editing your private key

```bash
gpg --edit-key [FPR]
```

or interactively:

```bash
gpg-tui
```

### Basic operations:

Selecting an uid:

```gpg
uid [number]
```

Deleting an uid:

```gpg
deluid
```


Add secondary Emails to your encryption key:

```gpg
adduid
```


Set primary Email!

```gpg
uid [number]
primary
save
```


Add identity claim to your private key:

```gpg
notation
```


At this point I recommend to create an Keyoxide Profile for online identity verification and easier claim of multiple accounts.

Get your key fingerprint and add this into the notation: `proof@ariadne.id=https://keyoxide.org/aspe:keyoxide.org:FPR`.


This will link your Keyoxide Profile to your OpenPGP Key (both ways). Remember to add the PGP Key to Keyoxide as well.


Add some services and complete your Keyoxide Profile afterwards.

You are totally free to add your accounts to your PGP Key instead but Keyoxide is easier to maintain in my opinion.




## 2. Export and upload public key 


Quick upload:

```bash
gpg --send-keys [FPR]
gpg --keyserver hkps://keys.openpgp.org --send-keys [FPR]
```

For example:

```bash
gpg --send-keys LD2C49IENMLNS287A12AC5D8CB1846291B4819D
```

---

Be careful where you export the keys into!


Export secret key into file:

```bash
gpg --armor --export-secret-keys --output private.asc [Email-address or KEYID]
```

Export public key to upload later:

```bash
gpg --armor --export --output public.asc [Email-address or KEYID]
```


Upload your public key `public.asc` to [OpenPGP](https://keys.openpgp.org/upload/submit)



## 3. Check if Keyoxide shows your public information

Go to `https://keyoxide.org/FPR` and check your profile.

Change `FPR` to your key fingerprint or paste your fingerprint directly here [Keyoxide](https://keyoxide.org).

Then add your Keyoxide link to your socials to proof your identity. (e.g. Mastodon)

Last step: Check if Keyoxide realises the linked PGP Key and Socials: `https://keyoxide.org/aspe:keyoxide.org:FPR`

Congratulations, you are now verified on Mastodon, have an encrypted Mail and you claimed the accounts you use online.


---

Also look into [Keybase](https://wiki.archlinux.org/title/Keybase)!

---

References:
- https://docs.keyoxide.org/getting-started/creating-profile-openpgp/
