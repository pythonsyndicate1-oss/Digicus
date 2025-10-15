export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Empowering healthier digital habits through mindful design.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-md border p-5">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-sm text-muted-foreground">
            We help people reclaim attention, improve focus, and foster a balanced relationship with technology.
          </p>
        </div>
        <div className="rounded-md border p-5">
          <h2 className="text-xl font-semibold mb-2">The Team</h2>
          <p className="text-sm text-muted-foreground">
            A cross-disciplinary crew with backgrounds in UX, psychology, and software engineering.
          </p>
        </div>
      </section>
    </div>
  )
}
