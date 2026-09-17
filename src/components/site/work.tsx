import Image from "next/image";

import { work } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {work.eyebrow}
          </p>
          <h2 className="max-w-2xl font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            {work.heading}
          </h2>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {work.items.map((item, i) => (
            <figure
              key={i}
              className="group relative break-inside-avoid overflow-hidden rounded-lg border border-border/70 bg-secondary"
            >
              <div
                className={
                  item.span === "tall"
                    ? "relative aspect-[3/4]"
                    : "relative aspect-[4/3]"
                }
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-serif text-base text-white">
                  {item.title}
                </span>
                <span className="text-xs text-white/80">{item.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
