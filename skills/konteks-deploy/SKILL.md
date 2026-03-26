# Konteks Deploy

**Description:** Handle git operations and Cloudflare Pages deployment for the Konteks Kourse sales funnel. Knows both remotes, deployment triggers, and verification steps.

**When to use this skill:**
- Committing and pushing changes to production
- Verifying deployment status on Cloudflare Pages
- Troubleshooting deployment failures
- Syncing both git remotes

---

## Git Remotes

The remote names may differ per machine. ALWAYS verify first:

```bash
git remote -v
```

**Expected configurations:**

On Shel's Silverbook (primary):
- `origin` -> `sheldonevansx/konteks-sales` (triggers deploy)
- `gamblegrift` -> `Gamblegrift/konteks-sales` (mirror)

On Jinx's Mac:
- `shel` -> `sheldonevansx/konteks-sales` (triggers deploy)
- `origin` -> `Gamblegrift/konteks-sales` (mirror)

**The push to sheldonevansx is what triggers the Cloudflare Pages deploy.** If changes only go to Gamblegrift, the live site will NOT update.

## Deployment Pipeline

Cloudflare Pages auto-deploys from `sheldonevansx/konteks-sales` main branch.
- Build command: (blank - static site, no build)
- Build output: `/` (root)
- Live URL: `https://kourse.konteks.co`
- Pages URL: `konteks-sales.pages.dev`

## Deploy Procedure

### Step 1: Pre-deploy checks

Run the funnel audit skill first (if available), or at minimum:

```bash
# Check for secrets
grep -rn "sk_live\|sk_test\|api_key\|password\|secret" *.html *.js

# Check forbidden words
grep -rni "crucial\|delve\|landscape\|pivotal\|showcase\|tapestry\|vibrant\|comprehensive\|cutting-edge\|game-changing\|unlock\|unleash\|empower\|supercharge\|leverage\|utilize" *.html

# Check em-dashes
grep -Pn '\xe2\x80\x94' *.html

# Check pixel ID is correct
grep -rn "26300556566305220" *.html | wc -l
grep -rn "962791462941600" *.html
```

### Step 2: Stage and commit

```bash
# Check what changed
git status
git diff

# Stage specific files (never git add -A)
git add [specific files]

# Commit with descriptive message
git commit -m "description of change"
```

### Step 3: Push to BOTH remotes

```bash
# Verify remote names first
git remote -v

# Push to the sheldonevansx remote (triggers deploy)
git push [sheldonevansx-remote] main

# Push to the Gamblegrift remote (mirror)
git push [gamblegrift-remote] main
```

If Gamblegrift is non-fast-forward (known issue), may need:
```bash
git push [gamblegrift-remote] main --force
```

### Step 4: Verify deployment

1. Wait 30-60 seconds for Cloudflare Pages to build
2. Check the live site: `https://kourse.konteks.co`
3. Verify the specific change is visible
4. Check mobile view (resize browser or use device emulation)

If using Cloudflare MCP tools:
- Check deployment status via Cloudflare Pages API

### Step 5: Post-deploy verification

- Open `https://kourse.konteks.co` and verify changes
- Check `https://kourse.konteks.co/checkout.html` if Stripe links changed
- Check `https://kourse.konteks.co/thank-you.html` if pixel changed
- Test on mobile viewport

## Known Issues

- `.git/index.lock` can get stuck in sandboxed environments. Remove with `rm -f .git/index.lock` (may need permissions)
- Gamblegrift remote may be behind and need force push
- Pre-commit hook checks for secrets - if commit fails, check the hook output
- konteks.co root domain is Squarespace (DNS on Cloudflare). NEVER touch the Squarespace site or root DNS records. Only kourse.konteks.co is ours.

## Emergency Rollback

If a bad deploy goes live:

```bash
# Find the last good commit
git log --oneline -10

# Revert to last good commit
git revert HEAD

# Push the revert
git push [sheldonevansx-remote] main
```

Do NOT use `git reset --hard` unless absolutely necessary. Prefer `git revert` for traceability.

## Files That Should Never Be Committed

- `.env` files
- API keys or tokens
- `.DS_Store` (should be in .gitignore)
- Any file containing Stripe secret keys (sk_live_*, sk_test_*)
- Any file containing ActiveCampaign API keys
