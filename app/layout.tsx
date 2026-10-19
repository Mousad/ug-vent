import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UG VENT | حلول التهوية الصناعية وطرد الدخان",
    template: "%s | UG VENT",
  },
  description:
    "شركة UG VENT متخصصة في توفير أنظمة التهوية الصناعية وحلول طرد الدخان، ومعدات التهوية للمشروعات الصناعية والتجارية في مصر.",
  applicationName: "UG VENT",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#0B3C6F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
