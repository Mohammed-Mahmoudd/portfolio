import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import ClientLayout from "@/components/global/ClientLayout";
import CustomCursor from "@/components/global/CustomCursor";
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
  title: {
    default: "Mohammed Mahmoud | Full Stack Developer",
    template: "%s | Mohammed Mahmoud"
  },
  description: "Full Stack Developer specializing in premium web experiences, high-performance mobile apps, and interactive 3D interfaces.",
  keywords: ["Full Stack Developer", "Next.js", "React Native", "Portfolio", "Web Design", "Software Engineer", "Three.js portfolio"],
  authors: [{ name: "Mohammed Mahmoud" }],
  creator: "Mohammed Mahmoud",
  icons: {
    icon: "/letter-m.png",
    apple: "/letter-m.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com", // Replace with your domain when ready
    siteName: "Mohammed Mahmoud Portfolio",
    title: "Mohammed Mahmoud | Full Stack Developer",
    description: "Full Stack Developer specializing in premium web experiences and interactive 3D interfaces.",
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
    title: "Mohammed Mahmoud | Full Stack Developer",
    description: "Full Stack Developer specializing in premium web experiences and interactive 3D interfaces.",
    images: ["/letter-m.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-black cursor-none`}
      >
        <TransitionProvider>
          <CustomCursor />
          <Navbar />
          <ClientLayout>
              {children}
          </ClientLayout>
        </TransitionProvider>
      </body>
    </html>
  );
}
