import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Resources</h1>
        <p className="text-sm text-muted-foreground mt-2">Learn mindful tech use and build better focus habits</p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Latest Articles</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>
            <Link className="hover:underline" href="#">
              5 Science-Backed Ways to Improve Focus
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              The Hidden Cost of Endless Scrolling
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              How to Build a Sustainable Digital Detox Routine
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Guided Audio Breaks</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>3-minute Breathing Reset (audio)</li>
          <li>5-minute Body Scan (audio)</li>
          <li>8-minute Deep Focus On-Ramp (audio)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Video Tutorials</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Using Focus Sessions effectively</li>
          <li>Interpreting weekly analytics & trends</li>
          <li>Setting goals and earning badges</li>
        </ul>
      </section>
    </div>
  )
}
