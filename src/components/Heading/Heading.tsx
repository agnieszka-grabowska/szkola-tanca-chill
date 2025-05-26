import React from "react";
import styles from "./Heading.module.css";

export default function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.h2}>{children}</h2>;
}
