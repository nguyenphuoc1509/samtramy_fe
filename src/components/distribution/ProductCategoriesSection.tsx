"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { productCategories } from "./data";
import { PartnerRegisterPopup } from "./RegistrationFormSection";

interface ProductCategoryCardProps {
  title: string;
  image: string;
  role: string;
  channels: string;
  onOpenPopup: (productName: string) => void;
}

function ProductCategoryCard({
  title,
  image,
  role,
  channels,
  onOpenPopup,
}: ProductCategoryCardProps) {
  return (
    <article
      className="
        flex min-h-[520px] flex-col overflow-hidden rounded-3xl bg-white
        shadow-[0_12px_32px_rgba(6,63,50,0.06)]
        ring-1 ring-[#e3ebe6]
        transition-colors duration-200 hover:bg-[#fbfdfb] cursor-pointer
      " onClick={() => onOpenPopup(title)}
    >
      <div className="relative h-[245px] bg-[#f8faf8]" onClick={() => onOpenPopup(title)}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-7"
          sizes="420px"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#087c43]">
          Nhóm sản phẩm
        </p>

        <h3 className="text-[22px] font-bold text-[#063f32]">{title}</h3>

        <p className="mt-3 flex-1 text-[14px] leading-7 text-[#6f827b]">
          {role}
        </p>

        <div className="mt-5 rounded-2xl bg-[#f8faf8] p-4">
          <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-[#087c43]">
            Kênh phù hợp
          </p>

          <p className="text-[13px] leading-6 text-[#526861]">{channels}</p>
        </div>
      </div>
    </article>
  );
}

export function ProductCategoriesSection() {
  const [openPartnerPopup, setOpenPartnerPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const handleOpenPopup = (productName: string) => {
    setSelectedProduct(productName);
    setOpenPartnerPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPartnerPopup(false);
  };

  return (
    <>
      <section id="product-categories" className="py-20 md:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
                Danh mục phân phối
              </p>

              <h2 className="max-w-[680px] text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
                Nhóm sản phẩm tiêu dùng phù hợp nhiều kênh bán
              </h2>
            </div>

            <p className="max-w-[420px] text-[15px] leading-7 text-[#6f827b]">
              Danh mục được thiết kế để đối tác dễ bắt đầu, dễ tư vấn và có thể
              mở rộng theo tốc độ bán ra.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((item) => (
              <ProductCategoryCard
                key={item.title}
                title={item.title}
                image={item.image}
                role={item.role}
                channels={item.channels}
                onOpenPopup={handleOpenPopup}
              />
            ))}
          </div>
        </div>
      </section>

      <PartnerRegisterPopup
        open={openPartnerPopup}
        onClose={handleClosePopup}
        selectedProduct={selectedProduct}
      />
    </>
  );
}