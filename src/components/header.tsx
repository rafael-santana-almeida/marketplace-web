import { ChartHistogramIcon, PackageIcon, PlusSignIcon } from 'hugeicons-react'
import { Link } from 'react-router-dom'

import logoImage from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b-[1px] border-shape px-5 py-2.5">
      <img src={logoImage} alt="" />

      <nav className="flex gap-2">
        <Button className="h-10 bg-shape text-orange-base hover:text-white">
          <ChartHistogramIcon />
          Dashboard
        </Button>

        <Button
          asChild
          className="h-10 bg-transparent font-normal text-customGray-300 hover:bg-transparent hover:text-customGray-300"
        >
          <Link to="products">
            <PackageIcon />
            Produtos
          </Link>
        </Button>
      </nav>

      <div className="flex items-center gap-4">
        <Button className="h-10" asChild>
          <Link to="new-product">
            <PlusSignIcon />
            Novo produto
          </Link>
        </Button>

        <img
          className="h-12 w-12"
          src="https://github.com/maykbrito.png"
          alt=""
        />
      </div>
    </header>
  )
}
