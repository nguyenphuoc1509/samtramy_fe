import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { wineReasons } from "./wine-data";

export function WineReasons() {
  return (
    <section className="py-20 md:py-24">
      <div className="site-container">
        <div
          className="
            overflow-hidden rounded-[34px] bg-[#063f32]
            shadow-[0_20px_55px_rgba(6,63,50,0.16)]
          "
        >
          <div className="grid items-center gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#f5d36b]">
                Lý do lựa chọn
              </p>

              <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-white md:text-[46px]">
                Samtramy đồng hành từ sản phẩm đến trải nghiệm quà biếu
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-white/74">
                Chúng tôi không chỉ cung cấp sản phẩm, mà còn hỗ trợ khách
                hàng và đối tác chọn đúng combo, đúng ngân sách và đúng mục
                đích sử dụng.
              </p>

              <div className="mt-8">
                <a href="#wine-consult-popup">
                  <Button
                    type="button"
                    className="
                      h-11 cursor-pointer rounded-full bg-[#f5d36b] px-7
                      text-[14px] font-bold text-[#063f32]
                      transition-colors duration-200 hover:bg-[#ffe28a]
                    "
                  >
                    Nhận tư vấn sản phẩm
                    <ArrowRight size={17} />
                  </Button>
                </a>
              </div>
            </div>

            <div className="p-7 md:p-10 lg:p-12">
              <div className="grid gap-4 sm:grid-cols-2">
                {wineReasons.map((item) => (
                  <div
                    key={item}
                    className="
                      flex gap-3 rounded-2xl bg-white p-4
                      shadow-[0_8px_22px_rgba(6,63,50,0.05)]
                      ring-1 ring-[#e3ebe6] min-h-[100px]
                    "
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#087c43]"
                    />
                    <p className="text-[14px] leading-6 text-[#526861]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
