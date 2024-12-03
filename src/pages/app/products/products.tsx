import { ProductFilter } from './product-filter'
import { ProductList } from './product-list'

export function Products() {
  return (
    <div className="my-16 flex flex-col gap-10">
      <header>
        <h1 className="font-title text-2xl font-bold leading-[1.2] text-customGray-500">
          Seus produtos
        </h1>
        <span className="font-text text-sm font-normal leading-[1.2] text-customGray-300">
          Acesse gerencie a sua lista de produtos à venda
        </span>
      </header>

      <div className="grid grid-cols-[327px_1fr] gap-6">
        <ProductFilter />
        <ProductList />
      </div>
    </div>
  )
}
