import { ProductCard } from './product-card'

export function ProductList() {
  return (
    <main className="grid grid-cols-2 gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </main>
  )
}
