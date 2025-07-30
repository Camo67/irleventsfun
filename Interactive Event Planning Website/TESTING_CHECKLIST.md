# IRL Events WordPress Theme - Testing Checklist

## ✅ Template Creation Complete
All 5 missing templates have been created:
- [x] `page-restaurant-start.php`
- [x] `page-private-event-start.php`
- [x] `page-workplace-start.php`
- [x] `page-birthday-in-a-box.php`
- [x] `page-reunion-in-a-box.php`

## 🚀 Pre-Launch Testing Checklist

### 1. WordPress Admin Setup
- [ ] **Create Pages**: Go to Pages → Add New
  - [ ] Restaurant Start (URL: `/restaurant-start/`)
  - [ ] Private Event Start (URL: `/private-event-start/`)
  - [ ] Workplace Start (URL: `/workplace-start/`)
  - [ ] Birthday In-A-Box (URL: `/birthday-in-a-box/`)
  - [ ] Reunion In-A-Box (URL: `/reunion-in-a-box/`)

- [ ] **Assign Templates**: For each page, select the correct template from Page Attributes

### 2. Funnel Flow Testing
Test each funnel path to ensure proper redirects:

#### Restaurant Funnel
- [ ] Restaurant Start → Special Event → Custom Quote
- [ ] Restaurant Start → Regular Entertainment → Custom Quote
- [ ] Restaurant Start → Corporate Dining → Workplace Start
- [ ] Restaurant Start → Venue Partnership → Custom Quote

#### Private Event Funnel
- [ ] Private Event Start → Wedding → Wedding In-A-Box
- [ ] Private Event Start → Birthday → Birthday In-A-Box
- [ ] Private Event Start → Reunion → Reunion In-A-Box
- [ ] Private Event Start → Anniversary → Custom Quote
- [ ] Private Event Start → Graduation → Custom Quote
- [ ] Private Event Start → Other → Custom Quote

#### Workplace Funnel
- [ ] Workplace Start → Corporate → Custom Quote
- [ ] Workplace Start → Healthcare → Custom Quote
- [ ] Workplace Start → Nonprofit → Custom Quote
- [ ] Workplace Start → Education → Custom Quote

### 3. JavaScript Functionality Testing
- [ ] **Funnel Tracking**: Check browser console for tracking logs
- [ ] **Session Storage**: Verify selections are stored in sessionStorage
- [ ] **Progress Bars**: Ensure progress indicators work correctly
- [ ] **Button Interactions**: Test all option buttons respond properly

### 4. Contact Link Testing
- [ ] **Calendly Links**:
  - [ ] Birthday consultation link works
  - [ ] Reunion consultation link works
  - [ ] Wedding consultation link works (if exists)
- [ ] **Telegram Bot**: `https://t.me/Irleventsbot` opens correctly
- [ ] **Email Links**: All mailto links work with proper subjects

### 5. Mobile Responsiveness Testing
- [ ] **Progress Bars**: Display correctly on mobile
- [ ] **Option Buttons**: Touch-friendly and readable
- [ ] **Package Pages**: Hero sections and features display properly
- [ ] **CTA Buttons**: Easy to tap on mobile devices

### 6. Cross-Browser Testing
- [ ] **Chrome**: All functionality works
- [ ] **Firefox**: All functionality works
- [ ] **Safari**: All functionality works
- [ ] **Edge**: All functionality works

### 7. Analytics Integration Testing
- [ ] **Google Analytics**: Events are being tracked (if GA is installed)
- [ ] **Facebook Pixel**: Events are being tracked (if FB Pixel is installed)
- [ ] **Local Storage**: Tracking data is being stored
- [ ] **Server Logging**: AJAX tracking requests are working

### 8. Performance Testing
- [ ] **Page Load Speed**: All pages load within 3 seconds
- [ ] **JavaScript Errors**: No console errors
- [ ] **CSS Loading**: All styles load properly
- [ ] **Image Optimization**: All images are optimized

