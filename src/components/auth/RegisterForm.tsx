"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import AuthField from "./AuthField";
import SubmitButton from "./SubmitButton";

type RegisterFormProps = {
  onSuccess: () => void;
};

export default function RegisterForm({ onSuccess }: RegisterFormProps) {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    login({ name: "Người dùng mới" });
    setLoading(false);

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AuthField
        label="Tên tài khoản hoặc email"
        type="text"
        placeholder="Nhập tên tài khoản hoặc email"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <AuthField label="Họ và tên" type="text" placeholder="Họ và tên" />
        <AuthField
          label="Số điện thoại"
          type="tel"
          placeholder="Số điện thoại"
        />
      </div>

      <AuthField
        label="Mật khẩu"
        type="password"
        placeholder="Tạo mật khẩu"
      />

      <SubmitButton
        loading={loading}
        text="Đăng ký"
        loadingText="Đang đăng ký..."
        align="right"
      />
    </form>
  );
}
