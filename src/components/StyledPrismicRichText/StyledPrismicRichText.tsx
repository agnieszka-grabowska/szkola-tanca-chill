import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import styles from "./StyledPrismicRichText.module.css";
import Heading from "../Heading/Heading";

export default function StyledPrismicRichText({ field }: { field: RichTextField }) {
  return (
    <PrismicRichText
      field={field}
      components={{
        heading1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
        heading2: ({ children }) => <Heading>{children}</Heading>,
        paragraph: ({ children }) => <p className={styles.p}>{children}</p>,
      }}
    />
  );
}
