"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { WineConsultButton } from "./WineConsultButton";
import {
  AnimateOnScroll,
  StaggerContainer,
  staggerItemVariants,
} from "./AnimateOnScroll";

const ingredients = [
  "Sâm Ngọc Linh chứa nhiều saponin quý, tạo nên giá trị đặc trưng của sản phẩm.",
  "Các acid amin tự nhiên góp phần tạo nên nền tảng dinh dưỡng đặc trưng của sâm.",
  "Một số khoáng chất và vi lượng có trong sâm giúp làm phong phú giá trị nguyên liệu.",
  "Các hợp chất chống oxy hóa tự nhiên góp phần tạo nên điểm khác biệt của Sâm Ngọc Linh.",
  "Hương vị sâm đặc trưng, hậu vị sâu, phù hợp ứng dụng trong dòng rượu quà biếu.",
  "Nguồn nguyên liệu được tuyển chọn kỹ nhằm giữ lại giá trị tự nhiên trong sản phẩm.",
];

const ingredientImages = [
  {
    src: "/images/ngoc-linh/sam-ngoc-linh-1.jpg",
    alt: "Sâm Ngọc Linh tuyển chọn",
    caption: "Nguồn nguyên liệu chọn lọc",
  },
  {
    src: "/images/products/product-1.png",
    alt: "Rượu Sâm Ngọc Linh Samtramy",
    caption: "Ứng dụng trong sản phẩm rượu sâm",
  },
  {
    src: "/images/ngoc-linh/sam-ngoc-linh-forest.jpg",
    alt: "Vùng nguyên liệu Sâm Ngọc Linh",
    caption: "Giữ trọn giá trị tự nhiên",
  },
];

export function WineIngredientsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f1e6] py-20 md:py-24">
      {/* Soft background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,211,107,0.16),transparent_34%)]" />
      <div className="absolute right-0 top-0 h-[260px] w-[520px] bg-[#063f32]/5 blur-[90px]" />
      <div className="absolute left-0 bottom-0 h-[280px] w-[420px] bg-[#063f32]/8 blur-[90px]" />

      <div className="site-container relative z-10">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <AnimateOnScroll animation="fadeUp" distance={24}>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#063f32]">
              Thành phần nổi bật
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.1} distance={24}>
            <h2 className="text-[34px] font-bold uppercase leading-tight tracking-[0.02em] text-[#063f32] md:text-[46px]">
              Thành phần dược chất
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.16} distance={24}>
            <p className="mt-2 text-[18px] font-semibold uppercase tracking-[0.08em] text-[#063f32]">
              Trong Sâm Ngọc Linh
            </p>
          </AnimateOnScroll>

          <div className="mx-auto mt-4 h-px w-[220px] bg-gradient-to-r from-transparent via-[#d8a64a] to-transparent" />
        </div>

        {/* Ingredient cards */}
        <StaggerContainer
          className="mx-auto grid max-w-[1080px] gap-4 md:grid-cols-2"
          staggerDelay={0.08}
          delayChildren={0.15}
        >
          {ingredients.map((item) => (
            <motion.article
              key={item}
              variants={staggerItemVariants}
              className="
                group relative flex min-h-[118px] items-start gap-5
                overflow-hidden rounded-[24px] bg-[#063f32] p-5
                shadow-[0_14px_34px_rgba(143,35,35,0.16)]
                transition duration-200
                hover:-translate-y-1 hover:bg-[#063f32]
                hover:shadow-[0_20px_44px_rgba(143,35,35,0.22)]
              "
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.13),transparent_34%)]" />
              <div className="absolute -right-20 -top-20 h-[160px] w-[160px] rounded-full bg-white/5 blur-[30px]" />

              <div
                className="
                  relative flex h-13 w-13 shrink-0 items-center justify-center
                  rounded-full bg-[#fff0bd] text-[#9b2b2b]
                  shadow-[0_8px_18px_rgba(0,0,0,0.14)]
                  ring-4 ring-white/10
                "
              >
                <Check size={28} strokeWidth={3} />
              </div>

              <p className="relative text-[15px] font-semibold leading-7 text-white md:text-[16px]">
                {item}
              </p>
            </motion.article>
          ))}
        </StaggerContainer>

        {/* Image row */}
        <div className="mx-auto mt-12 grid max-w-[1080px] gap-5 md:grid-cols-3">
          {ingredientImages.map((item) => (
            <AnimateOnScroll key={item.src} animation="fadeUp" distance={24}>
              <figure className="flex flex-col">
                <div
                  className="
                    relative h-[260px] overflow-hidden rounded-[24px]
                    bg-[#f7f3ea] shadow-[0_16px_36px_rgba(6,63,50,0.08)]
                    ring-1 ring-[#eadfcd]
                  "
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                </div>

                <figcaption className="mt-3 px-1">
                  <p className="text-[16px] font-bold leading-5 text-[#063f32] text-center">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll
          animation="fadeUp"
          delay={0.2}
          distance={22}
          className="mt-10 flex justify-center"
        >
          <WineConsultButton
            className="
              h-12 cursor-pointer rounded-full
              bg-[#087c43]
              px-10 text-[14px] font-bold uppercase text-white
              shadow-[0_14px_28px_rgba(229,35,95,0.26)]
              transition duration-200 hover:-translate-y-0.5
            "
          >
            Tư vấn ngay
          </WineConsultButton>
        </AnimateOnScroll>
      </div>
    </section>
  );
}