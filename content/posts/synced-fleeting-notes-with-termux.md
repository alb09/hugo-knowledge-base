---
title: 'Synced Fleeting Notes With Termux'
date: 2026-02-24T10:35:22+01:00
tags:
category:
topic:
draft: false
---

<!--more-->

`Termux` with `Termux:Widget` and `Termux:API` from F-Droid: 
- [Termux \| F-Droid – Freies und quelloffenes Android-App-Repository](https://f-droid.org/de/packages/com.termux/)
- [Termux:Widget \| F-Droid – Freies und quelloffenes Android-App-Repository](https://f-droid.org/de/packages/com.termux.widget/)
- [Termux:API \| F-Droid – Freies und quelloffenes Android-App-Repository](https://f-droid.org/de/packages/com.termux.api/)
- [Termux Wiki](https://wiki.termux.com/wiki/Main_Page)
- [GitHub - termux/termux-widget: Termux add-on app which adds shortcuts to commands on the home screen.](https://github.com/termux/termux-widget?tab=readme-ov-file#script-icon-directory-optional)

Enable all required permissions after installation.

```bash
termux-change-repo # select your region
pkg upgrade
pkg install vim tree termux-api
```

Create directiory for the Widget scripts:
```bash
mkdir -p ~/.shortcuts
```

My file tree:
```bash
ls -sah
```

```
total 48K
3.5K .           3.5K .ssh      3.5K notes
3.5K ..          3.5K .termux   3.5K scripts
4.0K .bashrc     3.5K .vim      3.5K storage
3.5K .shortcuts   12K .viminfo
```

Your phone files are here:
```bash
ls ~/storage/shared
```

This is where we want to store the FleetingNotes folder for sync.
The script below automatically reorganizes your ideas in monthly notes with timestamps.

Notes in termux: `~/notes/fleeting/`
Shared notes in Android: `~/storage/shared/FleetingNotes`

Organisation:
```
2025-11.md
2025-12.md
2026-01.md
2026-02.md
```

Example content of `2026-02.md` with timestamps:
```
2026-02-03 09:12 hello
2026-02-03 11:38 test
2026-02-03 15:58 something important
2026-02-08 12:44 test1
2026-02-15 23:28 this is a nice idea
2026-02-27 21:44 testing termux fleeting notes
```

---

## Create script
Fleeting notes creation with Timestamps:
Create this file in `~/.shortcuts` to make accessable with the `Termux:Widget`
```bash
#!/bin/bash
# ~/.shortcuts/note.sh
# Usage: ./note.sh
# Prompts for a fleeting note, keeps it in ~/notes, and also copies to shared storage

# Termux internal notes directory (private)
NOTES_DIR="$HOME/notes/fleeting"
mkdir -p "$NOTES_DIR"

# Shared storage directory (accessible from Android)
SHARED_DIR="$HOME/storage/shared/FleetingNotes"
mkdir -p "$SHARED_DIR"

# Current month file
MONTH_FILE="$NOTES_DIR/$(date '+%Y-%m').md"
SHARED_MONTH_FILE="$SHARED_DIR/$(date '+%Y-%m').md"

# Create monthly file with header if it doesn't exist
if [ ! -f "$MONTH_FILE" ]; then
    echo "# Fleeting Notes — $(date '+%Y-%m')" > "$MONTH_FILE"
fi
if [ ! -f "$SHARED_MONTH_FILE" ]; then
    echo "# Fleeting Notes — $(date '+%Y-%m')" > "$SHARED_MONTH_FILE"
fi

# Prompt for note
read -p "Enter New Note: " NOTE

# Check if user entered something
if [ -z "$NOTE" ]; then
    echo "No note entered. Exiting."
    exit 1
fi

# Append note with timestamp to both locations
TIMESTAMP="$(date '+%Y-%m-%d %H:%M')"
echo "$TIMESTAMP $NOTE" >> "$MONTH_FILE"
echo "$TIMESTAMP $NOTE" >> "$SHARED_MONTH_FILE"

# Confirmation
echo "Note added to $MONTH_FILE"
echo "Also copied to shared folder: $SHARED_MONTH_FILE"
```

Now add the widget to your homescreen.

---

## Optional:
The `.bashrc` I use with an easy clipboard function and aliases:
```bash
#!/data/data/com.termux/files/usr/bin/bash

alias n="~/.shortcuts/note.sh"
alias ..="cd .."
alias ...="cd ../.."
export TERM=xterm-256color

# Easily copy something over to the Android Keyboard
function clip {
    if [ -p /dev/stdin ]; then
        # Input is coming from a pipe
        termux-clipboard-set
        echo "Copied piped input to clipboard."
    elif [ -f "$1" ]; then
        # Input is a file
        termux-clipboard-set < "$1"
        echo "Copied $1 to clipboard."
    else
        echo "Usage: clip <file> OR pipe content to clip"
    fi
}
```

Don't forget to source the `.bashrc` with
```bash
source .bashrc
```

---

## Syncing
Now let's sync our `FleetingNotes` content with Syncthing. This way we can create fleeting notes from the desktop too, and bundle them together. Just use the same script as above with modified output directiories.

Change this accordingly:
```bash
# Termux internal notes directory (private)
NOTES_DIR="$HOME/backup/notes/fleeting"
mkdir -p "$NOTES_DIR"

# Shared storage directory (accessible from Android)
SHARED_DIR="$HOME/notes/FleetingNotes"
mkdir -p "$SHARED_DIR"
```

You can keep both, so one is a local backup of the notes created on the device. Sync one and avoid conflicts, you have a backup now!

Syncing your phone:
[Syncthing-Fork \| F-Droid – Freies und quelloffenes Android-App-Repository](https://f-droid.org/de/packages/com.github.catfriend1.syncthingfork/)

On the desktop:
```bash
sudo pacman -Ss syncthing
```


