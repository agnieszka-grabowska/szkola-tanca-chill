"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv.module";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";
import styles from "./ServicesGrid.module.css";
import Button from "@/components/Button/Button";

/**
 * Props for `ServicesGrid`.
 */
export type ServicesGridProps = SliceComponentProps<Content.ServicesGridSlice>;

/**
 * Component for "ServicesGrid" Slices.
 */
const ServicesGrid: FC<ServicesGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.sectionWrapper}
    >
      <ConstrainedDiv>
        <div className={styles.title}>
          <StyledPrismicRichText field={slice.primary.section_title} />
          <StyledPrismicRichText field={slice.primary.section_description} />
        </div>
        <div className={styles.services}>
          {slice.primary.services.map((item, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.imageWrapper}>
                <PrismicNextImage field={item.service_image} />
              </div>

              <div className={styles.textWrapper}>
                <PrismicRichText field={item.service_title} />
                <PrismicRichText field={item.service_description} />
                <Button variant="secondary" onClick={() => {}}>
                  Czytaj więcej
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ConstrainedDiv>
    </section>
  );
};

export default ServicesGrid;
