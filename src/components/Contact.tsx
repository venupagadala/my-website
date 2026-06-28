import "./contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContactForm } from "../hooks/useContactForm";
import { ContactFormField } from "../types/contact.model";

function Contact() {
  const { formData, errors, touched, isFormValid, handleChange, handleBlur, submit } =
    useContactForm();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sent = await submit();
    if (sent) {
      toast.success("Message sent successfully!");
    }
  };

  return (
    <section className="contact-container" id="contact" aria-labelledby="contact-heading">
      <h1 id="contact-heading">Contact Me</h1>
      <p>Got a project waiting to be realized? Let's collaborate!</p>

      <form className="contact-form" onSubmit={onSubmit} noValidate>
        <div className="form-row">
          {([
            { id: "name", label: "Your Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "phone", label: "Phone (optional)", type: "tel" }
          ] as { id: ContactFormField; label: string; type: string }[]).map((field) => (
            <div key={field.id} className="floating-label">
              <input
                id={field.id}
                type={field.type}
                name={field.id}
                value={formData[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                onBlur={(e) => handleBlur(field.id, e.target.value)}
                className={errors[field.id] ? "error" : ""}
                aria-invalid={!!errors[field.id]}
                aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
              />
              <label 
                htmlFor={field.id} 
                className={formData[field.id] ? "active" : ""}
              >
                {field.label}
              </label>

              {touched[field.id] && errors[field.id] && (
                <span className="error-text" id={`${field.id}-error`} role="alert">
                  {errors[field.id]}
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
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={(e) => handleBlur("message", e.target.value)}
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