<?php
/**
 * The footer for the IRL Events theme
 * 
 * @package IRL_Events
 */
?>

    </main>

    <!-- Footer -->
    <footer class="irl-footer">
        <div class="irl-footer-container">
            <div class="irl-footer-grid">
                <!-- Company Info -->
                <div class="irl-footer-section">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                        <?php
                        $custom_logo_id = get_theme_mod('custom_logo');
                        if ($custom_logo_id) {
                            $logo_url = wp_get_attachment_image_src($custom_logo_id, 'full')[0];
                        } else {
                            $logo_url = get_template_directory_uri() . '/assets/images/irl-logo.png';
                        }
                        ?>
                        <img src="<?php echo esc_url($logo_url); ?>" alt="IRL Interactive Events" style="height: 2rem; width: auto; object-fit: contain;" />
                        <span style="color: white; font-weight: bold;">IRL Interactive Events</span>
                    </div>
                    <p style="color: var(--color-cyan-300); font-size: 0.875rem; margin-bottom: 1rem;">
                        Creating unforgettable interactive experiences for over 100,000 hours and counting.
                    </p>
                    <p style="color: white; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;">
                        <?php echo esc_html(get_theme_mod('irl_social_handle', '@irleventsfun')); ?>
                    </p>
                    <p style="color: var(--color-cyan-300); font-size: 0.875rem;">
                        jason@irlevents.fun
                    </p>
                </div>

                <!-- Quick Links -->
                <div class="irl-footer-section">
                    <h4>Experiences</h4>
                    <ul class="irl-footer-links">
                        <li><a href="<?php echo home_url('/restaurant-start/'); ?>">Restaurant & Venue</a></li>
                        <li><a href="<?php echo home_url('/private-event-start/'); ?>">Private Events</a></li>
                        <li><a href="<?php echo home_url('/workplace-start/'); ?>">Corporate & Healthcare</a></li>
                        <li><a href="<?php echo home_url('/custom-quote/'); ?>">Custom Quote</a></li>
                    </ul>
                </div>

                <!-- Featured Services -->
                <div class="irl-footer-section">
                    <h4>Popular Packages</h4>
                    <ul class="irl-footer-links">
                        <li><a href="<?php echo home_url('/wedding-in-a-box/'); ?>">Wedding In-A-Box</a></li>
                        <li><a href="<?php echo home_url('/birthday-in-a-box/'); ?>">Birthday In-A-Box</a></li>
                        <li><a href="<?php echo home_url('/reunion-in-a-box/'); ?>">Reunion In-A-Box</a></li>
                        <li><span style="color: var(--color-cyan-300); font-size: 0.875rem;">Corporate Marketing</span></li>
                        <li><span style="color: var(--color-cyan-300); font-size: 0.875rem;">Senior Programs</span></li>
                    </ul>
                </div>

                <!-- Contact & Legal -->
                <div class="irl-footer-section">
                    <h4>Connect</h4>
                    <ul class="irl-footer-links">
                        <li><a href="<?php echo home_url('/contact/'); ?>">Contact Us</a></li>
                        <li><a href="<?php echo esc_url(get_theme_mod('irl_calendly_url', 'https://calendly.com/irl-events')); ?>" target="_blank" rel="noopener">Book a Call</a></li>
                        <li><a href="https://t.me/Irleventsbot" target="_blank" rel="noopener">Message on Telegram</a></li>
                        <li><a href="mailto:jason@irlevents.fun?subject=Event%20Inquiry">Email Us</a></li>
                        <li><a href="<?php echo home_url('/privacy-policy/'); ?>">Terms & Privacy</a></li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="irl-footer-bottom">
                <p>© <?php echo date('Y'); ?> IRL Interactive Events. Creating experiences that connect people.</p>
                <div class="irl-footer-tags">
                    <span>🏥 Healthcare</span>
                    <span>🏢 Corporate</span>
                    <span>🍽️ Restaurants</span>
                    <span>💍 Weddings</span>
                    <span>🎉 Private Events</span>
                </div>
                <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem; flex-wrap: wrap;">
                    <a href="https://t.me/Irleventsbot" 
                       target="_blank" 
                       rel="noopener"
                       style="color: var(--color-cyan-300); font-size: 0.875rem; text-decoration: none; display: flex; align-items: center; gap: 0.25rem;">
                        ✈️ Chat via Telegram
                    </a>
                    <a href="mailto:jason@irlevents.fun?subject=Event%20Inquiry" 
                       style="color: var(--color-cyan-300); font-size: 0.875rem; text-decoration: none; display: flex; align-items: center; gap: 0.25rem;">
                        ✉️ jason@irlevents.fun
                    </a>
                </div>
            </div>
        </div>
    </footer>
