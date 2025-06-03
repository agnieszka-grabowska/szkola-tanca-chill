"use client";

import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram, FiAlertCircle, FiMenu, FiX } from "react-icons/fi";
import Logo from "../../svg/Logo";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { Simplify, SocialMediaDocumentData } from "../../../prismicio-types";
import styles from "./Header.module.css";

export default function Nav({ socialMedia }: { socialMedia: Simplify<SocialMediaDocumentData> }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
        <Logo />
      </Link>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeIcon} onClick={() => setIsOpen(false)}>
          <FiX size={24} />
        </button>
        <ol className={styles.navList}>
          <li>
            <Link href="/o-mnie" onClick={() => setIsOpen(false)}>
              O mnie
            </Link>
          </li>
          <li>
            <Link href="/#oferta" onClick={() => setIsOpen(false)}>
              Oferta
            </Link>
          </li>
          <li>
            <Link href="/#harmonogram" onClick={() => setIsOpen(false)}>
              Harmonogram
            </Link>
          </li>
          <li>
            <Link href="/galeria" onClick={() => setIsOpen(false)}>
              Galeria
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setIsOpen(false)}>
              Kontakt
            </Link>
          </li>
          <li>
            <SocialMedia socialMedia={socialMedia} className={styles.socialMediaMobile} />
          </li>
        </ol>
      </nav>
      <SocialMedia socialMedia={socialMedia} />
      <button className={styles.menuIcon} onClick={() => setIsOpen(true)}>
        <FiMenu size={24} />
      </button>
    </>
  );
}

function SocialMedia({
  socialMedia,
  className,
}: {
  socialMedia: Simplify<SocialMediaDocumentData>;
  className?: string;
}) {
  return (
    <ul className={`${styles.socialMedia} ${className || ""}`}>
      {socialMedia.links.map((item) => (
        <li key={item.name.text}>
          <PrismicNextLink field={item.name}>
            {item.name.text?.toLowerCase() === "facebook" && <FiFacebook size={24} />}
            {item.name.text?.toLowerCase() === "instagram" && <FiInstagram size={24} />}
            {item.name.text?.toLowerCase() !== "instagram" &&
              item.name.text?.toLowerCase() !== "facebook" && <FiAlertCircle size={24} />}
          </PrismicNextLink>
        </li>
      ))}
    </ul>
  );
}
