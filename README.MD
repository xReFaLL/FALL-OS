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

## Project structure

```
.
├── index.html          # Main page structure (windows, sidebar, icons)
├── style.css           # All styling (sidebar, windows, icons, background)
├── script.js           # Window dragging, open/close logic, icon selection
└── assets/             # Images, GIFs, icons used across the OS
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

## Status

Work in progress — built incrementally, prioritizing a working V1 over a fully polished release.

## Credits

Built by @xReFaLL for the StarDance event. Twitter:@ReFaLLTamaKi

