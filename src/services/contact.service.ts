import { toContactRequestDTO } from "../mappers/contact.mapper";
import { ContactFormModel, SubmitResult } from "../types/contact.model";

const CONTACT_ENDPOINT = "https://portfolio-backend-1wl9.onrender.com/send";

/**
 * Submits the contact form: maps UI model -> request DTO and POSTs it.
 * Network failures are returned as a typed result rather than thrown, so the
 * caller can decide how to surface them.
 */
export async function submitContactForm(
  form: ContactFormModel
): Promise<SubmitResult> {
  const payload = toContactRequestDTO(form);
  try {
    await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error while sending message." };
  }
}
