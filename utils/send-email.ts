"use server";

export default async function sendEmail(
  initialState: { success?: boolean; error?: string },
  formData: FormData
) {
  if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
    return { error: "Wszystkie pola są wymagane." };
  }

  if (formData.get("surname")) {
    return { success: true };
  }

  const apiEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/email`;

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.error || "Wystąpił błąd. Spróbuj jeszcze raz." };
    }

    return { success: true };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Wystąpił błąd. Spróbuj jeszcze raz." };
  }
}
