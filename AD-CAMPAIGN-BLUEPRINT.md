# Konteks Kourse - Meta Ad Campaign Blueprint v3

*Updated: March 28, 2026*
*Corrected against Meta Ads 2026 Expert Skill (37 video transcripts, $500M+ managed spend)*
*Budget: $56/day | Manual Sales CBO | Ongoing*

---

## What Changed From v2 (and Why)

v2 had 5 interest-stacked ad sets at $85/day, a premature retargeting campaign, and was built on pre-Andromeda assumptions. Here's what the research showed:

| v2 (Wrong) | v3 (Corrected) | Why |
|------------|----------------|-----|
| 5 ad sets at $85/day | 2-3 ad sets at $56/day | Each ad set needs enough budget for 1+ conversion/day minimum |
| Interest stacking (3 interest ad sets) | 1 broad + 1 optional interest | Post-Andromeda, creative does the targeting. Interests are training wheels only |
| Separate retargeting at $15/day | No retargeting campaign yet | Premature at $56/day. Andromeda auto-retargets ~30% of spend. Add at $150+/day |
| Lookalike from 326 emails | Drop it (too small) | Meta needs 1,000+ emails for quality lookalike |
| Advantage+ Shopping | Manual Sales Campaign | Advantage+ front-loads existing data. With zero purchases, it has nothing to work with |
| Optimize for InitiateCheckout | Optimize for Purchase | You tell Meta what to find. IC finds browsers. Purchase finds buyers. |
| Kill ads at $50 spend / $60 CPA | Kill at 2-3x CPA spend / review at $87 threshold | LTV is $87 (3-month avg retention). $60 kill threshold was leaving profitable ads on the table |
| No attribution settings specified | 7-day click, 1-day engagement, 1-day view | More signal = better optimization |
| No CAPI mentioned | CAPI required | Browser pixel alone misses ~30% of iOS conversions |
| One-time creative launch | Pack system with weekly refresh | Creative fatigues in weeks, not months, post-Andromeda |

---

## The Competitive Landscape (unchanged - still true)

**Archademia is the only competitor running Meta ads.** 50+ ads continuously since Sep 2025, estimated $5-15K/month. They target working architects and professionals - NOT students.

Everyone else (30x40, Show It Better, Archisoup, First In Architecture) runs zero paid ads.

**Your lane:** Anti-academic, personality-driven, community-first education for architecture students. Nobody is doing this.

---

## Campaign Structure ($56/day Manual CBO)

```
CAMPAIGN: "Konteks Kourse - Prospecting" (Manual Sales, CBO, $56/day)
  Pack 1 (Broad): 3-4 best ads grouped by concept
  Interest Pack (Optional): 1 niche interest, only proven best ad
  
NO retargeting campaign yet (add at $150+/day)
NO retention campaign yet (need actual customers first)
```

**Why this structure:**
- At $56/day, 2 ad sets get ~$28/day each. That's enough for ~1 conversion/day at $29 CPA
- Broad pack lets Andromeda find your buyers through creative signals
- Interest pack is optional training wheels for a new pixel - use it to guide early learning, drop it when broad outperforms (usually 2-4 weeks)
- The algorithm is provably smarter at allocation than human operators (confirmed across $70M+ in spend data)

