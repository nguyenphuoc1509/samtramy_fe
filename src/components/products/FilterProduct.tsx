"use client";

import { ChevronRight, ChevronUp, SlidersHorizontal } from "lucide-react";

const filterCategories = [
  "Rượu sâm",
  "Trà sâm",
  "Yến sào",
  "Thực phẩm bổ sung",
  "Quà biếu",
];

export default function FilterProduct() {
  return (
    <aside
      className="
        w-full max-w-[260px] rounded-2xl border border-[#dfe7e2]
        bg-white px-5 py-5 text-[#063f32]
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[15px] font-bold">Bộ lọc</h2>

        <button
          type="button"
          aria-label="Tùy chỉnh bộ lọc"
          className="text-[#6f827b] transition hover:text-[#063f32]"
        >
          <SlidersHorizontal size={17} strokeWidth={1.8} />
        </button>
      </div>

      {/* Category list */}
      <div className="space-y-3 border-b border-[#e2e8e4] pb-5">
        {filterCategories.map((item) => (
          <button
            key={item}
            type="button"
            className="
              flex w-full items-center justify-between text-left
              text-[12px] font-medium text-[#5f9a75]
              transition hover:text-[#063f32]
            "
          >
            <span>{item}</span>
            <ChevronRight size={15} strokeWidth={1.8} />
          </button>
        ))}
      </div>

      {/* Price */}
      <div className="border-b border-[#e2e8e4] py-5">
        <button
          type="button"
          className="mb-5 flex w-full items-center justify-between text-left"
        >
          <span className="text-[14px] font-bold text-[#063f32]">
            Khoảng giá
          </span>
          <ChevronUp size={16} strokeWidth={1.8} />
        </button>

        {/* Custom range UI */}
        <div className="px-1">
          <div className="relative h-5">
            <div className="absolute left-0 right-0 top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-[#dfe7e2]" />

            <div className="absolute left-[18%] right-[16%] top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-[#1f8f45]" />

            <div className="absolute left-[18%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f8f45]" />

            <div className="absolute right-[16%] top-1/2 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f8f45]" />
          </div>

          <div className="mt-1 flex justify-between px-[12%] text-[10px] font-semibold text-[#1f8f45]">
            <span>500K</span>
            <span>2.000K</span>
          </div>
        </div>
      </div>

      {/* Extra filter placeholders */}
        
        <div className="h-px w-full bg-[#eef2ef]" />

      {/* Apply */}
      <button
        type="button"
        className="
          mt-5 h-10 w-full rounded-full bg-[#063f32]
          text-[12px] font-semibold text-white
          transition duration-300 hover:-translate-y-0.5 hover:bg-[#087c43]
          hover:shadow-[0_10px_22px_rgba(6,63,50,0.22)]
        "
      >
        Áp dụng bộ lọc
      </button>
    </aside>
  );
}