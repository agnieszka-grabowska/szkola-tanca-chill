import React from "react";
import styles from "./Header.module.css";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import Logo from "../Logo";

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <Logo />
        <nav>
          <ol className={styles.navList}>
            <li>Home</li>
            <li>O nas</li>
            <li>Oferta</li>
            <li>Harmonogram</li>
            <li>Galeria</li>
            <li>Kontakt</li>
          </ol>
        </nav>
        <ul className={styles.socialMedia}>
          <li>
            <FiFacebook size={24} />
          </li>
          <li>
            <FiInstagram size={24} />
          </li>
        </ul>
      </div>
    </div>
  );
}
