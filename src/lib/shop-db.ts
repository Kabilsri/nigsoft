import pool from './db';
import { ShopProduct, ShopTab, ProductReview } from './shop';

// Products
export async function getProducts(): Promise<ShopProduct[]> {
  const [rows] = await pool.query('SELECT * FROM shop_products ORDER BY published_at DESC');
  return (rows as any[]).map(row => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: row.category,
    description: row.description,
    image: row.image,
    badge: row.badge,
    rating: row.rating,
    tabId: row.tab_id,
    specs: JSON.parse(row.specs || '[]'),
    publishedAt: row.published_at
  }));
}

export async function getProductBySlug(slug: string): Promise<ShopProduct | null> {
  const [rows] = await pool.query('SELECT * FROM shop_products WHERE slug = ?', [slug]);
  const products = rows as any[];
  if (products.length === 0) return null;
  const row = products[0];
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: row.category,
    description: row.description,
    image: row.image,
    badge: row.badge,
    rating: row.rating,
    tabId: row.tab_id,
    specs: JSON.parse(row.specs || '[]'),
    publishedAt: row.published_at
  };
}

export async function createProduct(product: Omit<ShopProduct, 'id' | 'publishedAt'>): Promise<ShopProduct> {
  const id = Date.now().toString();
  const publishedAt = new Date();
  
  await pool.query(
    `INSERT INTO shop_products (id, name, slug, category, description, image, badge, rating, tab_id, specs, published_at) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, product.name, product.slug, product.category, product.description, product.image, 
     product.badge, product.rating, product.tabId, JSON.stringify(product.specs), publishedAt]
  );

  return { id, publishedAt: publishedAt.toISOString(), ...product } as ShopProduct;
}

export async function updateProduct(id: string, data: Partial<ShopProduct>): Promise<ShopProduct | null> {
  const updates: string[] = [];
  const values: any[] = [];

  if (data.name) { updates.push('name = ?'); values.push(data.name); }
  if (data.slug) { updates.push('slug = ?'); values.push(data.slug); }
  if (data.category) { updates.push('category = ?'); values.push(data.category); }
  if (data.description) { updates.push('description = ?'); values.push(data.description); }
  if (data.image) { updates.push('image = ?'); values.push(data.image); }
  if (data.badge) { updates.push('badge = ?'); values.push(data.badge); }
  if (data.rating) { updates.push('rating = ?'); values.push(data.rating); }
  if (data.tabId) { updates.push('tab_id = ?'); values.push(data.tabId); }
  if (data.specs) { updates.push('specs = ?'); values.push(JSON.stringify(data.specs)); }

  if (updates.length === 0) return null;

  values.push(id);
  await pool.query(`UPDATE shop_products SET ${updates.join(', ')} WHERE id = ?`, values);

  return getProductBySlug((await pool.query('SELECT slug FROM shop_products WHERE id = ?', [id]) as any)[0][0].slug);
}

export async function deleteProduct(id: string): Promise<boolean> {
  const [result] = await pool.query('DELETE FROM shop_products WHERE id = ?', [id]);
  return (result as any).affectedRows > 0;
}

// Tabs
export async function getTabs(): Promise<ShopTab[]> {
  const [rows] = await pool.query('SELECT * FROM shop_tabs ORDER BY order_num');
  return (rows as any[]).map(row => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description,
    order: row.order_num
  }));
}

export async function createTab(tab: Omit<ShopTab, 'id'>): Promise<ShopTab> {
  const id = Date.now().toString();
  await pool.query(
    'INSERT INTO shop_tabs (id, name, slug, description, order_num) VALUES (?, ?, ?, ?, ?)',
    [id, tab.name, tab.slug, tab.description, tab.order]
  );
  return { id, ...tab };
}

export async function updateTab(id: string, data: Partial<ShopTab>): Promise<ShopTab | null> {
  const updates: string[] = [];
  const values: any[] = [];

  if (data.name) { updates.push('name = ?'); values.push(data.name); }
  if (data.slug) { updates.push('slug = ?'); values.push(data.slug); }
  if (data.description) { updates.push('description = ?'); values.push(data.description); }
  if (data.order !== undefined) { updates.push('order_num = ?'); values.push(data.order); }

  if (updates.length === 0) return null;

  values.push(id);
  await pool.query(`UPDATE shop_tabs SET ${updates.join(', ')} WHERE id = ?`, values);

  const [rows] = await pool.query('SELECT * FROM shop_tabs WHERE id = ?', [id]);
  const tabs = rows as any[];
  if (tabs.length === 0) return null;
  const row = tabs[0];
  return { id: row.id, name: row.name, slug: row.slug, description: row.description, order: row.order_num };
}

export async function deleteTab(id: string): Promise<boolean> {
  const [result] = await pool.query('DELETE FROM shop_tabs WHERE id = ?', [id]);
  return (result as any).affectedRows > 0;
}

// Reviews
export async function getReviews(): Promise<ProductReview[]> {
  const [rows] = await pool.query('SELECT * FROM shop_reviews ORDER BY created_at DESC');
  return (rows as any[]).map(row => ({
    id: row.id,
    productId: row.product_id,
    tabId: row.tab_id,
    author: row.author,
    role: row.role,
    rating: row.rating,
    comment: row.comment,
    avatar: row.avatar,
    createdAt: row.created_at
  }));
}

export async function getReviewsByProduct(productId: string): Promise<ProductReview[]> {
  const [rows] = await pool.query('SELECT * FROM shop_reviews WHERE product_id = ? ORDER BY created_at DESC', [productId]);
  return (rows as any[]).map(row => ({
    id: row.id,
    productId: row.product_id,
    tabId: row.tab_id,
    author: row.author,
    role: row.role,
    rating: row.rating,
    comment: row.comment,
    avatar: row.avatar,
    createdAt: row.created_at
  }));
}

export async function createReview(review: Omit<ProductReview, 'id' | 'createdAt'>): Promise<ProductReview> {
  const id = Date.now().toString();
  const createdAt = new Date();

  await pool.query(
    `INSERT INTO shop_reviews (id, product_id, tab_id, author, role, rating, comment, avatar, created_at) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, review.productId || null, review.tabId, review.author, review.role, review.rating, review.comment, review.avatar || null, createdAt]
  );

  return { id, createdAt: createdAt.toISOString(), ...review } as ProductReview;
}

export async function deleteReview(id: string): Promise<boolean> {
  const [result] = await pool.query('DELETE FROM shop_reviews WHERE id = ?', [id]);
  return (result as any).affectedRows > 0;
}
