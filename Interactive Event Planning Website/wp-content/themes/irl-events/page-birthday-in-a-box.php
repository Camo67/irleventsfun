<?php
/**
 * Template Name: Birthday In-A-Box
 */

get_header(); ?>

<div style="max-width: 75rem; margin: 0 auto; padding: 3rem 1rem;">
    <!-- Hero Section -->
    <div class="irl-package-hero">
        <div class="irl-package-icon">🎂</div>
        <h1 class="irl-package-title">Birthday In-A-Box</h1>
        <p class="irl-package-subtitle">Complete Birthday Party Entertainment Package</p>
        <div class="irl-package-price">Starting at $2,500*</div>
        <p style="color: var(--color-gray-300); font-size: 0.875rem; margin-top: 0.5rem;">
            *Pricing varies by package size and add-ons
        </p>
    </div>

    <!-- What's Included -->
    <div class="irl-features-grid irl-mb-12">
        <div>
            <h2 style="color: white; font-size: 1.875rem; font-weight: bold; margin-bottom: 1.5rem;">What's Included</h2>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">🎵</div>
                    <div class="irl-feature-content">
                        <h4>DJ & Music</h4>
                        <p>Professional DJ with age-appropriate music and sound system</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">🎮</div>
                    <div class="irl-feature-content">
                        <h4>Interactive Games</h4>
                        <p>Customized game show entertainment and interactive activities</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">📸</div>
                    <div class="irl-feature-content">
                        <h4>Photo Booth</h4>
                        <p>Themed photo booth with props and instant prints</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">🎪</div>
                    <div class="irl-feature-content">
                        <h4>Party Host</h4>
                        <p>Professional party host to coordinate activities and entertainment</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">💡</div>
                    <div class="irl-feature-content">
                        <h4>Party Lighting</h4>
                        <p>Colorful party lighting to create the perfect atmosphere</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">🎁</div>
                    <div class="irl-feature-content">
                        <h4>Party Favors Setup</h4>
                        <p>Coordination of party favors and prize distribution</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div style="background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: var(--radius-lg); padding: 2rem;">
                <h3 style="color: white; font-weight: bold; font-size: 1.25rem; margin-bottom: 1.5rem;">Age-Specific Packages</h3>
                
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                    <div style="background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-lg); padding: 1rem;">
                        <h4 style="color: var(--color-cyan-300); font-weight: 600; margin-bottom: 0.5rem;">Kids (5-12 years)</h4>
                        <ul style="color: var(--color-gray-300); font-size: 0.875rem; margin: 0; padding-left: 1rem;">
                            <li>Interactive games and activities</li>
                            <li>Age-appropriate music</li>
                            <li>Character appearances available</li>
                            <li>Magic shows and entertainment</li>
                        </ul>
                    </div>
                    
                    <div style="background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-lg); padding: 1rem;">
                        <h4 style="color: var(--color-cyan-300); font-weight: 600; margin-bottom: 0.5rem;">Teens (13-17 years)</h4>
                        <ul style="color: var(--color-gray-300); font-size: 0.875rem; margin: 0; padding-left: 1rem;">
                            <li>Game show entertainment</li>
                            <li>Social media-friendly photo booth</li>
                            <li>Dance party with trending music</li>
                            <li>Interactive competitions</li>
                        </ul>
                    </div>
                    
                    <div style="background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-lg); padding: 1rem;">
                        <h4 style="color: var(--color-cyan-300); font-weight: 600; margin-bottom: 0.5rem;">Adults (18+ years)</h4>
                        <ul style="color: var(--color-gray-300); font-size: 0.875rem; margin: 0; padding-left: 1rem;">
                            <li>Sophisticated entertainment</li>
                            <li>Milestone celebration themes</li>
                            <li>Adult game shows and trivia</li>
                            <li>Professional event coordination</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="irl-cta-section">
        <h2 class="irl-cta-title">Ready to Plan the Perfect Birthday?</h2>
        <p class="irl-cta-description">
            Let's create a memorable birthday experience that the birthday person and guests will never forget!
        </p>
        
        <div class="irl-cta-buttons-container">
            <a href="<?php echo esc_url(get_theme_mod('irl_calendly_url', 'https://calendly.com/irl-events')); ?>/birthday-consultation" 
               target="_blank" 
               rel="noopener"
               class="irl-btn irl-btn-primary" 
               style="padding: 1rem 3rem; font-size: 1.125rem;">
                📅 Book Birthday Consultation
            </a>
            
            <a href="<?php echo home_url('/custom-quote/'); ?>?type=birthday" 
               class="irl-btn irl-btn-secondary" 
               style="padding: 1rem 3rem; font-size: 1.125rem;">
                📝 Get Custom Quote
            </a>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center;">
            <a href="https://t.me/Irleventsbot" 
               target="_blank" 
               rel="noopener"
               class="irl-btn irl-btn-telegram" 
               style="padding: 0.75rem 2rem; font-weight: 600;">
                ✈️ Message us on Telegram
            </a>
            
            <a href="mailto:jason@irlevents.fun?subject=Birthday%20Party%20Inquiry" 
               class="irl-btn irl-btn-warning" 
               style="padding: 0.75rem 2rem; font-weight: 600;">
                ✉️ Email Us
            </a>
        </div>
    </div>
</div>

<?php get_footer(); ?> 