"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gift, Handshake, Sparkles, Users } from "lucide-react";
import { wineOccasions } from "./wine-data";
import { AnimateOnScroll, StaggerContainer, staggerItemVariants } from "./AnimateOnScroll";

interface OccasionCardProps {
  title: string;
  description: string;
  index: number;
}

const occasionIcons = [Gift, Handshake, Users, Sparkles];

function OccasionCard({ title, description, index }: OccasionCardProps) {
  const Icon = occasionIcons[index] ?? Gift;

  return (
    <motion.article
      variants={staggerItemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        group flex min-h-[250px] flex-col rounded-3xl bg-[#f8faf8] p-6
        ring-1 ring-[#e3ebe6]
        transition-colors duration-200
        hover:bg-white
        hover:shadow-[0_16px_34px_rgba(6,63,50,0.08)]
      "
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div
          className="
            flex h-12 w-12 items-center justify-center rounded-2xl
            bg-[#eef6f1] text-[#087c43]
            transition-colors duration-200 group-hover:bg-[#dff0e7]
          "
        >
          <Icon size={22} strokeWidth={2.1} />
        </div>

        <p className="text-[30px] font-bold text-[#f5d36b]">0{index + 1}</p>
      </div>

      <h3 className="text-[20px] font-bold leading-snug text-[#063f32]">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-[14px] leading-7 text-[#6f827b]">
        {description}
      </p>
    </motion.article>
  );
}

export function WineOccasions() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <AnimateOnScroll animation="fadeUp">
              <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
                Dịp sử dụng
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={0.1}>
              <h2 className="max-w-[720px] text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
                Phù hợp cho nhiều dịp biếu tặng và tiếp khách
              </h2>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fadeUp" delay={0.15}>
            <p className="max-w-[420px] text-[15px] leading-7 text-[#6f827b]">
              Rượu Sâm Ngọc Linh Samtramy phù hợp với những dịp cần sự trang
              trọng, tinh tế và thể hiện sự trân trọng dành cho người nhận.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Banner image */}
        <AnimateOnScroll animation="scaleIn" className="mb-10">
          <div
            className="
              relative overflow-hidden rounded-[34px]
              bg-[#f7f3ea] shadow-[0_18px_45px_rgba(6,63,50,0.08)]
              ring-1 ring-[#eadfcd]
            "
          >
            <div className="relative h-[300px] md:h-[380px] lg:h-[420px]">
              <Image
                src="/images/banners/hero-2.jpg"
                alt="Rượu Sâm Ngọc Linh phù hợp làm quà biếu"
                fill
                className="object-cover"
                sizes="1400px"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#063f32]/76 via-[#063f32]/36 to-transparent" />

              <AnimateOnScroll
                animation="fadeLeft"
                distance={20}
                className="absolute left-6 top-1/2 max-w-[560px] -translate-y-1/2 md:left-10"
              >
                <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.26em] text-[#f5d36b]">
                  Quà biếu cao cấp
                </p>

                <h3 className="text-[30px] font-bold leading-tight tracking-[-0.04em] text-white md:text-[44px]">
                  Món quà chỉn chu cho những dịp cần sự trang trọng
                </h3>

                <p className="mt-4 max-w-[460px] text-[15px] leading-7 text-white/78">
                  Từ quà Tết, tiếp khách đến gặp gỡ đối tác, rượu sâm Samtramy
                  giúp tạo dấu ấn sang trọng và thể hiện sự trân trọng dành cho
                  người nhận.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.08}
          delayChildren={0.1}
        >
          {wineOccasions.map((item, index) => (
            <OccasionCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
