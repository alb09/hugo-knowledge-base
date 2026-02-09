---
title: 'Fix Exceeding Swapping on a Small Proxmox Server'
date: 2026-02-09T13:40:59+01:00
tags:
category:
topic:
draft: false
---


I have a small server at home with little specs but great ideas. Now that I am using more containers and assigned more RAM to them than I got, Swapping got to a level of 42.2%. And that's not good. So I fixed it.

<!--more-->


Paperless-ngx did not fully work, so I checked for memory issues on the Proxmox host.

### OOM Memory Issues

```bash
dmesg | grep -i oom
```

My output
```
[292157.680595] systemd-network invoked oom-killer: gfp_mask=0x100cca(GFP_HIGHUSER_MOVABLE), order=0, oom_score_adj=0
[292157.680623]  oom_kill_process+0x110/0x240
[292157.680803] [  pid  ]   uid  tgid total_vm      rss rss_anon rss_file rss_shmem pgtables_bytes swapents oom_score_adj name
[292157.680911] oom-kill:constraint=CONSTRAINT_MEMCG,nodemask=(null),cpuset=ns,mems_allowed=0,oom_memcg=/lxc/107,task_memcg=/lxc/107/ns/system.slice/paperless-task-queue.service,task=convert,pid=1562888,uid=100000
[292157.680925] Memory cgroup out of memory: Killed process 1562888 (convert) total-vm:2070820kB, anon-rss:863744kB, file-rss:0kB, shmem-rss:939264kB, UID:100000 pgtables:3640kB oom_score_adj:0
```

Memory ran out, so Proxmox killed a process I wanted to run.


Check RAM Situation:
```bash
free -h
```

My output
```
               total        used        free      shared  buff/cache   available
Mem:           7.6Gi       5.0Gi       1.9Gi       123Mi       1.1Gi       2.6Gi
Swap:          7.6Gi       3.2Gi       4.4Gi
```

This shows that I am really limited in RAM.
ProxMenux is a Proxmox Dashboard that checks for System Health. It showed an critical info: Swap >20% of RAM (42.4%). For short periods of time it is ok if swap is at 20 - 30%.
**RAM pressure already happened** and Linux pushed memory pages to disk.

---

Now let's check what filesystem we're on: **ZFS** is common but has high memory usage and slow performance at >80%, in comparison to **ext4**.

Check if using ZFS
```bash
zpool status
```

My output
```
no pools available
```

or

```bash
df -Th /
```

My output
```
Filesystem           Type  Size  Used Avail Use% Mounted on
/dev/mapper/pve-root ext4   68G   54G   11G  83% /
```

I am using `ext4`. 

---

### ZRAM Swap: reduces real swap usage by ~50–70%

Check Swaps:
```bash
cat /proc/swaps
```

```
root@proxmox:~# cat /proc/swaps 
Filename                                Type            Size            Used            Priority
/dev/dm-0                               partition       8011772         0               100
```

Install zram:
```bash
apt update && apt install zram-tools
```

Configure:
```bash
vi /etc/default/zramswap
```

Add this
```
ALGO=zstd
PERCENTAGE=50
PRIORITY=100
```

Enable
```bash
systemctl enable --now zramswap
systemctl status zramswap
```

```
zramswap.service - Linux zramswap setup
     Loaded: loaded (/lib/systemd/system/zramswap.service; enabled; preset: enabled)
     Active: active (exited) since Mon 2026-02-09 12:40:33 CET; 1h 37min ago
```

List swaps:
```bash
cat /proc/swaps
```

```
root@proxmox:~# cat /proc/swaps 
Filename                                Type            Size            Used            Priority
/dev/dm-0                               partition       8011772         0               -2
/dev/zram0                              partition       4006404         0               100       
```

---

Change the swappiness to force Linux to prefer RAM (less aggressive swapping):
```bash
sysctl vm.swappiness=10 # temporarily
echo "vm.swappiness=10" >> /etc/sysctl.conf # permanent
```

---

We are ready to check if the tweaks worked.

Flushes swap usage and clears old RAM pages  (without reboot)
```bash
swapoff -a
swapon -a
```


Now check again:
```bash
htop
# or
watch -n 2 free -h
```

```
               total        used        free      shared  buff/cache   available
Mem:           7.6Gi       7.5Gi       147Mi       210Mi       510Mi       165Mi
Swap:          7.6Gi       621Mi       7.0Gi
```


- 3.2Gi changed to 621Mi.
- ProxMenux shows OK. (RAM usage a bit high)

Paperless-ngx config:

Configure in `/opt/paperless/paperless.conf`

Add
```conf
PAPERLESS_TASK_WORKERS=1
PAPERLESS_THREADS_PER_WORKER=1
```

Paperless-ngx now works without problems.

