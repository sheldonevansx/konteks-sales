# Konteks Kourse - Unified State File
**Last synced:** 2026-03-26 23:15 UTC+4
**Last agent:** Jinx (OpenClaw) - sync merge from Cowork + OpenClaw sessions

---

## CURRENT LIVE STATE

### Landing Page (kourse.konteks.co)
- **Headline:** "The fastest way to become a top 1% architecture student without more sleepless nights."
- **Subheading:** "Master the frameworks your lecturers use but never teach. 45+ Videos. 5 chapters. Concept development. Time management. Site analysis. Crit preparation."
- **Hero:** Center-aligned, Dan's photo with hand-drawn arrow, autoplay Skool walkthrough video below
- **Default CTA:** "Try free for 7 days" → checkout.html?plan=trial
- **All secondary CTAs:** Also "Try free for 7 days"
- **Guarantee:** 30-day money-back (upgraded from 7-day by Cowork)
- **Scarcity:** "Price increases from $29/mo to $49/mo at 400 members (37 spots left)"
- **Social proof:** 20 avatar strip, "363+ students from 40+ universities"
- **Exit popup:** Active - shows free trial CTA on exit intent (no email form, no broken promises)
- **Checkout page:** Plan selector with 3 options: Trial (default, recommended), Monthly ($29/mo), Annual ($249/yr)

### Meta Ads Campaign
- **Campaign:** "Architecture School Doesn't Teach You" - LIVE since March 24
- **Budget:** $80/day CBO (increased from $36 on Day 3 - learning phase reset)
- **Day 3 stats:** ~$19/InitiateCheckout, multiple checkouts, 0 purchases
- **3 ads running:** Pain List static, 3 Render Rule manual upload video, 3 Render Rule existing IG post
- **Optimization event:** InitiateCheckout
- **Countries:** US, UK, AU, CA, NZ, ZA, IE, HK, AE
- **Note:** Budget jumped 120% in one go. Don't touch for 3-4 days. Day 4 is first review.

### Stripe
- **Trial Link (7-day free):** https://buy.stripe.com/9B68wP37U6Mf9wzfa45Rm05
- **Monthly Link ($29/mo):** https://buy.stripe.com/cNi7sLfUG9YrcIL4vq5Rm02
- **Annual Link ($249/yr):** https://buy.stripe.com/fZubJ1bEq3A3fUX2ni5Rm03
- **Monthly Price ID:** price_1TFFdQI75rl019DGYrCiN9hM
- **Annual Price ID:** price_1TD31pI75rl019DGMwfQPj70
- **Product:** prod_UBPrqteCKB9sFO
- **Entity:** SEVANS IT Services

### ActiveCampaign
- **Onboarding (ID:1):** ACTIVE - 4 emails over ~8 days, triggers on "onboarding" tag
- **ID:7:** Dead duplicate, can be deleted
- **Dunning/Win-back/Retention:** NOT BUILT (copy written in emails/plain-text-sequences.md)

### Zapier
- Monthly Zap: Stripe → Filter prod → Skool Invite → AC Contact + "onboarding" tag
- Annual Zap: Same flow
- Cancel Zap: Stripe Canceled → Email Shel
- **End-to-end verified:** Stripe → Zapier → Skool + AC onboarding email received

### DNS / Hosting
- **Cloudflare Pages** (migrated from Worker project March 26)
- Auto-deploys from `sheldonevansx/konteks-sales` on push to main
- Build command: blank | Output dir: `/`
- Custom domain: `kourse.konteks.co` CNAME → `konteks-sales.pages.dev`

---

## WHAT CHANGED TODAY (March 26)

### By OpenClaw (Jinx) - early session:
- Added Skool walkthrough video to hero (3.2MB, autoplay/loop/muted)
- Added 20 real student avatar strip with mobile responsiveness
- Added scarcity section (price increase to $49 at 400 members)
- Changed headline/subheading, added hand-drawn SVG underline
- Added guarantee text below CTA
- Updated all "326" to "363+"
- Swapped Dan's profile photo
- Migrated Cloudflare from Worker → Pages project
- Wrote HANDOFF.md, committed 4 ad skills to repo

