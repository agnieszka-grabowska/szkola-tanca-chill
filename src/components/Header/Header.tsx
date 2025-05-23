import React from "react";
import styles from "./Header.module.css";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram, FiAlertCircle } from "react-icons/fi";
import Logo from "../../svg/Logo";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const socialMediaPage = await client.getByType("social_media").catch(() => notFound());
  const socialMedia = socialMediaPage.results[0].data;

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <Logo />
        <nav>
          <ol className={styles.navList}>
            <li>O nas</li>
            <li>Oferta</li>
            <li>Harmonogram</li>
            <li>Galeria</li>
            <li>Kontakt</li>
          </ol>
        </nav>
        <ul className={styles.socialMedia}>
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
      </div>
    </div>
  );
}
