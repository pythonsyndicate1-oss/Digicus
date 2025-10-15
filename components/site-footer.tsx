import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span aria-hidden className="h-6 w-6 rounded-md bg-primary" />
            <span className="text-sm font-semibold">Digicus</span>
          </div>
          <p className="text-sm text-muted-foreground">Empowering healthier digital habits through mindful design.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Product</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:underline" href="/features">
                Features
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/how-it-works">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/resources">
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:underline" href="/legal/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/legal/terms">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/legal/cookies">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Digicus. All rights reserved.
      </div>
    </footer>
  )
}
