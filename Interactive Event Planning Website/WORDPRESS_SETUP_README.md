# IRL Interactive Events WordPress Site

## Overview

This is a complete WordPress website for IRL Interactive Events, featuring a futuristic neon-themed design with custom post types for services and programs, contact form functionality, and a responsive mobile-first approach.

## Features

- **Futuristic Neon Design**: Dark theme with cyan, purple, and pink neon accents
- **Custom Post Types**: Services and Programs with custom fields
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Form**: AJAX-powered contact form with email functionality
- **Interactive Elements**: Hover effects, animations, and smooth scrolling
- **SEO Optimized**: Clean URLs, meta tags, and structured data ready
- **Social Media Integration**: Instagram, TikTok, and Facebook links
- **Performance Optimized**: Minified assets and optimized images

## Installation Guide

### Prerequisites

- Web server (Apache/Nginx)
- PHP 8.0 or higher
- MySQL 5.7 or higher
- WordPress 6.0 or higher

### Step 1: Database Setup

1. Create a new MySQL database:
```sql
CREATE DATABASE irl_events_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'irl_events_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON irl_events_db.* TO 'irl_events_user'@'localhost';
FLUSH PRIVILEGES;
```

2. Update the database credentials in `wp-config.php`:
```php
define( 'DB_NAME', 'irl_events_db' );
define( 'DB_USER', 'irl_events_user' );
define( 'DB_PASSWORD', 'your_secure_password' );
define( 'DB_HOST', 'localhost' );
```

### Step 2: WordPress Installation

1. Download the latest WordPress from https://wordpress.org/download/
2. Extract WordPress files to your web server directory
3. Copy the provided `wp-config.php` to the WordPress root directory
4. Generate new authentication salts at https://api.wordpress.org/secret-key/1.1/salt/
5. Replace the placeholder salts in `wp-config.php`

### Step 3: Theme Installation

1. Copy the `wp-content/themes/irl-events/` directory to your WordPress themes folder
2. Log into WordPress Admin Dashboard
3. Navigate to **Appearance → Themes**
4. Activate the "IRL Interactive Events" theme

### Step 4: Required Plugins

Install and activate the following plugins:

#### Essential Plugins:
- **Advanced Custom Fields (ACF)** - For custom post type fields
- **Contact Form 7** - Alternative contact form solution
- **Yoast SEO** - SEO optimization
- **WP Rocket** or **W3 Total Cache** - Performance optimization

#### Optional Plugins:
- **Smush** - Image optimization
- **Wordfence Security** - Security enhancement
- **UpdraftPlus** - Backup solution

### Step 5: Initial Configuration

1. **Permalinks**: Go to **Settings → Permalinks** and select "Post name"

2. **Custom Logo**: 
   - Go to **Appearance → Customize → Site Identity**
   - Upload the IRL Interactive Events logo

3. **Contact Information**:
   - Go to **Appearance → Customize**
   - Configure contact details in the "Contact Information" section

4. **Social Media**:
   - Configure social media handles in the customizer

### Step 6: Content Setup

#### Create Pages:
1. **Contact Page**: Create a new page titled "Contact" with slug "contact"
2. **Privacy Policy**: Create privacy policy page
3. **Terms of Service**: Create terms of service page

#### Add Services:
1. Go to **Services → Add New**
2. Create services for:
   - Corporate Healthcare
   - Restaurant Venue  
   - Private Event

#### Add Programs:
1. Go to **Programs → Add New**
2. Create programs for each category:
   - **Top Programs**: GSNL, BADA Brunch, Hybrid Events, Water Cooler Sports
   - **Business Programs**: B2B Speed Dating, Event Funnels Workshop
   - **Specialty Programs**: IRL Direct Marketing, Wedding Outside the Box

### Step 7: Menu Configuration

1. Go to **Appearance → Menus**
2. Create a "Main Menu" with:
   - Home
   - Services
   - Programs
   - Gallery
   - Contact
3. Assign to "Primary Menu" location

## File Structure

```
/wp-content/themes/irl-events/
├── functions.php              # Theme functions and hooks
├── style.css                  # Theme information
├── header.php                 # Header template
├── footer.php                 # Footer template
├── index.php                  # Homepage/blog template
├── page-contact.php          # Contact page template
├── archive-irl_service.php   # Services archive
├── single-irl_service.php    # Single service template
├── archive-irl_program.php   # Programs archive
├── single-irl_program.php    # Single program template
└── assets/
    ├── css/
    │   └── theme.css         # Custom theme styles
    └── js/
        └── theme.js          # Theme JavaScript
```

## Customization Guide

### Colors

The theme uses CSS custom properties for easy color customization:

