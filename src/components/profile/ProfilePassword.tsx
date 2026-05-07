"use client";

import { useState } from "react";

export default function ProfilePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
      <div className="mb-5">
        <h2 className="text-[18px] font-bold text-[#063f32]">
          Đổi mật khẩu
        </h2>
        <p className="mt-1 text-[13px] text-[#8a9b94]">
          Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1.5 block text-[12px] font-medium text-[#8a9b94]">
            Mật khẩu hiện tại
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Nhập mật khẩu hiện tại"
            className="
              w-full rounded-lg border border-[#dde4e2] bg-[#fafafa]
              px-3.5 py-2.5 text-[14px] text-[#063f32]
              transition focus:border-[#087c43] focus:bg-white focus:outline-none
            "
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[12px] font-medium text-[#8a9b94]">
            Mật khẩu mới
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Nhập mật khẩu mới"
            className="
              w-full rounded-lg border border-[#dde4e2] bg-[#fafafa]
              px-3.5 py-2.5 text-[14px] text-[#063f32]
              transition focus:border-[#087c43] focus:bg-white focus:outline-none
            "
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[12px] font-medium text-[#8a9b94]">
            Xác nhận mật khẩu mới
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Nhập lại mật khẩu mới"
            className="
              w-full rounded-lg border border-[#dde4e2] bg-[#fafafa]
              px-3.5 py-2.5 text-[14px] text-[#063f32]
              transition focus:border-[#087c43] focus:bg-white focus:outline-none
            "
          />
        </div>

        <button
          type="submit"
          className="
            mt-6 rounded-full bg-[#087c43] px-8 py-3
            text-[14px] font-semibold text-white transition
            hover:bg-[#0a6f3d]
          "
        >
          Cập nhật mật khẩu
        </button>
      </form>
    </div>
  );
}
