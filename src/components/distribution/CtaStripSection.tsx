import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaStripSection() {
  return (
    <section className="bg-[#f5f5f3] pb-20">
      <div className="site-container">
        <div
          className="
            overflow-hidden rounded-[32px] bg-[#063f32] p-6
            shadow-[0_18px_45px_rgba(6,63,50,0.16)]
            md:p-8
          "
        >
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.24em] text-[#f5d36b]">
                Dành cho đại lý và nhà phân phối
              </p>

              <h3 className="text-[26px] font-bold leading-tight text-white md:text-[34px]">
                Muốn biết danh mục nào phù hợp với khu vực và mô hình kinh doanh của bạn?
              </h3>

              <p className="mt-3 max-w-[760px] text-[14px] leading-7 text-white/72">
                Samtramy sẽ tư vấn nhóm sản phẩm khởi đầu, chính sách nhập
                hàng và cách triển khai bán ra phù hợp với điểm bán của quý đối tác.
              </p>
            </div>

            <a href="#partner-form">
              <Button
                type="button"
                className="
                  h-12 cursor-pointer rounded-full bg-[#f5d36b] px-7
                  text-[14px] font-bold text-[#063f32]
                  transition-colors duration-200 hover:bg-[#ffe28a]
                "
              >
                Đăng ký tư vấn
                <ArrowRight size={17} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
