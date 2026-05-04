// src/components/blogs/BlogFeaturedGrid.tsx

import BlogCard from "./BlogCard";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
};

type BlogFeaturedGridProps = {
  posts: BlogPost[];
};

export default function BlogFeaturedGrid({ posts }: BlogFeaturedGridProps) {
  const mainPost = posts[0];
  const sidePostOne = posts[1];
  const sidePostTwo = posts[2];
  const widePost = posts[3];

  return (
    <section>
      <h2 className="mb-7 text-[22px] font-bold text-[#087c43]">
        Bài viết mới nhất
      </h2>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {mainPost && <BlogCard {...mainPost} variant="large" />}

        <div className="grid gap-7">
          {sidePostOne && (
            <BlogCard {...sidePostOne} variant="small-horizontal" />
          )}

          {sidePostTwo && (
            <BlogCard {...sidePostTwo} variant="small-horizontal" />
          )}
        </div>
      </div>

      {widePost && (
        <div className="mt-9 pt-9">
          <BlogCard {...widePost} variant="wide-horizontal" />
        </div>
      )}
    </section>
  );
}