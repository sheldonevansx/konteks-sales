# Konteks Kourse - Complete Handoff Document
**Project:** Sales funnel for Dan Fouche's (@studwalldan) Konteks Kourse
**Repo:** `sheldonevansx/konteks-sales` (also mirrored at `Gamblegrift/konteks-sales`)
**Live URL:** `https://kourse.konteks.co`
**Date:** March 26, 2026

---

## 1. CHANGES MADE SINCE LAST DEPLOY

Last push was commit `c618ea6` on March 26, 2026. All changes are live on Cloudflare Pages.

### Recent commits (newest first):

**`c618ea6` - Clean up hero: video replaces static image, guarantee text tidied, new Dan profile photo**
- `index.html`: Replaced static hero image (`images/dan-teaching.jpg`) with autoplay looping video (`videos/skool-walkthrough-web.mp4`) in hero section
- `index.html`: Removed standalone video section (was between testimonial banner and pain section) - video now only in hero
- `index.html`: Restructured guarantee text below CTA - now stacked vertically: button → shield icon + "7-day money-back guarantee · Cancel anytime" → "See what's inside ↓" link. Removed "363+ students inside" from that line
- `images/dan-profile.jpg`: Replaced with new photo (Dan in Copenhagen with coffee) for credibility section at bottom of page

**`c1d985c` - Final polish: new headline, hand-drawn underline, guarantee text, mobile avatar fix, 363+ everywhere, better CTA text**
- `index.html`: Hero headline changed FROM "The top student mindset is taught. Nobody in studio will tell you that." TO "The system behind the best architecture thesis - in 5 short chapters."
- `index.html`: Subheading changed to "Concepts that stick. Crits you're ready for. Site analysis that actually drives your design. Built by the architect who won best thesis across all faculties" with an SVG hand-drawn wavy underline (orange, `#E86A1C`) on "Built by the architect who won best thesis across all faculties"
- `index.html`: Hero CTA button text changed from "Get the Kourse - $29/mo" to "Join 363+ students - $29/mo"
- `index.html`: Mid-page CTA buttons changed from "Get the frameworks" / "Start learning today" to "Start for $29/mo"
- `index.html`: Final CTA button changed to "Join 363+ students - $29/mo"
- `index.html`: All "326+" references updated to "363+" (hero checklist, community card, final CTA)
- `index.html`: FAQ answer updated from "second year through masters" to "first year through masters"
- `index.html`: Removed `$97` price strike from hero (felt fake without context)
- `index.html`: Added CSS class `.avatar-strip` with mobile responsive rules: 10 avatars on mobile (<480px), all 20 on desktop; avatars shrink to 30px on phones <480px
- `index.html`: Added `body { padding-bottom: 72px }` on mobile for sticky CTA bar clearance

**`2ba274e` - Add scarcity: early access pricing, price increase to $49 at 400 members**
- `index.html`, `index-v2.html`, `index-v3.html`: Added scarcity section immediately above pricing section on all 3 pages. Orange-bordered card: "Early Access Pricing - Price increases from $29/mo to $49/mo when we hit 400 members. Currently at 363 members. 37 spots left at this price."
- V1/V3: warm gradient background (`#FFF3E0` to `#FFF8F0`), orange border
- V2: dark glass style (`rgba(232,106,28,0.08)` bg, semi-transparent border)

**`00075e1` - Expand avatar strip to 20 real student photos**
- Added `images/members/thumb-member-11.jpg` through `thumb-member-20.jpg` (10 new 80x80px center-cropped thumbnails)
- Updated avatar strips in all 3 pages from 10 to 20 photos
- Counter badge changed from "+353" to "+343" (363 total minus 20 shown)
- V2 avatars sized 32px, V3 sized 34px for their respective designs

**`551bc9b` - Add real student avatar strip (10 photos + counter)**
- Created `images/members/` directory with `thumb-member-01.jpg` through `thumb-member-10.jpg`
- Photos are 80x80px center-cropped thumbnails from Skool member profile pictures Shel provided
- Added overlapping circle avatar strip to all 3 pages with "+353" counter badge
- V1: white borders, in testimonial banner section
- V2: dark borders (`#0F1115`), replacing gradient circle placeholders in student counter
- V3: warm gray borders (`#F7F5F2`), above school name pills

