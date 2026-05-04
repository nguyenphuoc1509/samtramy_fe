import type { Metadata } from "next";

import ProductGrid from "@/components/products/ProductGrid";
import ProductDetailGallery from "@/components/products/ProductDetailGallery";
import ProductDetailInfo from "@/components/products/ProductDetailInfo";
import ProductOrigin from "@/components/products/ProductOrigin";
import ProductReview from "@/components/products/ProductReview";
import Breadcrumb from "@/components/layout/Breadcrumb";

import {
  productDetail,
  productReviews,
  relatedProducts,
} from "@/mock/product-detail.mock";

export const metadata: Metadata = {
  title: `${productDetail.name} | Samtramy`,
  description: productDetail.shortDescription,
};

export default function ProductDetailPage() {
  return (
    <main className="w-full bg-[#f5f5f3] py-8">
      <div className="site-container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Sản phẩm", href: "/products" },
            { label: productDetail.name },
          ]}
        />

        {/* Top Product Info */}
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ProductDetailGallery
            image={productDetail.image}
            thumbnails={productDetail.thumbnails}
            name={productDetail.name}
          />

          <ProductDetailInfo
            name={productDetail.name}
            category={productDetail.category}
            price={productDetail.price}
            shortDescription={productDetail.shortDescription}
            features={productDetail.features}
          />
        </section>

        <ProductOrigin />

        <ProductReview reviews={productReviews} />

        {/* Related Products */}
        <section className="mt-14">
          <div className="mb-8 text-center">
            <h2 className="text-[30px] font-bold text-[#063f32]">
              Các sản phẩm liên quan
            </h2>

            <p className="mx-auto mt-2 max-w-[620px] text-[14px] leading-6 text-[#8a9b94]">
              Gợi ý những sản phẩm phù hợp có thể bạn cũng quan tâm.
            </p>
          </div>

          <ProductGrid products={relatedProducts} cols={4} />
        </section>
      </div>
    </main>
  );
}