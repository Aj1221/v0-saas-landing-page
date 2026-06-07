import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Faq } from "@/components/faq"
import { Waitlist } from "@/components/waitlist"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Faq />
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  )
}
