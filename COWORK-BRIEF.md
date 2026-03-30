# ActiveCampaign Setup - What You Need To Do

**Date:** 2026-03-30
**Status:** Lead capture page is LIVE at kourse.konteks.co

## What's Done
✅ Lead capture page live at main URL (kourse.konteks.co)
✅ Both campaigns paused
✅ UAE removed from targeting
✅ 6 new AI image ads created with lead magnet copy (PAUSED, ready to activate)
✅ Old AI image ads paused
✅ Exit popup updated for email capture
✅ Dan's profile photo increased to 88px

## What YOU Need to Do (Shel)

### 1. Set Cloudflare Pages Environment Variables
The email capture forms won't work until you add these in Cloudflare Dashboard:

1. Go to Cloudflare Dashboard → Pages → konteks-sales
2. Settings → Environment Variables
3. Add these two variables for **Production**:
   - `AC_URL` = `https://konteks.activehosted.com`
   - `AC_KEY` = (get from Keychain: `security find-generic-password -a konteks -s activecampaign-key -w`)

Without these, the forms will redirect to guide-thanks.html but won't actually submit to ActiveCampaign.

### 2. Activate ActiveCampaign Automations (Browser Only)
Two automations exist but are inactive. The API can't activate them - you need to do it in the browser:

1. Log into ActiveCampaign: `https://konteks.activehosted.com`
2. Go to Automations
3. Find these two automations:
   - **ID 11:** "Lead Magnet Guide Sequence" (status: draft)
   - **ID 12:** "Last-Minuter Quiz Result" (status: inactive)
4. Click each one and hit "Activate"

These will trigger the email nurture when someone submits the lead capture form.

### 3. Design the PDF Guide in Canva
Content is written at `research/LEAD-MAGNET-GUIDE-CONTENT.md` - needs design:

1. Open Canva
2. Create 8-page PDF
3. Use the text from LEAD-MAGNET-GUIDE-CONTENT.md
4. Export as PDF
5. Upload to Cloudflare at `/downloads/5-studio-shortcuts.pdf`

### 4. Design the Site Analysis Checklist in Canva
Content is written at `research/SITE-ANALYSIS-CHECKLIST-CONTENT.md`:

1. Single A4 page, checkbox format
2. Export as PDF
3. Upload to Cloudflare at `/downloads/site-analysis-checklist.pdf`

### 5. Reactivate Campaigns When Ready
Both campaigns are PAUSED. When you're ready to go live:

1. Test the form submission at kourse.konteks.co (submit your own email)
2. Verify the AC automation email arrives
3. If all good, reactivate campaigns via Meta Ads Manager

## New Ad Copy Overview
All 6 AI image ads now have lead magnet copy:
- 5 body text variants (PAS format, different emotional angles)
- 3 titles focused on "free guide" / "5 shortcuts"
- New description: "Free guide for architecture students. 10-minute read."
- Destination: kourse.konteks.co (no URL change from ads)
- Matches existing formatting: short paragraphs, line breaks, ✅ bullets, 👉 emoji, conversational tone

## What Happens Next
Once you complete steps 1-4 above:
- Reactivate the 6 new AI image ads in Campaign 1
- They'll send traffic to kourse.konteks.co
- Users submit email → AC automation triggers → PDF delivered → 6-email nurture → Skool upsell on email 3-4

The video ads (Dan talking-head) still have the old copy in the video itself, so those stay paused until Dan re-records or you decide to leave them out.
