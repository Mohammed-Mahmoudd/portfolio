import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/global/Navbar";
import ClientLayout from "@/components/global/ClientLayout";
import CustomCursor from "@/components/global/CustomCursor";
import JsonLd from "@/components/global/JsonLd";
import { TransitionProvider } from "@/components/global/TransitionCurtain";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://mohammed-mahmoud.com'),
  title: {
    default: "Mohammed Mahmoud | Full Stack & Web Developer",
    template: "%s | Mohammed Mahmoud"
  },
  description: "Expert Web & Full Stack Developer specializing in premium web experiences, high-performance mobile apps, and interactive 3D interfaces.",
  keywords: [
    "Mohammed Mahmoud",
    "Web Developer", 
    "Full Stack Developer", 
    "Creative Developer",
    "Interactive Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Three.js Portfolio",
    "WebGL Developer",
    "Frontend Engineer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "UI/UX Design",
    "Portfolio Website",
    "Digital Experience",
    "3D Web Design",
    "Freelance Web Developer Egypt",
    "Custom Web Applications",
    "Performance Optimization",
    "Modern Web Development",
    "Full stack developer for custom web applications",
    "React and Next.js developer for hire",
    "Creative developer specializing in 3D web experiences",
    "Expert in high-performance WebGL and Three.js development",
    "Modern web developer for premium digital experiences",
    "Hire a creative developer for interactive websites",
    "Professional web developer Cairo Egypt",
    "Full stack JavaScript developer for startups",
    "Web Developer in egypt",
    "cairo web developer",
    "Full stack developer in egypt",
  ],
  authors: [{ name: "Mohammed Mahmoud" }],
  creator: "Mohammed Mahmoud",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/letter-m.png",
    apple: "/letter-m.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammed-mahmoud.com",
    siteName: "Mohammed Mahmoud Portfolio",
    title: "Mohammed Mahmoud | Full Stack & Web Developer",
    description: "Expert Web & Full Stack Developer specializing in premium web experiences and interactive 3D interfaces.",
    images: [
      {
        url: "/letter-m.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Mahmoud Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mahmoud | Full Stack & Web Developer",
    description: "Expert Web & Full Stack Developer specializing in premium web experiences and interactive 3D interfaces.",
    images: ["/letter-m.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QF537PGQEV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QF537PGQEV');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-black cursor-none`}
      >
        <TransitionProvider>
          <CustomCursor />
          <Navbar />
          <ClientLayout>
              {children}
              <JsonLd />
          </ClientLayout>
        </TransitionProvider>
      </body>
    </html>
  );
}
