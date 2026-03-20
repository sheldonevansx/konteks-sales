# Email Sequences Setup Guide
## Konteks Kourse Subscription Lifecycle

This guide explains how to set up all automated email sequences for the Konteks Kourse using ConvertKit (Kit) + Zapier + Stripe.

---

## 1. Email Service Recommendation

**Use ConvertKit (Kit)** - Free tier supports up to 1,000 subscribers.

### Why Kit?
- Visual automation builder (easy to see the flow)
- Built-in delay timers (Day 2, Day 5, Day 7 emails)
- Clean templates, good deliverability
- Free tier is generous

### Alternative: MailerLite
- Also has a free tier (up to 1,000 subscribers)
- Similar automation features
- All email templates in this folder work with either

**Sign up:** https://convertkit.com

---

## 2. Stripe + Zapier Integration Overview

Stripe doesn't natively trigger emails based on subscription events, so we use Zapier as the bridge.

**Flow:**
```
Stripe event → Zapier → Kit automation
```

**What you'll need:**
- Stripe account (already set up: SEVANS IT Services)
- Zapier account (free tier supports 100 tasks/month - should be enough to start)
- Kit account

---

## 3. Setting Up Each Automation in Kit

### A. Onboarding Sequence (4 emails)

**Goal:** Welcome new subscribers and guide them through the course.

**Setup in Kit:**
1. Go to **Automations** → **New Automation** → **Visual Automation**
2. Name it: "Konteks Kourse Onboarding"
3. Set **Entry Trigger:** "Tag is added: new_subscriber"
4. Build the flow:

```
Tag added: new_subscriber
    ↓
Send: welcome.html (immediately)
    ↓
Wait: 2 days
    ↓
Send: quick-win.html
    ↓
Wait: 3 days
    ↓
Send: checkin.html
    ↓
Wait: 2 days
    ↓
Send: community.html
    ↓
END
```

