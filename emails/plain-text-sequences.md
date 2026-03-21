# Konteks Kourse - Email Sequences (Plain Text)
All emails from: Dan (dan@konteks.co or whatever sender is configured)
Under 150 words each. Plain text only. No HTML formatting.

---

## SEQUENCE 1: ONBOARDING (trigger: new Stripe subscription)

### Email 1 — Welcome (Day 0, immediate)

**Subject:** you're in

Hey,

You're in the Konteks Kourse. Here's your access:

[SKOOL_LINK]

Start with Chapter 1. It sets up how everything else works - grading systems, what lecturers actually want, and how to structure your project from day one.

The chapters build on each other, so go in order.

You also have the Konteks Kalendar (weekly planner) and the full student community inside.

Work at your own pace. I'll check in with you in a couple days.

Dan

---

### Email 2 — Quick Win (Day 2)

**Subject:** try this before your next crit

One thing from Chapter 2 that changed how I work:

Your best ideas will feel stupid at first. That's normal. The students who produce original concepts aren't more talented - they just hold their ideas longer before judging them.

Start messy. Iterate after.

The full creative thinking framework is in Chapter 2. If you haven't opened it yet, now's the time.

[CHAPTER_2_LINK]

Dan

---

### Email 3 — Push to Chapter 3 (Day 5)

**Subject:** the chapter students say saves them 10 hours a week

If you've been through Chapters 1 and 2, Chapter 3 is where the time system lives.

I split every task into three modes: Deep Work, Steady Work, and Easy Work. You never mix them. Your week gets blocked by energy, not by deadline panic.

This is the thing I wish someone had told me in first year.

[CHAPTER_3_LINK]

Dan

---

### Email 4 — Community Push (Day 8)

**Subject:** quick question

Have you posted anything in the community yet?

Even if it's just a question or a work-in-progress. The students who post get feedback from other students going through the same stuff. It's the closest thing to a second desk crit.

Drop something in there today. Doesn't need to be polished.

[COMMUNITY_LINK]

Dan

---

## SEQUENCE 2: DUNNING (trigger: Stripe payment failed)

### Email 5 — Payment Failed (Day 0, immediate)

**Subject:** your payment didn't go through

Hey,

Your latest payment for the Konteks Kourse failed. Usually it's an expired card or a bank flag.

Takes 30 seconds to fix:

[UPDATE_PAYMENT_LINK]

If something else is going on, reply to this email and I'll sort it out.

Dan

---

### Email 6 — Payment Reminder (Day 3)

**Subject:** still can't process your payment

Your payment still hasn't gone through. If it doesn't get updated, you'll lose access to the chapters, the Kalendar, and the community.

[UPDATE_PAYMENT_LINK]

Takes 30 seconds. Reply if you need help.

Dan

---

### Email 7 — Final Warning (Day 7)

**Subject:** your access gets removed tomorrow

Last heads up. Your Konteks Kourse access will be removed if payment isn't updated today.

All chapters, the Kalendar, community access - gone.

[UPDATE_PAYMENT_LINK]

Dan

---

## SEQUENCE 3: WIN-BACK (trigger: Stripe subscription canceled)

### Email 8 — Cancel Acknowledgment (Day 1)

**Subject:** no hard feelings

Your Konteks Kourse subscription has been cancelled.

You'll keep access until [END_DATE] (end of your current billing period).

If you change your mind before then, you can rejoin anytime:

[REJOIN_LINK]

Thanks for being part of it.

Dan

---

### Email 9 — Discount Offer (Day 7)

**Subject:** $19/mo if you come back

It's been a week since you left.

I'd rather have you back at a discount than not at all. $19 for your next month. One-time offer, no strings.

If it's still not the right fit after that, cancel again. No pressure.

[DISCOUNT_LINK]

Dan

---

### Email 10 — Social Proof (Day 14)

**Subject:** what you missed this week

A few things that happened in the community since you left:

- [COMMUNITY_UPDATE_1]
- [COMMUNITY_UPDATE_2]
- [COMMUNITY_UPDATE_3]

(Dan: update these monthly with real activity from the group)

The door's open whenever you're ready.

[REJOIN_LINK]

Dan

---

## SEQUENCE 4: RETENTION

### Email 11 — Annual Renewal Heads Up (30 days before renewal)

**Subject:** your annual plan renews in 30 days

Your Konteks Kourse annual plan renews on [RENEWAL_DATE] for $249.

You've had access to all 5 chapters, the Kalendar, and the community for the past year. If you want to keep going, you don't need to do anything.

If you want to cancel or switch to monthly:

[MANAGE_SUBSCRIPTION_LINK]

Dan

---

## NOTES FOR ACTIVECAMPAIGN SETUP

### Automation 1: Onboarding
- Trigger: Stripe → New Subscription (via native integration or Zapier)
- Email 1: immediate
- Wait 2 days → Email 2
- Wait 3 days → Email 3
- Wait 3 days → Email 4

### Automation 2: Dunning
- Trigger: Stripe → Payment Failed
- Email 5: immediate
- Wait 3 days → Email 6
- Wait 4 days → Email 7
- Goal: payment succeeds → exit automation

### Automation 3: Win-back
- Trigger: Stripe → Subscription Canceled
- Wait 1 day → Email 8
- Wait 6 days → Email 9
- Wait 7 days → Email 10

### Automation 4: Retention
- Trigger: Stripe → Subscription Renewal Upcoming (or date-based, 30 days before annual renewal)
- Email 11: immediate
- Only applies to annual subscribers

### Placeholder links to replace:
- [SKOOL_LINK] → https://www.skool.com/konteks-6655?utm_source=email&utm_medium=automation&utm_campaign=onboarding
- [CHAPTER_2_LINK] → Skool classroom direct link to Chapter 2
- [CHAPTER_3_LINK] → Skool classroom direct link to Chapter 3
- [COMMUNITY_LINK] → https://www.skool.com/konteks-6655?utm_source=email&utm_medium=automation&utm_campaign=community
- [UPDATE_PAYMENT_LINK] → Stripe Customer Portal URL
- [REJOIN_LINK] → https://kourse.konteks.co (or Stripe Payment Link)
- [DISCOUNT_LINK] → Stripe Payment Link with coupon applied (or checkout page with promo code)
- [MANAGE_SUBSCRIPTION_LINK] → Stripe Customer Portal URL
- [END_DATE] → dynamic field from Stripe (subscription end date)
- [RENEWAL_DATE] → dynamic field from Stripe (next billing date)
- [COMMUNITY_UPDATE_1/2/3] → Dan manually updates monthly
