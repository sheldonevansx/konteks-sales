# Meta Ads Mastery (2026)

**Description:** Comprehensive reference for Meta/Facebook advertising in 2026. Use when planning, optimizing, or troubleshooting Meta ad campaigns.

**When to use this skill:**
- Setting up new Meta ad campaigns
- Optimizing existing campaigns
- Troubleshooting performance issues
- Answering questions about Meta ads strategy
- Building course/education product funnels on Meta

**Last updated:** March 23, 2026  
**Sources:** Cross-referenced from Meta practitioners, Reddit r/FacebookAds, Medium (Gabe Solberg, Marcin Pilarczyk, Core Brief), WordStream, AdEspresso

---

## Quick Reference: 2026 Meta Ads in 30 Seconds

**What changed:** Project Andromeda + Meta Lattice = Creative IS your targeting, not interest stacking.

**Campaign structure:** 3 campaigns (Prospecting, Remarketing, Scale), CBO default, broad targeting.

**Minimum viable budget:** $50-100/day to exit learning phase (need ~50 conversions/week).

**Creative rule:** Theme-based testing with visual diversity. 5-8 new ads/week minimum.

**Tracking:** Pixel + CAPI required. Default attribution: 7-day click, 1-day view.

**Biggest mistake:** Over-complicated account structures with interest stacking (pre-2024 thinking).

---

## Decision Trees

### Should I Use Broad or Manual Targeting?

```
START → Budget per campaign?
   ├─ <$50/day → Manual targeting (narrow) OR wait until higher budget
   ├─ $50-100/day → TEST BOTH (50/50 split)
   └─ >$100/day → Start with Advantage+ Broad
      ├─ Highly niche product (<100K TAM)? → Manual may win, test both
      ├─ Course/education <$100? → Broad likely wins
      ├─ High-ticket B2B >$5K? → Manual + narrow likely wins
      └─ E-commerce? → Broad wins 80% of time
```

### CBO vs ABO?

```
START → Use case?
   ├─ Prospecting / Testing → CBO (always)
   ├─ Retargeting with strict budget caps → ABO
   ├─ Scaling proven winners → CBO
   ├─ Small budget <$50/day → ABO (for exact control)
   └─ Default recommendation → CBO (Meta's preference)
```

### What Campaign Objective?

```
START → What's your goal?
   ├─ Sales (purchase, checkout) → Sales objective
   ├─ Lead generation (form fills) → Leads objective
   ├─ Driving traffic to content → Traffic objective
   ├─ Growing Instagram/FB profile → Engagement objective (new 2026 goal: Profile Visits)
   ├─ Brand awareness → Awareness objective
   └─ App installs → App Promotion objective
```

### When to Kill an Ad?

```
START → Check metrics after $50-100 spend:
   ├─ CTR <0.5%? → KILL (not resonating)
   ├─ CPA >2x target? → KILL (too expensive)
   ├─ Frequency >5 AND CPA rising? → KILL (fatigued)
   ├─ ROAS <1.5x after 3x AOV spend? → KILL (not profitable)
   └─ All metrics within range? → KEEP and monitor
```

### How to Scale?

```
START → Current performance?
   ├─ In learning phase → Can increase budget 30-50% (already learning)
   ├─ Exited learning, stable CPA → Vertical scaling (20% increases every 2-3 days)
   │  ├─ CPA rising >20%? → PAUSE increases, add new creatives
   │  └─ CPA stable? → Continue 20% increases
   ├─ Frequency >4, CPMs spiking → Horizontal scaling (new audiences)
   └─ Campaign maxed (budget >$1K/day, efficiency dropping) → Duplicate campaign (risky) OR refresh creative
```

---

## Campaign Setup Checklist (2026 Best Practice)

### Prospecting Campaign

