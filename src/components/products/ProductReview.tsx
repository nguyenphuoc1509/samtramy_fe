// src/components/products/ProductReviews.tsx

import { Star } from "lucide-react";

type Review = {
  id: number;
  name: string;
  rating: number;
  content: string;
  date: string;
};

type ProductReviewsProps = {
  reviews: Review[];
};

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[22px] font-bold text-[#063f32]">
          Đánh giá sản phẩm
          <span className="ml-2 text-sm font-medium text-[#8a9b94]">
            ({reviews.length})
          </span>
        </h2>

        <button className="rounded-full bg-[#087c43] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#063f32]">
          Viết đánh giá
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="
              rounded-xl border border-[#b8d8c4] bg-white p-5
              shadow-[0_10px_24px_rgba(6,63,50,0.05)]
            "
          >
            <div className="mb-3 flex items-center gap-1 text-[#f5b301]">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} size={15} fill="currentColor" />
              ))}
            </div>

            <h3 className="text-[15px] font-bold text-[#063f32]">
              {review.name}
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#6f827b]">
              {review.content}
            </p>

            <p className="mt-4 text-[12px] text-[#9aa8a2]">{review.date}</p>
          </article>
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <button
          type="button"
          className="
            rounded-full border border-[#087c43] px-6 py-2 text-sm font-semibold
            text-[#087c43] transition hover:bg-[#087c43] hover:text-white cursor-pointer
          "
        >
          Xem thêm đánh giá
        </button>
      </div>
    </section>
  );
}