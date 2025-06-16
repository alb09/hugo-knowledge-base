---
title: 'Running Windows apps on Linux with Wine'
date: 2025-06-16T00:34:06+02:00
tags:
category:
topic:
draft: false
---

<!--more-->

Download desired Windows `.exe` or `.msi`.

Installing a Windows Program:

```bash
wine foobar2000.exe
```

Uninstalling a program:

```bash
wine uninstaller
```

Also remove desktop entries:

```bash
rm  /.local/share/applications/wine/Programs/foobar2000.desktop
```



