// src/app/(site)/lien-he/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactMap from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Liên hệ | Samtramy",
  description:
    "Liên hệ với Samtramy để được tư vấn sản phẩm, hỗ trợ đơn hàng và giải đáp thông tin về Sâm Ngọc Linh.",
  alternates: {
    canonical: "/lien-he",
  },
  openGraph: {
    title: "Liên hệ | Samtramy",
    description:
      "Liên hệ với Samtramy để được tư vấn sản phẩm, hỗ trợ đơn hàng và giải đáp thông tin về Sâm Ngọc Linh.",
    url: "/lien-he",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full bg-[#f5f5f3] py-8">
      <div className="site-container">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-[13px]">
          <Link
            href="/"
            className="text-[#8a9b94] transition-colors hover:text-[#063f32]"
          >
            Trang chủ
          </Link>

          <span className="text-[#8a9b94]">&gt;</span>

          <span className="font-medium text-[#087c43]">Liên hệ</span>
        </div>

        {/* Contact content */}
        <section
          className="
            overflow-hidden rounded-2xl bg-white
            shadow-[0_12px_32px_rgba(6,63,50,0.06)]
            ring-1 ring-[#e3ebe6]
          "
        >
          <div className="grid gap-8 p-6 lg:grid-cols-[1fr_390px] lg:p-8">
            <ContactForm />
            <ContactInfoCard />
          </div>
        </section>

        <ContactMap />
      </div>
    </main>
  );
}