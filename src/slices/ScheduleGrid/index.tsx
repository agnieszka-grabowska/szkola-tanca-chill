import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicTable, SliceComponentProps } from "@prismicio/react";
import styles from "./ScheduleGrid.module.css";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv";
import FadeInDiv from "@/components/FadeInDiv/FadeInDiv";

/**
 * Props for `ScheduleGrid`.
 */
export type ScheduleGridProps = SliceComponentProps<Content.ScheduleGridSlice>;

/**
 * Component for "ScheduleGrid" Slices.
 */
const ScheduleGrid: FC<ScheduleGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.schedule}
      id="harmonogram"
    >
      <ConstrainedDiv>
        <FadeInDiv from="center">
          <StyledPrismicRichText field={slice.primary.title} />
          <StyledPrismicRichText field={slice.primary.description} />
          <div
            style={{
              overflowX: "auto",
              marginInline: "-16px",
              paddingBlock: "16px",
            }}
          >
            <PrismicTable field={slice.primary.harmonogram} />
          </div>
        </FadeInDiv>
      </ConstrainedDiv>
    </section>
  );
};

export default ScheduleGrid;
