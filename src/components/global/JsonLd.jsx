export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohammed Mahmoud',
    url: 'https://mohammed-mahmoud.com',
    jobTitle: 'Web & Full Stack Developer',
    sameAs: [
      'https://github.com/Mohammed-Mahmoudd',
      'https://linkedin.com/in/mohammed-mahmoud-b71578225', // Add your actual LinkedIn URL if different
    ],
    description: 'Expert Web & Full Stack Developer specializing in premium web experiences, high-performance mobile apps, and interactive 3D interfaces.',
    homeLocation: {
      '@type': 'Place',
      name: 'Cairo, Egypt'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cairo',
      addressCountry: 'Egypt'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
