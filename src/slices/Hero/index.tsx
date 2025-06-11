"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./index.module.css";
import Button from "@/components/Button/Button";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";

/**
 * Props for `HighlightedHeroWithStatistics`.
 */
export type HighlightedHeroWithStatisticsProps =
  SliceComponentProps<Content.HighlightedHeroWithStatisticsSlice>;

/**
 * Component for "HighlightedHeroWithStatistics" Slices.
 */
const HighlightedHeroWithStatistics: FC<HighlightedHeroWithStatisticsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <div className={styles.imageWrapper}>
        <PrismicNextImage field={slice.primary.image} />
      </div>
      <div className={styles.textWrapper}>
        <StyledPrismicRichText field={slice.primary.section_title} />
        <StyledPrismicRichText field={slice.primary.description} />
        {slice.primary.button && <Button onClick={() => {}}>{slice.primary.button}</Button>}
      </div>
    </section>
  );
};

export default HighlightedHeroWithStatistics;
