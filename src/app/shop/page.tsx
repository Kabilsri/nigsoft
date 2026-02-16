import { Metadata } from "next";
import { getProducts, getTabs, getReviews } from "@/lib/shop-db";
import ShopClient from "./shop-client";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Shop - Innovative Products | Nigsoft",
  description: "Discover our curated selection of cutting-edge hardware, smart devices, and essential tools designed to elevate your operations and daily life.",
};

export default async function ShopPage() {
  const products = await getProducts();
  const tabs = await getTabs();
  const reviews = await getReviews();

  return <ShopClient products={products} tabs={tabs} reviews={reviews} />;
}
