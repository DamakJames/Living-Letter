# 🎨 DESIGN SYSTEM & BRAND GUIDELINES

## BRAND IDENTITY

**Ministry Name:** Living Letters  
**Tagline:** "Live as God's Message to the World"  
**Founded:** Pastor Solomon Amao  
**Philosophy:** Christ-centered teaching, Scripture-grounded, Spirit-led discipleship

---

## COLOR PALETTE

### Primary Colors

| Color | Hex | RGB | Use Case |
|-------|-----|-----|----------|
| **Primary Dark** | #2c3e50 | 44, 62, 80 | Navigation, Text, Headers |
| **Secondary Blue** | #3498db | 52, 152, 219 | Links, Buttons, Accents |
| **Accent Red** | #e74c3c | 231, 76, 60 | CTAs, Calls to action |
| **Success Green** | #27ae60 | 39, 174, 96 | Positive actions |

### Secondary Colors

| Color | Hex | RGB | Use Case |
|-------|-----|-----|----------|
| **Light Background** | #ecf0f1 | 236, 240, 241 | Section backgrounds |
| **White** | #ffffff | 255, 255, 255 | Main background |
| **Dark Text** | #2c3e50 | 44, 62, 80 | Body text |
| **Light Text** | #7f8c8d | 127, 140, 141 | Secondary text |

### Gradients

**Hero Gradient:**
- Start: #2c3e50 (Primary Dark)
- End: #3498db (Secondary Blue)
- Angle: 135°

**Email CTA Gradient:**
- Start: #e74c3c (Accent Red)
- End: #c0392b (Darker Red)
- Angle: 135°

---

## TYPOGRAPHY

### Font Family

**Primary Font:** Segoe UI / Inter  
**Fallback:** -apple-system, BlinkMacSystemFont, sans-serif

**Why:** Modern, clean, highly readable on all devices

### Font Sizes & Hierarchy

| Element | Size | Weight | Color | Usage |
|---------|------|--------|-------|-------|
| **H1** | 48px | 700 | Primary Dark | Page headlines |
| **H2** | 32px | 700 | Primary Dark | Section titles |
| **H3** | 20px | 600 | Primary Dark | Card titles |
| **H4** | 18px | 600 | Primary Dark | Subsections |
| **Body** | 16px | 400 | Dark Text | Paragraphs |
| **Small** | 14px | 400 | Light Text | Captions |
| **Button** | 16px | 600 | White | CTA text |

### Line Height

- Headings: 1.2
- Body text: 1.8
- Small text: 1.6

---

## SPACING SYSTEM

**Base Unit:** 8px

| Size | Value | Usage |
|------|-------|-------|
| **xs** | 8px | Small margins |
| **sm** | 16px | Standard padding |
| **md** | 24px | Section spacing |
| **lg** | 48px | Large sections |
| **xl** | 64px | Major sections |
| **2xl** | 80px | Page sections |

### Examples
- Button padding: 12px 28px (1.5x, 3.5x base unit)
- Section padding: 80px 20px (10x, 2.5x base unit)
- Card padding: 2rem / 32px (4x base unit)

---

## COMPONENTS

### Buttons

**Primary Button**
- Background: #3498db (Secondary Blue)
- Text: White
- Padding: 12px 28px
- Border radius: 8px
- Font weight: 600
- Hover: #2980b9 (darker blue) + translate up 2px + shadow
- Transition: 0.3s ease

**Secondary Button**
- Background: #e74c3c (Accent Red)
- Text: White
- Padding: 12px 28px
- Border radius: 8px
- Hover: #c0392b (darker red) + translate up 2px

**Light Button**
- Background: White
- Text: #2c3e50 (Primary Dark)
- Border: 2px solid #2c3e50
- Padding: 12px 28px
- Hover: Light gray background

### Cards

**Mission Card / Category Card**
- Background: #ecf0f1 (Light BG)
- Padding: 2rem (32px)
- Border radius: 8px
- Border: 2px transparent
- Hover:
  - Border: 2px #3498db
  - Box shadow: 0 4px 6px rgba(0,0,0,0.1)
  - Transform: translateY(-5px)
- Transition: 0.3s ease

### Forms

**Input Field**
- Padding: 12px 16px
- Border: 1px solid #ddd
- Border radius: 8px
- Font size: 16px
- Focus: Border color #3498db, outline none
- Placeholder: #7f8c8d (Light Text)

