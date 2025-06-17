import { FC } from "react";
import { Content, ImageField, KeyTextField, RichTextField, TitleField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";
import styles from "./ServicesGrid.module.css";
import { BlobSVG } from "@/svg/BlobSVG";
import FadeInDiv from "@/components/FadeInDiv/FadeInDiv";

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
      id="oferta"
    >
      <ConstrainedDiv>
        <FadeInDiv from="center">
          <div className={styles.title}>
            <StyledPrismicRichText field={slice.primary.section_title} />
            <StyledPrismicRichText field={slice.primary.section_description} />
          </div>
        </FadeInDiv>
        <div className={styles.services}>
          {slice.primary.services.map((item, index) => (
            <div className={styles.serviceItem} key={index}>
              <FadeInDiv from={index % 2 === 0 ? "left" : "right"}>
                <ServiceItemText
                  title={item.service_title}
                  tag={item.service_tag}
                  description={item.service_description}
                />
                <ServiceItemImage item={item.service_image} />
              </FadeInDiv>
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
  tag,
}: {
  title: TitleField;
  description: RichTextField;
  tag: KeyTextField;
}) {
  return (
    <div className={styles.textWrapper}>
      <PrismicRichText field={title} />
      {tag && <div className={styles.tag}>{tag}</div>}
      <PrismicRichText field={description} />
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
