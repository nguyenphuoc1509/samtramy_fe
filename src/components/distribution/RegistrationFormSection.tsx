"use client";

import { ArrowRight, CheckCircle2, MapPin, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PartnerRegisterPopupProps = {
  open: boolean;
  onClose: () => void;
  selectedProduct?: string;
};

const partnerBenefits = [
  "Nhận tư vấn danh mục sản phẩm phù hợp với mô hình kinh doanh.",
  "Nhận bảng giá và chính sách phân phối theo khu vực.",
  "Được gợi ý nhóm sản phẩm khởi đầu để nhập thử.",
  "Được hỗ trợ nội dung tư vấn, trưng bày và bán hàng tại điểm bán.",
];

export function PartnerRegisterPopup({
  open,
  onClose,
  selectedProduct,
}: PartnerRegisterPopupProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[999] flex items-center justify-center
        bg-black/55 px-4 py-6 backdrop-blur-sm
      "
    >
      {/* Overlay close */}
      <button
        type="button"
        aria-label="Đóng popup"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      <div
        className="
          relative z-10 grid max-h-[92vh] w-full max-w-[1080px]
          overflow-hidden rounded-[32px] bg-white
          shadow-[0_30px_90px_rgba(0,0,0,0.35)]
          lg:grid-cols-[0.82fr_1.18fr]
        "
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Đóng"
          onClick={onClose}
          className="
            absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer
            items-center justify-center rounded-full bg-[#f5f5f3]
            text-[#063f32] shadow-[0_8px_20px_rgba(0,0,0,0.1)]
            transition-colors duration-200 hover:bg-[#eef6f1]
          "
        >
          <X size={20} strokeWidth={2.2} />
        </button>

        {/* Left content */}
        <div
          className="
            relative bg-[#063f32] px-6 py-8 text-white
            md:px-9 md:py-10
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,211,107,0.2),transparent_34%)]" />

          <div className="relative">
            <div className="mb-7 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#f5d36b]">
              Samtramy Partner
            </div>

            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.04em] md:text-[38px]">
              Nhận chính sách phân phối dành cho đối tác
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-white/76">
              Điền thông tin để Samtramy tư vấn danh mục sản phẩm, bảng giá,
              chính sách nhập hàng và phương án hỗ trợ bán ra phù hợp với mô
              hình kinh doanh của quý đối tác.
            </p>

            <div className="mt-7 space-y-4">
              {partnerBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#f5d36b]"
                  />
                  <p className="text-[14px] leading-7 text-white/78">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3 text-white/78">
                <MapPin size={17} className="mt-1 shrink-0 text-[#f5d36b]" />
                <p className="text-[13px] leading-6">
                  Phù hợp cho đại lý, cửa hàng, nhà phân phối, shop quà biếu,
                  siêu thị mini, kênh GT và Horeca.
                </p>
              </div>

              <div className="flex items-start gap-3 text-white/78">
                <Send size={17} className="mt-1 shrink-0 text-[#f5d36b]" />
                <p className="text-[13px] leading-6">
                  Thông tin của quý đối tác sẽ được dùng để tư vấn chính sách
                  phù hợp, không chia sẻ cho bên thứ ba.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="max-h-[92vh] overflow-y-auto px-6 py-8 md:px-9 md:py-10">
          <div className="mb-7 pr-10">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.24em] text-[#087c43]">
              Đăng ký tư vấn
            </p>

            <h3 className="text-[26px] font-bold leading-tight tracking-[-0.035em] text-[#063f32] md:text-[32px]">
              Gửi thông tin hợp tác
            </h3>

            <p className="mt-3 text-[14px] leading-7 text-[#6f827b]">
              Đội ngũ Samtramy sẽ liên hệ để tư vấn danh mục và chính sách phù
              hợp với khu vực kinh doanh của bạn.
            </p>
          </div>

          <form>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                  Họ và tên
                </label>
                <Input
                  type="text"
                  placeholder="Nhập họ và tên"
                  className="
                    h-11 rounded-xl border-[#d8e0db] bg-white px-4 shadow-none
                    focus-visible:border-[#087c43] focus-visible:ring-[#087c43]/15
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
                    h-11 rounded-xl border-[#d8e0db] bg-white px-4 shadow-none
                    focus-visible:border-[#087c43] focus-visible:ring-[#087c43]/15
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Nhập email"
                  className="
                    h-11 rounded-xl border-[#d8e0db] bg-white px-4 shadow-none
                    focus-visible:border-[#087c43] focus-visible:ring-[#087c43]/15
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                  Tên cửa hàng / công ty
                </label>
                <Input
                  type="text"
                  placeholder="Nhập tên đơn vị"
                  className="
                    h-11 rounded-xl border-[#d8e0db] bg-white px-4 shadow-none
                    focus-visible:border-[#087c43] focus-visible:ring-[#087c43]/15
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                  Khu vực kinh doanh
                </label>
                <Input
                  type="text"
                  placeholder="Ví dụ: TP.HCM, Đà Nẵng..."
                  className="
                    h-11 rounded-xl border-[#d8e0db] bg-white px-4 shadow-none
                    focus-visible:border-[#087c43] focus-visible:ring-[#087c43]/15
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                  Mô hình kinh doanh
                </label>
                <Input
                  type="text"
                  placeholder="Đại lý, cửa hàng, NPP..."
                  className="
                    h-11 rounded-xl border-[#d8e0db] bg-white px-4 shadow-none
                    focus-visible:border-[#087c43] focus-visible:ring-[#087c43]/15
                  "
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                Nhu cầu nhập dự kiến
              </label>
              <Input
                type="text"
                placeholder="Ví dụ: nhập thử, nhập định kỳ, phân phối khu vực..."
                className="
                  h-11 rounded-xl border-[#d8e0db] bg-white px-4 shadow-none
                  focus-visible:border-[#087c43] focus-visible:ring-[#087c43]/15
                "
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
                Ghi chú
              </label>
              <textarea
                placeholder="Chia sẻ thêm về nhu cầu hợp tác của quý đối tác..."
                className="
                  min-h-[120px] w-full resize-none rounded-xl border border-[#d8e0db]
                  bg-white px-4 py-3 text-sm text-[#063f32] outline-none
                  placeholder:text-[#9aa9a4]
                  focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/15
                "
              />
            </div>

            <Button
              type="submit"
              className="
                mt-7 h-12 w-full cursor-pointer rounded-full bg-[#087c43]
                text-[14px] font-bold text-white
                transition-colors duration-200 hover:bg-[#0a6f3d]
              "
            >
              Nhận chính sách phân phối
              <ArrowRight size={17} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}