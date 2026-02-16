import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { getWordPressPosts, transformWordPressPost } from '@/lib/wordpress';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: PageProps) {
    const { id } = await params;
    const wpPosts = await getWordPressPosts();
    const posts = wpPosts.map(transformWordPressPost);
    const post = posts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <Link href="/admin" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Admin
            </Link>
        </div>
    );
}
