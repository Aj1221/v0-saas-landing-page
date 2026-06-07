import { Aperture, Compass, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Aperture,
    title: "AI Travel Photographer",
    description:
      "Your personal photographer in your pocket — generate professional-grade travel photos from any shot.",
  },
  {
    icon: Compass,
    title: "Location Based Discovery",
    description:
      "Discover hidden gems and iconic spots based on exactly where you are in the world.",
  },
  {
    icon: Lightbulb,
    title: "Photo Opportunity Engine",
    description:
      "Smart recommendations for angles, timing, and compositions tailored to each location.",
  },
  {
    icon: Heart,
    title: "Travel Memories",
    description:
      "Build a beautiful, organized collection of your journeys you'll actually want to revisit.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Features</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need for unforgettable travel photos
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <feature.icon className="size-5" />
                </span>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative min-h-64 overflow-hidden rounded-2xl border border-border lg:min-h-full">
            <Image
              src="/gallery-2.png"
              alt="Misty mountain lake at dawn"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-lg font-semibold">
                Capture moments that feel as magical as they were.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
