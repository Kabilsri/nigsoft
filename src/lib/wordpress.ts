const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://blog.nigsoft.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export async function getWordPressPosts(): Promise<WordPressPost[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  } catch (error) {
    console.error('WordPress API Error:', error);
    return [];
  }
}

export async function getWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('WordPress API Error:', error);
    return null;
  }
}

export function transformWordPressPost(wpPost: WordPressPost) {
  return {
    id: wpPost.id.toString(),
    title: wpPost.title.rendered,
    slug: wpPost.slug,
    shortDescription: wpPost.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200),
    content: wpPost.content.rendered,
    coverImage: wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog.png',
    author: wpPost._embedded?.author?.[0]?.name || 'Nigsoft Team',
    publishedAt: wpPost.date,
    tags: wpPost._embedded?.['wp:term']?.[1]?.map(tag => tag.name) || []
  };
}
