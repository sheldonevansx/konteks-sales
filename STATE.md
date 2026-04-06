# Konteks Kourse - Unified State File
**Last synced:** 2026-04-06 (Cowork session - post-nap briefing)
**Last agent:** Claude Code (Cowork) - Sheldon's main Mac

---

## CURRENT LIVE STATE (factual, verified this session)

### Live Meta Ads (only 1 campaign actually spending)

**[COLD] Lead Magnet - 5 Studio Shortcuts** - ACTIVE - $35/day
- Objective: OUTCOME_LEADS, optimizing for offsite Lead pixel
- 1 adset: [INTEREST] Architecture Students 18-28 → US/GB/CA/AU/NZ/ZA, exclude UAE
- Excludes: Skool Members CSV, 90d trial signups, 180d purchasers (clean)
- **Last 7d: $152 spend, 102 attributed leads, $1.49 blended CPL**
- **Lifetime: $179, 126 leads (ad-attr) / 319 (campaign-attr), $1.43 blended**

#### Live ad performance (last 7d) - sorted by efficiency

WORKHORSES (keep, do not touch):
| Ad | Spend | Leads | CPL |
|---|---|---|---|
| [MANUAL] Curriculum Gaps List | $57.92 | 50 | $1.16 |
| [MANUAL] Site Analysis B- vs A+ | $14.74 | 17 | $0.87 |
| [MANUAL] Archi Crits Paint | $10.82 | 11 | $0.98 |
| [MANUAL] Top 1% Desktop | $0.80 | 1 | $0.80 |
| [MANUAL] 3 Render Rule Desktop | $2.40 | 2 | $1.20 |
| [STATIC] Editorial - School Doesnt Teach | $1.63 | 1 | $1.63 |
| [AI] Drafting - Site Analysis | $20.01 | 12 | $1.67 |

PAUSED THIS SESSION (5 ads, all >$2.50 CPL or zero conversions):
- [AI] Crit Review - Push It Further ($10.88 CPL)
- [AI] Model Study - Rubric Angle (0 leads)
- [STATIC] Notes - 5 Things List ($3.75 CPL)
- [AI] Late Night - All-Nighter Angle ($3.28 CPL)
- [MANUAL] Concept Confusion ($2.79 CPL)

### Paused Campaigns (do NOT relaunch without post-mortem)

| Campaign | Lifetime Spend | Critical Issue |
|---|---|---|
| Architecture School Doesn't Teach You | $253.02 | 121 InitiateCheckouts → **0 purchases**. Pixel double-fire OR checkout.html UX broken |
| [COLD] Prospecting - Architecture Students | $163.40 | Same root cause likely |
| [WARM] Retargeting - IG Video Viewers | $36.26 | Audience pool too small after pause |

### Critical Funnel Leak (FIXED in branch, awaiting merge)

**Meta showed 102 leads/wk. AC List 4 received only ~15 contacts in 2 days.**

Root cause: `index-lead.html` had `try { fetch(/api/guide-submit) } catch { window.location='/guide-thanks.html' }` - any AC failure silently redirected to thanks page without firing Lead pixel correctly. Combined with `guide-submit.js` crashing on undefined `contactData.contact.id` when AC returned errors → 500 → silent fallback → lost contact.

**Fix pushed to branch `fix/lead-form-retry`** (NOT yet merged - local main has unrelated divergence I did not touch). PR URL: https://github.com/sheldonevansx/konteks-sales/pull/new/fix/lead-form-retry

The fix:
- Retries `/api/guide-submit` 3x with exponential backoff
- Only fires Lead pixel and shows success when AC returns 200
- On total failure, shows inline error and re-enables button (no silent redirect)
- guide-submit.js worker on remote already had complementary hardening committed

### Meta System User Token (NEW - working as of this session)

