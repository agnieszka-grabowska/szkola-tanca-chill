import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { lexend } from "@/app/fonts";
import "./globals.css";
import Header from "@/components/Header/Header";
import Logo from "@/svg/Logo";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>
        <Header />
        <div className="parallax">
          <div className="parallax-layer layer2">
            <Logo />
          </div>
          {children}
          <Footer />
        </div>
      </body>

      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
