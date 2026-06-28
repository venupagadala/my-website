/**
 * Domain model for the contact form's UI state.
 *
 * Kept separate from `ContactRequestDTO` so the form can evolve (extra fields,
 * different naming) without changing the network contract. The mapper bridges
 * the two.
 */
export interface ContactFormModel {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/** Keys of the contact form — handy for typing errors/touched maps. */
export type ContactFormField = keyof ContactFormModel;

/** A fully-typed validation error map (one message per field, "" = valid). */
export type ContactFormErrors = Record<ContactFormField, string>;

/** Tracks which fields the user has interacted with. */
export type ContactFormTouched = Record<ContactFormField, boolean>;

/** Result returned by the contact service. */
export interface SubmitResult {
  readonly ok: boolean;
  readonly error?: string;
}
