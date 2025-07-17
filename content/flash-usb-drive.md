---
title: 'Flash Usb Drive'
date: 2025-06-29T01:47:00+02:00
tags:
category:
topic:
draft: true
---

<!--more-->


Using `ventoy` to flash multiple ISOs from one USB medium:

```bash
yay -S ventoy-bin
sudo /opt/ventoy/VentoyGUI.x86_64
```


>![Important]
>Unmount the USB device you want to flash.


```bash
umount /dev/sdX
```

Using the `dd` command:

```bash
sudo dd if=/path/to/your.iso of=/dev/sdX bs=4M status=progress
```


Flush write cache:

```bash
sudo sync
```




Alternatively: Use `balena etcher` or `rufus` or any other usb writing tool.