**`5fc631a` - Remove original video (keep web-optimized 3.2MB version only)**
- Deleted `videos/skool-walkthrough.mp4` (6.2MB original) from git tracking
- Kept only `videos/skool-walkthrough-web.mp4` (3.2MB, 30fps, 720p, h264)

**`05766a7` - Add Skool walkthrough video to all 3 landing pages**
- Added `videos/skool-walkthrough-web.mp4` - 19.6s Skool walkthrough recording, optimized from 6.2MB to 3.2MB via ffmpeg (720p, 30fps, CRF 28)
- Added autoplay/loop/muted/playsinline video element to all 3 pages
- Caption: "A look inside the Konteks Kourse on Skool"

### Earlier significant commits in this session:

**`422d7bf` - Landing page v3 (conversion-optimized per Perplexity audit)**
- Created `index-v3.html`: Light mode, white/#F7F5F2 bg, navy trust color `#1B2D4F`
- 3-tier pricing with decoy: $29/mo, $69/quarter ($23/mo "MOST POPULAR"), $199/yr ($16.58/mo "BEST VALUE")
- 7-day money-back guarantee section (navy bg, shield icon)
- Value stack section showing $573+ total value before $29/mo price reveal
- Urgency section with "early access" framing and 37 spots counter
- Outcome-focused headline, FAQ section, sticky mobile CTA

**`34e504c` / `181d616` - Landing page v2 (dark glassmorphism)**
- Created `index-v2.html`: Dark mode `#0F1115`, glassmorphism cards, JetBrains Mono + Inter
- Electric cobalt `#2E5BFF` accent + burnt orange `#E86A1C`
- Before/After transformation grid, student counter with real photos
- Mobile optimized: body padding, hero height fix, single column grids on mobile, 320-374px support

**`bcc5c8f` - Lead capture funnels**
- `guide.html`: Free guide squeeze page ("The 5 Studio Shortcuts" PDF lead magnet)
- `guide-thanks.html`: Thank-you page after guide download
- `quiz.html`: 7-question quiz funnel (5 result types: Concept Builder, Crit Strategist, Time Architect, Site Detective, Total System)
- `quiz-results.html`: Dynamic results page with personalized chapter recommendations
- `exit-popup.js`: Exit-intent popup offering free guide (triggers on mouse leave)
- `emails/lead-nurture-sequence.md`: 6-email nurture sequence for leads

---

## 2. DECISIONS MADE

### Strategy & Funnel
- **$29/month paid Skool community** with $249/year option ($20.75/mo). Price increase to $49/mo at 400 members.
- **Stripe via Shel's Dubai business (SEVANS IT Services)** because Dan can't create Stripe in her country
- **Bridge page pattern**: `checkout.html` → auto-redirect to Stripe after 2.5s, fires InitiateCheckout pixel event
- **Sales page as intermediary** - never send ad traffic directly to Skool join page (need pixel tracking + sales copy warmup)
- **CBO over ABO** at this budget level - Meta auto-allocates across ads
- **Optimize for InitiateCheckout, not Purchase** - won't hit 50 purchases/week needed for Purchase optimization. Switch to Purchase once you hit 5+ purchases.
- **New ads go in SAME ad set** at $80/day budget - not new ad sets; each needs $20-30/day minimum
- **Three separate campaigns planned**: existing purchase campaign + lead gen (→ /guide) + quiz (→ /quiz). Only the purchase campaign is live.
- **7-day money-back guarantee** for cold traffic trust building (discussed, added to page copy, but NOT yet set up in Stripe)
- **Free trial discussed but deferred**: If zero purchases by Day 4 with 8+ total checkouts, swap to 7-day free trial. Would need new Stripe payment links with trial period.
- **Landing page v1 is live** (the light editorial one). V2 (dark) and V3 (conversion-optimized) are built but not swapped in. Decision was to swap at $15 spent rather than waiting for baseline, but Shel kept v1 for now.
- **Skool direct ads discussed**: Pixel CAN fire on Skool, but sales page still provides better cold traffic conversion context. Worth A/B testing by swapping one ad's destination.

