// Cloudflare Pages Function: POST /api/quiz-submit
// Receives quiz results, adds contact to ActiveCampaign with quiz-result tag

export async function onRequestPost(context) {
    const corsHeaders = {
        'Access-Control-Allow-Origin': 'https://kourse.konteks.co',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    try {
        const { email, firstName, quizResult, answers } = await context.request.json();

        if (!email || !firstName || !quizResult) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        const AC_URL = context.env.AC_URL;  // https://konteks.activehosted.com
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

        // 3. Map quiz result to tag name
        const tagMap = {
            'The Last-Minuter': 'quiz-last-minuter',
            'The Concept Struggler': 'quiz-concept-struggler',
            'The Imposter': 'quiz-imposter',
            'The High Achiever': 'quiz-high-achiever',
            'last-minuter': 'quiz-last-minuter',
            'concept-struggler': 'quiz-concept-struggler',
            'imposter': 'quiz-imposter',
            'high-achiever': 'quiz-high-achiever',
        };
        const tagName = tagMap[quizResult] || 'quiz-imposter';

        // 4. Find tag ID by searching tags
        const tagSearchRes = await fetch(apiBase + '/tags?search=' + encodeURIComponent(tagName), {
            headers
        });
        const tagSearchData = await tagSearchRes.json();
        let tagId = null;

        if (tagSearchData.tags && tagSearchData.tags.length > 0) {
            tagId = tagSearchData.tags[0].id;
        }

        // 5. Add tag to contact
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

        // 6. Update custom field "quiz_result" if it exists
        // First find the field ID
        const fieldsRes = await fetch(apiBase + '/fields?limit=100', { headers });
        const fieldsData = await fieldsRes.json();
        const quizField = fieldsData.fields
            ? fieldsData.fields.find(f => f.perstag === 'QUIZ_RESULT' || f.title === 'quiz_result')
            : null;

        if (quizField) {
            await fetch(apiBase + '/fieldValues', {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    fieldValue: {
                        contact: contactId,
                        field: quizField.id,
                        value: quizResult
                    }
                })
            });
        }

        return new Response(JSON.stringify({ success: true, contactId }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (err) {
        console.error('Quiz submit error:', err);
        return new Response(JSON.stringify({ error: 'Internal error' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}

// Handle CORS preflight
export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': 'https://kourse.konteks.co',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}
