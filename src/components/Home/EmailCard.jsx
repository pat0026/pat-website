import React, { useState } from "react";

export default function EmailCard() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  function handleChange(event) {
    console.log(event);
    console.log(event.target);
    const { name, value, type, checked } = event.target;
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:patrick.caparros026@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(`${formData.message}`)}`;

    window.location.href = mailtoLink;
  };
  return (
    <div className="card bg-base-100 flex-1 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <h2 className="card-title">Want to send an email?</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text" htmlFor="subject">
              Subject
            </span>
          </label>
          <input
            type="text"
            placeholder="Greetings"
            className="input input-bordered"
            onChange={handleChange}
            name="subject"
            value={formData.subject}
            required
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="message">
            <span className="label-text">Message</span>
          </label>
          <textarea
            placeholder="Anything on your mind?"
            className="textarea textarea-bordered"
            onChange={handleChange}
            name="message"
            value={formData.message}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Compose
          </button>
        </div>
      </form>
    </div>
  );
}
