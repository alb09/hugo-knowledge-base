---
title: 'Setup Windows 11 Inside of Linux'
date: 2025-06-17T23:24:25+02:00
tags:
category:
topic:
draft: false
---

<!--more-->


Download preferred ISO from Microsoft: [Download Windows 11](https://www.microsoft.com/en-us/software-download/windows11)

I recommend **Windows 11 English International**, supposedly less bloat in there. Look at [Microwin – Winutil Documentation](https://winutil.christitus.com/userguide/microwin/) if you want to go full mode with setting up an clean Windows ISO.

Installing the graphical user interface for QEMU and a GUI Hypervisor:

```bash
sudo pacman -S quemu-desktop libvirt virt-manager
```

See `man virsh` and `man qemu` for details.


Enable `libvirtd`:

```bash
systemctl enable libvirtd.socket
```

Open `Virtual Machine Manager`, click the plus icon and create an virtual machine with Windows ISO for example.
