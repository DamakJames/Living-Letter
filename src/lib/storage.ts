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

export const INITIAL_VIDEOS: VideoQuestion[] = [
  {
    id: 'vid-1',
    episodeNumber: 14,
    title: 'How Do I Discern God’s Voice When Making Major Life Decisions?',
    seekerName: 'Brother Emmanuel',
    scripture: 'John 10:27 • Proverbs 3:5–6 • Romans 12:1–2',
    videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder embed
    duration: '28:45',
    releaseDay: 'Tuesday',
    publishedAt: 'Tuesday Broadcast',
    summary: 'Pastor Solomon breaks down the biblical harmony between the written Word of God, the inward witness of peace, and mature godly counsel when facing crucial life crossroads.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vid-2',
    episodeNumber: 15,
    title: 'Overcoming Lingering Guilt and Condemnation After Repentance',
    seekerName: 'Sister Grace',
    scripture: 'Romans 8:1 • 1 John 1:9 • Hebrews 10:14–17',
    videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '32:10',
    releaseDay: 'Friday',
    publishedAt: 'Friday Broadcast',
    summary: 'Distinguishing between the convicting ministry of the Holy Spirit and the adversary\'s lingering condemnation. Resting in the eternal verdict of the blood of Jesus.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vid-3',
    episodeNumber: 13,
    title: 'What Is the True Biblical Purpose of Fasting and Prayer?',
    seekerName: 'Anonymous Believer',
    scripture: 'Matthew 6:16–18 • Isaiah 58:6–9',
    videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '26:15',
    releaseDay: 'Tuesday',
    publishedAt: 'Tuesday Broadcast',
    summary: 'Why fasting does not change God\'s mind, but aligns the believer\'s soul and physical appetites into sensitivity to the Holy Spirit.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vid-4',
    episodeNumber: 12,
    title: 'How Can I Grow Spiritually When Facing Continual Obstacles?',
    seekerName: 'Joshua M.',
    scripture: 'James 1:2–4 • Romans 5:3–5 • 2 Peter 3:18',
    videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '35:40',
    releaseDay: 'Friday',
    publishedAt: 'Friday Broadcast',
    summary: 'How trials and hardships serve in God\'s sovereign design to mature theoretical faith into experiential authority and unshakable endurance.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
  },
];

export const INITIAL_SERMONS: Sermon[] = [
  {
    id: 'sermon-1',
    title: 'It Shall End in Praise',
    speaker: 'Pastor Solomon Amao',
    scripture: 'Romans 8:28 • Psalm 30:5',
    duration: '42:15',
    audioUrl: 'https://example.com/audio/it-shall-end-in-praise.mp3',
    publishedAt: 'Featured Sermon',
    description: 'An encouraging exposition on why trials in the believer’s life are always engineered by divine sovereignty to culminate in victory and praise.',
  },
  {
    id: 'sermon-2',
    title: 'You Are God’s Letter',
    speaker: 'Pastor Solomon Amao',
    scripture: '2 Corinthians 3:1–6',
    series: 'Living as God’s Letter (Part 1)',
    duration: '48:30',
    audioUrl: 'https://example.com/audio/you-are-gods-letter.mp3',
    publishedAt: 'Series Message',
    description: 'Discovering our new covenant identity as living epistles inscribed by the Spirit of the living God.',
  },
  {
    id: 'sermon-3',
    title: 'The Ink of the Holy Spirit',
    speaker: 'Pastor Solomon Amao',
    scripture: 'Romans 8:1–14 • 2 Corinthians 3:3',
    series: 'Living as God’s Letter (Part 2)',
    duration: '51:10',
    audioUrl: 'https://example.com/audio/the-ink-of-the-holy-spirit.mp3',
    publishedAt: 'Series Message',
    description: 'How the Holy Spirit replaces the dead letter of legalism with the vibrant, life-giving power of grace in human hearts.',
  },
];

// Browser LocalStorage helpers for Pastor Solomon's Admin Access
const ARTICLES_STORAGE_KEY = 'll_ministry_articles';
const VIDEOS_STORAGE_KEY = 'll_ministry_videos';

export function getArticles(): Article[] {
  if (typeof window === 'undefined') return INITIAL_ARTICLES;
  try {
    const raw = localStorage.getItem(ARTICLES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(INITIAL_ARTICLES));
      return INITIAL_ARTICLES;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_ARTICLES;
  }
}

export function saveArticle(article: Omit<Article, 'id' | 'slug' | 'publishedAt'>): Article {
  const articles = getArticles();
  const newArticle: Article = {
    ...article,
    id: `art-${Date.now()}`,
    slug: article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
    publishedAt: 'Just Published',
  };
  const updated = [newArticle, ...articles];
  if (typeof window !== 'undefined') {
    localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('ll-content-updated'));
  }
  return newArticle;
}

export function getVideoQuestions(): VideoQuestion[] {
  if (typeof window === 'undefined') return INITIAL_VIDEOS;
  try {
    const raw = localStorage.getItem(VIDEOS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(VIDEOS_STORAGE_KEY, JSON.stringify(INITIAL_VIDEOS));
      return INITIAL_VIDEOS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_VIDEOS;
  }
}

export function saveVideoQuestion(
  video: Omit<VideoQuestion, 'id' | 'publishedAt' | 'episodeNumber'>
): VideoQuestion {
  const videos = getVideoQuestions();
  const nextEpisode = (videos[0]?.episodeNumber || 15) + 1;
  const newVideo: VideoQuestion = {
    ...video,
    id: `vid-${Date.now()}`,
    episodeNumber: nextEpisode,
    publishedAt: `${video.releaseDay} Broadcast`,
  };
  const updated = [newVideo, ...videos];
  if (typeof window !== 'undefined') {
    localStorage.setItem(VIDEOS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('ll-content-updated'));
  }
  return newVideo;
}
