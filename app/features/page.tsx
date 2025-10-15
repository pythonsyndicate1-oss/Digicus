import { FeatureCards } from "@/components/feature-cards"
import { FocusTimer } from "@/components/focus-timer"

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Features</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Usage Dashboard • Focus Sessions • Mindful Breaks • Insights & Goals • Badges & Streaks
        </p>
      </header>

      <FeatureCards />

      <section className="py-8">
        <h2 className="text-xl font-semibold mb-4">Try a Focus Session</h2>
        <FocusTimer />
      </section>

      <section className="py-8">
        <h2 className="text-xl font-semibold mb-2">Free Plan</h2>
        <ul className="text-sm text-muted-foreground list-disc pl-5">
          <li>Basic screen-time tracker</li>
          <li>Daily focus timer</li>
          <li>Weekly email summary</li>
        </ul>
      </section>
    </div>
  )
}
