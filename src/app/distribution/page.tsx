import type { Metadata } from "next";

import {
  HeroSection,
  SupplierValuesSection,
  CtaStripSection,
  PartnerBenefitsSection,
  BusinessScenariosSection,
  ProductCategoriesSection,
  PartnerFitSection,
  PolicySection,
  TradeSupportSection,
  CooperationProcessSection,
  RegistrationFormSection,
} from "@/components/distribution";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyHeader from "@/components/layout/StickyHeader";

export const metadata: Metadata = {
  title: "Hợp tác phân phối sản phẩm Samtramy",
  description:
    "Trở thành đối tác phân phối sản phẩm tiêu dùng từ Sâm Ngọc Linh cùng Samtramy. Chính sách linh hoạt, danh mục dễ bán, hỗ trợ bán hàng tại điểm bán.",
  alternates: {
    canonical: "/hop-tac-phan-phoi",
  },
  openGraph: {
    title: "Hợp tác phân phối sản phẩm Samtramy",
    description:
      "Giải pháp nguồn hàng từ Sâm Ngọc Linh dành cho đại lý, cửa hàng, nhà phân phối và đối tác kinh doanh số lượng lớn.",
    url: "/hop-tac-phan-phoi",
  },
};

export default function ConsumerGoodsDistributionPage() {
  return (
    <main className="w-full bg-[#f5f5f3]">
      <StickyHeader>
        <Header />
      </StickyHeader>
      <HeroSection />
      <SupplierValuesSection />
      <CtaStripSection />
      <PartnerBenefitsSection />
      <BusinessScenariosSection />
      <ProductCategoriesSection />
      <PartnerFitSection />
      <PolicySection />
      <TradeSupportSection />
      <CooperationProcessSection />
      <Footer />
    </main>
  );
}
