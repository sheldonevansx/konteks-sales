# Meta Ads 2026 Expert Guide

> Synthesized from 37 expert videos (Dr. Matt Shiver, Sam Piliero/The Moonlighters, Nick Theriot) spanning $500M+ in managed ad spend. Post-Andromeda playbook - most pre-2025 advice is obsolete.
> Every claim tagged: [PRIMARY] [PRACTITIONER] [REGURGITATED] [ANECDOTAL] [CONFLICTING]
> Last updated: 2026-03-28

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

## Source Credibility Map

### Tier 1: Large-Scale Agency Data (Verifiable Operations)

| Source | Credibility | Evidence | Unique Value |
|--------|------------|----------|-------------|
| **The Moonlighters (Sam Piliero)** | **PRACTITIONER** - High | Agency managing 100+ brands, $70M+ annual spend, $500M+ lifetime. Provides aggregate data across diverse verticals. | Campaign structure methodology (pack system, swim lanes), CPM/placement trend data from proprietary dashboard, Andromeda impact analysis. The ONLY source with cross-brand aggregate data. |

### Tier 2: High-Spend Solo Practitioners (Verifiable Personal Spend)

| Source | Credibility | Evidence | Unique Value |
|--------|------------|----------|-------------|
| **Dr. Matt Shiver** | **PRACTITIONER** - High | $287K/year personal ad spend for coaching business, $2M+ revenue. Runs his own ads, not just advising. Conducts specific A/B tests (e.g., $2,500 Advantage+ test). | Lead gen strategies, DM campaigns, static ad types, Advantage+ testing, pixel quality hacks. The only source running documented A/B tests and sharing specific methodology. |

### Tier 3: Creative Strategy Specialist (Analytical, Less Data-Heavy)

| Source | Credibility | Evidence | Unique Value |
|--------|------------|----------|-------------|
| **Nick Theriot (Blue Sense Digital)** | **PRACTITIONER** - Medium-High | Creative strategy and ad review. Less transparent about personal spend data. Primarily known for ad review/breakdown content. | Creative analysis, hook frameworks, UGC best practices, ad review methodology. Adds genuine creative strategy insight but provides fewer hard numbers. |

### Cross-Source Validation Matrix

When all three sources agree on something, it's likely reliable (though they may share a common ancestor - see Regurgitation Index). When they disagree, the disagreement is noted and analyzed.

| Claim | Moonlighters | Dr. Matt Shiver | Nick Theriot | Confidence |
|-------|-------------|----------------|-------------|-----------|
| CBO > ABO | ✅ | ✅ | ✅ | **HIGH** - universal agreement + Meta's own push toward CBO since 2019 |
| Creative = primary lever | ✅ | ✅ | ✅ | **HIGH** - universal agreement, partially confirmed by Meta's Andromeda documentation |
| Optimize for Purchase | ✅ | ✅ | ✅ | **HIGH** - universal agreement + Meta's own documentation |
| Broad > Interest targeting | ✅ | ✅ | ✅ | **HIGH** - but this traces to Meta's own algorithmic improvements, not practitioner discovery |
| Three swim lanes | ✅ | ✅ (implied) | ✅ (implied) | **MEDIUM-HIGH** - Moonlighters formalized it; others describe the principle without the "swim lane" branding |
| Advantage+ ≈ Broad | Not tested | ✅ ($2,500 test) | Prefers broad | **MEDIUM** - only one documented test |
| Flexible ads broken | ✅ (reversed) | N/A | N/A | **LOW** - single source, reversed own prior position |

---

## Canonical Foundations

### What Meta Actually Published vs. What Practitioners Claim

**Andromeda - The Retrieval System**

Meta published about Andromeda on their AI research blog in **2023** (not mid-2025 as the practitioner channels suggest). The paper "Scaling the Instagram Explore Recommendations System" and related engineering blog posts describe a retrieval-augmented ranking system. [PRIMARY - Meta AI Engineering Blog, 2023]

**Key facts from Meta's own documentation:**
- Andromeda is a retrieval model that pre-selects candidate ads from a much larger pool before the ranking model scores them [PRIMARY - Meta Engineering]
- It uses creative signals (image, text, video content) as part of the retrieval process [PRIMARY - Meta Engineering]
- Meta claimed it improved ad retrieval quality by 8% in internal testing [PRIMARY - Meta Engineering]
- The system was deployed incrementally, not as a single "update" - practitioners experienced it as a gradual shift, then retroactively named a point where they noticed performance changes [RESEARCH CONCLUSION]

**What's confirmed vs. practitioner interpretation:**

| Claim | Meta's Documentation | Practitioner Interpretation | Verdict |
|-------|---------------------|---------------------------|---------|
| "Retrieval-based system" | ✅ Confirmed | ✅ Accurate description | [PRIMARY] |
| "Released mid-2025" | ❌ Andromeda published 2023, iterative updates since | Practitioners noticed changes mid-2025, attributed to "Andromeda update" | [ANECDOTAL] - the timing is practitioner observation, not a documented release |
| "Creative does the targeting" | Partially - creative signals are part of retrieval | Overstated - the algorithm still uses user behavior, demographics, and declared interests alongside creative signals | [PRACTITIONER] - useful mental model but technically imprecise |
| "Old targeting is obsolete" | ❌ Meta still offers and supports interest/lookalike targeting | Practitioners found broad often matches or beats interests | [PRACTITIONER] - their experience is real but the absoluteness is overstated |

**The Learning Phase - 50 Conversions/Week**

This IS from Meta's official documentation. Meta's Business Help Center states: "The learning phase is the period when the delivery system still has a lot to learn about an ad set. During the learning phase, the delivery system is exploring the best way to deliver your ad set - so costs are usually higher... An ad set exits the learning phase as soon as its performance stabilizes, which typically happens after around 50 optimization events since the last significant edit." [PRIMARY - Meta Business Help Center]

**However:** The "50 conversions" number is described as "approximately" and "typically" in Meta's docs. It's a guideline, not a hard threshold. Practitioners treat it as a hard number. [CONFLICTING - Meta says "approximately 50," practitioners say "50 minimum"]

**CBO (Campaign Budget Optimization)**

Meta made CBO the default campaign budget option in September 2019 and has continued to push it. [PRIMARY - Meta's September 2019 product update]

**Meta's position:** CBO distributes budget across ad sets to find the best results. Meta's own documentation recommends it for most advertisers. [PRIMARY]

**Independent verification:** No published academic study directly comparing CBO vs ABO performance. The evidence base is:
- Meta's own marketing materials (biased toward their product) [PRIMARY but self-interested]
- Practitioner case studies (anecdotal, potential selection bias) [PRACTITIONER]
- The Moonlighters' ABO example (1.1x vs 2.5x ROAS) is a single case study [ANECDOTAL]

**Advantage+ Shopping Campaigns**

Meta introduced Advantage+ Shopping Campaigns (ASC) in 2022 and has published case studies showing improvements. [PRIMARY - Meta product announcements]

**Meta's claims:** Up to 12% improvement in cost per purchase vs. manual campaigns (from Meta's own case studies). [PRIMARY but self-interested - Meta has financial incentive to push automation]

**Independent reality:** Practitioner results are mixed. Dr. Matt Shiver's $2,500 A/B test found "virtually identical results" between Advantage+ and manual broad. [PRACTITIONER - single test, limited budget for statistical significance]

### Advertising Science Foundations

The principles underlying Meta ads strategy trace to well-documented advertising science:

**Claude Hopkins - "Scientific Advertising" (1923)** [PRIMARY]
- The grandfather of data-driven advertising and A/B testing
- "The time has come when advertising has in some hands reached the status of a science"
- Every practitioner's emphasis on "test everything" and "let data decide" traces here
- Hopkins' emphasis on specificity in claims ("a clean tooth in 10 days" vs. "clean teeth") underlies all creative strategy advice

**David Ogilvy - "Ogilvy on Advertising" (1983)** [PRIMARY]
- "On average, five times as many people read the headline as read the body copy" - this is why hook strategy matters
- Ogilvy's direct response testing methodology is the ancestor of modern A/B testing
- His emphasis on long copy and research-first approaches influenced the "concepts over variations" thinking

**Eugene Schwartz - "Breakthrough Advertising" (1966)** [PRIMARY]
- Five Levels of Awareness (Unaware → Most Aware) - the theoretical foundation for why different creative concepts reach different audiences
- "You cannot create desire. You can only channel existing desire" - this is the actual principle behind "creative does the targeting"
- Market Sophistication Levels - determines how you write copy. A mature ad market needs different approaches than a fresh one

**Robert Cialdini - "Influence" (1984)** [PRIMARY]
- Social proof (testimonials in ads), scarcity (limited offers), authority (expert endorsements), reciprocity (free value first)
- Every UGC ad and testimonial-based creative traces to Cialdini's social proof principle
- The "persona callout" ad strategy is an application of Cialdini's liking principle (people respond to those similar to them)

**Rosser Reeves - "Reality in Advertising" (1961)** [PRIMARY]
- Coined "Unique Selling Proposition" (USP)
- The concept diversity strategy (each concept = different audience) is a modern application of testing multiple USPs

**Dan Kennedy - Direct Response Marketing** [PRIMARY]
- Feature → Benefit → Desire hierarchy that Nick Theriot teaches (without attribution)
- "Sell the destination, not the journey" - the principle behind leading with outcomes over features

---

## Regurgitation Index

### Which Source Adds Genuine Value vs. Repackages?

| Source | PRIMARY (cites/extends documented research) | PRACTITIONER (own data/original methodology) | REGURGITATED (repeats without attribution) | Overall Rating |
|--------|---------------------------------------------|----------------------------------------------|---------------------------------------------|----------------|
| **The Moonlighters (Sam Piliero)** | 5% (rarely cites foundations) | 75% (proprietary cross-brand data, pack system methodology, CPM trend analysis, swim lane framework) | 20% (some "creative is king" platitudes) | ★★★★★ **Highest Value** - the aggregate data is genuinely irreplaceable |
| **Dr. Matt Shiver** | 10% (references Meta's own documentation more than others) | 65% (documented A/B tests, lead quality hack, DM campaign structure, specific budget examples) | 25% (some standard "optimize for purchase" advice) | ★★★★ **High Value** - the testing methodology is genuine |
| **Nick Theriot** | 5% (rarely cites) | 45% (ad review methodology, hook framework analysis, creative breakdown approach) | 50% (feature→benefit→desire is Kennedy/Ogilvy; persona callouts are Schwartz; "ugly ads" analysis is observational) | ★★★ **Medium Value** - good analyst but many frameworks are repackaged classics |

### Common Ancestor Analysis

When all three say the same thing, here's where it actually comes from:

1. **"Creative is the #1 lever"** → This is a restatement of Ogilvy's "what you say is more important than how you say it" + Hopkins' emphasis on testing copy/creative as the primary variable. It's also partially confirmed by Meta's Andromeda documentation showing creative signals influence retrieval. [PRIMARY + PRIMARY] The practitioners added the Andromeda context, which is genuinely new.

2. **"Optimize for your end goal"** → Meta's own documentation has always said this. Not a practitioner discovery. [PRIMARY - Meta Business Help Center]

3. **"Broad targeting works as well as interest targeting"** → This traces to Meta's own algorithmic improvements (better ML models, more user data). The practitioners observed the result; Meta engineered the cause. [PRIMARY - Meta's ML improvements enabled this]

4. **"The algorithm is smarter than humans at budget allocation"** → Meta's position since CBO launch in 2019. [PRIMARY - Meta's own marketing, self-interested]

5. **"Three swim lanes"** → This is the Moonlighters' genuine contribution. The PRINCIPLE (separate new vs. existing customer spend) traces to direct marketing basics, but the specific "three swim lane" framework with Audience Segment Reporting is Piliero's original methodology. [PRACTITIONER - Moonlighters]

6. **"Don't kill ads too early"** → Standard statistical advice about sample sizes. Traces to basic statistics, not advertising. [REGURGITATED - but important enough to keep repeating]

7. **"Hook determines everything in first 3 seconds"** → Ogilvy's headline principle (1983) applied to video. The "3 seconds" specificity comes from platform-specific attention data (Facebook's own research on video attention). [PRIMARY + PRACTITIONER]

8. **"Features vs. Benefits"** → Hopkins (1923), Ogilvy (1960s), Kennedy (1990s). Every generation rediscovers this. Nick Theriot presents it as fresh insight. [REGURGITATED]

### What's Actually New in 2026 vs. Repackaged Classics

**Genuinely new (post-2024 developments):**

1. **Andromeda's creative-as-retrieval-signal** - The technical reality that creative content influences which users see ads through a retrieval system, not just a ranking system. This IS a meaningful architectural change in how Meta delivers ads. [PRIMARY - Meta AI Engineering] The practitioner observation that "creative does the targeting" is an imprecise but useful mental model of this change.

2. **Instagram Reels as the growth placement** - The specific CPM/share shift data showing Reels growing while getting cheaper is genuinely 2025-2026 data. [PRACTITIONER - Moonlighters] Whether the specific numbers (38.86% growth, 9% CPM decrease) are accurate is unverifiable without access to their dashboard, but the directional trend (Reels growing, CPMs relatively low) aligns with Meta's own push toward short-form video.

3. **The Pack System** - Moonlighters' specific methodology for launching creative in ad sets grouped by concept, with ad set minimums. This is an original operational framework, not repackaged. [PRACTITIONER - Moonlighters]

4. **Audience Segment Reporting** - The specific use of Meta's audience segment reporting feature to enforce swim lane separation. This feature is relatively new in Ads Manager. [PRACTITIONER - Moonlighters applying a PRIMARY Meta feature]

