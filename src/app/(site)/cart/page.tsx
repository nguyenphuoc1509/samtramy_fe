import type { Metadata } from "next";
import CartContent from "@/components/cart/CartContent";

export const metadata: Metadata = {
  title: "Giỏ hàng | Samtramy",
  description: "Xem và quản lý giỏ hàng của bạn tại Samtramy.",
};

export default function CartPage() {
  return <CartContent />;
}
