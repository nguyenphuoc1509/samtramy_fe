"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WineConsultButton } from "./WineConsultButton";
import { AnimateOnScroll, StaggerContainer, staggerItemVariants } from "./AnimateOnScroll";

const introChecklist = [
  "Nguồn gốc rõ ràng",
  "Thiết kế sang trọng",
  "Phù hợp quà biếu",
  "Dễ trưng bày tại cửa hàng",
];

export function WineIntro() {
  return (
    <section className="py-20 md:py-24">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Image */}
          <AnimateOnScroll animation="fadeRight" distance={32}>
            <div
              className="
                overflow-hidden rounded-[32px] bg-white
                shadow-[0_18px_45px_rgba(6,63,50,0.08)]
                ring-1 ring-[#e3ebe6]
              "
            >
              <div className="relative h-[440px] bg-[#f8faf8] md:h-[560px]">
                <Image
                  src="/images/products/product-1.png"
                  alt="Rượu Sâm Ngọc Linh quà biếu"
                  fill
                  className="object-contain p-8"
                  sizes="620px"
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <div>
            <AnimateOnScroll animation="fadeUp" delay={0.1}>
              <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
                Giới thiệu sản phẩm
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={0.18}>
              <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[48px]">
                Một lựa chọn quà biếu chỉn chu từ Sâm Ngọc Linh
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={0.26}>
              <p className="mt-5 text-[16px] leading-8 text-[#6f827b]">
                Rượu Sâm Ngọc Linh Samtramy là sự kết hợp giữa nguồn nguyên
                liệu quý từ vùng Trà My và quy trình sản xuất chỉn chu, tạo nên
                dòng rượu có hình thức sang trọng, hương vị đặc trưng và giá trị
                biếu tặng cao.
              </p>
            </AnimateOnScroll>

            <StaggerContainer
              className="mt-8 grid gap-4 sm:grid-cols-2"
              staggerDelay={0.1}
              delayChildren={0.05}
            >
              {introChecklist.map((item) => (
                <motion.div
                  key={item}
                  variants={staggerItemVariants}
                  className="
                    flex items-center gap-3 rounded-2xl bg-white p-4
                    shadow-[0_10px_26px_rgba(6,63,50,0.06)]
                    ring-1 ring-[#e3ebe6]
                  "
                >
                  <CheckCircle2 size={19} className="shrink-0 text-[#087c43]" />
                  <p className="text-[14px] font-semibold text-[#063f32]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </StaggerContainer>

            <AnimateOnScroll animation="fadeUp" delay={0.15} className="mt-8">
              <WineConsultButton>Liên hệ tư vấn</WineConsultButton>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
