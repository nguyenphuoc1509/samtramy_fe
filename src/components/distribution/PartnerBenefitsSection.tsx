import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { partnerBenefits } from "./data";

export function PartnerBenefitsSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative order-2 lg:order-1">
          <div className="relative h-[520px] overflow-hidden rounded-[32px] bg-[#f5f5f3] shadow-[0_18px_45px_rgba(6,63,50,0.12)]">
            <Image
              src="/images/ngoc-linh/ngoc-linh-valley.jpg"
              alt="Đồng hành cùng đối tác Samtramy"
              fill
              className="object-cover"
              sizes="620px"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#063f32]/70" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/92 p-5 backdrop-blur-md">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#087c43]">
                Đồng hành điểm bán
              </p>
              <p className="mt-2 text-[22px] font-bold leading-tight text-[#063f32]">
                Từ danh mục nhập hàng đến cách tư vấn, trưng bày và tái nhập.
              </p>
            </div>
          </div>

          <div className="absolute -right-5 top-8 hidden w-[220px] rounded-2xl bg-[#f5d36b] p-5 shadow-[0_16px_36px_rgba(6,63,50,0.16)] md:block">
            <p className="text-[30px] font-bold text-[#063f32]">GT</p>
            <p className="mt-1 text-[13px] leading-5 text-[#063f32]/78">
              Phù hợp cửa hàng bán lẻ, đại lý, điểm bán truyền thống.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
            Đồng hành bán hàng
          </p>

          <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
            Chúng tôi giúp đối tác bán hàng dễ hơn, không chỉ giao hàng là kết thúc
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-[#6f827b]">
            Samtramy đồng hành cùng đối tác từ bước chọn danh mục, giới thiệu
            sản phẩm, trưng bày tại điểm bán cho đến gợi ý combo và theo dõi
            tái nhập.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {partnerBenefits.map((benefit) => (
              <div
                key={benefit}
                className="
                  flex items-start gap-3 rounded-2xl bg-[#f8faf8] p-5
                  ring-1 ring-[#e3ebe6]
                "
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#087c43]"
                />
                <p className="text-[14px] leading-6 text-[#526861]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#partner-form">
              <Button
                type="button"
                className="
                  h-11 cursor-pointer rounded-full bg-[#087c43] px-7
                  text-[14px] font-bold text-white
                  transition-colors duration-200 hover:bg-[#0a6f3d]
                "
              >
                Nhận tư vấn danh mục nhập hàng
                <ArrowRight size={17} />
              </Button>
            </a>

            <a href="#product-categories">
              <Button
                type="button"
                variant="outline"
                className="
                  h-11 cursor-pointer rounded-full border-[#d8e0db] bg-white px-7
                  text-[14px] font-bold text-[#063f32]
                  transition-colors duration-200 hover:bg-[#f8faf8]
                "
              >
                Xem nhóm sản phẩm
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
