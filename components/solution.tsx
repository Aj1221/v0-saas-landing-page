import { Check } from "lucide-react"
import Image from "next/image"

const solutions = [
  {
    title: "Finds nearby photo opportunities",
    description:
      "Instantly surfaces the best photo spots around you, ranked by light, scenery, and how busy they are.",
  },
  {
    title: "Suggests viewpoints",
    description:
      "Get the exact angles and vantage points that turn a good location into a breathtaking frame.",
  },
  {
    title: "Recommends photo ideas",
    description:
      "Creative composition prompts and shot ideas tailored to each location and time of day.",
  },
  {
    title: "Generates travel photos",
    description:
      "Upload your photo and let AI craft a stunning, share-ready travel image in seconds.",
  },
]

export function Solution() {
  return (
    <section id="solution" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/gallery-1.png"
              alt="Santorini blue domes at sunset"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/gallery-3.png"
              alt="Traveler walking through a sunlit desert canyon"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <div>
            <span className="text-sm font-medium text-primary">
              The solution
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              PerfectTravelShot does the hard part for you
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {solutions.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-4" />
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
