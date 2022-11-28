const fs = require('fs');
require('dotenv').config({ path: './env/.env.prod' });

const generateSiteMap = () => {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL.slice(0, -1);

  const staticPages = fs
    .readdirSync('./src/pages')
    .filter((staticPage) => !['_app.js', '_document.js', '404.js', 'sitemap.xml.js'].includes(staticPage))
    .map((staticPagePath) => `${baseUrl}/${staticPagePath.slice(0, -3)}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          const formatUrl = url.endsWith('index') ? baseUrl : url;

          return `
            <url>
              <loc>${formatUrl}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync('./public/sitemap.xml', sitemap);
};

generateSiteMap();
