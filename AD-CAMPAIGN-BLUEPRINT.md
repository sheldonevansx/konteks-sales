# Konteks Kourse - Meta Ad Campaign Blueprint

## The Reality First

Architecture education is a paid ad **blue ocean**. From our research:
- 30x40 Design Workshop and Show It Better (Dan's closest competitors) do NOT run paid Meta ads
- The paid ad space for architecture digital products is almost empty
- This means low CPMs, cheap clicks, and first-mover advantage

Your budget: $15-20/day. That's ~$450-600/month. At a $29/mo product, you need ~16-21 conversions/month to break even. At a 2% landing page conversion rate with $1.50 CPC, that's realistic.

---

## Campaign Architecture (ABO, not CBO)

**Why ABO:** At $15-20/day, you don't have enough budget for Meta's algorithm to optimize across ad sets. ABO (Ad Set Budget Optimization) lets you control spend per audience. CBO needs $100+/day to work.

### Structure:
```
Campaign: Konteks Kourse - Cold Traffic
  Ad Set 1: Architecture Students - Interest ($5/day)
  Ad Set 2: Architecture Students - Lookalike ($5/day)  
  Ad Set 3: Architecture Professionals ($5/day)

Campaign: Konteks Kourse - Retargeting ($5/day)
  Ad Set 1: Website Visitors (pixel)
  Ad Set 2: Video Viewers 50%+
```

---

## Targeting

### Ad Set 1: Interest-Based (cold)
- **Age:** 18-30
- **Interests (layer these):**
  - Architecture (academic discipline)
  - Architectural design
  - AND one of: University, Student life, Graduate school
- **Exclude:** Existing customers (upload Skool email list)
- **Placements:** Automatic (let Meta decide - they know where cheap impressions are)
- **Location:** English-speaking countries (US, UK, AU, NZ, ZA, CA, IE, SG, HK, AE)

### Ad Set 2: Lookalike (once you have 100+ pixel events)
- Source: Purchase event or ViewContent event from pixel
- 1% lookalike in top-performing countries
- Skip this until you have data

### Ad Set 3: Broader Architecture
- **Age:** 20-35
- **Interests:** Architecture, Interior Design, Urban Planning
- **No** student layering - catch working professionals who want to upskill
- Lower priority, test after Ad Set 1 proves profitable

### Retargeting (start after 7 days of cold traffic)
- Website visitors last 14 days (exclude purchasers)
- Video viewers 50%+ last 14 days
- Different creative - address objections, show social proof

---

## Creative Strategy

### The Framework (from Dara Denney's 5-step system)
1. **Test the HOOK first** - same body, different first 3 seconds
2. **One variable per test** - never change hook AND body simultaneously
3. **3-5 hook variations per concept** - only change opening
4. **Kill losers fast** - below 1% CTR after 1,000 impressions = dead
5. **Scale winners slowly** - increase budget 20% every 3 days max

### Ad Format Priority
1. **Video (talking head)** - Dan speaking to camera, 15-30 seconds. This is the #1 format. Period.
2. **Static image** - Dan's teaching screenshot + bold text overlay
3. **Carousel** - chapter previews (each slide = one chapter benefit)

---

## 5 Ad Scripts for Dan to Film

All scripts follow PAS (Pain-Agitate-Solve) because pain-first hooks outperform aspirational hooks in education niches.

### Script 1: "The Crit Problem" (15 sec)
```
HOOK (first 3 sec): "Nobody at your architecture school will tell you this."

BODY: "The students who ace crits aren't more talented. They just know 
how to present their work in a way lecturers actually respond to. I 
learned this the hard way - then I won best thesis across engineering, 
science, and technology."

CTA: "Link in bio. $29 a month. Five chapters that change how you 
work."
```

### Script 2: "The Time Trap" (15 sec)
```
HOOK: "You're pulling all-nighters because nobody taught you this."

BODY: "I split every task into three modes - deep work, steady work, 
and easy work. You never mix them. Your week gets blocked by energy, 
not by deadline panic. This one system saved me 10 hours a week in 
studio."

CTA: "The full system is in Chapter 3. Link in bio."
```

### Script 3: "The Brief Decode" (20 sec)
```
HOOK: "Your brief isn't confusing. You just don't know how to read it."

BODY: "Every architecture brief has a hidden structure. Once you see 
it, your concept isn't random anymore - it comes directly from the 
brief. I show you exactly how to decode it in Chapter 4."

CTA: "Five chapters. $29 a month. Link in bio."
```

### Script 4: "The Talent Lie" (15 sec)
```
HOOK: "Architecture school has a dirty secret."

BODY: "The top students aren't more creative than you. They were 
taught systems that your lecturers never share. How to think about 
concepts. How to manage your time. How to present at crits. I put 
all of it in one place."

CTA: "Konteks Kourse. Link in bio."
```

### Script 5: "Social Proof" (20 sec)
```
HOOK: "326 architecture students are already inside."

BODY: "Five chapters covering everything from mindset to site 
analysis. A weekly planner built for studio schedules. And a 
community of students going through the same thing you are. This 
is what I wish existed when I started."

CTA: "$29 a month. Cancel anytime. Link in bio."
```

---

## Static Ad Creatives (NanoBanana prompts)

### Creative 1: "Dan Teaching" (hero screenshot)
```
Take this screenshot of Dan teaching in the Konteks Kourse video 
lesson. Add a bold white text overlay at the top that says:

"Nobody in studio will tell you this."

And smaller text at the bottom: "5 chapters. $29/mo. Cancel anytime."

The text should have a subtle dark shadow/outline for readability. 
Keep the image exactly as-is underneath. Output at 1080x1080px 
(square for feed).
```

### Creative 2: "Pain List"
```
Create a 1080x1080 square image with a clean white background. 
In bold black Inter font (800 weight), center this text:

"Sound familiar?

- You redesign your project 3 times
  before every crit

- You have no system for time management

- Your concepts feel random

- You pull all-nighters every week"

At the bottom in burnt orange (#E86A1C), add: 
"There's a better way. konteks.co"

Minimal design. No gradients. No icons. Just text.
```

### Creative 3: "Results"
```
Create a 1080x1080 square image. White background. 

Top: "What 326 students learned:" in bold black Inter font.

Then three bullet points with orange check marks:
"How to decode any brief in 30 minutes"
"A time system that eliminates all-nighters"
"How to present at crits with confidence"

Bottom: "Konteks Kourse - $29/mo" in orange.
```

---

## The Funnel Flow

```
Ad (Meta) 
  ↓
Sales Page (kourse.konteks.co) - PageView + ViewContent pixels fire
  ↓
Checkout Bridge (checkout.html) - InitiateCheckout pixel fires
  ↓
Stripe Payment Link - payment happens
  ↓
Thank You Page (thank-you.html) - Purchase pixel fires
  ↓
Zapier: Stripe → Skool invite + AC onboarding tag
  ↓
Email 1: "you're in" (immediate)
Email 2: "try this before your next crit" (day 2)
Email 3: "the chapter students say saves them 10 hours a week" (day 5)
Email 4: "quick question" (day 8)
```

---

## Ads Manager Setup (click-by-click)

### Step 1: Create Ad Account
1. Go to business.facebook.com
2. Business Settings (gear icon) → Ad Accounts → Add
3. Create new ad account → name it "Konteks Kourse"
4. Set currency to USD, timezone to Dubai (GMT+4)

### Step 2: Connect Pixel
1. Events Manager → Data Sources → your pixel should already show
2. If not: Add → Web → name "Konteks Kourse" → install manually (already done in code)
3. Verify events: open kourse.konteks.co in another tab → Events Manager should show PageView

### Step 3: Set Up Custom Conversions
1. Events Manager → Custom Conversions → Create
2. Name: "Konteks - View Content" → Event: ViewContent → Done
3. Name: "Konteks - Initiate Checkout" → Event: InitiateCheckout → Done
4. Name: "Konteks - Purchase" → Event: Purchase → Done

### Step 4: Create Campaign
1. Ads Manager → Create
2. Objective: **Sales** (not traffic, not engagement)
3. Campaign name: "Konteks Kourse - Cold Traffic"
4. **Turn OFF** Campaign Budget Optimization (this gives you ABO)
5. Continue

### Step 5: Create Ad Set
1. Name: "Architecture Students - Interest"
2. Pixel: Select your pixel
3. Conversion event: **Purchase** (optimize for the end goal)
4. Budget: $5/day
5. Start date: immediately
6. Audience:
   - Locations: US, UK, AU, NZ, ZA, CA
   - Age: 18-30
   - Detailed Targeting: Architecture (academic discipline) AND University
7. Placements: Advantage+ (automatic)
8. Continue

### Step 6: Create Ad
1. Format: Single image or video
2. Upload Dan's video (or static creative)
3. Primary text (the caption):
```
The students who ace crits aren't more talented.

They just learned what nobody in studio teaches:
- How to decode any brief in 30 minutes
- A time system that eliminates all-nighters  
- How to present at crits with confidence

5 chapters. Weekly planner included. 326+ students inside.

Built by the architect who won best thesis across engineering, science, and technology.
```
4. Headline: "The top student mindset is taught"
5. Description: "$29/month - Cancel anytime"
6. CTA button: "Learn More"
7. URL: https://kourse.konteks.co
8. URL parameters: `utm_source=meta&utm_medium=paid&utm_campaign=cold_traffic&utm_content={{ad.name}}`
9. Publish

### Step 7: Duplicate for variations
- Duplicate the ad set 2 more times
- Change targeting per the structure above
- Duplicate ads within each ad set, changing only the hook/creative

---

## Daily Management SOP

### First 3 Days: Don't touch anything
Let Meta's algorithm learn. Resist the urge to change things.

### Day 4+: Check these metrics daily
| Metric | Good | Kill It |
|--------|------|---------|
| CTR (link click-through) | >1.5% | <1% after 1K impressions |
| CPC (cost per click) | <$2.00 | >$3.00 |
| CPM (cost per 1K views) | <$15 | >$30 |
| Landing page conversion | >2% | <1% |
| Cost per purchase | <$29 | >$50 |

### Weekly Actions
- Kill underperforming ads (below 1% CTR after 1K impressions)
- Create 2-3 new hook variations of winning ads
- Check frequency - if >2.5, audience is seeing ads too often
- Move budget from losers to winners (max 20% increase per change)

### Scaling Rules
- Never increase budget more than 20% at a time
- Wait 3 days between budget changes
- If ROAS drops after scaling, reduce back immediately
- At $50+/day, consider switching to CBO

---

## Budget Breakdown

**Month 1 (testing):** $15/day = ~$450
- 3 ad sets x $5/day
- Goal: Find 1-2 winning creatives and 1 winning audience
- Expected: 5-15 purchases (depending on CPL)

**Month 2 (optimizing):** $20/day = ~$600
- Kill losers, double down on winners
- Add retargeting campaign ($5/day)
- Goal: 15-25 purchases

**Month 3+ (scaling):** $30-50/day
- Only if ROAS > 1.5x
- Add lookalike audiences
- Test new creative concepts monthly

---

## What to Do Right Now

1. Dan films Scripts 1-4 (15-20 seconds each, talking to camera, natural lighting, casual setting)
2. Create the static creatives in NanoBanana using the prompts above
3. Create the Meta Ad Account (business.facebook.com)
4. Set up Custom Conversions in Events Manager
5. Build Campaign 1 following the click-by-click guide
6. Wait 3 days, check metrics, iterate

**Do NOT launch ads until:**
- The funnel test passes (Stripe → Zapier → Skool → AC)
- Dan has filmed at least 2 video creatives
- You have at least 2 static creatives ready
- The AC onboarding automation is confirmed working
