"use client";

import { useState } from "react";
import {
  User,
  ShoppingBag,
  Gift,
  Lock,
} from "lucide-react";
import { useAuth } from "@/context/auth-context";
import ProfileSidebar from "./ProfileSidebar";
import ProfileInfo from "./ProfileInfo";
import ProfileOrders from "./ProfileOrders";
import ProfilePromotions from "./ProfilePromotions";
import ProfilePassword from "./ProfilePassword";

type TabId = "info" | "orders" | "promotions" | "password";

const tabs: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: "info", label: "Thông tin cá nhân", icon: User },
  { id: "orders", label: "Lịch sử mua hàng", icon: ShoppingBag },
  { id: "promotions", label: "Ưu đãi của tôi", icon: Gift },
  { id: "password", label: "Đổi mật khẩu", icon: Lock },
];

export default function ProfileTabs() {
  const { isLoggedIn, openAuthPopup } = useAuth();
  const [activeTab, setActiveTab] = useState<TabId>("info");

  if (!isLoggedIn) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f7f4]">
          <User size={28} className="text-[#087c43]" />
        </div>
        <h2 className="mb-2 text-[22px] font-bold text-[#063f32]">
          Vui lòng đăng nhập
        </h2>
        <p className="mb-6 text-[14px] text-[#6f827b]">
          Bạn cần đăng nhập để xem thông tin tài khoản
        </p>
        <button
          type="button"
          onClick={() => openAuthPopup("login")}
          className="
            inline-flex items-center gap-2 rounded-full
            bg-[#087c43] px-8 py-3
            text-[14px] font-semibold text-white
            transition hover:bg-[#0a6f3d]
          "
        >
          Đăng nhập ngay
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <ProfileSidebar
        activeTab={activeTab}
        onTabChange={(id) => setActiveTab(id as TabId)}
        tabs={tabs}
      />

      <div>
        {activeTab === "info" && <ProfileInfo />}
        {activeTab === "orders" && <ProfileOrders />}
        {activeTab === "promotions" && <ProfilePromotions />}
        {activeTab === "password" && <ProfilePassword />}
      </div>
    </div>
  );
}
