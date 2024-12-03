import imageTest from '@/assets/example.jpg'

export function ProductCard() {
  return (
    <div className="h-[250px] rounded-[20px] bg-white p-1">
      <div className="relative">
        <img
          src={imageTest}
          alt=""
          className="h-36 w-full rounded-2xl object-cover"
        />

        <div className="absolute right-2 top-2 flex gap-1">
          <span className="rounded-full bg-blue-dark px-2 py-1 font-text text-[10px] font-medium uppercase leading-[1.2] text-white">
            Anunciado
          </span>
          <span className="rounded-full bg-customGray-400 px-2 py-1 font-text text-[10px] font-medium uppercase leading-[1.2] text-white">
            Móvel
          </span>
        </div>
      </div>

      <div className="mt-1 flex flex-col gap-1 p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-text text-base font-semibold leading-[1.2] text-customGray-400">
            Sofá
          </h3>
          <div className="flex items-end gap-1">
            <span className="pb-0.5 font-text text-xs font-medium uppercase leading-[1.2] text-customGray-500">
              R$
            </span>
            <span className="font-title text-lg font-bold leading-[1.2] text-customGray-500">
              1.200,90
            </span>
          </div>
        </div>
        <span className="line-clamp-2 w-full overflow-hidden text-ellipsis font-text text-sm text-customGray-300">
          Sofá revestido em couro legítimo, com estrutura em madeira maciça e
          pés em metal cromado
        </span>
      </div>
    </div>
  )
}
