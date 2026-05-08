import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { tradeSupports } from "./data";

interface TradeSupportCardProps {
  title: string;
  description: string;
  index: number;
}

function TradeSupportCard({ title, description, index }: TradeSupportCardProps) {
  return (
    <article
      className="
        flex min-h-[240px] flex-col rounded-3xl bg-[#f8faf8] p-5
        ring-1 ring-[#e3ebe6]
      "
    >
      <p className="mb-4 text-[28px] font-bold text-[#087c43]">
        0{index + 1}
      </p>

      <h3 className="min-h-[44px] text-[17px] font-bold text-[#063f32]">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-[14px] leading-7 text-[#6f827b]">
        {description}
      </p>
    </article>
  );
}

export function TradeSupportSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative h-[560px] overflow-hidden rounded-[32px] bg-[#f5f5f3] shadow-[0_18px_45px_rgba(6,63,50,0.12)]">
          <Image
            src="/images/ngoc-linh/sam-ngoc-linh-forest.jpg"
            alt="Hỗ trợ bán hàng tại điểm bán"
            fill
            className="object-cover"
            sizes="620px"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#063f32]/75" />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/92 p-5 backdrop-blur-md">
            <p className="mt-2 text-[22px] font-bold leading-tight text-[#063f32]">
              Hỗ trợ trưng bày, tư vấn và thúc đẩy tái nhập tại điểm bán.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
            Hỗ trợ đối tác phát triển bán hàng tại điểm bán
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-[#6f827b]">
            Điểm khác biệt của Samtramy là không chỉ bán hàng cho đối tác, mà
            còn đồng hành trong cách đưa sản phẩm vào kệ, vào tư vấn và vào
            kế hoạch tái nhập.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {tradeSupports.map((item, index) => (
              <TradeSupportCard
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>

          <div className="mt-8">
            <a href="#partner-form">
              <Button
                type="button"
                className="
                  h-11 cursor-pointer rounded-full bg-[#087c43] px-7
                  text-[14px] font-bold text-white
                  transition-colors duration-200 hover:bg-[#0a6f3d]
                "
              >
                Tôi muốn được hỗ trợ phát triển điểm bán
                <ArrowRight size={17} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
