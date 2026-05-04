"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { type CartItem } from "@/mock/cart.mock";

type CartItemProps = {
  item: CartItem;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}

export default function CartItemRow({
  item,
  onRemove,
  onQuantityChange,
}: CartItemProps) {
  const subtotal = item.price * item.quantity;

  return (
    <article className="flex gap-4 rounded-xl border border-[#dfe7e2] bg-white p-4 shadow-[0_2px_10px_rgba(6,63,50,0.05)]">
      <Link
        href={`/san-pham/${item.slug}`}
        className="relative block h-[120px] w-[120px] shrink-0 overflow-hidden rounded-lg bg-[#f7f7f7]"
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-3 transition-transform duration-300 hover:scale-105"
          sizes="120px"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/san-pham/${item.slug}`}
              className="line-clamp-2 text-[15px] font-semibold leading-[1.3] text-[#063f32] transition-colors hover:text-[#087c43]"
            >
              {item.name}
            </Link>

            <button
              type="button"
              onClick={() => onRemove(item.id)}
              aria-label={`Xóa ${item.name}`}
              className="ml-2 flex cursor-pointer h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#8a9b94] transition-colors duration-200 hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 size={16} strokeWidth={2} />
            </button>
          </div>

          <p className="mt-1 text-[12px] font-medium text-[#8a9b94]">
            {item.category}
          </p>
        </div>

        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 items-center overflow-hidden rounded-md border border-[#dfe7e2]">
              <button
                type="button"
                onClick={() =>
                  onQuantityChange(item.id, Math.max(1, item.quantity - 1))
                }
                aria-label="Giảm số lượng"
                className="flex h-9 w-9 items-center cursor-pointer justify-center text-[#063f32] transition-colors duration-200 hover:bg-[#eef4ef] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={item.quantity <= 1}
              >
                <Minus size={13} strokeWidth={2.5} />
              </button>

              <span className="flex h-9 min-w-[36px] items-center justify-center border-x border-[#dfe7e2] text-[13px] font-semibold text-[#063f32]">
                {item.quantity}
              </span>

              <button
                type="button"
                onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                aria-label="Tăng số lượng"
                className="flex h-9 w-9 items-center cursor-pointer justify-center text-[#063f32] transition-colors duration-200 hover:bg-[#eef4ef]"
              >
                <Plus size={13} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[15px] font-bold text-[#087c43]">
              {formatPrice(subtotal)}
            </p>
            <p className="mt-0.5 text-[12px] text-[#8a9b94]">
              {formatPrice(item.price)} / sản phẩm
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
