"use client";

import React, { useActionState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import sendEmail from "../../../utils/send-email";
import toast from "react-hot-toast";

const initialState = { success: false };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEmail, initialState);

  useEffect(() => {
    if (state?.success) {
      toast("Wiadomość została wysłana!", {
        icon: "✅",
      });
    }
    if (state?.error) {
      toast.error(state.error, {
        icon: "❌",
      });
    }
  }, [state]);

  return (
    <form className={styles.contactForm} action={formAction}>
      <Input type="email" name="email" label="Email" />
      <Input type="text" name="name" label="Imię" />
      <Textarea name="message" label="Wiadomość" />
      <HoneypotInput name="surname" />
      <Button variant="primary" type="submit">
        {pending ? "Wysyłanie..." : "Wyślij"}
      </Button>
      {state?.error && (
        <p aria-live="polite" className={styles.error}>
          {state.error}
        </p>
      )}
    </form>
  );
}

type HoneypotInputProps = {
  name: string;
  type?: string;
};

export function HoneypotInput({ name, type = "text" }: HoneypotInputProps) {
  return (
    <input type={type} name={name} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
  );
}

type InputProps = {
  label: string;
  name: string;
  type?: "text" | "email";
};

export function Input({ name, label, type = "text" }: InputProps) {
  return (
    <label className={styles.label}>
      {label} <input type={type} name={name} required={true} className={styles.input} />
    </label>
  );
}

type TextareaProps = {
  label: string;
  name: string;
};

function Textarea({ name, label }: TextareaProps) {
  return (
    <label className={styles.label}>
      {label} <textarea name={name} required={true} minLength={10} className={styles.input} />
    </label>
  );
}
