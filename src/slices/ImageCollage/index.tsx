import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./styles.module.css";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv";
import Heading from "@/components/Heading/Heading";

/**
 * Props for `ImageCollage`.
 */
export type ImageCollageProps = SliceComponentProps<Content.ImageCollageSlice>;

/**
 * Component for "ImageCollage" Slices.
 */
const ImageCollage: FC<ImageCollageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.wrapper}
    >
      <ConstrainedDiv>
        <Heading>{slice.primary.header}</Heading>
        <div className={styles.imagesGrid}>
          {slice.primary.images.map((item) => (
            <div className={styles.imageWrapper} key={item.image.id}>
              <PrismicNextImage field={item.image} />
            </div>
          ))}
        </div>
      </ConstrainedDiv>
    </section>
  );
};

export default ImageCollage;
