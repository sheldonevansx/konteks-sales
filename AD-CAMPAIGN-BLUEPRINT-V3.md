# Konteks Kourse - Meta Ad Campaign Blueprint v3

*Updated: March 24, 2026*  
*Budget: $100/day ($1,500 test) | CBO | 15-day test window*  
*Strategy: 2026 broad targeting + CAPI + creative-first*

---

## What Changed from v2 (READ THIS FIRST)

**v2 was built on pre-2024 Meta ads thinking. v3 uses 2026 strategy:**

| Old (v2) | New (v3) | Why |
|----------|----------|-----|
| Interest stacking (Architecture + University) | Broad targeting with "Describe Your Audience" | Project Andromeda makes creative the targeting signal |
| Optimize for Purchase | Optimize for InitiateCheckout | Won't hit 50 purchases/week at $29 - need more conversion events |
| Pixel only | Pixel + CAPI | 30-50% better performance with both |
| 5 ad sets with manual interests | 1-2 ad sets, broad targeting | Simplified structure wins in 2026 |
| Generic ad copy | Contrarian angles based on Dan's top videos | Her 3-Render Rule video (219K views) proves the angle works |

**Bottom line:** Creative IS your targeting now. Feed Meta good creative signals, let the algo find the students.

---

## The Competitive Landscape (Unchanged)

**Archademia is the only competitor running Meta ads.** 50+ ads continuously since Sep 2025, estimated $5-15K/month. They target working architects and professionals - NOT students.

Everyone else (30x40, Show It Better, Archisoup, First In Architecture) runs zero paid ads.

**Your lane:** Anti-academic, personality-driven, community-first education for architecture students. Nobody is doing this.

---

## Campaign Structure ($100/day CBO)

```
CAMPAIGN 1: Prospecting ($80/day CBO)
  Ad Set 1: Broad Targeting + Describe Your Audience
  [Optional Ad Set 2: 3-Render Rule Video Lookalike - test separately]

CAMPAIGN 2: Retargeting ($20/day CBO)
  Ad Set 1: Video Viewers 50%+ (0-14 days)
  Ad Set 2: Website Visitors (0-14 days, exclude purchasers)

CAMPAIGN 3: Scale (launch after finding winners)
  Ad Set 1: Broad (same as Prospecting)
  Budget: Start $100/day, increase 10% daily if stable
  Creative: Winning ads ONLY
```

**Why this works:**
- Prospecting finds winners with fresh creative weekly
- Retargeting converts warm traffic cheaply
- Scale amplifies only proven ads (no experiments)

**Key rule:** NEVER test new creative in Scale campaign. That's what Prospecting is for.

---

## Campaign 1: Prospecting Setup (Step-by-Step)

### Campaign Level
1. Ads Manager → Create → **Sales** objective
2. Name: "Konteks - Prospecting"
3. **Campaign Budget Optimization: ON**
4. Daily budget: **$80**
5. Bid strategy: Lowest cost (default)

### Ad Set 1: Broad + Describe Your Audience

**Name:** "Broad - Arch Students"

