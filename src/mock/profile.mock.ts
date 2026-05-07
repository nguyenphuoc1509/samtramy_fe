export type ProfileOrder = {
  id: string;
  date: string;
  total: string;
  status: "Đã giao" | "Đang giao" | "Đang xử lý" | "Đã hủy";
  items: number;
};

export type ProfilePromotion = {
  code: string;
  value: string;
  desc: string;
  expire: string;
  used: boolean;
};

export const profileOrders: ProfileOrder[] = [
  {
    id: "DH-2026-001",
    date: "15/04/2026",
    total: "1.050.000 đ",
    status: "Đã giao",
    items: 2,
  },
  {
    id: "DH-2026-002",
    date: "02/05/2026",
    total: "850.000 đ",
    status: "Đang giao",
    items: 1,
  },
  {
    id: "DH-2026-003",
    date: "05/05/2026",
    total: "2.500.000 đ",
    status: "Đang xử lý",
    items: 3,
  },
];

export const profilePromotions: ProfilePromotion[] = [
  {
    code: "SAMTRAMY2026",
    value: "Giảm 10%",
    desc: "Giảm 10% cho đơn hàng từ 500.000 đ",
    expire: "31/12/2026",
    used: false,
  },
  {
    code: "QUASAM10",
    value: "Giảm 50.000 đ",
    desc: "Giảm 50.000 đ cho đơn hàng đầu tiên",
    expire: "31/06/2026",
    used: false,
  },
  {
    code: "SINHNHAT",
    value: "Giảm 15%",
    desc: "Giảm 15% vào ngày sinh nhật",
    expire: "31/12/2026",
    used: true,
  },
];

export const orderStatusConfig: Record<
  ProfileOrder["status"],
  { label: string; color: string }
> = {
  "Đã giao": { label: "Đã giao", color: "bg-[#e8f5e9] text-[#2e7d32]" },
  "Đang giao": { label: "Đang giao", color: "bg-[#fff8e1] text-[#f57f17]" },
  "Đang xử lý": { label: "Đang xử lý", color: "bg-[#e3f2fd] text-[#1565c0]" },
  "Đã hủy": { label: "Đã hủy", color: "bg-[#ffebee] text-[#c62828]" },
};
