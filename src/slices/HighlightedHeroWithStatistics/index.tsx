"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./index.module.css";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv.module";
import Button from "@/components/Button/Button";

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
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <ConstrainedDiv>
        <div className={styles.text}>
          <div className={styles.title}>
            <PrismicRichText field={slice.primary.main_title} />
          </div>
          <div style={{ maxWidth: "430px", textWrap: "pretty", marginBlock: "16px 38px" }}>
            <PrismicRichText field={slice.primary.description} />
          </div>
          {slice.primary.button && <Button onClick={() => {}}>{slice.primary.button}</Button>}
        </div>
        <div>
          <PrismicNextImage field={slice.primary.image} />
        </div>
      </ConstrainedDiv>
    </section>
  );
};

export default HighlightedHeroWithStatistics;
