import React from "react";
import styles from "./ConstrainedDiv.module.css";

function ConstrainedDiv({ children }: { children: React.ReactNode }) {
  return <div className={styles.div}>{children}</div>;
}

export default ConstrainedDiv;
