"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, X, CheckCircle2 } from "lucide-react";

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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 bg-[#021b15]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Popup Container */}
          <motion.div
            key="popup"
            ref={popupRef}
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              duration: 0.38,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="relative z-10 w-full max-w-[480px]"
          >
            {/* Glow accent behind card */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[50px] bg-[#f5d36b]/10 blur-[60px]"
            />

            {/* Card */}
            <div
              className="
                relative overflow-hidden rounded-[28px] bg-white
                shadow-[0_32px_90px_rgba(6,63,50,0.22),0_8px_24px_rgba(6,63,50,0.12)]
                ring-1 ring-[#e3ebe6]
              "
            >
              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng popup"
                className="
                  absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center
                  rounded-full border border-[#e3ebe6] bg-white/90 text-[#063f32]
                  shadow-sm backdrop-blur-sm
                  transition-all duration-200
                  hover:bg-white hover:shadow-md hover:scale-105
                  active:scale-95
                "
              >
                <X size={16} strokeWidth={2.5} />
              </button>

              {/* Header */}
              <div className="relative overflow-hidden bg-[#063f32] px-7 pb-8 pt-9">
                {/* Decorative circles */}
                <div
                  aria-hidden
                  className="absolute -right-12 -top-12 h-[200px] w-[200px] rounded-full bg-[#f5d36b]/15 blur-[70px]"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-8 -left-4 h-[120px] w-[120px] rounded-full bg-[#f5d36b]/10 blur-[50px]"
                />

                {/* Wine icon row */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="mb-5 flex items-center gap-2"
                >
                  <div
                    className="
                      flex items-center gap-1.5 rounded-full
                      bg-white/10 px-4 py-2 text-[11px] font-bold uppercase
                      tracking-[0.22em] text-[#f5d36b] ring-1 ring-white/15 backdrop-blur-sm
                    "
                  >
                    <PhoneCall size={13} strokeWidth={2.2} />
                    Samtramy tư vấn
                  </div>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative text-[26px] font-bold leading-tight tracking-[-0.04em] text-white md:text-[30px]"
                >
                  Để lại thông tin tư vấn
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.27, duration: 0.4 }}
                  className="relative mt-3 max-w-[340px] text-[13px] leading-7 text-white/70"
                >
                  Samtramy sẽ liên hệ tư vấn sản phẩm rượu sâm phù hợp với nhu cầu của bạn.
                </motion.p>

                {/* Bottom decorative wave */}
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f5d36b]/60 via-[#f5d36b]/20 to-transparent"
                />
              </div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-[#f8faf8] px-7 py-7"
              >
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-4"
                >
                  <FormField label="Họ và tên" delay={0.38}>
                    <input
                      type="text"
                      placeholder="Nhập họ và tên"
                      className="
                        h-12 w-full rounded-2xl border border-[#d8e0db] bg-white px-4
                        text-[14px] text-[#063f32] outline-none
                        placeholder:text-[#b0c0ba]
                        transition-all duration-200
                        focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/12
                      "
                    />
                  </FormField>

                  <FormField label="Số điện thoại" delay={0.44}>
                    <input
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      className="
                        h-12 w-full rounded-2xl border border-[#d8e0db] bg-white px-4
                        text-[14px] text-[#063f32] outline-none
                        placeholder:text-[#b0c0ba]
                        transition-all duration-200
                        focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/12
                      "
                    />
                  </FormField>

                  <FormField label="Nhu cầu tư vấn" delay={0.5}>
                    <textarea
                      placeholder="Mua quà biếu, mua số lượng, nhập cửa hàng..."
                      className="
                        min-h-[105px] w-full resize-none rounded-2xl
                        border border-[#d8e0db] bg-white px-4 py-3
                        text-[14px] text-[#063f32] outline-none
                        placeholder:text-[#b0c0ba]
                        transition-all duration-200
                        focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/12
                      "
                    />
                  </FormField>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.56, duration: 0.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 14px 32px rgba(8,124,67,0.28)" }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      relative mt-1 h-12 w-full cursor-pointer overflow-hidden
                      rounded-full bg-[#087c43] text-[13px] font-bold uppercase tracking-[0.06em] text-white
                      shadow-[0_10px_24px_rgba(8,124,67,0.22)]
                      transition-shadow duration-200
                      hover:bg-[#0a6f3d]
                      active:bg-[#055a30]
                    "
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <CheckCircle2 size={16} strokeWidth={2.2} />
                      Gửi thông tin tư vấn
                    </span>
                    {/* Shine sweep on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden rounded-full"
                    >
                      <span className="absolute inset-0 translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 hover:translate-x-full" />
                    </span>
                  </motion.button>
                </form>

                {/* Trust note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65, duration: 0.4 }}
                  className="mt-4 text-center text-[12px] text-[#9aa9a4]"
                >
                  Cam kết bảo mật thông tin. Samtramy chỉ liên hệ tư vấn.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function FormField({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
        {label}
      </label>
      {children}
    </motion.div>
  );
}
