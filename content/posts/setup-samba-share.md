---
title: 'Setup Samba Share'
date: 2026-02-08T23:56:21+01:00
tags:
category:
topic:
draft: false
---

<!--more-->


## Setup Samba Share:

```bash
apt update && apt install samba -y
vi /etc/samba/smb.conf
```

Add this at the end of the config:
```
[media]
path = /var/lib/vz/storage1
browseable = yes
writable = yes
guest ok = no
read only = no
create mask = 0775
directory mask = 0775
valid users = root
```

Setup a secure password
```bash
smbpasswd -a root
```

Add Samba Share Storage to your PC as a network attached storage (local):
```bash
gio mount smb://root@<proxmox-ip>/storage1
```


