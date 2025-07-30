# Step-by-Step Setup Guide: Steps 1-5

## 🎯 **Step 1: WordPress Admin Setup**

### 1.1 Create Pages in WordPress Admin

**Navigate to:** WordPress Admin → Pages → Add New

#### Page 1: Restaurant Start
1. **Title**: `Restaurant Start`
2. **Slug**: `restaurant-start`
3. **Template**: In Page Attributes box, select "Restaurant Start" from dropdown
4. **Click**: "Publish"

#### Page 2: Private Event Start
1. **Title**: `Private Event Start`
2. **Slug**: `private-event-start`
3. **Template**: Select "Private Event Start" from dropdown
4. **Click**: "Publish"

#### Page 3: Workplace Start
1. **Title**: `Workplace Start`
2. **Slug**: `workplace-start`
3. **Template**: Select "Workplace Start" from dropdown
4. **Click**: "Publish"

#### Page 4: Birthday In-A-Box
1. **Title**: `Birthday In-A-Box`
2. **Slug**: `birthday-in-a-box`
3. **Template**: Select "Birthday In-A-Box" from dropdown
4. **Click**: "Publish"

#### Page 5: Reunion In-A-Box
1. **Title**: `Reunion In-A-Box`
2. **Slug**: `reunion-in-a-box`
3. **Template**: Select "Reunion In-A-Box" from dropdown
4. **Click**: "Publish"

### 1.2 Verify Page URLs
After creating, verify these URLs work:
- `yoursite.com/restaurant-start/`
- `yoursite.com/private-event-start/`
- `yoursite.com/workplace-start/`
- `yoursite.com/birthday-in-a-box/`
- `yoursite.com/reunion-in-a-box/`

---

## 🎯 **Step 2: Funnel Flow Testing**

### 2.1 Restaurant Funnel Testing

**Start at:** `yoursite.com/restaurant-start/`

#### Test Path 1: Special Event
1. Click "🎉 Special Event Night"
2. **Expected Result**: Redirects to `/custom-quote/?type=restaurant-special`
3. **Verify**: Page loads with restaurant special event context

#### Test Path 2: Regular Entertainment
1. Click "🎵 Regular Entertainment"
2. **Expected Result**: Redirects to `/custom-quote/?type=restaurant-regular-entertainment`
3. **Verify**: Page loads with regular entertainment context

#### Test Path 3: Corporate Dining
1. Click "🏢 Corporate Dining Event"
2. **Expected Result**: Redirects to `/workplace-start/?focus=restaurant`
3. **Verify**: Workplace start page loads with restaurant focus

#### Test Path 4: Venue Partnership
1. Click "🤝 Venue Partnership"
2. **Expected Result**: Redirects to `/custom-quote/?type=restaurant-venue-partnership`
3. **Verify**: Page loads with venue partnership context

### 2.2 Private Event Funnel Testing

**Start at:** `yoursite.com/private-event-start/`

#### Test Path 1: Wedding
1. Click "💍 Wedding"
2. **Expected Result**: Redirects to `/wedding-in-a-box/`
3. **Verify**: Wedding package page loads

#### Test Path 2: Birthday
1. Click "🎂 Birthday Party"
2. **Expected Result**: Redirects to `/birthday-in-a-box/`
3. **Verify**: Birthday package page loads

#### Test Path 3: Reunion
1. Click "👨‍👩‍👧‍👦 Family/Class Reunion"
2. **Expected Result**: Redirects to `/reunion-in-a-box/`
3. **Verify**: Reunion package page loads

#### Test Path 4: Anniversary
1. Click "💕 Anniversary"
2. **Expected Result**: Redirects to `/custom-quote/?type=private-anniversary`
3. **Verify**: Custom quote page loads with anniversary context

#### Test Path 5: Graduation
1. Click "🎓 Graduation"
2. **Expected Result**: Redirects to `/custom-quote/?type=private-graduation`
3. **Verify**: Custom quote page loads with graduation context

#### Test Path 6: Other
1. Click "🎉 Other Celebration"
2. **Expected Result**: Redirects to `/custom-quote/?type=private-other`
3. **Verify**: Custom quote page loads with other celebration context

### 2.3 Workplace Funnel Testing

**Start at:** `yoursite.com/workplace-start/`

#### Test Path 1: Corporate
1. Click "🏢 Corporate Events"
2. **Expected Result**: Redirects to `/custom-quote/?type=workplace-corporate`
3. **Verify**: Custom quote page loads with corporate context

#### Test Path 2: Healthcare
1. Click "🏥 Healthcare Events"
2. **Expected Result**: Redirects to `/custom-quote/?type=workplace-healthcare`
3. **Verify**: Custom quote page loads with healthcare context

#### Test Path 3: Nonprofit
1. Click "🤲 Nonprofit Events"
2. **Expected Result**: Redirects to `/custom-quote/?type=workplace-nonprofit`
3. **Verify**: Custom quote page loads with nonprofit context

#### Test Path 4: Education
1. Click "🎓 Educational Events"
2. **Expected Result**: Redirects to `/custom-quote/?type=workplace-education`
3. **Verify**: Custom quote page loads with education context

---

## 🎯 **Step 3: JavaScript Functionality Testing**

### 3.1 Open Browser Developer Tools
1. **Chrome/Edge**: Press `F12` or `Ctrl+Shift+I`
2. **Firefox**: Press `F12` or `Ctrl+Shift+I`
3. **Safari**: Press `Cmd+Option+I`

### 3.2 Test Funnel Tracking
1. **Go to**: Any funnel start page (e.g., `/restaurant-start/`)
2. **Click**: Any option button
3. **Check Console**: Look for tracking log like:
   ```
   IRL Event Tracked: {
     eventType: "funnel_selection",
     pageName: "Restaurant Start",
     selection: "special-event",
     timestamp: "2024-01-01T12:00:00.000Z",
     url: "https://yoursite.com/restaurant-start/"
   }
   ```

