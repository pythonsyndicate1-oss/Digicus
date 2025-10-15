import { DashboardWidgets } from "@/components/dashboard-widgets"

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-2">Overview of your screen time and focus sessions</p>
      </header>
      <DashboardWidgets />
    </div>
  )
}
