import { NextRequest, NextResponse } from 'next/server';
import { getTabs, createTab, updateTab, deleteTab } from '@/lib/shop-db';
import { isAuthenticated, unauthorizedResponse } from '@/lib/auth-helper';

export async function GET() {
    const tabs = await getTabs();
    return NextResponse.json(tabs);
}

export async function POST(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return unauthorizedResponse();
    }
    const data = await request.json();
    const tab = await createTab(data);
    return NextResponse.json(tab);
}

export async function PUT(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return unauthorizedResponse();
    }
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    
    const data = await request.json();
    const tab = await updateTab(id, data);
    return NextResponse.json(tab);
}

export async function DELETE(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return unauthorizedResponse();
    }
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    
    await deleteTab(id);
    return NextResponse.json({ success: true });
}
