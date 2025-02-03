'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const navigation = [
  { name: 'Service', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Our Team', href: '#team'},
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '#blog' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState('en')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    setDropdownOpen(false)
    // Implement logic to change the language of the website
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0d0d12]/90 backdrop-blur-sm'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="EVOP" width={120} height={40} className="h-6 w-auto" />
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
            
            <div className="relative">
              {/* <button 
                className="flex items-center justify-between space-x-2 text-gray-300 hover:bg-gray-600 hover:transition-transform bg-[#36373F] px-[26px] py-[10px] rounded-full text-sm"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Image
                  src={language === 'en' ? "/bahasa/inggris.jpg" : "/bahasa/indo.jpg"}
                  alt={language === 'en' ? "UK Flag" : "Indonesia Flag"}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span>{language === 'en' ? 'EN' : 'ID'}</span>
                <ChevronDown className="h-4 w-4 text-white" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-gray-600 rounded-lg shadow-lg">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="flex items-center space-x-2 p-2 w-full rounded-lg text-left text-gray-300 hover:bg-gray-500"
                  >
                    <Image src="/bahasa/inggris.jpg" alt="UK Flag" width={20} height={20} className="rounded-full" />
                    <span>EN</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('id')}
                    className="flex items-center space-x-2 p-2 w-full rounded-lg text-left text-gray-300 hover:bg-gray-500"
                  >
                    <Image src="/bahasa/indo.jpg" alt="Indonesia Flag" width={20} height={20} className="rounded-full" />
                    <span>ID</span>
                  </button>
                </div>
              )} */}
            </div>

            <a
                href="http://wa.me/+6281249111169"
                target='_blank'
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
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          <div className="relative px-3 py-2">
            <button 
              className="flex items-center justify-between w-full text-gray-300 bg-[#36373F] px-3 py-2 rounded-md" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="flex items-center space-x-2">
                <Image
                  src={language === 'en' ? "/bahasa/inggris.jpg" : "/bahasa/indo.jpg"}
                  alt={language === 'en' ? "UK Flag" : "Indonesia Flag"}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span>{language === 'en' ? 'EN' : 'ID'}</span>
              </div>
              <ChevronDown className="h-4 w-4 text-white" />
            </button>
            {dropdownOpen && (
              <div className="mt-2 w-full bg-[#36373F] rounded-md shadow-lg">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="flex items-center rounded-md space-x-2 p-2 w-full text-left text-gray-300 hover:bg-gray-600"
                >
                  <Image src="/bahasa/inggris.jpg" alt="UK Flag" width={20} height={20} className="rounded-full" />
                  <span>EN</span>
                </button>
                <button
                  onClick={() => handleLanguageChange('id')}
                  className="flex items-center rounded-md space-x-2 p-2 w-full text-left text-gray-300 hover:bg-gray-600"
                >
                  <Image src="/bahasa/indo.jpg" alt="Indonesia Flag" width={20} height={20} className="rounded-full" />
                  <span>ID</span>
                </button>
              </div>
            )}
          </div>

          <div className="px-3 py-2">
            <a
              href="http://wa.me/+6281249111169"
              target='_blank'
              className="block w-full bg-[#287eff] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#287eff]/90 transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
