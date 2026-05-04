// src/components/blogs/BlogGrid.tsx

import BlogCard from "./BlogCard";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
};

type BlogGridProps = {
  posts: BlogPost[];
};

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="mt-10 pt-9">
      <h2 className="mb-7 text-[22px] font-bold text-[#087c43]">
        Tất cả bài viết
      </h2>

      <div className="grid gap-x-8 gap-y-11 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}