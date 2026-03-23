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
- **Accent color:** #E86A1C (burnt orange), hover: #C85A16
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
- **Root domain:** konteks.co (Squarespace site, DNS on Cloudflare - NEVER touch the Squarespace site)
- **Success URL:** https://kourse.konteks.co/thank-you.html

## Stripe
- **Entity:** SEVANS IT Services (Shel's Dubai business - Dan can't create Stripe in her country)
- **Product ID:** prod_UBPrqteCKB9sFO (Konteks Kourse)
- **Monthly Payment Link:** https://buy.stripe.com/cNi7sLfUG9YrcIL4vq5Rm02 (with success URL)
- **Annual Payment Link:** https://buy.stripe.com/fZubJ1bEq3A3fUX2ni5Rm03 (with success URL)
- **Old Monthly Link (no success URL):** https://buy.stripe.com/5kQ5kDeQCgmPcILfa45Rm00
- **Old Annual Link (no success URL):** https://buy.stripe.com/3cI28r9wic6zdMP0fa5Rm01
- **Pricing:** $29/month, $249/year ($20.75/mo), win-back: $19/mo for 1 month
- **Success URL:** https://kourse.konteks.co/thank-you.html (configured in new payment links)

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

## Zapier Integrations (all set up and live)
1. **Monthly Zap:** Stripe New Subscription → Filter by prod_UBPrqteCKB9sFO → Skool Invite Member → AC Create/Update Contact → AC Add Tag "onboarding"
2. **Annual Zap:** Stripe New Subscription → Filter by prod_UBPrqteCKB9sFO → Skool Invite Member → AC Create/Update Contact → AC Add Tag "onboarding"
3. Stripe Canceled Subscription → Email notification to Shel

## Meta Pixel
- **Pixel ID:** 962791462941600 (Dataset: "Konteks Kourse", owned by Shel)
- Base code installed in all HTML pages
- ViewContent fires on CTA clicks
- InitiateCheckout fires on checkout.html
- Purchase fires on thank-you.html

## Remaining Placeholders
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

## Security
- NEVER store credentials as plain text files. Use macOS Keychain: `security add-generic-password -a <account> -s <service> -w <value>`
- NEVER output secrets/tokens/keys in chat or terminal output
- Read credentials inline in scripts: `$(security find-generic-password -a konteks -s activecampaign-key -w)`
- Pre-commit hook is installed to block commits containing secrets

## Rules
- No em-dashes - use hyphens
- No AI slop words (crucial/delve/landscape/pivotal/showcase/tapestry/vibrant/comprehensive/cutting-edge/game-changing/unlock/unleash/empower/supercharge/leverage/utilize)
- Plain text emails only (no HTML design) - higher conversion per Walshymails
- All Skool links must include UTM params
- Sales page as intermediary - never send ad traffic directly to Skool
- konteks.co root site stays on Squarespace (DNS is on Cloudflare)
- Dan's GSuite email on konteks.co must not be disrupted
- Architecture students only (NOT general audience - that's future phase)
- Single self-contained HTML files, no navigation menu
- CTA buttons min 48px height; mobile-first (375px)

## Completed
- [x] Sales page live at kourse.konteks.co (index.html)
- [x] Checkout bridge page with auto-redirect to Stripe (checkout.html)
- [x] Thank-you page with confetti + Purchase pixel (thank-you.html)
- [x] Cancel/save page with $19/mo discount offer (cancel.html)
- [x] DNS migrated from Namecheap to Cloudflare - kourse.konteks.co SSL working
- [x] New Stripe Payment Links created with success URL (both monthly + annual)
- [x] checkout.html updated with new Stripe payment links
- [x] Accent color updated to #E86A1C across all pages
- [x] Meta Pixel ID (962791462941600) installed in all HTML pages
- [x] AC Onboarding automation built and active (4 emails, tag-triggered)
- [x] Zapier: Stripe → product filter → Skool invite → AC contact + "onboarding" tag (2 Zaps: monthly + annual)
- [x] All 11 email sequences written (emails/plain-text-sequences.md)
- [x] Meta Pixel base code + events (ViewContent, InitiateCheckout, Purchase)

## Remaining Tasks (Priority Order)
1. Test full funnel end-to-end (make a test purchase, verify Zapier fires, AC tags, Skool invite, pixel events)
2. Create Meta Ad Account (needed for Events Manager access and running ads)
3. Set up Meta custom conversions for pixel events
4. Build AC Dunning automation (trigger: tag "payment-failed") - post-launch
5. Build AC Win-back automation (trigger: tag "cancelled") - post-launch
6. Build AC Retention automation (trigger: tag "annual-renewal") - post-launch
7. Create Stripe coupon ($19/mo, 34% off, 1 month) for win-back
8. Enable Stripe Customer Portal
9. Replace remaining placeholders (STRIPE_DISCOUNT_LINK_HERE, STRIPE_PORTAL_URL_HERE, etc.)
10. Build retargeting sequence for people who don't complete Skool purchase
11. Dan film 3-4 talking-head ad videos
12. Community gamification strategy
