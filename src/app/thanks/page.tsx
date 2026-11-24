import Link from "next/link";
import { CheckCircle2, Home } from "lucide-react";
import { site } from "@/content/site";

export const metadata = {
  title: `Thank You | ${site.name}`,
  description: `Thank you for your message. ${site.name} will respond to your inquiry shortly.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6 text-foreground">
      <div className="glass shadow-glass w-full max-w-md space-y-6 rounded-3xl p-8 text-center sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-success/30 bg-success/15 text-success">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-h3 font-display font-semibold tracking-tight text-foreground">
            Message <span className="font-editorial">Received</span>
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Thank you for reaching out to {site.name}. Your message has been received, and I will get back to you shortly.
          </p>
        </div>

        <div className="space-y-3 border-t border-border pt-6">
          <Link
            href="/"
            className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium"
          >
            <Home className="h-4 w-4" />
            <span>Return to Portfolio</span>
          </Link>
          <div className="font-mono text-xs text-muted-foreground">
            {site.name} &bull; {site.location.short}
          </div>
        </div>
      </div>
    </div>
  );
}
