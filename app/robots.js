// Next.js generates /robots.txt from this file at build time.
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://fatafatdecor.com/sitemap.xml',
    host: 'https://fatafatdecor.com',
  };
}
