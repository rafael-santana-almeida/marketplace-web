import backgroundImage from '@/assets/background.png'
import logoImage from '@/assets/logo-marketplace.svg'

export function Banner() {
  return (
    <div>
      <img
        className="m-10"
        src={logoImage}
        alt="Marketplace | Painel de Vendedor"
      />

      <img src={backgroundImage} className="w-full" alt="" />
    </div>
  )
}
