<?php
/**
 * Template Name: Reunion In-A-Box
 */

get_header(); ?>

<div style="max-width: 75rem; margin: 0 auto; padding: 3rem 1rem;">
    <!-- Hero Section -->
    <div class="irl-package-hero">
        <div class="irl-package-icon">👨‍👩‍👧‍👦</div>
        <h1 class="irl-package-title">Reunion In-A-Box</h1>
        <p class="irl-package-subtitle">Bring Everyone Together with Unforgettable Entertainment</p>
        <div class="irl-package-price">Starting at $3,500*</div>
        <p style="color: var(--color-gray-300); font-size: 0.875rem; margin-top: 0.5rem;">
            *Pricing varies by reunion size and location
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
                        <h4>Multi-Era Music</h4>
                        <p>DJ with music from different decades to appeal to all generations</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">📸</div>
                    <div class="irl-feature-content">
                        <h4>Memory Photo Booth</h4>
                        <p>Themed photo booth with props from different eras</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">🧠</div>
                    <div class="irl-feature-content">
                        <h4>Memory Games & Trivia</h4>
                        <p>Custom trivia about family history, school years, or shared memories</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">🎤</div>
                    <div class="irl-feature-content">
                        <h4>Microphone & Sound System</h4>
                        <p>For speeches, toasts, and sharing memories</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">📺</div>
                    <div class="irl-feature-content">
                        <h4>Memory Slideshow Setup</h4>
                        <p>Display your family photos and videos throughout the event</p>
                    </div>
                </div>
                
                <div class="irl-feature-item">
                    <div class="irl-feature-icon">🎪</div>
                    <div class="irl-feature-content">
                        <h4>Professional Host</h4>
                        <p>Event coordinator to manage timeline and activities</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div style="background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: var(--radius-lg); padding: 2rem;">
                <h3 style="color: white; font-weight: bold; font-size: 1.25rem; margin-bottom: 1.5rem;">Reunion Types We Specialize In</h3>
                
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="color: var(--color-green-400);">🎓</div>
                        <span style="color: white;">School & Class Reunions</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="color: var(--color-green-400);">👨‍👩‍👧‍👦</div>
                        <span style="color: white;">Family Reunions</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="color: var(--color-green-400);">⚖️</div>
                        <span style="color: white;">Military Unit Reunions</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="color: var(--color-green-400);">🏢</div>
                        <span style="color: white;">Company Alumni Gatherings</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="color: var(--color-green-400);">⛪</div>
                        <span style="color: white;">Church Group Reunions</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="color: var(--color-green-400);">🏘️</div>
                        <span style="color: white;">Neighborhood Reunions</span>
                    </div>
                </div>

                <div style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: var(--radius-lg); padding: 1rem;">
                    <h4 style="color: var(--color-pink-300); font-weight: 600; margin-bottom: 0.5rem;">Perfect for All Ages</h4>
                    <p style="font-size: 0.875rem; color: var(--color-gray-300); margin: 0;">
                        Our entertainment adapts to your group, from kids' activities to adult nostalgia, ensuring everyone has fun together.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="irl-cta-section">
        <h2 class="irl-cta-title">Ready to Plan Your Reunion?</h2>
        <p class="irl-cta-description">
            Let's create a reunion experience that brings everyone together and creates new memories to last a lifetime.
        </p>
        
        <div class="irl-cta-buttons-container">
            <a href="<?php echo esc_url(get_theme_mod('irl_calendly_url', 'https://calendly.com/irl-events')); ?>/reunion-consultation" 
               target="_blank" 
               rel="noopener"
               class="irl-btn irl-btn-primary" 
               style="padding: 1rem 3rem; font-size: 1.125rem;">
                📅 Book Reunion Planning Call
            </a>
            
            <a href="<?php echo home_url('/custom-quote/'); ?>?type=reunion" 
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
            
            <a href="mailto:jason@irlevents.fun?subject=Reunion%20Event%20Inquiry" 
               class="irl-btn irl-btn-warning" 
               style="padding: 0.75rem 2rem; font-weight: 600;">
                ✉️ Email Us
            </a>
        </div>
    </div>
</div>

<?php get_footer(); ?> 