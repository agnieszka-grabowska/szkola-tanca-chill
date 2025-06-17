import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./MediaGallery.module.css";
import Button from "@/components/Button/Button";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv";
import image from "@/../public/wavesOpacity.svg";
import FadeInDiv from "@/components/FadeInDiv/FadeInDiv";

/**
 * Props for `MediaGallery`.
 */
export type MediaGalleryProps = SliceComponentProps<Content.MediaGallerySlice>;

/**
 * Component for "MediaGallery" Slices.
 */
const MediaGallery: FC<MediaGalleryProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.mediaGallery}
      style={{ "--src": `url(${image.src})` } as React.CSSProperties}
    >
      <ConstrainedDiv>
        <FadeInDiv>
          <StyledPrismicRichText field={slice.primary.title} />
          <StyledPrismicRichText field={slice.primary.description} />
        </FadeInDiv>
        <div className={styles.galleryPreview}>
          {slice.primary.image_gallery.slice(0, 3).map((item, index) => (
            <div key={index} className={styles.imageWrapper}>
              <PrismicNextImage field={item.image} />
            </div>
          ))}
        </div>
        <Button field={slice.primary.button} variant="secondary" />
      </ConstrainedDiv>
    </section>
  );
};

export default MediaGallery;