**Submit Button**
- Same as Primary Button
- Min width: 150px

---

## NAVIGATION

**Navigation Bar**
- Background: #2c3e50 (Primary Dark)
- Height: Auto (typically 60-80px)
- Position: Sticky/Fixed
- Box shadow: 0 4px 6px rgba(0,0,0,0.1)

**Navigation Links**
- Color: White
- Text decoration: None
- Font weight: 500
- Hover color: #3498db (Secondary Blue)
- Transition: 0.3s ease
- Gap between links: 2rem

**Logo**
- Font size: 24px
- Font weight: 700
- Color: #3498db (Secondary Blue)

---

## SECTIONS

### Hero Section
- Background: Gradient (Primary Dark → Secondary Blue)
- Padding: 120px 20px
- Text align: Center
- Color: White

### Standard Content Section
- Background: White OR #ecf0f1 (alternate)
- Padding: 80px 20px
- Max width: 1200px + 20px margins

### Email Signup Section
- Background: Gradient (Accent Red → Darker Red)
- Padding: 80px 20px
- Text align: Center
- Color: White

---

## ICONS & EMOJIS

Using emoji icons for visual hierarchy:

| Icon | Use | Size |
|------|-----|------|
| 🎧 | Podcast | 32px-48px |
| 📖 | Teaching/Books | 32px-48px |
| 📚 | Series/Studies | 32px-48px |
| 📅 | Devotionals | 32px-48px |
| 📩 | Email/Signup | 32px-48px |
| ✨ | Replicate | 48px |
| 👑 | Rule | 48px |
| 💎 | Reflect | 48px |
| ▶ | Play | 16px-20px |
| 🎵 | Audio | 24px-48px |

---

## BREAKPOINTS (Responsive Design)

| Breakpoint | Width | Device |
|------------|-------|--------|
| **Mobile** | < 480px | Phone |
| **Tablet Small** | 480px - 768px | Small Tablet |
| **Tablet** | 768px - 1024px | Tablet |
| **Desktop** | 1024px - 1440px | Desktop |
| **Wide Desktop** | > 1440px | Large monitors |

### Responsive Rules

**Mobile (< 480px):**
- H1: 24px (reduced from 48px)
- H2: 20px (reduced from 32px)
- Single column layout
- Buttons: Full width or stacked
- Navigation: Mobile menu (hamburger)
- Padding: Reduced to 20px

**Tablet (480px - 768px):**
- H1: 32px
- H2: 24px
- 2 columns where applicable
- Buttons: Side-by-side or stacked
- Padding: 20px

**Desktop (768px+):**
- Full font sizes
- Multi-column layouts
- Side-by-side elements
- Standard padding

---

## IMAGERY

### Image Guidelines

- Use high-quality images (1200px+ wide)
- Optimize for web (compress to < 200KB)
- Alt text required for accessibility
- Aspect ratios:
  - Hero: 16:9
  - Cards: 4:3 or 1:1
  - Thumbnails: Square (1:1)

### Content Image Types

- Sermon/teaching speaker photos: 1200x900px
- Article featured images: 1200x700px
- Thumbnail images: 300x300px
- Header images: 1920x1080px

### Placeholders

