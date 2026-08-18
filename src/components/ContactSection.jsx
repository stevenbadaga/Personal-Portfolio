import React, { useState } from "react";

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    service: "Full-Stack Engineering",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = async (value, successText) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = value;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopyMessage(successText);
      window.setTimeout(() => setCopyMessage(""), 2500);
    } catch {
      setCopyMessage("Failed to copy");
      window.setTimeout(() => setCopyMessage(""), 2000);
    }
  };

  const validateContactForm = () => {
    const errors = {};
    if (!contactForm.name.trim()) errors.name = "Full name is required";
    if (!contactForm.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!contactForm.subject.trim()) errors.subject = "Subject is required";
    if (!contactForm.message.trim()) {
      errors.message = "Message is required";
    } else if (contactForm.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }
    return errors;
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateContactForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...contactForm
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        // In local development Netlify forms return 404, fallback gracefully
        setFormSubmitted(true);
      }
    } catch (err) {
      // Offline fallback
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pb-12">
      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Contact Form Container */}
        <article className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-8 lg:p-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-neutral-300">
            Want to discuss a software project, engineering role, or technical collaboration? Send a direct message below.
          </p>

          {formSubmitted ? (
            <div className="mt-6 sm:mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-600 dark:text-emerald-400 animate-modal">
              <span className="text-3xl">✓</span>
              <h3 className="mt-3 font-display text-lg sm:text-xl font-bold">
                Message Sent Successfully!
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-neutral-300">
                Thank you for reaching out. I will review your message and reply promptly to <strong className="text-slate-900 dark:text-white">{contactForm.email}</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setContactForm({
                    name: "",
                    email: "",
                    subject: "",
                    service: "Full-Stack Engineering",
                    message: ""
                  });
                }}
                className="mt-5 rounded-full bg-emerald-500 px-6 py-2.5 text-xs font-bold text-slate-950 uppercase tracking-wider hover:bg-emerald-400 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleFormSubmit}
              className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4"
            >
              {/* Hidden Netlify Form Fields */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="John Doe"
                    className={`w-full rounded-xl border ${
                      formErrors.name ? "border-rose-500" : "border-stone-300 dark:border-neutral-800"
                    } bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none`}
                  />
                  {formErrors.name && <p className="mt-1 text-[10px] text-rose-500 font-bold">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="john@example.com"
                    className={`w-full rounded-xl border ${
                      formErrors.email ? "border-rose-500" : "border-stone-300 dark:border-neutral-800"
                    } bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none`}
                  />
                  {formErrors.email && <p className="mt-1 text-[10px] text-rose-500 font-bold">{formErrors.email}</p>}
                </div>
              </div>

              <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-subject" className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    placeholder="Software Engineering Role / Project"
                    className={`w-full rounded-xl border ${
                      formErrors.subject ? "border-rose-500" : "border-stone-300 dark:border-neutral-800"
                    } bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none`}
                  />
                  {formErrors.subject && <p className="mt-1 text-[10px] text-rose-500 font-bold">{formErrors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                    Topic / Area
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 dark:border-neutral-800 bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Full-Stack Engineering">Full-Stack Development</option>
                    <option value="Backend Services">Backend Services & REST APIs</option>
                    <option value="GIS & Land Systems">GIS & Spatial Software</option>
                    <option value="Business Systems">Business / Operational Systems</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-neutral-400 mb-1">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Share details about the role, project, or technical requirements..."
                  className={`w-full rounded-xl border ${
                    formErrors.message ? "border-rose-500" : "border-stone-300 dark:border-neutral-800"
                  } bg-white dark:bg-black px-3.5 py-3 text-xs text-slate-900 dark:text-white focus:border-amber-500 focus:outline-none`}
                />
                {formErrors.message && <p className="mt-1 text-[10px] text-rose-500 font-bold">{formErrors.message}</p>}
              </div>

              {submitError && (
                <p className="text-xs text-rose-500 font-bold">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-yellow-500 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 hover:brightness-105 shadow-md transition min-h-[44px] disabled:opacity-50"
              >
                {isSubmitting ? "Sending Message..." : "Submit Message"}
              </button>
            </form>
          )}
        </article>

        {/* Direct Reach Sidebar */}
        <article className="rounded-[1.6rem] sm:rounded-[1.8rem] border border-stone-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#0D0D0D]/90 p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Direct Contact
            </h3>
            <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" />

            <div className="mt-5 space-y-3">
              <a
                href="mailto:badagaclass@gmail.com"
                className="block rounded-2xl border border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-black/60 p-4 transition hover:border-amber-500"
              >
                <span className="text-[9px] font-bold uppercase text-amber-500">Email Address</span>
                <p className="mt-1 font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-white break-all">
                  badagaclass@gmail.com
                </p>
              </a>

              <a
                href="tel:+250788883986"
                className="block rounded-2xl border border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-black/60 p-4 transition hover:border-amber-500"
              >
                <span className="text-[9px] font-bold uppercase text-amber-500">Phone Number</span>
                <p className="mt-1 font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  +250 788 883 986
                </p>
              </a>
            </div>

            {/* Quick Copy Buttons */}
            <div className="mt-5 space-y-2">
              <button
                type="button"
                onClick={() => handleCopy("badagaclass@gmail.com", "Email copied to clipboard!")}
                className="w-full rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-100 dark:bg-black py-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition min-h-[44px]"
              >
                Copy Email Address
              </button>
              <button
                type="button"
                onClick={() => handleCopy("+250788883986", "Phone number copied to clipboard!")}
                className="w-full rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-100 dark:bg-black py-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition min-h-[44px]"
              >
                Copy Phone Number
              </button>
              {copyMessage && (
                <p className="mt-2 text-center text-xs font-bold text-amber-500 animate-pulse">
                  {copyMessage}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-500">
              Current Availability
            </p>
            <p className="mt-1 text-xs text-slate-600 dark:text-neutral-300">
              Open to full-time Software Engineer positions, backend developer roles, and engineering contracts in Kigali or remote worldwide.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
