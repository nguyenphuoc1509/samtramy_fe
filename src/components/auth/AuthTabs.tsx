type AuthMode = "login" | "register";

type AuthTabsProps = {
  mode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
};

export default function AuthTabs({ mode, onModeChange }: AuthTabsProps) {
  const isLogin = mode === "login";

  return (
    <div
      className="
        relative mb-8 grid grid-cols-2 rounded-full
        border border-[#e3ebe5] bg-[#eef4ef]/95 p-1
        shadow-inner
      "
    >
      <span
        className={`
          absolute left-1 top-1 h-[44px] w-[calc(50%-4px)]
          rounded-full bg-[#063f32]
          shadow-[0_10px_25px_rgba(6,63,50,0.24)]
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isLogin ? "translate-x-0" : "translate-x-full"}
        `}
      />

      <button
        type="button"
        onClick={() => onModeChange("login")}
        className={`
          relative z-10 h-11 rounded-full text-sm font-bold
          transition-colors duration-300 cursor-pointer
          ${
            isLogin
              ? "text-[#f5d36b]"
              : "text-[#6b7b75] hover:text-[#063f32]"
          }
        `}
      >
        Đăng nhập
      </button>

      <button
        type="button"
        onClick={() => onModeChange("register")}
        className={`
          relative z-10 h-11 rounded-full text-sm font-bold
          transition-colors duration-300 cursor-pointer
          ${
            !isLogin
              ? "text-[#f5d36b]"
              : "text-[#6b7b75] hover:text-[#063f32]"
          }
        `}
      >
        Đăng ký
      </button>
    </div>
  );
}
