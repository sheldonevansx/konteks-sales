---
name: konteks-preflight
description: Pre-implementation checklist for any new feature, page, or funnel change on the Konteks Kourse project. MUST be used before implementing any new feature, adding a new page, changing CTAs, adding forms, creating popups, modifying the checkout flow, or adding any user-facing element that collects data or promises something. Also use when auditing existing features for broken connections. Think of this as the "did we actually wire this up?" check.
---

# Konteks Preflight Check

Before implementing ANY new feature or change, work through this checklist. The goal is to catch disconnected features before they go live - like a form that collects emails but sends them nowhere, or a CTA that links to a page that doesn't exist.

## Why This Exists

On March 26, 2026, we discovered an exit popup that collected emails, showed "Check your email!", and sent data to an API endpoint that didn't exist. No emails were captured, no guide was delivered. The feature looked complete to the user but was completely broken under the hood. This skill prevents that from happening again.

## The Chain Rule

Every user-facing feature is a chain. If any link is missing, the feature is broken even if it looks fine in the browser. Before building anything, map the full chain and flag missing links.

## Preflight Checklist

For EVERY new feature, page, or significant change, answer these questions before writing code:

### 1. Data Flow
- Where does user input go? (form submissions, email captures, clicks)
- Is the receiving endpoint real and working? (API, ActiveCampaign, Stripe, etc.)
- Can we verify it works with a test submission?

### 2. Promises to the User
- Does the UI promise something? ("Check your email!", "Your guide is on its way", "You'll get access in 24 hours")
- Can we actually deliver that promise right now?
- If not, what's missing? (email automation, PDF asset, Zapier trigger, etc.)

### 3. Link Integrity
- Do all links point to pages that exist?
- Do all Stripe links have the correct success URL?
- Do all Skool links have UTM params?
- Do internal links (checkout, thank-you, cancel) resolve?

### 4. Pixel & Tracking
- Are Meta Pixel events firing at the right moments?
- Is the correct Pixel ID used? (26300556566305220, NOT 962791462941600)
- Are we tracking the right event? (ViewContent for CTAs, InitiateCheckout for checkout page, Purchase for thank-you, Lead for email captures)

### 5. Email & Automation
- If we're collecting an email, which ActiveCampaign list does it go to?
- Which tag triggers which automation?
- Is the automation actually built in AC, or just planned?
- Is the email copy written?

### 6. Asset Dependencies
- Does the feature reference files that exist? (images, videos, PDFs, guides)
- Are they committed to git and deployed?
- Are file paths correct for production (relative paths, not absolute)?

### 7. Mobile
- Does it work at 375px width?
- No horizontal overflow?
- Touch targets at least 48px?
- Text readable without zooming?

## Output Format

After running through the checklist, produce a status report:

```
PREFLIGHT CHECK: [feature name]

READY:
- [x] Links verified
- [x] Pixel events correct
- [x] Mobile tested

BLOCKED:
- [ ] Email endpoint doesn't exist (need Cloudflare Worker or AC form)
- [ ] PDF guide not created yet
- [ ] AC automation not built

RECOMMENDATION: [implement / implement with caveats / do not implement until blockers resolved]
```

## When a Feature Has Blockers

If blockers exist, you have three options. Present them clearly:

1. **Implement with placeholder** - Build the UI but use a visible placeholder or disable the feature. Example: show the popup but replace the email form with a direct link to checkout.
2. **Implement the full chain** - Build the backend connection too. This takes longer but ships a complete feature.
3. **Don't implement** - If the blockers are significant (need Dan to create content, need access we don't have), flag it and move on.

Never ship a feature that promises something to the user and doesn't deliver. That's worse than not having the feature at all.

## Quick Reference: Current Integrations

- **Email capture** → ActiveCampaign API (can't call directly from frontend without exposing key; need a Cloudflare Worker proxy or AC embedded form)
- **Payments** → Stripe Payment Links (redirect-based, no API needed from frontend)
- **Pixel events** → Meta Pixel JS (client-side, works on all pages)
- **Deploys** → Push to origin/main, Cloudflare Pages auto-deploys
- **Skool access** → Zapier handles invite after Stripe subscription
