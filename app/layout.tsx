import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "She Can Foundation – Empowering Women, Transforming Futures",
  description:
    "She Can Foundation is dedicated to empowering women through education, leadership, entrepreneurship, skill development, and community impact. Join us in creating opportunities for a better tomorrow.",
  keywords: [
    "women empowerment",
    "NGO",
    "education",
    "leadership",
    "entrepreneurship",
    "skill development",
    "community",
    "She Can Foundation",
  ],
  openGraph: {
    title: "She Can Foundation – Empowering Women, Transforming Futures",
    description:
      "Creating opportunities through education, mentorship, entrepreneurship and community support.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
