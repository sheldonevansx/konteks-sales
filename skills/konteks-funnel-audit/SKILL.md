# Konteks Funnel Audit

**Description:** Audit all Konteks Kourse HTML pages for correctness, consistency, and conversion readiness. Checks Stripe links, Meta Pixel, UTM params, mobile responsiveness, design system compliance, and forbidden words.

**When to use this skill:**
- Before deploying any HTML change to production
- After editing any sales page, checkout, or thank-you page
- When running periodic funnel health checks
- When troubleshooting conversion drop-offs

---

## Audit Checklist

Run every check below against all HTML files in the repo root. Report findings as PASS/FAIL with specific line numbers.

### 1. Stripe Payment Links

Current valid links (with success URL):
- Monthly: `https://buy.stripe.com/cNi7sLfUG9YrcIL4vq5Rm02`
- Annual: `https://buy.stripe.com/fZubJ1bEq3A3fUX2ni5Rm03`

Old links (NO success URL - should NOT appear):
- `https://buy.stripe.com/5kQ5kDeQCgmPcILfa45Rm00`
- `https://buy.stripe.com/3cI28r9wic6zdMP0fa5Rm01`

**Check:** Grep all HTML files for `buy.stripe.com`. Flag any old links. Verify checkout.html has the correct monthly and annual links.

### 2. Meta Pixel

**Correct Pixel ID:** `26300556566305220` (17-digit)
**Old Pixel ID (retired):** `962791462941600` (should NOT appear)

**Check all pages for:**
- Base pixel code present in `<head>`
- Correct pixel ID (26300556566305220)
- No old pixel ID (962791462941600)
- Event tracking:
  - `index.html` / `index-v2.html` / `index-v3.html`: ViewContent on CTA clicks
  - `checkout.html`: InitiateCheckout on page load
  - `thank-you.html`: Purchase on page load
  - `guide.html` / `quiz.html`: Lead event on form submit (if implemented)

### 3. Skool UTM Parameters

Every link to `skool.com/architecture` MUST include:
```
?utm_source=landing&utm_medium=web&utm_campaign=konteks
```

**Check:** Grep all HTML files for `skool.com`. Flag any links missing UTM params.

### 4. Design System Compliance

- **Font:** Inter from Google Fonts (check `<link>` tag present)
- **Accent color:** `#E86A1C` (NOT `#D4762C` which is outdated)
- **Hover color:** `#C85A16`
- **Body text:** `#333333`
- **Card border-radius:** `12px`
- **Button min-height:** `48px`
- **Mobile breakpoint:** Must have `@media` rules for 375px minimum

**Check:** Search for any outdated color values (#D4762C, old accent). Verify Inter font is loaded. Check button heights.

### 5. Forbidden Words (AI Slop)

**Never appear in any HTML file:**
crucial, delve, landscape, pivotal, showcase, tapestry, vibrant, comprehensive, cutting-edge, game-changing, unlock, unleash, empower, supercharge, leverage, utilize

**Also forbidden:**
- Em-dashes (use hyphens)
- "Daniel" (always "Dan")
- "arch school" (always "architecture school")
- "design studio" (always "studio")
- "critique" or "review" (always "crit")
- "$29/month" (always "$29/mo")

### 6. Scarcity Number Consistency

The "spots left" number must be identical across:
- `index.html`
- `index-v2.html` (if present)
- `index-v3.html` (if present)

Current value: **37 spots left** (static, manually updated)

**Check:** Grep for "spots left" across all HTML files. Flag mismatches.

### 7. Remaining Placeholders

These placeholders should be flagged (expected until real values provided):
- `STRIPE_DISCOUNT_LINK_HERE`
- `STRIPE_PORTAL_URL_HERE`
- `[UPDATE_PAYMENT_LINK]`
- `[DISCOUNT_LINK]`
- `[MANAGE_SUBSCRIPTION_LINK]`
- `[RENEWAL_DATE]`
- `PIXEL_ID_HERE` (should NOT exist - pixel is installed)
- `AC_FORM_ID` or similar (guide.html and quiz.html need real form IDs)

### 8. Link Integrity

- No `href="#"` placeholder links in CTAs
- No broken relative paths (check `src=` and `href=` attributes)
- Success URL in checkout redirects: `https://kourse.konteks.co/thank-you.html`
- No links to konteks.co root (that's Squarespace, not ours)

### 9. Mobile Responsiveness

- All pages must have `<meta name="viewport" content="width=device-width, initial-scale=1">`
- No fixed-width elements over 375px
- Images should have `max-width: 100%`
- Touch targets (buttons, links) minimum 48px height

### 10. Security

- No API keys, tokens, or secrets in any HTML file
- No inline credentials
- No references to `~/.activecampaign_key` or similar in client-side code

---

## Running the Audit

Use bash to run all checks:

```bash
# Quick one-liner audit
cd /path/to/konteks-sales

# Check Stripe links
echo "=== STRIPE LINKS ===" && grep -rn "buy.stripe.com" *.html

# Check Pixel ID
echo "=== PIXEL ===" && grep -rn "962791462941600\|26300556566305220" *.html

# Check Skool UTMs
echo "=== SKOOL LINKS ===" && grep -rn "skool.com" *.html | grep -v "utm_source"

# Check forbidden words
echo "=== SLOP CHECK ===" && grep -rni "crucial\|delve\|landscape\|pivotal\|showcase\|tapestry\|vibrant\|comprehensive\|cutting-edge\|game-changing\|unlock\|unleash\|empower\|supercharge\|leverage\|utilize" *.html

# Check em-dashes
echo "=== EM-DASHES ===" && grep -Pn "\x{2014}" *.html

# Check scarcity numbers
echo "=== SCARCITY ===" && grep -rn "spots left" *.html

# Check placeholders
echo "=== PLACEHOLDERS ===" && grep -rn "STRIPE_DISCOUNT_LINK_HERE\|STRIPE_PORTAL_URL_HERE\|UPDATE_PAYMENT_LINK\|DISCOUNT_LINK\|MANAGE_SUBSCRIPTION_LINK\|RENEWAL_DATE\|PIXEL_ID_HERE\|AC_FORM_ID" *.html

# Check outdated colors
echo "=== COLOR CHECK ===" && grep -rni "D4762C" *.html
```

## Output Format

Report as:

```
FUNNEL AUDIT - [date]
=====================
PASS: [check name]
FAIL: [check name] - [file:line] - [what's wrong]
WARN: [check name] - [description]
=====================
Score: X/10 checks passed
Action required: [list specific fixes needed]
```
