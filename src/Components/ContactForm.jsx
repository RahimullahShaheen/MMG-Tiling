import React, { useState } from "react";
import "../Assets/CSS/Components/ContactForm.css";

/**
 * ContactFormCard.jsx
 * ✅ Matches screenshot layout (2 columns, textarea full width, big bottom button)
 * ✅ Theme ONLY: #023341, #FD5E02, #FCF5E3 (no other colors)
 * ✅ Responsive: stacks to 1 column on mobile
 */

export default function ContactFormCard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // Hook this to your backend later
    console.log("Contact form submitted:", form);
  }

  return (
    <section className="cf-wrap" aria-labelledby="cf-title">
      <div className="cf-container">
        <div className="cf-card">
          <h2 id="cf-title" className="cf-srOnly">
            Contact form
          </h2>

          <form className="cf-form" onSubmit={onSubmit}>
            <div className="cf-grid2">
              <div className="cf-field">
                <label className="cf-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="cf-input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={onChange}
                  autoComplete="name"
                />
              </div>

              <div className="cf-field">
                <label className="cf-label" htmlFor="email">
                  Email address
                </label>
                <input
                  className="cf-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                />
              </div>

              <div className="cf-field">
                <label className="cf-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="cf-input"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                />
              </div>

              <div className="cf-field">
                <label className="cf-label" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="cf-input"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="cf-field cf-full">
              <label className="cf-label" htmlFor="comment">
                Your comment
              </label>
              <textarea
                className="cf-textarea"
                id="comment"
                name="comment"
                placeholder="Type here"
                value={form.comment}
                onChange={onChange}
                rows={7}
              />
            </div>

            <button className="cf-submit" type="submit">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
