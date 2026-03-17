"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Make navbar solid on scroll, or if we're not on the homepage (like /results, /contact, /about)
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarBg =
    isScrolled || !isHomePage
      ? "bg-white shadow-sm py-4"
      : "bg-transparent py-6";
  const textColor = isScrolled || !isHomePage ? "text-gray-900" : "text-white";
  const logoColor = isScrolled || !isHomePage ? "text-gray-900" : "text-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navbarBg,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Compass className={cn("h-8 w-8", logoColor)} />
              <span
                className={cn("text-2xl font-bold tracking-tight", textColor)}
              >
                Tripora
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-800",
                  textColor,
                  pathname === link.href &&
                    !isHomePage &&
                    "text-gray-900 font-semibold",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className={cn(
                "hover:bg-black/10 transition-colors",
                textColor,
                "hover:text-current",
              )}
            >
              Log In
            </Button>
            <Button
              variant={isScrolled || !isHomePage ? "default" : "outline"}
              className={
                !isScrolled && isHomePage
                  ? "border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
                  : ""
              }
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className={cn("p-2", textColor)}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-gray-900 hover:text-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3 border-t border-gray-100 mt-4">
              <Button variant="outline" className="w-full justify-center">
                Log In
              </Button>
              <Button className="w-full justify-center">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
