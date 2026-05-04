// src/components/products/ProductDetailGallery.tsx
"use client"

import Image from "next/image";

type ProductDetailGalleryProps = {
  image: string;
  thumbnails: string[];
  name: string;
};

export default function ProductDetailGallery({
  image,
  thumbnails,
  name,
}: ProductDetailGalleryProps) {
  return (
    <div>
      <div
        className="
          relative h-[520px] overflow-hidden rounded-2xl bg-white
          shadow-[0_14px_35px_rgba(6,63,50,0.08)]
          ring-1 ring-[#e3ebe6]
        "
      >
        <Image
          src={image}
          alt={name}
          fill
          priority
          className="object-contain p-10 transition duration-500 hover:scale-105"
          sizes="600px"
        />
      </div>

      <div className="mt-5 grid grid-cols-4 gap-4">
        {thumbnails.map((item, index) => (
          <button
            key={`${item}-${index}`}
            type="button"
            className={`
              relative h-[118px] overflow-hidden rounded-xl bg-white
              shadow-[0_8px_20px_rgba(6,63,50,0.06)]
              ring-1 transition duration-300
              hover:-translate-y-1 hover:ring-[#087c43]
              ${
                index === 0
                  ? "ring-[#087c43]"
                  : "ring-[#dfe7e2]"
              }
            `}
          >
            <Image
              src={item}
              alt={`${name} ${index + 1}`}
              fill
              className="object-contain p-3"
              sizes="120px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}