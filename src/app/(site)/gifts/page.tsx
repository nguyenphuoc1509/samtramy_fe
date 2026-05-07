import type { Metadata } from "next";

import HeroCarousel from "@/components/layout/HeroCarousel";
import GiftPage from "@/components/gifts/GiftPage";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Quà Tặng Cao Cấp | Samtramy",
  description:
    "Khám phá bộ sưu tập quà tặng cao cấp từ Samtramy. Quà biếu cao cấp, quà Tết, quà sinh nhật, quà cưới hỏi ý nghĩa dành cho người thân yêu.",
  alternates: {
    canonical: "/qua-tang",
  },
  openGraph: {
    title: "Quà Tặng Cao Cấp | Samtramy",
    description:
      "Khám phá bộ sưu tập quà tặng cao cấp từ Samtramy. Quà biếu cao cấp, quà Tết, quà sinh nhật, quà cưới hỏi ý nghĩa dành cho người thân yêu.",
    url: "/qua-tang",
  },
};

export default function GiftsPage() {
  return (
    <main className="w-full bg-[#f5f5f3]">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Page content */}
      <GiftPage />
    </main>
  );
}
