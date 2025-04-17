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
        <div style={{ position: "relative" }}>
          <div className={styles.imgWrapper}>
            <div className={styles.backgroundCircle}></div>
            <div className={styles.svgWrapper}>
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e1585f" />
                    <stop offset="100%" stopColor="#f19405" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50%"
                  cy="50%"
                  r="265"
                  fill="none"
                  stroke="url(#gradientStroke)"
                  strokeWidth="9"
                  strokeDasharray="22"
                />
              </svg>
            </div>
            <PrismicNextImage field={slice.primary.image} />
          </div>
          <div className={styles.statistics}>
            {slice.primary.statistics.map((item, index) => (
              <div key={index}>
                <span>{item.stat_number}</span>
                <PrismicRichText field={item.stat_label} />
              </div>
            ))}
          </div>
        </div>
      </ConstrainedDiv>
    </section>
  );
};

export default HighlightedHeroWithStatistics;
