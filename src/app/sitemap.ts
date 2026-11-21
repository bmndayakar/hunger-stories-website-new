import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-static';

const routes = [
  { path: '/', priority: 1 },
  { path: '/catering/', priority: 0.9 },
  { path: '/corporate-meals/', priority: 0.8 },
  { path: '/our-food/', priority: 0.7 },
  { path: '/our-story/', priority: 0.6 },
  { path: '/contact/', priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: new URL(path, siteConfig.brand.domain).toString(),
    changeFrequency: 'monthly',
    priority,
  }));
}
