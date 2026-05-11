import Image from "next/image";

export function WineHero() {
  return (
    <section
      id="wine-hero"
      className="relative min-h-[720px] overflow-hidden bg-[#f6efe2]"
    >
      <Image
        src="/images/banners/hero-2.jpg"
        alt="Rượu Sâm Ngọc Linh Samtramy"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div
        className="
          absolute inset-x-0 bottom-0 h-[180px]
          bg-white/10 backdrop-blur-[4px]
          [mask-image:linear-gradient(to_top,black_30%,transparent_100%)]
        "
      />

      <div className="absolute inset-x-0 bottom-0 h-[130px] bg-gradient-to-t from-[#e7eee4] via-[#e7eee4]/65 to-transparent" />

      <div className="absolute inset-x-0 bottom-9 z-10 flex flex-wrap justify-center gap-4 px-4">
        <a
          href="#wine-consult-popup"
          className="
            inline-flex h-12 items-center justify-center rounded-full
            bg-gradient-to-r from-[#ff7a3d] to-[#e9235f]
            px-10 text-[15px] font-bold uppercase text-white
            shadow-[0_14px_28px_rgba(229,35,95,0.32)]
            transition duration-200 hover:-translate-y-1
            hover:shadow-[0_18px_34px_rgba(229,35,95,0.38)]
          "
        >
          Tư vấn ngay
        </a>

        <a
          href="#wine-products"
          className="
            inline-flex h-12 items-center justify-center rounded-full
            border border-[#d8c8ac] bg-white/85
            px-10 text-[15px] font-bold uppercase text-[#7b3a25]
            shadow-[0_10px_24px_rgba(91,47,17,0.12)]
            backdrop-blur-md
            transition duration-200 hover:-translate-y-1 hover:bg-[#fff5e6]
          "
        >
          Xem các sản phẩm
        </a>
      </div>
    </section>
  );
}