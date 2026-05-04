// src/app/(site)/bai-viet/page.tsx

import type { Metadata } from "next";
import BlogFeaturedGrid from "@/components/blogs/BlogFeaturedGrid";
import BlogGrid from "@/components/blogs/BlogGrid";
import { allBlogPosts, recentBlogPosts } from "@/mock/blog-posts.mock";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Bài viết | Samtramy",
  description:
    "Cập nhật các bài viết về Sâm Ngọc Linh, sản phẩm sức khỏe, quà biếu và câu chuyện thương hiệu Samtramy.",
  alternates: {
    canonical: "/bai-viet",
  },
  openGraph: {
    title: "Bài viết | Samtramy",
    description:
      "Cập nhật các bài viết về Sâm Ngọc Linh, sản phẩm sức khỏe, quà biếu và câu chuyện thương hiệu Samtramy.",
    url: "/bai-viet",
  },
};

export default function BlogPage() {
  return (
    <main className="w-full bg-[#f5f5f3] py-8">
      <div className="site-container max-w-[1280px]">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Bài viết" },
          ]}
        />
        <BlogFeaturedGrid posts={recentBlogPosts} />
        <BlogGrid posts={allBlogPosts} />
      </div>
    </main>
  );
}