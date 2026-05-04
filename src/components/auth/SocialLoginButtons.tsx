import { GoogleIcon, FacebookIcon } from "./SocialIcons";

type SocialLoginButtonsProps = {
  loading: boolean;
  onSocialLogin: (provider: "Google" | "Facebook") => void;
};

export default function SocialLoginButtons({
  loading,
  onSocialLogin,
}: SocialLoginButtonsProps) {
  return (
    <div className="pt-1">
      <div className="mb-5 flex items-center gap-4">
        <span className="h-px flex-1 bg-[#e1e7e3]" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a9992]">
          Hoặc đăng nhập bằng
        </span>
        <span className="h-px flex-1 bg-[#e1e7e3]" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          disabled={loading}
          onClick={() => onSocialLogin("Google")}
          className="
            group flex h-12 items-center justify-center gap-3
            rounded-2xl border border-[#dde5e0] bg-white
            text-sm font-bold text-[#263b34]
            transition-all duration-300
            hover:-translate-y-0.5 hover:border-[#c8d6ce]
            active:translate-y-0 active:scale-[0.98]
            disabled:cursor-not-allowed disabled:opacity-60
            cursor-pointer
          "
        >
          <GoogleIcon />
          Google
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={() => onSocialLogin("Facebook")}
          className="
            group flex h-12 items-center justify-center gap-3
            rounded-2xl border border-[#d9e3f5] bg-[#f7faff]
            text-sm font-bold text-[#1877f2]
            transition-all duration-300
            hover:-translate-y-0.5 hover:border-[#bcd0f5]
            hover:bg-white
            active:translate-y-0 active:scale-[0.98]
            disabled:cursor-not-allowed disabled:opacity-60
            cursor-pointer
          "
        >
          <FacebookIcon />
          Facebook
        </button>
      </div>
    </div>
  );
}
