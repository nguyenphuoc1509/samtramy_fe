"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function WineContactBanner() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ea]">
      <div>
        <div
          className="
            relative min-h-[560px] overflow-hidden
            shadow-[0_24px_70px_rgba(6,63,50,0.16)]
          "
        >
          <Image
            src="/images/banners/hero-2.jpg"
            alt="Tư vấn rượu Sâm Ngọc Linh Samtramy"
            fill
            className="object-cover"
            sizes="1400px"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#063f32]/82 via-[#063f32]/38 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />

          <div
            className="
              relative z-10 grid min-h-[560px] items-center gap-8 lg:grid-cols-[1fr_420px] site-container
            "
          >
            {/* Left — text */}
            <AnimateOnScroll animation="fadeLeft" distance={32} className="max-w-[560px] text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="
                  mb-5 inline-flex items-center gap-2 rounded-full
                  bg-white/12 px-4 py-2 text-[12px] font-bold uppercase
                  tracking-[0.2em] text-[#f5d36b] ring-1 ring-white/15
                  backdrop-blur-md
                "
              >
                <PhoneCall size={15} />
                Samtramy tư vấn
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.12, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[34px] font-bold leading-tight tracking-[-0.04em] md:text-[50px]"
              >
                Cần tư vấn rượu sâm?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.22, duration: 0.6 }}
                className="mt-4 max-w-[480px] text-[15px] leading-8 text-white/78"
              >
                Để lại thông tin, Samtramy sẽ liên hệ tư vấn sản phẩm và combo
                quà biếu phù hợp.
              </motion.p>
            </AnimateOnScroll>

            {/* Right — compact form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.18, duration: 0.65, ease: [0.19, 1, 0.22, 1] }}
              className="
                w-full max-w-[390px] justify-self-center rounded-[28px] bg-white/95 p-5
                shadow-[0_20px_60px_rgba(0,0,0,0.22)]
                ring-1 ring-white/60 backdrop-blur-md
                md:p-6
              "
            >
              <div className="mb-5">
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.22em] text-[#087c43]">
                  Đăng ký tư vấn
                </p>

                <h3 className="text-[24px] font-bold text-[#063f32]">
                  Để lại thông tin
                </h3>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#063f32]">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="
                      h-11 w-full rounded-2xl border border-[#d8e0db] bg-white px-4
                      text-[14px] text-[#063f32] outline-none
                      placeholder:text-[#b0c0ba]
                      transition-all duration-200
                      focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/12
                    "
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#063f32]">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    className="
                      h-11 w-full rounded-2xl border border-[#d8e0db] bg-white px-4
                      text-[14px] text-[#063f32] outline-none
                      placeholder:text-[#b0c0ba]
                      transition-all duration-200
                      focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/12
                    "
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#063f32]">
                    Nhu cầu tư vấn
                  </label>
                  <textarea
                    placeholder="Nhu cầu tư vấn"
                    className="
                      min-h-[92px] w-full resize-none rounded-2xl
                      border border-[#d8e0db] bg-white px-4 py-3
                      text-[14px] text-[#063f32] outline-none
                      placeholder:text-[#b0c0ba]
                      transition-all duration-200
                      focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/12
                    "
                  />
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02, boxShadow: "0 14px 32px rgba(8,124,67,0.28)" }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    h-11 w-full cursor-pointer rounded-full
                    bg-[#087c43] text-[13px] font-bold uppercase text-white
                    shadow-[0_10px_24px_rgba(8,124,67,0.22)]
                    transition-shadow duration-200 hover:bg-[#0a6f3d]
                    active:bg-[#055a30]
                  "
                >
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 size={15} strokeWidth={2.2} />
                    Gửi thông tin
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
