import Link from "next/link";
import { profileOrders, orderStatusConfig } from "@/mock/profile.mock";

export default function ProfileOrders() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-[#063f32]">
          Lịch sử mua hàng
        </h2>
        <span className="text-[13px] text-[#8a9b94]">
          {profileOrders.length} đơn hàng
        </span>
      </div>

      {profileOrders.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-[14px] text-[#8a9b94]">
            Bạn chưa có đơn hàng nào.
          </p>
          <Link
            href="/san-pham"
            className="mt-3 inline-block text-[13px] font-semibold text-[#087c43] transition hover:text-[#063f32] hover:underline"
          >
            Khám phá sản phẩm
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {profileOrders.map((order) => {
            const status = orderStatusConfig[order.status];
            return (
              <Link
                key={order.id}
                href={`/don-hang/${order.id}`}
                className="
                  block rounded-xl border border-[#eeeee8] p-4
                  transition hover:border-[#087c43] hover:shadow-[0_4px_16px_rgba(8,124,67,0.10)]
                "
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[14px] font-semibold text-[#063f32]">
                      {order.id}
                    </p>
                    <p className="mt-0.5 text-[12px] text-[#8a9b94]">
                      {order.date} · {order.items} sản phẩm
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] font-semibold text-[#c0392b]">
                      {order.total}
                    </p>
                    <span
                      className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${status.color}`}
                    >
                      {status.label}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {profileOrders.length > 0 && (
        <div className="mt-5 text-center">
          <Link
            href="/don-hang"
            className="text-[13px] font-semibold text-[#087c43] transition hover:text-[#063f32] hover:underline"
          >
            Xem tất cả đơn hàng
          </Link>
        </div>
      )}
    </div>
  );
}
