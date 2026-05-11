"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWinePopup } from "./WinePopupContext";

interface WineConsultButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children?: React.ReactNode;
  className?: string;
}

export function WineConsultButton({
  variant = "primary",
  children = "Nhận tư vấn ngay",
  className = "",
}: WineConsultButtonProps) {
  const { openPopup } = useWinePopup();

  const variants = {
    primary: {
      buttonClass:
        "h-11 cursor-pointer rounded-full bg-[#087c43] px-7 text-[14px] font-bold text-white shadow-[0_8px_22px_rgba(8,124,67,0.28)] hover:bg-[#0a6f3d]",
      glowColor: "rgba(8, 124, 67, 0.38)",
    },
    secondary: {
      buttonClass:
        "h-11 cursor-pointer rounded-full bg-[#f5d36b] px-7 text-[14px] font-bold text-[#063f32] hover:bg-[#ffe28a]",
      glowColor: "rgba(245, 211, 107, 0.42)",
    },
    outline: {
      buttonClass:
        "h-11 cursor-pointer rounded-full border border-[#d8c8ac] bg-white/85 px-7 text-[14px] font-bold uppercase text-[#7b3a25] backdrop-blur-md hover:bg-[#fff5e6]",
      glowColor: "rgba(123, 58, 37, 0.22)",
    },
  };

  const { buttonClass, glowColor } = variants[variant];

  return (
    <Button
      type="button"
      onClick={openPopup}
      className={cn(
        `
          relative cursor-pointer
          animate-[pulse-scale_1.5s_ease-in-out_infinite]
          ${buttonClass}
        `,
        className
      )}
      style={{
        boxShadow: `0 8px 22px ${glowColor}`,
      }}
    >
      <span className="flex items-center gap-2">
        {children}
        <ArrowRight
          size={17}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Button>
  );
}
