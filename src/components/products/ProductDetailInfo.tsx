// src/components/products/ProductDetailInfo.tsx

import {
  BadgeCheck,
  Headset,
  Minus,
  PackageCheck,
  PackageOpen,
  Plus,
  RefreshCcw,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductDetailInfoProps = {
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  features?: string[];
};

const policyItems = [
  {
    label: "Cam kết 100% chính hãng",
    icon: BadgeCheck,
  },
  {
    label: "Miễn phí giao hàng",
    icon: Truck,
  },
  {
    label: "Hỗ trợ 24/7",
    icon: Headset,
  },
  {
    label: "Hoàn tiền nếu hàng giả",
    icon: RefreshCcw,
  },
  {
    label: "Mở hộp kiểm tra nhận hàng",
    icon: PackageOpen,
  },
  {
    label: "Đổi trả trong 7 ngày",
    icon: PackageCheck,
  },
];

export default function ProductDetailInfo({
  name,
  category,
  price,
  shortDescription,
}: ProductDetailInfoProps) {
  return (
    <div className="pt-1">
      <h1
        className="
            text-[36px] font-bold leading-[1.1]
            tracking-[-0.03em] text-[#063f32]
            md:text-[42px]
          "
      >
        {name}
      </h1>

      <p className="mt-5 text-[20px] font-medium text-[#087c43]">{category}</p>

      <p className="mt-6 text-[22px] font-semibold text-[#063f32]">{price}</p>

      <p
        className="
            mt-6 text-[17px] font-medium leading-7
            text-[#148440]
          "
      >
        {shortDescription}
      </p>

      <div className="mt-7">
        <p className="mb-3 text-[13px] font-bold text-[#1f302b]">Số lượng</p>

        <div className="inline-flex h-11 items-center overflow-hidden rounded-md bg-white">
          <button
            type="button"
            aria-label="Giảm số lượng"
            className="
                flex h-11 w-11 cursor-pointer items-center justify-center
                text-[#063f32] transition-colors duration-200
                hover:bg-[#eef4ef]
              "
          >
            <Minus size={16} strokeWidth={2.2} />
          </button>

          <span className="flex h-11 w-11 items-center justify-center text-[15px] font-bold text-[#063f32]">
            1
          </span>

          <button
            type="button"
            aria-label="Tăng số lượng"
            className="
                flex h-11 w-11 cursor-pointer items-center justify-center
                text-[#063f32] transition-colors duration-200
                hover:bg-[#eef4ef]
              "
          >
            <Plus size={16} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-5">
        <Button
          type="button"
          variant="secondary"
          className="
              h-12 cursor-pointer rounded-md bg-white text-[14px] font-semibold
              text-[#087c43] shadow-[0_6px_16px_rgba(6,63,50,0.06)]
              transition-colors duration-200 hover:bg-[#f3f8f5]
            "
        >
          Thêm vào giỏ hàng
        </Button>

        <Button
          type="button"
          className="
              h-12 cursor-pointer rounded-md bg-[#087c43] text-[14px]
              font-semibold text-white shadow-[0_10px_22px_rgba(8,124,67,0.18)]
              transition-colors duration-200 hover:bg-[#0a6f3d]
            "
        >
          Mua ngay
        </Button>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-x-7 gap-y-3 md:grid-cols-3">
        {policyItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#52736b]">
                <Icon size={18} strokeWidth={2.2} />
              </span>

              <span className="text-[13.5px] font-medium leading-4 text-[#8a9b94]">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
