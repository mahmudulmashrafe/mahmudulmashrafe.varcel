import { MetadataRoute } from 'next';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = PORTFOLIO_DATA.profile.seo.siteUrl;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/thanks`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
