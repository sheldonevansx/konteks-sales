# Cowork Brief: Lead Magnet Ad Copy Update
**Date:** 2026-03-30
**From:** Jinx (OpenClaw)
**Priority:** Do this before campaigns go back live

## What Changed
1. **New landing page built:** `index-lead.html` (commit `ff092b8`)
   - Email capture form replaces Stripe trial CTA
   - Lead-specific exit popup (`exit-popup-lead.js`)
   - Social proof: "20,000+ architecture students follow @studwalldan"
   - Live preview: `https://kourse.konteks.co/index-lead.html`
   - NOT yet swapped to main index.html - Shel reviewing design first

2. **Both campaigns PAUSED** via API (both were active)
   - Campaign 1 (Cold): `120240666407030618` - PAUSED
   - Campaign 2 (Warm): `120240784963490618` - PAUSED

3. **UAE removed from targeting** in both ad sets
   - Campaign 1 ad set: `120240666407050618` - now US/NZ/CA/ZA/GB/AU
   - Campaign 2 ad set: `120240785027000618` - now US/NZ/CA/ZA/GB/AU

## What Needs Doing: Ad Copy Rewrite

### Current ad copy problem
All ads currently reference "Free for 7 days. $29/mo after that" and link to a Stripe checkout.
We're pivoting to lead magnet (free PDF guide). Ads need to match.

### Two types of ads:

**Type A: AI Image Ads (asset_feed_spec)**
These have editable copy. Creatives can't be edited after creation - must create NEW creatives and swap them into the ads.

Affected ads (Campaign 1):
- `120240774803060618` - [AI] Drawing
- `120240776909230618` - [AI] Drawing Night 2
- `120240774590660618` - [AI] Pinboard 2
- `120240666407040618` - [AI] Dan Video
- `120240776773260618` - [AI] Drawing Night
- `120240772430270618` - [AI] Pinboard 1
- `120240769356020618` - [AI] Dan Coffee

Campaign 2 has mirror ads - same creatives.

**Type B: Video Ads (existing IG posts)**
These use Dan's actual Instagram posts as the ad content. The video and caption are from the post.
You can change: headline, description, CTA type, destination URL.
You CANNOT change: the video or primary text (it's the IG post caption).

Affected video ads:
- `120240788313820618` / `120240788307910618` - Crit Survival
- `120240788314470618` - 3D Context Tools
- `120240788315400618` - Physical Model Render

### New Copy (Lead Magnet Version)

**New body texts (for AI image ads, use all 5 in asset_feed_spec):**

1. "Every architecture student figures out the hard way that studio doesn't teach you how to studio.

I spent 5 years figuring out what actually works. Won best thesis. Now I put the whole system in a free guide.

5 shortcuts:
- The grading rubric hack (15 min to implement)
- The 3-concept rule
- The crit presentation formula
- Site analysis that actually drives design decisions
- The weekly planning system that killed all-nighters

Free PDF. No sign-up fee. Just your email."

2. "Your lecturer said 'push it further.'

Push WHAT further? Nobody tells you.

I wrote a free guide that covers exactly this - the 5 things I figured out winning best thesis that nobody teaches in studio.

Takes 10 minutes to read. Might save you hundreds of hours."

3. "I was the student up at 2am wondering why everyone else seemed to know something I didn't.

Turns out they didn't. Nobody teaches you HOW to do architecture school. So I built the system myself.

I put the 5 biggest shortcuts into a free guide. Grab it - it takes 10 minutes to read."

4. "The top 1% of architecture students aren't more talented. They have frameworks.

I mapped out 5 of them in a free PDF:
- How to read a brief and find the angle nobody else sees
- How to present at crits so your lecturers actually listen
- How to do site analysis that drives design (not just sun paths)
- How to structure your week so you stop pulling all-nighters

Free. Just enter your email."

5. "Architecture school is designed to see who figures it out on their own.

Not to teach you how.

I wrote a free guide with the 5 studio shortcuts I wish someone had told me in first year. It won't make you the best overnight. But it'll stop you wasting time on things that don't matter."

**New titles (for asset_feed_spec):**
1. "Free guide: 5 studio shortcuts your lecturers never taught you"
2. "The frameworks that won best thesis. Free PDF."
3. "Stop the all-nighters. Read this free guide."

**New description:**
"Free PDF for architecture students. 10-minute read."

**New destination URL:**
`https://kourse.konteks.co/index-lead.html`
(Or `https://kourse.konteks.co/` once Shel approves and we swap index files)

**CTA type:** LEARN_MORE (keep same)

### Steps to Execute

1. For each AI image ad: create a new creative with the new copy + same image hashes, then update the ad to use the new creative
2. For video ads: you can't change primary text, but update the headline/description and destination URL
3. Campaign 2 (Warm) has mirror ads - do the same
4. Also update the 2 static ads:
   - `120240789486260618` - [STATIC] Notes - 3 Render Rule
   - `120240789480130618` - [STATIC] Editorial - School Doesnt Teach

### API Details
- Token in Keychain: `meta-marketing-api-long` (account: `konteks`)
- Ad account: `act_1252541203714869`
- Page ID: `991747800696070`
- Instagram user ID: `17841466494522864` (from existing creatives)

### DO NOT
- Change campaign budgets ($56/day and $30/day)
- Change targeting (already updated)
- Reactivate campaigns - Shel will do that after reviewing
- Change optimization objective

