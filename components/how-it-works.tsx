import { MapPin, Camera, Upload, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Detect location",
    description:
      "PerfectTravelShot pinpoints exactly where you are and understands your surroundings.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Find photo opportunities",
    description:
      "Discover the best nearby spots, viewpoints, and shot ideas in real time.",
  },
  {
    number: "03",
    icon: Upload,
    title: "Upload photo",
    description:
      "Snap and upload your shot, or pick one straight from your camera roll.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Generate perfect travel photo",
    description:
      "AI transforms it into a stunning, polished travel photo ready to share.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-border/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">
            How it works
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From location to perfect shot in four steps
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="text-sm font-mono font-medium text-primary">
                {step.number}
              </span>
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <step.icon className="size-5" />
              </span>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
