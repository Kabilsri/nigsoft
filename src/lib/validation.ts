import { z } from 'zod';

// Shop Product Validation
export const ProductSchema = z.object({
  name: z.string().min(1, 'Name required').max(255, 'Name too long'),
  slug: z.string().min(1).max(255).regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
  category: z.string().min(1, 'Category required').max(255),
  description: z.string().min(1, 'Description required'),
  image: z.string().max(500).optional().default(''),
  badge: z.string().min(1, 'Badge required').max(100),
  rating: z.number().min(1).max(5),
  tabId: z.string().min(1, 'Tab required'),
  specs: z.array(z.object({
    label: z.string().min(1),
    value: z.string().min(1)
  })).default([])
});

// Job Validation
export const JobSchema = z.object({
  title: z.string().min(1, 'Title required').max(255),
  location: z.string().min(1, 'Location required').max(255),
  type: z.string().min(1, 'Type required').max(100),
  description: z.string().min(1, 'Description required'),
  requirements: z.array(z.string()).min(1, 'At least one requirement'),
  responsibilities: z.array(z.string()).min(1, 'At least one responsibility'),
  salaryMin: z.number().optional(),
  salaryMax: z.number().optional(),
  experienceLevel: z.string().max(100).optional(),
  department: z.string().max(255).optional(),
  deadline: z.string().optional()
});

// Review Validation
export const ReviewSchema = z.object({
  productId: z.string().optional(),
  tabId: z.string().min(1, 'Tab required'),
  author: z.string().min(1, 'Author required').max(255),
  role: z.string().min(1, 'Role required').max(255),
  rating: z.number().min(1).max(5),
  comment: z.string().min(1, 'Comment required'),
  avatar: z.string().max(500).optional()
});

// Tab Validation
export const TabSchema = z.object({
  name: z.string().min(1, 'Name required').max(255),
  slug: z.string().min(1).max(255).regex(/^[a-z0-9-]+$/),
  description: z.string().max(500).optional(),
  order: z.number().min(0)
});
