"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Menu, X, ArrowRight } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "O Jornal", href: "#sobre" },
    { label: "O Que Cobrimos", href: "#escopo" },
    { label: "Como Trabalhamos", href: "#linha-editorial" },
    { label: "Redação", href: "#equipe" },
    { label: "Newsletter", href: "#newsletter" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#3B0B11]/95 backdrop-blur-md border-b border-[#F7F2EC]/10 shadow-lg py-3"
          : "bg-[#4C0F16] border-b border-[#F7F2EC]/10 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Wordmark Logo */}
          <a
            href="#"
            className="group flex items-center space-x-2 focus:outline-none"
          >
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl tracking-tight text-[#F7F2EC] group-hover:text-[#D49B5E] transition-colors">
              the round
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#C77B3F] group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Minimal Anchor Navigation (Canary / Canastra Style) */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-[#F7F2EC]/80 hover:text-[#F7F2EC] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions (LinkedIn & Newsletter CTA) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 text-xs font-semibold text-[#F7F2EC]/80 hover:text-[#F7F2EC] bg-[#3B0B11]/60 hover:bg-[#3B0B11] border border-[#F7F2EC]/15 px-3.5 py-2 rounded-full transition-all"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-[#D49B5E]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="#newsletter"
              className="hidden sm:flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#F7F2EC] bg-[#C77B3F] hover:bg-[#B06930] px-4 py-2 rounded-full transition-all shadow-sm"
            >
              <span>Assinar Newsletter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#F7F2EC] hover:text-[#D49B5E] focus:outline-none"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#3B0B11] border-b border-[#F7F2EC]/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-[#F7F2EC]/90 hover:bg-[#4C0F16]/60 py-2 px-3 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col space-y-2">
            <a
              href="#newsletter"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 text-sm font-bold text-[#F7F2EC] bg-[#C77B3F] hover:bg-[#B06930] w-full py-2.5 rounded-lg transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Assinar Newsletter</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
