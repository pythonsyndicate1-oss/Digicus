import { Card, CardContent } from "@/components/ui/card"

const quotes = [
  {
    q: "My screen time finally serves my goals—not the other way around.",
    a: "Alex P.",
  },
  {
    q: "The focus sessions and gentle breaks cut my procrastination in half.",
    a: "Priya S.",
  },
  {
    q: "Simple, empathetic, and it actually helped me build better habits.",
    a: "Jordan M.",
  },
]

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials" className="py-12 bg-card">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="testimonials" className="text-balance text-2xl font-semibold mb-6">
          Loved by Focus-Seekers
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <p className="text-pretty text-sm leading-relaxed">“{t.q}”</p>
                <p className="mt-3 text-xs text-muted-foreground">— {t.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
