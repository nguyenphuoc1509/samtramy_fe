import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/context/AuthProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sâm Trà My",
  description: "Sâm Trà My - Sản phẩm thiên nhiên cao cấp",
  keywords: "Samtramy, Sản phẩm thiên nhiên cao cấp, Sản phẩm thiên nhiên, Sản phẩm cao cấp",
  authors: [{ name: "Sâm Trà My", url: "https://samtramy.com" }],
  openGraph: {
    title: "Sâm Trà My",
    description: "Sâm Trà My - Sản phẩm thiên nhiên cao cấp",
    url: "https://samtramy.com",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