**Email import steps:**
- In Kit, click **"Send Email"** action
- Choose **"Create new email"**
- Click **"</> Code"** in the editor
- Paste the HTML from each email file
- Subject lines are in the brief above each email template
- From name: "Dan from Konteks"
- From email: (use Dan's email)

---

### B. Dunning Sequence (3 emails - failed payment)

**Goal:** Recover failed payments before cancelling access.

**Setup in Kit:**
1. **Automations** → **New Automation** → "Payment Failed Recovery"
2. **Entry Trigger:** "Tag is added: payment_failed"
3. Build the flow:

```
Tag added: payment_failed
    ↓
Send: payment-failed.html (immediately)
    ↓
Wait: 3 days
    ↓
Send: payment-reminder.html
    ↓
Wait: 4 days
    ↓
Send: payment-final.html
    ↓
END
```

**Important:** When payment is updated successfully, remove the `payment_failed` tag in Zapier (see trigger mapping below).

---

### C. Cancellation + Win-Back Sequence (3 emails)

**Goal:** Acknowledge cancellation gracefully, then attempt win-back.

**Setup in Kit:**
1. **Automations** → **New Automation** → "Cancelled Subscriber Win-Back"
2. **Entry Trigger:** "Tag is added: cancelled"
3. Build the flow:

```
Tag added: cancelled
    ↓
Send: cancel-acknowledge.html (immediately)
    ↓
Wait: 7 days
    ↓
Send: winback-offer.html
    ↓
Wait: 23 days
    ↓
Send: winback-social.html
    ↓
END
```

---

### D. Annual Renewal Reminder (1 email)

**Goal:** Remind annual subscribers 30 days before renewal.

**Setup in Kit:**
1. **Automations** → **New Automation** → "Annual Renewal Reminder"
2. **Entry Trigger:** "Tag is added: annual_renewal_30d"
3. Build the flow:

```
Tag added: annual_renewal_30d
    ↓
Send: annual-renewal.html (immediately)
    ↓
END
```

---

## 4. Zapier Automation Setup

Zapier connects Stripe events to Kit tags.

### Required Zaps

#### Zap 1: New Subscription → Onboarding
- **Trigger:** Stripe - New Subscription
- **Filter:** Product = "Konteks Kourse Monthly" OR "Konteks Kourse Annual"
- **Action:** Kit - Add Tag "new_subscriber" to email

---

#### Zap 2: Payment Failed → Dunning
- **Trigger:** Stripe - Payment Failed
- **Filter:** Product = "Konteks Kourse Monthly" OR "Konteks Kourse Annual"
- **Action:** Kit - Add Tag "payment_failed" to email

---

#### Zap 3: Payment Recovered → Remove Dunning Tag
- **Trigger:** Stripe - Payment Succeeded (after failure)
- **Filter:** Customer had tag "payment_failed"
- **Action:** Kit - Remove Tag "payment_failed" from email

---

#### Zap 4: Subscription Cancelled → Win-Back
- **Trigger:** Stripe - Subscription Cancelled
- **Filter:** Product = "Konteks Kourse Monthly" OR "Konteks Kourse Annual"
- **Action 1:** Kit - Add Tag "cancelled" to email
- **Action 2:** Kit - Remove Tag "new_subscriber" (stop onboarding)

---

#### Zap 5: Re-Subscription → Clear Cancelled Tag
- **Trigger:** Stripe - New Subscription
- **Filter:** Customer email exists in Kit with tag "cancelled"
- **Action 1:** Kit - Remove Tag "cancelled"
- **Action 2:** Kit - Add Tag "new_subscriber"

---

#### Zap 6: Annual Renewal (30 days before)
- **Trigger:** Stripe - Scheduled Event (upcoming invoice)
- **Filter:** 
  - Product = "Konteks Kourse Annual"
  - Days until renewal = 30
- **Action:** Kit - Add Tag "annual_renewal_30d" to email

**Note:** This requires Zapier's "Scheduled" trigger. Alternative: use a monthly script to check renewal dates in Stripe and trigger manually.

---

## 5. Stripe Setup

### A. Create the Customer Portal Link

Stripe's **Customer Portal** lets subscribers manage their subscription (update payment, cancel, etc.).

**Setup:**
1. Stripe Dashboard → **Settings** → **Customer Portal**
2. Enable: ✅ Update payment method, ✅ Cancel subscription
3. Copy the portal URL: `https://billing.stripe.com/p/login/...`
4. **Replace all instances of `STRIPE_PORTAL_URL_HERE` in the email templates with this URL**

---

### B. Create Discount Offer ($19/mo)

For the win-back and cancellation save offers.

**Setup:**
1. Stripe Dashboard → **Products** → "Konteks Kourse Monthly"
2. Click **Coupons** → **Create Coupon**
3. Settings:
   - Type: Percent off
   - Discount: 34% (reduces $29 to ~$19)
   - Duration: Once (applies to 1 payment only)
   - Name: "Win-Back Offer"
4. Create a **Payment Link** with this coupon applied
5. Copy the link (e.g., `https://buy.stripe.com/test_...?coupon=WINBACK`)
6. **Replace all instances of `STRIPE_DISCOUNT_LINK_HERE` in cancel.html and email templates with this URL**

---

## 6. Customizing Email Placeholders

Each email has placeholders that need to be replaced:

### Global Replacements

| Placeholder | Replace With | Where to Find It |
|-------------|-------------|------------------|
| `STRIPE_PORTAL_URL_HERE` | Stripe Customer Portal URL | Stripe Settings → Customer Portal |
| `STRIPE_DISCOUNT_LINK_HERE` | Payment Link with coupon | Stripe → Payment Links |
| `[END_DATE_PLACEHOLDER]` | Dynamic (use Kit merge tag) | Kit: `{{ subscription_end_date }}` |
| `[RENEWAL_DATE_PLACEHOLDER]` | Dynamic (use Kit merge tag) | Kit: `{{ renewal_date }}` |

### For winback-social.html

Replace this placeholder monthly:
```
[PLACEHOLDER: 2-3 bullet points about community activity - Dan to update monthly]
```

**Example:**
```
• Sarah shared her final thesis project and got feedback from 12 students
• New case study added: How to survive a 48-hour crit deadline
• The community hit 340 students this month
```

---

## 7. Testing Checklist

Before going live, test each automation:

### Onboarding Test
1. Create a test Stripe subscription
2. Check if the "new_subscriber" tag is added in Kit
3. Verify welcome.html is sent immediately
4. Manually trigger Day 2 email to check timing

### Payment Failed Test
1. Use Stripe's test mode to trigger a failed payment
2. Check if "payment_failed" tag is added
3. Verify payment-failed.html is sent

### Cancellation Test
1. Cancel a test subscription in Stripe
2. Check if "cancelled" tag is added
3. Verify cancel-acknowledge.html is sent
4. Check that onboarding stops (tag removed)

### Annual Renewal Test
1. Create a test annual subscription
2. Manually add "annual_renewal_30d" tag
3. Verify annual-renewal.html is sent

---

## 8. Email Deliverability Tips

To avoid spam folders:

1. **Warm up your sending domain** - Start with 20-30 emails/day for the first week
2. **Set up SPF/DKIM** - Kit has a guide for this in Settings → Sending
3. **Use Dan's real email address** - Not a noreply@ address
4. **Keep emails short** - All templates are <150 words (good)
5. **Test before launch** - Send to yourself, Gmail, Outlook, Apple Mail

---

## 9. Monitoring & Optimization

**Track these metrics in Kit:**
- Open rates (aim for >25%)
- Click rates (aim for >5%)
- Unsubscribe rate (keep <1%)

**A/B test these elements:**
- Subject lines (test 2 versions on 10% of list, send winner to rest)
- CTA button text
- Email timing (Day 2 vs Day 3, etc.)

**Win-back conversion goal:** 15-25% of cancelled subscribers should re-subscribe from winback-offer.html.

---

## 10. File Summary

| File | Purpose | Trigger |
|------|---------|---------|
| **cancel.html** | Cancellation save page | Shown when user clicks "Cancel" in Stripe portal |
| **welcome.html** | First email | New subscription |
| **quick-win.html** | Day 2 | 2 days after subscription |
| **checkin.html** | Day 5 | 5 days after subscription |
| **community.html** | Day 7 | 7 days after subscription |
| **payment-failed.html** | Payment issue | Payment fails |
| **payment-reminder.html** | Day 3 after failure | 3 days after payment failure |
| **payment-final.html** | Day 7 after failure | 7 days after payment failure |
| **cancel-acknowledge.html** | Cancellation confirmation | Subscription cancelled |
| **winback-offer.html** | Win-back attempt | 7 days after cancellation |
| **winback-social.html** | Social proof win-back | 30 days after cancellation |
| **annual-renewal.html** | Renewal reminder | 30 days before annual renewal |

---

## 11. Cancel.html Integration

The cancellation save page (`cancel.html`) needs to be hosted and linked from Stripe.

**Setup:**
1. Upload `cancel.html` to the same server as the Konteks sales page (konteks.co)
2. URL should be: `https://konteks.co/cancel` or `https://konteks.co/cancel.html`
3. In Stripe Dashboard → **Settings** → **Customer Portal** → **Cancellation**:
   - Enable "Before cancellation, show a custom page"
   - Enter: `https://konteks.co/cancel.html`
4. Now when users try to cancel, they see the save offer first

**Analytics:**
- The feedback selection is stored in the URL parameter `?reason=...`
- Track this in your analytics tool (Google Analytics, Plausible, etc.)
- Review monthly to see why people are cancelling

---

## 12. Next Steps

1. **Sign up for Kit** - convertkit.com
2. **Import all 11 email templates** - Copy HTML into Kit's email editor
3. **Build the 4 automations** - Visual automation builder
4. **Connect Zapier** - Set up the 6 Zaps
5. **Test everything** - Use Stripe test mode
6. **Upload cancel.html** - Host it on konteks.co
7. **Go live** - Switch Stripe to live mode

**Estimated setup time:** 2-3 hours

---

## Support

If you get stuck:
- **Kit docs:** https://help.convertkit.com
- **Zapier Stripe integration:** https://zapier.com/apps/stripe/integrations
- **Stripe Customer Portal:** https://stripe.com/docs/customer-management

---

**Version 1.0 - March 2026**
