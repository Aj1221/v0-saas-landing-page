import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does PerfectTravelShot find photo opportunities?",
    answer:
      "We combine your real-time location with data on scenery, lighting conditions, and crowd levels to surface the best nearby spots — ranked so you always know where to point your camera next.",
  },
  {
    question: "Do I need a professional camera?",
    answer:
      "Not at all. PerfectTravelShot works beautifully with the phone already in your pocket. Just snap a shot and let our AI handle the rest.",
  },
  {
    question: "What does the AI photo generation actually do?",
    answer:
      "Upload a photo and our AI enhances composition, lighting, and atmosphere to produce a polished, share-ready travel image while keeping the moment authentically yours.",
  },
  {
    question: "Does it work offline or in remote areas?",
    answer:
      "Photo discovery works best with a connection, but you can save spots in advance and generate photos later once you're back online.",
  },
  {
    question: "When will PerfectTravelShot be available?",
    answer:
      "We're rolling out access gradually. Join the waitlist below and you'll be among the first to get an invite when we launch in your region.",
  },
  {
    question: "Is my data and are my photos private?",
    answer:
      "Yes. Your photos and location data are encrypted and never shared. You're always in full control of what you keep and what you delete.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">FAQ</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion className="mt-10 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
