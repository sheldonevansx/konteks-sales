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
                
                <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #666; margin-bottom: 24px; line-height: 1.5;">Get the free guide: <strong style="color: #1A1A1A;">5 Things Your Lecturers Grade On (But Never Tell You)</strong></p>
                
                <form id="exitPopupForm" style="margin-bottom: 16px;">
                    <input type="email" id="popupEmail" placeholder="Your email address" required style="width: 100%; padding: 14px 16px; font-size: 16px; font-family: 'Inter', sans-serif; border: 2px solid #E5E5E5; border-radius: 10px; margin-bottom: 12px; transition: border-color 0.2s;">
                    
                    <button type="submit" id="popupSubmitBtn" style="width: 100%; padding: 14px 24px; font-size: 16px; font-weight: 600; font-family: 'Inter', sans-serif; color: #fff; background: #E86A1C; border: none; border-radius: 10px; cursor: pointer; transition: background 0.2s;">Send Me The Guide</button>
                </form>
                
                <button id="dismissPopup" style="background: none; border: none; color: #999; font-size: 14px; cursor: pointer; text-decoration: underline; font-family: 'Inter', sans-serif;">No thanks, I'll figure it out myself</button>
                
                <div id="popupSuccess" style="display: none; text-align: center; padding: 20px 0;">
                    <div style="font-size: 48px; margin-bottom: 12px;">✓</div>
                    <p style="font-size: 18px; font-weight: 600; color: #1A1A1A; margin-bottom: 8px;">Check your email!</p>
                    <p style="font-size: 14px; color: #666;">Your guide is on its way.</p>
                </div>
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
        const form = document.getElementById('exitPopupForm');
        const emailInput = document.getElementById('popupEmail');
        const submitBtn = document.getElementById('popupSubmitBtn');
        const successDiv = document.getElementById('popupSuccess');
        
        // Show popup function
        function showPopup() {
            if (popupShown) return;
            
            popupShown = true;
            popup.style.display = 'flex';
            sessionStorage.setItem('konteks_exit_popup_shown', 'true');
            emailInput.focus();
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
        
        // Form submission
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (!email || !email.includes('@')) {
                emailInput.style.borderColor = '#d32f2f';
                return;
            }
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Track lead conversion
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead');
            }
            
            // Store in sessionStorage
            sessionStorage.setItem('konteks_lead_email', email);
            sessionStorage.setItem('konteks_lead_captured', 'true');
            
            // Fallback API call
            try {
                await fetch('https://kourse.konteks.co/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, source: 'exit-popup' })
                });
            } catch (err) {
                console.log('Fallback API not yet configured');
            }
            
            // Show success state
            form.style.display = 'none';
            dismissBtn.style.display = 'none';
            successDiv.style.display = 'block';
            
            // Auto-close after 3 seconds
            setTimeout(() => {
                hidePopup();
            }, 3000);
        });
    });
})();
