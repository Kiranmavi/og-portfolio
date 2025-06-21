import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiran's Portfolio",
  description: 'Software Engineer & Data Scientist Portfolio',
  metadataBase: new URL('https://kiran-portfolio.netlify.app'),
  openGraph: {
    title: "Kiran Balasubramanian | Portfolio",
    description: "Full Stack Developer & Designer specializing in creating innovative web experiences with modern technologies.",
    url: "https://kiran-portfolio.netlify.app",
    siteName: "Kiran Balasubramanian Portfolio",
    images: [
      {
        url: "/proj-portfolio1.jpeg",
        width: 1200,
        height: 630,
        alt: "Kiran Tariq Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran | Portfolio",
    description: "Software Developer specializing in creating innovative web experiences with modern technologies.",
    creator: "@Kiran",
    images: ["/proj-portfolio1.jpeg"],
  },
  icons: {
    icon: '/zeejlogo.png',
    shortcut: '/zeejlogo.png',
    apple: '/zeejlogo.png',
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
        <link rel="icon" href="/zeejlogo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
