import React from "react";
import styles from "./Button.module.css";
import { PrismicNextLink } from "@prismicio/next";
import { LinkField } from "@prismicio/client";
import ArrowSVG from "../ArrowSVG";

type Variant = "primary" | "secondary";

type ClickButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  field?: never;
  variant?: Variant;
};

type LinkButtonProps = {
  children?: never;
  onClick?: never;
  field: LinkField;
  variant?: Variant;
};

type ButtonProps = ClickButtonProps | LinkButtonProps;

export default function Button({ children, onClick, field, variant = "primary" }: ButtonProps) {
  if (field) {
    return (
      <PrismicNextLink
        field={field}
        className={variant === "primary" ? styles.button : styles.secondary}
      >
        {field.text} {variant === "secondary" && <ArrowSVG />}
      </PrismicNextLink>
    );
  }

  return (
    <button onClick={onClick} className={variant === "primary" ? styles.button : styles.secondary}>
      {children}
      {variant === "secondary" && <ArrowSVG />}
    </button>
  );
}
