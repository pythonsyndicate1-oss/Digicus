import { GoalsManager } from "@/components/goals-manager"

export default function GoalsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Goals</h1>
        <p className="text-sm text-muted-foreground mt-2">Set weekly focus targets and track your progress.</p>
      </header>
      <GoalsManager />
    </div>
  )
}
