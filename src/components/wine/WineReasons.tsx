"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

import { WineConsultButton } from "./WineConsultButton";
import { wineReasons } from "./wine-data";
import {
  AnimateOnScroll,
  StaggerContainer,
  staggerItemVariants,
} from "./AnimateOnScroll";

export function WineReasons() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8f5] py-20 md:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(8,124,67,0.07),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(245,211,107,0.12),transparent_38%)]" />
      <div className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#087c43]/6 blur-[110px]" />
      <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#f5d36b]/8 blur-[110px]" />

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-[800px] text-center">
          <AnimateOnScroll animation="fadeUp" distance={26}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#eef6f1] px-4 py-2 ring-1 ring-[#d4e8de]">
              <Star size={14} className="text-[#087c43]" fill="#087c43" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#087c43]">
                Vì sao chọn Samtramy
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.1} distance={26}>
            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.035em] text-[#063f32] md:text-[42px]">
              Khách hàng chọn rượu sâm Samtramy vì những lý do này
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.18} distance={26}>
            <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.75] text-[#5a7068]">
              Samtramy mang đến trải nghiệm mua sắm rượu sâm biếu tặng dễ dàng,
              chỉn chu từ khâu chọn sản phẩm đến giao hàng.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Reason cards */}
        <StaggerContainer
          className="grid gap-4 md:grid-cols-2"
          staggerDelay={0.08}
          delayChildren={0.18}
        >
          {wineReasons.map((item, index) => (
            <motion.div
              key={item}
              variants={staggerItemVariants}
              whileHover={{ y: -3, scale: 1.005 }}
              transition={{ duration: 0.2 }}
              className="
                group relative flex items-center gap-5 overflow-hidden
                rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(6,63,50,0.07)]
                ring-1 ring-[#e3ebe6]
                transition-all duration-200
                hover:bg-[#f0f8f4]
                hover:shadow-[0_10px_32px_rgba(6,63,50,0.12)]
                hover:ring-[#c5dbc9]
              "
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-[#087c43] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              {/* Number badge */}
              <div
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-xl bg-[#eef6f1] text-[13px] font-black
                  tracking-tight text-[#087c43] ring-1 ring-[#d4e8de]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold leading-6 text-[#063f32]">
                  {item}
                </p>
              </div>

              {/* Check indicator */}
              <div className="shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <CheckCircle2
                  size={20}
                  className="text-[#087c43]"
                  strokeWidth={2.4}
                />
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimateOnScroll
          animation="fadeUp"
          delay={0.25}
          distance={24}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <WineConsultButton
            variant="primary"
            className="
              h-12 rounded-full bg-[#087c43] px-8 text-[14px] font-bold
              text-white shadow-[0_10px_24px_rgba(8,124,67,0.22)]
              transition duration-200 hover:-translate-y-0.5 hover:bg-[#0a6f3d]
              hover:shadow-[0_14px_30px_rgba(8,124,67,0.28)]
            "
          >
            Nhận tư vấn quà biếu
          </WineConsultButton>

          <p className="text-center text-[13px] text-[#6f827b]">
            Đội ngũ Samtramy liên hệ lại trong vòng 30 phút
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
