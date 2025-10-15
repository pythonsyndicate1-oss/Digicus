import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeatureCards } from "@/components/feature-cards"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <div>
      <section className="border-b bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-balance text-4xl md:text-5xl font-semibold">
              Reclaim Your Focus & Balance Your Screen Time
            </h1>
            <p className="mt-4 text-pretty text-base text-muted-foreground">
              Transform your screen time into mindful time. Track usage, boost focus, and restore digital balance.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
                <Link href="/features">Get Started — It’s Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Tagline: Track. Focus. Balance.</p>
          </div>
          <div>
            <div className="rounded-xl border bg-background p-6">
              <h2 className="text-lg font-semibold">Snapshot</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Screen-time dashboard (today)</li>
                <li>• 25:00 Focus session ready</li>
                <li>• Break reminder at 5 min intervals</li>
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-md border p-3">
                  <p className="text-xs text-muted-foreground">Daily</p>
                  <p className="text-lg font-semibold">2h 14m</p>
                </div>
                <div className="rounded-md border p-3">
                  <p className="text-xs text-muted-foreground">Weekly</p>
                  <p className="text-lg font-semibold">15h 38m</p>
                </div>
                <div className="rounded-md border p-3">
                  <p className="text-xs text-muted-foreground">Top App</p>
                  <p className="text-lg font-semibold">Browser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureCards />
      <Testimonials />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">How MindfulScreen Works</h2>
          <ol className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-sm">
            <li className="rounded-md border p-4">
              <p className="font-medium">1. Install extension</p>
              <p className="text-muted-foreground">Chrome/Firefox + mobile SDK</p>
            </li>
            <li className="rounded-md border p-4">
              <p className="font-medium">2. Auto tracking</p>
              <p className="text-muted-foreground">No manual input required</p>
            </li>
            <li className="rounded-md border p-4">
              <p className="font-medium">3. Focus & Breaks</p>
              <p className="text-muted-foreground">Run sessions, get reminders</p>
            </li>
            <li className="rounded-md border p-4">
              <p className="font-medium">4. Review & Adjust</p>
              <p className="text-muted-foreground">Insights and personalized goals</p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