### Design & Copy
- **No em-dashes anywhere** - use hyphens. Shel's explicit rule.
- **No AI slop words**: crucial, delve, landscape, pivotal, showcase, vibrant, comprehensive, cutting-edge, game-changing, unlock, unleash, empower, supercharge, leverage, utilize
- **Plain text emails only** (no HTML templates) - higher conversion per Walshymails research
- **Inter font only** for the sales page. V2 adds JetBrains Mono as secondary.
- **Dan is female**, architect educator in Dubai. Always "Dan" not "Daniel." "Dan Fouche, Architect" in the credibility section.
- **The course is for ALL years** of architecture school, not just years 2-5. FAQ and copy must reflect "first year through masters."
- **Button text**: "Join 363+ students" for hero/final CTAs (social proof), "Start for $29/mo" for mid-page CTAs
- **Tone**: casual, self-aware humor, anti-academic, anti-gatekeeping. Use student language, not marketer language.
- **Target audience**: Architecture STUDENTS (not professionals) - this is the blue ocean gap. Archademia targets professionals; Konteks owns the student space.

### Infrastructure
- **Cloudflare Pages** (recently migrated from Worker to Pages project). Build command: blank. Build output: `/`. No framework. Auto-deploys from `sheldonevansx/konteks-sales` on push to main.
- **Custom domain**: `kourse.konteks.co` CNAME → `konteks-sales.pages.dev`
- **konteks.co root domain stays on Squarespace** - never touch it. DNS on Cloudflare.
- **Git remotes on build machine**: `shel` = `sheldonevansx/konteks-sales` (Cloudflare watches this), `origin` = `Gamblegrift/konteks-sales` (backup, currently behind/non-fast-forward)
- **ActiveCampaign at $15/mo** - chosen over Kit/MailerLite
- **Same Meta Pixel across all touchpoints**: Skool, sales page, checkout, thank-you. Pixel ID: `26300556566305220`

### Ad Strategy
- **Broad targeting** over interest stacking - creative IS targeting now (Meta 2026 best practice)
- **English-speaking countries**: US, UK, AU, CA, NZ, ZA, IE, HK, AE (Singapore removed - needed advertiser verification)
- **3-campaign structure planned**: Prospecting ($80/day) + Retargeting ($20/day) + Scale. Only Prospecting is live.
- **Kill ads** with CTR below 1% after 1,000 impressions
- **HTML text-only ad creatives maxed out at 5-7/10 quality** - need Dan's photo, real imagery, or Figma/Canva templates for better creatives
- **Canva over AI image generation** for ad creatives
- **Budget**: Shel increased to $80/day CBO on Day 3 (was $36/day limit from Meta). This was a 120% jump which resets learning phase - don't touch budget again for 3-4 days.

---

## 3. THINGS THAT ARE BROKEN OR INCOMPLETE

### Broken
- **Gamblegrift remote push** fails with non-fast-forward error. Need `git push origin main --force` or rebase. Not critical since Cloudflare watches `shel` remote only.
- **Foreplay API** returns 401 "Invalid or missing API key" despite key being saved to Keychain. API may have changed or key expired.
- **AC Onboarding automation (ID:7)** is still inactive (Status:0). Requires manual activation via browser UI. The automation was built (8 steps) but AC's modal UI is hard to automate.

### Incomplete
- **Lead capture funnels need AC form IDs**: `guide.html` and `quiz.html` have placeholder form action URLs. Need real ActiveCampaign form IDs inserted.
- **PDF guide content not written**: The lead magnet "5 Studio Shortcuts" guide page exists but the actual PDF doesn't exist yet. `guide-thanks.html` links to a non-existent PDF.
- **AC nurture automation (6 emails)** not set up. Copy is written in `emails/lead-nurture-sequence.md` but not created in ActiveCampaign.
- **Exit popup not added to sales page**: `exit-popup.js` exists but `<script src="/exit-popup.js"></script>` is NOT in `index.html`. Needs to be added.
- **AC Dunning automation** (3 emails for failed payments) - copy written in `emails/plain-text-sequences.md` but not built in AC. Requires browser UI.
- **AC Win-back automation** (3 emails for cancellations) - same as above, copy exists but not built.
- **AC Retention automation** (1 email) - same.
- **Stripe coupon** ($19/mo win-back offer) not created. `cancel.html` references `STRIPE_DISCOUNT_LINK_HERE` placeholder.
- **Stripe Customer Portal** not set up. `cancel.html` references `STRIPE_PORTAL_URL_HERE` placeholder.
- **Remaining placeholders in cancel.html**: `STRIPE_DISCOUNT_LINK_HERE`, `STRIPE_PORTAL_URL_HERE`
- **V3 pricing tiers** reference a quarterly plan ($69/quarter) that doesn't exist in Stripe. Would need a new Stripe payment link.
- **Server-side Meta Conversions API** (Cloudflare Worker) not built. Currently pixel-only, no server-side events.
- **Skool pixel paste**: Pixel ID `26300556566305220` needs to be pasted into Skool community settings (Settings → Tracking).
- **Retargeting campaign** ($20/day CBO) not built yet in Meta Ads Manager.
- **ManyChat DM automation** discussed but deprioritized.

