import Image from "next/image";

import { businessScenarios } from "./data";

interface BusinessScenarioCardProps {
  title: string;
  image: string;
  description: string;
  index: number;
}

function BusinessScenarioCard({ title, image, description, index }: BusinessScenarioCardProps) {
  return (
    <article
      className="
        flex min-h-[460px] flex-col overflow-hidden rounded-[28px] bg-white
        shadow-[0_12px_32px_rgba(6,63,50,0.06)]
        ring-1 ring-[#e3ebe6]
      "
    >
      <div className="relative h-[280px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="420px"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[12px] font-bold text-[#087c43] backdrop-blur-md">
          0{index + 1}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[20px] font-bold leading-snug text-[#063f32]">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-[14px] leading-7 text-[#6f827b]">
          {description}
        </p>
      </div>
    </article>
  );
}

export function BusinessScenariosSection() {
  return (
    <section className="bg-[#f5f5f3] py-20 md:py-24">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
              Bài toán tại điểm bán
            </p>

            <h2 className="max-w-[720px] text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
              Đối tác cần nguồn hàng dễ bán, dễ tư vấn và có khả năng tái nhập
            </h2>
          </div>

          <p className="max-w-[420px] text-[15px] leading-7 text-[#6f827b]">
            Trang hợp tác cần cho đối tác thấy rõ cách sản phẩm đi vào điểm
            bán, không chỉ giới thiệu sản phẩm một chiều.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {businessScenarios.map((item, index) => (
            <BusinessScenarioCard
              key={item.title}
              title={item.title}
              image={item.image}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