When images not available:
- Use solid color backgrounds (Light BG: #ecf0f1)
- Use large emoji icons (font size 80-100px)
- Use gradient backgrounds

---

## SHADOWS

**Light Shadow** (hover states, cards at rest)
```
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

**Medium Shadow** (cards on hover)
```
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
```

**Large Shadow** (modals, overlays)
```
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
```

---

## ANIMATIONS & TRANSITIONS

**Standard Transition**
```
transition: all 0.3s ease;
```

**Button Hover Effects**
- Color change: 0.3s
- Scale/translate: 2px up, immediate
- Shadow: Fade in, 0.3s

**Card Hover Effects**
- Border color: 0.3s
- Shadow: Fade in, 0.3s
- Position: Translate 5px up, 0.3s

---

## ACCESSIBILITY

### Color Contrast

All text meets WCAG AA standards:
- Primary text on white: ✅ Passes
- White text on dark blue: ✅ Passes
- White text on red: ✅ Passes

### Focus States

All interactive elements have visible focus:
- Links: Underline on focus
- Buttons: Border or outline on focus
- Form inputs: Border color changes

### Alt Text Examples

- Logo: "Living Letters logo"
- Hero image: "Church worship service with hands raised"
- Article thumbnail: "Pastor Solomon Amao speaking at podium"
- Icon: "Audio speaker icon"

---

## BRAND VOICE

**Tone:** 
- Warm but professional
- Encouraging and uplifting
- Scripture-centered
- Accessible (not overly academic)

**Examples:**
- "Your spiritual journey matters" (not "consume content")
- "Grow in truth together" (not "buy our stuff")
- "Replicate Christ daily" (not "follow our doctrine")

---

## DO'S & DON'TS

### DO ✅

- Use consistent spacing throughout
- Keep typography hierarchy clear
- Test on mobile devices
- Use color strategically
- Make all text readable
- Test form submissions
- Optimize for fast loading

### DON'T ❌

- Mix too many fonts (stick to 1-2)
- Use excessive animations
- Have low contrast text
- Forget about mobile design
- Use auto-play audio/video
- Overcrowd pages with ads
- Use outdated imagery

---

## FILE NAMING CONVENTIONS

**Pages:**
- homepage / index
- podcast
- teachings / articles
- series
- devotionals
- qa / heart-questions
- about
- contact

**Images:**
- hero-image-home
- logo-primary
- icon-podcast
- thumbnail-article-001

**Components:**
- nav-bar
- hero-section
- card-category
- button-primary
- footer-main

---

## WEBFLOW SPECIFIC

### Color Variables (Webflow)
Create these in Webflow's Brand settings:
1. Primary Dark (#2c3e50)
2. Secondary Blue (#3498db)
3. Accent Red (#e74c3c)
4. Success Green (#27ae60)
5. Light BG (#ecf0f1)

### Typography Styles (Webflow)
Create these in Webflow's Typography:
1. Heading 1
2. Heading 2
3. Heading 3
4. Body
5. Small text

### Component Classes (Webflow)
- button-primary
- button-secondary
- button-light
- card-mission
- card-category
- card-article

---

This design system is:
✅ Modern and professional
✅ Accessible and readable
✅ Mobile-responsive
✅ On-brand for faith ministry
✅ Easy to implement in Webflow
# ❓ HEART'S QUESTIONS (Q&A) PAGE

**Page Title:** Heart's Questions

**Page Headline:** Biblical Answers to Real-Life Spiritual Questions

**Body Copy:**
Biblical answers to real-life spiritual questions.

---

## EXAMPLE QUESTIONS & TOPICS

* How do I hear God?
* How do I grow spiritually?
* Understanding grace and faith
* Who am I in Christ?
* How do I deal with doubt?
* What is the Holy Spirit's role?
* How do I read the Bible effectively?
* Understanding prayer and intercession
* Overcoming sin and temptation
* Walking in wisdom

---

## Q&A STRUCTURE

**Each Answer Includes:**
- Question (clear, concise)
- Scripture foundation
- Detailed answer (500-800 words)
- Key takeaways
- Related teachings/series links
- Related questions

---

## USER INTERACTION

- **Search** by keyword or topic
- **Browse** by category
- **Ask a Question** feature (submitted for future episodes)
- **Categorize** by life stage (New Believer, Growing, Mature, etc.)

---

## CONTENT DELIVERY

- Text article format
- Video recording (pastor answering question) - optional
- Downloadable study guide
- Share on social media
- Email to friend

---

## CTA

👉 Browse Questions

Can't find your answer? Submit a question

---

## EDITORIAL CALENDAR

- New Q&A published weekly or bi-weekly
- Questions sourced from:
  - Community submissions
  - Common themes in messages
  - Seasonal/timely topics
# 🎧 PODCAST MESSAGES PAGE

**Page Title:** Podcast Messages

**Page Headline:** Listen to Biblical Teachings

**Body Copy:**
Listen to biblical teachings and sermons designed to strengthen your faith and deepen your understanding of God's Word.

Each episode includes:
* Full message (audio)
* Scripture references
* Key insights & takeaways

---

## CONTENT ELEMENTS

**Episode Display:**
- [ ] Episode title
- [ ] Date published
- [ ] Duration
- [ ] Embedded audio player
- [ ] Description/summary
- [ ] Download link (optional)
- [ ] Share buttons

**Filtering/Organization:**
- Sort by: Latest, Most Popular, Series
- Search by topic/keyword
- Filter by series (if applicable)

---

## CTA

👉 Browse Episodes

---

## ENGAGEMENT

- Subscribe to podcast (Apple Podcasts, Spotify, etc.)
- Email notification for new episodes
- Leave a review/rating
# 🏠 HOMEPAGE (FINAL COPY)

## HERO SECTION (Top of Website)

**Headline:**
> **Live as God's Message to the World**

**Subtext:**
> Living Letters is a Christian media ministry dedicated to equipping believers to live as letters written by the Holy Spirit—known and read by all.

**CTA Buttons:**
- ▶ Listen to Latest Message
- 📖 Explore Teachings

---

## ABOUT PREVIEW SECTION

**Section Title:** Who We Are

**Body Copy:**
Living Letters is a Christ-centered teaching ministry founded by **Pastor Solomon Amao**, focused on raising believers who understand Scripture, grow in spiritual maturity, and live out the life of Christ daily.

Inspired by the Second Epistle to the Corinthians 3:2–3, we believe every believer is called to become a living expression of God's truth.

**CTA Link:** 👉 Learn More

---

## MISSION SECTION

**Section Title:** Our Mission

**Body Copy:**
We exist to help believers:

• **Replicate** the life of Christ through the grace of the Holy Spirit
• **Rule** through the Gospel of the Son
• **Reflect** the glory and character of the Father

---

## FEATURED CONTENT SECTION

**Section Title:** 🎧 Latest Message

**Content:**
(Embed latest episode player)

**Title:** [Latest Message Title]  
**Short Description:** [2-3 sentence summary]

**CTA:** Listen Now

---

## CONTENT CATEGORIES SECTION

**Section Title:** 📚 Grow Through the Word

**Content Grid (4 Categories):**
- 🎧 Podcast Messages
- 📖 Teachings & Articles
- 📚 Series & Bible Studies
- 📅 Devotionals

**CTA:** 👉 Browse Library

---

## EMAIL SUBSCRIPTION SECTION

**Section Title:** 📩 Stay Rooted in Truth

**Subtext:** Get weekly teachings, devotionals, and new messages delivered to you.

**Form Elements:**
- Email input field
- Subscribe button

---

## FINAL CTA SECTION

**Section Title:** 🙏 Begin Your Growth Journey

**Body Copy:** Explore teachings, follow structured series, and grow in truth.

**CTA Button:** Start Learning

---

## FOOTER

- Quick links to all pages
- Social media links
- Newsletter signup
- Contact info
- Copyright & Legal
# 📅 DEVOTIONALS PAGE

**Page Title:** Devotionals

**Page Headline:** Daily Reflections in God's Word

**Body Copy:**
Daily and weekly reflections to keep you grounded in God's Word.

**Tagline:** Simple. Scriptural. Transforming.

---

## DEVOTIONAL STRUCTURE

**Each Devotional Includes:**
- Date
- Scripture reference
- Brief reflection (300-500 words)
- Key insight/takeaway
- Prayer or action step
- Share/email option

---

## DEVOTIONAL TYPES

1. **Daily Devotionals** (Monday-Friday or 7 days/week)
2. **Weekly Deep Dives** (Longer reflection)
3. **Series Devotionals** (Connected to teaching series)

---

## CONTENT ELEMENTS

**Devotional Display:**
- Mini card view (list of recent)
- Full devotional view (expanded)
- Archive/calendar (browse by date)
- Search by topic/scripture

---

## ENGAGEMENT & ACCESS

- Email devotional directly to inbox (daily/weekly option)
- Read online or download as PDF
- Share on social media
- Print-friendly version
- Mobile-optimized for reading

---

## CTA

👉 Read Today's Devotional

Subscribe for daily emails
# 📩 CONTACT PAGE

**Page Title:** Get in Touch

**Page Headline:** Contact Living Letters

---

## CONTACT FORM

**Form Fields:**
- Name
- Email
- Subject (dropdown options)
- Message
- Phone (optional)
- Submit button

**Subject Options:**
- General inquiry
- Partnership opportunity
- Technical issue
- Message/feedback
- Speaking engagement
- Media/press inquiry

---

## EMAIL

📧 Email: [primary contact email]

---

## SOCIAL MEDIA

Follow us on:
- 🎵 Spotify
- 🎙️ Apple Podcasts
- 📘 Facebook
- 📱 Instagram
- 🐦 Twitter/X
- 📺 YouTube (if applicable)

---

## MAILING ADDRESS

[Physical address if applicable]

---

## RESPONSE TIME

We aim to respond to all inquiries within 2-3 business days.

---

## NEWSLETTER SIGNUP

💌 **Subscribe to our newsletter**

Get weekly teachings, devotionals, and updates delivered to your inbox.

[ Email input ]
[ Subscribe button ]

---

## FAQ

**Common Questions:**
- Can I repost your content?
- Can you speak at our event?
- How can we partner with Living Letters?
- Can I contribute content?

---

## SOCIAL FOLLOW CTA

Join our community on social media for daily encouragement and updates.


# 👤 ABOUT PAGE

**Page Title:** About Living Letters

**Page Headline:** Meet Pastor Solomon Amao & Living Letters Ministry

---

## FOUNDER SECTION

### Pastor Solomon Amao

Living Letters was founded by Pastor Solomon Amao with a clear vision: to raise believers who are grounded in Scripture, led by the Spirit, and expressive of Christ in everyday life.

**Ministry Commitment:**
This ministry is dedicated to:
- Sound doctrine
- Spiritual growth
- Practical Christian living

---

## MINISTRY VISION & MISSION

**Vision:**
Believers known and read by all as God's message to the world (2 Corinthians 3:2-3)

**Mission:**
We exist to help believers:
- Replicate the life of Christ through the grace of the Holy Spirit
- Rule through the Gospel of the Son
- Reflect the glory and character of the Father

---

## WHAT WE BELIEVE

- The sufficiency of Scripture
- The centrality of Christ
- The power of the Holy Spirit
- Grace-based discipleship
- Living faith (not just knowledge)

---

## OUR APPROACH

1. **Scripture-Centered** - All teaching rooted in God's Word
2. **Spirit-Led** - Dependence on the Holy Spirit's guidance
3. **Practically Applied** - Truth for everyday living
4. **Community Minded** - Building believers together
5. **Freely Shared** - Gospel resources available to all

---

## CONTENT OFFERED

- Podcast messages and sermons
- Teaching articles and studies
- Teaching series (structured learning)
- Daily devotionals
- Biblical Q&A
- Email newsletter

---

## CTA

👉 Explore Our Ministry Now

Join our community

# 📊 STRATEGIC CONTENT MAPPING - FIRST 30 PIECES

## CONTENT BALANCE

**Recommended breakdown for first 30 pieces:**

- 🎧 **Podcast Messages:** 10 pieces (sermons/teachings)
- 📖 **Teaching Articles:** 8 pieces
- 📚 **Series:** 1-2 series (8-10 messages total)
- 📅 **Devotionals:** 20+ pieces (daily or weekly)
- ❓ **Q&A:** 3-5 pieces (HQ - Heart's Questions)

---

## PHASE 1: FOUNDATION CONTENT (Week 1-2)

### Identity & Foundation Series (4-5 messages)

**Series: "LIVING AS GOD'S LETTER"**

1. **Message 1: "You Are God's Letter"**
   - Scripture: 2 Corinthians 3:2-3
   - Theme: Understanding your new identity
   - Keywords: Identity, purpose, calling

2. **Message 2: "What Makes a Letter Valid?"**
   - Scripture: 2 Corinthians 3:1-6
   - Theme: Credentials in Christ, not external validation
   - Keywords: Authenticity, Christ's seal

3. **Message 3: "The Ink of the Holy Spirit"**
   - Scripture: 2 Corinthians 3:3, Romans 8
   - Theme: Holy Spirit's work in your life
   - Keywords: Holy Spirit, transformation, power

4. **Message 4: "Known and Read by All"**
   - Scripture: 2 Corinthians 3:2
   - Theme: Living visibly, impact on others
   - Keywords: Witness, influence, lifestyle

5. **Message 5: "From Shadow to Substance"** (Optional)
   - Scripture: Hebrews 10:1, 2 Corinthians 3:7-11
   - Theme: Old covenant vs. New covenant glory
   - Keywords: Grace, fulfillment, maturity

---

## PHASE 2: SUPPORTING CONTENT (Week 3-4)

### Teaching Articles (8 pieces)

**Category: Spiritual Growth & Identity**

1. "Understanding Your Identity in Christ: A Scriptural Guide"
2. "The Role of the Holy Spirit in Daily Living"
3. "How Grace Changes Everything"
4. "5 Ways to Know God Better"
5. "The Power of Believing What God Says About You"
6. "From Knowing to Living: Applying Scripture"
7. "The Holy Spirit: Your Helper, Guide, and Advocate"
8. "Building a Foundation of Biblical Truth"

---

### Q&A Pieces (Heart's Questions) - 3 pieces

1. **"How Do I Know God's Will for My Life?"**
   - Scriptures: Proverbs 3:5-6, Romans 12:1-2
   - Real-life application focus

2. **"What Does It Mean to Be 'Born Again'?"**
   - Scripture: John 3
   - Foundational understanding

3. **"How Do I Grow Spiritually When Facing Obstacles?"**
   - Scripture: James 1:2-4, 2 Peter 3:18
   - Encouragement for struggle

---

### Devotional Series (28+ pieces)

**Week 1-4: "Identity in Christ Devotional Series"**

**Daily Devotionals (4 weeks = 28 days)**

**Week 1: WHO YOU ARE**
- Day 1: "You Are Chosen"
- Day 2: "You Are Redeemed"
- Day 3: "You Are Loved Unconditionally"
- Day 4: "You Are Forgiven"
- Day 5: "You Are Accepted"
- Day 6: "You Are Sealed"
- Day 7: "You Are Free"

**Week 2: WHAT YOU'VE BEEN GIVEN**
- Day 8: "The Gift of the Holy Spirit"
- Day 9: "Authority in Christ"
- Day 10: "Eternal Life"
- Day 11: "God's Promises Are Yours"
- Day 12: "Access to God's Throne"
- Day 13: "God's Peace"
- Day 14: "Spiritual Gifts"

**Week 3: HOW TO LIVE IT**
- Day 15: "Walking in Truth"
- Day 16: "Living by Faith"
- Day 17: "Growing in Grace"
- Day 18: "Standing Firm"
- Day 19: "Living in Community"
- Day 20: "Serving Others"
- Day 21: "Leaving a Legacy"

**Week 4: REFLECTING HIS CHARACTER**
- Day 22: "The Mind of Christ"
- Day 23: "The Heart of Christ"
- Day 24: "The Life of Christ"
- Day 25: "Love - The Greatest Command"
- Day 26: "Joy in Every Season"
- Day 27: "Peace That Transcends"
- Day 28: "Living Letters - Full Circle"

---

## CONTENT CREATION PRIORITIES

**MUST CREATE FIRST:**
1. ✅ Main series: "Living as God's Letter" (5 messages)
2. ✅ Devotional series: "Identity in Christ" (28 days)
3. ✅ 3-5 foundational teaching articles
4. ✅ 3 Q&A pieces on common questions

**THEN CREATE:**
5. ⚠️ Additional articles based on questions/feedback
6. ⚠️ Second series based on audience response
7. ⚠️ Supplementary Q&A pieces

---

## REPURPOSING STRATEGY

**One message can become:**
- 📝 Teaching article (written version)
- 📅 7-day devotional series (key insights from message)
- ❓ 2-3 Q&A pieces (common questions from message)
- 🎥 3-5 short video clips (for social media)
- 📊 Infographic (key concepts)
- 💬 Quote graphics (for sharing)

**Example:** "You Are God's Letter" message becomes:
- Article: "Understanding Your Identity in Christ"
- Devotional: Days 1-3 of "Identity in Christ" series
- Q&A: "Who Am I Really in Christ?"
- Video clip: "The One Thing God Wants You to Know"
- Instagram post: 5 identity-affirming quotes

---

## PUBLISHING SCHEDULE (First 30 Days)

**Week 1:**
- Day 1-5: Series messages 1-3
- Day 1-7: Devotionals 1-7
- Day 3: Article 1 + Q&A 1

**Week 2:**
- Day 8-10: Series messages 4-5 + Article 2
- Day 8-14: Devotionals 8-14
- Day 10: Q&A 2

**Week 3:**
- Day 15-21: Articles 3-5 + Devotionals 15-21
- Day 18: Q&A 3
- Establish consistent weekly rhythm

**Week 4:**
- Day 22-30: Articles 6-8 + Devotionals 22-30
- Continue building library

---

## ENGAGEMENT METRICS TO TRACK

- Podcast downloads/listens
- Article reads/time spent
- Email open rates
- Social shares
- Devotional opens
- Q&A searches/views
- Website visitors
- New email subscribers





