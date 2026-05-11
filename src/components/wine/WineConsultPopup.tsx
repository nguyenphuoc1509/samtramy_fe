import { PhoneCall, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WineConsultPopup() {
  return (
    <div
      id="wine-consult-popup"
      className="
        fixed inset-0 z-[100] hidden items-center justify-center
        px-4 py-6 target:flex
      "
    >
      {/* Overlay */}
      <a
        href="#close-popup"
        aria-label="Đóng popup"
        className="absolute inset-0 bg-[#021b15]/55 backdrop-blur-[4px]"
      />

      {/* Popup */}
      <div
        className="
          relative z-10 w-full max-w-[500px]
          overflow-hidden rounded-[30px] bg-white
          shadow-[0_28px_80px_rgba(0,0,0,0.3)]
          ring-1 ring-[#e3ebe6]
        "
      >
        {/* Close */}
        <a
          href="#close-popup"
          aria-label="Đóng popup"
          className="
            absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center
            rounded-full bg-[#eef6f1] text-[#063f32]
            transition hover:bg-[#dceee4]
          "
        >
          <X size={18} strokeWidth={2.2} />
        </a>

        {/* Header */}
        <div
          className="
            relative bg-[#063f32] px-6 pb-7 pt-8 text-white
            md:px-8 md:pb-8 md:pt-9
          "
        >
          <div className="absolute -left-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#f5d36b]/20 blur-[70px]" />

          <div className="relative">
            <div
              className="
                mb-4 inline-flex items-center gap-2 rounded-full
                bg-white/10 px-4 py-2 text-[12px] font-bold uppercase
                tracking-[0.18em] text-[#f5d36b] ring-1 ring-white/10
              "
            >
              <PhoneCall size={15} />
              Samtramy tư vấn
            </div>

            <h2 className="max-w-[360px] text-[28px] font-bold leading-tight tracking-[-0.035em] text-white md:text-[34px]">
              Để lại thông tin tư vấn
            </h2>

            <p className="mt-3 max-w-[360px] text-[14px] leading-7 text-white/74">
              Samtramy sẽ liên hệ tư vấn sản phẩm rượu sâm phù hợp với nhu cầu
              của bạn.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#f8faf8] px-6 py-7 md:px-8 md:py-8">
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                Họ và tên
              </label>
              <Input
                type="text"
                placeholder="Nhập họ và tên"
                className="
                  h-12 rounded-2xl border-[#d8e0db] bg-white px-4
                  text-[14px] text-[#063f32] shadow-none
                  placeholder:text-[#9aa9a4]
                  focus-visible:border-[#087c43]
                  focus-visible:ring-[#087c43]/15
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                Số điện thoại
              </label>
              <Input
                type="tel"
                placeholder="Nhập số điện thoại"
                className="
                  h-12 rounded-2xl border-[#d8e0db] bg-white px-4
                  text-[14px] text-[#063f32] shadow-none
                  placeholder:text-[#9aa9a4]
                  focus-visible:border-[#087c43]
                  focus-visible:ring-[#087c43]/15
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                Nhu cầu tư vấn
              </label>
              <textarea
                placeholder="Mua quà biếu, mua số lượng, nhập cửa hàng..."
                className="
                  min-h-[105px] w-full resize-none rounded-2xl
                  border border-[#d8e0db] bg-white px-4 py-3
                  text-[14px] text-[#063f32] outline-none
                  placeholder:text-[#9aa9a4]
                  focus:border-[#087c43]
                  focus:ring-4 focus:ring-[#087c43]/15
                "
              />
            </div>

            <Button
              type="submit"
              className="
                h-12 w-full cursor-pointer rounded-full
                bg-[#087c43] text-[14px] font-bold uppercase text-white
                shadow-[0_12px_28px_rgba(8,124,67,0.2)]
                transition duration-200 hover:bg-[#063f32]
              "
            >
              Gửi thông tin tư vấn
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}