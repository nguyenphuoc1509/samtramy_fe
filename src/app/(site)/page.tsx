import HeroCarousel from "@/components/layout/HeroCarousel";
import NgocLinhLegendSection from "@/components/home/NgocLinhLegendSection";
import BestSellingProductsSection from "@/components/products/BestSellingProductsSection";
import YoutubeSection from "@/components/home/YoutubeSection";
import BlogSection from "@/components/home/BlogSection";
import HomeNewsletterSection from "@/components/home/HomeNewsLetterSection";
import HomeWhyChooseSection from "@/components/home/HomeWhyChooseSection";
import HomeServiceMarketplaceSection from "@/components/home/HomeServiceMarketplaceSection";
import HomeExtractonProcessSection from "@/components/home/HomeExtractonProcessSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <NgocLinhLegendSection />
      <HomeExtractonProcessSection />
      <BestSellingProductsSection />
      <YoutubeSection />
      <BlogSection />
      <HomeWhyChooseSection />
      <HomeServiceMarketplaceSection />
      <HomeNewsletterSection />
    </>
  );
}