### 9. SEO Testing
- [ ] **Meta Titles**: Each page has unique, descriptive titles
- [ ] **Meta Descriptions**: Each page has unique descriptions
- [ ] **Structured Data**: Schema markup is present (if applicable)
- [ ] **URL Structure**: Clean, SEO-friendly URLs

### 10. Security Testing
- [ ] **Nonce Verification**: AJAX requests are properly secured
- [ ] **Input Sanitization**: All user inputs are sanitized
- [ ] **XSS Prevention**: No potential XSS vulnerabilities
- [ ] **CSRF Protection**: Forms are protected against CSRF attacks

## 🛠️ Customization Options

### Theme Customizer Settings
- [ ] **Social Media Handle**: Set to `@irleventsfun`
- [ ] **Contact Email**: Set to `jason@irlevents.fun`
- [ ] **Telegram Bot URL**: Set to `https://t.me/Irleventsbot`
- [ ] **Calendly URL**: Set to `https://calendly.com/irl-events`

### Optional Enhancements
- [ ] **Google Analytics**: Add GA4 tracking code
- [ ] **Facebook Pixel**: Add FB Pixel for retargeting
- [ ] **Telegram Admin Chat ID**: Set up for conversion notifications
- [ ] **Custom CSS**: Add any brand-specific styling

## 📊 Analytics Setup

### Tracking Events to Monitor
- [ ] **Funnel Entry**: Users starting each funnel
- [ ] **Funnel Selection**: User choices at each step
- [ ] **Funnel Conversion**: Users reaching quote/contact pages
- [ ] **Package Page Views**: Views of birthday/reunion/wedding packages
- [ ] **Contact Form Submissions**: Quote requests and inquiries

### Key Metrics to Track
- [ ] **Conversion Rate**: Funnel completion percentage
- [ ] **Drop-off Points**: Where users leave the funnel
- [ ] **Popular Choices**: Most selected options
- [ ] **Contact Method Preference**: Which contact methods are used most

## 🚨 Common Issues & Solutions

### Issue: Templates Not Showing in Page Attributes
**Solution**: Clear WordPress cache and refresh permalinks

### Issue: JavaScript Errors in Console
**Solution**: Check that jQuery is loaded and theme.js is enqueued properly

### Issue: Progress Bars Not Styling
**Solution**: Verify theme.css is loading and contains funnel styles

### Issue: AJAX Tracking Not Working
**Solution**: Check that nonce is being generated and AJAX URL is correct

### Issue: Mobile Menu Not Working
**Solution**: Ensure mobile menu HTML structure matches JavaScript selectors

## 🎯 Launch Checklist

### Final Pre-Launch Steps
- [ ] **Backup**: Create full site backup
- [ ] **Test in Staging**: Verify everything works in staging environment
- [ ] **Performance Check**: Run speed tests on all pages
- [ ] **Mobile Test**: Test on actual mobile devices
- [ ] **Contact Forms**: Test all contact methods work
- [ ] **Analytics**: Verify tracking is working
- [ ] **SEO**: Run SEO audit on all pages

### Post-Launch Monitoring
- [ ] **Monitor Analytics**: Check for tracking data
- [ ] **Monitor Errors**: Watch for JavaScript or PHP errors
- [ ] **Monitor Conversions**: Track funnel completion rates
- [ ] **Monitor Performance**: Watch page load times
- [ ] **Monitor User Feedback**: Collect user experience feedback

## 🎉 Success Criteria

Your WordPress theme is ready for launch when:
- [ ] All funnel flows work correctly
- [ ] All contact methods are functional
- [ ] Mobile experience is smooth
- [ ] Analytics tracking is working
- [ ] No JavaScript errors in console
- [ ] All pages load quickly
- [ ] SEO elements are in place

---

**Need Help?** If you encounter any issues during testing, check the browser console for JavaScript errors and the WordPress debug log for PHP errors. Most issues can be resolved by clearing caches and checking file permissions. 