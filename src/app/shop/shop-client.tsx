"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from "@/components/ui/button";
import * as motion from 'framer-motion/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { ShopProduct, ShopTab, ProductReview } from "@/lib/shop";

interface ShopClientProps {
  products: ShopProduct[];
  tabs: ShopTab[];
  reviews: ProductReview[];
}

export default function ShopClient({ products, tabs, reviews }: ShopClientProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || '');
  const autoplay = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const currentTab = tabs.find(t => t.id === activeTab);
  
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.tabId === activeTab);
  }, [activeTab, products]);

  const tabReviews = useMemo(() => {
    return reviews.filter(r => r.tabId === activeTab);
  }, [activeTab, reviews]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      product: selectedProduct,
      formType: 'Product Enquiry'
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        toast.success("Enquiry sent successfully!");
        setTimeout(() => {
          setIsDialogOpen(false);
          setIsSuccess(false);
        }, 2000);
      } else {
        toast.error(result.message || "Failed to send enquiry.");
      }
    } catch (error) {
      console.error("Enquiry error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Navigation />
        <div className="pt-28 pb-20">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">No Products Available</h1>
            <p className="text-gray-600">Products will appear here once added from the admin panel.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white px-6">
        <div className="container max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter text-black leading-[0.9] mb-8">
                Innovative Products for
                <span className="block text-gray-300">
                  Business & Lifestyle
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-medium text-gray-900 leading-tight mb-8 max-w-xl">
                Discover our curated selection of cutting-edge hardware, smart devices, and essential tools designed to elevate your operations and daily life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
            >
              <img
                src="/images/blog.png"
                alt="Healthcare and Technology Abstract"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-6 bg-white relative overflow-hidden border-y border-gray-100">
        <div className="container max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <Button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full h-full min-h-[100px] flex flex-col items-center justify-center gap-2 p-4 text-xl font-bold transition-all duration-300 rounded-2xl ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-br from-blue-500 to-blue-500 text-white shadow-xl shadow-blue-200 scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105'
                    }`}
                  >
                    <span className="text-center leading-tight">{tab.name}</span>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.9] mb-6">
                Explore Our
                <span className="block text-gray-300">
                  Product Range
                </span>
              </h2>
              <p className="text-xl md:text-2xl font-medium text-gray-600 leading-tight">
                Browse through our comprehensive collection of healthcare technology solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container max-w-[1400px] mx-auto">
          <div className="mb-12">
            <h2 className="text-6xl md:text-5xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.9] mb-6">{currentTab?.name}</h2>
            <p className="block text-black-300">{currentTab?.description}</p>
          </div>

          <div className="space-y-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-3xl p-6 hover:shadow-lg hover:border-1 border-gray-100 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 items-center">
                  <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority={index < 6}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-lg mb-4 w-fit">
                      {product.badge}
                    </span>

                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'fill-gray-200 text-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                          {product.rating >= 4.5 ? 'Highly Recommended' : 'Recommended'}
                        </span>
                      </div>

                      <Link href={`/shop/${product.slug}`}>
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-base group"
                        >
                          View Details
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {tabReviews.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="container max-w-[1400px] mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              <span className="text-gray-900">What Our </span>
              <span className="text-blue-400">Hospital Partners</span>
              <span className="text-gray-900"> Say </span>
            </h2>
            <div className="relative w-full max-w-4xl mx-auto mt-16">
              <Carousel
                plugins={[autoplay.current]}
                opts={{ loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {tabReviews.map((review) => (
                    <CarouselItem key={review.id}>
                      <div className="p-1">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                          <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                            "{review.comment}"
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                              {review.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h4 className="text-gray-900 font-bold text-lg">{review.author}</h4>
                              <p className="text-gray-500 text-sm">{review.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 h-8 w-8 text-slate-500 hover:text-purple-600 z-10 bg-transparent border-none hover:bg-purple-50">
                  <ChevronLeft size={32} />
                </CarouselPrevious>
                <CarouselNext className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 h-8 w-8 text-slate-500 hover:text-purple-600 z-10 bg-transparent border-none hover:bg-purple-50">
                  <ChevronRight size={32} />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </section>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent!</h3>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Product Enquiry</DialogTitle>
                <DialogDescription>
                  Interested in {selectedProduct}? Fill out the form below.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} />
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
