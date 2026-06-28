import { useMemo, useState } from "react";
import { submitContactForm } from "../services/contact.service";
import {
  ContactFormModel,
  ContactFormField,
  ContactFormErrors,
  ContactFormTouched,
} from "../types/contact.model";

const EMPTY_FORM: ContactFormModel = { name: "", email: "", phone: "", message: "" };
const EMPTY_ERRORS: ContactFormErrors = { name: "", email: "", phone: "", message: "" };
const EMPTY_TOUCHED: ContactFormTouched = {
  name: false,
  email: false,
  phone: false,
  message: false,
};

export const isValidEmail = (email: string): boolean =>
  /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,4}$/.test(email) && email.endsWith(".com");

function validateField(name: ContactFormField, value: string): string {
  switch (name) {
    case "name":
      return value.trim() ? "" : "Please enter your name";
    case "email":
      return isValidEmail(value) ? "" : "Enter a valid .com email";
    case "phone":
      return value && !/^\d{10}$/.test(value) ? "Phone number must be 10 digits" : "";
    case "message":
      return value.trim() ? "" : "Please enter a message";
    default:
      return "";
  }
}

/** Owns all contact form state, validation, and submission as typed models. */
export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormModel>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>(EMPTY_ERRORS);
  const [touched, setTouched] = useState<ContactFormTouched>(EMPTY_TOUCHED);

  const handleChange = (field: ContactFormField, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field: ContactFormField, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const isFormValid = useMemo(
    () =>
      !!formData.name.trim() && isValidEmail(formData.email) && !!formData.message.trim(),
    [formData]
  );

  const submit = async (): Promise<boolean> => {
    const next: ContactFormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };
    setErrors(next);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.values(next).some((e) => e !== "")) return false;

    await submitContactForm(formData);
    setFormData(EMPTY_FORM);
    return true;
  };

  return { formData, errors, touched, isFormValid, handleChange, handleBlur, submit };
}
