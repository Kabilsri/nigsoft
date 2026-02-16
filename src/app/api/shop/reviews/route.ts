import { NextRequest, NextResponse } from 'next/server';
import { getReviews, getReviewsByProduct, createReview, deleteReview } from '@/lib/shop-db';
import { isAuthenticated, unauthorizedResponse } from '@/lib/auth-helper';
import { sanitizeReviewData } from '@/lib/sanitize';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');
    
    if (productId) {
        const reviews = await getReviewsByProduct(productId);
        return NextResponse.json(reviews);
    }
    
    const reviews = await getReviews();
    return NextResponse.json(reviews);
}

export async function POST(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return unauthorizedResponse();
    }
    const data = await request.json();
    const sanitizedData = sanitizeReviewData(data);
    const review = await createReview(sanitizedData);
    return NextResponse.json(review);
}

export async function PUT(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return unauthorizedResponse();
    }
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    
    const data = await request.json();
    const reviews = await getReviews();
    const index = reviews.findIndex((r: any) => r.id === id);
    
    if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    
    reviews[index] = { ...reviews[index], ...data };
    // Save to database logic here
    
    return NextResponse.json(reviews[index]);
}

export async function DELETE(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return unauthorizedResponse();
    }
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    
    await deleteReview(id);
    return NextResponse.json({ success: true });
}
