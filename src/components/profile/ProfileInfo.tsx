"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth-context";

export default function ProfileInfo() {
  const { user } = useAuth();
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    phone: "0901 234 567",
    gender: "Nam",
    birthday: "01/01/1995",
  });

  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-[#063f32]">
          Thông tin cá nhân
        </h2>
        {!edit && (
          <button
            type="button"
            onClick={() => setEdit(true)}
            className="text-[13px] font-semibold text-[#087c43] transition hover:text-[#063f32]"
          >
            Chỉnh sửa
          </button>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { label: "Họ và tên", key: "name" as const },
          { label: "Email", key: "email" as const },
          { label: "Số điện thoại", key: "phone" as const },
          { label: "Giới tính", key: "gender" as const },
          { label: "Ngày sinh", key: "birthday" as const },
        ].map(({ label, key }) => (
          <div key={key}>
            <label className="mb-1 block text-[12px] font-medium text-[#8a9b94]">
              {label}
            </label>
            {edit ? (
              <input
                type={key === "email" ? "email" : "text"}
                value={form[key]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [key]: e.target.value }))
                }
                className="
                  w-full rounded-lg border border-[#dde4e2] bg-[#fafafa]
                  px-3.5 py-2.5 text-[14px] text-[#063f32]
                  transition focus:border-[#087c43] focus:bg-white focus:outline-none
                "
              />
            ) : (
              <p className="rounded-lg bg-[#f9faf9] px-3.5 py-2.5 text-[14px] text-[#063f32]">
                {form[key]}
              </p>
            )}
          </div>
        ))}
      </div>

      {edit && (
        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={() => setEdit(false)}
            className="
              rounded-full bg-[#087c43] px-6 py-2.5
              text-[13px] font-semibold text-white transition
              hover:bg-[#0a6f3d]
            "
          >
            Lưu thay đổi
          </button>
          <button
            type="button"
            onClick={() => setEdit(false)}
            className="
              rounded-full border border-[#dde4e2] px-6 py-2.5
              text-[13px] font-semibold text-[#6f827b] transition
              hover:border-[#b0bbb8] hover:text-[#063f32]
            "
          >
            Hủy
          </button>
        </div>
      )}
    </div>
  );
}
