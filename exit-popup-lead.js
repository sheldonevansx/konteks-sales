/**
 * Exit Intent Popup for Konteks Lead Capture Page
 * Stripe dark+green aesthetic
 * 
 * Usage: Add to lead capture pages with <script src="/exit-popup-lead.js"></script>
 * 
 * Behavior:
 * - Desktop: Triggers when mouse moves to top of viewport (exit intent)
 * - Mobile: Triggers after 45 seconds OR on scroll up (back gesture)
 * - Shows once per session (uses sessionStorage)
 * - Doesn't show if user came from /guide-thanks.html (already captured)
 */

(function() {
    'use strict';
    
    if (sessionStorage.getItem('konteks_exit_popup_shown') === 'true') return;
    if (sessionStorage.getItem('konteks_lead_captured') === 'true') return;
    if (document.referrer.includes('guide-thanks.html')) return;
    
    let popupShown = false;
    let lastScrollY = window.scrollY;
    let mobileTimerStarted = false;
    
    const popupHTML = `
        <div id="konteksExitPopup" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.92); z-index: 9999; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(8px);">
            <div style="background: linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%); border: 1px solid rgba(204, 255, 0, 0.3); border-radius: 3px; max-width: 480px; width: 100%; padding: 40px 32px; position: relative; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); animation: slideUp 0.3s ease-out;">
                <button id="closePopup" style="position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 28px; color: #6B7280; cursor: pointer; padding: 8px; line-height: 1; transition: color 0.2s;" aria-label="Close">&times;</button>
                
                <h2 style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 28px; line-height: 1.2; color: #FFFFFF; margin-bottom: 16px; letter-spacing: -0.5px;">Wait - grab this before you go</h2>

                <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #C5CAD3; margin-bottom: 8px; line-height: 1.5;"><strong style="color: #FFFFFF;">5 studio shortcuts</strong> your lecturers never taught you.</p>
                <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #8A94A6; margin-bottom: 24px; line-height: 1.5;">Free PDF. The frameworks that won best thesis across engineering, science and architecture. Takes 10 minutes to read, saves you hundreds of hours.</p>

                <form id="popupGuideForm" onsubmit="return submitPopupForm(event)">
                    <input type="text" id="popupFirstName" placeholder="First name" required
                        style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(204, 255, 0, 0.2); border-radius: 3px; font-family: 'Inter', sans-serif; font-size: 15px; margin-bottom: 10px; outline: none; box-sizing: border-box; background: rgba(15, 15, 15, 0.4); color: #FFFFFF; transition: border-color 0.2s;">
                    <input type="email" id="popupEmail" placeholder="Your best email" required
                        style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(204, 255, 0, 0.2); border-radius: 3px; font-family: 'Inter', sans-serif; font-size: 15px; margin-bottom: 14px; outline: none; box-sizing: border-box; background: rgba(15, 15, 15, 0.4); color: #FFFFFF; transition: border-color 0.2s;">
                    <button type="submit" style="display: block; width: 100%; padding: 16px 24px; font-size: 16px; font-weight: 700; font-family: 'Inter', sans-serif; color: #000000; background: #CCFF00; border: none; border-radius: 3px; cursor: pointer; transition: all 0.2s; text-align: center;">Send me the free guide</button>
                </form>
                <div id="popupSuccess" style="display: none; text-align: center; padding: 12px 0;">
                    <div style="font-size: 24px; margin-bottom: 8px; color: #CCFF00;">&#10003;</div>
                    <div style="font-size: 16px; font-weight: 600; color: #FFFFFF;">Check your email!</div>
                </div>

                <button id="dismissPopup" style="background: none; border: none; color: #6B7280; font-size: 14px; cursor: pointer; text-decoration: underline; font-family: 'Inter', sans-serif; margin-top: 16px; transition: color 0.2s;">No thanks</button>
            </div>
        </div>
        
        <style>
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            #konteksExitPopup input:focus { 
                outline: none; 
                border-color: #CCFF00 !important; 
            }
            #konteksExitPopup input::placeholder {
                color: #6B7280;
            }
            #konteksExitPopup button[type="submit"]:hover { 
                background: #D9FF33; 
                transform: translateY(-1px);
            }
            #closePopup:hover { 
                color: #CCFF00; 
            }
            #dismissPopup:hover {
                color: #8A94A6;
            }
        </style>
    `;
    
    document.addEventListener('DOMContentLoaded', function() {
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        
        const popup = document.getElementById('konteksExitPopup');
        const closeBtn = document.getElementById('closePopup');
        const dismissBtn = document.getElementById('dismissPopup');

        function showPopup() {
            if (popupShown) return;
            popupShown = true;
            popup.style.display = 'flex';
            sessionStorage.setItem('konteks_exit_popup_shown', 'true');
        }
        
        function hidePopup() { popup.style.display = 'none'; }
        
        function handleMouseLeave(e) {
            if (e.clientY < 50 && !popupShown) showPopup();
        }
        
        function handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY && currentScrollY > 100 && !popupShown) showPopup();
            lastScrollY = currentScrollY;
        }
        
        function startMobileTimer() {
            if (mobileTimerStarted) return;
            mobileTimerStarted = true;
            setTimeout(() => { if (!popupShown) showPopup(); }, 45000);
        }
        
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        
        // Desktop only - no popup on mobile (too distracting)
        if (!isMobile) { document.addEventListener('mouseleave', handleMouseLeave); }
        
        closeBtn.addEventListener('click', hidePopup);
        dismissBtn.addEventListener('click', hidePopup);
        popup.addEventListener('click', function(e) { if (e.target === popup) hidePopup(); });
    });
    
    // Expose submit function globally
    window.submitPopupForm = async function(e) {
        e.preventDefault();
        const form = document.getElementById('popupGuideForm');
        const btn = form.querySelector('button[type="submit"]');
        const firstName = document.getElementById('popupFirstName').value.trim();
        const email = document.getElementById('popupEmail').value.trim();
        
        if (!firstName || !email) return false;
        
        btn.textContent = 'Sending...';
        btn.disabled = true;
        
        try {
            const res = await fetch('/api/guide-submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, firstName, source: 'exit-popup' })
            });
            
            if (res.ok) {
                if (typeof fbq !== 'undefined') {
                    fbq('track', 'Lead', { content_name: '5 Studio Shortcuts Guide', content_category: 'Exit Popup' });
                }
                form.style.display = 'none';
                document.getElementById('popupSuccess').style.display = 'block';
                sessionStorage.setItem('konteks_lead_captured', 'true');
            } else {
                throw new Error('Failed');
            }
        } catch (err) {
            window.location.href = '/guide-thanks.html?name=' + encodeURIComponent(firstName) + '&email=' + encodeURIComponent(email);
        }
        
        return false;
    };
})();
