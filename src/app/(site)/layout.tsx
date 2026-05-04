import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HomePageNavigation from "@/components/layout/HomePageNavigation";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StickyHeader>
        <Header />
        <HomePageNavigation />
      </StickyHeader>
      <main>{children}</main>
      <Footer />
    </>
  );
}
