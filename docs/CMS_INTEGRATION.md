# CMS Integration Guide

This document outlines the strategy for integrating a Headless CMS (Strapi or Sanity) with the ModularBox container configurator platform.

## 🎯 CMS Recommendation

**Recommended: Strapi** (v4+)

### Why Strapi?

- ✅ Open-source and self-hosted option
- ✅ Excellent REST and GraphQL API
- ✅ Easy to customize content types
- ✅ Built-in media library
- ✅ Role-based access control
- ✅ Great for product catalogs

**Alternative: Sanity** - Also excellent, more cloud-focused, powerful content modeling

## 📦 Content Types Structure

### 1. Products

```javascript
// Strapi Schema: api/product/content-types/product/schema.json
{
  "kind": "collectionType",
  "collectionName": "products",
  "info": {
    "singularName": "product",
    "pluralName": "products",
    "displayName": "Product"
  },
  "attributes": {
    "name": { "type": "string", "required": true },
    "slug": { "type": "uid", "targetField": "name" },
    "category": {
      "type": "enumeration",
      "enum": ["living", "office", "sanitary", "refrigerated", "storage", "custom"],
      "required": true
    },
    "description": { "type": "text", "required": true },
    "shortDescription": { "type": "string" },
    "features": { "type": "json" }, // Array of strings
    "specifications": { "type": "json" }, // Key-value pairs
    "images": { "type": "media", "multiple": true },
    "thumbnailImage": { "type": "media", "multiple": false },
    "priceRange": { "type": "string" },
    "basePrice": { "type": "decimal" },
    "featured": { "type": "boolean", "default": false },
    "published": { "type": "boolean", "default": false },
    "seoTitle": { "type": "string" },
    "seoDescription": { "type": "text" },
    "publishedAt": { "type": "datetime" }
  }
}
```

### 2. Projects (Portfolio)

```javascript
{
  "kind": "collectionType",
  "collectionName": "projects",
  "info": {
    "singularName": "project",
    "pluralName": "projects",
    "displayName": "Project"
  },
  "attributes": {
    "title": { "type": "string", "required": true },
    "slug": { "type": "uid", "targetField": "title" },
    "category": {
      "type": "enumeration",
      "enum": ["living", "office", "sanitary", "refrigerated", "storage", "custom"]
    },
    "description": { "type": "text" },
    "images": { "type": "media", "multiple": true },
    "featuredImage": { "type": "media", "multiple": false },
    "location": { "type": "string" },
    "completionDate": { "type": "date" },
    "client": { "type": "string" },
    "containerCount": { "type": "integer" },
    "features": { "type": "json" },
    "featured": { "type": "boolean", "default": false },
    "published": { "type": "boolean", "default": true }
  }
}
```

### 3. Testimonials

```javascript
{
  "kind": "collectionType",
  "collectionName": "testimonials",
  "info": {
    "singularName": "testimonial",
    "pluralName": "testimonials",
    "displayName": "Testimonial"
  },
  "attributes": {
    "name": { "type": "string", "required": true },
    "company": { "type": "string" },
    "role": { "type": "string" },
    "content": { "type": "text", "required": true },
    "rating": { 
      "type": "integer", 
      "min": 1, 
      "max": 5, 
      "default": 5 
    },
    "image": { "type": "media", "multiple": false },
    "date": { "type": "date" },
    "featured": { "type": "boolean", "default": false },
    "published": { "type": "boolean", "default": true }
  }
}
```

### 4. Blog Posts

```javascript
{
  "kind": "collectionType",
  "collectionName": "posts",
  "info": {
    "singularName": "post",
    "pluralName": "posts",
    "displayName": "Post"
  },
  "attributes": {
    "title": { "type": "string", "required": true },
    "slug": { "type": "uid", "targetField": "title" },
    "excerpt": { "type": "text" },
    "content": { "type": "richtext", "required": true },
    "coverImage": { "type": "media", "multiple": false },
    "author": { "type": "relation", "relation": "manyToOne", "target": "plugin::users-permissions.user" },
    "category": { 
      "type": "enumeration",
      "enum": ["news", "guides", "case-studies", "tips"]
    },
    "tags": { "type": "json" },
    "seoTitle": { "type": "string" },
    "seoDescription": { "type": "text" },
    "publishedAt": { "type": "datetime" },
    "featured": { "type": "boolean", "default": false }
  }
}
```

### 5. Configurator Pricing Rules

```javascript
{
  "kind": "singleType",
  "collectionName": "pricing_rules",
  "info": {
    "singularName": "pricing-rule",
    "pluralName": "pricing-rules",
    "displayName": "Pricing Rules"
  },
  "attributes": {
    "basePrice": { "type": "decimal", "default": 3500 },
    "sizeMultipliers": { "type": "json" }, // { "20ft": 1.0, "40ft": 1.8, ... }
    "doorPrices": { "type": "json" }, // { "standard": 350, "double": 650, ... }
    "windowPrices": { "type": "json" },
    "insulationPrice": { "type": "decimal" },
    "interiorFinishPrices": { "type": "json" },
    "flooringPrices": { "type": "json" },
    "electricalPrice": { "type": "decimal" },
    "hvacPrice": { "type": "decimal" },
    "lastUpdated": { "type": "datetime" }
  }
}
```

### 6. FAQ

```javascript
{
  "kind": "collectionType",
  "collectionName": "faqs",
  "info": {
    "singularName": "faq",
    "pluralName": "faqs",
    "displayName": "FAQ"
  },
  "attributes": {
    "question": { "type": "string", "required": true },
    "answer": { "type": "text", "required": true },
    "category": { 
      "type": "enumeration",
      "enum": ["general", "ordering", "shipping", "customization", "technical"]
    },
    "order": { "type": "integer", "default": 0 },
    "published": { "type": "boolean", "default": true }
  }
}
```

