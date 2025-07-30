<?php
/**
 * IRL Interactive Events Theme Functions
 * 
 * @package IRL_Events
 * @version 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function irl_events_setup() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'irl-events'),
        'footer' => __('Footer Menu', 'irl-events'),
    ));
}
add_action('after_setup_theme', 'irl_events_setup');

/**
 * Enqueue Scripts and Styles
 */
function irl_events_scripts() {
    // Theme stylesheet
    wp_enqueue_style('irl-events-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Main theme CSS
    wp_enqueue_style('irl-events-main', get_template_directory_uri() . '/assets/css/theme.css', array(), '1.0.0');
    
    // Theme JavaScript
    wp_enqueue_script('irl-events-main', get_template_directory_uri() . '/assets/js/theme.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('irl-events-main', 'irl_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('irl_nonce'),
        'telegram_bot' => 'https://t.me/Irleventsbot',
        'email' => 'jason@irlevents.fun',
    ));
}
add_action('wp_enqueue_scripts', 'irl_events_scripts');

/**
 * Custom Post Types
 */
function irl_events_custom_post_types() {
    // Services Post Type
    register_post_type('irl_service', array(
        'labels' => array(
            'name' => 'Services',
            'singular_name' => 'Service',
            'add_new' => 'Add New Service',
            'add_new_item' => 'Add New Service',
            'edit_item' => 'Edit Service',
            'new_item' => 'New Service',
            'view_item' => 'View Service',
            'search_items' => 'Search Services',
            'not_found' => 'No services found',
            'not_found_in_trash' => 'No services found in trash',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-star-filled',
        'rewrite' => array('slug' => 'services'),
    ));

    // Programs Post Type
    register_post_type('irl_program', array(
        'labels' => array(
            'name' => 'Programs',
            'singular_name' => 'Program',
            'add_new' => 'Add New Program',
            'add_new_item' => 'Add New Program',
            'edit_item' => 'Edit Program',
            'new_item' => 'New Program',
            'view_item' => 'View Program',
            'search_items' => 'Search Programs',
            'not_found' => 'No programs found',
            'not_found_in_trash' => 'No programs found in trash',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-calendar-alt',
        'rewrite' => array('slug' => 'programs'),
    ));

    // Quote Requests Post Type
    register_post_type('irl_quote', array(
        'labels' => array(
            'name' => 'Quote Requests',
            'singular_name' => 'Quote Request',
            'add_new' => 'Add New Quote',
            'edit_item' => 'Edit Quote Request',
            'view_item' => 'View Quote Request',
            'search_items' => 'Search Quote Requests',
        ),
        'public' => false,
        'show_ui' => true,
        'supports' => array('title', 'editor'),
        'menu_icon' => 'dashicons-format-quote',
        'capability_type' => 'post',
        'map_meta_cap' => true,
    ));
}
add_action('init', 'irl_events_custom_post_types');

/**
 * Custom Meta Fields
 */
function irl_events_meta_boxes() {
    // Service meta fields
    add_meta_box(
        'service_details',
        'Service Details',
        'irl_events_service_meta_callback',
        'irl_service',
        'normal',
        'high'
    );

    // Program meta fields
    add_meta_box(
        'program_details',
        'Program Details',
        'irl_events_program_meta_callback',
        'irl_program',
        'normal',
        'high'
    );

    // Quote meta fields
    add_meta_box(
        'quote_details',
        'Quote Details',
        'irl_events_quote_meta_callback',
        'irl_quote',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'irl_events_meta_boxes');

function irl_events_service_meta_callback($post) {
    wp_nonce_field('irl_events_service_nonce', 'service_nonce');
    $price = get_post_meta($post->ID, '_service_price', true);
    $icon = get_post_meta($post->ID, '_service_icon', true);
    $category = get_post_meta($post->ID, '_service_category', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="service_price">Price</label></th>
            <td><input type="text" id="service_price" name="service_price" value="<?php echo esc_attr($price); ?>" /></td>
        </tr>
        <tr>
            <th><label for="service_icon">Icon URL</label></th>
            <td><input type="url" id="service_icon" name="service_icon" value="<?php echo esc_attr($icon); ?>" /></td>
        </tr>
        <tr>
            <th><label for="service_category">Category</label></th>
            <td>
                <select id="service_category" name="service_category">
                    <option value="restaurant" <?php selected($category, 'restaurant'); ?>>Restaurant & Venue</option>
                    <option value="private" <?php selected($category, 'private'); ?>>Private Event</option>
                    <option value="corporate" <?php selected($category, 'corporate'); ?>>Corporate</option>
                    <option value="healthcare" <?php selected($category, 'healthcare'); ?>>Healthcare</option>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

function irl_events_program_meta_callback($post) {
    wp_nonce_field('irl_events_program_nonce', 'program_nonce');
    $featured = get_post_meta($post->ID, '_program_featured', true);
    $category = get_post_meta($post->ID, '_program_category', true);
    $tagline = get_post_meta($post->ID, '_program_tagline', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="program_featured">Featured Program</label></th>
            <td><input type="checkbox" id="program_featured" name="program_featured" value="1" <?php checked($featured, 1); ?> /></td>
        </tr>
        <tr>
            <th><label for="program_category">Category</label></th>
            <td>
                <select id="program_category" name="program_category">
                    <option value="top" <?php selected($category, 'top'); ?>>Top Programs</option>
                    <option value="business" <?php selected($category, 'business'); ?>>Business Programs</option>
                    <option value="specialty" <?php selected($category, 'specialty'); ?>>Specialty Programs</option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="program_tagline">Tagline</label></th>
            <td><input type="text" id="program_tagline" name="program_tagline" value="<?php echo esc_attr($tagline); ?>" /></td>
        </tr>
    </table>
    <?php
}

function irl_events_quote_meta_callback($post) {
    wp_nonce_field('irl_events_quote_nonce', 'quote_nonce');
    $funnel_data = get_post_meta($post->ID, '_quote_funnel_data', true);
    $contact_info = get_post_meta($post->ID, '_quote_contact_info', true);
    $status = get_post_meta($post->ID, '_quote_status', true);
    $contact_method = get_post_meta($post->ID, '_quote_contact_method', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="quote_status">Status</label></th>
            <td>
                <select id="quote_status" name="quote_status">
                    <option value="new" <?php selected($status, 'new'); ?>>New</option>
                    <option value="contacted" <?php selected($status, 'contacted'); ?>>Contacted</option>
                    <option value="quoted" <?php selected($status, 'quoted'); ?>>Quoted</option>
                    <option value="closed" <?php selected($status, 'closed'); ?>>Closed</option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="quote_contact_method">Preferred Contact Method</label></th>
            <td>
                <select id="quote_contact_method" name="quote_contact_method">
                    <option value="email" <?php selected($contact_method, 'email'); ?>>Email</option>
                    <option value="telegram" <?php selected($contact_method, 'telegram'); ?>>Telegram</option>
                    <option value="calendly" <?php selected($contact_method, 'calendly'); ?>>Phone/Video Call</option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="quote_contact_info">Contact Information</label></th>
            <td><textarea id="quote_contact_info" name="quote_contact_info" rows="5" cols="50"><?php echo esc_textarea($contact_info); ?></textarea></td>
        </tr>
        <tr>
            <th><label for="quote_funnel_data">Funnel Data</label></th>
            <td><textarea id="quote_funnel_data" name="quote_funnel_data" rows="10" cols="50"><?php echo esc_textarea($funnel_data); ?></textarea></td>
        </tr>
    </table>
    <?php
}

/**
 * Save Meta Fields
 */
function irl_events_save_meta_fields($post_id) {
    // Service meta
    if (isset($_POST['service_nonce']) && wp_verify_nonce($_POST['service_nonce'], 'irl_events_service_nonce')) {
        if (isset($_POST['service_price'])) {
            update_post_meta($post_id, '_service_price', sanitize_text_field($_POST['service_price']));
        }
        if (isset($_POST['service_icon'])) {
            update_post_meta($post_id, '_service_icon', esc_url_raw($_POST['service_icon']));
        }
        if (isset($_POST['service_category'])) {
            update_post_meta($post_id, '_service_category', sanitize_text_field($_POST['service_category']));
        }
    }

    // Program meta
    if (isset($_POST['program_nonce']) && wp_verify_nonce($_POST['program_nonce'], 'irl_events_program_nonce')) {
        update_post_meta($post_id, '_program_featured', isset($_POST['program_featured']) ? 1 : 0);
        if (isset($_POST['program_category'])) {
            update_post_meta($post_id, '_program_category', sanitize_text_field($_POST['program_category']));
        }
        if (isset($_POST['program_tagline'])) {
            update_post_meta($post_id, '_program_tagline', sanitize_text_field($_POST['program_tagline']));
        }
    }

    // Quote meta
    if (isset($_POST['quote_nonce']) && wp_verify_nonce($_POST['quote_nonce'], 'irl_events_quote_nonce')) {
        if (isset($_POST['quote_status'])) {
            update_post_meta($post_id, '_quote_status', sanitize_text_field($_POST['quote_status']));
        }
        if (isset($_POST['quote_contact_method'])) {
            update_post_meta($post_id, '_quote_contact_method', sanitize_text_field($_POST['quote_contact_method']));
        }
        if (isset($_POST['quote_contact_info'])) {
            update_post_meta($post_id, '_quote_contact_info', sanitize_textarea_field($_POST['quote_contact_info']));
        }
        if (isset($_POST['quote_funnel_data'])) {
            update_post_meta($post_id, '_quote_funnel_data', sanitize_textarea_field($_POST['quote_funnel_data']));
        }
    }
}
add_action('save_post', 'irl_events_save_meta_fields');

/**
 * AJAX Handlers for Funnel Functionality
 */
function irl_events_handle_funnel_submission() {
    check_ajax_referer('irl_nonce', 'nonce');

    $funnel_data = $_POST['funnel_data'] ?? array();
    $funnel_type = $_POST['funnel_type'] ?? '';
    
    // Store in session or database
    if (!session_id()) {
        session_start();
    }
    $_SESSION['irl_funnel_data'] = $funnel_data;
    $_SESSION['irl_funnel_type'] = $funnel_type;

    wp_send_json_success(array('message' => 'Funnel data saved'));
}
add_action('wp_ajax_irl_funnel_submission', 'irl_events_handle_funnel_submission');
add_action('wp_ajax_nopriv_irl_funnel_submission', 'irl_events_handle_funnel_submission');

function irl_events_handle_quote_submission() {
    check_ajax_referer('irl_nonce', 'nonce');

    $quote_data = $_POST['quote_data'] ?? array();
    
    // Create quote post
    $quote_id = wp_insert_post(array(
        'post_title' => 'Quote Request - ' . date('Y-m-d H:i:s'),
        'post_type' => 'irl_quote',
        'post_status' => 'private',
        'meta_input' => array(
            '_quote_funnel_data' => json_encode($quote_data),
            '_quote_status' => 'new',
            '_quote_contact_method' => $quote_data['contact_method'] ?? 'email',
        ),
    ));

    if ($quote_id) {
        // Send notification email to jason@irlevents.fun
        $admin_email = 'jason@irlevents.fun';
        $subject = 'New Quote Request - IRL Interactive Events';
        $message = "A new quote request has been submitted.\n\n";
        $message .= "Contact Method: " . ($quote_data['contact_method'] ?? 'email') . "\n";
        $message .= "View details in the admin panel: " . admin_url("post.php?post={$quote_id}&action=edit") . "\n\n";
        $message .= "Quote Data:\n" . print_r($quote_data, true);
        
        wp_mail($admin_email, $subject, $message);

        wp_send_json_success(array('message' => 'Quote request submitted', 'quote_id' => $quote_id));
    } else {
        wp_send_json_error(array('message' => 'Failed to create quote request'));
    }
}
add_action('wp_ajax_irl_quote_submission', 'irl_events_handle_quote_submission');
add_action('wp_ajax_nopriv_irl_quote_submission', 'irl_events_handle_quote_submission');

/**
 * Handle Contact Form Submissions
 */
function irl_events_handle_contact_submission() {
    check_ajax_referer('irl_nonce', 'nonce');

    $contact_data = $_POST['contact_data'] ?? array();
    
    // Send email to jason@irlevents.fun
    $to = 'jason@irlevents.fun';
    $subject = 'Contact Form Submission - IRL Interactive Events';
    
    $message = "New contact form submission:\n\n";
    $message .= "Name: " . sanitize_text_field($contact_data['name']) . "\n";
    $message .= "Email: " . sanitize_email($contact_data['email']) . "\n";
    $message .= "Phone: " . sanitize_text_field($contact_data['phone']) . "\n";
    $message .= "Event Type: " . sanitize_text_field($contact_data['event_type']) . "\n";
    $message .= "Preferred Contact: " . sanitize_text_field($contact_data['preferred_contact']) . "\n\n";
    $message .= "Message:\n" . sanitize_textarea_field($contact_data['message']) . "\n";
    
    $headers = array(
        'Reply-To: ' . sanitize_email($contact_data['email']),
        'From: ' . get_bloginfo('name') . ' <noreply@' . $_SERVER['HTTP_HOST'] . '>'
    );
    
    $sent = wp_mail($to, $subject, $message, $headers);
    
    if ($sent) {
        wp_send_json_success(array('message' => 'Message sent successfully'));
    } else {
        wp_send_json_error(array('message' => 'Failed to send message'));
    }
}
add_action('wp_ajax_irl_contact_submission', 'irl_events_handle_contact_submission');
add_action('wp_ajax_nopriv_irl_contact_submission', 'irl_events_handle_contact_submission');

/**
 * Telegram Bot Integration
 */
function irl_events_send_telegram_notification($message, $chat_id = null) {
    $bot_token = '8395947276:AAF4rKDcr7DtXxaOoSD-WqfxdFJqnESVNNU';
    $api_url = "https://api.telegram.org/bot{$bot_token}/sendMessage";
    
    // If no specific chat_id provided, this would be the admin chat_id
    // In production, you'd store this in settings
    if (!$chat_id) {
        $chat_id = get_option('irl_telegram_admin_chat_id', ''); // Store admin chat ID in settings
    }
    
    if (empty($chat_id)) {
        return false; // No chat ID configured
    }
    
    $data = array(
        'chat_id' => $chat_id,
        'text' => $message,
        'parse_mode' => 'HTML'
    );
    
    $response = wp_remote_post($api_url, array(
        'body' => $data,
        'timeout' => 30
    ));
    
    return !is_wp_error($response);
}

/**
 * Custom Page Templates
 */
function irl_events_page_templates($templates) {
    $templates['page-restaurant-start.php'] = 'Restaurant Start';
    $templates['page-private-event-start.php'] = 'Private Event Start';
    $templates['page-workplace-start.php'] = 'Workplace Start';
    $templates['page-custom-quote.php'] = 'Custom Quote';
    $templates['page-wedding-in-a-box.php'] = 'Wedding In-A-Box';
    $templates['page-birthday-in-a-box.php'] = 'Birthday In-A-Box';
    $templates['page-reunion-in-a-box.php'] = 'Reunion In-A-Box';
    $templates['page-contact.php'] = 'Contact Page';
    return $templates;
}
add_filter('theme_page_templates', 'irl_events_page_templates');

/**
 * Elementor Support
 */
function irl_events_elementor_support() {
    add_theme_support('elementor');
}
add_action('after_setup_theme', 'irl_events_elementor_support');

/**
 * Custom Elementor Widgets
 */
function irl_events_register_elementor_widgets() {
    if (did_action('elementor/loaded')) {
        require_once get_template_directory() . '/inc/elementor/widgets/funnel-widget.php';
        require_once get_template_directory() . '/inc/elementor/widgets/program-grid.php';
        require_once get_template_directory() . '/inc/elementor/widgets/service-buttons.php';
        require_once get_template_directory() . '/inc/elementor/widgets/telegram-integration.php';
    }
}
add_action('init', 'irl_events_register_elementor_widgets');

/**
 * Session Management
 */
function irl_events_start_session() {
    if (!session_id()) {
        session_start();
    }
}
add_action('init', 'irl_events_start_session');

/**
 * Helper Functions
 */
function irl_events_get_programs($category = '', $featured_only = false) {
    $args = array(
        'post_type' => 'irl_program',
        'posts_per_page' => -1,
        'post_status' => 'publish',
    );

    if ($category) {
        $args['meta_query'][] = array(
            'key' => '_program_category',
            'value' => $category,
            'compare' => '=',
        );
    }

    if ($featured_only) {
        $args['meta_query'][] = array(
            'key' => '_program_featured',
            'value' => '1',
            'compare' => '=',
        );
    }

    return get_posts($args);
}

function irl_events_get_services($category = '') {
    $args = array(
        'post_type' => 'irl_service',
        'posts_per_page' => -1,
        'post_status' => 'publish',
    );

    if ($category) {
        $args['meta_query'][] = array(
            'key' => '_service_category',
            'value' => $category,
            'compare' => '=',
        );
    }

    return get_posts($args);
}

/**
 * Theme Customizer
 */
function irl_events_customize_register($wp_customize) {
    // Social Media Section
    $wp_customize->add_section('irl_social_media', array(
        'title' => 'Social Media',
        'priority' => 120,
    ));

    $wp_customize->add_setting('irl_social_handle', array(
        'default' => '@irleventsfun',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('irl_social_handle', array(
        'label' => 'Social Media Handle',
        'section' => 'irl_social_media',
        'type' => 'text',
    ));

    // Contact Information
    $wp_customize->add_section('irl_contact', array(
        'title' => 'Contact Information',
        'priority' => 125,
    ));

    $wp_customize->add_setting('irl_email', array(
        'default' => 'jason@irlevents.fun',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('irl_email', array(
        'label' => 'Contact Email',
        'section' => 'irl_contact',
        'type' => 'email',
    ));

    $wp_customize->add_setting('irl_telegram_bot', array(
        'default' => 'https://t.me/Irleventsbot',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('irl_telegram_bot', array(
        'label' => 'Telegram Bot URL',
        'section' => 'irl_contact',
        'type' => 'url',
    ));

    $wp_customize->add_setting('irl_calendly_url', array(
        'default' => 'https://calendly.com/irl-events',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('irl_calendly_url', array(
        'label' => 'Calendly URL',
        'section' => 'irl_contact',
        'type' => 'url',
    ));

    // Telegram Settings
    $wp_customize->add_section('irl_telegram', array(
        'title' => 'Telegram Integration',
        'priority' => 130,
    ));

    $wp_customize->add_setting('irl_telegram_admin_chat_id', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('irl_telegram_admin_chat_id', array(
        'label' => 'Admin Chat ID (for notifications)',
        'section' => 'irl_telegram',
        'type' => 'text',
        'description' => 'Your Telegram Chat ID to receive notifications',
    ));
}
add_action('customize_register', 'irl_events_customize_register');

/**
 * Get contact email
 */
function irl_get_contact_email() {
    return get_theme_mod('irl_email', 'jason@irlevents.fun');
}

/**
 * Get Telegram bot URL
 */
function irl_get_telegram_bot_url() {
    return get_theme_mod('irl_telegram_bot', 'https://t.me/Irleventsbot');
}

/**
 * Handle funnel tracking AJAX requests
 */
function irl_events_handle_tracking() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'irl_nonce')) {
        wp_die('Security check failed');
    }

    // Get tracking data
    $event_type = sanitize_text_field($_POST['event_type']);
    $page_name = sanitize_text_field($_POST['page_name']);
    $selection = sanitize_text_field($_POST['selection']);

    // Log the tracking event
    $tracking_data = array(
        'event_type' => $event_type,
        'page_name' => $page_name,
        'selection' => $selection,
        'timestamp' => current_time('mysql'),
        'ip_address' => $_SERVER['REMOTE_ADDR'],
        'user_agent' => $_SERVER['HTTP_USER_AGENT'],
        'referrer' => isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '',
    );

    // Store in WordPress options for analytics
    $existing_tracking = get_option('irl_tracking_events', array());
    $existing_tracking[] = $tracking_data;
    
    // Keep only last 1000 events to prevent database bloat
    if (count($existing_tracking) > 1000) {
        $existing_tracking = array_slice($existing_tracking, -1000);
    }
    
    update_option('irl_tracking_events', $existing_tracking);

    // Send notification to Telegram if it's a conversion event
    if ($event_type === 'funnel_conversion' || $event_type === 'quote_request') {
        $message = "🎯 *New Funnel Conversion*\n\n";
        $message .= "📄 Page: " . $page_name . "\n";
        $message .= "✅ Selection: " . $selection . "\n";
        $message .= "⏰ Time: " . current_time('mysql') . "\n";
        $message .= "🌐 IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
        
        irl_events_send_telegram_notification($message);
    }

    wp_send_json_success('Event tracked successfully');
}
add_action('wp_ajax_irl_track_event', 'irl_events_handle_tracking');
add_action('wp_ajax_nopriv_irl_track_event', 'irl_events_handle_tracking');
?>