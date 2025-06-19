import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";
import FadeInDiv from "@/components/FadeInDiv/FadeInDiv";

/**
 * Props for `ContentImageSplit`.
 */
export type ContentImageSplitProps = SliceComponentProps<Content.ContentImageSplitSlice>;

/**
 * Component for "ContentImageSplit" Slices.
 */
const ContentImageSplit: FC<ContentImageSplitProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.wrapper}
      style={
        {
          "--flex-direction": slice.variation === "imageLeft" ? "row-reverse" : "row",
        } as React.CSSProperties
      }
    >
      <ConstrainedDiv>
        <div className={styles.contentWrapper}>
          <FadeInDiv from={slice.variation === "imageLeft" ? "right" : "left"}>
            <StyledPrismicRichText field={slice.primary.heading} />
            <StyledPrismicRichText field={slice.primary.content} />
          </FadeInDiv>
        </div>
        <div className={styles.imageWrapper}>
          <FadeInDiv from={slice.variation === "imageLeft" ? "left" : "right"}>
            <PrismicNextImage field={slice.primary.side_image} />
          </FadeInDiv>
        </div>
      </ConstrainedDiv>
    </section>
  );
};

export default ContentImageSplit;
