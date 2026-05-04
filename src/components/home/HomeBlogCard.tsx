import Image from "next/image";
import Link from "next/link";

type HomeBlogCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function HomeBlogCard({
  title,
  description,
  image,
  href,
}: HomeBlogCardProps) {
  return (
    <Link href={href} className="group block">
      <article>
        <div
          className="
            relative h-[260px] overflow-hidden rounded-xl bg-[#e8ebe6]
            shadow-[0_10px_24px_rgba(6,63,50,0.08)]
          "
        >
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover transition duration-700 ease-out
              group-hover:scale-110
            "
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          <div
            className="
              absolute inset-0 bg-gradient-to-t from-[#063f32]/25 via-transparent to-transparent
              opacity-0 transition duration-500 group-hover:opacity-100
            "
          />
        </div>

        <div className="mt-5">
          <h3
            className="
              text-[20px] font-medium leading-tight text-[#063f32]
              transition group-hover:text-[#087c43]
            "
          >
            {title}
          </h3>

          <p className="mt-2 max-w-[320px] text-[16px] leading-7 text-[#8fa09a]">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}