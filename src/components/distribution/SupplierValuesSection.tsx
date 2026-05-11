"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { supplierValues } from "./data";
import {
  AnimateOnScroll,
  StaggerContainer,
  staggerItemVariants,
} from "./AnimateOnScroll";

interface SupplierValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function SupplierValueCard({ icon: Icon, title, description }: SupplierValueCardProps) {
  return (
    <motion.article
      variants={staggerItemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        group flex min-h-[260px] flex-col rounded-3xl bg-white p-6
        shadow-[0_12px_32px_rgba(6,63,50,0.06)]
        ring-1 ring-[#e3ebe6]
        transition-colors duration-200 hover:bg-[#fbfdfb]
        hover:shadow-[0_16px_34px_rgba(6,63,50,0.1)]
      "
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef6f1] text-[#087c43] transition-colors duration-200 group-hover:bg-[#087c43] group-hover:text-white">
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

export function SupplierValuesSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-[760px] text-center">
          <AnimateOnScroll animation="fadeUp" distance={28}>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
              Giá trị nhà cung cấp
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.08} distance={28}>
            <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[48px]">
              Vì sao đối tác nên chọn Samtramy làm nhà cung cấp?
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.14} distance={28}>
            <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-[#6f827b]">
              Chúng tôi tập trung vào danh mục dễ bán, thông tin minh bạch,
              hỗ trợ điểm bán và định hướng phát triển doanh số lâu dài
              cùng đối tác.
            </p>
          </AnimateOnScroll>
        </div>

        <StaggerContainer
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
          delayChildren={0.2}
        >
          {supplierValues.map((item) => (
            <SupplierValueCard
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
