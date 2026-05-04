import Image from "next/image";

export default function AuthLayout() {
  return (
    <div className="absolute inset-y-0 left-0 z-10 hidden w-[54%] px-10 py-10 md:block">
      <div className="max-w-[360px]">
        <div className="mb-7 inline-flex">
          <Image
            src="/images/logo.png"
            alt="Samtramy"
            width={128}
            height={128}
            className="h-auto w-[128px] drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
          />
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#f5d36b]">
          Premium Wellness
        </p>

        <h3 className="text-[58px] font-bold leading-[1.08] tracking-[-0.03em] text-white">
          Không gian mua sắm tinh hoa từ sâm
        </h3>

        <p className="mt-6 text-[16px] leading-8 text-white/88">
          Đăng nhập để theo dõi đơn hàng, lưu thông tin mua sắm và nhận các
          ưu đãi dành riêng cho khách hàng của Samtramy.
        </p>
      </div>
    </div>
  );
}
