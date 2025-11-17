# Deploying to Netlify

This guide will walk you through deploying your ModularBox container configurator to Netlify.

## Prerequisites

- GitHub account with your code pushed (✅ Already done!)
- Netlify account (free tier is sufficient)

## Method 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://www.netlify.com/)
2. Click "Sign up" and choose "GitHub" to sign up
3. Authorize Netlify to access your GitHub account

### Step 2: Import Your Project
1. Once logged in, click **"Add new site"** → **"Import an existing project"**
2. Choose **"GitHub"** as your Git provider
3. Search for and select your repository: `stefan123292/containers`
4. Authorize Netlify to access the repository if prompted

### Step 3: Configure Build Settings
Netlify should auto-detect Next.js, but verify these settings:

```
Build command: npm run build
Publish directory: .next
```

### Step 4: Environment Variables (Optional)
Click **"Add environment variables"** if you need to set any:

```
NEXT_PUBLIC_SITE_URL=https://your-site-name.netlify.app
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_CONTACT_EMAIL=info@containers.com
```

### Step 5: Deploy!
1. Click **"Deploy site"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://[random-name].netlify.app`

### Step 6: Customize Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change from random name to something like: `modularbox-containers`
4. Your site will now be: `https://modularbox-containers.netlify.app`

---

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```
This will open a browser window to authorize.

### Step 3: Initialize Netlify
```bash
netlify init
```

Follow the prompts:
- **What would you like to do?** → "Create & configure a new site"
- **Team:** Choose your team
- **Site name:** Choose a unique name (or leave blank for random)
- **Build command:** `npm run build`
- **Publish directory:** `.next`

### Step 4: Deploy
```bash
netlify deploy --prod
```

---

## Method 3: Manual Drag & Drop (Not Recommended for Next.js)

This method doesn't work well with Next.js serverless functions. Use Method 1 or 2 instead.

---

## Post-Deployment Checklist

### ✅ Test Your Deployment
1. Visit your Netlify URL
2. Check homepage loads correctly
3. Test configurator page
4. Check all navigation links
5. Test contact form
6. Verify images load properly

### 🔧 Common Issues & Fixes

#### Issue: Images not loading
**Solution:** Ensure images are in `public/images/` folder and committed to Git

#### Issue: Build fails
**Solution:** 
```bash
# Test build locally first
npm run build

# If it works locally, check Netlify build logs for specific errors
```

#### Issue: 404 errors on direct page access
**Solution:** The `netlify.toml` file should handle this, but if not:
1. Go to **Site settings** → **Build & deploy** → **Post processing**
2. Enable **"Pretty URLs"**

#### Issue: Environment variables not working
**Solution:**
1. Go to **Site settings** → **Environment variables**
2. Add your variables (they should start with `NEXT_PUBLIC_` for client-side access)
3. Redeploy the site

---

## Automatic Deployments

✅ **Already configured!** Every time you push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Netlify will automatically:
1. Detect the push
2. Build your site
3. Deploy the new version
4. Usually takes 2-3 minutes

---

## Monitoring & Analytics

### View Build Logs
1. Go to **Deploys** tab
2. Click on any deployment
3. View real-time build logs

### Check Site Analytics
1. Go to **Analytics** tab (may require paid plan)
2. Or use Google Analytics (free)

---

## Custom Domain (Optional)

### Using Your Own Domain

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain: `www.yourcontainers.com`
4. Follow DNS configuration instructions
5. Netlify provides free SSL certificate automatically!

### Example DNS Settings (if using external domain):
```
Type: CNAME
Name: www
Value: [your-site].netlify.app
```

Or use Netlify DNS for easier management.

---

## Performance Tips

### 1. Enable Netlify Image CDN
Netlify automatically optimizes images, but you can enable additional features:
- Go to **Site settings** → **Build & deploy** → **Image optimization**
- Enable "Automatic image optimization"

### 2. Enable Asset Optimization
- Go to **Site settings** → **Build & deploy** → **Post processing**
- Enable "Bundle CSS" and "Minify JS"

### 3. Use Edge Functions (if needed)
For advanced features, Netlify Edge Functions run on CDN edge nodes for ultra-fast response times.

---

## Cost Estimate

### Free Tier Includes:
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Automatic HTTPS
- ✅ Continuous deployment
- ✅ Form handling (100 submissions/month)

**For your container site:** Free tier is likely sufficient unless you get massive traffic!

---

## Troubleshooting Commands

```bash
# Check Netlify CLI version
netlify --version

# View site info
netlify status

# Open Netlify dashboard for your site
netlify open

# View build logs
netlify watch

# Run local dev server with Netlify functions
netlify dev
```

---

## Additional Resources

- [Netlify Docs for Next.js](https://docs.netlify.com/frameworks/next-js/)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Netlify Support](https://www.netlify.com/support/)

---

## Quick Reference Card

| Action | Command |
|--------|---------|
| Deploy | Push to GitHub (auto-deploys) |
| Manual deploy | `netlify deploy --prod` |
| Open site | `netlify open:site` |
| Open admin | `netlify open:admin` |
| View logs | Check Netlify dashboard |

---

**🎉 Congratulations!** Your container configurator is now live on Netlify!

Need help? Check the Netlify build logs or contact support.

