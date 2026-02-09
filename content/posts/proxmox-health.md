---
title: 'Proxmox Health'
date: 2026-02-09T14:49:54+01:00
tags:
category:
topic:
draft: false
---

Just some useful commands for Proxmox Virtual Environment.

<!--more-->



Watch system processes:
```bash
htop
top
```

Show disk usage
```bash
pvesm status
```

Show root filesystem
```bash
df -Th /
```

Check RAM:
```bash
watch -n 2 free -h
```

Check Swap:
```bash
cat /proc/swaps
```

Flushes swap usage and clears old RAM pages  (without reboot)
```bash
swapoff -a
swapon -a
```


Container config:
```bash
vi /etc/pve/lxc/<id>.conf
pct config <id> | grep <search for config>
```

Check for oom issues: e.g. killing a process because of low RAM
```bash
dmesg | grep -i oom
```

Set correct access privilges for the storage (so containers can access it)
```bash
chown -R 101000:101000 <some-file>
```

