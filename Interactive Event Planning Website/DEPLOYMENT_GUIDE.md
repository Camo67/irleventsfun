# IRL Interactive Events Website - Deployment Guide

## Quick Start Deployment

### 1. Vercel (Recommended - Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Link to existing project or create new
# - Choose framework: React
# - Build command: npm run build
# - Output directory: dist
```

### 2. Netlify
```bash
# Build the project
npm install
npm run build

# Option A: Drag & Drop
# 1. Go to https://app.netlify.com
# 2. Drag the 'dist' folder to deploy

# Option B: Git Integration
# 1. Push code to GitHub
# 2. Connect repository in Netlify
# 3. Build settings:
#    - Build command: npm run build
#    - Publish directory: dist
```

### 3. AWS Amplify
```bash
# 1. Push code to GitHub
# 2. Go to AWS Amplify Console
# 3. Connect repository
# 4. Build settings:
#    - Build command: npm run build
#    - Output directory: dist
```

## Custom Server Deployment

### Apache (.htaccess)
Create `.htaccess` in your web root:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

### Nginx
Add to your nginx config:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Environment Variables (Optional)

If using Supabase backend features, add these environment variables:

### Vercel
```bash
vercel env add SUPABASE_URL
vercel env add SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
```

### Netlify
Add in Site Settings > Environment Variables:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Asset Management

### Required Assets
Make sure these assets are in your deployment:
- Background image: Grid pattern background
- Logo: IRL Interactive Events logo
- Program thumbnails (8 images)

### Asset Optimization
Before deployment:
1. Optimize images (use tools like TinyPNG)
2. Ensure proper image formats (WebP for modern browsers)
3. Check file sizes and loading performance

## Domain Configuration

### Custom Domain (Vercel)
```bash
vercel domains add yourdomain.com
```

### Custom Domain (Netlify)
1. Go to Site Settings > Domain management
2. Add custom domain
3. Configure DNS records as instructed

## Performance Optimization

### Build Optimization
```bash
# Enable production build optimizations
npm run build

# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer
```

### CDN Configuration
- Enable automatic CDN on Vercel/Netlify
- Configure proper caching headers
- Use image optimization services

## SSL/Security

### Automatic SSL
Both Vercel and Netlify provide automatic SSL certificates.

### Security Headers
Add security headers in your deployment platform:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000
```

## Monitoring & Analytics

### Performance Monitoring
- Enable Web Vitals tracking
- Set up error monitoring (Sentry, LogRocket)
- Configure analytics (Google Analytics, Plausible)

### Social Media Integration
The gallery page includes:
- TikTok embed for @irleventsfun
- Instagram embed for @irleventsfun

Ensure these load properly in production.

## Troubleshooting

### Common Issues

1. **404 on Direct URLs**
   - Ensure SPA redirect rules are configured
   - Check `.htaccess` or nginx configuration

2. **Images Not Loading**
   - Verify asset paths in production
   - Check CORS headers if using external CDN

3. **Environment Variables**
   - Ensure all required env vars are set
   - Check variable names match exactly

4. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs for specific errors

### Getting Help
- Check deployment platform documentation
- Review build logs for detailed error information
- Test locally with `npm run build && npm run preview`

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor for security vulnerabilities
- Update social media embeds as needed
- Refresh content and program information

### Backup Strategy
- Keep source code in version control (GitHub)
- Export configuration settings
- Document any custom deployment configurations

---

This deployment guide covers the most common deployment scenarios for the IRL Interactive Events website. Choose the option that best fits your technical requirements and hosting preferences.