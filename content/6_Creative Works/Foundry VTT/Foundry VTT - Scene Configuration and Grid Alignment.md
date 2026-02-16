---
status: "🪴 sapling"
tags:
  - foundry-vtt
  - dragonbane
  - map-alignment
  - lighting
  - gm-workflow
---

# Foundry VTT: Advanced Scene Configuration & Grid Alignment

Once a Scene is created, the Game Master must ensure the virtual environment aligns perfectly with the visual assets. This process dictates how tokens move, how distance is calculated, and how players interact with the world.

## The Grid Alignment Protocol
Aligning the Foundry VTT grid (red overlay) with a pre-drawn map grid is often the most time-consuming part of setup. A misaligned grid results in tokens "drifting" across room boundaries.

### The Configuration Tool
Access the grid configuration via the **Scene Configuration** menu > **Grid** tab > **Ruler Icon**. This overlay allows for real-time adjustment without manual number guessing.

1.  **Background Scaling (Shift + Scroll):**
    * The primary variable is the *Background Image Scale*, not the grid pixel size (which should usually remain at 100px or 50px).
    * Holding `Shift` while using the mouse wheel (or Up/Down arrows) scales the map image itself.
    * **Goal:** Resize the map image until the map's painted squares match the size of the red VTT overlay squares.

2.  **Offset Adjustment (Arrow Keys):**
    * Once the *size* matches, use the arrow keys (without Shift) to slide the red grid left/right/up/down until it sits perfectly on top of the map's lines.

## Environmental Logic: The Cave Setting
For subterranean environments (like the *Seagrow Caves* or a Dragonbane barrow), lighting settings fundamentally alter gameplay.

* **Global Illumination:** Must be set to **OFF**. This forces the map to be pitch black.
* **Token Vision:** Set to **ON**.
* **Mechanical Impact:** In Dragonbane, this configuration forces players to manage light sources (Torches, Lanterns). If a torch goes out, the VTT effectively blinds the token, enforcing the "Darkness" condition automatically.

## Information Architecture: Journal Management
As campaign data grows, keeping the "Journal" tab organized prevents GM burnout during play.

### 1. Folder Hierarchy
Avoid a flat list of entries. Create folders for each distinct Scene (e.g., "Misty Vale," "Outskirt Barrows"). Dragging entries into folders keeps the root directory clean.

### 2. Map Notes vs. Drawings
There are two ways to annotate a map for the GM's eyes only:
* **Journal Pins:** Dragging a Journal Entry onto the map creates a clickable icon. Best for dense information (room descriptions, monster stats, loot lists).
* **Drawing Tools:** Using the text tool directly on the canvas (e.g., writing "Hidden Trap" or "Slippery Slope" on the floor).
    * **Visibility:** Right-click the drawing and toggle the "Visible" state (Eye icon) to hide it from players. This is superior for quick, spatial reminders that don't require opening a separate window.

## I wonder...
* Is there a module that automatically aligns grids using AI or edge detection to save setup time?
* How does the "Fog of War" reset persistence work if I move players between scenes and back again?
* Can I set specific drawing tool notes to reveal themselves when a player's **Passive Perception** (or *Spot Hidden*) is high enough?

## References
* [Foundry VTT - Session 2 - Seagrow Cave](https://youtu.be/ZOkFetysg5E?list=PLKhfwazFT8uLP7jJ70C65NpEVRl1aAHOv) - Tutorial by The Clay Golem.
* [Foundry VTT Grid Configuration](https://foundryvtt.com/article/grid-configuration/) - Official Documentation on the alignment tool.