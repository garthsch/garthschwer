---
status: 🪴 sapling
tags:
  - foundry-vtt
  - ttrpg/tools
  - world-building
  - digital-dm
---

# Foundry VTT: Initial Setup and Scene Creation

Foundry Virtual Tabletop (VTT) offers a self-hosted environment for running tabletop roleplaying games. Unlike subscription-based cloud platforms, Foundry requires the Game Master (GM) to host the world, offering granular control over modules, assets, and system rules. The following workflow outlines the initialization of a standard D&D 5e campaign.

## System and World Initialization
Before content creation begins, the fundamental architecture of the game must be established.

1.  **Game System Installation:** The core ruleset (e.g., D&D 5th Edition) must be installed via the "Install System" menu before a world can be created.
2.  **World Creation:**
    * **Data Path:** Defines where assets are stored locally.
    * **Game System:** Must be selected upon creation (e.g., dnd5e).
    * **Scheduling:** Built-in tools allow the GM to display the next session time on the login screen.
3.  **Security:** By default, the "Gamemaster" user has no password. Setting an administrative password immediately is critical to prevent player access to GM tools.

## The Foundry Interface Structure
The sidebar provides access to the core pillars of campaign management:
* **Scenes:** The visual maps and battle grids.
* **Actors:** Character sheets for PCs, NPCs, and monsters.
* **Journals:** Text-based lore, descriptions, and handouts.
* **Compendiums:** Read-only libraries of rules, items, and bestiaries (e.g., the D&D SRD).
* **Lighting & Canvas Controls:** Tools for dynamic lighting, walls, and ambient weather.

## Scene Configuration Workflow
Creating a functional map (Scene) requires balancing visual fidelity with mechanical utility.

### 1. Visual Setup
* **Assets:** Organize files into a structured hierarchy (e.g., `World Name > Maps`) before uploading to avoid asset clutter.
* **Grid Configuration:**
    * **Battle Maps:** Use a square or hex grid to measure movement.
    * **Region/World Maps:** Set "Gridless" to remove overlays, allowing the artwork to serve as a pure reference document.
* **Padding:** Adjusting the "Padding Percentage" adds invisible space around the map image, allowing the GM to stage monsters or tokens off-screen before introducing them.

### 2. Lighting and Vision
Foundry’s lighting engine dictates what players see based on their token’s line of sight.
* **Token Vision:** If enabled, the map is black until a token with sight explores it.
* **Global Illumination:** For landing pages or world maps (like *Stormwreck Isle*), enabling this bypasses token vision, ensuring the entire image is visible regardless of character placement.
* **Fog of War:** Can be manually reset or painted to reveal specific areas as players explore.

### 3. Ambience
* **FX Layers:** Native particle effects (rain, clouds, autumn leaves) can be overlaid on the canvas to add dynamic motion to static images.
* **Audio Triggers:** Ambient playlists can be bound to the scene to auto-play upon loading.

## Interactive Map Notes (Journals)
Static maps can be converted into interactive navigation hubs using **Map Pins**.
* **Linking:** Dragging a Journal Entry onto the canvas creates a clickable pin.
* **Visibility:** Pins can be toggled to be visible to "All Players" or restricted to the GM.
* **Navigation:** Double-clicking a pin opens the associated text entry or sub-map, allowing for a "drill-down" information architecture (e.g., clicking a town pin opens the town map).

## I wonder...
* How can I integrate my [[Obsidian Vault]] directly into Foundry Journals using community plugins like *Obsidian.md Integration*?
* Is it more efficient to host assets on an AWS S3 bucket rather than local storage for improved player load times?
* Could [[Macros]] be used to automate the transition between Day and Night lighting settings on a scene?

## References
* [Foundry VTT - Getting Started](https://youtu.be/3TgoMVPB7Uc?list=PLKhfwazFT8uLP7jJ70C65NpEVRl1aAHOv) - Tutorial by The Clay Golem.
* [Foundry VTT Knowledge Base](https://foundryvtt.com/kb/) - Official Documentation.