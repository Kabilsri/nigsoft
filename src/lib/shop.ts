// Type definitions for Shop system
// Database functions are in shop-db.ts

export interface ShopProduct {
    id: string;
    name: string;
    slug: string;
    category: string;
    description: string;
    image: string;
    badge: string;
    rating: number;
    specs: { label: string; value: string }[];
    publishedAt: string;
    tabId?: string;
}

export interface ShopTab {
    id: string;
    name: string;
    slug: string;
    description: string;
    order: number;
}

export interface ProductReview {
    id: string;
    productId: string | null;
    tabId: string;
    author: string;
    role: string;
    rating: number;
    comment: string;
    avatar?: string;
    doctorImage?: string;
    createdAt: string;
}
