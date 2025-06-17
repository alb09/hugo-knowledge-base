---
title: 'Using Windows Inside of Linux'
date: 2025-06-17T23:24:25+02:00
tags:
category:
topic:
draft: false
---

<!--more-->

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
