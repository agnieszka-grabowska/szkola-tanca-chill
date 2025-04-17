import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for media_gallery (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MediaGallery;
