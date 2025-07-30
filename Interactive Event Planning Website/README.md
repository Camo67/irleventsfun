# IRL Interactive Events - WordPress Website

A futuristic neon-themed WordPress website for IRL Interactive Events, featuring interactive event planning experiences and modern contact methods including Telegram bot integration.

## Features

- **Futuristic Neon Design**: Eye-catching cyan and purple gradient aesthetics
- **Interactive Event Planning**: Funnel-based questionnaires for different event types
- **Multiple Contact Methods**: 
  - Email: jason@irlevents.fun
  - Telegram Bot: @Irleventsbot
  - Calendly Integration for booking calls
- **Event Packages**: Wedding In-A-Box, Birthday In-A-Box, Reunion In-A-Box
- **Responsive Design**: Works on all devices
- **Elementor Compatible**: Full theme compatibility with Elementor page builder

## Installation

### Prerequisites
- WordPress 5.0 or higher
- PHP 7.4 or higher
- MySQL 5.7 or higher

### Setup Instructions

1. **Upload Theme Files**
   ```bash
   # Upload the entire wp-content folder to your WordPress installation
   # Or upload just the theme folder to wp-content/themes/
   ```

2. **Configure WordPress**
   - Copy `wp-config.php` to your WordPress root (update database credentials)
   - Install WordPress if not already installed

3. **Activate Theme**
   - Go to WordPress Admin → Appearance → Themes
   - Activate "IRL Interactive Events" theme

4. **Configure Theme Settings**
   - Go to Appearance → Customize
   - Set contact email: jason@irlevents.fun
   - Set Telegram bot: https://t.me/Irleventsbot
   - Set social handle: @irleventsfun
   - Upload your logo

5. **Create Required Pages**
   Create these pages and assign the corresponding templates:
   - Home (set as homepage in Settings → Reading)
   - Restaurant Start
   - Private Event Start  
   - Workplace Start
   - Custom Quote
   - Wedding In-A-Box
   - Birthday In-A-Box
   - Reunion In-A-Box
   - Contact
   - Programs
   - Services
   - Gallery

6. **Install Recommended Plugins**
   - Elementor (for advanced page building)
   - Contact Form 7 (for contact forms)
   - WP Mail SMTP (for email functionality)
   - Yoast SEO (for SEO optimization)

## Theme Structure

```
wp-content/themes/irl-events/
├── style.css                 # Theme information
├── index.php                 # Homepage template
├── header.php                # Site header
├── footer.php                # Site footer
├── functions.php             # Theme functions and features
├── page-*.php               # Custom page templates
├── single-*.php             # Custom post templates
├── archive-*.php            # Archive templates
└── assets/
    ├── css/
    │   └── theme.css         # Main theme styles
    └── js/
        └── theme.js          # Theme JavaScript
```

## Custom Post Types

The theme includes these custom post types:

### Programs (`irl_program`)
- Used for event programs like GSNL, BADA Brunch, etc.
- Fields: Category, Tagline, Featured status
- Categories: Top Programs, Business Programs, Specialty Programs

### Services (`irl_service`)  
- Used for service offerings
- Fields: Price, Icon, Category
- Categories: Restaurant, Private, Corporate, Healthcare

### Quote Requests (`irl_quote`)
- Stores quote requests from contact forms
- Fields: Status, Contact Method, Contact Info, Funnel Data
- Admin-only visibility for managing leads

## Contact Integration

### Email Configuration
- Primary contact: jason@irlevents.fun
- Configure SMTP settings in WP Mail SMTP plugin
- All contact forms send notifications to this address

### Telegram Bot Integration
- Bot: @Irleventsbot
- Token: 8395947276:AAF4rKDcr7DtXxaOoSD-WqfxdFJqnESVNNU
- Used for instant customer support and inquiries

### Calendly Integration
- Used for booking discovery calls and consultations
- Configure URL in theme customizer
- Integrated into all CTA buttons

## Customization

### Theme Customizer Options
Access via Appearance → Customize:

- **Site Identity**: Logo, site title, tagline
- **Social Media**: Social media handle (@irleventsfun)
- **Contact Information**: Email, Telegram bot URL, Calendly URL
- **Telegram Integration**: Admin chat ID for notifications

### Color Scheme
The theme uses CSS custom properties for easy color customization:
- Primary: Cyan (#06b6d4) and Purple (#9333ea) gradients
- Accent: Pink (#ec4899) for highlights
- Background: Black with grid overlay
- Text: White and cyan variations

### Adding New Event Packages
1. Create new page template (e.g., `page-new-package.php`)
2. Add template to `functions.php` in the page templates filter
3. Create page in WordPress admin and assign template
4. Style using existing CSS classes

## Development

### File Structure
- **PHP Templates**: Handle WordPress routing and content
- **CSS**: Single theme.css file with all styles
- **JavaScript**: theme.js handles interactions and analytics
- **Assets**: Images and other media files

### Adding Custom Functionality
1. **New Page Templates**: Create `page-{slug}.php` files
2. **Custom Fields**: Use existing meta box functions as examples  
3. **AJAX Handlers**: Add to functions.php following existing patterns
4. **Styling**: Add to `assets/css/theme.css` using existing variables

## Troubleshooting

### Common Issues

1. **White Screen**: Check error logs, verify file permissions
2. **Images Not Loading**: Check media upload permissions
3. **Contact Forms Not Working**: Verify SMTP configuration
4. **Styling Issues**: Clear any caching plugins

### Debug Mode
Enable in wp-config.php:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Security

- Keep WordPress and plugins updated
- Use strong passwords
- Install security plugin (Wordfence recommended)
- Regular backups recommended
- Secure the Telegram bot token

## Support

For theme support and customization:
- Email: jason@irlevents.fun  
- Telegram: @Irleventsbot

## License

This theme is proprietary software developed for IRL Interactive Events.

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**WordPress Compatibility**: 5.0+  
**PHP Compatibility**: 7.4+