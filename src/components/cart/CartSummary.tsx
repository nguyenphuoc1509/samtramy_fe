"use client";

import Link from "next/link";
import { Truck, RotateCcw, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { freeShippingThreshold } from "@/mock/cart.mock";

type CartSummaryProps = {
  subtotal: number;
  onApplyCoupon?: (code: string) => void;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}

const benefits = [
  {
    icon: Truck,
    label: "Miễn phí vận chuyển cho đơn từ 2 triệu",
  },
  {
    icon: RotateCcw,
    label: "Đổi trả trong 7 ngày",
  },
  {
    icon: ShieldCheck,
    label: "Cam kết 100% chính hãng",
  },
];

export default function CartSummary({
  subtotal,
  onApplyCoupon,
}: CartSummaryProps) {
  const shippingFee = subtotal >= freeShippingThreshold ? 0 : 30000;
  const total = subtotal + (subtotal >= freeShippingThreshold ? 0 : shippingFee);
  const remainingForFreeShipping = Math.max(
    0,
    freeShippingThreshold - subtotal
  );

  return (
    <aside className="flex flex-col gap-4">
      <div className="rounded-xl border border-[#dfe7e2] bg-white p-5 shadow-[0_2px_10px_rgba(6,63,50,0.05)]">
        <h2 className="text-[17px] font-bold text-[#063f32]">Thông tin đơn hàng</h2>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between text-[14px]">
            <span className="text-[#63746e]">Tạm tính</span>
            <span className="font-semibold text-[#063f32]">
              {formatPrice(subtotal)}
            </span>
          </div>

          <div className="flex items-center justify-between text-[14px]">
            <span className="text-[#63746e]">Phí vận chuyển</span>
            <span
              className={
                shippingFee === 0
                  ? "font-semibold text-[#087c43]"
                  : "font-semibold text-[#063f32]"
              }
            >
              {shippingFee === 0 ? "Miễn phí" : formatPrice(shippingFee)}
            </span>
          </div>

          {remainingForFreeShipping > 0 && (
            <div className="rounded-lg bg-[#f3f8f5] p-3">
              <p className="text-[13px] leading-5 text-[#148440]">
                Mua thêm{" "}
                <span className="font-bold">{formatPrice(remainingForFreeShipping)}</span>{" "}
                để được miễn phí vận chuyển
              </p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#dfe7e2]">
                <div
                  className="h-full rounded-full bg-[#087c43] transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                  }}
                />
              </div>
            </div>
          )}

          <div className="border-t border-[#dfe7e2] pt-3">
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-bold text-[#063f32]">Tổng cộng</span>
              <span className="text-[20px] font-bold text-[#087c43]">
                {formatPrice(total)}
              </span>
            </div>
            <p className="mt-1 text-[12px] text-[#8a9b94]">
              (Đã bao gồm VAT nếu có)
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Nhập mã giảm giá"
              aria-label="Nhập mã giảm giá"
              className="h-10 flex-1 text-[13px]"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-10 shrink-0 px-4 text-[13px] font-semibold"
              onClick={() => onApplyCoupon?.("")}
            >
              Áp dụng
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <Link
            href="/checkout"
            className="
              flex h-11 w-full items-center justify-center gap-2 rounded-lg
              bg-[#087c43] text-[14px] font-semibold text-white
              shadow-[0_8px_20px_rgba(8,124,67,0.25)]
              transition-colors duration-200
              hover:bg-[#0a6f3d]
            "
          >
            Tiến hành đặt hàng
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[12px] text-[#8a9b94]">
          <ShieldCheck size={13} strokeWidth={2} className="text-[#087c43]" />
          <span>Thanh toán an toàn, bảo mật 100%</span>
        </div>
      </div>

      <div className="rounded-xl border border-[#dfe7e2] bg-white p-4 shadow-[0_2px_10px_rgba(6,63,50,0.05)]">
        <ul className="space-y-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f3f8f5]">
                  <Icon size={14} strokeWidth={2} className="text-[#087c43]" />
                </span>
                <span className="text-[13px] text-[#63746e]">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