### Potential Issues
- **Video may not render on some older iOS**: The `playsinline` attribute is there but some iOS versions are finicky with autoplay video. Test on a real iPhone.
- **20 avatar images = 20 HTTP requests**: Could be slow on bad connections. Consider creating a single sprite sheet if performance is an issue.
- **Scarcity "37 spots left" is static**: This number doesn't update automatically. When member count changes, you need to manually update it in all 3 pages.

---

## 4. CREDENTIALS AND INTEGRATIONS TOUCHED

### Stripe
- **Account**: `acct_1TD1NAI75rl019DG` (SEVANS IT Services)
- **Product**: `prod_UBPrqteCKB9sFO` (Konteks Kourse)
- **Monthly Payment Link**: `https://buy.stripe.com/cNi7sLfUG9YrcIL4vq5Rm02` (with success URL)
- **Annual Payment Link**: `https://buy.stripe.com/fZubJ1bEq3A3fUX2ni5Rm03` (with success URL)
- **Success URL configured**: `https://kourse.konteks.co/thank-you.html`
- **Conversions API access token**: Generated in Meta Events Manager (stored in Meta, not in code)

### ActiveCampaign
- **Account**: `konteks.activehosted.com`
- **Login email**: `info@konteks.co`
- **API credentials**: Stored in macOS Keychain (service: `activecampaign-url` and `activecampaign-key`, account: `konteks`)
- **List ID 4**: Konteks Kourse Subscribers (primary)
- **List ID 3**: Master Contact List
- **Tags created**: onboarding (1), payment-failed (2), cancelled (3), win-back (4), stripe-integration (5), stripe-integration-Subscription (6), historical (7)
- **Automations**: ID 1 (onboarding, ACTIVE), IDs 2,4,5,6,7 (inactive)
- **Campaigns (email bodies)**: IDs 1,3,5,7,9 with Message IDs 5-20
- **Onboarding emails updated via API**: Campaign IDs 1,5,7,9 / Message IDs 16,18,19,20
- **Physical address set**: SEVANS IT Services, IFZA Business Park, Dubai Silicon Oasis
- **From name**: "Dan", from email: `info@konteks.co`, reply-to: `info@konteks.co`

### Zapier
- **Zap 1 (Monthly)**: Stripe New Subscription → Filter `prod_UBPrqteCKB9sFO` → Skool Invite Member → AC Create Contact → AC Add Tag "onboarding"
- **Zap 2 (Annual)**: Same flow for annual subscriptions
- **Zap 3**: Stripe Canceled Subscription → Email notification to Shel
- **End-to-end funnel VERIFIED**: Stripe → Zapier → Skool invite + AC onboarding email received

### Meta Ads
- **Pixel ID**: `26300556566305220` (new, 17 digits)
- **Old Pixel ID**: `962791462941600` (no longer in use)
- **Dan's ad account**: `1289583335255090`
- **Business portfolio (Shel)**: `1295600739116155`
- **Campaign**: "Architecture School Doesn't Teach You" (Prospecting, $80/day CBO, LIVE since March 24)
- **3 ads active**: Pain List static, 3 Render Rule manual upload video, 3 Render Rule existing IG post
- **4th ad planned**: MS Paint "Architecture crits don't have to suck" (not yet added)
- **Custom Audience**: CSV of 351 Skool members uploaded to Meta
- **Video Custom Audiences**: Created from Dan's top 3 Instagram videos (219K, 235K, 71K views)
- **Lookalike audiences**: Created (US + GB separately, 1%), added as audience suggestions
- **UTM params on all ads**: `utm_source=meta&utm_medium=paid&utm_campaign=cold_traffic&utm_content={{ad.name}}`
- **Advantage+ creative enhancements**: Only Visual touch-ups and Flex media ON; all others OFF
- **Countries**: US, UK, AU, CA, NZ, ZA, IE, HK, AE
- **Optimization event**: InitiateCheckout
- **Day 3 stats** (as of this handoff): ~$19/InitiateCheckout, multiple checkouts, 0 purchases

