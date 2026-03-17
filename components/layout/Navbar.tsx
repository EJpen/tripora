"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
        <div className="flex items-center justify-between relative z-50">
          <div className="flex items-center relative z-50">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Compass
                className={cn(
                  "h-8 w-8 transition-colors",
                  mobileMenuOpen ? "text-gray-900" : logoColor,
                )}
              />
              <span
                className={cn(
                  "text-2xl font-bold tracking-tight transition-colors",
                  mobileMenuOpen ? "text-gray-900" : textColor,
                )}
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
                  ? "border-white bg-transparent text-white hover:text-gray-900"
                  : ""
              }
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center relative z-50">
            <button
              type="button"
              className={cn(
                "p-2 relative z-50",
                mobileMenuOpen ? "text-gray-900" : textColor,
              )}
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-white flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 items-center justify-center w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    className="block text-4xl font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + navLinks.length * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="pt-8 flex flex-col space-y-4 w-64 items-center"
              >
                <Link
                  href="/login"
                  className="block text-4xl font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="block text-4xl font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
