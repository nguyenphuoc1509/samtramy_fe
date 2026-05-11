import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  rewrites() {
    return [
      {
        source: "/san-pham",
        destination: "/products",
      },
      {
        source: "/san-pham/:slug",
        destination: "/products/:slug",
      },
      {
        source: "/tin-tuc",
        destination: "/blogs",
      },
      {
        source: "/tin-tuc/bai-viet/:slug",
        destination: "/blogs/:slug",
      },
      {
        source: "/gioi-thieu",
        destination: "/about",
      },
      {
        source: "/lien-he",
        destination: "/contact",
      },
      {
        source: "/gio-hang",
        destination: "/cart",
      },
      {
        source: "/thanh-toan",
        destination: "/checkout",
      },
      {
        source: "/qua-tang",
        destination: "/gifts",
      },
      {
        source: "/thong-tin-ca-nhan",
        destination: "/profile",
      },
      {
        source: "/ruou-samtramy",
        destination: "/wine",
      },
      {
        source: "/san-pham-tieu-dung",
        destination: "/distribution",
      },
    ];
  },
};

export default nextConfig;