### Cloudflare
- **Project type**: Pages (migrated from Worker on March 26 - the old Worker project was preventing binary file deploys)
- **Pages URL**: `konteks-sales.pages.dev`
- **Custom domain**: `kourse.konteks.co` CNAME → `konteks-sales.pages.dev`
- **DNS**: Cloudflare (migrated from Namecheap)
- **Build command**: blank (static site, no build step)
- **Build output directory**: `/`
- **Auto-deploys on push to main** of `sheldonevansx/konteks-sales`

### Foreplay (Ad Research)
- **API key**: Stored in macOS Keychain (service: `foreplay-api-key`, account: `konteks`)
- **Status**: Returns 401 - not working

### Apify (Instagram Scraping)
- **Token**: Stored in `~/.clawdbot/apify.json` (key: `apiKey`)
- **Used for**: Scraping Dan's Instagram posts, Kalypso Designs posts, competitor research

### macOS Keychain entries
- `activecampaign-url` / account `konteks`
- `activecampaign-key` / account `konteks`
- `foreplay-api-key` / account `konteks`

### Pre-commit hooks
- Installed in repo to scan for accidentally committed secrets

---

## 5. SKILLS AND CUSTOM TOOLS BUILT

### Custom Skills (OpenClaw workspace)
All at `/Users/jinxjinx/.openclaw/workspace/skills/`:

1. **`meta-ads-mastery/SKILL.md`** (21KB) - Complete Meta Ads 2026 strategy guide. Covers Advantage+ campaigns, broad targeting, creative-as-targeting philosophy, budget allocation, CBO vs ABO, learning phase management, kill criteria. Built from 13+ practitioner video transcripts and real marketer research.

2. **`ad-creative-hooks/SKILL.md`** (22KB) - Ad creative hook patterns and copy frameworks. Includes opening hook formulas, body copy structures, CTA patterns, platform-specific formatting. Based on analysis of high-performing education/course ads.

3. **`conversion-copy/SKILL.md`** (26KB) - Conversion copywriting for course/community sales. Pain-agitate-solve frameworks, value stack construction, objection handling, pricing psychology, scarcity/urgency patterns. Based on Walshymails research and direct response principles.

4. **`ad-creative-formats/SKILL.md`** (8KB) - Ad creative format specifications. Image dimensions, video specs, carousel requirements, text limits for each Meta placement.

### Project-Level Context
- **`CLAUDE.md`** (153 lines) - Full project context file with design system, URLs, Stripe details, ActiveCampaign setup, integration flow, pixel events, and copy rules. Created specifically for Claude Code handoff.

### Research Files (in `research/`)
- `STUDENT-PAIN-POINTS-RESEARCH.md` - 50+ authentic student phrases from Reddit/forums. Top 5 pain points: tech crashes, concept paralysis, crit terror, all-nighter burnout, illustration insecurity. Untapped angles: post-rejection recovery, "mid student" anxiety, project rescue protocol.
- `CHAPTER-ANGLE-MAP.md` - Each of 5 chapters mapped to before→after transformation for ad copy angles
- `DAN-FULL-CONTENT-ANALYSIS.md` - Dan's 40 most recent Instagram posts analyzed for themes, hooks, engagement patterns
- `META-AD-LIBRARY-RESEARCH.md` - Competitor ad research from Meta Ad Library
- `META-ADS-2026-DEEP-RESEARCH.md` - Comprehensive Meta Ads strategy research
- `AD-CREATIVE-SWIPE-FILE.md` - Collection of high-performing ad references
- `WALSHYMAILS-TRANSCRIPTS.md` - 3 full YouTube video transcripts on email marketing for courses
- `MARKETER-VIDEO-INSIGHTS.md` - 13 Instagram marketer video summaries
- `PRACTITIONER-AD-COPY-RESEARCH.md` - Real marketer ad copy patterns
- `DAN-VIDEO-INSIGHTS.md` - Analysis of Dan's video content style
- `konteks_kourse_landing_page_audit.pdf` - 20-page Perplexity deep research audit of the landing page. Score: 6.5/10. Top 5 fixes: money-back guarantee (20-40% lift), course preview video (30-80%), testimonials with photos (25-35%), urgency/scarcity (15-30%), sticky mobile CTA (10-15%).

