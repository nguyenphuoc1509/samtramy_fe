"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { wineProducts } from "./wine-data";
import {
  AnimateOnScroll,
  StaggerContainer,
  staggerItemVariants,
} from "./AnimateOnScroll";

interface ProductCardProps {
  slug: string;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
}

function ProductCard({ slug, name, image, price, oldPrice }: ProductCardProps) {
  return (
    <motion.article
      variants={staggerItemVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
      className="
        group flex min-h-[420px] flex-col overflow-hidden
        rounded-3xl bg-[#f8faf8] ring-1 ring-[#e3ebe6]
        transition-colors duration-200 hover:bg-white
        hover:shadow-[0_16px_34px_rgba(6,63,50,0.08)]
      "
    >
      <Link href={`/san-pham/${slug}`} className="block">
        <div className="relative h-[280px] overflow-hidden bg-white">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-7 transition-transform duration-300 group-hover:scale-105"
            sizes="420px"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-[22px] font-bold leading-snug text-[#063f32]">
            {name}
          </h3>

          <div className="mt-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#087c43]">
                Giá bán
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-[22px] font-bold text-red-500">
                  {price}
                </span>

                {oldPrice && (
                  <span className="text-[13px] text-[#9aa9a4] line-through">
                    {oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="mt-auto px-6 pb-6">
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="secondary"
            className="
              h-11 cursor-pointer rounded-full bg-[#eef6f1]
              text-[13px] font-bold text-[#087c43]
              transition-colors duration-200 hover:bg-[#e3f1e9]
            "
          >
            <ShoppingCart size={16} />
            Thêm giỏ
          </Button>

          <Link href={`/san-pham/${slug}`}>
            <Button
              type="button"
              className="
                h-11 w-full cursor-pointer rounded-full bg-[#087c43]
                text-[13px] font-bold text-white
                transition-colors duration-200 hover:bg-[#0a6f3d]
              "
            >
              Mua ngay
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function WineProducts() {
  return (
    <section id="wine-products" className="bg-[#f5f5f3] py-20 md:py-24">
      <div className="site-container">
        <AnimateOnScroll className="mx-auto max-w-[820px] text-center" animation="fadeUp">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
            Bộ sản phẩm
          </p>

          <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
            Lựa chọn phù hợp cho từng nhu cầu quà biếu
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-8 text-[#6f827b]">
            Samtramy mang đến các dòng rượu Sâm Ngọc Linh phù hợp cho nhu cầu
            mua lẻ, quà biếu, tiếp khách hoặc đặt số lượng cho doanh nghiệp.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="mt-12 grid gap-5 lg:grid-cols-3"
          staggerDelay={0.11}
          delayChildren={0.12}
        >
          {wineProducts.map((item) => (
            <ProductCard
              key={item.slug}
              slug={item.slug}
              name={item.name}
              image={item.image}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
