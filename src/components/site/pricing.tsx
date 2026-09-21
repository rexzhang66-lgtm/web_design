import { Check } from "lucide-react";

import { pricing } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex max-w-2xl flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {pricing.eyebrow}
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            {pricing.heading}
          </h2>
          <p className="text-base leading-8 text-muted-foreground">
            {pricing.note}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.featured
                  ? "flex flex-col border-foreground/80 shadow-sm"
                  : "flex flex-col"
              }
            >
              <CardHeader>
                <div className="flex items-baseline justify-between gap-2">
                  <CardTitle>{tier.name}</CardTitle>
                  {tier.featured && (
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Popular
                    </span>
                  )}
                </div>
                <CardDescription>{tier.description}</CardDescription>
                <p className="pt-2 font-serif text-2xl tracking-tight text-foreground">
                  {tier.price}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant={tier.featured ? "default" : "outline"}
                  className="w-full"
                >
                  <a href="#contact">Enquire</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
