---
title: 'Flash Usb Drive'
date: 2025-06-29T01:47:00+02:00
tags:
category:
topic:
draft: false
---

<!--more-->


Using `ventoy` to flash multiple ISOs from one USB medium:

```bash
yay -S ventoy-bin
sudo /opt/ventoy/VentoyGUI.x86_64
```

Then simply paste all ISOs into the `Ventoy` USB Drive. When you enter the Ventoy USB on startup, a list with all ISOs are presented to choose from.


---

# Full USB flashing

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
