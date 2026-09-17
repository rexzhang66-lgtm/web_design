import Link from "next/link";
import { Mail, Menu } from "lucide-react";

import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-serif text-lg tracking-tight text-foreground"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={`mailto:${site.email}`}>
              <Mail className="size-4" />
              Email me
            </a>
          </Button>
          <Button asChild size="icon" variant="ghost" className="md:hidden" aria-label="Menu">
            <a href="#contact">
              <Menu className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
