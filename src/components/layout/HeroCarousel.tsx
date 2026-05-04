"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const heroSlides = [
  {
    id: 1,
    title: "Báu vật thượng ngàn",
    subtitle: "Sản phẩm cao cấp từ nhân sâm",
    href: "/san-pham",
    image: "/images/banners/hero-2.jpg",
    alt: "Báu vật thượng ngàn Samtramy",
  },
  {
    id: 2,
    title: "SAMY",
    subtitle: "CHILL NHẸ - VIBES CHẤT",
    href: "/qua-tang",
    image: "/images/banners/hero-2.jpg",
    alt: "Quà tặng sức khỏe Samtramy",
  },
  {
    id: 3,
    title: "Sản phẩm từ sâm",
    subtitle: "100% tự nhiên, an toàn tuyệt đối",
    href: "/san-pham",
    image: "/images/banners/hero-2.jpg",
    alt: "Sản phẩm từ sâm Samtramy",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [contentKey, setContentKey] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const lastTickRef = useRef<number>(0);

  const SLIDE_DURATION = 3000;
  const totalSlides = heroSlides.length;

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    setContentKey((k) => k + 1);
    startTimeRef.current = performance.now();
    lastTickRef.current = 0;
  }, []);

  const goToPrevious = () => goTo(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  const goToNext = () => goTo(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);

  useEffect(() => {
    startTimeRef.current = performance.now();
    lastTickRef.current = 0;

    const tick = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        goToNext();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [currentIndex, goToNext]);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#0a2a22]">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-[480px] w-full shrink-0 overflow-hidden sm:h-[540px] md:h-[620px] lg:h-[700px]"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={slide.id === 1}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 md:px-14">
          <div key={contentKey} className="animate-carousel-in max-w-xl space-y-3">
            <span className="inline-block rounded-full border border-[#f5d36b]/60 bg-[#f5d36b]/15 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#f5d36b] backdrop-blur-sm">
              Samtramy
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              {currentSlide.title}
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              {currentSlide.subtitle}
            </p>
            <Link
              href={currentSlide.href}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#f5d36b] px-8 py-3.5 text-sm font-semibold text-[#0a2a22] shadow-lg transition-all hover:bg-[#e8c85a] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Khám phá ngay
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Slide trước"
        className="
          absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2
          items-center justify-center rounded-full border border-white/30
          bg-white/10 text-white backdrop-blur-md transition-all
          hover:bg-white/25 hover:border-white/50
          sm:left-6 lg:left-10
        "
      >
        <ChevronLeft size={22} strokeWidth={2.2} />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Slide tiếp theo"
        className="
          absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2
          items-center justify-center rounded-full border border-white/30
          bg-white/10 text-white backdrop-blur-md transition-all
          hover:bg-white/25 hover:border-white/50
          sm:right-6 lg:right-10
        "
      >
        <ChevronRight size={22} strokeWidth={2.2} />
      </button>

      {/* Bottom: dots + progress bar strip */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-5">
        {/* Dots */}
        <div className="mb-4 flex items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Chuyển đến slide ${index + 1}`}
              className={`
                rounded-full transition-all duration-400
                ${
                  currentIndex === index
                    ? "w-7 h-2.5 bg-[#f5d36b] shadow-[0_0_8px_rgba(245,211,107,0.5)]"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
