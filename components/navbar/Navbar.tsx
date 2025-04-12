"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Service", href: "/#services" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Our Team", href: "/#team" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/#contact" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // If it's not the home page and the link is not for blog, navigate to home first
    if (!isHomePage && !href.startsWith("/blog")) {
      window.location.href = href;
      return;
    }

    // If it's a blog link or any other full URL, navigate normally
    if (href.startsWith("/blog") || href.startsWith("http")) {
      window.location.href = href;
      return;
    }

    // For home page sections, scroll smoothly
    const element = document.querySelector(href.replace("/", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 w-screen z-50 transition-all duration-300 bg-[#0d0d12]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-0">
          <div className="flex-shrink-0">
            <Link href="/#hero" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="EVOP"
                width={120}
                height={40}
                className="h-6 w-auto"
              />
              <span className="font-bold text-lg sm:text-2xl ml-2 text-[#4AC3F3]">
                EVOP
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}

            <a
              href="http://wa.me/+6281249111169"
              target="_blank"
              className="text-sm hover:scale-105 active:scale-95 lg:text-base font-bold bg-[#287eff] text-white px-[12px] py-2 rounded-full hover:bg-[#287eff]/90 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle mobile menu"
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

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="pt-2 pb-3 space-y-1 bg-[#0d0d12]">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              {item.name}
            </a>
          ))}

          <div className="px-4 py-2">
            <a
              href="http://wa.me/+6281249111169"
              target="_blank"
              className="block w-full bg-[#287eff] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#287eff]/90 transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
