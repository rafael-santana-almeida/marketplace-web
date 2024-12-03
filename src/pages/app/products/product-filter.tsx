import { Cancel01Icon, SaleTag01Icon, Search01Icon } from 'hugeicons-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ProductFilter() {
  return (
    <aside className="flex h-[306px] flex-col gap-6 rounded-[20px] bg-white p-6">
      <h2 className="font-title text-lg font-bold leading-[1.2] text-customGray-300">
        Filtrar
      </h2>

      <form className="flex flex-col">
        <div className="group relative">
          <Input
            className="peer pl-[34px] group-focus-within:caret-orange-base"
            placeholder="Pesquisar"
          />
          <Search01Icon className="absolute left-[2px] top-1/2 -translate-y-1/2 transform text-customGray-200 group-focus-within:text-orange-base peer-[:not(:placeholder-shown)]:text-orange-base" />
        </div>

        <div className="group relative mt-5">
          <Select>
            <SelectTrigger className="peer relative pl-[34px] text-customGray-200">
              <SelectValue placeholder="Status" />

              <div className="absolute right-10 flex h-6 w-6 items-center justify-center rounded-full bg-shape">
                <Cancel01Icon className="h-4 w-4 text-customGray-300" />
              </div>
            </SelectTrigger>
            <SelectContent className="rounded-lg">
              <SelectItem value="announced">Anunciado</SelectItem>
              <SelectItem value="sold">Vendido</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
          <SaleTag01Icon className="absolute left-[2px] top-1/2 -translate-y-1/2 transform text-customGray-200 group-focus-within:text-orange-base peer-[:not(:placeholder-shown)]:text-orange-base" />
        </div>

        <Button className="mt-10">Aplicar filtro</Button>
      </form>
    </aside>
  )
}
