import React from "react";
import styles from "./Button.module.css";
import { PrismicNextLink } from "@prismicio/next";
import { LinkField } from "@prismicio/client";
import ArrowSVG from "../../svg/ArrowSVG";

type Variant = "primary" | "secondary";

type ClickButtonProps = {
  children: React.ReactNode;
  field?: never;
  variant?: Variant;
} & React.ComponentProps<"button">;

type LinkButtonProps = {
  children?: never;
  field: LinkField;
  variant?: Variant;
};

type ButtonProps = ClickButtonProps | LinkButtonProps;

export default function Button({ children, field, variant = "primary", ...rest }: ButtonProps) {
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
    <button className={variant === "primary" ? styles.button : styles.secondary} {...rest}>
      {children}
      {variant === "secondary" && <ArrowSVG />}
    </button>
  );
}
