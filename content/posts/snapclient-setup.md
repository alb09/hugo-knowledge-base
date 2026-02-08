---
title: 'Snapscast Client Synchronous Audio Receiver'
date: 2026-02-09T00:20:34+01:00
tags:
category:
topic:
draft: false
---

<!--more-->

Snapserver is a nice way to sync media playback across a place. Homeassistant Integration possible. 

Check it out: [GitHub - snapcast/snapcast: Synchronous multiroom audio player](https://github.com/snapcast/snapcast)

Install:
```bash
sudo apt install snapcast-client
```


Add this config:
```
vim /etc/default/snapclient 
```

`SNAPCLIENT_OPTS="--host <ip> --port 1704 --player alsa --device hw:0,0 --latency 200"`

But keep in mind to configure your own hw-output device.

Enable now:
```
sudo systemctl enable --now snapclient
sudo systemctl status snapclient
```

Turn on sound:
```
alsamixer
```
 
- Press `m` to unmute sound.
- `ArrowUp` to max volume.
- `Esc` to exit and save


---

Extra:

I am running snapcast-client in a Proxmox LXC Container, so I needed to passthrough the AUX Output Hardware Device. I did this with this config (might not work for you!!)

```
lxc.cgroup2.devices.allow: c 116:* rwm
lxc.cgroup2.devices.allow: c 226:* rwm
lxc.mount.entry: /dev/snd dev/snd none bind,optional,create=dir
lxc.mount.entry: /dev/dri dev/dri none bind,optional,create=dir
lxc.mount.entry: /dev/seq dev/seq none bind,optional,create=file
lxc.mount.entry: /dev/timer dev/timer none bind,optional,create=file
```


Full config: `cat /etc/pve/lxc/102.conf `

```
arch: amd64
cores: 1
hostname: snapcast
memory: 512
net0: name=eth0,bridge=vmbr0,firewall=1,gw=192.168.0.1,hwaddr=BC:24:11:C0:DA:A1,ip=192.168.0.102/24,type=veth
onboot: 1
ostype: debian
rootfs: local-lvm:vm-102-disk-0,size=4G
swap: 1024
lxc.cgroup2.devices.allow: c 116:* rwm
lxc.cgroup2.devices.allow: c 226:* rwm
lxc.mount.entry: /dev/snd dev/snd none bind,optional,create=dir
lxc.mount.entry: /dev/dri dev/dri none bind,optional,create=dir
lxc.mount.entry: /dev/seq dev/seq none bind,optional,create=file
lxc.mount.entry: /dev/timer dev/timer none bind,optional,create=file
```


