import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardList,
  Handshake,
  LineChart,
  MapPin,
  PackageCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Users,
  LucideIcon,
} from "lucide-react";

export const heroProducts = [
  "/images/products/product-1.png",
  "/images/products/product-2.png",
  "/images/products/product-3.png",
];

export const supplierValues: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Sparkles,
    title: "Danh mục có câu chuyện bán hàng",
    description:
      "Sản phẩm gắn với Sâm Ngọc Linh và vùng Trà My, giúp đối tác dễ tư vấn, dễ kể câu chuyện và tạo sự khác biệt tại điểm bán.",
  },
  {
    icon: PackageCheck,
    title: "Bao bì chỉn chu, dễ trưng bày",
    description:
      "Thiết kế sản phẩm phù hợp đặt tại cửa hàng đặc sản, thực phẩm sạch, shop quà biếu, siêu thị mini và kênh bán lẻ cao cấp.",
  },
  {
    icon: Store,
    title: "Phù hợp nhiều mô hình kinh doanh",
    description:
      "Danh mục có thể khai thác tại đại lý bán lẻ, nhà phân phối, cửa hàng sức khỏe, kênh GT, Horeca và shop quà biếu.",
  },
  {
    icon: ClipboardList,
    title: "Chính sách nhập hàng linh hoạt",
    description:
      "Đối tác có thể bắt đầu với danh mục phù hợp quy mô cửa hàng, sau đó mở rộng theo tốc độ bán ra và nhu cầu thị trường.",
  },
  {
    icon: Users,
    title: "Hỗ trợ tư vấn và bán hàng",
    description:
      "Samtramy đồng hành trong việc giới thiệu sản phẩm, định hướng trưng bày, xây combo và tư vấn nhóm sản phẩm mũi nhọn.",
  },
  {
    icon: LineChart,
    title: "Định hướng hợp tác lâu dài",
    description:
      "Không chỉ cung cấp hàng hóa, Samtramy hướng đến cùng đối tác xây dựng doanh số, tăng tần suất nhập hàng và phát triển khách hàng trung thành.",
  },
];

export const partnerBenefits = [
  "Tư vấn danh mục nhập hàng theo mô hình kinh doanh.",
  "Gợi ý sản phẩm mũi nhọn để bắt đầu khai thác.",
  "Hỗ trợ hình ảnh và nội dung giới thiệu sản phẩm.",
  "Hỗ trợ định hướng trưng bày tại điểm bán.",
  "Gợi ý combo bán hàng, quà biếu và sản phẩm bán kèm.",
  "Đồng hành theo dõi bán ra và đề xuất tái nhập.",
];

export const businessScenarios = [
  {
    title: "Cửa hàng dễ bắt đầu với danh mục nhập thử",
    image: "/images/ngoc-linh/ngoc-linh-valley.jpg",
    description:
      "Đối tác có thể bắt đầu bằng nhóm sản phẩm phù hợp quy mô cửa hàng, sau đó mở rộng theo tốc độ bán ra thực tế.",
  },
  {
    title: "Điểm bán có câu chuyện để tư vấn",
    image: "/images/ngoc-linh/sam-ngoc-linh-1.jpg",
    description:
      "Sản phẩm gắn với Sâm Ngọc Linh và vùng Trà My giúp nhân viên bán hàng dễ giới thiệu, dễ tạo niềm tin với khách.",
  },
  {
    title: "Dễ xây combo và trưng bày theo mùa vụ",
    image: "/images/ngoc-linh/sam-ngoc-linh-forest.jpg",
    description:
      "Danh mục phù hợp để xây combo quà biếu, combo dùng thử hoặc nhóm sản phẩm bán kèm theo từng giai đoạn.",
  },
];

export const productCategories = [
  {
    title: "Nước sâm",
    image: "/images/products/product-1.png",
    role: "Sản phẩm dễ tiếp cận, phù hợp bán lẻ, dùng thử và mua lặp lại.",
    channels: "GT, siêu thị mini, cửa hàng thực phẩm sạch, cửa hàng tiện lợi.",
  },
  {
    title: "Trà sâm",
    image: "/images/products/product-2.png",
    role: "Phù hợp nhóm khách quan tâm chăm sóc sức khỏe hằng ngày.",
    channels: "Cửa hàng đặc sản, cửa hàng sức khỏe, quà biếu, kênh online.",
  },
  {
    title: "Yến sâm",
    image: "/images/products/product-3.png",
    role: "Dòng sản phẩm giá trị cao, dễ tư vấn cho nhóm khách hàng quà biếu.",
    channels: "Shop quà biếu, cửa hàng cao cấp, đại lý sức khỏe.",
  },
  {
    title: "Thạch sâm",
    image: "/images/products/product-4.png",
    role: "Sản phẩm tiêu dùng tiện lợi, dễ trưng bày và phù hợp mua thử.",
    channels: "Cửa hàng bán lẻ, quầy thanh toán, kênh tiêu dùng nhanh.",
  },
  {
    title: "Combo quà biếu",
    image: "/images/products/product-1.png",
    role: "Dễ xây gói quà theo mùa vụ, lễ Tết, khách doanh nghiệp và đối tác.",
    channels: "Shop quà biếu, cửa hàng đặc sản, kênh doanh nghiệp.",
  },
  {
    title: "Sản phẩm giá trị cao",
    image: "/images/products/product-2.png",
    role: "Phù hợp làm sản phẩm chủ lực để nâng giá trị đơn hàng.",
    channels: "Đại lý trọng điểm, cửa hàng cao cấp, kênh Horeca chọn lọc.",
  },
];

