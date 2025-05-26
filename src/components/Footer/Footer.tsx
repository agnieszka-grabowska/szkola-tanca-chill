import React from "react";
import Logo from "../../svg/Logo";
import styles from "./Footer.module.css";
import ConstrainedDiv from "../ConstrainedDiv/ConstrainedDiv.module";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
  const client = createClient();
  const contactPage = await client.getByType("kontakt").catch(() => notFound());
  const socialMediaPage = await client.getByType("social_media").catch(() => notFound());
  const contactData = contactPage.results[0].data;
  const socialMedia = socialMediaPage.results[0].data;

  return (
    <div className={styles.footer}>
      <ConstrainedDiv>
        <div className={styles.navigation}>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <p>Nasza szkoła tańca to miejsce, gdzie pasja spotyka zabawę.</p>
          </div>
          <div>
            <h2>Social Media</h2>
            <ul>
              {socialMedia.links.map((item, index) => (
                <li key={index}>
                  <PrismicNextLink field={item.name} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Kontakt</h2>
            <ul>
              {contactData.address && (
                <li>
                  <FiMapPin />
                  {contactData.address}
                </li>
              )}
              {contactData.email && (
                <li>
                  <a href={`mailto:${contactData.email}`}>
                    <div style={{ marginTop: "3px" }}>
                      <FiMail />
                    </div>
                    {contactData.email}
                  </a>
                </li>
              )}
              {contactData.phone_number && (
                <li>
                  <a href={`tel:${contactData.phone_number}`}>
                    <FiPhone />
                    {contactData.phone_number}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p> © 2025 Szkoła Tańca Chill | Made with ❤️ by Agnieszka Grabowska</p>
        </div>
      </ConstrainedDiv>
    </div>
  );
}
