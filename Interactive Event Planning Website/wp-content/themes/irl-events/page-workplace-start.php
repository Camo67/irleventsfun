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