"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";

export default function Header() {
  const { isLoggedIn, user, openAuthPopup, logout } = useAuth();

  return (
    <header className="w-full bg-[#063f32] text-[#f5d36b]">
      <div
        className="
          mx-auto grid h-[96px] max-w-[1400px] grid-cols-[140px_1fr_auto]
          items-center gap-7 px-5
        "
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Samtramy"
            width={88}
            height={82}
            priority
            className="h-auto w-[88px]"
          />
        </Link>

        {/* Search + Benefits */}
        <div className="flex justify-center items-center gap-2 mt-4 flex-col text-center">
          <h1 className="text-[24px] font-bold leading-tight tracking-[-0.04em] text-[#f5d36b]">
            Samtramy
          </h1>
          <p className="text-[14px] font-semibold tracking-[0.2em] text-[#f5d36b]">
            Nhà cung cấp sản phẩm tiêu dùng từ Sâm Ngọc Linh
          </p>
        </div>

        {/* Right actions */}
        <div className="grid grid-flow-col items-center gap-6 whitespace-nowrap text-[15px] font-medium">
          <div className="flex items-center gap-4">
            <button type="button" aria-label="Tiếng Việt">
              <span className="relative block h-[32px] w-[32px] overflow-hidden rounded-full">
                <Image
                  src="/images/flags/VN.jpg"
                  alt="Tiếng Việt"
                  fill
                  className="scale-125 object-cover"
                  sizes="32px"
                />
              </span>
            </button>

            <button type="button" aria-label="English">
              <span className="relative block h-[32px] w-[32px] overflow-hidden rounded-full">
                <Image
                  src="/images/flags/US.jpg"
                  alt="English"
                  fill
                  className="scale-[1.35] object-cover"
                  sizes="32px"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
