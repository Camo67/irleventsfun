# Quick WordPress Deployment Checklist

## Pre-Deployment
- [ ] WordPress hosting environment ready
- [ ] Database created and credentials available
- [ ] Domain/subdomain configured
- [ ] SSL certificate installed

## Theme Upload
- [ ] Upload entire `wp-content/themes/irl-events/` folder to server
- [ ] Set file permissions (folders: 755, files: 644)
- [ ] Verify all PHP files uploaded correctly

## WordPress Setup
- [ ] Install WordPress core
- [ ] Configure wp-config.php with database details
- [ ] Run WordPress installation wizard
- [ ] Create admin account

## Theme Activation
- [ ] Go to Appearance → Themes
- [ ] Activate "IRL Interactive Events" theme
- [ ] Upload logo in Customizer
- [ ] Configure contact information (jason@irlevents.fun)
- [ ] Set Telegram bot URL (https://t.me/Irleventsbot)
- [ ] Set social handle (@irleventsfun)

## Essential Plugins
- [ ] Install Elementor
- [ ] Install Contact Form 7
- [ ] Install WP Mail SMTP
- [ ] Install Yoast SEO
- [ ] Configure email settings

## Create Pages
Create these pages and assign correct templates:

| Page Title | Template | URL Slug |
|------------|----------|----------|
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

## Content Setup
- [ ] Create 8 program posts with thumbnails
- [ ] Create service posts for each category
- [ ] Upload all images to Media Library
- [ ] Set featured images for all posts

## Homepage Configuration
- [ ] Go to Settings → Reading
- [ ] Select "A static page"
- [ ] Set "Home" page as homepage

## Menu Setup
- [ ] Go to Appearance → Menus
- [ ] Create primary menu with all pages
- [ ] Assign to Primary Menu location

## Email Configuration
- [ ] Configure WP Mail SMTP plugin
- [ ] Test email sending to jason@irlevents.fun
- [ ] Verify contact form submissions work
- [ ] Test quote request notifications

## Final Testing
- [ ] Test all navigation links
- [ ] Verify contact forms submit correctly
- [ ] Check Telegram bot link works
- [ ] Test on mobile devices
- [ ] Verify email notifications
- [ ] Check all images load correctly
- [ ] Test funnel flows
- [ ] Verify CTAs work (calendly, telegram, email)

## SEO & Performance
- [ ] Configure Yoast SEO
- [ ] Submit sitemap to Google
- [ ] Install caching plugin
- [ ] Optimize images
- [ ] Test page speed

## Security
- [ ] Install security plugin (Wordfence)
- [ ] Set up regular backups
- [ ] Update all plugins and themes
- [ ] Configure login security

## Launch
- [ ] Final content review
- [ ] Check all contact information
- [ ] Verify social media links
- [ ] Test from different devices/browsers
- [ ] Monitor error logs
- [ ] Set up Google Analytics (optional)

## Post-Launch
- [ ] Monitor email delivery
- [ ] Check contact form submissions
- [ ] Review site performance
- [ ] Set up monitoring/uptime alerts
- [ ] Schedule regular backups
- [ ] Plan content updates

## Emergency Contacts
- **Hosting Support**: [Your hosting provider]
- **Domain Registrar**: [Your domain provider]
- **Email Support**: jason@irlevents.fun
- **Telegram Bot**: https://t.me/Irleventsbot

## Important URLs to Bookmark
- WordPress Admin: yoursite.com/wp-admin
- Theme Customizer: yoursite.com/wp-admin/customize.php
- Plugins: yoursite.com/wp-admin/plugins.php
- Pages: yoursite.com/wp-admin/edit.php?post_type=page
- Programs: yoursite.com/wp-admin/edit.php?post_type=irl_program

## Files to Keep Safe
- wp-config.php (contains database credentials)
- Theme files (entire irl-events folder)
- Uploaded images and media
- Database backup
- SSL certificates

Your WordPress site is ready to launch! 🚀