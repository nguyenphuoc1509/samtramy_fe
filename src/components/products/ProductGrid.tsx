import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  price: string;
  oldPrice?: string;
};

type ProductGridProps = {
  products: Product[];
  cols?: 3 | 4;
};

export default function ProductGrid({ products, cols = 4 }: ProductGridProps) {
  return (
    <div
      className={`
         grid grid-cols-1 gap-5
        sm:grid-cols-2
        ${cols === 3 ? "md:grid-cols-3" : "lg:grid-cols-4"}
      `}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          slug={product.slug}
          name={product.name}
          category={product.category}
          image={product.image}
          price={product.price}
          oldPrice={product.oldPrice}
        />
      ))}
    </div>
  );
}