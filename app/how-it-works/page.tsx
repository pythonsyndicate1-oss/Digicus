export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">How It Works</h1>
        <p className="text-sm text-muted-foreground mt-2">Simple steps to mindful technology use</p>
      </header>
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <li className="rounded-md border p-4">
          <h3 className="font-medium">1. Install</h3>
          <p className="text-sm text-muted-foreground">Browser extension or mobile SDK</p>
        </li>
        <li className="rounded-md border p-4">
          <h3 className="font-medium">2. Track</h3>
          <p className="text-sm text-muted-foreground">Automatic screen time logging</p>
        </li>
        <li className="rounded-md border p-4">
          <h3 className="font-medium">3. Focus & Breaks</h3>
          <p className="text-sm text-muted-foreground">Start sessions and get reminders</p>
        </li>
        <li className="rounded-md border p-4">
          <h3 className="font-medium">4. Review & Adjust</h3>
          <p className="text-sm text-muted-foreground">Insights, trends, and goals</p>
        </li>
      </ol>
    </div>
  )
}
