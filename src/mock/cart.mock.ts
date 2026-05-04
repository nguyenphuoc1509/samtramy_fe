export type CartItem = {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
  category: string;
};

export const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Rượu WHISKY Sâm Ngọc Linh 500ml",
    slug: "ruou-whisky-sam-ngoc-linh-500ml",
    image: "/images/products/product-1.png",
    price: 1050000,
    quantity: 2,
    category: "Rượu",
  },
  {
    id: "2",
    name: "Trà sâm Ngọc Linh túi lọc",
    slug: "tra-sam-ngoc-linh-tui-loc",
    image: "/images/products/product-4.png",
    price: 850000,
    quantity: 1,
    category: "Trà",
  },
  {
    id: "3",
    name: "Hộp quà Sâm Ngọc Linh cao cấp",
    slug: "hop-qua-sam-ngoc-linh-cao-cap",
    image: "/images/products/product-1.png",
    price: 1250000,
    quantity: 1,
    category: "Quà biếu",
  },
];

export const freeShippingThreshold = 2000000;
