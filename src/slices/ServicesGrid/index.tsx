"use client";
import { FC } from "react";
import { Content, ImageField, RichTextField, TitleField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv.module";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";
import styles from "./ServicesGrid.module.css";
import Button from "@/components/Button/Button";
import { BlobSVG } from "@/svg/BlobSVG";

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
            <div className={styles.serviceItem} key={index}>
              {index % 2 !== 0 ? (
                <>
                  <ServiceItemText
                    title={item.service_title}
                    description={item.service_description}
                  />
                  <ServiceItemImage item={item.service_image} />
                </>
              ) : (
                <>
                  <ServiceItemImage item={item.service_image} />
                  <ServiceItemText
                    title={item.service_title}
                    description={item.service_description}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </ConstrainedDiv>
    </section>
  );
};

export default ServicesGrid;

function ServiceItemText({
  title,
  description,
}: {
  title: TitleField;
  description: RichTextField;
}) {
  return (
    <div className={styles.textWrapper}>
      <PrismicRichText field={title} />
      <div className={styles.tag}>Dla zaawansowanych i początkujących</div>
      <PrismicRichText field={description} />
      <Button variant="secondary" onClick={() => {}}>
        Czytaj więcej
      </Button>
    </div>
  );
}

function ServiceItemImage({ item }: { item: ImageField }) {
  return (
    <div className={styles.imageWrapper}>
      <BlobSVG className={styles.blob} />
      <PrismicNextImage field={item} />
    </div>
  );
}
