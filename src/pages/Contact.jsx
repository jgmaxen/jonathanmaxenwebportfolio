import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!formData.message) validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center fw-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <small className="text-danger">{errors.message}</small>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Send</button>
      </form>
    </div>
  );
};

export default Contact;
