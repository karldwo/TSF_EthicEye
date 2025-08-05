"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/about", label: "About Us" },
    { href: "/impact", label: "Impact" },
    { href: "/contact", label: "Contact" },
  ]

  const isHomePage = pathname === "/"

  return (
    <nav className={`${isHomePage ? "bg-green-100" : "bg-white"} sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - exact styling from image */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-700">EthicEye</span>
          </Link>

          {/* Desktop Navigation - exact styling from image */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${isHomePage ? "text-green-700 hover:text-green-800" : "text-gray-700 hover:text-green-600"} transition-colors font-medium ${
                  pathname === item.href
                    ? isHomePage
                      ? "text-green-800 font-semibold"
                      : "text-green-600 font-semibold"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isHomePage ? "text-green-700" : "text-gray-700"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isHomePage ? "text-green-700" : "text-gray-700"}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-300 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${isHomePage ? "text-green-700 hover:text-green-800" : "text-gray-700 hover:text-green-600"} transition-colors font-medium px-2 py-1 rounded ${
                    pathname === item.href
                      ? isHomePage
                        ? "text-green-800 bg-green-100 font-semibold"
                        : "text-green-600 bg-green-50 font-semibold"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
