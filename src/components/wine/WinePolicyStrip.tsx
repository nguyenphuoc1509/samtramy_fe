import type { LucideIcon } from "lucide-react";
import { winePolicies } from "./wine-data";

interface PolicyItemProps {
  icon: LucideIcon;
  label: string;
}

function PolicyItem({ icon: Icon, label }: PolicyItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f1] text-[#087c43]">
        <Icon size={20} strokeWidth={2.1} />
      </div>

      <p className="text-[14px] font-semibold text-[#063f32]">{label}</p>
    </div>
  );
}

export function WinePolicyStrip() {
  return (
    <section className="relative -mt-6 z-10">
      <div className="site-container">
        <div
          className="
            grid gap-4 rounded-[28px] bg-white p-5
            shadow-[0_18px_45px_rgba(6,63,50,0.1)]
            ring-1 ring-[#e3ebe6]
            sm:grid-cols-2 lg:grid-cols-4
          "
        >
          {winePolicies.map((item) => (
            <PolicyItem key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
