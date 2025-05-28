import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./styles.module.css";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";

/**
 * Props for `SideBySideImageText`.
 */
export type SideBySideImageTextProps = SliceComponentProps<Content.SideBySideImageTextSlice>;

/**
 * Component for "SideBySideImageText" Slices.
 */
const SideBySideImageText: FC<SideBySideImageTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.wrapper}
    >
      <div className={styles.backImage}>
        <PrismicNextImage field={slice.primary.back_image} />
      </div>
      <div className={styles.frontImage}>
        <PrismicNextImage field={slice.primary.front_image} />
      </div>
      <div className={styles.redSquare}></div>
      <div className={styles.content}>
        <StyledPrismicRichText field={slice.primary.heading} />
        <StyledPrismicRichText field={slice.primary.body} />
      </div>
    </section>
  );
};

export default SideBySideImageText;
