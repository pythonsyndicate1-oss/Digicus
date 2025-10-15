"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLink = "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? "border-border" : "border-transparent"
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Digicus Home">
          <span aria-hidden className="h-6 w-6 rounded-md bg-primary" />
          <span className="text-sm font-semibold tracking-wide">Digicus</span>
          <span className="sr-only">Track. Focus. Balance.</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          <Link className={navLink} href="/dashboard">
            Dashboard
          </Link>
          <Link className={navLink} href="/todolist">
            To‑Do
          </Link>
          <Link className={navLink} href="/goals">
            Goals
          </Link>
          <Link className={navLink} href="/targets">
            Targets
          </Link>
          <Link className={navLink} href="/features">
            Features
          </Link>
          <Link className={navLink} href="/how-it-works">
            How It Works
          </Link>
          <Link className={navLink} href="/resources">
            Resources
          </Link>
          <Link className={navLink} href="/about">
            About
          </Link>
          <Link className={navLink} href="/contact">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
            <Link href="/features" aria-label="Get Started — It’s Free">
              Get Started — It’s Free
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    if (typeof document !== "undefined") {
      setDark(document.documentElement.classList.contains("dark"))
    }
  }, [])
  return (
    <button
      className="h-9 w-9 inline-flex items-center justify-center rounded-md border bg-card text-foreground hover:bg-muted"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => {
        const el = document.documentElement
        el.classList.toggle("dark")
        setDark(el.classList.contains("dark"))
      }}
    >
      <span className="sr-only">Toggle theme</span>
      <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
        {dark ? (
          <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9.84-3.24l1.8-1.8-1.8-1.79-1.79 1.79 1.79 1.8zM20 13h3v-2h-3v2zM11 1h2v3h-2V1zM4.22 18.36l-1.8 1.8 1.8 1.79 1.79-1.79-1.79-1.8zM12 6a6 6 0 100 12A6 6 0 0012 6z" />
        ) : (
          <path d="M21.64 13a9 9 0 11-10.63-10.63A7 7 0 1021.64 13z" />
        )}
      </svg>
    </button>
  )
}
