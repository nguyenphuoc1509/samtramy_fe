import Image from "next/image";
import { PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
          {/* Full background image */}
          <Image
            src="/images/banners/hero-2.jpg"
            alt="Tư vấn rượu Sâm Ngọc Linh Samtramy"
            fill
            className="object-cover"
            sizes="1400px"
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#063f32]/82 via-[#063f32]/38 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />

          <div
            className="
              relative z-10 grid min-h-[560px] items-center gap-8 lg:grid-cols-[1fr_420px] site-container
            "
          >
            {/* Short text */}
            <div className="max-w-[560px] text-white">
              <div
                className="
                  mb-5 inline-flex items-center gap-2 rounded-full
                  bg-white/12 px-4 py-2 text-[12px] font-bold uppercase
                  tracking-[0.2em] text-[#f5d36b] ring-1 ring-white/15
                  backdrop-blur-md
                "
              >
                <PhoneCall size={15} />
                Samtramy tư vấn
              </div>

              <h2
                className="
                  text-[34px] font-bold leading-tight tracking-[-0.04em]
                  md:text-[50px]
                "
              >
                Cần tư vấn rượu sâm?
              </h2>

              <p className="mt-4 max-w-[480px] text-[15px] leading-8 text-white/78">
                Để lại thông tin, Samtramy sẽ liên hệ tư vấn sản phẩm và combo
                quà biếu phù hợp.
              </p>
            </div>

            {/* Compact form */}
            <form
              className="
                w-full max-w-[390px] justify-self-center rounded-[28px] bg-white/94 p-5
    shadow-[0_20px_60px_rgba(0,0,0,0.2)]
    ring-1 ring-white/50 backdrop-blur-md
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
                <Input
                  type="text"
                  placeholder="Họ và tên"
                  className="
                    h-11 rounded-2xl border-[#d8e0db] bg-white px-4
                    text-[14px] text-[#063f32] shadow-none
                    placeholder:text-[#9aa9a4]
                    focus-visible:border-[#087c43]
                    focus-visible:ring-[#087c43]/15
                  "
                />

                <Input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="
                    h-11 rounded-2xl border-[#d8e0db] bg-white px-4
                    text-[14px] text-[#063f32] shadow-none
                    placeholder:text-[#9aa9a4]
                    focus-visible:border-[#087c43]
                    focus-visible:ring-[#087c43]/15
                  "
                />

                <textarea
                  placeholder="Nhu cầu tư vấn"
                  className="
                    min-h-[92px] w-full resize-none rounded-2xl
                    border border-[#d8e0db] bg-white px-4 py-3
                    text-[14px] text-[#063f32] outline-none
                    placeholder:text-[#9aa9a4]
                    focus:border-[#087c43]
                    focus:ring-4 focus:ring-[#087c43]/15
                  "
                />

                <Button
                  type="submit"
                  className="
                    h-11 w-full cursor-pointer rounded-full
                    bg-[#087c43] text-[13px] font-bold uppercase text-white
                    shadow-[0_12px_28px_rgba(8,124,67,0.22)]
                    transition duration-200 hover:bg-[#063f32]
                  "
                >
                  Gửi thông tin
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}