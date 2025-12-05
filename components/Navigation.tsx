"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/emergency", label: "Emergency" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center h-16">
            <Image
              src="/images/frontier-restoration-logo-horizontal.png"
              alt="Frontier Restoration LLC"
              width={300}
              height={64}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9079872916"
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded transition-colors duration-200"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-yellow-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-900 rounded transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9079872916"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded text-center mt-2"
              >
                Call Now: (907) 987-2916
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

