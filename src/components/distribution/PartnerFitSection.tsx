"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { partnerTypes } from "./data";
import {
  AnimateOnScroll,
  StaggerContainer,
  staggerItemVariants,
} from "./AnimateOnScroll";

interface PartnerTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function PartnerTypeCard({ icon: Icon, title, description }: PartnerTypeCardProps) {
  return (
    <motion.article
      variants={staggerItemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        group flex min-h-[230px] flex-col rounded-3xl bg-white p-5
        shadow-[0_10px_28px_rgba(6,63,50,0.06)]
        transition-all duration-200 hover:bg-[#fbfdfb]
        hover:shadow-[0_14px_32px_rgba(6,63,50,0.1)]
      "
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef6f1] text-[#087c43] transition-colors duration-200 group-hover:bg-[#087c43] group-hover:text-white">
        <Icon size={20} strokeWidth={2.1} />
      </div>

      <h3 className="min-h-[44px] text-[16px] font-bold text-[#063f32]">
        {title}
      </h3>

      <p className="mt-2 flex-1 text-[13px] leading-6 text-[#6f827b]">
        {description}
      </p>
    </motion.article>
  );
}

export function PartnerFitSection() {
  return (
    <section className="bg-[#eef6f1] py-20 md:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-[760px] text-center">
          <AnimateOnScroll animation="fadeUp" distance={28}>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
              Đối tác phù hợp
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.08} distance={28}>
            <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
              Samtramy phù hợp với nhiều mô hình kinh doanh
            </h2>
          </AnimateOnScroll>
        </div>

        <StaggerContainer
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.07}
          delayChildren={0.2}
        >
          {partnerTypes.map((item) => (
            <PartnerTypeCard
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
