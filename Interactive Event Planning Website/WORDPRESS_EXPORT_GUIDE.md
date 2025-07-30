# WordPress Export Guide for IRL Interactive Events

## Overview
This guide will help you export your React application to a fully functional WordPress website with Elementor compatibility.

## Prerequisites
- WordPress hosting environment (local or live server)
- PHP 7.4+ and MySQL 5.7+
- FTP/SFTP access to your server
- WordPress admin access

## Step 1: Complete the WordPress Theme

### 1.1 Create Missing Page Templates

You need to create WordPress page templates for each React component. Here are the missing templates:

```bash
# Create these files in wp-content/themes/irl-events/
- page-restaurant-start.php
- page-private-event-start.php  
- page-workplace-start.php
- page-custom-quote.php
- page-birthday-in-a-box.php
- page-reunion-in-a-box.php
- page-programs.php
- page-services.php
- page-gallery.php
- single-irl_program.php
```

### 1.2 Update style.css with Theme Information

Create/update `wp-content/themes/irl-events/style.css`:

```css
/*
Theme Name: IRL Interactive Events
Description: Futuristic neon event planning website with interactive features
Author: IRL Interactive Events
Version: 1.0.0
License: GPL v2 or later
Text Domain: irl-events
*/

/* This file is just for WordPress theme recognition */
/* Main styles are in assets/css/theme.css */
```

### 1.3 Add Theme Screenshot

Create a 1200x900px screenshot of your homepage and save as:
`wp-content/themes/irl-events/screenshot.png`

## Step 2: Set Up WordPress Environment

### 2.1 Install WordPress

1. **Download WordPress** from wordpress.org
2. **Extract** to your server's document root
3. **Create database** for WordPress
4. **Run WordPress installation** via browser

### 2.2 Configure wp-config.php

Update your `wp-config.php` with database details:

```php
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_username');
define('DB_PASSWORD', 'your_password');
define('DB_HOST', 'localhost');

// Add these for development
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);

// Security keys (generate at https://api.wordpress.org/secret-key/1.1/salt/)
define('AUTH_KEY', 'your-unique-phrase');
// ... add all security keys
```

### 2.3 Upload Theme Files

1. **Create theme directory**: `wp-content/themes/irl-events/`
2. **Upload all theme files** from your local `wp-content/themes/irl-events/` directory
3. **Set proper file permissions**:
   - Folders: 755
   - Files: 644

## Step 3: Install Required Plugins

### 3.1 Essential Plugins

Install these plugins via WordPress Admin → Plugins → Add New:

1. **Elementor** (free version)
2. **Elementor Pro** (if using pro features)
3. **Contact Form 7** (for contact forms)
4. **WP Mail SMTP** (for email functionality)
5. **Yoast SEO** (for SEO optimization)

### 3.2 Optional Plugins

- **WP Rocket** (caching)
- **Wordfence** (security)
- **UpdraftPlus** (backups)

## Step 4: Theme Activation and Setup

### 4.1 Activate Theme

1. Go to **WordPress Admin → Appearance → Themes**
2. Find "IRL Interactive Events" theme
3. Click **Activate**

### 4.2 Configure Theme Settings

1. Go to **Appearance → Customize**
2. Configure:
   - **Site Identity**: Upload your logo
   - **Contact Information**: Set email to jason@irlevents.fun
   - **Social Media**: Set handle to @irleventsfun
   - **Telegram Integration**: Set bot URL

### 4.3 Create WordPress Pages

Create these pages in **WordPress Admin → Pages → Add New**:

| Page Title | Template | Slug |
|------------|----------|------|
| Home | Default | home |
| Restaurant Start | Restaurant Start | restaurant-start |
| Private Event Start | Private Event Start | private-event-start |
| Workplace Start | Workplace Start | workplace-start |
| Custom Quote | Custom Quote | custom-quote |
| Wedding In-A-Box | Wedding In-A-Box | wedding-in-a-box |
| Birthday In-A-Box | Birthday In-A-Box | birthday-in-a-box |
| Reunion In-A-Box | Reunion In-A-Box | reunion-in-a-box |
| Contact | Contact Page | contact |
| Programs | Programs | programs |
| Services | Services | services |
| Gallery | Gallery | gallery |

### 4.4 Set Homepage

1. Go to **Settings → Reading**
2. Select **A static page**
3. Choose your "Home" page as **Homepage**

## Step 5: Import Content

### 5.1 Create Sample Programs

Go to **WordPress Admin → Programs → Add New** and create:

1. **GSNL Game Show Night Live**
   - Category: Top Programs
   - Tagline: "FUN | FUN | FANTASTIC PRIZES"
   - Featured: Yes

2. **BADA Brunch**
   - Category: Top Programs  
   - Tagline: "THEMED EVENTS & PRIVATE PARTIES"

3. **Hybrid Events**
   - Category: Top Programs
   - Tagline: "NOT JUST A SHOW. AN EXPERIENCE."

4. **Water Cooler Sports**
   - Category: Top Programs
   - Tagline: "CORPORATE GAME SHOWS & TEAM BUILDING"

