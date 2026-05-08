// src/components/home/HomeExtractionProcessSection.tsx

import Image from "next/image";
import {
  Leaf,
  Droplets,
  FlaskConical,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const extractionSteps = [
  {
    icon: Leaf,
    title: "Tuyển chọn nguyên liệu",
    description:
      "Sâm Ngọc Linh được chọn lọc kỹ lưỡng, ưu tiên nguồn nguyên liệu đạt chất lượng và có đặc tính tự nhiên ổn định.",
  },
  {
    icon: Droplets,
    title: "Làm sạch và sơ chế",
    description:
      "Nguyên liệu được làm sạch, phân loại và xử lý ban đầu nhằm giữ lại giá trị đặc trưng trước khi đưa vào quy trình chiết xuất.",
  },
  {
    icon: FlaskConical,
    title: "Chiết xuất tinh chất",
    description:
      "Quá trình chiết xuất được kiểm soát để thu nhận tinh chất từ sâm, hướng đến việc giữ trọn hương vị và giá trị tự nhiên.",
  },
  {
    icon: ShieldCheck,
    title: "Kiểm soát chất lượng",
    description:
      "Từng công đoạn được theo dõi nhằm đảm bảo sản phẩm có độ ổn định, an toàn và phù hợp với tiêu chuẩn sử dụng.",
  },
  {
    icon: PackageCheck,
    title: "Hoàn thiện sản phẩm",
    description:
      "Tinh chất sau chiết xuất được ứng dụng vào từng dòng sản phẩm, đóng gói chỉn chu trước khi đến tay khách hàng.",
  },
];

export default function HomeExtractionProcessSection() {
  return (
    <section className="w-full bg-[#e7eee4] md:py-24">
      <div className="site-container">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-[820px] text-center">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
            Quy trình chiết xuất
          </p>

          <h2
            className="
              text-[34px] font-bold leading-tight tracking-[-0.04em]
              text-[#063f32] md:text-[46px]
            "
          >
            Giữ trọn giá trị tự nhiên từ Sâm Ngọc Linh
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-8 text-[#6f827b]">
            Samtramy chú trọng từng công đoạn trong quá trình xử lý và chiết
            xuất nhằm giữ lại hương vị, đặc tính và giá trị đặc trưng của Sâm
            Ngọc Linh trong các dòng sản phẩm tiêu dùng.
          </p>
        </div>

        {/* Main visual */}
        <div
          className="
            overflow-hidden rounded-[34px] bg-white
            shadow-[0_18px_45px_rgba(6,63,50,0.08)]
            ring-1 ring-[#e3ebe6]
          "
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* Image */}
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
              <Image
                src="/images/ngoc-linh/sam-ngoc-linh-forest.jpg"
                alt="Quy trình chiết xuất Sâm Ngọc Linh"
                fill
                className="object-cover"
                sizes="720px"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#063f32]/45" />

              <div
                className="
                  absolute bottom-6 left-6 right-6 max-w-[430px]
                  rounded-3xl bg-white/90 p-5
                  shadow-[0_12px_28px_rgba(6,63,50,0.12)]
                  ring-1 ring-white/60 backdrop-blur-md
                "
              >
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#087c43]">
                  Sâm Ngọc Linh
                </p>

                <h3 className="mt-2 text-[24px] font-bold leading-tight text-[#063f32]">
                  Từ nguyên liệu quý đến tinh chất trong từng sản phẩm
                </h3>
              </div>
            </div>

            {/* Intro panel */}
            <div
              className="
                flex flex-col justify-center bg-[#eef6f1]
                p-7 md:p-10 lg:p-12
              "
            >
              <p className="mb-3 text-[13px] font-bold tracking-[0.1em] text-[#087c43]">
                Samtramy
              </p>

              <h3
                className="
                  text-[30px] font-bold leading-tight tracking-[-0.035em]
                  text-[#063f32] md:text-[40px]
                "
              >
                Tinh chất được tạo nên từ sự chọn lọc và kiểm soát chỉn chu
              </h3>

              <p className="mt-5 text-[15px] leading-8 text-[#6f827b]">
                Mỗi dòng sản phẩm đều bắt đầu từ nguyên liệu được tuyển chọn,
                sau đó đi qua quy trình sơ chế, chiết xuất và kiểm soát chất
                lượng trước khi hoàn thiện.
              </p>

            </div>
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {extractionSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="
                  flex min-h-[230px] flex-col rounded-3xl bg-white p-5
                  shadow-[0_10px_26px_rgba(6,63,50,0.05)]
                  ring-1 ring-[#e3ebe6]
                  transition duration-200
                  hover:-translate-y-1 hover:bg-[#fbfdfb]
                  hover:shadow-[0_16px_34px_rgba(6,63,50,0.08)]
                "
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center rounded-2xl
                      bg-[#eef6f1] text-[#087c43]
                    "
                  >
                    <Icon size={20} strokeWidth={2.1} />
                  </div>

                  <span className="text-[24px] font-bold text-[#f5d36b]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="min-h-[48px] text-[17px] font-bold leading-snug text-[#063f32]">
                  {step.title}
                </h3>

                <p className="mt-3 flex-1 text-[13px] leading-6 text-[#6f827b]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}