# PC Obsidian Git Setup

> Third-device sync: adding the Windows PC to the Obsidian → Working Copy → GitHub → Quartz pipeline.

## Current State (Feb 2026)

- ✅ iPhone: Working Copy + Obsidian + Shortcuts pipeline working
- ✅ GitHub Actions: Auto-deploys to garthschwer.com on push to `v4`
- ❌ Windows PC: obsidian-git plugin NOT yet configured

## Setup Steps

### 1. Install obsidian-git plugin

In Obsidian on Windows:
1. Settings → Community Plugins → Browse
2. Search "obsidian-git"
3. Install and Enable

### 2. Point Obsidian vault at the repo

Make sure Obsidian's vault root is set to the `content/` subfolder, NOT the repo root. This prevents Quartz config files (`.github/`, `quartz.config.ts`, etc.) from cluttering the sidebar.

- If the vault is currently at the repo root, create a new vault at `pkm-migration/content/`
- obsidian-git will still track the parent repo — the plugin looks upward for `.git/`

**Verify:** In Files & Links settings → "Default location for new notes" should be `content` (relative) or verify notes save into `content/`, not the repo root.

### 3. Configure obsidian-git settings

In Obsidian → Settings → obsidian-git:

| Setting | Value | Reason |
|---------|-------|--------|
| Auto pull on startup | ✅ On | Pulls latest from iPhone before editing |
| Auto push after commit | ✅ On | Triggers GitHub Actions deploy |
| Auto commit & push interval | 10–30 min | Balances sync frequency vs. noise |
| Commit message | `chore: PC vault sync {{date:YYYY-MM-DD HH:mm}}` | More useful than default |
| Disable push | ❌ Off | PC should push |

### 4. Authenticate with GitHub

obsidian-git uses the credential store. On Windows, Git Credential Manager handles this automatically if you have Git for Windows installed.

If not already authenticated:
```
git config --global credential.helper manager-core
git push  # triggers auth dialog — sign in once
```

For the repo: `github.com/garthsch/garthschwer.git`

### 5. Test the pipeline

1. Create a test note in Obsidian on Windows
2. obsidian-git should auto-commit + push within the interval
3. Check GitHub Actions: `gh run list --repo garthsch/garthschwer --limit 3`
4. Verify it appears on garthschwer.com within ~2min

### 6. Sidebar noise fix

If Quartz config files show up in the Obsidian sidebar:
- Vault root should be `content/`, not the repo root
- Alternatively: Settings → Files & Links → "Excluded files" → add patterns: `.github`, `quartz.config.ts`, `quartz.layout.ts`, `package.json`, `node_modules`

## Merge Conflict Strategy

iPhone commits with "Vault autocommit on iPhone" message. PC commits with timestamped message. If both edited the same note before syncing:

1. obsidian-git will pause on conflict and notify you
2. Resolve in VS Code (better merge UI than Obsidian)
3. Commit the resolution manually: `git add . && git commit -m "fix: merge conflict resolution"`

To minimise conflicts: pull before editing on whichever device you're switching to. The auto-pull on startup setting handles this automatically on the PC.

## References

- obsidian-git plugin: https://github.com/denolehov/obsidian-git
- Related: `the-workshop/obsidian-workingcopy-shortcuts-20260222-seedling.md` (iPhone setup)
- Repo: `github.com/garthsch/garthschwer` (branch: `v4`)
