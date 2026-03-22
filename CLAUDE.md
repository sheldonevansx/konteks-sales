# Konteks Kourse - Project Context for Claude Code

## What This Is
Sales funnel for Dan Fouche's (@studwalldan) Konteks Kourse - a paid architecture education community on Skool ($29/mo, $249/yr). Dan is female, an architect educator based in Dubai.

## Project Structure
```
index.html          - Main sales page (copy of option-a-v4.html)
option-a-v4.html    - Sales page source (final version)
checkout.html       - Bridge page between sales page and Stripe (auto-redirects after 2.5s)
thank-you.html      - Post-purchase page with confetti + Purchase pixel
cancel.html         - Cancellation save page with $19/mo discount offer
emails/             - Email templates (HTML versions)
  plain-text-sequences.md  - All 11 email sequences in plain text (the canonical copy)
INTEGRATION-GUIDE.md       - Full integration setup guide
EMAIL-SEQUENCES-GUIDE.md   - Email automation documentation
META-ADS-GUIDE.md          - Step-by-step Meta/Facebook ads setup guide
```

## Design System
- **Font:** Inter (Google Fonts) - 800 weight headlines, 400 body
- **Accent color:** #D4762C (burnt orange), hover: #B8631F
- **Body text:** #333333, 16-18px body, 40-56px headlines
- **Alt section bg:** #F7F7F7
- **Card border:** rgba(227, 227, 229, 0.5), 12px border-radius
- **Muted text:** #9296A4
- **Buttons:** White text on orange, min 48px height, pill shape
- **All files self-contained** (no external deps except Google Fonts + Meta Pixel)
- **Mobile-first responsive** (375px minimum)

## URLs & Links
- **Sales page:** https://kourse.konteks.co (custom domain on Cloudflare Pages)
- **Cloudflare domain:** konteks-sales.biz-0de.workers.dev
- **Skool community:** https://www.skool.com/architecture
- **Skool with UTMs:** https://www.skool.com/architecture?utm_source=landing&utm_medium=web&utm_campaign=konteks
- **Root domain:** konteks.co (Squarespace - NEVER move this)
- **Success URL:** https://kourse.konteks.co/thank-you.html

## Stripe
- **Entity:** SEVANS IT Services (Shel's Dubai business - Dan can't create Stripe in her country)
- **Monthly Payment Link:** https://buy.stripe.com/5kQ5kDeQCgmPcILfa45Rm00
- **Annual Payment Link:** https://buy.stripe.com/3cI28r9wic6zdMP0fa5Rm01
- **Pricing:** $29/month, $249/year ($20.75/mo), win-back: $19/mo for 1 month
- **Note:** Payment Links can't be edited after creation. New ones needed with success URL pointing to kourse.konteks.co/thank-you.html

## ActiveCampaign (Email Marketing)
- **Account:** konteks.activehosted.com
- **API base:** https://konteks.activehosted.com/api/3/
- **API credentials:** macOS Keychain (service: activecampaign-url / activecampaign-key, account: konteks). Retrieve with: `security find-generic-password -a konteks -s activecampaign-url -w` and `security find-generic-password -a konteks -s activecampaign-key -w`
- **Login email:** info@konteks.co (has 2FA)
- **From:** Dan - info@konteks.co
- **List:** "Konteks Kourse Subscribers" (ID: 4)
- **Tags:** onboarding (1), payment-failed (2), cancelled (3), win-back (4)

### Automation Status
- **Onboarding (ID:1) - COMPLETE AND ACTIVE**
  - Trigger: Tag "onboarding" added
  - Email 1 "you're in" → Wait 2d → Email 2 "try this before your next crit" → Wait 3d → Email 3 "the chapter students say saves them 10 hours a week" → Wait 3d → Email 4 "quick question"
  - Campaign IDs: 1, 5, 7, 9 | Message IDs: 16, 18, 19, 20

- **Dunning - NOT BUILT** (trigger: tag "payment-failed")
  - Email 1: "your payment didn't go through" → Wait 3d → Email 2: "still can't process your payment" → Wait 4d → Email 3: "your access gets removed tomorrow"

- **Win-back - NOT BUILT** (trigger: tag "cancelled")
  - Wait 1d → Email 1: "no hard feelings" → Wait 6d → Email 2: "$19/mo if you come back" → Wait 7d → Email 3: "what you missed this week"

- **Retention - NOT BUILT** (trigger: tag "annual-renewal")
  - Email 1: "your annual plan renews in 30 days"

All email copy is in `emails/plain-text-sequences.md`.

## Zapier Integrations (already set up)
1. Stripe New Subscription → Skool Invite Member
2. Stripe Canceled Subscription → Email notification to Shel

## Meta Pixel
- Base code is in all pages with placeholder `PIXEL_ID_HERE`
- ViewContent fires on CTA clicks
- InitiateCheckout fires on checkout.html
- Purchase fires on thank-you.html
- Need actual Pixel ID from Dan

## Remaining Placeholders
- `PIXEL_ID_HERE` - Meta Pixel ID
- `STRIPE_DISCOUNT_LINK_HERE` - $19/mo win-back payment link
- `STRIPE_PORTAL_URL_HERE` - Stripe Customer Portal URL
- `[UPDATE_PAYMENT_LINK]` - Link for updating payment method
- `[DISCOUNT_LINK]` - Win-back discount link in emails
- `[MANAGE_SUBSCRIPTION_LINK]` - Subscription management
- `[RENEWAL_DATE]` - Dynamic renewal date

## Konteks Kourse Chapters
1. "So... Architecture"
2. "The Top Student Mindset"
3. "Crits, Deadlines & Timing"
4. "From 'Brief' to Concept"
5. "A Site Analysis & Urban Design"
- Plus: Konteks Kalendar (access code: konteks67)

## Git
- **Primary remote:** sheldonevansx/konteks-sales
- **Collaborator:** Gamblegrift (Jinx's GitHub)
- Always push to both remotes: `git push origin main && git push gamblegrift main`

## Rules
- No em-dashes - use hyphens
- No AI slop words (crucial/delve/landscape/pivotal/showcase/tapestry/vibrant/comprehensive/cutting-edge/game-changing/unlock/unleash/empower/supercharge/leverage/utilize)
- Plain text emails only (no HTML design) - higher conversion per Walshymails
- All Skool links must include UTM params
- Sales page as intermediary - never send ad traffic directly to Skool
- konteks.co root domain stays on Squarespace
- Dan's GSuite email on konteks.co must not be disrupted
- Architecture students only (NOT general audience - that's future phase)
- Single self-contained HTML files, no navigation menu
- CTA buttons min 48px height; mobile-first (375px)

## Remaining Tasks (Priority Order)
1. Build 3 remaining AC automations (Dunning, Win-back, Retention) via browser UI
2. Fix Cloudflare Pages custom domain (kourse.konteks.co HTTPS not working)
3. Create new Stripe Payment Links with success URL https://kourse.konteks.co/thank-you.html
4. Update checkout.html with new payment links
5. Create Stripe coupon ($19/mo, 34% off, 1 month) for win-back
6. Enable Stripe Customer Portal
7. Get Meta Pixel ID from Dan
8. Replace all remaining placeholders
9. Connect Stripe to ActiveCampaign (Settings → Integrations)
10. Test full funnel end-to-end
11. Community gamification strategy
12. Dan film 3-4 talking-head ad videos
13. Set up Meta Business Suite + Ad Account + custom conversions
