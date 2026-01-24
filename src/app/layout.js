import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import ClientLayout from "@/components/ClientLayout";
import CustomCursor from "@/components/CustomCursor";
import { TransitionProvider } from "@/components/TransitionCurtain";
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
  title: "Mohammed Mahmoud | Full Stack Developer",
  description: "Portfolio of Mohammed Mahmoud",
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
