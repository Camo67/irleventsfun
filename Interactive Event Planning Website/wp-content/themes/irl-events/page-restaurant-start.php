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