</div>

<?php wp_footer(); ?>

<script>
// Additional footer JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to internal links
    const internalLinks = document.querySelectorAll('a[href*="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add loading states to buttons
    const buttons = document.querySelectorAll('.irl-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.href || this.href.startsWith('javascript:') || this.href.startsWith('tel:') || this.href.startsWith('mailto:')) {
                return;
            }
            
            const originalText = this.innerHTML;
            this.innerHTML = '⏳ Loading...';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    });

    // Add fade-in animation for program cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const programCards = document.querySelectorAll('.irl-program-card');
    programCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Analytics and tracking functions
function irlTrackEvent(action, category, label) {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Facebook Pixel tracking
    if (typeof fbq !== 'undefined') {
        fbq('track', action, {
            content_category: category,
            content_name: label
        });
    }
    
    console.log('Event tracked:', action, category, label);
}

// Track clicks on important buttons
document.addEventListener('DOMContentLoaded', function() {
    // Track CTA button clicks
    document.querySelectorAll('.irl-btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            irlTrackEvent('click', 'CTA', this.textContent.trim());
        });
    });

    // Track Telegram clicks
    document.querySelectorAll('a[href*="t.me"]').forEach(link => {
        link.addEventListener('click', function() {
            irlTrackEvent('click', 'Contact', 'Telegram Bot');
        });
    });

    // Track email clicks
    document.querySelectorAll('a[href*="mailto:jason@irlevents.fun"]').forEach(link => {
        link.addEventListener('click', function() {
            irlTrackEvent('click', 'Contact', 'Email');
        });
    });

    // Track service category clicks
    document.querySelectorAll('.irl-service-button').forEach(button => {
        button.addEventListener('click', function() {
            const title = this.querySelector('.irl-service-title').textContent.trim();
            irlTrackEvent('click', 'Service Category', title);
        });
    });

    // Track program clicks
    document.querySelectorAll('.irl-program-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.irl-program-title').textContent.trim();
            irlTrackEvent('click', 'Program', title);
        });
    });
});

// Telegram Bot Integration Functions
function irlSendToTelegram(message, eventType = '') {
    // In a production environment, this would send data to your Telegram bot
    // For now, we'll just open the bot and log the message
    console.log('Sending to Telegram Bot:', { message, eventType });
    
    // Track the interaction
    irlTrackEvent('telegram_interaction', 'Contact', eventType || 'General Inquiry');
    
    // Open Telegram bot
    window.open('https://t.me/Irleventsbot', '_blank');
}

// Function to pre-populate Telegram with event-specific context
function irlTelegramWithContext(eventType) {
    const messages = {
        'wedding': 'Hi! I\'m interested in your Wedding In-A-Box package. Can you provide more details?',
        'corporate': 'Hello! I need help planning a corporate event. What services do you offer?',
        'restaurant': 'Hi there! I\'m looking for entertainment for my restaurant/venue. Can you help?',
        'private': 'Hello! I want to plan a private event. What options do you have?',
        'quote': 'Hi! I\'d like to get a custom quote for my event. Can we discuss?'
    };
    
    const message = messages[eventType] || 'Hi! I\'m interested in your event services.';
    irlSendToTelegram(message, eventType);
}
</script>

</body>
</html>