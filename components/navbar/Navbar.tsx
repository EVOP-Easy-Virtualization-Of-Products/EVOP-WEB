"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "Service", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
    // Implement logic to change the language of the website
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#0d0d12]/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className="flex items-center"
            >
              <Image
                src="/logo.svg"
                alt="EVOP"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <span
                className="font-plus-jakarta font-bold text-2xl px-2 text-[#4AC3F3]"
                style={{ fontFamily: "Plus Jakarta Sans", color: "#4AC3F3" }}
              >
                <b>EVOP</b>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="relative">
              <button
                className="flex items-center justify-between space-x-2 text-gray-300 bg-[#36373F] px-6 py-2 rounded-full"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{ width: "125px" }} // Menyesuaikan lebar
              >
                <Image
                  src={
                    language === "en"
                      ? "/bahasa/inggris.jpg"
                      : "/bahasa/indo.jpg"
                  }
                  alt={language === "en" ? "UK Flag" : "Indonesia Flag"}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span>{language === "en" ? "EN" : "ID"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#36373F] rounded-lg shadow-lg">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="flex items-center space-x-2 p-2 w-full text-left text-gray-300 hover:bg-gray-500"
                  >
                    <Image
                      src="/bahasa/inggris.jpg"
                      alt="UK Flag"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>EN</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("id")}
                    className="flex items-center space-x-2 p-2 w-full text-left text-gray-300 hover:bg-gray-500"
                  >
                    <Image
                      src="/bahasa/indo.jpg"
                      alt="Indonesia Flag"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>ID</span>
                  </button>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="block w-full bg-[#287eff] text-sm font-bold text-white px- py-2 rounded-full hover:bg-[#287eff]/90 transition-colors"
              style={{ width: "135px" }} // Menyesuaikan lebar
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
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Full-width Language Dropdown in Mobile */}
            <div className="relative">
              <button
                className="flex items-center justify-between space-x-2 text-gray-300 bg-[#36373F] px-6 py-2 rounded-full w-full"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Image
                  src={
                    language === "en"
                      ? "/bahasa/inggris.jpg"
                      : "/bahasa/indo.jpg"
                  }
                  alt={language === "en" ? "UK Flag" : "Indonesia Flag"}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span>{language === "en" ? "EN" : "ID"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-full bg-[#36373F] rounded-lg shadow-lg">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="flex items-center space-x-2 p-2 w-full text-left text-gray-300 hover:bg-gray-500"
                  >
                    <Image
                      src="/bahasa/inggris.jpg"
                      alt="UK Flag"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>EN</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("id")}
                    className="flex items-center space-x-2 p-2 w-full text-left text-gray-300 hover:bg-gray-500"
                  >
                    <Image
                      src="/bahasa/indo.jpg"
                      alt="Indonesia Flag"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>ID</span>
                  </button>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="block w-full bg-[#287eff] text-white px-6 py-2 rounded-full hover:bg-[#287eff]/90 transition-colors mt-4 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
