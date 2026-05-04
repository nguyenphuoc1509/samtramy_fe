"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
  },
  {
    label: "Sản phẩm",
    href: "/san-pham",
    hasDropdown: true,
  },
  {
    label: "Quà tặng",
    href: "/qua-tang",
  },
  {
    label: "Tin tức",
    href: "/tin-tuc",
  },
  {
    label: "Liên hệ",
    href: "/lien-he",
  },
];

export default function HomePageNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden md:block w-full border-t-2 border-[#063f32] bg-white shadow-[0_4px_16px_rgba(6,63,50,0.10)]"
        role="navigation"
        aria-label="Menu chính"
      >
        <div className="mx-auto max-w-[1400px] px-6">
          <ul className="flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {/* Bottom underline on hover */}
                <div className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#f5d36b] scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />

                <Link
                  href={item.href}
                  className="
                    flex items-center gap-1 px-2 py-5
                    text-[20px] font-medium text-[#063f32]
                    transition-colors duration-200
                    hover:text-[#b88a2d]
                  "
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={13}
                      strokeWidth={2.2}
                      className="transition-transform duration-200 group-hover:translate-y-0.5"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden w-full bg-white border-t-2 border-[#063f32] shadow-[0_4px_12px_rgba(6,63,50,0.10)]">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold text-[#063f32] tracking-wide">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            className="flex h-9 w-9 items-center justify-center rounded-md text-[#063f32] transition-colors hover:bg-[#f3f3f3] active:bg-[#e8e8e8]"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="border-t border-gray-100 px-4 pb-3 pt-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex items-center gap-2 px-3 py-3
                    text-[15px] font-medium text-[#063f32]
                    border-b border-gray-50 last:border-0
                    transition-colors duration-150
                    hover:text-[#b88a2d] hover:pl-4
                  "
                >
                  {item.hasDropdown && (
                    <ChevronDown size={12} strokeWidth={2.2} className="text-[#b88a2d]" />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
