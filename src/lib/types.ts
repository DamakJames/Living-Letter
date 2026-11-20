export interface Article {
  id: string;
  title: string;
  slug: string;
  author: string;
  scripture: string;
  category: 'Identity in Christ' | 'Holy Spirit' | 'Grace & Faith' | 'Spiritual Growth' | 'Doctrine';
  readTime: string;
  publishedAt: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
}

export interface VideoQuestion {
  id: string;
  episodeNumber: number;
  title: string;
  seekerName: string;
  scripture: string;
  videoEmbedUrl: string; // YouTube, Vimeo, or MP4 embed
  duration: string;
  releaseDay: 'Tuesday' | 'Friday';
  publishedAt: string;
  summary: string;
  detailedNotes?: string;
  thumbnailUrl?: string;
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  scripture: string;
  series?: string;
  duration: string;
  audioUrl: string;
  publishedAt: string;
  description: string;
}

export interface SeriesStudy {
  id: string;
  title: string;
  theme: string;
  scripture: string;
  partsCount: number;
  description: string;
  messages: {
    part: number;
    title: string;
    scripture: string;
    description: string;
  }[];
}
