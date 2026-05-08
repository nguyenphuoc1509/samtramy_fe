import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cooperationSteps } from "./data";

interface CooperationStepCardProps {
  step: string;
  title: string;
  description: string;
}

function CooperationStepCard({ step, title, description }: CooperationStepCardProps) {
  return (
    <article
      className="
        flex min-h-[260px] flex-col rounded-3xl bg-white p-6
        shadow-[0_12px_32px_rgba(6,63,50,0.06)]
        ring-1 ring-[#e3ebe6]
      "
    >
      <p className="text-[36px] font-bold text-[#f5d36b]">
        {step}
      </p>

      <h3 className="mt-4 min-h-[50px] text-[18px] font-bold text-[#063f32]">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-[14px] leading-7 text-[#6f827b]">
        {description}
      </p>
    </article>
  );
}

export function CooperationProcessSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="site-container">
        <div className="mb-10 max-w-[760px]">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
            Quy trình hợp tác
          </p>

          <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
            Bắt đầu hợp tác cùng Samtramy chỉ với 4 bước
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {cooperationSteps.map((item) => (
            <CooperationStepCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-10 rounded-[28px] bg-white p-6 shadow-[0_12px_32px_rgba(6,63,50,0.06)] ring-1 ring-[#e3ebe6] md:p-8">
          <div className="grid items-center gap-5 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-[24px] font-bold text-[#063f32]">
                Sẵn sàng nhận danh mục và chính sách phân phối?
              </h3>

              <p className="mt-2 text-[14px] leading-7 text-[#6f827b]">
                Gửi thông tin để đội ngũ Samtramy tư vấn nhóm sản phẩm, mức
                nhập khởi đầu và phương án hỗ trợ bán hàng phù hợp với khu vực
                của quý đối tác.
              </p>
            </div>

            <a href="#partner-form">
              <Button
                type="button"
                className="
                  h-12 cursor-pointer rounded-full bg-[#087c43] px-7
                  text-[14px] font-bold text-white
                  transition-colors duration-200 hover:bg-[#0a6f3d]
                "
              >
                Nhận chính sách ngay
                <ArrowRight size={17} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
