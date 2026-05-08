import Image from "next/image";
import { ArrowRight, Handshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroProducts } from "./data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f3]">
      {/* Decorative background */}
      <div className="absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-[#087c43]/10 blur-[90px]" />
      <div className="absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-[#f5d36b]/30 blur-[100px]" />
      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-[#eef6f1] to-transparent" />

      <div className="site-container relative grid min-h-[720px] items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div
            className="
              mb-5 inline-flex items-center gap-2 rounded-full
              bg-white px-4 py-2 text-[13px] font-semibold text-[#087c43]
              shadow-[0_10px_26px_rgba(6,63,50,0.08)]
              ring-1 ring-[#e3ebe6]
            "
          >
            <Handshake size={16} />
            Hợp tác phân phối Samtramy
          </div>

          <h1 className="max-w-[720px] text-[42px] font-bold leading-tight tracking-[-0.045em] text-[#063f32] md:text-[62px]">
            Nhà cung cấp sản phẩm tiêu dùng từ Sâm Ngọc Linh cho đối tác phân phối
          </h1>

          <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-[#526861]">
            Samtramy cung cấp danh mục sản phẩm tiêu dùng có nguồn gốc rõ
            ràng, bao bì chỉn chu, dễ trưng bày, dễ tư vấn và phù hợp phát
            triển doanh số tại kênh bán lẻ, cửa hàng đặc sản, quà biếu và nhà
            phân phối khu vực.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#partner-form">
              <Button
                type="button"
                className="
                  h-12 cursor-pointer rounded-full bg-[#087c43] px-7
                  text-[14px] font-bold text-white
                  shadow-[0_12px_28px_rgba(8,124,67,0.22)]
                  transition-colors duration-200 hover:bg-[#0a6f3d]
                "
              >
                Nhận chính sách phân phối
                <ArrowRight size={17} />
              </Button>
            </a>

            <a href="#product-categories">
              <Button
                type="button"
                variant="outline"
                className="
                  h-12 cursor-pointer rounded-full border-[#d8e0db]
                  bg-white px-7 text-[14px] font-bold text-[#063f32]
                  shadow-[0_10px_24px_rgba(6,63,50,0.06)]
                  transition-colors duration-200 hover:bg-[#eef6f1]
                "
              >
                Xem danh mục sản phẩm
              </Button>
            </a>
          </div>

          <div className="mt-10 grid max-w-[620px] gap-4 sm:grid-cols-3">
            <div
              className="
                rounded-2xl bg-white p-5
                shadow-[0_12px_28px_rgba(6,63,50,0.06)]
                ring-1 ring-[#e3ebe6]
              "
            >
              <p className="text-[30px] font-bold text-[#087c43]">B2B</p>
              <p className="mt-1 text-[13px] leading-5 text-[#6f827b]">
                Định hướng hợp tác phân phối
              </p>
            </div>

            <div
              className="
                rounded-2xl bg-white p-5
                shadow-[0_12px_28px_rgba(6,63,50,0.06)]
                ring-1 ring-[#e3ebe6]
              "
            >
              <p className="text-[30px] font-bold text-[#087c43]">GT</p>
              <p className="mt-1 text-[13px] leading-5 text-[#6f827b]">
                Phù hợp kênh bán lẻ truyền thống
              </p>
            </div>

            <div
              className="
                rounded-2xl bg-white p-5
                shadow-[0_12px_28px_rgba(6,63,50,0.06)]
                ring-1 ring-[#e3ebe6]
              "
            >
              <p className="text-[30px] font-bold text-[#087c43]">24/7</p>
              <p className="mt-1 text-[13px] leading-5 text-[#6f827b]">
                Hỗ trợ tư vấn đối tác
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -left-8 -top-8 h-[190px] w-[190px] rounded-full bg-[#087c43]/12 blur-[70px]" />
          <div className="absolute -bottom-8 right-0 h-[220px] w-[220px] rounded-full bg-[#f5d36b]/35 blur-[70px]" />

          <div
            className="
              relative overflow-hidden rounded-[34px] bg-white p-5
              shadow-[0_26px_70px_rgba(6,63,50,0.16)]
              ring-1 ring-[#e3ebe6]
            "
          >
            <div className="relative h-[540px] overflow-hidden rounded-[26px] bg-[#f5f5f3]">
              <Image
                src="/images/ngoc-linh/legend-mountain.jpg"
                alt="Vùng nguyên liệu Sâm Ngọc Linh"
                fill
                priority
                className="object-cover"
                sizes="540px"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#063f32]/62" />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/92 p-5 backdrop-blur-md">
                <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#087c43]">
                  Samtramy Supplier
                </p>
                <p className="mt-2 text-[22px] font-bold leading-tight text-[#063f32]">
                  Không chỉ cung cấp sản phẩm, chúng tôi đồng hành cùng đối tác bán ra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}