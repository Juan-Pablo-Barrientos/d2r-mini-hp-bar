# Mini HP Bar (thin bars)

A [D2RMM](https://github.com/olegbl/d2rmm) mod for Diablo II: Resurrected that shows two thin bars next to your character: red for life, blue for mana. They are always on, in both the mouse and controller HUDs.

This is a personal edit of [Mini HP Bar by 박단테](https://www.nexusmods.com/diablo2resurrected/mods/759). The original draws arc-shaped bars over your character's head.

## Changes from the original

- **Thin vertical bars instead of arcs.** The game reads clicks on the whole box around each bar, so the original's arcs blocked a square around your character's head. The thin bars block only two narrow strips.
- **Always on.** No button to turn the bars on and off.
- **No arrow count by the bars.** Your arrow and bolt count still shows on the skill button.
- **Game text left alone.** The original replaces the game's text file (`ui.json`) with an old copy, which makes newer text, like the shared stash tabs, show as "Missing string". This edit doesn't ship that file.

The bars fill from the bottom up because that is the only way the game's life and mana bars can fill, so they can't be turned horizontal.

> **Status:** the thin bars haven't been tested in-game yet. Their position and fill may need adjusting.

## Install

1. Download this repo (**Code → Download ZIP**) and unzip it into D2RMM's `mods` folder.
2. In D2RMM, turn on **Mini HP Bar (personal edit)**. Turn off the original Mini HP Bar and anything else that changes `hudpanelhd.json`.
3. Click **Install Mods**.

## Credits

The original mod is by 박단테 ([Nexus Mods page](https://www.nexusmods.com/diablo2resurrected/mods/759)). This repo includes files from it, some unchanged (the controller HUD images and the on/off button images) and some edited (the HUD layouts). The bar images are new. Diablo II: Resurrected is © Blizzard Entertainment.
