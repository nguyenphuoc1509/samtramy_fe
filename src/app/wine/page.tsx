import type { Metadata } from "next";
import { WineHero } from "@/components/wine/WineHero";
import { WineConsultPopup } from "@/components/wine/WineConsultPopup";
import { WinePolicyStrip } from "@/components/wine/WinePolicyStrip";
import { WineIntro } from "@/components/wine/WineIntro";
import { WineHighlights } from "@/components/wine/WineHighlights";
import { WineReasons } from "@/components/wine/WineReasons";
import { WineOccasions } from "@/components/wine/WineOccasions";
import { WineGuide } from "@/components/wine/WineGuide";
import { WineProducts } from "@/components/wine/WineProducts";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import { WineContactBanner } from "@/components/wine/WineContactBanner";

export const metadata: Metadata = {
  title: "Rượu Sâm Ngọc Linh | Samtramy",
  description:
    "Rượu Sâm Ngọc Linh Samtramy - dòng rượu cao cấp phù hợp làm quà biếu, tiếp khách, gặp gỡ đối tác và trưng bày trong những dịp quan trọng.",
  alternates: {
    canonical: "/ruou-sam-ngoc-linh",
  },
  openGraph: {
    title: "Rượu Sâm Ngọc Linh | Samtramy",
    description:
      "Tinh hoa Trà My trong từng giọt rượu quý. Tư vấn combo quà biếu và chính sách mua số lượng.",
    url: "/ruou-sam-ngoc-linh",
  },
};

export default function GinsengWineLandingPage() {
  return (
    <main className="w-full bg-[#e7eee4]">
      <StickyHeader>
        <Header />
      </StickyHeader>
      <WineHero />
      <WineConsultPopup />
      <WinePolicyStrip />
      <WineIntro />
      <WineHighlights />
      <WineReasons />
      <WineOccasions />
      <WineGuide />
      <WineProducts />
      <WineContactBanner />
      <Footer />
    </main>
  );
}
