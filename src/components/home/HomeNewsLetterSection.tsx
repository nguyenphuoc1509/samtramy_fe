import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HomeNewsletterSection() {
  return (
    <section
      className="
        relative z-20 w-full px-4 py-0
        bg-[linear-gradient(to_bottom,#f5f5f3_0%,#f5f5f3_50%,#063f32_50%,#063f32_100%)]
      "
    >
      <div
        className="
          mx-auto grid w-full max-w-[1120px] items-center gap-6
          rounded-2xl bg-[#057236] px-8 py-7
          shadow-[0_18px_40px_rgba(0,0,0,0.16)]
          md:grid-cols-[1fr_360px]
          lg:px-12
        "
      >
        <h2
          className="
            text-[26px] font-bold leading-[1.08] text-white
            md:text-[30px]
          "
        >
          Đăng ký nhận thông báo <br />
          mới nhất
        </h2>

        <form className="grid gap-3">
          <div className="relative">
            <Mail
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <Input
              type="email"
              placeholder="Nhập email của bạn"
              aria-label="Nhập email của bạn"
              className="
                h-10 rounded-full border-0 bg-white pl-9 pr-4
                text-xs text-gray-700 shadow-none
                placeholder:text-gray-400
                focus-visible:border-0 focus-visible:ring-0
              "
            />
          </div>

          <button
            type="submit"
            className="
              h-10 rounded-full bg-white text-xs font-semibold text-[#063f32]
              transition duration-300 hover:bg-[#f5d36b] cursor-pointer
            "
          >
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  );
}