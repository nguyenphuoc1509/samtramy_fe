"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import AuthLayout from "./AuthLayout";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthMode = "login" | "register";

type AuthPopupProps = {
  open: boolean;
  defaultMode?: AuthMode;
  onClose: () => void;
};

export default function AuthPopup({
  open,
  defaultMode = "login",
  onClose,
}: AuthPopupProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  const isLogin = mode === "login";

  return (
    <div
      className="
        fixed inset-0 z-[999] flex items-center justify-center px-4
        bg-black/55 backdrop-blur-[6px]
        animate-in fade-in duration-300
      "
    >
      <div
        ref={popupRef}
        className="
          relative h-[720px] w-full max-w-[1180px] overflow-hidden
          rounded-[36px] bg-[#f6f3ea]
          shadow-[0_40px_100px_rgba(0,0,0,0.45)]
          animate-in zoom-in-95 fade-in slide-in-from-bottom-4 duration-500
        "
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/auth/bg.jpg"
            alt="Không gian Samtramy"
            fill
            priority
            className="
              scale-[1.02] object-cover
              blur-[2px]
              brightness-[0.65]
              saturate-[1.08]
            "
            sizes="1180px"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#062f27]/85 via-[#063f32]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng popup"
          className="
            group absolute right-6 top-6 z-30 flex h-11 w-11 items-center justify-center
            rounded-full bg-white text-[#063f32]
            transition-all duration-300
            hover:-translate-y-0.5 hover:rotate-90 cursor-pointer
            active:scale-95
          "
        >
          <X size={20} className="transition-transform duration-300" />
        </button>

        {/* Decorative glow */}
        <div className="absolute -left-16 top-12 h-72 w-72 rounded-full bg-[#f5d36b]/20 blur-[80px]" />
        <div className="absolute bottom-[-80px] left-[120px] h-72 w-72 rounded-full bg-[#087c43]/20 blur-[100px]" />

        {/* Left content */}
        <AuthLayout />

        {/* Right full white panel */}
        <div
          className="
            absolute inset-y-0 right-0 z-20 w-full
            bg-white/96 backdrop-blur-xl
            md:w-[46%]
          "
        >
          <div
            className="
              flex h-full flex-col overflow-y-auto
              px-7 py-8
              md:px-10 md:py-11
            "
          >
            <div className="mt-2 max-w-[380px]">
              <p className="mb-3 text-[15px] font-medium text-[#52645d]">
                {isLogin ? "Chào mừng trở lại với" : "Tạo tài khoản tại"}{" "}
                <span className="font-bold text-[#087c43]">SAMTRAMY</span>
              </p>

              <h2 className="text-[42px] font-bold leading-none tracking-[-0.04em] text-[#063f32] md:text-[54px]">
                {isLogin ? "Đăng nhập" : "Đăng ký"}
              </h2>
            </div>

            <div className="mt-8 max-w-[380px]">
              <AuthTabs mode={mode} onModeChange={setMode} />

              <div
                key={mode}
                className="
                  animate-in fade-in slide-in-from-bottom-3
                  duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                "
              >
                {isLogin ? (
                  <LoginForm onSuccess={onClose} />
                ) : (
                  <RegisterForm onSuccess={onClose} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile logo */}
        <div className="absolute left-6 top-6 z-20 md:hidden">
          <Image
            src="/images/logo.png"
            alt="Samtramy"
            width={92}
            height={92}
            className="h-auto w-[92px] drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </div>
  );
}
