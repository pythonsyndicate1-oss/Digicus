import { TargetsManager } from "@/components/targets-manager"

export default function TargetsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Targets</h1>
        <p className="text-sm text-muted-foreground mt-2">Daily app caps for healthy habits.</p>
      </header>
      <TargetsManager />
    </div>
  )
}
