---
title: "Getting Obsidian, Working Copy, and Shortcuts to Play Nice"
type: process
status: "🌱 seedling"
tags: [pkm, obsidian, ios, git, automation, workflow]
relationships:
  fueled_by: []
  evolved_from: []
  inspired: []
  blocked_by: []
last_updated: 2026-02-22
---

#### The Setup

I'm migrating my PKM from Obsidian Publish + Obsidian Sync (two paid subscriptions) to a self-hosted Quartz 4 digital garden on GitHub Pages. The desktop side was working — vault on Windows, building with Quartz, deploying via GitHub Actions. The missing piece was iPhone. I needed to write and capture notes on mobile and have them sync seamlessly to the same repo, without paying for Obsidian Sync.

The plan: use Working Copy (git client for iOS) to clone the repo, Apple Shortcuts to automate pull-on-open and push-on-close, and Obsidian mobile pointed at the Working Copy folder. Three apps. One vault. One source of truth.

#### The Journey

The first sign of trouble was the Shortcuts error: *"Please pass a folder to the Get Folder Contents action, instead of a regular file."* The Pull Vault shortcut was passing a Working Copy repository object into a "Get Folder Contents" action — but the action expected a filesystem folder, not a repo handle. Wrong action type entirely.

That led to a deeper discovery: Obsidian on iPhone wasn't writing to the Working Copy folder at all. It was writing to its own sandboxed storage (`/On My iPhone/Obsidian/`). Working Copy couldn't see any of it. The Commit button was greyed out because, from Working Copy's perspective, nothing had changed.

The vault link — Working Copy Pro's "Link Repository to Directory" feature — was the missing connector. Without it, the two apps operate in completely separate sandboxes. With it, writes in Obsidian show up as changes in Working Copy's repo. This is the $50 feature. The trial proved it was worth it.

But even after the link was established, notes kept landing at the repo root instead of inside `content/`. The Quartz site reads from `content/` — notes at root would never publish. The Working Copy link was pointing at the repo root, not the subfolder.

The elegant fix wasn't to fight the iOS filesystem restrictions — it was an Obsidian setting: **Files & Links → Default location for new notes → "In the folder specified below" → `content`**. One setting. Notes now route to the right place without touching the Working Copy configuration at all.

There was also a detour into token transfer security. The first instinct was to email the GitHub PAT to get it onto iPhone. That's a bad idea (plaintext, logged by mail servers). The working approach: generate a QR code containing only the token text, scan with iPhone camera. Quick, never leaves your devices.

#### The Insight

The three apps (Obsidian, Working Copy, Shortcuts) each have their own model of what a "file" or "folder" is. Obsidian thinks in vaults. Working Copy thinks in repositories. Shortcuts thinks in filesystem paths. None of them automatically agree.

The Working Copy directory link is the crucial translation layer — it makes the repo *look like* a filesystem folder to Obsidian. Without that translation, you're not connecting apps, you're just running three parallel systems that happen to be on the same phone.

Once the link existed, most of the remaining problems were configuration rather than architecture. The note location was a setting. The timing error (remote not available) was fixed with a 3-second Wait action at the start of the Pull shortcut. The broken token argument was fixed by deleting and re-adding the Working Copy Shortcuts action fresh.

The system that looks complex from the outside is actually three small configuration choices: link the repo, set the default folder, add a Wait.

#### I wonder...

- How does this hold up when there are real merge conflicts — two devices editing the same note before syncing?
- Is there a way to make the Obsidian sidebar less noisy on iPhone? Right now the quartz config files (`quartz.config.ts`, `.github/`, etc.) show up alongside the notes. You learn to ignore them, but it's not clean.
- Working Copy's autocommit message is always "Vault autocommit on iPhone." Is there a way to get more meaningful commit messages from mobile without adding friction?
- The work computer setup (Obsidian + obsidian-git plugin, same repo) hasn't been done yet. How much of this breaks when a third device enters the picture?

#### References

- Tutorial followed: [Sync Your Obsidian Vault on iPhone and iPad](https://meganesulli.com/blog/sync-obsidian-vault-iphone-ipad/)
- Repo: `github.com/garthsch/garthschwer` (branch: `v4`)
- Site: `garthschwer.com` (Quartz 4, GitHub Pages)
