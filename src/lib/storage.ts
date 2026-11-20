import { Article, VideoQuestion, Sermon } from './types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Understanding Your Identity in Christ: A Scriptural Guide',
    slug: 'understanding-your-identity-in-christ',
    author: 'Pastor Solomon Amao',
    scripture: 'Ephesians 1:3–14',
    category: 'Identity in Christ',
    readTime: '9 min read',
    publishedAt: 'Recent Exegesis',
    excerpt: 'Moving beyond emotional fluctuations into the settled legal and relational reality of new creation life in Christ Jesus.',
    content: `Many believers spend years struggling with condemnation, spiritual insecurity, and anxiety because they have anchored their self-worth in their spiritual performance rather than in Christ's finished work.

In Ephesians 1, the Apostle Paul reveals seven unshakeable realities concerning who you are:
1. Blessed with every spiritual blessing in heavenly places
2. Chosen before the foundation of the world
3. Predestined to adoption as sons
4. Redeemed through His blood and forgiven of trespasses
5. Enriched with wisdom and insight
6. Bestowed an eternal inheritance
7. Sealed with the promised Holy Spirit

When you understand that God's acceptance of you is as secure as His acceptance of Jesus, your obedience transforms from legalistic fear into joyous adoration.`,
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-2',
    title: 'The Role of the Holy Spirit in Daily Living',
    slug: 'the-role-of-the-holy-spirit-in-daily-living',
    author: 'Pastor Solomon Amao',
    scripture: 'Romans 8:1–17',
    category: 'Holy Spirit',
    readTime: '11 min read',
    publishedAt: 'Theological Study',
    excerpt: 'Examining the indispensable ministry of the divine Helper who translates theological truth into experiential victory.',
    content: `The Christian life was never designed to be lived in human strength. The law of the Spirit of life in Christ Jesus sets us free from the law of sin and death.

The Holy Spirit is not merely an impersonal divine energy or influence; He is God indwelling the believer. In Romans 8, Paul demonstrates that the Spirit:
- Testifies with our spirit that we are children of God
- Helps us in our weakness when we do not know what to pray
- Intercedes for us with groanings too deep for words
- Mortifies the misdeeds of the body
- Guides our steps into divine wisdom

Communion with the Spirit transforms our daily walk from heavy religious effort into effortless supernatural vitality.`,
    imageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-3',
    title: 'How Grace Transforms Everything',
    slug: 'how-grace-transforms-everything',
    author: 'Pastor Solomon Amao',
    scripture: 'Titus 2:11–14',
    category: 'Grace & Faith',
    readTime: '8 min read',
    publishedAt: 'Pastoral Insight',
    excerpt: 'Biblical grace is not a license for apathy; it is the divine power that teaches believers to renounce ungodliness and live honorably.',
    content: `A tragic misunderstanding in contemporary Christianity confuses grace with passivity. In Titus 2:11–12, Scripture declares:
"For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age."

Grace is not God lowering His standards; grace is God supplying His supernatural power through the indwelling Christ. Where the law condemned, grace empowers. You can walk in righteousness today because Christ is your righteousness.`,
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
  },
];

