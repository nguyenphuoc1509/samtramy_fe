// src/components/contact/ContactInfoCard.tsx

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const contactInfo = [
  {
    title: "TRỤ SỞ CHÍNH",
    address: "4/1/8 Hoàng Việt, phường Tân Sơn Nhất, TP. HCM, Việt Nam",
    phone: "(+025) 3886 25 16",
    email: "hello@samtramy.vn",
  },
  {
    title: "CHI NHÁNH BÌNH CHÁNH",
    address: "2079 Trần Văn Giàu, xã Bình Lợi, TP. HCM, Việt Nam",
    phone: "(+025) 3886 25 16",
    email: "contact@samtramy.vn",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "Email",
    href: "mailto:hello@samtramy.vn",
    icon: Mail,
  },
  {
    label: "Youtube",
    href: "#",
    icon: FaYoutube,
  },
];

export default function ContactInfoCard() {
  return (
    <aside className="space-y-4">
      <div className="rounded-2xl bg-[#eef1f7] p-7">
        <div className="space-y-8">
          {contactInfo.map((item) => (
            <div key={item.title}>
              <h2 className="text-[22px] font-medium uppercase text-[#6f747d]">
                {item.title}
              </h2>

              <div className="mt-4 space-y-3">
                <p className="flex items-start gap-2 text-[13px] leading-6 text-[#1f302b]">
                  <MapPin size={15} className="mt-1 shrink-0 text-[#087c43]" />
                  <span>{item.address}</span>
                </p>

                <p className="flex items-center gap-2 text-[13px] font-semibold text-[#1f302b]">
                  <Phone size={15} className="text-[#087c43]" />
                  {item.phone}
                </p>

                <Link
                  href={`mailto:${item.email}`}
                  className="
                    flex items-center gap-2 text-[13px] font-medium
                    text-[#087c43] underline underline-offset-2
                    transition-colors hover:text-[#063f32]
                  "
                >
                  <Mail size={15} />
                  {item.email}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="
                  flex h-9 w-9 items-center justify-center rounded-full
                  bg-white text-[#063f32] transition-colors duration-200
                  hover:bg-[#087c43] hover:text-white
                "
              >
                <Icon size={16} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="relative h-[330px] overflow-hidden rounded-2xl bg-[#e8ebe6]">
        <Image
          src="/images/ngoc-linh/legend-mountain.jpg"
          alt="Liên hệ Samtramy"
          fill
          className="object-cover"
          sizes="390px"
        />
      </div>
    </aside>
  );
}