# Konteks Kourse - Email Sequences (Plain Text)
All emails from: Dan (dan@konteks.co or whatever sender is configured)
Under 150 words each. Plain text only. No HTML formatting.

---

## SEQUENCE 1: ONBOARDING (trigger: new Stripe subscription)

### Email 1 — Welcome (Day 0, immediate)

**Subject:** you're in

Hey,

You're in the Konteks Kourse. Here's your access:

https://www.skool.com/architecture?utm_source=email&utm_medium=automation&utm_campaign=onboarding

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

https://www.skool.com/architecture?utm_source=email&utm_medium=automation&utm_campaign=community

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
- https://www.skool.com/architecture?utm_source=email&utm_medium=automation&utm_campaign=onboarding → https://www.skool.com/architecture?utm_source=email&utm_medium=automation&utm_campaign=onboarding
- [CHAPTER_2_LINK] → Skool classroom direct link to Chapter 2
- [CHAPTER_3_LINK] → Skool classroom direct link to Chapter 3
- https://www.skool.com/architecture?utm_source=email&utm_medium=automation&utm_campaign=community → https://www.skool.com/architecture?utm_source=email&utm_medium=automation&utm_campaign=community
- [UPDATE_PAYMENT_LINK] → Stripe Customer Portal URL
- [REJOIN_LINK] → https://kourse.konteks.co (or Stripe Payment Link)
- [DISCOUNT_LINK] → Stripe Payment Link with coupon applied (or checkout page with promo code)
- [MANAGE_SUBSCRIPTION_LINK] → Stripe Customer Portal URL
- [END_DATE] → dynamic field from Stripe (subscription end date)
- [RENEWAL_DATE] → dynamic field from Stripe (next billing date)
- [COMMUNITY_UPDATE_1/2/3] → Dan manually updates monthly

---

## SEQUENCE 5: LEAD MAGNET NURTURE (trigger: tag "lead-magnet" added)

Guide: "5 Things Your Lecturers Grade On (That They Never Tell You)"

### Email 12 — Guide Delivery (Day 0, immediate)

**Subject:** here's your guide

Hey {{first_name}},

Here's the guide: 5 Studio Shortcuts Your Lecturers Never Taught You.

https://kourse.konteks.co/guide/5-studio-shortcuts-guide.pdf

