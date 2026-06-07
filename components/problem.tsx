import { CloudRain, Crosshair, Timer, Users } from "lucide-react"

const problems = [
  {
    icon: Timer,
    title: "Miss the perfect moment",
    description:
      "The light fades, the crowd moves, and the shot you imagined is gone before you lift your camera.",
  },
  {
    icon: Crosshair,
    title: "Can't get the perfect angle",
    description:
      "You know there's a better composition, but finding it on the spot is frustrating and slow.",
  },
  {
    icon: Users,
    title: "Crowded destinations",
    description:
      "Iconic spots are packed with tourists, making that clean, magazine-worthy frame nearly impossible.",
  },
  {
    icon: CloudRain,
    title: "Don't know the best photo spots",
    description:
      "Hidden viewpoints and local gems stay hidden, and you settle for the same shots everyone else takes.",
  },
]

export function Problem() {
  return (
    <section id="problem" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">The problem</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Great travel photos shouldn&apos;t come down to luck
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Every traveler knows the feeling of coming home with photos that
            don&apos;t match the magic of being there.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <item.icon className="size-5" />
              </span>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
