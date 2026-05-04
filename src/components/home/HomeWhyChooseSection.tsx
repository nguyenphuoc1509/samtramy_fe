// src/components/home/HomeWhyChooseSection.tsx

import Image from "next/image";
import { homeWhyChooseData } from "@/mock/home-why-choose.mock";

export default function HomeWhyChooseSection() {
  return (
    <section className="w-full bg-[#f5f5f3] py-20">
      <div className=" bg-[#e7eee4]">
        <div
          className="
            grid items-center gap-12 px-8 py-12
            md:px-14 md:py-14
            lg:grid-cols-[0.9fr_1.1fr]
            site-container
          "
        >
          {/* Content */}
          <div className="max-w-[520px]">
            <h2
              className="
                mb-8 text-[28px] font-bold leading-tight text-[#063f32]
                md:text-[36px]
              "
            >
              {homeWhyChooseData.title}
            </h2>

            <div className="space-y-7">
              {homeWhyChooseData.items.map((item, index) => (
                <div key={`${item.title}-${index}`}>
                  <h3 className="mb-2 text-[17px] font-semibold text-[#063f32]">
                    {item.title}
                  </h3>

                  <p className="max-w-[390px] text-[17px] leading-7 text-[#8aa299]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="
                mt-8 rounded-full bg-[#1e8c3a] px-8 py-4
                text-[12px] font-bold uppercase tracking-wide text-white
                transition duration-300
                hover:-translate-y-1 hover:bg-[#087c43]
                hover:shadow-[0_14px_28px_rgba(6,63,50,0.22)] cursor-pointer
              "
            >
              {homeWhyChooseData.buttonText}
            </button>
          </div>

          {/* Image */}
          <div
            className="
              group relative h-[360px] overflow-hidden rounded-xl
              shadow-[0_18px_40px_rgba(6,63,50,0.12)]
              md:h-[500px]
            "
          >
            <Image
              src={homeWhyChooseData.image}
              alt={homeWhyChooseData.imageAlt}
              fill
              className="
                object-cover transition duration-700 ease-out
                group-hover:scale-105
              "
              sizes="(max-width: 768px) 100vw, 640px"
            />

            <div
              className="
                absolute inset-0 bg-gradient-to-t from-[#063f32]/20 via-transparent to-transparent
                opacity-0 transition duration-500 group-hover:opacity-100
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}