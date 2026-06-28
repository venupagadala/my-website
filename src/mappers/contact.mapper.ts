import { ContactRequestDTO } from "../api/dto/contact.dto";
import { ContactFormModel } from "../types/contact.model";

/**
 * Maps the UI contact form model to the backend request DTO.
 *
 * Trimming and normalization happen here so the network payload is always
 * clean, regardless of what the form fields hold. Keeps the wire contract
 * independent of UI state.
 */
export function toContactRequestDTO(
  form: ContactFormModel
): ContactRequestDTO {
  return {
    name: form.name.trim(),
    email: form.email.trim().toLowerCase(),
    phone: form.phone.trim(),
    message: form.message.trim(),
  };
}