**Objective:** Find new winning creatives  
**Structure:** 1 campaign, 1-2 ad sets, 5-8 ads per week  
**Budget:** $30-50/day starting (or 70-80% of total budget)  
**Targeting:** Broad (location + age/gender only, no interests)  
**Creative:** Test different themes/angles, visual diversity  
**Optimization:** Cost per Result (Purchase, Lead, or InitiateCheckout)  
**Kill criteria:** <0.5% CTR or >2x target CPA after $50 spend

### Remarketing Campaign

**Objective:** Convert warm traffic  
**Structure:** 1 campaign, 2-4 ad sets (hot/warm/cool), 3-5 ads per set  
**Budget:** ~20% of total daily spend  
**Audiences:**
- Hot: Cart abandoners, checkout initiators (0-7 days)
- Warm: Site visitors, video viewers 50%+ (7-30 days)
- Cool: Social engagers, old visitors (30-90 days)  
**Creative:** Trust signals (testimonials, UGC, objection handling)  
**Frequency:** 3-5 is normal; >7 = refresh creative

### Scale Campaign

**Objective:** Pour budget into proven winners  
**Structure:** 1 campaign, 1 ad set, winning ads only  
**Budget:** $100-200/day starting, increase 5-10% daily if stable  
**Targeting:** Same as prospecting (broad)  
**Creative:** ONLY validated winners from Prospecting (no experiments)  
**Bidding:** Consider manual bid caps for margin protection  
**Rule:** If a winner fades, replace with new winner from Prospecting

---

## Targeting Reference (2026)

### Custom Audiences - Types & Specs

| Type | Minimum Size | Retention Windows | Notes |
|------|--------------|-------------------|-------|
| Website traffic | ~100 (rec 1,000+) | 30, 60, 90, 180 days | Requires Pixel + CAPI |
| Customer list | 100 (rec 1,000+) | N/A (manual refresh) | Match rate 30-60% in 2026 |
| App activity | ~100 | 30, 60, 90, 180 days | Requires SDK |
| Video viewers | ~100 | 1, 7, 14, 30, 60, 90, 180, 365 days | Can target specific videos |
| Instagram engagement | ~100 | 7, 14, 30, 60, 90, 180, 365 days | Per-post or account-level |
| Facebook Page engagement | ~100 | 30, 60, 90, 180, 365 days | Any interaction type |
| Lead forms | ~100 | 30, 60, 90 days | Opened, submitted, etc. |
| Shopping/Catalog | 100 viewers | 30, 60, 90 days | Dynamic product ads |

**2026 best practice:** Use 30-90 day windows for conversion campaigns (recency matters more post-Andromeda).

### Lookalike Audiences (2026 Status: Still Work)

**Minimum source size:**  
- Technical minimum: 100 people  
- Recommended: 1,000+ for quality  
- Small countries: 300-500 can work

**Percentage ranges:** 1-10% (stick to 1-3% for quality)

**Best sources for courses/education:**
1. Video viewers 95% completion (educational content)
2. Lead form completers
3. Webinar attendees
4. Purchasers (if 1,000+ available)
5. Engaged email subscribers

**Reality check:** Advantage+ broad targeting outperforms lookalikes 60% of the time in 2026. Test both.

### Advantage+ Audience (2026 Default)

**What it is:** AI expands beyond your targeting when it predicts better conversions.

**When to use:**
- Budget >$50/day per campaign
- Course/education products <$100
- E-commerce with proven offers
- You trust the algorithm

**When to avoid:**
- Very niche products (<100K total addressable market)
- High-ticket B2B (>$5K)
- Budget <$30/day (not enough data to learn)

**New feature (March 2026):** "Describe Your Audience" text box (up to 2,000 characters)
- Example: "Women 25-45 who value sustainable fashion, follow eco-conscious living accounts, shop online for handmade products"
- Outperforms manual interest stacking in most tests

---

## Creative Strategy (2026)

### The Golden Rule

**"Your Creative IS Your Targeting"**

Why: Project Andromeda scans your image/video, identifies objects ("nouns"), and matches to users who engage with those objects.

**Implication:** Generic stock photos fail. Use semantic visuals that signal your niche.