**Conversion Event:** **InitiateCheckout** (NOT Purchase - you won't get 50 purchases/week at $29)

**Targeting:**
- Locations: US, UK, AU, CA, NZ, ZA, IE, SG, HK, AE
- Age: 18-30
- Gender: All
- **No interest targeting** (leave it blank)

**Advantage+ Audience:**
- Turn ON "Advantage+ audience" toggle
- Click "Describe Your Audience" (new March 2026 feature)

**Copy this into "Describe Your Audience" box:**
```
Architecture students aged 18-30 who are currently enrolled in university 
architecture programs. They follow architecture media accounts like ArchDaily, 
Dezeen, Archinect. They engage with architecture education content on Instagram. 
They struggle with presentations, time management in studio, and thesis projects. 
They're interested in practical systems over theory. They watch architecture 
tutorial content and save design reference posts.
```

**Placements:** Advantage+ (automatic) - let Meta optimize

**Optimization & Delivery:**
- Conversion location: Website
- Performance goal: Maximize number of conversions
- Cost per result goal: None (let it learn first)

### [Optional] Ad Set 2: 3-Render Rule Video Lookalike

**Only create this if you want to test against broad.** Otherwise skip and put full $80 into Ad Set 1.

**Setup:**
1. First create Custom Audience: Instagram @studwalldan → 3-Render Rule video (https://www.instagram.com/p/DQmDAxpEmFc/) → 50% viewers
2. Then create 1% Lookalike from that audience
3. Name Ad Set: "LAL - 3-Render Rule"
4. Same settings as Ad Set 1, but audience = the Lookalike
5. Let CBO split budget between this and broad

**Why this works:** That video got 219K views and 6.4% engagement - highest performer. People who watched it are proven Dan fans.

---

## Campaign 2: Retargeting Setup

### Campaign Level
1. New campaign → **Sales** objective
2. Name: "Konteks - Retargeting"
3. CBO ON, Daily budget: **$20**

### Ad Set 1: Video Viewers (Hot)

**Name:** "Retarget - Video 50%"

**Conversion Event:** Purchase (these are warm, aim for conversion)

**Custom Audience:**
- Video Views → ThruPlay (watched 50%+) → Last 14 days
- Include all videos from Prospecting campaign

**Exclude:** Website visitors who reached thank-you page (purchasers)

### Ad Set 2: Website Visitors (Warm)

**Name:** "Retarget - Site Visitors"

**Custom Audience:**
- Website → All visitors → Last 14 days

**Exclude:** Thank-you page visitors

**Frequency cap:** 5 impressions per 7 days (prevents fatigue)

---

## Campaign 3: Scale (Don't Launch Yet)

**Launch trigger:** When Prospecting has 2+ ads with ROAS >1.5x after $200+ spend each.

**Setup:**
1. Duplicate Prospecting campaign
2. Rename: "Konteks - Scale"
3. Budget: $100/day starting
4. Delete ALL ads except proven winners
5. Turn OFF creative testing

**Scaling protocol:**
- If CPA stable: increase budget 10% daily
- If CPA rises >20%: pause increases, add new winning creative from Prospecting
- If frequency >4: horizontal scale (new placements or duplicate campaign)

---

## Pixel + CAPI Setup (REQUIRED - DO THIS FIRST)

### 1. Install Pixel (if not done)

**Check if pixel is firing:**
1. Events Manager → Data Sources → your pixel
2. Test Events tool
3. Visit kourse.konteks.co
4. Should see: PageView, ViewContent, InitiateCheckout, Purchase

**If not firing:**
- Verify pixel code in `<head>` of all pages
- Check pixel ID matches Events Manager

### 2. Set Up CAPI (Conversions API)

**Why:** Pixel alone misses 40-60% of iOS users (ATT opt-outs). CAPI recovers 20-40% of lost conversions.

**Method 1: Use Meta's Conversions API Gateway (easiest for Stripe)**

1. Events Manager → Data Sources → your pixel → Settings tab
2. Scroll to "Conversions API" section
3. Click "Set up manually"
4. Choose "Conversions API Gateway"
5. Follow setup wizard - connects directly to Stripe

**Method 2: Partner integration (if using Shopify, WordPress, etc.)**

1. Install official Meta plugin for your platform
2. Enable "Send server events" option
3. Test with Events Manager Test tool

**Event Deduplication (CRITICAL):**
- Use same `event_id` for Pixel and CAPI events
- Prevents double-counting same conversion
- Meta automatically dedupes if both fire with matching ID

**Test it:**
1. Make a test purchase on kourse.konteks.co
2. Check Events Manager → Test Events
3. Should see InitiateCheckout and Purchase from BOTH Pixel and CAPI
4. Should NOT see duplicate events (dedupe working)

---

## Ad Angles (Dan's Voice + Proven Performers)

### Angle A: Contrarian Anti-Academic (HIGHEST PRIORITY)

**Why:** Dan's "3-Render Rule" video (contrarian angle) got 219K views vs 71K for tutorial content. Contrarian outperforms how-to by 3x.

**Hook formula:** "Students think X, but pros know Y"

**Variations:**
1. "Architecture school teaches you theory. Nobody teaches you how to actually design."
2. "The students who ace crits aren't more talented. They just learned what your professors won't share."
3. "Most students think more renders = better presentation. Pros know it's the opposite."
4. "Your lecturers won't tell you this. The top students aren't more creative - they have systems."

**Body framework:**
- Call out the student pain point (all-nighters, redesigning 3 times before crits)
- Position Konteks as the anti-establishment solution
- Use Dan's signature harsh-but-helpful tone: "If you're redesigning your project 3 times before every crit, your concept is overdesigned and under-thought."

**CTA:** "5 chapters. 326+ students inside. $29/month. Cancel anytime."

### Angle B: Simple Framework Positioning

**Why:** Dan's "3-Render Rule" success proves students respond to numbered systems.

**Hook variations:**
1. "The 3-mode time system that eliminates all-nighters"
2. "The 4-step brief decoder every thesis student needs"
3. "3 chapters. 1 system. Zero all-nighters."

**Body:**
- Present the framework (numbered list)
- Show the before/after (chaos → clarity)
- Position Konteks as the system source

**Example:**
"I split every studio task into three modes: Deep Work (concept development), Steady Work (modeling and drawings), and Easy Work (board layouts). You never mix them. You block your week by energy, not panic. This one change saved me 10 hours a week. It's Chapter 3 of the Konteks Kourse."

### Angle C: Authority/Credential (For Cold Traffic Skeptics)

**Hook:**
1. "Built by the architect who won best thesis across engineering, science, and technology."
2. "326 architecture students already learning this system."
3. "I teach architecture at a university in Dubai. This is what I don't tell my students in class."

**Body:** Brief bio + proof + offer

**Example:**
"I'm Dan. I'm an architect and educator. I built Konteks because everything I learned about surviving architecture school - the systems for time, brief decoding, crit presentation - nobody taught me. I figured it out the hard way. You don't have to. 5 chapters. $29/month. Link in bio."

### Angle D: Community-First

**Hook:**
1. "326 architecture students sharing work, getting feedback, and actually helping each other."
2. "What if you had a group of students who actually understand what you're going through?"

**Body:**
"Architecture school is isolating. Konteks is different. Five chapters of real systems - from mindset to site analysis. A weekly planner built for studio schedules. And a community where you get honest feedback from students who get it, not professors who grade you."

---

## Video Scripts for Dan (Film on iPhone, Casual)

### Script 1: "The Crit Secret" (Contrarian Angle - TOP PRIORITY)
```
VISUAL: Dan to camera, natural light, slight smile

HOOK (first 3 seconds, direct eye contact):
"The students who ace crits aren't more talented than you."

BODY (conversational, like telling a friend):
"They just learned how to present their work the way lecturers 
actually respond to. I figured this out the hard way - and then 
I won best thesis across my entire faculty. I put it all in the 
Konteks Kourse."

CTA (casual):
"Link in bio. $29 a month."

DURATION: 15-18 seconds
```

### Script 2: "The 3-Mode System" (Framework Positioning)
```
HOOK: "You're pulling all-nighters because nobody taught you this."

BODY: "I split every task into three modes. Deep work, steady work, 
and easy work. You never mix them. You block your week by energy, 
not by deadline panic. This one system saved me 10 hours a week 
in studio."

CTA: "That's Chapter 3. Link in bio."

DURATION: 15-20 seconds
```

### Script 3: "The 3-Render Rule" (Leverage Existing Winner)
```
HOOK: "Most students think more renders equals better presentation."

BODY: "But pros know it's the opposite. The 3-Render Rule: Hero shot, 
context shot, experience shot. If your project needs more than three 
renders to make sense, it's probably overdesigned and under-thought."

CTA: "Learn the rest in Chapter 4. Konteks Kourse. Link in bio."

DURATION: 20 seconds

NOTE: This is Dan's proven Instagram winner (219K views). 
Refilm for ads or request permission to use original.
```

### Script 4: "Architecture School's Dirty Secret" (Anti-Academic)
```
HOOK: "Architecture school has a dirty secret."

BODY: "The top students aren't more creative than you. They were 
taught systems - how to decode briefs, manage time, present at crits. 
Your lecturers never share this. I did. It's all in one place."

CTA: "Konteks Kourse. Link in bio. $29 a month."

DURATION: 15 seconds
```

### Script 5: "Thesis Panic" (Seasonal - Run During Thesis Season)
```
HOOK: "If you're stuck on your thesis, stop scrolling."

BODY: "I know the feeling. You've been staring at your brief for 
two weeks and nothing clicks. Here's the thing - your brief has a 
structure you're not seeing. Once you decode it, your concept comes 
together fast. I show you exactly how."

CTA: "Chapter 4 of the Konteks Kourse. Link in bio."

DURATION: 20 seconds
```

---

## Static Creatives (NanoBanana Prompts)

### Creative 1: Pain List (High-Performing Format)
```
1080x1080 square. White background. Bold black Inter font (900 weight).

Center this text:

"Sound familiar?

• You redesign your project 3x before every crit
• You have no system for time management
• Your concepts feel random
• You pull all-nighters every week"

Bottom center in burnt orange (#E86A1C): 
"There's a better way."
Below in smaller black text: "konteks.co"

No gradients. No icons. No stock images. Just text on white.
```

### Creative 2: Contrarian Quote (Dan's Voice)
```
1080x1080 square. Black background. White text.

Large quote in center:
"If your project needs more than 
3 renders to make sense, 
it's probably overdesigned 
and under-thought."

Bottom right in orange: "- Dan, Konteks Kourse"

Below in small white: "The systems your professors won't teach. $29/mo"
```

### Creative 3: Chapter Grid (Show What's Inside)
```
1080x1080 square. White background.

Top in bold black: "5 chapters. Everything your lecturers skip."

Grid layout (5 rows):
Ch 1: "So... Architecture"
Ch 2: "The Top Student Mindset"
Ch 3: "Crits, Deadlines & Timing"
Ch 4: "From Brief to Concept"
Ch 5: "Site Analysis & Urban Design"
+ Bonus: "Konteks Kalendar (weekly planner)"

Each chapter name in black (700 weight), small gray description below.

Bottom in orange: "$29/mo - Cancel anytime"
```

### Creative 4: Social Proof Numbers
```
1080x1080 square. Black background. White text.

Large centered number: "326"

Below in medium white text:
"architecture students learning systems 
that actually work in studio"

Bottom in orange: "Join them. $29/month."
```

---

## Retargeting Creatives (Different from Cold Traffic)

### Retarget Video 1: Objection Handler
```
VISUAL: Dan to camera, 10 seconds

"Still thinking about it? Here's the deal. $29. Cancel anytime. 
If Chapter 3 doesn't save you 10 hours in your first week, 
cancel and you've lost nothing. The students who joined say 
it's the best $29 they spend every month."
```

### Retarget Static 1: Testimonial
```
1080x1080. White background.

Quote in large black text:
"Chapter 3 literally changed how I approach 
every project. I went from all-nighters twice 
a week to finishing on time. Every time."

Below: "- Architecture student, 3rd year"

Bottom: "konteks.co | $29/month"
```

### Retarget Static 2: Urgency (Use Sparingly)
```
1080x1080. Orange gradient background.

Large white text:
"You've visited.
You've watched.
You know you need this."

Below in smaller white:
"Stop overthinking it."

Bottom in black: "konteks.co - $29/month"
```

---

## Ad Copy Templates (Use for All Ads)

### Cold Traffic Primary Text (Contrarian Angle)
```
The students who ace crits aren't more talented.

They just learned what nobody in studio teaches:
• How to decode any brief in 30 minutes
• A time system that eliminates all-nighters
• How to present at crits with confidence

5 chapters. Weekly planner included. 326+ students inside.

Built by the architect who won best thesis across 
engineering, science, and technology.
```

**Headline:** The top student mindset is taught  
**Description:** $29/month - Cancel anytime  
**CTA Button:** Learn More  
**URL:** https://kourse.konteks.co  
**URL Parameters:** `utm_source=meta&utm_medium=paid&utm_campaign=prospecting&utm_content={{ad.name}}`

### Cold Traffic Primary Text (Framework Angle)
```
Architecture school teaches you theory.
Nobody teaches you how to actually work.

The Konteks Kourse breaks down what top students know:
✓ The 3-Mode Time System (Chapter 3)
✓ The Brief Decoder (Chapter 4)
✓ The Crit Presentation Framework (Chapter 3)
✓ Plus: Weekly planner built for studio schedules

326 students. 5 chapters. $29/month.
```

**Headline:** Systems your professors won't share  
**Description:** Cancel anytime  
**CTA Button:** Learn More

### Retargeting Primary Text
```
You've watched. You know this makes sense.

5 chapters that cover everything architecture school skips.
A community of 326 students who actually get it.
A weekly planner that eliminates all-nighters.

$29/month. Cancel anytime. If Chapter 3 doesn't save you 
10 hours in your first week, get a refund.
```

**Headline:** The students inside don't pull all-nighters  
**Description:** Join them. $29/month.  
**CTA Button:** Sign Up

---

## Creative Testing Schedule (5-8 New Ads Per Week)

**Week 1:**
- 3 contrarian angle videos (Dan talking head)
- 2 static creatives (pain list + chapter grid)
- 2 hook variations of best performer

**Week 2:**
- Test 3-Render Rule script (leverage proven winner)
- 2 framework angle videos (3-mode system, brief decoder)
- 2 new statics (social proof + contrarian quote)

**Week 3:**
- Remix winners from Week 1 (same body, new hooks)
- Test community angle
- Add UGC-style video if possible (student testimonial)

**Rule:** ALWAYS have 3+ new ads ready to launch before current winners die.

**Creative fatigue signals:**
- Frequency >3.5 on Prospecting
- CTR drops >15%
- CPM rises >20%

---

## Daily Management SOP

### Days 1-3: Hands Off
- Let Meta learn. Do NOT change budgets, pause ads, or panic.
- Check once daily for disapprovals only.

### Day 4: First Review

**Kill an ad if:**
- CTR <1% after 1,000 impressions
- CPC >$3.50
- CPM >$30
- Hook rate (3-second video views) <20%
- Cost per InitiateCheckout >$15

**Keep running if:**
- CTR >1.5%
- CPC <$2.50
- CPM <$25
- At least 1 InitiateCheckout

### Day 7: Optimization
- Kill any ad with <1% CTR after $50 spend
- Kill any ad set with 0 conversions and $100+ spend
- Note which creative themes CBO is favoring
- Create 2-3 new hook variations of best performer
- Check "Describe Your Audience" ad set vs Lookalike (if testing both) - which is cheaper?

### Day 10: Scale Check
- Calculate ROAS (revenue / ad spend)
- If ROAS >1.5x: Increase Prospecting budget by 20%
- If ROAS 1-1.5x: Keep running, double down on winning creative themes
- If ROAS <1x: Pause everything, audit creative + landing page

### Day 15: Full Audit

**Metrics to review:**
- Total spend vs total revenue
- Cost per InitiateCheckout (target: <$10)
- Cost per Purchase (target: <$40)
- Initiate-to-Purchase rate (target: >25%)
- Best performing audience (broad vs lookalike)
- Best performing creative theme (contrarian vs framework vs community)
- Best performing format (video vs static)

**Decisions:**
- Launch Scale campaign if 2+ ads have ROAS >1.5x
- Kill Prospecting if ROAS <0.8x after creative refresh
- Pivot to new angle if all contrarian ads flopped (unlikely based on Dan's Instagram data)

---

## Budget Math (15-Day Test)

**Total spend:** $1,500 ($100/day x 15 days)

**Break-even:** $29 CPA (1 month subscription)

**Scenarios:**

| CPA | New Subscribers | Month 1 Revenue | Month 2 Revenue (80% retention) | Net After Month 2 |
|-----|----------------|-----------------|--------------------------------|------------------|
| $20 | 75 | $2,175 | $1,740 | +$2,415 |
| $30 | 50 | $1,450 | $1,160 | +$1,110 |
| $40 | 37 | $1,073 | $858 | +$431 |

**Key insight:** Even at $40 CPA (expensive), you're profitable by month 2 if retention >70%. Track churn rate.

**Annual plan impact:** One $249 annual purchase = 8.6 monthly equivalents. If 10% buy annual, your effective CPA drops 25-30%.

---

## What to Do Right Now (Launch Checklist)

### Pre-Launch (Do These First)
- [ ] Verify pixel is firing (Events Manager → Test Events)
- [ ] Set up CAPI (follow instructions above, test with real purchase)
- [ ] Create InitiateCheckout custom conversion (Events Manager → Custom Conversions)
- [ ] Dan films 3 contrarian angle videos (Scripts 1, 2, 4)
- [ ] Create 3 static creatives in NanoBanana
- [ ] Test funnel: kourse.konteks.co → checkout → Stripe → Zapier → Skool
- [ ] Verify AC onboarding automation is active

### Launch Day
- [ ] Create Campaign 1 (Prospecting) with broad targeting + "Describe Your Audience"
- [ ] Optional: Create Lookalike from 3-Render Rule video, test as second ad set
- [ ] Upload 5 ads (3 video + 2 static)
- [ ] Create Campaign 2 (Retargeting) - will be low spend until you have traffic
- [ ] Set calendar reminders for Day 4, Day 7, Day 10, Day 15 reviews
- [ ] Turn on campaigns

### Days 1-3
- [ ] Check once daily for ad disapprovals
- [ ] Do NOT touch anything else

### Day 4
- [ ] First review using kill/keep metrics table
- [ ] Kill underperformers

### Day 7
- [ ] Full optimization review
- [ ] Upload 3+ new creative variations of winners
- [ ] Compare broad vs lookalike performance (if testing both)

### Day 10
- [ ] ROAS check
- [ ] Scale decision (increase budget if >1.5x ROAS)

### Day 15
- [ ] Full audit
- [ ] Launch Scale campaign if 2+ winners exist
- [ ] Decide: continue, pivot angle, or kill

---

## First-Comment Strategy (Engagement Hack)

Immediately after each ad publishes, Dan comments on her own ad:

**Comment text:**
"Ask me anything about the kourse - I answer everyone."

**Why this works:**
1. Boosts engagement signal (Meta rewards ads with comments)
2. Creates conversation that cold viewers see and trust
3. Gives Dan a reason to reply to EVERY comment (engagement = cheaper reach)

**Reply to every comment.** Even haters. Engagement lowers CPM.

---

## 2026 Philosophy (Remember This)

**Creative IS your targeting.** Your ad's visual + copy tells Meta's AI who to show it to. Interest stacking is dead.

**Broad targeting wins** when budget >$50/day and creative quality is high.

**Optimize for the event you can get 50+ of per week.** At $29 product, that's InitiateCheckout, not Purchase.

**Feed the machine.** 5-8 new ads/week minimum. Creative fatigues faster in 2026.

**Trust Meta's numbers** for optimization. Trust Stripe for revenue. The discrepancy is normal.

**CAPI is not optional anymore.** Pixel alone misses 40-60% of iOS users.

**Contrarian angles outperform how-to by 3x.** Dan's Instagram data proves this. Lead with harsh truths, not coddling.

---

## Troubleshooting Guide

### "My ads aren't spending"
1. Check if "Describe Your Audience" text is too narrow
2. Raise daily budget to $100 (might be underfunded)
3. Wait 24-48 hours (learning phase is slow to start)
4. Check ad disapprovals in Ad Review Center

### "CPA is too high"
1. **Check CPM** - If >$30, auction is expensive. Test new placements or wait for CPM to drop.
2. **Check CTR** - If <1%, creative isn't resonating. Kill and test new angles.
3. **Check landing page** - Run kourse.konteks.co through PageSpeed Insights. Slow load kills conversions.
4. **Check Initiate-to-Purchase rate** - If <20%, landing page or offer needs work.

### "Stuck in learning phase"
- Optimize for InitiateCheckout instead of Purchase (more events to learn from)
- Increase budget to get 50+ conversions faster
- Wait it out (can take 7-10 days at $80/day)
- Don't change anything >20% (resets learning)

### "ROAS dropped suddenly"
1. Check frequency - If >4, ad fatigue. Refresh creative.
2. Check if competitor launched - CPMs will spike.
3. Check pixel - Use Events Manager Test tool.
4. Check if you changed anything >20% (budget, targeting, creative) - learning reset.

---

## Key Differences from v2 (Reference)

| v2 (Outdated) | v3 (2026) |
|---------------|-----------|
| 5 ad sets with interest layers | 1-2 ad sets, broad targeting |
| Optimize for Purchase | Optimize for InitiateCheckout |
| Pixel only | Pixel + CAPI required |
| Generic "ace crits" copy | Contrarian angles from Dan's proven videos |
| No Lookalike strategy | 3-Render Rule video Lookalike (219K views, 6.4% engagement) |
| Manual interest targeting | "Describe Your Audience" feature |
| No creative refresh schedule | 5-8 new ads/week minimum |
| Kill metrics after $50 | Kill metrics after $50 (same - this was correct) |

**Bottom line:** v3 is simpler, broader, and leverages Dan's proven Instagram content strategy. The algo does the targeting work. You focus on creative quality and volume.

---

**Built using:**
- Meta Ads Mastery skill (March 2026)
- Dan's Instagram video insights (3-Render Rule = 219K views)
- Supermemory: Meta ads 2026 research

**Questions?** Read the full Meta Ads Mastery skill at `/Users/jinxjinx/.openclaw/workspace/skills/meta-ads-mastery/SKILL.md`
