---
title: 'Fixing Audio for Arch Laptop'
date: 2026-01-19T13:07:00+01:00
tags:
category:
topic:
draft: false
---

<!--more-->


## Problem Overview
ASUS Zenbook laptops with Ryzen APUs and Realtek ALC294 audio codec suffer from **no analog speaker output** on Arch Linux with PipeWire. Hardware detects fine (`aplay -l` shows Card 1 Device 0: ALC294 Analog), `speaker-test -D plughw:1,0` requires manual codec unmuting, but PipeWire/WirePlumber **never creates ALC294 playback sinks**—only HDMI and microphone appear in `wpctl status`. HiFi profiles fail due to broken port detection; **Pro Audio profile works reliably**.
## Root Causes
**1. ALC294 Codec Mute State**: Realtek laptop codecs default to hardware-muted speakers post-boot. Windows firmware handles unmuting; Linux needs `hda-verb` on pins 0x20/0x21/0x1b.

**2. Ryzen HD Audio Controller**: AMD ACP (Audio Co-Processor) confuses WirePlumber—device appears as both capture (mic works) and potential playback, but analog profile never activates.

**3. WirePlumber Port Detection**: HiFi profiles expect jack sensing/speaker switching that ALC294 doesn't implement properly, causing sink creation to fail silently.

**4. ASUS Firmware Quirks**: Fast Boot (UEFI + Windows) leaves codec in inconsistent state; Linux needs explicit pin control.


---


## Complete Working Solution
1. Install tools
```bash
sudo pacman -S alsa-utils alsa-tools alsa-firmware sof-firmware pavucontrol
```

2. Unmute codec (critical for ALC294)
```bash
alsamixer -c 1
```

Enable it so it shows `OO` instead of `MM`, with pressing m. (Muting and unmuting).


```bash
sudo hda-verb /dev/snd/hwC1D0 0x20 SET_PIN_WIDGET_CONTROL 0x40
sudo hda-verb /dev/snd/hwC1D0 0x21 SET_PIN_WIDGET_CONTROL 0x40
sudo hda-verb /dev/snd/hwC1D0 0x1b SET_PIN_WIDGET_CONTROL 0x40
```

3. Test ALSA directly
```bash
speaker-test -c 2 -D plughw:1,0 -t sine -f 1000  # Hears tone
```

4. Persist hda-verb via udev
```bash
echo 'ACTION=="change", SUBSYSTEM=="sound", KERNEL=="card1", RUN+="/usr/bin/hda-verb /dev/snd/hwC1D0 0x20 SET_PIN_WIDGET_CONTROL 0x40"' | sudo tee /etc/udev/rules.d/90-alc294.rules
sudo udevadm control --reload-rules && sudo udevadm trigger
```

5. Set Pro Audio profile (key step)
pavucontrol → Configuration → "Ryzen HD Audio Controller" → Pro Audio

6. Restart PipeWire 
```bash
systemctl --user restart pipewire pipewire-pulse wireplumber
```

7. Verify
```bash
wpctl status  # ALC294 sink appears
pw-play /usr/share/sounds/alsa/Front_Left.wav  # Speakers work
```


---


### Overview
ALSA (hw:1,0) → [hda-verb unmute] → speaker-test WORKS
                           ↓
PipeWire → [Pro Audio profile bypasses port detection] → ALC294 sink created → Apps play through speakers

**Pro Audio** uses raw ALSA `hw:1,0` access with manual FL/FR channel mapping—no reliance on ALC294's broken jack sensing or port routing that breaks HiFi profiles. Full 24-bit/48kHz quality preserved.
### Permanent Configuration
**`/etc/udev/rules.d/90-alc294.rules`** ensures codec unmuting on every boot. **Pro Audio profile** in pavucontrol persists via PipeWire session state. Reboot-safe.

- **Identical hardware** across UX3405/UX363/S13 models (Ryzen + ALC294)
- **Same failure pattern** documented since 2020 across Ubuntu/Fedora/Manjaro
- **Arch bleeding-edge kernels** expose the issue most reliably (newer SOF firmware helps detection but not activation)
- **Solution identical** across distros: hda-verb + Pro Audio profile


