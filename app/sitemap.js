// Next.js generates /sitemap.xml from this file at build time.
// Single-page marketing site → one canonical URL. Add entries here when new routes ship.
export default function sitemap() {
  return [
    {
      url: 'https://fatafatdecor.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
