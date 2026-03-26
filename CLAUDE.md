# Konteks Kourse - Project Context for Claude Code

## What This Is
Sales funnel for Dan Fouche's (@studwalldan) Konteks Kourse - a paid architecture education community on Skool ($29/mo, $249/yr, 7-day free trial). Dan is female, an architect educator based in Dubai.

## Project Structure
```
index.html          - Main sales page (center-aligned hero, video, avatars, scarcity)
checkout.html       - Plan selector (trial/monthly/annual) with manual Stripe redirect
thank-you.html      - Post-purchase page with confetti + Purchase pixel
cancel.html         - Cancellation save page with $19/mo discount offer
exit-popup.js       - Exit intent popup (loaded by index.html)
emails/             - Email templates (HTML versions)
  plain-text-sequences.md  - All 11 email sequences in plain text (canonical copy)
videos/
  skool-walkthrough-web.mp4  - 3.2MB autoplay hero video (19s, 720p)
images/
  dan-profile.jpg    - Dan's profile photo (used in hero + checkout)
  members/           - 20 student avatar thumbnails
skills/              - 4 operational skills (funnel-audit, email-writer, deploy, ac-manager)
```

## Design System
- **Font:** Inter (Google Fonts) - 800 weight headlines, 400 body
- **Accent color:** #E86A1C (burnt orange), hover: #C85A16
- **Eyebrow color:** #E86A1C (orange, uppercase)
- **Body text:** #333333, 16-18px body, 40-56px headlines (56px desktop)
- **Alt section bg:** #F7F7F7
- **Card border:** rgba(227, 227, 229, 0.5), 12px border-radius
- **Muted text:** #9296A4
- **Buttons:** White text on orange, min 48px height, pill shape
- **All files self-contained** (no external deps except Google Fonts + Meta Pixel)
- **Mobile-first responsive** (375px minimum)

## URLs & Links
- **Sales page:** https://kourse.konteks.co (Cloudflare Pages, auto-deploys from GitHub)
- **Skool community:** https://www.skool.com/architecture
- **Skool with UTMs:** https://www.skool.com/architecture?utm_source=landing&utm_medium=web&utm_campaign=konteks
- **Root domain:** konteks.co (Squarespace site, DNS on Cloudflare - NEVER touch)
- **Success URL:** https://kourse.konteks.co/thank-you.html

