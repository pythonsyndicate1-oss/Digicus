"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

type Todo = { id: string; text: string; done: boolean }

const STORAGE_KEY = "digicus_todos_v1"

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState("")

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setTodos(JSON.parse(raw))
    } catch {}
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch {}
  }, [todos])

  const add = () => {
    const t = text.trim()
    if (!t) return
    setTodos((prev) => [{ id: crypto.randomUUID(), text: t, done: false }, ...prev])
    setText("")
  }
  const toggle = (id: string) => setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  const remove = (id: string) => setTodos((prev) => prev.filter((t) => t.id !== id))
  const clearDone = () => setTodos((prev) => prev.filter((t) => !t.done))

  const remaining = todos.filter((t) => !t.done).length

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">To‑Do List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Add a task…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            aria-label="Task name"
          />
          <Button onClick={add} className="bg-accent text-accent-foreground hover:opacity-90">
            Add
          </Button>
        </div>

        <ul className="mt-4 grid gap-2">
          {todos.map((t) => (
            <li key={t.id} className="flex items-center justify-between rounded-md border p-3">
              <label className="flex items-center gap-3">
                <Checkbox checked={t.done} onCheckedChange={() => toggle(t.id)} aria-label={`Mark ${t.text} done`} />
                <span className={`text-sm ${t.done ? "line-through text-muted-foreground" : ""}`}>{t.text}</span>
              </label>
              <Button variant="ghost" onClick={() => remove(t.id)} aria-label={`Delete ${t.text}`}>
                Delete
              </Button>
            </li>
          ))}
          {todos.length === 0 && (
            <li className="text-sm text-muted-foreground">No tasks yet. Add your first task above.</li>
          )}
        </ul>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{remaining} remaining</span>
        <Button variant="outline" onClick={clearDone}>
          Clear completed
        </Button>
      </CardFooter>
    </Card>
  )
}