### By Cowork - later session:
- Changed headline to "The fastest way to become a top 1% architecture student..."
- Center-aligned hero section with Dan photo (clean stacked layout)
- Upgraded guarantee from 7-day to 30-day money-back
- Switched ALL CTAs to "Try free for 7 days" (free trial is now the default funnel)
- Created Stripe trial payment link with 7-day free trial
- Redesigned checkout.html as a plan selector (trial/monthly/annual)
- Fixed exit popup: removed broken email form, replaced with free trial CTA
- Cleaned up Dan profile section copy
- Added 5 new operational skills (preflight, funnel-audit, email-writer, deploy, ac-manager)
- Updated CLAUDE.md with current state

---

## WHAT'S BROKEN / INCOMPLETE

### Broken
- **Gamblegrift remote** may be behind after Cowork pushes (need periodic force-push sync)
- **Foreplay API** returns 401 (key may be expired)
- **Remaining placeholders:** STRIPE_DISCOUNT_LINK_HERE, STRIPE_PORTAL_URL_HERE, [UPDATE_PAYMENT_LINK], [DISCOUNT_LINK], [MANAGE_SUBSCRIPTION_LINK]

### Incomplete
- **AC Dunning automation** - copy written, not built (requires browser UI)
- **AC Win-back automation** - same
- **AC Retention automation** - same
- **Stripe coupon** ($19/mo win-back) not created
- **Stripe Customer Portal** not enabled
- **Lead magnet PDF** ("5 Studio Shortcuts") not written - guide.html exists but PDF doesn't
- **AC form IDs** not updated in guide.html and quiz.html
- **AC nurture automation** (6 emails) not set up
- **Skool pixel** - ID `26300556566305220` needs to be pasted into Skool Settings → Tracking
- **Retargeting campaign** ($20/day CBO) not built
- **Server-side Conversions API** not built

---

## PENDING TASKS (Priority Order)

### Immediate (running ads)
1. Day 4 ad review: CTR >1.5% keep, <1% kill; CPC <$2.50 keep, >$4 kill
2. If 0 purchases with 8+ checkouts by Day 4 - the free trial is already the default, monitor conversion
3. Kill underperforming ads
4. Dan comment on each running ad from @studwalldan
5. Paste pixel ID into Skool settings

### This week
6. Dan film 3-4 talking-head video ads (scripts in AD-CAMPAIGN-BLUEPRINT-V3.md)
7. Build AC Dunning/Win-back/Retention automations
8. Create Stripe coupon ($19/mo) + Customer Portal
9. Write lead magnet PDF content
10. Build Retargeting campaign ($20/day CBO)

### Later
11. Lead gen campaigns → /guide and /quiz
12. ManyChat DM automation
13. Community gamification
14. Server-side Conversions API (Cloudflare Worker)

---

## AGENT SYNC PROTOCOL

Both OpenClaw (Jinx) and Cowork read this repo. Rules:
1. **Git pull before starting work** with either agent
2. **Update this file on every commit** with what changed and who did it
3. **Don't have both agents editing simultaneously** - whoever has the repo owns it
4. **CLAUDE.md is Cowork's context file** - keep it in sync with this STATE.md
5. **OpenClaw handles:** mobile/async, crons, monitoring, cross-channel, sub-agents
6. **Cowork handles:** MCPs (Stripe, AC, Chrome), hands-on coding sessions

---

## KEY CONTEXT

- **Dan Fouche** is female. Architect educator in Dubai. @studwalldan
- Won best thesis across engineering, science, and architecture
- Course: 5 chapters (4 completed) + Konteks Kalendar bonus. 363 members on Skool.
- **Archademia** is the only competitor running Meta ads (targets professionals, not students)
- Tone: casual, anti-academic, student language ("studio" not "design studio", "crit" not "critique")
- No em-dashes. No AI slop words. Plain text emails. Self-contained HTML files.
- Ad creative quality ceiling: HTML text-only ads max 5-7/10. Need Canva/Figma + real photos.
