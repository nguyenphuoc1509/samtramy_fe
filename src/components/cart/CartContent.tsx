"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";
import CartItemRow from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { type CartItem, cartItems } from "@/mock/cart.mock";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f3f8f5]">
        <ShoppingBag size={44} strokeWidth={1.5} className="text-[#087c43]" />
      </div>

      <h2 className="text-[22px] font-bold text-[#063f32]">
        Giỏ hàng của bạn đang trống
      </h2>

      <p className="mt-2 max-w-[380px] text-[14px] leading-6 text-[#8a9b94]">
        Hãy khám phá các sản phẩm của chúng tôi và thêm vào giỏ hàng để tiếp tục mua sắm.
      </p>

      <Link
        href="/san-pham"
        className="
          mt-7 flex h-12 items-center gap-2 rounded-xl
          bg-[#087c43] px-8 text-[15px] font-bold text-white
          shadow-[0_8px_22px_rgba(8,124,67,0.22)]
          transition-colors duration-200
          hover:bg-[#0a6f3d]
        "
      >
        <ArrowLeft size={17} strokeWidth={2.5} />
        Tiếp tục mua sắm
      </Link>
    </div>
  );
}

export default function CartContent() {
  const [items, setItems] = useState<CartItem[]>(cartItems);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleClearCart = () => {
    setItems([]);
  };

  if (items.length === 0) {
    return (
      <main className="w-full bg-[#f5f5f3] min-h-screen">
        <div className="site-container py-10">
          <EmptyCart />
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#f5f5f3] min-h-screen py-8">
      <div className="site-container">
        <nav className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => window.history.back()}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfe7e2] bg-white text-[#63746e] transition-all duration-200 hover:border-[#087c43] hover:text-[#087c43]"
        aria-label="Quay lại trang trước"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
      </button>
            <h1 className="text-[24px] font-bold text-[#063f32]">
              Giỏ hàng
            </h1>
            <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#087c43] px-2 text-[12px] font-bold text-white">
              {items.length}
            </span>
          </div>

          <button
            type="button"
            onClick={handleClearCart}
            className="flex items-center cursor-pointer gap-1.5 text-[13px] text-[#8a9b94] transition-colors duration-200 hover:text-red-500"
          >
            <Trash2 size={14} strokeWidth={2} />
            Xóa tất cả
          </button>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <section aria-label="Danh sách sản phẩm trong giỏ hàng">
            <div className="space-y-3">
              {items.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-dashed border-[#b9c3bd] bg-white px-5 py-3">
              <div className="flex items-center gap-2 text-[13px] text-[#63746e]">
                <Image
                  src="/images/marketplaces/free-deliver.svg"
                  alt="Miễn phí vận chuyển"
                  width={20}
                  height={20}
                  className="opacity-70"
                />
                <span>Miễn phí vận chuyển cho đơn từ 2.000.000đ</span>
              </div>
              <Link
                href="/san-pham"
                className="text-[13px] font-semibold text-[#087c43] transition-colors hover:text-[#0a6f3d] hover:underline"
              >
                Tiếp tục mua sắm
              </Link>
            </div>
          </section>

          <CartSummary subtotal={subtotal} />
        </div>
      </div>
    </main>
  );
}
