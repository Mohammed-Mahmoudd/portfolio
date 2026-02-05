export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://mohammed-mahmoud.com/sitemap.xml',
  }
}