Takes about 10 minutes to read. The section on concept development (shortcut #2) is the one most students tell me changed how they approach projects.

Quick question: what year are you in? Reply and let me know - I read every email.

Dan

P.S. If the link doesn't work, reply to this email and I'll send it directly.

---

### Email 13 — The Filter (Day 2)

**Subject:** why they say "push it further"

I wanted to follow up on the guide.

Here's the thing nobody tells you about architecture school: studio was designed as a filter. It's not designed to teach you. It's designed to see who figures it out on their own.

"Push it further." "Be more critical." "Develop your concept."

These aren't instructions. They're tests. To see if you can work it out without being told.

The students who do well aren't smarter. They found the patterns - either on their own or because someone showed them.

I built a system that breaks down every one of those patterns. 5 chapters. How to develop concepts from briefs. How to manage your time. How to walk into crits prepared.

363 students are using it right now.

If you want to see inside: https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

7 days free. Cancel anytime.

Dan

---

### Email 14 — Social Proof (Day 5)

**Subject:** she went from dreading crits to looking forward to them

I got this message from Priya last week. She's a 3rd year at University of Cape Town.

"I went from dreading crits to actually looking forward to them. The mindset chapter alone changed how I approach every single project."

The thing is, Priya isn't more talented now than she was before. She just has a framework. She knows what lecturers are looking for (you read about that in the guide). And she has a system for delivering it.

That system is what I teach inside Konteks.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

7 days free. All 5 chapters. The time management system. The community.

Dan

---

### Email 15 — Last Touch (Day 8)

**Subject:** last one from me

This is the last email I'll send about this.

You downloaded the guide, which means you care about doing well in architecture school. That already puts you ahead of most people.

If the guide was useful, the full system goes deeper into every one of those 5 points. Chapters on concept development, time management, crit preparation, site analysis.

363 students are inside. 37 spots left at the current price before it goes from $29/mo to $49/mo.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

Try it free for 7 days. If it's not for you, cancel before day 8 and you pay nothing.

Dan

---

## SEQUENCE 6: QUIZ FUNNEL - THE LAST-MINUTER (trigger: tag "quiz-last-minuter" added)

### Email 16 — Result Delivery (Day 0, immediate)

**Subject:** your result: The Last-Minuter

Hey {{first_name}},

You got The Last-Minuter.

Here's what that means: you work harder than most of your class. The problem isn't effort. It's that you're doing the wrong type of work at the wrong time.

All-nighters happen when deep creative thinking gets mixed with deadline execution. They're different types of work and they need different blocks of time.

The fix is a framework called Deep Work / Steady Work / Easy Work. You never mix the three. Your week gets structured around energy, not panic.

That framework lives in Chapter 3 of Konteks. Students who use it report saving 5-10 hours a week.

Want to try it? 7 days free: https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

Dan

---

### Email 17 — The Deeper Problem (Day 3)

**Subject:** why planning ahead still doesn't work

Here's what most Last-Minuters try:

They buy a planner. They write deadlines in it. They tell themselves they'll start earlier this time.

It never works. Because the problem isn't knowing WHEN things are due. It's knowing WHAT to do at any given moment.

When you sit down in studio, you need a system that tells you: right now, is this Deep Work time (creative, conceptual, hard thinking) or Steady Work time (drawing, modeling, production) or Easy Work time (admin, formatting, printing)?

Without that distinction, you default to whatever feels urgent. And urgency always wins over importance.

The full time management system is in Chapter 3. The Konteks Kalendar is the weekly planner that makes it work.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

Dan

---

### Email 18 — Quick Win (Day 6)

**Subject:** try this next deadline week

One thing you can do right now, without signing up for anything:

Next time you sit down to work, ask yourself: is this Deep Work, Steady Work, or Easy Work?

Deep Work = concept development, design decisions, critical thinking. Do this when you're fresh. Never after midnight.

Steady Work = drafting, modeling, rendering. You can do this tired.

Easy Work = printing, formatting, organizing files. Save this for when your brain is done.

Just sorting your tasks into those three categories will save you hours. If it works, the full system inside Konteks takes it further with weekly planning templates and energy-based scheduling.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

7 days free.

Dan

---

## SEQUENCE 7: QUIZ FUNNEL - THE CONCEPT STRUGGLER (trigger: tag "quiz-concept-struggler" added)

### Email 19 — Result Delivery (Day 0, immediate)

**Subject:** your result: The Concept Struggler

Hey {{first_name}},

You got The Concept Struggler.

Don't take the name personally. Most architecture students are concept strugglers. It's the #1 thing nobody teaches.

Here's the pattern: you get a brief, you Google precedents, you try to find an "idea," and everything feels generic. "Light and shadow." "Connection to nature." You know it's not enough but you can't figure out what is.

The fix is surprisingly mechanical. There's a brief analysis method that pulls specific, place-driven concepts out of any project brief. It's not about being more creative. It's about having a process.

That process is Chapter 4 of Konteks. It's the chapter students tell me changed how they approach every project.

Try it free for 7 days: https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

Dan

---

### Email 20 — The Pattern (Day 3)

**Subject:** where good concepts actually come from

The best concepts in your class don't come from inspiration. They come from the site.

I mean that literally. The site - its history, its movement patterns, its social dynamics, its environmental conditions - contains the concept. Your job isn't to invent an idea. It's to find the one that already exists in the place.

When a lecturer says "your concept isn't specific enough," what they really mean is: this could be anywhere. It's not rooted in the site.

Chapter 4 (concept development) and Chapter 5 (site analysis) work together. You learn to read a site at a depth most students never reach, and then you learn to turn that analysis into a concept that can only belong in that specific place.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

Dan

---

### Email 21 — Quick Win (Day 6)

**Subject:** the 3-question concept test

Here's a quick test for your current project concept. Ask yourself:

1. Could this concept work on a different site? If yes, it's too generic.
2. Can you explain it in one sentence without using "light," "shadow," "nature," or "connection"?
3. Does it come from something specific you found in the site analysis?

If you answered yes to #1 or no to #2 or #3, your concept needs work. That's not a failure - it's a signal that you need a better process for getting from brief to concept.

The full process is in Chapter 4 of Konteks. It starts with brief analysis, moves through site reading, and ends with a concept so specific your lecturer asks how you thought of it.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

Dan

---

## SEQUENCE 8: QUIZ FUNNEL - THE IMPOSTER (trigger: tag "quiz-imposter" added)

### Email 22 — Result Delivery (Day 0, immediate)

**Subject:** your result: The Imposter

Hey {{first_name}},

You got The Imposter. And before you read further: you're not actually behind.

The students who seem to "get it" aren't more talented. They either had someone show them the patterns (a parent in the industry, a friend who graduated, a tutor who actually explained things) or they stumbled into them through trial and error.

You haven't found those patterns yet. That's it. That's the entire gap.

Architecture school was designed as a filter. "Push it further" isn't an instruction - it's a test to see if you can figure out what "further" means on your own. The system was never built to teach you.

Konteks is everything I figured out about what the system actually expects from you. 5 chapters. Starts with the unwritten rules of architecture school and builds to concept development, time management, and crit preparation.

363 students are using it. Many of them felt exactly like you do right now.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

7 days free.

Dan

---

### Email 23 — Reframe (Day 3)

**Subject:** your "stupid" ideas are the good ones

Here's something I learned too late:

The ideas you dismiss as dumb, weird, or too ambitious? Those are your best ones. Every top student I know had the same experience - their best project started as something they almost threw away.

Architecture school trains you to self-censor. You see polished work on the walls and think "I could never do that." But what you're seeing is the final iteration. You're comparing your messy first draft to someone else's tenth version.

The framework in Chapter 2 (The Top Student Mindset) teaches you to hold ideas longer before judging them. Start messy. Iterate after. The students who produce original work aren't more creative - they just didn't kill their ideas at stage one.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

Dan

---

### Email 24 — Permission (Day 6)

**Subject:** you're allowed to be confused

Quick message.

If you're reading this and still thinking "maybe I'm just not cut out for architecture" - I need you to hear this.

I won best thesis across engineering, science and architecture. The same year, I topped Theory AND Professional Practice.

There were multiple points during my degree where I thought about quitting. Where I sat in a crit and had no idea what the lecturer wanted. Where everyone else seemed to get it and I didn't.

The difference is I found a way to decode what the system wanted. I turned that into a system. And I'm sharing that system with you inside Konteks.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

7 days free. All 5 chapters. No risk.

Dan

---

## SEQUENCE 9: QUIZ FUNNEL - THE HIGH ACHIEVER (trigger: tag "quiz-high-achiever" added)

### Email 25 — Result Delivery (Day 0, immediate)

**Subject:** your result: The High Achiever

Hey {{first_name}},

You got The High Achiever.

You already have the fundamentals. You manage your time, you get through crits, you produce work. What you want is the jump from "doing well" to "being the one they remember."

That gap is smaller than you think - and it's technical, not motivational. It's about depth. Deeper site analysis, sharper concept framing, and knowing exactly what separates a good project from one that gets shared after the presentation.

The chapters I'd point you to: Chapter 5 (site analysis beyond the sun path) and Chapter 4 (concept development at the level that makes lecturers sit forward).

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

7 days free.

Dan

---

### Email 26 — The Edge (Day 3)

**Subject:** what separates good from best

I've seen hundreds of architecture projects. The ones that win - that actually get talked about after the crit - all share something.

It's not the rendering quality. It's not the model. It's not even the concept alone.

It's that the concept, the site, and the design language all point in the same direction. Everything is integrated. When a lecturer looks at the boards, every decision has a reason and every reason traces back to the site.

Most good students have strong concepts OR strong analysis OR strong representation. The students who win have all three aligned.

That alignment is what Chapters 4 and 5 teach. Chapter 4 takes your concept from "good" to "why didn't I think of that." Chapter 5 makes your site analysis so specific that your design can only belong in that place.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

Dan

---

### Email 27 — Ambition (Day 6)

**Subject:** for the students who want to be remembered

Last email from me on this.

You took the quiz because you want more than a passing grade. You want to be the student whose work gets shown to next year's class. Whose concept gets referenced. Who walks into the final crit knowing they nailed it.

That's exactly who Konteks was built for. Not beginners - achievers who want the edge.

https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture

37 spots left at $29/mo before it goes to $49.

Dan

---

## NOTES FOR NEW SEQUENCES

### Automation 5: Lead Magnet Nurture
- Trigger: Tag "lead-magnet" added (via Cloudflare Worker on guide.html submit)
- Email 12: immediate (guide delivery)
- Wait 2 days - Email 13 (the filter)
- Wait 3 days - Email 14 (social proof)
- Wait 3 days - Email 15 (last touch)
- Goal: starts free trial - exit

### Automation 6-9: Quiz Funnels
- Trigger: Tag "quiz-last-minuter" / "quiz-concept-struggler" / "quiz-imposter" / "quiz-high-achiever" added
- Email sequence: immediate result, then Day 3, then Day 6
- Goal: starts free trial - exit
- Each result type gets its own automation with 3 emails

### Placeholder links:
- https://kourse.konteks.co/checkout.html?plan=trial&utm_source=email&utm_medium=nurture - https://buy.stripe.com/9B68wP37U6Mf9wzfa45Rm05
- https://kourse.konteks.co/guide/5-studio-shortcuts-guide.pdf - Link to hosted PDF (needs to be created and hosted)

### AC Tags to create:
- lead-magnet
- quiz-last-minuter
- quiz-concept-struggler
- quiz-imposter
- quiz-high-achiever

### AC Custom Fields to create:
- quiz_result (text field) - stores the quiz result type
