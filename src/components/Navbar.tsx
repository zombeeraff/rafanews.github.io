"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/about", label: t.nav.about },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/blog", label: t.nav.blog },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Image
            src="/umbrella-logo.svg"
            alt="Umbrella logo"
            width={44}
            height={44}
          />
          Rafa
        </Link>

        <div className="flex items-center gap-4">
          {/* Hamburger / dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="font-medium">{open ? "Close" : "Menu"}</span>
              <div className="flex flex-col justify-center items-center gap-1.5 w-5">
                <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>

            {open && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg py-1 overflow-hidden">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === link.href
                          ? "text-gray-900 font-medium bg-gray-50"
                          : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
