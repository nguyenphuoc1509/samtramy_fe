import Link from "next/link";
import HomeBlogCard from "./HomeBlogCard";
import { homeBlogPosts } from "@/mock/home-blog.mock";

export default function BlogSection() {
  return (
    <section className="w-full bg-[#f5f5f3] py-10">
      <div className="site-container">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[34px] font-bold leading-tight text-[#063f32] md:text-[40px]">
            Bài viết
          </h2>

          <Link
            href="/blog"
            className="
              text-sm font-medium text-[#063f32]
              transition hover:text-[#087c43]
            "
          >
            Xem thêm &gt;&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {homeBlogPosts.map((post) => (
            <HomeBlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}