**Audit test:** Remove all text. Can a stranger identify your sub-niche? If no, creative is failing.

### Video vs Static Performance (2026)

**Video (dominant):**
- 60-70% of ad spend
- Ideal length: 15-30 seconds
- Hook window: First 3 seconds critical
- UGC-style > polished brand videos (3:1 performance)
- Include trending audio (boosts delivery)

**Static:**
- Shelf life: 7-21 days (vs 14-30 for video)
- Best for: Retargeting, testimonials, infographics
- Text on image: No penalty, but <20% text performs better

**Carousel:**
- Lower CTR (10-20%) than single-image or video
- Best for: Product catalogs, multi-benefit storytelling

### Video Specs (2026)

| Placement | Ideal Length | Aspect Ratio | Dimensions |
|-----------|--------------|--------------|------------|
| Feed | 15-30s | 1:1 or 4:5 | 1080x1080 or 1080x1350 |
| Reels | 15-60s | 9:16 | 1080x1920 |
| Stories | 5-15s | 9:16 | 1080x1920 |
| In-stream | 10-30s | 16:9 | 1920x1080 |

**2026 trend:** Vertical (9:16) taking over - 70% of impressions are mobile, Reels growing 40% YoY.

### Theme-Based Creative Testing (2026 Method)

**OLD (pre-2024):** Test 10 random creative concepts simultaneously  
**NEW (2026):** Test ONE theme with visual diversity

**Process:**
1. **Research phase:** Define Who/What/Why (use ChatGPT "deep research")
2. **Angle creation:** Pick 1 angle (e.g., "painpoint-based")
3. **Concept mapping:** Create 5-8 visual executions of SAME angle
   - Example: A1-C1, A1-C2, A1-C3 (same angle, different concepts)
   - Concepts: UGC, stock video, static, testimonial, before/after
4. **Launch:** 5-8 ads in Prospecting campaign
5. **Identify winners:** Meta's algo picks favorites within 24-48 hours
6. **Remix winners:** Create more variations of winning theme

**Creative volume by budget:**
- $50/day: 5-10 new ads/week
- $100-500/day: 10-20 new ads/week
- $500+/day: 15-30 new ads/week

### Creative Fatigue Signals (2026)

**When to refresh:**
- CPM rising >20% week-over-week
- CTR dropping >15%
- Frequency >3.5 (prospecting) or >7 (retargeting)
- CPA spiking >30% above baseline

**Shelf life (2026 averages):**
- Statics: 7-21 days
- UGC video: 14-30 days
- Polished video: 10-25 days
- **Outliers exist:** Some ads run for months, some die in 5 days

**Refresh strategy:** Always have next winner ready before current winner dies.

### UGC vs Branded (2026 Reality)

**UGC:**
- 60-80% of top performers
- Lower ad resistance, higher trust
- Cost: $50-300 per creator (Fiverr/Upwork)
- Formats: iPhone selfie videos, testimonials, "I tried this..." hooks

**Branded:**
- 20-40% worse CPA in direct-response tests
- Use for: Brand awareness, premium positioning, luxury goods

**Winner:** UGC for performance, branded for credibility.

---

## Bidding & Budget (2026)

### Bid Strategies

**Lowest Cost (default):**
- Meta spends budget to get most conversions, no CPA/ROAS target
- Use for: New campaigns, testing, you trust algo (80% of campaigns)

**Cost Cap:**
- Set target CPA (e.g., "keep cost per purchase under $50")
- Use for: You know breakeven CPA, want margin protection
- Pitfall: Set too low → no delivery

**Bid Cap (Manual):**
- Set MAXIMUM bid Meta can place in auction
- Use for: Scaling aggressively, competitive niches, validated creatives
- Setup: Bid 5-15% below current CPR, budget = 10-20x bid

**ROAS Target:**
- Example: "I want 3x ROAS"
- Use for: Mature e-commerce with consistent AOV
- Minimum: 50+ purchases/week

### Budget Rules (2026)

