# Meta Ads Setup Guide - Konteks Kourse
**Last Updated:** 2026-03-22  
**Target:** Architecture students 18-30  
**Budget:** $15/day (ABO)  
**Goal:** Drive subscriptions to kourse.konteks.co

---

## Phase 1: Account Setup

### 1.1 Facebook Business Manager
1. Go to [business.facebook.com](https://business.facebook.com)
2. Click **Create Account**
3. Enter business name: **Konteks** (or Dan's preference)
4. Your name: **Dan Evans** (or full legal name)
5. Business email: **info@konteks.co**
6. Click **Submit**
7. Verify email (check info@konteks.co inbox)

### 1.2 Add Facebook Page
1. In Business Manager, go to **Business Settings → Accounts → Pages**
2. Click **Add → Add a Page**
3. If Dan has an existing architecture page, add it
4. If not: **Create New Page**
   - Page name: **Konteks** or **@studwalldan**
   - Category: **Education**
   - Description: "Everything your studio won't teach you. Architecture mindset. Time management. Concept development."

### 1.3 Add Instagram Account (if Dan has one)
1. **Business Settings → Accounts → Instagram Accounts**
2. Click **Add → Connect Instagram Account**
3. Login with Dan's Instagram credentials
4. Select the @studwalldan account (if it exists)

### 1.4 Add Ad Account
1. **Business Settings → Accounts → Ad Accounts**
2. Click **Add → Create a New Ad Account**
3. Ad Account Name: **Konteks Kourse Ads**
4. Time Zone: **Asia/Dubai (GMT+4)** (critical - can't change later!)
5. Currency: **USD** (critical - can't change later!)
6. Click **Create Ad Account**

### 1.5 Add Payment Method
1. Go to **Business Settings → Payments → Payment Methods**
2. Click **Add Payment Method**
3. Enter Shel's credit card (business expense - Dan doesn't have Stripe/can't process payments)
4. Billing address: SEVANS IT Services, IFZA, Dubai Silicon Oasis
5. Click **Save**

---

## Phase 2: Meta Pixel Setup

### 2.1 Create Pixel
1. Go to **Events Manager** (business.facebook.com/events_manager)
2. Click **Connect Data Sources → Web → Meta Pixel**
3. Pixel Name: **Konteks Kourse Pixel**
4. Website URL: **https://kourse.konteks.co**
5. Click **Continue**
6. Choose **Manually Install the Code** (we already have the snippet in index.html)

### 2.2 Get Pixel ID
1. After creation, you'll see a Pixel ID (16-digit number like `1234567890123456`)
2. Copy this ID
3. **Send to Shel** - he needs to replace `PIXEL_ID_HERE` in index.html (line 23 and line 30)

### 2.3 Verify Pixel Installation
1. Install **Meta Pixel Helper** Chrome extension
2. Visit https://kourse.konteks.co (after Shel updates the Pixel ID)
3. Click the extension - should show green checkmark and "PageView" event
4. If no events fire, wait 20 minutes for DNS/deployment, then re-check

### 2.4 Create Custom Conversions
Meta's standard events don't map cleanly to Stripe checkout flow. Create custom conversions:

**Conversion 1: Started Checkout**
1. **Events Manager → Custom Conversions → Create Custom Conversion**
2. Name: **Started Checkout**
3. Data Source: **Konteks Kourse Pixel**
4. Conversion Event: **URL Contains**
5. URL rule: **checkout.html**
6. Category: **Lead**
7. Value: Leave blank (we'll use Stripe's actual value)
8. Click **Create**

**Conversion 2: Subscription Complete**
1. **Create Custom Conversion**
2. Name: **Subscription Purchase**
3. Data Source: **Konteks Kourse Pixel**
4. Conversion Event: **URL Contains**
5. URL rule: **thank-you.html**
6. Category: **Purchase**
7. Value: Leave blank
8. Click **Create**

---

## Phase 3: Campaign Structure (ABO)

### 3.1 Why ABO over CBO?
- **Budget:** $15/day is too low for CBO to optimize effectively
- **Control:** ABO lets you test audiences head-to-head with equal budget
- **Learning:** ABO forces you to understand what's working before scaling

### 3.2 Create Campaign
1. Go to **Ads Manager** (business.facebook.com/adsmanager)
2. Click **Create → Campaign**
3. Choose **Sales** objective (optimizes for purchases)
4. Campaign Name: **Konteks Kourse - Cold Traffic**
5. Turn OFF **Advantage Campaign Budget** (this is CBO - we want ABO)
6. Click **Continue**

### 3.3 Ad Set 1: Architecture Students - Broad
**Targeting:**
1. Ad Set Name: **Arch Students 18-30 Broad**
2. Conversion Event: **Subscription Purchase** (custom conversion from Phase 2)
3. Budget: **$15/day**
4. Schedule: **Run continuously starting today**

**Audience:**
1. Location: **Worldwide** (start broad, Dan's content is English)
2. Age: **18-30**
3. Gender: **All**
4. Detailed Targeting:
   - **Interests → Architecture** (type "architecture" and select)
   - **Behaviors → College Students** (if available)
   - Estimated audience size: Aim for 500K-2M (broad enough to optimize)

**Placements:**
1. Choose **Advantage+ Placements** (let Meta optimize)
2. Or manually select:
   - Facebook Feed
   - Instagram Feed
   - Instagram Stories
   - Facebook Stories
   - (Disable Audience Network - often low quality)

**Optimization:**
1. Optimization Goal: **Conversions** → **Subscription Purchase**
2. Bid Strategy: **Highest Volume** (maximize conversions)
3. Click **Next**

### 3.4 Create Ad (Carousel Format)
**Why Carousel?** Shows course value visually - 3-5 cards with chapter screenshots/testimonials.

1. Ad Name: **Carousel - Chapter Preview v1**
2. Identity: Select **Konteks** Facebook Page
3. Format: **Carousel**

**Card 1: Hook**
- Image: Screenshot of Dan's best chapter content or student testimonial
- Headline: **"Everything your studio won't teach you"**
- Description: **Time management. Concept development. Site analysis.**
- Destination URL: **https://kourse.konteks.co**

**Card 2: Social Proof**
- Image: Screenshot of Skool community (363 members) or testimonial
- Headline: **"363 architecture students already inside"**
- Description: **Join the community. $29/month.**
- Destination URL: **https://kourse.konteks.co**

**Card 3: Urgency**
- Image: Course curriculum screenshot (5 chapters)
- Headline: **"5 chapters. 100% practical. No fluff."**
- Description: **Start today.**
- Destination URL: **https://kourse.konteks.co**

**Primary Text (appears above carousel):**
```
If you're struggling in architecture studio, it's not your fault.

Your professors are teaching theory. I'm teaching how to actually think like a top student.

Time management. Concept development. Site analysis.

363 students are already inside. $29/month. Cancel anytime.

👇 See what you get
```

**Call to Action Button:** **Learn More** (or **Sign Up** if Meta allows)

5. Click **Publish**

---

## Phase 4: Testing & Optimization (First 7 Days)

### 4.1 Let it Run (Days 1-3)
- **DO NOT touch anything** for 72 hours
- Meta needs time to learn (exit learning phase = 50 conversions)
- With $15/day budget, expect 0-2 conversions in first 3 days (normal)
- Watch for link clicks (should see 20-40/day if targeting is good)

### 4.2 Check Metrics (Day 4)
Go to **Ads Manager → Campaigns → Columns → Customize Columns**

**Key Metrics to Track:**
- **Link Clicks** - Are people interested? (Target: >20/day)
- **Cost Per Click (CPC)** - How expensive is traffic? (Target: <$0.75)
- **Landing Page Views** - Did the page load? (Should be 80%+ of link clicks)
- **Initiated Checkout** - Did they click payment? (Track via `checkout.html` URL)
- **Purchases** - Subscription conversions (Track via `thank-you.html` URL)
- **Cost Per Purchase (CPP)** - Is it profitable? (Target: <$60 for $29 MRR)

### 4.3 Optimization Decisions

**If CPC > $1.00 after 3 days:**
- Targeting too narrow OR creative is boring
- Action: Duplicate ad set, broaden age to 18-35, test

**If Link Clicks > 30/day but no checkouts:**
- Landing page issue (copy, trust, price)
- Action: Review sales page, add testimonials, clarify offer

**If Checkouts > 5 but no purchases:**
- Stripe payment issue OR people are price-sensitive
- Action: Check Stripe setup, consider annual discount ($249 = 2 months free)

**If CPP < $60:**
- PROFITABLE - scale by 20% every 3 days
- Action: Increase budget to $18/day, wait 3 days, check again

**If CPP > $100:**
- UNPROFITABLE - pause and rethink
- Action: Test new creative, new audience, or lower price

### 4.4 Creative Refresh (Day 7)
Even if ads are working, refresh creative weekly to avoid fatigue.

**New Carousel Ideas:**
- Student before/after work (if Dan has portfolio examples)
- Chapter walkthrough (screen recording stills)
- Dan speaking to camera (builds trust)
- Memes about architecture school struggles (high engagement)

---

## Phase 5: Scaling (Week 2+)

### 5.1 When to Scale
Only scale if ALL of these are true:
- CPP < $60 (profitable)
- Conversion rate > 1% (landing page → purchase)
- Frequency < 2.0 (not burning out audience)

### 5.2 How to Scale (20% Rule)
1. Increase budget by **20% every 3 days**
2. Example: $15 → $18 → $21.60 → $26 → $31
3. Watch CPP - if it rises >20%, stop scaling

### 5.3 Add New Ad Sets (Stacked Scaling)
Once base ad set is profitable, duplicate and test:
- **Age brackets:** 18-24 vs 25-30
- **Genders:** Male only vs Female only (architecture skews male ~60/40)
- **Lookalike Audiences:** After 50 purchases, create 1% lookalike of customers
- **Retargeting:** Website visitors who didn't purchase (need 100+ visitors/day)

### 5.4 Advanced: CBO Testing
After you hit $50/day total spend and have 3+ profitable ad sets:
1. Create new CBO campaign
2. Move top 3 ad sets into it
3. Set campaign budget = $50/day
4. Let Meta allocate budget automatically
5. Compare CBO vs ABO performance over 7 days

---

## Phase 6: Tracking & Reporting

### 6.1 Daily Checklist (5 minutes)
1. Open Ads Manager
2. Check **Purchases** (today vs yesterday)
3. Check **CPP** (is it rising?)
4. Check **Frequency** (is it >2.5? Refresh creative)
5. Check **Landing Page Views** (page loading properly?)

### 6.2 Weekly Review (30 minutes)
1. Export data: **Ads Manager → Reports → Export → CSV**
2. Calculate:
   - Total Spend
   - Total Purchases
   - CPP (Spend / Purchases)
   - MRR Added (Purchases × $29)
   - Payback Period (CPP / $29 = months to profit)
3. Document in Google Sheet or Notion

### 6.3 KPIs to Hit
- **Month 1:** 10+ subscribers (breakeven at $290 MRR, $450 ad spend)
- **Month 2:** 30+ subscribers (profitable at $870 MRR, $900 ad spend)
- **Month 3:** 50+ subscribers (scaling at $1,450 MRR, $1,500 ad spend)

---

## Troubleshooting

### "My ads aren't spending"
- **Cause:** Bid too low OR audience too small
- **Fix:** Switch bid strategy to **Cost Cap** and set $5.00 cap

### "Pixel not firing"
- **Cause:** Pixel ID not updated in index.html
- **Fix:** Verify Pixel ID (16 digits), check line 23 and 30 in index.html

### "High CPC ($2+)"
- **Cause:** Competitive niche OR bad creative
- **Fix:** Test video creative (architecture timelapse, Dan speaking)

### "Checkouts but no purchases"
- **Cause:** Stripe Payment Link broken OR trust issue
- **Fix:** Test checkout yourself, add trust badges (30-day guarantee)

### "Ad account disabled"
- **Cause:** New account + aggressive spend = Meta's fraud detector
- **Fix:** Start with $10/day for 7 days, then increase. Appeal via Business Support.

---

## Ad Creative Specs

### Carousel Images
- **Size:** 1080×1080px (square)
- **Format:** JPG or PNG
- **Text on image:** <20% of area (Meta may reject if too much text)
- **File size:** <8MB per card

### Video (if testing)
- **Length:** 15-30 seconds (hook in first 3 seconds)
- **Size:** 1080×1350px (4:5 vertical) or 1080×1920px (9:16 stories)
- **Format:** MP4 or MOV
- **Captions:** REQUIRED (80% watch with sound off)

### Primary Text
- **Length:** 125 characters or less (gets truncated on mobile)
- **Hook:** First sentence must stop scroll
- **CTA:** Clear next step ("See what you get", "Join 363 students")

---

## Cost Estimates

### First Month (Testing)
- **Ad Spend:** $450 ($15/day × 30 days)
- **Expected Purchases:** 8-12 (CPP $35-55)
- **MRR Added:** $232-348 (not profitable yet)
- **Goal:** Find winning creative + audience

### Month 2-3 (Scaling)
- **Ad Spend:** $900/month ($30/day)
- **Expected Purchases:** 20-30 (CPP $30-45)
- **MRR Added:** $580-870
- **Goal:** Hit breakeven (MRR = ad spend)

### Month 4+ (Profitable)
- **Ad Spend:** $1,500+/month ($50+/day)
- **Expected Purchases:** 40-60 (CPP $25-38)
- **MRR Added:** $1,160-1,740
- **Goal:** 50%+ profit margin (MRR > ad spend × 1.5)

---

## Next Steps for Dan

1. **Business Manager Setup** (30 min)
   - Create account at business.facebook.com
   - Add Konteks page (or create new)
   - Create ad account (timezone: Dubai, currency: USD)

2. **Get Pixel ID** (10 min)
   - Events Manager → Create Pixel
   - Copy 16-digit Pixel ID
   - Send to Shel to update index.html

3. **Verify Pixel** (5 min)
   - Install Meta Pixel Helper extension
   - Visit kourse.konteks.co
   - Confirm PageView fires

4. **Launch First Campaign** (20 min)
   - Follow Phase 3 (Campaign Structure)
   - Upload 3-5 carousel images
   - Write primary text
   - Set $15/day budget
   - Publish

5. **Daily Check** (5 min/day)
   - Ads Manager → Check purchases
   - Watch CPP
   - Refresh creative if frequency >2.5

---

**Questions? Ask in #architecture or DM Shel.**
