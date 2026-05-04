type SubmitButtonProps = {
  loading: boolean;
  text: string;
  loadingText: string;
  align?: "left" | "right" | "full";
};

export default function SubmitButton({
  loading,
  text,
  loadingText,
  align = "right",
}: SubmitButtonProps) {
  const alignClass =
    align === "left"
      ? "md:mr-auto md:w-[220px]"
      : align === "right"
      ? "md:ml-auto md:w-[220px]"
      : "w-full";

  return (
    <button
      type="submit"
      disabled={loading}
      className={`
        mt-7 flex h-12 w-full items-center justify-center
        rounded-2xl bg-gradient-to-r from-[#063f32] to-[#0b8a48]
        text-sm font-bold text-white
        transition-all duration-300
        hover:-translate-y-0.5
        active:translate-y-0 active:scale-[0.98]
        disabled:cursor-not-allowed disabled:opacity-65
        cursor-pointer
        ${alignClass}
      `}
    >
      {loading ? loadingText : text}
    </button>
  );
}
