"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tasks", label: "Tasks" },
  { href: "/shop", label: "Shop" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/teams", label: "Teams" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-4 mb-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "px-3 py-2 rounded-md text-sm font-medium",
            pathname === link.href ? "bg-blue-700 text-white" : "text-blue-700 hover:bg-blue-700 hover:text-white",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