### 3.3 Test Session Storage
1. **Open Console**: In Developer Tools
2. **Type**: `sessionStorage.getItem('restaurant_type')`
3. **Expected Result**: Should return the selected option (e.g., "special-event")
4. **Test Other Storage**: Try `sessionStorage.getItem('private_event_type')` and `sessionStorage.getItem('workplace_type')`

### 3.4 Test Progress Bars
1. **Visual Check**: Progress bars should show correct percentages:
   - Restaurant Start: 33% (Step 1 of 3)
   - Private Event Start: 25% (Step 1 of 4)
   - Workplace Start: 33% (Step 1 of 3)
2. **CSS Check**: Progress bars should have proper styling and animations

### 3.5 Test Button Interactions
1. **Hover Effects**: Buttons should have hover states
2. **Click Responses**: Buttons should respond immediately to clicks
3. **Loading States**: No delays or freezes during redirects

---

## 🎯 **Step 4: Contact Link Testing**

### 4.1 Test Calendly Links

#### Birthday Consultation Link
1. **Go to**: `/birthday-in-a-box/`
2. **Find**: "📅 Book Birthday Consultation" button
3. **Click**: Should open `https://calendly.com/irl-events/birthday-consultation`
4. **Verify**: Calendly page loads with birthday consultation

#### Reunion Consultation Link
1. **Go to**: `/reunion-in-a-box/`
2. **Find**: "📅 Book Reunion Planning Call" button
3. **Click**: Should open `https://calendly.com/irl-events/reunion-consultation`
4. **Verify**: Calendly page loads with reunion consultation

### 4.2 Test Telegram Bot Link
1. **Find**: Any "✈️ Message us on Telegram" button
2. **Click**: Should open `https://t.me/Irleventsbot`
3. **Verify**: Telegram bot chat opens in new tab

### 4.3 Test Email Links
1. **Find**: Any "✉️ Email Us" button
2. **Click**: Should open email client with:
   - **To**: `jason@irlevents.fun`
   - **Subject**: Appropriate subject (e.g., "Birthday Party Inquiry")
3. **Verify**: Email client opens with correct details

### 4.4 Test Custom Quote Links
1. **Find**: "📝 Get Custom Quote" buttons
2. **Click**: Should redirect to `/custom-quote/` with appropriate parameters
3. **Verify**: Custom quote form loads with correct context

---

## 🎯 **Step 5: Mobile Responsiveness Testing**

### 5.1 Test on Actual Mobile Device
**Don't just use browser dev tools - test on real mobile device**

### 5.2 Test Progress Bars on Mobile
1. **Open**: Any funnel start page on mobile
2. **Check**: Progress bars display correctly
3. **Verify**: Text is readable and properly sized
4. **Test**: Progress indicators are visible and accurate

### 5.3 Test Option Buttons on Mobile
1. **Tap Test**: All buttons should be easy to tap
2. **Size Check**: Buttons should be at least 44px tall for touch
3. **Spacing**: Adequate spacing between buttons
4. **Text**: All text should be readable without zooming

### 5.4 Test Package Pages on Mobile
1. **Hero Sections**: Should display properly on mobile
2. **Feature Grids**: Should stack vertically on mobile
3. **Images**: Should scale appropriately
4. **Text**: Should be readable without horizontal scrolling

### 5.5 Test CTA Buttons on Mobile
1. **Size**: Buttons should be large enough to tap easily
2. **Spacing**: Adequate space between multiple buttons
3. **Loading**: Buttons should respond quickly to taps
4. **Links**: All links should work correctly on mobile

### 5.6 Mobile-Specific Tests
1. **Orientation**: Test in both portrait and landscape
2. **Zoom**: Test with different zoom levels
3. **Scrolling**: Smooth scrolling through all content
4. **Loading**: Pages should load quickly on mobile data

---

## ✅ **Completion Checklist**

**Step 1: WordPress Admin Setup**
- [ ] All 5 pages created with correct titles and slugs
- [ ] All templates assigned correctly
- [ ] All pages published and accessible

**Step 2: Funnel Flow Testing**
- [ ] All 4 restaurant funnel paths work
- [ ] All 6 private event funnel paths work
- [ ] All 4 workplace funnel paths work
- [ ] All redirects go to correct pages with proper parameters

**Step 3: JavaScript Functionality Testing**
- [ ] Console shows tracking logs for all selections
- [ ] Session storage stores user selections
- [ ] Progress bars display correctly
- [ ] All buttons respond properly to interactions

**Step 4: Contact Link Testing**
- [ ] All Calendly links open correctly
- [ ] Telegram bot link opens correctly
- [ ] All email links open with correct subjects
- [ ] All custom quote links work properly

**Step 5: Mobile Responsiveness Testing**
- [ ] All pages display correctly on mobile
- [ ] All buttons are touch-friendly
- [ ] All text is readable without zooming
- [ ] All functionality works on mobile devices

---

## 🚨 **Common Issues & Quick Fixes**

### Templates Not Showing in Dropdown?
- Go to Settings → Permalinks → Save Changes
- Clear any caching plugins
- Check theme is activated

### JavaScript Errors in Console?
- Check jQuery is loaded
- Verify theme.js is enqueued
- Clear browser cache

### Mobile Issues?
- Test on actual device, not just dev tools
- Check viewport meta tag is present
- Verify CSS media queries are working

### Contact Links Not Working?
- Check URLs are correct in theme customizer
- Verify external links open in new tabs
- Test email client is configured

---

**🎉 Once all checkboxes are completed, your funnel system is ready for production!** 