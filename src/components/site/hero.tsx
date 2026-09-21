import { ArrowDown } from "lucide-react";

import { intro } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-20 sm:pt-28"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {intro.eyebrow}
      </p>

      <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl">
        {intro.heading}
      </h1>

      <div className="flex max-w-2xl flex-col gap-6">
        {intro.body.map((paragraph, i) => (
          <p key={i} className="text-base leading-8 text-muted-foreground sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button asChild size="lg">
          <a href="#work">View the work</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#contact">Start a project</a>
        </Button>
      </div>

      <div className="flex flex-wrap gap-x-10 gap-y-3 pt-6">
        {intro.disciplines.map((d) => (
          <span
            key={d}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <ArrowDown className="size-3.5 rotate-[-135deg] text-foreground/40" />
            {d}
          </span>
        ))}
      </div>
    </section>
  );
}
