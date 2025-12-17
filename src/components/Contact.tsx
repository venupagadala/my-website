import React, { useState } from "react";
import "./contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Basic email validation
const isValidEmail = (email: string): boolean => {
  const regex = /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email) && email.endsWith(".com");
};

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, phone: false, message: false });

  // Field validation logic
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name": return value.trim() ? "" : "Please enter your name";
      case "email": return isValidEmail(value) ? "" : "Enter a valid .com email";
      case "phone": return value && !/^\d{10}$/.test(value) ? "Phone number must be 10 digits" : "";
      case "message": return value.trim() ? "" : "Please enter a message";
      default: return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Live validation after first touch
    if (touched[name as keyof typeof touched]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, message: true });

    // Check if form is valid before sending
    const isValid = Object.values(newErrors).every((err) => err === "");
    if (!isValid) return;

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });

    try {
      await fetch("https://portfolio-backend-1wl9.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  // Logic for the button state
  const isFormValid = 
    formData.name.trim() && 
    isValidEmail(formData.email) && 
    formData.message.trim();

  return (
    <section className="contact-container" id="contact" aria-labelledby="contact-heading">
      <h1 id="contact-heading">Contact Me</h1>
      <p>Got a project waiting to be realized? Let's collaborate!</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          {[
            { id: "name", label: "Your Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "phone", label: "Phone (optional)", type: "tel" }
          ].map((field) => (
            <div key={field.id} className="floating-label">
              <input
                id={field.id}
                type={field.type}
                name={field.id}
                value={formData[field.id as keyof typeof formData]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors[field.id as keyof typeof errors] ? "error" : ""}
                aria-invalid={!!errors[field.id as keyof typeof errors]}
                aria-describedby={errors[field.id as keyof typeof errors] ? `${field.id}-error` : undefined}
              />
              <label 
                htmlFor={field.id} 
                className={formData[field.id as keyof typeof formData] ? "active" : ""}
              >
                {field.label}
              </label>

              {touched[field.id as keyof typeof touched] && errors[field.id as keyof typeof errors] && (
                <span className="error-text" id={`${field.id}-error`} role="alert">
                  {errors[field.id as keyof typeof errors]}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="floating-label full-width">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.message ? "error" : ""}
            rows={6}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          <label htmlFor="message" className={formData.message ? "active" : ""}>Message</label>
          
          {touched.message && errors.message && (
            <span className="error-text" id="message-error" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button 
          className="submit-btn" 
          type="submit" 
          disabled={!isFormValid} // Keeps your logic, but accessibility is improved via id/label mapping
        >
          Send Message
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </section>
  );
}

export default Contact;