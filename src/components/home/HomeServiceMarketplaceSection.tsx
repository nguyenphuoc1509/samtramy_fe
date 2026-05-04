// src/components/home/HomeServiceMarketplaceSection.tsx

import Image from "next/image";
import Link from "next/link";
import {
  homeServiceItems,
  marketplaceItems,
} from "@/mock/home-service-marketplace.mock";

export default function HomeServiceMarketplaceSection() {
  return (
    <section className="w-full bg-[#f5f5f3] pb-16">
      <div className="site-container">
        <h2 className="text-[34px] font-semibold leading-tight text-[#063f32] md:text-[40px] mx-auto mb-10 text-center">
            ĐỐI TÁC THƯƠNG MẠI ĐIỆN TỬ
        </h2>
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 md:grid-cols-3">
          {homeServiceItems.map((item, index) => {
            const marketplace = marketplaceItems[index];

            return (
              <div key={item.id} className="text-center">
                <div className="mb-5 flex justify-center">
                  <div className="relative h-[96px] w-[120px]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain scale-125"
                      sizes="120px"
                    />
                  </div>
                </div>

                <h3 className="mb-3 text-[26px] font-bold leading-tight text-[#087c43]">
                  {item.title}
                </h3>

                <p className="mx-auto min-h-[48px] max-w-[270px] text-[16px] leading-6 text-[#9aa8a2]">
                  {item.description}
                </p>

                {marketplace && (
                  <Link
                    href={marketplace.href}
                    aria-label={marketplace.name}
                    className="
                      group mx-auto mt-7 flex h-[110px] max-w-[280px]
                      items-center justify-center overflow-hidden rounded-xl
                      bg-white px-8
                      shadow-[6px_9px_18px_rgba(8,124,67,0.28)]
                      transition duration-300 ease-out
                      hover:-translate-y-1
                      hover:shadow-[8px_14px_28px_rgba(8,124,67,0.36)]
                    "
                  >
                    <Image
                      src={marketplace.image}
                      alt={marketplace.name}
                      width={230}
                      height={70}
                      className="
                        h-auto max-h-[70px] w-auto object-contain
                        transition duration-300 group-hover:scale-105
                      "
                    />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