**Daily vs Lifetime:**
- Daily: Can exceed by 100% on any day, but won't exceed 30.4x daily budget per month
- Lifetime: Must set end date; can exceed 25% on peak days

**20% Rule (still valid):**
- Don't increase budget >20% per day to avoid learning phase reset
- Exception: Already in learning phase (nothing to reset)

**Minimum budgets:**
- Awareness: $20+/day
- Traffic: $30+/day
- Leads: $50+/day
- Sales: $75+/day
- Advantage+ Shopping: $150+/day

**Reality:** $50-100/day is sweet spot for courses/education products.

---

## Learning Phase & Optimization (2026)

### How Learning Phase Works

**Trigger:** Starts/restarts when:
- New campaign/ad set launches
- Edit targeting, creative, budget (>20% change), or optimization event
- Ad spend pauses for 7+ days

**Required:** ~50 conversions per ad set within 7 days to exit

**Duration:** 3-7 days if getting consistent conversions

**What breaks it:**
- Budget change >20% in 24h
- Ad creative swap
- Targeting change
- Pausing >7 days

**MYTH BUSTED (2026):** Turning ads on/off does NOT reset learning if campaign stays active.

### Optimization Events (Choose Wisely)

**Standard Events (in order of value):**
1. **Purchase** (highest value, use if 50+ purchases/week)
2. **InitiateCheckout** (use if <50 purchases/week)
3. **AddToCart** (use if <50 checkouts/week)
4. **ViewContent** (use if <50 add-to-carts/week)
5. **Lead** (form submission)
6. **CompleteRegistration** (account creation)

**Rule:** Optimize for the event closest to revenue that gets 50+ conversions/week.

**Example:** If you get 20 purchases/week but 100 checkouts/week, optimize for InitiateCheckout (more data for algo to learn from).

---

## Tracking & Attribution (2026)

### Pixel + CAPI (Both Required)

**Why both:**
- Pixel = browser-based tracking (40-60% of iOS users opt out)
- CAPI = server-side tracking (recovers 20-40% of lost conversions)
- Combined = 30-50% better performance

**Setup:**
- Pixel: Copy-paste code in `<head>` or use partner integration (Shopify, WordPress)
- CAPI: Use platform native integration OR Meta Conversions API Gateway

**Event deduplication:** Use same `event_id` for Pixel and CAPI to avoid double-counting.

**2026 requirement:** CAPI is "optional" but practitioners report 30-50% better results with it.

### Attribution Windows (2026)

**Default:** 7-day click, 1-day view

**What this means:**
- Click ad → convert within 7 days = attributed
- View ad (no click) → convert within 1 day = attributed

**Why Meta ≠ Google Analytics:**
- Meta includes view-throughs, GA4 doesn't
- Meta uses 7-day click, GA4 uses "last non-direct click"
- Expect 20-40% discrepancy (normal)

**Which to trust:** Meta for optimization, your payment processor (Stripe, Shopify) for revenue.

---

## Education/Course Funnels (2026)

### Best Funnels for <$50/mo Products

**Option 1: Lead magnet → email nurture → sale (most common)**
- Lead cost: $1-5
- Lead-to-sale: 5-15%
- Timeline: 30-60 days to ROI
- Best for: Evergreen courses, memberships

**Option 2: Video ad → "bridge page" → checkout (fastest)**
- Bridge page = landing page with CTA button before checkout
- Pixel event on button = "InitiateCheckout"
- Filters low-intent traffic (improves CPA by 20-40%)
- Timeline: 7-14 days to ROI
- Best for: Impulse-buy courses, skill training

**Option 3: Quiz → segmented email → tailored offer (highest conversion)**
- Quiz completion: 40-60%
- Email opt-in: 60-80% (to see results)
- Quiz-lead-to-sale: 10-20%
- Timeline: 30-45 days to ROI
- Best for: Personality-based, niche-specific courses

**AVOID for <$50/mo:**
- Webinar funnels (too much friction)
- Free trials (attracts tire-kickers)
- Long-form VSLs (outdated)

