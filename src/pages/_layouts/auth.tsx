import { Outlet } from 'react-router-dom'

import { Banner } from '@/components/banner'

export function AuthLayout() {
  return (
    <div className="grid-cols-auth mx-auto grid h-screen w-full max-w-[1366px] overflow-hidden">
      <Banner />

      <div className="scrollbar-none m-6 flex flex-col justify-between overflow-y-auto rounded-[32px] bg-white px-20 py-[72px]">
        <Outlet />
      </div>
    </div>
  )
}
