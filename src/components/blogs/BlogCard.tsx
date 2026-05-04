// src/components/blogs/BlogCard.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getBlogHref } from "@/lib/blog";

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  variant?: "default" | "large" | "small-horizontal" | "wide-horizontal";
};

export default function BlogCard({
  title,
  excerpt,
  date,
  image,
  slug,
  variant = "default",
}: BlogCardProps) {
  const href = getBlogHref(slug);
  if (variant === "small-horizontal") {
    return (
      <Link href={href} className="group grid grid-cols-[270px_1fr] gap-5">
        <div className="relative h-[170px] overflow-hidden bg-white">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="220px"
          />
        </div>

        <article className="pt-1">
          <p className="mb-3 text-[11px] font-semibold text-[#063f32]">
            {date}
          </p>

          <h3 className="line-clamp-2 text-[17px] font-bold leading-snug text-[#087c43] transition-colors group-hover:text-[#F5D36B]">
            {title}
          </h3>

          <p className="mt-2 line-clamp-3 text-[13px] leading-5 text-[#526861]">
            {excerpt}
          </p>
        </article>
      </Link>
    );
  }

  if (variant === "wide-horizontal") {
    return (
      <Link href={href} className="group grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative h-[245px] overflow-hidden bg-white">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="560px"
          />
        </div>

        <article>
          <p className="mb-3 text-[11px] font-semibold text-[#063f32]">
            {date}
          </p>

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[22px] font-bold leading-snug text-[#087c43] transition-colors group-hover:text-[#F5D36B]">
              {title}
            </h3>

            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-[#087c43]"
            />
          </div>

          <p className="mt-3 max-w-[640px] text-[14px] leading-6 text-[#526861]">
            {excerpt}
          </p>
        </article>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block">
      <article>
        <div
          className={`
            relative overflow-hidden bg-white
            ${variant === "large" ? "h-[270px]" : "h-[245px]"}
          `}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes={variant === "large" ? "560px" : "33vw"}
          />
        </div>

        <div className="mt-5">
          <p className="mb-3 text-[11px] font-semibold text-[#063f32]">
            {date}
          </p>

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[20px] font-bold leading-snug text-[#087c43] transition-colors group-hover:text-[#F5D36B]">
              {title}
            </h3>

            <ArrowUpRight
              size={17}
              className="mt-1 shrink-0 text-[#087c43]"
            />
          </div>

          <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-[#526861]">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}