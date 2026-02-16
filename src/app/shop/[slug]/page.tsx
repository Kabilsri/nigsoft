import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, getProducts } from '@/lib/shop-db';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return { title: 'Product Not Found' };
    }

    return {
        title: `${product.name} | Nigsoft Shop`,
        description: product.description,
        openGraph: {
            images: [product.image],
        },
    };
}

export async function generateStaticParams() {
    // Return empty array to use dynamic rendering instead of static generation
    // This prevents database connection errors during build time on Vercel
    return [];
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <article className="pt-32 pb-24">
                <div className="container max-w-4xl mx-auto px-4 text-center mb-12">
                    <Link
                        href="/shop"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary mb-8 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
                    </Link>

                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Badge variant="secondary" className="bg-black text-white">
                            {product.badge}
                        </Badge>
                        <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm font-bold text-gray-700">{product.rating} / 5.0</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                        {product.name}
                    </h1>
                    <p className="text-xl text-primary font-medium">{product.category}</p>
                </div>

                {product.image && (
                    <div className="container max-w-6xl mx-auto px-4 mb-16">
                        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-8"
                                priority
                            />
                        </div>
                    </div>
                )}

                <div className="container max-w-3xl mx-auto px-4">
                    <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                        <p className="text-xl leading-relaxed">{product.description}</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.specs.map((spec, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg">{spec.label}</p>
                                        <p className="text-gray-600">{spec.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact" className="flex-1">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg">
                                Contact Us for Pricing
                            </Button>
                        </Link>
                        <Link href="/shop" className="flex-1">
                            <Button variant="outline" className="w-full py-6 text-lg font-semibold">
                                View More Products
                            </Button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
