"use client";

import { policies } from "./data";
import { AnimateOnScroll, StaggerContainer, staggerItemVariants } from "./AnimateOnScroll";
import { motion } from "framer-motion";

interface PolicyRowProps {
  type: string;
  suitable: string;
  support: string;
  isLast: boolean;
}

function PolicyRow({ type, suitable, support, isLast }: PolicyRowProps) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={`
        grid gap-4 px-6 py-6 text-[14px]
        md:grid-cols-[0.8fr_1fr_1.2fr]
        ${!isLast ? "border-b border-[#e3ebe6]" : ""}
      `}
    >
      <div>
        <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#087c43] md:hidden">
          Mô hình đối tác
        </p>
        <p className="font-bold text-[#063f32]">{type}</p>
      </div>

      <div>
        <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#087c43] md:hidden">
          Phù hợp với
        </p>
        <p className="leading-7 text-[#6f827b]">{suitable}</p>
      </div>

      <div>
        <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#087c43] md:hidden">
          Hỗ trợ chính
        </p>
        <p className="leading-7 text-[#6f827b]">{support}</p>
      </div>
    </motion.div>
  );
}

export function PolicySection() {
  return (
    <section className="py-20 md:py-24">
      <div className="site-container">
        <div className="mb-10 max-w-[760px]">
          <AnimateOnScroll animation="fadeUp">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-[#087c43]">
              Chính sách hợp tác
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.08}>
            <h2 className="text-[34px] font-bold leading-tight tracking-[-0.04em] text-[#063f32] md:text-[46px]">
              Linh hoạt theo quy mô và mục tiêu của từng đối tác
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.14}>
            <p className="mt-5 text-[15px] leading-8 text-[#6f827b]">
              Chính sách cụ thể sẽ được tư vấn theo khu vực, mô hình kinh
              doanh, sản lượng dự kiến và danh mục sản phẩm đối tác quan tâm.
            </p>
          </AnimateOnScroll>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl bg-white shadow-[0_12px_32px_rgba(6,63,50,0.06)] ring-1 ring-[#e3ebe6]"
        >
          <div className="hidden grid-cols-[0.8fr_1fr_1.2fr] bg-[#063f32] text-[14px] font-bold text-white md:grid">
            <div className="px-6 py-5">Mô hình đối tác</div>
            <div className="px-6 py-5">Phù hợp với</div>
            <div className="px-6 py-5">Hỗ trợ chính</div>
          </div>

          <StaggerContainer staggerDelay={0.1} delayChildren={0.15}>
            {policies.map((policy, index) => (
              <PolicyRow
                key={policy.type}
                type={policy.type}
                suitable={policy.suitable}
                support={policy.support}
                isLast={index === policies.length - 1}
              />
            ))}
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  );
}
