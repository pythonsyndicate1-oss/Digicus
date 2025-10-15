"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

const STORAGE_KEY = "digicus_goals_v1"

export function GoalsManager() {
  const [weeklyFocusHours, setWeeklyFocusHours] = useState<number>(5) // target hours/week
  const [thisWeekFocusMinutes, setThisWeekFocusMinutes] = useState<number>(180) // example progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const { weeklyFocusHours: w } = JSON.parse(raw)
        if (typeof w === "number") setWeeklyFocusHours(w)
      }
    } catch {}
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ weeklyFocusHours }))
    } catch {}
  }, [weeklyFocusHours])

  const targetMinutes = weeklyFocusHours * 60
  const pct = Math.min(100, Math.round((thisWeekFocusMinutes / targetMinutes) * 100))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Goals</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="rounded-md border p-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Weekly Focus Target</p>
            <span className="text-sm text-muted-foreground">{weeklyFocusHours}h / week</span>
          </div>
          <Slider
            value={[weeklyFocusHours]}
            min={1}
            max={30}
            step={1}
            onValueChange={(v) => setWeeklyFocusHours(v[0])}
            aria-label="Weekly focus hours target"
            className="mt-3"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium">This Week</p>
            <span className="text-xs text-muted-foreground">
              {Math.round(thisWeekFocusMinutes / 60)}h {thisWeekFocusMinutes % 60}m / {weeklyFocusHours}h
            </span>
          </div>
          <Progress value={pct} />
        </div>
      </CardContent>
    </Card>
  )
}
