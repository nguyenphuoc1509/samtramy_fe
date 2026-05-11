import type { Metadata } from "next";
import WineLandingClient from "./WineLandingClient";

export const metadata: Metadata = {
  title: "Rượu Sâm Ngọc Linh | Samtramy",
  description:
    "Rượu Sâm Ngọc Linh Samtramy - dòng rượu cao cấp phù hợp làm quà biếu, tiếp khách, gặp gỡ đối tác và trưng bày trong những dịp quan trọng.",
  alternates: {
    canonical: "/ruou-sam-ngoc-linh",
  },
  openGraph: {
    title: "Rượu Sâm Ngọc Linh | Samtramy",
    description:
      "Tinh hoa Trà My trong từng giọt rượu quý. Tư vấn combo quà biếu và chính sách mua số lượng.",
    url: "/ruou-sam-ngoc-linh",
  },
};

export default function GinsengWineLandingPage() {
  return <WineLandingClient />;
}
