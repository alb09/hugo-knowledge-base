---
title: 'Proxmox Health'
date: 2026-02-09T14:49:54+01:00
tags: proxmox
category: linux
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

Show disk usage:
```bash
pvesm status
```

Show root filesystem:
```bash
df -Th /
```

Check RAM:
```bash
watch -n 2 free -h
```

Enable memory overcommit:
```bash
echo "vm.overcommit_memory=1" >> /etc/sysctl.conf
```

Check Swap:
```bash
cat /proc/swaps
```

Change swappiness:
```bash
echo "vm.swappiness=10" >> /etc/sysctl.conf
```

Check swappiness:
```bash
sysctl -p
```

Flushes swap usage and clears old RAM pages  (without reboot)
```bash
swapoff -a
swapon -a
```

Shows zram compression:
```bash
zramctl
```

Restart zram:
```bash
systemctl restart zramswap
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

