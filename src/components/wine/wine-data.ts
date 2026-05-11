import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Truck,
  PackageCheck,
  Headset,
  Leaf,
  Wine,
  Gift,
  ShieldCheck,
} from "lucide-react";

export interface WinePolicy {
  icon: LucideIcon;
  label: string;
}

export interface WineHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WineOccasion {
  title: string;
  description: string;
}

export interface WineProduct {
  name: string;
  image: string;
  description: string;
  suitable: string;
}

export const winePolicies: WinePolicy[] = [
  {
    icon: BadgeCheck,
    label: "Cam kết chính hãng",
  },
  {
    icon: Truck,
    label: "Hỗ trợ giao hàng",
  },
  {
    icon: PackageCheck,
    label: "Đóng gói chỉn chu",
  },
  {
    icon: Headset,
    label: "Tư vấn quà biếu",
  },
];

export const wineHighlights: WineHighlight[] = [
  {
    icon: Leaf,
    title: "Nguồn nguyên liệu có giá trị bản địa",
    description:
      "Sản phẩm khai thác câu chuyện Sâm Ngọc Linh và vùng Trà My, tạo sự khác biệt khi dùng làm quà biếu hoặc trưng bày tại cửa hàng.",
  },
  {
    icon: Wine,
    title: "Hương vị êm, hậu vị sâu",
    description:
      "Dòng rượu hướng đến trải nghiệm thưởng thức chỉn chu, phù hợp trong những buổi gặp gỡ, tiếp khách hoặc dịp đặc biệt.",
  },
  {
    icon: Gift,
    title: "Thiết kế sang trọng",
    description:
      "Bao bì cao cấp, chỉn chu về hình thức, phù hợp làm quà tặng người thân, đối tác, khách hàng thân thiết và doanh nghiệp.",
  },
  {
    icon: ShieldCheck,
    title: "Nguồn gốc minh bạch",
    description:
      "Samtramy chú trọng thông tin sản phẩm rõ ràng, giúp khách hàng và đối tác yên tâm khi lựa chọn.",
  },
  {
    icon: PackageCheck,
    title: "Dễ trưng bày tại điểm bán",
    description:
      "Hình thức sản phẩm phù hợp đặt tại cửa hàng quà biếu, đặc sản, thực phẩm cao cấp hoặc showroom sản phẩm địa phương.",
  },
  {
    icon: Headset,
    title: "Tư vấn combo theo ngân sách",
    description:
      "Đội ngũ Samtramy hỗ trợ gợi ý combo rượu sâm, quà biếu và số lượng phù hợp với từng mục đích sử dụng.",
  },
];

export const wineReasons: string[] = [
  "Sản phẩm chính hãng từ Samtramy.",
  "Bao bì chỉn chu, phù hợp biếu tặng.",
  "Có thể tư vấn combo theo ngân sách.",
  "Phù hợp khách hàng cá nhân, doanh nghiệp và cửa hàng quà biếu.",
  "Hỗ trợ giao hàng, tư vấn đóng gói và lựa chọn sản phẩm.",
  "Dễ kết hợp với các sản phẩm quà biếu khác của Samtramy.",
];

export const wineOccasions: WineOccasion[] = [
  {
    title: "Quà biếu Tết",
    description:
      "Phù hợp làm quà tặng trang trọng trong dịp Tết, lễ cuối năm hoặc tri ân khách hàng.",
  },
  {
    title: "Quà tặng đối tác",
    description:
      "Thể hiện sự trân trọng trong các dịp gặp gỡ, ký kết, chăm sóc quan hệ kinh doanh.",
  },
  {
    title: "Tiếp khách quan trọng",
    description:
      "Phù hợp dùng trong những buổi tiếp khách thân mật, gặp gỡ đối tác hoặc tiệc gia đình.",
  },
  {
    title: "Trưng bày cửa hàng",
    description:
      "Dễ tạo điểm nhấn tại cửa hàng đặc sản, quà biếu, thực phẩm cao cấp hoặc showroom.",
  },
];

export const wineProducts: Array<{
  slug: string;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
}> = [
  {
    slug: "ruou-sam-ngoc-linh-500ml",
    name: "Rượu Sâm Ngọc Linh 500ml",
    image: "/images/products/product-1.png",
    price: "1.050.000đ",
    oldPrice: "1.250.000đ",
  },
  {
    slug: "ruou-sam-ngoc-linh-hop-qua",
    name: "Rượu Sâm Ngọc Linh Hộp Quà",
    image: "/images/products/product-2.png",
    price: "1.250.000đ",
  },
  {
    slug: "combo-ruou-sam-bieu-tang",
    name: "Combo Rượu Sâm Biếu Tặng",
    image: "/images/products/product-3.png",
    price: "Liên hệ",
  },
];

export const wineGuideItems: string[] = [
  "Dùng lượng vừa phải trong bữa ăn hoặc những dịp tiếp khách phù hợp.",
  "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.",
  "Đậy kín sau khi mở nắp để giữ hương vị và chất lượng sản phẩm.",
  "Không sử dụng cho người dưới 18 tuổi, phụ nữ mang thai hoặc người cần kiêng rượu.",
];