```css
:root {
  --irl-cyan: #00FFFF;
  --irl-purple: #8B5CF6;
  --irl-pink: #EC4899;
  --irl-blue: #3B82F6;
  --irl-green: #10B981;
}
```

### Typography

The theme uses:
- **Primary Font**: Inter (Google Fonts)
- **Display Font**: Orbitron (Google Fonts) for headings
- **Base Font Size**: 16px

### Custom Fields

Services have these ACF fields:
- `service_icon` - Image field for service icon
- `service_color` - Color picker for theme color
- `service_features` - Repeater field for features list

Programs have these ACF fields:
- `program_tagline` - Text field for tagline
- `program_category` - Select field (top/business/specialty)
- `program_features` - Repeater field for features list

## Performance Optimization

### Recommended Settings:

1. **Caching**: Enable caching plugin (WP Rocket recommended)
2. **Image Optimization**: Use WebP format when possible
3. **CDN**: Consider using a CDN for assets
4. **Database**: Regular database cleanup and optimization

### Performance Checklist:
- [ ] Enable caching
- [ ] Optimize images
- [ ] Minify CSS/JS
- [ ] Enable GZIP compression
- [ ] Use CDN
- [ ] Optimize database

## SEO Configuration

### Yoast SEO Settings:
1. Set focus keywords for each page
2. Configure meta descriptions
3. Set up XML sitemaps
4. Configure social media integration

### Schema Markup:
The theme is ready for structured data markup for:
- Organization information
- Events
- Services
- Contact information

## Security Best Practices

### Implemented Security Features:
- File editing disabled in admin
- Debug mode disabled in production
- Secure authentication salts
- Database prefix changed from default

### Additional Recommendations:
1. Install Wordfence or similar security plugin
2. Enable two-factor authentication
3. Regular security updates
4. Strong passwords for all users
5. Regular backups

## Backup Strategy

### What to Backup:
- WordPress database
- `/wp-content/` directory
- `wp-config.php` file
- `.htaccess` file

### Recommended Backup Schedule:
- **Database**: Daily
- **Files**: Weekly
- **Full Site**: Monthly

## Troubleshooting

### Common Issues:

**1. Contact Form Not Working**
- Check that AJAX URLs are correct
- Verify nonce security
- Test email server configuration

**2. Images Not Displaying**
- Check file permissions
- Verify image paths
- Test image optimization settings

**3. Animations Not Working**
- Check JavaScript console for errors
- Verify jQuery is loading
- Test on different browsers

**4. Mobile Menu Issues**
- Clear cache
- Check JavaScript functionality
- Test viewport meta tag

### Debug Mode:
Enable debug mode in `wp-config.php` for development:
```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', true );
```

## Maintenance Schedule

### Daily:
- [ ] Monitor site performance
- [ ] Check for broken links
- [ ] Review contact form submissions

### Weekly:
- [ ] Update plugins
- [ ] Check security logs
- [ ] Review analytics data

### Monthly:
- [ ] WordPress core updates
- [ ] Full site backup
- [ ] Performance audit
- [ ] Content review

## Support and Updates

### Theme Updates:
- Version control recommended (Git)
- Test updates in staging environment
- Document any customizations

### Getting Help:
1. Check WordPress Codex documentation
2. Review theme documentation
3. WordPress community forums
4. Plugin-specific support channels

## Production Deployment Checklist

Before going live:

- [ ] SSL certificate installed
- [ ] Domain configured correctly
- [ ] Database optimized
- [ ] Caching enabled
- [ ] Security plugins activated
- [ ] Backup system configured
- [ ] Analytics tracking setup
- [ ] Contact forms tested
- [ ] Mobile responsiveness verified
- [ ] Performance tested
- [ ] SEO configuration complete
- [ ] Social media links verified

## Environment-Specific Configurations

### Development:
```php
define( 'WP_DEBUG', true );
define( 'SCRIPT_DEBUG', true );
define( 'SAVEQUERIES', true );
```

### Staging:
```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
```

### Production:
```php
define( 'WP_DEBUG', false );
define( 'DISALLOW_FILE_EDIT', true );
define( 'FORCE_SSL_ADMIN', true );
```

## Additional Resources

- **WordPress Codex**: https://codex.wordpress.org/
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **Advanced Custom Fields Documentation**: https://www.advancedcustomfields.com/resources/
- **Contact Form 7 Documentation**: https://contactform7.com/docs/

---

**Version**: 1.0.0  
**Last Updated**: <?php echo date('Y-m-d'); ?>  
**Minimum WordPress Version**: 6.0  
**Minimum PHP Version**: 8.0  

For technical support or questions about this WordPress theme, please refer to the documentation above or contact the development team.