### Subscription Products ($29/mo Example)

**Free trial vs direct sale:**

**Free trial:**
- Higher front-end conversion (easier yes)
- Lower trial-to-paid (20-40%)
- Credit card friction
- Best if: Trial-to-paid >30%

**Direct sale:**
- Higher upfront CPA
- Higher-quality buyers (committed)
- Simpler funnel
- Best if: Established brand, proven offer

**2026 trend:** Free trials declining; lead magnet → nurture → direct sale growing.

### Webinar Funnels (2026 Status: Still Work)

**Types:**
1. **Live** - Real-time interaction, 30-50% show-up, best for high-ticket (>$500)
2. **On-demand** - Watch anytime, lower urgency, best for evergreen (<$300)

**Costs (Meta ads):**
- $5-15 per registration
- 30-50% show-up rate
- 5-15% attendee-to-sale

**Calculator:** $10/reg × 40% show × 10% conversion = $250 CPA

---

## Troubleshooting Guide

### "My ads aren't spending"

**Check:**
1. Bid cap set too low? (raise by 20%)
2. Audience too narrow? (<1,000 people)
3. Budget too low? (increase to 10-20x your bid)
4. Learning phase? (wait 3-7 days)
5. Ad disapproved? (check Ad Review status)

### "CPA is too high"

**Diagnose:**
1. **High CPM (>$30)?** → Auction is competitive, test new placements or broader targeting
2. **Low CTR (<0.5%)?** → Creative not resonating, kill and test new angles
3. **High CPC (>$3)?** → Creative or offer doesn't match audience expectation
4. **Low conversion rate?** → Landing page issue or offer/price mismatch

