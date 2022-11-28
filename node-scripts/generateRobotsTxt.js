const fs = require('fs');
require('dotenv').config({ path: './env/.env.prod' });

const generateRobotsTxt = () => {
  const url = process.env.NEXT_PUBLIC_FRONTEND_URL;

  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${url}sitemap.xml
Host: ${url}
  `
    .replace(/^\s+/, '')
    .replace(/\s+$/, '');

  fs.writeFileSync('./public/robots.txt', robotsTxt);
};

generateRobotsTxt();