### 7. Quote Requests (Form Submissions)

```javascript
{
  "kind": "collectionType",
  "collectionName": "quote_requests",
  "info": {
    "singularName": "quote-request",
    "pluralName": "quote-requests",
    "displayName": "Quote Request"
  },
  "attributes": {
    "name": { "type": "string", "required": true },
    "email": { "type": "email", "required": true },
    "phone": { "type": "string" },
    "company": { "type": "string" },
    "configuration": { "type": "json" }, // Full configurator state
    "estimatedPrice": { "type": "decimal" },
    "message": { "type": "text" },
    "status": {
      "type": "enumeration",
      "enum": ["new", "contacted", "quoted", "converted", "declined"],
      "default": "new"
    },
    "submittedAt": { "type": "datetime" },
    "notes": { "type": "text" }
  }
}
```

## 🔌 API Integration

### Installation

```bash
npm install @strapi/strapi axios swr
```

### API Client Setup

```typescript
// lib/api/client.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337';
const API_TOKEN = process.env.CMS_API_TOKEN;

export const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

// Fetch products
export async function getProducts(category?: string) {
  const params = category ? { filters: { category: { $eq: category } } } : {};
  const response = await apiClient.get('/products', { params });
  return response.data;
}

// Fetch single product
export async function getProduct(slug: string) {
  const response = await apiClient.get(`/products`, {
    params: {
      filters: { slug: { $eq: slug } },
      populate: '*'
    }
  });
  return response.data.data[0];
}

// Fetch projects
export async function getProjects(featured?: boolean) {
  const params = featured ? { filters: { featured: { $eq: true } } } : {};
  const response = await apiClient.get('/projects', { params });
  return response.data;
}

// Fetch testimonials
export async function getTestimonials(limit = 10) {
  const response = await apiClient.get('/testimonials', {
    params: {
      filters: { published: { $eq: true } },
      sort: 'date:desc',
      pagination: { limit }
    }
  });
  return response.data;
}

// Submit quote request
export async function submitQuoteRequest(data: any) {
  const response = await apiClient.post('/quote-requests', { data });
  return response.data;
}

// Get pricing rules
export async function getPricingRules() {
  const response = await apiClient.get('/pricing-rule');
  return response.data.data.attributes;
}
```

### Using SWR for Data Fetching

```typescript
// hooks/useProducts.ts
import useSWR from 'swr';
import { getProducts } from '@/lib/api/client';

export function useProducts(category?: string) {
  const { data, error, isLoading } = useSWR(
    ['products', category],
    () => getProducts(category),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    products: data?.data || [],
    isLoading,
    error,
  };
}
```

### Page Implementation Example

```typescript
// app/products/page.tsx
import { getProducts } from '@/lib/api/client';

export default async function ProductsPage() {
  const { data: products } = await getProducts();

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product.attributes} />
      ))}
    </div>
  );
}
```

## 🚀 Deployment

### 1. Deploy Strapi CMS

**Option A: Self-hosted**
```bash
# Deploy to VPS, AWS, DigitalOcean
npm run build
npm run start
```

**Option B: Strapi Cloud**
- Visit [cloud.strapi.io](https://cloud.strapi.io)
- One-click deployment

**Option C: Railway/Render**
- Connect Git repository
- Auto-deploy on push

### 2. Configure Frontend

```env
NEXT_PUBLIC_CMS_URL=https://your-cms.com
CMS_API_TOKEN=your_token_here
```

### 3. Set up Webhooks

Configure Strapi to trigger Next.js revalidation:

```javascript
// Strapi webhook configuration
{
  "url": "https://your-nextjs-app.com/api/revalidate",
  "headers": {
    "x-revalidate-token": "your-secret-token"
  },
  "events": ["entry.create", "entry.update", "entry.delete"]
}
```

```typescript
// app/api/revalidate/route.ts
export async function POST(request: Request) {
  const token = request.headers.get('x-revalidate-token');
  
  if (token !== process.env.REVALIDATE_TOKEN) {
    return Response.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Revalidate specific paths
    revalidatePath('/products');
    revalidatePath('/portfolio');
    return Response.json({ revalidated: true });
  } catch (err) {
    return Response.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
```

## 📊 Media Management

### Image Optimization

```typescript
// Use Next.js Image component with CMS images
import Image from 'next/image';

function ProductImage({ image }) {
  const imageUrl = `${process.env.NEXT_PUBLIC_CMS_URL}${image.url}`;
  
  return (
    <Image
      src={imageUrl}
      alt={image.alternativeText || 'Product image'}
      width={image.width}
      height={image.height}
      placeholder="blur"
      blurDataURL={image.formats?.thumbnail?.url}
    />
  );
}
```

## 🔒 Security

- Use API tokens for authenticated requests
- Implement rate limiting
- Validate all inputs
- Use HTTPS only
- Set proper CORS policies in Strapi

## 📱 Testing

```bash
# Test CMS connection
curl https://your-cms.com/api/products

# Test with token
curl -H "Authorization: Bearer YOUR_TOKEN" https://your-cms.com/api/products
```

## 🎯 Next Steps

1. Install and configure Strapi
2. Create content types as specified
3. Populate with initial data
4. Integrate API client in Next.js
5. Replace static data with CMS data
6. Set up webhooks for revalidation
7. Configure media optimization
8. Deploy both CMS and frontend

---

For questions, refer to:
- [Strapi Documentation](https://docs.strapi.io)
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)

