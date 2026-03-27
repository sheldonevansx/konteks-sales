# Meta Ads 2026 Expert Guide

> Synthesized from 37 expert videos (Dr. Matt Shiver, Sam Piliero/The Moonlighters, Nick Theriot) spanning $500M+ in managed ad spend. Post-Andromeda playbook - most pre-2025 advice is obsolete.

## When to Use This Skill

Trigger phrases:
- "How should I set up my Meta/Facebook ad campaign?"
- "My ads aren't converting / no sales"
- "Should I use Advantage+ or Manual?"
- "CBO vs ABO?"
- "My ad is stuck in learning phase"
- "How to test creatives"
- "When to kill an ad"
- "How to scale Meta ads"
- "My CPA is too high"
- "What changed with Andromeda?"
- "How to structure ad account in 2026"
- "Creative testing strategy"
- "Retargeting setup"
- Building or fixing any Meta ads campaign

---

## The Andromeda Shift (Why Old Advice Fails)

**What changed:** In mid-2025, Meta released the Andromeda update - a retrieval-based ad delivery system that fundamentally reversed how ads reach audiences.

**Old model (pre-Andromeda):**
- You select audience (interests, lookalikes) → create ads for that audience
- The audience determined who saw what
- Account structure and targeting were the primary levers

**New model (post-Andromeda):**
- You create concepts → Meta's retrieval engine matches concepts to audiences
- The creative itself does the targeting
- Creative quality and concept diversity are the primary levers
- The algorithm starts at the creative and uses it to find the right audience

**Data proof (from Moonlighters, $70M+ in managed spend across 100+ brands):**
- Instagram Reels placement grew 38.86% since Jan 2025
- Instagram Reels CPMs actually *decreased* 9% while every other placement increased 20-25%
- Feed CPMs increased 24.3% ($32 → $40)
- Instagram Stories CPMs increased 12.1% ($14 → $18)
- Facebook Reels CPMs increased 25.5% ($11 → $14)
- Instagram Reels CPMs decreased from ~$12 to ~$10.87

**What this means for you:** The algorithm is dramatically better at finding the right people IF you give it the right creative signals. Audience targeting at the ad set level matters far less. Creative concept diversity matters far more.

---

## Campaign Structure (The Foundation)

### The Three Swim Lanes (Non-Negotiable)

Every ad account needs exactly three campaign swim lanes. This is consensus across all experts:

1. **Prospecting** - New customer acquisition (the growth engine)
2. **Retargeting** - Engaged non-purchasers (website visitors, cart abandoners, social engagers)
3. **Retention** - Existing customers (repeat purchases, upsells)

**Why three swim lanes, not one campaign:**
- Facebook overspends on existing customers if you let it (confirmed across 100+ brands)
- Without swim lanes, 30-40% of budget goes to retargeting/retention when you think it's prospecting
- You need to control how much goes to genuinely new acquisition vs. warmer audiences
- The "one campaign method" breaks at scale because you lose visibility into what's actually driving growth

**How to set up Audience Segment Reporting (CRITICAL):**
In campaign settings → Audience Segment Reporting:
- **Engaged audiences:** 30-day website visitors + 90-day add-to-carts
- **Existing customers:** All-time purchaser list + 180-day website purchasers
- This lets you see exactly how much spend goes to new vs. engaged vs. existing in ANY campaign

### CBO vs ABO Decision Tree

**Default: CBO (Campaign Budget Optimization) - use 90%+ of the time**

