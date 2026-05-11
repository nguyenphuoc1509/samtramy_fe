"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WineConsultButton } from "./WineConsultButton";

export function WineHero() {
  return (
    <section
      id="wine-hero"
      className="relative min-h-[720px] overflow-hidden bg-[#f6efe2]"
    >
      <Image
        src="/images/banners/hero-2.jpg"
        alt="Rượu Sâm Ngọc Linh Samtramy"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#e7eee4] via-[#e7eee4]/20 to-transparent" />
      <div
        className="
          absolute inset-x-0 bottom-0 h-[180px]
          [mask-image:linear-gradient(to_top,black_30%,transparent_100%)]
        "
      />

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-x-0 bottom-32 z-10 px-4"
      >
        <div className="site-container">
          <div className="mx-auto max-w-[720px] text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#087c43] backdrop-blur-sm"
            >
              Rượu Sâm Ngọc Linh
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[36px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[52px]"
            >
              Tinh hoa Trà My trong từng giọt rượu quý
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.5 }}
              className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-[#4a6259]"
            >
              Rượu Sâm Ngọc Linh Samtramy — quà biếu cao cấp, trang trọng cho
              những dịp quan trọng.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-x-0 bottom-9 z-10 flex flex-wrap justify-center gap-4 px-4"
      >
        <WineConsultButton variant="primary">Tư vấn ngay</WineConsultButton>

        <a
          href="#wine-products"
          className="
            inline-flex h-11 items-center justify-center rounded-full
            border border-[#d8c8ac] bg-white/85
            px-7 text-[14px] font-bold uppercase text-[#7b3a25]
            shadow-[0_10px_24px_rgba(91,47,17,0.12)]
            backdrop-blur-md
            transition duration-200 hover:-translate-y-1 hover:bg-[#fff5e6]
          "
        >
          Xem các sản phẩm
        </a>
      </motion.div>
    </section>
  );
}
