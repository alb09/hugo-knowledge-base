---
title: 'Fix Booting Into Black Screen on Arch Linux'
date: 2025-06-20T23:44:16+02:00
tags:
category:
topic:
draft: false
---

<!--more-->


How I fixed booting into a black monitor for Asus Zenbook running Arch Linux (step by step): 

```bash
pacman -Qs radeon # search system wide radeon driver
pacman -Qs amdgpu
sudo pacman -Ss amdgpu # search for amdgpu drivers in the repo
sudo pacman -S xf86-video-amdgpu # install those drivers
sudo pacman -Rns vulkan-radeon # remove conflicting drivers
sudo mkinitcpio -P # reload initramfs modules
reboot
```

Check kernel driver for gpu:

```bash
lspci -k | grep -A 3 -E "(VGA|3D)"
```

Output:

```
04:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Cezanne [Radeon Vega Series / Radeon Vega Mobile Series] (rev c1)
	Subsystem: ASUSTeK Computer Inc. Device 161c
	Kernel driver in use: amdgpu
	Kernel modules: amdgpu
```

---

Run `xrandr` or `arandr` to adjust monitors

Enable and set resolution of embedded monitor (usually eDP-1):

```bash
xrandr --output eDP-1 --mode 1920x1080
```


