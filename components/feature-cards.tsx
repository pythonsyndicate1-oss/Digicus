import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Timer, BarChart3, Bell, Target } from "lucide-react"

const features = [
  {
    title: "Usage Dashboard",
    desc: "Visualize daily, weekly, and app-by-app screen time.",
    icon: BarChart3,
  },
  {
    title: "Focus Sessions",
    desc: "Pomodoro-style timers with optional ambient soundscapes.",
    icon: Timer,
  },
  {
    title: "Mindful Breaks",
    desc: "Automated reminders for short, guided pauses.",
    icon: Bell,
  },
  {
    title: "Insights & Goals",
    desc: "Personalized recommendations and targets to stay on track.",
    icon: Target,
  },
]

export function FeatureCards() {
  return (
    <section aria-labelledby="features-title" className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="features-title" className="text-balance text-2xl font-semibold mb-6">
          Real-Time Insights • Guided Breaks • Personalized Goals
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="h-full">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
