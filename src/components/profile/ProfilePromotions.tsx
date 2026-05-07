import { Check } from "lucide-react";
import { profilePromotions } from "@/mock/profile.mock";

export default function ProfilePromotions() {
  const availableCount = profilePromotions.filter((p) => !p.used).length;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-[#063f32]">
          Ưu đãi của tôi
        </h2>
        <span className="text-[13px] text-[#8a9b94]">
          {availableCount} mã khả dụng
        </span>
      </div>

      {profilePromotions.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-[14px] text-[#8a9b94]">
            Bạn chưa có mã ưu đãi nào.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {profilePromotions.map((promo) => (
            <div
              key={promo.code}
              className={`
                relative flex items-center gap-4 rounded-xl border p-4
                ${promo.used
                  ? "border-[#e8e8e8] bg-[#fafafa] opacity-60"
                  : "border-[#f5d36b]/50 bg-[#fffef5]"}
              `}
            >
              <div
                className={`
                  flex h-12 w-12 shrink-0 items-center justify-center
                  rounded-xl text-[18px] font-bold
                  ${promo.used
                    ? "bg-[#eeeee8] text-[#8a9b94]"
                    : "bg-[#f5d36b] text-[#063f32]"}
                `}
              >
                %
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-bold text-[#063f32]">
                    {promo.value}
                  </p>
                  {promo.used && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#eeeee8] px-2 py-0.5 text-[10px] font-semibold text-[#8a9b94]">
                      <Check size={10} /> Đã dùng
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-[12px] text-[#6f827b]">
                  {promo.desc}
                </p>
                <p className="mt-1 text-[11px] text-[#8a9b94]">
                  Hết hạn: {promo.expire}
                </p>
              </div>
              {!promo.used && (
                <button
                  type="button"
                  className="
                    shrink-0 rounded-full border border-[#f5d36b]
                    px-4 py-1.5 text-[12px] font-semibold
                    text-[#063f32] transition
                    hover:bg-[#f5d36b]/20
                  "
                >
                  Sao chép
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
