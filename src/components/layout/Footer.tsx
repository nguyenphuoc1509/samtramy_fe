import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

const footerColumns = [
  {
    title: "CÔNG TY",
    links: [
      { label: "Giới thiệu", href: "/gioi-thieu" },
      { label: "Sản phẩm", href: "/products" },
      { label: "Bài viết", href: "/bai-viet" },
      { label: "Liên hệ", href: "/lien-he" },
    ],
  },
  {
    title: "HỖ TRỢ",
    links: [
      { label: "Chăm sóc khách hàng", href: "/ho-tro" },
      { label: "Chính sách giao hàng", href: "/chinh-sach-giao-hang" },
      { label: "Điều khoản sử dụng", href: "/dieu-khoan-su-dung" },
      { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
    ],
  },
  {
    title: "CÂU HỎI",
    links: [
      { label: "Tài khoản", href: "/tai-khoan" },
      { label: "Theo dõi đơn hàng", href: "/theo-doi-don-hang" },
      { label: "Đơn hàng", href: "/don-hang" },
      { label: "Thanh toán", href: "/thanh-toan" },
    ],
  },
  {
    title: "TÀI NGUYÊN",
    links: [
      { label: "Cẩm nang sản phẩm", href: "/cam-nang" },
      { label: "Hướng dẫn mua hàng", href: "/huong-dan-mua-hang" },
      { label: "Tin tức - Blog", href: "/bai-viet" },
      { label: "Video Samtramy", href: "/video" },
    ],
  },
];

const socialLinks = [
  {
    label: "Zalo",
    href: "#",
    icon: SiZalo,
    size: 13,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
    size: 12,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
    size: 13,
  },
  {
    label: "TikTok",
    href: "#",
    icon: FaTiktok,
    size: 12,
  },
  {
    label: "Youtube",
    href: "#",
    icon: FaYoutube,
    size: 13,
  },
];

const paymentMethods = [
  { src: "/images/payments/visa.png", alt: "Visa" },
  { src: "/images/payments/mastercard.png", alt: "Mastercard" },
  { src: "/images/payments/paypal.png", alt: "PayPal" },
  { src: "/images/payments/apple-pay.png", alt: "Apple Pay" },
  { src: "/images/payments/google-pay.png", alt: "Google Pay" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#063f32] px-4 pb-12 pt-[110px] text-[#f5d36b]">
      <div className="mx-auto max-w-[1280px]">
        <div
          className="
            grid gap-10
            md:grid-cols-[180px_1fr]
            lg:grid-cols-[210px_1fr]
          "
        >
          {/* Logo + Social */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Samtramy"
                width={100}
                height={100}
                className="h-auto w-[100px]"
              />
            </Link>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="
                      flex h-6 w-6 items-center justify-center rounded-full
                      bg-[#087c43] text-white
                      transition hover:bg-[#f5d36b] hover:text-[#063f32]
                    "
                  >
                    <Icon size={item.size} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer columns */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3
                  className="
                    mb-5 text-[11px] font-semibold uppercase
                    tracking-[0.28em] text-[#f5d36b]
                  "
                >
                  {column.title}
                </h3>

                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          text-[11px] text-[#d7d6a5]
                          transition hover:text-white
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-[#d7d6a5]/45" />

        <div className="mt-5 flex justify-end">
          <div className="flex items-center gap-2">
            {paymentMethods.map((item) => (
              <div
                key={item.alt}
                className="relative h-5 w-9 overflow-hidden rounded bg-white"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain p-1"
                  sizes="36px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}