## Stripe
- **Entity:** SEVANS IT Services (Shel's Dubai business)
- **Product ID:** prod_UBPrqteCKB9sFO (Konteks Kourse)
- **Trial Link (7-day free):** https://buy.stripe.com/9B68wP37U6Mf9wzfa45Rm05
- **Monthly Link ($29/mo):** https://buy.stripe.com/cNi7sLfUG9YrcIL4vq5Rm02
- **Annual Link ($249/yr):** https://buy.stripe.com/fZubJ1bEq3A3fUX2ni5Rm03
- **Monthly Price ID:** price_1TFFdQI75rl019DGYrCiN9hM
- **Annual Price ID:** price_1TD31pI75rl019DGMwfQPj70
- **Pricing:** 7-day free trial (then $29/mo), $29/month, $249/year ($20.75/mo)
- **Guarantee:** 30-day money-back
- **Success URL configured** in all payment links

## ActiveCampaign (Email Marketing)
- **Account:** konteks.activehosted.com
- **API base:** https://konteks.activehosted.com/api/3/
- **API credentials:** macOS Keychain (service: activecampaign-url / activecampaign-key, account: konteks)
- **Login email:** info@konteks.co (has 2FA)
- **From:** Dan - info@konteks.co
- **List:** "Konteks Kourse Subscribers" (ID: 4)
- **Tags:** onboarding (1), payment-failed (2), cancelled (3), win-back (4)

### Automation Status
- **Onboarding (ID:1) - COMPLETE AND ACTIVE**
  - Trigger: Tag "onboarding" added
  - 4 emails over ~8 days
  - Campaign IDs: 1, 5, 7, 9 | Message IDs: 16, 18, 19, 20

- **Dunning - NOT BUILT** (trigger: tag "payment-failed")
- **Win-back - NOT BUILT** (trigger: tag "cancelled")
- **Retention - NOT BUILT** (trigger: tag "annual-renewal")

All email copy is in `emails/plain-text-sequences.md`.

## Zapier Integrations (live)
1. **Monthly Zap:** Stripe New Sub → Filter prod_UBPrqteCKB9sFO → Skool Invite → AC Contact + "onboarding" tag
2. **Annual Zap:** Same flow as monthly
3. Stripe Canceled Sub → Email notification to Shel

## Meta Pixel
- **Pixel ID:** 26300556566305220 (active, receiving events)
- **Old Pixel ID:** 962791462941600 (retired - do NOT use)
- ViewContent fires on CTA clicks
- InitiateCheckout fires on checkout.html load
- Purchase fires on thank-you.html

## Meta Ads
- **Ad Account:** Konteks (ID: 1252541203714869)
- **Business Portfolio:** Shel's (ID: 1295600739116155)
- **Campaign:** CBO at $80/day, live since March 24, 2026
- **Status:** Getting InitiateCheckout events, zero purchases as of March 26

## Remaining Placeholders
- `STRIPE_DISCOUNT_LINK_HERE` - $19/mo win-back payment link
- `STRIPE_PORTAL_URL_HERE` - Stripe Customer Portal URL
- `[UPDATE_PAYMENT_LINK]` - Link for updating payment method
- `[DISCOUNT_LINK]` - Win-back discount link in emails
- `[MANAGE_SUBSCRIPTION_LINK]` - Subscription management

## Git
- **Primary remote (origin):** sheldonevansx/konteks-sales (Cloudflare deploys from this)
- **Secondary remote (gamblegrift):** Gamblegrift/konteks-sales (Jinx's GitHub)
- Push to both: `git push origin main && git push gamblegrift main`
- gamblegrift remote may not be configured on all machines

## Security
- NEVER store credentials as plain text files. Use macOS Keychain.
- NEVER output secrets/tokens/keys in chat or terminal output
- Pre-commit hook blocks commits containing secrets

## Rules
- No em-dashes - use hyphens
- No AI slop words (crucial/delve/landscape/pivotal/showcase/tapestry/vibrant/comprehensive/cutting-edge/game-changing/unlock/unleash/empower/supercharge/leverage/utilize)
- Plain text emails only (no HTML design)
- All Skool links must include UTM params
- Sales page as intermediary - never send ad traffic directly to Skool
- konteks.co root site stays on Squarespace
- Architecture students only (NOT general audience - future phase)
- Single self-contained HTML files, no build tools
- CTA buttons min 48px height; mobile-first (375px)

## Current Landing Page State
- **Headline:** "The fastest way to become a top 1% architecture student without more sleepless nights."
- **Tagline:** Frameworks lecturers use but never teach. 45+ Videos. 5 chapters. etc.
- **Hero CTA:** "Try free for 7 days" (links to checkout.html?plan=trial)
- **Credibility:** Dan's photo + "Built by the architect who won best thesis across engineering, science and architecture"
- **Checkout default:** Free trial selected, with monthly and annual as alternatives
- **Scarcity:** Early access pricing, price increases to $49/mo at 400 members (37 spots left)
- **Social proof:** 20 avatar strip, 363+ students, testimonials

## Remaining Tasks (Priority Order)
1. Kill underperforming ad "Archi Crits Don't Have To Suck" ($14.45/checkout)
2. Build AC Dunning automation (trigger: tag "payment-failed")
3. Build AC Win-back automation (trigger: tag "cancelled")
4. Build AC Retention automation (trigger: tag "annual-renewal")
5. Create Stripe coupon ($19/mo, 34% off, 1 month) for win-back
6. Enable Stripe Customer Portal
7. Replace remaining placeholders
8. Dan film 3-4 talking-head ad videos
9. Community gamification strategy
