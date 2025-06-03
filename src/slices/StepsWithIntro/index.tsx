import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";
import styles from "./StepsWithIntro.module.css";
import image from "@/../public/chevrons-right.svg";

/**
 * Props for `StepsWithIntro`.
 */
export type StepsWithIntroProps = SliceComponentProps<Content.StepsWithIntroSlice>;

/**
 * Component for "StepsWithIntro" Slices.
 */
const StepsWithIntro: FC<StepsWithIntroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.wrapper}
      style={{ "--src": `url(${image.src})` } as React.CSSProperties}
    >
      <ConstrainedDiv>
        <StyledPrismicRichText field={slice.primary.title} />
        <div className={styles.steps}>
          {slice.primary.steps.map((item, index) => (
            <div key={index}>
              <PrismicRichText field={item.step_title} />
              <PrismicRichText field={item.step_description} />
            </div>
          ))}
        </div>
      </ConstrainedDiv>
    </section>
  );
};

export default StepsWithIntro;
