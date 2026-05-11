"use client";

import { WineHero } from "@/components/wine/WineHero";
import { WinePolicyStrip } from "@/components/wine/WinePolicyStrip";
import { WineIntro } from "@/components/wine/WineIntro";
import { WineHighlights } from "@/components/wine/WineHighlights";
import { WineReasons } from "@/components/wine/WineReasons";
import { WineOccasions } from "@/components/wine/WineOccasions";
import { WineGuide } from "@/components/wine/WineGuide";
import { WineProducts } from "@/components/wine/WineProducts";
import { WineContactBanner } from "@/components/wine/WineContactBanner";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import { WinePopupProvider } from "@/components/wine/WinePopupContext";
import { WineIngredientsSection } from "@/components/wine/WineIngredientsSection";

function WineLandingContent() {
  return (
    <main className="w-full bg-[#e7eee4]">
      <StickyHeader>
        <Header />
      </StickyHeader>
      <WinePopupProvider>
        <WineHero />
        <WinePolicyStrip />
        <WineIntro />
        <WineHighlights />
        <WineReasons />
        <WineOccasions />
        <WineIngredientsSection />
        <WineGuide />
        <WineProducts />
        <WineContactBanner />
      </WinePopupProvider>
      <Footer />
    </main>
  );
}

export default WineLandingContent;
