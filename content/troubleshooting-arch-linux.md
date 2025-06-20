---
title: 'Troubleshooting Arch Linux'
date: 2025-06-20T22:32:50+02:00
tags:
category:
topic:
draft: false
---

<!--more-->



After an update interruption the screen of my Laptop stopped working.

I found the USB ISO of my initial Arch Linux installation and booted into the live environment:

Arch Linux tty:

```bash
root@archiso ~ #
```

## Enable wireless connection (WIFI)

(run commands one by one)

```bash
iwctl
device list
station wlan0 scan
station wlan0 get-networks
station wlan0 connect "SSID"
exit
```

## Access your system

List block devices:

```bash
lsblk
```

Result:

```
nvme0n1     259:0    0 476.9G  0 disk 
├─nvme0n1p1 259:1    0   100M  0 part /boot/efi
├─nvme0n1p2 259:2    0     8G  0 part [SWAP]
└─nvme0n1p3 259:3    0 468.8G  0 part /
```

Mount your root partition:

```bash
mount /dev/nvme0n1p3 /mnt
```

Access your root partition: 
 
```bash
arch-chroot /mnt
```

Troubleshoot something...

When you finished:

```bash
exit
reboot
```



