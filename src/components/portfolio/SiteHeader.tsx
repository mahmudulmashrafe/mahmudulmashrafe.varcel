"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site, type NavId } from "@/content/site";
import { cn } from "@/lib/utils";

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<NavId>("home");
  useEffect(() => {
    if (!enabled) return;
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current: NavId = "home";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = "contact";
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled]);
  return active;
}

export function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const active = useActiveSection(onHome);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4 transition-all duration-200">
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-300",
            scrolled || open
              ? "glass bg-surface/80 border-border shadow-soft"
              : "border border-transparent"
          )}
        >
          {/* Clean Name Brand */}
          <Link
            href={onHome ? "/#home" : "/"}
            className="flex items-center gap-2 py-1 px-2 font-display text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
            aria-label={`${site.name} — Home`}
          >
            <span>{site.name}</span>
          </Link>

          {/* Clean Pill Nav */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 text-xs font-medium">
              {navItems.map((item) => {
                const isActive = onHome && active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={onHome ? `#${item.id}` : `/#${item.id}`}
                      className={cn(
                        "relative px-3.5 py-1.5 rounded-full transition-colors",
                        isActive
                          ? "bg-surface-sunken text-foreground font-semibold border border-border"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Icons & Contact */}
          <div className="flex items-center gap-2">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid place-items-center h-8 w-8 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center h-8 w-8 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href={onHome ? "#contact" : "/#contact"}
              className="btn-primary text-xs !py-1.5 !px-3.5"
            >
              Contact
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="grid place-items-center h-8 w-8 rounded-full border border-border text-foreground md:hidden"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-16 z-40 rounded-3xl glass p-6 md:hidden border border-border shadow-soft"
          >
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={onHome ? `#${item.id}` : `/#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
