// src/components/products/ProductOrigin.tsx

import {
    CheckCircle2,
    Factory,
    Leaf,
    MapPin,
    ShieldCheck,
    Sparkles,
  } from "lucide-react";
  import { productOriginData } from "@/mock/product-orgin.mock";
  
  const highlightIcons = [Leaf, ShieldCheck, Sparkles];
  
  export default function ProductOrigin() {
    return (
      <section
        className="
          mt-10 overflow-hidden rounded-2xl bg-white
          shadow-[0_12px_32px_rgba(6,63,50,0.06)]
          ring-1 ring-[#e3ebe6]
        "
      >
        {/* Header */}
        <div className="border-b border-[#e3ebe6] bg-[#f8faf8] px-6 py-5 md:px-7">
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.26em] text-[#087c43]">
            Thông tin sản phẩm
          </p>
  
          <h2 className="text-[22px] font-bold leading-tight text-[#063f32] md:text-[24px]">
            Nguồn gốc, thành phần và hướng dẫn sử dụng
          </h2>
        </div>
  
        <div className="px-6 py-7 md:px-7">
          {/* Intro */}
          <div>
            <h3 className="mb-4 text-[19px] font-bold text-[#063f32]">
              Giới thiệu sản phẩm
            </h3>
  
            <div className="space-y-4 text-[15px] leading-8 text-[#6f827b]">
              <p>
                Sản phẩm được phát triển dựa trên định hướng gìn giữ giá trị tự
                nhiên, chất lượng nguyên liệu và trải nghiệm sử dụng cao cấp. Mỗi
                sản phẩm đều được lựa chọn từ những nguồn nguyên liệu phù hợp, trải
                qua quy trình kiểm tra và hoàn thiện nhằm mang đến sự an tâm cho
                người dùng trong quá trình sử dụng.
              </p>
  
              <p>
                Không chỉ chú trọng đến chất lượng bên trong, sản phẩm còn được đầu
                tư về hình thức bao bì, cách đóng gói và tính ứng dụng thực tế. Đây
                là lựa chọn phù hợp cho nhu cầu sử dụng hằng ngày, chăm sóc sức
                khỏe gia đình hoặc làm quà biếu trong các dịp quan trọng.
              </p>
            </div>
          </div>
  
          {/* Highlights */}
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {productOriginData.highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? Leaf;
  
              return (
                <div
                  key={item.title}
                  className="
                    rounded-xl bg-[#f8faf8] p-5
                    ring-1 ring-[#e3ebe6]
                  "
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#087c43] shadow-sm">
                    <Icon size={20} strokeWidth={2.1} />
                  </div>
  
                  <h4 className="mb-2 text-[15px] font-bold text-[#063f32]">
                    {item.title}
                  </h4>
  
                  <p className="text-[13px] leading-6 text-[#7b9189]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
  
          {/* Ingredients */}
          <div className="mt-8 border-t border-[#e3ebe6] pt-7">
            <h3 className="mb-4 text-[19px] font-bold text-[#063f32]">
              Thành phần
            </h3>
  
            <div className="space-y-4 text-[15px] leading-8 text-[#6f827b]">
              <p>
                Thành phần chính của sản phẩm được chọn lọc kỹ lưỡng, ưu tiên các
                nguyên liệu có nguồn gốc rõ ràng, chất lượng ổn định và phù hợp
                với định hướng sản phẩm cao cấp của Samtramy. Tùy theo từng dòng
                sản phẩm, thành phần có thể bao gồm các nguyên liệu tự nhiên,
                chiết xuất thực vật, thảo mộc hoặc các thành phần hỗ trợ tạo nên
                hương vị và giá trị đặc trưng.
              </p>
  
              <p>
                Quy trình phối trộn và hoàn thiện được thực hiện cẩn trọng để sản
                phẩm giữ được sự cân bằng giữa hương vị, màu sắc, hình thức và
                trải nghiệm sử dụng. Mục tiêu là tạo ra sản phẩm có chất lượng
                đồng đều, dễ sử dụng và phù hợp với nhiều nhóm khách hàng khác
                nhau.
              </p>
            </div>
          </div>
  
          {/* Notes */}
          <div className="mt-8 border-t border-[#e3ebe6] pt-7">
            <h3 className="mb-5 text-[19px] font-bold text-[#063f32]">
              Hướng dẫn sử dụng và bảo quản
            </h3>
  
            <div className="grid gap-3 md:grid-cols-2">
              {productOriginData.notes.map((note) => (
                <div
                  key={note}
                  className="
                    flex items-start gap-3 rounded-xl bg-[#f8faf8] px-4 py-4
                    ring-1 ring-[#edf2ee]
                  "
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={2.2}
                    className="mt-0.5 shrink-0 text-[#087c43]"
                  />
  
                  <p className="text-[14px] leading-6 text-[#6f827b]">{note}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Product Info */}
          <div className="mt-8 border-t border-[#e3ebe6] pt-7">
            <h3 className="mb-5 text-[19px] font-bold text-[#063f32]">
              Thông tin chi tiết
            </h3>
  
            <div className="overflow-hidden rounded-xl border border-[#e3ebe6]">
              {productOriginData.productInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`
                    grid gap-2 px-4 py-3 text-[14px]
                    md:grid-cols-[190px_1fr] md:px-5 md:py-4
                    ${index % 2 === 0 ? "bg-[#f8faf8]" : "bg-white"}
                  `}
                >
                  <span className="font-semibold text-[#063f32]">
                    {item.label}
                  </span>
  
                  <span className="leading-6 text-[#6f827b]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Responsibility */}
          <div className="mt-8 border-t border-[#e3ebe6] pt-7">
            <h3 className="mb-5 text-[19px] font-bold text-[#063f32]">
              Đơn vị chịu trách nhiệm và sản xuất
            </h3>
  
            <div className="space-y-4">
              {productOriginData.responsibilityInfo.map((group) => (
                <div
                  key={group.title}
                  className="
                    overflow-hidden rounded-xl border border-[#e3ebe6]
                    bg-[#f8faf8]
                  "
                >
                  <div className="flex items-center gap-2 border-b border-[#e3ebe6] bg-white px-4 py-3 md:px-5">
                    <Factory
                      size={17}
                      strokeWidth={2.2}
                      className="shrink-0 text-[#087c43]"
                    />
  
                    <h4 className="text-[15px] font-bold text-[#087c43]">
                      {group.title}
                    </h4>
                  </div>
  
                  <div className="divide-y divide-[#e3ebe6]">
                    {group.items.map((item) => (
                      <div
                        key={`${group.title}-${item.name}`}
                        className="bg-[#f8faf8] px-4 py-4 md:px-5"
                      >
                        <p className="text-[14px] font-bold leading-6 text-[#063f32]">
                          {item.name}
                        </p>
  
                        <div className="mt-2 flex items-start gap-2">
                          <MapPin
                            size={15}
                            strokeWidth={2.2}
                            className="mt-1 shrink-0 text-[#087c43]"
                          />
  
                          <p className="text-[14px] leading-6 text-[#6f827b]">
                            {item.address}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }