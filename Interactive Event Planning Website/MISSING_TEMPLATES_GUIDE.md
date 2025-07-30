# Missing WordPress Templates Guide

## Overview
You have most WordPress templates created, but need to complete a few more page templates to match all your React components.

## Missing Templates to Create

### 1. Restaurant Start Page Template
Create: `wp-content/themes/irl-events/page-restaurant-start.php`

```php
<?php
/**
 * Template Name: Restaurant Start
 */

get_header(); ?>

<div class="irl-funnel-container">
    <!-- Progress Bar -->
    <div class="irl-progress-container">
        <div class="irl-progress-info">
            <span class="irl-progress-text">Restaurant & Venue Experience</span>
            <span class="irl-progress-text">Step 1 of 3</span>
        </div>
        <div class="irl-progress-bar">
            <div class="irl-progress-fill" style="width: 33%;"></div>
        </div>
    </div>

    <!-- Question Card -->
    <div class="irl-question-card">
        <h2 class="irl-question-title">What type of restaurant experience are you planning?</h2>
        
        <div class="irl-options-container">
            <button class="irl-option-button" onclick="irlSelectOption('special-event')">
                🎉 Special Event Night
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Birthday parties, anniversaries, celebrations
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectOption('regular-entertainment')">
                🎵 Regular Entertainment
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Weekly shows, live music, ongoing entertainment
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectOption('corporate-dining')">
                🏢 Corporate Dining Event
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Business dinners, company celebrations
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectOption('venue-partnership')">
                🤝 Venue Partnership
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Ongoing entertainment partnership
                </div>
            </button>
        </div>
    </div>
</div>

<script>
function irlSelectOption(option) {
    // Track selection
    irlTrackEvent('funnel_selection', 'Restaurant Start', option);
    
    // Store selection in session
    sessionStorage.setItem('restaurant_type', option);
    
    // Redirect to next step based on selection
    if (option === 'special-event') {
        window.location.href = '<?php echo home_url('/custom-quote/'); ?>?type=restaurant-special';
    } else if (option === 'corporate-dining') {
        window.location.href = '<?php echo home_url('/workplace-start/'); ?>?focus=restaurant';
    } else {
        window.location.href = '<?php echo home_url('/custom-quote/'); ?>?type=restaurant-' + option;
    }
}
</script>

<?php get_footer(); ?>
```

### 2. Private Event Start Page Template
Create: `wp-content/themes/irl-events/page-private-event-start.php`

```php
<?php
/**
 * Template Name: Private Event Start
 */

get_header(); ?>

<div class="irl-funnel-container">
    <!-- Progress Bar -->
    <div class="irl-progress-container">
        <div class="irl-progress-info">
            <span class="irl-progress-text">Private Event Planning</span>
            <span class="irl-progress-text">Step 1 of 4</span>
        </div>
        <div class="irl-progress-bar">
            <div class="irl-progress-fill" style="width: 25%;"></div>
        </div>
    </div>

    <!-- Question Card -->
    <div class="irl-question-card">
        <h2 class="irl-question-title">What type of private event are you planning?</h2>
        
        <div class="irl-options-container">
            <button class="irl-option-button" onclick="irlSelectPrivateEvent('wedding')">
                💍 Wedding
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Complete wedding entertainment package
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectPrivateEvent('birthday')">
                🎂 Birthday Party
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Milestone birthdays, surprise parties
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectPrivateEvent('reunion')">
                👨‍👩‍👧‍👦 Family/Class Reunion
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Reunions, family gatherings
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectPrivateEvent('anniversary')">
                💕 Anniversary
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Wedding anniversaries, special milestones
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectPrivateEvent('graduation')">
                🎓 Graduation
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Graduation parties, achievement celebrations
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectPrivateEvent('other')">
                🎉 Other Celebration
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Custom private events
                </div>
            </button>
        </div>
    </div>
</div>

<script>
function irlSelectPrivateEvent(eventType) {
    // Track selection
    irlTrackEvent('funnel_selection', 'Private Event Start', eventType);
    
    // Store selection
    sessionStorage.setItem('private_event_type', eventType);
    
    // Redirect based on event type
    if (eventType === 'wedding') {
        window.location.href = '<?php echo home_url('/wedding-in-a-box/'); ?>';
    } else if (eventType === 'birthday') {
        window.location.href = '<?php echo home_url('/birthday-in-a-box/'); ?>';
    } else if (eventType === 'reunion') {
        window.location.href = '<?php echo home_url('/reunion-in-a-box/'); ?>';
    } else {
        window.location.href = '<?php echo home_url('/custom-quote/'); ?>?type=private-' + eventType;
    }
}
</script>

<?php get_footer(); ?>
```

