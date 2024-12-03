import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
  ViewIcon,
} from 'hugeicons-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignIn() {
  return (
    <>
      <div>
        <header className="flex flex-col gap-2">
          <h1 className="font-title text-2xl font-bold leading-[1.2] text-customGray-500">
            Acesse sua conta
          </h1>
          <span className="font-text text-sm leading-[1.2] text-customGray-300">
            Informe seu e-mail e senha para entrar
          </span>
        </header>

        <form className="mt-12 flex flex-col">
          <div className="group relative">
            <Label
              className="font-text text-xs font-medium uppercase leading-[1.2] text-customGray-300 group-focus-within:text-orange-base"
              htmlFor="email"
            >
              E-mail
            </Label>

            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Seu e-mail cadastrado"
                className="peer pl-[34px] group-focus-within:caret-orange-base"
              />
              <Mail02Icon className="absolute left-[2px] top-1/2 -translate-y-1/2 transform text-customGray-200 group-focus-within:text-orange-base peer-[:not(:placeholder-shown)]:text-orange-base" />
            </div>
          </div>

          <div className="group relative mt-5">
            <Label
              className="font-text text-xs font-medium uppercase leading-[1.2] text-customGray-300 group-focus-within:text-orange-base"
              htmlFor="password"
            >
              Senha
            </Label>

            <div className="relative">
              <Input
                id="password"
                placeholder="Sua senha de acesso"
                className="peer pl-[34px] group-focus-within:caret-orange-base"
                type="password"
              />
              <AccessIcon className="absolute left-[2px] top-1/2 -translate-y-1/2 transform text-customGray-200 group-focus-within:text-orange-base peer-[:not(:placeholder-shown)]:text-orange-base" />
              <ViewIcon className="absolute right-[2px] top-1/2 -translate-y-1/2 transform text-customGray-200" />
            </div>
          </div>

          <Button className="mt-12 flex justify-between leading-[1.2]">
            Acessar
            <ArrowRight02Icon />
          </Button>
        </form>
      </div>

      <footer className="mt-auto flex flex-col gap-5">
        <span className="font-text text-base font-normal leading-[1.2] text-customGray-300">
          Ainda não tem uma conta?
        </span>
        <Button
          variant="outline"
          asChild
          className="flex justify-between font-text leading-[1.2]"
        >
          <Link to="/sign-up">
            Cadastrar
            <ArrowRight02Icon />
          </Link>
        </Button>
      </footer>
    </>
  )
}
