---
title: 'Fast Updates - Arch Linux'
date: 2025-09-22T00:58:55+02:00
tags: [ 'linux', 'updates', 'arch' ]
category: Technology
topic: Linux
draft: false
---

I just found the reflector cli tool which can help you manage the mirrorlist in Arch. Just wow, it is so fast to update anything now, it feels like a breeze.

<!--more-->


![Mirrorlist](/images/mirrorlist.png)

>[!FYI]
>Changing a the mirrorlist (list of update servers) to a nearby located mirror resolves in faster updates. Really amazing!

Quick setup:

```bash
sudo pacman -Sy reflector
```

Test mirrors and add the fastest to your mirrorlist:

```bash
sudo reflector --latest 20 --protocol https --sort rate --save /etc/pacman.d/mirrorlist
```

>[!Note]
>You can also use the `--country` flag to specify your country. 
>For example:  `--country Germany`

Refresh package databases:

```bash
sudo pacman -Syyu
```

Creating a systemd timer to refresh mirrors regularly:

```bash
sudo systemctl enable reflector.timer
sudo systemctl start reflector.timer
```

Speedy!