**Fix priority:**
1. Creative first (90% of the time it's the ad)
2. Landing page second (ensure fast load, clear CTA)
3. Targeting third (test broad vs narrow)

### "ROAS dropped suddenly"

**Check:**
1. **Frequency spiked?** → Ad fatigue, refresh creative
2. **Placement shifted?** → Check breakdown, see if Audience Network eating budget
3. **Competitor launched?** → CPMs rising, consider manual bid caps
4. **Pixel broke?** → Test Events tool in Events Manager
5. **Seasonal?** → Compare to last year same period

### "Stuck in learning phase"

**Cause:** Not getting 50 conversions/week per ad set.

**Solutions:**
1. Optimize for more frequent event (Purchase → InitiateCheckout → AddToCart)
2. Increase budget (get to 50 conversions faster)
3. Consolidate ad sets (merge audiences into one)
4. Wait it out (sometimes takes 2-3 weeks)

**2026 reality:** Learning phase resets happen. Algo recovers. Don't panic.

---

## Benchmarks (2026 US Market - Rough Guidelines)

**IMPORTANT:** Creative quality matters 10x more than vertical. Track YOUR baseline.

| Metric | Education/Courses | E-commerce | B2B SaaS |
|--------|------------------|------------|----------|
| **CTR** | 1.5-3% | 1-2% | 0.5-1.5% |
| **CPC** | $0.50-$2 | $0.30-$1.50 | $1-$4 |
| **CPM** | $10-$25 | $8-$20 | $15-$40 |
| **CPA** | $30-$150 | $20-$80 | $100-$500+ |
| **ROAS** | 3x+ sustainable | 3x+ sustainable | 5x+ sustainable |
| **Frequency** | 1-2 (prospecting) | 1-2 (prospecting) | 1-2 (prospecting) |
|  | 3-5 (retargeting) | 3-5 (retargeting) | 3-5 (retargeting) |

**What matters:** Improve against your own baseline, not industry averages.

---

## Common Mistakes (2026)

### Pre-2024 Thinking (OUTDATED)

1. ❌ **Interest stacking** → ✅ Broad targeting (Advantage+)
2. ❌ **Lookalikes required** → ✅ Test broad vs lookalikes (broad wins 60%)
3. ❌ **Separate campaign per audience** → ✅ Consolidated (1 Prospecting, 1 Retargeting, 1 Scale)
4. ❌ **ABO for control** → ✅ CBO default (algo optimizes better)
5. ❌ **20% text rule** → ✅ No penalty (but <20% still performs better)
6. ❌ **Pixel alone** → ✅ Pixel + CAPI required

### Current Mistakes (2026)

1. **Killing ads too fast** - Give $50-100 to prove themselves
2. **Not refreshing creative** - Fatigue kills campaigns in 7-21 days
3. **Over-complicated structure** - Simplicity wins (3 campaigns max)
4. **Optimizing for wrong event** - Choose event with 50+ conversions/week
5. **Ignoring frequency** - >5 = fatigued (refresh creative)
6. **Trust GA4 over Meta** - Use Meta numbers for optimization
7. **Manual interest targeting in 2026** - Deprecated, broad wins

---

## Key Frameworks (Copy-Paste)

### Copywriting Formula (Video Scripts)

```
(Scroll-stopping hook)
+ (Pain/Frustration)
+ (Flip belief + give relief)
+ (Introduce mechanism/process)
+ (Drop proof/case study)
+ (Direct CTA)
```

### Headline Formula

```
[Pain/Frustration] + [Big Promise/Relief] + [Hint of Speed/Simplicity]
```

**Example:** "Struggling to get architecture students to enroll? Learn the 3-step system that fills courses in 30 days."

### 3-Campaign Structure (2026 Standard)

```
PROSPECTING
- Goal: Find new winning creatives
- Budget: 70-80% of total spend
- Targeting: Broad (Advantage+)
- Creative: 5-8 new ads/week

RETARGETING
- Goal: Convert warm traffic
- Budget: 20% of total spend
- Audiences: Hot (0-7d), Warm (7-30d), Cool (30-90d)
- Creative: Trust signals, objection handling

SCALE
- Goal: Amplify proven winners
- Budget: Start $100-200/day, increase 5-10% daily
- Targeting: Same as Prospecting
- Creative: Winners only (no experiments)
```

---

## When to Consult This Skill

**Setup phase:**
- "How should I structure my Meta ads account?"
- "What targeting should I use?"
- "What's the minimum budget I need?"

**Optimization phase:**
- "My CPA is too high, what should I check?"
- "How often should I refresh creative?"
- "When should I kill an ad?"

**Scaling phase:**
- "How fast can I increase budget?"
- "Should I duplicate or increase budget?"
- "What's causing my ROAS to drop?"

**Course/education specific:**
- "What funnel should I use for a $29/mo product?"
- "Should I use a free trial or direct sale?"
- "How do I target architecture students?"

**Troubleshooting:**
- "Why aren't my ads spending?"
- "Stuck in learning phase, what now?"
- "Meta numbers don't match GA4, why?"

---

## 2026 Philosophy (Remember This)

**Meta Lattice + Project Andromeda = Creative IS Targeting**

Forget interest stacking. Your ad's visual content (objects, text overlays) tells Meta's AI who to show it to.

**Simplified structure wins.** 3 campaigns > 30 campaigns.

**Broad targeting outperforms** manual targeting in 80% of cases (if budget >$50/day).

**Creative is king.** 90% of performance issues are creative, not targeting.

**Learning phase resets happen.** Don't panic. Algo recovers.

**Feed the machine.** 5-8 new ads/week minimum. Creative fatigue is faster in 2026.

**Trust Meta's numbers** for optimization, trust your payment processor for revenue.

**Best advice:** "Feed the machine good creative signals, trust the algo to find patterns, and kill losers fast." - Gabe Solberg, March 2026

---

## Related Resources

- **Full research:** `/Users/jinxjinx/clawd/projects/konteks-sales/research/META-ADS-2026-DEEP-RESEARCH.md`
- **Supermemory notes:** Dan's Meta ads research (Feb-Mar 2026)
- **Course funnel context:** Konteks Kourse ($29/mo architecture education product)

---

**END OF SKILL**
