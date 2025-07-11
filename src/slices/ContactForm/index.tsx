import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ConstrainedDiv from "@/components/ConstrainedDiv/ConstrainedDiv";
import StyledPrismicRichText from "@/components/StyledPrismicRichText/StyledPrismicRichText";
import styles from "./ContactMapForm.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import FadeInDiv from "@/components/FadeInDiv/FadeInDiv";

/**
 * Props for `ContactMapForm`.
 */
export type ContactMapFormProps = SliceComponentProps<Content.ContactMapFormSlice>;

/**
 * Component for "ContactMapForm" Slices.
 */
const ContactMapForm: FC<ContactMapFormProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.wrapper}
      id="contact"
    >
      <ConstrainedDiv>
        <FadeInDiv from="center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.511257933646!2d16.87078829319764!3d52.36918265675953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47044548b3c09a11%3A0xf0fc528d420c7c61!2sAquapos!5e0!3m2!1spl!2spl!4v1747837881211!5m2!1spl!2spl"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa z lokalizacją szkoły tańca Chill"
          ></iframe>
          <div className={styles.contentWrapper}>
            <StyledPrismicRichText field={slice.primary.title} />
            <StyledPrismicRichText field={slice.primary.description} />
            <ContactForm />
          </div>
        </FadeInDiv>
      </ConstrainedDiv>
    </section>
  );
};

export default ContactMapForm;
