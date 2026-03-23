# Konteks Kourse - Integration Guide

Complete setup instructions for launching the Konteks Kourse payment funnel.

---

## 1. Update CTA Links in option-a-v4.html

Open `option-a-v4.html` and update the following links:

### Hero CTA (around line 180)
```html
<a href="checkout.html?plan=monthly" class="cta-button">
```

### "Start Monthly" Pricing Button (around line 350)
```html
<a href="checkout.html?plan=monthly" class="cta-button">
```

### "Start Annual" Pricing Button (around line 370)
```html
<a href="checkout.html?plan=annual" class="cta-button cta-secondary">
```

### Final CTA (around line 500)
```html
<a href="checkout.html?plan=monthly" class="cta-button">
```

### Mobile Sticky CTA (around line 550)
```html
<a href="checkout.html?plan=monthly" class="cta-button">
```

**Note:** Line numbers are approximate - search for existing `href="#"` or `href="#start"` links and replace them.

---

## 2. Stripe Setup (Click-by-Click)

### Step 1: Create Stripe Account
1. Go to <https://dashboard.stripe.com/register>
2. Sign up with your Dubai business email
3. Complete business verification (you'll need business registration documents)
4. Verify your bank account for payouts

### Step 2: Create Products

**Monthly Product:**
1. In Stripe Dashboard, go to **Products** → **Add Product**
2. Name: `Konteks Kourse Monthly`
3. Description: `Monthly subscription to the Konteks Kourse - architecture education`
4. Pricing:
   - Model: **Recurring**
   - Price: **$29 USD**
   - Billing period: **Monthly**
5. Click **Save product**

**Annual Product:**
1. Go to **Products** → **Add Product**
2. Name: `Konteks Kourse Annual`
3. Description: `Annual subscription to the Konteks Kourse - architecture education`
4. Pricing:
   - Model: **Recurring**
   - Price: **$249 USD**
   - Billing period: **Yearly**
5. Click **Save product**

### Step 3: Create Payment Links

**Monthly Payment Link:**
1. Open the `Konteks Kourse Monthly` product
2. Click **Create payment link**
3. Settings:
   - **Require customer email:** ✅ Yes (required for Zapier)
   - **After payment:** Custom success page
   - **Success URL:** `https://[YOUR-DOMAIN]/thank-you.html`
     - Replace `[YOUR-DOMAIN]` with your actual domain (see Section 6)
   - **Allow promotion codes:** Optional (recommended for launch discounts)
4. Click **Create link**
5. **Copy the Payment Link URL** - you'll need this next

**Annual Payment Link:**
1. Open the `Konteks Kourse Annual` product
2. Click **Create payment link**
3. Same settings as above (success URL: `https://[YOUR-DOMAIN]/thank-you.html`)
4. Click **Create link**
5. **Copy the Payment Link URL**

### Step 4: Add Payment Links to checkout.html

1. Open `/Users/jinxjinx/clawd/projects/konteks-sales/checkout.html`
2. Find this section (around line 130):
```javascript
const stripeLinks = {
    monthly: 'STRIPE_MONTHLY_LINK_HERE',
    annual: 'STRIPE_ANNUAL_LINK_HERE'
};
```
3. Replace `STRIPE_MONTHLY_LINK_HERE` with your Monthly Payment Link
4. Replace `STRIPE_ANNUAL_LINK_HERE` with your Annual Payment Link
5. Save the file

**Example:**
```javascript
const stripeLinks = {
    monthly: 'https://buy.stripe.com/abc123xyz',
    annual: 'https://buy.stripe.com/def456uvw'
};
```

---

## 3. Zapier Setup (Automatic Skool Invites)

### Step 1: Create Zapier Account
1. Go to <https://zapier.com/sign-up>
2. Sign up (free plan works for low volume, upgrade if you get >100 students/month)

### Step 2: Connect Stripe
1. In Zapier, click **Create Zap**
2. Choose trigger app: **Stripe**
3. Choose trigger event: **New Subscription**
4. Click **Continue**
5. Click **Sign in to Stripe**
6. Authorize Zapier to access your Stripe account
7. Test trigger (you may need to create a test subscription first - see below)

### Step 3: Connect Skool
1. Click **+** to add an action step
2. Choose action app: **Skool**
3. Choose action event: **Invite Member**
4. Click **Continue**
5. Click **Sign in to Skool**
6. Authorize Zapier (you'll need to log in as the Skool admin for konteks-6655)

### Step 4: Map Fields
1. **Email:** Map to Stripe's `Customer Email`
2. **Group:** Select `konteks-6655` from dropdown
3. **Name (optional):** Map to Stripe's `Customer Name` if available
4. Click **Continue**

### Step 5: Test the Zap
**IMPORTANT: Test with a real $1 product first, NOT the live $29/$249 products**

1. In Stripe, create a test product: "Test Product" - $1/month
2. Create a Payment Link for the test product
3. Make a test purchase using your own card
4. In Zapier, click **Test step** - it should send a Skool invite to your email
5. Check your email - you should receive the Skool invitation
6. Once confirmed working, turn on the Zap

### Step 6: Turn On the Zap
1. Name your Zap: `Stripe → Skool Invite (Konteks Kourse)`
2. Click **Publish**
3. The Zap is now live - all new Stripe subscriptions will auto-invite to Skool

---

## 4. Meta Pixel Setup (Facebook/Instagram Ads Tracking)

### Step 1: Get Your Pixel ID
1. Go to <https://business.facebook.com/events_manager2>
2. Select your Business Account
3. Click **Data Sources** → **Pixels**
4. If you don't have a pixel yet, click **Create a Pixel**
5. Name it: `Konteks Kourse Pixel`
6. Copy your **Pixel ID** (16-digit number like `123456789012345`)

### Step 2: Add Pixel ID to All Files
Replace `962791462941600` in these three files:

**File 1: option-a-v4.html**
- Open the file
- Search for `962791462941600` (appears 2 times)
- Replace both with your actual Pixel ID
- Save

**File 2: checkout.html**
- Open the file
- Search for `962791462941600` (appears 2 times)
- Replace both with your actual Pixel ID
- Save

**File 3: thank-you.html**
- Open the file
- Search for `962791462941600` (appears 2 times)
- Replace both with your actual Pixel ID
- Save

### Step 3: Set Up Custom Conversions
1. In Events Manager, click **Custom Conversions**
2. Click **Create Custom Conversion**

**Conversion 1: ViewContent**
- Name: `Konteks Kourse - Page View`
- Event: `PageView`
- URL contains: `option-a-v4.html`
- Save

**Conversion 2: InitiateCheckout**
- Name: `Konteks Kourse - Initiated Checkout`
- Event: `InitiateCheckout`
- URL contains: `checkout.html`
- Save

**Conversion 3: Purchase**
- Name: `Konteks Kourse - Purchase`
- Event: `Purchase`
- URL contains: `thank-you.html`
- Save

### Step 4: Test Pixel Installation
1. Install [Meta Pixel Helper Chrome Extension](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Open your sales page in Chrome
3. Click the Pixel Helper icon
4. You should see:
   - ✅ Pixel found
   - ✅ PageView event fired
5. Click a CTA button and check checkout.html:
   - ✅ InitiateCheckout event fired
6. Complete a test purchase and check thank-you.html:
   - ✅ Purchase event fired

### Step 5: Optimize Ads for Purchase
When creating Facebook/Instagram ads:
1. Choose **Sales** campaign objective
2. In Ad Set, set **Conversion event** to: `Purchase`
3. Facebook will now optimize your ads to find people most likely to buy

---

## 5. Cloudflare Pages Deployment

### Step 1: Connect GitHub Repo
1. Log in to <https://dash.cloudflare.com>
2. Go to **Workers & Pages**
3. Click **Create application** → **Pages** → **Connect to Git**
4. Select **GitHub**
5. Authorize Cloudflare to access your GitHub
6. Select repository: `Gamblegrift/konteks-sales`
7. Click **Begin setup**

### Step 2: Configure Build Settings
- **Project name:** `konteks-kourse` (or any name you prefer)
- **Production branch:** `main`
- **Build command:** (leave empty - these are static files)
- **Build output directory:** `/`
- Click **Save and Deploy**

### Step 3: Wait for Deployment
- Cloudflare will deploy your site
- First deployment takes ~1-2 minutes
- You'll get a URL like: `https://konteks-kourse.pages.dev`

### Step 4: Test the Deployed Site
1. Visit your Cloudflare Pages URL
2. Check all three pages load correctly:
   - `https://konteks-kourse.pages.dev/option-a-v4.html`
   - `https://konteks-kourse.pages.dev/checkout.html?plan=monthly`
   - `https://konteks-kourse.pages.dev/thank-you.html`
3. Open browser console (F12) and check for errors
4. Test the checkout flow with Stripe test mode (if enabled)

---

## 6. Custom Domain Setup (Optional)

You can use either:
- **Option A:** Cloudflare Pages default URL (`konteks-kourse.pages.dev`)
- **Option B:** Custom domain (`kourse.studwalldan.com`)

### Option B: Custom Domain Setup

**Step 1: Add Domain to Cloudflare**
1. In Cloudflare dashboard, go to **Websites**
2. Click **Add a site**
3. Enter your domain: `studwalldan.com`
4. Follow the nameserver setup (if not already on Cloudflare)

**Step 2: Add Custom Domain to Pages Project**
1. Go to **Workers & Pages** → Select your project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter: `kourse.studwalldan.com` (or any subdomain)
5. Click **Continue**
6. Cloudflare will automatically create DNS records
7. Wait ~5 minutes for SSL certificate to provision

**Step 3: Update Stripe Success URLs**
1. Go back to Stripe Dashboard
2. Edit both Payment Links
3. Update success URL from `https://konteks-kourse.pages.dev/thank-you.html` to `https://kourse.studwalldan.com/thank-you.html`
4. Save

**Step 4: Test with Custom Domain**
- Visit `https://kourse.studwalldan.com/option-a-v4.html`
- Complete a test purchase
- Verify redirect to custom domain success page

---

## 7. Pre-Launch Checklist

Before going live, verify:

**Files:**
- [ ] All `962791462941600` replaced with real Pixel ID
- [ ] All `STRIPE_MONTHLY_LINK_HERE` / `STRIPE_ANNUAL_LINK_HERE` replaced
- [ ] CTAs in option-a-v4.html point to checkout.html
- [ ] All files committed to GitHub and deployed to Cloudflare

**Stripe:**
- [ ] Both products created (Monthly $29, Annual $249)
- [ ] Payment Links created with correct success URL
- [ ] Test mode payment successful
- [ ] Live mode activated (if ready to accept real payments)

**Zapier:**
- [ ] Stripe connected and test subscription triggered
- [ ] Skool connected to konteks-6655 group
- [ ] Test invite received successfully
- [ ] Zap is turned ON

**Meta Pixel:**
- [ ] Pixel Helper shows green checkmark on all pages
- [ ] PageView fires on option-a-v4.html
- [ ] InitiateCheckout fires on checkout.html
- [ ] Purchase fires on thank-you.html
- [ ] Custom Conversions created in Events Manager

**Deployment:**
- [ ] GitHub repo connected to Cloudflare Pages
- [ ] All pages load without errors
- [ ] Mobile responsive (test on phone)
- [ ] Smooth scrolling works
- [ ] Checkout redirect works (after 2.5s)
- [ ] Thank-you confetti animation works

---

## 8. Go-Live Process

### Final Steps Before Launch:

1. **Switch Stripe to Live Mode**
   - In Stripe Dashboard, toggle from Test Mode to Live Mode
   - Regenerate Payment Links in Live Mode
   - Update checkout.html with new live Payment Links

2. **Run End-to-End Test**
   - Make a real $29 purchase with your own card
   - Verify Stripe charge goes through
   - Verify Skool invite arrives within 5 minutes
   - Verify Meta Pixel Purchase event fires
   - Cancel the test subscription in Stripe

3. **Share the Link**
   - Main landing page: `https://kourse.studwalldan.com/option-a-v4.html`
   - Or use Cloudflare default: `https://konteks-kourse.pages.dev/option-a-v4.html`

4. **Monitor First 24 Hours**
   - Check Stripe Dashboard for new subscriptions
   - Check Skool for new members
   - Check Zapier history for successful invites
   - Check Meta Events Manager for pixel events

---

## 9. Troubleshooting

### "Stripe redirect not working"
- Check browser console for errors
- Verify Payment Links are correct in checkout.html
- Make sure you replaced `STRIPE_MONTHLY_LINK_HERE` with actual URL

### "Skool invite not arriving"
- Check Zapier Task History for errors
- Verify email in Stripe matches expected format
- Check spam folder
- Manually invite the member from Skool admin panel

### "Meta Pixel not firing"
- Install Meta Pixel Helper Chrome extension
- Check browser console for fbq errors
- Verify Pixel ID is correct (16 digits)
- Clear browser cache and test again

### "Thank-you page not loading after payment"
- Verify success URL in Stripe Payment Link settings
- Make sure URL is exactly: `https://[YOUR-DOMAIN]/thank-you.html`
- Check Cloudflare Pages deployment is live

### "Customers charged but not invited to Skool"
- This is critical - manually invite them immediately
- Email: studwalldan@gmail.com (respond within 1 hour)
- Fix Zapier connection
- Consider adding a backup manual process during first week

---

## 10. Post-Launch Optimization

### Week 1:
- Monitor conversion rate from page view → purchase
- Check average time on sales page (add Google Analytics if needed)
- Collect feedback from first 10 students
- A/B test monthly vs annual CTA prominence

### Week 2+:
- Set up abandoned checkout emails (Stripe → Zapier → Email)
- Create retargeting ad for people who viewed but didn't buy
- Add testimonials to sales page as students complete chapters
- Consider adding a limited-time launch discount (Stripe promotion codes)

---

## Support

**Technical Issues:**
- Cloudflare: <https://dash.cloudflare.com/> → Support
- Stripe: <https://support.stripe.com/>
- Zapier: <https://zapier.com/app/help>
- Meta Pixel: <https://business.facebook.com/business/help>

**Questions:**
- Ask Shel or Dan
- For payment/technical issues, email Stripe support directly

---

**Last Updated:** March 2026  
**Version:** 1.0  
**Files:** option-a-v4.html, checkout.html, thank-you.html
