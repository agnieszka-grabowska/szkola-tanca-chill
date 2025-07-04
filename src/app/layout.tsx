import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { lexend } from "@/app/fonts";
import "./globals.css";
import Header from "@/components/Header/Header";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${lexend.className}`}>
        <Header />
        <div className="parallax">
          <div className="parallax-layer logo">
            <Logo />
          </div>
          {children}
          <Footer />
        </div>
        <Toaster position="bottom-center" />
      </body>

      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
