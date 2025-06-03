import React from "react";
import styles from "./Header.module.css";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import ConstrainedDiv from "../ConstrainedDiv/ConstrainedDiv";
import Nav from "./Nav";

export default async function Header() {
  const client = createClient();
  const socialMediaPage = await client.getByType("social_media").catch(() => notFound());
  const socialMedia = socialMediaPage.results[0].data;

  return (
    <div className={styles.headerWrapper}>
      <ConstrainedDiv>
        <Nav socialMedia={socialMedia}></Nav>
      </ConstrainedDiv>
    </div>
  );
}
