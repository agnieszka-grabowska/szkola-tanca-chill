import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";

export default function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Imię
        <input type="text" />
      </label>
      <label>
        Wiadomość
        <textarea />
      </label>
      <Button variant="primary" type="submit">
        Wyślij
      </Button>
    </form>
  );
}
