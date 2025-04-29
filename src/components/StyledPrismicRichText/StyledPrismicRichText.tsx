import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import styles from "./StyledPrismicRichText.module.css";

export default function StyledPrismicRichText({ field }: { field: RichTextField }) {
  return (
    <PrismicRichText
      field={field}
      components={{
        heading1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
        heading2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
        paragraph: ({ children }) => <p className={styles.p}>{children}</p>,
      }}
    />
  );
}
