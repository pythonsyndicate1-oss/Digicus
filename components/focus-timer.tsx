"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

type Mode = "focus" | "break"

export function FocusTimer() {
  // adjustable defaults
  const [focusMinutes, setFocusMinutes] = useState<number>(25)
  const [breakMinutes, setBreakMinutes] = useState<number>(5)

  const [mode, setMode] = useState<Mode>("focus")
  const [duration, setDuration] = useState<number>(focusMinutes * 60)
  const [remaining, setRemaining] = useState<number>(focusMinutes * 60)
  const [running, setRunning] = useState(false)
  const [completedFocusSessions, setCompletedFocusSessions] = useState<number>(0)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (!running) return
    intervalRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          const nextMode: Mode = mode === "focus" ? "break" : "focus"
          const nextDur = nextMode === "focus" ? focusMinutes * 60 : breakMinutes * 60
          if (mode === "focus") setCompletedFocusSessions((c) => c + 1)
          setMode(nextMode)
          setDuration(nextDur)
          const live = document.getElementById("timer-live")
          if (live) live.textContent = `Switched to ${nextMode} session`
          return nextDur
        }
        return r - 1
      })
    }, 1000)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [running, mode, focusMinutes, breakMinutes])

  // Update durations if settings change while not running
  useEffect(() => {
    if (!running && mode === "focus") {
      const d = focusMinutes * 60
      setDuration(d)
      setRemaining(d)
    }
  }, [focusMinutes, running, mode])

  useEffect(() => {
    if (!running && mode === "break") {
      const d = breakMinutes * 60
      setDuration(d)
      setRemaining(d)
    }
  }, [breakMinutes, running, mode])

  const percent = useMemo(() => 100 - Math.floor((remaining / duration) * 100), [remaining, duration])
  const mm = Math.floor(remaining / 60)
  const ss = String(remaining % 60).padStart(2, "0")

  const start = () => setRunning(true)
  const pause = () => setRunning(false)
  const reset = () => {
    setRunning(false)
    const d = mode === "focus" ? focusMinutes * 60 : breakMinutes * 60
    setDuration(d)
    setRemaining(d)
  }
  const toggleMode = () => {
    const nextMode: Mode = mode === "focus" ? "break" : "focus"
    const nextDur = nextMode === "focus" ? focusMinutes * 60 : breakMinutes * 60
    setMode(nextMode)
    setDuration(nextDur)
    setRemaining(nextDur)
    setRunning(false)
  }

  return (
    <Card aria-labelledby="focus-timer">
      <CardHeader>
        <CardTitle id="focus-timer" className="text-xl">
          Focus Sessions
        </CardTitle>
        <CardDescription>Pomodoro-style timer with mindful breaks and flexible durations</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Progress */}
        <div className="mb-5" aria-hidden>
          <div className="h-3 w-full rounded-full bg-muted">
            <div className="h-3 rounded-full bg-accent transition-all" style={{ width: `${percent}%` }} />
          </div>
        </div>

        {/* Time + Session Info */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground capitalize">Session</p>
            <p className="text-base font-semibold">{mode}</p>
          </div>
          <div aria-live="polite" aria-atomic="true" className="text-right">
            <span className="text-4xl md:text-5xl font-semibold tabular-nums leading-none">
              {mm}:{ss}
            </span>
            <div className="text-xs text-muted-foreground mt-1">Completed: {completedFocusSessions}</div>
            <span id="timer-live" className="sr-only" />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {!running ? (
            <Button onClick={start} className="bg-accent text-accent-foreground hover:opacity-90">
              Start
            </Button>
          ) : (
            <Button variant="secondary" onClick={pause}>
              Pause
            </Button>
          )}
          <Button variant="outline" onClick={reset}>
            Reset
          </Button>
          <Button variant="ghost" onClick={toggleMode}>
            Switch to {mode === "focus" ? "break" : "focus"}
          </Button>
          {!running && (
            <>
              <Button variant="outline" onClick={() => setFocusMinutes(25)}>
                Focus 25
              </Button>
              <Button variant="outline" onClick={() => setFocusMinutes(50)}>
                Focus 50
              </Button>
              <Button variant="outline" onClick={() => setBreakMinutes(5)}>
                Break 5
              </Button>
              <Button variant="outline" onClick={() => setBreakMinutes(10)}>
                Break 10
              </Button>
            </>
          )}
        </div>

        {/* Settings */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-md border p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Focus length</p>
              <span className="text-sm text-muted-foreground">{focusMinutes} min</span>
            </div>
            <Slider
              value={[focusMinutes]}
              min={10}
              max={90}
              step={5}
              onValueChange={(v) => !running && setFocusMinutes(v[0])}
              aria-label="Focus duration minutes"
              className="mt-3"
            />
          </div>
          <div className="rounded-md border p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Break length</p>
              <span className="text-sm text-muted-foreground">{breakMinutes} min</span>
            </div>
            <Slider
              value={[breakMinutes]}
              min={3}
              max={30}
              step={1}
              onValueChange={(v) => !running && setBreakMinutes(v[0])}
              aria-label="Break duration minutes"
              className="mt-3"
            />
          </div>
        </div>

        <p className="sr-only">Use start to begin, pause to stop, reset to restart. Adjust durations when paused.</p>
      </CardContent>
    </Card>
  )
}
