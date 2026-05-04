"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import BlogCard from "@/components/blogs/BlogCard";
import { recentBlogPosts } from "@/mock/blog-posts.mock";
import { type BlogDetailPost } from "@/mock/blog-detail.mock";
import { getBlogHref } from "@/lib/blog";

type BlogDetailContentProps = {
  post: BlogDetailPost;
};

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const relatedPosts = recentBlogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="site-container">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article>
            <header className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-[#f3f8f5] px-3 py-1 text-[12px] font-semibold text-[#087c43]">
                  <Tag size={11} strokeWidth={2.5} />
                  {post.category}
                </span>
              </div>

              <h1 className="text-[28px] font-bold leading-tight text-[#063f32] md:text-[34px]">
                {post.title}
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#526861]">
                {post.excerpt}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-[13px] text-[#8a9b94]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} strokeWidth={2} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} strokeWidth={2} />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="font-semibold text-[#063f32]">{post.author}</span>
                </span>
              </div>
            </header>

            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-[#e8e8e5]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            <div
              className="blog-content prose-custom"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <aside className="space-y-8 lg:pt-16">
            <div className="rounded-xl border border-[#dfe7e2] bg-white p-5 shadow-[0_2px_10px_rgba(6,63,50,0.05)]">
              <h2 className="mb-5 text-[17px] font-bold text-[#063f32]">
                Bài viết liên quan
              </h2>
              <div className="space-y-4">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.id}
                    href={getBlogHref(p.slug)}
                    className="group grid grid-cols-[80px_1fr] gap-3"
                  >
                    <div className="relative h-[70px] overflow-hidden rounded-lg bg-[#f7f7f7]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="line-clamp-2 text-[13px] font-semibold leading-snug text-[#063f32] transition-colors group-hover:text-[#087c43]">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-[#8a9b94]">{p.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#dfe7e2] bg-white p-5 shadow-[0_2px_10px_rgba(6,63,50,0.05)]">
              <h2 className="mb-4 text-[17px] font-bold text-[#063f32]">
                Sản phẩm nổi bật
              </h2>
              <div className="space-y-3">
                {relatedPosts.slice(0, 2).map((p) => (
                  <Link
                    key={p.id}
                    href={getBlogHref(p.slug)}
                    className="group flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3f8f5] text-[#087c43]">
                      <ArrowLeft
                        size={14}
                        strokeWidth={2.5}
                        className="rotate-180"
                      />
                    </div>
                    <span className="text-[13px] font-medium text-[#063f32] transition-colors group-hover:text-[#087c43]">
                      {p.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
  );
}
