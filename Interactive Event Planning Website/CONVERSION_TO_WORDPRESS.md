# Converting IRL Interactive Events React Site to WordPress

## Overview
This guide explains how to convert the React-based IRL Interactive Events website to WordPress while maintaining the futuristic neon aesthetic and functionality.

## Conversion Options

### Option 1: Custom WordPress Theme
Convert React components to PHP templates while preserving design.

### Option 2: Headless WordPress + React Frontend
Use WordPress as CMS backend, keep React frontend.

### Option 3: WordPress Block Theme
Create custom Gutenberg blocks matching the design.

## Option 1: Custom WordPress Theme (Recommended)

### 1. Theme Structure
Create a new WordPress theme with these files:

```
irl-events-theme/
├── style.css
├── index.php
├── header.php
├── footer.php
├── functions.php
├── page-home.php
├── page-services.php
├── page-programs.php
├── page-contact.php
├── single-service.php
├── single-program.php
├── assets/
│   ├── css/
│   │   └── style.css (converted from globals.css)
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── grid-background.png
│       ├── irl-logo.png
│       └── programs/
├── template-parts/
├── inc/
└── languages/
```

### 2. Converting React Components to PHP

#### Layout Component → header.php + footer.php
```php
<?php
// header.php
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div class="min-h-screen relative overflow-hidden">
    <!-- Background Image -->
    <div class="fixed inset-0 z-0">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/grid-background.png" 
             alt="Futuristic grid background" 
             class="w-full h-full object-cover">
    </div>
    
    <div class="relative z-10 min-h-screen">
        <header class="flex justify-between items-center p-6">
            <div class="flex items-center">
                <a href="<?php echo home_url(); ?>">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/irl-logo.png" 
                         alt="IRL Interactive Events Logo" 
                         class="h-16 w-auto">
                </a>
            </div>
            
            <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>" 
               class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                CALL NOW!
            </a>
            
            <!-- Navigation Menu -->
            <nav class="hidden md:flex space-x-6">
                <a href="<?php echo home_url(); ?>" class="text-white hover:text-cyan-300">Home</a>
                <a href="<?php echo get_permalink(get_page_by_path('services')); ?>" class="text-white hover:text-cyan-300">Services</a>
                <a href="<?php echo get_permalink(get_page_by_path('programs')); ?>" class="text-white hover:text-cyan-300">Programs</a>
                <a href="<?php echo get_permalink(get_page_by_path('gallery')); ?>" class="text-white hover:text-cyan-300">Gallery</a>
                <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>" class="text-white hover:text-cyan-300">Contact</a>
            </nav>
        </header>
        
        <main class="px-6 pb-6">
```

#### Homepage Component → page-home.php
```php
<?php
// page-home.php
get_header(); 
?>

<div class="container mx-auto">
    <!-- Hero Section -->
    <section class="text-center py-20">
        <h1 class="text-6xl font-bold mb-6">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                IRL INTERACTIVE
            </span>
        </h1>
        <h2 class="text-4xl text-white mb-8">EVENTS</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Transforming ordinary events into extraordinary experiences with cutting-edge technology and innovative concepts.
        </p>
    </section>
    
    <!-- Programs Grid -->
    <section class="py-16">
        <h2 class="text-4xl font-bold text-center text-white mb-12">OUR PROGRAMS</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php
            $programs = array(
                'gsnl' => array('title' => 'GSNL Game Show Night Live', 'image' => 'gsnl-thumb.jpg'),
                'brunch' => array('title' => 'BADA Brunch', 'image' => 'brunch-thumb.jpg'),
                'hybrid' => array('title' => 'Hybrid Events', 'image' => 'hybrid-thumb.jpg'),
                'b2b' => array('title' => 'B2B Speed Dating', 'image' => 'b2b-thumb.jpg'),
                'funnels' => array('title' => 'Event Funnels Workshop', 'image' => 'funnels-thumb.jpg'),
                'irl-marketing' => array('title' => 'IRL Direct Marketing', 'image' => 'irl-marketing-thumb.jpg'),
                'wedding' => array('title' => 'Wedding Outside the Box', 'image' => 'wedding-thumb.jpg'),
                'watercooler' => array('title' => 'Water Cooler Sports', 'image' => 'watercooler-thumb.jpg'),
            );
            
            foreach ($programs as $slug => $program):
            ?>
            <div class="group cursor-pointer" onclick="window.location='<?php echo home_url("/program/{$slug}"); ?>'">
                <div class="relative overflow-hidden rounded-lg border border-cyan-500/30 bg-black/40 backdrop-blur-sm p-4 h-48 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/programs/<?php echo $program['image']; ?>" 
                         alt="<?php echo $program['title']; ?>" 
                         class="w-full h-32 object-cover rounded mb-4">
                    <h3 class="text-sm font-semibold text-white text-center"><?php echo $program['title']; ?></h3>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>
</div>

<?php get_footer(); ?>
```

