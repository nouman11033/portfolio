import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nouman Jinabade Portfolio",
  description: "Interactive portfolio with an AI-powered avatar that answers questions about Nouman Jinabade, his skills, and his experience in Robotics, Data Science, and Deep Learning.",
  keywords: [
    "Nouman Jinabade", 
    "Portfolio", 
    "Developer", 
    "AI", 
    "Interactive", 
    "avatar", 
    "Web Development",
    "Full Stack",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Nouman Jinabade",
      url: "https://noumanjinabade.com",
    },
  ],
  creator: "Nouman Jinabade",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noumanjinabade.com",
    title: "Nouman Jinabade Portfolio",
    description: "Interactive portfolio with an AI-powered avatar that answers questions about Nouman Jinabade",
    siteName: "Nouman Jinabade Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nouman Jinabade Portfolio",
    description: "Interactive portfolio with an AI-powered avatar that answers questions about Nouman Jinabade, his skills, and his experience in Robotics, Data Science, and Deep Learning.",
    creator: "@nouman11033",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}