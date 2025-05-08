/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://evop.tech',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    additionalPaths: async () => {
      console.log('Generating sitemap for static pages');
      return [
        {
          loc: '/',
          changefreq: 'daily',
          priority: 1.0,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/services',
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/about',
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/contact',
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        },
      ];
    },
    exclude: ['/404', '/500', '/api/*'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: ['https://evop.tech/sitemap.xml'],
    },
  };