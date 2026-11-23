import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/portfolio/Reveal";
import { StackList } from "@/components/portfolio/StackList";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return {
      title: `Project Not Found | ${site.name}`,
    };
  }
  const title = `${project.title} — ${project.domain.split(" / ")[0]} | ${site.name}`;
  return {
    title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
      type: "article",
      url: `${site.seo.siteUrl}/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) {
    notFound();
  }

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length] ?? p;
  const next = projects[(idx + 1) % projects.length] ?? p;

  return (
    <article className="pt-28 md:pt-36">
      <div className="container-page">
        <Link href="/#projects" className="text-eyebrow inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> All projects
        </Link>

        <header className="grid-12 mt-10 gap-y-8">
          <div className="col-span-4 flex items-baseline gap-4 md:col-span-12">
            <span className="font-editorial text-gradient pr-2 text-6xl md:text-8xl">{p.number}</span>
            <span className="text-eyebrow text-muted-foreground">
              {p.kind === "research" ? "Research & Academic" : "Engineering"} — {p.domain}
            </span>
          </div>
          <h1 className="text-h2 col-span-4 max-w-[22ch] text-balance md:col-span-10">{p.fullTitle}</h1>
          <p className="text-lede col-span-4 max-w-[60ch] text-muted-foreground md:col-span-8">{p.overview}</p>
          <div className="col-span-4 flex flex-wrap items-center gap-3 md:col-span-12">
            {p.github ? (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2.5 rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-foreground hover:border-accent hover:bg-surface-sunken transition-all shadow-xs"
              >
                <Github className="h-4 w-4 text-accent" aria-hidden /> View GitHub Repository <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden />
              </a>
            ) : (
              <span className="text-eyebrow text-muted-foreground">Academic Research / Private Code</span>
            )}
          </div>
        </header>

        {p.notice && (
          <aside className="glass mt-8 rounded-2xl px-5 py-4 text-sm leading-relaxed text-muted-foreground md:max-w-[70ch]">
            {p.notice}
          </aside>
        )}

        {p.results && (
          <section aria-labelledby="results" className="mt-16 border-t border-border pt-6 md:mt-24">
            <h2 id="results" className="text-eyebrow text-muted-foreground">{p.results.heading}</h2>
            <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {p.results.metrics.map((m) => (
                <div key={m.label} className="glass ring-gradient rounded-2xl p-5 md:p-6">
                  <dd className="text-gradient w-fit text-3xl font-medium tracking-tight tabular-nums md:text-5xl">{m.value}</dd>
                  <dt className="mt-2 text-sm text-muted-foreground">{m.label}</dt>
                </div>
              ))}
            </dl>
            {p.results.note && <p className="mt-8 max-w-[70ch] text-sm text-muted-foreground">{p.results.note}</p>}
          </section>
        )}

        <div className="mt-16 space-y-0 md:mt-24">
          <DetailRow label="Problem statement"><p className="text-lede">{p.problem}</p></DetailRow>
          <DetailRow label="Approach"><p className="leading-relaxed">{p.approach}</p></DetailRow>
          <DetailRow label={p.kind === "research" ? "Methodology" : "Features"}>
            <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {p.methodology.map((m) => (
                <li key={m} className="flex gap-3 leading-relaxed"><span className="mt-3 h-px w-3 shrink-0 bg-accent" />{m}</li>
              ))}
            </ul>
          </DetailRow>
          {p.details.map((d) => (
            <DetailRow key={d.heading} label={d.heading}>
              <ul className="space-y-3">
                {d.items.map((it, k) => (
                  <li key={it} className="flex gap-4 leading-relaxed">
                    <span className="w-6 shrink-0 pt-1 font-mono text-xs text-muted-foreground">{d.ordered ? String(k + 1).padStart(2, "0") : "—"}</span>
                    {it}
                  </li>
                ))}
              </ul>
            </DetailRow>
          ))}
          <DetailRow label="Technology stack"><StackList items={p.stack} /></DetailRow>
        </div>

        <nav aria-label="More projects" className="mt-20 grid grid-cols-2 gap-4 md:mt-28">
          <Link href={`/projects/${prev.slug}`} className="group glass lift flex flex-col gap-2 rounded-2xl p-5 hover:shadow-glow md:p-7">
            <span className="text-eyebrow inline-flex items-center gap-2 text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" aria-hidden /> Previous
            </span>
            <span className="font-medium tracking-tight md:text-xl">{prev.title}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group glass lift flex flex-col items-end gap-2 rounded-2xl p-5 text-right hover:shadow-glow md:p-7">
            <span className="text-eyebrow inline-flex items-center gap-2 text-muted-foreground">
              Next <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
            <span className="font-medium tracking-tight md:text-xl">{next.title}</span>
          </Link>
        </nav>
      </div>
      <div className="h-20" />
    </article>
  );
}

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid-12 gap-y-4 border-t border-border py-10">
      <h2 className="text-eyebrow col-span-4 text-muted-foreground md:col-span-3">{label}</h2>
      <div className="col-span-4 md:col-span-9">{children}</div>
    </section>
  );
}

