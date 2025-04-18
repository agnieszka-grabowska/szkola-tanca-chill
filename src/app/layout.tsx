import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { playfair, lexend } from "@/app/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} ${playfair.variable}`}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
