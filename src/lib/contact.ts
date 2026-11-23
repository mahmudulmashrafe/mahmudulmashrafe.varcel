import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  subject: z.string().trim().min(3, "Please add a short subject.").max(150, "Subject must be under 150 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters.")
    .max(2000, "Message must be under 2000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export function validateContact(values: Record<keyof ContactInput, string>):
  | { ok: true; data: ContactInput }
  | { ok: false; errors: ContactErrors } {
  const r = contactSchema.safeParse(values);
  if (r.success) return { ok: true, data: r.data };
  const errors: ContactErrors = {};
  for (const issue of r.error.issues) {
    const k = issue.path[0] as keyof ContactInput;
    if (!errors[k]) errors[k] = issue.message;
  }
  return { ok: false, errors };
}

export function buildMailto(to: string, d: ContactInput) {
  const body = `${d.message}\n\n— ${d.name} (${d.email})`;
  return `mailto:${to}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
}

export function formatPlainMessage(d: ContactInput) {
  return `Subject: ${d.subject}\nFrom: ${d.name} <${d.email}>\n\n${d.message}`;
}

