# FaLL OS

A browser-based WebOS interface built with vanilla HTML, CSS, and JavaScript — created for the StarDance event.

## About

FaLL OS simulates a lightweight desktop environment in the browser: draggable windows, a taskbar/sidebar with a live clock, and clickable desktop app icons that open their own windows.

> "No matter how ridiculous the odds may seem, within us resides the power to overcome those challenges and achieve something beautiful and one day, we'll look back at where we started and be amazed by how far we've come." — Technoblade

## Features

- **Draggable windows** — click and drag by the header to move any window around the screen
- **Desktop icons** — click to select, click again to open the associated window
- **Sidebar/taskbar** — live clock, OS branding, quick access to the welcome window
- **Modular content loading** — window content can be split into separate files and injected at runtime, keeping the main HTML file lean
- **Resonant — built-in music player** 
- **Notes — note taker app**
- **Canvas - wallpaper selecter**

## Resonant (Music Player)

A fully functional in-OS music player app.

- **Data-driven song list** — all tracks live in a single JS array (`songs`), each entry holding a title, author, cover path, and audio path. Adding a new song is a one-line change; the song list, player, and navigation update automatically.
- **Song selection panel** — toggled open/closed from the top bar, lists every track with cover thumbnail, title, and author.
- **Event delegation** — a single click listener on the song list handles selection for any number of songs via `closest()` and `data-index`, instead of wiring a listener per item.
- **Now Playing view** — displays the active track's cover art, title, and author, centered above the playback controls.
- **Playback controls** — play/pause (with icon state syncing to actual audio state), skip to next, return to previous, and automatic advance to the next track when one ends. Track index wraps around at both ends of the list.
- **Dominant color extraction** — on each track change, the album cover is drawn onto an off-screen `<canvas>`, its pixel data is averaged (RGB channels sampled every 4 values to skip the alpha channel), and the resulting color is applied as a translucent background tint behind the player and a solid accent on the play button.

## Project structure

```
.
├── index.html              # Main page structure (windows, sidebar, icons)
├── style.css                # All styling (sidebar, windows, icons, background, Resonant UI)
├── script.js                 # Window dragging, open/close logic, icon selection, Resonant logic
├── music.html               # Resonant app content (fetched and injected at runtime)
├── barca_content.html  # Barca window content (fetched and injected at runtime)
├── icons/                       # UI icons (buttons, app icons)
├── backgrounds/          # Background images/GIFs
└── resonant/
    ├── covers/             # Album cover art
    └── audios/             # Audio files
```

## Running locally

Because some features (like fetching external content files) require HTTP rather than `file://`, run this through a local server rather than opening `index.html` directly:

```bash
python -m http.server
```

Then visit `http://localhost:8000` in your browser.

Alternatively, use the **Live Server** extension in VS Code.

## Live demo

Deployed via GitHub Pages: *(add your live link here once deployed)*

## Adding a new app

Each new desktop app currently requires four touch points:

1. A desktop icon `<div>` with a `data-app="window-yourapp"` attribute
2. A matching `<div class="window" id="window-yourapp">` with its own header and close button
3. A `dragElement(document.getElementById("window-yourapp"))` call in `script.js`
4. A click listener wiring the icon to `handleIconTap`

## Adding a new song to Resonant

Add one entry to the `songs` array in `script.js`:

```javascript
{ title: "Song Title", author: "Artist Name", cover: "./resonant/covers/song.jpg", audio: "./resonant/audios/song.mp3" }
```

Paths must point to real files under `resonant/covers/` and `resonant/audios/` — a missing or misspelled path fails silently (broken cover, no sound), so verify in the Network tab after adding.

## Status

Work in progress

## Credits

Built by @xReFaLL for the StarDance event. Twitter: @ReFaLLTamaKi
