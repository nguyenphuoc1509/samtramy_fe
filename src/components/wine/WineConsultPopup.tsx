"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, PhoneCall, X } from "lucide-react";

interface WineConsultPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WineConsultPopup({ isOpen, onClose }: WineConsultPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-6">
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0 bg-[#021b15]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            key="popup"
            ref={popupRef}
            initial={{ opacity: 0, scale: 0.92, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{
              duration: 0.35,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="relative z-10 w-full max-w-[780px]"
          >
            <div
              className="
                relative min-h-[420px] overflow-hidden rounded-[10px]
                bg-[#063f32] shadow-[0_32px_90px_rgba(6,63,50,0.24)]
                ring-1 ring-white/20
              "
            >
              {/* Background image */}
              <Image
                src="/images/banners/hero-2.jpg"
                alt="Tư vấn rượu Sâm Ngọc Linh Samtramy"
                fill
                priority
                className="object-cover"
                sizes="980px"
              />

              {/* Overlay nhẹ để form và text đọc rõ */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#063f32]/82 via-[#063f32]/38 to-[#063f32]/12" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng popup"
                className="
                  absolute right-2 top-2 z-30 flex h-9 w-9 cursor-pointer
                  items-center justify-center
                  text-[#063f32] 
                  active:scale-95
                "
              >
                <X size={19} strokeWidth={2.5} />
              </button>

              {/* Content inside background */}
              <div
                className="
                  relative z-10 grid min-h-[420px] items-center gap-8
                  p-5 md:p-7 lg:grid-cols-[1fr_380px] lg:p-9
                "
              >
                {/* Left short text */}
                <div className="max-w-[420px] text-white">
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.35 }}
                    className="
                      mb-4 inline-flex items-center gap-2 rounded-full
                      bg-white/12 px-4 py-2 text-[11px] font-bold uppercase
                      tracking-[0.2em] text-[#f5d36b] ring-1 ring-white/15
                      backdrop-blur-md
                    "
                  >
                    <PhoneCall size={13} strokeWidth={2.2} />
                    Samtramy tư vấn
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.4 }}
                    className="
                      max-w-[500px] text-[34px] font-bold leading-tight
                      tracking-[-0.04em] text-white md:text-[48px]
                    "
                  >
                    Nhận tư vấn rượu sâm phù hợp
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.24, duration: 0.4 }}
                    className="mt-4 max-w-[430px] text-[14px] leading-7 text-white/76"
                  >
                    Để lại thông tin, Samtramy sẽ liên hệ tư vấn sản phẩm và
                    combo quà biếu phù hợp.
                  </motion.p>
                </div>

                {/* Compact form */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22, duration: 0.45 }}
                  className="
                    w-full max-w-[380px] justify-self-center rounded-[20px]
                    bg-white/94 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)]
                    ring-1 ring-white/50 backdrop-blur-md
                  "
                >
                  <div className="mb-4">
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#087c43]">
                      Đăng ký tư vấn
                    </p>

                    <h3 className="text-[24px] font-bold leading-tight text-[#063f32]">
                      Để lại thông tin
                    </h3>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="
                        h-11 w-full rounded-2xl border border-[#d8e0db]
                        bg-white px-4 text-[14px] text-[#063f32] outline-none
                        placeholder:text-[#9aa9a4] transition-all duration-200
                        focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/12
                      "
                    />

                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      className="
                        h-11 w-full rounded-2xl border border-[#d8e0db]
                        bg-white px-4 text-[14px] text-[#063f32] outline-none
                        placeholder:text-[#9aa9a4] transition-all duration-200
                        focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/12
                      "
                    />

                    <textarea
                      placeholder="Nhu cầu tư vấn"
                      className="
                        min-h-[88px] w-full resize-none rounded-2xl
                        border border-[#d8e0db] bg-white px-4 py-3
                        text-[14px] text-[#063f32] outline-none
                        placeholder:text-[#9aa9a4] transition-all duration-200
                        focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/12
                      "
                    />

                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.01,
                        boxShadow: "0 14px 32px rgba(8,124,67,0.25)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="
                        h-11 w-full cursor-pointer rounded-full bg-[#087c43]
                        text-[13px] font-bold uppercase tracking-[0.05em]
                        text-white shadow-[0_10px_24px_rgba(8,124,67,0.22)]
                        transition-colors duration-200 hover:bg-[#063f32]
                      "
                    >
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle2 size={15} strokeWidth={2.2} />
                        Gửi thông tin
                      </span>
                    </motion.button>
                  </form>

                  <p className="mt-3 text-center text-[11px] leading-5 text-[#8fa19b]">
                    Samtramy chỉ liên hệ để tư vấn.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}