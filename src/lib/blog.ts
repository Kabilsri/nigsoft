// Type definitions for Blog system
// Database functions are in blog-db.ts

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    content: string;
    coverImage: string;
    author: string;
    publishedAt: string;
    tags: string[];
}
