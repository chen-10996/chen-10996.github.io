import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://peng-chen-profile.langdonc18201903582.chatgpt.site";
const title = "Peng Chen | Urban Environmental Scholar";
const description =
  "Research on interactions among built environments, climate-related exposures, public health, and equitable environmental and climate adaptation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/media/peng-chen-portrait-color.jpg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Peng Chen - Urban environments, climate adaptation, environmental health, and environmental justice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
