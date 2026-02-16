import { NextRequest, NextResponse } from 'next/server';
import { getProducts, getProductBySlug, createProduct, updateProduct, deleteProduct } from '@/lib/shop-db';
import { isAuthenticated, unauthorizedResponse } from '@/lib/auth-helper';
import { ProductSchema } from '@/lib/validation';
import { rateLimit } from '@/lib/rate-limit';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');

        if (slug) {
            const product = await getProductBySlug(slug);
            if (!product) {
                return NextResponse.json({ error: 'Product not found' }, { status: 404 });
            }
            return NextResponse.json(product);
        }

        const products = await getProducts();
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return unauthorizedResponse();
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!rateLimit(`product-post-${ip}`, 10, 60000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    try {
        const body = await request.json();
        
        // Validate input
        const result = ProductSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json({ 
                error: 'Invalid input', 
                details: result.error.issues 
            }, { status: 400 });
        }

        const newProduct = await createProduct(result.data);
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return unauthorizedResponse();
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!rateLimit(`product-put-${ip}`, 10, 60000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Product ID required' }, { status: 400 });
        }

        const body = await request.json();
        
        // Validate input (partial)
        const result = ProductSchema.partial().safeParse(body);
        if (!result.success) {
            return NextResponse.json({ 
                error: 'Invalid input', 
                details: result.error.issues 
            }, { status: 400 });
        }

        const updatedProduct = await updateProduct(id, result.data);

        if (!updatedProduct) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(updatedProduct);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return unauthorizedResponse();
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!rateLimit(`product-delete-${ip}`, 10, 60000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Product ID required' }, { status: 400 });
        }

        const deleted = await deleteProduct(id);

        if (!deleted) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }
}