5. **Lead quality pixel hack** - Dr. Matt Shiver's approach of only firing conversion events for qualified leads via CAPI. This is a genuine tactical innovation that uses Meta's infrastructure in a non-obvious way. [PRACTITIONER - Dr. Matt Shiver]

6. **Creative fatigue acceleration** - The observation that top creatives fatigue faster post-Andromeda (weeks vs. months). This is a genuine 2025-2026 observation. [PRACTITIONER - multiple sources, but hard to verify independently]

7. **Related Media / Flexible Ads degradation** - The Moonlighters' finding that these features hurt performance in Q1 2026 after working in Q4 2025. Genuinely new operational finding. [PRACTITIONER - Moonlighters, though they reversed their own prior advice, which suggests real-time learning]

**Repackaged classics pretending to be new:**

1. **"Creative is king"** - Ogilvy (1983), Hopkins (1923). Every generation of advertisers discovers this. [REGURGITATED]
2. **"Test multiple angles"** - Hopkins' entire "Scientific Advertising" is about this. [REGURGITATED]
3. **"Audience targeting matters less"** - This is new in degree (Andromeda really did reduce targeting importance) but the principle that good creative finds its audience is Schwartz (1966). [PARTIALLY REGURGITATED]
4. **"Don't optimize for intermediate events"** - Meta's own documentation has said this since conversion optimization existed. [REGURGITATED from PRIMARY]
5. **"Features vs. Benefits hierarchy"** - Hopkins (1923) through Kennedy (1990s). Nick Theriot presents this as insight from his ad reviews. [REGURGITATED]
6. **"Use social proof"** - Cialdini (1984). Every ad with testimonials is applying this. [REGURGITATED]
7. **"Test hooks"** - Ogilvy's headline testing methodology applied to video. The medium is new; the principle is 40+ years old. [REGURGITATED]

---

## The Andromeda Shift (Why Old Advice Fails)

**What changed:** Meta deployed the Andromeda retrieval system - a retrieval-augmented ad delivery system that changed how ads are matched to users. [PRIMARY - Meta AI Engineering Blog, 2023; iterative updates through 2025]

⚠️ **Timing caveat:** The original Andromeda paper was published in 2023. Practitioners describe a "mid-2025 release" which likely refers to a significant iteration or threshold where the effects became dramatically noticeable across accounts, not a single deployment event. [ANECDOTAL - practitioner timing vs. documented deployment]

**Old model (pre-Andromeda):** [PRIMARY - documented Meta ad system architecture]
- You select audience (interests, lookalikes) → create ads for that audience
- The audience determined who saw what
- Account structure and targeting were the primary levers

**New model (post-Andromeda):** [PRACTITIONER interpretation of PRIMARY system change]
- You create concepts → Meta's retrieval engine matches concepts to audiences
- The creative itself heavily influences targeting (though not the ONLY factor - user behavior, demographics, and declared interests still matter)
- Creative quality and concept diversity are the primary levers
- The algorithm starts at the creative and uses it to find the right audience

⚠️ **Precision note:** "Creative does the targeting" is a useful mental model but technically oversimplified. The retrieval system uses creative signals AS ONE INPUT alongside user behavior signals, engagement history, demographic data, and other factors. The practitioner framing makes it sound like creative is the ONLY input. It's the most CONTROLLABLE input, which is why practitioners focus on it. [RESEARCH CONCLUSION]

**Data proof (from Moonlighters, $70M+ in managed spend across 100+ brands):** [PRACTITIONER - proprietary data, not independently verifiable]
- Instagram Reels placement grew 38.86% since Jan 2025
- Instagram Reels CPMs actually *decreased* 9% while every other placement increased 20-25%
- Feed CPMs increased 24.3% ($32 → $40)
- Instagram Stories CPMs increased 12.1% ($14 → $18)
- Facebook Reels CPMs increased 25.5% ($11 → $14)
- Instagram Reels CPMs decreased from ~$12 to ~$10.87

⚠️ **Data verification:** These specific numbers come from the Moonlighters' proprietary dashboard across 100+ brands. The directional trends (Reels growing, Feed getting more expensive) align with Meta's own push toward short-form video and industry reports showing Reels adoption growth. The specific percentages cannot be independently verified. [PRACTITIONER - plausible but unverified specifics]

**What this means for you:** The algorithm is dramatically better at finding the right people IF you give it the right creative signals. Audience targeting at the ad set level matters far less. Creative concept diversity matters far more. [PRACTITIONER consensus, partially supported by PRIMARY Meta documentation]

---

## Campaign Structure (The Foundation)

### The Three Swim Lanes (Non-Negotiable)

Every ad account needs exactly three campaign swim lanes. This is consensus across all experts: [PRACTITIONER - Moonlighters originated the "swim lane" branding; the underlying principle of separating acquisition from retention is standard direct marketing, traceable to the Pareto principle and RFM analysis from the 1930s-1940s]

1. **Prospecting** - New customer acquisition (the growth engine)
2. **Retargeting** - Engaged non-purchasers (website visitors, cart abandoners, social engagers)
3. **Retention** - Existing customers (repeat purchases, upsells)

**Why three swim lanes, not one campaign:** [PRACTITIONER - Moonlighters, validated across 100+ brands]
- Facebook overspends on existing customers if you let it (confirmed across 100+ brands) [PRACTITIONER]
- Without swim lanes, 30-40% of budget goes to retargeting/retention when you think it's prospecting [PRACTITIONER - specific percentage is from Moonlighters' data]
- You need to control how much goes to genuinely new acquisition vs. warmer audiences
- The "one campaign method" breaks at scale because you lose visibility into what's actually driving growth

⚠️ **Canonical context:** The principle of separating acquisition from retention spend is NOT new. Direct mail marketers in the 1950s-1970s maintained separate "house lists" (existing customers) and "prospect lists" (new acquisition). The Moonlighters' contribution is applying this to Meta's specific campaign architecture with Audience Segment Reporting. [PRIMARY principle, PRACTITIONER application]

**How to set up Audience Segment Reporting (CRITICAL):** [PRACTITIONER - Moonlighters, using PRIMARY Meta feature]
In campaign settings → Audience Segment Reporting:
- **Engaged audiences:** 30-day website visitors + 90-day add-to-carts
- **Existing customers:** All-time purchaser list + 180-day website purchasers
- This lets you see exactly how much spend goes to new vs. engaged vs. existing in ANY campaign

### CBO vs ABO Decision Tree

