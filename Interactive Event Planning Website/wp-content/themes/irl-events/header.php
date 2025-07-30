<?php
/**
 * The header for the IRL Events theme
 * 
 * @package IRL_Events
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
    
    <style>
        /* Additional styles for background image */
        .irl-layout {
            background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('<?php echo get_template_directory_uri(); ?>/assets/images/futuristic-grid-bg.png');
        }
    </style>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="irl-layout">
    <!-- Header -->
    <header class="irl-header">
        <div class="irl-header-container">
            <!-- Logo -->
            <a href="<?php echo home_url('/'); ?>" class="irl-logo">
                <?php
                $custom_logo_id = get_theme_mod('custom_logo');
                if ($custom_logo_id) {
                    $logo_url = wp_get_attachment_image_src($custom_logo_id, 'full')[0];
                } else {
                    $logo_url = get_template_directory_uri() . '/assets/images/irl-logo.png';
                }
                ?>
                <img src="<?php echo esc_url($logo_url); ?>" alt="IRL Interactive Events - Bring People Back to Reality" />
                <div class="irl-social-handle" style="display: none;">
                    <?php echo esc_html(get_theme_mod('irl_social_handle', '@irleventsfun')); ?>
                </div>
            </a>

            <!-- Navigation Menu -->
            <nav class="irl-nav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'irl-nav-menu',
                    'container' => false,
                    'fallback_cb' => 'irl_events_fallback_menu',
                ));
                ?>
            </nav>

            <!-- Global CTAs -->
            <div class="irl-cta-buttons">
                <a href="<?php echo esc_url(get_theme_mod('irl_calendly_url', 'https://calendly.com/irl-events')); ?>" 
                   class="irl-btn irl-btn-primary" 
                   target="_blank"
                   rel="noopener">
                    📅 <span class="irl-btn-text">Book Call</span>
                </a>
                
                <a href="<?php echo home_url('/custom-quote/'); ?>" 
                   class="irl-btn irl-btn-secondary">
                    📝 <span class="irl-btn-text">Quote</span>
                </a>
                
                <button onclick="irlOpenChat()" 
                        class="irl-btn irl-btn-success">
                    💬 <span class="irl-btn-text">Chat</span>
                </button>
                
                <a href="https://t.me/Irleventsbot" 
                   class="irl-btn irl-btn-telegram" 
                   target="_blank"
                   rel="noopener">
                    ✈️ <span class="irl-btn-text">Telegram</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="irl-main">

<?php
/**
 * Fallback menu if no menu is assigned
 */
function irl_events_fallback_menu() {
    echo '<ul class="irl-nav-menu">';
    echo '<li><a href="' . home_url('/') . '">Home</a></li>';
    echo '<li><a href="' . home_url('/services/') . '">Services</a></li>';
    echo '<li><a href="' . home_url('/programs/') . '">Programs</a></li>';
    echo '<li><a href="' . home_url('/gallery/') . '">Gallery</a></li>';
    echo '<li><a href="' . home_url('/contact/') . '">Contact</a></li>';
    echo '</ul>';
}
?>

<script>
// Global JavaScript functions
function irlOpenChat() {
    // This would integrate with a chat system like Intercom, Zendesk, etc.
    console.log('Opening chat...');
    
    // Example integration with a chat widget
    if (typeof window.Intercom !== 'undefined') {
        window.Intercom('show');
    } else if (typeof window.zE !== 'undefined') {
        window.zE('webWidget', 'open');
    } else {
        // Fallback - redirect to Telegram bot
        window.open('https://t.me/Irleventsbot', '_blank');
    }
}

function irlOpenTelegram() {
    window.open('https://t.me/Irleventsbot', '_blank');
}

function irlSendEmail() {
    const subject = encodeURIComponent('Event Inquiry - IRL Interactive Events');
    const body = encodeURIComponent('Hi Jason,\n\nI\'m interested in learning more about your event services.\n\nBest regards');
    window.open('mailto:jason@irlevents.fun?subject=' + subject + '&body=' + body, '_self');
}

// Mobile responsive adjustments
function irlCheckMobile() {
    const isMobile = window.innerWidth < 768;
    const socialHandle = document.querySelector('.irl-social-handle');
    const btnTexts = document.querySelectorAll('.irl-btn-text');
    
    if (socialHandle) {
        socialHandle.style.display = isMobile ? 'none' : 'block';
    }
    
    btnTexts.forEach(text => {
        text.style.display = isMobile ? 'none' : 'inline';
    });
}

// Run on load and resize
document.addEventListener('DOMContentLoaded', irlCheckMobile);
window.addEventListener('resize', irlCheckMobile);
</script>