"use client";

import { useEffect, useRef, useState } from "react";

interface StickyHeaderProps {
  children: React.ReactNode;
  threshold?: number;
}

export default function StickyHeader({
  children,
  threshold = 100,
}: StickyHeaderProps) {
  const [visible, setVisible] = useState(true);
  const [translateY, setTranslateY] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= threshold) {
        setVisible(true);
        setTranslateY(0);
        lastScrollY.current = currentScrollY;
        return;
      }

      const delta = currentScrollY - lastScrollY.current;

      if (delta > 0 && visible) {
        setVisible(false);
        setTranslateY(-100);
      } else if (delta < 0 && !visible) {
        setVisible(true);
        setTranslateY(0);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, threshold]);

  return (
    <div
      className="sticky top-0 z-50 transition-transform duration-300 ease-in-out will-change-transform"
      style={{ transform: `translateY(${translateY}%)` }}
    >
      {children}
    </div>
  );
}
