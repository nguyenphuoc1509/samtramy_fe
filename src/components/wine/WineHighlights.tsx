"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { wineHighlights } from "./wine-data";
import { AnimateOnScroll, StaggerContainer, staggerItemVariants } from "./AnimateOnScroll";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function HighlightCard({ icon: Icon, title, description }: HighlightCardProps) {
  return (
    <motion.article
      variants={staggerItemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        flex min-h-[260px] flex-col rounded-3xl bg-[#f8faf8] p-6
        ring-1 ring-[#e3ebe6]
        transition-colors duration-200 hover:bg-white
        hover:shadow-[0_16px_34px_rgba(6,63,50,0.08)]
      "
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef6f1] text-[#087c43]">
        <Icon size={22} strokeWidth={2.1} />
      </div>

      <h3 className="min-h-[48px] text-[18px] font-bold leading-snug text-[#063f32]">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-[14px] leading-7 text-[#6f827b]">
        {description}
      </p>
    </motion.article>
  );
}

export function WineHighlights() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="site-container">
        <AnimateOnScroll className="mx-auto max-w-[820px] text-center" animation="fadeUp">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
            Điểm nổi bật
          </p>

          <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
            Vì sao rượu sâm Samtramy phù hợp làm quà biếu?
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-8 text-[#6f827b]">
            Không chỉ là một sản phẩm rượu, đây còn là món quà mang câu chuyện
            bản địa, sự sang trọng và sự trân trọng dành cho người nhận.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.09}
          delayChildren={0.1}
        >
          {wineHighlights.map((item) => (
            <HighlightCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