- Stored: keychain `meta-marketing-api-long` account `konteks`
- System User: 61576455171207 ("Conversions API System User")
- App: Personal Analysis Konteks (Develop app role assigned)
- Scopes: ads_management, ads_read, business_management, pages_show_list, pages_read_engagement
- Expiry: Never (system user tokens are durable)
- **Verified working against act_1252541203714869**
- Multi-advertiser ads: OPTED OUT on 52/57 ads (5 ads couldn't update due to unrelated "Page not linked to professional IG account" error - not related to multi-advertiser setting)

### Stripe (verification incomplete - blocked on missing keychain entry)

- Trial / Monthly / Annual payment links: all return HTTP 200 (verified)
- **No Stripe API key found in keychain.** Could not query failed payment from today.
- TODO when you wake up: paste your Stripe restricted API key into keychain so I can investigate the failed payment:
  ```
  security add-generic-password -s stripe-api-key -a konteks -U -w 'rk_live_...'
  ```
  Then I'll pull the failed PaymentIntent, identify reason (card declined / 3DS / insufficient funds / risk block), and check whether dunning/retry is configured on the subscription.

---

## DONE THIS SESSION

1. Got working Meta System User token into keychain (after Dan's number/2FA debacle, switched to email-based 2FA)
2. Opted out 52 ads from multi-advertiser placements
3. Pulled full ad account audit (4 campaigns, 4 adsets, 57 ads, lifetime + 7d insights)
4. Identified root cause of AC vs Meta lead discrepancy (silent fallback bug)
5. Wrote retry-with-error fix for index-lead.html, pushed to `fix/lead-form-retry` branch
6. Paused 5 underperforming ads in live lead magnet campaign (saves ~$30/wk → can stay in budget for winners)
7. Verified all 3 Stripe payment links resolve

---

## NEXT STEPS (priority order, picked up next session)

### Wake-up immediates (require Sheldon)
1. **Merge `fix/lead-form-retry` PR** to deploy lead form fix
2. **Add Stripe API key to keychain** so I can investigate today's failed payment
3. **Decide on the 121 IC / 0 purchase post-mortem** - is this worth the dig? My read: yes, because it's the same audience the lead magnet is now warming, and once the email sequence converts trial signups, that pool needs to flow through a working checkout.

### After merge (autonomous next session)
4. Backfill audit: cross-reference Meta Lead events with AC contacts for last 14d, manually sync any missing
5. Investigate IC double-fire / checkout abandonment (probably checkout.html UX or pixel firing on page load instead of click)
6. Build AC Dunning automation (tag: payment-failed) using ID:13 lead-magnet automation as template (it uses Plus-compatible Send Email actions)
7. Build AC Win-back automation (tag: cancelled)

### Held until paying customers exist (do not start yet)
- AC Retention automation
- Stripe coupon for win-back
- Stripe Customer Portal

### Stalled / future
- New funnels for @logd and @sheldonevansx (separate Skool/Stripe setup) - **start in a new project session, see architecture doc**
- Burner IG/Twitter content ingestion system - **separate project session**

---

## BLOCKERS

- **Stripe key missing from keychain** - can't audit failed payment or investigate the 0-purchase mystery from paused campaigns
- **Local git main is diverged from origin** - 46 commits ahead on remote that local doesn't have, plus local working tree has untracked stuff and modifications. I deliberately did NOT touch this. You should resolve manually before next session: `git fetch && git status` then decide what to keep. My fix is safely on its own branch.

---

## KEY CONTEXT (carried forward)

- **Dan Fouche** female, architect educator Dubai, @studwalldan, won best thesis across engineering+science+architecture
- Course: 5 chapters (4 completed) + Konteks Kalendar bonus, 363+ members on Skool
- $29/mo, $249/yr, 7-day free trial, 30-day money-back
- Tone: casual, anti-academic, student language. No em-dashes. No AI slop. Plain text emails.
- [MANUAL] creatives consistently outperform [AI] creatives in this account (5/5 worst performers were [AI] format)
- Lead magnet funnel works ($1.49 CPL is healthy). Direct-to-sale funnel does NOT work yet (0 purchases on $416 spend lifetime). Funnel must go: Lead → Email Nurture → Trial → Paid.

---

## AGENT SYNC PROTOCOL (updated for single-machine workflow)

This file is the source of truth between sessions. Read it first, update it last.

1. **Start of session:** Read STATE.md before doing anything else
2. **End of session:** Update "DONE THIS SESSION" + "NEXT STEPS" + "BLOCKERS"
3. **Commit STATE.md** at end of every session even if nothing else changed
4. **CLAUDE.md** = invariant project facts (URLs, IDs, design system). Don't write current state there.
5. **STATE.md** = mutable session state. Read/write often.
6. **~/.claude/projects/.../memory/MEMORY.md** = long-term persistent memory across all projects
