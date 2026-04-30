'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-sm shadow-lg shadow-dark-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <Code2 className="w-8 h-8" />
            <span className="font-bold text-lg hidden sm:block">
              &lt;Dev /&gt;
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-dark-300 hover:text-primary-400 hover:bg-dark-800/50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-4 py-2 rounded-md bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-300 hover:text-primary-400 hover:bg-dark-800/50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-64 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-900/95 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-300 hover:text-primary-400 hover:bg-dark-800/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full mt-2 px-4 py-2 text-center rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}