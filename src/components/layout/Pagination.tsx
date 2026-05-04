import { ArrowLeft, ArrowRight } from "lucide-react";

type PaginationProps = {
  currentPage?: number;
  totalPages?: number;
};

export default function Pagination({
  currentPage = 1,
  totalPages = 10,
}: PaginationProps) {
  const pages = [1, 2, 3, "...", 8, 9, 10];

  return (
    <nav
      aria-label="Phân trang sản phẩm"
      className="mt-10 flex w-full items-center justify-between"
    >
      {/* Previous */}
      <button
        type="button"
        disabled={currentPage === 1}
        className="
          inline-flex h-9 items-center gap-2 rounded-md border border-[#cfd8d3]
          bg-white px-4 text-[12px] font-semibold text-[#063f32]
          transition hover:bg-[#eef4ef]
          disabled:cursor-not-allowed disabled:opacity-50
        "
      >
        <ArrowLeft size={14} />
        Trước
      </button>

      {/* Pages */}
      <div className="flex items-center gap-2">
        {pages.map((page, index) => {
          const isActive = page === currentPage;
          const isDots = page === "...";

          if (isDots) {
            return (
              <span
                key={`dots-${index}`}
                className="flex h-8 w-8 items-center justify-center text-[12px] text-[#9aa8a2]"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              type="button"
              aria-current={isActive ? "page" : undefined}
              className={`
                flex h-8 w-8 items-center justify-center rounded-md
                text-[12px] font-medium transition
                ${
                  isActive
                    ? "bg-[#eef4ef] text-[#063f32]"
                    : "text-[#7d8f88] hover:bg-[#eef4ef] hover:text-[#063f32]"
                }
              `}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        className="
          inline-flex h-9 items-center gap-2 rounded-md border border-[#cfd8d3]
          bg-white px-4 text-[12px] font-semibold text-[#063f32]
          transition hover:bg-[#eef4ef]
          disabled:cursor-not-allowed disabled:opacity-50
        "
      >
        Tiếp
        <ArrowRight size={14} />
      </button>
    </nav>
  );
}