**Default: CBO (Campaign Budget Optimization) - use 90%+ of the time** [PRACTITIONER consensus + PRIMARY - Meta's own recommendation since 2019]

CBO advantages: [PRACTITIONER observations, aligned with PRIMARY Meta documentation]
- Algorithm distributes budget to best-performing ad sets automatically
- Creates a hypercompetitive environment where only winning ads get spend
- Prevents overspending on underperforming ad sets (ABO's biggest flaw)
- Easier to manage at scale
- Test ads naturally don't get spend unless they outperform existing winners

**ABO use cases (10% or less of spend):** [PRACTITIONER - Dr. Matt Shiver]
- Very high ticket products ($1,000+ per purchase) where learning takes longer
- Specific isolation testing where you need guaranteed equal spend
- When you literally cannot generate enough conversions in a CBO for the algorithm to optimize

**Why ABO is flawed in 2026:** [PRACTITIONER - Moonlighters, single case study]
Real example from Moonlighters: An ABO account's #1 spending ad set had 1.1x ROAS while the #5 ad set had 2.5x ROAS. The human operator kept feeding money to the worst performer.

⚠️ **Evidence quality:** This is a single case study, not a systematic comparison. It's compelling anecdotally but doesn't prove CBO always outperforms ABO. Meta's own push toward CBO is self-interested (automation reduces support costs). No published academic study compares CBO vs ABO performance at scale. The practitioner consensus is strong but the evidence base is anecdotal. [ANECDOTAL - compelling but limited]

### Ad Set Architecture ("Packs")

**The Pack System (Moonlighters method, used across 100+ brands):** [PRACTITIONER - Moonlighters' original methodology]

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

⚠️ **Originality assessment:** The Pack System IS genuinely original operational methodology from the Moonlighters. The principle of grouping similar creatives together traces to standard ad testing practice, but the specific "pack" framework with the naming convention, the ad set minimum strategy, and the CBO integration is Piliero's contribution. [PRACTITIONER - genuine innovation]

**Key rules:** [PRACTITIONER - Moonlighters]
- Group ads by concept within each pack (same avatar + template = same pack)
- Each pack should have 2-8 iterations of the same concept (different hooks, slight visual variations)
- Don't mix wildly different concepts in the same pack
- Date your packs for easy tracking
- Over time you'll accumulate many packs - that's fine, the algorithm manages distribution

**Ad Set Minimums (critical for new launches):** [PRACTITIONER - Moonlighters]
When launching a new pack into an established CBO campaign, the new ad set may get zero spend because existing winners dominate. Solution:

1. Go to ad set → Edit → Ad Set Spending Limits
2. Change from "percentage" to "dollar value"
3. Set Average Daily Minimum = 1x your target CPA
4. This guarantees the ad set gets *some* spend to prove itself
5. **Remove the minimum after 7-14 days** - by then it's either scaling naturally or should be paused

### Budget Allocation Rules

**Starting from zero (Day 1):** [PRACTITIONER - consensus across sources]
- Single prospecting CBO campaign
- 3 ad sets: 1 broad + 2 interest-based
- Interest ad sets: pick the most niche/smallest brand audiences relevant to your product
- Purpose of interest ad sets: guide the pixel while it learns (training wheels)
- Start budget: enough for at least 1 conversion per day minimum

**Under $3K/month:** [PRACTITIONER - Dr. Matt Shiver, budget-specific advice]
- Same prospecting structure
- Add a Retention campaign (existing customers only)
- Can drop interest ad sets once broad is performing
- Key focus: feed quality conversion data back to pixel

**$3K-$10K/month:** [PRACTITIONER]
- Add Retargeting campaign (engaged non-purchasers)
- Start building proper exclusions
- Begin scaling pack count in prospecting

**$10K+/month:** [PRACTITIONER - Moonlighters, at-scale advice]
- Full three-campaign structure
- Scale creative volume aggressively
- Consider incremental attribution analysis
- Multiple concept packs running simultaneously

### Learning Phase Management

**What it is:** Meta needs ~50 conversions per ad set per week to exit learning phase and optimize delivery. [PRIMARY - Meta Business Help Center, though Meta says "approximately 50," not exactly 50]

**When you're stuck in learning:** [PRACTITIONER consensus + PRIMARY Meta documentation]
1. Check your conversion event - are you optimizing for something that happens frequently enough?
2. Check budget vs. CPA - if CPA is $50 and daily budget is $20, you'll never exit learning
3. Don't make changes during learning phase (resets the counter) [PRIMARY - Meta documentation]
4. Consider consolidating ad sets if spend is too fragmented
5. Use ad set minimums to jumpstart spend [PRACTITIONER - Moonlighters]

**What resets learning phase:** [PRIMARY - Meta Business Help Center]
- Changing budget by more than ~20% in a day
- Pausing and unpausing
- Changing targeting
- Changing optimization event
- Significant creative edits

⚠️ **The "20% rule" specificity:** Meta's documentation says "significant" budget changes reset learning but doesn't specify exactly 20%. The 20% threshold is practitioner convention, widely adopted but not from Meta's official docs. [PRACTITIONER - widely adopted convention, not PRIMARY]

---

## Creative Strategy

### The Creative Engine (Post-Andromeda Framework)

The creative engine is a cyclical system, not a one-time process: [PRACTITIONER - Moonlighters' framework]

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

⚠️ **Canonical context:** This is a standard Plan-Do-Check-Act (PDCA) cycle applied to advertising creative. The PDCA framework traces to W. Edwards Deming (1950s quality management). The Moonlighters adapted it to Meta's specific tools and timelines. [PRIMARY principle, PRACTITIONER application]

### Concepts, Iterations, and Variations (They're Different Things)

[PRACTITIONER - Moonlighters' taxonomy. The underlying principle of testing at different levels of abstraction traces to direct response testing methodology (Hopkins, Caples, Ogilvy)]

**Concept** = Avatar + Template
- Avatar: who you're speaking to (e.g., "moms who don't have time but want beautiful nails")
- Template: the creative format/approach (e.g., "us vs them", "3 reasons why", "UGC in car")
- A concept attracts a specific audience segment through Andromeda's retrieval system [PRACTITIONER interpretation of PRIMARY system]

**Iteration** = Same concept, different execution
- Same hook angle but different visual treatment
- Same message but different creator/voice
- Same offer but different headline

**Variation** = Minor tweak within an iteration
- Different thumbnail
- Slightly different headline text
- Color change
- Different CTA button

**The hierarchy matters because:** Post-Andromeda, each concept maps to a different audience. You want MANY concepts (breadth) AND many iterations per winning concept (depth). [PRACTITIONER - This is the Moonlighters' key insight. The underlying principle traces to Schwartz's concept of multiple "desire channels" in Breakthrough Advertising (1966)]

### What's Working in 2026

**Volume is king (with a caveat):** [PRACTITIONER - Moonlighters, from Ad Library research]
Data from top brands scaling in 2026:
- Athletic Greens: 1,000 → 7,090 active ads
- Talentless: 100 → 1,081 active ads  
- Gap: 150 → 6,353 active ads
- These are 6-60x increases in creative volume

⚠️ **Data source:** These numbers come from Meta Ad Library, which is publicly accessible. Anyone can verify these counts. However, "active ads" includes all variations and doesn't necessarily mean each is a unique creative concept. Large brands often run the same ad with minor targeting differences. [PRACTITIONER observation of PRIMARY public data]

**But volume alone isn't enough.** The shift is: quality concepts × volume of iterations = winning formula. Don't make 1,000 random ads. Make 10-20 strong concepts with 50-100 iterations across them. [PRACTITIONER - Moonlighters]

**Creative formats that work in 2026:** [PRACTITIONER consensus]

1. **UGC-style video** - Still the workhorse. Shot on phone, authentic feel. Run through personal pages or partnership ads, NOT brand pages (kills authenticity signal). [PRACTITIONER consensus - the "authenticity signal" claim is logical but not documented by Meta]

2. **Static image ads** - Underrated for testing. You can crank out 10-20 in 15 minutes vs. 2 weeks for video. Best uses: [PRACTITIONER - Dr. Matt Shiver]
   - Angle testing (test 10 different pain points as static before making videos)
   - Twitter/X screenshot style (text-heavy, looks native)
   - Before/after
   - Testimonial screenshots
   
3. **"Ugly" ads** - Plain text on white background, Microsoft Paint style. Works for bottom-of-funnel when brand awareness already exists. Hormozi runs 1,700+ of these but ONLY works because his brand is already known. **Not recommended for cold traffic at small scale.** [PRACTITIONER - Nick Theriot's analysis, important caveat]

4. **Educational/native content** - Ads that look like organic posts. Don't reveal the product until 15-20 seconds in. Hook with curiosity, educate, THEN pitch. [PRACTITIONER - consensus, traces to "advertorial" tradition in direct response from the 1960s-1970s]

5. **Persona callout ads** - "If you're a [specific person] doing [specific thing]..." - Andromeda matches these precisely to the right people. The more specific the callout, the better the targeting. [PRACTITIONER interpretation of PRIMARY system - Schwartz called this "channeling desire" in 1966; the claim that Andromeda specifically optimizes for persona callouts is plausible but not documented by Meta]

### The Four Static Ad Types for Lead Gen (Dr. Matt Shiver)

[PRACTITIONER - Dr. Matt Shiver, from personal $287K/year spend]

1. **Angle testing statics** - Same visual style, different copy/pain point per ad. Launch 5-10 to identify winning angles before producing video.

2. **Twitter/X style statics** - Text-heavy, looks like a screenshot of a tweet or post. High-performing for coaches/consultants.

3. **Testimonial/proof statics** - Screenshots of results, reviews, DMs. Social proof in static form. [Traces to Cialdini's social proof principle, 1984 - PRIMARY foundation]

4. **Lead magnet callout statics** - Specific about what they're getting. "10-page cheat sheet" outperformed "blueprint" by 2x CTR in testing. Be specific about the format and length. [PRACTITIONER - Dr. Matt Shiver's test data. The principle of specificity traces to Hopkins (1923) - PRIMARY]

### Hook Frameworks

**The first 3 seconds determine everything.** If you lose them here, nothing else matters. [PRIMARY - Ogilvy's headline principle (1983) applied to video. The "3 seconds" specificity comes from Meta's own video engagement research]

**Proven hook patterns:** [PRACTITIONER - primarily Nick Theriot, some from Moonlighters]
1. **"This is bad. This is good."** - Pattern interrupt showing wrong vs. right way. House brand scaled this across 50+ ads. [PRACTITIONER - Nick Theriot observation]
2. **Celebrity/authority connection** - "Brad Pitt, David Beckham - what do their [X] have in common?" [PRACTITIONER]
3. **Persona callout** - "If you're a [specific person]..." (Andromeda retrieval-optimized) [PRACTITIONER, traces to Schwartz's audience awareness targeting]
4. **Contrarian statement** - "Everything you know about [X] is wrong" [REGURGITATED - standard copywriting technique since at least the 1960s]
5. **Curiosity gap** - Show something intriguing without explaining immediately [REGURGITATED - George Loewenstein's "Information Gap Theory" (1994) popularized this concept, though advertisers used it before]
6. **Problem agitation** - "Are you still [doing painful thing]?" [REGURGITATED - Dan Kennedy's PAS framework, 1990s]
7. **Result lead** - "This brand grew 141% in 90 days. Here's how." [REGURGITATED - standard case study format]

**Hook testing methodology:** [PRACTITIONER - Moonlighters/Dr. Matt Shiver]
- Take your best-performing ad body
- Create 5-10 different hooks for the same body
- Launch all in the same pack (ad set)
- The hook that gets the most spend wins
- Then iterate on that winning hook

⚠️ **Canonical context:** This is Ogilvy's headline testing methodology (test multiple headlines for the same body copy) adapted to video. The principle is 40+ years old; the application to Meta's CBO system is genuinely new. [PRIMARY principle, PRACTITIONER application]

### Creative Testing Methodology

**What NOT to do (all three are now suboptimal):** [PRACTITIONER consensus]

1. **ABO creative testing** - Forces spend to undeserving ads, creates cost centers [PRACTITIONER - Moonlighters]
2. **Meta's Creative Testing Feature** - Forces equal distribution, doesn't let algorithm optimize. The beaker icon feature at ad level looks promising but wastes money on even distribution. [CONFLICTING - Dr. Matt Shiver finds it useful for small budgets; Moonlighters say avoid it]
3. **Just throwing ads into CBO with no control** - Works but not optimal without ad set minimums [PRACTITIONER - Moonlighters]

**What TO do (The M4 Method / Pack System):** [PRACTITIONER - Moonlighters' original methodology]

1. Group iterations of the same concept in a new ad set (pack)
2. Set ad set minimum = 1x target CPA
3. Let algorithm find the winner within the pack
4. One ad will naturally get 80-95% of spend in the pack - that's your winner
5. After 7-14 days, remove the minimum
6. If the pack is performing, it scales. If not, it dies naturally.
7. Take winning concepts and create new iterations (new packs)

**Hit rate reality check:** Even experts running $287K/year in ads have only a 20-25% hit rate on new creatives. Most ads fail. This is normal. The system is about volume of tests, not perfection per test. [PRACTITIONER - Dr. Matt Shiver. The principle aligns with PRIMARY research: David Ogilvy reported similar hit rates in direct response]

### Creative Production Workflow

**For small budgets (<$5K/month):** [PRACTITIONER - Dr. Matt Shiver]
1. Start with static ads to test angles (15 min to make 10-20)
2. Identify winning angle from static testing
3. Turn winning angle into 2-3 video ads
4. Scale the video versions
5. Continue testing new angles with statics

**For larger budgets:** [PRACTITIONER - Moonlighters]
1. Brief new concepts weekly based on analysis + competitor research
2. Produce 10-20 new creatives per week minimum
3. Mix of statics, videos, UGC, and iterations
4. Use the creative flywheel: analyze → brief → produce → launch → analyze

**Competitor research (free method):** [PRACTITIONER - consensus, using PRIMARY public tool]
1. Go to Facebook Ads Library (facebook.com/ads/library) [PRIMARY - Meta's public tool]
2. Search competitor names
3. Screenshot their ads, look for patterns
4. Note which ads have been running longest (they're winners)
5. Create your own versions with your brand's angle

---

## Optimization Playbook

### When to Kill Ads

**The 7-14 Day Rule:** [PRACTITIONER - Moonlighters consensus, aligned with PRIMARY learning phase documentation]
- Give every new ad set 7-14 days before making decisions
- Under 7 days: you don't have enough data. Don't touch it.
- After 14 days with ad set minimum still on: remove the minimum no matter what

**Kill signals:** [PRACTITIONER consensus]
- After 7+ days: ad set spending at minimum but not scaling = no potential, pause it
- ROAS consistently below breakeven after adequate spend (2-3x your CPA in total spend minimum)
- CPA more than 2x your target after exiting learning
- Zero conversions after spending 2-3x CPA
- In a CBO: if the algorithm isn't giving it spend even with minimums, trust the algorithm

**Do NOT kill based on:** [PRACTITIONER consensus, supported by PRIMARY statistical principles]
- CPM alone (it varies by placement, not indicative of ad quality)
- CPC alone (cheap clicks ≠ conversions)
- CTR alone (high CTR with no conversions = wrong audience, not a winner)
- Less than 3 days of data
- Less than $50-100 in spend (not enough data)

### When to Scale

**Scale signals:** [PRACTITIONER consensus]
- Ad set consistently spending above minimum AND maintaining target ROAS/CPA for 7+ days
- CBO naturally allocating more spend to an ad set without intervention
- Multiple ads within a pack all performing above target
- Increasing spend while maintaining or improving efficiency

**How to scale:** [PRACTITIONER consensus]
1. **CBO scaling (preferred):** Increase campaign budget by 10-20% per day maximum
2. **Never increase more than 20% in one day** - this can reset learning phase [PRACTITIONER convention - Meta says "significant" changes but doesn't define 20%]
3. **Horizontal scaling:** Launch new packs with iterations of winning concepts [PRACTITIONER - Moonlighters]
4. **Don't scale by duplicating campaigns** - this creates audience overlap and self-competition [PRACTITIONER consensus]

### Budget Change Rules

| Action | Maximum Change | Frequency |
|--------|---------------|-----------|
| Budget increase | 20% per day | Once per day |
| Budget decrease | 20% per day | Once per day |
| Pause ad set | Anytime after 7 days | As needed |
| Launch new pack | Anytime | 1-2x per week recommended |
| Remove ad set minimum | After 7-14 days | Once per pack |

[PRACTITIONER - Moonlighters. The 20% convention is widely adopted but not from Meta's official documentation]

### Troubleshooting

**Low spend / ad set not spending:** [PRACTITIONER consensus]
1. Check ad set minimum - is it set?
2. Is the CBO budget large enough for all ad sets to get adequate spend?
3. Is the creative actually good? The algorithm deprioritizes weak creatives. [PRACTITIONER interpretation - Meta's system does rank creatives but "deprioritizes weak creatives" is a simplification]
4. Check relevance diagnostics in Ads Manager [PRIMARY - Meta feature]
5. Check if other ad sets are significantly outperforming (they'll absorb budget)

**High CPA:** [PRACTITIONER consensus + PRIMARY diagnostic principles]
1. First check: is your conversion event correct? (Must be Purchase or qualified lead, not Add to Cart) [PRIMARY - Meta documentation]
2. Check creative quality - are your hooks stopping the scroll?
3. Check offer - is what you're selling compelling at the price point? [PRIMARY - Halbert's "starving crowd" principle: the offer matters more than the copy]
4. Check landing page - is there friction killing conversions?
5. Try new concepts (not just iterations of the same losing concept)
6. Consider: are you sending back quality conversion data? Garbage in = garbage out. [PRACTITIONER - Dr. Matt Shiver's lead quality principle]

**Learning Limited:** [PRIMARY - Meta's documented status + PRACTITIONER solutions]
1. Not enough conversions per week (need ~50 per ad set) [PRIMARY - approximately 50, per Meta]
2. Solutions: consolidate ad sets, increase budget, consider a higher-funnel event temporarily
3. BUT: don't optimize for Add to Cart just to exit learning - this trains the pixel on the wrong behavior [PRACTITIONER - consensus, important caveat]

**ROAS all over the place:** [PRACTITIONER - Moonlighters]
1. This is the #1 post-Andromeda complaint [ANECDOTAL - widely reported but not quantified]
2. Check audience segment reporting - are you overspending on existing customers?
3. Implement proper swim lane separation (3 campaigns)
4. Use incremental attribution (not just last-click) [PRIMARY - Meta feature]
5. Accept more variability day-to-day; measure on 7-day rolling averages [PRACTITIONER - statistical best practice]

---

## Critical Settings

### Attribution Windows

**Recommended:** 7-day click, 1-day view (default and best for most) [PRIMARY - Meta's default setting + PRACTITIONER consensus]

**Incremental Attribution (NEW - use this for analysis):** [PRIMARY - Meta feature, relatively new in Ads Manager]
- Available in Ads Manager columns
- Shows the TRUE incremental lift, not just last-touch attribution
- Use this when analyzing which ad sets to keep vs. kill
- Regular ROAS can be misleading because of overlapping touchpoints

**For DM/engagement campaigns:** Attribution is messier because you can't pixel DM conversations the same way. "Messaging conversations started" includes people who saw your ad, followed you, then messaged later - not just direct DM responders. [PRACTITIONER - Dr. Matt Shiver]

### Placement Strategy

**Default: All placements on (Advantage+ placements)** [PRACTITIONER consensus + PRIMARY - Meta's recommendation]

Let Meta optimize placement distribution. The data shows:
- Instagram Reels is the growth placement (38% growth, declining CPMs) [PRACTITIONER - Moonlighters data]
- Feed is still dominant but getting more expensive [PRACTITIONER - Moonlighters data]
- Restricting placements = restricting the algorithm's ability to optimize [PRIMARY - Meta's documentation supports this]

**Exception:** For DM campaigns, you may want to restrict to Instagram-only placements since DMs happen on Instagram. [PRACTITIONER - Dr. Matt Shiver]

**Do NOT manually select placements** unless you have a very specific reason. The algorithm is better at placement optimization than humans. [PRACTITIONER consensus, aligned with PRIMARY Meta recommendation]

### Optimization Events

**ALWAYS optimize for your end goal:** [PRIMARY - Meta's own documentation has always recommended this]
- E-commerce: **Purchase** (never Add to Cart, never Initiate Checkout)
- Lead gen: **Qualified lead event** (not just "lead" - see below)
- DM campaigns: **Messaging conversations started** (with quality caveats) [PRACTITIONER - Dr. Matt Shiver]

**Why Purchase, not Add to Cart:** [PRIMARY - Meta's own optimization documentation]
You're literally telling Facebook "find me people who add to cart." Those are NOT the same people who buy. The algorithm optimizes for exactly what you tell it. If you optimize for Add to Cart, you'll get lots of adds to cart and very few purchases.

⚠️ **This is not practitioner wisdom - this is how the system is designed.** Meta's documentation explicitly states the algorithm finds people most likely to take the action you optimize for. [PRIMARY]

**Lead quality hack (Dr. Matt Shiver - $287K/year in testing):** [PRACTITIONER - genuine tactical innovation]
Only fire your conversion pixel for QUALIFIED leads, not all leads. If you let unqualified leads hit the results column, Meta finds more people like them. 

Implementation:
1. Use a CRM workflow (GoHighLevel, etc.) to manually review leads
2. Only fire the pixel event (via server-side/CAPI) when a lead is confirmed qualified
3. This trains the algorithm on quality signals, not volume
4. Result: higher quality leads even though reported CPL may look higher

⚠️ **Originality assessment:** This IS a genuine practitioner innovation. Using CAPI to selectively fire events based on lead quality is a non-obvious use of Meta's infrastructure. Meta's documentation describes CAPI for tracking accuracy, not for quality filtering. Dr. Matt Shiver's application is creative and genuinely new. [PRACTITIONER - high value, original methodology]

### Pixel Setup Requirements

**Both browser pixel AND Conversions API (CAPI) are required in 2026.** [PRIMARY - Meta's official recommendation since iOS 14.5 privacy changes in 2021]

Browser pixel alone misses ~30% of conversions due to iOS tracking restrictions. CAPI sends data server-side, capturing what the browser pixel misses. [PRIMARY - Meta's documentation; the "~30%" figure is approximate and varies by audience iOS adoption]

**Critical pixel events that MUST fire correctly:** [PRIMARY - Meta documentation]
- Purchase (with value AND currency parameters - both required!)
- Add to Cart
- Initiate Checkout
- View Content
- Lead / Complete Registration (for lead gen)

**Common mistake:** Pixel events firing without value/currency data. This cripples Meta's ability to optimize for value. Every Purchase event MUST include:
```
{value: 29.00, currency: 'USD'}
```
[PRIMARY - Meta's documentation explicitly requires value and currency for value optimization]

### Audience Exclusions

[PRACTITIONER - Moonlighters' framework using PRIMARY Meta features]

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

**"Use as a suggestion" toggle: ALWAYS turn this OFF.** If you add an audience and leave "use as a suggestion" on, Meta will ignore your audience targeting entirely. This is Advantage+ audience behavior. For exclusions to work, this must be off. [PRIMARY - this is how the feature works per Meta's documentation, confirmed by PRACTITIONER experience]

### Related Media (TURN THIS OFF)

A hidden setting where Meta automatically adds "similar" media to your ad unit. Problems: [PRACTITIONER - Moonlighters, recent discovery]
- You lose visibility into which creative is actually performing
- Meta may show awkward combinations of your creatives in carousels
- Breakdowns don't work properly with related media on
- It can turn on automatically after publishing - check your ads regularly

**How to check:** Go to ad level → Ad Creative section → look for "X media are being used in this ad"
**How to fix:** Click the trash can icon next to related media → Publish

### Flexible Ads (NO LONGER RECOMMENDED)

Flexible ads (uploading multiple images/videos in one ad unit) were working well in Q4 2025 but stopped working in Q1 2026: [PRACTITIONER - Moonlighters, reversed their own prior recommendation]
- Miscroppings across placements
- Awkward carousel combinations showing nearly-identical images
- Loss of visibility into which creative won

⚠️ **Self-correction note:** The Moonlighters recommended flexible ads 3 months ago and have now reversed that position. This self-correction is actually a positive credibility signal - they update recommendations based on current data rather than defending old positions. [PRACTITIONER - demonstrates real-time learning]

**Instead:** Use the Pack system - put iterations in the same ad set as separate ads, not in one flexible ad unit. [PRACTITIONER - Moonlighters]

### Advantage+ Audiences

**Testing result ($2,500 A/B test, Dr. Matt Shiver):** [PRACTITIONER - documented test, but limited budget for statistical significance]
- Advantage+ ON vs. Broad (strict age targeting) = virtually identical results
- Same CPMs, same conversion rates, same cost per result
- Both got ~33% retargeting regardless of setting

⚠️ **Statistical caveat:** A $2,500 A/B test may not have sufficient statistical power to detect meaningful differences. At typical CPAs ($20-50), this test generated 50-125 conversions total split across two variants. That's borderline for statistical significance. The conclusion "no significant difference" may simply reflect insufficient sample size. [RESEARCH CONCLUSION]

**Conclusion:** Post-Andromeda, it doesn't matter much whether you use Advantage+ or Broad. The creative does the targeting either way. Pick one approach and be consistent. If using Advantage+, add Value Rules to decrease bids for out-of-avatar demographics. [PRACTITIONER - Dr. Matt Shiver]

**Value Rules (for Advantage+ users):** [PRACTITIONER - Dr. Matt Shiver, using PRIMARY Meta feature]
- Set a value rule to decrease bid by 90% for demographics outside your avatar
- Example: if targeting 25-45 year olds, decrease bid 90% for 18-24 and 45+
- This lets Advantage+ work while preventing total waste on wrong demographics

---

## Common Mistakes (2026)

### 1. Using ABO for Creative Testing
**The mistake:** Creating an ABO campaign, setting $20-50/day per ad set, and manually deciding winners.
**Why it fails:** You overspend on losers and underspend on winners. Real example: brand spending $5,000 on a 1.28x ROAS ad set while a 1.97x ad set got fraction of the budget. [ANECDOTAL - single case study from Moonlighters]
**Fix:** Use CBO with pack system + ad set minimums. [PRACTITIONER - Moonlighters]

### 2. Optimizing for the Wrong Event
**The mistake:** Optimizing for Add to Cart, Initiate Checkout, or Landing Page Views instead of Purchase.
**Why it fails:** You're telling Meta to find people who do those actions, not people who buy. They're different populations.
**Fix:** Always optimize for Purchase (or qualified lead for lead gen). Accept higher initial CPAs while the pixel learns.
[PRIMARY - this is how Meta's optimization system is designed per their documentation]

### 3. No Swim Lane Separation
**The mistake:** Running one campaign targeting everyone (new + engaged + existing customers).
**Why it fails:** Meta overspends on existing customers because they're cheapest to convert. You think you're acquiring new customers but you're just retargeting existing ones.
**Fix:** Three campaigns: Prospecting (new), Retargeting (engaged), Retention (existing). Set up Audience Segment Reporting to verify.
[PRACTITIONER - Moonlighters, validated across 100+ brands. The principle traces to standard direct marketing practice - PRIMARY]

### 4. Pixel Fires Without Value/Currency
**The mistake:** Purchase pixel event fires but doesn't include the transaction value and currency.
**Why it fails:** Meta can't optimize for value. It treats a $5 purchase the same as a $500 purchase.
**Fix:** Ensure every Purchase event includes `{value: XX.XX, currency: 'USD'}`. Test with Facebook Pixel Helper Chrome extension.
[PRIMARY - Meta's documentation explicitly requires this for value optimization]

### 5. Killing Ads Too Early
**The mistake:** Pausing ads after 1-3 days because CPA looks high.
**Why it fails:** You never let the algorithm optimize. Learning phase needs ~50 conversions/week minimum. Small sample sizes are noisy.
**Fix:** Minimum 7-day evaluation period. Minimum 2-3x CPA in total spend before making judgment calls.
[PRACTITIONER consensus, supported by PRIMARY statistical principles and Meta's learning phase documentation]

### 6. Creative Homogeneity
**The mistake:** Making 20 ads that are all slight variations of the same concept.
**Why it fails:** Post-Andromeda, each concept attracts a different audience. If all your ads target the same audience segment, you're competing against yourself.
**Fix:** Build diverse concepts (different avatars + templates). Test BREADTH of concepts, then go DEEP on winners with iterations.
[PRACTITIONER - Moonlighters. The principle traces to Schwartz's concept of multiple "desire channels" - PRIMARY]

### 7. Leaving "Use as Suggestion" On
**The mistake:** Adding audience targeting but leaving the "use as a suggestion" toggle on.
**Why it fails:** Meta completely ignores your targeting and goes full Advantage+. Your exclusions don't work. Your interest targeting is meaningless.
**Fix:** Toggle OFF "use as a suggestion" for every audience parameter that matters.
[PRIMARY - this is documented Meta feature behavior]

### 8. Running Ads Through Brand Page Only  
**The mistake:** All ads run through your business/brand page.
**Why it fails:** Users immediately know it's an ad. Partnership ads through personal pages convert better because they feel like organic content.
**Fix:** Use partnership ads (run through creator/personal pages) for UGC content. Reserve brand page for brand-awareness ads.
[PRACTITIONER - consensus. The performance difference is practitioner observation, not documented by Meta]

### 9. Over-Relying on Related Media / Flexible Ads
**The mistake:** Using Meta's automation features to mix-and-match creatives.
**Why it fails:** You lose data visibility, get weird creative combinations, and can't identify winners.
**Fix:** Turn off Related Media. Stop using Flexible Ads. Use the Pack system instead.
[PRACTITIONER - Moonlighters, Q1 2026 finding]

### 10. Not Sending Qualified Data Back to Meta
**The mistake:** Every lead/conversion fires the pixel, including junk leads.
**Why it fails:** Meta optimizes for more people like your junk leads.
**Fix:** Only fire conversion events for qualified leads. Use server-side (CAPI) manual or workflow-triggered events.
[PRACTITIONER - Dr. Matt Shiver, genuine innovation]

### 11. Copying Hormozi Without Brand Awareness
**The mistake:** Seeing Hormozi's plain white text ads with "If you're a [persona]..." and copying the format.
**Why it fails:** Those ads work because millions of people already know who Hormozi is. They're bottom-funnel ads. Without brand recognition, a plain white image with text converts at near zero for cold audiences.
**Fix:** Use the PRINCIPLE (specific persona callouts) in better creative formats (video, UGC, polished statics). The persona callout works universally. The ugly-text-on-white-background format only works with existing brand awareness.
[PRACTITIONER - Nick Theriot's analysis. The distinction between format and principle is genuinely useful insight]

### 12. Running Features Before Benefits
**The mistake:** "Our course has 12 chapters, quizzes, and downloadable resources."
**Why it fails:** Nobody cares about features until they care about outcomes. Features are logical. Purchase decisions are emotional first, justified with logic second.
**Fix:** Lead with desire/outcome ("Become the architect firms actually want to hire"), support with benefits ("Learn practical skills through real-world projects"), then mention features last ("12 comprehensive chapters + project files").
[REGURGITATED - This is Hopkins (1923), Ogilvy (1960s), Kennedy (1990s). Every generation rediscovers feature-benefit-desire hierarchy. Nick Theriot presents this as fresh insight from his ad reviews]

### 13. Destabilizing Campaigns with Constant Changes
**The mistake:** Changing budgets, adding/removing ads, adjusting targeting every day.
**Why it fails:** Every change partially resets the learning phase. The algorithm needs stability to optimize. Constant tweaking prevents it from ever finding optimal delivery.
**Fix:** Make changes once per week maximum (except for pausing obvious disasters). Set a "review day" and stick to it. Between reviews, don't touch anything.
[PRACTITIONER consensus, supported by PRIMARY Meta learning phase documentation]

### 14. Not Using Audience Segment Reporting
**The mistake:** Running campaigns without visibility into new vs. engaged vs. existing customer spend allocation.
**Why it fails:** You have no idea if your "prospecting" campaign is actually prospecting or just retargeting warm audiences for cheap conversions that would have happened anyway.
**Fix:** Set up Audience Segment Reporting in EVERY campaign. Define engaged audiences (website visitors, add-to-carts) and existing customers (purchasers). Review weekly.
[PRACTITIONER - Moonlighters, using PRIMARY Meta feature]

---

## Advanced Tactics

### Interest Ad Sets (When and How)

**When to use interests:** [PRACTITIONER - mixed advice, see CONFLICTING]
- Day 1 of a new account (pixel has no data yet)
- When launching into a new market/niche
- As "training wheels" while broad audiences learn
- Testing highly specific niche audiences

[CONFLICTING] **Interest targeting debate:**
- Moonlighters: Use interests as "training wheels" for new accounts, then shift to broad [PRACTITIONER]
- Dr. Matt Shiver: Just go broad from day 1, interests don't matter post-Andromeda [PRACTITIONER]
- **Resolution:** At very low budgets with zero pixel data, interest targeting may help the algorithm learn faster. Once the pixel has 100+ conversions, broad is likely equivalent or better. Neither has published a controlled test. [RESEARCH CONCLUSION]

**Don't over-index on interests.** Post-Andromeda, broad targeting with good creative outperforms interest targeting in almost every case. Interests are training wheels, not the bicycle. [PRACTITIONER consensus]

### Retargeting Structure

**Retargeting campaign setup:** [PRACTITIONER - Moonlighters]
- Campaign type: CBO
- Audience: 180-day website visitors + 90-day add-to-carts + social engagers
- Exclude: existing customers (purchasers)
- Creative: Bottom-of-funnel (testimonials, reviews, urgency, specific product benefits)
- Budget: 10-20% of total ad spend

**Important caveat:** With Andromeda, even your "broad" prospecting campaigns do some retargeting automatically (~30% of spend hits engaged audiences). Your dedicated retargeting campaign is for intentional, message-specific retargeting with bottom-funnel creative. [PRACTITIONER - Moonlighters/Dr. Matt Shiver both observed this ~30% figure independently]

**Don't overspend on retargeting.** The Moonlighters found brands were spending way too much on retargeting relative to prospecting. If you're spending more than 20% on retargeting, you're probably not growing. [PRACTITIONER - Moonlighters]

### Creative Refresh Cadence

**Winning ads die faster in 2026.** Post-Andromeda, experts report top creatives fatiguing in weeks, not months. [PRACTITIONER - multiple sources report this, but no controlled study]

⚠️ **Context:** Creative fatigue has always existed. Whether it's FASTER post-Andromeda or simply more noticeable because practitioners are now tracking more granularly is unclear. The claim is plausible (more efficient matching = faster audience saturation) but not verified. [ANECDOTAL]

**Recommended cadence:** [PRACTITIONER - Moonlighters]
- Launch new creative packs: weekly (minimum bi-weekly)
- Analyze performance: weekly with incremental attribution
- Brief new concepts: bi-weekly based on analysis
- Full creative audit: monthly

**Signs of creative fatigue:** [PRACTITIONER consensus]
- Gradual increase in CPA over 7-14 days
- Decreasing CTR on previously strong ads
- Frequency increasing above 3-4x
- Algorithm shifting spend away from previously dominant ads

### Forecasting and Budgeting

**Building a forecast (recommended by multiple experts):** [PRACTITIONER]
1. Plan your annual media spend budget
2. Allocate % of budget to creative production (this is new - treat it as a line item)
3. Map product launches and revenue spikes throughout the year
4. Identify weak months → buffer with more creative testing and promotional events
5. Plan creative strategy per month based on seasonality

**The creative budget line item:** [PRACTITIONER - Moonlighters]
- Treat creative production as a cost alongside media spend
- If you can't produce enough creative, your media spend efficiency drops
- AI tools are making production cheaper, but human-quality creative still wins

**Testing budgets:** [PRACTITIONER - Moonlighters]
- 20% of campaign budget can go to testing new concepts (via ad set minimums)
- But in CBO, "testing" and "scaling" happen in the same campaign
- Don't create a separate "testing campaign" with ABO - this is outdated

### DM Ad Campaigns (Instagram)

**Why DM ads are different:** [PRACTITIONER - Dr. Matt Shiver, primary source on this topic]
- You can't pixel DM conversations the same way as website conversions
- Attribution is messier ("messaging conversations started" ≠ qualified leads)
- Quality control requires MORE manual intervention, not less
- The algorithm can find pockets of cheap, low-quality DM engagers

**DM campaign structure (Dr. Matt Shiver):** [PRACTITIONER]
- Use Engagement objective → Manual campaign → Messaging
- ABO may actually work better here because you need more control
- Monitor lead quality DAILY - kill ads that attract junk fast
- Track cost per CALL and cost per SALE, not cost per DM
- Consider separate campaigns per offer/funnel

[CONFLICTING] **DM campaign structure:**
- Dr. Matt Shiver: Old-school multi-campaign ABO approach still works better for quality control [PRACTITIONER]
- Others: Haven't specifically addressed DM campaigns with the same depth
- **Resolution:** DM campaigns may be the one legitimate use case for ABO in 2026 because quality control matters more than algorithmic optimization here. Only Dr. Matt Shiver has significant depth on this topic. [PRACTITIONER - single expert, but most experienced in this niche]

### Cost Caps and Bid Strategies

**Highest Volume (default - use 90% of the time):** [PRIMARY - Meta's default option + PRACTITIONER consensus]
- Meta spends your budget to get the most conversions possible
- No CPA constraint - it will spend aggressively
- Best for: learning phase, new campaigns, when you want maximum data

**Cost Cap:** [PRIMARY - Meta feature + PRACTITIONER guidance]
- You set a maximum CPA target
- Meta won't spend above that (mostly)
- Best for: protecting profitability at scale
- Risk: severe underspend if your cap is too tight
- Set cost cap at 1.5x your actual target CPA (give room for the algorithm) [PRACTITIONER - the 1.5x multiplier is practitioner convention]

**Bid Cap:** [PRIMARY - Meta feature + PRACTITIONER guidance]
- Strictest control - you set the maximum bid per auction
- Best for: very experienced advertisers at high spend
- Risk: severe underspend, inconsistent delivery
- Not recommended for budgets under $500/day [PRACTITIONER]

**When to add cost caps:** [PRACTITIONER consensus]
- Only after your campaign has stable performance history (2-4 weeks minimum)
- Only when you're scaling and want to protect margins
- Start at 1.5x your current CPA, then gradually tighten [PRACTITIONER convention]
- If spend drops dramatically, your cap is too tight

### The "Fastest Horse" Strategy (Moonlighters)

[PRACTITIONER - Moonlighters' framework]

This is about doubling down on winners, not spreading budget evenly.

**Principle:** In a CBO campaign, the algorithm naturally gives more spend to the best-performing ad set (the "fastest horse"). Let it. Don't try to force even distribution. [PRACTITIONER - this is essentially describing how CBO works by design; the Moonlighters' contribution is naming it and advising people to trust it]

**Implementation:**
1. Launch multiple concept packs in the same CBO
2. One pack will naturally absorb 50-70% of spend
3. If it's performing well (above target ROAS/CPA), this is GOOD
4. Don't try to throttle the winner or force other packs to compete
5. Instead, create new packs with genuinely different concepts
6. Eventually a new concept may outperform the current fastest horse
7. That rotation happens naturally as creatives fatigue

### Concept Building as a Skill

**The #1 skill to develop in 2026 (consensus across all experts):** [PRACTITIONER consensus]

A concept = intersection of:
- **Persona/Avatar:** Who are you talking to? (be specific)
- **Angle:** What problem/desire are you addressing?
- **Offer:** What are you presenting as the solution?

⚠️ **Canonical context:** This framework is Schwartz's "Breakthrough Advertising" (1966) repackaged for Meta ads. Schwartz defined the relationship between the prospect's desire, the market's awareness level, and the marketer's message. The "Avatar + Angle + Offer" framework is a simplified, actionable version. No practitioner cites Schwartz. [REGURGITATED from PRIMARY, but the simplification adds genuine practical value]

**Example for Konteks Kourse (architecture education):** [PRACTITIONER application]
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
1. Has it been less than 7 days? → Wait. Don't touch it. [PRACTITIONER + PRIMARY]
2. Is your daily budget less than 1x your CPA? → Increase budget or consolidate ad sets [PRACTITIONER + PRIMARY]
3. Are you getting fewer than 50 conversions/week across the campaign? → Consider higher-funnel optimization temporarily, OR reduce number of ad sets to concentrate spend [PRIMARY - Meta's ~50 threshold]
4. Did you make changes recently? → Every change resets learning. Stop editing. [PRIMARY - Meta documentation]
5. Is the creative genuinely good? → Bad creative won't exit learning no matter what you do [PRACTITIONER]

### "One ad gets all the spend"
1. Is that ad performing well (good ROAS/CPA)? → **This is fine.** The algorithm found a winner. Let it run. [PRACTITIONER - "Fastest Horse" principle]
2. Are other ads you believe in getting zero spend? → Set ad set minimum = 1x CPA to force initial delivery [PRACTITIONER - Moonlighters]
3. Is the dominant ad in the same ad set? → Normal behavior. The best ad in a pack gets 80-95% of spend. [PRACTITIONER]
4. Do you want to test new concepts? → Launch a NEW pack (ad set), don't try to force spend within the existing one [PRACTITIONER - Moonlighters]
5. Is the dominant ad fatiguing? → When its CPA starts rising, the algorithm will naturally shift spend. Or launch new packs. [PRACTITIONER]

### "High CTR but no conversions"
1. Check landing page → Does it load fast? Is the offer clear? Is checkout smooth? [PRACTITIONER consensus]
2. Check audience quality → High CTR can mean you're attracting curious clickers, not buyers. Review your creative - is it attracting the right persona? [PRACTITIONER]
3. Check pixel firing → Is the Purchase event actually firing? Use Facebook Pixel Helper to verify. [PRIMARY - diagnostic step]
4. Check price/offer mismatch → Are you promising something in the ad that the landing page doesn't deliver? [PRACTITIONER - traces to "message match" principle in direct response]
5. Check conversion event → Are you optimizing for Purchase or a softer event? Softer events attract softer audiences. [PRIMARY - Meta's optimization system design]

### "CPA too high"
1. Check creative first (always) → Fresh concepts almost always reduce CPA more than anything else [PRACTITIONER consensus]
2. Check offer → Is your product priced right? Is the value proposition clear? [PRIMARY - Halbert: the offer matters most]
3. Check conversion data quality → Are you sending garbage leads back to Meta? [PRACTITIONER - Dr. Matt Shiver]
4. Check audience overlap → Are your campaigns competing with each other? [PRACTITIONER]
5. Check attribution → Are you looking at 7-day click + 1-day view? Also check incremental. [PRIMARY - Meta feature]
6. Try new concepts → Don't iterate on losing concepts. Start fresh with new angles. [PRACTITIONER]
7. Check competition → During peak seasons (Q4, back-to-school), CPAs naturally rise. [PRACTITIONER - seasonal observation, well-documented in industry data]

### "My ROAS dropped after Andromeda"
1. Set up Audience Segment Reporting → Are you overspending on existing customers? [PRACTITIONER - Moonlighters]
2. Implement three swim lanes → Separate Prospecting, Retargeting, Retention [PRACTITIONER - Moonlighters]
3. Switch from ABO to CBO → Let the algorithm allocate [PRACTITIONER consensus + PRIMARY Meta recommendation]
4. Increase creative diversity → More concepts, not just more ads [PRACTITIONER consensus]
5. Check placements → Instagram Reels is cheaper and growing. Are your creatives Reels-friendly? [PRACTITIONER - Moonlighters data]
6. Review your creative for post-Andromeda principles → Concept-based, strong persona callouts, hook-first [PRACTITIONER]
7. Accept the new normal → Day-to-day variance is higher post-Andromeda. Measure on 7-day rolling averages. [PRACTITIONER]

---

## Ad Account Audit Checklist

Use this when diagnosing an underperforming account (like Konteks Kourse's $250/zero sales situation):

### 1. Campaign Structure Audit
- [ ] Is the campaign type correct? (Sales for e-commerce/subscriptions, Leads for lead gen) [PRIMARY - Meta's campaign types]
- [ ] Manual vs. Advantage+? (Manual recommended for control at lower budgets) [PRACTITIONER]
- [ ] CBO or ABO? (Should be CBO in 90% of cases) [PRACTITIONER consensus + PRIMARY Meta recommendation]
- [ ] Bid strategy? (Highest Volume for learning, Cost Cap for established campaigns) [PRACTITIONER + PRIMARY]
- [ ] Are there proper swim lanes? (Prospecting / Retargeting / Retention separated) [PRACTITIONER - Moonlighters]
- [ ] Is Audience Segment Reporting set up? [PRACTITIONER - Moonlighters, using PRIMARY Meta feature]

### 2. Ad Set Audit
- [ ] What's the optimization event? (Must be Purchase or qualified conversion) [PRIMARY - Meta documentation]
- [ ] Is "Use as Suggestion" turned OFF on audience settings? [PRIMARY - Meta feature behavior]
- [ ] Are exclusions in place? (Existing customers excluded from prospecting) [PRACTITIONER - Moonlighters]
- [ ] Are ad set minimums set for new packs? [PRACTITIONER - Moonlighters]
- [ ] How many ad sets are active? (Too many = fragmented spend) [PRACTITIONER + PRIMARY learning phase implications]
- [ ] Are placements set to Advantage+? (All placements on = recommended) [PRIMARY Meta recommendation + PRACTITIONER consensus]

### 3. Ad Creative Audit
- [ ] Is Related Media turned OFF? [PRACTITIONER - Moonlighters]
- [ ] Are ads running through personal pages / partnership ads? (Better than brand page for UGC) [PRACTITIONER consensus]
- [ ] Are hooks strong? (First 3 seconds must stop scroll) [PRIMARY - Ogilvy's headline principle applied to video + PRACTITIONER]
- [ ] Is there concept diversity? (Different avatars + angles, not just variations of one idea) [PRACTITIONER - Moonlighters. Traces to Schwartz's audience segmentation]
- [ ] Are creatives format-diverse? (Mix of static, video, UGC) [PRACTITIONER]
- [ ] Are ads Reels-friendly? (9:16 vertical format) [PRACTITIONER + aligns with PRIMARY Meta Reels push]

### 4. Pixel & Tracking Audit
- [ ] Is the Meta Pixel installed and firing? [PRIMARY - fundamental requirement]
- [ ] Is CAPI set up and sending events? [PRIMARY - Meta's recommendation since iOS 14.5]
- [ ] Do Purchase events include value AND currency? (Critical!) [PRIMARY - Meta's documentation]
- [ ] Are events matching between browser pixel and CAPI? (Check Events Manager) [PRIMARY - Meta's deduplication requirement]
- [ ] Is there event deduplication set up? (Prevent double-counting) [PRIMARY - Meta documentation]

### 5. Landing Page Audit
- [ ] Does the page load fast? (Under 3 seconds) [PRIMARY - Google's Core Web Vitals research shows load time impacts conversion]
- [ ] Is the offer clear above the fold? [REGURGITATED - standard UX principle]
- [ ] Is there social proof visible? [REGURGITATED - Cialdini (1984)]
- [ ] Is the checkout process smooth? (Minimal steps) [REGURGITATED - standard UX/conversion rate optimization]
- [ ] Does the page match the ad promise? (Message match) [REGURGITATED - standard direct response principle]
- [ ] Is the pixel firing on the conversion page? [PRIMARY - fundamental requirement]

---

## The Creative Diversity Matrix

[PRACTITIONER - Moonlighters' framework. The matrix approach traces to standard market segmentation methodology in marketing research]

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

1. **Fix pixel events** - Every purchase must fire with `{value: 29.00, currency: 'USD'}`. Without this, Meta literally cannot optimize for value. [PRIMARY - Meta's documentation]

2. **Switch to Manual Sales campaign with CBO** - Don't use Advantage+ Shopping. Use a standard Sales campaign with CBO at the campaign level. [PRACTITIONER consensus]

3. **Set up Audience Segment Reporting** - Even at $56/day, you need to see where spend is going. [PRACTITIONER - Moonlighters]

4. **Restructure:** [PRACTITIONER - combined recommendations]
   - Campaign 1: Prospecting CBO ($50/day)
     - Broad Pack 1: 3-5 best ads
     - Interest Pack A: "Architecture" interest
     - Interest Pack B: Most niche architecture-related interest you can find
   - Campaign 2: Retention ($6/day) - only if you have existing customers to target

5. **Optimize for Purchase** - Not page view, not add to cart, not initiate checkout. PURCHASE. [PRIMARY - Meta documentation]

### Creative Strategy for $29/mo Education Product

At $56/day, you cannot afford to test at volume. Be strategic: [PRACTITIONER - Dr. Matt Shiver's small-budget approach]

1. **Start with 5-10 static ads** testing different angles:
   - "Architecture school doesn't teach you this"
   - "Learn architecture through [pop culture reference]"
   - "Why your architecture portfolio sucks"
   - "What they don't tell you in architecture school"
   - "Practical architecture skills for $29/month"
   
2. **Identify winning angle** (which gets most spend + best CPA in first 7-14 days)

3. **Turn winning angle into 2-3 video ads** (Dan on camera is ideal for education product)

4. **Use partnership ads** through Dan's personal Instagram, not a brand page [PRACTITIONER consensus]

5. **Hook-first video structure:** [PRACTITIONER - consensus framework, traces to AIDA (1898) and VSL tradition]
   - 0-3s: Strong hook (pattern interrupt or persona callout)
   - 3-15s: Agitate the problem 
   - 15-30s: Introduce the solution (Konteks Kourse)
   - 30-45s: Social proof / what's inside
   - 45-60s: CTA with urgency

### Budget Reality Check

At $56/day optimizing for $29 purchases: [PRACTITIONER - Dr. Matt Shiver's budget analysis framework]
- Target CPA should be well under $29 (otherwise you're losing money month 1)
- You need positive LTV - what's the average subscriber retention? If 3 months, LTV = $87, so CPA up to ~$40-50 could work
- At $56/day, getting to 50 conversions/week is nearly impossible initially
- Consider: is $56/day enough? If CPA is $30, you get ~2 purchases/day. That's 14/week, well short of the 50 needed for learning phase optimization [PRIMARY - Meta's ~50 threshold]
- **Realistic expectation:** At this budget, the pixel will learn slowly. Be patient. Don't make constant changes.

---

## Glossary

| Term | What It Actually Means | Source |
|------|----------------------|--------|
| **Andromeda** | Meta's retrieval-based ad delivery system. Creative is matched to audiences through a retrieval model, not just traditional ranking. | [PRIMARY - Meta AI Engineering Blog, 2023] |
| **CBO** | Campaign Budget Optimization. Budget set at campaign level, Meta distributes to best ad sets. | [PRIMARY - Meta feature since 2019] |
| **ABO** | Ad Set Budget Optimization. Budget set per ad set manually. Largely obsolete in 2026. | [PRIMARY - Meta feature; "obsolete" is PRACTITIONER opinion] |
| **Pack** | An ad set containing iterations of the same concept. Each new creative round = new pack. | [PRACTITIONER - Moonlighters' original terminology] |
| **Concept** | Avatar + Template. The combination of who you're speaking to and how you're presenting the message. Each concept attracts a different audience via Andromeda. | [PRACTITIONER - Moonlighters. Traces to Schwartz's audience segmentation (1966)] |
| **Iteration** | Same concept, different execution (different hook, creator, or visual treatment). | [PRACTITIONER - Moonlighters' taxonomy] |
| **Variation** | Minor tweak within an iteration (headline change, color change, thumbnail swap). | [PRACTITIONER - Moonlighters' taxonomy] |
| **Swim Lanes** | The three campaign types: Prospecting, Retargeting, Retention. Keeps spend allocation visible and controlled. | [PRACTITIONER - Moonlighters' terminology for a PRIMARY direct marketing principle] |
| **ROAS** | Return on Ad Spend. Revenue / Ad Spend. A 2x ROAS means $2 revenue per $1 spent. | [PRIMARY - standard advertising metric] |
| **CPA** | Cost Per Acquisition. How much you pay per conversion (purchase, lead, etc.). | [PRIMARY - standard advertising metric] |
| **CPM** | Cost Per Mille (1,000 impressions). What it costs to show your ad 1,000 times. | [PRIMARY - standard advertising metric] |
| **CTR** | Click-Through Rate. Percentage of people who click after seeing your ad. | [PRIMARY - standard advertising metric] |
| **CAPI** | Conversions API. Server-side tracking that supplements the browser pixel. Required in 2026. | [PRIMARY - Meta's server-side tracking solution] |
| **Learning Phase** | Period where Meta is optimizing delivery. Needs ~50 conversions/ad set/week to exit. | [PRIMARY - Meta Business Help Center] |
| **Learning Limited** | When an ad set can't exit learning phase due to insufficient conversions. | [PRIMARY - Meta's documented status] |
| **Incremental Attribution** | Meta's newer attribution model showing TRUE incremental lift, not just last-touch. Use for analysis. | [PRIMARY - Meta feature] |
| **Advantage+** | Meta's AI-powered campaign type that automates targeting, placements, and creative. Can work but removes control. | [PRIMARY - Meta feature] |
| **Value Rules** | Settings that adjust bids based on customer attributes (age, location, etc.). Use with Advantage+ to maintain some targeting control. | [PRIMARY - Meta feature, applied by PRACTITIONER Dr. Matt Shiver] |
| **Related Media** | Hidden setting where Meta auto-adds "similar" creatives to your ad. Turn it OFF. | [PRACTITIONER - Moonlighters' discovery] |
| **Flexible Ads** | Ad format allowing multiple images/videos in one ad unit. No longer recommended as of Q1 2026. | [PRACTITIONER - Moonlighters reversed recommendation] |
| **Partnership Ads** | Ads run through a creator/personal page instead of your brand page. Higher authenticity signal. | [PRIMARY - Meta feature; "higher authenticity signal" is PRACTITIONER observation] |
| **Ad Set Minimum** | Minimum daily spend guarantee for an ad set within a CBO campaign. Critical for testing new packs. | [PRIMARY - Meta feature, applied by PRACTITIONER Moonlighters] |
| **Creative Fatigue** | When an ad's performance degrades because the audience has seen it too many times. Happens faster post-Andromeda. | [PRIMARY concept; "faster post-Andromeda" is PRACTITIONER/ANECDOTAL] |
| **Breakeven ROAS** | The ROAS at which you neither make nor lose money. For a product with 50% margins, breakeven ROAS = 2x. | [PRIMARY - mathematical definition] |

---

## Expert Consensus vs. Disagreements

### Where All Experts Agree
- CBO > ABO in 2026 (universal) [PRACTITIONER consensus + PRIMARY Meta recommendation]
- Creative quality is the #1 lever post-Andromeda (universal) [PRACTITIONER consensus, partially supported by PRIMARY]
- Always optimize for Purchase/end goal, not intermediary events (universal) [PRIMARY - Meta documentation]
- Broad targeting works as well as or better than interest targeting (universal) [PRACTITIONER consensus]
- The algorithm is smarter than human operators at budget allocation (universal) [PRACTITIONER consensus + PRIMARY Meta's CBO design]
- Three swim lanes are necessary for proper account structure (universal) [PRACTITIONER consensus]
- Related Media should be turned off (universal) [PRACTITIONER consensus]
- Pixel + CAPI both required (universal) [PRIMARY - Meta's recommendation since iOS 14.5]
- Old testing methods (ABO testing campaigns) are obsolete (universal) [PRACTITIONER consensus]

### Where Experts Disagree

**Advantage+ vs. Broad:** [CONFLICTING]
- Dr. Matt Shiver: Tested both, found no significant difference. Use either. [PRACTITIONER - documented test but limited sample size]
- Moonlighters: Default to broad with CBO, don't overthink it. [PRACTITIONER]
- Nick Theriot: Broad with strict age targeting preferred for control. [PRACTITIONER]
- **Verdict:** Insufficient evidence to declare a winner. The $2,500 test is underpowered. Both likely work because post-Andromeda, creative signals dominate over audience settings. [RESEARCH CONCLUSION]

**Flexible Ads:** [CONFLICTING - same source changed position]
- Moonlighters (3 months ago): Recommended flexible ads for iteration grouping [PRACTITIONER - now outdated]
- Moonlighters (now): Reversed position. Flexible ads cause miscroppings and data loss. Use individual ads in packs instead. [PRACTITIONER - updated position]
- **Verdict:** The reversal is credible. Q1 2026 appears to have seen a genuine degradation in flexible ad performance, possibly from Meta's algorithm changes. [PRACTITIONER - trust the updated position]

**Interest targeting:** [CONFLICTING]
- Moonlighters: Use interests as "training wheels" for new accounts, then shift to broad [PRACTITIONER]
- Dr. Matt Shiver: Just go broad from day 1, interests don't matter post-Andromeda [PRACTITIONER]
- **Verdict:** Both approaches likely work. The key variable is pixel data maturity. New pixel = interests may help. Established pixel = interests are unnecessary. [RESEARCH CONCLUSION]

**Creative Testing Feature (Meta's built-in):** [CONFLICTING]
- Dr. Matt Shiver: Useful for forcing spend to new ads within existing ad sets, especially at lower budgets [PRACTITIONER]
- Moonlighters: Don't use it. It forces even distribution which wastes money. Use CBO + pack system instead. [PRACTITIONER]
- **Verdict:** Scale-dependent. At lower budgets where you can't run many separate ad sets, the testing feature may be more practical. At higher budgets, the pack system is superior. [RESEARCH CONCLUSION]

**DM campaigns structure:** [PRACTITIONER - limited data]
- Dr. Matt Shiver: Old-school multi-campaign ABO approach still works better for quality control [PRACTITIONER - primary expert on this topic]
- Others: Haven't specifically addressed DM campaigns with the same depth
- **Verdict:** Follow Dr. Matt Shiver here - he's the only source with significant DM campaign experience. [PRACTITIONER - single expert, no conflicting data]

**Persona callout ads (Hormozi style):** [CONFLICTING - resolved]
- Nick Theriot: Works brilliantly for Hormozi because of brand awareness. 90% of people should NOT copy this for cold traffic. [PRACTITIONER]
- Dr. Matt Shiver: Great concept for the retrieval engine - the more specific your callout, the better Andromeda targets. [PRACTITIONER]
- Resolution: Both are right. The TEXT-ONLY white background style needs brand awareness. But the PRINCIPLE of specific persona callouts in any creative format works for everyone. **The format is brand-dependent. The principle is universal.** [RESEARCH CONCLUSION]

---

## Sources

This skill synthesizes insights from 37 videos across three expert channels:

1. **The Moonlighters (Sam Piliero)** - Agency managing 100+ brands, $70M+ in annual ad spend, $500M+ lifetime. Primary source for campaign structure, pack system, CBO methodology, Andromeda data analysis, creative engine framework. **Regurgitation Rating: ★★★★★ (20% regurgitated)** - The aggregate data and operational frameworks are genuinely irreplaceable. Weak on citing canonical foundations.

2. **Dr. Matt Shiver** - Runs $287K/year in personal ad spend for coaching business, $2M+ revenue. Primary source for lead gen strategies, DM campaigns, static ad types, Advantage+ testing, pixel quality hacks, creative testing feature. **Regurgitation Rating: ★★★★ (25% regurgitated)** - The documented A/B tests and lead quality hack are genuine innovations. Some standard "optimize for Purchase" advice is regurgitated from Meta's own docs.

3. **Nick Theriot** - Creative strategy and ad review expert. Primary source for creative analysis, hook frameworks, UGC best practices, ad review methodology, Hormozi strategy breakdown. **Regurgitation Rating: ★★★ (50% regurgitated)** - Good analyst but the feature-benefit-desire hierarchy is Kennedy/Ogilvy repackaged, and many hook patterns are standard direct response techniques. The Hormozi brand awareness analysis is genuinely original.

### Canonical Sources Referenced in This Skill

| Source | Work | Year | What It Contributed |
|--------|------|------|-------------------|
| Claude Hopkins | *Scientific Advertising* | 1923 | Data-driven testing, specificity in claims |
| Rosser Reeves | *Reality in Advertising* | 1961 | Unique Selling Proposition (USP) |
| Eugene Schwartz | *Breakthrough Advertising* | 1966 | Five Levels of Awareness, "channeling desire," audience segmentation |
| David Ogilvy | *Ogilvy on Advertising* | 1983 | Headline testing, long copy research, "five times as many read the headline" |
| Robert Cialdini | *Influence* | 1984 | Social proof, scarcity, authority, reciprocity, commitment/consistency, liking |
| Dan Kennedy | *The Ultimate Sales Letter* | 1990 | PAS framework, feature-benefit-desire, risk reversal |
| Meta AI Engineering | Andromeda blog post | 2023 | Retrieval-augmented ad delivery system architecture |
| Meta Business Help Center | Learning phase documentation | Ongoing | ~50 conversions/week threshold, campaign setup guidelines |

*Last updated: March 2026. The Meta ads landscape changes rapidly. Principles remain stable but specific features and settings may shift.*

---

## Appendix A: The Full Andromeda Data (Moonlighters Analysis)

This data comes from 100+ brands and ~$70 million in total ad spend, analyzed by the Moonlighters team. [PRACTITIONER - proprietary data, not independently verifiable. Directional trends align with industry observations]

### Placement Share Shift

The Andromeda update caused a massive shift in where ads are delivered:

**Instagram Reels:** [PRACTITIONER - Moonlighters' proprietary data]
- Grew 38.86% in placement share since Jan 2025
- The growth accelerated exactly when Andromeda launched (July 2025) [ANECDOTAL - practitioner timing attribution]
- CPMs actually DECREASED 9% ($12 → $10.87) while every other placement got more expensive
- This is the single biggest opportunity in Meta ads right now

⚠️ **Verification status:** The directional trend (Reels growing, CPMs declining relative to Feed) is consistent with Meta's own push toward short-form video and industry-wide observations. The specific percentages (38.86% growth, 9% decrease) are from a proprietary dashboard and cannot be independently verified. [PRACTITIONER - plausible but unverified specifics]

**Feed (Facebook + Instagram):** [PRACTITIONER - Moonlighters data]
- Still dominant in total spend share
- But CPMs increased 24.3% ($32 → $40)
- Q4 2025 was brutal: $42-46 CPMs on feeds
- Slight decline in share relative to other placements

**Instagram Stories:** [PRACTITIONER]
- CPMs increased 12.1% ($14 → $18)
- Share relatively stable

**Facebook Reels:** [PRACTITIONER]
- CPMs increased 25.5% ($11 → $14)
- Growing but not as dramatically as Instagram Reels

### What This Means Practically

If your creative isn't Reels-friendly (vertical, hook-driven, fast-paced), you're paying more for less. The algorithm is pushing toward Reels because that's where user engagement is growing. Make sure your ads work in 9:16 vertical format. [PRACTITIONER conclusion, aligned with PRIMARY Meta Reels strategy]

### Audience Spend Distribution (Pre vs. Post Moonlighters System)

Across 10 brands that onboarded in Q4 2024, before the Moonlighters implemented their swim lane system: [PRACTITIONER - Moonlighters case study data]
- Existing customers were getting disproportionate spend
- No ability to control new vs. engaged vs. existing allocation
- Total: $50 million in combined spend showing these patterns

After implementing three swim lanes: [PRACTITIONER - Moonlighters]
- Prospecting spend increased significantly
- Existing customer overspend was contained
- Net new acquisition improved
- Average client saw 41% profit increase in first 90 days [ANECDOTAL - aggregate claim, no individual case study breakdowns published]

---

## Appendix B: VSL and Long-Form Ad Frameworks

### Video Sales Letter (VSL) Framework for Meta Ads

From multiple experts, the structure for longer-form video ads (60s-3min): [PRACTITIONER consensus. The VSL structure traces to direct response TV advertising and infomercial structure from the 1980s-1990s. PRIMARY foundational structure]

**Section 1: Hook (0-5 seconds)**
- Pattern interrupt or strong statement
- Visual movement or unexpected image
- Persona callout
- Must stop the scroll or the rest doesn't matter
[PRIMARY - Ogilvy's headline principle applied to video]

**Section 2: Problem Agitation (5-20 seconds)**
- Describe the pain your viewer feels
- Be specific - "Are you still manually tracking your architecture projects in spreadsheets?"
- Use their language, not marketing speak
- Build emotional tension
[PRIMARY - Dan Kennedy's PAS framework (1990s), which traces to classical rhetoric]

**Section 3: Solution Introduction (20-40 seconds)**
- "There's a better way" transition
- Introduce your product/service naturally
- Don't hard sell yet - show, don't tell
- Demonstrate the transformation
[REGURGITATED - standard direct response structure]

**Section 4: Proof (40-60 seconds)**
- Testimonials
- Results
- Before/after
- Social proof (number of students, reviews, etc.)
[PRIMARY - Cialdini's social proof principle (1984)]

**Section 5: CTA + Urgency (60-75 seconds)**
- Clear call to action
- Reason to act now
- Remove risk (guarantee, free trial, low price)
- Repeat the core benefit one more time
[PRIMARY - Cialdini's scarcity principle + Kennedy's risk reversal]

### Feature-Benefit-Desire Hierarchy

From Nick Theriot's ad review methodology: [PRACTITIONER presentation of REGURGITATED principle]

**Never lead with features.** The hierarchy is:
1. **Desire** (what they ultimately want to become/achieve)
2. **Benefit** (what your product does for them)
3. **Feature** (what your product is/has)

**Bad:** "Our course has 12 chapters covering architecture fundamentals" (feature)
**Better:** "Learn practical architecture skills you'll actually use on real projects" (benefit)
**Best:** "Become the architect who actually knows what they're doing, not just another graduate with a portfolio and no skills" (desire)

[REGURGITATED - This hierarchy traces to Hopkins (1923) through Ogilvy (1960s) through Kennedy (1990s). Nick Theriot presents it as insight from his ad reviews without attribution. The application to Meta ads creative is useful; the principle itself is 100 years old]

---

## Appendix C: Budget-Specific Playbooks

### $10-50/day Budget (Konteks Kourse Range)

[PRACTITIONER - Dr. Matt Shiver's small-budget expertise]

**Constraints at this level:**
- Cannot exit learning phase through volume alone [PRIMARY - mathematical reality given Meta's ~50 threshold]
- Every dollar of waste hurts proportionally more
- Can't test at the volume that large brands do
- Algorithm has less data to learn from

**Optimized approach:**
1. ONE prospecting CBO campaign only (don't split budget across 3 campaigns yet)
2. 2-3 ad sets maximum (1 broad + 1-2 interests)
3. 5-8 ads total across all ad sets
4. Focus on creative QUALITY over quantity
5. Use static ads for angle testing (cheap to produce) [PRACTITIONER - Dr. Matt Shiver]
6. 7-day evaluation windows minimum
7. Only change budget by 10-15% per day (not 20% - more conservative at low budgets)
8. Track results on 14-day rolling averages, not daily

**When to add Retargeting/Retention campaigns:**
- Only when Prospecting is consistently profitable
- Only when you have enough website traffic to build meaningful retargeting audiences
- For a $29/mo subscription: probably at $100+/day budget before splitting into swim lanes

### $50-200/day Budget

[PRACTITIONER - combined expertise]

1. Two campaigns: Prospecting CBO ($40-160/day) + Retention ($10-40/day)
2. Prospecting: 3-5 ad sets (packs), rotated weekly
3. Launch 3-5 new creatives per week
4. Can start implementing the pack system properly [PRACTITIONER - Moonlighters]
5. Ad set minimums of 1x CPA per new pack
6. Consider adding retargeting campaign once you hit $150/day+

### $200-1000/day Budget

[PRACTITIONER - Moonlighters' operational framework]

1. Three swim lanes: Prospecting (70%), Retargeting (15%), Retention (15%)
2. 10+ ad sets in prospecting, stacked over time
3. Launch 10-20 new creatives per week
4. Use the full creative engine flywheel
5. Competitor research becomes essential (use Foreplay or Meta Ad Library) [PRIMARY public tool]
6. Incremental attribution analysis weekly [PRIMARY - Meta feature]
7. Creative team/process needed (can't DIY at this volume)

### $1000+/day Budget

[PRACTITIONER - Moonlighters' agency-level operations]

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

| Metric | What It Tells You | Good Threshold | Source |
|--------|-------------------|----------------|--------|
| **CPA (Cost Per Acquisition)** | How much each customer costs | Below your breakeven (LTV-based) | [PRIMARY - standard metric] |
| **ROAS (Return on Ad Spend)** | Revenue per dollar spent | Above breakeven ROAS (depends on margins) | [PRIMARY - standard metric] |
| **Purchases/Conversions** | Are people actually buying? | Trending up or stable | [PRIMARY - standard metric] |
| **Incremental ROAS** | True lift from ads | Higher than regular ROAS means ads are working | [PRIMARY - Meta's incremental measurement] |

### Secondary Metrics (Diagnostic)

| Metric | What It Tells You | When to Check | Source |
|--------|-------------------|---------------|--------|
| **CTR (Click-Through Rate)** | Is the creative engaging? | When diagnosing creative performance | [PRIMARY] |
| **CPC (Cost Per Click)** | Traffic cost efficiency | When CPA is high but CTR is good | [PRIMARY] |
| **Frequency** | How often same people see your ad | When performance degrades (>3-4x = fatigue) | [PRACTITIONER - the 3-4x threshold is convention] |
| **Hook Rate (3-sec video views / impressions)** | Is the hook working? | When diagnosing video ad performance | [PRACTITIONER] |
| **Hold Rate (ThruPlays / 3-sec views)** | Is the body engaging? | When hook rate is good but conversions aren't | [PRACTITIONER] |

### Metrics to IGNORE for Decision-Making

| Metric | Why to Ignore | Source |
|--------|--------------|--------|
| **CPM** | Varies by placement, season, competition. You can't control it. | [PRACTITIONER consensus] |
| **Reach** | Vanity metric. A million impressions with no sales = waste. | [PRACTITIONER consensus] |
| **Engagement (likes, comments)** | Social proof helps but doesn't equal revenue. | [PRACTITIONER consensus] |
| **CPC alone** | Cheap clicks ≠ buyers. A $5 CPC that converts > $0.50 CPC that doesn't. | [PRACTITIONER consensus] |
| **Daily fluctuations** | Meta's delivery is volatile day-to-day. Measure on 7-day windows minimum. | [PRACTITIONER consensus + PRIMARY statistical principles] |

### Breakeven ROAS Calculation

[PRIMARY - mathematical definition]

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

[PRACTITIONER - Moonlighters' operational framework]

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
- [ ] Review competitor ads in Meta Ad Library [PRIMARY public tool]
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

[PRACTITIONER - combined methodology from all three sources, applied to specific use case]

**Step 1: Pixel Setup** [PRIMARY - Meta's technical requirements]
1. Install Meta Pixel on website (base code on all pages)
2. Set up Conversions API (CAPI) via your platform (Shopify, WordPress, etc.)
3. Configure standard events:
   - ViewContent (on course/landing page)
   - InitiateCheckout (on checkout page)
   - Purchase (on thank you page) - WITH value: 29.00 and currency: "USD"
4. Test with Facebook Pixel Helper chrome extension
5. Verify events in Events Manager → Test Events

**Step 2: Audience Setup** [PRACTITIONER - Moonlighters + PRIMARY Meta features]
1. Go to Audiences in Ads Manager
2. Create Custom Audience: Website visitors, last 180 days
3. Create Custom Audience: Purchasers, all time
4. Upload customer email list if you have one
5. Set up Audience Segment Reporting in campaign settings

**Step 3: Campaign Creation** [PRACTITIONER + PRIMARY]
1. Create new campaign → Sales objective → Manual Sales Campaign
2. Name: "Prospecting - Konteks Kourse"
3. Campaign Budget Optimization: ON [PRACTITIONER consensus + PRIMARY Meta recommendation]
4. Daily budget: $56
5. Bid strategy: Highest Volume [PRIMARY - Meta's default]
6. Set up Audience Segment Reporting (engaged = 180-day visitors, existing = purchasers) [PRACTITIONER - Moonlighters]

**Step 4: Ad Set #1 (Broad)** [PRACTITIONER + PRIMARY]
1. Name: "Broad Pack 1 - [date]" [PRACTITIONER - Moonlighters naming convention]
2. Conversion location: Website
3. Performance goal: Maximize number of conversions
4. Conversion event: Purchase [PRIMARY - Meta documentation recommends this]
5. Budget: No ad set minimum for first pack
6. Audience: 100% broad (Advantage+ ON, no exclusions for first campaign)
7. Age/gender: Set to your avatar (e.g., 18-35, all genders)
8. Placements: Advantage+ Placements (all placements on) [PRIMARY Meta recommendation + PRACTITIONER consensus]

**Step 5: Ad Set #2 (Interest)** [PRACTITIONER - Moonlighters' "training wheels" approach]
1. Name: "Interest - Architecture - [date]"
2. Same settings as above EXCEPT:
3. Audience: Turn OFF "use as suggestion" [PRIMARY - feature behavior]
4. Add detailed targeting: most niche architecture-related interest
5. Set ad set minimum: 1x target CPA (e.g., $30/day) [PRACTITIONER - Moonlighters]

**Step 6: Ads** [PRACTITIONER - Dr. Matt Shiver's static-first approach]
1. Start with 3-5 static image ads testing different angles
2. Use Partnership Ad format if possible (through Dan's Instagram) [PRACTITIONER consensus]
3. Each ad: different primary text (hook/angle), same or different image
4. Headlines: clear value prop + CTA
5. Link: to Konteks Kourse landing page

**Step 7: Publish and Wait** [PRACTITIONER consensus + PRIMARY learning phase requirements]
1. Review all settings one more time
2. Publish
3. DO NOT TOUCH for 7 days
4. Check daily but don't change anything
5. After 7 days: analyze and decide next steps

---

## Appendix G: Claim Verification Summary

### Claims Verified Against Primary Sources

| Claim | Status | Source | Notes |
|-------|--------|--------|-------|
| ~50 conversions/week exits learning phase | ✅ VERIFIED | Meta Business Help Center | Meta says "approximately 50" - practitioners treat as hard number |
| CBO recommended over ABO | ✅ VERIFIED | Meta made CBO default Sept 2019 | Meta's recommendation aligns with practitioner consensus |
| CAPI required for tracking accuracy | ✅ VERIFIED | Meta's iOS 14.5 response documentation | Browser pixel alone misses conversions due to privacy restrictions |
| Purchase events need value + currency | ✅ VERIFIED | Meta developer documentation | Required for value optimization |
| Andromeda is a retrieval-based system | ✅ VERIFIED | Meta AI Engineering Blog, 2023 | Real system, real documentation |
| "Creative does the targeting" | ⚠️ PARTIALLY | Creative signals are retrieval inputs, but not the only factor | Useful mental model, technically imprecise |

### Claims Not Independently Verifiable

| Claim | Status | Source | Notes |
|-------|--------|--------|-------|
| Reels CPM decreased 9% | ❌ UNVERIFIED | Moonlighters proprietary data | Directional trend plausible, specific number unverifiable |
| 38.86% Reels placement growth | ❌ UNVERIFIED | Moonlighters proprietary data | Plausible but specific to their client base |
| Feed CPMs $32→$40 | ❌ UNVERIFIED | Moonlighters proprietary data | Aligns with Q4 CPM inflation reports, specific numbers unverifiable |
| 41% profit increase from swim lanes | ❌ UNVERIFIED | Moonlighters aggregate claim | No individual case studies published |
| 20-25% hit rate on new creatives | ❌ UNVERIFIED | Dr. Matt Shiver | Plausible but self-reported |
| Advantage+ ≈ Broad in performance | ⚠️ WEAK | $2,500 test, Dr. Matt Shiver | Likely underpowered for statistical significance |
| "Andromeda released mid-2025" | ❌ INCORRECT | Andromeda published 2023, iterative updates since | Practitioners may be referencing a specific update, not the initial deployment |

### Claims That Are Standard Practice Presented as Novel

| Claim | Actual Origin | Presented By |
|-------|--------------|-------------|
| Feature → Benefit → Desire hierarchy | Hopkins (1923), Ogilvy (1960s), Kennedy (1990s) | Nick Theriot (no attribution) |
| "Test multiple creative angles" | Hopkins' entire Scientific Advertising (1923) | All three (no attribution) |
| "Use social proof" | Cialdini, Influence (1984) | All three (no attribution) |
| "Hook determines everything" | Ogilvy's headline principle (1983) | All three (no attribution) |
| "Don't over-target, let the system work" | Meta's own CBO documentation (2019) | Moonlighters (presented as discovery) |
| "Separate acquisition from retention" | Direct mail marketing (1950s-1970s) | Moonlighters (rebranded as "swim lanes") |

---

## The Meta-Lesson: How to Evaluate Meta Ads Advice

After vetting 37 videos across three expert channels against primary sources, the pattern is clear:

**The Moonlighters** add the most genuine value because they have aggregate data others don't. Their operational frameworks (pack system, swim lanes, creative engine) are genuinely original contributions to how practitioners interact with Meta's platform. Their weakness: they never cite foundational principles, making it hard to distinguish what's new from what's repackaged.

**Dr. Matt Shiver** adds value through documented testing. His $2,500 Advantage+ test, lead quality pixel hack, and DM campaign methodology are based on personal experimentation with real money. His weakness: small sample sizes mean some conclusions may not generalize.

**Nick Theriot** adds value through creative analysis but is the most reliant on repackaged principles. His Hormozi brand awareness analysis is genuinely insightful. His feature-benefit-desire teaching is 100-year-old Hopkins repackaged without attribution.

**The uncomfortable truth:** About 40% of what these experts teach is documented advertising science from 1923-1990 repackaged for the Meta platform. Another 30% is Meta's own documentation paraphrased. The remaining 30% - the operational frameworks, the proprietary data, the non-obvious platform hacks - is where the genuine value lives.

**When evaluating any new Meta ads advice, ask:**
1. Is this from Meta's own documentation? (PRIMARY - free, just read the help center)
2. Is this a repackaged principle from Hopkins/Ogilvy/Schwartz/Cialdini? (REGURGITATED - read the original instead)
3. Is this based on the person's own data at meaningful scale? (PRACTITIONER - valuable)
4. Is this a single anecdote presented as universal truth? (ANECDOTAL - be cautious)
5. Does this contradict what another expert with equal credibility says? (CONFLICTING - test it yourself)

The best use of this skill is the 30% that's genuinely new: the pack system, the swim lane implementation, the lead quality hack, the CPM trend data, and the creative testing methodology. Everything else is good to know but not unique to these sources.

---

## BEHAVIORAL SCIENCE FOR META ADS STRATEGY

*Cross-reference with `behavioral-science-marketing/SKILL.md` for full framework and primary sources.*

### Why Behavioral Science Matters for Campaign Structure

Meta's algorithm optimizes for conversions, but HUMAN PSYCHOLOGY determines whether someone converts. Understanding behavioral science lets you structure campaigns that work WITH cognitive biases, not against them.

**Key insight:** Campaign structure decisions (swim lanes, budget allocation, creative sequencing) have behavioral implications. The three-swim-lane system isn't just account hygiene - it's a behavioral science application.

---

### Behavioral Principles in Campaign Architecture

#### 1. Loss Aversion + The Three Swim Lanes

[PRIMARY - Kahneman & Tversky, Prospect Theory 1979]

**Why swim lanes work:** Without separation, Meta overspends on existing customers because converting a warm lead feels "safer" to the algorithm than cold prospecting. This is loss aversion at the algorithmic level - the system prefers the "sure thing" (retargeting) over the risk (prospecting).

**Behavioral fix:** Force the algorithm to take prospecting "risks" by separating campaigns.

**Application:**
- Prospecting campaign = pure risk-taking (new acquisition)
- Retargeting campaign = medium risk (engaged non-buyers)
- Retention campaign = near-zero risk (existing customers)

Without swim lanes, 30-40% of your budget goes to the lowest-risk bucket (retention/retargeting) even though prospecting has higher long-term value.

---

#### 2. Default Effect + Ad Set Minimums

[PRIMARY - Samuelson & Zeckhauser, 1988]

**The problem:** When you launch a new pack into an established CBO campaign, the algorithm defaults to spending on proven winners. New ads get zero spend = zero chance.

**Behavioral fix:** Ad set minimums override the default (existing winners) and force the algorithm to test new ads.

**Application (Moonlighters' Pack System):**
- New pack launches with ad set minimum = 1x target CPA
- This guarantees spend for 7-14 days (testing period)
- After 7-14 days, remove the minimum → algorithm defaults to winners
- Result: New ads get a fair test without permanent budget waste

**Why it works:** You're manipulating the algorithm's "default" setting. For 7 days, the new pack IS the default.

---

#### 3. Mere Exposure Effect + Creative Refresh

[PRIMARY - Zajonc, 1968]

**The principle:** Repeated exposure increases liking - up to a point. Beyond ~5-7 exposures, "liking" turns into "ad fatigue."

**Application for creative refresh:**
- Best-performing ads will fatigue after 3-6 months (high frequency = faster fatigue)
- When an ad fatigues, DON'T remake the entire ad
- Instead: shoot NEW HOOKS with a DIFFERENT PERSON, keep the same body
- This resets the mere exposure counter without losing the proven body content

**Data:** [PRACTITIONER - Blue Sense] Shot new hooks with different person for fatigued testimonial ad → performance matched original

**Why it works:** The "new" face triggers fresh mere exposure. The proven body still converts.

---

#### 4. Social Proof (Descriptive Norms) + Audience Segment Reporting

[PRIMARY - Cialdini et al., 1990]

**The insight:** Showing WHAT OTHERS DO (descriptive norm) is more persuasive than showing what they approve of.

**Application in campaign monitoring:**
- Use Audience Segment Reporting to track spend distribution
- Monitor what percentage goes to new vs. engaged vs. existing customers
- If 40%+ is going to existing customers in your prospecting campaign, you have a problem
- Fix: Add exclusions, check "use as suggestion" toggles are OFF

**Why monitoring matters:** You can't optimize what you don't measure. Audience Segment Reporting shows the ACTUAL behavior (where spend goes), not the intended behavior (what you set up).

---

### Behavioral Principles in Creative Testing

#### 1. Curiosity Gap + Hook Testing

[PRIMARY - Loewenstein, 1994]

**The mechanism:** Incomplete information creates cognitive discomfort. Viewers NEED to close the loop.

**Application in hooks:**
- "I noticed something about my best-performing students..." (loop opened)
- The body/landing page closes the loop
- If you close the loop IN THE HOOK, there's no reason to watch

**Testing methodology:**
- Test 5-10 different curiosity gaps for the same body
- "The one mistake architecture students make..." (open loop)
- "Why do top students finish first?" (open loop)
- "Here's what nobody teaches you..." (open loop)

**Metric:** 3-second view rate = how many people NEED to close your loop.

---

#### 2. Processing Fluency + Ad Set Naming

[PRIMARY - Reber & Schwarz, 1999]

**The principle:** Things that are easier to process feel more true and trustworthy.

**Application:** Clear ad set names make analysis faster and decisions easier.

**Good naming:** `Broad Pack 2024-03-15 - Architecture Students - Framework Angle`

**Bad naming:** `Campaign Copy 3 - Test`, `Adset 47`, `New Campaign`

**Why it matters:** When reviewing 50+ ad sets, fluency determines how fast you make kill/scale decisions. Cognitive load = bad decisions.

---

#### 3. Peak-End Rule + Creative Performance Windows

[PRIMARY - Kahneman et al., 1993]

**The principle:** Experiences are judged by the PEAK and the END, not the average.

**Application to ad lifespan:**
- An ad's "experience" in the account has a peak (best performance week) and an end (when you kill it)
- Don't judge an ad by its first 3 days (still learning)
- Don't judge by its last 3 days (fatiguing)
- Judge by the PEAK week + overall lifespan

**Decision framework:**
- If peak performance was strong (above target CPA) but current is weak → test new hooks, don't kill
- If peak performance was weak (never hit target) → kill, move on

---

### Behavioral Principles in Budget & Scaling

#### 1. Loss Aversion + The 20% Rule

[PRIMARY - Kahneman & Tversky, 1979]

**Why the 20% budget change rule exists:** The algorithm has "learned" a budget level. Changing it dramatically feels like a LOSS of that learned state → resets learning phase.

**The 20% threshold is practitioner convention, not Meta-documented, but it maps to loss aversion psychology:**
- Small changes (<20%) = adjustment, not loss
- Large changes (>50%) = loss of learned state, triggers reset

**Application:**
- Scale 10-20% per day maximum
- Accept that scaling = slower growth to preserve learning
- Aggressive scaling (2x overnight) triggers learning reset = worse performance

---

#### 2. Temporal Discounting + The 7-14 Day Rule

[PRIMARY - Laibson, 1997]

**The bias:** Humans prefer immediate results over delayed results. This makes us kill ads too early.

**The fix:** Force a 7-14 day waiting period before killing any ad set.

**Why it works:** Temporal discounting makes Day 3 performance feel like "enough data." It's not. The 7-day minimum overrides the bias.

**Decision aid:** Set a calendar reminder 7 days after launching new packs. Don't check performance before Day 7.

---

#### 3. Sunk Cost Fallacy + Killing Losers

[PRIMARY - Arkes & Blumer, 1985]

**The trap:** "I've spent $500 on this ad set. If I kill it now, I've wasted that $500."

**The reality:** Past spend is GONE. The decision is: will the NEXT $500 perform?

**How to avoid:**
- Ignore total spend when deciding to kill
- Only look at RECENT performance (last 7 days)
- Ask: "If this were a new ad with this performance, would I scale it?" If no → kill it.

**Meta-specific caveat:** The algorithm DOES learn from historical data, so there's genuine value in letting ads accumulate data. BUT after 2-3x your CPA in spend with no conversions, historical data won't save it.

---

### Behavioral Audit Checklist for Meta Campaigns

**Campaign Structure:**
- [ ] Three swim lanes enforced (Prospecting / Retargeting / Retention)?
- [ ] Audience Segment Reporting active (tracking new vs. engaged vs. existing)?
- [ ] Exclusions set correctly ("use as suggestion" toggles OFF)?

**Creative Testing:**
- [ ] New packs grouped by avatar + concept (not random)?
- [ ] Ad set minimums set for new packs (1x CPA for 7 days)?
- [ ] Hook testing methodology in place (new hooks for fatigued winners)?

**Budget & Scaling:**
- [ ] Budget changes ≤20% per day?
- [ ] 7-day minimum before killing new ad sets?
- [ ] Decisions based on incremental attribution (not just last-click)?

**Creative Content (see ad-creatives-mastery skill for details):**
- [ ] Hooks trigger curiosity gap or loss aversion?
- [ ] Social proof uses specific numbers ("2,847 students" not "thousands")?
- [ ] CTAs use zero-risk language ("Try free" not "Buy now")?

---

### Common Behavioral Traps in Meta Ads

**Trap 1: Recency Bias**  
"My ad performed great yesterday but terrible today → kill it."

**Fix:** Look at 7-day rolling average, not daily fluctuations. Day-to-day variance is normal.

---

**Trap 2: Confirmation Bias**  
"I think video ads work best, so I only test video and ignore statics."

**Fix:** Test formats you DON'T believe in. Data > beliefs.

---

**Trap 3: Overconfidence Bias**  
"This ad will definitely work. I'm launching it with $200/day."

**Fix:** Start every new concept at minimum viable budget. Scale only after proof.

---

**Trap 4: Analysis Paralysis (Choice Overload)**  
"I have 80 ad sets. I don't know which ones to kill."

**Fix:** Rank by CPA. Kill bottom 20%. Simple rules > perfect analysis.

---

*Behavioral science additions: 2026-03-29*
*See `behavioral-science-marketing/SKILL.md` for complete framework and primary sources.*

