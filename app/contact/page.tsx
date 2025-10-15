"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Contact & Support</h1>
        <p className="text-sm text-muted-foreground mt-2">Send a message or open a support request</p>
      </header>

      <form
        className="grid gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          setStatus("sent")
        }}
        aria-describedby="contact-help"
      >
        <div>
          <label className="text-sm font-medium" htmlFor="name">
            Name
          </label>
          <Input id="name" name="name" required placeholder="Jane Doe" />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" name="email" required placeholder="jane@example.com" />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="msg">
            Message
          </label>
          <Textarea id="msg" name="message" required placeholder="How can we help?" />
        </div>
        <p id="contact-help" className="text-xs text-muted-foreground">
          We’ll get back within 1–2 business days.
        </p>
        <Button type="submit" className="bg-accent text-accent-foreground hover:opacity-90">
          {status === "idle" ? "Send" : "Message Sent!"}
        </Button>
      </form>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
        <ul className="text-sm text-muted-foreground list-disc pl-5">
          <li>Installation: Chrome/Firefox extension and mobile SDK</li>
          <li>Privacy: Raw usage data stays on device by default</li>
          <li>Customization: Configure goals, session lengths, reminders</li>
        </ul>
      </section>
    </div>
  )
}