5. **B2B Speed Dating**
   - Category: Business Programs
   - Tagline: "BUSINESS NETWORKING EVENTS"

6. **Event Funnels Workshop**
   - Category: Business Programs
   - Tagline: "LEARN TO BUILD SUCCESSFUL EVENT STRATEGIES"

7. **IRL Direct Marketing**
   - Category: Specialty Programs
   - Tagline: "IN-PERSON MARKETING EXPERIENCES"

8. **Wedding Outside the Box**
   - Category: Specialty Programs
   - Tagline: "ALL-IN-ONE WEDDING PRODUCTION"

### 5.2 Upload Images

Upload your program thumbnails to **Media Library** and assign to programs.

### 5.3 Create Services

Create services for each category:
- Corporate Healthcare
- Restaurant Venue  
- Private Events

## Step 6: Configure Email and Contact Forms

### 6.1 Set Up WP Mail SMTP

1. Install **WP Mail SMTP** plugin
2. Configure with your email provider
3. Test email sending

### 6.2 Configure Contact Forms

1. Create contact forms using **Contact Form 7**
2. Add forms to contact page template
3. Set up email notifications to jason@irlevents.fun

## Step 7: Telegram Bot Integration

### 7.1 Set Up Telegram Webhook (Optional)

For advanced Telegram integration:

```php
// Add to functions.php
function irl_telegram_webhook() {
    $bot_token = '8395947276:AAF4rKDcr7DtXxaOoSD-WqfxdFJqnESVNNU';
    $webhook_url = home_url('/wp-json/irl/v1/telegram-webhook');
    
    $response = wp_remote_post("https://api.telegram.org/bot{$bot_token}/setWebhook", array(
        'body' => array('url' => $webhook_url)
    ));
}
```

## Step 8: SEO and Performance

### 8.1 Configure Yoast SEO

1. Run **Yoast SEO Configuration Wizard**
2. Set up **XML sitemaps**
3. Configure **social media** integration
4. Set up **Google Analytics** (optional)

### 8.2 Optimize Performance

1. Install caching plugin (WP Rocket recommended)
2. Optimize images
3. Enable GZIP compression
4. Set up CDN (optional)

## Step 9: Testing and Launch

### 9.1 Test All Functionality

- [ ] Navigation works correctly
- [ ] Contact forms submit properly
- [ ] Email notifications work
- [ ] Telegram bot links work
- [ ] All pages load correctly
- [ ] Mobile responsiveness
- [ ] Funnel flows work

### 9.2 Launch Checklist

- [ ] SSL certificate installed
- [ ] Domain configured
- [ ] Email working (jason@irlevents.fun)
- [ ] Backup system in place
- [ ] Security plugins configured
- [ ] Analytics tracking set up
- [ ] Search engine indexing enabled

## Step 10: Elementor Integration (Optional)

### 10.1 Convert Pages to Elementor

1. Edit any page
2. Click **Edit with Elementor**
3. Rebuild page using Elementor widgets
4. Create custom widgets for funnel functionality

### 10.2 Create Elementor Templates

1. Go to **Templates → Theme Builder**
2. Create templates for:
   - Header
   - Footer  
   - Single Program
   - Archive pages

## File Transfer Methods

### Method 1: FTP Upload

1. Use FTP client (FileZilla, WinSCP)
2. Upload entire `wp-content/themes/irl-events/` folder
3. Set proper permissions

### Method 2: ZIP Upload

1. Create ZIP of theme folder
2. Go to **Appearance → Themes → Add New → Upload Theme**
3. Upload ZIP file
4. Activate theme

### Method 3: WordPress Development Environment

For local development:

1. Use **Local by Flywheel** or **XAMPP**
2. Set up local WordPress
3. Develop and test locally
4. Export/import to live server

## Troubleshooting

### Common Issues

1. **White Screen of Death**
   - Check error logs
   - Verify PHP syntax
   - Check file permissions

2. **Images Not Loading**
   - Verify image paths
   - Check media uploads folder permissions
   - Update image URLs in database

3. **Contact Forms Not Working**
   - Check email configuration
   - Verify SMTP settings
   - Test with different email providers

4. **Styling Issues**
   - Clear cache
   - Check CSS file loading
   - Verify theme.css path

### Debug Mode

Enable WordPress debug mode:

```php
// In wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Support Resources

- **WordPress Codex**: https://codex.wordpress.org/
- **Elementor Documentation**: https://elementor.com/help/
- **Theme Development**: https://developer.wordpress.org/themes/

## Security Considerations

1. **Keep WordPress Updated**
2. **Use Strong Passwords**
3. **Install Security Plugin**
4. **Regular Backups**
5. **Limit Login Attempts**
6. **Hide wp-admin from unauthorized access**

## Final Notes

- Keep the Telegram bot token secure
- Test all contact methods before launch
- Set up regular backups
- Monitor site performance
- Update content regularly

Your WordPress theme is now ready for deployment! The theme maintains all the futuristic neon aesthetics and functionality from your React application while being fully WordPress-compatible.