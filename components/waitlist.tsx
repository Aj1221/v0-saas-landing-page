"use client"

import { CheckCircle2, Loader2 } from "lucide-react"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"

export function Waitlist() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")

  async function handleSubmit(
  e: FormEvent<HTMLFormElement>
) {
  e.preventDefault()

  setStatus("loading")

  const formData = new FormData(e.currentTarget)

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const country = formData.get("country") as string

  const { error } = await supabase
    .from("waitlist")
    .insert([
      {
        name,
        email,
        country,
      },
    ])

  if (error) {
    console.error("Supabase Error:", error)
    alert(error.message)
    setStatus("idle")
    return
  }

  setStatus("done")
}

  return (
    <section id="waitlist" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="bg-primary/10 px-8 py-10 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Join the waitlist
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty text-muted-foreground">
              Be the first to capture perfect travel photos. Get early access
              and exclusive launch perks.
            </p>
          </div>

          <div className="p-8">
            {status === "done" ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle2 className="size-12 text-primary" />
                <h3 className="text-xl font-semibold">You&apos;re on the list!</h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Thanks for joining. We&apos;ll reach out as soon as
                  PerfectTravelShot is ready in your region.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Traveler"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    placeholder="Italy"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="mt-1 w-full rounded-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
