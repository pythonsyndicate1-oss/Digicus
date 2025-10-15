"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

type Target = { app: string; minutes: number }
const DEFAULT: Target[] = [
  { app: "Social", minutes: 30 },
  { app: "Video", minutes: 60 },
  { app: "Games", minutes: 45 },
  { app: "Browser", minutes: 120 },
]
const STORAGE_KEY = "digicus_targets_v1"

export function TargetsManager() {
  const [targets, setTargets] = useState<Target[]>(DEFAULT)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setTargets(JSON.parse(raw))
    } catch {}
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(targets))
    } catch {}
  }, [targets])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Daily Targets by App</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {targets.map((t, idx) => (
          <div key={t.app} className="rounded-md border p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{t.app}</p>
              <span className="text-sm text-muted-foreground">{t.minutes} min/day</span>
            </div>
            <Slider
              value={[t.minutes]}
              min={10}
              max={240}
              step={5}
              onValueChange={(v) => {
                const next = [...targets]
                next[idx] = { ...t, minutes: v[0] }
                setTargets(next)
              }}
              aria-label={`${t.app} daily minutes target`}
              className="mt-3"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
