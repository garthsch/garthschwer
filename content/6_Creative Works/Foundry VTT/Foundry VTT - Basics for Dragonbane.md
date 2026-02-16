---
status: "🪴 sapling"
tags:
  - foundry-vtt
  - dragonbane
  - free-league
  - ttrpg/tools
  - digital-dm
---

# Foundry VTT: Dragonbane Campaign Initialization

Foundry Virtual Tabletop (VTT) is particularly well-suited for *Dragonbane* due to its robust support for the system's unique mechanics, such as card-based initiative and roll pushing. Unlike generic platforms, Foundry allows for deep automation of Free League's specific ruleset, provided the foundation is laid correctly.

## System and World Initialization
The first step in any Foundry campaign is defining the architecture of the server.

1.  **Game System Installation:**
    * Navigate to the "Game Systems" tab in the main Foundry setup menu.
    * Install **Dragonbane / Drakar och Demoner** (Official System by Free League).
    * *Note:* The free system includes the character sheet and basic mechanics (rolling, pushing, initiative). It does *not* include the full text of the rulebook or the art assets unless you purchase the premium "Dragonbane Core Rules" module.

2.  **World Creation:**
    * **Game System:** Select `dragonbane` from the dropdown.
    * **Data Path:** Ensure your user data is stored on a drive with sufficient space, as Dragonbane assets (maps and tokens) can be high-fidelity.

## The Dragonbane Interface Structure
While the layout is similar to other systems, Dragonbane utilizes specific tabs differently:

* **Combat Tracker (Initiative):** Unlike D20 systems that use dice, this tab manages the **Initiative Deck** (1-10 cards). The system automatically deals cards to combatants at the start of a round and handles reshuffling.
* **Actors:**
    * **Player Characters:** Full automation for Attributes, Skills, and "Pushing" rolls (which automatically marks Conditions).
    * **Monsters:** Simplified sheets that often feature clickable "Monster Attacks" tables, automating the randomness of creature behavior.
* **Compendiums:** If you own the Core Rules module, this is where you will find drag-and-drop Spells, Heroic Abilities, and Kin.

## Scene Configuration
Dragonbane focuses heavily on exploration and lighting.

### 1. Grid and Scale
Dragonbane typically uses a 2-meter grid.
* **Grid Type:** Square.
* **Grid Scale:** Set to `2 meters` (standard Dragonbane movement unit).
* **Gridless Option:** For "Theater of the Mind" scenes (common in travel montages), set the grid Opacity to 0 but keep the scale for measuring range if needed.

### 2. Lighting and Atmosphere
Darkness is a mechanic in Dragonbane (torches have limited duration/radius).
* **Global Illumination:** Turn **OFF** for dungeons/caves to force players to use light sources.
* **Token Lights:** PCs carrying torches should have their token light emission set to `Dim: 10` and `Bright: 0` (or appropriate meters per item rules).
* **Fog of War:** Crucial for maintaining the mystery of exploration.

## Interactive Journals (Lore Management)
Dragonbane is lore-rich. Organizing information effectively is key.
* **Map Pins:** Drag Journal Entries (e.g., "Room 3: The Crypt") onto the Scene canvas to create clickable pins. This keeps your room descriptions visually tied to the map location.
* **Handouts:** Use the "Show to Players" function on specific image journals to display riddles or clues found during the adventure.

## I wonder...
* How can I automate the **"Banes and Boons"** mechanic using Foundry macros for situational modifiers?
* Is there a way to sync my **Obsidian** session notes directly into Foundry Journals to avoid double-entry?
* Can I configure the "Token Action HUD" module to give players one-click access to their Heroic Abilities without opening their character sheets?

## References
* [Dragonbane Official Foundry System](https://foundryvtt.com/packages/dragonbane) - The core system package.
* [Free League Workshop](https://freeleaguepublishing.com/en/games/dragonbane/) - Official publisher resources.
* [Foundry VTT Knowledge Base](https://foundryvtt.com/kb/) - General platform documentation.