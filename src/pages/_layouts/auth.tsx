import { Outlet } from 'react-router-dom'

import backgroundImage from '@/assets/background.png'
import logoImage from '@/assets/logo.svg'

export function AuthLayout() {
  return (
    <div className="grid-cols-auth mx-auto grid min-h-screen w-full max-w-[1366px]">
      <div>
        <img
          className="m-10"
          src={logoImage}
          alt="Marketplace | Painel de Vendedor"
        />

        <img src={backgroundImage} className="w-full" alt="" />
      </div>

      <div className="m-6 flex flex-col justify-between rounded-[32px] bg-white px-20 py-[72px]">
        <Outlet />
      </div>
    </div>
  )
}
