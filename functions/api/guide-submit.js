// Cloudflare Pages Function: POST /api/guide-submit
// Receives lead magnet form, adds contact to ActiveCampaign with lead-magnet tag

export async function onRequestPost(context) {
    const corsHeaders = {
        'Access-Control-Allow-Origin': 'https://kourse.konteks.co',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    try {
        const { email, firstName, source } = await context.request.json();

        if (!email || !firstName) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        const AC_URL = context.env.AC_URL;
        const AC_KEY = context.env.AC_KEY;

        if (!AC_URL || !AC_KEY) {
            console.error('ActiveCampaign credentials not configured');
            return new Response(JSON.stringify({ error: 'Server config error' }), {
                status: 500,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        const apiBase = AC_URL + '/api/3';
        const headers = { 'Api-Token': AC_KEY, 'Content-Type': 'application/json' };

        // 1. Create or update contact
        const contactRes = await fetch(apiBase + '/contact/sync', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                contact: {
                    email: email,
                    firstName: firstName,
                }
            })
        });
        const contactData = await contactRes.json();
        const contactId = contactData.contact.id;

        // 2. Add to list "Konteks Kourse Subscribers" (ID: 4)
        await fetch(apiBase + '/contactLists', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                contactList: {
                    list: 4,
                    contact: contactId,
                    status: 1
                }
            })
        });

        // 3. Find lead-magnet tag
        const tagSearchRes = await fetch(apiBase + '/tags?search=lead-magnet', { headers });
        const tagSearchData = await tagSearchRes.json();
        let tagId = null;

        if (tagSearchData.tags && tagSearchData.tags.length > 0) {
            tagId = tagSearchData.tags[0].id;
        }

        // 4. Add tag to contact
        if (tagId) {
            await fetch(apiBase + '/contactTags', {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    contactTag: {
                        contact: contactId,
                        tag: tagId
                    }
                })
            });
        }

        return new Response(JSON.stringify({ success: true, contactId }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (err) {
        console.error('Guide submit error:', err);
        return new Response(JSON.stringify({ error: 'Internal error' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': 'https://kourse.konteks.co',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}