// Actual videos verified from @the-livingletters YouTube channel
export const INITIAL_VIDEOS: VideoQuestion[] = [
  {
    id: 'vid-wAnGZ64nMKg',
    episodeNumber: 20,
    title: 'You Become What You Worship | The Mirror Effect of Worship',
    seekerName: 'Living Letters Discipleship',
    scripture: '2 Corinthians 3:18 • Psalm 115:8',
    videoEmbedUrl: 'https://www.youtube.com/embed/wAnGZ64nMKg',
    duration: '24:15',
    releaseDay: 'Friday',
    publishedAt: 'Latest Release',
    summary: 'Pastor Solomon Amao explores the spiritual reality that whatever holds your ultimate affection shapes your character, revealing how beholding Christ transforms us into His image.',
    thumbnailUrl: 'https://img.youtube.com/vi/wAnGZ64nMKg/hqdefault.jpg',
  },
  {
    id: 'vid-lYKB2_hAHnc',
    episodeNumber: 19,
    title: 'God’s Purpose in Your Pain | John 15:1–8',
    seekerName: 'Living Letters Community',
    scripture: 'John 15:1–8 • Hebrews 12:5–11',
    videoEmbedUrl: 'https://www.youtube.com/embed/lYKB2_hAHnc',
    duration: '28:40',
    releaseDay: 'Tuesday',
    publishedAt: 'Tuesday Broadcast',
    summary: 'The difference between God’s cutting away (pruning) for fruitfulness versus destructive opposition. Trusting the divine Vinedresser in seasons of suffering.',
    thumbnailUrl: 'https://img.youtube.com/vi/lYKB2_hAHnc/hqdefault.jpg',
  },
  {
    id: 'vid-JI9mFabUKIM',
    episodeNumber: 18,
    title: 'God’s One Answer to Your Many Questions | Psalm 121',
    seekerName: 'Biblical Inquirer',
    scripture: 'Psalm 121:1–8 • Isaiah 26:3',
    videoEmbedUrl: 'https://www.youtube.com/embed/JI9mFabUKIM',
    duration: '31:20',
    releaseDay: 'Friday',
    publishedAt: 'Friday Broadcast',
    summary: 'When life overwhelms with countless anxieties, God does not give fifty different answers—He gives Himself as Keeper, Shade, and Preservation.',
    thumbnailUrl: 'https://img.youtube.com/vi/JI9mFabUKIM/hqdefault.jpg',
  },
  {
    id: 'vid-d3x36P72HgI',
    episodeNumber: 17,
    title: 'What Is the Main Message of Psalm 23? | The Shepherd’s Greatest Promise',
    seekerName: 'Psalm 23 Study Series',
    scripture: 'Psalm 23:1 • John 10:11',
    videoEmbedUrl: 'https://www.youtube.com/embed/d3x36P72HgI',
    duration: '26:50',
    releaseDay: 'Tuesday',
    publishedAt: 'Tuesday Broadcast',
    summary: 'A deep expository breakdown of why Yahweh being our Shepherd is the ultimate antidote to spiritual lack and fear.',
    thumbnailUrl: 'https://img.youtube.com/vi/d3x36P72HgI/hqdefault.jpg',
  },
  {
    id: 'vid-1C74ty-yRYc',
    episodeNumber: 1,
    title: 'It Shall End in Praise Ep 1 || Ending the Shame and Restoring the Lost Years',
    seekerName: 'It Shall End in Praise Series',
    scripture: 'Joel 2:18–27 • Romans 8:28',
    videoEmbedUrl: 'https://www.youtube.com/embed/1C74ty-yRYc',
    duration: '42:15',
    releaseDay: 'Tuesday',
    publishedAt: 'Foundational Broadcast',
    summary: 'Pastor Solomon Amao begins the acclaimed series unveiling God’s supernatural covenant promise to redeem seasons of shame and loss into lasting praise.',
    thumbnailUrl: 'https://img.youtube.com/vi/1C74ty-yRYc/hqdefault.jpg',
  },
  {
    id: 'vid-ZMJsAs7hrvY',
    episodeNumber: 2,
    title: 'It Shall End in Praise Ep 2 || The Smallness that Attracts God',
    seekerName: 'It Shall End in Praise Series',
    scripture: 'Zechariah 4:1–10',
    videoEmbedUrl: 'https://www.youtube.com/embed/ZMJsAs7hrvY',
    duration: '38:30',
    releaseDay: 'Friday',
    publishedAt: 'Broadcast Episode',
    summary: 'Do not despise the day of small beginnings. Understanding how God’s Spirit operates through human humility rather than worldly might.',
    thumbnailUrl: 'https://img.youtube.com/vi/ZMJsAs7hrvY/hqdefault.jpg',
  },
];

// Helper to interact with LocalStorage
const STORAGE_KEYS = {
  ARTICLES: 'living_letters_articles_v2',
  VIDEOS: 'living_letters_videos_v2',
};

export function getArticles(): Article[] {
  if (typeof window === 'undefined') return INITIAL_ARTICLES;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ARTICLES);
    return data ? JSON.parse(data) : INITIAL_ARTICLES;
  } catch (e) {
    console.error('Failed to load articles from storage', e);
    return INITIAL_ARTICLES;
  }
}

export function saveArticle(article: Article): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getArticles();
    const updated = [article, ...current.filter((a) => a.id !== article.id)];
    localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(updated));
    window.dispatchEvent(new Event('ll-content-updated'));
  } catch (e) {
    console.error('Failed to save article to storage', e);
  }
}

export function getVideoQuestions(): VideoQuestion[] {
  if (typeof window === 'undefined') return INITIAL_VIDEOS;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.VIDEOS);
    return data ? JSON.parse(data) : INITIAL_VIDEOS;
  } catch (e) {
    console.error('Failed to load videos from storage', e);
    return INITIAL_VIDEOS;
  }
}

export function saveVideoQuestion(video: VideoQuestion): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getVideoQuestions();
    const updated = [video, ...current.filter((v) => v.id !== video.id)];
    localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(updated));
    window.dispatchEvent(new Event('ll-content-updated'));
  } catch (e) {
    console.error('Failed to save video to storage', e);
  }
}
