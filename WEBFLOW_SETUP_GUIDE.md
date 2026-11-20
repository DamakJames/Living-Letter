# 🌐 WEBFLOW SETUP GUIDE - LIVING LETTERS

## ⚡ QUICK START (3-4 weeks to launch)

**What you need:**
1. Webflow account (free trial available)
2. Domain name (optional first, can use Webflow subdomain)
3. Email service (Mailchimp free tier)
4. Content (we've mapped the first 30 pieces)

---

## PHASE 1: ACCOUNT & PROJECT SETUP (Day 1)

### Step 1: Create Webflow Account
1. Go to **webflow.com**
2. Click "Get Started Free"
3. Sign up with email
4. Verify email

### Step 2: Create New Project
1. Click "Create new"
2. Choose "Blank Project"
3. Name: "Living Letters"
4. Click "Create Project"

### Step 3: Project Settings
1. **Settings** tab (right side)
2. **General**:
   - Project name: Living Letters
   - Favicon: (optional, add later)
3. **Domain** (optional):
   - Use Webflow subdomain for now: living-letters.webflow.io
   - Or connect custom domain: livingletters.com

---

## PHASE 2: DESIGN HOMEPAGE (Days 2-5)

### Step 4: Set Up Brand Colors & Fonts

**Colors:**
1. Go to **Assets** panel
2. Click **Colors**
3. Create these colors:
   - Primary Dark: #2c3e50 (name: "Primary Dark")
   - Secondary Blue: #3498db (name: "Secondary Blue")
   - Accent Red: #e74c3c (name: "Accent Red")
   - Success Green: #27ae60 (name: "Success Green")
   - Light BG: #ecf0f1 (name: "Light BG")

**Fonts:**
1. **Typography** section
2. Add font: "Segoe UI" or "Inter" (modern, clean)
3. Set body font size: 16px
4. Set line height: 1.6

### Step 5: Create Navigation Bar

1. Add **Section** component to canvas
2. Name it: "Navigation"
3. Set background: Primary Dark (#2c3e50)
4. Add **Container** inside
5. Add **Logo** (text):
   - Text: "Living Letters"
   - Font size: 24px
   - Color: Secondary Blue
   - Font weight: 700
6. Add **Navigation Links** (flex row):
   - Create links: Home | Teachings | Podcast | About | Contact
   - Link color: White
   - Link hover color: Secondary Blue
   - Spacing between: 2rem

### Step 6: Create Hero Section

1. Add new **Section** below Navigation
2. Name: "Hero"
3. Background: Create gradient
   - Start: Primary Dark (#2c3e50)
   - End: Secondary Blue (#3498db)
   - Angle: 135 degrees
4. Add **Container** inside
5. Add content:
   - **Heading** (h1): "Live as God's Message to the World"
     - Font size: 48px
     - Color: White
     - Text align: Center
   - **Paragraph**: Ministry description
     - Font size: 18px
     - Color: White (opacity 90%)
     - Text align: Center
     - Max width: 600px
   - **Button Group** (2 buttons):
     - Button 1: "▶ Listen to Latest Message"
     - Button 2: "📖 Explore Teachings"
     - Both: Secondary Blue background, white text
     - Hover: Darker blue

### Step 7: Create About Preview Section

1. Add new **Section**: "About Preview"
2. Background: Light BG (#ecf0f1)
3. Add **Container** with **Grid** (2 columns)
4. **Left Column**:
   - Add placeholder div
   - Background: White
   - Text: "📖"
   - Font size: 100px
   - Centered
5. **Right Column**:
   - **Heading** (h2): "Who We Are"
     - Text align: Left
   - **Paragraph** (2 paragraphs): Copy from docs
   - **Link**: "Learn More →"
     - Color: Secondary Blue
     - Hover: Primary Dark

### Step 8: Create Mission Section

1. Add new **Section**: "Mission"
2. Background: White
3. Add **Container**
4. **Heading** (h2): "Our Mission"
5. **Mission Cards** (3 columns):
   - Create **Card** component x3
   - Each card:
     - Background: Light BG
     - Padding: 2rem
     - Border radius: 8px
     - Icon (emoji): ✨ / 👑 / 💎 (font size 48px)
     - Title: "Replicate" / "Rule" / "Reflect"
     - Description text
   - Add hover effect: Lift up, add shadow

---

## PHASE 3: CONTENT SECTIONS (Days 6-8)

### Step 9: Featured Content Section

1. Add new **Section**: "Featured Content"
2. Background: Light BG
3. **Heading** (h2): "🎧 Latest Message"
4. **Grid** (2 columns):
   - **Left**: Audio player placeholder
     - Background: Primary Dark
     - Padding: 60px
     - Text: "🎵 Audio Player"
     - Color: White
   - **Right**: Content
     - **Heading** (h3): "It Shall End in Praise"
     - **Paragraph**: Message description
     - **Button**: "Listen Now"
       - Secondary Blue background

### Step 10: Content Categories Section

1. Add new **Section**: "Content Categories"
2. Background: White
3. **Heading** (h2): "📚 Grow Through the Word"
4. **Grid** (4 columns, responsive):
   - Create **Category Card** x4
   - Each card:
     - Background: Light BG
     - Padding: 2rem
     - Border: 2px transparent
     - Icon: 🎧 / 📖 / 📚 / 📅 (font size 48px)
     - Title (h3)
     - Description
     - Hover effect: Border becomes Secondary Blue, lift up
5. **CTA Button** below:
   - "Browse Library"
   - Secondary Blue
   - Centered

### Step 11: Email Signup Section

1. Add new **Section**: "Email Signup"
2. Background: Gradient (Accent Red)
   - Start: #e74c3c
   - End: #c0392b
3. **Heading** (h2): White, "📩 Stay Rooted in Truth"
4. **Paragraph**: White, "Get weekly teachings, devotionals..."
5. **Form**:
   - Form component
   - Add email input:
     - Placeholder: "Enter your email"
     - Padding: 12px 16px
     - Border radius: 8px
   - Add submit button:
     - "Subscribe"
     - Secondary Blue
     - Padding: 12px 28px

### Step 12: Final CTA Section

1. Add new **Section**: "Final CTA"
2. Background: Light BG
3. **Heading** (h2): "🙏 Begin Your Growth Journey"
4. **Paragraph**: "Explore teachings, follow structured series..."
5. **Button**: "Start Learning"
   - White background
   - Primary Dark text
   - Border: 2px Primary Dark

### Step 13: Footer

1. Add new **Section**: "Footer"
2. Background: Primary Dark
3. **Grid** (4 columns):
   - **Column 1**: "Navigation" links
   - **Column 2**: "Resources" links
   - **Column 3**: "Follow Us" + social links
   - Each link: White, hover: Secondary Blue
4. Add divider line
5. Bottom text: "© 2026 Living Letters Ministry"
   - Color: White (60% opacity)
   - Text align: Center
   - Font size: 0.9rem

---

## PHASE 4: RESPONSIVE DESIGN (Day 9)

### Step 14: Mobile Optimization

1. Click **View** → **Tablet** (view responsive)
2. Fix any layout issues:
   - Hero buttons: Stack vertically on mobile
   - Grid layouts: 2 columns → 1 column on tablet
   - Grid layouts: Auto on mobile
3. Use Webflow's **Breakpoints**:
   - Desktop (1200px+)
   - Tablet (768px-1199px)
   - Mobile (under 768px)

---

## PHASE 5: CREATE ADDITIONAL PAGES (Days 10-12)

### Step 15: Create Podcast Page

1. Create new **Page**: "podcast"
2. Add same **Navigation** component (copy from homepage)
3. Add **Hero** (smaller):
   - Heading: "Podcast Messages"
   - Subtext: "Listen to biblical teachings..."
4. Add **Content Grid**:
   - Create repeatable item:
     - Placeholder for image/player
     - Episode title
     - Date
     - Duration
     - Description
     - "Listen Now" link
5. Add **Filter buttons** (optional):
   - Latest, Popular, Series

### Step 16: Create Teachings Page

1. Create new **Page**: "teachings"
2. Similar structure to podcast
3. Article cards instead:
   - Featured image placeholder
   - Title
   - Author: "Pastor Solomon Amao"
   - Date
   - Read time
   - Excerpt
   - "Read More" link
4. Add **Category filters** if desired

### Step 17: Create About Page

1. Create new **Page**: "about"
2. Full hero section
3. Add sections:
   - Founder story
   - Mission statement
   - What we believe
   - Content offerings
4. Reuse components from homepage
5. Add call-to-action button

### Step 18: Create Contact Page

1. Create new **Page**: "contact"
2. Add **Contact Form**:
   - Name field
   - Email field
   - Subject dropdown
   - Message textarea
   - Submit button
3. Add form submission:
   - Webflow form → Email notifications
4. Add contact info:
   - Email address
   - Social media links

---

## PHASE 6: INTEGRATIONS (Days 13-14)

### Step 19: Email List Integration

1. **Settings** → **Integrations**
2. Add **Mailchimp**:
   - Sign up at mailchimp.com (free)
   - Get API key
   - Connect to Webflow
   - Map email signup form to Mailchimp list
3. Test form submission

### Step 20: Analytics Setup

1. **Settings** → **Integrations**
2. Add **Google Analytics 4**:
   - Create Google Analytics account
   - Get tracking ID
   - Add to Webflow
3. Can now track:
   - Visitor count
   - Page views
   - Engagement

---

## PHASE 7: CONTENT UPLOAD (Days 15-21)

### Step 21: Add Blog/Article Section

1. **Add CMS Collection** called "Messages"
   - Fields: Title, Date, Description, Content, Category
2. Add ~5 initial podcast messages from your first 30 pieces
3. Repeat for "Articles" collection
4. Create template pages that pull from CMS

### Step 22: Add Devotionals

1. Create CMS collection: "Devotionals"
   - Fields: Title, Date, Scripture, Reflection, Prayer
2. Add 7-14 devotionals
3. Display with archive/calendar

---

## PHASE 8: OPTIMIZATION & LAUNCH (Days 22-28)

### Step 23: SEO Setup

1. **Pages** → Each page:
   - Meta title (60 chars max)
   - Meta description (160 chars max)
   - Slug (URL-friendly name)
2. Examples:
   - Homepage: "Living Letters | Christian Teaching Ministry"
   - Podcast: "Podcast Messages | Biblical Teachings"
   - Teachings: "Articles & Teachings | Spiritual Growth"

### Step 24: Performance Check

1. Webflow dashboard → **Analytics**
2. Check page load times
3. Optimize images if needed
4. Check mobile responsiveness

### Step 25: Final Review & Testing

✅ Navigation works on all pages
✅ Forms submit correctly
✅ Mobile layout is clean
✅ All colors/fonts consistent
✅ All links work
✅ Images load properly
✅ Email signup works

### Step 26: Custom Domain (Optional)

1. Buy domain (Godaddy, Namecheap, etc.)
2. **Settings** → **Domains**
3. Connect domain to Webflow
4. Set as primary domain

### Step 27: Publish Site

1. Click **Publish** (top right)
2. Choose hosting:
   - Webflow (included)
3. Site goes live!

---

## 📋 LAUNCH CHECKLIST

- [ ] Homepage complete & tested
- [ ] All pages created (Podcast, Teachings, About, Contact)
- [ ] Navigation working on all pages
- [ ] Email signup form connected
- [ ] Initial 5 podcast messages uploaded
- [ ] 5 articles uploaded
- [ ] 14 devotionals uploaded
- [ ] All images optimized
- [ ] Mobile responsive on all breakpoints
- [ ] Forms tested
- [ ] Social links added
- [ ] SEO titles/descriptions added
- [ ] Google Analytics installed
- [ ] Domain connected (optional)
- [ ] Site published

---

## AFTER LAUNCH

**Week 1-4:**
- Publish 1 podcast message/week
- Publish 2 articles/week
- Publish 7 devotionals weekly
- Monitor email subscriber growth

**Month 2-3:**
- Scale to 2 podcast/week if possible
- Publish second teaching series
- Add 3-5 Q&A pieces
- Launch social media content calendar

---

## SUPPORT & RESOURCES

- **Webflow University**: learn.webflow.com (free tutorials)
- **Webflow Forums**: community.webflow.com
- **Contact Support**: In app chat

---

## ESTIMATED TIMELINE

| Phase | Duration | Status |
|-------|----------|--------|
| Account Setup | 1 day | Quick |
| Homepage Design | 4 days | Main work |
| Content Sections | 3 days | Repetitive |
| Additional Pages | 3 days | Quick |
| Integrations | 1 day | Simple |
| Content Upload | 7 days | Ongoing |
| Testing & Launch | 3 days | Final prep |
| **TOTAL** | **22 days** | **Can launch in 3 weeks** |

---

## COST SUMMARY

| Item | Cost | Notes |
|------|------|-------|
| Webflow | $150/mo | Year commitment best |
| Domain | $12/yr | Optional first 6 months |
| Mailchimp | Free | Included |
| Google Analytics | Free | Included |
| **Total Monthly** | **$150** | **Can stay on free gear 6 months** |
| **Total Yearly** | **$1,980** | **Worth it for professional site** |

You're ready to build! 🚀
