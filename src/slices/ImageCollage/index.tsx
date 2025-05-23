import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for image_collage (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageCollage;
