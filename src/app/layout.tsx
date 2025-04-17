import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { merriweatherSans, lexend } from "@/app/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} ${merriweatherSans.variable}`}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