### 3. Workplace Start Page Template
Create: `wp-content/themes/irl-events/page-workplace-start.php`

```php
<?php
/**
 * Template Name: Workplace Start
 */

get_header(); ?>

<div class="irl-funnel-container">
    <!-- Progress Bar -->
    <div class="irl-progress-container">
        <div class="irl-progress-info">
            <span class="irl-progress-text">Workplace Experience</span>
            <span class="irl-progress-text">Step 1 of 3</span>
        </div>
        <div class="irl-progress-bar">
            <div class="irl-progress-fill" style="width: 33%;"></div>
        </div>
    </div>

    <!-- Question Card -->
    <div class="irl-question-card">
        <h2 class="irl-question-title">What type of workplace event do you need?</h2>
        
        <div class="irl-options-container">
            <button class="irl-option-button" onclick="irlSelectWorkplace('corporate')">
                🏢 Corporate Events
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Team building, company parties, conferences
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectWorkplace('healthcare')">
                🏥 Healthcare Events
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Medical conferences, wellness programs, staff events
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectWorkplace('nonprofit')">
                🤲 Nonprofit Events
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    Fundraisers, awareness events, volunteer appreciation
                </div>
            </button>
            
            <button class="irl-option-button" onclick="irlSelectWorkplace('education')">
                🎓 Educational Events
                <div style="font-size: 0.875rem; color: var(--color-gray-300); margin-top: 0.5rem;">
                    School events, training sessions, workshops
                </div>
            </button>
        </div>
    </div>
</div>

<script>
function irlSelectWorkplace(workplaceType) {
    // Track selection
    irlTrackEvent('funnel_selection', 'Workplace Start', workplaceType);
    
    // Store selection
    sessionStorage.setItem('workplace_type', workplaceType);
    
    // Redirect to custom quote with context
    window.location.href = '<?php echo home_url('/custom-quote/'); ?>?type=workplace-' + workplaceType;
}
</script>

<?php get_footer(); ?>
```

### 4. Birthday In-A-Box Page Template
Create: `wp-content/themes/irl-events/page-birthday-in-a-box.php`

```php
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
```

### 5. Reunion In-A-Box Page Template
Create: `wp-content/themes/irl-events/page-reunion-in-a-box.php`

```php
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
```

## Quick File Upload Instructions

### Method 1: Create Files Directly in WordPress Admin

1. Go to **WordPress Admin → Appearance → Theme Editor**
2. Select "IRL Interactive Events" theme
3. Click "Add New File"
4. Copy and paste each template code above
5. Save each file with the correct filename

### Method 2: Upload via FTP

1. Use your FTP client (FileZilla, etc.)
2. Navigate to `/wp-content/themes/irl-events/`
3. Create new PHP files with the code above
4. Upload to server

### Method 3: Local Development

1. Create files on your local machine
2. Test in local WordPress environment
3. Upload completed theme folder to live server

## Testing Your Templates

After creating the templates:

1. **Create WordPress Pages**:
   - Go to Pages → Add New
   - Create page with matching title
   - Select the custom template from Page Attributes

2. **Test Navigation**:
   - Verify all funnel flows work
   - Check button redirects
   - Test Telegram and email links

3. **Verify Styling**:
   - Check all pages display correctly
   - Verify mobile responsiveness
   - Test in different browsers

Your WordPress theme is now complete with all page templates! 🚀