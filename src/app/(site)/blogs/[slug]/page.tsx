import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailContent from "@/components/blogs/BlogDetailContent";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { getBlogPost } from "@/mock/blog-detail.mock";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Không tìm thấy bài viết | Samtramy" };
  }

  return {
    title: `${post.title} | Samtramy`,
    description: post.excerpt,
    alternates: {
      canonical: `/bai-viet/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/bai-viet/${post.slug}`,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full bg-[#f5f5f3] py-8">
      <div className="site-container">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Bài viết", href: "/tin-tuc" },
            { label: post.title },
          ]}
          className="mb-6"
        />

        <BlogDetailContent post={post} />
      </div>
    </main>
  );
}
