import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-serif text-base tracking-tight text-foreground">
            {site.name}
          </span>
          <span className="text-sm text-muted-foreground">{site.role}</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
