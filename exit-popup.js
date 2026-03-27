/**
 * Exit Intent Popup for Konteks Kourse
 * 
 * Usage: Add to any page with <script src="/exit-popup.js"></script>
 * 
 * Behavior:
 * - Desktop: Triggers when mouse moves to top of viewport (exit intent)
 * - Mobile: Triggers after 45 seconds OR on scroll up (back gesture)
 * - Shows once per session (uses sessionStorage)
 * - Doesn't show if user came from /guide-thanks.html (already captured)
 */

(function() {
    'use strict';
    
    // Check if already shown this session
    if (sessionStorage.getItem('konteks_exit_popup_shown') === 'true') {
        return;
    }
    
    // Check if lead already captured
    if (sessionStorage.getItem('konteks_lead_captured') === 'true') {
        return;
    }
    
    // Check if came from thank you page
    if (document.referrer.includes('guide-thanks.html')) {
        return;
    }
    
    let popupShown = false;
    let lastScrollY = window.scrollY;
    let mobileTimerStarted = false;
    
    // Create popup HTML
    const popupHTML = `
        <div id="konteksExitPopup" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 9999; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(4px);">
            <div style="background: #fff; border-radius: 16px; max-width: 480px; width: 100%; padding: 40px 32px; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.3); animation: slideUp 0.3s ease-out;">
                <button id="closePopup" style="position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 28px; color: #999; cursor: pointer; padding: 8px; line-height: 1; transition: color 0.2s;" aria-label="Close">&times;</button>
                
                <h2 style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 28px; line-height: 1.2; color: #1A1A1A; margin-bottom: 16px; letter-spacing: -0.5px;">Wait - before you go</h2>

                <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #666; margin-bottom: 8px; line-height: 1.5;">Not sure yet? <strong style="color: #1A1A1A;">Try the full system free for 7 days.</strong></p>
                <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #999; margin-bottom: 24px; line-height: 1.5;">All 5 chapters. The Konteks Kalendar. The student community. No charge until day 8.</p>

                <a href="https://buy.stripe.com/9B68wP37U6Mf9wzfa45Rm05" id="popupTrialBtn" style="display: block; width: 100%; padding: 16px 24px; font-size: 16px; font-weight: 700; font-family: 'Inter', sans-serif; color: #fff; background: #E86A1C; border: none; border-radius: 10px; cursor: pointer; transition: background 0.2s; text-align: center; text-decoration: none; margin-bottom: 16px;">Try free for 7 days</a>

                <button id="dismissPopup" style="background: none; border: none; color: #999; font-size: 14px; cursor: pointer; text-decoration: underline; font-family: 'Inter', sans-serif;">No thanks, I'm not ready</button>
            </div>
        </div>
        
        <style>
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            #konteksExitPopup input:focus {
                outline: none;
                border-color: #E86A1C;
            }
            
            #konteksExitPopup button:not(#closePopup):not(#dismissPopup):hover {
                background: #C85A16;
            }
            
            #closePopup:hover {
                color: #1A1A1A;
            }
        </style>
    `;
    
    // Inject popup into page
    document.addEventListener('DOMContentLoaded', function() {
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        
        const popup = document.getElementById('konteksExitPopup');
        const closeBtn = document.getElementById('closePopup');
        const dismissBtn = document.getElementById('dismissPopup');

        // Show popup function
        function showPopup() {
            if (popupShown) return;

            popupShown = true;
            popup.style.display = 'flex';
            sessionStorage.setItem('konteks_exit_popup_shown', 'true');
        }
        
        // Hide popup function
        function hidePopup() {
            popup.style.display = 'none';
        }
        
        // Desktop: Exit intent detection
        function handleMouseLeave(e) {
            if (e.clientY < 50 && !popupShown) {
                showPopup();
            }
        }
        
        // Mobile: Scroll up detection
        function handleScroll() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < lastScrollY && currentScrollY > 100 && !popupShown) {
                showPopup();
            }
            
            lastScrollY = currentScrollY;
        }
        
        // Mobile: Timer (45 seconds)
        function startMobileTimer() {
            if (mobileTimerStarted) return;
            
            mobileTimerStarted = true;
            setTimeout(() => {
                if (!popupShown) {
                    showPopup();
                }
            }, 45000);
        }
        
        // Detect device type
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        
        if (isMobile) {
            startMobileTimer();
            window.addEventListener('scroll', handleScroll);
        } else {
            document.addEventListener('mouseleave', handleMouseLeave);
        }
        
        // Close button
        closeBtn.addEventListener('click', hidePopup);
        
        // Dismiss button
        dismissBtn.addEventListener('click', hidePopup);
        
        // Click outside to close
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                hidePopup();
            }
        });
        
        // Track trial CTA click
        const trialBtn = document.getElementById('popupTrialBtn');
        if (trialBtn) {
            trialBtn.addEventListener('click', function() {
                if (typeof fbq !== 'undefined') {
                    fbq('track', 'ViewContent');
                }
            });
        }
    });
})();
