import Link from 'next/link';

import { ChevronLeft } from 'lucide-react';

export default function CreateBlogPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <Link href="/admin" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Admin
            </Link>
          
        </div>
    );
}
