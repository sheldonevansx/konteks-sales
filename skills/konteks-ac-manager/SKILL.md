# Konteks ActiveCampaign Manager

**Description:** Manage ActiveCampaign contacts, tags, lists, and automations for the Konteks Kourse. Knows all IDs, tag mappings, automation structures, and API patterns.

**When to use this skill:**
- Managing AC contacts (create, update, tag, list membership)
- Checking automation status or contact progress
- Debugging email delivery issues
- Setting up new automations (via browser UI only - API returns 405)
- Reviewing campaign performance

---

## Account Details

- **Account:** konteks.activehosted.com
- **API base:** https://konteks.activehosted.com/api/3/
- **Login email:** info@konteks.co (has 2FA)
- **From address:** Dan - info@konteks.co
- **Physical address:** SEVANS IT Services, IFZA Business Park, Dubai Silicon Oasis

## API Access

Credentials stored in macOS Keychain (NEVER hardcode):
```bash
# Retrieve URL
security find-generic-password -a konteks -s activecampaign-url -w

# Retrieve API key
security find-generic-password -a konteks -s activecampaign-key -w
```

If MCP AC connector is available, use that instead of direct API calls.

## Lists

| ID | Name | Purpose |
|----|------|---------|
| 3 | Master Contact List | All contacts |
| 4 | Konteks Kourse Subscribers | Primary list for paying members |

## Tags

| ID | Tag Name | Purpose | Trigger |
|----|----------|---------|---------|
| 1 | onboarding | New member onboarding sequence | Zapier adds on Stripe subscription |
| 2 | payment-failed | Dunning sequence | Zapier/webhook on failed payment |
| 3 | cancelled | Win-back sequence | Zapier on subscription cancellation |
| 4 | win-back | Win-back offer sent | Automation adds after win-back email |
| 5 | stripe-integration | General Stripe integration tag | Zapier |
| 6 | stripe-integration-Subscription | Subscription-specific tag | Zapier |
| 7 | historical | Pre-migration contacts | Manual |

Future tags (create when needed):
- `lead-magnet` - guide download leads
- `quiz-lead` - quiz completion leads
- `annual-renewal` - for retention sequence
- `annual` - annual plan subscribers
- `monthly` - monthly plan subscribers

## Automations

### Onboarding (ID:1) - ACTIVE, PRODUCTION
- **Trigger:** Tag "onboarding" added
- **Flow:** Email 1 "you're in" -> Wait 2d -> Email 2 "try this before your next crit" -> Wait 3d -> Email 3 "the chapter students say saves them 10 hours a week" -> Wait 3d -> Email 4 "quick question"
- **Campaign IDs:** 1, 5, 7, 9
- **Message IDs:** 16, 18, 19, 20
- **Status:** Confirmed working end-to-end via Zapier test

### Onboarding (ID:7) - DEAD WEIGHT
- Duplicate/test version created during debugging
- Has test contact (bluink.design@gmail.com, Contact ID:4) attached
- Can be deleted. ID:1 is production.

### Dunning - NOT BUILT
- **Trigger:** Tag "payment-failed"
- **Flow:** Email 1 "your payment didn't go through" -> Wait 3d -> Email 2 "still can't process your payment" -> Wait 4d -> Email 3 "your access gets removed tomorrow"
- **Copy:** Written in emails/plain-text-sequences.md

### Win-back - NOT BUILT
- **Trigger:** Tag "cancelled"
- **Flow:** Wait 1d -> Email 1 "no hard feelings" -> Wait 6d -> Email 2 "$19/mo if you come back" -> Wait 7d -> Email 3 "what you missed this week"
- **Copy:** Written in emails/plain-text-sequences.md
- **Needs:** Stripe $19/mo discount link (STRIPE_DISCOUNT_LINK_HERE placeholder)

### Retention - NOT BUILT
- **Trigger:** Tag "annual-renewal"
- **Flow:** Email 1 "your annual plan renews in 30 days"
- **Copy:** Written in emails/plain-text-sequences.md

### Lead Nurture - NOT BUILT
- **Trigger:** Tag "lead-magnet" or "quiz-lead"
- **Flow:** 6 emails over ~3 weeks
- **Copy:** Written in emails/lead-nurture-sequence.md

## Zapier Integration

Three Zaps are live and verified:

1. **Monthly Zap:** Stripe New Subscription -> Filter by prod_UBPrqteCKB9sFO -> Skool Invite Member -> AC Create/Update Contact (List 4) -> AC Add Tag "onboarding"

2. **Annual Zap:** Same flow as monthly, different Stripe trigger

3. **Cancellation Zap:** Stripe Canceled Subscription -> Email notification to Shel

## CRITICAL: What Does NOT Work

- **AC automation creation via API** returns 405 Method Not Allowed. You CANNOT create automations through the API or through programmatic means. Must use the ActiveCampaign browser UI.

- **AC browser UI automation** nested modals are extremely difficult to automate with computer use tools. Manual setup via browser is the recommended approach.

- **For new automations:** Write the email copy, document the flow structure, then instruct the user to build it manually in the AC browser UI. Or use the MailerLite MCP connector if available for automation creation.

## Common Operations

### Add a contact to a list and tag them
```
1. Create/update contact (use AC MCP or API)
2. Add to List 4 (Konteks Kourse Subscribers)
3. Add appropriate tag (onboarding, lead-magnet, etc.)
```

### Check if automation is working
```
1. List automations (check active status)
2. Get automation ID:1 details
3. Check contact automation history for recent contacts
```

### Debug missing onboarding emails
```
1. Check if contact has "onboarding" tag
2. Check if contact is in automation ID:1
3. Check campaign send history for that contact
4. Verify Zapier logs (Zap history) for the Stripe event
```

### Clean up test data
- Contact ID:4 (bluink.design@gmail.com) is Sam's test contact
- Automation ID:7 is the test duplicate - can be deleted
- Any contacts tagged "stripe-integration" from testing can be reviewed

## Email Deliverability Notes

- From domain: konteks.co (GSuite)
- Ensure SPF, DKIM, and DMARC are properly configured on konteks.co DNS
- Plain text emails only (no HTML templates) - better deliverability and conversion
- Keep emails under 150 words
- Avoid spam trigger words in subject lines
