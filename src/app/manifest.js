export default function manifest() {
  return {
    name: 'Mohammed Mahmoud Portfolio',
    short_name: 'Mohammed Mahmoud',
    description: 'Full Stack Developer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/letter-m.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/letter-m.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
