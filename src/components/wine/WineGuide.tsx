import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { wineGuideItems } from "./wine-data";

export function WineGuide() {
  return (
    <section className="py-20 md:py-24">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
              Hướng dẫn thưởng thức
            </p>

            <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
              Thưởng thức vừa phải, bảo quản đúng cách
            </h2>

            <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-[#6f827b]">
              Để giữ hương vị và trải nghiệm tốt nhất, sản phẩm nên được sử
              dụng đúng mục đích, đúng độ tuổi và bảo quản theo hướng dẫn.
            </p>

            <div className="mt-8 space-y-4">
              {wineGuideItems.map((item) => (
                <div
                  key={item}
                  className="
                    flex items-start gap-3 rounded-2xl bg-white p-4
                    shadow-[0_10px_26px_rgba(6,63,50,0.05)]
                    ring-1 ring-[#e3ebe6]
                  "
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#087c43]"
                  />
                  <p className="text-[14px] leading-7 text-[#526861]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              overflow-hidden rounded-[32px] bg-white p-5
              shadow-[0_18px_45px_rgba(6,63,50,0.08)]
              ring-1 ring-[#e3ebe6]
            "
          >
            <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-[#f8faf8] md:h-[520px]">
              <Image
                src="/images/products/product-2.png"
                alt="Hướng dẫn thưởng thức rượu sâm"
                fill
                className="object-contain p-8"
                sizes="560px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
