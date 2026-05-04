import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import {
  aboutHeroData,
  aboutIntroData,
  aboutTeamData,
} from "@/mock/about.mock";

export const metadata: Metadata = {
  title: "Giới thiệu | Samtramy",
  description:
    "Tìm hiểu câu chuyện thương hiệu Samtramy, hành trình phát triển sản phẩm từ Sâm Ngọc Linh và giá trị mà Samtramy mang đến cho khách hàng.",
  alternates: {
    canonical: "/gioi-thieu",
  },
  openGraph: {
    title: "Giới thiệu | Samtramy",
    description:
      "Tìm hiểu câu chuyện thương hiệu Samtramy, hành trình phát triển sản phẩm từ Sâm Ngọc Linh và giá trị mà Samtramy mang đến cho khách hàng.",
    url: "/gioi-thieu",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full bg-[#f5f5f3]">
      {/* Breadcrumb */}
      <div className="site-container pt-8">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Giới thiệu" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="site-container py-14 md:py-20">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
            {aboutHeroData.eyebrow}
          </p>

          <h1
            className="
              text-[34px] font-bold leading-tight tracking-[-0.04em]
              text-[#063f32]
              md:text-[48px]
            "
          >
            {aboutHeroData.title}
          </h1>

          <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-[#6f827b]">
            {aboutHeroData.description}
          </p>
        </div>

        <div
          className="
            relative mx-auto mt-12 h-[320px] max-w-[980px] overflow-hidden
            rounded-2xl bg-white shadow-[0_18px_45px_rgba(6,63,50,0.12)]
            md:h-[520px]
          "
        >
          <Image
            src={aboutHeroData.image}
            alt={aboutHeroData.title}
            fill
            priority
            className="object-cover"
            sizes="980px"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="site-container pb-20">
        <div
          className="
            mx-auto grid max-w-[980px] gap-8
            md:grid-cols-[0.85fr_1.15fr]
            md:gap-14
          "
        >
          <h2
            className="
              text-[30px] font-bold leading-[1.16] tracking-[-0.035em]
              text-[#063f32]
              md:text-[42px]
            "
          >
            {aboutIntroData.title}
          </h2>

          <div className="space-y-5 text-[15px] leading-8 text-[#6f827b]">
            {aboutIntroData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Value */}
      <section className="w-full bg-[#eef4f7] py-20 md:py-24">
        <div
          className="
      site-container grid items-center gap-14
      lg:grid-cols-[0.95fr_1.05fr]
    "
        >
          {/* Image collage */}
          <div className="mx-auto w-full max-w-[520px]">
            <div className="grid grid-cols-2 gap-5">
              {/* Left column */}
              <div className="space-y-5 pt-0">
                <div
                  className="
              relative h-[280px] overflow-hidden rounded-2xl bg-white
              shadow-[0_14px_34px_rgba(6,63,50,0.12)]
            "
                >
                  <Image
                    src={aboutTeamData.images[0]}
                    alt="Samtramy 1"
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="260px"
                  />
                </div>

                <div
                  className="
              relative h-[280px] overflow-hidden rounded-2xl bg-white
              shadow-[0_14px_34px_rgba(6,63,50,0.12)]
            "
                >
                  <Image
                    src={aboutTeamData.images[2]}
                    alt="Samtramy 3"
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="260px"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-5 pt-16">
                <div
                  className="
              relative h-[280px] overflow-hidden rounded-2xl bg-white
              shadow-[0_14px_34px_rgba(6,63,50,0.12)]
            "
                >
                  <Image
                    src={aboutTeamData.images[1]}
                    alt="Samtramy 2"
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="260px"
                  />
                </div>

                <div
                  className="
              relative h-[280px] overflow-hidden rounded-2xl bg-white
              shadow-[0_14px_34px_rgba(6,63,50,0.12)]
            "
                >
                  <Image
                    src={aboutTeamData.images[3]}
                    alt="Samtramy 4"
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="260px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-[560px]">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
              Giá trị thương hiệu
            </p>

            <h2
              className="
          text-[32px] font-bold leading-tight tracking-[-0.04em]
          text-[#063f32]
          md:text-[46px]
        "
            >
              {aboutTeamData.title}
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#6f827b]">
              {aboutTeamData.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-[0_10px_26px_rgba(6,63,50,0.08)]">
                <p className="text-[28px] font-bold text-[#087c43]">100%</p>
                <p className="mt-1 text-[13px] leading-5 text-[#6f827b]">
                  Sản phẩm chính hãng
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-[0_10px_26px_rgba(6,63,50,0.08)]">
                <p className="text-[28px] font-bold text-[#087c43]">24/7</p>
                <p className="mt-1 text-[13px] leading-5 text-[#6f827b]">
                  Hỗ trợ khách hàng
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-[0_10px_26px_rgba(6,63,50,0.08)]">
                <p className="text-[28px] font-bold text-[#087c43]">GT</p>
                <p className="mt-1 text-[13px] leading-5 text-[#6f827b]">
                  Phân phối linh hoạt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
