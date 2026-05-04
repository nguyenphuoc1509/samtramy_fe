import { Input } from "@/components/ui/input";

type AuthFieldProps = {
  label: string;
  type: string;
  placeholder: string;
};

export default function AuthField({ label, type, placeholder }: AuthFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-[14px] font-semibold text-[#1e332d]">
        {label}
      </label>

      <Input
        type={type}
        placeholder={placeholder}
        className="
          h-12 rounded-2xl border border-[#dfe5e1]
          bg-[#f7f8f7] px-4
          text-sm text-[#063f32]
          shadow-none transition-all duration-300
          placeholder:text-[#9aa7a2]
          hover:border-[#b9c8c0] hover:bg-white
          focus-visible:border-[#087c43]
          focus-visible:bg-white
          focus-visible:ring-4
          focus-visible:ring-[#087c43]/12
        "
      />
    </div>
  );
}
