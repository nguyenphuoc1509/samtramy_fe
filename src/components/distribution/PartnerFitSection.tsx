import { LucideIcon } from "lucide-react";

import { partnerTypes } from "./data";

interface PartnerTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function PartnerTypeCard({ icon: Icon, title, description }: PartnerTypeCardProps) {
  return (
    <article
      className="
        flex min-h-[230px] flex-col rounded-3xl bg-white p-5
        shadow-[0_10px_28px_rgba(6,63,50,0.06)]
      "
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef6f1] text-[#087c43]">
        <Icon size={20} strokeWidth={2.1} />
      </div>

      <h3 className="min-h-[44px] text-[16px] font-bold text-[#063f32]">
        {title}
      </h3>

      <p className="mt-2 flex-1 text-[13px] leading-6 text-[#6f827b]">
        {description}
      </p>
    </article>
  );
}

export function PartnerFitSection() {
  return (
    <section className="bg-[#eef6f1] py-20 md:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
            Đối tác phù hợp
          </p>

          <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
            Samtramy phù hợp với nhiều mô hình kinh doanh
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnerTypes.map((item) => (
            <PartnerTypeCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
