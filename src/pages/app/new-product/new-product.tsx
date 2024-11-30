import { Cancel01Icon, ImageDownload02Icon } from 'hugeicons-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export function NewProduct() {
  return (
    <div className="gap-40 pt-16">
      <header>
        <h1 className="text-customGray-500 font-title text-2xl font-bold leading-[1.2]">
          Novo produto
        </h1>
        <span className="text-customGray-300 font-text text-sm font-normal leading-[1.2]">
          Cadastre um produto para venda no marketplace
        </span>
      </header>

      <form className="mt-10 flex items-start gap-6">
        <label
          htmlFor="product-image"
          className="bg-shape flex h-[340px] w-[415px] flex-col items-center justify-center gap-4 rounded-[20px] rounded-xl"
        >
          <ImageDownload02Icon className="text-orange-base h-10 w-10" />

          <span className="text-customGray-300 font-text w-40 text-center text-sm font-normal leading-[1.2]">
            Selecione a imagem do produto
          </span>

          <input id="product-image" type="file" className="hidden" />
        </label>

        <main className="flex-1 rounded-[20px] bg-white p-8">
          <h2 className="text-customGray-300 font-title text-lg font-bold leading-[1.2]">
            Dados do produto
          </h2>

          <div className="mt-8 grid grid-cols-3 gap-5">
            <div className="group col-span-2">
              <Label
                className="font-text text-customGray-300 group-focus-within:text-orange-base text-xs font-medium uppercase leading-[1.2]"
                htmlFor="name"
              >
                Título
              </Label>

              <Input
                id="name"
                placeholder="Nome do produto"
                className="group-focus-within:caret-orange-base pl-0"
              />
            </div>

            <div className="group">
              <Label
                className="font-text text-customGray-300 group-focus-within:text-orange-base text-xs font-medium uppercase leading-[1.2]"
                htmlFor="price"
              >
                Valor
              </Label>

              <div className="relative">
                <Input
                  id="price"
                  type="number"
                  placeholder="0,00"
                  className="group-focus-within:caret-orange-base peer pl-6"
                />

                <span className="text-customGray-400 font-text peer-[:not(:placeholder-shown)]:text-orange-base absolute top-1/2 -translate-y-1/2 transform text-base">
                  R$
                </span>
              </div>
            </div>
          </div>

          <div className="group mt-5">
            <Label
              htmlFor="description"
              className="font-text text-customGray-300 group-focus-within:text-orange-base text-xs font-medium uppercase leading-[1.2]"
            >
              Descrição
            </Label>

            <Textarea
              id="description"
              className="group-focus-within:caret-orange-base h-24"
              placeholder="Escreva detalhes sobre o produto, tamanho, características"
            />
          </div>

          <div className="group mt-5">
            <Label className="font-text text-customGray-300 group-focus-within:text-orange-base text-xs font-medium uppercase leading-[1.2]">
              Categoria
            </Label>

            <Select>
              <SelectTrigger className="text-customGray-200 relative">
                <SelectValue placeholder="Selecione" />

                <div className="bg-shape absolute right-10 flex h-6 w-6 items-center justify-center rounded-full">
                  <Cancel01Icon className="text-customGray-300 h-4 w-4" />
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-lg">
                <SelectItem value="toy">Brinquedo</SelectItem>
                <SelectItem value="mobile">Móvel</SelectItem>
                <SelectItem value="stationery">Papelaria</SelectItem>
                <SelectItem value="health-and-beaulty">
                  Saúde & Beleza
                </SelectItem>
                <SelectItem value="utensil">Utensílio</SelectItem>
                <SelectItem value="clothing">Vestuário</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <footer className="mt-10 flex gap-3">
            <Button
              variant="outline"
              className="font-text flex h-12 flex-1 justify-center text-base leading-[1.2]"
            >
              Cancelar
            </Button>
            <Button className="font-text flex h-12 flex-1 justify-center text-base leading-[1.2]">
              Salvar e publicar
            </Button>
          </footer>
        </main>
      </form>
    </div>
  )
}
