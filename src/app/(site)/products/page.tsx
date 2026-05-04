import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";

import ProductGrid from "@/components/products/ProductGrid";
import FilterProduct from "@/components/products/FilterProduct";
import Pagination from "@/components/layout/Pagination";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { bestSellingProducts } from "@/mock/best-selling-products.mock";

export const metadata: Metadata = {
  title: "Sản phẩm | Samtramy",
  description:
    "Khám phá các sản phẩm Sâm Ngọc Linh, rượu, trà và yến chính hãng từ Samtramy.",
  alternates: {
    canonical: "/san-pham",
  },
  openGraph: {
    title: "Sản phẩm | Samtramy",
    description:
      "Khám phá các sản phẩm Sâm Ngọc Linh, rượu, trà và yến chính hãng từ Samtramy.",
    url: "/san-pham",
  },
};

export default function ProductsPage() {
  return (
    <main className="w-full bg-[#f5f5f3] py-8">
      <div className="site-container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Sản phẩm" },
          ]}
        />

        {/* Title */}
        <h1 className="text-[32px] font-bold leading-tight text-[#063f32]">
          Sản phẩm
        </h1>

        {/* Layout */}
        <div className="grid gap-x-6 gap-y-5 lg:grid-cols-[260px_1fr]">
          <div className="hidden lg:block" />

          {/* Top bar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-[#8a9b94]">
              Hiển thị 10 trên 30 sản phẩm
            </p>

            <button
              type="button"
              className="
                inline-flex items-center gap-1 text-[13px] text-[#8a9b94]
                transition hover:text-[#063f32]
              "
            >
              <span>Sắp xếp:</span>
              <strong className="font-semibold text-[#063f32]">
                Bán chạy nhất
              </strong>
              <ChevronDown size={15} />
            </button>
          </div>

          {/* Sidebar Filter */}
          <aside className="hidden lg:block">
            <FilterProduct />
          </aside>

          {/* Product Content */}
          <section>
            <ProductGrid products={bestSellingProducts} cols={3} />

            <Pagination currentPage={1} totalPages={10} />
          </section>
        </div>
      </div>
    </main>
  );
}