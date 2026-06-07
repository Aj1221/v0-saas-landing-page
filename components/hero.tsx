import { ArrowRight, MapPin, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            AI-powered travel photography
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Never Miss The{" "}
            <span className="text-primary">Perfect Travel Photo</span> Again
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Discover amazing photo opportunities and generate beautiful travel
            memories using AI.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#waitlist" />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              Join Waitlist
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#how-it-works" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent"
            >
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            Trusted by 12,000+ travelers in 80+ countries
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src="/hero-travel.png"
              alt="Traveler capturing a stunning golden-hour mountain landscape"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:flex">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Sparkles className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Photo generated</p>
              <p className="text-xs text-muted-foreground">in 4 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
