import ContactContent from './ContactContent'

export const metadata = {
  title: "Contact | Mohammed Mahmoud",
  description: "Get in touch with Mohammed Mahmoud, an expert Web & Full Stack Developer. Available for collaborations on premium web and mobile projects.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact | Mohammed Mahmoud",
    description: "Get in touch for premium web development, mobile apps, and 3D experiences.",
    url: "https://mohammed-mahmoud.com/contact",
  },
}

export default function ContactPage() {
  return <ContactContent />
}
