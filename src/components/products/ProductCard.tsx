import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  slug: string;
  name: string;
  category: string;
  image: string;
  price: string;
  oldPrice?: string;
};

export default function ProductCard({
  slug,
  name,
  category,
  image,
  price,
  oldPrice,
}: ProductCardProps) {
  return (
    <Link
      href={`/san-pham/${slug}`}
      className="
        group relative block rounded-xl bg-white p-2
        shadow-[0_3px_8px_rgba(0,0,0,0.22)]
        transition duration-300 ease-out
        hover:shadow-[0_18px_35px_rgba(6,63,50,0.18)]
      "
    >
      <div className="relative h-[245px] overflow-hidden rounded-lg bg-[#f7f7f7]">
        <Image
          src={image}
          alt={name}
          fill
          className="
            object-contain p-4 transition duration-500 ease-out
            group-hover:scale-110
          "
          sizes="(max-width: 768px) 50vw, 260px"
        />
      </div>

      <div className="px-3 pb-4 pt-4 text-center">
        <p className="mb-2 text-[10px] font-medium text-[#087c43]">
          {category}
        </p>

        <h3
          className="
            mx-auto line-clamp-3 max-w-[190px]
            text-[17px] font-semibold leading-[1.05] text-[#073f35]
          "
        >
          {name}
        </h3>

        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-[13px] font-bold text-red-500">{price}</span>

          {oldPrice && (
            <span className="text-[11px] text-gray-400 line-through">
              {oldPrice}
            </span>
          )}
        </div>
      </div>

      {/* Add to cart icon */}
      <span
        className="
          absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center
          rounded-full text-[#087c43]
          transition-colors duration-200
          hover:bg-[#087c43] hover:text-white
        "
        aria-hidden="true"
      >
        <ShoppingCart size={17} strokeWidth={2.2} />
      </span>
    </Link>
  );
}