import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./MediaGallery.module.css";
import Button from "@/components/Button/Button";

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
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
      <div>
        {slice.primary.image_gallery.slice(0, 3).map((item, index) => (
          <div key={index} className={styles.imageWrapper}>
            <PrismicNextImage field={item.image} />
          </div>
        ))}
      </div>
      <Button field={slice.primary.button} />
    </section>
  );
};

export default MediaGallery;
