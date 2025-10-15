import { TodoList } from "@/components/todo-list"

export default function TodoListPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">To‑Do</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Plan your day and track tasks alongside your focus sessions.
        </p>
      </header>
      <TodoList />
    </div>
  )
}
