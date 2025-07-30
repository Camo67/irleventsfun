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