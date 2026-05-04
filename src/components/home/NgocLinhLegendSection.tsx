"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ngocLinhLegendData } from "@/mock/ngoc-linh-legend.mock";

const FRAME_CSS = `
@keyframes frameA {
  0%   { transform: translate(-80px, -80px) rotate(0deg); opacity: 0; }
  15%  { opacity: 0.7; }
  85%  { opacity: 0.7; }
  100% { transform: translate(80px, 80px) rotate(0deg); opacity: 0; }
}
@keyframes frameB {
  0%   { transform: translate(80px, 80px) rotate(0deg); opacity: 0; }
  15%  { opacity: 0.7; }
  85%  { opacity: 0.7; }
  100% { transform: translate(-80px, -80px) rotate(0deg); opacity: 0; }
}
`;

function ImageCard({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl ${className ?? ""}`}
    >
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ borderRadius: "inherit" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  );
}

function SectionButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="group/btn inline-flex items-center gap-3 text-sm font-semibold text-[#087c43] transition-all duration-300 hover:gap-5"
    >
      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#087c43] after:transition-all after:duration-300 group-hover/btn:after:w-full">
        {text}
      </span>
      <ArrowRight
        size={18}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover/btn:translate-x-1"
      />
    </button>
  );
}

function TextBlock({
  label,
  title,
  description,
  buttonText,
}: {
  label: string;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.4em] text-[#087c43]">
        {label}
      </p>

      <h2 className="mb-6 text-[30px] font-bold leading-[1.2] text-[#063f32] md:text-[38px]">
        {title}
      </h2>

      <p className="mb-8 text-[15px] leading-[1.85] text-[#5f746d]">
        {description}
      </p>

      <SectionButton text={buttonText} />
    </div>
  );
}

export default function NgocLinhLegendSection() {
  const { topSection, bottomSection } = ngocLinhLegendData;
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (styleRef.current) return;
    const tag = document.createElement("style");
    tag.textContent = FRAME_CSS;
    document.head.appendChild(tag);
    styleRef.current = tag;
    return () => {
      tag.remove();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f3] py-12">
      {/* Animated diagonal frames */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {/* Frame A: top-left → bottom-right */}
        <div
          className="absolute left-0 top-0 h-32 w-32 rounded-2xl border-2 border-white/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] backdrop-blur-[2px]"
          style={{
            animation: "frameA 8s ease-in-out infinite",
          }}
        />
        {/* Frame B: bottom-right → top-left */}
        <div
          className="absolute bottom-0 right-0 h-32 w-32 rounded-2xl border-2 border-white/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] backdrop-blur-[2px]"
          style={{
            animation: "frameB 8s ease-in-out infinite",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
          {/* Left — Overlapping Images */}
          <div className="relative min-h-[380px]">
            {/* Backdrop blobs */}
            <div className="absolute left-0 top-6 h-[280px] w-[270px] rounded-2xl bg-[#c7e5d1]" />
            <div className="absolute right-[6%] top-[165px] h-[220px] w-[200px] rounded-2xl bg-[#d4e8d8]" />

            {/* Main image */}
            <ImageCard
              src={topSection.image}
              alt={topSection.imageAlt}
              className="
                relative z-10 mt-16 h-[300px] w-full max-w-[500px]
                shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)]
                transition-shadow duration-500 hover:shadow-[0_32px_60px_-12px_rgba(0,0,0,0.25)]
              "
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

          {/* Right — Text */}
          <div className="relative z-20 max-w-[500px]">
            <TextBlock
              label={topSection.label}
              title={topSection.title}
              description={topSection.description}
              buttonText={topSection.buttonText}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 flex items-center gap-6">
          <div className="h-px flex-1 bg-[#d8ded9]" />
          <div className="h-2 w-2 rotate-45 bg-[#087c43] opacity-40" />
          <div className="h-px flex-1 bg-[#d8ded9]" />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 items-end gap-16 lg:grid-cols-[1.05fr_1fr]">
          {/* Left — Text */}
          <div className="relative z-20 max-w-[500px] pb-4">
            <TextBlock
              label={bottomSection.label}
              title={bottomSection.title}
              description={bottomSection.description}
              buttonText={bottomSection.buttonText}
            />

            {/* Decorative bottom rule */}
            <div className="mt-14 h-px w-full bg-[#d8ded9]" />
          </div>

          {/* Right — Layered Images */}
          <div className="relative min-h-[440px]">
            {/* Backdrop blob */}
            <div className="absolute bottom-0 right-0 h-[270px] w-[230px] rounded-2xl bg-[#c7e5d1]" />

            {/* Small top image */}
            <ImageCard
              src={bottomSection.images[0].src}
              alt={bottomSection.images[0].alt}
              className="
                absolute left-[4%] top-0 z-20 h-[180px] w-[180px]
                shadow-[0_16px_32px_-8px_rgba(0,0,0,0.15)]
                transition-shadow duration-500 hover:shadow-[0_24px_40px_-8px_rgba(0,0,0,0.22)]
              "
              sizes="180px"
            />

            {/* Small bottom image */}
            <ImageCard
              src={bottomSection.images[1].src}
              alt={bottomSection.images[1].alt}
              className="
                absolute left-[4%] top-[190px] z-20 h-[200px] w-[180px]
                shadow-[0_18px_36px_-8px_rgba(0,0,0,0.18)]
                transition-shadow duration-500 hover:shadow-[0_26px_44px_-8px_rgba(0,0,0,0.25)]
              "
              sizes="180px"
            />

            {/* Large image */}
            <ImageCard
              src={bottomSection.images[2].src}
              alt={bottomSection.images[2].alt}
              className="
                absolute right-0 top-[90px] z-20 h-[300px] w-[360px]
                shadow-[0_20px 40px_-10px_rgba(0,0,0,0.2)]
                transition-shadow duration-500 hover:shadow-[0_28px_52px_-10px_rgba(0,0,0,0.28)]
              "
              sizes="360px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
