import React from "react";
import styles from "./Button.module.css";
import { PrismicNextLink } from "@prismicio/next";
import { LinkField } from "@prismicio/client";

type ClickButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  field?: never;
};

type LinkButtonProps = {
  children?: never;
  onClick?: never;
  field: LinkField;
};

type ButtonProps = ClickButtonProps | LinkButtonProps;

export default function Button({ children, onClick, field }: ButtonProps) {
  if (field) {
    return <PrismicNextLink field={field} className={styles.button} />;
  }

  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
