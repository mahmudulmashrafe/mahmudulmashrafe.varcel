import { MetadataRoute } from 'next';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${PORTFOLIO_DATA.profile.seo.siteUrl}/sitemap.xml`,
  };
}
