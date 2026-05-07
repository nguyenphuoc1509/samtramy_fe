import Image from "next/image";
import Link from "next/link";
import {
  Gift,
  Truck,
  ShieldCheck,
  CreditCard,
  Heart,
  RefreshCcw,
  ArrowRight,
  Star,
  Sparkles,
  Package,
} from "lucide-react";
import {
  giftCategories,
  giftProducts,
  giftBenefits,
  giftOccasions,
} from "@/mock/gift.mock";

function BenefitIcon({ icon }: { icon: string }) {
  const props = { size: 28, strokeWidth: 1.8 };
  switch (icon) {
    case "gift":
      return <Gift {...props} />;
    case "truck":
      return <Truck {...props} />;
    case "shield":
      return <ShieldCheck {...props} />;
    case "card":
      return <CreditCard {...props} />;
    case "heart":
      return <Heart {...props} />;
    case "refresh":
      return <RefreshCcw {...props} />;
    default:
      return <Gift {...props} />;
  }
}

export default function GiftPage() {
  return (
    <div className="w-full">
      {/* ========== CATEGORIES SECTION ========== */}
      <section
        id="gift-categories"
        className="w-full bg-white py-16 md:py-20"
      >
        <div className="site-container">
          {/* Section header */}
          <div className="mb-10 text-center">
            <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.25em] text-[#087c43]">
              Danh mục quà tặng
            </p>
            <h2 className="text-[28px] font-bold leading-tight text-[#063f32] md:text-[38px]">
              Khám phá bộ sưu tập quà tặng
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[15px] text-[#6f827b]">
              Những lựa chọn quà tặng hoàn hảo cho mọi dịp đặc biệt
            </p>
          </div>

          {/* Category grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {giftCategories.map((category) => (
              <Link
                key={category.id}
                href={`/san-pham?category=${category.slug}`}
                className="
                  group flex flex-col overflow-hidden
                  rounded-xl bg-white
                  shadow-[0_3px_10px_rgba(0,0,0,0.08)]
                  transition duration-300
                  hover:shadow-[0_12px_28px_rgba(6,63,50,0.15)]
                "
              >
                {/* Image */}
                <div className="relative h-[160px] overflow-hidden bg-white p-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 300px"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col border-t border-[#e8e8e8] p-4">
                  <h3 className="text-[16px] font-bold text-[#063f32]">
                    {category.name}
                  </h3>
                  <p className="mt-1 flex-1 text-[13px] leading-5 text-[#6f827b]">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[12px] text-[#8a9b94]">
                      {category.count} sản phẩm
                    </span>
                    <span className="flex items-center gap-1 text-[12px] font-semibold text-[#087c43]">
                      Xem thêm
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRODUCT COLLECTION SECTION ========== */}
      <section
        id="product-collections"
        className="w-full bg-[#f5f5f3] py-16 md:py-20"
      >
        <div className="site-container">
          {/* Section header */}
          <div className="mb-10 flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.25em] text-[#087c43]">
                Bộ sưu tập quà tặng
              </p>
              <h2 className="text-[28px] font-bold leading-tight text-[#063f32] md:text-[38px]">
                Sản phẩm quà biếu nổi bật
              </h2>
              <p className="mt-2 max-w-[480px] text-[15px] text-[#6f827b]">
                Những món quà đặc biệt được lựa chọn kỹ lưỡng cho người thân
                yêu
              </p>
            </div>

            <Link
              href="/san-pham"
              className="
                mt-4 flex items-center gap-2 text-[14px] font-semibold
                text-[#087c43] transition-colors hover:text-[#0a6f3d] sm:mt-0
              "
            >
              Xem tất cả sản phẩm
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Product grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {giftProducts.map((product) => (
              <Link
                key={product.id}
                href={`/san-pham/${product.slug}`}
                className="
                  group relative flex flex-col overflow-hidden
                  rounded-xl bg-white p-2
                  shadow-[0_3px_8px_rgba(0,0,0,0.22)]
                  transition duration-300 ease-out
                  hover:shadow-[0_18px_35px_rgba(6,63,50,0.18)]
                "
              >
                {/* Product image */}
                <div className="relative h-[220px] overflow-hidden rounded-lg bg-[#f7f7f7]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 260px"
                  />

                  {/* Badges */}
                  <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                    {product.isNew && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#087c43] px-2.5 py-1 text-[10px] font-semibold text-white">
                        <Sparkles size={10} strokeWidth={2.5} />
                        Mới
                      </span>
                    )}
                    {product.isHot && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#c0392b] px-2.5 py-1 text-[10px] font-semibold text-white">
                        <Star size={10} strokeWidth={2.5} fill="currentColor" />
                        Bán chạy
                      </span>
                    )}
                    {product.oldPrice && (
                      <span className="rounded-full bg-[#f5d36b] px-2.5 py-1 text-[10px] font-bold text-[#0a2a22]">
                        -
                        {Math.round(
                          ((parseInt(product.oldPrice.replace(/\D/g, "")) -
                            parseInt(product.price.replace(/\D/g, ""))) /
                            parseInt(product.oldPrice.replace(/\D/g, ""))) *
                            100
                        )}
                        %
                      </span>
                    )}
                  </div>

                  {/* Gift tag */}
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5d36b]/20 backdrop-blur-sm">
                    <Gift size={14} className="text-[#f5d36b]" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 pb-4 pt-3 text-center">
                  <p className="mb-1.5 text-[10px] font-medium text-[#087c43]">
                    {product.category}
                  </p>

                  <h3 className="line-clamp-2 text-[15px] font-semibold leading-5 text-[#073f35]">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-[14px] font-bold text-red-500">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-[11px] text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE GIFTS SECTION ========== */}
      <section className="w-full bg-[#063f32] py-16 md:py-20">
        <div className="site-container">
          {/* Section header */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.25em] text-[#f5d36b]">
              Vì sao chọn quà tặng Samtramy
            </p>
            <h2 className="text-[28px] font-bold leading-tight text-white md:text-[38px]">
              Cam kết dành cho món quà của bạn
            </h2>
          </div>

          {/* Benefits grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {giftBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="
                  group flex items-start gap-4 rounded-2xl
                  bg-white/8 p-6 backdrop-blur-sm
                  transition-all duration-300
                  hover:bg-white/14
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex h-14 w-14 shrink-0 items-center justify-center
                    rounded-xl bg-[#f5d36b]/15 text-[#f5d36b]
                    transition-all duration-300
                    group-hover:scale-110 group-hover:bg-[#f5d36b]/25
                  "
                >
                  <BenefitIcon icon={benefit.icon} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-1.5 text-[16px] font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-[13px] leading-5 text-white/70">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GIFTS BY OCCASION SECTION ========== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="site-container">
          {/* Section header */}
          <div className="mb-10 text-center">
            <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.25em] text-[#087c43]">
              Theo dịp đặc biệt
            </p>
            <h2 className="text-[28px] font-bold leading-tight text-[#063f32] md:text-[38px]">
              Quà tặng cho mọi dịp
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[15px] text-[#6f827b]">
              Tìm món quà hoàn hảo cho từng dịp quan trọng trong năm
            </p>
          </div>

          {/* Occasion grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {giftOccasions.map((occasion) => (
              <Link
                key={occasion.id}
                href={`/san-pham?occasion=${occasion.slug}`}
                className="
                  group relative flex items-center gap-4
                  overflow-hidden rounded-2xl bg-[#f5f5f3] p-4
                  transition-all duration-300
                  hover:bg-[#eef4f7] hover:shadow-[0_12px_30px_rgba(6,63,50,0.12)]
                  hover:-translate-y-0.5
                "
              >
                {/* Image */}
                <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-xl bg-white">
                  <Image
                    src={occasion.image}
                    alt={occasion.name}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                    sizes="70px"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#063f32]">
                      {occasion.name}
                    </h3>
                    <p className="mt-0.5 text-[12px] text-[#8a9b94]">
                      {occasion.productCount} sản phẩm
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="
                      text-[#8a9b94] transition-all duration-200
                      group-hover:translate-x-1 group-hover:text-[#087c43]
                    "
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="w-full bg-[#f5f5f3] py-16 md:py-20">
        <div className="site-container">
          <div
            className="
              relative overflow-hidden rounded-3xl
              bg-gradient-to-br from-[#063f32] to-[#0a5c3a]
              px-8 py-14 text-center
              md:px-14 md:py-20
            "
          >
            {/* Decorative circles */}
            <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -right-16 h-[250px] w-[250px] rounded-full bg-[#f5d36b]/10" />
            <div className="absolute right-20 top-10 h-4 w-4 rounded-full bg-[#f5d36b]/30" />
            <div className="absolute bottom-8 left-1/3 h-3 w-3 rounded-full bg-[#f5d36b]/20" />

            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#f5d36b]/15">
                <Gift size={26} className="text-[#f5d36b]" />
              </div>

              <h2 className="text-[26px] font-bold leading-tight text-white md:text-[38px]">
                Cần tư vấn chọn quà tặng?
              </h2>

              <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-white/80">
                Đội ngũ tư vấn của Samtramy sẵn sàng hỗ trợ bạn lựa chọn món
                quà phù hợp nhất cho người thân và đối tác.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/lien-he"
                  className="
                    inline-flex items-center gap-2.5 rounded-full
                    bg-[#f5d36b] px-8 py-3.5
                    text-sm font-semibold text-[#063f32]
                    shadow-lg transition-all
                    hover:bg-[#e8c85a] hover:shadow-xl hover:-translate-y-0.5
                  "
                >
                  Liên hệ tư vấn
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>

                <Link
                  href="/san-pham"
                  className="
                    inline-flex items-center gap-2.5 rounded-full
                    border border-white/30 bg-white/10 px-8 py-3.5
                    text-sm font-semibold text-white backdrop-blur-md
                    transition-all hover:bg-white/20
                  "
                >
                  Xem sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
