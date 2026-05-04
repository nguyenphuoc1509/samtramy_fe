// src/components/contact/ContactForm.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  return (
    <div>
      <h1 className="text-[34px] font-bold uppercase leading-tight text-[#063f32] md:text-[40px]">
        Liên hệ với chúng tôi
      </h1>

      <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#6f827b]">
        Nếu bạn có thắc mắc, cần tư vấn sản phẩm hoặc hỗ trợ đơn hàng, hãy gửi
        thông tin cho chúng tôi. Đội ngũ Samtramy sẽ liên hệ lại trong thời gian
        sớm nhất.
      </p>

      <form className="mt-8 max-w-[760px]">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
              Họ <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              className="
                h-11 rounded-md border-[#d8e0db] bg-white
                shadow-none focus-visible:border-[#087c43]
                focus-visible:ring-[#087c43]/15
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
              Tên <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              className="
                h-11 rounded-md border-[#d8e0db] bg-white
                shadow-none focus-visible:border-[#087c43]
                focus-visible:ring-[#087c43]/15
              "
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
            Địa chỉ Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            className="
              h-11 rounded-md border-[#d8e0db] bg-white
              shadow-none focus-visible:border-[#087c43]
              focus-visible:ring-[#087c43]/15
            "
          />
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
            Số điện thoại
          </label>
          <Input
            type="tel"
            className="
              h-11 max-w-[330px] rounded-md border-[#d8e0db] bg-white
              shadow-none focus-visible:border-[#087c43]
              focus-visible:ring-[#087c43]/15
            "
          />
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-[13px] font-semibold text-[#063f32]">
            Nội dung
          </label>
          <textarea
            placeholder="Nội dung ..."
            className="
              min-h-[140px] w-full resize-none rounded-md border border-[#d8e0db]
              bg-white px-4 py-3 text-sm text-[#063f32] outline-none
              transition-colors placeholder:text-[#9aa9a4]
              focus:border-[#087c43] focus:ring-4 focus:ring-[#087c43]/15
            "
          />
        </div>

        <label className="mt-5 flex items-start gap-2 text-[12px] leading-5 text-[#5f746d]">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-[#d8e0db] accent-[#087c43]"
          />
          <span>
            Tôi đồng ý nhận tin tức và cập nhật từ Samtramy. Khi gửi thông tin,
            tôi đã đọc và đồng ý với{" "}
            <Link
              href="/dieu-khoan-su-dung"
              className="font-medium text-[#087c43] underline underline-offset-2"
            >
              Điều khoản sử dụng
            </Link>
            .
          </span>
        </label>

        <Button
          type="submit"
          className="
            mt-8 h-11 cursor-pointer rounded-full bg-[#087c43]
            px-8 text-[13px] font-bold uppercase text-white
            transition-colors duration-200 hover:bg-[#0a6f3d]
          "
        >
          Gửi cho chúng tôi
        </Button>
      </form>
    </div>
  );
}