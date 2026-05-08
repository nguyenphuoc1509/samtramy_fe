import { LogOut } from "lucide-react";
import { useAuth } from "@/context/auth-context";

type ProfileSidebarProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { id: string; label: string; icon: React.ElementType }[];
};

export default function ProfileSidebar({
  activeTab,
  onTabChange,
  tabs,
}: ProfileSidebarProps) {
  const { user, logout } = useAuth();

  return (
    <aside>
      {/* User summary */}
      <div className="mb-4 flex items-center gap-3 rounded-xl bg-[#063f32] p-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5d36b] text-[18px] font-bold text-[#063f32]">
          {user?.name?.charAt(0).toUpperCase() ?? "U"}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-semibold text-white">
            {user?.name ?? "Người dùng"}
          </p>
          <p className="truncate text-[12px] text-white/60">
            {user?.email ?? "Chưa cập nhật email"}
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="rounded-xl bg-white shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`
                flex w-full items-center gap-3 px-4 py-3.5
                text-left text-[14px] transition-all duration-150
                ${active
                  ? "bg-[#f0f7f4] font-semibold text-[#087c43]"
                  : "text-[#6f827b] hover:bg-[#fafafa] hover:text-[#063f32]"}
                ${tab.id !== tabs[tabs.length - 1].id ? "border-b border-[#f0f0ee]" : ""}
              `}
            >
              <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
              {tab.label}
            </button>
          );
        })}

        {/* Logout */}
        <button
          type="button"
          onClick={logout}
          className="
            flex w-full items-center gap-3 px-4 py-3.5
            border-t border-[#f0f0ee]
            text-left text-[14px] text-[#c0392b]
            transition hover:bg-red-50
          "
        >
          <LogOut size={18} strokeWidth={1.8} />
          Đăng xuất
        </button>
      </nav>
    </aside>
  );
}