### Campaign Settings
- **Objective:** Sales
- **Campaign type:** Manual Sales Campaign (NOT Advantage+)
- **Budget optimization:** CBO (Campaign Budget Optimization) ON
- **Daily budget:** $56
- **Bid strategy:** Highest Volume (default - don't use cost caps until you have 2-4 weeks of stable data)

### Audience Segment Reporting (set this up NOW)
In campaign settings, define:
- **Engaged audiences:** 30-day website visitors + 90-day add-to-carts
- **Existing customers:** All-time purchaser list (empty for now, update when you get sales)
- This lets you see exactly how much spend goes to new vs. warm vs. existing

---

## Ad Set Setup

### Pack 1: Broad (PRIMARY - gets most spend)
- **Name:** "Broad Pack 1 - [date launched]"
- **Conversion location:** Website
- **Performance goal:** Maximize number of conversions
- **Conversion event:** Purchase
- **Attribution:** 7-day click, 1-day engagement, 1-day view
- **Audience:** Broad - no interests, no lookalikes
- **Age:** 18-28
- **Locations:** US, UK, AU, CA, NZ, ZA, IE, AE
- **Language:** English (EN-All, EN-UK, EN-US) - do NOT leave as "all languages"
- **"Use as suggestion" toggle:** OFF (critical - if ON, Meta ignores your targeting)
- **Placements:** Advantage+ Placements (all placements on - let Meta optimize)
- **Ad set minimum:** Not needed for your first/only broad pack
- **Ads:** 3-4 creatives (your best performers + new angles)

### Interest Pack (OPTIONAL - training wheels)
- **Name:** "Interest - Architecture - [date]"
- **Same conversion/attribution settings as above**
- **Audience:** Turn OFF "use as suggestion" → Add detailed targeting → ONE architecture-adjacent interest (most niche you can find)
- **Ad set minimum:** Set to 1x target CPA ($29) to guarantee it gets some spend
- **Ads:** Only your #1 best-performing ad (you're testing the interest, not the creative)
- **Remove minimum after 14 days.** If it's not scaling naturally by then, pause it.

### Adding New Packs Over Time
When you have new creatives ready:
1. Duplicate Pack 1
2. Rename to "Broad Pack 2 - [date] - [concept name]"
3. Replace ads with your new creative batch (group by concept/avatar)
4. Set ad set minimum = 1x CPA ($29) so it gets initial spend against existing winners
5. Remove minimum after 7-14 days
6. If the pack doesn't scale naturally after that, pause it

**Sweet spot:** 3-5 ads per pack. Each pack = one concept (same avatar + angle). Don't mix concepts within a pack.

---

## What NOT to Do (Expensive Lessons)

### Don't Create Multiple Interest Ad Sets
v2 had 3 interest ad sets (Architecture Students, Architecture Media, Archademia). This fragments $56/day across 5 audiences that probably overlap 60%+. Post-Andromeda, your creative finds the right people. One broad pack does the job.

### Don't Use Lookalikes From Small Lists
The 363-member Skool email list is too small for a quality lookalike. Meta needs 1,000+ for signal. If you grow to 1,000+ members, revisit this.

### Don't Launch Retargeting at $56/day
Andromeda already retargets ~30% of your prospecting spend to engaged audiences automatically. A separate $15/day retargeting campaign at this budget just fragments spend further. Add retargeting as a separate campaign when you hit $150+/day and have a meaningful website visitor pool.

### Don't Optimize for InitiateCheckout
You're telling Meta "find people who click checkout." Those aren't the same people who buy. Always optimize for Purchase. Yes, it takes longer to learn. Yes, you'll see "Learning Limited." That's fine - the data quality is worth it.

### Don't Kill Ads Too Early
Minimum evaluation: 7 days AND 2-3x your CPA in total spend. With a free trial, Purchase events are delayed 7 days after signup. Your first week of data will show zero purchases even if people are converting. Be patient.

---

## Creative Strategy (Post-Andromeda)

### The Core Principle
**Creative IS targeting.** Each concept (avatar + angle) attracts a different audience through Andromeda's retrieval engine. Your job is concept diversity, not audience targeting.

### The Creative Diversity Matrix

```
                    AVATAR A              AVATAR B              AVATAR C
                    (Frustrated Student)  (Overwhelmed Student)  (Career-Focused Student)
                    
ANGLE 1             [Concept 1]           [Concept 4]           [Concept 7]
(School is broken)  "Nobody teaches you"  "All-nighter cycle"   "Practical skills gap"

ANGLE 2             [Concept 2]           [Concept 5]           [Concept 8]
(The system)        "Crit framework"      "Time management"     "Portfolio that works"

ANGLE 3             [Concept 3]           [Concept 6]           [Concept 9]
(Community)         "326 students inside" "Not alone in this"   "Real feedback"
```

At $56/day, start with 1-2 concepts. As you scale, expand across the matrix.

### Creative Production Workflow (For Small Budgets)

1. **Test angles with statics first** - 15 minutes to make 10 variations vs. 2 weeks for video
2. **Identify winning angle** from static performance (which gets most spend + lowest CPA in 7-14 days)
3. **Turn winning angle into 2-3 video ads** (Dan on camera, selfie mode, natural light)
4. **Scale the video versions**
5. **Repeat with new angles**

**Hit rate reality:** Even experts spending $287K/year only see 1 in 5 ads succeed. Most ads fail. This is normal. Volume of testing IS the strategy.

### What's Working in 2026

1. **UGC-style video through personal pages** - Run ads through Dan's Instagram, not a brand page. Partnership ads feel organic.
2. **Static angle-testing ads** - Cheap to produce, fast to iterate. Test 10 pain points before investing in video.
3. **Persona callout hooks** - "If you're a first-year architecture student who..." Andromeda matches these precisely.
4. **Educational/native content** - Ads that look like organic posts. Don't reveal the product until 15-20 seconds in.
5. **Instagram Reels format** - CPMs decreased 9% while every other placement increased 20-25%. Make Reels-native vertical (9:16) creative.

### Hook Framework (First 3 Seconds = Everything)

| Pattern | Example | When to Use |
|---------|---------|-------------|
| Persona callout | "If you're an architecture student pulling all-nighters..." | Cold traffic (Andromeda optimized) |
| Contrarian | "Everything your architecture professors teach you is wrong" | Attention-grabbing, risky |
| Problem agitation | "You redesign your project 3 times before every crit" | Pain-point focused |
| Result lead | "This system saved me 10 hours a week in studio" | Benefit-focused |
| Curiosity gap | "The secret architecture students aren't told about crits" | Works well with video |
| Authority | "I won best thesis across engineering, science, and architecture" | Trust-building |

**Hook testing method:** Take your best-performing ad body. Create 5-10 different hooks for the same body. Launch all in the same pack. The hook that gets the most spend wins.

---

## Ad Copy Angles (5 concepts)

### Angle A: Anti-Academic (Dan's natural voice)
**Target emotion:** Frustration with architecture school

Hook variations:
1. "Architecture school teaches you theory. Nobody teaches you how to actually design."
2. "I got the best thesis in my entire faculty. Here's what they didn't teach me."
3. "Your professors won't tell you this. The students who ace crits aren't more talented."

Body: "I put everything I learned - time management, brief decoding, crit presentation, concept development - into 5 chapters. It's what I wish existed when I was in your seat."

CTA: "Try free for 7 days. $29/month after. Cancel anytime."

### Angle B: Studio Survival
**Target emotion:** Overwhelm and all-nighters

Hook variations:
1. "You're pulling all-nighters because nobody taught you this."
2. "If you redesign your project 3 times before every crit, watch this."
3. "Architecture school doesn't have to be this hard."

Body: "I split every task into three modes - deep work, steady work, and easy work. You never mix them. This one system saved me 10 hours a week in studio. It's Chapter 3 of the Konteks Kourse."

CTA: "7-day free trial. Five chapters. Weekly planner."

### Angle C: Community-First
**Target emotion:** Isolation in architecture school

Hook variations:
1. "363 architecture students sharing their work, getting feedback, and actually helping each other."
2. "What if you had a group of students going through the same thing you are?"
3. "Architecture school is lonely. It doesn't have to be."

Body: "Five chapters of real systems - from mindset to site analysis. A weekly planner built for studio schedules. And a community where you actually get honest feedback. Not from professors who grade you - from students who get it."

CTA: "Try free for 7 days. Link in bio."

### Angle D: Credential/Authority
**Target emotion:** Trust/credibility seeking

Hook variations:
1. "Built by the architect who won best thesis across engineering, science, and architecture."
2. "I teach architecture differently. 363 students already noticed."
3. "My students call Chapter 3 the one that saves them 10 hours a week."

Body: "I'm Dan. I'm an architect and educator in Dubai. I built the Konteks Kourse because everything I learned about surviving architecture school - nobody taught me. I had to figure it out the hard way. You don't."

CTA: "Try free for 7 days. See what's inside."

### Angle E: Thesis/Capstone Rescue (seasonal)
**Target emotion:** Panic and procrastination

Hook variations:
1. "Stuck on your thesis? Watch this."
2. "Your thesis brief isn't confusing. You just don't know how to read it yet."
3. "Every thesis brief has a hidden structure. Once you see it, your concept writes itself."

Body: "Chapter 4 shows you exactly how to go from a brief to a concept. Not randomly. Not by staring at Pinterest for 6 hours. A real system that works every time. Chapter 3 handles your timeline so you stop panicking."

CTA: "Start your free trial. Link in bio."

---

## Video Scripts for Dan

Film on phone, selfie mode, natural light. Don't memorize - know the point, say it naturally. Messy > polished. Real > produced. **Film in 9:16 vertical** for Reels placement (cheapest CPMs).

### Script 1: "The Crit Secret" (15-20 sec)
```
HOOK (first 3 sec - look directly at camera, pause, then):
"Nobody at your architecture school will tell you this."

BODY (casual, like telling a friend):
"The students who ace crits aren't more talented than you. They 
just learned how to present their work the way lecturers actually 
respond to. I figured this out the hard way - and then I won best 
thesis across my entire faculty."

CTA (slight smile):
"I put it all in the Konteks Kourse. Link in bio."
```

### Script 2: "The All-Nighter Fix" (15-20 sec)
```
HOOK: "You're pulling all-nighters because nobody taught you this."

BODY: "I split every task into three modes. Deep work, steady work, 
and easy work. You never mix them. You block your week by energy, 
not by deadline panic. This one change saved me 10 hours a week 
in studio."

CTA: "That's Chapter 3. Free trial - link in bio."
```

### Script 3: "The Brief Decoder" (20 sec)
```
HOOK: "Your brief isn't confusing. You just don't know how to 
read it yet."

BODY: "Every architecture brief has a hidden structure. When you 
see it, your concept isn't random anymore - it comes straight 
from the brief. I show you exactly how in Chapter 4."

CTA: "Try it free for 7 days. Link in bio."
```

### Script 4: "The Honest Truth" (15 sec)
```
HOOK: "Architecture school has a dirty secret."

BODY: "The top students aren't more creative than you. They were 
taught systems - how to think about concepts, manage their time, 
present at crits. Your lecturers never share this stuff. I put 
all of it in one place."

CTA: "Konteks Kourse. Free trial - link in bio."
```

### Script 5: "The Community" (15 sec)
```
HOOK: "363 architecture students are already inside."

BODY: "Five chapters. A weekly planner. And a community of 
students going through the same thing you are. This is what I 
wish existed when I started."

CTA: "7 days free. Cancel anytime. Link in bio."
```

### Script 6: "The Thesis Panic" (20 sec - run during thesis season)
```
HOOK: "If you're stuck on your thesis, stop scrolling."

BODY: "I know the feeling. You've been staring at your brief for 
two weeks and nothing clicks. Here's the thing - your brief has 
a structure you're not seeing. Once you decode it, your concept 
comes together fast. I show you exactly how."

CTA: "Chapter 4. Free trial - link in bio."
```

---

## Static Creative Prompts

### Creative 1: Pain List
```
1080x1080 square. White background. Bold black Inter font (800 weight).

"Sound familiar?

- You redesign your project 3 times before every crit
- You have no system for time management
- Your concepts feel random
- You pull all-nighters every week"

Bottom in burnt orange (#E86A1C): 
"There's a better way. Try free for 7 days."
```

### Creative 2: Chapter Grid
```
1080x1080 square. White background.

Top: "5 chapters. Everything your lecturers skip." in bold black.

2-column grid:
Ch 1: "So... Architecture" 
Ch 2: "The Top Student Mindset"
Ch 3: "Crits, Deadlines & Timing"
Ch 4: "From Brief to Concept"
Ch 5: "Site Analysis & Urban Design"
+ Bonus: "Konteks Kalendar (weekly planner)"

Bottom: "Free 7-day trial. $29/mo after." in orange.
```

### Creative 3: Dan Teaching Screenshot
```
Screenshot of Dan teaching in Konteks Kourse video.
Bold white text overlay with dark shadow at top:

"Your professors won't teach you this."

Bottom overlay: "5 chapters. 363 students. Try free."

1080x1080 crop. Keep Dan visible.
```

### Creative 4: Social Proof Numbers
```
1080x1080. Black background. White text.

Large number center: "363"
Below: "architecture students learning systems 
that actually work in studio"

Bottom in orange: "Join them. 7-day free trial."
```

### Creative 5: Persona Callout (Andromeda-optimized)
```
1080x1080. White background. Black text.

"If you're an architecture student who:

- Spends more time on renders than design
- Has no system for crits
- Feels like you're behind everyone else

This is for you."

Bottom: "Konteks Kourse. Free trial. Link in bio."
```

---

## Critical Settings Checklist

Before launching ANY campaign, verify every item:

- [ ] **Campaign type:** Manual Sales Campaign (NOT Advantage+)
- [ ] **Budget optimization:** CBO ON
- [ ] **Conversion event:** Purchase (NOT InitiateCheckout, NOT Add to Cart)
- [ ] **Attribution:** 7-day click, 1-day engagement, 1-day view
- [ ] **"Use as suggestion":** OFF on all audience settings
- [ ] **Language:** English (EN-All, EN-UK, EN-US) specifically
- [ ] **Placements:** Advantage+ (all placements on)
- [ ] **Related Media:** OFF (check after publishing - it can turn on automatically)
- [ ] **Flexible Ads:** NOT used (use individual ads in packs)
- [ ] **Audience Segment Reporting:** Set up with engaged + existing definitions
- [ ] **Pixel events:** All fire with value AND currency parameters
- [ ] **CAPI:** Enabled and sending server-side events
- [ ] **Purchaser exclusion:** Added when you have sales data

---

## Optimization Playbook

### Week 1 (Days 1-7): Don't Touch Anything
- Let Meta learn. No budget changes, no pausing, no targeting edits.
- Check daily for entertainment only. Don't make decisions.
- The free trial means Purchase events won't fire for 7 days after first signups.
- "Learning Limited" status is expected and normal at this budget.

### Week 2 (Days 8-14): First Real Review

| Signal | What It Means | Action |
|--------|---------------|--------|
| Ad getting spend + low CPA | Winner | Leave it alone |
| Ad getting spend + high CPA (>$50) | May be reaching wrong people | Check creative - is the hook attracting the right avatar? |
| Ad getting zero spend | Algorithm deprioritized it | Not necessarily bad creative - just lost the auction. Try it in a new pack |
| Trial signups but no purchases | Offer/onboarding problem | Check Skool onboarding experience |
| Clicks but no trial signups | Landing page problem | Check checkout page conversion |
| High CTR, no clicks to site | Creative is entertaining but not selling | Strengthen CTA and offer clarity |

**Kill thresholds (after 7+ days):**
- Ad set spent 3x your CPA ($87+) with zero conversions: pause it
- Individual ad CTR below 1% after 1,000+ impressions: swap it out
- CPA consistently above $50 after adequate data: try new creative concepts (not just iterations)

**DO NOT kill based on:**
- Daily fluctuations (measure on 7-day rolling averages)
- CPM (you can't control it)
- Less than 7 days of data
- "Learning Limited" status alone

### Week 3+ (Ongoing): Pack System

1. **Every 1-2 weeks:** Launch a new pack with 3-5 ads testing a new concept
2. **Set ad set minimum** on new packs = 1x CPA ($29)
3. **Remove minimums** after 7-14 days
4. **Pause packs** that don't scale naturally after minimum is removed
5. **Scale campaign budget** by max 20% per day when overall performance is good
6. **Never make more than one change per day**

### Budget Scaling Rules

| Current Daily | Max Increase | Frequency |
|--------------|-------------|-----------|
| $56 | $11 (20%) | Once per day |
| $67 | $13 | Once per day |
| $80 | $16 | Once per day |
| $100+ | Consider adding retargeting campaign | Weekly review |
| $150+ | Split into 3 swim lanes (Prospecting/Retargeting/Retention) | One-time restructure |

---

## When to Add Retargeting ($150+/day)

Only when:
1. Prospecting is consistently profitable for 2+ weeks
2. You have 500+ website visitors in the last 30 days
3. Budget is $150+/day (enough to split without starving either campaign)

**Retargeting campaign structure:**
```
CAMPAIGN: "Konteks Kourse - Retargeting" ($20-30/day CBO)
  Ad Set 1: 180-day website visitors + 90-day checkout abandoners
  Exclude: existing customers
  Creative: Different from cold traffic (testimonials, objection handling, urgency)
```

**Retargeting creatives (save these for later):**

Retarget Video - Dan to camera, 10 seconds:
"Still thinking about it? $29. Cancel anytime. If Chapter 3 doesn't save you 10 hours in your first week, cancel and you've lost nothing."

Retarget Static - Testimonial:
Quote from a student + "konteks.co | 7-day free trial"

---

## Post-ID Reuse (Engagement Stacking)

When you find a winning ad:
1. Note the Post ID (in ad details)
2. When adding the same ad to other ad sets, use "Use existing post" and enter the Post ID
3. All likes, comments, and shares stack on ONE post
4. More social proof = higher CTR = lower CPM

---

## First-Comment Strategy

After each ad publishes, Dan posts a comment on her own ad:

"Ask me anything about the kourse - I answer everyone."

Reply to EVERY comment. Even the haters. Engagement = cheaper reach.

---

## Budget Math (Corrected)

**Product:** $29/mo subscription with 7-day free trial
**Estimated retention:** 3 months average
**LTV:** $29 x 3 = $87
**Maximum profitable CPA:** $87 (breakeven over lifetime)
**Target CPA:** $30-50 (profitable with margin)
**Breakeven ROAS:** ~1.03x (digital product, near-zero COGS)

**At $56/day:**
- At $30 CPA: ~1.9 new subscribers/day = ~57/month = $1,653/mo recurring
- At $40 CPA: ~1.4 new subscribers/day = ~42/month = $1,218/mo recurring
- At $50 CPA: ~1.1 new subscribers/day = ~34/month = $986/mo recurring

**Key insight:** Even at $50 CPA, each subscriber who stays 2+ months is profitable. You're not optimizing for month-1 ROAS. You're optimizing for LTV > CPA.

**Annual plan bonus:** If some buy the $249/yr plan, your effective CPA drops significantly. One annual purchase = 8.6 monthly equivalents.

---

## Tracking & Pixel Requirements

### Events That Must Fire (with parameters)

| Event | Page | Required Parameters |
|-------|------|-------------------|
| PageView | All pages | (auto) |
| ViewContent | Sales page (on CTA click) | value: 29.00, currency: 'USD', content_name: 'Konteks Kourse' |
| InitiateCheckout | Checkout page (on CTA click) | value: [plan value], currency: 'USD', content_name: 'Konteks Kourse - [plan]' |
| Purchase | Thank-you page | value: [plan value], currency: 'USD', content_name: 'Konteks Kourse - [plan]' |

### CAPI (Conversions API)
- Browser pixel alone misses ~30% of conversions from iOS tracking restrictions
- CAPI sends events server-side, capturing what the pixel misses
- Access token: generated in Events Manager (already done)
- Implementation: Cloudflare Worker (pending build)
- Without CAPI, event match quality stays at 6/10. With it, target 8-9/10.

---

## Weekly Management Checklist

### Monday: Review
- [ ] Pull 7-day rolling metrics
- [ ] Check Audience Segment Reporting (new vs. engaged vs. existing spend)
- [ ] Flag any ad sets spending at minimum but not scaling (candidates for pausing after 14 days)
- [ ] Check for Related Media being auto-enabled on any ads

### Wednesday: Launch
- [ ] Launch new creative pack(s) if ready (with ad set minimums)
- [ ] Remove ad set minimums from packs launched 14+ days ago
- [ ] Pause underperformers that failed to scale after minimum removal

### Friday: Creative
- [ ] Review competitor ads in Meta Ad Library
- [ ] Brief new concepts based on this week's analysis
- [ ] Check creative fatigue (rising CPA on top performers = time for new creative)

### Monthly: Full Audit
- [ ] Run the full Ad Account Audit Checklist from the Meta Ads 2026 Expert Skill
- [ ] Review concept-level performance (which avatars + angles drive best CPA)
- [ ] Calculate true customer acquisition cost including churn
- [ ] Assess creative diversity - are you testing enough new concepts?

---

## What to Do Right Now (Updated Priority Order)

1. ~~Upload email CSV to Meta~~ (too small for quality lookalike - skip for now)
2. **Verify new Manual CBO campaign is running correctly** (broad targeting, Purchase optimization, correct attribution)
3. **Add NZ, ZA, IE back to targeting** (cheaper CPMs, English-speaking architecture schools)
4. **Add 2-3 more ads to the existing broad ad set** (same pack, don't create new ad sets)
5. **Dan films Scripts 1-4** (15-20 sec each, phone selfie, vertical 9:16, natural light)
6. **Create 5-10 static creatives** to test different angles cheaply
7. **Paste pixel ID into Skool Settings** (26300556566305220)
8. **Don't touch the campaign for 7 days** (no budget changes, no pausing, no targeting edits)
9. **Day 8: first real review** using the optimization playbook above
10. **After review: launch Pack 2** with winning angle iterations + new concepts

---

## Reference: Meta Ads 2026 Expert Skill

For deep-dive guidance on any specific topic (learning phase management, creative testing methodology, DM campaigns, scaling playbooks), see:

`skills/meta-ads-2026-expert/SKILL.md` (10,095 words, synthesized from 37 expert videos)

Key sections:
- Campaign Structure (pack system, CBO setup, swim lanes)
- Creative Strategy (concepts vs. iterations, hook frameworks, production workflow)
- Optimization Playbook (kill/scale signals, budget rules, troubleshooting)
- Critical Settings (attribution, placements, pixel, exclusions)
- Common Mistakes (14 documented with fixes)
- Quick Decision Trees (stuck in learning, one ad gets all spend, high CTR no conversions, CPA too high)
- Budget-Specific Playbooks ($10-50/day, $50-200/day, $200-1000/day, $1000+/day)
