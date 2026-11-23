"use client";

import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { hasVerifiedEmail, site } from "@/content/site";
import { buildMailto, formatPlainMessage, validateContact, type ContactErrors, type ContactInput } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string }
  | { kind: "mail-app" }
  | { kind: "not-configured"; data: ContactInput };

const empty = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const emailReady = hasVerifiedEmail();
  const endpointReady = Boolean(site.contactEndpoint);

  const update = (k: keyof typeof empty) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const r = validateContact(values);
    if (!r.ok) {
      setErrors(r.errors);
      const first = Object.keys(r.errors)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setErrors({});

    if (endpointReady) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(site.contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(r.data),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setStatus({ kind: "sent" });
        setValues(empty);
      } catch {
        setStatus({ kind: "error", message: "Your message couldn't be sent. Please email directly." });
      }
      return;
    }

    if (emailReady) {
      window.location.href = buildMailto(site.email.address, r.data);
      setStatus({ kind: "mail-app" });
      return;
    }

    setStatus({ kind: "not-configured", data: r.data });
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          id="contact-title"
          index="07"
          eyebrow="Contact"
          title={<>Get In <span className="font-editorial">Touch</span></>}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Direct Contact Info */}
          <div>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-soft space-y-5">
              <h3 className="font-display text-base font-bold text-foreground">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Whether for full-time product roles, academic research, or machine learning consulting, my inbox is open.
              </p>

              <div className="pt-2 divide-y divide-border text-xs sm:text-sm">
                <div className="py-3 flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-[11px] font-mono">Email</p>
                    <a href={`mailto:${site.email.address}`} className="font-medium text-foreground hover:text-accent truncate block">
                      {site.email.address}
                    </a>
                  </div>
                </div>

                <div className="py-3 flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-[11px] font-mono">Phone</p>
                    <a href={site.phone.href} className="font-medium text-foreground hover:text-accent">
                      {site.phone.display}
                    </a>
                  </div>
                </div>

                <div className="py-3 flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-[11px] font-mono">Location</p>
                    <p className="font-medium text-foreground">{site.location.full}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border flex items-center gap-3">
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs !py-2 !px-4"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs !py-2 !px-4"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-soft">
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" id="contact-name" error={errors.name} required>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                    className={inputCls(Boolean(errors.name))}
                  />
                </Field>
                <Field label="Email Address" id="contact-email" error={errors.email} required>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update("email")}
                    placeholder="jane@example.com"
                    className={inputCls(Boolean(errors.email))}
                  />
                </Field>
              </div>

              <Field label="Subject" id="contact-subject" error={errors.subject} required>
                <input
                  id="contact-subject"
                  type="text"
                  value={values.subject}
                  onChange={update("subject")}
                  placeholder="Collaboration Inquiry"
                  className={inputCls(Boolean(errors.subject))}
                />
              </Field>

              <Field label="Message" id="contact-message" error={errors.message} required>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={values.message}
                  onChange={update("message")}
                  placeholder="How can I help you?"
                  className={inputCls(Boolean(errors.message))}
                />
              </Field>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={status.kind === "sending"}
                  className="btn-primary"
                >
                  {status.kind === "sending" ? "Sending..." : "Send Message"}
                  <Send className="h-3.5 w-3.5" />
                </button>
                <span className="text-xs font-mono text-muted-foreground">
                  Responds in 24 hours
                </span>
              </div>

              {status.kind === "sent" && (
                <p role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Message sent successfully. Thank you!
                </p>
              )}
              {status.kind === "mail-app" && (
                <p role="status" className="rounded-xl border border-border bg-surface-sunken p-3 text-xs text-muted-foreground">
                  Opening your default email app with the pre-filled message...
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  required,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-xs font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-surface-sunken px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:bg-surface focus:outline-none transition-colors",
    hasError ? "border-destructive focus:border-destructive" : "border-border focus:border-accent"
  );
}
