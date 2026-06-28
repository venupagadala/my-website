/**
 * DTO for the contact backend (`POST /send`).
 *
 * This is the request payload contract. Build it from the domain
 * `ContactFormModel` via the contact mapper rather than sending UI state
 * directly, so the wire format stays decoupled from form internals.
 */
export interface ContactRequestDTO {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly message: string;
}

/** Shape of a successful contact submission acknowledgement. */
export interface ContactResponseDTO {
  readonly success: boolean;
  readonly message?: string;
}