export const partnerTypes: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Building2,
    title: "Nhà phân phối khu vực",
    description:
      "Phù hợp đối tác muốn phát triển độ phủ sản phẩm tại khu vực kinh doanh.",
  },
  {
    icon: Store,
    title: "Đại lý bán lẻ",
    description:
      "Bổ sung danh mục sản phẩm có câu chuyện, dễ trưng bày và dễ tư vấn.",
  },
  {
    icon: BadgeCheck,
    title: "Cửa hàng đặc sản",
    description:
      "Khai thác nhóm sản phẩm bản địa, quà biếu và sản phẩm sức khỏe.",
  },
  {
    icon: ShieldCheck,
    title: "Cửa hàng thực phẩm sạch",
    description:
      "Mở rộng nhóm sản phẩm tiêu dùng cao cấp, nguồn gốc rõ ràng.",
  },
  {
    icon: Sparkles,
    title: "Shop quà biếu",
    description: "Dễ xây combo, gói quà và tư vấn cho khách mua tặng.",
  },
  {
    icon: Boxes,
    title: "Siêu thị mini",
    description:
      "Phù hợp nhóm sản phẩm dễ mua, dễ dùng thử và có khả năng mua lặp lại.",
  },
  {
    icon: Users,
    title: "Cửa hàng sức khỏe",
    description:
      "Tăng thêm danh mục sản phẩm chăm sóc sức khỏe từ Sâm Ngọc Linh.",
  },
  {
    icon: Truck,
    title: "Kênh GT / Horeca",
    description:
      "Khai thác linh hoạt theo điểm bán, khu vực và nhóm khách hàng mục tiêu.",
  },
];

export const policies = [
  {
    type: "Đại lý nhập thử",
    suitable: "Cửa hàng mới bắt đầu hoặc muốn thử nhóm sản phẩm mới.",
    support:
      "Tư vấn danh mục nhập thử, hình ảnh sản phẩm, nội dung giới thiệu và hướng dẫn tư vấn cơ bản.",
  },
  {
    type: "Đại lý trọng điểm",
    suitable:
      "Cửa hàng có bán định kỳ, có tệp khách phù hợp và muốn mở rộng doanh số.",
    support:
      "Chính sách nhập tốt hơn, hỗ trợ trưng bày, gợi ý combo và định hướng bán hàng theo mùa vụ.",
  },
  {
    type: "Nhà phân phối",
    suitable:
      "Đối tác có năng lực phát triển khu vực, mở điểm bán hoặc khai thác hệ thống khách hàng sẵn có.",
    support:
      "Chính sách riêng theo sản lượng, tư vấn danh mục khu vực và đồng hành phát triển độ phủ.",
  },
];

export const tradeSupports = [
  {
    title: "Trưng bày đẹp hơn",
    description:
      "Gợi ý layout kệ, cách đặt nhóm sản phẩm và vật phẩm hỗ trợ để điểm bán nhìn chuyên nghiệp hơn.",
  },
  {
    title: "Tư vấn dễ hơn",
    description:
      "Cung cấp câu chuyện sản phẩm, điểm bán hàng chính và cách giới thiệu dễ hiểu cho nhân viên bán hàng.",
  },
  {
    title: "Bán combo tốt hơn",
    description:
      "Gợi ý combo theo mùa vụ, quà biếu, dùng thử hoặc bán kèm để tăng giá trị đơn hàng.",
  },
  {
    title: "Tái nhập đều hơn",
    description:
      "Đồng hành theo dõi bán ra, nhắc tái nhập và đề xuất danh mục phù hợp theo tốc độ tiêu thụ.",
  },
];

export const cooperationSteps = [
  {
    step: "01",
    title: "Đăng ký thông tin",
    description:
      "Đối tác để lại thông tin cửa hàng, khu vực kinh doanh và nhóm sản phẩm quan tâm.",
  },
  {
    step: "02",
    title: "Tư vấn danh mục",
    description:
      "Samtramy tư vấn nhóm sản phẩm phù hợp với mô hình kinh doanh và tệp khách hàng.",
  },
  {
    step: "03",
    title: "Gửi chính sách",
    description:
      "Đối tác nhận bảng giá, chính sách nhập hàng và phương án hỗ trợ bán hàng.",
  },
  {
    step: "04",
    title: "Nhập hàng & bán ra",
    description:
      "Samtramy đồng hành hỗ trợ hình ảnh, trưng bày, tư vấn và theo dõi tái nhập.",
  },
];