### Ad Creatives
- `ad-creatives/` - 5 original HTML static ads (1080x1080)
- `ad-creatives/bulk-v2/` - 15 HTML ads + PNG screenshots (scored 4-5/10)
- `ad-creatives/bulk-v3/` - 14 HTML ads + PNG screenshots + 1 hand-built reference (scored 3.5-7.5/10)
- All scored below quality threshold for photo-realistic ads. Decision: use Canva/Figma templates instead.

### Email Sequences
- `emails/plain-text-sequences.md` - ALL 11 email sequences in plain text (canonical source of truth)
- `emails/lead-nurture-sequence.md` - 6-email nurture sequence for lead magnet/quiz leads
- Individual HTML files in `emails/` for reference but plain text is what gets used

---

## 6. PENDING TASKS (Priority Order)

### Immediate (affects running ads)
1. **Monitor Day 4 ad performance** (tomorrow): CTR >1.5% keep, <1% kill; CPC <$2.50 keep, >$4 kill. If 0 purchases with 8+ checkouts, switch to free trial.
2. **Add exit-popup.js** to `index.html`: `<script src="/exit-popup.js"></script>` before closing `</body>` tag
3. **Paste pixel ID into Skool**: `26300556566305220` in Skool community Settings → Tracking
4. **Dan to comment on each running ad** from @studwalldan account (boosts engagement signal)
5. **Add 4th ad to ad set**: MS Paint style "Architecture crits don't have to suck" (10 new ad concepts written in session, see research/CHAPTER-ANGLE-MAP.md)

### Short-term (this week)
6. **Dan film video ads** using scripts from AD-CAMPAIGN-BLUEPRINT-V3.md (6 video scripts ready)
7. **Create Stripe free trial payment links** (7-day trial, $0 upfront) - ready to deploy if Day 4 shows checkout→purchase drop-off
8. **Build trial conversion email sequence** (3 emails: Day 1 welcome, Day 4 value highlight, Day 6 trial ending)
9. **Build Retargeting campaign** ($20/day CBO) targeting video viewers + page visitors
10. **Update AC form IDs** in `guide.html` and `quiz.html`
11. **Write actual PDF guide** content for "5 Studio Shortcuts" lead magnet
12. **Set up AC nurture automation** (6 emails, trigger: "lead-magnet" or "quiz-lead" tag)

### Medium-term
13. **Create 2 new Meta campaigns**: Lead Gen → /guide, Quiz → /quiz
14. **Create Stripe coupon** ($19/mo) + enable Customer Portal for cancel.html
15. **Fix remaining placeholders**: `STRIPE_DISCOUNT_LINK_HERE`, `STRIPE_PORTAL_URL_HERE` in cancel.html
16. **Build AC Dunning/Win-back/Retention automations** via browser UI (copy written, not built)
17. **Activate AC onboarding automation ID:7** (requires browser UI)
18. **Build server-side Meta Conversions API** (Cloudflare Worker) for redundant event tracking
19. **Set up Figma MCP** - Shel needs to generate Personal Access Token
20. **Deep ad research session**: Browse Meta Ad Library, screenshot 20+ winning education/course ads

### Longer-term
21. **A/B test landing page versions**: V1 (current live), V2 (dark), V3 (conversion-optimized)
22. **Set up ManyChat DM automation**
23. **Community gamification plan**
24. **Pivot research**: Future audience expansion from students to interior/architectural design general audience (deprioritized)

---

## 7. CONTEXT YOU SHOULD KNOW

