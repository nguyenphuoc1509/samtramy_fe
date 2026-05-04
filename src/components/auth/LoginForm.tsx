"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import AuthField from "./AuthField";
import SubmitButton from "./SubmitButton";
import SocialLoginButtons from "./SocialLoginButtons";

type LoginFormProps = {
  onSuccess: () => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    login({ name: "Người dùng" });
    setLoading(false);

    onSuccess();
  };

  const handleSocialLogin = async (provider: "Google" | "Facebook") => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    login({ name: `Người dùng ${provider}` });
    setLoading(false);

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AuthField
        label="Email hoặc tên tài khoản"
        type="text"
        placeholder="Nhập email hoặc tên tài khoản"
      />

      <AuthField
        label="Mật khẩu"
        type="password"
        placeholder="Nhập mật khẩu"
      />

      <div className="flex items-center justify-between gap-4 text-sm">
        <label className="flex cursor-pointer items-center gap-2 text-[#65766f]">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-[#b9c3bd] accent-[#087c43] transition"
          />
          Ghi nhớ đăng nhập
        </label>

        <button
          type="button"
          className="
            whitespace-nowrap font-semibold text-[#087c43]
            transition hover:text-[#063f32] hover:underline
            cursor-pointer
          "
        >
          Quên mật khẩu?
        </button>
      </div>

      <SubmitButton
        loading={loading}
        text="Đăng nhập"
        loadingText="Đang đăng nhập..."
        align="left"
      />

      <SocialLoginButtons loading={loading} onSocialLogin={handleSocialLogin} />
    </form>
  );
}
