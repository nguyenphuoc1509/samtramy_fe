import ProductGrid from "./ProductGrid";
import {
  bestSellingCategories,
  bestSellingProducts,
} from "@/mock/best-selling-products.mock";

export default function BestSellingProductsSection() {
  return (
    <section className="w-full bg-[#f5f5f3] py-20">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-3 text-[15px] font-medium text-[#9ab29f]">
            Bán chạy
          </p>

          <h2
            className="
              text-[34px] font-normal leading-[1.18] tracking-wide text-[#314636]
              md:text-[42px]
            "
          >
            Các dòng sản phẩm đang được <br className="hidden md:block" />
            bán chạy tại SAMTRAMY 
          </h2>

          <div className="mt-6 inline-flex rounded-full bg-[#dce9d7] p-1">
            {bestSellingCategories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`
                  rounded-full px-6 py-2 text-[13px] font-medium transition
                  ${
                    index === 0
                      ? "bg-white text-[#087c43] shadow-sm"
                      : "text-[#314636] hover:bg-white/60"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <ProductGrid products={bestSellingProducts} />

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="
              rounded-md border border-[#087c43] px-8 py-3
              text-[16px] font-medium text-[#087c43]
              hover:bg-gray-200
              cursor-pointer
            "
          >
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  );
}