### About Dan
- **Dan Fouche** is female. Always "Dan" never "Daniel." Architect educator in Dubai.
- Instagram: `@studwalldan` (27.5K followers on TikTok, ~1.9M likes). Strong IG presence too.
- Won best master's thesis design project. Same project won best topic across engineering, science, and technology (not just architecture). Topped Theory AND Professional Practice same year.
- Teaching style: Anti-academic, pop culture references, casual, self-aware humor. "The cool architecture friend who figured it out."
- The course has 5 chapters (4 completed): Ch1 "So... Architecture", Ch2 "The Top Student Mindset", Ch3 "Crits, Deadlines & Timing", Ch4 "From 'Brief' to Concept", Ch5 "Site Analysis & Urban Design" + Konteks Kalendar bonus.
- Kalendar access code: `konteks67`
- Skool community: 363 members (was free, switched to paid $29/mo). 2 purchases so far (0.6% conversion of grandfathered free members).

### Things That Were Tried and Didn't Work
- **HTML text-only ad creatives**: 3 rounds produced (5 + 15 + 14 ads). All scored 3.5-7.5/10 max. Quality ceiling for text-overlays without real photography. Decision: use Canva/Figma templates with Dan's photos instead.
- **xfetch (X/Twitter scraper)**: Deprecated and broken, rate limited. Use X API v2 bearer token instead.
- **web_fetch on x.com URLs**: Always fails. Don't try.
- **Foreplay API**: Returns 401 despite saved key. Worked for initial swipe file download but broke after.
- **Chrome headless `--window-size=1080,1080`**: Cuts off bottom CTA bars on ad screenshots. Use Playwright instead.
- **Kalypso's 72pt TestFlight app**: Identified as a fonts app, NOT the carousel generator tool we were looking for.
- **AC automation creation via API**: Returns 405. Must use browser UI for creating automations.
- **AC browser automation**: The nested modal UI is extremely hard to automate. Manual setup recommended.
- **Wrangler deploy on Cloudflare**: Was causing binary files (images, video) to 404. Fixed by migrating to Pages project.

### Copy & Voice Rules
- No em-dashes (use hyphens)
- No AI slop words (see list in Section 2)
- "Architecture school" not "arch school" or "archi school"
- "Studio" not "design studio" (students just call it "studio")
- "Crit" not "critique" or "review" (student language)
- "Lecturer" is used in South Africa/UK/AU contexts (Dan's background). "Professor" for US contexts.
- Price is always "$29/mo" not "$29/month" or "$29 per month"
- Dan's thesis win is THE key credibility proof. Use it everywhere.

### Competitor Intel
- **Archademia** is the ONLY direct competitor running Meta ads for architecture education. They target professionals. Konteks targets students. This is the blue ocean.
- No other paid architecture student education communities found in Meta Ad Library research.

### Meta Ads Current State (as of handoff)
- Campaign "Architecture School Doesn't Teach You" is LIVE, Day 3
- $80/day CBO (increased from $36 on Day 3 - learning phase reset, don't touch for 3-4 days)
- 3 ads running: 1 static, 1 manual upload video, 1 existing IG post
- ~$19/InitiateCheckout, 0 purchases so far
- Dan's ad account daily spending limit was $36.15 (may have increased with the budget change)
- Budget was jumped 120% in one go (from $36 → $80). Rule of thumb is max 20% increase/day to avoid learning phase reset. It's done - just don't touch it again for 3-4 days.
- Day 4 is first review point. Day 7 is optimization pass. Day 15 is full audit (scale/pivot/kill).

### Integration Flow (end-to-end)
```
Ad click → kourse.konteks.co (ViewContent pixel)
  → "Join 363+ students" button (ViewContent pixel)
    → checkout.html (InitiateCheckout pixel, 2.5s redirect)
      → Stripe payment link
        → Stripe success → kourse.konteks.co/thank-you.html (Purchase pixel)
          → Zapier: Stripe → Filter product → Skool Invite → AC Contact + "onboarding" tag
            → AC Onboarding automation (4 emails over 14 days)
```

### File Naming Convention
- `index.html` = live page (currently v1 editorial style)
- `index-v2.html` = dark glassmorphism variant
- `index-v3.html` = conversion-optimized per Perplexity audit
- `option-a*.html`, `option-b.html` = old design iterations, kept for reference
- `emails/plain-text-sequences.md` = canonical email copy source
- All research in `research/` directory
- All ad creatives in `ad-creatives/` with `bulk-v2/` and `bulk-v3/` subdirectories
