import { Mail, MapPin } from "lucide-react";

import { contact, site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/70 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:py-24">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {contact.eyebrow}
          </p>
          <h2 className="max-w-2xl font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="max-w-xl text-base leading-8 text-muted-foreground">
            {contact.body}
          </p>
        </div>

        <a
          href={`mailto:${site.email}`}
          className="group inline-flex w-fit items-center gap-4 rounded-lg border border-border bg-card px-6 py-5 transition-colors hover:bg-secondary"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Mail className="size-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </span>
            <span className="font-serif text-xl tracking-tight text-foreground sm:text-2xl">
              {site.email}
            </span>
          </span>
        </a>

        <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {site.location}
        </p>
      </div>
    </section>
  );
}