CBO advantages:
- Algorithm distributes budget to best-performing ad sets automatically
- Creates a hypercompetitive environment where only winning ads get spend
- Prevents overspending on underperforming ad sets (ABO's biggest flaw)
- Easier to manage at scale
- Test ads naturally don't get spend unless they outperform existing winners

**ABO use cases (10% or less of spend):**
- Very high ticket products ($1,000+ per purchase) where learning takes longer
- Specific isolation testing where you need guaranteed equal spend
- When you literally cannot generate enough conversions in a CBO for the algorithm to optimize

**Why ABO is flawed in 2026:**
Real example from Moonlighters: An ABO account's #1 spending ad set had 1.1x ROAS while the #5 ad set had 2.5x ROAS. The human operator kept feeding money to the worst performer. This happens constantly with ABO because:
- Humans react too slowly to shift budgets
- We can't see every attribution touchpoint Meta sees
- We create cost centers by forcing spend on underperforming creatives
- The algorithm is provably smarter at allocation than manual intervention

### Ad Set Architecture ("Packs")

**The Pack System (Moonlighters method, used across 100+ brands):**

Each new round of creative gets launched as a new broad ad set (called a "pack"). Structure:

```
Prospecting CBO Campaign
├── Broad Pack 1 (launch date) - 3-8 ads, same concept
├── Broad Pack 2 (launch date) - 3-8 ads, same concept  
├── Broad Pack 3 (launch date) - different concept
├── Interest Pack A (optional - niche interest)
├── Interest Pack B (optional - niche interest)
└── ... (can scale to 80+ packs over time)
```

**Key rules:**
- Group ads by concept within each pack (same avatar + template = same pack)
- Each pack should have 2-8 iterations of the same concept (different hooks, slight visual variations)
- Don't mix wildly different concepts in the same pack
- Date your packs for easy tracking
- Over time you'll accumulate many packs - that's fine, the algorithm manages distribution

**Ad Set Minimums (critical for new launches):**
When launching a new pack into an established CBO campaign, the new ad set may get zero spend because existing winners dominate. Solution:

1. Go to ad set → Edit → Ad Set Spending Limits
2. Change from "percentage" to "dollar value"
3. Set Average Daily Minimum = 1x your target CPA
4. This guarantees the ad set gets *some* spend to prove itself
5. **Remove the minimum after 7-14 days** - by then it's either scaling naturally or should be paused

### Budget Allocation Rules

**Starting from zero (Day 1):**
- Single prospecting CBO campaign
- 3 ad sets: 1 broad + 2 interest-based
- Interest ad sets: pick the most niche/smallest brand audiences relevant to your product
- Purpose of interest ad sets: guide the pixel while it learns (training wheels)
- Start budget: enough for at least 1 conversion per day minimum

**Under $3K/month:**
- Same prospecting structure
- Add a Retention campaign (existing customers only)
- Can drop interest ad sets once broad is performing
- Key focus: feed quality conversion data back to pixel

**$3K-$10K/month:**
- Add Retargeting campaign (engaged non-purchasers)
- Start building proper exclusions
- Begin scaling pack count in prospecting

**$10K+/month:**
- Full three-campaign structure
- Scale creative volume aggressively
- Consider incremental attribution analysis
- Multiple concept packs running simultaneously

### Learning Phase Management

**What it is:** Meta needs ~50 conversions per ad set per week to exit learning phase and optimize delivery.

**When you're stuck in learning:**
1. Check your conversion event - are you optimizing for something that happens frequently enough?
2. Check budget vs. CPA - if CPA is $50 and daily budget is $20, you'll never exit learning
3. Don't make changes during learning phase (resets the counter)
4. Consider consolidating ad sets if spend is too fragmented
5. Use ad set minimums to jumpstart spend

**What resets learning phase:**
- Changing budget by more than ~20% in a day
- Pausing and unpausing
- Changing targeting
- Changing optimization event
- Significant creative edits

---

## Creative Strategy

### The Creative Engine (Post-Andromeda Framework)

The creative engine is a cyclical system, not a one-time process:

```
LAUNCH new ads
    ↓
GRACE PERIOD (7-14 days) - let ads breathe, pause only absolute duds
    ↓
ANALYZE (with incremental attribution)
    ↓
BRIEF new concepts + iterations based on what won
    ↓ (also inject competitor research here)
LAUNCH new ads
    ↓
[repeat forever]
```

### Concepts, Iterations, and Variations (They're Different Things)

**Concept** = Avatar + Template
- Avatar: who you're speaking to (e.g., "moms who don't have time but want beautiful nails")
- Template: the creative format/approach (e.g., "us vs them", "3 reasons why", "UGC in car")
- A concept attracts a specific audience segment through Andromeda's retrieval system

**Iteration** = Same concept, different execution
- Same hook angle but different visual treatment
- Same message but different creator/voice
- Same offer but different headline

**Variation** = Minor tweak within an iteration
- Different thumbnail
- Slightly different headline text
- Color change
- Different CTA button

**The hierarchy matters because:** Post-Andromeda, each concept maps to a different audience. You want MANY concepts (breadth) AND many iterations per winning concept (depth).

### What's Working in 2026

**Volume is king (with a caveat):**
Data from top brands scaling in 2026:
- Athletic Greens: 1,000 → 7,090 active ads
- Talentless: 100 → 1,081 active ads  
- Gap: 150 → 6,353 active ads
- These are 6-60x increases in creative volume

**But volume alone isn't enough.** The shift is: quality concepts × volume of iterations = winning formula. Don't make 1,000 random ads. Make 10-20 strong concepts with 50-100 iterations across them.

**Creative formats that work in 2026:**

1. **UGC-style video** - Still the workhorse. Shot on phone, authentic feel. Run through personal pages or partnership ads, NOT brand pages (kills authenticity signal).

2. **Static image ads** - Underrated for testing. You can crank out 10-20 in 15 minutes vs. 2 weeks for video. Best uses:
   - Angle testing (test 10 different pain points as static before making videos)
   - Twitter/X screenshot style (text-heavy, looks native)
   - Before/after
   - Testimonial screenshots
   
3. **"Ugly" ads** - Plain text on white background, Microsoft Paint style. Works for bottom-of-funnel when brand awareness already exists. Hormozi runs 1,700+ of these but ONLY works because his brand is already known. **Not recommended for cold traffic at small scale.**

4. **Educational/native content** - Ads that look like organic posts. Don't reveal the product until 15-20 seconds in. Hook with curiosity, educate, THEN pitch.

5. **Persona callout ads** - "If you're a [specific person] doing [specific thing]..." - Andromeda matches these precisely to the right people. The more specific the callout, the better the targeting.

### The Four Static Ad Types for Lead Gen (Dr. Matt Shiver)

1. **Angle testing statics** - Same visual style, different copy/pain point per ad. Launch 5-10 to identify winning angles before producing video.

2. **Twitter/X style statics** - Text-heavy, looks like a screenshot of a tweet or post. High-performing for coaches/consultants.

3. **Testimonial/proof statics** - Screenshots of results, reviews, DMs. Social proof in static form.

4. **Lead magnet callout statics** - Specific about what they're getting. "10-page cheat sheet" outperformed "blueprint" by 2x CTR in testing. Be specific about the format and length.

### Hook Frameworks

**The first 3 seconds determine everything.** If you lose them here, nothing else matters.

**Proven hook patterns:**
1. **"This is bad. This is good."** - Pattern interrupt showing wrong vs. right way. House brand scaled this across 50+ ads.
2. **Celebrity/authority connection** - "Brad Pitt, David Beckham - what do their [X] have in common?"
3. **Persona callout** - "If you're a [specific person]..." (Andromeda retrieval-optimized)
4. **Contrarian statement** - "Everything you know about [X] is wrong"
5. **Curiosity gap** - Show something intriguing without explaining immediately
6. **Problem agitation** - "Are you still [doing painful thing]?"
7. **Result lead** - "This brand grew 141% in 90 days. Here's how."

**Hook testing methodology:**
- Take your best-performing ad body
- Create 5-10 different hooks for the same body
- Launch all in the same pack (ad set)
- The hook that gets the most spend wins
- Then iterate on that winning hook

### Creative Testing Methodology

**What NOT to do (all three are now suboptimal):**

1. **ABO creative testing** - Forces spend to undeserving ads, creates cost centers
2. **Meta's Creative Testing Feature** - Forces equal distribution, doesn't let algorithm optimize. The beaker icon feature at ad level looks promising but wastes money on even distribution.
3. **Just throwing ads into CBO with no control** - Works but not optimal without ad set minimums

**What TO do (The M4 Method / Pack System):**

1. Group iterations of the same concept in a new ad set (pack)
2. Set ad set minimum = 1x target CPA
3. Let algorithm find the winner within the pack
4. One ad will naturally get 80-95% of spend in the pack - that's your winner
5. After 7-14 days, remove the minimum
6. If the pack is performing, it scales. If not, it dies naturally.
7. Take winning concepts and create new iterations (new packs)

**Hit rate reality check:** Even experts running $287K/year in ads have only a 20-25% hit rate on new creatives. Most ads fail. This is normal. The system is about volume of tests, not perfection per test.

### Creative Production Workflow

**For small budgets (<$5K/month):**
1. Start with static ads to test angles (15 min to make 10-20)
2. Identify winning angle from static testing
3. Turn winning angle into 2-3 video ads
4. Scale the video versions
5. Continue testing new angles with statics

**For larger budgets:**
1. Brief new concepts weekly based on analysis + competitor research
2. Produce 10-20 new creatives per week minimum
3. Mix of statics, videos, UGC, and iterations
4. Use the creative flywheel: analyze → brief → produce → launch → analyze

**Competitor research (free method):**
1. Go to Facebook Ads Library (facebook.com/ads/library)
2. Search competitor names
3. Screenshot their ads, look for patterns
4. Note which ads have been running longest (they're winners)
5. Create your own versions with your brand's angle

---

## Optimization Playbook

### When to Kill Ads

**The 7-14 Day Rule:**
- Give every new ad set 7-14 days before making decisions
- Under 7 days: you don't have enough data. Don't touch it.
- After 14 days with ad set minimum still on: remove the minimum no matter what

**Kill signals:**
- After 7+ days: ad set spending at minimum but not scaling = no potential, pause it
- ROAS consistently below breakeven after adequate spend (2-3x your CPA in total spend minimum)
- CPA more than 2x your target after exiting learning
- Zero conversions after spending 2-3x CPA
- In a CBO: if the algorithm isn't giving it spend even with minimums, trust the algorithm

**Do NOT kill based on:**
- CPM alone (it varies by placement, not indicative of ad quality)
- CPC alone (cheap clicks ≠ conversions)
- CTR alone (high CTR with no conversions = wrong audience, not a winner)
- Less than 3 days of data
- Less than $50-100 in spend (not enough data)

### When to Scale

**Scale signals:**
- Ad set consistently spending above minimum AND maintaining target ROAS/CPA for 7+ days
- CBO naturally allocating more spend to an ad set without intervention
- Multiple ads within a pack all performing above target
- Increasing spend while maintaining or improving efficiency

**How to scale:**
1. **CBO scaling (preferred):** Increase campaign budget by 10-20% per day maximum
2. **Never increase more than 20% in one day** - this can reset learning phase
3. **Horizontal scaling:** Launch new packs with iterations of winning concepts
4. **Don't scale by duplicating campaigns** - this creates audience overlap and self-competition

### Budget Change Rules

| Action | Maximum Change | Frequency |
|--------|---------------|-----------|
| Budget increase | 20% per day | Once per day |
| Budget decrease | 20% per day | Once per day |
| Pause ad set | Anytime after 7 days | As needed |
| Launch new pack | Anytime | 1-2x per week recommended |
| Remove ad set minimum | After 7-14 days | Once per pack |

**The 20% rule exists because:** Larger changes reset or destabilize the learning phase. The algorithm needs consistency to optimize. Gradual changes let it adapt.

### Troubleshooting

**Low spend / ad set not spending:**
1. Check ad set minimum - is it set?
2. Is the CBO budget large enough for all ad sets to get adequate spend?
3. Is the creative actually good? The algorithm deprioritizes weak creatives.
4. Check relevance diagnostics in Ads Manager
5. Check if other ad sets are significantly outperforming (they'll absorb budget)

**High CPA:**
1. First check: is your conversion event correct? (Must be Purchase or qualified lead, not Add to Cart)
2. Check creative quality - are your hooks stopping the scroll?
3. Check offer - is what you're selling compelling at the price point?
4. Check landing page - is there friction killing conversions?
5. Try new concepts (not just iterations of the same losing concept)
6. Consider: are you sending back quality conversion data? Garbage in = garbage out.

**Learning Limited:**
1. Not enough conversions per week (need ~50 per ad set)
2. Solutions: consolidate ad sets, increase budget, consider a higher-funnel event temporarily
3. BUT: don't optimize for Add to Cart just to exit learning - this trains the pixel on the wrong behavior

**ROAS all over the place:**
1. This is the #1 post-Andromeda complaint
2. Check audience segment reporting - are you overspending on existing customers?
3. Implement proper swim lane separation (3 campaigns)
4. Use incremental attribution (not just last-click)
5. Accept more variability day-to-day; measure on 7-day rolling averages

---

## Critical Settings

### Attribution Windows

**Recommended:** 7-day click, 1-day view (default and best for most)

**Incremental Attribution (NEW - use this for analysis):**
- Available in Ads Manager columns
- Shows the TRUE incremental lift, not just last-touch attribution
- Use this when analyzing which ad sets to keep vs. kill
- Regular ROAS can be misleading because of overlapping touchpoints

**For DM/engagement campaigns:** Attribution is messier because you can't pixel DM conversations the same way. "Messaging conversations started" includes people who saw your ad, followed you, then messaged later - not just direct DM responders.

### Placement Strategy

**Default: All placements on (Advantage+ placements)**

Let Meta optimize placement distribution. The data shows:
- Instagram Reels is the growth placement (38% growth, declining CPMs)
- Feed is still dominant but getting more expensive
- Restricting placements = restricting the algorithm's ability to optimize

**Exception:** For DM campaigns, you may want to restrict to Instagram-only placements since DMs happen on Instagram.

**Do NOT manually select placements** unless you have a very specific reason. The algorithm is better at placement optimization than humans.

### Optimization Events

**ALWAYS optimize for your end goal:**
- E-commerce: **Purchase** (never Add to Cart, never Initiate Checkout)
- Lead gen: **Qualified lead event** (not just "lead" - see below)
- DM campaigns: **Messaging conversations started** (with quality caveats)

**Why Purchase, not Add to Cart:**
You're literally telling Facebook "find me people who add to cart." Those are NOT the same people who buy. The algorithm optimizes for exactly what you tell it. If you optimize for Add to Cart, you'll get lots of adds to cart and very few purchases.

**Lead quality hack (Dr. Matt Shiver - $287K/year in testing):**
Only fire your conversion pixel for QUALIFIED leads, not all leads. If you let unqualified leads hit the results column, Meta finds more people like them. 

Implementation:
1. Use a CRM workflow (GoHighLevel, etc.) to manually review leads
2. Only fire the pixel event (via server-side/CAPI) when a lead is confirmed qualified
3. This trains the algorithm on quality signals, not volume
4. Result: higher quality leads even though reported CPL may look higher

### Pixel Setup Requirements

**Both browser pixel AND Conversions API (CAPI) are required in 2026.**

Browser pixel alone misses ~30% of conversions due to iOS tracking restrictions. CAPI sends data server-side, capturing what the browser pixel misses.

**Critical pixel events that MUST fire correctly:**
- Purchase (with value AND currency parameters - both required!)
- Add to Cart
- Initiate Checkout
- View Content
- Lead / Complete Registration (for lead gen)

**Common mistake:** Pixel events firing without value/currency data. This cripples Meta's ability to optimize for value. Every Purchase event MUST include:
```
{value: 29.00, currency: 'USD'}
```

### Audience Exclusions

**In Prospecting campaign:**
- Exclude existing customers (180-day purchasers + all-time purchase list)
- Exclude engaged audiences IF you have a separate retargeting campaign
- For interest ad sets: may exclude broad pack audiences to reduce overlap

**In Retargeting campaign:**
- Include: 180-day website visitors, 90-day add-to-carts, social engagers
- Exclude: existing customers (purchasers)

**In Retention campaign:**
- Include ONLY: existing customers (purchaser lists)
- This should be your lowest-budget campaign

**"Use as a suggestion" toggle: ALWAYS turn this OFF.** If you add an audience and leave "use as a suggestion" on, Meta will ignore your audience targeting entirely. This is Advantage+ audience behavior. For exclusions to work, this must be off.

### Related Media (TURN THIS OFF)

A hidden setting where Meta automatically adds "similar" media to your ad unit. Problems:
- You lose visibility into which creative is actually performing
- Meta may show awkward combinations of your creatives in carousels
- Breakdowns don't work properly with related media on
- It can turn on automatically after publishing - check your ads regularly

**How to check:** Go to ad level → Ad Creative section → look for "X media are being used in this ad"
**How to fix:** Click the trash can icon next to related media → Publish

### Flexible Ads (NO LONGER RECOMMENDED)

Flexible ads (uploading multiple images/videos in one ad unit) were working well in Q4 2025 but stopped working in Q1 2026:
- Miscroppings across placements
- Awkward carousel combinations showing nearly-identical images
- Loss of visibility into which creative won

**Instead:** Use the Pack system - put iterations in the same ad set as separate ads, not in one flexible ad unit.

### Advantage+ Audiences

**Testing result ($2,500 A/B test, Dr. Matt Shiver):**
- Advantage+ ON vs. Broad (strict age targeting) = virtually identical results
- Same CPMs, same conversion rates, same cost per result
- Both got ~33% retargeting regardless of setting

**Conclusion:** Post-Andromeda, it doesn't matter much whether you use Advantage+ or Broad. The creative does the targeting either way. Pick one approach and be consistent. If using Advantage+, add Value Rules to decrease bids for out-of-avatar demographics.

**Value Rules (for Advantage+ users):**
- Set a value rule to decrease bid by 90% for demographics outside your avatar
- Example: if targeting 25-45 year olds, decrease bid 90% for 18-24 and 45+
- This lets Advantage+ work while preventing total waste on wrong demographics

---

## Common Mistakes (2026)

### 1. Using ABO for Creative Testing
**The mistake:** Creating an ABO campaign, setting $20-50/day per ad set, and manually deciding winners.
**Why it fails:** You overspend on losers and underspend on winners. Real example: brand spending $5,000 on a 1.28x ROAS ad set while a 1.97x ad set got fraction of the budget.
**Fix:** Use CBO with pack system + ad set minimums.

### 2. Optimizing for the Wrong Event
**The mistake:** Optimizing for Add to Cart, Initiate Checkout, or Landing Page Views instead of Purchase.
**Why it fails:** You're telling Meta to find people who do those actions, not people who buy. They're different populations.
**Fix:** Always optimize for Purchase (or qualified lead for lead gen). Accept higher initial CPAs while the pixel learns.

### 3. No Swim Lane Separation
**The mistake:** Running one campaign targeting everyone (new + engaged + existing customers).
**Why it fails:** Meta overspends on existing customers because they're cheapest to convert. You think you're acquiring new customers but you're just retargeting existing ones.
**Fix:** Three campaigns: Prospecting (new), Retargeting (engaged), Retention (existing). Set up Audience Segment Reporting to verify.

### 4. Pixel Fires Without Value/Currency
**The mistake:** Purchase pixel event fires but doesn't include the transaction value and currency.
**Why it fails:** Meta can't optimize for value. It treats a $5 purchase the same as a $500 purchase.
**Fix:** Ensure every Purchase event includes `{value: XX.XX, currency: 'USD'}`. Test with Facebook Pixel Helper Chrome extension.

### 5. Killing Ads Too Early
**The mistake:** Pausing ads after 1-3 days because CPA looks high.
**Why it fails:** You never let the algorithm optimize. Learning phase needs 50 conversions/week minimum. Small sample sizes are noisy.
**Fix:** Minimum 7-day evaluation period. Minimum 2-3x CPA in total spend before making judgment calls.

### 6. Creative Homogeneity
**The mistake:** Making 20 ads that are all slight variations of the same concept.
**Why it fails:** Post-Andromeda, each concept attracts a different audience. If all your ads target the same audience segment, you're competing against yourself.
**Fix:** Build diverse concepts (different avatars + templates). Test BREADTH of concepts, then go DEEP on winners with iterations.

### 7. Leaving "Use as Suggestion" On
**The mistake:** Adding audience targeting but leaving the "use as a suggestion" toggle on.
**Why it fails:** Meta completely ignores your targeting and goes full Advantage+. Your exclusions don't work. Your interest targeting is meaningless.
**Fix:** Toggle OFF "use as a suggestion" for every audience parameter that matters.

### 8. Running Ads Through Brand Page Only  
**The mistake:** All ads run through your business/brand page.
**Why it fails:** Users immediately know it's an ad. Partnership ads through personal pages convert better because they feel like organic content.
**Fix:** Use partnership ads (run through creator/personal pages) for UGC content. Reserve brand page for brand-awareness ads.

### 9. Over-Relying on Related Media / Flexible Ads
**The mistake:** Using Meta's automation features to mix-and-match creatives.
**Why it fails:** You lose data visibility, get weird creative combinations, and can't identify winners.
**Fix:** Turn off Related Media. Stop using Flexible Ads. Use the Pack system instead.

### 10. Not Sending Qualified Data Back to Meta
**The mistake:** Every lead/conversion fires the pixel, including junk leads.
**Why it fails:** Meta optimizes for more people like your junk leads.
**Fix:** Only fire conversion events for qualified leads. Use server-side (CAPI) manual or workflow-triggered events.

### 11. Copying Hormozi Without Brand Awareness
**The mistake:** Seeing Hormozi's plain white text ads with "If you're a [persona]..." and copying the format.
**Why it fails:** Those ads work because millions of people already know who Hormozi is. They're bottom-funnel ads. Without brand recognition, a plain white image with text converts at near zero for cold audiences.
**Fix:** Use the PRINCIPLE (specific persona callouts) in better creative formats (video, UGC, polished statics). The persona callout works universally. The ugly-text-on-white-background format only works with existing brand awareness.

### 12. Running Features Before Benefits
**The mistake:** "Our course has 12 chapters, quizzes, and downloadable resources."
**Why it fails:** Nobody cares about features until they care about outcomes. Features are logical. Purchase decisions are emotional first, justified with logic second.
**Fix:** Lead with desire/outcome ("Become the architect firms actually want to hire"), support with benefits ("Learn practical skills through real-world projects"), then mention features last ("12 comprehensive chapters + project files").

### 13. Destabilizing Campaigns with Constant Changes
**The mistake:** Changing budgets, adding/removing ads, adjusting targeting every day.
**Why it fails:** Every change partially resets the learning phase. The algorithm needs stability to optimize. Constant tweaking prevents it from ever finding optimal delivery.
**Fix:** Make changes once per week maximum (except for pausing obvious disasters). Set a "review day" and stick to it. Between reviews, don't touch anything.

### 14. Not Using Audience Segment Reporting
**The mistake:** Running campaigns without visibility into new vs. engaged vs. existing customer spend allocation.
**Why it fails:** You have no idea if your "prospecting" campaign is actually prospecting or just retargeting warm audiences for cheap conversions that would have happened anyway.
**Fix:** Set up Audience Segment Reporting in EVERY campaign. Define engaged audiences (website visitors, add-to-carts) and existing customers (purchasers). Review weekly.

---

## Advanced Tactics

### Interest Ad Sets (When and How)

**When to use interests:**
- Day 1 of a new account (pixel has no data yet)
- When launching into a new market/niche
- As "training wheels" while broad audiences learn
- Testing highly specific niche audiences

**How to set up:**
1. Find the most niche/smallest brand or interest related to your product
2. Create a separate ad set with that single interest
3. Run alongside broad ad sets in the same CBO
4. Once broad is outperforming interests (usually 2-4 weeks), consider pausing interests
5. The interest ad sets "teach" the pixel what your customer looks like

**Don't over-index on interests.** Post-Andromeda, broad targeting with good creative outperforms interest targeting in almost every case. Interests are training wheels, not the bicycle.

### Retargeting Structure

**Retargeting campaign setup:**
- Campaign type: CBO
- Audience: 180-day website visitors + 90-day add-to-carts + social engagers
- Exclude: existing customers (purchasers)
- Creative: Bottom-of-funnel (testimonials, reviews, urgency, specific product benefits)
- Budget: 10-20% of total ad spend

**Important caveat:** With Andromeda, even your "broad" prospecting campaigns do some retargeting automatically (~30% of spend hits engaged audiences). Your dedicated retargeting campaign is for intentional, message-specific retargeting with bottom-funnel creative.

**Don't overspend on retargeting.** The Moonlighters found brands were spending way too much on retargeting relative to prospecting. If you're spending more than 20% on retargeting, you're probably not growing.

### Creative Refresh Cadence

**Winning ads die faster in 2026.** Post-Andromeda, experts report top creatives fatiguing in weeks, not months.

**Recommended cadence:**
- Launch new creative packs: weekly (minimum bi-weekly)
- Analyze performance: weekly with incremental attribution
- Brief new concepts: bi-weekly based on analysis
- Full creative audit: monthly

**Signs of creative fatigue:**
- Gradual increase in CPA over 7-14 days
- Decreasing CTR on previously strong ads
- Frequency increasing above 3-4x
- Algorithm shifting spend away from previously dominant ads

### Forecasting and Budgeting

**Building a forecast (recommended by multiple experts):**
1. Plan your annual media spend budget
2. Allocate % of budget to creative production (this is new - treat it as a line item)
3. Map product launches and revenue spikes throughout the year
4. Identify weak months → buffer with more creative testing and promotional events
5. Plan creative strategy per month based on seasonality

**The creative budget line item:**
- Treat creative production as a cost alongside media spend
- If you can't produce enough creative, your media spend efficiency drops
- AI tools are making production cheaper, but human-quality creative still wins

**Testing budgets:**
- 20% of campaign budget can go to testing new concepts (via ad set minimums)
- But in CBO, "testing" and "scaling" happen in the same campaign
- Don't create a separate "testing campaign" with ABO - this is outdated

### DM Ad Campaigns (Instagram)

**Why DM ads are different:**
- You can't pixel DM conversations the same way as website conversions
- Attribution is messier ("messaging conversations started" ≠ qualified leads)
- Quality control requires MORE manual intervention, not less
- The algorithm can find pockets of cheap, low-quality DM engagers

**DM campaign structure (Dr. Matt Shiver):**
- Use Engagement objective → Manual campaign → Messaging
- ABO may actually work better here because you need more control
- Monitor lead quality DAILY - kill ads that attract junk fast
- Track cost per CALL and cost per SALE, not cost per DM
- Consider separate campaigns per offer/funnel

**Two approaches:**
1. **Old school (proven):** Multiple campaigns, manual monitoring, kill underperformers fast
2. **Andromeda-native (experimental):** One campaign, one ad set, multiple ads, leverage algorithm but monitor quality closely

### Cost Caps and Bid Strategies

**Highest Volume (default - use 90% of the time):**
- Meta spends your budget to get the most conversions possible
- No CPA constraint - it will spend aggressively
- Best for: learning phase, new campaigns, when you want maximum data

**Cost Cap:**
- You set a maximum CPA target
- Meta won't spend above that (mostly)
- Best for: protecting profitability at scale
- Risk: severe underspend if your cap is too tight
- Set cost cap at 1.5x your actual target CPA (give room for the algorithm)

**Bid Cap:**
- Strictest control - you set the maximum bid per auction
- Best for: very experienced advertisers at high spend
- Risk: severe underspend, inconsistent delivery
- Not recommended for budgets under $500/day

**When to add cost caps:**
- Only after your campaign has stable performance history (2-4 weeks minimum)
- Only when you're scaling and want to protect margins
- Start at 1.5x your current CPA, then gradually tighten
- If spend drops dramatically, your cap is too tight

### The "Fastest Horse" Strategy (Moonlighters)

This is about doubling down on winners, not spreading budget evenly.

**Principle:** In a CBO campaign, the algorithm naturally gives more spend to the best-performing ad set (the "fastest horse"). Let it. Don't try to force even distribution.

**Implementation:**
1. Launch multiple concept packs in the same CBO
2. One pack will naturally absorb 50-70% of spend
3. If it's performing well (above target ROAS/CPA), this is GOOD
4. Don't try to throttle the winner or force other packs to compete
5. Instead, create new packs with genuinely different concepts
6. Eventually a new concept may outperform the current fastest horse
7. That rotation happens naturally as creatives fatigue

**What "fastest horse" means for small budgets:**
At $56/day, you probably can only run 2-3 ad sets effectively. One will dominate. That's fine. Your job is to keep feeding the system with new packs while the winner runs.

### Concept Building as a Skill

**The #1 skill to develop in 2026 (consensus across all experts):**

A concept = intersection of:
- **Persona/Avatar:** Who are you talking to? (be specific)
- **Angle:** What problem/desire are you addressing?
- **Offer:** What are you presenting as the solution?

**How to build concepts:**
1. Research your audience deeply (reviews, forums, competitor ads, customer interviews)
2. Identify 5-10 distinct angles (pain points, desires, use cases)
3. For each angle, define 2-3 avatars who care about it
4. For each avatar+angle combination, create 3-5 creative templates
5. Brief these to production (or create yourself)
6. Launch, measure, iterate

**Example for Konteks Kourse (architecture education):**
- Avatar 1: Architecture students frustrated with academic teaching
- Avatar 2: Young architects who want practical skills
- Avatar 3: Career-changers interested in architecture
- Angle A: "Academic architecture education is broken"
- Angle B: "Learn practical skills they don't teach in school"
- Angle C: "Architecture explained through pop culture"
- Concept = Avatar 1 + Angle A + UGC video template
- Concept = Avatar 2 + Angle B + Tutorial-style template
- Each concept becomes a pack with 3-5 iterations

---

## Quick Decision Trees

### "My ad set is stuck in learning"
1. Has it been less than 7 days? → Wait. Don't touch it.
2. Is your daily budget less than 1x your CPA? → Increase budget or consolidate ad sets
3. Are you getting fewer than 50 conversions/week across the campaign? → Consider higher-funnel optimization temporarily, OR reduce number of ad sets to concentrate spend
4. Did you make changes recently? → Every change resets learning. Stop editing.
5. Is the creative genuinely good? → Bad creative won't exit learning no matter what you do

### "One ad gets all the spend"
1. Is that ad performing well (good ROAS/CPA)? → **This is fine.** The algorithm found a winner. Let it run.
2. Are other ads you believe in getting zero spend? → Set ad set minimum = 1x CPA to force initial delivery
3. Is the dominant ad in the same ad set? → Normal behavior. The best ad in a pack gets 80-95% of spend.
4. Do you want to test new concepts? → Launch a NEW pack (ad set), don't try to force spend within the existing one
5. Is the dominant ad fatiguing? → When its CPA starts rising, the algorithm will naturally shift spend. Or launch new packs.

### "High CTR but no conversions"
1. Check landing page → Does it load fast? Is the offer clear? Is checkout smooth?
2. Check audience quality → High CTR can mean you're attracting curious clickers, not buyers. Review your creative - is it attracting the right persona?
3. Check pixel firing → Is the Purchase event actually firing? Use Facebook Pixel Helper to verify.
4. Check price/offer mismatch → Are you promising something in the ad that the landing page doesn't deliver?
5. Check conversion event → Are you optimizing for Purchase or a softer event? Softer events attract softer audiences.

### "CPA too high"
1. Check creative first (always) → Fresh concepts almost always reduce CPA more than anything else
2. Check offer → Is your product priced right? Is the value proposition clear?
3. Check conversion data quality → Are you sending garbage leads back to Meta?
4. Check audience overlap → Are your campaigns competing with each other?
5. Check attribution → Are you looking at 7-day click + 1-day view? Also check incremental.
6. Try new concepts → Don't iterate on losing concepts. Start fresh with new angles.
7. Check competition → During peak seasons (Q4, back-to-school), CPAs naturally rise.

### "My ROAS dropped after Andromeda"
1. Set up Audience Segment Reporting → Are you overspending on existing customers?
2. Implement three swim lanes → Separate Prospecting, Retargeting, Retention
3. Switch from ABO to CBO → Let the algorithm allocate
4. Increase creative diversity → More concepts, not just more ads
5. Check placements → Instagram Reels is cheaper and growing. Are your creatives Reels-friendly?
6. Review your creative for post-Andromeda principles → Concept-based, strong persona callouts, hook-first
7. Accept the new normal → Day-to-day variance is higher post-Andromeda. Measure on 7-day rolling averages.

---

## Ad Account Audit Checklist

Use this when diagnosing an underperforming account (like Konteks Kourse's $250/zero sales situation):

### 1. Campaign Structure Audit
- [ ] Is the campaign type correct? (Sales for e-commerce/subscriptions, Leads for lead gen)
- [ ] Manual vs. Advantage+? (Manual recommended for control at lower budgets)
- [ ] CBO or ABO? (Should be CBO in 90% of cases)
- [ ] Bid strategy? (Highest Volume for learning, Cost Cap for established campaigns)
- [ ] Are there proper swim lanes? (Prospecting / Retargeting / Retention separated)
- [ ] Is Audience Segment Reporting set up?

### 2. Ad Set Audit
- [ ] What's the optimization event? (Must be Purchase or qualified conversion)
- [ ] Is "Use as Suggestion" turned OFF on audience settings?
- [ ] Are exclusions in place? (Existing customers excluded from prospecting)
- [ ] Are ad set minimums set for new packs?
- [ ] How many ad sets are active? (Too many = fragmented spend)
- [ ] Are placements set to Advantage+? (All placements on = recommended)

### 3. Ad Creative Audit
- [ ] Is Related Media turned OFF?
- [ ] Are ads running through personal pages / partnership ads? (Better than brand page for UGC)
- [ ] Are hooks strong? (First 3 seconds must stop scroll)
- [ ] Is there concept diversity? (Different avatars + angles, not just variations of one idea)
- [ ] Are creatives format-diverse? (Mix of static, video, UGC)
- [ ] Are ads Reels-friendly? (9:16 vertical format)

### 4. Pixel & Tracking Audit
- [ ] Is the Meta Pixel installed and firing?
- [ ] Is CAPI set up and sending events?
- [ ] Do Purchase events include value AND currency? (Critical!)
- [ ] Are events matching between browser pixel and CAPI? (Check Events Manager)
- [ ] Is there event deduplication set up? (Prevent double-counting)

### 5. Landing Page Audit
- [ ] Does the page load fast? (Under 3 seconds)
- [ ] Is the offer clear above the fold?
- [ ] Is there social proof visible?
- [ ] Is the checkout process smooth? (Minimal steps)
- [ ] Does the page match the ad promise? (Message match)
- [ ] Is the pixel firing on the conversion page?

---

## The Creative Diversity Matrix

A framework for ensuring you're testing enough variety:

```
                    AVATAR A          AVATAR B          AVATAR C
                    (Student)         (Young Pro)       (Career Changer)
                    
ANGLE 1             [Concept 1]       [Concept 4]       [Concept 7]
(School is broken)  Pack: 3-5 ads     Pack: 3-5 ads     Pack: 3-5 ads

ANGLE 2             [Concept 2]       [Concept 5]       [Concept 8]
(Practical skills)  Pack: 3-5 ads     Pack: 3-5 ads     Pack: 3-5 ads

ANGLE 3             [Concept 3]       [Concept 6]       [Concept 9]
(Pop culture learn) Pack: 3-5 ads     Pack: 3-5 ads     Pack: 3-5 ads
```

At small budgets ($56/day), you test one column (one avatar) with 2-3 angles. As you scale, expand across the matrix. Each cell is a concept. Each concept gets its own pack (ad set) with 3-5 creative iterations.

The winning cell(s) get more iterations. Losing cells get cut. Over time you map which avatars + angles drive the best CPA, and you invest disproportionately there.

---

## Konteks Kourse Specific Application

Based on the situation: $29/mo subscription, $56/day budget, $250 spent with zero sales, previously using Advantage+ incorrectly, pixel events missing value/currency.

### Immediate Fixes Required

1. **Fix pixel events** - Every purchase must fire with `{value: 29.00, currency: 'USD'}`. Without this, Meta literally cannot optimize for value.

2. **Switch to Manual Sales campaign with CBO** - Don't use Advantage+ Shopping. Use a standard Sales campaign with CBO at the campaign level.

3. **Set up Audience Segment Reporting** - Even at $56/day, you need to see where spend is going.

4. **Restructure:**
   - Campaign 1: Prospecting CBO ($50/day)
     - Broad Pack 1: 3-5 best ads
     - Interest Pack A: "Architecture" interest
     - Interest Pack B: Most niche architecture-related interest you can find
   - Campaign 2: Retention ($6/day) - only if you have existing customers to target

5. **Optimize for Purchase** - Not page view, not add to cart, not initiate checkout. PURCHASE.

### Creative Strategy for $29/mo Education Product

At $56/day, you cannot afford to test at volume. Be strategic:

1. **Start with 5-10 static ads** testing different angles:
   - "Architecture school doesn't teach you this"
   - "Learn architecture through [pop culture reference]"
   - "Why your architecture portfolio sucks"
   - "What they don't tell you in architecture school"
   - "Practical architecture skills for $29/month"
   
2. **Identify winning angle** (which gets most spend + best CPA in first 7-14 days)

3. **Turn winning angle into 2-3 video ads** (Dan on camera is ideal for education product)

4. **Use partnership ads** through Dan's personal Instagram, not a brand page

5. **Hook-first video structure:**
   - 0-3s: Strong hook (pattern interrupt or persona callout)
   - 3-15s: Agitate the problem 
   - 15-30s: Introduce the solution (Konteks Kourse)
   - 30-45s: Social proof / what's inside
   - 45-60s: CTA with urgency

### Budget Reality Check

At $56/day optimizing for $29 purchases:
- Target CPA should be well under $29 (otherwise you're losing money month 1)
- You need positive LTV - what's the average subscriber retention? If 3 months, LTV = $87, so CPA up to ~$40-50 could work
- At $56/day, getting to 50 conversions/week is nearly impossible initially
- Consider: is $56/day enough? If CPA is $30, you get ~2 purchases/day. That's 14/week, well short of the 50 needed for learning phase optimization
- **Realistic expectation:** At this budget, the pixel will learn slowly. Be patient. Don't make constant changes.

---

## Glossary

| Term | What It Actually Means |
|------|----------------------|
| **Andromeda** | Meta's retrieval-based ad delivery system (released mid-2025). Creative is matched to audiences instead of audiences being targeted. |
| **CBO** | Campaign Budget Optimization. Budget set at campaign level, Meta distributes to best ad sets. |
| **ABO** | Ad Set Budget Optimization. Budget set per ad set manually. Largely obsolete in 2026. |
| **Pack** | An ad set containing iterations of the same concept. Each new creative round = new pack. |
| **Concept** | Avatar + Template. The combination of who you're speaking to and how you're presenting the message. Each concept attracts a different audience via Andromeda. |
| **Iteration** | Same concept, different execution (different hook, creator, or visual treatment). |
| **Variation** | Minor tweak within an iteration (headline change, color change, thumbnail swap). |
| **Swim Lanes** | The three campaign types: Prospecting, Retargeting, Retention. Keeps spend allocation visible and controlled. |
| **ROAS** | Return on Ad Spend. Revenue ÷ Ad Spend. A 2x ROAS means $2 revenue per $1 spent. |
| **CPA** | Cost Per Acquisition. How much you pay per conversion (purchase, lead, etc.). |
| **CPM** | Cost Per Mille (1,000 impressions). What it costs to show your ad 1,000 times. |
| **CTR** | Click-Through Rate. Percentage of people who click after seeing your ad. |
| **CAPI** | Conversions API. Server-side tracking that supplements the browser pixel. Required in 2026. |
| **Learning Phase** | Period where Meta is optimizing delivery. Needs ~50 conversions/ad set/week to exit. |
| **Learning Limited** | When an ad set can't exit learning phase due to insufficient conversions. |
| **Incremental Attribution** | Meta's newer attribution model showing TRUE incremental lift, not just last-touch. Use for analysis. |
| **Advantage+** | Meta's AI-powered campaign type that automates targeting, placements, and creative. Can work but removes control. |
| **Value Rules** | Settings that adjust bids based on customer attributes (age, location, etc.). Use with Advantage+ to maintain some targeting control. |
| **Related Media** | Hidden setting where Meta auto-adds "similar" creatives to your ad. Turn it OFF. |
| **Flexible Ads** | Ad format allowing multiple images/videos in one ad unit. No longer recommended as of Q1 2026. |
| **Partnership Ads** | Ads run through a creator/personal page instead of your brand page. Higher authenticity signal. |
| **Ad Set Minimum** | Minimum daily spend guarantee for an ad set within a CBO campaign. Critical for testing new packs. |
| **Creative Fatigue** | When an ad's performance degrades because the audience has seen it too many times. Happens faster post-Andromeda. |
| **Breakeven ROAS** | The ROAS at which you neither make nor lose money. For a product with 50% margins, breakeven ROAS = 2x. |

---

## Expert Consensus vs. Disagreements

### Where All Experts Agree
- CBO > ABO in 2026 (universal)
- Creative quality is the #1 lever post-Andromeda (universal)
- Always optimize for Purchase/end goal, not intermediary events (universal)
- Broad targeting works as well as or better than interest targeting (universal)
- The algorithm is smarter than human operators at budget allocation (universal)
- Three swim lanes are necessary for proper account structure (universal)
- Related Media should be turned off (universal)
- Pixel + CAPI both required (universal)
- Old testing methods (ABO testing campaigns) are obsolete (universal)

### Where Experts Disagree

**Advantage+ vs. Broad:**
- Dr. Matt Shiver: Tested both, found no significant difference. Use either.
- Moonlighters: Default to broad with CBO, don't overthink it.
- Nick Theriot: Broad with strict age targeting preferred for control.

**Flexible Ads:**
- Moonlighters (3 months ago): Recommended flexible ads for iteration grouping
- Moonlighters (now): Reversed position. Flexible ads cause miscroppings and data loss. Use individual ads in packs instead.

**Interest targeting:**
- Moonlighters: Use interests as "training wheels" for new accounts, then shift to broad
- Dr. Matt Shiver: Just go broad from day 1, interests don't matter post-Andromeda

**Creative Testing Feature (Meta's built-in):**
- Dr. Matt Shiver: Useful for forcing spend to new ads within existing ad sets, especially at lower budgets
- Moonlighters: Don't use it. It forces even distribution which wastes money. Use CBO + pack system instead.

**DM campaigns structure:**
- Dr. Matt Shiver: Old-school multi-campaign ABO approach still works better for quality control
- Others: Haven't specifically addressed DM campaigns with the same depth

**Persona callout ads (Hormozi style):**
- Nick Theriot: Works brilliantly for Hormozi because of brand awareness. 90% of people should NOT copy this for cold traffic.
- Dr. Matt Shiver: Great concept for the retrieval engine - the more specific your callout, the better Andromeda targets.
- Resolution: Both are right. The TEXT-ONLY white background style needs brand awareness. But the PRINCIPLE of specific persona callouts in any creative format works for everyone.

---

## Sources

This skill synthesizes insights from 37 videos across three expert channels:

1. **The Moonlighters (Sam Piliero)** - Agency managing 100+ brands, $70M+ in annual ad spend, $500M+ lifetime. Primary source for campaign structure, pack system, CBO methodology, Andromeda data analysis, creative engine framework.

2. **Dr. Matt Shiver** - Runs $287K/year in personal ad spend for coaching business, $2M+ revenue. Primary source for lead gen strategies, DM campaigns, static ad types, Advantage+ testing, pixel quality hacks, creative testing feature.

3. **Nick Theriot** - Creative strategy and ad review expert. Primary source for creative analysis, hook frameworks, UGC best practices, ad review methodology, Hormozi strategy breakdown.

*Last updated: March 2026. The Meta ads landscape changes rapidly. Principles remain stable but specific features and settings may shift.*

---

## Appendix A: The Full Andromeda Data (Moonlighters Analysis)

This data comes from 100+ brands and ~$70 million in total ad spend, analyzed by the Moonlighters team.

### Placement Share Shift

The Andromeda update caused a massive shift in where ads are delivered:

**Instagram Reels:**
- Grew 38.86% in placement share since Jan 2025
- The growth accelerated exactly when Andromeda launched (July 2025)
- CPMs actually DECREASED 9% ($12 → $10.87) while every other placement got more expensive
- This is the single biggest opportunity in Meta ads right now

**Feed (Facebook + Instagram):**
- Still dominant in total spend share
- But CPMs increased 24.3% ($32 → $40)
- Q4 2025 was brutal: $42-46 CPMs on feeds
- Slight decline in share relative to other placements

**Instagram Stories:**
- CPMs increased 12.1% ($14 → $18)
- Share relatively stable

**Facebook Reels:**
- CPMs increased 25.5% ($11 → $14)
- Growing but not as dramatically as Instagram Reels

### What This Means Practically

If your creative isn't Reels-friendly (vertical, hook-driven, fast-paced), you're paying more for less. The algorithm is pushing toward Reels because that's where user engagement is growing. Make sure your ads work in 9:16 vertical format.

### Audience Spend Distribution (Pre vs. Post Moonlighters System)

Across 10 brands that onboarded in Q4 2024, before the Moonlighters implemented their swim lane system:
- Existing customers were getting disproportionate spend
- No ability to control new vs. engaged vs. existing allocation
- Total: $50 million in combined spend showing these patterns

After implementing three swim lanes:
- Prospecting spend increased significantly
- Existing customer overspend was contained
- Net new acquisition improved
- Average client saw 41% profit increase in first 90 days

---

## Appendix B: VSL and Long-Form Ad Frameworks

### Video Sales Letter (VSL) Framework for Meta Ads

From multiple experts, the structure for longer-form video ads (60s-3min):

**Section 1: Hook (0-5 seconds)**
- Pattern interrupt or strong statement
- Visual movement or unexpected image
- Persona callout
- Must stop the scroll or the rest doesn't matter

**Section 2: Problem Agitation (5-20 seconds)**
- Describe the pain your viewer feels
- Be specific - "Are you still manually tracking your architecture projects in spreadsheets?"
- Use their language, not marketing speak
- Build emotional tension

**Section 3: Solution Introduction (20-40 seconds)**
- "There's a better way" transition
- Introduce your product/service naturally
- Don't hard sell yet - show, don't tell
- Demonstrate the transformation

**Section 4: Proof (40-60 seconds)**
- Testimonials
- Results
- Before/after
- Social proof (number of students, reviews, etc.)

**Section 5: CTA + Urgency (60-75 seconds)**
- Clear call to action
- Reason to act now
- Remove risk (guarantee, free trial, low price)
- Repeat the core benefit one more time

### Feature-Benefit-Desire Hierarchy

From Nick Theriot's ad review methodology:

**Never lead with features.** The hierarchy is:
1. **Desire** (what they ultimately want to become/achieve)
2. **Benefit** (what your product does for them)
3. **Feature** (what your product is/has)

**Bad:** "Our course has 12 chapters covering architecture fundamentals" (feature)
**Better:** "Learn practical architecture skills you'll actually use on real projects" (benefit)
**Best:** "Become the architect who actually knows what they're doing, not just another graduate with a portfolio and no skills" (desire)

Features go LAST, after you've hooked with desire and sold with benefits. The House brand example: 20 seconds of content about celebrity style and looking good (desire) → THEN product features at the end.

---

## Appendix C: Budget-Specific Playbooks

### $10-50/day Budget (Konteks Kourse Range)

**Constraints at this level:**
- Cannot exit learning phase through volume alone
- Every dollar of waste hurts proportionally more
- Can't test at the volume that large brands do
- Algorithm has less data to learn from

**Optimized approach:**
1. ONE prospecting CBO campaign only (don't split budget across 3 campaigns yet)
2. 2-3 ad sets maximum (1 broad + 1-2 interests)
3. 5-8 ads total across all ad sets
4. Focus on creative QUALITY over quantity
5. Use static ads for angle testing (cheap to produce)
6. 7-day evaluation windows minimum
7. Only change budget by 10-15% per day (not 20% - more conservative at low budgets)
8. Track results on 14-day rolling averages, not daily

**When to add Retargeting/Retention campaigns:**
- Only when Prospecting is consistently profitable
- Only when you have enough website traffic to build meaningful retargeting audiences
- For a $29/mo subscription: probably at $100+/day budget before splitting into swim lanes

### $50-200/day Budget

**The sweet spot for testing:**
1. Two campaigns: Prospecting CBO ($40-160/day) + Retention ($10-40/day)
2. Prospecting: 3-5 ad sets (packs), rotated weekly
3. Launch 3-5 new creatives per week
4. Can start implementing the pack system properly
5. Ad set minimums of 1x CPA per new pack
6. Consider adding retargeting campaign once you hit $150/day+

### $200-1000/day Budget

**Full system deployment:**
1. Three swim lanes: Prospecting (70%), Retargeting (15%), Retention (15%)
2. 10+ ad sets in prospecting, stacked over time
3. Launch 10-20 new creatives per week
4. Use the full creative engine flywheel
5. Competitor research becomes essential (use Foreplay or Meta Ad Library)
6. Incremental attribution analysis weekly
7. Creative team/process needed (can't DIY at this volume)

### $1000+/day Budget

**Agency-level operations:**
1. Three swim lanes with granular audience segmentation
2. 50+ ad sets in prospecting
3. 20-50+ new creatives per week
4. Multiple concept categories running simultaneously
5. Dedicated creative strategist role
6. Weekly performance reviews with incremental analysis
7. Consider cost caps for budget protection during testing

---

## Appendix D: Metrics That Matter (and What to Ignore)

### Primary Metrics (Decision-Making)

| Metric | What It Tells You | Good Threshold |
|--------|-------------------|----------------|
| **CPA (Cost Per Acquisition)** | How much each customer costs | Below your breakeven (LTV-based) |
| **ROAS (Return on Ad Spend)** | Revenue per dollar spent | Above breakeven ROAS (depends on margins) |
| **Purchases/Conversions** | Are people actually buying? | Trending up or stable |
| **Incremental ROAS** | True lift from ads | Higher than regular ROAS means ads are working |

### Secondary Metrics (Diagnostic)

| Metric | What It Tells You | When to Check |
|--------|-------------------|---------------|
| **CTR (Click-Through Rate)** | Is the creative engaging? | When diagnosing creative performance |
| **CPC (Cost Per Click)** | Traffic cost efficiency | When CPA is high but CTR is good |
| **Frequency** | How often same people see your ad | When performance degrades (>3-4x = fatigue) |
| **Hook Rate (3-sec video views / impressions)** | Is the hook working? | When diagnosing video ad performance |
| **Hold Rate (ThruPlays / 3-sec views)** | Is the body engaging? | When hook rate is good but conversions aren't |

### Metrics to IGNORE for Decision-Making

| Metric | Why to Ignore |
|--------|--------------|
| **CPM** | Varies by placement, season, competition. You can't control it. |
| **Reach** | Vanity metric. A million impressions with no sales = waste. |
| **Engagement (likes, comments)** | Social proof helps but doesn't equal revenue. |
| **CPC alone** | Cheap clicks ≠ buyers. A $5 CPC that converts > $0.50 CPC that doesn't. |
| **Daily fluctuations** | Meta's delivery is volatile day-to-day. Measure on 7-day windows minimum. |

### Breakeven ROAS Calculation

```
Breakeven ROAS = 1 / Profit Margin

If profit margin is 50%:  Breakeven ROAS = 1 / 0.50 = 2.0x
If profit margin is 33%:  Breakeven ROAS = 1 / 0.33 = 3.0x
If profit margin is 70%:  Breakeven ROAS = 1 / 0.70 = 1.43x

For Konteks Kourse ($29/mo subscription, digital product):
- COGS is near-zero (digital)
- Payment processing ~3%: $0.87
- Profit margin: ~97%
- Breakeven ROAS: 1 / 0.97 = 1.03x
- BUT: factor in churn. If avg retention is 3 months:
  - LTV = $29 × 3 = $87
  - Maximum CPA = $87 (to break even over customer lifetime)
  - At $56/day budget, target CPA = $30-50 (profitable with LTV)
```

---

## Appendix E: Weekly Campaign Management Checklist

### Monday: Review & Plan
- [ ] Pull 7-day rolling metrics for all campaigns
- [ ] Check Audience Segment Reporting: how much went to new vs. engaged vs. existing?
- [ ] Identify any ad sets spending at minimum but not scaling → candidates for pausing
- [ ] Identify top-performing concepts for iteration briefs
- [ ] Check for Related Media being auto-enabled on any ads

### Wednesday: Launch & Adjust
- [ ] Launch new creative pack(s) with ad set minimums set
- [ ] Remove ad set minimums from packs launched 7-14 days ago
- [ ] Pause any ad sets that have been at minimum for 14+ days without scaling
- [ ] Adjust campaign budgets if needed (max 20% change)
- [ ] Check pixel firing with Facebook Pixel Helper

### Friday: Creative & Competitive
- [ ] Review competitor ads in Meta Ad Library
- [ ] Brief new concepts for next week based on this week's analysis
- [ ] Check creative fatigue signals on top performers
- [ ] Document winning concepts and angles
- [ ] Plan next week's creative production

### Monthly: Full Audit
- [ ] Review all swim lane budget allocation
- [ ] Analyze concept-level performance (which concepts drive best incremental ROAS)
- [ ] Check all campaign settings (attribution, placements, optimization events)
- [ ] Review and update audience exclusions
- [ ] Assess creative diversity - are you testing enough new concepts?
- [ ] Calculate true customer acquisition cost including all overhead

---

## Appendix F: Step-by-Step Campaign Setup (From Scratch)

### For a new $29/mo subscription product like Konteks Kourse:

**Step 1: Pixel Setup**
1. Install Meta Pixel on website (base code on all pages)
2. Set up Conversions API (CAPI) via your platform (Shopify, WordPress, etc.)
3. Configure standard events:
   - ViewContent (on course/landing page)
   - InitiateCheckout (on checkout page)
   - Purchase (on thank you page) - WITH value: 29.00 and currency: "USD"
4. Test with Facebook Pixel Helper chrome extension
5. Verify events in Events Manager → Test Events

**Step 2: Audience Setup**
1. Go to Audiences in Ads Manager
2. Create Custom Audience: Website visitors, last 180 days
3. Create Custom Audience: Purchasers, all time
4. Upload customer email list if you have one
5. Set up Audience Segment Reporting in campaign settings

**Step 3: Campaign Creation**
1. Create new campaign → Sales objective → Manual Sales Campaign
2. Name: "Prospecting - Konteks Kourse"
3. Campaign Budget Optimization: ON
4. Daily budget: $56
5. Bid strategy: Highest Volume
6. Set up Audience Segment Reporting (engaged = 180-day visitors, existing = purchasers)

**Step 4: Ad Set #1 (Broad)**
1. Name: "Broad Pack 1 - [date]"
2. Conversion location: Website
3. Performance goal: Maximize number of conversions
4. Conversion event: Purchase
5. Budget: No ad set minimum for first pack
6. Audience: 100% broad (Advantage+ ON, no exclusions for first campaign)
7. Age/gender: Set to your avatar (e.g., 18-35, all genders)
8. Placements: Advantage+ Placements (all placements on)

**Step 5: Ad Set #2 (Interest)**
1. Name: "Interest - Architecture - [date]"
2. Same settings as above EXCEPT:
3. Audience: Turn OFF "use as suggestion"
4. Add detailed targeting: most niche architecture-related interest
5. Set ad set minimum: 1x target CPA (e.g., $30/day)

**Step 6: Ads**
1. Start with 3-5 static image ads testing different angles
2. Use Partnership Ad format if possible (through Dan's Instagram)
3. Each ad: different primary text (hook/angle), same or different image
4. Headlines: clear value prop + CTA
5. Link: to Konteks Kourse landing page

**Step 7: Publish and Wait**
1. Review all settings one more time
2. Publish
3. DO NOT TOUCH for 7 days
4. Check daily but don't change anything
5. After 7 days: analyze and decide next steps