### 3. WordPress Functions (functions.php)
```php
<?php
function irl_events_setup() {
    // Theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Custom post types
    register_post_type('service', array(
        'public' => true,
        'label' => 'Services',
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-businessman',
    ));
    
    register_post_type('program', array(
        'public' => true,
        'label' => 'Programs',
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-calendar-alt',
    ));
    
    // Custom fields for services and programs
    add_action('add_meta_boxes', 'irl_events_meta_boxes');
}
add_action('after_setup_theme', 'irl_events_setup');

function irl_events_scripts() {
    wp_enqueue_style('irl-events-style', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0.0');
    wp_enqueue_script('irl-events-script', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'irl_events_scripts');

// Custom meta boxes for additional fields
function irl_events_meta_boxes() {
    add_meta_box('service_details', 'Service Details', 'service_details_callback', 'service');
    add_meta_box('program_details', 'Program Details', 'program_details_callback', 'program');
}

function service_details_callback($post) {
    $description = get_post_meta($post->ID, '_service_description', true);
    $features = get_post_meta($post->ID, '_service_features', true);
    
    echo '<p><label>Description:</label></p>';
    echo '<textarea name="service_description" rows="4" cols="50">' . esc_textarea($description) . '</textarea>';
    echo '<p><label>Features (one per line):</label></p>';
    echo '<textarea name="service_features" rows="6" cols="50">' . esc_textarea($features) . '</textarea>';
}
```

### 4. Converting Tailwind CSS
Create `/assets/css/style.css` with converted styles:

```css
/* Convert the globals.css file to standard CSS */
:root {
  --neon-cyan: #00ffff;
  --neon-purple: #8b5cf6;
  --neon-pink: #ec4899;
  --dark-bg: #0a0a0a;
  --grid-color: #1e293b;
}

body {
  background-color: var(--dark-bg);
  color: white;
  font-family: 'Inter', sans-serif;
}

.neon-text {
  text-shadow: 0 0 10px currentColor;
}

.neon-border {
  border: 1px solid var(--neon-cyan);
  box-shadow: 0 0 10px var(--neon-cyan);
}

/* Add all converted Tailwind classes */
```

## Option 2: Headless WordPress (Advanced)

### Setup
1. Install WordPress as API backend
2. Use WP REST API or GraphQL
3. Keep React frontend, consume WordPress data
4. Deploy React app separately

### Benefits
- Keep existing React codebase
- WordPress admin for content management
- Better performance
- Flexibility in frontend technology

## Option 3: Custom Gutenberg Blocks

Create custom blocks that match your design:

```javascript
// blocks/program-grid/index.js
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType('irl-events/program-grid', {
    title: 'IRL Programs Grid',
    category: 'design',
    edit: function Edit() {
        const blockProps = useBlockProps();
        return (
            <div {...blockProps}>
                <div className="programs-grid">
                    {/* Program grid markup */}
                </div>
            </div>
        );
    },
    save: function Save() {
        const blockProps = useBlockProps.save();
        return (
            <div {...blockProps}>
                <div className="programs-grid">
                    {/* Program grid markup */}
                </div>
            </div>
        );
    },
});
```

## Migration Steps

### 1. Content Migration
1. Create WordPress pages for each main section
2. Add custom post types for Services and Programs
3. Import existing content and images
4. Set up custom fields for additional data

### 2. Design Implementation
1. Convert React components to PHP templates
2. Convert Tailwind CSS to standard CSS
3. Implement WordPress navigation
4. Add responsive menu functionality

### 3. Functionality Migration
1. Contact form → Contact Form 7 or custom form
2. Social media feeds → WordPress plugins or custom implementation
3. Navigation → WordPress menus
4. Search functionality → WordPress built-in search

### 4. Testing & Optimization
1. Test all pages and functionality
2. Optimize for WordPress performance
3. Set up caching
4. Configure SEO settings

## Recommended Plugins

- **Contact Form 7**: For contact forms
- **Advanced Custom Fields (ACF)**: For custom content fields
- **Yoast SEO**: For SEO optimization
- **WP Rocket**: For caching and performance
- **Smash Balloon**: For social media feeds
- **Custom Post Type UI**: For managing custom post types

## Maintenance Considerations

- WordPress security updates
- Plugin compatibility
- Theme updates
- Backup strategy
- Performance monitoring

## Conclusion

Converting to WordPress provides content management capabilities while the headless approach maintains the React experience. Choose the option that best fits your technical requirements and content management needs.

For the IRL Interactive Events brand, I recommend Option 1 (Custom WordPress Theme) for easier content management while maintaining the unique futuristic aesthetic.