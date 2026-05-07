import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ProfileTabs from "@/components/profile/ProfileTabs";

export const metadata: Metadata = {
  title: "Thông tin cá nhân | Samtramy",
  description:
    "Quản lý thông tin cá nhân, xem lịch sử mua hàng, ưu đãi và đổi mật khẩu tài khoản Samtramy.",
  alternates: {
    canonical: "/thong-tin-ca-nhan",
  },
  openGraph: {
    title: "Thông tin cá nhân | Samtramy",
    description:
      "Quản lý thông tin cá nhân, xem lịch sử mua hàng, ưu đãi và đổi mật khẩu tài khoản Samtramy.",
    url: "/thong-tin-ca-nhan",
  },
};

export default function ProfilePage() {
  return (
    <main className="w-full bg-[#f5f5f3] py-8 min-h-[calc(100vh-164px)]">
      <div className="site-container">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Thông tin cá nhân" },
          ]}
        />

        <h1 className="mb-6 text-[32px] font-bold leading-tight text-[#063f32]">
          Tài khoản của tôi
        </h1>

        <ProfileTabs />
      </div>
    </main>
  );
}
