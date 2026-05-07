"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, UserCircle, LogOut } from "lucide-react";
import { Input } from "../ui/input";
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
        <div className="grid min-w-0 grid-rows-[auto_auto] gap-2 mt-4">
          {/* Search */}
          <div className="grid h-10 w-full grid-cols-[1fr_62px] gap-[3px] rounded-lg bg-white p-[3px]">
            <Input
              type="search"
              placeholder="Tìm kiếm sản phẩm ..."
              aria-label="Tìm kiếm sản phẩm"
              className="
                h-full min-w-0 rounded-none border-0 bg-white px-5
                text-[15px] text-gray-700 shadow-none outline-none
                placeholder:text-gray-400
                focus-visible:border-0 focus-visible:ring-0
              "
            />

            <button
              type="button"
              aria-label="Tìm kiếm"
              className="
                flex h-full items-center justify-center rounded-md bg-[#063f32]
                text-white transition hover:bg-[#0a5644]
              "
            >
              <Search size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-[auto_auto_auto] items-center justify-start gap-9 text-[13.5px] italic text-[#f5d36b]">
            <div className="flex items-center gap-1.5">
              <img
                className="h-[22px] w-[22px]"
                src="https://theme.hstatic.net/200000872571/1001227895/14/header_03_policy_1_ico.png?v=563"
                alt="Đảm bảo chất lượng"
              />
              <span>Đảm bảo chất lượng</span>
            </div>

            <div className="flex items-center gap-1.5">
              <img
                className="h-[20px] w-[24px] mr-1"
                src="https://theme.hstatic.net/200000872571/1001227895/14/header_03_policy_2_ico.png?v=563"
                alt="Miễn phí vận chuyển"
              />
              <span>Miễn phí vận chuyển</span>
            </div>

            <div className="flex items-center gap-1.5">
              <img
                className="h-[22px] w-[22px]"
                src="https://theme.hstatic.net/200000872571/1001227895/14/header_03_policy_3_ico.png?v=563"
                alt="Mở hộp kiểm tra nhận hàng"
              />
              <span>Mở hộp kiểm tra nhận hàng</span>
            </div>
          </div>
        </div>

        {/* Right actions */}
        <div className="grid grid-flow-col items-center gap-6 whitespace-nowrap text-[15px] font-medium mb-4">
          <Link
            href="/gio-hang"
            className="flex items-center gap-2 transition"
          >
            <ShoppingCart size={27} />
            <span>Giỏ hàng</span>
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link
                href="/thong-tin-ca-nhan"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <UserCircle size={27} />
                <span className="max-w-[120px] truncate">
                  {user?.name ?? "Tài khoản của tôi"}
                </span>
              </Link>

              <button
                type="button"
                onClick={logout}
                aria-label="Đăng xuất"
                className="flex items-center gap-1 transition"
                title="Đăng xuất"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => openAuthPopup("login")}
              className="flex items-center gap-2 transition cursor-pointer"
            >
              <UserCircle size={27} />
              <span>Đăng nhập / Đăng ký</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <button type="button" aria-label="Tiếng Việt">
              <span className="relative block h-[27px] w-[27px] overflow-hidden rounded-full">
                <Image
                  src="/images/flags/VN.jpg"
                  alt="Tiếng Việt"
                  fill
                  className="scale-125 object-cover"
                  sizes="27px"
                />
              </span>
            </button>

            <button type="button" aria-label="English">
              <span className="relative block h-[27px] w-[27px] overflow-hidden rounded-full">
                <Image
                  src="/images/flags/US.jpg"
                  alt="English"
                  fill
                  className="scale-[1.35] object-cover"
                  sizes="27px"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
